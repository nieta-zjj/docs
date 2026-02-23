---
title: "Browser Use：AI agent 浏览器自动化工具与云端扩展能力"

对象: "GitHub 开源项目"
发布日期: "2026-02-22"
项目: "`browser-use/browser-use`"
来源: "https://github.com/browser-use/browser-use/blob/main/LICENSE"
开源协议: "MIT"
最新版本: "`0.11.11`（发布时间：2026-02-20）"
最近提交: "`3d7c71f4a68c02d165bfec390a6781ba8b096845`（2026-02-21）"
用户提供热度快照: "58058"
GitHub 星标快照: "78712（抓取日期：2026-02-22）"
---

## 摘要

`browser-use` 是一个专为 AI Agent 设计的开源浏览器自动化工具，支持本地部署与云端扩展，用于实现网页交互与复杂在线任务的自动化。

- 基于 MIT 协议开源，支持免费使用。
- 提供 Python 库、CLI 与 Claude Code skill。
- 支持 MCP 与多种集成部署路径。
- 支持本地运行，也提供 Browser Use Cloud 以应对高并发与大规模执行。
- 官方推荐使用 `uv` 安装，要求 Python 3.11 及以上。

## 功能与定位

Browser Use 的定位是为 AI agent 提供可编程的网页访问与操作能力，让模型可以在真实网站中执行浏览、表单处理、流程操作等自动化任务。

## 典型使用场景

- 在 AI agent 项目中补齐网页交互执行层。
- 把重复性在线流程转为自动化任务。
- 需要扩展并发规模时，接入云端执行能力。

## 核心功能

- 多形态入口：Python SDK、CLI、Claude Code skill。
- 协议支持：可接入 MCP 场景。
- 扩展路径：本地执行与 Browser Use Cloud 并存。
- 工程配套：仓库提供 docs、examples 与 cloud 相关说明。

## 特色与差异点

- 面向 AI agent 直接设计，不是传统 RPA 的通用迁移。
- 同时覆盖模型快速接入与开发者手动接入路径。
- 端云一体方案清晰，便于从原型过渡到规模化执行。

## 使用方式概览

1. 准备 Python 3.11 或更高版本。
2. 按 README 指引使用 `uv` 安装并完成基础配置。
3. 根据场景选择本地运行或接入 Browser Use Cloud。
4. 在上线前结合 releases 与文档确认兼容性。

## 限制与注意事项

- 运行环境要求 Python 3.11 及以上。
- 项目迭代较快，版本变化可能影响接口与行为，应以 release 说明为准。
- 自动化执行需遵守目标网站条款与适用法律，不应将能力用于未经授权的操作。

## 链接

- 仓库主页：https://github.com/browser-use/browser-use
- README：https://github.com/browser-use/browser-use/blob/main/README.md
- 文档：https://docs.browser-use.com
- Cloud 文档：https://docs.cloud.browser-use.com
- 发布页：https://github.com/browser-use/browser-use/releases
- 许可证：https://github.com/browser-use/browser-use/blob/main/LICENSE

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/browser-automation]]
- [[00-元语/workflow]]
- [[00-元语/mcp]]
- [[00-元语/cli]]
- [[00-元语/sdk]]
- [[00-元语/self-hosting]]
