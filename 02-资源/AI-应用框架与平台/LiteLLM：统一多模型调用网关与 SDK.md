---
title: "LiteLLM：统一多模型调用网关与 SDK"

发布日期: "2026-02-22"
对象: "GitHub 项目 `BerriAI/litellm`"
项目主页: "https://github.com/BerriAI/litellm"
官方网站: "https://docs.litellm.ai/docs/"
开源协议: "Other"
主要语言: "Python"
统计快照: "Stars 36549，Forks 5912，Watchers 157（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.81.12-stable（发布时间：2026-02-21T22:46:10Z）"
---

## 摘要

**1) 一句话总结**
LiteLLM 是一个 Python SDK 和 AI 网关（代理服务器），允许用户以统一的 OpenAI 格式调用 100 多种大语言模型（LLM）API，并内置成本跟踪、安全护栏、负载均衡和日志记录等企业级功能。

**2) 关键要点**
* **多模型统一接口**：支持以 OpenAI 格式调用 100+ LLM，包括 Bedrock、Azure、OpenAI、VertexAI、Anthropic、HuggingFace、VLLM 等。
* **双重使用模式**：提供轻量级的 Python SDK（`pip install litellm`）以及可独立部署的 AI 网关/代理服务器（`pip install 'litellm[proxy]'`）。
* **丰富的端点支持**：全面支持 `/chat/completions`、`/embeddings`、`/images`、`/audio`、`/rerank`、`/batches` 等多种 API 端点。
* **Agent 互操作性（A2A）**：支持 A2A（Agent-to-Agent）协议，可直接调用 LangGraph、Vertex AI Agent Engine、Azure AI Foundry、Bedrock AgentCore 等平台的智能体。
* **企业级管理特性**：内置成本跟踪、安全护栏（guardrails）、负载均衡和日志记录功能，满足 LLMOps 需求。
* **灵活的部署选项**：支持本地运行、Render/Railway 一键部署，官方同时提供托管代理（Hosted Proxy）和企业版（Enterprise Tier）。
* **项目背景与热度**：该项目为 Y Combinator (W23) 孵化项目，主要使用 Python 开发，在 GitHub 上拥有超 3.6 万 Stars 和近 6000 个 Forks，社区高度活跃。

## 功能与定位

Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:35:10Z。
- 项目创建于 2023-07-27T00:09:52Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/BerriAI/litellm
- 官网：https://docs.litellm.ai/docs/
- README：https://raw.githubusercontent.com/BerriAI/litellm/main/README.md
- Releases：https://github.com/BerriAI/litellm/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/sdk]]
- [[00-元语/protocol]]
- [[00-元语/Agent]]
- [[00-元语/OpenAI]]
- [[00-元语/github]]
