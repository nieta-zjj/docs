---
title: "vLLM 内存泄漏排查"

发布日期: "2026-01-21"
原文链接: "https://mistral.ai/news/debugging-memory-leak-in-vllm"
---

## 摘要

### 1) 一句话总结
Mistral AI 团队通过综合使用 pmap、BPFtrace 和 GDB 等底层调试工具，成功定位并修复了 vLLM 分离式服务中因底层通信库 UCX 全局拦截内存分配而导致的堆外内存泄漏问题。

### 2) 关键点
*   **问题现象**：在启用图编译的 Prefill/Decode 分离式服务测试中，Decode 端出现内存泄漏，系统内存以 400 MB/分钟的速度线性增长，最终导致 OOM（内存不足）。
*   **初步排查**：常规 Python 内存工具（Memray, Guppy 3）未发现异常；Heaptrack 分析显示堆内存稳定，但峰值常驻内存（RSS）存在差异，确认泄漏发生在堆外（匿名内存映射）。
*   **内存监控**：通过 `pmap` 命令监控 `/proc/<pid>/maps`，观察到部分匿名内存映射的起始地址不断变化且体积持续膨胀。
*   **系统调用追踪**：使用 BPFtrace 脚本追踪内核事件，发现泄漏源于直接调用 glibc 底层系统调用包装器（`syscall+29`）的 `mmap` 操作，该操作绕过了常规的 `LD_PRELOAD` 钩子。
*   **GDB 自动化定位**：通过在 GDB 中对特定 `syscall` 地址设置条件断点（仅在 `SYS_mmap` 时触发），成功捕获完整的用户空间堆栈跟踪，发现 Python 在通过 UCX 调用 `munmap` 时异常触发了 `mmap` 分配。
*   **根本原因**：底层通信库 UCX 为优化 InfiniBand 传输，通过修改全局偏移表（GOT）默认拦截了所有 `mmap`/`munmap` 调用。在执行 `munmap` 时，UCX 未立即释放内存，而是将其放入失效队列；由于特定边缘情况下未触发清理逻辑，导致队列无限增长并不断申请新内存。
*   **解决方案**：通过设置环境变量 `UCX_MEM_MMAP_HOOK_MODE=none` 完全禁用 UCX 的内存挂钩机制。由于 vLLM 仅需为 KV Cache Manager 注册一次连续大内存，此方案既安全又不会降低性能。相关修复已合并至 vLLM 官方仓库。

### 3) 风险/缺陷
*   **全局挂钩机制的隐蔽性**：UCX 默认在运行时修改全局偏移表（GOT）以拦截所有 `mmap` 调用，这种做法会绕过常规的内存追踪工具（如基于 `LD_PRELOAD` 的钩子），并在检测到 Valgrind 时自动禁用，极大增加了底层调试的难度。
*   **默认配置风险**：UCX 内存池的失效队列默认未释放内存上限（`UCX_RCACHE_MAX_UNRELEASED`）被设置为无穷大（`inf`），在未正确触发 `ucp_worker_progress()` 清理函数时，必然导致内存无限累积。
*   **优化带来的调试障碍**：底层依赖库（如经过高度优化的 Python 包）通常为了微小的性能提升而禁用帧指针（frame pointers），导致在发生系统级问题时，标准工具无法直接获取完整的调用堆栈。

## 正文

几个月前，我们的团队调查了 vLLM 中疑似内存泄漏的问题。起初，我们以为这个问题很容易被发现，可能只局限于代码库的上层。但随着调查的深入，情况变得越来越复杂。本文是我们全新“工程深度剖析（Engineering Deep Dive）”系列的开篇之作，我们将在此分享 Mistral AI 是如何应对技术调查并构建解决方案的。

该问题首次出现在我们使用前沿模型之一进行分离式服务（disaggregated serving）的生产前测试中。内存使用量在稳步攀升，但仅在特定条件下才会发生：使用 vLLM、我们的 Mistral Medium 3.1 模型，并启用了图编译（graph compilation）。没有任何崩溃或错误，只是在类似生产环境的流量下，系统内存以每分钟 400 MB 的速度缓慢线性增长。几个小时后，这会导致“内存不足（out of memory）”状态。

