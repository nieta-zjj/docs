---
title: "Dify：开源工具链用于 LLM 应用与 agent 工作流开发"

对象: "GitHub 开源项目"
发布日期: "2026-02-22"
项目: "`langgenius/dify`"
来源: "https://github.com/langgenius/dify/blob/main/LICENSE"
官网: "https://dify.ai"
文档: "https://docs.dify.ai"
项目创建时间: "2023-04-12"
主要语言: "TypeScript"
最新版本快照: "`1.14.0-rc1`（预发布，2026-02-14）"
最新稳定版快照: "`1.13.0`（2026-02-11）"
最近提交: "`8141e3af996c5ee4d2dd313f16ddc4c8854956e2`（2026-02-21）"
用户提供热度快照: "56476"
GitHub 星标快照: "129984（抓取日期：2026-02-22）"
开源协议: "Dify Open Source License（基于 Apache 2.0 并附加条件）"
---

## 摘要

Dify 是一个开源的生产级大语言模型应用与 agent 工作流开发平台，为开发者提供从原型设计到生产环境落地的完整工具链。

- 提供可视化工作流编排、Prompt IDE、LLMOps 和 API 集成能力。
- 支持多模型接入，并内置 RAG 流水线与 agent 能力。
- 同时提供 Dify Cloud 与 Self-hosting 路径，支持 Docker Compose 快速启动。
- 部署生态覆盖 Kubernetes、Terraform 与 AWS CDK 等多云方案。
- 许可证并非标准 MIT 或纯 Apache-2.0，商业落地前需要核对附加条款。

## 功能与定位

Dify 的定位是面向生产环境的 LLM 应用开发平台。它把 workflow 编排、模型管理、RAG、agent、运维观测与 API 对接整合在同一平台中，降低从原型到上线的工程成本。

## 典型使用场景

- 团队快速搭建并迭代企业内部 AI 应用与 agent 工作流。
- 在统一平台上完成多模型接入、提示词调优与应用运维。
- 把 RAG 与 agent 能力通过 API 方式嵌入现有业务系统。
- 在私有环境进行自部署并按需扩展到多云基础设施。

## 核心功能

- 可视化 workflow 编排。
- 多模型接入与提供商兼容。
- Prompt IDE 与应用开发辅助能力。
- RAG pipeline，覆盖文档导入与检索增强流程。
- agent 构建能力与工具扩展能力。
- LLMOps 监控与持续优化支持。
- 面向业务系统集成的 API 能力。

## 特色与差异点

- 平台化能力完整，覆盖开发、部署与运维全链路。
- 既提供云端托管，也支持社区版自部署。
- 社区生态活跃，文档与部署参考覆盖多种基础设施方案。
- 对 agent workflow 与 LLM 应用场景有较强的工程化导向。

## 使用方式概览

1. 零部署试用可直接使用 Dify Cloud。
2. 私有化部署可按文档使用 Docker Compose 启动社区版。
3. 需要高可用或云上基础设施时，可参考 Kubernetes、Terraform、AWS CDK 等方案。
4. 落地前建议结合 releases 与文档确认版本兼容与升级路径。

## 限制与注意事项

- 项目采用自定义 Dify Open Source License，不等同于常见宽松协议。
- 许可证对多租户服务和前端 LOGO/版权信息有附加约束，超出范围可能需要商业授权。
- release 节奏较快，存在预发布版本，生产环境应优先评估稳定版。
- 指标数据会随时间变化，你提供的 `56476` 与本次抓取 `129984` 属于不同时间快照。

## 链接

- 仓库主页：https://github.com/langgenius/dify
- 官网：https://dify.ai
- Cloud：https://cloud.dify.ai
- 文档：https://docs.dify.ai
- README：https://github.com/langgenius/dify/blob/main/README.md
- 发布页：https://github.com/langgenius/dify/releases
- 许可证：https://github.com/langgenius/dify/blob/main/LICENSE

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/workflow]]
- [[00-元语/rag]]
- [[00-元语/llmops]]
- [[00-元语/prompt]]
- [[00-元语/self-hosting]]
- [[00-元语/github]]
- [[00-元语/compliance]]
