---
title: "Agent sandbox 可能的选型以及 unikernel 的机会"

站点: "微信公众平台"
原文链接: "https://mp.weixin.qq.com/s/atwxv9t568Z-heftnTkLhA"
发布日期: "2026-02-17"
作者: "gaocegege"
---

## 摘要

### 1) 一句话总结
本文对比了 Firecracker、Kata Containers、Wasm 等 Agent Sandbox 主流方案的优劣，并深入探讨了 Unikernel 在该场景下的理论优势及其因缺乏多进程支持而面临的落地局限。

### 2) 核心要点
* **Agent 沙箱核心需求**：冷启动快（<100ms）、安全性高（有效隔离不可信代码）、支持主流语言（如 Python）以及便捷的镜像构建流程。
* **容器 vs 轻量级虚拟机**：容器启动极快（<50ms）但共享宿主机内核，隔离性较弱；Firecracker 等轻量级虚拟机启动稍慢（>125ms），但运行在独立内核上，安全性更高。
* **e2b 方案（基于 Firecracker）**：采用自研轻量级调度器（基于 `best of k` 算法），支持 <1s 的快照恢复（resume）能力，但需提取 ext4 rootfs，镜像构建流程较复杂。
* **k7 方案（基于 Kata Containers）**：使用 K8s/k3s 调度，完全兼容 OCI（Docker）标准镜像，构建简单，但可能因兼容性设计屏蔽了虚拟机的快照恢复功能。
* **Wasm 方案**：冷启动极快（10ms 级别），但因内存管理机制和系统调用限制，难以原生支持复杂的动态语言（如 Python）。
* **Unikernel 的理论优势**：将应用和内核编译为单一镜像，无多余 shell 和系统调用，攻击面极小且启动达毫秒级，是运行不可信代码的理想底座。
* **镜像加载优化**：镜像拉取耗时通常远大于启动本身，Modal 采用按需加载（Lazy Loading）技术，通过 FUSE 拦截文件读取并按优先级动态请求数据，大幅缩短了启动时间。

### 3) 风险与不足
* **Unikernel 的多进程缺陷**：传统 Unikernel 为单地址空间，不支持多进程，无法兼容重度依赖多进程模型的 Python。
* **Unikernel 改进方案的妥协**：Unikraft 的多进程实现（`vfork`）易导致父子进程互相干扰；Unikernel Linux (UKL) 虽支持多进程，但丧失了极小攻击面和极快启动时间的核心优势。
* **Wasm 的 Python 兼容性鸿沟**：Wasm 的单一线性内存空间与 Python 的 GC 机制冲突，且 WASI 接口功能远少于 Linux 原生接口，导致大量 Python 库无法工作；Monty 等精简解释器仅能支持极小的语法子集。
* **Kubernetes 的调度局限**：K8s 架构过重，适合长期运行的工作负载，不适合 Agent 沙箱高并发、生命周期短以及需要在本地与极小集群间迁移的场景。

## 正文

最近放假，研究 Agent 上瘾。刚刚体验了 Agent RL[1]，就又在看 Agent Sandbox 方案时，一个问题反复浮现：既然 Agent 要的是轻量、安全、快速启动，为什么没人用 Unikernel？在 2017 年的时候我写过一篇文章介绍过 Unikernel：Unikernel：从不入门到入门[2]。还在读书时候我就一直觉得它是非常有趣的技术，可惜一直没有真正被业界广泛采用过。

从理论上看，这简直是天作之合。Unikernel 将应用和内核编译成一个单一的、运行在硬件虚拟化之上的镜像——没有多余的 shell，没有无用的系统调用，攻击面小到极致，启动快到毫秒级。对于运行不可信代码的 Agent 沙箱来说，还有比这更理想的基础吗？

然而，现实是不仅没人用，甚至很少有人讨论它。当行业在为 Agent 寻找安全底座时，我们看到的是 Firecracker、gVisor、Kata Containers，可能再带上 Wasm。

