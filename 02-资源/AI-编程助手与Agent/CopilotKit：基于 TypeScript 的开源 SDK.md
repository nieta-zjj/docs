---
title: "CopilotKit：基于 TypeScript 的开源 SDK"

发布日期: "2026-02-22"
对象: "GitHub 项目 `CopilotKit/CopilotKit`"
项目主页: "https://github.com/CopilotKit/CopilotKit"
官方网站: "https://docs.copilotkit.ai"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 28910，Forks 3755，Watchers 160（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.51.4（发布时间：2026-02-17T01:07:06Z）"
---

## 摘要

**1) 一句话总结**
CopilotKit 是一个基于 TypeScript 的开源 SDK，专为构建具备生成式 UI、共享状态和人在回路（Human-in-the-Loop）工作流的 AI 代理原生应用（Agent-native applications）而设计。

**2) 关键要点**
* **核心定位**：提供用于构建全栈代理应用、生成式 UI 和聊天应用的前端 SDK，主要支持 React 和 Angular。
* **主导 AG-UI 协议**：CopilotKit 是 AG-UI（代理-用户交互协议）的创建者，该协议已被 Google、LangChain、AWS、Microsoft 等知名企业和框架采用，并与 LangGraph、CrewAI 等深度集成。
* **生成式 UI（Generative UI）**：允许 AI 代理在运行时根据用户意图动态生成和更新 UI 组件，支持静态（AG-UI）、声明式（A2UI）和开放式（MCP Apps & Open JSON）三种模式。
* **核心功能特性**：
  * **Chat UI**：支持消息流、工具调用和代理响应的 React 聊天界面。
  * **后端工具渲染**：允许代理调用后端工具并直接在客户端渲染返回的 UI 组件。
  * **共享状态（Shared State）**：提供代理与 UI 组件之间实时读写的同步状态层。
  * **人在回路（Human-in-the-Loop）**：支持代理暂停执行，以请求用户的输入、确认或修改。
* **`useAgent` Hook**：作为 `useCoAgent` 的超集，直接构建在 AG-UI 之上，开发者可通过该 Hook 以编程方式深度访问和控制代理及其状态。
* **快速接入**：提供便捷的 CLI 命令，新项目可使用 `npx copilotkit@latest create`，现有项目可使用 `npx copilotkit@latest init` 快速完成配置与部署。
* **项目数据**：采用 MIT 开源协议，在 GitHub 上拥有极高关注度（超 28,900 Stars 和 3,700+ Forks），项目持续活跃更新。

## 功能与定位

The Frontend for Agents & Generative UI. React + Angular

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:32:12Z。
- 项目创建于 2023-06-19T04:08:31Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/CopilotKit/CopilotKit
- 官网：https://docs.copilotkit.ai
- README：https://raw.githubusercontent.com/CopilotKit/CopilotKit/main/README.md
- Releases：https://github.com/CopilotKit/CopilotKit/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/sdk]]
- [[00-元语/typescript]]
- [[00-元语/react]]
- [[00-元语/ui-protocol]]
- [[00-元语/mcp]]
- [[00-元语/workflow]]
