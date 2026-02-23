---
title: "vibe-kanban：基于 Rust 开发的开源工具，旨在帮助开发者高效管理、编排和审查 Claude Code 等多种 AI 编程 Agent 的工作任务"

发布日期: "2026-02-22"
对象: "GitHub 项目 `BloopAI/vibe-kanban`"
项目主页: "https://github.com/BloopAI/vibe-kanban"
官方网站: "https://www.vibekanban.com/"
开源协议: "Apache License 2.0"
主要语言: "Rust"
统计快照: "Stars 21599，Forks 2076，Watchers 89（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.1.18-20260221114038（发布时间：2026-02-21T11:57:30Z）"
---

## 摘要

### 1) 一句话总结
Vibe Kanban 是一个基于 Rust 开发的开源工具，旨在帮助开发者高效管理、编排和审查 Claude Code 等多种 AI 编程 Agent 的工作任务。

### 2) 关键点
* **核心功能**：支持在不同的 AI 编程 Agent 之间无缝切换，可并行或串行编排多个 Agent 的执行，并提供代码审查、启动开发服务器及任务状态跟踪功能。
* **技术栈与数据**：项目主要使用 Rust 开发（前端依赖 Node.js >=18 和 pnpm >=8），采用 Apache License 2.0 协议，目前在 GitHub 上拥有超过 21,000 个 Stars。
* **安装与运行**：用户在完成 AI Agent 的身份验证后，可通过终端运行 `npx vibe-kanban` 快速启动。
* **集中化配置**：支持集中管理和配置编程 Agent 的 MCP（Model Context Protocol）设置。
* **远程开发支持**：支持在远程服务器上部署，配置后可通过 VSCode Remote-SSH 扩展，在本地编辑器中直接打开并连接远程项目。
* **自托管与代理配置**：支持自托管（Self-Hosting）；当使用反向代理或自定义域名时，必须设置 `VK_ALLOWED_ORIGINS` 环境变量，否则 API 请求将被拒绝（403 错误）。
* **贡献规范**：官方要求在提交 PR 之前，必须先通过 GitHub Discussions 或 Discord 与核心团队沟通想法和实现细节。

## 功能与定位

Get 10X more out of Claude Code, Codex or any coding agent

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:44:35Z。
- 项目创建于 2025-06-14T19:10:21Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/BloopAI/vibe-kanban
- 官网：https://www.vibekanban.com/
- README：https://raw.githubusercontent.com/BloopAI/vibe-kanban/main/README.md
- Releases：https://github.com/BloopAI/vibe-kanban/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/Claude]]
- [[00-元语/Codex]]
- [[00-元语/mcp]]
- [[00-元语/cli]]
- [[00-元语/code-review]]
- [[00-元语/github]]
- [[00-元语/self-hosting]]
- [[00-元语/vibe-coding]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
