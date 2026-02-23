---
title: "chrome-devtools-mcp：基于模型上下文协议 (MCP) 的服务器"

发布日期: "2026-02-22"
对象: "GitHub 项目 `ChromeDevTools/chrome-devtools-mcp`"
项目主页: "https://github.com/ChromeDevTools/chrome-devtools-mcp"
官方网站: "https://npmjs.org/package/chrome-devtools-mcp"
开源协议: "Apache License 2.0"
主要语言: "TypeScript"
统计快照: "Stars 26367，Forks 1546，Watchers 99（抓取时间：2026-02-22）"
版本快照: "最新发布 chrome-devtools-mcp-v0.17.3（发布时间：2026-02-19T17:01:36Z）"
---

## 摘要

**1) 一句话总结**
`chrome-devtools-mcp` 是一个基于模型上下文协议 (MCP) 的服务器，允许 AI 编程助手（如 Claude、Cursor、Copilot 等）利用 Chrome DevTools 和 Puppeteer 对实时 Chrome 浏览器进行自动化操作、深度调试和性能分析。

**2) 关键点**
* **核心功能**：提供可靠的浏览器自动化、高级调试（网络请求分析、截图、控制台消息检查）以及性能追踪与洞察。
* **技术栈与依赖**：基于 TypeScript 开发，底层依赖 Puppeteer 和 Chrome DevTools；运行需要 Node.js v20.19+、最新稳定版 Chrome 和 npm。
* **丰富的工具集**：内置 26 个供 AI 调用的工具，涵盖输入自动化（8个）、导航（6个）、页面模拟（2个）、性能分析（3个）、网络监控（2个）和调试（5个）。
* **广泛的客户端支持**：提供针对 Amp、Claude Code、Cursor、Copilot、Gemini、JetBrains 等十余种主流 AI 助手和 IDE 的详细配置指南。
* **灵活的启动配置**：支持多种命令行参数，包括无头模式 (`--headless`)、连接现有浏览器实例 (`--browserUrl` / `--wsEndpoint`)、使用独立临时用户目录 (`--isolated`) 以及自定义视口大小 (`--viewport`) 等。
* **遥测与统计**：默认收集工具调用成功率、延迟等使用统计数据，可通过 `--no-usage-statistics` 参数或设置 `CHROME_DEVTOOLS_MCP_NO_USAGE_STATISTICS` 环境变量来禁用。

**3) 风险/缺口**
* **隐私与数据泄露风险**：该工具会将浏览器实例的全部内容暴露给 MCP 客户端，允许其检查、调试和修改数据，官方明确警告应避免在其中处理敏感或个人信息。
* **第三方数据共享**：性能分析工具可能会将追踪 URL 发送至 Google CrUX API 以获取真实用户体验数据，需通过 `--no-performance-crux` 参数才能禁用此行为。

## 功能与定位

Chrome DevTools for coding agents

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:39:14Z。
- 项目创建于 2025-09-11T10:39:55Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/ChromeDevTools/chrome-devtools-mcp
- 官网：https://npmjs.org/package/chrome-devtools-mcp
- README：https://raw.githubusercontent.com/ChromeDevTools/chrome-devtools-mcp/main/README.md
- Releases：https://github.com/ChromeDevTools/chrome-devtools-mcp/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/mcp]]
- [[00-元语/browser-automation]]
- [[00-元语/protocol]]
- [[00-元语/cli]]
