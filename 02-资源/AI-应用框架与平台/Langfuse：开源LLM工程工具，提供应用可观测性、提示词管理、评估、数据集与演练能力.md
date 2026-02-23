---
title: "Langfuse：开源LLM工程工具，提供应用可观测性、提示词管理、评估、数据集与演练能力"

发布日期: "2026-02-22"
对象: "GitHub 项目 `langfuse/langfuse`"
项目主页: "https://github.com/langfuse/langfuse"
官方网站: "https://langfuse.com/docs"
开源协议: "Other"
主要语言: "TypeScript"
统计快照: "Stars 22147，Forks 2200，Watchers 64（抓取时间：2026-02-22）"
版本快照: "最新发布 v3.155.0（发布时间：2026-02-20T16:42:50Z）"
---

## 摘要

### 一句话总结
Langfuse 是一个开源的大语言模型（LLM）工程平台，提供应用可观测性、提示词管理、评估、数据集和演练场等核心功能，帮助团队协作开发、监控和调试 AI 应用。

### 关键要点
*   **项目背景**：由 YC W23 孵化，主要使用 TypeScript 开发，在 GitHub 上拥有超 2.2 万 Stars，采用 MIT 开源协议（基于徽章信息）。
*   **LLM 可观测性**：支持追踪 LLM 调用及检索、嵌入、Agent 动作等相关逻辑，帮助开发者审查和调试复杂的日志与用户会话。
*   **提示词管理**：提供集中管理、版本控制和协作迭代功能，并通过服务端与客户端的强缓存机制确保不增加应用延迟。
*   **多维度评估**：支持“LLM作为裁判（LLM-as-a-judge）”、用户反馈收集、人工标注，以及通过 API/SDK 构建自定义评估流水线。
*   **数据集与演练场**：内置数据集功能用于构建测试集和基准测试；提供 LLM 演练场（Playground）以便快速测试和迭代提示词与模型配置。
*   **部署方式灵活**：提供开箱即用的 Langfuse Cloud（含免费额度），同时支持通过 Docker Compose、Kubernetes (Helm) 或 Terraform (AWS/Azure/GCP) 在几分钟内完成私有化部署，底层依赖 ClickHouse 数据库。
*   **丰富的集成生态**：提供完善的 Python 和 JS/TS SDK，并可无缝集成 OpenAI SDK（作为直接替换件）、Langchain、LlamaIndex、LiteLLM、Vercel AI SDK 等主流框架。
*   **广泛的工具兼容**：与众多第三方 AI 工具和平台深度集成，包括 Dify、Flowise、Ollama、AutoGen、CrewAI 等。

## 功能与定位

🪢 Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets. Integrates with OpenTelemetry, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:35:40Z。
- 项目创建于 2023-05-18T17:47:09Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/langfuse/langfuse
- 官网：https://langfuse.com/docs
- README：https://raw.githubusercontent.com/langfuse/langfuse/main/README.md
- Releases：https://github.com/langfuse/langfuse/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/github]]
- [[00-元语/observability]]
- [[00-元语/prompt]]
- [[00-元语/evals]]
- [[00-元语/sdk]]
- [[00-元语/self-hosting]]
