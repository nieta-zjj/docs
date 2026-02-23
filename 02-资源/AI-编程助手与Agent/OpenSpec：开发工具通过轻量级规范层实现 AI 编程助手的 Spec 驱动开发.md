---
title: "OpenSpec：开发工具通过轻量级规范层实现 AI 编程助手的 Spec 驱动开发"

发布日期: "2026-02-22"
对象: "GitHub 项目 `Fission-AI/OpenSpec`"
项目主页: "https://github.com/Fission-AI/OpenSpec"
官方网站: "https://openspec.dev/"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 25046，Forks 1672，Watchers 144（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.1.1（发布时间：2026-01-30T22:56:30Z）"
---

## 摘要

**1) 一句话总结**
OpenSpec 是一个为 AI 编程助手设计的规范驱动开发（SDD）框架，通过引入轻量级的规范层，在编写代码前对齐人类与 AI 的目标，从而提供可预测且结构化的开发工作流。

**2) 关键要点**
* **项目状态**：基于 TypeScript 开发，采用 MIT 开源协议，拥有超 2.5 万 Stars，最新版本为 v1.1.1（发布于 2026 年 1 月）。
* **核心理念**：主张流畅、迭代且简单的开发体验，既适用于全新项目（greenfield）也适用于遗留项目（brownfield），并能从个人项目扩展至企业级规模。
* **标准化工作流**：提供基于工件引导的斜杠命令工作流（如 `/opsx:new` 创建需求，`/opsx:ff` 生成规划文档，`/opsx:apply` 执行代码，`/opsx:archive` 归档并更新规范）。
* **广泛兼容性**：支持 20 多种 AI 助手工具，兼容 pnpm、yarn、bun 和 nix 等多种包管理器。
* **环境与安装**：要求 Node.js 20.19.0 或更高版本，通过 npm 全局安装（`@fission-ai/openspec@latest`）后，在项目目录执行 `openspec init` 即可初始化。
* **最佳实践建议**：官方推荐使用高推理能力的模型（如 Opus 4.5 和 GPT 5.2），并强调在开发过程中保持良好的上下文清理习惯（Context hygiene）。
* **贡献规范**：小型修复可直接提交 PR；重大更改需先提交变更提案以对齐目标；允许提交经过测试的 AI 生成代码，但需在 PR 中注明所使用的 AI 代理和模型。
* **遥测机制**：默认收集匿名的命令名称和版本使用统计数据（不包含参数、路径、内容或 PII），可通过设置环境变量 `OPENSPEC_TELEMETRY=0` 或 `DO_NOT_TRACK=1` 退出收集。

## 功能与定位

Spec-driven development (SDD) for AI coding assistants.

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T13:09:09Z。
- 项目创建于 2025-08-05T10:37:45Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/Fission-AI/OpenSpec
- 官网：https://openspec.dev/
- README：https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/README.md
- Releases：https://github.com/Fission-AI/OpenSpec/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/Spec驱动开发]]
- [[00-元语/cli]]
- [[00-元语/typescript]]
- [[00-元语/软件工程]]
- [[00-元语/workflow]]
