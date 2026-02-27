---
title: copilot-cli：GitHub Copilot CLI brings the命令行工具
对象: GitHub 仓库
项目主页: https://github.com/github/copilot-cli
官方文档: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
来源: README.md、changelog.md、LICENSE.md（github/copilot-cli）
---

## 摘要

GitHub Copilot CLI 是一款于 2026 年 2 月 25 日正式发布的终端原生 AI 编程助手，允许开发者通过自然语言直接在命令行中无缝执行代码构建、调试、GitHub 资源管理及复杂任务。

## 功能与定位

copilot-cli 将 GitHub Copilot coding agent 带入本地终端，面向希望在命令行内完成开发与协作流程的开发者。它强调“终端原生 + GitHub 深度集成 + 人工确认执行”，用于在单一工作界面内完成编码、调试、重构与仓库协作。

## 典型使用场景

- 在本地仓库中通过自然语言让 Agent 协助编写、修改、重构代码。
- 结合仓库上下文处理 Issues、Pull Requests 与相关开发任务。
- 在需要持续执行多步任务时，使用 Agent 模式提升终端内协作效率。
- 在团队演示或直播中，以终端界面展示 AI 协作开发过程。

## 核心功能

- 终端原生交互：通过 `copilot` 启动并进入对话式命令行协作。
- GitHub 集成：基于 GitHub 账号认证后访问仓库与协作对象。
- Agent 能力：支持多步骤任务执行与计划式协作。
- MCP 扩展：默认结合 GitHub MCP，并支持自定义 MCP 服务器扩展。
- LSP 支持：可接入语言服务器，补充跳转与诊断类能力。

## 特色与差异点

- 强调执行前确认，避免未授权动作直接落地。
- 工作流聚焦命令行，减少在多工具间频繁切换。
- 安装路径覆盖 Linux、macOS、Windows，便于跨平台团队统一使用。
- 迭代节奏快，变更与新增能力在 changelog 中持续公开。

## 使用方式概览

- 平台支持：Linux、macOS、Windows（Windows 需 PowerShell v6+）。
- 使用前提：需要有效的 Copilot 订阅，并受组织/企业策略控制。
- 安装渠道：安装脚本、Homebrew、WinGet、npm。
- 启动与认证：首次启动后通过 `/login` 或 PAT（`GH_TOKEN`/`GITHUB_TOKEN`）认证。

## 限制与注意事项

- 每次提交提示词会消耗 Copilot premium requests 配额。
- 若组织或企业策略禁用该功能，成员可能无法使用 CLI。
- LSP 服务需用户自行安装与配置，CLI 不内置语言服务器。
- 仓库许可为 GitHub Copilot CLI License，并非通用开源许可证；二次分发与改动范围受许可证条款约束。

## 链接

- 仓库主页：https://github.com/github/copilot-cli
- 官方文档：https://docs.github.com/copilot/concepts/agents/about-copilot-cli
- 更新日志：https://github.com/github/copilot-cli/blob/main/changelog.md
- 许可证：https://github.com/github/copilot-cli/blob/main/LICENSE.md
- GA 发布说明：https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/copilot]]
- [[00-元语/cli]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/terminal]]
