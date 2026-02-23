---
title: "LibreChat：AI 聊天系统，支持私有化部署与多模型 Agent 集成"

发布日期: "2026-02-22"
对象: "GitHub 项目 `danny-avila/LibreChat`"
项目主页: "https://github.com/danny-avila/LibreChat"
官方网站: "https://librechat.ai/"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 34025，Forks 6851，Watchers 190（抓取时间：2026-02-22）"
版本快照: "最新发布 chart-1.9.8（发布时间：2026-02-19T02:45:27Z）"
---

## 摘要

**1) 一句话总结**
LibreChat 是一款开源且支持私有化部署的增强版 AI 聊天平台，统一集成了全球主流大模型、AI 代理、代码解释器、多模态交互及企业级多用户权限管理功能。

**2) 核心要点**
*   **项目基础**：基于 TypeScript 开发，采用 MIT 开源协议，社区高度活跃（超 3.4 万 Stars），支持 Docker、本地及云端部署。
*   **全模型支持**：兼容 OpenAI、Anthropic、Google、DeepSeek 等主流云端模型，同时支持通过 Ollama、Groq 等接入本地或远程自定义端点，且无需代理即可无缝切换。
*   **AI 代理与工具（MCP）**：支持无代码构建专属 AI 助手，提供代理市场，并全面兼容模型上下文协议（MCP）以扩展工具、文件搜索和代码执行能力。
*   **代码解释器与生成式 UI**：内置安全的沙盒化代码解释器（支持 Python、Node.js、C++ 等多语言执行），并支持通过 Code Artifacts 直接在聊天中渲染 React、HTML 和 Mermaid 图表。
*   **多模态与文件交互**：支持图像分析（如 GPT-4o、Claude 3）、文件对话、语音交互（STT/TTS），以及集成 DALL-E、Stable Diffusion 等工具的图像生成与编辑。
*   **高级上下文管理**：提供对话分支、消息分叉（Fork）、自定义预设（Presets）功能，并支持跨设备/多标签页的流恢复（Resumable Streams）以防止回复丢失。
*   **增强型搜索与推理**：内置支持 Jina 自定义重排的网络搜索功能，并为 DeepSeek-R1 等思维链模型提供专属的动态推理 UI。
*   **企业级安全与多用户**：支持 OAuth2、LDAP 和电子邮件登录，内置内容审核机制与 Token 消耗管理工具，保障多用户环境下的安全访问。

**3) 风险/缺口**
*   **版本更新风险**：官方明确警告，在进行版本更新前必须查阅更新日志（Changelog），以防范破坏性变更（Breaking changes）导致系统不可用。

## 功能与定位

Enhanced ChatGPT Clone: Features Agents, MCP, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active.

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T13:04:51Z。
- 项目创建于 2023-02-12T01:06:52Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/danny-avila/LibreChat
- 官网：https://librechat.ai/
- README：https://raw.githubusercontent.com/danny-avila/LibreChat/main/README.md
- Releases：https://github.com/danny-avila/LibreChat/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
- [[00-元语/multimodal]]
- [[00-元语/self-hosting]]
- [[00-元语/security]]
- [[00-元语/github]]
- [[00-元语/typescript]]
