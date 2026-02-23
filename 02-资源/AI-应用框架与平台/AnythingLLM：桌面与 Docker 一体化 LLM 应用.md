---
title: "AnythingLLM：桌面与 Docker 一体化 LLM 应用"

发布日期: "2026-02-22"
对象: "GitHub 项目 `Mintplex-Labs/anything-llm`"
项目主页: "https://github.com/Mintplex-Labs/anything-llm"
官方网站: "https://anythingllm.com"
开源协议: "MIT License"
主要语言: "JavaScript"
统计快照: "Stars 54844，Forks 5908，Watchers 362（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.11.0（发布时间：2026-02-18T17:08:45Z）"
---

## 摘要

**1) 一句话总结**
AnythingLLM 是一款开源的全栈桌面与 Docker AI 应用，内置 RAG、AI 代理、无代码构建器及 MCP 兼容性，支持用户结合各类开源或闭源大模型与私有文档进行智能对话。

**2) 核心要点**
*   **项目基础**：基于 JavaScript 开发，采用 MIT 开源协议，在 GitHub 上拥有超 5.48 万 Stars 和 5900+ Forks，最新发布版本为 v1.11.0。
*   **部署方式**：支持桌面端（Mac、Windows、Linux）本地运行，同时也支持 100% 云端 Docker 部署。
*   **核心机制（工作区）**：将文档划分为独立的“工作区（Workspaces）”，类似对话线程且实现文档容器化，确保各工作区之间的上下文相互隔离、保持纯净。
*   **特色功能**：具备完全的 MCP 兼容性、无代码 AI 代理构建器、自定义 AI 代理（支持网页浏览等操作）、多模态支持，并提供完整的开发者 API 用于自定义集成。
*   **Docker 专属功能**：Docker 版本额外支持多用户实例管理与权限控制，以及可嵌入网站的自定义聊天小部件。
*   **广泛的模型兼容性**：支持数十种主流大语言模型（如 OpenAI、Anthropic、DeepSeek、Ollama、LM Studio、LocalAI 等）以及多种嵌入模型（默认提供 AnythingLLM 原生嵌入器）。
*   **文档处理能力**：内置 RAG 功能，支持 PDF、TXT、DOCX 等多种文档格式，提供带清晰引用的拖拽式聊天 UI，并针对超大型文档管理内置了节省成本和时间的优化措施。

## 功能与定位

The all-in-one Desktop & Docker AI application with built-in RAG, AI agents, No-code agent builder, MCP compatibility,  and more.

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:16:21Z。
- 项目创建于 2023-06-04T02:29:14Z，具备持续迭代与社区沉淀。
- 以 `JavaScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/Mintplex-Labs/anything-llm
- 官网：https://anythingllm.com
- README：https://raw.githubusercontent.com/Mintplex-Labs/anything-llm/main/README.md
- Releases：https://github.com/Mintplex-Labs/anything-llm/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/Agent]]
- [[00-元语/workflow]]
- [[00-元语/mcp]]
- [[00-元语/self-hosting]]
- [[00-元语/desktop-client]]
- [[00-元语/multimodal]]
