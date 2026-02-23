---
title: "让 Claude 编写 CUDA 内核并指导开源模型"
---

## 摘要

### 1) 一句话总结
本文介绍了如何使用 `upskill` 工具，通过 Claude Opus 等强大的教师模型生成“智能体技能（Agent Skills）”文件，从而提升开源或较小模型在编写 CUDA 内核等复杂任务上的准确率并优化 Token 消耗。

### 2) 关键要点
* **智能体技能概念**：将模型上下文和领域知识定义为标准化的文件（如 Markdown），便于在不同模型和工具（如 `codex`、`cursor`）之间共享和复用。
* **核心工具 `upskill`**：该工具用于基于大型模型的任务追踪记录（trace）来生成技能、自动创建测试用例，并在不同模型上评估技能效果。
* **“师生”工作流**：首先由教师模型（如 Claude Opus 4.5）解决难题并导出记录，然后生成技能文件，最后将该技能应用于更便宜或本地的学生模型（如 GLM-4.7）。
* **CUDA 内核案例**：通过该流程生成的 `kernel-builder-cuda-kernels` 技能文件仅约 500 个 Token，却包含了目标 GPU 架构（如 H100）、内存对齐和 PyTorch 绑定等领域专业知识。
* **准确率提升显著**：在基准测试中，注入该技能使 Sonnet 模型的准确率提升了 35%（从 60% 升至 95%），使本地开源模型 `unsloth/GLM-4.7-Flash-GGUF:Q4_0` 的准确率提升了 45%（从 40% 升至 85%）。
* **Token 消耗优化**：对于部分模型（如 `moonshotai/Kimi-K2-Thinking`），使用技能不仅提高了准确率，还显著降低了达到该性能所需的 Token 消耗。
* **统一规范与兼容性**：生成的技能保存在特定目录（`{agent}/skills/{skill_name}/SKILL.md`）下，遵循智能体技能规范，支持 Anthropic、OpenAI 以及兼容 OpenAI 接口的本地模型。

### 3) 风险与不足
* **并非对所有模型有效**：技能并不能提升所有模型的性能，对于某些模型，应用技能甚至可能会导致性能下降。
* **可能增加 Token 成本**：对于某些原本就具备强大能力的模型（如 Claude Opus 4.5），使用基础技能并未带来明显的性能提升，反而增加了 Token 的消耗量。

## 正文

智能体技能（agent skills）最棒的一点在于能够提升智能体解决难题的能力。这可以从两个方面来看：

1. 你可以使用 Opus 4.5 或其他最先进（SOTA）的模型来解决最棘手的问题。
2. 你可以使用在笔记本电脑上运行的模型，并提升它们解决更难问题的能力。在这篇博文中，我们将展示如何实现后者。

本文将详细介绍如何使用一个名为 `upskill` 的新工具，通过大型模型生成和评估智能体技能，并将其应用于较小的模型。我们将以编写 `diffusers` 模型的 CUDA 内核任务为例对 `upskill` 进行基准测试，但这一流程通常也适用于降低成本，或在复杂和特定领域的问题上使用较小的模型。

### 什么是智能体技能？

智能体技能正在席卷编程智能体领域。实际上，它们的底层概念非常直接：将模型上下文定义为文件，就像将指令定义为 Markdown，将代码定义为脚本一样。这种文件格式使它们易于生成、共享和审查。简而言之，它们是一种在模型和工具之间共享能力的实用媒介，在特定领域或复杂问题中最有用，而不是用于模型本来就擅长的事情。

本文展示了这一过程：使用 Claude 生成一个技能文件，供开源模型用于执行复杂且专业的任务——编写 CUDA 内核。我们首先尝试了基于现有文档的简单技能，发现它提高了一些模型的性能，但并非全部。事实上，对于某些模型，它甚至可能降低性能或增加 token 消耗。请查看下方的图表，了解模型在使用和不使用基础技能时的性能表现。

