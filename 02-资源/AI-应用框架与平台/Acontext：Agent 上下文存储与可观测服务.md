---
title: "Acontext：Agent 上下文存储与可观测服务"

对象: "Git 项目"
发布日期: "2026-02-22"
来源:
  - "https://github.com/memodb-io/Acontext"
  - "https://acontext.io/"
---

## 摘要

### 1) 一句话总结
Acontext 是一个专为生产级 AI Agent 打造的后端服务平台，提供开箱即用的多模态上下文统一存储、内置上下文工程与可观测性能力，助力 Agent 从本地演示平滑扩展至生产环境。

### 2) 核心要点
*   **产品定位与架构**：定位为“Agent 上下文领域的 Supabase”，采用 Go + Python 技术栈，底层基于 S3、Postgres、RabbitMQ、Redis 等企业级组件构建完整的后端服务。
*   **统一上下文存储**：支持多模态数据（消息与产物）的统一存储。会话管理支持跨模型（OpenAI、Anthropic、Gemini）格式自动转换；提供持久化虚拟磁盘（Disk）及服务端技能管理。
*   **安全沙盒环境**：内置隔离的代码执行沙盒（Sandbox），支持 bash、Python 及常用工具，用于运行代码、分析数据和导出产物。
*   **零代码上下文工程**：提供统一的编辑 API，通过摘要和编辑策略自动压缩上下文窗口，同时确保原始消息不被篡改。
*   **全链路可观测性**：支持异步会话摘要和近实时状态追踪，提供统一仪表盘（Dashboard）用于可视化 Agent 成功率指标及回放运行轨迹。
*   **核心应用场景**：适用于长期运行的 Agent 管理、状态追踪评估，以及通过观察历史成功/失败记录提取 SOP，实现 Agent 的自我学习与进化。
*   **广泛的生态兼容**：无缝集成 Claude Agent SDK、Vercel AI-SDK、OpenAI SDK、Agno 以及 smolagents 等主流框架。
*   **部署与接入方式**：采用 Apache License 2.0 开源协议。支持云端托管（Acontext.io）和本地部署（`acontext-cli`），官方提供 Python/TypeScript SDK 及多种端到端 Agent 模板。

### 3) 风险与限制
*   **模型能力要求**：使用的 LLM 必须具备工具调用（Tool Calling）能力。
*   **本地部署依赖**：本地部署强依赖 Docker 环境。
*   **API Key 限制**：本地部署需要提供 OpenAI API Key（系统默认使用 gpt-4.1 模型）。

## 功能与定位

Acontext 是一个专为生产级和自学习 AI Agent 打造的上下文数据平台（由 memobase 团队开发）。它的定位类似于“Agent 上下文领域的 Supabase”，旨在提供开箱即用的统一存储、内置上下文工程和可观测性能力。它不仅是一个本地 Python 库，而是一个完整的后端服务，帮助开发者将 Agent 从本地演示平滑扩展到生产环境，而无需从头构建上下文基础设施。

## 典型使用场景

- **长期运行的 Agent 管理**：为需要长时间运行的 Agent 提供持久化的上下文管理机制。
- **多模态数据统一存储**：解决 LLM 消息、文件、技能等上下文数据分散在不同存储介质中的问题。
- **Agent 状态追踪与评估**：追踪多模态、多模型 Agent 的运行状态，评估其表现与成功率。
- **Agent 自我学习与进化**：通过观察 Agent 的工作进程，从其成功或失败的记录中提取经验与标准作业程序（SOP）。

## 核心功能

- **上下文存储 (Context Storage)**
  - **会话管理 (Session)**：保存来自任意 LLM 和模态的 Agent 历史记录。支持以 OpenAI、Anthropic 或 Gemini 格式存储消息，并在检索时自动转换。
  - **虚拟磁盘 (Disk)**：为 Agent 提供持久化的虚拟文件系统，支持读、写、grep、glob 等操作。
  - **沙盒环境 (Sandbox)**：提供隔离的代码执行环境（支持 bash、Python 及常用工具），用于运行代码、分析数据和导出产物 (Artifacts)。
  - **Agent 技能 (Agent Skills)**：在服务端管理技能，支持将可复用的技能挂载到沙盒中。
- **上下文工程 (Context Engineering)**
  - 提供统一的上下文编辑 API。通过摘要和编辑策略压缩上下文窗口，同时保持原始消息不被篡改。
- **上下文可观测性 (Context Observability)**
  - **会话摘要 (Session Summary)**：异步总结 Agent 的工作进展和用户反馈。
  - **状态追踪 (State Tracking)**：近乎实时地收集 Agent 的工作状态（后台 TODO agent）。
  - **统一仪表盘 (Dashboard)**：可视化查看 Agent 的成功率等指标，并支持回放 Agent 的运行轨迹。

## 特色与差异点

- **统一的数据管理**：能够统一存储多模态上下文数据（Messages 与 Artifacts）。
- **零代码上下文管理**：内置上下文管理方法，开发者只需极少配置即可使用，无需编写复杂的上下文处理逻辑。
- **广泛的生态兼容性**：无缝集成多种主流 SDK 和框架，包括 Claude Agent SDK、Vercel AI-SDK、OpenAI SDK、Agno 以及 smolagents。
- **企业级技术栈**：采用 Go + Python 技术栈，底层基于 S3、Postgres、RabbitMQ、Redis 等成熟组件构建，具备良好的扩展性。

## 使用方式概览

- **云端托管**：可通过 https://acontext.io/ 注册获取 API Key（提供免费额度）直接接入云端服务。
- **本地部署**：官方提供 `acontext-cli` 工具，依赖 Docker 环境即可在本地快速启动后端服务（包含 API 和 Dashboard）。
- **SDK 接入**：官方维护 Python 和 TypeScript SDK，并提供丰富的端到端 Agent 模板（如 OpenAI Agent、Claude Agent、交互式沙盒技能等）供开发者参考。

## 限制与注意事项

- 本地部署依赖 Docker，且需要提供 OpenAI API Key（默认使用 gpt-4.1）。
- 使用的 LLM 必须具备工具调用（Tool Calling）能力。
- 项目目前采用 Apache License 2.0 开源协议。

## 链接

- GitHub 仓库: https://github.com/memodb-io/Acontext
- 官网: https://acontext.io/

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/context-database]]
- [[00-元语/context-optimization]]
- [[00-元语/observability]]
- [[00-元语/multimodal]]
- [[00-元语/virtual-file-system]]
- [[00-元语/sdk]]
- [[00-元语/self-hosting]]
