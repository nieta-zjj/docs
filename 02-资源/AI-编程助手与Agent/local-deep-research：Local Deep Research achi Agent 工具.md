---
title: local-deep-research：Local Deep Research achi Agent 工具
来源: GitHub 仓库资料
项目主页: https://github.com/LearningCircuit/local-deep-research
开源协议: MIT
---

## 摘要

Local Deep Research 是一个可本地部署的开源 AI 研究助手，面向“多来源检索 + 迭代分析 + 引用输出”的深度研究场景。项目支持本地与云端 LLM、30+ 搜索源、Web UI/CLI/REST API，并强调以用户可控的数据路径与加密存储构建长期可复用的个人知识库。

## 功能与定位

local-deep-research 定位为可自托管的 Deep Research agent 工具。它将复杂问题拆解为多轮研究任务，组合不同搜索引擎与模型完成检索、综合与报告生成，并为结论提供来源引用。项目强调“可控性”，包括部署方式可选、本地模型可用、搜索引擎可切换、策略可配置。

## 典型使用场景

- 需要在短时间内获得带引用的事实性回答。
- 需要对主题做多轮深入研究并输出结构化报告。
- 需要把本地文档与在线资料联合检索，形成私有研究工作流。
- 需要通过 API 或脚本把研究能力接入现有应用。

## 核心功能

- 研究模式：快速摘要、详细研究、报告生成、文档分析。
- 检索能力：支持学术、通用、技术、新闻等多类数据源，并支持本地文档与 LangChain retriever。
- 模型接入：支持 Ollama 本地模型，以及 OpenAI、Anthropic、Google、OpenRouter 等云端模型。
- 结果交付：支持带引用输出，并提供 Markdown、PDF、JSON 等导出形式。
- 系统能力：提供 WebSocket 实时进度、分析看板、基准测试与策略对比相关能力。

## 特色与差异点

- 本地优先与隐私导向：可在本地环境运行，强调用户对数据与配置的控制权。
- 多策略研究框架：项目文档与架构说明中给出多种搜索策略与多引擎协同机制。
- 知识库循环：研究过程中可沉淀资料并建立索引，支持后续复用。
- 工程化程度较高：覆盖 Web、CLI、API 三类入口，并提供架构、基准、故障排查与发布文档。

## 使用方式概览

- Docker 或 Docker Compose：适合多数用户进行快速部署。
- pip 安装：适合二次开发或 Python 集成场景。
- Web 界面：适合交互式研究与参数调优。
- CLI 与 REST API：适合自动化任务与系统集成。

## 限制与注意事项

- 本地模型质量与速度受硬件资源影响明显，显存与内存配置会直接影响可用模型范围。
- 完全离线只适用于本地模型与本地文档检索，在线搜索仍依赖网络。
- 文档中部分页面标注为社区维护，关键信息需要结合仓库主文档交叉核对。
- 若关闭加密能力，密钥与数据的存储安全性会下降，应按项目文档评估部署边界。

## 链接

- https://github.com/LearningCircuit/local-deep-research
- https://github.com/LearningCircuit/local-deep-research/blob/main/README.md
- https://github.com/LearningCircuit/local-deep-research/blob/main/docs/features.md
- https://github.com/LearningCircuit/local-deep-research/blob/main/docs/faq.md
- https://github.com/LearningCircuit/local-deep-research/blob/main/docs/architecture/OVERVIEW.md
- https://github.com/LearningCircuit/local-deep-research/blob/main/docs/release_notes/0.4.0.md

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/self-hosting]]
- [[00-元语/cli]]
