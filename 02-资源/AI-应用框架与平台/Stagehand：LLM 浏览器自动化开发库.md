---
title: "Stagehand：LLM 浏览器自动化开发库"

发布日期: "2026-02-22"
对象: "GitHub 项目 `browserbase/stagehand`"
项目主页: "https://github.com/browserbase/stagehand"
官方网站: "https://stagehand.dev"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 21201，Forks 1387，Watchers 94（抓取时间：2026-02-22）"
版本快照: "最新发布 @browserbasehq/stagehand@2.5.8（发布时间：2026-02-19T22:39:46Z）"
---

## 摘要

### 一句话总结
Stagehand 是一个基于 TypeScript 的 AI 浏览器自动化框架，允许开发者结合自然语言和传统代码来构建灵活、可靠且具备自愈能力的生产级网页自动化工作流。

### 核心要点
*   **项目热度与协议**：采用 MIT 开源协议，主要使用 TypeScript 编写（另有 Python 实现），在 GitHub 上拥有超过 21,000 个 Stars 和 1,300+ Forks。
*   **混合编程模式**：打破了底层框架（如 Playwright/Selenium）与高层 AI Agent 之间的壁垒，开发者可以在明确的步骤使用精确代码，在陌生的页面使用自然语言让 AI 接管。
*   **三大核心 API**：
    *   `act()`：用于通过自然语言执行单个具体操作。
    *   `agent()`：用于执行需要多步操作的复杂任务。
    *   `extract()`：用于从网页中提取结构化数据（支持 Zod 格式定义）。
*   **自动缓存与自愈能力**：框架能够记住之前的操作并在不依赖 LLM 推理的情况下运行（节省时间和 Token）；当网页结构改变导致脚本失效时，会自动介入 AI 进行自我修复。
*   **生产级可靠性**：支持在运行前预览 AI 操作，将 AI 驱动的流程转化为可重复、可预测的自动化工作流。
*   **底层技术**：使用 CDP（Chrome DevTools Protocol）引擎，为浏览器自动化提供了优化的底层接口。
*   **运行依赖**：在实际使用中，通常需要配置 LLM 提供商的 API 密钥以及 Browserbase 的凭证（Credentials）。

## 功能与定位

The AI Browser Automation Framework

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T11:30:08Z。
- 项目创建于 2024-03-24T19:19:44Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/browserbase/stagehand
- 官网：https://stagehand.dev
- README：https://raw.githubusercontent.com/browserbase/stagehand/main/README.md
- Releases：https://github.com/browserbase/stagehand/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/typescript]]
- [[00-元语/browser-automation]]
- [[00-元语/protocol]]
- [[00-元语/github]]
- [[00-元语/workflow]]
