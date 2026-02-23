---
title: "Cline：直接运行在 IDE 内的开源自治 coding agent，能够在用户全程授权与监控下"

对象: "GitHub 开源仓库"
仓库: "cline/cline"
来源:
  - "https://github.com/cline/cline"
  - "https://api.github.com/repos/cline/cline"
  - "https://raw.githubusercontent.com/cline/cline/main/README.md"
  - "https://github.com/cline/cline/blob/main/locales/zh-cn/README.md"
  - "https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev"
开源协议: "Apache-2.0"
默认分支: "main"
主要语言: "TypeScript"
发布日期: "2024-07-06"
最近推送: "2026-02-21"
统计时间: "2026-02-22"
仓库数据（统计时）: "Stars 58,225；Forks 5,817；Subscribers 268；Open Issues 729"
---

## 摘要

**一句话总结**
Cline 是一款直接运行在 IDE 内的开源自治 coding agent，能够在用户全程授权与监控下，执行代码编写、终端命令运行和浏览器交互等复杂开发任务。

**关键要点**
- 产品形态：作为 IDE 插件运行（VS Marketplace 标识为 `saoudrizwan.claude-dev`），基于 TypeScript 开发，采用 Apache-2.0 开源协议。
- 代码与终端操作：支持创建和编辑文件，能监控 linter 或 compiler 报错并继续修复；可在终端执行命令并持续读取长任务输出。
- 浏览器自动化：可控制浏览器执行点击、输入、滚动等交互，并抓取截图与控制台日志，用于前端调试与测试。
- 安全与可控：采用 human-in-the-loop 机制，关键操作（文件改动、终端命令）均需用户批准。
- 多模型兼容：支持 OpenAI、Anthropic、Google Gemini、AWS Bedrock、Azure、Groq 等 API 提供商与模型。
- MCP 扩展能力：支持 Model Context Protocol（MCP），可接入社区或自定义 MCP server 以扩展工具能力。
- 企业能力：提供 SSO、操作审计、私有网络与 on-prem 部署等能力。

## 功能与定位

Cline 的定位是 IDE 内自治 coding agent。它把代码编辑、终端执行、浏览器操作与人机审批流程整合到同一工作流中，目标是让复杂开发任务在可控前提下持续推进，而不只停留在代码补全。

## 典型使用场景

- 在现有代码库中实现功能并同步修复 linter/compiler 报错。
- 运行构建、测试、开发服务器等终端任务，并根据输出继续迭代。
- 在 Web 项目中执行页面交互、截图和日志检查，定位运行时与界面问题。
- 通过 MCP 为团队流程增加自定义工具（如工单、监控、运维接口）。

## 核心功能

- 文件操作：创建、编辑、回看变更，并结合错误信息持续修复。
- 终端操作：执行命令、读取输出，支持长任务持续运行。
- 浏览器操作：点击、输入、滚动、截图、控制台日志采集。
- 上下文增强：可通过 URL、文件、文件夹、问题面板等方式补充上下文。
- 生态扩展：支持 MCP server 扩展与多模型 API 接入。

## 特色与差异点

- 明确的 human-in-the-loop 交互：把“自动执行”与“用户批准”绑定在同一界面流程。
- 工具面覆盖完整：IDE + terminal + browser + MCP，不依赖单一能力。
- 官方提供中文 README 与多语言文档，降低非英文用户的上手门槛。
- 社区与企业双路线并行：公开社区协作与企业级能力同时存在。

## 使用方式概览

- 在 VS Marketplace 安装插件 `saoudrizwan.claude-dev`。
- 在 IDE 中配置可用的模型与 API 提供商。
- 通过对话下发开发任务，并在执行过程中逐步批准关键操作。
- 结合 MCP 扩展团队需要的外部工具和工作流接口。

## 限制与注意事项

- 仓库热度与 issue 数量会持续变化，外部引用旧数字可能过期，应以统计时间为准。
- 浏览器自动化与终端能力受本地开发环境配置影响，实际表现依赖具体项目与权限设置。
- 多模型接入并不保证任务质量一致，效果与成本受模型选择和上下文管理影响。

## 链接

- 仓库主页：https://github.com/cline/cline
- GitHub API：https://api.github.com/repos/cline/cline
- README（英文）：https://raw.githubusercontent.com/cline/cline/main/README.md
- README（官方简体中文）：https://github.com/cline/cline/blob/main/locales/zh-cn/README.md
- VS Marketplace：https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/Agent]]
- [[00-元语/ide]]
- [[00-元语/mcp]]
- [[00-元语/terminal]]
- [[00-元语/browser-automation]]
- [[00-元语/llm]]
- [[00-元语/security]]
