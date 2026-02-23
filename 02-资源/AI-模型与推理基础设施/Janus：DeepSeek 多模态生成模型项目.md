---
title: "Janus：DeepSeek 多模态生成模型项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `deepseek-ai/Janus`"
项目主页: "https://github.com/deepseek-ai/Janus"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 17708，Forks 2238，Watchers 146（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
Janus 是由 DeepSeek 开源的一系列统一多模态理解与生成模型，通过解耦视觉编码或结合修正流（Rectified Flow）技术，在单一 Transformer 架构下实现了卓越的图文理解与生成能力。

**2) 核心要点**
* **项目热度与开源协议**：该 GitHub 仓库拥有超 1.7 万 Stars 和 2200+ Forks；代码采用 MIT 协议开源，模型权重在遵守相关协议的前提下允许商业使用。
* **Janus 基础架构**：采用新颖的自回归框架，将视觉编码解耦为独立路径，同时共用单一 Transformer 架构，有效缓解了视觉编码器在理解和生成任务中的角色冲突。
* **Janus-Pro 升级版**：于 2025 年 1 月发布，通过优化训练策略、扩充训练数据以及扩大模型规模，大幅提升了多模态理解能力、文生图指令遵循能力及生成的稳定性。
* **JanusFlow 创新模型**：于 2024 年 11 月发布，采用极简架构将自回归语言模型与修正流（Rectified Flow）技术无缝结合，无需复杂的架构修改即可实现高效的图像生成。
* **开源模型矩阵**：官方在 Hugging Face 提供了 4 个模型权重下载，包括 Janus-1.3B、JanusFlow-1.3B、Janus-Pro-1B 和 Janus-Pro-7B，所有模型的序列长度（Sequence Length）均为 4096。
* **生态集成与测试**：多模态理解的评估代码已成功集成至 VLMEvalKit 框架；官方同时提供了涵盖各版本模型的 Hugging Face 在线 Demo 及本地 Gradio 演示。
* **历史问题修复**：2024 年 10 月曾修复过 `tokenizer_config.json` 中的 Bug，解决了此前因无分类器引导（CFG）失效导致的视觉生成质量不佳问题。

## 功能与定位

Janus-Series: Unified Multimodal Understanding and Generation Models

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T08:29:04Z。
- 项目创建于 2024-10-18T03:48:16Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/deepseek-ai/Janus
- README：https://raw.githubusercontent.com/deepseek-ai/Janus/main/README.md
- Releases：https://github.com/deepseek-ai/Janus/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/multimodal]]
- [[00-元语/llm]]
- [[00-元语/evals]]
- [[00-元语/github]]
