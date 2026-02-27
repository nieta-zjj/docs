---
title: "Transformers 中的混合专家模型：原理与工程实现"
作者: "Hugging Face"
来源: "huggingface.co"
原文链接: "https://huggingface.co/blog/moe-transformers"
发布日期: "2026-02-26"
译注: "本文基于原文翻译整理，保留关键术语英文。"
---

## 摘要

**1) 一句话总结**
本文介绍了混合专家模型（MoEs）的核心优势，并详细阐述了 Hugging Face `transformers` 库为原生支持 MoE 架构，在权重加载、后端执行、分布式并行及训练优化方面所做的关键工程重构。

**2) 关键点**
*   **MoE 核心机制**：MoE 将稠密前馈层替换为多个“专家”子网络，通过路由器为每个 token 动态激活极少部分专家。这使得模型在保持庞大总参数量（高容量）的同时，仅使用少量激活参数进行推理（高速度）。
*   **权重加载重构**：引入 `WeightConverter` 实现动态权重加载，将检查点中零散的专家张量（如 256 个独立张量）自动合并转换为现代优化内核所需的单一连续张量。
*   **延迟物化与异步加载**：采用单次遍历路由、异步物化和感知转换的调度机制，有效避免了内存峰值。基准测试显示，Qwen1.5-110B 的加载时间从约 66 秒大幅缩短至 10~20 秒。
*   **端到端量化支持**：得益于加载流水线的重构，现在可以在权重转换为打包布局的过程中直接附加量化操作，实现“按专家”量化。
*   **可插拔专家后端**：引入 `@use_experts_implementation` 装饰器，允许在运行时动态选择路由执行后端，包括 `eager`（用于调试）、`batched_mm`（适合小批量/显存充足）和 `grouped_mm`（适合大批量/显存受限）。
*   **专家并行 (EP)**：通过 `enable_expert_parallel=True`，可将专家权重沿设备拆分（`GroupedGemmParallel`）并重映射路由索引（`RouterParallel`），从而在多 GPU 节点上扩展千亿参数模型。
*   **联合 Unsloth 优化训练**：基于 `torch._grouped_mm` API 和自定义 Triton 内核优化了 MoE 训练，相比 v4 版本，训练速度提升约 12 倍，显存占用减少超 35%，支持的上下文长度增加约 6 倍。

**3) 风险/不足（原文明确提及）**
*   **稠密模型的扩展瓶颈**：随着参数量增加，稠密模型面临训练成本日益高昂、推理延迟增加以及部署所需显存/硬件资源过大的实际限制。
*   **MoE 训练的复杂性**：尽管 MoE 在推理端表现优异，但其训练过程极其复杂，主要面临海量参数管理、分布式专家通信困难以及路由不稳定性等问题。

## 正文

引言
--------------------------------------------------------------------------

