---
title: "借助 Codex 和 Claude 为所有人打造自定义 CUDA 内核"

来源: "https://huggingface.co/blog/custom-cuda-kernels-agent-skills"
---

## 摘要

**1) 一句话总结**
通过为 Claude 和 Codex 等编程智能体提供专门的领域知识技能，开发者现在可以自动生成、测试并发布生产级别的自定义 CUDA 内核，并无缝集成到 `diffusers` 和 `transformers` 库中。

**2) 关键要点**
*   **解决核心痛点**：克服了 CUDA 内核开发中因硬件差异（H100、A100、T4）、库集成复杂性及分发环境矩阵带来的高门槛。
*   **技能包内容**：包含约 550 个 token 的结构化指南，涵盖 GPU 架构优化、内存访问模板（BF16/FP16/FP32）、PyTorch 绑定及基准测试工作流。
*   **便捷安装与兼容性**：通过 `kernels` 库的单行命令即可安装（如 `kernels skills add cuda-kernels --claude`），支持 Claude Code、Cursor、Codex 等工具。
*   **端到端项目生成**：智能体不仅生成 CUDA 源码，还能输出完整的项目结构，包括 C++ 绑定、`build.toml` 配置和微基准测试脚本。
*   **Diffusers 性能提升（LTX-Video）**：在 H100 上，生成的 RMSNorm 内核独立测试平均加速 1.88 倍，端到端视频生成加速 1.06 倍。
*   **Transformers 性能提升（Qwen3-8B）**：在 H100 上，RMSNorm 内核独立测试平均加速 1.94 倍；在 8192 个 token 的长上下文推理中，加速比可达 2.47 倍。
*   **标准化分发**：支持使用 Nix 自动构建所有 PyTorch/CUDA 变体，并可直接推送到 HuggingFace Kernel Hub。
*   **开箱即用**：发布到 Hub 的内核可通过 `get_kernel()` 单行代码被其他用户加载，实现零编译、免配置调用。

**3) 风险与不足**
*   **覆盖范围限制**：该智能体技能目前可能未涵盖极其复杂的内核开发或某些特定的架构优化（但提供了基础构建块供开发者起步）。

## 正文