接下来是一场有条不紊的追踪，从高层 Python 工具开始，一直深入到内核级追踪，直到我们最终揭开真正的根源。以下是我们追踪该问题的过程，以及它揭示了当今软件依赖层中隐藏的风险。

这可不是我们希望在 Grafana 上看到的上升趋势图

## 玩捉迷藏的内存泄漏。

最初，我们的方法遵循标准的故障排除路径：我们试图通过在较小的模型上复现该问题（激活较少的生产优化）来隔离泄漏源。但在尝试了不同的设置和模型后，我们无法在其他配置上复现该问题。该错误仅存在于使用 NIXL 的 Prefill/Decode 分离式设置中。

鉴于 Prefill/Decode (P/D) 分离在我们的故事中扮演的核心角色，让我们向您介绍这种推理设置工作原理的高层机制。P/D 分离将查询的处理分为两个阶段，由不同的实例处理：

- 首先，路由器向 prefill vLLM 实例发送一个“prefill 请求”（通过设置 `max_tokens=1` 并设置一个空的 KV 传输元数据集合），以计算该请求的 KVCache。

- 完成后，路由器将 KVCache 元数据连同“decode 请求”一起传输给 decode vLLM 实例。

- KVCache 传输通过 NIXL 发起，token 生成在 decode vLLM 实例上进行，通过使用并扩展传输过来的 KVCache 来实现。

泄漏仅在这种分离式设置的 decode 端观察到，这强烈表明通过 NIXL 进行的 KV Cache 传输是泄漏的根本原因。在我们的设置中，NIXL 依赖于 UCX (Unified Communication X)，这是一个专为分布式系统中的数据交换而设计的高性能通信库。UCX 能够在一系列广泛的技术上实现优化的数据传输，包括 Infiniband，这是一种常用于 HPC 和数据中心的低延迟、高吞吐量互连技术。

P/D 分离式服务部署概览。

在接下来的调查中，我们在此设置下工作，并从 Python 内存分析工具开始，以查明泄漏的源头。

我们尝试了 Memray 和 Guppy 3，但都没有显示出泄漏，它们让我们观察到的一切都很正常。尝试使用 GDB 会导致整个进程崩溃。我们的 vLLM 设置对于 Valgrind 这样的工具来说也太重了，导致其运行极其缓慢，甚至无法使用。

很明显，我们需要一个更强大的工具来追踪泄漏。但在投入更多时间之前，我们决定确保其他人也能复现这种泄漏。我们通过在他们的 GitHub 仓库上提交 issue 联系了 vLLM 团队，这帮助我们确认了我们并不是唯一遇到此问题的人，因此有必要进行更深入的调查。

## 使用 Heaptrack 统计 malloc 和 free。

为了更好地追踪发生的情况，我们求助于 Heaptrack：这是一个内存分析器，它会覆盖诸如 `malloc` 或 `free` 之类的内存操作，并将这些事件与堆栈跟踪一起记录下来。

Heaptrack 的创建者 Millian Wolf 写了一篇出色的入门博客文章，可以帮助您开始使用该工具。这是一个两步过程：首先在启用追踪的情况下运行程序，然后解释数据转储。

为了追踪局限于 vLLM worker 进程中的分配，我们通过 vLLM 将 `LD_PRELOAD` 设置为 `libheaptrack_preload.so`，以确保该库在任何其他库之前加载，并覆盖内存分配函数的行为，从而为我们提供数据转储。

然后，我们能够通过 `heaptrack_interpret` 可视化这些数据：

Heaptrack 提供了所有堆分配的详细交互式图表，精确到函数级别。我们可以追踪每一个 `malloc` 和 `free`，并清晰地看到内存使用的明细。

