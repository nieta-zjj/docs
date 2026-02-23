---
title: "MiniMind：从零训练与推理的小型语言模型"

发布日期: "2026-02-22"
对象: "GitHub 项目 `jingyaogong/minimind`"
项目主页: "https://github.com/jingyaogong/minimind"
官方网站: "https://jingyaogong.github.io/minimind"
开源协议: "Apache-2.0"
主要语言: "Python"
统计快照: "Stars 39741，Forks 4803，Watchers 219（抓取时间：2026-02-22）"
版本快照: "最新 release `v2`，发布时间 `2025-10-21`"
备注: "用户提供“25152”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

**1) 一句话总结**
MiniMind 是一个旨在降低大语言模型学习门槛的开源项目，提供了一套完全从零开始、使用原生 PyTorch 代码构建和训练极小参数（如 25.8M）大语言模型的完整代码与教程。

**2) 核心要点**
* **极致轻量与低成本**：最小模型版本仅 25.8M，在单张普通个人 GPU（如 RTX 3090）上仅需约 2 小时即可完成训练。
* **原生代码“白盒”实现**：拒绝高度封装的第三方库调用，核心算法（含 LoRA、DPO、强化学习等）均使用 PyTorch 原生从零实现，便于开发者学习底层运作机制。
* **全阶段训练支持**：提供从分词器训练、数据清洗、预训练、监督微调（SFT）到直接偏好优化（DPO）、强化学习（RLAIF）及模型白盒蒸馏的完整代码。
* **多架构与推理增强**：支持 Dense 与混合专家（MoE）架构，提供复现 DeepSeek-R1 的推理模型（支持自适应思考与思考链），并全面支持长文本外推（YaRN）与 Tool Calling。
* **分布式训练与可视化**：支持单机单卡及多卡（DDP、DeepSpeed）训练，支持断点续训（含跨 GPU 数量恢复），可接入 SwanLab 或 WandB 进行训练可视化。
* **高兼容性与便捷部署**：模型参数对齐 Transformers 库，全面兼容 `llama.cpp`、`vllm`、`ollama` 等主流推理引擎；内置极简 WebUI 及兼容 OpenAI-API 协议的服务端。
* **资源全开源**：提供所有阶段的高质量清洗数据集（统一为 `jsonl` 格式）以及预训练和微调后的模型权重。

**3) 风险与不足**
* **旧模型兼容性断裂**：由于位置编码方式的差异，项目更新后不再支持直接加载旧版（2025年4月26日以前）模型进行推理，且已放弃对 `minimind-v1` 全系列的维护。
* **成本估算存在条件限制**：官方宣称的“2小时”与“3块钱”训练成本是基于单张 RTX 3090 的特定测试结果，实际耗时与成本会因硬件配置和服务器定价波动而异。
* **数据一致性差异**：文档记录显示，用户提供的参考 Stars 数量与当前公开的实际 Stars 数量存在不一致。

## 功能与定位

MiniMind 是一个旨在降低大语言模型（LLM）学习门槛的开源项目与入门教程。它提供了一套完全从零开始构建和训练极小参数语言模型（如 25.8M）的完整代码。项目拒绝高度封装的“黑盒”调用，致力于让开发者通过阅读原生代码理解大模型的底层运作机制。

## 典型使用场景

* **LLM 原理学习**：初学者通过阅读原生代码，学习从数据处理、预训练到强化学习的大模型全生命周期底层实现。
* **低成本模型实验**：在普通的个人 GPU（如单张 RTX 3090）上快速进行模型训练与算法验证。
* **垂直领域定制**：将模型迁移至私有数据集（如医疗、自我认知等），进行轻量化的定制训练。

## 核心功能

* **全阶段训练支持**：包含分词器（Tokenizer）训练、数据清洗、预训练（Pretrain）、监督微调（SFT）、LoRA 微调、直接偏好优化（DPO）、强化学习（RLAIF，含 PPO/GRPO/SPO）以及模型白盒蒸馏的完整代码。
* **多种模型架构**：支持 Dense 稠密模型与混合专家（MoE）架构，并提供复现 DeepSeek-R1 的推理模型（MiniMind-Reason）。
* **长文本与推理增强**：支持 YaRN 算法执行 RoPE 长文本外推；Reason 模型支持自适应思考（Adaptive Thinking）与思考链；全面支持 Tool Calling。
* **分布式与可视化**：支持单机单卡、单机多卡（DDP、DeepSpeed）训练，支持断点续训（自动恢复、跨 GPU 数量恢复），并可接入 SwanLab 或 WandB 进行训练过程可视化。
* **部署与交互**：内置基于 Streamlit 的极简 WebUI，提供兼容 OpenAI-API 协议的服务端，便于集成到 FastGPT、Open-WebUI 等第三方界面。

## 特色与差异点

* **极致轻量与低成本**：最小模型版本仅 25.8M（约为 GPT-3 的 1/7000），在单张 RTX 3090 上仅需约 2 小时即可完成训练，服务器租用成本极低。
* **原生代码重构**：核心算法（含 LoRA、DPO、强化学习等）均使用 PyTorch 原生从零实现，不依赖 `transformers` 或 `trl` 等第三方库的抽象接口。
* **高兼容性**：模型参数命名对齐 Transformers 库，全面兼容 `llama.cpp`、`vllm`、`ollama` 等主流推理引擎及 `Llama-Factory` 训练框架。
* **数据与模型全开源**：提供所有阶段的高质量清洗数据集（统一为 `jsonl` 格式）及预训练/微调后的模型权重。

## 使用方式概览

1. **环境准备**：基于 Python 和 PyTorch，安装项目提供的依赖文件。
2. **数据准备**：使用项目开源的高质量数据集，或按照统一格式准备私有数据集。
3. **模型训练**：通过项目脚本依次执行预训练、指令微调或强化学习等阶段，支持动态启停与断点续训。
4. **推理与部署**：可使用内置的极简服务端或 WebUI 进行对话测试，也可将模型导出至第三方推理框架（如 `llama.cpp`、`vllm`）中运行。

## 限制与注意事项

* **旧模型兼容性断裂**：由于 Llama 位置编码方式与 MiniMind 存在区别，项目在更新后不再支持“直接”加载旧版（2025年4月26日以前）模型进行推理，且已放弃对 `minimind-v1` 全系列的维护。
* **成本估算条件**：官方宣称的“2小时”与“3块钱”成本是基于单张 NVIDIA RTX 3090 硬件设备的特定测试结果，实际耗时与成本会因硬件配置和服务器定价波动而异。

## 链接

* 项目页：https://github.com/jingyaogong/minimind
* 首页：https://jingyaogong.github.io/minimind
* Release 页面：https://github.com/jingyaogong/minimind/releases/tag/v2
* HuggingFace 集合：https://huggingface.co/collections/jingyaogong/minimind-66caf8d999f5c7fa64f399e5
* ModelScope 体验：https://www.modelscope.cn/studios/gongjy/minimind
* 视觉多模态拓展（MiniMind-V）：https://github.com/jingyaogong/minimind-v

## 关联主题

- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/lora]]
- [[00-元语/multimodal]]
- [[00-元语/protocol]]
- [[00-元语/github]]
- [[00-元语/learning-resource]]
