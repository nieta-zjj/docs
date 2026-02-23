---
title: "claude-mem：为 Claude Code 构建的持久化记忆压缩插件，能够自动捕获编程会话记录、通过 AI 压缩"

发布日期: "2026-02-22"
对象: "GitHub 项目 `thedotmack/claude-mem`"
项目主页: "https://github.com/thedotmack/claude-mem"
官方网站: "https://claude-mem.ai"
开源协议: "Other"
主要语言: "TypeScript"
统计快照: "Stars 30080，Forks 2032，Watchers 135（抓取时间：2026-02-22）"
版本快照: "最新发布 v10.3.1（发布时间：2026-02-19T01:12:34Z）"
---

## 摘要

### 1) 一句话总结
Claude-Mem 是一个为 Claude Code 构建的持久化记忆压缩插件，能够自动捕获编程会话记录、通过 AI 压缩，并在未来的会话中无缝注入相关上下文。

### 2) 核心要点
*   **项目热度与技术栈**：基于 TypeScript 开发，拥有超 30,000 Stars，最新版本为 v10.3.1；系统依赖 Node.js (>=18.0.0)、Bun、uv（Python 包管理器）以及 SQLite 3。
*   **核心架构**：通过 5 个生命周期钩子自动运行，结合 SQLite（存储会话和摘要）和 Chroma 向量数据库实现混合语义与关键字搜索。
*   **MCP 搜索工具**：提供 5 个 MCP 工具（如 `search`, `timeline`, `get_observations` 等），采用“搜索索引 -> 查看时间线 -> 获取详情”的三层工作流模式，可节省约 10 倍的 Token 消耗。
*   **可视化与集成**：内置 Web 视图 UI（运行在 localhost:37777），支持实时查看记忆流；支持通过 OpenClaw 网关安装，并提供 Claude Desktop 技能以便在桌面端对话中搜索记忆。
*   **隐私与控制**：支持使用 `<private>` 标签防止敏感内容被存储，并允许对注入的上下文进行细粒度配置。
*   **开源协议**：主项目采用严格的 AGPL-3.0 协议，而 `ragtime/` 目录单独采用 PolyForm Noncommercial License 1.0.0（非商业）协议。

### 3) 风险/不足
*   **安装方式限制**：直接使用 `npm install -g claude-mem` 仅会安装 SDK/库，不会注册插件钩子或启动工作服务；必须通过 Claude Code 的 `/plugin` 命令安装才能正常作为插件使用。
*   **Windows 环境兼容性**：在 Windows 系统中可能会遇到 `npm` 命令无法识别的错误，需要手动确保 Node.js 和 npm 已正确安装并添加到 PATH 环境变量中。
*   **开源协议限制**：主项目采用 AGPL-3.0 协议，意味着修改并部署在网络服务器上的衍生作品也必须开源；且软件明确声明不提供任何担保（NO WARRANTY）。
*   **实验性功能**：包含“无尽模式（Endless Mode）”等 Beta 频道功能，目前仍处于实验阶段。

## 功能与定位

A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:55:57Z。
- 项目创建于 2025-08-31T20:50:03Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/thedotmack/claude-mem
- 官网：https://claude-mem.ai
- README：https://raw.githubusercontent.com/thedotmack/claude-mem/main/README.md
- Releases：https://github.com/thedotmack/claude-mem/releases

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/mcp]]
- [[00-元语/context-database]]
- [[00-元语/context-optimization]]
- [[00-元语/memory]]
- [[00-元语/Agent]]
- [[00-元语/cli]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