使用 Heaptrack 显示的 vLLM worker 的内存使用情况

此时，人们可能会问：内存泄漏在哪里？确实，唯一可见的内存增长是由于 NIXL 的延迟初始化（lazy initialization）引起的。

为了验证泄漏确实发生在此设置中，我们运行了一个 vLLM 基准测试，并使用 `heaptrack_interpret` 创建了两个 Heaptrack 快照：一个在开始时，一个在接近结束时。尽管堆内存本身保持稳定，但**峰值常驻内存（RSS）**（我们将在下一节中介绍）在两个快照之间存在差异。这种差异在 Heaptrack 的摘要选项卡中清晰可见。

Heaptrack 中的峰值 RSS 差异：基准测试之前 (1) 和之后 (2)

这意味着泄漏发生在堆之外，因此不属于 Heaptrack 分析的内存范围。我们需要更换工具来追踪堆外的分配。

## 堆之外：理解常驻内存和系统分配。

要理解为什么 Heaptrack 无法检测到泄漏，我们首先需要澄清常驻集大小（Resident Set Size, RSS）实际上包含什么。RSS 代表进程保存在 RAM 中的内存部分，它包含的不仅仅是堆。具体来说，它包括：

- **堆（heap）** 传统上使用旧的 `sbrk` 和 `brk` 系统调用进行管理，这些调用会调整或设置程序的 break 地址，即标记堆段末尾的指针。

- **栈（stack）**，用于存储局部变量和函数调用帧。

- **匿名内存映射（Anonymous memory mappings）**，这些是直接通过 `mmap` 系统调用分配的内存区域，没有文件支持。它们通常被自定义分配器或 `malloc` 用于分配较大的内存块。匿名映射的地址通常位于**堆地址空间和栈地址空间之间**，这个区域被称为**内存映射段（memory mapping segment）**。

虽然 `malloc` 可以使用 `sbrk` 进行小额分配，但现代实现通常更倾向于使用带有匿名映射的 `mmap`，因为它更灵活，并且允许您分配大页（huge pages，根据您的设置，内存页大小为 2MB 或 1GB）。

Heaptrack 仅挂钩（hook）到 glibc 的 `malloc` 和 `free` 函数。这意味着它可以追踪所有传统的堆以及由 `malloc` 直接分配的匿名映射，但它会遗漏通过直接 `mmap` 调用或 glibc 控制之外的其他系统级机制分配的内存。

幸运的是，在追踪发生的事情时，并非毫无办法。`/proc` 文件系统是 Linux 中的一个特殊文件夹，作为**内核 API**，它暴露了一个虚拟接口来与正在运行的进程进行交互，并提供对进程详细信息的实时访问，例如：

- `/proc/<pid>/fd`，列出进程的所有打开的文件描述符。

- `/proc/<pid>/maps`，显示进程内存区域的详细映射，包括堆、栈、共享库和匿名映射。

- 还有更多（在 `/proc/<pid>/` 中简单执行 `ls` 即可列出可用内容）。

为了继续我们的调查，我们使用了 `pmap` 命令，它读取 `/proc/<pid>/maps` 并以人类可读的格式呈现内存使用情况。我们的目标是追踪内存区域随时间的变化，因此我们运行了：

```bash
while true; do pmap -x <pid> | tail -n +3 | sort -k3 -n -r | head -n 20; sleep 1; clear; done
```

该命令每秒运行一次 `pmap`，以显示指定 PID 的扩展内存信息，跳过标题，并按内存大小对输出进行排序，使我们能够专注于最大的内存区域。

通过这个命令，我们观察到了一个有趣的模式：只有一些匿名内存映射随着时间的推移而增长，并且它们的起始地址在不断变化。随着时间的推移，这些分配的大小变得巨大，而大多数其他分配则根本没有变化。

我们的 pmap 命令列出的内存页，按 RSS 大小排序，很容易发现可疑的分配。橙色圆点突出显示了一个示例。

