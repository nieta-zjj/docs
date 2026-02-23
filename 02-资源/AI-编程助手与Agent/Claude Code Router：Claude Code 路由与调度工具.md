---
title: "Claude Code Router：Claude Code 路由与调度工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `musistudio/claude-code-router`"
项目主页: "https://github.com/musistudio/claude-code-router"
官方网站: "https://musistudio.github.io/claude-code-router/"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 28157，Forks 2174，Watchers 107（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
Claude Code Router 是一个基于 TypeScript 的开源工具，它作为 Claude Code 的底层路由基础设施，允许开发者将代码助手的请求动态路由到多种大语言模型（如 DeepSeek、Gemini 等），并支持高度自定义的交互方式。

**2) 核心要点**
*   **项目基础信息**：基于 TypeScript 开发，采用 MIT 开源协议，社区关注度极高（超 2.8 万 Stars，2174 Forks），需配合官方 `@anthropic-ai/claude-code` 共同安装使用。
*   **多供应商与模型路由**：支持 OpenRouter、DeepSeek、Ollama、Gemini、Volcengine 和 SiliconFlow 等多种模型供应商，可根据任务需求（如后台任务、深度思考、长上下文）将请求路由至不同模型。
*   **动态切换与 CLI 管理**：支持在 Claude Code 运行过程中通过 `/model` 命令即时切换模型，同时提供 `ccr model` 命令行工具用于直接管理模型和供应商。
*   **请求/响应转换与插件系统**：内置 Transformer 机制，允许针对不同供应商自定义请求和响应格式，并可通过自定义插件扩展功能。
*   **CI/CD 与自动化集成**：提供 `NON_INTERACTIVE_MODE`（非交互模式），完美兼容 GitHub Actions、Docker 容器等自动化 CI/CD 环境，防止进程挂起。
*   **安全与密钥管理**：支持在配置文件中使用环境变量插值（如 `$VAR_NAME`）来安全管理 API 密钥；若未配置 `APIKEY`，系统会出于安全考虑强制将 Host 绑定为 `127.0.0.1` 以防越权访问。
*   **双层日志系统**：内置独立的日志记录机制，分为服务器级日志（记录 HTTP 请求、API 调用）和应用级日志（记录路由决策与业务逻辑）。
*   **商业赞助**：项目目前由 Z.ai 赞助，支持其 GLM CODING PLAN（基于 GLM-4.7 模型的 AI 编程订阅服务）。

## 功能与定位

Use Claude Code as the foundation for coding infrastructure, allowing you to decide how to interact with the model while enjoying updates from Anthropic.

## 典型使用场景

- 作为开发阶段的 AI 助手，承担代码理解、生成与任务编排。
- 在团队中作为可扩展 agent 能力层，连接模型与工具链。

## 核心功能

- 提供面向工程任务的 agent 交互能力。
- 支持与代码仓库、终端或外部服务集成。
- 通过配置扩展模型、工具或执行策略。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:06:04Z。
- 项目创建于 2025-02-25T02:17:18Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/musistudio/claude-code-router
- 官网：https://musistudio.github.io/claude-code-router/
- README：https://raw.githubusercontent.com/musistudio/claude-code-router/main/README.md
- Releases：https://github.com/musistudio/claude-code-router/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/Claude]]
- [[00-元语/llm]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/CI]]
- [[00-元语/github]]
- [[00-元语/typescript]]