[![Image: oprah custom cuda kernels](https://huggingface.co/blog/assets/custom-cuda-kernels/meme.png)](https://huggingface.co/blog/assets/custom-cuda-kernels/meme.png)

**太长不看（tl;dr）：** 我们构建了一项智能体技能（agent skill），教编程智能体如何编写生产级别的 CUDA 内核。然后，我们让 Claude 和 Codex 针对两个实际目标进行尝试：一个 **diffusers** 管道和一个 **transformers** 模型。智能体为两者都生成了可用的内核，并端到端地包含了正确的 PyTorch 绑定和基准测试。

编写 CUDA 内核很难。编写能与 `transformers` 和 `diffusers` 正确集成的 CUDA 内核更难。这里存在特定架构的内存访问模式、向量化策略、warp shuffle 归约，以及十几个连经验丰富的开发者都会踩坑的集成陷阱。这正是智能体技能大显身手的专业且高风险的问题领域。

我们为编程智能体提供了所需的领域知识，例如目标 GPU 架构、如何构建内核构建器项目、何时使用共享内存而非寄存器，以及如何编写 PyTorch 绑定。剩下的工作由智能体完成。如果您使用过 LLM 训练技能或阅读过相关文章，就会对这种模式感到熟悉：将领域专业知识打包成一项技能，将智能体指向一个问题，然后让它开始工作。

### 为什么需要内核技能？

Kernel Hub 解决了自定义硬件内核的分发问题。只需一次 `get_kernel` 调用，您就可以从 Hub 加载预编译的内核。无需构建，无需标志。然而，仍然需要有人**编写这些内核**。这项技能填补的正是这个空白。

CUDA 内核开发的涉及面极其复杂：

*   **硬件差异**：针对每一代 GPU 的特定硬件优化指南。H100、A100 和 T4 在计算能力、共享内存大小和带宽配置上各不相同。
*   **库的集成**：在库方面，`diffusers` 和 `transformers` 具有不同的模块层级、归一化约定和集成模式。自定义内核需要在 PyTorch 中注册，以便 `torch.compile` 能够识别。
*   **分发环境**：在分发方面，内核可能依赖于不同的 CUDA、PyTorch 和 Python 版本，从而产生庞大的环境矩阵。

这些领域知识往往迷失在文档标签页和 Stack Overflow 的回答中。智能体技能将其打包成可按需加载的上下文。首先，让我们展示如何立即使用该技能，然后我们将深入探讨如何对内核进行基准测试的细节。

### 安装技能

该技能随 `kernels` 库一起发布。只需一条命令即可将其安装到您的编程智能体中：

```bash
# 我们需要从 main 分支安装 kernels
pip install git+https://github.com/huggingface/kernels.git#subdirectory=kernels
kernels skills add cuda-kernels --claude
```

这会将技能放入 `.claude/skills/cuda-kernels/` 目录中，Claude Code 和 Cursor 会自动识别它。对于其他智能体：

```bash
# Codex
kernels skills add cuda-kernels --codex

# OpenCode
kernels skills add cuda-kernels --opencode

# 自定义目标路径
kernels skills add cuda-kernels --dest ./my-agent/skills/

# 全局安装（在所有项目中可用）
kernels skills add cuda-kernels --global

# 覆盖现有安装
kernels skills add cuda-kernels --claude --force
```

安装完成后，向您的智能体发送提示词：

> 为 H100 构建一个向量化的 RMSNorm 内核，目标是 transformers 中的 Qwen3-8B 模型。

或者，您可以尝试更开放的提示词：

> 为 H100 构建一个优化的注意力内核，目标是 transformers 中的 Qwen3-8B 模型。将其与 PyTorch 基准进行对比测试，并验证端到端性能的提升。

智能体能够读取该技能，选择正确的架构参数，生成 CUDA 源码，编写 PyTorch 绑定，设置 `build.toml`，并创建基准测试脚本。

如果您正在开发更复杂的内核，或技能中未涵盖的特定架构优化，该技能也提供了基础的构建块和模式助您起步。我们也欢迎大家对[技能本身](https://github.com/huggingface/kernels/tree/main/.docs/skills)做出贡献。

### 技能中包含什么

该技能大约包含 **550 个 token** 的结构化指南，外加参考脚本、GPU 优化指南、故障排除文档和完整的有效示例。像 Codex 和 Claude 这样的智能体编程工具可以读取这些内容并生成一个可用的内核项目。

它涵盖了：

*   针对 H100、A100 和 T4 的 NVIDIA GPU 架构感知优化（计算能力、内存带宽、共享内存大小、块大小调整）。
*   `diffusers` 和 `transformers` 的集成模式，包括每个库特有的陷阱。
*   针对 BF16、FP16 和 FP32 具有向量化内存访问模式的内核模板。
*   用于独立内核微基准测试和端到端管道比较的基准测试工作流。
*   通过 `get_kernel` 加载社区内核的 HuggingFace Kernel Hub 集成。

```text
.claude/skills/cuda-kernels/
├── SKILL.md                              # 主要说明（约 550 tokens）
├── scripts/
│   ├── benchmark_example.py              # 端到端基准测试模板
│   ├── benchmark_rmsnorm.py              # 独立内核微基准测试
│   ├── ltx_kernel_injection_example.py   # Diffusers 集成模式
│   ├── transformers_injection_example.py # Transformers 集成模式
│   └── huggingface_kernels_example.py    # Kernel Hub 集成
└── references/
    ├── diffusers-integration.md          # Diffusers 指南及陷阱
    ├── transformers-integration.md       # Transformers 指南
    ├── huggingface-kernels-integration.md
    ├── h100-optimization-guide.md
    ├── a100-optimization-guide.md
    ├── t4-optimization-guide.md
    ├── kernel-templates.md
    └── troubleshooting.md
```

当智能体加载这些内容时，它就获得了从“为我编写一个 RMSNorm 内核”到生成一个可构建、可测试项目所需的一切。它会使用 grep 和 glob 搜索技能以找到相关的文件和目录。因此，以易于查找的方式构建技能结构非常重要。

智能体被指示生成符合 `references/kernel-templates.md` 中模板的内核，并生成一个完整的内核项目：

```text
examples/your_model/
├── kernel_src/
│   └── rmsnorm.cu              # 向量化的 CUDA 内核
├── torch-ext/
│   ├── your_kernels/__init__.py
│   └── torch_binding.cpp       # PyTorch C++ 绑定
├── benchmark_rmsnorm.py        # 微基准测试脚本
├── build.toml                  # kernel-builder 配置
├── setup.py                    # pip install -e .
└── pyproject.toml
```

我们在两个实际目标上对此进行了测试。

### 基准测试：Diffusers（H100 上的 LTX-Video）

智能体为 `diffusers` 中的视频生成管道 [LTX-Video](https://huggingface.co/Lightricks/LTX-Video) 构建了 RMSNorm、RoPE 3D、GEGLU 和 AdaLN 内核。完整示例位于 `examples/ltx_video/`。我们针对 H100 优化了 RMSNorm 内核。两项基准测试均在 H100 80GB HBM3 上以 BFloat16 精度运行。

如果您想查看生成的内核，请访问[此示例](https://github.com/burtenshaw/kernel-skill/tree/main/examples/ltx_video)。

#### 独立的 RMSNorm 基准测试

首先，我们将独立的 RMSNorm 内核性能与 PyTorch 基准进行比较。这是优化管道中的主要加速来源。

[![Image: isolated rmsnorm benchmark ltx-video](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/kernels-skill-benchmark/rmsnorm_ltx_video.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/kernels-skill-benchmark/rmsnorm_ltx_video.png)

| 形状 | 自定义 (ms) | PyTorch (ms) | 加速比 |
| --- | --- | --- | --- |
| [1x1024x2048] | 0.039 | 0.064 | **1.64x** |
| [2x1024x2048] | 0.040 | 0.073 | **1.82x** |
| [4x1024x2048] | 0.052 | 0.093 | **1.78x** |
| [1x4096x2048] | 0.052 | 0.093 | **1.79x** |
| [2x4096x3072] | 0.102 | 0.209 | **2.04x** |
| [1x8192x2048] | 0.083 | 0.150 | **1.81x** |
| [4x4096x3072] | 0.173 | 0.393 | **2.26x** |

**平均加速比：1.88倍**，带宽效率：H100 理论值（3,350 GB/s）的 34.7%。

#### 端到端视频生成（49 帧，30 步，H100 80GB）

接下来，我们将优化内核的端到端视频生成性能与基准（未编译）以及 `torch.compile` 基准进行比较。

[![Image: e2e benchmark ltx-video](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/kernels-skill-benchmark/e2e_ltx_video.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/kernels-skill-benchmark/e2e_ltx_video.png)

| 配置 | 时间 (s) | 迭代/秒 | 加速比 |
| --- | --- | --- | --- |
| 基准（未编译） | 2.87 | 12.58 | 1.00x |
| **生成的优化内核** | 2.70 | 13.52 | **1.06x** |
| 基准 + torch.compile | 2.14 | 19.05 | 1.34x |
| 优化内核 + torch.compile | 2.01 | 18.45 | 1.43x |

RMSNorm 约占 LTX-Video 总计算量的 5%。剩余时间花费在注意力机制、线性投影和 VAE 解码上。单一内核类型带来 6% 的端到端加速，这与该计算分布是一致的。

### 基准测试：Transformers（H100 上的 Qwen3-8B）

智能体为 `transformers` 中的大型语言模型 [Qwen3-8B](https://huggingface.co/Qwen/Qwen3-8B) 构建了一个 RMSNorm 内核，该模型在 32 层中包含 65 个 RMSNorm 模块。完整示例位于 `examples/qwen3_8b/`。我们针对 H100 优化了 RMSNorm 内核。两项基准测试均在 H100 80GB HBM3 上以 BFloat16 精度运行。

如果您想探索该内核，请在[此处查看](https://github.com/burtenshaw/kernel-skill/tree/main/examples/qwen3_8b)。

#### 独立的 RMSNorm 基准测试

我们再次将独立的 RMSNorm 内核性能与 PyTorch 基准进行比较。

[![Image: isolated rmsnorm benchmark qwen3-8b](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/kernels-skill-benchmark/rmsnorm_qwen3.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/kernels-skill-benchmark/rmsnorm_qwen3.png)

**平均加速比：1.94倍**，带宽效率：H100 理论值（3,350 GB/s）的 22.3%。

| 形状 | 自定义 (ms) | PyTorch (ms) | 加速比 |
| --- | --- | --- | --- |
| [1x128x4096] | 0.040 | 0.062 | **1.58x** |
| [1x512x4096] | 0.038 | 0.064 | **1.69x** |
| [1x1024x4096] | 0.037 | 0.071 | **1.90x** |
| [1x2048x4096] | 0.045 | 0.091 | **2.03x** |
| [1x4096x4096] | 0.071 | 0.150 | **2.12x** |
| [4x512x4096] | 0.056 | 0.093 | **1.67x** |
| [8x256x4096] | 0.045 | 0.092 | **2.06x** |
| [1x8192x4096] | 0.109 | 0.269 | **2.47x** |

加速比随序列长度增加而提升：128 个 token 时为 1.58 倍，8192 个 token 时为 2.47 倍。对于长上下文推理，自定义内核大致将 RMSNorm 的延迟减半。

### 将您的内核发布到 Hub

智能体为您提供了一个可用的内核。[Kernel Hub](https://huggingface.co/kernels-community) 允许您共享它，以便任何人都可以无需编译直接加载。以下是从智能体输出到发布内核的完整流程。

#### 1. 验证项目结构

智能体生成的项目已经遵循了 [kernel-builder](https://huggingface.co/docs/kernels/en/builder/writing-kernels) 的布局：

```text
your_kernel/
├── build.toml               # 构建配置
├── kernel_src/
│   └── rmsnorm.cu           # CUDA 内核源码
└── torch-ext/
    ├── torch_binding.cpp    # 注册 Torch 操作
    └── your_kernels/
        └── __init__.py      # 包装 _ops 的 Python API
```

`build.toml` 告诉 `kernel-builder` 要构建什么。智能体会为您生成此文件，包括适用于目标 GPU 的正确 `cuda-capabilities`：

```toml
[general]
name = "your_kernels"
backends = ["cuda"]

[torch]
src = ["torch-ext/torch_binding.cpp"]

[kernel.rmsnorm]
backend = "cuda"
src = ["kernel_src/rmsnorm.cu"]
depends = ["torch"]
cuda-capabilities = ["9.0"]  # H100
```

#### 2. 使用 Nix 构建所有变体

Kernel Hub 的内核必须支持所有近期的 PyTorch 和 CUDA 配置。kernel-builder 的 Nix flake 会自动处理这个问题。将[示例 `flake.nix`](https://github.com/huggingface/kernels/blob/main/builder/examples/relu/flake.nix) 复制到您的项目中并运行：

```bash
nix flake update
nix run .#build-and-copy -L
```

这将为每个所需的 PyTorch/CUDA 变体构建内核，并将结果放置在 `build/` 目录中。为了加快构建速度，可以启用 HuggingFace Nix 缓存：

```bash
nix run nixpkgs#cachix -- use huggingface
```

#### 3. 创建 Hub 仓库并推送

在 Hub 上创建一个模型仓库并上传构建好的内核：

```bash
huggingface-cli repo create your-org/your-kernel --type model
huggingface-cli upload your-org/your-kernel ./build
```

#### 4. 其他人只需一行代码即可加载

发布后，任何人都可以零编译地使用您的内核：

```python
from kernels import get_kernel

rmsnorm = get_kernel("your-org/your-kernel")
```

`get_kernel` 会检测用户的 Python、PyTorch 和 CUDA 版本，并下载匹配的预编译二进制文件。无需构建，无需标志，通常几秒钟即可准备就绪。

该技能与 Hub 是互补的。技能负责开发，Hub 负责分发。使用技能构建内核，使用基准测试脚本进行验证，将其发布到 Hub，它就会成为其他人只需一行代码即可调用的工具。

### 结论

我们构建了一项智能体技能，教编程智能体如何编写生产级别的 CUDA 内核。然后，我们让 Claude 和 Codex 针对两个实际目标进行尝试：一个 **diffusers** 管道和一个 **transformers** 模型。智能体为两者都生成了可用的内核，并端到端地包含了正确的 PyTorch 绑定和基准测试。我们对内核进行了基准测试，发现优化后的内核在独立性能和端到端性能上都能带来加速。

### 参考资源

*   [`kernels` 库中的 CUDA 内核技能](https://github.com/huggingface/kernels/tree/main/skills/cuda-kernels)
*   [HuggingFace Kernel Hub 博客](https://huggingface.co/blog/hello-hf-kernels)
*   [我们让 Claude 微调了开源 LLM](https://huggingface.co/blog/hf-skills-training)
*   [我们让 Claude 教授开源模型](https://huggingface.co/blog/upskill)
*   [HuggingFace 内核社区](https://huggingface.co/kernels-community)

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/Codex]]
- [[00-元语/Claude]]
- [[00-元语/benchmark]]
- [[00-元语/llm]]
