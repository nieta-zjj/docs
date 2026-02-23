---
title: "Pathway：Git 项目实时流处理与 LLM 数据管道"

对象: "Git 项目"
发布日期: "2026-02-22"
来源:
  - "https://github.com/pathwaycom/pathway"
  - "https://raw.githubusercontent.com/pathwaycom/pathway/main/README.md"
  - "https://raw.githubusercontent.com/pathwaycom/pathway/main/LICENSE.txt"
  - "https://pathway.com/developers/user-guide/introduction/welcome"
  - "https://pathway.com/developers/api-docs/pathway"
  - "https://pathway.com/developers/templates/"
  - "https://pathway.com/license/"
许可协议: "BSL 1.1（License 文件为 `LICENSE.txt`，含 Additional Use Grant）"
输入备注: "用户附带数字 `33028`；当前 `https://github.com/pathwaycom/pathway/issues/33028` 返回 404，无法确认为公开可访问 issue。"
---

## 摘要

**1) 一句话总结**
Pathway 是一个底层由 Rust 驱动的 Python ETL 框架，专为低延迟实时流处理、批流一体开发以及大语言模型 LLM 和 RAG 数据流水线设计。

**2) 关键要点**
- 核心场景：主要用于构建实时分析、流处理应用、LLM 数据流水线及 RAG 系统。
- 批流一体：开发者可使用同一套 Python 代码覆盖 batch 与 streaming 两种计算模式。
- 底层架构：上层提供 Python API，底层运行时由基于 Differential Dataflow 的 Rust 引擎驱动，原生支持增量计算。
- 数据接入：内置连接器覆盖 Kafka、Google Drive、PostgreSQL、SharePoint、Airbyte 等来源。
- 处理能力：支持有状态与无状态转换，提供持久化、一致性处理、LLM helpers 与实时向量索引能力。
- 运行环境：依赖 Python 3.10+，主要支持 macOS 与 Linux。
- 部署路径：支持本地、Docker、Kubernetes 与云端部署。
- 协议演进：当前为 BSL 1.1，代码在变更日后转换为 Apache License 2.0。

**3) 风险与缺漏**
- 生产使用限制：BSL 1.1 的 Additional Use Grant 对生产场景和条件有明确约束，落地前需逐条核验。
- 平台限制：官方说明主要支持 macOS 与 Linux，其他系统通常需要通过虚拟机运行。
- 编号失效：`33028` 对应 issue 在 2026-02-22 返回 HTTP 404。

## 功能与定位

Pathway 定位为面向实时数据与智能应用的数据处理框架。它以 Python 作为开发接口，以 Rust 引擎承载运行时，强调在实时性、增量计算和工程可部署性之间取得平衡，服务于传统数据管道与 AI 数据管道的统一开发。

## 典型使用场景

- 实时事件处理与流式分析。
- 实时更新的数据索引与检索增强应用。
- 面向 LLM 的数据接入、转换与推理前处理流程。
- 需要在开发和生产之间复用同一套处理逻辑的团队场景。

## 核心功能

- 多源连接器与数据接入能力。
- 有状态与无状态转换能力。
- 增量计算与一致性处理机制。
- 持久化与故障恢复相关能力。
- LLM helpers、实时向量索引与模板化示例入口。

## 特色与差异点

- Python 开发体验与 Rust 运行时组合。
- 一套代码支持 batch 与 streaming。
- 官方模板与文档体系较完整，便于快速启动。
- 与 Docker、Kubernetes 的部署路径衔接明确。

## 使用方式概览

1. 先阅读官方用户文档与模板中心，确认目标场景对应的示例。
2. 按 Python 3.10+ 环境要求完成本地或容器化运行环境准备。
3. 根据业务数据源选择连接器并搭建管道。
4. 结合部署目标选择本地、Docker 或 Kubernetes 路径。
5. 上线前核验许可证约束与组织合规要求。

## 限制与注意事项

- 许可边界：当前版本遵循 BSL 1.1，生产用途需核对 Additional Use Grant 的范围与限制。
- 变更条款：许可文件声明代码将按变更日期逐步转换到 Apache-2.0，评估时需结合具体版本。
- 平台边界：官方主要支持 macOS 与 Linux；其他系统运行方式需额外评估。
- 链接边界：用户附带编号链接当前不可访问，不宜作为稳定证据来源。

## 链接

- 仓库：https://github.com/pathwaycom/pathway
- README：https://raw.githubusercontent.com/pathwaycom/pathway/main/README.md
- LICENSE：https://raw.githubusercontent.com/pathwaycom/pathway/main/LICENSE.txt
- 用户文档：https://pathway.com/developers/user-guide/introduction/welcome
- API 文档：https://pathway.com/developers/api-docs/pathway
- 模板中心：https://pathway.com/developers/templates/
- 许可说明：https://pathway.com/license/
- 编号核验：https://github.com/pathwaycom/pathway/issues/33028

## 关联主题

- [[00-元语/AI]]
- [[00-元语/tool]]
- [[00-元语/data-pipeline]]
- [[00-元语/ETL]]
- [[00-元语/stream-processing]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/llmops]]
- [[00-元语/compliance]]