过去几年中，扩展稠密语言模型（dense language models）推动了 LLM 领域的大部分进展。从早期的原始 [ULMFiT](https://nlp.fast.ai/classification/2018/05/15/introducing-ulmfit.html)（约 3000 万参数）或 GPT-2（15 亿参数，当时被认为“太危险而不能发布” 🧌）等模型，最终发展到如今的千亿参数系统，其秘诀很简单：

> 更多的数据 + 更多的参数 = 更好的性能。

[缩放定律（Scaling laws）](https://huggingface.co/papers/2001.08361)强化了这一趋势，但稠密模型的扩展存在实际限制：

*   训练变得越来越昂贵。
*   推理延迟增加。
*   部署需要大量的内存/显存和硬件资源。

这就是混合专家模型（MoEs）登场的地方。

> 如果您已经熟悉 MoEs，并希望直接了解 `transformers` 库中所做的工程工作，可以直接跳到 [Transformers 与 MoEs](https://huggingface.co/blog/moe-transformers#transformers-and-moes) 部分。

从稠密到稀疏：什么是 MoEs？
------------------------------------------------------------------------------------------------------------------------

混合专家模型保留了 Transformer 骨干网络，但将某些稠密前馈层替换为一组**专家（experts）**。“专家”并不是一个特定主题的模块（例如“数学专家”、“代码专家”）。它仅仅是一个可学习的子网络。对于每个 token，**路由器（router）**会选择一小部分专家来对其进行处理。

| --- |
| 图 1：4 个专家中激活了 1 个专家（来源：[Maarten Grootendorst](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mixture-of-experts)） |

不同的 token 会根据其隐藏层表示激活不同的专家。

> 模型容量取决于总参数量，但推理速度取决于激活的参数量。

这是核心理念。

例如，以 [`gpt-oss-20b`](https://huggingface.co/openai/gpt-oss-20b) 为例。它总共有 210 亿（21B）参数，但在总共 32 个专家中，每个 token 仅使用 4 个激活的专家。考虑到共享组件加上激活的专家，该模型每个 token 约使用 36 亿（3.6B）个激活参数。在内存带宽约为 800 GB 的 M3 Ultra Mac 上运行此模型，我们可以估算其在 `bfloat16` 精度下的生成速度约为 `800 / (3.6 * 2)`，其中每个参数占用 2 个字节。这大约是**每秒 111 个 token**。我们实际得到的性能数据约为 115 tok/s，这与粗略计算的结果非常接近。

这种超快的速度证实了该模型的运行速度大致相当于一个 36 亿参数的模型，但它具有与 210 亿参数模型相同的容量（或质量）。

_（注：如果我们使用该模型所采用的原生 mxfp4 量化的内核，速度会更快）。_

MoEs 具有吸引力的原因如下：

1.   更好的计算效率

在固定的训练 FLOP 预算下，MoEs 通常优于同等的稠密模型。

| --- |
| 图 2：稠密模型与 MoE 模型的训练曲线对比（来源：[OLMoE: Open Mixture-of-Experts Language Models](https://huggingface.co/papers/2409.02060)） |
这意味着更快的迭代速度和更好的扩展效率。

2.   天然的并行化维度

专家在计算图中提供了一个结构边界。由于不同的 token 会调用不同的专家，我们可以在专家之间进行并行化（我们将在后面的[专家并行](https://huggingface.co/blog/moe-transformers#expert-parallelism)中讨论这一点）。

3.   行业的广泛采用

过去几周内发布的主要开源 MoE 模型包括 [Qwen 3.5](https://huggingface.co/collections/Qwen/qwen35)、[MiniMax M2](https://huggingface.co/collections/MiniMaxAI/minimax-m2)、[GLM-5](https://huggingface.co/collections/zai-org/glm-5) 或 [Kimi K2.5](https://huggingface.co/collections/moonshotai/kimi-k25)。

在 2025 年 1 月 [DeepSeek R1](https://huggingface.co/deepseek-ai/DeepSeek-R1) 取得成功后，这一趋势进一步加速，该模型建立在 [DeepSeek V2](https://huggingface.co/deepseek-ai/DeepSeek-V2) 等早期系统的基础之上。另一个早期的 MoE 模型是 2023 年 12 月发布的 [Mixtral-8x7B](https://huggingface.co/mistralai/Mixtral-8x7B-v0.1)。

| --- |
| 图 3：`transformers` 库中添加 MoE 模型的 2 年时间线。DeepSeek R1 标志着一个明显的拐点。 |
闭源实验室也在使用 MoEs。长期以来一直有[_传言_](https://x.com/soumithchintala/status/1671267150101721090)称 ChatGPT 使用了稀疏架构，而开源的 [gpt-oss 模型](https://huggingface.co/collections/openai/gpt-oss)则确实如此。

> 如果您想全面了解 MoEs，我们强烈建议阅读[这篇博客](https://huggingface.co/blog/moe)并观看我们最近关于路由的 [YouTube 视频](https://youtu.be/CDnkFbW-uEQ)。

Transformers 与 MoEs
--------------------------------------------------------------------------------------------

生态系统中的大多数工具（包括模型加载、设备分配、量化和后端执行）最初都是为**稠密**模型设计的。MoEs 对这些假设提出了挑战。

让 MoEs 成为 `transformers` 中的**一等公民**，意味着要重构加载流水线、执行模型和分布式抽象的部分内容，而不仅仅是添加新的模型类。我们将重点介绍 `transformers` 库是如何演进以支持稀疏架构的，涵盖以下几个方面：

*   [权重加载重构](https://huggingface.co/blog/moe-transformers#weight-loading-refactor)
*   [专家后端](https://huggingface.co/blog/moe-transformers#expert-backend)
*   [专家并行](https://huggingface.co/blog/moe-transformers#expert-parallelism)
*   [使用 transformers 训练 MoEs](https://huggingface.co/blog/moe-transformers#training-moes-with-transformers)

权重加载重构
------------------------------------------------------------------------------------------------

[`AutoModelForCausalLM.from_pretrained("model_id")`](https://huggingface.co/docs/transformers/main/en/model_doc/auto#transformers.AutoModelForCausalLM.from_pretrained) 会下载模型权重并将其加载到 PyTorch 模型中。对于稠密模型，加载过程相对简单，检查点（checkpoint）中的每个张量都与运行时模块中的参数一一对应。

对于 MoEs，情况要复杂得多。在大多数 MoE 检查点中，每个专家都是独立序列化的。如果您查看 [DeepSeek-V3 检查点索引](https://huggingface.co/deepseek-ai/DeepSeek-V3/raw/main/model.safetensors.index.json)的内部，您会看到类似这样的键：

```
model.layers.3.mlp.experts.0.gate_proj.weight
...
model.layers.3.mlp.experts.255.gate_proj.weight
```

每个专家都有自己的一组权重矩阵，本质上是 256 个（总共 0 到 255，以 DeepSeek-V3 为例）并排保存的小型前馈网络。然而，在运行时，GPU 执行的是经过优化的内核（kernels）。现代 MoE 内核（如[分组 GEMM 和融合 MoE 实现](https://huggingface.co/kernels-community/megablocks)）旨在_在一次操作中处理所有专家_，而不是一次一个地循环遍历它们。

为了高效地做到这一点，它们需要将专家权重打包成一个单一的**连续张量（contiguous tensor）**。

因此，我们面临着一种不匹配：

*   **检查点：** 256 个独立的张量
*   **运行时：** 1 个打包好的张量

系统性地弥合这一差距正是[权重加载重构](https://github.com/huggingface/transformers/pull/41580)所实现的功能。

随着通用的 [WeightConverter](https://huggingface.co/docs/transformers/main/en/weightconverter) 的引入，心智模型从：

> 检查点已经与我的运行时布局匹配；加载主要是一个逐键复制的过程。

转变为了：

> 检查点只是张量的序列化来源。加载是一个**转换流水线**，将它们转换为我们想要的运行时布局。

### [](https://huggingface.co/blog/moe-transformers#dynamic-weight-loading-with-weightconverter) 使用 `WeightConverter` 进行动态权重加载

此次重构引入的核心抽象是通过 [`WeightConverter`](https://huggingface.co/docs/transformers/main/en/internal/weight_converter) 实现的**动态权重加载**。

`WeightConverter` 允许我们定义：

```
源键模式 → 目标键 + 操作
```

基础操作（分块、拼接等）是可组合的。其中有两个对 MoEs 特别有用：

*   `MergeModulelist` 将张量列表合并为单个张量。例如，您可以将 `MergeModulelist` 与 `Concatenate` 组合使用，以堆叠 MoE 中的专家并将它们打包到一个张量中。

```
WeightConverter(
    ["block_sparse_moe.experts.*.w1.weight", "block_sparse_moe.experts.*.w3.weight",],
    "mlp.experts.gate_up_proj",
    operations=[
        MergeModulelist(dim=0),
        Concatenate(dim=1),
    ],
)
```
*   `SplitModulelist` 将张量拆分回张量列表。例如，您可以将堆叠的专家拆分回单个专家。

```
WeightConverter(
    "mlp.experts.down_proj",
    "block_sparse_moe.experts.*.w2.weight",
    operations=[SplitModulelist(dim=0)],
)
```

### [](https://huggingface.co/blog/moe-transformers#lazy-materialization-of-tensors) 张量的延迟物化（Lazy Materialization）

此次重构不仅改进了存在的转换_类型_，还改进了它们的调度_方式_。

加载器会扫描一次检查点键，将它们与转换器模式进行匹配，并按转换器对张量进行分组。一旦确定需要某个键，它就会被注册为一个 _future_（未来对象），并通过线程池进行物化。转换操作只有在其依赖项准备就绪后才会运行。例如，`MergeModulelist` 会等待直到某一层的所有专家都加载完毕。

这避免了重复扫描并降低了内存峰值。

### [](https://huggingface.co/blog/moe-transformers#benchmark-weight-loading-pipeline-improvements) 基准测试：权重加载流水线的改进

为了评估新权重加载流水线带来的改进，我们对 `transformers` 的 v4 和 v5 版本进行了基准测试。重点是大型 MoE 模型的加载速度，这通常是训练和推理中的瓶颈。

我们使用以下分支对 v4 和 v5 进行了基准测试：

*   v4 分支： [https://github.com/ariG23498/transformers/tree/bench-v4](https://github.com/ariG23498/transformers/tree/bench-v4)
*   v5 分支： [https://github.com/ariG23498/transformers/tree/bench-v5](https://github.com/ariG23498/transformers/tree/bench-v5)

示例：

```
from transformers import AutoModelForCausalLM

model_id = "Qwen/Qwen1.5-110B-Chat"
model = AutoModelForCausalLM.from_pretrained(model_id)
```

两个相关的环境变量：

*   `HF_ENABLE_PARALLEL_LOADING`：通过线程启用并行的分片加载。

*   `HF_DEACTIVATE_ASYNC_LOAD`：禁用新的异步流水线（v5 的逃生舱/回退机制）。

### [](https://huggingface.co/blog/moe-transformers#results) 结果

**模型：**`Qwen/Qwen1.5-110B-Chat` **GPU：** 1× A100 (80GB)

| 版本 | 策略 | 加载模式 | 时间 |
| --- | --- | --- | --- |
| v4.57.6 | `device_map="auto"` | 线程池 | 66.24s |
| v4.57.6 | `device_map="auto"` | 串行 | 67.29s |
| v4.57.6 | TP | — | OOM |
| v5 | `device_map="auto"` | 异步 (默认) | 20.71s |
| v5 | `device_map="auto"` | 同步 | 45.3s |
| v5 | TP | 异步 | 10.1s |
| v5 | TP | 同步 | 19.28s |

| --- |
| 图 4：加载基准测试（v4 对比 v5） |

速度的提升不仅仅是因为“更多的线程”。

它是**单次遍历路由（Single-pass routing）**、**异步物化（Async materialization）**和**感知转换的调度（Conversion-aware scheduling）**的结合，这些机制共同避免了不必要的物化和内存峰值，同时在加载时实现了专家打包和投影融合。

### [](https://huggingface.co/blog/moe-transformers#where-quantization-fits-in) 量化的融入点

通过此次重构，我们现在可以先创建运行时模块结构，然后再将权重转换为该结构。我们现在可以选择在转换流水线中附加量化操作，使量化成为权重加载流水线本身的一部分。这一点至关重要，因为只有当专家以可预测的打包布局存在时，“按专家”进行量化才有意义。

这种端到端的流水线在以前是不可能实现的，而现在它作为公开的 API 提供给了用户。

专家后端
------------------------------------------------------------------------------

一旦专家被打包成单个运行时张量，就会出现另一个问题：

> 如何才能高效地在它们之间进行路由？

在混合专家模型中，每个 token 都会被路由到不同的专家。这意味着运行时必须将 token 分发到它们选定的专家权重上，高效地执行投影，应用路由权重，然后收集并重新排序结果。

这正是[专家后端系统](https://huggingface.co/docs/transformers/experts_interface)（在 [PR #42697](https://github.com/huggingface/transformers/pull/42697) 中引入）所解决的问题。专家后端引入了一种**可插拔的执行架构**，将专家计算与模型实现解耦。该系统不再在每个 MoE 模型内部硬编码一种分发策略，而是允许专家层在运行时动态选择后端。

这是通过装饰器模式实现的：

```
@use_experts_implementation
```

该装饰器包装了专家类，并自动将计算分发到选定的后端。

目前提供三种后端：

1.   `eager`：循环遍历选定的专家，并对每个专家应用投影。这用于正确性参考和调试。

2.   `batched_mm`：使用 [`torch.bmm`](https://docs.pytorch.org/docs/stable/generated/torch.bmm.html) API。它会为每个 token 复制选定的专家权重，并执行单次批量 GEMM。该后端非常适合小批量、GPU 密集型且显存充足的工作负载。

3.   `grouped_mm`：使用 [`torch._grouped_mm`](https://docs.pytorch.org/docs/stable/generated/torch.nn.functional.grouped_mm.html) API。在这里，我们按专家 ID 对 token 进行排序和分组，然后执行单次分组 GEMM。该后端在大批量或显存受限的设置中表现出色。

| --- |
| 图：专家后端图解 |

专家并行
--------------------------------------------------------------------------------------

混合专家（MoE）模型可能拥有数千亿个参数（远超单张 GPU 的显存容量）。专家并行（EP）通过将专家分布在多个设备上来解决这个问题。每个设备只加载分配给它的专家子集，为这些专家进行计算，然后参与结果聚合。这种方法将模型扩展到大得多的参数量，而不会增加计算成本，因为每个 token 只激活少数几个专家。

通过 `enable_expert_parallel` 启用专家并行：

```
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from transformers.distributed.configuration_utils import DistributedConfig

distributed_config = DistributedConfig(enable_expert_parallel=True)

model = AutoModelForCausalLM.from_pretrained(
    "openai/gpt-oss-120b",
    dtype="auto",
    distributed_config=distributed_config,
)
```

启动命令：

```
torchrun --nproc-per-node N script.py
```

其中 `N` 可以整除专家的总数，并且通常与节点中的 GPU 数量一致。

当 `enable_expert_parallel=True` 时，模型会从标准的张量并行（TP）方案切换到具有专门分片策略的专家并行（EP）方案。

EP 的核心组件在于：

1.   `GroupedGemmParallel`：沿专家维度（`dim=0`）拆分专家权重。在这里，每个设备仅加载 `num_experts / num_devices` 个专家。

2.   `RouterParallel`：将全局专家索引重新映射为局部索引，屏蔽未分配给当前 rank 的专家，确保每个设备仅使用其本地专家进行计算，并使用 all-reduce 操作在设备之间组合部分输出。

使用 Transformers 训练 MoEs
----------------------------------------------------------------------------------------------------------------

MoEs 在扩展推理方面表现出色，但训练它们要复杂得多。

MoEs 具有海量的参数，分布式专家通信非常复杂，并且需要处理路由的不稳定性。为了解决这个问题，我们与 **Unsloth** 合作，实现了速度显著提升的混合专家模型训练：

*   ~12× faster MoE training -> MoE 训练速度提升约 12 倍
*   >35% VRAM reduction -> 显存占用减少 >35%
*   ~6× longer context -> 上下文长度增加约 6 倍
*   12–30× overall speedup compared to v4 -> 与 v4 相比，整体速度提升 12–30 倍

我们利用了专家后端抽象，围绕 PyTorch 的 `torch._grouped_mm` API 进行了标准化，并使用了自定义的 Triton 分组 GEMM + LoRA 内核。Unsloth 在 Transformers（以及 TRL）优化的基础上进一步提升了性能。

> 有关完整详细信息，我们建议阅读：[Unsloth 的官方指南](https://unsloth.ai/docs/new/faster-moe)

结论
----------------------------------------------------------------------

随着稀疏架构的不断演进，我们希望 `transformers` 库也能随之发展。如果您正在使用 MoEs 进行构建或尝试新的稀疏理念，我们非常期待听到您的声音。请告诉我们您希望接下来在 `transformers` 中看到哪些抽象、内核或工作流。

## 关联主题

- [[00-元语/llm]]
- [[00-元语/benchmark]]
- [[00-元语/sdk]]
- [[00-元语/AI]]