[![模型性能图表](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/upskill-blog/plot.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/upskill-blog/plot.png)

现在，让我们逐步了解如何使用 `upskill` 提升智能体在难题上的能力，并衡量其性能。

### 1. 让“老师”（Claude Opus 4.5）构建内核

首先，我们使用 Claude Code 交互式地构建一个内核并导出追踪记录（trace）。我们通过发出指令、验证并添加文档链接来完成这个过程。这个看似简单粗暴的过程对于揭示模型最初面临的挑战非常重要。实际上，你可以多次迭代此过程：尝试使用技能的草稿版本解决任务，并在较小的模型上进行实验。每次你都可以指示智能体改进技能，并在较小的模型上进行测试。

这是一个我们创建并用于构建内核的技能示例。我们从一个智能体追踪记录开始，在该记录中，智能体能够在一些帮助下构建出内核。

### 2. 从追踪记录制作智能体技能

一旦教师模型完成了任务，我们需要它们制作一个技能。有几种有效的方法可以做到这一点：

* 在同一个会话中，指示智能体为它刚刚完成的任务创建一个技能文件。
* 使用 Anthropic 的“技能创建者（skill creator）”技能，可以在智能体会话中进行，也可以使用导出的追踪记录和新的智能体会话进行。
* 使用 `upskill` 工具基于追踪记录创建技能。

在大多数情况下，前两种方法会产生功能性的技能。然而，智能体使用该技能的性能是未知的。这就是 `upskill` 发挥作用的地方，因为它还会根据追踪记录为你的技能生成测试用例。然后，它会比较两种情况下的结果：使用追踪记录或应用技能。我们在下方看到，原始模型（Claude Opus）在有无技能的情况下达到了相同的性能。这意味着该技能成功捕获了**该模型**的任务。太棒了！

[![终端评估](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/upskill-blog/terminal.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/upskill-blog/terminal.png)

### 3. 将技能应用于开源、较小或更便宜的模型

最后，我们需要将新创建的技能转移到我们打算使用的工具或模型中。大多数工具（如 `codex`、`cursor` 和 `opencode`）已经确定了统一的技能格式，即位于 `{agent}/skills/{skill_name}/SKILL.md` 的目录，因此我们只需将技能目录复制到该位置即可。

借助 `upskill`，我们可以将技能和一组模型传递给 `eval` 命令，`upskill` 将在有无技能的情况下在这些模型上运行测试用例，以比较性能。我们在这里可以看到，该技能提高了一些开源模型的准确率，但并非全部。

[![性能评估](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/upskill-blog/accuracy.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/upskill-blog/accuracy.png)

在这种情况下，我们可能希望通过重新生成技能来进一步迭代 `gpt-oss` 技能。我们可以执行 `upskill generate --from {skill}`。

智能体技能不仅仅关乎模型性能。通常，智能体在有无技能的情况下都能达到给定的准确率，它们只是需要消耗更多的 token 才能做到。对于重复性任务，我们希望优化智能体，使其使用更少的 token 达到相同的准确率。以下结果揭示了技能的另一个维度。一些模型显著降低了达到性能所需的 token 消耗，而另一些模型在**使用**技能时消耗了更多的 token。例如，对于 `moonshotai/Kimi-K2-Thinking`，该技能在准确率和 token 消耗方面显然是有效的。然而，对于 Claude Opus 4.5，性能没有明显提升，且 token 消耗增加，因此你不希望将此技能与 Claude Opus 4.5 一起使用。

[![Token 消耗](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/upskill-blog/tokens.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/upskill-blog/tokens.png)

**简而言之：** 尝试并评估模型使用你创建的技能的效果。使用 `upskill eval` 或类似工具来评估模型在有无技能情况下的性能。

以上就是提升编程智能体解决难题能力的高层次端到端流程。现在就可以像这样尝试 upskill：

```bash
# 安装 upskill
pip install upskill

# 或者使用 uvx
uvx upskill --help

# 基于智能体追踪记录生成技能
upskill generate "write nvidia kernels" --from ./trace.md

# 在技能上评估模型
upskill eval ./skills/my-skill/ --model haiku --model sonnet

# 为本地模型生成技能
upskill generate "parse YAML" \
    --model opus \
    --eval-model "unsloth/GLM-4.7-Flash-GGUF:Q4_0" \
    --eval-base-url http://localhost:8080/v1
```

### 深入教程：使用智能体技能构建内核

我们已经对如何提升智能体能力有了高层次的了解。现在让我们看看我们为编写 CUDA 内核解决的具体用例。

我们不仅想编写内核代码，还想理解完整的 kernel-builder 工作流程：项目结构、`build.toml` 配置、特定架构的优化以及 PyTorch 绑定。本教程展示了 upskill 如何创建真正有效的经过验证的技能。

`kernel-builder-cuda-kernels` 技能教会了 Claude 关于 CUDA 开发所需知道的一切：目标 GPU 架构、如何构建 kernel-builder 项目、何时使用共享内存而不是寄存器，以及如何编写 PyTorch 绑定。

有了这个技能，你可以对 Claude 说这样的话：

```text
构建一个针对 H100 优化的融合 LayerNorm + GELU 内核。
```

然后 Claude 将创建完整的项目结构、CUDA 实现和构建配置——完全遵循 kernel-builder 预期的约定。

这不仅仅是生成样板代码。该技能编码了领域专业知识：H100 使用 9.0 计算能力，共享内存应对齐到 128 字节，异步内存复制需要 `__CUDA_ARCH__ >= 900`。原本需要花费数小时从文档中收集的知识，被打包成约 500 个 token，可按需加载。

### 设置与安装

安装 upskill：

```bash
pip install upskill
# 或者使用 uvx 进行一次性运行
uvx upskill --help
```

设置你的 API 密钥：

```bash
export ANTHROPIC_API_KEY=sk-ant-...
export HF_TOKEN=hf_...
```

就是这样。Upskill 默认使用 Anthropic Claude Opus-4.5 模型，但也支持 OpenAI 以及通过兼容 OpenAI 的端点作为生成器的本地模型。我们希望使用更昂贵、质量更高的模型来生成技能，并使用较小的模型来使用它们。想想“罗宾汉”的做法（以强补弱）。

### 技能生成

让我们逐步了解如何生成一个技能，教导智能体如何使用 HuggingFace 的 `kernels` 库构建 CUDA 内核。

#### 生成技能

从清晰的任务描述开始：

```bash
upskill generate "build optimized CUDA kernels for PyTorch using HuggingFace kernel-builder"
```

上面我们使用了 upskill，但实际上它可以是任何智能体或聊天工具以及导出的追踪记录。

```bash
upskill generate "write kernels" --from <agent-trace>.md
```

此外，我们也可以从现有技能开始并对其进行补充：

```bash
upskill generate "add more error handling and edge cases" \
    --from ./skills/kernel-builder-cuda-kernels/
```

upskill 会加载现有技能，应用你的改进，并重新评估以确保更改有所帮助。

upskill 创建技能，生成测试用例，评估性能，并根据失败情况进行完善：

```text
Generating skill with sonnet...
Generating test cases...
Evaluating on sonnet... (attempt 1)
  60% -> 95% (+35%) OK

  kernel-builder-cuda-kernels
  Build optimized CUDA kernels for PyTorch using HuggingFace kernel-builder.

  SKILL.md              ~520 tokens

  baseline   ████████████                60%
  with skill ███████████████████    95%  (+35%)

Saved to ./skills/kernel-builder-cuda-kernels
```

基线（baseline）显示了模型在没有任何技能的情况下的表现。“with skill”结果显示了将技能注入上下文后的性能。35% 的提升意味着该技能正在发挥作用。

该技能按照智能体技能规范（Agent Skills specification）保存为一个目录：

```text
./skills/kernel-builder-cuda-kernels/
├── SKILL.md           # 主要指令 (~520 tokens)
└── skill_meta.json    # 元数据和测试用例
```

打开 `SKILL.md` 查看 upskill 生成的内容：

```markdown
---
name: kernel-builder-cuda-kernels
description: Build optimized CUDA kernels for PyTorch using HuggingFace kernel-builder.
---

# Building CUDA Kernels with kernel-builder

## Overview

This guide explains how to create optimized CUDA kernels for PyTorch models
using HuggingFace's kernel-builder. It covers project setup, kernel implementation,
and building for specific GPU architectures like NVIDIA H100.

## Project Structure

project/
├── build.toml              # Build configuration
├── kernel_src/             # CUDA kernel implementations
│   ├── attention.cu
│   ├── layernorm.cu
│   └── geglu.cu
└── torch-ext/              # PyTorch C++ bindings
    └── torch_binding.cpp

## Build Configuration

Create `build.toml` to define your kernel package:

[general]
name = "diffuser_kernels"
backends = ["cuda"]

[general.cuda]
# H100 is compute capability 9.0
capabilities = ["9.0"]

...
```

#### 在不同模型上进行评估

重要的测试是：这项技能是否有助于本地或更便宜的模型构建内核？

```bash
# 启动带有 Web UI 的本地兼容 OpenAI 的服务器：
llama-server -hf unsloth/GLM-4.7-Flash-GGUF:Q4_K_M

# 在本地模型上评估 (llama.cpp server)
upskill eval ./skills/my-skill/ \
    --model "unsloth/GLM-4.7-Flash-GGUF:Q4_0" \
    --base-url http://localhost:8080/v1
```

```text
Generating skill with sonnet...
Generating test cases...
Evaluating on "unsloth/GLM-4.7-Flash-GGUF:Q4_0"... (attempt 1)
  40% -> 85% (+45%) OK

  baseline   ████████░░░░░░░░░░░░   40%
  with skill █████████████████░░░   85%  (+45%)

Saved to ./skills/kernel-builder-cuda-kernels
```

在 `"unsloth/GLM-4.7-Flash-GGUF:Q4_0"` 上获得 45% 的提升，意味着该技能成功地将领域知识从能力强的模型转移到了更快、更便宜的模型上。在较弱模型上有效的技能，在较强模型上也绝对有效。

这就是核心价值主张：使用昂贵的模型创建技能，然后使用廉价或本地模型部署这些技能。

### upskill 中的评估是如何工作的

upskill 使用“师生”方法来评估模型，其中教师模型生成测试用例，供学生模型进行评估。

1. **教师模型**（Opus）生成技能
2. **测试用例**（Opus）根据任务描述自动生成
3. **学生模型**（本地）在有无技能的情况下进行评估
4. **技能提升（Skill lift）** 衡量改进程度

如果你将现有技能传递给 `upskill eval`，它将为该技能生成测试用例并在其上评估模型。测试用例是简单的输入/输出对，用于验证智能体是否理解了任务：

```json
{
  "cases": [
    {
      "input": "Create a build.toml for a CUDA kernel targeting H100",
      "expected": {"contains": "9.0"}
    },
    {
      "input": "Write a basic CUDA kernel template with proper includes",
      "expected": {"contains": "cuda_runtime.h"}
    }
  ]
}
```

我们还可以测试一项技能在不同模型中的表现：

```bash
upskill eval ./skills/kernel-builder-cuda-kernels/ \
    --model haiku --m kimi --runs 5
```

```text
Evaluating kernel-builder-cuda-kernels across 2 model(s)
  3 test case(s), 5 run(s) per model

haiku
  Pass rate: 4/5 (80%)  Avg assertions: 2.8/3

sonnet
  Pass rate: 5/5 (100%)  Avg assertions: 3.0/3

┏━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Model  ┃ Pass Rate ┃ Avg Assertions ┃ Avg Tokens ┃
┡━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ haiku  │ 4/5       │ 2.8/3          │ 1250       │
│ kimi   │ 5/5       │ 3.0/3          │ 1890       │
└────────┴───────────┴────────────────┴────────────┘
```

这有助于你找到性价比的最佳平衡点：也许带有该技能的 Haiku 对于你的用例来说已经足够好了，从而节省了大量的 API 成本。

### 下一步是什么

我们已经展示了 upskill 可以创建经过验证的技能，将领域专业知识从强大的模型转移到更便宜的模型。kernel-builder 技能只是众多可能性中的一个例子。

一些可以尝试的事情：

* **为你的内部工具生成技能**
* **为你的代码库构建技能库**
* **捕获团队内部的隐性知识（tribal knowledge）**
* **跨模型进行基准测试**

这种方法适用于任何你原本需要重复编写详细提示词的专业任务。技能可以在 Claude Code、Codex、Cursor 以及其他支持智能体技能规范（Agent Skills specification）的工具之间移植。

### 资源

* [Upskill 仓库](https://github.com/huggingface/upskill)
* [智能体技能规范 (Agent Skills Specification)](https://agentskills.io/)
* [HuggingFace kernel-builder](https://github.com/huggingface/kernels/tree/main/builder)

## 相关文档

- [[01-博客/Hugging Face/借助 Codex 和 Claude 为所有人打造自定义 CUDA 内核|借助 Codex 和 Claude 为所有人打造自定义 CUDA 内核]]；关联理由：同一事件；说明：两文都围绕 Hugging Face 的 CUDA 内核技能实践，分别覆盖技能迁移评估与端到端落地案例。
- [[01-博客/OpenAI/用 Evals 系统化测试 Agent Skills|用 Evals 系统化测试 Agent Skills]]；关联理由：解说；说明：该文展开了 Agent Skills 的评测设计与回归方法，可补充本文对 `upskill eval` 的高层说明。

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/Claude]]
- [[00-元语/evals]]
- [[00-元语/benchmark]]
- [[00-元语/llm]]
