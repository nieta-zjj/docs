---
title: "browser-use web-ui：浏览器自动化 AI 控制台"

发布日期: "2026-02-22"
对象: "GitHub 项目 `browser-use/web-ui`"
项目主页: "https://github.com/browser-use/web-ui"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 15607，Forks 2687，Watchers 126（抓取时间：2026-02-22）"
版本快照: "最新发布 v3.0.0（发布时间：2025-08-31T14:16:34Z）"
---

## 摘要

1) 一句话总结
`browser-use/web-ui` 是一个基于 Gradio 构建的开源 Python 项目，允许用户通过友好的 Web 界面在浏览器中运行和交互 AI 代理，并支持多种主流大语言模型与自定义本地浏览器配置。

2) 核心要点
* **项目基础与热度**：基于 `browser-use` 核心库开发，采用 MIT 开源协议，目前在 GitHub 上拥有 15607 个 Stars 和 2687 个 Forks，最新版本为 v3.0.0。
* **UI 框架**：前端界面基于 Gradio 构建，设计用户友好，支持绝大多数 `browser-use` 的原生功能。
* **广泛的 LLM 支持**：集成了多种大语言模型，包括 Google、OpenAI、Azure OpenAI、Anthropic、DeepSeek（已支持 DeepSeek-r1 深度思考）以及 Ollama 等。
* **自定义浏览器支持**：允许用户接入本地自带的浏览器（需配置可执行文件和用户数据路径），从而免去重复登录和身份验证的繁琐步骤，同时支持高清屏幕录制。
* **持久化浏览器会话**：支持在不同的 AI 任务之间保持浏览器窗口处于打开状态，以便用户查看完整的交互历史和状态。
* **本地安装便捷**：推荐使用 `uv` 管理 Python 3.11 虚拟环境，底层依赖 Playwright 驱动浏览器，默认通过 `127.0.0.1:7788` 访问 WebUI。
* **Docker 容器化部署**：提供 Docker Compose 部署方案（兼容 ARM64 架构），并内置了 VNC 视图（默认端口 6080），方便用户实时监控 AI 代理的浏览器操作过程。

## 功能与定位

🖥️ Run AI Agent in your browser.

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T07:03:34Z。
- 项目创建于 2025-01-02T01:29:44Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/browser-use/web-ui
- README：https://raw.githubusercontent.com/browser-use/web-ui/main/README.md
- Releases：https://github.com/browser-use/web-ui/releases

## 关联主题

- [[00-元语/browser-automation]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/workflow]]
- [[00-元语/github]]
- [[00-元语/self-hosting]]
- [[00-元语/AI]]