这种行为是 `mremap` 的特征，这是一个用于调整现有内存区域大小或重新定位现有内存区域而不释放它们的系统调用。与在堆内操作并依赖 glibc 内存管理的 `realloc` 不同，`mremap` 在更底层工作，通常被自定义分配器、库甚至手动内存管理代码用来动态调整内存布局。

这种模式也可能是由于 `munmap` 后跟 `mmap` 的重复循环造成的，其中内存被释放并重新分配，但总使用量继续增长，原因可能是碎片化、自定义分配器中的泄漏或不正确的调整大小逻辑。在我们的案例中，不断变化的地址和不断增长的大小强烈表明内存正在被重新分配，但从未被正确释放。

这是我们的第一个具体迹象，表明泄漏不在堆中，而是在未经正确释放就被调整大小的匿名内存区域中。

## 使用 BPFtrace 追踪泄漏。

我们的调查已将泄漏范围缩小到原始的 `mmap` 或 `mremap` 调用，但我们需要确认是哪一个导致了问题。我们的第一次尝试是使用 `LD_PRELOAD` 配合一个自定义的小型 C 库，该库记录每个 `mmap` 和 `mremap` 调用（因为 Heaptrack 没有这样做），希望能拦截到我们关心的调用。然而，这种方法有局限性：并非所有的 `mmap`/`mremap` 都会经过 glibc。我们的自定义钩子看到了一些分配，但它们与我们在 `pmap` 输出中泄漏的地址不匹配。泄漏的区域仍在增长，未被我们的 `LD_PRELOAD` 钩子追踪到。这表明这些分配是通过手动执行系统调用进行的，或者存在另一种挂钩机制。

为了获得全貌，我们转向了 BPFtrace，这是一个用于实时追踪系统调用和内核事件的工具。它依赖于 Linux 内核的 eBPF 虚拟机，该虚拟机执行附加到追踪点或探针的轻量级、预先验证的字节码，从而实现安全且低开销的分析。BPFtrace 也被一些 Kubernetes 工具用于检测集群中的异常或危险行为，例如未经授权的访问或资源滥用，而这一切都不会危及内核的稳定性。

我们也考虑过使用 `strace`，但它对 `PTRACE` 的依赖使其速度太慢，无法在此阶段有效地分析问题。相反，我们编写了一个 BPFtrace 脚本来记录每个 `mmap` 和 `mremap` 调用及其参数和堆栈跟踪，包括不经过 glibc 的调用。这是我们在 Le Chat 的帮助下编写的脚本：

```c
#include <linux/mm.h>

tracepoint:syscalls:sys_enter_mmap
/pid == $1/
{
    printf("Thread %d called mmap(addr=%p, length=%lu)\n", tid, args->addr, args->len);
    print(ustack);
}

tracepoint:syscalls:sys_enter_munmap
/pid == $1/
{
    printf("Thread %d called munmap(addr=%p, length=%lu)\n", tid, args->addr, args->len);
    print(ustack);
}

tracepoint:syscalls:sys_enter_mremap
/pid == $1/
{
    printf("Thread %d called mremap(addr=%p, old_len=%lu, new_len=%lu)\n", tid, args->addr, args->old_len, args->new_len);
    print(ustack);
}
```

我们以 root 身份运行此脚本，使用以下命令，将 `$pid` 替换为根据 `pmap` 显示正在泄漏的 vLLM worker 进程的 PID：

```bash
sudo bpftrace mmap_trace.bt $pid
```

基本上，这个脚本：

- 追踪进入内核时的 `mmap`、`munmap` 和 `mremap` 系统调用。

- 打印线程 ID、调用类型、请求的地址和长度。

- 打印用户空间堆栈跟踪（BPFtrace 中的 `ustack`）以识别调用的来源。

以下是此脚本的示例输出：

```c
Thread 1234 called mmap(addr=0x0, length=2097152)
        syscall+29
```

BPFtrace 脚本输出的片段。`syscall+29` 很重要。

在这个阶段，让我们综合一下我们收集到的信息：

