---
title: "open-notebook：开源、注重隐私的 Google Notebook LM 替代方案，支持完全本地化部署、接入 16+ 种 AI 模型"

发布日期: "2026-02-22"
对象: "GitHub 项目 `lfnovo/open-notebook`"
项目主页: "https://github.com/lfnovo/open-notebook"
官方网站: "https://www.open-notebook.ai"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 19875，Forks 2242，Watchers 100（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.7.4（发布时间：2026-02-18T15:08:12Z）"
---

## 摘要

### 一句话总结
Open Notebook 是一个开源、注重隐私的 Google Notebook LM 替代方案，支持完全本地化部署、接入 16+ 种 AI 模型，并提供多模态文档管理、智能问答及多角色播客生成功能。

### 核心要点
*   **核心定位**：主打数据主权与隐私保护，用户可选择自托管部署（Docker/本地/云端），避免数据被锁定在单一云服务商。
*   **广泛的模型支持**：内置支持超过 16 家 AI 提供商（包括 OpenAI、Anthropic、Ollama、Google、DeepSeek 等），并全面支持 DeepSeek-R1 等推理（Reasoning）模型。
*   **多模态资料管理**：支持导入和组织 PDF、视频、音频、网页及 Office 文档等多种格式的内容，并支持跨资料的全文与向量智能检索。
*   **高级播客生成**：突破了传统双人播客的限制，支持生成 1-4 名发言人的专业播客，并允许自定义剧本和发言人配置。
*   **开发者友好**：提供完整的 REST API 以供自动化集成，支持 MCP（Model Context Protocol）接入，技术栈基于 Python (FastAPI)、Next.js、React 和 SurrealDB。
*   **多语言支持**：用户界面原生支持中文（简体与繁体）、英文、日文、俄文及葡萄牙文。
*   **灵活的成本控制**：用户可根据需求选择付费 API，或通过 Ollama 等工具免费运行本地 AI 模型。
*   **未来路线图**：计划推出前端实时更新、异步内容处理、跨笔记本资料复用以及书签应用集成等新特性。

### 风险与不足
*   **引用溯源功能较弱**：根据官方对比表，目前系统的引用功能仅提供“基础参考（Basic references）”，相比 Google Notebook LM 的全面溯源仍有差距，官方明确表示该功能有待进一步改进。

## 功能与定位

An Open Source implementation of Notebook LM with more flexibility and features

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T13:12:38Z。
- 项目创建于 2024-10-21T17:58:46Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/lfnovo/open-notebook
- 官网：https://www.open-notebook.ai
- README：https://raw.githubusercontent.com/lfnovo/open-notebook/main/README.md
- Releases：https://github.com/lfnovo/open-notebook/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/self-hosting]]
- [[00-元语/security]]
- [[00-元语/rag]]
- [[00-元语/mcp]]
