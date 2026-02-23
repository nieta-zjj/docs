---
title: "eliza：开源多智能体 AI 开发工具，支持模块化架构与插件扩展"

发布日期: "2026-02-22"
对象: "GitHub 项目 `elizaOS/eliza`"
项目主页: "https://github.com/elizaOS/eliza"
官方网站: "https://eliza.how/"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 17573，Forks 5426，Watchers 154（抓取时间：2026-02-22）"
版本快照: "最新发布 v2.0.0-alpha.26（发布时间：2026-02-17T06:16:00Z）"
---

## 摘要

### 一句话总结
elizaOS/eliza 是一个基于 TypeScript 的开源多智能体 AI 开发框架，通过模块化架构和丰富的插件系统，帮助开发者快速构建、部署和管理自主 AI 智能体。

### 核心要点
*   **项目定位与协议**：致力于实现“面向所有人的自主智能体”，采用 MIT 开源协议，目前在 GitHub 拥有超 1.7 万 Stars。
*   **广泛的模型支持**：具备模型不可知性（Model Agnostic），全面支持 OpenAI、Gemini、Anthropic、Llama 和 Grok 等主流大语言模型。
*   **多平台接入能力**：提供开箱即用的连接器，可无缝集成至 Discord、Telegram、Farcaster 等社交平台。
*   **多智能体与 RAG 架构**：原生专为创建和编排多智能体群组而设计，并支持文档摄取以实现检索增强生成（RAG）功能。
*   **Monorepo 代码结构**：项目采用 Monorepo 管理，核心包为 `@elizaos/core`，除 TypeScript 外，还包含 Python 和 Rust（原生+WASM）的实现版本。
*   **高可扩展性**：采用“库优先”和插件化设计，官方提供包括数据库（Postgres/PGLite）及各类大模型、社交平台的丰富插件。
*   **现代化管理界面**：配备专业的 Web UI 仪表板，支持实时管理智能体、群组和对话。
*   **环境依赖要求**：开发与运行环境需依赖 Node.js (v23+) 和 bun，Windows 用户必须使用 WSL 2。
*   **学术与 Web3 背景**：项目具备 Web3 友好特性，其相关研究论文《Eliza: A Web3 friendly AI Agent Operating System》已在 arXiv 发布。

## 功能与定位

Autonomous agents for everyone

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:53:57Z。
- 项目创建于 2024-07-09T07:55:40Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/elizaOS/eliza
- 官网：https://eliza.how/
- README：https://raw.githubusercontent.com/elizaOS/eliza/develop/README.md
- Releases：https://github.com/elizaOS/eliza/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/blockchain]]
- [[00-元语/observability]]
- [[00-元语/github]]
- [[00-元语/typescript]]
