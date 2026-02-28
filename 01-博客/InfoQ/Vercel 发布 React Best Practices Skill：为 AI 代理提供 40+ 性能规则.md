---
title: "Vercel 发布 React Best Practices Skill：为 AI 代理提供 40+ 性能规则"
发布日期: 2026-02-27
来源: "InfoQ"
原文链接: "https://www.infoq.com/news/2026/02/vercel-react-best-practices/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
译注: "原文无可用官方中文正文，使用 Gemini 翻译并经助手最小必要校对整理。"
---

## 摘要

**一句话总结**
Vercel 开源了专为 AI 编程智能体设计的 `react-best-practices` 仓库，提供 40 多条 React 和 Next.js 性能优化规则以提升架构和代码质量。

**关键点**
*   包含 40 多条优化规则，分为 8 个类别，优先级从 CRITICAL 到 LOW 排序。
*   最高优先级（CRITICAL）规则重点关注消除异步瀑布流和减小打包体积。
*   所有规则被编译为单一的 `AGENTS.md` 文档，专供 AI 智能体在代码审查或重构时查询。
*   作为 Agent Skills 生态系统的一部分，可通过命令行一键安装到 Claude Code、Cursor 等 AI 工具中。
*   侧重于更高层次的架构决策，与强制执行语法规则的 Linting 工具（如 `eslint-plugin-react`）形成互补。
*   支持渐进式采用，每条规则独立存放并包含详细解释及修改前后的代码示例。
*   项目在 MIT 许可证下开源，目前 GitHub 星数超 2.1 万，每周安装量超 15 万次。

**风险/差距**
*   **安全风险**：存在针对 AI 智能体技能描述发生供应链攻击的担忧。
*   **能力差距**：大多数 AI 编程失败的原因在于智能体不理解实际业务逻辑或对用户需求做出错误假设，而非缺乏 React 优化规则。

## 正文

# Vercel 发布专为 AI 智能体设计的 React 最佳实践


Next.js 背后的云平台 Vercel 近日发布了开源仓库 `react-best-practices`。该仓库包含了 40 多条针对 React 和 Next.js 应用程序的性能优化规则，凝聚了 Vercel 生产代码库中十多年的工程知识。其结构专门为 AI 编程智能体（AI coding agents）和大型语言模型（LLM）的使用而设计，同时对人类开发者也具有极高的参考价值。

### 规则分类与核心优化点

该仓库将规则分为八个类别，并按影响程度从 CRITICAL（关键）到 LOW（低）进行优先级排序。每条规则都包含演示错误和正确模式的代码示例。

- **最高优先级（CRITICAL）**：侧重于消除异步瀑布流（async waterfalls）和减小打包体积（bundle size）。Vercel 的工程团队认为，这是生产应用程序中最常见的性能问题根源。
- **其他类别**：涵盖服务器端性能、客户端数据获取、重渲染优化、渲染性能、高级模式以及 JavaScript 微优化。

### 专为 AI 智能体打造

所有的单独规则文件被编译成了一个单一的 `AGENTS.md` 文档，旨在供 AI 智能体在审查或重构代码时进行查询。

该框架作为 Vercel 更广泛的 Agent Skills 生态系统（一个为智能体赋予新功能的开放格式）的一部分进行分发。开发者可以使用以下命令，将该技能一键安装到 Claude Code、Cursor、Codex 和 OpenCode 等工具中：

```bash
npx skills add vercel-labs/agent-skills
```

### 社区反响与讨论

此次发布在开发者社区中引起了广泛关注，反响褒贬不一：

- **支持者**：在 r/vibecoding 论坛上，有开发者认为它对“直觉编程”（vibe coding）非常有用，并指出上下文工程是直觉编程成功的最大因素。
- **安全担忧**：部分用户担心安全问题，认为可能会出现针对 AI 智能体技能描述的供应链攻击。
- **不同声音**：也有评论者认为，目前大多数 AI 编程失败并不是因为缺少 React 优化规则，而是因为智能体不理解实际的业务逻辑，或者对用户需求做出了错误的假设。

### 与现有工具的差异与互补

该框架与现有的工具（如 `eslint-plugin-react` 和 `eslint-plugin-react-hooks`）占据了不同的领域：
- **Linting 工具**：在 linter 级别强制执行语法规则和 hook 使用模式。
- **Vercel 最佳实践**：侧重于更高层次的架构决策（如请求瀑布流和打包组合），这些通常是 linting 工具无法覆盖的。

此外，最近发布的 React Compiler v1.0 也对该框架进行了补充，自动处理了其中几条规则需要手动解决的记忆化（memoization）优化。

### 如何在项目中采用

目前，该 GitHub 仓库已获得超过 2.1 万颗星，每周安装量超过 15 万次。

对于希望在现有项目中采用该框架的团队，该仓库的结构使得每条规则都可以独立审查和应用。单独的规则文件位于 `rules` 目录中，并包含对每种模式为何重要的解释以及修改前后的代码示例，使得渐进式采用变得简单明了。

`react-best-practices` 在 MIT 许可证下开源，开发者可在 GitHub 上获取该仓库及完整的 `AGENTS.md` 编译文档。