- `pmap` 向我们展示了可疑增长的分配及其基指针。

- BPFtrace 让我们了解到这些地址是通过 `mmap` 调用获得的，而不是 `mremap`。这让我们感到惊讶，因为对于不断增长的内存分配来说，`mremap` 听起来像是最理想的嫌疑对象。

- 更令人着迷的是，这些调用源自 `syscall+29`，也就是 glibc 的原始系统调用包装器（raw syscall wrapper），它允许用户通过类似 `syscall(SYS_mmap, ...)` 的 API 执行原始系统调用。

这代表了重大进展，但还需要进一步调查。虽然 BPFtrace 向我们展示了系统调用本身的用户堆栈跟踪（其文档中的 `ustack`），但它只给了我们用户调用堆栈的第一个元素，而不是导致分配的完整用户空间上下文。我们可以看到在哪里调用了 `mmap`，但看不到之前的调用者。这些信息对我们来说至关重要，因此我们试图弄清楚为什么我们无法获取它，最初认为这与我们的设置中禁用了帧指针（frame pointers）有关，并决定朝这个方向调查。

作为背景信息，帧指针是一项将函数调用的返回地址存储在寄存器或内存位置的功能，使工具能够重建完整的调用堆栈。历史上，大多数库为了优化而禁用了帧指针，因为它们会增加微小的开销，但现代发行版已开始重新启用它们，因为与调试带来的好处相比，性能提升现在可以忽略不计。

遗憾的是，从 Ubuntu 22.04 LTS 切换到 Ubuntu 24.04 LTS（其原生库启用了帧指针）还不够。这表明罪魁祸首是一个已经过优化且禁用了帧指针的 Python 依赖项。

我们思考了一会儿：哪个 Python 包会绕过通常的标准库调用，进行这种直接的系统调用？在这个阶段，我们有两个潜在的嫌疑对象：

- **UCX (Unified Communication X)**，一个用于加速网络和 RDMA（远程直接内存访问）的高性能通信库。UCX 是 NIXL 的依赖项，而 vLLM 使用 NIXL 进行分离式服务。UCX 以其底层的内存优化（包括自定义内存分配器）而闻名。

- **PyTorch**，它执行自己的内存管理和优化，通常为了性能而绕过标准分配器。PyTorch 的自定义分配和 JIT 编译也可能是导致泄漏的原因。

既然两个嫌疑对象都摆在桌面上，我们需要一种方法来深入挖掘。在这个阶段，我们转而使用 GDB 自动化。

## GDB 自动化来救场。

在调查的早期使用 GDB 是不可行的，原因很简单：GDB 会附加到整个进程。对于 vLLM，将 GDB 附加到主进程会停止所有 worker，从而无法实时观察泄漏。由于泄漏没有导致崩溃，而且由于进程规模庞大，内存转储也不切实际。我们陷入了僵局。

然而，从我们的 BPFtrace 日志中，我们注意到每个泄漏的 `mmap` 调用都源自同一个地址。正如我们在上一节中所说，这个地址并没有直接指向 `mmap`，而是在 glibc 的系统调用瘦包装器（thin-wrapper）内部。这个函数绕过了 glibc 通常的 `mmap` 包装器，这就解释了为什么我们的 `LD_PRELOAD` 钩子之前错过了它。我们尝试使用 `LD_PRELOAD` 来拦截 glibc 的 `syscall`，但奇怪的是它也不起作用……这让我们几乎没有办法动态追踪这些调用。

既然泄漏的调用总是来自同一个 `syscall` 指令，我们可以自动化 GDB，使其仅在命中该特定地址时才中断。我们是这样做的：

- 我们在 `syscall` 地址上设置了一个条件断点，仅当系统调用号匹配 `SYS_mmap` 时才触发。

- 我们在 `mmap` 系统调用退出时暂时中断，以检查返回值（即分配的地址），并打印完整的堆栈跟踪。

