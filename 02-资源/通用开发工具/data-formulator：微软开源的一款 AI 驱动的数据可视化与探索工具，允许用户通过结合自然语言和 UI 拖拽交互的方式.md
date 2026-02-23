---
title: "data-formulator：微软开源的一款 AI 驱动的数据可视化与探索工具，允许用户通过结合自然语言和 UI 拖拽交互的方式"

发布日期: "2026-02-22"
对象: "GitHub 项目 `microsoft/data-formulator`"
项目主页: "https://github.com/microsoft/data-formulator"
官方网站: "https://arxiv.org/abs/2408.16119"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 14915，Forks 1357，Watchers 103（抓取时间：2026-02-22）"
版本快照: "最新发布 0.6（发布时间：2026-01-27T01:07:30Z）"
---

## 摘要

### 1) 一句话总结
Data Formulator 是微软开源的一款 AI 驱动的数据可视化与探索工具，允许用户通过结合自然语言和 UI 拖拽交互的方式，从多种数据源中提取、分析数据并生成交互式图表与报告。

### 2) 核心要点
* **项目基础**：该项目是微软研究院的原型产品（基于其 2023/2024 年相关论文），主要使用 TypeScript 开发，采用 MIT 开源协议，目前在 GitHub 上拥有近 1.5 万 Stars。
* **多源数据接入**：支持加载结构化文件（CSV/Excel）、通过 AI 从截图或复杂文本中提取数据，以及连接多种外部数据库（如 MySQL、Postgres、MongoDB、Google BigQuery 等）。
* **实时数据支持**：最新 0.6 版本引入了实时数据连接功能，支持连接 URL 和数据库并设置自动刷新间隔，图表会随数据变化自动更新。
* **分级探索模式**：提供从“高控制度”到“高自由度”的四种探索级别，包括纯 UI 拖拽建图、自然语言结合 UI 生成新字段、AI 推荐图表，以及完全由 AI Agent 自动规划和多轮探索的模式。
* **大数据与复杂操作**：底层集成 DuckDB 以支持大型数据集的快速处理，支持多数据表的自动关联（Join），并提供数据集锚定（Anchoring）功能以便在清理后的子集上进行深度分析。
* **广泛的模型兼容**：支持 OpenAI、Azure、Ollama 以及通过 LiteLLM 接入的 Anthropic 等多种大语言模型（推荐使用具备强代码生成和推理能力的模型）。
* **结果验证与报告生成**：用户可以检查 AI 生成的图表背后的数据、公式、解释和代码，并能使用 Chartifact 将选定的图表组合成 Markdown 风格的可编辑、可分享的数据报告。
* **便捷部署**：支持通过 Python 包管理器（`pip install data_formulator`）在本地快速安装运行，或使用预配置的 GitHub Codespaces 在云端启动。

### 3) 风险/不足
*(注：以下为开发者指南中明确指出的待完善缺口)*
* **非结构化数据提取限制**：目前在处理混乱数据（Messy data）提取时，支持的文档类型和可处理的文件大小仍需进一步扩展（Scaling up）。
* **连接器与模板欠缺**：数据库连接器的种类以及图表模板（例如地图类型）目前仍不够完善，官方正寻求社区协助添加。

## 功能与定位

🪄 Create rich visualizations with AI

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:50:50Z。
- 项目创建于 2024-06-07T23:01:51Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/microsoft/data-formulator
- 官网：https://arxiv.org/abs/2408.16119
- README：https://raw.githubusercontent.com/microsoft/data-formulator/main/README.md
- Releases：https://github.com/microsoft/data-formulator/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/data-pipeline]]
- [[00-元语/ETL]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
- [[00-元语/github]]
