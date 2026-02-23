---
title: "gemini-fullstack-langgraph-quickstart：基于 React、LangGraph 和 Gemini 2.5 构建的全栈 AI 代理快速入门项目，该代理能够通过谷歌搜索进行迭代式网"

发布日期: "2026-02-22"
对象: "GitHub 项目 `google-gemini/gemini-fullstack-langgraph-quickstart`"
项目主页: "https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart"
官方网站: "https://ai.google.dev/gemini-api/docs/google-search"
开源协议: "Apache License 2.0"
主要语言: "Jupyter Notebook"
统计快照: "Stars 17886，Forks 3066，Watchers 109（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
这是一个基于 React、LangGraph 和 Gemini 2.5 构建的全栈 AI 代理快速入门项目，该代理能够通过谷歌搜索进行迭代式网络研究、反思知识盲区，并最终生成带有引用的回答。

**2) 关键要点**
*   **技术栈**：前端采用 React（结合 Vite、Tailwind CSS 和 Shadcn UI），后端采用 LangGraph 和 FastAPI。
*   **核心工作流**：后端代理的工作分为五步：生成初始查询、网络研究（结合 Google Search API）、反思与知识盲区分析、迭代优化搜索、合成最终带引用的答案。
*   **模型驱动**：查询生成、反思过程以及最终答案的合成均由 Google Gemini 模型提供支持。
*   **环境与依赖**：本地开发需要 Node.js、Python 3.11+ 以及有效的 `GEMINI_API_KEY`，支持通过 `make dev` 命令实现前后端热重载。
*   **CLI 支持**：提供命令行脚本 (`backend/examples/cli_research.py`)，允许用户在终端直接运行代理进行单次快速问答。
*   **生产部署架构**：生产环境部署需要 Redis（作为发布-订阅代理以支持实时流输出）和 Postgres（用于存储助手、线程、长期记忆及管理后台任务队列）。
*   **容器化支持**：项目提供了 Dockerfile 和 `docker-compose.yml` 用于生产环境部署，使用 Docker 部署时额外需要配置 `LANGSMITH_API_KEY`。
*   **开源数据**：项目采用 Apache License 2.0 开源协议，目前在 GitHub 上拥有 17886 个 Stars 和 3066 个 Forks。

## 功能与定位

Get started with building Fullstack Agents using Gemini 2.5 and LangGraph

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T10:20:30Z。
- 项目创建于 2025-05-22T11:59:02Z，具备持续迭代与社区沉淀。
- 以 `Jupyter Notebook` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart
- 官网：https://ai.google.dev/gemini-api/docs/google-search
- README：https://raw.githubusercontent.com/google-gemini/gemini-fullstack-langgraph-quickstart/main/README.md
- Releases：https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/gemini]]
- [[00-元语/react]]
- [[00-元语/fastapi]]
- [[00-元语/llm]]
- [[00-元语/workflow]]
- [[00-元语/cli]]
- [[00-元语/github]]
- [[00-元语/PostgreSQL]]
- [[00-元语/observability]]