- 我们一次性转储了所有可用的上下文：返回地址、调用堆栈以及任何其他相关的寄存器或内存。

- 我们在基准测试期间运行了这个条件脚本几秒钟，并将捕获的返回地址与我们的 `pmap` 监控进行比较，以确认它们是否与已知的泄漏区域匹配。

这是脚本，可以通过 `gdb -x gdb_script.txt` 运行：

```gdb
set pagination off

# Break at the syscall instruction inside glibc's syscall wrapper
# The address 0x7ffff7e1c13d was found via BPFtrace/objdump
break *0x7ffff7e1c13d if $rax == 9  # 9 is SYS_mmap on x86_64

commands
  silent
  # Set a temporary breakpoint at the instruction immediately following the syscall
  # to capture the return value (the allocated address)
  tbreak *0x7ffff7e1c13f
  commands
    silent
    printf "mmap returned: 0x%lx\n", $rax
    # Print the full backtrace to see who initiated the call
    bt
    continue
  end
  continue
end

continue
```

这种方法给我们带来了两大好处：

- 我们在分配的瞬间捕获了完整的用户空间堆栈跟踪，这是 BPFtrace 无法可靠提供的。

- 我们还可以将返回的地址与我们的 `pmap` 输出进行交叉引用，以确认它们是否与泄漏区域匹配。

简而言之，我们将 GDB 变成了一个有针对性的、非侵入式的观察者，仅在发生泄漏时中断，打印我们需要的所有内容，然后让进程继续运行。这终于让我们能够将 `mmap` 调用与我们在 `pmap` 中看到的不断增长的匿名区域联系起来。

```c
#1  0x00007f300821c13f in syscall () from /lib/x86_64-linux-gnu/libc.so.6
#2  0x00007f2f12745307 in ucm_mmap () from /usr/lib/x86_64-linux-gnu/libucm.so.0
#3  0x00007f2f1274384a in ucm_bget_sys_map () from /usr/lib/x86_64-linux-gnu/libucm.so.0
#4  0x00007f2f12743a7b in ucm_bget_sys_alloc () from /usr/lib/x86_64-linux-gnu/libucm.so.0
#5  0x00007f30081a2809 in mmap64 () from /lib/x86_64-linux-gnu/libc.so.6
#6  0x000055722c1d977e in _PyObject_ArenaMmap ()
#7  0x000055722c1d986b in _PyObject_ArenaAlloc ()
#8  0x000055722c1d996e in new_arena ()
```

第一个堆栈跟踪显示 Python（第 #5 行）通过 UCX（第 #4 行）调用 `mmap`，这是出乎意料的，因为在正常情况下，Python 应该直接调用 glibc 的 `mmap`。

更令人困惑的是第二个堆栈跟踪，其中 Python（第 #8 行）通过 UCX（第 #7 行）调用 `munmap`，但不知何故在此过程中触发了 `mmap` 分配（第 #1 行）：

```c
#1  0x00007f300821c13f in syscall () from /lib/x86_64-linux-gnu/libc.so.6
#2  0x00007f2f12745307 in ucm_mmap () from /usr/lib/x86_64-linux-gnu/libucm.so.0
#3  0x00007f2f1274384a in ucm_bget_sys_map () from /usr/lib/x86_64-linux-gnu/libucm.so.0
#4  0x00007f2f12743a7b in ucm_bget_sys_alloc () from /usr/lib/x86_64-linux-gnu/libucm.so.0
#5  0x00007f2f12744033 in ucm_bget_get_with_expand () from /usr/lib/x86_64-linux-gnu/libucm.so.0
#6  0x00007f2f12744211 in ucm_bget () from /usr/lib/x86_64-linux-gnu/libucm.so.0
#7  0x00007f2f1274542d in ucm_munmap () from /usr/lib/x86_64-linux-gnu/libucm.so.0
#8  0x00007f30081a289b in munmap () from /lib/x86_64-linux-gnu/libc.so.6
#9  0x000055722c1d97b9 in _PyObject_ArenaMunmap ()
#10 0x000055722c1d988b in _PyObject_ArenaFree ()
```