在讲这个问题之前，先让我们简单统一一下 Agent Sandbox 的核心需求：
1. **冷启动时间要快**：理想情况下在 100ms 以内。
2. **安全性要高**：能够有效隔离不可信代码，防止越权访问和攻击。
3. **支持主流开发语言**：如 Python，能够兼容常见的 Python 库和工具。
4. **方便的镜像构建流程**：能够让用户快速构建和部署自己的 Agent 镜像。

### e2b 与 Firecracker

先来看看用的最多的两个思路：容器和 Firecracker。

很多人会误会容器的启动时间不如 Firecracker 之类的轻量级虚拟机快（比如知乎上的一篇文章[3]）。可能是因为用容器跑 `docker run` 时，体感启动时间很漫长。但排除掉镜像拉取需要的诸多操作，容器启动做的事情非常简单：
* **镜像解压与层合并**：overlay2 存储驱动将只读层与可写层合并。
* **容器创建**：runc 创建命名空间、cgroups、网络。
* **进程启动**：执行 ENTRYPOINT/CMD。

这个启动的时间在 50ms 以下，甚至可以做到 10ms 级别。相比之下，Firecracker 之类的轻量级虚拟机虽然也很快，但通常在 125ms 以上。很多比较是拿容器里的进程就绪时间和一个空的 Micro VM 启动时间来比较，这是不公平的。容器的启动时间完全可以满足 Agent Sandbox 的需求，它的问题更多来自于安全性：虽然容器通过命名空间和 cgroups 提供了一定程度的隔离，但它们仍然共享宿主机的内核。

Firecracker 等轻量级虚拟机则提供了更强的隔离，运行在完全独立的内核上，攻击面更小，更适合运行不可信代码。我们可以拿最近比较火的 e2b[4] 作为例子。它的设计目标是为 Agent 提供一个轻量级、安全的运行环境，支持快速启动和高密度部署。

在 e2b 里，Sandbox 的镜像被称作 template。因为 e2b 是用 Firecracker 来实现 Sandbox 的，所以它的 template 就是一个完整的 Linux 镜像。e2b 给到用户的构建语言是 Dockerfile 的一个子集，它把一个 Docker 的文件系统提取成了 ext4 rootfs。在 `e2b-dev/infra`[5] 下，大概流程是：
1. **拉取基础镜像**：从远程仓库获取指定的 Docker 镜像。
2. **注入配置层**：添加包含主机名、DNS、Envd 服务配置及基础预置脚本的新文件层。
3. **提取文件系统**：从镜像中提取 ext4 格式的根文件系统（类似 buildfs[6]）。
4. **初次启动（预置阶段）**：启动 Firecracker 微虚拟机，运行仅包含预置脚本的 BusyBox init 进程，安装 systemd。
5. **二次启动（服务初始化）**：再次启动 Firecracker 虚拟机（使用 systemd），等待 Envd 服务就绪。
6. **构建模板层**：生成模板所需的各个层/步骤。
7. **沙箱内收尾配置**：重启沙箱环境，执行配置脚本（启用 swap、创建用户等）和启动命令。
8. **创建快照与上传**：对配置完成的系统进行快照，并将模板上传到存储系统。

在调度方面，e2b 的调度系统叫做 orchestrator。虽然代码里有 Nomad，但它并没有直接使用 Nomad 的调度功能，而是自己实现了一个基于 `best of k`[7] 算法的简单调度器。当需要创建 Sandbox 时，orchestrator 会随机选取 k 个节点，基于预设启发式指标（已用 CPU、内存、在起沙箱数等）计算 score，选取负载最小的节点。这个算法适合沙箱高并发、生命周期短的场景。

我一直觉得 Kubernetes 并不适合 Agent Sandbox 的调度。Kubernetes 适合长期运行的工作负载，且本身太重。Agent 很多情况下需要在本地或极小集群运行，甚至在本地和云端无缝迁移。e2b 这种自研轻量级调度器是不错的选择。

