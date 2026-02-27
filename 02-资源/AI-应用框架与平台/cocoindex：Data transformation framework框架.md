---
title: cocoindex：Data transformation framework框架
对象: GitHub 仓库
项目主页: https://github.com/cocoindex-io/cocoindex
官网: https://cocoindex.io
文档: https://cocoindex.io/docs
开源协议: Apache 2.0
---

## 摘要

CocoIndex 是一个基于 Rust 引擎和 Python 接口的数据转换框架，采用声明式数据流模型，面向 AI 场景提供增量处理与实时同步能力。

- 以数据流方式声明转换逻辑，强调无隐藏状态与数据血缘可观测性。
- 支持最小化重计算与缓存复用，在源数据或逻辑变更时执行增量更新。
- 支持本地文件、S3、Azure Blob、Google Drive、Postgres 等数据源。
- 支持导出到 Postgres、Qdrant、LanceDB、Pinecone、ChromaDB、Doris、Neo4j、Ladybug 等目标。
- 提供 CLI 与 HTTP 服务能力，可用于持续更新、评估与对外 API 接入。

## 功能与定位

CocoIndex 定位为面向 AI 的数据转换与索引框架，用于把多来源数据处理为可检索、可分析、可持续更新的目标数据。它覆盖从数据接入、转换、收集到导出的完整链路，适合语义检索、知识图谱与结构化提取等场景。

## 典型使用场景

- 文本、代码、PDF 的分块与向量化，构建语义检索索引。
- 文档关系抽取与图结构映射，构建知识图谱。
- 基于 LLM 的结构化信息提取与持续同步更新。
- 结合向量库和图数据库的实时推荐或检索增强流程。

## 核心功能

- 声明式数据流定义：通过 Python 定义 source、transform、collector、export。
- 增量处理：数据变化时仅重算受影响部分，减少全量重建。
- 实时更新：支持基于轮询或变更捕获的持续更新机制。
- 多源多目标：内置常见数据源和向量库/图数据库导出目标。
- 命令行与服务化：支持更新、评估、查看、服务启动等运维命令。

## 特色与差异点

- 底层 Rust 引擎配合 Python 开发接口，兼顾性能与开发效率。
- 组件接口统一，源、函数、目标切换成本较低。
- 在图目标中支持节点与关系映射，并处理基于主键的匹配去重。

## 使用方式概览

1. 安装 Python 包并准备运行环境。
2. 定义 flow：声明数据源、转换逻辑与导出目标。
3. 配置数据库连接等运行参数。
4. 使用 `cocoindex update` 执行构建，或用 `-L` 进入持续更新模式。
5. 需要 API 接入时可通过 `cocoindex server` 启动 HTTP 服务。

## 限制与注意事项

- 增量处理机制依赖 Postgres，部署前需要准备并配置数据库连接。
- 图数据库导出需要完整映射关键字段，并保证标签与关系类型命名一致。
- 社区与文档迭代较快，落地前应以当前版本文档与示例校验兼容性。

## 链接

- GitHub 仓库：https://github.com/cocoindex-io/cocoindex
- 官方文档：https://cocoindex.io/docs
- 快速开始：https://cocoindex.io/docs/getting_started/quickstart
- 示例目录：https://github.com/cocoindex-io/cocoindex/tree/main/examples
- 标签页：https://github.com/cocoindex-io/cocoindex/tags

## 关联主题

- [[00-元语/AI]]
- [[00-元语/ETL]]
- [[00-元语/data-pipeline]]
- [[00-元语/knowledge-graph]]
- [[00-元语/rag]]
