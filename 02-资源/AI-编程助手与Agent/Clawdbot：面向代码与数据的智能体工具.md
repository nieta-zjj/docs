---
title: "Clawdbot：面向代码与数据的智能体工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `clawdbot/clawdbot`"
项目主页: "https://github.com/clawdbot/clawdbot"
官方网站: "https://openclaw.ai"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 217431，Forks 41075，Watchers 1199（抓取时间：2026-02-22）"
版本快照: "最新发布 v2026.2.21（发布时间：2026-02-21T16:56:48Z）"
---

## 摘要

**1) 一句话总结**
OpenClaw (clawdbot) 是一个基于 TypeScript 开发的跨平台、高热度个人 AI 助手，支持在本地设备运行并无缝接入 WhatsApp、Telegram、Slack 等数十种主流通讯渠道。

**2) 核心要点**
*   **项目定位**：专为单用户设计的个人 AI 助手，强调本地化、快速且始终在线，支持 macOS/iOS/Android 的语音收发以及实时 Canvas 渲染控制。
*   **多渠道集成**：支持将 AI 助手接入用户常用的通讯工具，包括 WhatsApp、Telegram、Slack、Discord、Signal、iMessage、Microsoft Teams、Matrix 等。
*   **运行环境**：主要使用 TypeScript 开发，依赖 Node.js ≥22 运行环境，兼容 npm、pnpm 和 bun 包管理器。
*   **安装与部署**：推荐使用 CLI 向导 (`openclaw onboard`) 进行配置，支持 macOS、Linux 和 Windows（强烈推荐通过 WSL2 运行），并可自动安装系统守护进程（launchd/systemd）以保持后台运行。
*   **模型与订阅**：支持多模型配置及 OAuth/API 密钥轮换与故障转移；官方强烈推荐使用 Anthropic Pro/Max + Opus 4.6 模型，以获得更强的长上下文处理能力和抗提示词注入（Prompt-injection）能力。
*   **版本通道**：提供 stable（稳定版）、beta（测试版）和 dev（开发版）三个更新通道，支持通过 `openclaw update` 命令快速切换。
*   **安全策略**：网关连接真实的通讯界面，系统默认将所有传入的私信（DMs）视为不可信输入（Untrusted input）以保障安全。
*   **项目数据**：采用 MIT 开源协议，社区热度极高（超 21.7 万 Stars，4.1 万 Forks），并获得 OpenAI 和 Blacksmith 的赞助。

## 功能与定位

Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞 

## 典型使用场景

- 作为开发阶段的 AI 助手，承担代码理解、生成与任务编排。
- 在团队中作为可扩展 agent 能力层，连接模型与工具链。

## 核心功能

- 提供面向工程任务的 agent 交互能力。
- 支持与代码仓库、终端或外部服务集成。
- 通过配置扩展模型、工具或执行策略。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:24:27Z。
- 项目创建于 2025-11-24T10:16:47Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/clawdbot/clawdbot
- 官网：https://openclaw.ai
- README：https://raw.githubusercontent.com/clawdbot/clawdbot/main/README.md
- Releases：https://github.com/clawdbot/clawdbot/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/cli]]
- [[00-元语/security]]
- [[00-元语/typescript]]
- [[00-元语/github]]
- [[00-元语/llm]]
- [[00-元语/tool]]
