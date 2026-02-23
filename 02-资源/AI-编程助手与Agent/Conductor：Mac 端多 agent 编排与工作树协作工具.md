---
title: "Conductor：Mac 端多 agent 编排与工作树协作工具"

对象: "网站"
发布日期: "2026-02-22"
来源:
  - "https://www.conductor.build/"
  - "https://docs.conductor.build/"
---

## 摘要

Conductor 是一款面向 macOS 的本地桌面应用，通过 Git worktree 隔离机制并行编排多个 coding agent（页面示例含 Claude Code 与 Codex），帮助开发者集中查看进度、审查改动并完成合并。

## 功能与定位

Conductor 面向“多 agent 并行开发”场景，定位是把多分支并发、worktree 隔离、diff 审查与合并流程放进统一界面，减少手工切换与 Git 管理成本。

## 典型使用场景

- 同时推进多个功能或修复任务。
- 在一个主界面管理多个 agent 的任务状态和产出。
- 从 Issue 到 PR 的端到端协作。

## 核心功能

- 并行 agent 运行。
- 基于 Git worktree 的隔离工作区。
- 内置 diff viewer，用于审查与合并。
- 脚本能力与 `conductor.json` 配置共享。
- 文档中提供 MCP、Slash commands、Checkpoints、Testing 等能力入口。

## 特色与差异点

- 本地执行：核心工作流运行在 Mac 本机。
- 可与现有工具链协作：文档包含与 Cursor/VSCode 协作路径。
- 文档覆盖较完整：含安装、首个工作区、工作流与多框架 quickstart。

## 使用方式概览

1. 在应用中导入仓库。
2. 启动一个或多个 agent 并自动分配隔离工作树。
3. 在界面中审查改动并合并。

## 限制与注意事项

- 平台定位为 macOS 应用。
- 页面与文档对“Codex”命名有直接使用，落地时建议按其最新文档确认具体兼容对象与版本。

## 链接

- 官网：https://www.conductor.build/
- 文档：https://docs.conductor.build/
- 更新日志：https://www.conductor.build/changelog
- 博客：https://www.conductor.build/blog

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/Codex]]
- [[00-元语/Claude]]
- [[00-元语/mcp]]
- [[00-元语/git-worktree]]
- [[00-元语/desktop-client]]
- [[00-元语/ide]]
- [[00-元语/workflow]]
- [[00-元语/code-review]]
