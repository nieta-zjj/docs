---
title: "nanoGPT：极简且高效的开源 Python 仓库，专用于训练和微调中型 GPT 模型（如复现 GPT-2）"

发布日期: "2026-02-22"
对象: "GitHub 项目 `karpathy/nanoGPT`"
项目主页: "https://github.com/karpathy/nanoGPT"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 53596，Forks 9073，Watchers 481（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
nanoGPT 是一个极简且高效的开源 Python 仓库，专用于训练和微调中型 GPT 模型（如复现 GPT-2），目前已停止维护并推荐使用其衍生项目 nanochat。

**2) 关键点**
* **项目状态**：截至 2025 年 11 月，该项目已被标记为陈旧且弃用（deprecated），作者推荐使用新项目 `nanochat`，当前仓库仅保留作历史存档。
* **代码极简**：核心代码非常精简且易读，训练循环 (`train.py`) 和模型定义 (`model.py`) 各仅约 300 行代码。
* **模型复现**：能够复现 OpenAI 的 GPT-2 (124M) 模型，在单节点 8x A100 40GB GPU 上使用 OpenWebText 数据集训练约需 4 天，损失值可降至 ~2.85。
* **硬件兼容性**：支持多种硬件环境，包括多 GPU 集群（支持 PyTorch DDP 多节点训练）、单 GPU、Apple Silicon Mac（通过 `--device=mps` 加速 2-3 倍）以及纯 CPU 运行。
* **核心功能**：支持从头开始训练（如字符级莎士比亚文本生成）、加载 OpenAI 预训练权重（最高支持 GPT-2 1.3B）进行微调，以及通过 `sample.py` 进行文本生成推理。
* **性能优化**：默认使用 PyTorch 2.0，通过 `torch.compile()` 特性可显著提升训练效率（例如将单次迭代时间从约 250ms 缩短至 135ms）。
* **依赖项**：主要依赖包括 PyTorch、numpy、transformers（用于加载权重）、datasets、tiktoken（BPE 分词）、wandb（日志）和 tqdm。

**3) 风险/不足**
* **停止维护风险**：项目已明确被弃用，不再进行更新和维护。
* **平台兼容性问题**：默认启用的 PyTorch 2.0 `torch.compile` 属于实验性功能，在部分平台（如 Windows）上可能报错，需要通过添加 `--compile=False` 标志来禁用（会降低运行速度）。
* **数据集领域差异（Domain Gap）**：由于 OpenAI 未开源原始 WebText 数据集，使用开源的 OpenWebText 进行评估和复现时存在数据领域差异，需通过微调来对齐基线损失值。
* **功能缺失（待办事项）**：根据项目的 Todos 列表，当前版本尚未实现 FSDP（仅支持 DDP）、标准零样本评估（如 LAMBADA/HELM）、线性批次大小调度以及其他位置编码（如 rotary, alibi）等高级特性。

## 功能与定位

The simplest, fastest repository for training/finetuning medium-sized GPTs.

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:57:32Z。
- 项目创建于 2022-12-28T00:51:12Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/karpathy/nanoGPT
- README：https://raw.githubusercontent.com/karpathy/nanoGPT/master/README.md
- Releases：https://github.com/karpathy/nanoGPT/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/github]]
