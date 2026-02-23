---
title: "Void Editor：基于 VS Code 分支开发的开源 Cursor 替代品，支持接入任意云端或本地 AI 模型"

发布日期: "2026-02-22"
对象: "GitHub 项目 `voideditor/void`"
项目主页: "https://github.com/voideditor/void"
官方网站: "https://voideditor.com"
开源协议: "Apache License 2.0"
主要语言: "TypeScript"
统计快照: "Stars 28236，Forks 2324，Watchers 159（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.3.4（发布时间：2025-04-15T09:54:04Z）"
---

## 摘要

### 1) 一句话总结
Void 是一款基于 VS Code 分支开发的开源 Cursor 替代品，支持接入任意云端或本地 AI 模型，但目前项目已暂停维护以探索新的创新方向。

### 2) 关键要点
* **项目定位**：开源的 Cursor 替代方案，属于通用开发工具。
* **核心功能**：支持在代码库中使用 AI 代理（AI agents），并提供代码更改的检查点（checkpoint）与可视化功能。
* **模型与隐私**：允许用户接入任何 AI 模型或在本地托管模型；消息直接发送给模型提供商，不保留用户数据。
* **技术基础**：主要使用 TypeScript 开发，是微软 `vscode` 仓库的分支（Fork）。
* **开源协议**：采用 Apache License 2.0 协议。
* **社区热度**：项目备受关注，拥有超 28,000 个 Stars 和 2,300+ 个 Forks。
* **项目状态**：官方已暂停对 Void IDE 的开发工作，转而探索新的编程理念，不再追求功能对齐（feature-parity）。

### 3) 风险/不足
* **功能失效风险**：由于项目暂停维护，部分现有功能可能会随着时间的推移而停止工作。
* **未来发展不确定**：官方明确表示，根据新探索方向的结果，可能不会恢复 Void 作为 IDE 的开发。
* **社区支持受限**：官方不再积极审查 Issues 和 PRs（但仍通过邮件协助用户构建和维护自定义版本的 Void）。

## 功能与定位

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T10:08:10Z。
- 项目创建于 2024-09-11T02:37:00Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/voideditor/void
- 官网：https://voideditor.com
- README：https://raw.githubusercontent.com/voideditor/void/main/README.md
- Releases：https://github.com/voideditor/void/releases

## 相关文档

- [[02-资源/AI-编程助手与Agent/Cline：直接运行在 IDE 内的开源自治 coding agent，能够在用户全程授权与监控下|Cline：直接运行在 IDE 内的开源自治 coding agent，能够在用户全程授权与监控下]]；关联理由：观点一致；说明：两者都定位为开源的 IDE 内 AI 编程助手，并强调可接入多模型与工程内集成能力。
- [[02-资源/AI-编程助手与Agent/tabby：基于 Rust 开发的开源、自托管 AI 编程助手，旨在提供 GitHub Copilot 的本地化替代方案|tabby：基于 Rust 开发的开源、自托管 AI 编程助手，旨在提供 GitHub Copilot 的本地化替代方案]]；关联理由：解说；说明：Tabby 作为另一类开源替代方案，可用于对照 Void 在“开源替代商业 AI 编程工具”这一方向上的取舍差异。
- [[01-博客/宝玉/简单说一下 GitHub Copilot 和 Cursor 的差别，以及为什么我觉得 Cursor 要更好|简单说一下 GitHub Copilot 和 Cursor 的差别，以及为什么我觉得 Cursor 要更好]]；关联理由：解说；说明：该文解释了 Cursor 的产品特性与体验基线，有助于理解 Void“Cursor 替代品”这一定位。

## 关联主题

- [[00-元语/ide]]
- [[00-元语/Cursor]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/typescript]]
- [[00-元语/self-hosting]]
