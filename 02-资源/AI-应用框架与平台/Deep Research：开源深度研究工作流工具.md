---
title: "Deep Research：开源深度研究工作流工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `dzhng/deep-research`"
项目主页: "https://github.com/dzhng/deep-research"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 18466，Forks 1902，Watchers 109（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**一句话总结**
`dzhng/deep-research` 是一个基于 TypeScript 开发的极简 AI 深度研究助手，通过结合搜索引擎、网页抓取和 LLM（如 o3-mini）进行迭代式研究并最终生成详细的 Markdown 报告。

**关键要点**
* **核心目标**：提供最简单的深度研究智能体实现，代码量严格控制在 500 行以内，便于开发者理解和二次开发。
* **工作机制**：通过 LLM 智能生成搜索查询，结合网页抓取处理结果，并根据已有发现不断调整方向进行迭代深入。
* **参数化控制**：提供可配置的广度（Breadth）和深度（Depth）参数，精准控制研究的范围与层级。
* **主要特性**：支持智能追问以明确研究需求，利用并发处理提升多任务搜索与结果分析的效率。
* **输出格式**：最终输出包含详细研究发现和参考来源的 Markdown 格式综合报告。
* **外部依赖**：需要 Firecrawl API（用于网页搜索和内容提取）以及 OpenAI API（用于调用 o3-mini 模型）。
* **本地化支持**：允许用户配置并使用自托管的 Firecrawl 服务，同时也支持通过修改端点和模型名称来接入本地 LLM。
* **部署与运行**：支持 Node.js 环境直接运行（`npm install`）或通过 Docker Compose 进行容器化部署。
* **项目热度**：采用 MIT 开源协议，社区关注度极高，目前已获得超过 18,400 颗 Star 和 1,900 次 Fork。

## 功能与定位

An AI-powered research assistant that performs iterative, deep research on any topic by combining search engines, web scraping, and large language models.  The goal of this repo is to provide the simplest implementation of a deep research agent - e.g. an agent that can refine its research direction overtime and deep dive into a topic.

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-21T18:09:58Z。
- 项目创建于 2025-02-04T01:27:56Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/dzhng/deep-research
- README：https://raw.githubusercontent.com/dzhng/deep-research/main/README.md
- Releases：https://github.com/dzhng/deep-research/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/web-crawling]]
- [[00-元语/workflow]]
- [[00-元语/OpenAI]]
- [[00-元语/self-hosting]]
- [[00-元语/typescript]]
- [[00-元语/github]]
