---
title: "ktransformers：异构LLM推理与微调优化工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `kvcache-ai/ktransformers`"
项目主页: "https://github.com/kvcache-ai/ktransformers"
官方网站: "https://kvcache-ai.github.io/ktransformers/"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 16534，Forks 1214，Watchers 112（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.5.1（发布时间：2026-01-22T08:09:35Z）"
---

## 摘要

**1) 一句话总结**
KTransformers 是一个基于 CPU-GPU 异构计算的开源框架，专注于为大语言模型（特别是超大 MoE 模型）提供高效的推理与微调优化方案。

**2) 关键要点**
* **核心架构**：项目包含 `kt-kernel`（高性能推理算子）和 `kt-sft`（微调框架）两个核心模块，主要使用 Python 开发，基于 Apache 2.0 协议开源。
* **异构计算与内存优化**：支持 CPU-GPU 专家调度（热专家在 GPU，冷专家在 CPU）及 NUMA 感知的内存管理，并利用 Intel AMX/AVX512/AVX2 指令集加速 CPU 端的 INT4/INT8 量化推理。
* **极致的微调资源效率**：`kt-sft` 模块与 LLaMA-Factory 深度集成，支持 LoRA 和 RL-DPO 微调；仅需 70GB 显存和 1.3TB 内存即可微调 671B 参数的 DeepSeek-V3 模型。
* **高性能推理指标**：支持原生 BF16/FP8 精度、多并发及 3 层（GPU-CPU-Disk）前缀缓存复用；在 8×L20 GPU + Xeon CPU 环境下，DeepSeek-R1 (FP8) 的总吞吐量可达 227.85 tokens/s。
* **长上下文与低显存支持**：在单卡 24GB 显存下，支持 DeepSeek-V3/R1 运行高达 139K 的长上下文；曾通过优化将 DeepseekV2 的显存需求从 21GB 降至 11GB。
* **广泛的硬件兼容性**：除 NVIDIA GPU 外，还支持 Intel Arc GPU、AMD ROCm、昇腾（Ascend）NPU 以及 Windows 原生环境。
* **丰富的模型与生态支持**：已集成至 SGLang 用于生产级服务；实现对 MiniMax-M2.5、GLM-5、Kimi-K2.5 等模型的首日（Day0）支持，并兼容 Qwen3、LLaMA 4（实验性）等主流模型。

## 功能与定位

A Flexible Framework for Experiencing Heterogeneous LLM Inference/Fine-tune Optimizations

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T09:06:57Z。
- 项目创建于 2024-07-26T07:18:28Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/kvcache-ai/ktransformers
- 官网：https://kvcache-ai.github.io/ktransformers/
- README：https://raw.githubusercontent.com/kvcache-ai/ktransformers/main/README.md
- Releases：https://github.com/kvcache-ai/ktransformers/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/lora]]
- [[00-元语/benchmark]]
- [[00-元语/hardware-control]]
- [[00-元语/github]]
