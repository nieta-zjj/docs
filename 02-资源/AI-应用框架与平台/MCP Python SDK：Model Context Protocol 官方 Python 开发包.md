---
title: "MCP Python SDK：Model Context Protocol 官方 Python 开发包"

发布日期: "2026-02-22"
对象: "GitHub 项目 `modelcontextprotocol/python-sdk`"
项目主页: "https://github.com/modelcontextprotocol/python-sdk"
官方网站: "https://modelcontextprotocol.github.io/python-sdk/"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 21757，Forks 3105，Watchers 151（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.26.0（发布时间：2026-01-24T19:26:20Z）"
---

## 摘要

**1) 一句话总结**
`modelcontextprotocol/python-sdk` 是模型上下文协议（MCP）的官方 Python SDK，旨在通过标准化的方式为大语言模型（LLM）提供上下文，支持快速构建 MCP 服务器与客户端。

**2) 关键要点**
* **项目定位**：官方 Python 实现，实现了完整的 MCP 规范，将提供上下文的逻辑与实际的 LLM 交互解耦。
* **核心功能**：支持创建暴露资源（Resources）、提示词（Prompts）和工具（Tools）的 MCP 服务器，以及构建可连接任意 MCP 服务器的客户端。
* **传输协议支持**：内置支持多种标准传输方式，包括标准输入输出（stdio）、服务器推送事件（SSE）和 Streamable HTTP。
* **版本与状态**：当前稳定版本为 v1.x（最新发布版本为 v1.26.0），下一代 v2 版本目前在 `main` 分支上处于 pre-alpha 开发阶段。
* **安装与依赖**：官方推荐使用 `uv` 包管理器进行项目管理和安装（如 `uv add "mcp[cli]"`），同时也兼容传统的 `pip` 安装方式。
* **社区与开源**：项目基于 MIT 协议开源，社区热度极高，拥有超过 21,700 个 Stars 和 3,100 个 Forks。
* **高级特性**：支持结构化输出、分页、客户端 OAuth 认证、FastMCP 属性配置以及与现有 ASGI 服务器的挂载集成（如 Claude Desktop 集成）。

## 功能与定位

The official Python SDK for Model Context Protocol servers and clients

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T10:19:48Z。
- 项目创建于 2024-09-24T21:01:35Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/modelcontextprotocol/python-sdk
- 官网：https://modelcontextprotocol.github.io/python-sdk/
- README：https://raw.githubusercontent.com/modelcontextprotocol/python-sdk/main/README.md
- Releases：https://github.com/modelcontextprotocol/python-sdk/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/mcp]]
- [[00-元语/protocol]]
- [[00-元语/sdk]]
- [[00-元语/llm]]
- [[00-元语/workflow]]
- [[00-元语/github]]
