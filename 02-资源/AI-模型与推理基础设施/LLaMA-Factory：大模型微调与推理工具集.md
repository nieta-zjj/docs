---
title: "LLaMA-Factory：大模型微调与推理工具集"

发布日期: "2026-02-22"
对象: "GitHub 项目 `hiyouga/LLaMA-Factory`"
项目主页: "https://github.com/hiyouga/LLaMA-Factory"
官方网站: "https://llamafactory.readthedocs.io"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 67429，Forks 8208，Watchers 324（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.9.4（发布时间：2025-12-31T15:00:14Z）"
---

## 摘要

### 一句话总结
LLaMA-Factory 是一个开源的统一高效大模型微调框架，支持通过零代码界面对 100 多种大型语言模型（LLMs）和多模态模型（VLMs）进行微调。

### 关键点
* **项目影响力**：基于 Python 开发，采用 Apache License 2.0 协议，在 GitHub 拥有超 6.7 万 Stars，已被 Amazon、NVIDIA 和阿里云等企业采用（相关成果发表于 ACL 2024）。
* **广泛的模型支持**：支持 LLaMA、Qwen3、DeepSeek、Gemma、GLM 等 100+ 模型，并对前沿模型（如 Qwen3、Gemma 3）提供 Day-0 或 Day-1 级别的微调支持。
* **丰富的训练方法**：集成了连续预训练、多模态监督微调（SFT）、奖励建模（RM）、PPO、DPO、KTO 和 ORPO 等多种训练策略。
* **高效微调与量化**：支持 16-bit 全量微调、冻结微调、LoRA，以及基于 AQLM、AWQ、GPTQ 等多种方案的 2/3/4/5/6/8-bit QLoRA。
* **前沿算法与优化技巧**：内置 GaLore、BAdam、DoRA、LongLoRA 等高级算法，并支持 FlashAttention-2、Unsloth、Liger Kernel 和 KTransformers 等加速与显存优化技术。
* **多任务与多模态能力**：适用任务广泛，涵盖多轮对话、工具调用、图像理解、视觉定位、视频识别和音频理解等。
* **易用性与推理部署**：提供零代码的 CLI 和 Web UI（LlamaBoard），支持本地与云端训练，并可通过 vLLM 或 SGLang worker 提供 OpenAI 风格的 API 实现快速推理。

## 功能与定位

Unified Efficient Fine-Tuning of 100+ LLMs & VLMs (ACL 2024)

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:07:14Z。
- 项目创建于 2023-05-28T10:09:12Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/hiyouga/LLaMA-Factory
- 官网：https://llamafactory.readthedocs.io
- README：https://raw.githubusercontent.com/hiyouga/LLaMA-Factory/main/README.md
- Releases：https://github.com/hiyouga/LLaMA-Factory/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/lora]]
- [[00-元语/multimodal]]
- [[00-元语/llmops]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/tool]]
