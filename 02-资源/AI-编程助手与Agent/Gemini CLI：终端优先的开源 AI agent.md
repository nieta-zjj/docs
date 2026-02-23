---
title: "Gemini CLI：终端优先的开源 AI agent"

对象: "GitHub 开源项目"
发布日期: "2026-02-22"
项目: "`google-gemini/gemini-cli`"
来源: "https://github.com/google-gemini/gemini-cli/blob/main/LICENSE"
官网: "https://geminicli.com"
文档: "https://geminicli.com/docs/"
NPM: "https://www.npmjs.com/package/@google/gemini-cli"
项目创建时间: "2025-04-17"
主要语言: "TypeScript"
最新版本快照: "`v0.30.0-preview.3`（预发布，2026-02-19）"
最新稳定版快照: "`v0.29.5`（2026-02-19）"
最近提交: "`84666e1bbc35276eff31d8b83e9608f14ac8958a`（2026-02-22）"
用户提供热度快照: "53245"
GitHub 星标快照: "95249（抓取日期：2026-02-22）"
开源协议: "Apache-2.0"
---

## 摘要

Gemini CLI 是一个基于 TypeScript 开发的终端优先开源 AI agent，旨在将 Gemini 模型能力直接引入命令行，支持交互式对话、自动化脚本及 CI/CD 集成。

- 专为命令行打造，兼顾交互式和非交互式工作流。
- 内置 Google Search grounding、文件操作、shell 命令与 web fetch 能力。
- 支持 MCP 扩展，可接入自定义能力与外部工具链。
- 支持 Google 登录、Gemini API Key、Vertex AI 等多种鉴权路径。
- 可通过 npx、npm、Homebrew、MacPorts、Anaconda 等多渠道安装。

## 功能与定位

Gemini CLI 的定位是终端原生的 AI agent 工具，面向开发者在命令行中完成问答、代码辅助、任务自动化和工作流集成。它强调“从提示到模型”的低摩擦路径，并通过工具能力和扩展协议提升可用性。

## 典型使用场景

- 在终端直接进行代码理解、问题排查与任务拆解。
- 以非交互模式接入脚本化流程。
- 在 GitHub Actions 等 CI/CD 场景中执行自动化辅助任务。
- 通过 MCP 为现有开发流程接入定制工具能力。

## 核心功能

- 终端交互与脚本化双模式。
- 内置工具能力：搜索增强、文件系统、shell、web 抓取。
- MCP 扩展能力，支持外部 server 集成。
- 多鉴权模式，覆盖个人开发与企业云环境。
- 文档体系覆盖安装、架构、扩展、安全与企业使用。

## 特色与差异点

- 终端优先设计，避免额外 GUI 依赖。
- 以开源协议和扩展接口形成较强的工程可组合性。
- 与 GitHub 工作流结合紧密，便于团队自动化落地。

## 使用方式概览

1. 按系统与环境选择安装渠道并完成 CLI 安装。
2. 选择合适的鉴权方式完成初始化配置。
3. 按需启用内置工具和 MCP 扩展能力。
4. 在脚本与 CI 场景中根据版本策略选择 stable、preview 或 nightly。

## 限制与注意事项

- release 同时存在 stable、preview、nightly 通道，生产环境应优先评估稳定版并控制升级节奏。
- 高自动化场景需先验证工具权限、输出格式与错误处理策略，再接入关键流水线。
- 指标会随时间变化，你提供的 `53245` 与本次抓取 `95249` 属于不同时间快照。

## 链接

- 仓库主页：https://github.com/google-gemini/gemini-cli
- README：https://github.com/google-gemini/gemini-cli/blob/main/README.md
- 发布页：https://github.com/google-gemini/gemini-cli/releases
- 许可证：https://github.com/google-gemini/gemini-cli/blob/main/LICENSE
- 官网：https://geminicli.com
- 文档：https://geminicli.com/docs/
- NPM：https://www.npmjs.com/package/@google/gemini-cli

## 关联主题

- [[00-元语/AI]]
- [[00-元语/cli]]
- [[00-元语/gemini]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/terminal]]
- [[00-元语/mcp]]
- [[00-元语/CI]]
- [[00-元语/github]]
- [[00-元语/workflow]]
- [[00-元语/typescript]]