除了启动快，Firecracker 还带来了 snapshot（快照）能力，可以在 <1s 的时间内 resume（恢复）一个已运行的 Sandbox。这对于生命周期短、频繁创建销毁的 Agent 来说极具吸引力。

```python
from e2b_code_interpreter import Sandbox

sbx = Sandbox.create()
print('Sandbox created', sbx.sandbox_id)

# Pause the sandbox
# You can save the sandbox ID in your database to resume the sandbox later
sbx.beta_pause()
print('Sandbox paused', sbx.sandbox_id)

# Connect to the sandbox (it will automatically resume the sandbox, if paused)
same_sbx = sbx.connect()
print('Connected to the sandbox', same_sbx.sandbox_id)
```

### k7 与 Kata Containers

看完 e2b 的方案，再来看一个基于 Kata Containers 的实现：k7[8]。国内很多大厂的 Agent Sandbox 方案也是基于 Kata 实现的。

k7 的 VMM 也是 Firecracker。由于 Kata 兼容 OCI 标准的容器镜像，k7 的 template 就是一个普通的 Docker 镜像。Kata 跟 Kubernetes 的相性非常好，k7 直接使用了 Kubernetes (或 k3s) 来做调度。

因为采用了成熟组件，k7 的实现相对简单。Sandbox 镜像构建基本就是基于 Dockerfile 构建 Docker 镜像，然后直接启动。相比 e2b 提取 ext4 rootfs 的方式，k7 简单得多。

```python
from katakate import Client

k7 = Client(
  endpoint='https://<your-endpoint>', 
  api_key='your-key')

# Create sandbox
sb = k7.create({
    "name": "my-sandbox",
    "image": "alpine:latest"
})

# Execute code
result = sb.exec('echo "Hello World"')
print(result['stdout'])

# List all sandboxes
sandboxes = k7.list()

# Delete sandbox
sb.delete()
```

不过，Kata 的设计是为了兼容容器，它可能屏蔽了 Firecracker 的 resume 功能（VM 里跑了一个 container），无法像 e2b 那样利用快照实现快速恢复。

在我看来，resume 能力是否是 Agent Sandbox 的核心需求还要打个问号。对于简单场景可能并不需要，而 Kata 带来的完全兼容 OCI 镜像的能力对用户更有吸引力。毕竟构建 Docker 镜像比构建 Firecracker template 简单且快得多。e2b 是用构建时间来换取 Micro VM 的启动时间和快照恢复的便捷。

### Monty 与 WebAssembly

Wasm 能够比容器冷启动还要快（10ms 级别），它直接在运行时内实例化，没有内核加载、设备初始化等开销。

但是 Wasm 支持 Python 非常麻烦：
1. Wasm 假设单一线性的内存空间，而 Python 内存管理依赖 GC。
2. Wasm 通过 WASI 访问系统（功能远少于 Linux 原生接口），而 Python 高度依赖系统调用和库函数，导致很多库无法工作。

虽然有 Pyodide（将 CPython 编译到 Wasm，但冷启动极慢）和 Cloudflare 的优化思路[9]（通过快照把耗时挪到部署时），以及 Wasmer 的缓存优化，但这些都是治标不治本。Wasm 的设计初衷并非为了支持复杂的动态语言。

比较值得一提的是 Monty[10]，它是一个支持 Python 部分子集的解释器。其 0.06ms 的启动时间远快于容器和 Firecracker。但它支持的语法子集太小（如 Starlark 方言），不支持 `class` 和 `sys` 等模块。在这样的阉割下，Unikernel 反而感觉更有优势。

### Unikernel 的局限与突破

回到最开始的问题：为什么没人用 Unikernel 做 Agent Sandbox？

一个重要原因是：**传统的 Unikernel 不支持多进程**。它没有内核和用户态的概念，单地址空间。如果没有多进程，重度依赖多进程模型的 Python 就没法很好地支持。

