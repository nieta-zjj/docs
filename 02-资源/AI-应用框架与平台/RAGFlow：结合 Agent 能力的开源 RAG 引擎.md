---
title: "RAGFlow：结合 Agent 能力的开源 RAG 引擎"

对象: "Git 项目与官网文档"
发布日期: "2026-02-22"
来源:
  - "https://github.com/infiniflow/ragflow"
  - "https://raw.githubusercontent.com/infiniflow/ragflow/main/README.md"
  - "https://ragflow.io/"
  - "https://ragflow.io/docs/dev/"
开源协议: "Apache-2.0"
输入备注: "用户附带数字 `36093`；当前 `https://github.com/infiniflow/ragflow/issues/36093` 返回 404，无法确认其为有效 issue 编号。"
---

## 摘要

**1) 一句话总结**
RAGFlow 是一款结合了 Agent 能力的开源 RAG 引擎，专注于深度文档理解与多源异构数据处理，为大语言模型和 AI Agent 提供高质量的上下文层与可视化工作流。

**2) 关键要点**
- 开源与定位：基于 Apache-2.0 协议开源，既是 RAG 引擎，也可作为 AI 数据的 ETL 工具和数据接入管道。
- 数据兼容与理解：支持接入文档、表格、图片、网页等多源异构数据，并强调复杂文档结构的深度理解与提取。
- 可视化与人工干预：提供完整产品 UI，支持模板化分块，并允许用户在界面中人工干预解析和分块过程。
- 高级检索机制：支持多路召回与融合重排。
- 降低幻觉：强调基于引用的回答能力，用于提升回答可追溯性。
- 配置与集成：支持配置不同的 LLM 与 Embedding 模型，并提供 API 集成能力。
- 部署方式：官方推荐 Docker Compose 本地部署；如需代码执行沙箱功能需额外安装 gVisor。

**3) 风险与不足**
- 硬件门槛：基础运行要求至少 4 核 CPU、16 GB 内存、50 GB 磁盘。
- 架构兼容性：官方 Docker 镜像面向 x86，ARM64 平台需自行构建镜像。
- 软件依赖：需要较新版本 Docker 与 Docker Compose。

## 功能与定位

RAGFlow 将 RAG 与 Agent 能力结合，定位为面向 LLM/AI Agent 的上下文层引擎。官网与 README 均强调其在数据接入、解析、检索和引用回答链路上的一体化能力。

## 典型使用场景

- 基于企业内部文档、表格、网页和图片等资料构建可检索知识库。
- 需要引用可追溯回答的问答系统，降低幻觉风险。
- 为 AI Agent 提供结构化上下文数据与检索能力。

## 核心功能

- 深度文档理解与复杂格式数据提取。
- 模板化分块与可人工干预的解析流程。
- 多路召回与融合重排。
- 多模型供应商配置（LLM / Embedding）。
- 面向业务系统的 API 集成。

## 特色与差异点

- 将 RAG 引擎与 Agent 能力放在同一产品流程中。
- 强调可视化、可干预、可追溯的知识处理与问答链路。
- 兼顾“数据 ETL + 检索问答 + 聊天应用配置”的工作流闭环。

## 使用方式概览

1. 准备运行环境（CPU、内存、磁盘、Docker、Docker Compose）。
2. 按官方文档使用 Docker Compose 启动服务。
3. 在系统内配置模型供应商与默认模型。
4. 创建数据集并导入文件。
5. 按需人工干预分块/解析效果。
6. 基于数据集配置并创建 AI Chat 应用。

## 限制与注意事项

- 官方镜像主要面向 x86，ARM64 需自行构建。
- 代码执行沙箱功能需要额外依赖 gVisor。
- 部署前需先满足 `vm.max_map_count` 等系统前置要求。
- 项目热度指标（如 stars/forks/issues）变化快，若用于决策应以访问当日页面为准。

## 链接

- GitHub：https://github.com/infiniflow/ragflow
- 官网：https://ragflow.io/
- 文档入口：https://ragflow.io/docs/dev/
- 在线 Demo：https://demo.ragflow.io/
- 路线图（Issue）：https://github.com/infiniflow/ragflow/issues/12241
- Docker Hub：https://hub.docker.com/r/infiniflow/ragflow

## 关联主题

- [[00-元语/tool]]
- [[00-元语/rag]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/ETL]]
- [[00-元语/data-pipeline]]
- [[00-元语/self-hosting]]
- [[00-元语/workflow]]
