---
title: mlflow：应用平台
来源: GitHub
仓库链接: https://github.com/mlflow/mlflow
项目主页: https://mlflow.org
官方文档: https://mlflow.org/docs/latest
开源协议: Apache-2.0
最新版本: v3.10.0
发布日期: 2026-02-20
---

## 摘要

MLflow 是一个开源的端到端 AI 与机器学习开发平台，将传统机器学习与生成式 AI 工作流整合，提供实验跟踪、模型管理、可观测性和评估能力。

其核心能力覆盖 Tracking、Model Registry、部署、GenAI Tracing、Prompt 管理与评估，并支持多工作区组织、OpenTelemetry 兼容和多语言 SDK。项目可部署在本地、on-prem 与云环境，也可使用托管服务。

## 功能与定位

MLflow 的定位是统一 AI/ML 开发与上线过程中的关键环节，降低“实验、评估、追踪、部署”之间的割裂。

面向传统机器学习，MLflow 提供实验跟踪、模型注册与部署能力；面向 GenAI/LLM 应用，提供调用链路追踪、评估与提示词管理能力。

## 典型使用场景

- 个人开发者在本地记录训练参数、指标与模型产物，快速对比实验结果。
- 团队在统一 Tracking Server 上协作，管理多项目实验、模型与权限。
- GenAI 应用团队追踪多轮对话链路、评估输出质量，并观察调用成本与网关用量。
- 需要同时维护经典 ML 与 LLM 应用的团队，使用同一平台统一管理生命周期。

## 核心功能

- 实验跟踪：通过 API 与 UI 记录参数、指标、代码版本和产物，支持 autolog。
- 模型管理：支持模型注册、检索与版本管理，便于模型对比和交付。
- GenAI 能力：支持 Tracing、评估、Prompt 管理与应用版本追踪。
- 部署能力：支持本地与服务化部署路径，兼顾单机开发与团队协作。
- 多工作区：支持在同一套基础设施中进行多团队与多项目隔离。

## 特色与差异点

- 一体化：同一平台覆盖 Classic ML 与 GenAI 的关键工作流。
- 开放性：强调 OpenTelemetry 兼容，降低供应商锁定风险。
- 生态兼容：支持多种模型框架与多语言 SDK（Python、TypeScript/JavaScript、Java、R）。
- 部署灵活：既支持自托管，也可接入主流托管服务生态。

## 使用方式概览

MLflow 的核心组件包括 SDK、Backend Store、Artifact Store 和 Tracking Server。

常见落地方式有三类：
- 默认本地模式（适合个人开发）
- 本地 tracking + 数据库（更结构化管理）
- 远端 tracking server（适合团队协作与权限治理）

Backend Store 支持 SQLAlchemy 生态数据库（如 PostgreSQL、MySQL、SQLite、MSSQL），用于支撑团队级的稳定运行。

## 限制与注意事项

- Workspaces 为可选能力，启用时依赖 SQL backend。
- 若用于组织级协作，需要提前规划后端存储、产物存储与访问控制策略。
- 本文档仅整理公开可验证的项目定位与功能信息，不替代官方部署与运维文档。

## 链接

- https://github.com/mlflow/mlflow
- https://mlflow.org
- https://mlflow.org/docs/latest
- https://github.com/mlflow/mlflow/releases/tag/v3.10.0

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/observability]]
- [[00-元语/workflow]]