这是出乎意料的，因为 `munmap` 旨在释放内存，而不是分配内存。在 UCM（UCX 的内存管理模块）内的 `munmap` 操作期间看到 `mmap` 调用，表明 UCX 的内存池管理出了问题。

## 确认 UCX 内存钩子的作用。

我们与 vLLM 团队分享了这些发现，他们帮助验证并完善了我们对该问题的理解。我们共同发现，UCX 使用了一种 `mmap` 挂钩机制来优化 InfiniBand 的内存操作，包括为传输预缓存数据（一项称为注册缓存或 RCache 的功能）。由于需要硬件级别的内存注册，InfiniBand 的内存管理通常非常昂贵。

然而，**该机制默认拦截所有 `mmap` 调用**，而不仅仅是与 UCX 或 InfiniBand 操作相关的调用。这种广泛的拦截解释了为什么我们早期尝试使用基于 `LD_PRELOAD` 的 `mmap` 钩子追踪分配会失败：UCX 动态修补了应用程序用于调用 `mmap` 和 `munmap` 等函数的全局偏移表（Global Offset Table, GOT）条目。这就是为什么它完全绕过了我们早期的钩子。我们还发现，当检测到 Valgrind 时，这种挂钩机制会自动禁用，这本来会阻止我们使用 Valgrind 进行更深入的分析。

GOT 是动态链接器用来解析动态链接库中函数调用的数据结构。当程序启动时，动态链接器会用共享库中函数（如 `mmap`）的实际地址填充 GOT。

在运行时修改 GOT 通常被认为是不好的做法，因为它会引入不稳定性，使调试变得更加困难，并破坏程序的其他部分或库所依赖的假设。但 UCX 这样做是有充分理由的。实际上，UCX 这样做是为了管理其注册缓存（Registration Cache），该缓存跟踪“已注册”（或“已固定”）的内存。这是被固定在原位的内存，确保其虚拟到物理地址的映射保持不变。这允许网络适配器在网络架构和 RAM 之间直接传输数据，而无需 CPU 参与，这对于性能至关重要，但需要小心处理，因为注册内存是一种有限的资源。

## 解决问题。

既然我们知道 `mmap` 挂钩机制在起作用，我们意识到这实际上是个好消息，因为我们可以通过设置环境变量 `UCX_MEM_MMAP_HOOK_MODE=none` 来完全禁用它。它成功地禁用了这种行为，从而解决了内存泄漏问题，且没有影响性能。当通过 RDMA 发送各种内存块时，`mmap` 钩子很有用，但在 vLLM 用例中，我们只需要处理**一个大的、连续的内存区域**：整个 vLLM KVCache Manager 内存。NIXL 只需要为其传输注册一次内存。因此，在 vLLM 用例中，禁用挂钩机制是安全的，并且对分离式服务性能没有负面影响。

在与 UCX 团队讨论后，我们了解到 UCX 在调用 `munmap` 时不会立即释放内存。相反，它会将该区域移动到失效队列中以供稍后清理。此队列由 UCX 的内存池管理，该内存池会根据需要动态扩展以容纳更多条目。结果，内存区域不断累积而未被释放，不断增长的队列需要额外的分配，这就解释了为什么在 `munmap` 操作期间会调用 `mmap`。作为内存泄漏的替代解决方案，设置环境变量 `UCX_RCACHE_MAX_UNRELEASED=1024`（默认值为 `inf`）可以限制队列中未释放内存区域的数量，迫使 UCX 在达到阈值时启动清理。

问题是，这本来就不应该发生。NIXL 和 vLLM 确实调用了 `ucp_worker_progress()` 函数，该函数本应触发内存池清理。为什么在这个特定的边缘情况中没有触发，目前尚不清楚。但这表明将 `UCX_RCACHE_MAX_UNRELEASED` 的默认值设置为无穷大是不正确的。UCX 和 NIXL 团队决定在未来的 NIXL 版本中更改此行为。与此同时，我们在 vLLM 仓库中合并了一个修复程序，以帮助社区避免遇到同样的泄漏问题。

