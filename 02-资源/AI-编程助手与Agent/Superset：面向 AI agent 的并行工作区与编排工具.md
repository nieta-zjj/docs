---
title: "Superset：面向 AI agent 的并行工作区与编排工具"

对象: "网站与开源项目"
发布日期: "2026-02-22"
来源:
  - "https://superset.sh/"
  - "https://docs.superset.sh/"
  - "https://github.com/superset-sh/superset"
---

## 摘要

Superset 是面向 AI agent 的并行编排工具，主打在本机并发运行多个 agent、以 Git worktree 做隔离，并通过 GUI 管理任务、变更与外部 IDE 跳转。

## 功能与定位

Superset 的定位是多 agent 并行开发的“工作区编排层”。它不要求替换现有 CLI agent，而是提供统一的可视化管理和隔离执行环境。

## 典型使用场景

- 同时推进多个功能、修复与重构任务。
- 在隔离工作树中减少并发改动冲突。
- 在 GUI 与外部 IDE 间快速往返协作。

## 核心功能

- 并行启动多个 agent。
- 每个 agent 运行在独立 Git worktree。
- 支持在应用内查看变更、审查与提交。
- 一键在 VS Code、Cursor、JetBrains 等 IDE 打开工作区。
- 提供 MCP 配置与端口转发相关能力。

## 特色与差异点

- 强调 agent-agnostic，兼容多类 CLI agent。
- 兼顾 GUI 可视化与终端工作流。
- 同时提供官网、文档、更新日志和开源仓库入口。

## 使用方式概览

1. 下载客户端并创建工作区。
2. 启动并行 agent 会话。
3. 在内置视图或外部 IDE 中审查与合并改动。

## 限制与注意事项

- 当前下载入口明确提供 macOS 安装包。
- 与具体模型和 CLI 工具的兼容细节建议以最新文档为准。

## 链接

- 官网：https://superset.sh/
- 文档：https://docs.superset.sh/
- GitHub：https://github.com/superset-sh/superset
- 更新日志：https://superset.sh/changelog

## 关联主题

- [[00-元语/AI]]
- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/mcp]]
- [[00-元语/git-worktree]]
- [[00-元语/cli]]
- [[00-元语/ide]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
