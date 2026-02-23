---
title: "Google A2A：Agent-to-Agent 协议与实现"

发布日期: "2026-02-22"
对象: "GitHub 项目 `google/A2A`"
项目主页: "https://github.com/google/A2A"
官方网站: "https://a2a-protocol.org/"
开源协议: "Apache License 2.0"
主要语言: "Shell"
统计快照: "Stars 22032，Forks 2253，Watchers 223（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.3.0（发布时间：2025-07-30T17:05:22Z）"
---

## 摘要

### 1) 一句话总结
Agent2Agent (A2A) 是一个开源协议，旨在为不同框架和服务器上构建的“不透明”AI 智能体（Agent）提供通用语言，以实现它们之间的安全通信、协作与互操作性。

### 2) 核心要点
*   **项目基础**：由 Google 开源（Apache License 2.0），目前在 GitHub 拥有超 2.2 万 Stars，最新发布版本为 v0.3.0。
*   **核心目标**：打破 AI 生态孤岛，允许基于不同框架（如 Google ADK、LangGraph、BeeAI）的智能体像“智能体”一样进行复杂协作，而不仅仅是作为工具被调用。
*   **保护隐私与资产（不透明性）**：智能体在协作时无需暴露其内部状态、记忆、专有逻辑或具体工具实现，从而保障企业安全并保护知识产权。
*   **标准化通信**：底层采用基于 HTTP(S) 的 JSON-RPC 2.0 标准协议。
*   **灵活的交互模式**：支持同步请求/响应、流式传输（SSE）以及异步推送通知，并能处理文本、文件和结构化 JSON 等丰富的数据交换。
*   **智能体发现机制**：通过“智能体卡片”（Agent Cards）来详细说明各个智能体的能力和连接信息，以便相互发现。
*   **多语言 SDK 支持**：官方提供了 Python、Go、JavaScript、Java 和 .NET 的 SDK，方便开发者快速接入。
*   **与 MCP 的关系**：A2A 协议与 MCP（模型上下文协议）形成互补，A2A 专注于赋能智能体之间的相互协作。

### 3) 风险与不足（未来演进方向）
*   **智能体发现机制待完善**：目前计划在 `AgentCard` 中正式规范化授权方案和可选凭证的包含方式。
*   **动态技能检查缺失**：正在研究引入 `QuerySkill()` 方法，以便动态检查智能体不支持或未预料到的技能。
*   **任务生命周期与 UX**：协议在任务生命周期管理和用户体验方面仍有待进一步的增强和完善。

## 功能与定位

Agent2Agent (A2A) is an open protocol enabling communication and interoperability between opaque agentic applications.

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T11:46:01Z。
- 项目创建于 2025-03-25T18:44:21Z，具备持续迭代与社区沉淀。
- 以 `Shell` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/google/A2A
- 官网：https://a2a-protocol.org/
- README：https://raw.githubusercontent.com/google/A2A/main/README.md
- Releases：https://github.com/google/A2A/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/protocol]]
- [[00-元语/mcp]]
- [[00-元语/sdk]]
- [[00-元语/workflow]]
