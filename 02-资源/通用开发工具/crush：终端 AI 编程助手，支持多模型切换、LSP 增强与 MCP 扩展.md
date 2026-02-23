---
title: "crush：终端 AI 编程助手，支持多模型切换、LSP 增强与 MCP 扩展"

发布日期: "2026-02-22"
对象: "GitHub 项目 `charmbracelet/crush`"
项目主页: "https://github.com/charmbracelet/crush"
开源协议: "Other"
主要语言: "Go"
统计快照: "Stars 20263，Forks 1257，Watchers 84（抓取时间：2026-02-22）"
版本快照: "最新发布 nightly（发布时间：2026-02-22T01:15:43Z）"
---

## 摘要

### 1) 一句话总结
Crush 是一款基于终端的跨平台 AI 编程助手，支持多模型无缝切换、LSP 增强和 MCP 扩展，旨在将大语言模型深度集成到开发者的本地代码与工作流中。

### 2) 核心要点
* **项目热度与基础**：使用 Go 语言开发，GitHub Stars 超过 2 万；基于支撑 2.5 万+ 应用的 Charm 生态构建，具备工业级稳定性。
* **多模型与自定义支持**：原生支持 Anthropic、OpenAI、Gemini、Groq 等主流模型，允许在会话中途切换模型并保留上下文；支持接入兼容 OpenAI 或 Anthropic 格式的自定义 API、Amazon Bedrock 及 Vertex AI。
* **上下文与扩展能力**：支持通过 LSP（语言服务器协议，如 gopls、nil）获取代码上下文；支持通过 MCP（模型上下文协议，包含 `stdio`、`http` 和 `sse` 传输方式）扩展功能。
* **跨平台兼容**：全面支持 macOS、Linux、Windows（PowerShell 和 WSL）、Android 及各类 BSD 系统，提供 Homebrew、NPM、Nix、Winget 等多种包管理器安装方式。
* **配置与会话管理**：采用基于会话的工作流；配置采用 JSON 格式，支持项目级（`.crush.json` 或 `crush.json`）和全局级配置优先级；默认遵循 `.gitignore` 并支持自定义 `.crushignore`。
* **工具权限控制**：默认在执行工具调用前会询问用户权限；支持配置允许自动执行的工具白名单，或通过配置禁用特定的内置工具。
* **Agent Skills 与初始化**：支持 Agent Skills 开放标准（通过 `SKILL.md` 发现技能）；项目初始化时会自动分析代码库并生成上下文文件（默认名为 `AGENTS.md`）。
* **Git 归属追踪**：默认在由 AI 创建的 Git 提交和 PR 中添加归属信息（如 `Assisted-by` 或 `Co-Authored-By` 尾注），该行为可通过配置自定义或关闭。

### 3) 风险与不足
* **权限安全风险**：若使用 `--yolo` 标志运行 Crush，将跳过所有工具执行的权限提示，官方明确警告需极其谨慎地使用该功能。
* **功能限制**：目前通过 Amazon Bedrock 运行 Anthropic 模型时，缓存功能处于禁用状态。

## 功能与定位

Glamourous agentic coding for all 💘

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:40:57Z。
- 项目创建于 2025-05-21T12:14:57Z，具备持续迭代与社区沉淀。
- 以 `Go` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/charmbracelet/crush
- README：https://raw.githubusercontent.com/charmbracelet/crush/main/README.md
- Releases：https://github.com/charmbracelet/crush/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/cli]]
- [[00-元语/ide]]
- [[00-元语/terminal]]
- [[00-元语/mcp]]
- [[00-元语/protocol]]
- [[00-元语/github]]
- [[00-元语/skills]]
- [[00-元语/workflow]]