近年来有一些探索：
* **Unikraft**：在 0.19 版本支持了多进程[12]，但实现方式是 `vfork` 后子父进程共享地址空间，容易互相干扰，并非真正意义上的多进程。
* **Unikernel Linux (UKL)**[13]：通过配置选项将 Unikernel 优化技术集成到 Linux 中。单个应用直接链接到 Linux 内核在 supervisor 权限下运行，保留了多进程支持。好处是未修改的应用可以开箱即用，但失去了极小攻击面和极快启动时间的核心优势。

不过，我们不能只看启动时间，镜像构建和分发的效率同样重要。Unikernel 能够做到极小的镜像大小，非常有竞争力。如果能在多进程与小镜像之间做好取舍，Unikernel 依然极具潜力。

### Modal 的镜像按需加载

实际上，镜像拉取带来的启动时间开销远大于启动本身。传统的 Docker 拉取镜像需要串行下载、单线程解压、解包到文件系统，一个 8GB 的镜像可能需要一分钟。

Modal 在镜像加速上做了非常扎实的工作[14]。他们采取了 Lazy Loading（按需加载）的方式。当你运行进程时，不会访问文件系统里的所有文件。Modal 通过 FUSE 拦截文件系统读取，先生成虚拟文件系统树，被访问时再按照“内存 -> 本地 SSD -> 同可用区缓存 -> 区域 CDN -> 对象存储”的优先级去请求数据。这种巧妙的设计大大减少了镜像拉取时间。

### 总结

Agent Sandbox 的设计有多种方案，各有优劣：
* **Firecracker**：提供强隔离和快照能力，但构建镜像麻烦。
* **Kata Containers**：兼容 OCI 镜像，但可能无法利用快照恢复。
* **Wasm**：启动极快，但支持 Python 困难。
* **Unikernel**：理论上极度契合，但多进程支持仍是限制。

未来随着技术发展，Unikernel 可能会迎来更多机会。同时，镜像构建和分发的效率也不容忽视，尤其是对于运行大模型推理的服务而言，按需加载等优化手段将变得至关重要。

---

### 参考资料
[1] 刚刚体验了 agent rl: https://gaocegege.com/Blog/jiucai-rl
[2] Unikernel：从不入门到入门: https://gaocegege.com/Blog/%E5%AE%89%E5%88%A9/unikernel-book
[3] 知乎上的一篇文章: https://zhuanlan.zhihu.com/p/1999938129465979624
[4] e2b: https://github.com/e2b-dev/e2b
[5] e2b-dev/infra: https://github.com/e2b-dev/infra/blob/main/packages/orchestrator/internal/template/build/builder.go#L101
[6] buildfs: https://github.com/rust-firecracker/buildfs/
[7] best of k: https://github.com/e2b-dev/infra/blob/d79e4ca97205d304d8116a78d8f4d485bc644cfe/packages/api/internal/orchestrator/placement/placement_best_of_K.go#L106
[8] k7: https://github.com/Katakate/k7
[9] Cloudflare 的思路: https://developers.cloudflare.com/workers/languages/python/how-python-workers-work/
[10] monty: https://github.com/pydantic/monty
[11] envd: https://github.com/tensorchord/envd
[12] 0.19 版本支持了多进程: https://unikraft.org/blog/2025-05-15-multiprocess?trk=public_post_comment-text
[13] Unikernel Linux (UKL): https://ar5iv.labs.arxiv.org/html/2206.00789
[14] Fast, lazy container loading in modal.com by Jonathon Belotti: https://www.youtube.com/watch?v=SlkEW4C2kd4
[15] dragonfly: https://github.com/dragonflydb/dragonfly
[16] CC BY-NC-SA 3.0: https://creativecommons.org/licenses/by-nc-sa/3.0/

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/security]]
- [[00-元语/wasm]]
- [[00-元语/virtual-file-system]]
