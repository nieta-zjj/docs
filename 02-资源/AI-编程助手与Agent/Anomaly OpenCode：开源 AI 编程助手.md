---
title: "Anomaly OpenCode：开源 AI 编程助手"

发布日期: "2026-02-22"
对象: "GitHub 项目 `anomalyco/opencode`"
项目主页: "https://github.com/anomalyco/opencode"
官方网站: "https://opencode.ai"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 108369，Forks 10728，Watchers 426（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.2.10（发布时间：2026-02-20T11:18:54Z）"
---

## 摘要

**1) 一句话总结**
OpenCode 是一个基于 TypeScript 开发的开源 AI 编程助手（Agent），采用 MIT 协议，提供多平台支持、丰富的安装方式以及内置的多种工作代理模式。

**2) 核心要点**
* **项目热度与协议**：项目采用 MIT 开源协议，社区活跃度极高，拥有超过 10.8 万 Stars 和 1 万 Forks。
* **版本与更新**：项目创建于 2025 年 4 月，最新版本为 v1.2.10（发布于 2026 年 2 月 20 日）。
* **多语言支持**：项目 README 文档提供了包括简体中文、繁体中文、英语、日语等在内的 20 种语言版本。
* **安装方式多样**：支持通过 `curl` 脚本以及 npm、Homebrew、Scoop、Choco、Pacman、Nix 等多种包管理器进行安装（官方提示安装前需移除 0.1.x 以下的老版本）。
* **自定义安装路径**：安装脚本支持路径优先级设定，依次为 `$OPENCODE_INSTALL_DIR`、`$XDG_BIN_DIR`、`$HOME/bin` 和默认的 `$HOME/.opencode/bin`。
* **桌面端应用 (BETA)**：提供跨平台桌面客户端，支持 macOS（Apple Silicon/Intel）、Windows 以及 Linux（.deb, .rpm, AppImage）。
* **内置双主代理 (Agents)**：用户可通过 `Tab` 键在两个主代理间切换：`build`（默认，拥有完全访问权限的开发代理）和 `plan`（只读代理，用于代码分析，默认拒绝文件编辑并在运行 bash 命令前需请求权限）。
* **通用子代理**：内置 `general` 子代理，专门用于处理复杂的搜索和多步任务，可通过在消息中输入 `@general` 来调用。

## 功能与定位

The open source coding agent.

## 典型使用场景

- 作为开发阶段的 AI 助手，承担代码理解、生成与任务编排。
- 在团队中作为可扩展 agent 能力层，连接模型与工具链。

## 核心功能

- 提供面向工程任务的 agent 交互能力。
- 支持与代码仓库、终端或外部服务集成。
- 通过配置扩展模型、工具或执行策略。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:15:24Z。
- 项目创建于 2025-04-30T20:08:00Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/anomalyco/opencode
- 官网：https://opencode.ai
- README：https://raw.githubusercontent.com/anomalyco/opencode/main/README.md
- Releases：https://github.com/anomalyco/opencode/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/desktop-client]]
- [[00-元语/typescript]]
- [[00-元语/github]]
