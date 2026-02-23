---
title: "repomix：基于 TypeScript 开发的开源工具，能够将整个代码仓库打包成单一的、对 AI 友好的文件（如 XML／Markdown／JSON）"

发布日期: "2026-02-22"
对象: "GitHub 项目 `yamadashy/repomix`"
项目主页: "https://github.com/yamadashy/repomix"
官方网站: "https://repomix.com"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 21997，Forks 1019，Watchers 58（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.11.1（发布时间：2026-01-18T15:40:28Z）"
---

## 摘要

### 1) 一句话总结
Repomix 是一个基于 TypeScript 开发的开源工具，能够将整个代码仓库打包成单一的、对 AI 友好的文件（如 XML/Markdown/JSON），以便于将代码上下文高效地提供给大语言模型（LLMs）进行分析和处理。

### 2) 关键要点
*   **项目基础信息**：采用 MIT 开源协议，主要使用 TypeScript 编写，GitHub 拥有近 2.2 万 Stars，最新版本为 v1.11.1。
*   **核心应用场景**：专为 Claude、ChatGPT、DeepSeek 等 AI 工具优化，适用于代码审查、重构建议、文档生成和测试用例编写等任务。
*   **多格式输出**：默认输出结构化的 XML 格式（有利于提升 AI 解析准确度），同时支持 Markdown 和 JSON 格式。
*   **安全与优化特性**：内置 Secretlint 进行安全检查以防止敏感信息泄露；支持使用 Tree-sitter 提取关键代码元素进行压缩，从而在保留结构的同时减少 Token 消耗。
*   **灵活的过滤与选择**：自动识别 `.gitignore` 等忽略文件；支持 Glob 模式匹配；支持通过标准输入（stdin）结合 `find`、`grep`、`fzf` 等命令进行高度自定义的文件选择。
*   **支持远程与上下文增强**：支持直接打包远程 GitHub 仓库（可指定分支或 Commit）；支持在输出中包含 Git 提交日志和代码差异（diffs），并提供 Token 计数功能。
*   **多平台使用方式**：提供 CLI 命令行工具（可通过 `npx` 免安装运行）、Web 在线端、浏览器扩展（Chrome/Firefox）、社区维护的 VSCode 插件，并支持 Docker 容器化运行。

## 功能与定位

📦 Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more.

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T11:27:27Z。
- 项目创建于 2024-07-13T07:11:32Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/yamadashy/repomix
- 官网：https://repomix.com
- README：https://raw.githubusercontent.com/yamadashy/repomix/main/README.md
- Releases：https://github.com/yamadashy/repomix/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/typescript]]
- [[00-元语/cli]]
- [[00-元语/markdown]]
- [[00-元语/github]]
- [[00-元语/context-optimization]]
- [[00-元语/security]]
