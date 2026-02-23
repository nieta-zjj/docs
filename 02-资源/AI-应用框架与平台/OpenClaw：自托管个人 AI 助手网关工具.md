---
title: "OpenClaw：自托管个人 AI 助手网关工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `openclaw/openclaw`"
项目主页: "https://github.com/openclaw/openclaw"
官方网站: "https://openclaw.ai"
官方文档: "https://docs.openclaw.ai"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 217144，Forks 41004，Watchers 1196（抓取时间：2026-02-22）"
版本快照: "最新 release `v2026.2.21`，发布时间 `2026-02-21`"
备注: "用户提供“29675”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

**一句话总结**
OpenClaw 是一个基于 TypeScript 开发的开源跨平台个人 AI 助手与多渠道网关，主打数据主权与自托管，允许用户通过主流通讯软件与专属 AI 进行交互并处理自动化工作流。

**核心要点**
- **开源与技术栈**：采用 MIT 协议开源，主要使用 TypeScript 开发。
- **核心理念**：强调“让用户掌握自己的数据（own-your-data）”，作为自托管网关运行在用户自有设备或私有服务器上，保障数据隐私。
- **多渠道接入**：支持将 AI 助手接入 Telegram、Slack、Discord、WhatsApp、Google Chat、Signal、iMessage、Microsoft Teams、WebChat 等多种主流通讯软件。
- **可扩展架构**：提供 Gateway 架构，支持通过工具（tools）、插件（plugins）和节点（nodes）扩展 AI 能力，并内置 `clawdbot` 和 `moltbot` 等预置包。
- **部署与管理**：提供 Web UI 进行图形化管理；支持本地直接运行、远程网关模式，以及通过 Docker、Nix 或结合 Tailscale 进行部署。
- **安全机制**：默认采用私信配对（DM pairing）和白名单（allowlist）机制作为基础安全保障。
- **初始化流程**：官方推荐通过运行 `openclaw onboard` 命令进行引导，并进行守护进程（daemon）安装。
- **多语言支持**：官方文档原生提供中文（`zh-CN`）支持。

**风险与不足**
- **环境限制**：必须确保运行环境的 Node.js 版本不低于 22，否则可能无法正常运行。

## 功能与定位

OpenClaw 的定位是“运行在你自己设备上的个人 AI 助手网关”。它把多个聊天渠道、代理运行时和工具系统聚合到同一个 Gateway 控制面，强调单用户场景下的持续可用与自主管理。

## 典型使用场景

- 用日常聊天入口（如 Telegram、Discord、WhatsApp）直接驱动个人 AI 助手。
- 在自托管环境中搭建长期在线的代理工作流，并保留本地数据控制权。
- 在本地设备与远程网关之间协同使用 Web UI、CLI 与节点能力（移动端或桌面端）。
- 基于插件与工具机制，扩展特定任务流程（自动化、消息路由、设备动作等）。

## 核心功能

- 多渠道连接：支持多个即时通讯与 Web 渠道统一接入。
- Gateway 控制面：会话、路由、工具调用与配置围绕同一网关管理。
- 安全默认项：私信配对与允许列表作为默认防护策略。
- 可扩展能力：docs 中提供 tools、plugins、nodes、automation 等子体系。
- 文档体系完整：包含安装、网关、渠道、排障、安全与中文文档。

## 特色与差异点

- 强调“own-your-data”，将核心运行面放在用户可控环境。
- 同时覆盖 CLI、Web 控制台、移动节点与多聊天渠道，不局限单端入口。
- 版本迭代频率较高，release 与文档更新节奏快。
- 项目文化明显（OpenClaw/lobster），社区传播与扩展生态活跃。

## 使用方式概览

1. 准备 Node.js 22+ 运行环境。
2. 通过 `npm install -g openclaw@latest` 安装 CLI。
3. 执行 `openclaw onboard --install-daemon` 完成引导与守护进程安装。
4. 按文档配置渠道接入、模型认证与路由策略，再启动 gateway 进入常驻运行。

## 限制与注意事项

- 对运行时版本有硬性要求（Node.js >= 22）。
- 渠道数量与功能较多，首次接入需要按官方文档逐项完成配置。
- 默认提供安全基线，但是否开放 DM、allowlist 规则等仍需部署者按场景明确配置。

## 链接

- 仓库：https://github.com/openclaw/openclaw
- 官网：https://openclaw.ai
- 文档首页：https://docs.openclaw.ai
- 文档仓库入口：https://github.com/openclaw/openclaw/tree/main/docs
- 中文文档入口：https://github.com/openclaw/openclaw/tree/main/docs/zh-CN
- README：https://raw.githubusercontent.com/openclaw/openclaw/main/README.md
- Releases：https://github.com/openclaw/openclaw/releases

## 相关文档

- [[02-资源/AI-编程助手与Agent/Clawdbot：面向代码与数据的智能体工具|Clawdbot：面向代码与数据的智能体工具]]；关联理由：版本演进；说明：该条目覆盖同一产品体系在命名与版本阶段上的连续演进，可互证核心能力与安装路径。
- [[01-博客/liruifengv/拆解 OpenClaw 的系统提示词，设计的太妙了|拆解 OpenClaw 的系统提示词，设计的太妙了]]；关联理由：解说；说明：该文从系统提示词与记忆文件机制解释 OpenClaw 的行为设计，补充本档案的架构细节。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/self-hosting]]
- [[00-元语/cli]]
- [[00-元语/llm]]
- [[00-元语/security]]
- [[00-元语/typescript]]
- [[00-元语/github]]
