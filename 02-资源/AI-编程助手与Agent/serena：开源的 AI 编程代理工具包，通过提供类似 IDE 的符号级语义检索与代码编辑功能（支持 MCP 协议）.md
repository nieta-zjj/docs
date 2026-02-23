---
title: "serena：开源的 AI 编程代理工具包，通过提供类似 IDE 的符号级语义检索与代码编辑功能（支持 MCP 协议）"

发布日期: "2026-02-22"
对象: "GitHub 项目 `oraios/serena`"
项目主页: "https://github.com/oraios/serena"
官方网站: "https://oraios.github.io/serena"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 20479，Forks 1376，Watchers 77（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.1.4（发布时间：2025-08-15T12:01:05Z）"
---

## 摘要

### 1) 一句话总结
Serena 是一个开源的 AI 编程代理工具包，通过提供类似 IDE 的符号级语义检索与代码编辑功能（支持 MCP 协议），帮助大语言模型（LLM）高效、精准地操作复杂代码库。

### 2) 核心要点
* **核心功能**：提供符号级别的代码检索与编辑工具（如 `find_symbol`、`insert_after_symbol`），使 LLM 无需读取完整文件或使用基础字符串替换即可精准修改代码，大幅提升 Token 效率。
* **广泛的集成能力**：内置 MCP（模型上下文协议）服务器，无缝兼容 Claude Code/Desktop、VSCode、Cursor、IntelliJ 等 IDE，以及各类终端和本地客户端；同时支持通过 OpenAPI 或自定义代理框架进行集成。
* **双引擎支持（LSP）**：内置基于语言服务器协议（LSP）的底层库 Solid-LSP（基于 `multilspy` 封装），原生支持 Python、Java、C/C++、JavaScript 等 30 多种编程语言。
* **双引擎支持（JetBrains 插件）**：提供专属的 JetBrains 插件作为替代方案，可利用 IDE 原生的强大代码分析能力（支持除 Rider 外的所有 JetBrains IDE）。
* **技术栈与开源状态**：主要使用 Python 开发，采用 MIT 开源协议，目前在 GitHub 上拥有超 2 万 Stars，底层依赖 `multilspy` 和 Python MCP SDK。
* **部署与启动**：项目依赖 `uv` 包管理器，用户可通过 `uvx` 命令直接从 GitHub 快速启动其 MCP 服务器。
* **高扩展性**：开发者可以通过继承 `serena.agent.Tool` 类并实现 `apply` 方法，轻松为代理添加自定义工具或扩展对新编程语言的支持。
* **社区与赞助**：项目获得了 Visual Studio Code 团队、微软开源项目办公室及 GitHub Open Source 的一次性赞助支持。

### 3) 风险与不足
* **小项目收益低**：在处理仅包含极少或极小文件的任务时，引入 Serena 可能无法带来明显的额外收益。
* **从零开发场景受限**：在从零开始编写全新代码（Write from scratch）时，由于尚未建立可供 Serena 优雅解析的复杂代码结构，该工具在初期无法提供太多价值。

## 功能与定位

A powerful coding agent toolkit providing semantic retrieval and editing capabilities (MCP server & other integrations)

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:31:38Z。
- 项目创建于 2025-03-23T22:35:24Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/oraios/serena
- 官网：https://oraios.github.io/serena
- README：https://raw.githubusercontent.com/oraios/serena/main/README.md
- Releases：https://github.com/oraios/serena/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/ide]]
- [[00-元语/jetbrains]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
- [[00-元语/protocol]]
