---
title: "RagaAI-Catalyst：Agent AI 可观测性监控与评估 Python SDK"

发布日期: "2026-02-22"
对象: "GitHub 项目 `raga-ai-hub/RagaAI-Catalyst`"
项目主页: "https://github.com/raga-ai-hub/RagaAI-Catalyst"
官方网站: "https://catalyst.raga.ai/"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 16098，Forks 3641，Watchers 35（抓取时间：2026-02-22）"
版本快照: "最新发布 v2.2.4（发布时间：2025-06-23T05:59:19Z）"
---

## 摘要

**1) 一句话总结**
RagaAI Catalyst 是一个开源的 Python SDK，专为 Agent AI 提供可观测性、监控与评估框架，涵盖从数据管理、链路追踪到护栏和红队测试的端到端 LLM 应用优化功能。

**2) 关键点**
*   **项目基础**：基于 Python 开发，采用 Apache License 2.0 开源协议，在 GitHub 上拥有超 1.6 万 Stars，定位为通用开发工具。
*   **身份验证**：必须通过 RagaAI Catalyst 平台生成并配置 Access Key 和 Secret Key 才能进行各项操作。
*   **指标评估（Evaluation）**：支持对 RAG 应用进行多维度指标评估（如真实性 Faithfulness、幻觉 Hallucination），允许自定义模型供应商及通过阈值（如 `gte`, `lte`）判定结果。
*   **链路与智能体追踪（Tracing）**：提供标准追踪和 Agentic 追踪功能，可监控 LLM 交互、Token 消耗、工具调用、网络活动及成本，并支持代码自动插桩（Auto-instrumentation）。
*   **提示词管理（Prompt Management）**：支持提示词的获取、版本控制和变量编译，并提供了与 OpenAI 和 LiteLLM 无缝集成的代码示例。
*   **合成数据生成（SDG）**：内置数据生成工具，可解析文档或 CSV 文件，自动生成复杂问答对（Q&A）及测试示例。
*   **护栏管理（Guardrails）**：允许为部署配置安全护栏（如正则检查、响应评估器），支持设定失败条件（如高风险拦截）并提供替代响应。
*   **红队测试（Red-teaming）**：提供模型漏洞和偏见扫描功能，支持内置与自定义检测器（如刻板印象、有害内容），可根据应用描述自动生成测试用例，并支持将结果上传至仪表板。

## 功能与定位

Python SDK for Agent AI Observability, Monitoring and Evaluation Framework. Includes features like agent, llm and tools tracing, debugging multi-agentic system, self-hosted dashboard and advanced analytics with timeline and execution graph view

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-21T14:27:19Z。
- 项目创建于 2024-08-26T12:13:15Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/raga-ai-hub/RagaAI-Catalyst
- 官网：https://catalyst.raga.ai/
- README：https://raw.githubusercontent.com/raga-ai-hub/RagaAI-Catalyst/main/README.md
- Releases：https://github.com/raga-ai-hub/RagaAI-Catalyst/releases

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/prompt]]
- [[00-元语/observability]]
- [[00-元语/evals]]
- [[00-元语/sdk]]
- [[00-元语/llmops]]
- [[00-元语/rag]]
- [[00-元语/security]]
- [[00-元语/github]]
