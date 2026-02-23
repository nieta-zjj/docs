---
title: "Graphiti：面向智能体的知识图谱记忆层"

发布日期: "2026-02-22"
对象: "GitHub 项目 `getzep/graphiti`"
项目主页: "https://github.com/getzep/graphiti"
官方网站: "https://help.getzep.com/graphiti"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 22987，Forks 2269，Watchers 146（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.28.1（发布时间：2026-02-19T15:09:58Z）"
---

## 摘要

**1) 一句话总结**
Graphiti 是一个由 Zep 开源的 Python 框架，专为 AI 智能体构建、维护和查询具备时间感知能力的实时动态知识图谱。

**2) 关键要点**
* **核心定位**：专为在动态环境中运行的 AI 智能体设计，替代传统 RAG 方法，将用户交互、企业数据和外部信息持续整合为可查询的图谱。
* **实时增量更新**：支持新数据的即时接入与更新，无需像传统方法那样对整个图谱进行批处理或重新计算。
* **双时态数据模型（Bi-Temporal Data Model）**：明确追踪事件发生的时间和数据摄入的时间，支持精确的历史时间点查询。
* **高效混合检索**：结合语义嵌入（Semantic embeddings）、关键字（BM25）和图遍历技术，实现低延迟查询，且不依赖 LLM 进行数据总结。
* **自定义实体定义**：提供灵活的本体（ontology）创建功能，开发者可通过简单的 Pydantic 模型自定义实体。
* **生态扩展**：提供 MCP（Model Context Protocol）服务器，可为 Claude、Cursor 等客户端赋予基于知识图谱的强大记忆能力。
* **与 Zep 的关系**：Graphiti 是 Zep 平台底层的开源核心（Apache 2.0 协议），适合需要自托管和定制开发的场景；而 Zep 提供开箱即用的全托管企业级平台。
* **对比传统 GraphRAG**：传统 GraphRAG 主要用于静态文档的批处理总结，而 Graphiti 专注于动态数据的持续增量管理。

## 功能与定位

Build Real-Time Knowledge Graphs for AI Agents

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:35:35Z。
- 项目创建于 2024-08-08T22:08:30Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/getzep/graphiti
- 官网：https://help.getzep.com/graphiti
- README：https://raw.githubusercontent.com/getzep/graphiti/main/README.md
- Releases：https://github.com/getzep/graphiti/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/knowledge-graph]]
- [[00-元语/context-database]]
- [[00-元语/memory]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
- [[00-元语/rag]]
