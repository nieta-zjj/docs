---
title: "Google ADK：Agent 开发工具包与多语言部署支持"

对象: "文档站点"
发布日期: "2026-02-22"
来源: "https://google.github.io/adk-docs/"
---

## 摘要

### 1) 一句话总结
Agent Development Kit (ADK) 是一个支持多语言、模型无关且高度模块化的 AI 智能体开发与部署框架，旨在帮助开发者构建、编排、评估并部署从简单任务到复杂多智能体协作的自动化工作流。

### 2) 关键要点
- **多语言原生支持**：提供 Python、TypeScript、Go 和 Java 四种主流编程语言的 SDK。
- **模型与部署无关性**：支持 Gemini、Claude、Ollama、vLLM、LiteLLM 等多种模型后端；支持本地运行、容器化部署（Docker、Cloud Run、GKE）以及 Vertex AI Agent Engine 扩展。
- **灵活编排与多智能体架构**：支持固定流程（顺序、并行、循环）和基于 LLM 的动态路由，允许将多个专用智能体组合成层级结构进行任务协调与委派。
- **丰富的工具生态**：内置搜索和代码执行工具，支持接入自定义函数、MCP 工具、OpenAPI 接口，且支持将其他智能体作为工具调用。
- **多模态与实时交互**：支持音频、图像和视频的实时双向流式（Bidi-streaming）处理，以及智能体间通信协议（A2A Protocol）。
- **上下文与记忆管理**：提供上下文缓存与压缩功能，支持会话（Session）的回溯、迁移以及状态管理。
- **内置评估系统**：支持基于预设测试用例评估响应质量与执行轨迹，并提供用户模拟（User Simulation）功能。
- **信息基座（Grounding）**：原生支持接入 Google Search 和 Vertex AI Search 作为数据基座。

### 3) 风险与缺口
- **安全责任**：框架未包揽所有安全机制，开发者需自行实施安全模式和最佳实践，以确保构建出安全可信的应用。
- **工具调用限制**：工具调用存在特定的性能和功能限制，开发者需参考官方文档中的工具限制说明，并配置操作确认（Action confirmations）机制。

## 功能与定位

Google ADK（Agent Development Kit）是一个灵活、模块化的 Agent 开发与部署框架，目标是让 Agent 开发过程更接近传统软件工程。它支持从单一任务到复杂多 Agent 工作流的构建、编排、评估与上线，并强调与具体模型和部署环境解耦。

## 典型使用场景

- 构建包含顺序、并行、循环步骤的自动化 Agent 工作流。
- 开发需要动态路由和任务委派的多 Agent 协作系统。
- 搭建需要工具调用与外部 API 集成的企业应用。
- 构建涉及音频、图像、视频实时交互的多模态 Agent 应用。

## 核心功能

- 提供工作流 Agent 编排能力，支持 `Sequential`、`Parallel`、`Loop` 等流程模式。
- 支持基于 `LlmAgent transfer` 的动态路由能力。
- 内置搜索、代码执行等工具能力，并支持 MCP 与 OpenAPI 工具接入。
- 支持上下文缓存与压缩、会话回溯与状态管理。
- 提供内置评估能力，可评估最终结果与执行轨迹。
- 提供 Observability 与 Evaluation 对应文档与能力入口，覆盖开发后的观测与评测环节。
- 支持 A2A Protocol 与 Bidi-streaming（live）相关能力。

## 特色与差异点

- 多语言 SDK 覆盖 Python、TypeScript、Go、Java。
- 官方定位强调模型无关、部署无关，并可与其他框架协作。
- 部署方式覆盖本地、Docker、Cloud Run、GKE 与 Vertex AI Agent Engine 扩展路径。

## 使用方式概览

- 按语言选择对应快速开始路径（Python、TypeScript、Go、Java）。
- 通过框架提供的 Agent、Tool、Runtime、Memory、Session 等模块组合业务流程。
- 在开发阶段接入 Observability 与 Evaluation，形成可观测与可评估的迭代闭环。

## 限制与注意事项

- 安全与合规策略需要开发者在应用侧自行设计与落实。
- 工具调用存在边界与限制，落地前应按官方限制说明进行验证。
- 本文只做框架能力与场景归档，不展开具体可执行实现细节。

## 链接

- 文档主页：https://google.github.io/adk-docs/
- Python SDK：https://github.com/google/adk-python
- TypeScript SDK：https://github.com/google/adk-js
- Go SDK：https://github.com/google/adk-go
- Java SDK：https://github.com/google/adk-java

## 关联主题

- [[00-元语/AI]]
- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/sdk]]
- [[00-元语/workflow]]
- [[00-元语/llm]]
- [[00-元语/protocol]]
- [[00-元语/multimodal]]
- [[00-元语/observability]]
- [[00-元语/evals]]
- [[00-元语/mcp]]
- [[00-元语/memory]]
- [[00-元语/rag]]
- [[00-元语/serverless]]
