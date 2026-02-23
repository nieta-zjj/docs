---
title: "Langflow：AI agent 与工作流可视化构建工具"

对象: "GitHub 开源项目"
项目: "`langflow-ai/langflow`"
来源: "https://github.com/langflow-ai/langflow"
开源协议: "MIT"
版本状态: "releases 页面显示 `1.7.3` 为 Latest，`1.8.0.rc2` 为 Pre-release（2026-02-22 快照）"
最近提交: "`0283f5d7e1c56c06e5786128f4b034a3ab3b15e6`（2026-02-20）"
社区数据快照: "页面抓取显示约 `145k stars`、`8.5k forks`、`348 issues`、`694 pull requests`（2026-02-22）"
发布日期: "2026-02-22"
---

## 摘要

Langflow 是一个开源的 AI agent 与工作流可视化构建及部署工具，兼顾低代码拖拽与 Python 深度定制，并内置 API 与 MCP server 以实现跨技术栈集成。

- 可视化编排：提供图形化流程编辑与交互式 playground，支持快速搭建和调试。
- 集成能力：内置 API 与 MCP server，可把流程作为工具接入外部应用。
- 扩展能力：支持 Python 组件定制，适合从原型到生产的迭代。
- 部署路径：支持本地安装与 Docker 方式部署。

## 功能与定位

Langflow 的定位是“AI 工作流与 agent 的可视化编排平台”。它把流程构建、调试、部署和集成放在一套工具链里，降低从想法到可运行服务的成本。

## 典型使用场景

- 团队用可视化方式快速构建 RAG、工具调用与多 agent 协作流程。
- 把已验证流程通过 API 或 MCP 方式接入现有应用。
- 在教学或内部实验中，用 playground 做流程行为验证和演示。

## 核心功能

- 可视化流程构建：节点式编排与连接。
- 多 agent 与工具编排：支持复杂工作流结构。
- Python 组件扩展：可按业务需求定制组件逻辑。
- 部署与运行：支持本地运行、Docker 部署与云部署文档指引。
- 可观测性对接：README 提到可与 LangSmith、LangFuse 等工具集成。

## 特色与差异点

- 低门槛与高扩展并存：既支持拖拽，也支持代码级定制。
- MCP 友好：可把流程转成 MCP 可用工具，便于 agent 生态对接。
- 社区规模大：star 和 fork 规模较高，版本迭代频率快。

## 使用方式概览

- 本地方式：按 README 要求准备 Python 3.10–3.13，并使用 `uv` 安装与运行。
- 容器方式：使用官方镜像快速启动，按部署文档调整配置。
- 生产前：结合 release 与安全公告确认升级路径，再进行发布。

## 限制与注意事项

- 官方已明确提示部分历史版本存在关键缺陷或安全问题，升级时需避开受影响版本并遵循公告建议。
- releases 里同时存在预发布与稳定版，生产环境应优先依据稳定版与变更说明评估升级。
- 本仓库仅做项目定位与场景归档，不复述任何可被滥用的操作细节。

## 链接

- 仓库首页：https://github.com/langflow-ai/langflow
- README：https://github.com/langflow-ai/langflow/blob/main/README.md
- Releases：https://github.com/langflow-ai/langflow/releases
- SECURITY：https://github.com/langflow-ai/langflow/blob/main/SECURITY.md
- CONTRIBUTING：https://github.com/langflow-ai/langflow/blob/main/CONTRIBUTING.md
- RELEASE 流程：https://github.com/langflow-ai/langflow/blob/main/RELEASE.md
- LICENSE：https://github.com/langflow-ai/langflow/blob/main/LICENSE

## 相关文档

- [[02-资源/AI-应用框架与平台/langfuse：开源的大语言模型（LLM）工程平台，提供应用可观测性、提示词管理、评估、数据集和演练场等核心功能.md|langfuse：开源的大语言模型（LLM）工程平台，提供应用可观测性、提示词管理、评估、数据集和演练场等核心功能]]；关联理由：引用；说明：当前文档明确提到 Langflow 可与 LangFuse 集成做可观测性对接。
- [[02-资源/AI-应用框架与平台/MCP Servers：MCP 官方参考实现与服务器生态索引.md|MCP Servers：MCP 官方参考实现与服务器生态索引]]；关联理由：解说；说明：Langflow 提供 MCP server 集成能力，MCP Servers 文档可补充协议生态与实现背景。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/workflow]]
- [[00-元语/mcp]]
- [[00-元语/rag]]
- [[00-元语/observability]]
- [[00-元语/llmops]]
- [[00-元语/github]]
