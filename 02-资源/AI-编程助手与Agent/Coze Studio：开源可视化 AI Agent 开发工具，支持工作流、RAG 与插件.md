---
title: "Coze Studio：开源可视化 AI Agent 开发工具，支持工作流、RAG 与插件"

发布日期: "2026-02-22"
对象: "GitHub 项目 `coze-dev/coze-studio`"
项目主页: "https://github.com/coze-dev/coze-studio"
开源协议: "Apache License 2.0"
主要语言: "TypeScript"
统计快照: "Stars 19900，Forks 2836，Watchers 115（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.5.1（发布时间：2026-02-05T06:04:16Z）"
---

## 摘要

### 1) 一句话总结
Coze Studio 是一款开源的一站式可视化 AI Agent 开发平台，提供工作流、RAG、插件等核心技术，支持以低代码/无代码方式快速构建、调试和部署 AI 应用。

### 2) 核心要点
* **技术栈与架构**：后端采用 Golang，前端使用 React + TypeScript，整体基于微服务架构并遵循领域驱动设计（DDD）原则构建。
* **核心功能**：支持模型服务管理（集成 OpenAI、火山引擎等）、Agent 与 App 构建、可视化工作流编排，以及插件、知识库、数据库和提示词等资源的管理。
* **API 与 SDK 支持**：提供 OpenAPI 和 Chat SDK，使用 Personal Access Token 进行鉴权，方便开发者将 Agent 或 App 集成到自有业务系统中。
* **部署环境要求**：最低系统配置要求为 2核 CPU 和 4GB 内存，依赖 Docker 和 Docker Compose 进行容器化部署。
* **开源协议与社区热度**：项目采用 Apache License 2.0 开源协议，当前在 GitHub 拥有 19900 Stars 和 2836 Forks。
* **底层技术致谢**：项目深度集成了 Eino（Agent/工作流运行时引擎）、FlowGram（前端工作流画布引擎）和 Hertz（Go HTTP 框架）等开源技术。

### 3) 风险与局限（原文明确提及）
* **公网部署安全风险**：若在公网环境部署，存在潜在的安全隐患，具体包括：账号注册功能风险、工作流代码节点中的 Python 执行环境风险、Coze Server 监听地址配置风险、SSRF（服务器端请求伪造）以及 API 中的部分水平越权（horizontal privilege escalations）风险。
* **开源版功能限制**：开源版本与商业版本存在功能差异，部分特定功能（如音色定制）仅限商业版本使用。

## 功能与定位

An AI agent development platform with all-in-one visual tools, simplifying agent creation, debugging, and deployment like never before. Coze your way to AI Agent creation.

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T03:47:49Z。
- 项目创建于 2025-06-26T02:19:21Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/coze-dev/coze-studio
- README：https://raw.githubusercontent.com/coze-dev/coze-studio/main/README.md
- Releases：https://github.com/coze-dev/coze-studio/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/workflow]]
- [[00-元语/rag]]
- [[00-元语/sdk]]
- [[00-元语/typescript]]
- [[00-元语/observability]]
- [[00-元语/self-hosting]]
- [[00-元语/security]]