## 调查总结。

调查简述：

- 我们在生产环境中部署我们的前沿模型之一并使用分离式服务时，注意到一个快速增长的内存泄漏。

- 我们试图精简环境并获得一个最小的复现用例。不幸的是，该错误仅在复杂的设置、大型模型并启用分离的情况下才能复现。

- 我们转而使用 Memray、Guppy 3 和 Heaptrack 来分析泄漏。这些工具没有得出任何明显的结果。然而，我们注意到 Heaptrack 指标中有些奇特之处。常驻内存异常大，因此我们决定朝这个方向深入挖掘。

- 利用 `pmap`，我们能够看到不断增长的 RSS 分配及其关联的基指针。

- 我们想获得更多关于谁在进行这些调用的线索。通过一些脚本和使用 BPFtrace，我们发现泄漏源于 `mmap` 调用。尽管我们尽了最大努力，但仍无法收集到完整的堆栈跟踪（这本来可以让我们精确定位罪魁祸首的调用点），但这让我们相信系统调用是由一个经过高度优化的包发出的。

- 感谢收集到的信息，我们能够设置非常具体的 GDB 断点，这些断点仅会被有问题的调用触发。

- 我们发现 UCX 正在执行这些调用。虽然这些调用的目的是合理的：提高 InfiniBand 传输的性能，但它在 RSS 中创建了不断增长的分配，并导致我们好几天无法部署分离式服务。

- 知道了泄漏的源头，解决方法就很容易找到了：设置 `UCX_MEM_MMAP_HOOK_MODE=none` 修复了我们的问题。我们在 vLLM 仓库中讨论了该调查，并为社区合并了一个补丁。

## 我们学到了什么。

现代软件栈建立在层层依赖之上，每一层都增加了复杂性和潜在的故障点。虽然这些抽象极大地提高了程序员的生产力，但它并不能完全使他们免受堆栈底层问题的影响。这就是为什么在调试时必须准备好深入挖掘的原因。然而，在这些环境中这样做很少是直截了当的，特别是当性能优化引入了微妙的边缘情况时。UCX 就是一个很好的例子。它的设计优先考虑性能，但它拦截 `mmap` 调用的方式可能会产生难以追踪的风险。这次经历再次证明了在深度互连的系统中诊断问题是多么具有挑战性。

这次调查也显示了在处理对性能至关重要的依赖项时，透明度和协作的重要性。我们非常感谢与 vLLM、NIXL 和 UCX 团队在确认和解决此行为方面的合作。他们的专业知识对于达成解决方案至关重要，我们期待继续合作。

我们对以下人员在解决此问题方面提供的协助和合作表示感谢：

- Robert Shaw（Red Hat，vLLM 和 llm-d 维护者）

- Will Eaton（Red Hat，vLLM 和 llm-d 维护者）

- Nicolò Lucchesi（Red Hat，vLLM 和 llm-d 维护者）

- Mikhail Brinskii（NVIDIA，NIXL 维护者）

- Leonid Genkin（NVIDIA，UCX 维护者）

- Nathan Bellalou（NVIDIA，UCX 和 NIXL 维护者）

### 我们正在招聘

有兴趣应对这样的挑战吗？加入 Mistral AI，帮助塑造 AI 基础设施的未来。我们一直在寻找才华横溢的工程师和研究人员，共同合作开发前沿项目。

## 分享本文

## 更多来自 Mistral AI 的内容

- 新闻

- 模型

- AI 服务

## AI 的下一章由你书写。

AI 的下一章由你书写。

## 关联主题

- [[00-元语/memory]]
- [[00-元语/bug-fix]]
- [[00-元语/observability]]
- [[00-元语/llmops]]
- [[00-元语/llm]]
- [[00-元语/cli]]
- [[00-元语/AI]]
