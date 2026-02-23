---
title: "Moltbot：个人 AI 助手与多渠道通信接入工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `moltbot/moltbot`"
项目主页: "https://github.com/openclaw/openclaw"
官方网站: "https://openclaw.ai"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 217476，Forks 41087，Watchers 1200（抓取时间：2026-02-22）"
版本快照: "最新发布 v2026.2.21（发布时间：2026-02-21T16:56:48Z）"
---

## 摘要

### 一句话总结
OpenClaw (moltbot) 是一款基于 TypeScript 开发的跨平台个人 AI 助手，支持在自有设备上运行，并能无缝接入 WhatsApp、Telegram、Slack、Discord 等多种主流通讯平台。

### 核心要点
* **项目热度与协议**：采用 MIT 协议开源，主要使用 TypeScript 开发，项目极具人气（拥有超 21.7 万 Stars 和 4.1 万 Forks）。
* **多渠道集成**：支持将 AI 助手接入用户现有的通讯工具，包括 WhatsApp、Telegram、Slack、Discord、Signal、iMessage、Microsoft Teams 以及 Matrix、Zalo 等扩展渠道。
* **跨平台与多媒体能力**：支持 macOS、Linux 和 Windows（强烈推荐通过 WSL2 运行），具备在 macOS/iOS/Android 上的语音收听与播报能力，并支持实时 Canvas 渲染。
* **运行环境与安装**：依赖 Node ≥22 运行环境，兼容 npm、pnpm 或 bun；官方推荐使用 CLI 向导 (`openclaw onboard`) 进行配置，并可安装网关守护进程（launchd/systemd）以保持后台常驻。
* **模型支持与推荐**：支持任意 AI 模型及 OAuth/API 密钥认证与故障转移（Failover）；官方强烈推荐使用 Anthropic Pro/Max + Opus 4.6，以获得更强的长上下文处理能力和防提示词注入（prompt-injection）能力。
* **版本发布机制**：提供 stable（稳定版）、beta（测试版）和 dev（开发版）三个更新渠道，用户可通过命令行快速切换。

### 风险与不足
* **输入安全风险**：由于 OpenClaw 直接连接真实的外部通讯平台，官方明确警告必须将所有接收到的私信（DMs）视为**不可信输入（untrusted input）**，需注意相关的安全防护。

## 功能与定位

Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:42:28Z。
- 项目创建于 2025-11-24T10:16:47Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/moltbot/moltbot
- 官网：https://openclaw.ai
- README：https://raw.githubusercontent.com/moltbot/moltbot/main/README.md
- Releases：https://github.com/moltbot/moltbot/releases

## 相关文档

- [[01-博客/liruifengv/拆解 OpenClaw 的系统提示词，设计的太妙了.md|拆解 OpenClaw 的系统提示词，设计的太妙了]]；关联理由：解说；说明：同一项目的系统提示词拆解文可补充理解其多智能体行为约束与运行机制。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/security]]
- [[00-元语/self-hosting]]
- [[00-元语/typescript]]
- [[00-元语/workflow]]
