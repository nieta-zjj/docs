---
title: "bolt.diy：开源的 AI 编程助手与全栈 Web 开发工具，允许开发者在浏览器或桌面端使用 19 种以上的任意大语言模型（LLM）来生成、运行、编辑和部署应用程序"

发布日期: "2026-02-22"
对象: "GitHub 项目 `stackblitz-labs/bolt.diy`"
项目主页: "https://github.com/stackblitz-labs/bolt.diy"
官方网站: "https://stackblitz-labs.github.io/bolt.diy/"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 19026，Forks 10355，Watchers 306（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.0.0（发布时间：2025-05-12T02:15:57Z）"
---

## 摘要

**1) 一句话总结**
bolt.diy 是一个开源的 AI 编程助手与全栈 Web 开发工具，允许开发者在浏览器或桌面端使用 19 种以上的任意大语言模型（LLM）来生成、运行、编辑和部署应用程序。

**2) 关键要点**
* **广泛的模型支持**：内置支持 19+ AI 提供商（包括 OpenAI、Anthropic、DeepSeek、Ollama、LM Studio 等），并可通过 Vercel AI SDK 轻松扩展。
* **核心开发功能**：支持基于 NodeJS 的全栈开发，提供集成终端、代码版本回退、Diff 视图对比、防止生成冲突的文件锁定系统以及代码库搜索。
* **多平台与安装方式**：提供开箱即用的原生桌面端（Electron，支持 Win/Mac/Linux）、Docker 镜像（开发与生产环境），以及基于 Node.js 的本地源码运行方式。
* **高级集成与扩展**：支持 Supabase 数据库管理、Expo（React Native）应用创建、MCP（模型上下文协议）工具集成、Git 操作以及数据可视化分析。
* **便捷的部署与导出**：支持将项目打包下载为 ZIP 文件，或直接一键部署至 Netlify、Vercel 和 GitHub Pages。
* **灵活的配置管理**：提供可视化的 UI 设置面板来管理云端 API 密钥和本地模型端点，同时支持通过 `.env.local` 环境变量进行安全配置。
* **未来路线图**：计划开发后端 Agent 架构、VSCode 集成、文档知识库上传、小模型提示词优化以及支持 Azure OpenAI 等更多提供商。

**3) 风险与不足（基于原文明确提及）**
* **macOS 桌面端运行报错**：在 macOS 上安装桌面版时可能会提示“应用已损坏”，需要手动在终端执行 `xattr -cr /path/to/Bolt.app` 命令来解决。
* **分支稳定性风险**：对于通过 Git 克隆源码的开发者，`main` 分支包含测试功能，相比 `stable` 稳定分支更容易出现 Bug。
* **模型表现差异**：当前的系统提示词（System Prompt）无法在所有模型上发挥最佳性能。官方建议新手优先使用如 Anthropic Claude Sonnet 3.x 等高级模型以获取最佳结果（未来计划通过插件库针对不同模型提供专属提示词）。

## 功能与定位

Prompt, run, edit, and deploy full-stack web applications using any LLM you want!

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T09:26:48Z。
- 项目创建于 2024-10-13T18:40:54Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/stackblitz-labs/bolt.diy
- 官网：https://stackblitz-labs.github.io/bolt.diy/
- README：https://raw.githubusercontent.com/stackblitz-labs/bolt.diy/main/README.md
- Releases：https://github.com/stackblitz-labs/bolt.diy/releases

## 相关文档

- [[02-资源/AI-编程助手与Agent/OpenCode：终端优先的 AI 编程助手|OpenCode：终端优先的 AI 编程助手]]；关联理由：观点一致；说明：两者都属于开源 AI 编程助手，并强调多模型接入与工程化开发流程。
- [[02-资源/AI-编程助手与Agent/Cline：直接运行在 IDE 内的开源自治 coding agent，能够在用户全程授权与监控下|Cline：直接运行在 IDE 内的开源自治 coding agent，能够在用户全程授权与监控下]]；关联理由：解说；说明：Cline 代表 IDE 内自治 agent 路线，可作为 bolt.diy 在产品形态与交互边界上的对照参照。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
- [[00-元语/desktop-client]]
- [[00-元语/terminal]]
- [[00-元语/github]]
- [[00-元语/typescript]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
