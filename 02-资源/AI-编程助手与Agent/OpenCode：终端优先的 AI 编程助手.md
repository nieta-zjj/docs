---
title: "OpenCode：终端优先的 AI 编程助手"

发布日期: "2026-02-22"
对象: "GitHub 项目 `sst/opencode`"
项目主页: "https://github.com/sst/opencode"
官方网站: "https://opencode.ai"
开源协议: "MIT"
主要语言: "TypeScript"
统计快照: "Stars 108344，Forks 10724，Watchers 427（抓取时间：2026-02-22）"
版本快照: "最新 release `v1.2.10`，发布时间 `2026-02-20`"
备注: "用户提供“23503”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

**1) 一句话总结**
OpenCode 是一款采用 MIT 协议、基于 C/S 架构的完全开源 AI 编程智能体，主打终端用户界面（TUI）且支持自由切换多种大模型。

**2) 核心要点**
*   **基础信息**：主要使用 TypeScript 开发，遵循 MIT 开源协议（注：文档指出用户参考 Stars 数 23503 与 API 抓取数 108344 存在差异）。
*   **架构设计**：采用客户端/服务端（C/S）解耦架构，支持本地运行服务端并通过移动端等其他客户端进行远程控制。
*   **多智能体协作**：内置三种智能体，可通过 `Tab` 键快速切换：`build`（全权限开发）、`plan`（只读规划）和 `general`（复杂搜索与多步任务）。
*   **模型无绑定**：不绑定单一 AI 供应商，支持接入 Claude、OpenAI、Google 模型，以及本地模型和官方 OpenCode Zen 服务。
*   **核心特性**：开箱即用支持语言服务器协议（LSP），由 neovim 开发者参与打造，专注突破终端交互体验。
*   **多平台覆盖**：支持通过多种包管理器（npm、Homebrew、Scoop 等）安装命令行工具，并提供覆盖 macOS、Windows 和 Linux 的桌面客户端。

**3) 风险与缺口**
*   **版本升级限制**：在安装最新版本前，建议先卸载 0.1.x 之前的旧版本以避免兼容性问题。
*   **软件稳定性**：桌面版客户端（Desktop App）目前仍处于 BETA（测试）阶段。
*   **社区合规要求**：基于 OpenCode 开发的第三方关联项目（如命名包含 "opencode"），必须在 README 中明确声明非官方构建且无附属关系。

## 功能与定位

OpenCode 是一个完全开源的 AI 编程智能体（Coding Agent）。项目主打终端用户界面（TUI），采用客户端/服务端架构，旨在提供不绑定特定大模型供应商的自动化编程与代码探索体验。

## 典型使用场景

- **日常开发与代码修改**：使用具备完整权限的智能体直接进行代码编写和文件修改。
- **代码库探索与方案规划**：在面对陌生代码库时，使用只读模式进行安全的代码分析和变更规划。
- **复杂检索与多步任务**：调用专门的子智能体处理需要多步骤执行的复杂搜索任务。
- **远程/跨端开发**：利用其 C/S 架构，在本地计算机运行服务端，通过移动端等其他客户端进行远程控制。

## 核心功能

- **多智能体切换**：内置不同权限和用途的智能体，可通过 `Tab` 键快速切换：
  - **build**：默认智能体，拥有完整访问权限，用于实际开发工作。
  - **plan**：只读智能体，默认禁止编辑文件，执行 bash 命令前会请求权限，适合代码探索和规划。
  - **general**：内部子智能体，可通过在消息中输入 `@general` 调用，专用于复杂搜索和多步任务。
- **模型自由切换**：支持接入 Claude、OpenAI、Google 的模型，也支持本地模型或官方提供的 OpenCode Zen 服务。
- **LSP 支持**：开箱即用的语言服务器协议（Language Server Protocol）支持。
- **多平台支持**：提供命令行工具以及适用于 macOS、Windows 和 Linux 的桌面客户端（Beta 版）。

## 特色与差异点

- **与 Claude Code 的对比**：在能力上与 Claude Code 类似，但 OpenCode 是 100% 开源的，且不与任何单一 AI 供应商绑定，随着模型降价和能力演进，用户可以自由选择最具性价比的模型。
- **专注终端体验**：由 neovim 用户及 terminal.shop 的创作者开发，致力于突破终端界面的交互极限。
- **解耦架构**：采用客户端/服务端（C/S）架构，终端 UI 只是其支持的客户端之一，为未来的多端扩展（如移动端 App）提供了底层支持。

## 使用方式概览

- **命令行安装**：支持通过 npm、bun、pnpm、yarn 等 Node 包管理器安装，同时也支持 Homebrew、Scoop、Chocolatey、Pacman、Nix 等系统级包管理器。
- **桌面端安装**：可直接下载对应操作系统的安装包（如 `.dmg`, `.exe`, `.deb`, `.rpm`, AppImage 等）。
- **自定义安装路径**：安装脚本支持通过环境变量（如 `$OPENCODE_INSTALL_DIR` 或 `$XDG_BIN_DIR`）指定安装目录。

## 限制与注意事项

- **版本兼容性**：在安装最新版本前，建议先卸载 0.1.x 之前的旧版本。
- **桌面版状态**：Desktop App 目前处于 BETA（测试）阶段。
- **社区生态规范**：基于 OpenCode 开发的第三方关联项目（如命名包含 "opencode"），需要在其 README 中明确声明非官方团队构建且无附属关系。

## 链接

- GitHub 仓库: https://github.com/anomalyco/opencode
- 官网: https://opencode.ai
- Releases 下载: https://github.com/anomalyco/opencode/releases
- 官方文档: https://opencode.ai/docs
- 桌面端下载: https://opencode.ai/download
- Discord 社区: https://discord.gg/opencode
- X (Twitter): https://x.com/opencode

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/terminal]]
- [[00-元语/cli]]
- [[00-元语/llm]]
- [[00-元语/protocol]]
- [[00-元语/desktop-client]]
- [[00-元语/github]]
