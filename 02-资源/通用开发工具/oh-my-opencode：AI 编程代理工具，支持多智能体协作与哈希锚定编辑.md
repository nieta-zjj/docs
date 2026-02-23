---
title: "oh-my-opencode：AI 编程代理工具，支持多智能体协作与哈希锚定编辑"

发布日期: "2026-02-22"
对象: "GitHub 项目 `code-yeongyu/oh-my-opencode`"
项目主页: "https://github.com/code-yeongyu/oh-my-opencode"
开源协议: "Other"
主要语言: "TypeScript"
统计快照: "Stars 32999，Forks 2493，Watchers 130（抓取时间：2026-02-22）"
版本快照: "最新发布 v3.8.3（发布时间：2026-02-22T06:47:36Z）"
---

## 摘要

### 1) 一句话总结
`oh-my-opencode` 是一个高热度的开源多模型 AI 编程代理框架（Agent Harness），通过多智能体协作、哈希锚定编辑和深度工具集成，提供无厂商锁定的自动化代码开发体验。

### 2) 关键点
*   **项目基础**：基于 TypeScript 开发，拥有超 3.2 万 Stars，最新版本为 v3.8.3，定位为“最佳 Agent Harness”。
*   **多模型与多智能体协同**：拒绝单一模型锁定，根据任务类别自动调度最适合的模型（如 Claude/Kimi/GLM 用于调度，GPT 用于推理）。内置 Sisyphus（主调度）、Hephaestus（深度执行）、Prometheus（战略规划）等专属代理。
*   **核心指令 `ultrawork`**：通过输入 `ultrawork`（或 `ulw`），可一键激活整个 AI 开发团队并行工作，并包含自循环机制（Ralph Loop）直到任务 100% 完成。
*   **哈希锚定编辑（Hash-Anchored Edit）**：引入基于内容哈希的行级标签（`LINE#ID`）进行代码修改，消除了陈旧行匹配错误，使 Grok Code Fast 1 测试的成功率从 6.7% 跃升至 68.3%。
*   **深度工具集成**：内置 LSP（提供 IDE 级别的重命名、诊断等精度）、AST-Grep（支持 25 种语言的语法树感知重写）以及 Tmux（全交互式终端和调试器支持）。
*   **上下文与 MCP 优化**：提供 `/init-deep` 命令自动生成层级化的 `AGENTS.md` 上下文文件；支持按需加载的“技能内嵌 MCP（Skill-Embedded MCPs）”，避免全局 MCP 导致上下文窗口膨胀。
*   **生态兼容性**：完全兼容 Claude Code 的钩子（hooks）、命令、技能、MCP 服务器和插件。

### 3) 风险/不足
*   **安全风险（仿冒网站）**：官方明确警告存在一个名为 `ohmyopencode.com` 的付费仿冒网站，该网站与本项目无关且无法验证其分发内容的安全性，官方版本仅在 GitHub 免费开源发布。
*   **供应商限制**：文档中明确指出，由于该项目的防锁定特性，Anthropic 官方已经封禁了 OpenCode（"Anthropic blocked OpenCode because of us"）。

## 功能与定位

the best agent harness

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:55:50Z。
- 项目创建于 2025-12-03T01:40:05Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/code-yeongyu/oh-my-opencode
- README：https://raw.githubusercontent.com/code-yeongyu/oh-my-opencode/dev/README.md
- Releases：https://github.com/code-yeongyu/oh-my-opencode/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/typescript]]
- [[00-元语/mcp]]
- [[00-元语/context-optimization]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/github]]
