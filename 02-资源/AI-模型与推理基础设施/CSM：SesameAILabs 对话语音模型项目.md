---
title: "CSM：SesameAILabs 对话语音模型项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `SesameAILabs/csm`"
项目主页: "https://github.com/SesameAILabs/csm"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 14501，Forks 1462，Watchers 746（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
SesameAILabs 开源的 CSM 是一个基于 Llama 骨干网络和 Mimi 音频解码器的对话式语音生成模型，支持通过文本和音频上下文生成高质量语音。

**2) 关键要点**
* **项目定位**：开源的对话式语音生成模型，主要使用 Python 开发，采用 Apache License 2.0 协议，在 GitHub 拥有超 1.4 万 Stars。
* **模型架构**：采用 Llama 作为骨干网络（依赖 Llama-3.2-1B），结合较小的音频解码器，根据文本和音频输入生成 Mimi 音频代码（RVQ audio codes）。
* **生态集成**：官方发布了 1B 参数变体（CSM-1B）并托管于 Hugging Face，自 `4.52.1` 版本起已在 Hugging Face Transformers 库中获得原生支持。
* **环境要求**：推荐使用 Python 3.10 和 CUDA 兼容的 GPU（已在 CUDA 12.4 和 12.6 测试），部分音频操作需安装 `ffmpeg`；Windows 用户需特殊安装 `triton-windows`。
* **使用方式**：支持无上下文的单句生成（系统会随机分配说话人身份），以及带上下文的生成（通过提供历史对话片段 `Segment` 可获得最佳的语音效果）。
* **声音特性**：当前开源版本为基础生成模型，能够生成多种声音，但未针对任何特定声音进行微调。

**3) 风险与不足**
* **功能局限**：CSM 专用于音频生成，并非通用多模态 LLM，无法生成文本（官方建议配合独立的 LLM 进行文本生成）。
* **语言支持不足**：模型主要支持英语，对非英语语言的支持仅源于训练数据的污染，实际表现可能不佳。
* **滥用风险**：官方明确禁止将该模型用于未经同意的个人声音模仿（欺诈）、制造虚假信息（如假新闻或诈骗电话）以及其他非法或恶意的活动。

## 功能与定位

A Conversational Speech Generation Model

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T08:30:28Z。
- 项目创建于 2025-02-26T15:38:54Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/SesameAILabs/csm
- README：https://raw.githubusercontent.com/SesameAILabs/csm/main/README.md
- Releases：https://github.com/SesameAILabs/csm/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/audio]]
- [[00-元语/tts]]
- [[00-元语/multimodal]]
- [[00-元语/deepfake]]
- [[00-元语/github]]
- [[00-元语/compliance]]
