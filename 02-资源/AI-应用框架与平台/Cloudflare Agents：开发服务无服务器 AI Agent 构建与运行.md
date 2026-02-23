---
title: "Cloudflare Agents：开发服务无服务器 AI Agent 构建与运行"

对象: "网站与开发文档"
发布日期: "2026-02-21"
来源:
  - "https://agents.cloudflare.com/"
  - "https://developers.cloudflare.com/agents/"
  - "https://developers.cloudflare.com/agents/getting-started/quick-start/"
  - "https://developers.cloudflare.com/agents/api-reference/agents-api/"
  - "https://developers.cloudflare.com/agents/platform/limits/"
---

## 摘要

Cloudflare Agents 是一个基于 TypeScript SDK 和全局网络运行的无服务器平台，专为构建需要持久化状态、实时连接和长时任务调度能力的 AI Agent 而设计。

- 底层架构：基于 Durable Objects 运行模型，每个 Agent 运行在独立的有状态实例中。
- 核心能力：围绕状态持久化、任务调度、工具调用与长时任务编排，补齐无状态 AI 应用能力缺口。
- 实时通信：支持 WebSocket 与 Server-Sent Events，可实现流式响应和实时状态同步。
- 模型兼容：支持 Workers AI，也可接入 OpenAI、Anthropic、Gemini 等模型提供商。
- 任务与事件：支持延时、定时、cron、工作流重试，并可处理 HTTP、WebSocket、邮件与状态变化事件。
- 开发范式：以 TypeScript 类为核心抽象，客户端调用方法需使用 `@callable()` 标记。
- 成本导向：官方强调按使用量计费，并提供长连接空闲场景的成本优化机制。
- 风险与限制：装饰器语义、状态更新方式、binding/migration 配置与平台限制需按官方文档严格校对。

## 功能与定位

Cloudflare Agents 面向需要“持续运行 + 持久状态 + 实时连接”的 AI Agent 场景。官方定位是将智能体能力以 TypeScript SDK 形式提供给开发者，并运行在 Cloudflare 全局网络上。

从官方说明看，它重点解决传统无状态 AI 应用在记忆、调度、工具调用和长时任务上的能力缺口。

## 典型使用场景

- 在邮件、聊天、语音等输入通道上接入 Agent。
- 构建支持流式响应的聊天 Agent，并与前端实时同步状态。
- 执行延时、定时或 cron 任务，让 Agent 在无用户在线时继续工作。
- 在多步骤流程中使用自动重试与编排能力。
- 通过工具调用连接外部 API，或接入浏览器自动化能力。
- 在关键环节引入 human-in-the-loop 审批流程。

## 核心功能

- Durable Objects 运行模型：每个 Agent 运行在有状态微服务实例中。
- 持久化状态：官方文档说明支持 SQL 与键值状态，并可与客户端实时同步。
- 通信协议：支持 WebSocket 与 Server-Sent Events。
- 模型接入：可使用 Workers AI，也可接入 OpenAI、Anthropic、Gemini 等提供商。
- 任务执行：支持延时任务、定时任务、cron 与工作流重试机制。
- 事件处理：可处理 HTTP、WebSocket、邮件及状态变化等事件。

## 特色与差异点

- 一体化：在同一平台内组合推理、状态、调度与实时连接能力。
- 计费导向：官方强调按使用量计费，并提供围绕长连接空闲场景的成本优化机制。
- 开发体验：以 TypeScript 类为主要抽象，降低 Agent 服务端与实时前端联动的接线复杂度。

## 使用方式概览

- 快速启动：官方 Quick start 提供约 10 分钟示例流程。
- 脚手架结构：示例项目包含服务端 Agent 代码、前端代码和 Wrangler 配置。
- 交互路径：客户端通过 WebSocket 调用 Agent 方法；Agent 使用 `this.setState()` 更新并持久化状态，再向连接客户端广播更新。
- 方法暴露：供客户端调用的方法需使用 `@callable()` 标记。

## 限制与注意事项

- 装饰器兼容性：文档指出需使用 TC39 decorators 语义，不建议启用 `experimentalDecorators`。
- 配置依赖：运行前需要正确配置 binding 与 migration。
- 状态更新方式：应通过 `this.setState()` 更新状态，避免直接修改 `this.state`。
- 边界核对：不同模型提供商、平台限制与计费细节需按官方最新文档核对。

## 链接

- 官网：https://agents.cloudflare.com/
- 文档总览：https://developers.cloudflare.com/agents/
- Quick start：https://developers.cloudflare.com/agents/getting-started/quick-start/
- Agents API：https://developers.cloudflare.com/agents/api-reference/agents-api/
- 平台限制：https://developers.cloudflare.com/agents/platform/limits/
- 条款：https://www.cloudflare.com/website-terms/

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/cloudflare]]
- [[00-元语/serverless]]
- [[00-元语/durable-objects]]
- [[00-元语/llm]]
- [[00-元语/sdk]]
- [[00-元语/protocol]]
- [[00-元语/workflow]]
- [[00-元语/typescript]]
