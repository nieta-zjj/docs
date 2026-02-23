---
title: "1Code：Claude Code 与 Codex 的并行开发 GUI 客户端"

对象: "网站"
发布日期: "2026-02-22"
来源:
  - "https://1code.dev/"
---

## 摘要

1Code 是一个可视化 agent 客户端，主打在同一界面中使用 Claude Code 与 Codex，并提供并行会话、Git worktree 隔离、可视化 Git 流程与后台运行能力。

## 功能与定位

1Code 面向希望减少终端切换成本的开发者，定位是“多 agent 并行开发的 GUI 层”，在 UI 中承载任务执行、代码审查与交付流程。

## 典型使用场景

- 多任务并行推进，不同任务由不同 agent 会话处理。
- 在图形界面中完成 diff、暂存、提交与 PR 创建。
- 结合外部协作工具触发 agent 自动化处理任务。

## 核心功能

- 支持 Claude Code 与 Codex 两类 agent 入口。
- 并行会话能力，每个会话在独立 Git worktree 中运行。
- 可视化 Git 工作流：stage、diff、commit、PR。
- 支持 MCP 协议接入第三方系统。
- 提供后台 agents 与实时预览相关能力描述。

## 特色与差异点

- 聚焦“并行 + 可视化 + Git 隔离”组合体验。
- 强调键盘优先的交互方式。
- 页面同时提供开源与 Pro 定价信息。

## 使用方式概览

1. 登录或配置可用的模型/服务凭据。
2. 启动一个或多个 agent 会话。
3. 在 UI 内完成代码变更审查与 PR 交付。

## 限制与注意事项

- 不同版本在功能上有区分，部分高级能力位于付费层。
- 页面中的兼容对象和套餐信息更新较快，使用前建议核对官网当前说明。

## 链接

- 官网：https://1code.dev/
- 社区：https://discord.gg/8ektTZGnj4

## 关联主题

- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/Codex]]
- [[00-元语/Claude]]
- [[00-元语/mcp]]
- [[00-元语/git-worktree]]
- [[00-元语/desktop-client]]
- [[00-元语/code-review]]
- [[00-元语/workflow]]
