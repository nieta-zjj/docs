---
title: "adk-python：Python SDK，用于构建、评估与部署 AI Agent"

发布日期: "2026-02-22"
对象: "GitHub 项目 `google/adk-python`"
项目主页: "https://github.com/google/adk-python"
官方网站: "https://google.github.io/adk-docs/"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 17906，Forks 2952，Watchers 146（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.25.1（发布时间：2026-02-18T22:20:39Z）"
---

## 摘要

**1) 一句话总结**
google/adk-python 是一个开源的、代码优先的 Python 框架，旨在提供灵活的控制能力，帮助开发者构建、评估和部署复杂的 AI 智能体（Agent）。

**2) 关键要点**
* **项目基础**：采用 Apache 2.0 协议开源，主要语言为 Python，目前拥有超 1.7 万 Stars，最新稳定版本为 v1.25.1。
* **核心架构**：采用代码优先（Code-First）开发模式，同时提供无代码的 Agent Config 选项；框架与具体模型和部署环境解耦（对 Gemini 进行了优化）。
* **多智能体系统**：支持模块化设计，允许通过组合多个专用智能体（如协调者和子智能体）来构建灵活且可扩展的层级结构。
* **工具与生态**：支持预置工具、自定义函数、OpenAPI 规范及 MCP 工具，与 Google 生态深度集成，并设有专门的社区仓库（adk-python-community）用于第三方扩展。
* **执行控制与安全**：内置工具确认流程（HITL，人机交互），可通过显式确认和自定义输入来拦截和保护工具的执行。
* **最新特性**：近期更新引入了 FastAPI 自定义服务注册、会话回溯（Rewind）功能，以及基于 Vertex AI 沙盒的全新代码执行器（CodeExecutor）。
* **部署与测试**：支持容器化部署至 Cloud Run 或 Vertex AI Agent Engine，内置开发 UI 界面，并提供命令行工具（`adk eval`）用于智能体评估。
* **外部集成**：集成了 A2A（Agent2Agent）协议，支持远程智能体之间的通信与协作。

## 功能与定位

An open-source, code-first Python toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control.

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:47:46Z。
- 项目创建于 2025-04-01T20:44:40Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/google/adk-python
- 官网：https://google.github.io/adk-docs/
- README：https://raw.githubusercontent.com/google/adk-python/main/README.md
- Releases：https://github.com/google/adk-python/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/sdk]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
- [[00-元语/protocol]]
- [[00-元语/evals]]
- [[00-元语/cli]]
