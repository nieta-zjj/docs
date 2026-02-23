---
title: "nanobrowser：开源的 AI 网页自动化 Chrome 插件，通过多智能体系统和用户自定义的 LLM API 实现本地化、注重隐私的网页任务自动化"

发布日期: "2026-02-22"
对象: "GitHub 项目 `nanobrowser/nanobrowser`"
项目主页: "https://github.com/nanobrowser/nanobrowser"
官方网站: "https://nanobrowser.ai"
开源协议: "Apache License 2.0"
主要语言: "TypeScript"
统计快照: "Stars 12271，Forks 1271，Watchers 59（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.1.13（发布时间：2025-11-22T13:52:50Z）"
---

## 摘要

**1) 一句话总结**
Nanobrowser 是一款开源的 AI 网页自动化 Chrome 插件，通过多智能体系统和用户自定义的 LLM API 实现本地化、注重隐私的网页任务自动化，是 OpenAI Operator 的免费替代方案。

**2) 核心要点**
*   **项目基础**：基于 TypeScript 开发，采用 Apache License 2.0 开源协议，目前在 GitHub 拥有超 1.2 万 Stars（最新版本 v0.1.13）。
*   **核心功能**：内置多智能体系统（如 Planner 和 Navigator 协作），支持跨网站的重复性任务自动化、侧边栏实时交互、上下文追问及对话历史管理。
*   **多模型支持**：支持 OpenAI、Anthropic、Gemini、Ollama、Groq 等多种云端及本地大模型，允许为不同的智能体分配不同的模型以平衡性能与成本。
*   **隐私与成本**：100% 免费且注重隐私，所有操作和凭证均在本地浏览器中运行和保存，不与任何云服务共享，用户仅需承担自己的 API 消耗成本。
*   **浏览器兼容性**：官方完全支持 Chrome 和 Edge 浏览器。
*   **安装与构建**：用户可通过 Chrome 应用商店安装或手动加载解压包；源码编译依赖 Node.js (v22.12.0+) 和 pnpm (v9.15.1+)。
*   **技术栈依赖**：项目底层构建在 Browser Use、Puppeteer、Chrome Extension Boilerplate 和 LangChain 等开源项目之上。

**3) 风险与不足**
*   **版本更新延迟**：Chrome 应用商店版本可能因审核流程导致功能更新滞后，获取最新功能需手动下载并开启开发者模式安装。
*   **浏览器兼容性限制**：明确不支持 Firefox、Safari 以及 Opera、Arc 等其他 Chromium 变体浏览器。
*   **模型能力局限**：采用“高性价比”模型配置时，输出可能不够稳定，复杂任务需要更多迭代；使用本地模型时，对提示词要求更高，需避免使用高级别或模糊的指令。
*   **衍生项目免责**：官方明确声明不支持、不参与任何基于该代码库的加密货币、代币、NFT 或区块链相关的衍生项目，并对第三方衍生项目造成的损失不承担任何责任。

## 功能与定位

Open-Source Chrome extension for AI-powered web automation. Run multi-agent workflows using your own LLM API key. Alternative to OpenAI Operator.

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:46:56Z。
- 项目创建于 2024-12-31T08:11:27Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/nanobrowser/nanobrowser
- 官网：https://nanobrowser.ai
- README：https://raw.githubusercontent.com/nanobrowser/nanobrowser/master/README.md
- Releases：https://github.com/nanobrowser/nanobrowser/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/browser-automation]]
- [[00-元语/github]]
- [[00-元语/llm]]
- [[00-元语/security]]
- [[00-元语/workflow]]
