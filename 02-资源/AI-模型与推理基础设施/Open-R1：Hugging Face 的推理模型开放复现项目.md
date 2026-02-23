---
title: "Open-R1：Hugging Face 的推理模型开放复现项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `huggingface/open-r1`"
项目主页: "https://github.com/huggingface/open-r1"
开源协议: "Apache-2.0"
主要语言: "Python"
统计快照: "Stars 25890，Forks 2412，Watchers 284（抓取时间：2026-02-22）"
版本快照: "无正式 release（抓取结果 0）"
备注: "用户提供“23767”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

### 1) 一句话总结
Open R1 是由 Hugging Face 发起的开源项目，旨在通过提供完整的训练配方、开源数据集和极简的代码架构，完全开源地复现 DeepSeek-R1 的研发管线。

### 2) 关键要点
* **项目定位与状态**：采用 Apache-2.0 协议，旨在补全 DeepSeek-R1 研发管线中缺失的环节，方便社区复现与二次开发，目前处于持续开发状态（WIP）。
* **核心训练功能**：支持监督微调（SFT）和组相对策略优化（GRPO），底层支持使用 DDP 或 DeepSpeed（ZeRO-2 和 ZeRO-3）进行分布式训练。
* **数据生成与蒸馏**：内置基于 Distilabel 的合成数据生成脚本，并提供使用 DeepSeek-R1 推理轨迹微调较小基础模型的完整 SFT 蒸馏配方。
* **三步走路线图**：计划分阶段实现：1）蒸馏模型复现（已完成）；2）纯强化学习（RL）流程复现；3）从基础模型到 RL 微调的完整多阶段训练复现。
* **丰富的开源产出**：已发布对齐官方能力的 `OpenR1-Distill-7B` 模型，以及 `Mixture-of-Thoughts`、`OpenR1-Math-220k`、`CodeForces-CoTs` 等大规模数据集和 IOI24 基准测试。
* **极简代码架构**：核心逻辑集中在少数独立脚本（如 `grpo.py`、`sft.py`）中，提供 `Makefile` 以快捷执行各个流程步骤。
* **灵活的配置与追踪**：支持通过 `accelerate launch` 结合 YAML 或命令行参数启动训练，可灵活更换模型与数据集，并支持集成 W&B 进行实验追踪。

### 3) 风险与注意事项
* **CUDA 版本强依赖**：系统必须运行 CUDA 12.4，否则可能会遇到段错误（Segmentation faults）。
* **PyTorch 版本严格绑定**：项目依赖的 vLLM 二进制文件专为 PyTorch `v2.6.0` 编译，必须严格使用该版本，否则可能导致运行失败。
* **聊天模板与 EOS Token 配置要求**：对于自带聊天模板的模型（如 Qwen2.5 系列），必须在训练参数中手动将 EOS Token 设置为与模板匹配的标记；若使用自定义模板，需同时提供模板文件和对应的 EOS Token。

## 功能与定位

Open R1 是由 Hugging Face 发起的开源项目，旨在完全开源地复现 DeepSeek-R1。该项目的核心定位是补全 R1 研发管线中缺失的环节，使得整个社区都能够复现该模型并在其基础上进行二次开发。项目目前处于持续开发状态（Work in progress）。

## 核心功能

* **模型微调与训练**：支持监督微调（SFT）和组相对策略优化（GRPO）。底层支持使用 DDP 或 DeepSpeed（ZeRO-2 和 ZeRO-3）进行分布式训练。
* **合成数据生成**：内置数据生成脚本，可通过 Distilabel 框架调用模型生成合成数据。
* **SFT 蒸馏**：提供完整的训练配方（Recipe），支持使用从 DeepSeek-R1 蒸馏出的推理轨迹数据集，对较小的基础模型进行微调，以复现其推理能力。

## 特色与差异点

* **明确的“三步走”复现路线图**：
  1. **蒸馏模型复现（已完成）**：通过从 DeepSeek-R1 蒸馏高质量语料库来复现 R1-Distill 模型。项目已发布包含 35 万条验证推理轨迹的 `Mixture-of-Thoughts` 数据集，以及对齐 DeepSeek 官方蒸馏能力的 `OpenR1-Distill-7B` 模型。
  2. **纯强化学习（RL）流程复现**：复现用于创建 R1-Zero 的纯 RL 流程，计划整理大规模的数学、推理和代码数据集。
  3. **多阶段训练**：展示从基础模型到经过 RL 微调的完整多阶段训练过程。
* **丰富的开源数据集与基准**：除了 `Mixture-of-Thoughts`，项目还相继发布了 `OpenR1-Math-220k`（22 万条数学推理轨迹）、`CodeForces-CoTs`（1 万道竞程题目及 10 万条解答）数据集，以及针对国际奥林匹克竞赛的高难度基准测试 IOI24。
* **极简的代码架构**：项目设计保持简单，核心逻辑集中在 `src/open_r1` 目录下的几个独立脚本（`grpo.py`、`sft.py`、`generate.py`），并提供 `Makefile` 以快捷执行 R1 流程的各个步骤。

## 使用方式概览

* **环境配置**：推荐使用 `uv` 创建 Python 3.11 虚拟环境。项目依赖 vLLM 和 FlashAttention，并要求严格匹配 PyTorch `v2.6.0` 版本。
* **启动训练**：通过 `accelerate launch` 结合 YAML 配置文件或命令行参数启动训练脚本。支持根据硬件拓扑调整批处理大小（Batch Size）和梯度累积步数。
* **自定义配置**：用户可以通过命令行参数覆盖 YAML 配置，灵活更换基础模型、目标数据集、学习率及输出路径，并支持集成 Weights and Biases (W&B) 进行实验追踪。

## 限制与注意事项

* **CUDA 版本强依赖**：相关依赖库要求系统运行 CUDA 12.4。如果遇到段错误（Segmentation faults），需优先检查系统的 CUDA 版本。
* **PyTorch 版本绑定**：项目中使用的 vLLM 二进制文件是专门针对 PyTorch `v2.6.0` 编译的，必须严格使用该版本，否则可能导致运行失败。
* **聊天模板与 EOS Token 设置**：
  * 对于没有自带聊天模板的基础模型（如 Llama-3.2-1B），训练脚本默认使用 ChatML 格式。
  * 对于自带聊天模板的模型（如 Qwen2.5 系列），必须在训练参数中手动将 EOS Token 设置为与模板匹配的标记（如 `<|im_end|>`）。
  * 若使用自定义模板，需同时提供模板文件和对应的 EOS Token。

## 链接

* 项目 GitHub：https://github.com/huggingface/open-r1
* DeepSeek-R1 官方仓库：https://github.com/deepseek-ai/DeepSeek-R1
* Mixture-of-Thoughts 数据集：https://huggingface.co/datasets/open-r1/Mixture-of-Thoughts
* OpenR1-Distill-7B 模型：https://huggingface.co/open-r1/OpenR1-Distill-7B
* CodeForces-CoTs 数据集：https://huggingface.co/datasets/open-r1/codeforces-cots
* OpenR1-Math-220k 数据集：https://huggingface.co/datasets/open-r1/OpenR1-Math-220k

## 关联主题

- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/alignment]]
- [[00-元语/evals]]
- [[00-元语/benchmark]]
- [[00-元语/data-pipeline]]
- [[00-元语/roadmap]]
- [[00-元语/github]]
