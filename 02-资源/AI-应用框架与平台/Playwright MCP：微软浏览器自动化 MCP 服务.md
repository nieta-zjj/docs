---
title: "Playwright MCP：微软浏览器自动化 MCP 服务"

发布日期: "2026-02-22"
对象: "GitHub 项目 `microsoft/playwright-mcp`"
项目主页: "https://github.com/microsoft/playwright-mcp"
官方网站: "https://www.npmjs.com/package/@playwright/mcp"
开源协议: "Apache License 2.0"
主要语言: "TypeScript"
统计快照: "Stars 27492，Forks 2224，Watchers 105（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.0.68（发布时间：2026-02-14T23:17:47Z）"
---

## 摘要

**1) 一句话总结**
microsoft/playwright-mcp 是一个基于 TypeScript 开发的 Playwright 模型上下文协议（MCP）服务器，使大语言模型能够通过结构化的无障碍树（而非视觉截图）实现高效的网页交互与浏览器自动化。

**2) 关键要点**
*   **项目数据**：由微软开源（Apache 2.0 协议），主要使用 TypeScript 开发，目前拥有超 2.7 万 Stars，最新发布版本为 v0.0.68。
*   **核心机制**：利用 Playwright 的无障碍树（Accessibility Tree）而非像素级输入，使 LLM 能够纯粹基于结构化数据操作网页，无需依赖视觉模型。
*   **主要优势**：轻量且快速，工具调用具有确定性，避免了传统基于截图的方法中常见的歧义问题。
*   **MCP 适用场景**：适合需要持久状态、丰富内省和对页面结构进行迭代推理的专门智能体循环（如探索性自动化、自愈测试或长时间运行的自主工作流）。
*   **CLI 替代方案对比**：对于高吞吐量的代码智能体（Coding Agents），官方建议使用 Playwright CLI+SKILLS，因为 CLI 调用在 Token 使用上更高效，避免了将庞大的无障碍树加载到模型上下文中。
*   **环境要求**：需要 Node.js 18 或更新版本，并配合支持 MCP 的客户端（如 VS Code、Cursor、Windsurf、Claude Desktop、Goose 等）使用。
*   **安装与配置**：支持通过标准配置 `npx @playwright/mcp@latest` 快速启动，并为 Amp、Claude Code、Claude Desktop 和 Cline 等工具提供了详细的集成指南。

## 功能与定位

Playwright MCP server

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:21:29Z。
- 项目创建于 2025-03-21T17:48:36Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/microsoft/playwright-mcp
- 官网：https://www.npmjs.com/package/@playwright/mcp
- README：https://raw.githubusercontent.com/microsoft/playwright-mcp/main/README.md
- Releases：https://github.com/microsoft/playwright-mcp/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/mcp]]
- [[00-元语/cli]]
- [[00-元语/browser-automation]]
- [[00-元语/protocol]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
