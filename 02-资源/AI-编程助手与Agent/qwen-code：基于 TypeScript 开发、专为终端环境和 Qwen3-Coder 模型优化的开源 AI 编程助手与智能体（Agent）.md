---
title: "qwen-code：基于 TypeScript 开发、专为终端环境和 Qwen3-Coder 模型优化的开源 AI 编程助手与智能体（Agent）"

发布日期: "2026-02-22"
对象: "GitHub 项目 `QwenLM/qwen-code`"
项目主页: "https://github.com/QwenLM/qwen-code"
官方网站: "https://qwenlm.github.io/qwen-code-docs/en/users/overview"
开源协议: "Apache License 2.0"
主要语言: "TypeScript"
统计快照: "Stars 19196，Forks 1670，Watchers 107（抓取时间：2026-02-22）"
版本快照: "最新发布 sdk-typescript-v0.1.5（发布时间：2026-02-22T04:44:47Z）"
---

## 摘要

### 一句话总结
Qwen Code 是一款基于 TypeScript 开发、专为终端环境和 Qwen3-Coder 模型优化的开源 AI 编程助手与智能体（Agent）。

### 核心要点
* **项目基础**：采用 Apache License 2.0 协议开源，主要使用 TypeScript 编写，目前已获得超 1.9 万 Stars，最新发布版本为 `sdk-typescript-v0.1.5`。
* **核心功能**：提供类似 Claude Code 的 Agent 工作流（内置 Skills 和 SubAgents），帮助开发者理解大型代码库、自动化繁琐任务并加速开发。
* **鉴权与额度**：支持 Qwen OAuth（推荐，每日 1000 次免费请求）和 API-KEY 两种鉴权方式，API 兼容 OpenAI、Anthropic 和 Google GenAI 等多种协议。
* **使用模式**：支持四种主要使用方式：交互式终端模式、无头模式（Headless，适用于脚本和 CI/CD）、IDE 集成（VS Code、Zed、JetBrains）以及 TypeScript SDK。
* **安装要求**：依赖 Node.js 20 及以上版本，支持通过 curl 脚本一键快速安装，或通过 npm 和 Homebrew 手动安装。
* **配置管理**：推荐通过 `~/.qwen/settings.json` 文件集中配置多模型提供商（如阿里云百炼、OpenAI 等）及 API 密钥，支持全局与项目级作用域。
* **基准性能**：在 Terminal-Bench 测试中，搭配 Qwen3-Coder-480A35 模型的准确率为 37.5%，搭配 Qwen3-Coder-30BA3B 模型的准确率为 31.3%。
* **项目渊源**：该项目基于 Google Gemini CLI 开发，主要贡献在于解析器层面的适配，以更好地支持 Qwen-Coder 模型。

## 功能与定位

An open-source AI agent that lives in your terminal.

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:52:20Z。
- 项目创建于 2025-06-26T01:37:46Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/QwenLM/qwen-code
- 官网：https://qwenlm.github.io/qwen-code-docs/en/users/overview
- README：https://raw.githubusercontent.com/QwenLM/qwen-code/main/README.md
- Releases：https://github.com/QwenLM/qwen-code/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/ide]]
- [[00-元语/sdk]]
- [[00-元语/typescript]]
- [[00-元语/llm]]
- [[00-元语/gemini]]
- [[00-元语/github]]
- [[00-元语/workflow]]
