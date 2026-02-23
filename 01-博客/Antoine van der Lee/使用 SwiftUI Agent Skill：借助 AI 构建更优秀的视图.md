---
title: "使用 SwiftUI Agent Skill：借助 AI 构建更优秀的视图"
---

## 摘要

**1) 一句话总结**
本文介绍了一个名为 SwiftUI Agent Skill 的开源项目，它通过为 AI 代理提供全面的 SwiftUI 最佳实践与参考文档，帮助开发者提升 AI 生成代码的质量、重构现有视图并减少技术债务。

**2) 关键要点**
*   **开源项目**：该技能已在 GitHub 上开源（`AvdLee/SwiftUI-Agent-Skill`），由开发者与 Omar Elsayed 共同构建。
*   **解决痛点**：替代了过去需要在 `AGENTS.md` 中反复手动添加 SwiftUI 修复指令（例如纠正 `onChange()` 修饰符的参数错误）的繁琐做法。
*   **文档结构**：项目包含一个核心的 `SKILL.md` 文件，以及涵盖图像优化、布局最佳实践、状态管理、现代 API 替代方案、视图结构等 11 个具体领域的详细参考文档。
*   **代码优化实例**：该技能可指导 AI 识别并修复代码缺陷，例如修复因 `ScrollView` 嵌套导致的滚动与布局问题，以及消除因多个 `onAppear`/`onChange` 重复触发导致的性能问题。
*   **减少技术债务**：不仅能让 AI 从一开始就生成更优质的初始视图，还能用于审查和改进开发者纯手写的现有代码。
*   **社区贡献**：项目处于活跃开发阶段，欢迎开发者提交 Pull Request，其详细的贡献指南同时也是一份关于如何构建和测试 AI 代理技能的教程。

**3) 风险/不足**
*   AI 代理目前还不能总是自动找到并应用这些技能（需要开发者引导或等待未来工具的改进）。

## 正文

这是一个帮助你构建更优秀视图或重构现有视图的 SwiftUI Agent Skill。这已经成为我们如今的开发常态，我个人甚至已经离不开它了。有几个技能帮助我提升了 AI 代理（Agents）生成的代码质量，我很高兴能向大家介绍这个全新的 SwiftUI 开源技能。

在阅读本文之前，我强烈建议你先阅读《Agent Skills explained: Replacing AGENTS.md with reusable AI knowledge》，这是了解该功能的基础。此外，你还可以阅读由 Omar Elsayed（与我共同构建此技能的伙伴）撰写的《How I Stopped Resisting AI and Started Teaching It》来了解这个新技能的背景。

### 为你的 AI 代理添加 SwiftUI 专业知识

如果你一直在使用 AI 代理进行开发，我相信你肯定经常在 `AGENTS.md` 文件中更新各种针对 SwiftUI 的修复指令。我见过最常见的一条补充指令是：

> “永远不要使用单参数版本的 `onChange()` 修饰符；要么使用接受两个参数的版本，要么使用不接受参数的版本。”

懂的都懂，但当代理一遍又一遍犯同样的错误时，确实让人烦恼。我以前也会不断更新我的代理文件，但现在我改用这样的提示词：

> “一个利用 AI 帮助构建更好视图的 SwiftUI Agent Skill。”

这个 SwiftUI Agent 技能已经在 GitHub 上开源（`AvdLee/SwiftUI-Agent-Skill`）。它包含一个详细的 `SKILL.md` 文件以及多个具体的参考文档：

*   `image-optimization.md` - AsyncImage 使用、降采样与缓存
*   `layout-best-practices.md` - 布局模式与 GeometryReader 替代方案
*   `liquid-glass.md` - iOS 26+ 玻璃效果与降级模式
*   `list-patterns.md` - ForEach 标识与列表性能
*   `modern-apis.md` - 废弃 API 的替代方案
*   `performance-patterns.md` - 热路径优化与更新控制
*   `scroll-patterns.md` - ScrollViewReader 与编程式滚动
*   `sheet-navigation-patterns.md` - 表单（Sheets）与类型安全的导航
*   `state-management.md` - 属性包装器选择与数据流
*   `text-formatting.md` - 现代文本格式化与字符串工具
*   `view-structure.md` - 视图提取与组合模式

*（建议查看 GitHub 仓库获取最新的概览信息）*

有趣的是，在与这个技能一起进行规划时，它能提供非常详细的回复。对于上述提示词，结果展示了多项改进。以下是一些可以改进的视图结构示例：

*   **嵌套滚动（Nested scrolling）**：`BuildInsightsPageView` 将 `BuildInsightsView` 包装在一个 `ScrollView` 中，但 `BuildInsightsView` 本身已经包含了一个 `ScrollView`，这会导致尴尬的滚动/手势行为和布局问题。
*   **性能模式分析**：选择/视图模型同步存在重复，很容易导致冗余更新：存在多个 `onAppear` / `onChange` 处理程序，它们都在设置 `currentSelectedApp` 和/或 `viewModel`。

这完全取决于你正在构建什么，以及你现有的视图质量如何。然而，如果你已经使用代理开发了一段时间，你很可能已经创建了一些有待改进的视图。

### 使用 SwiftUI Agent Skill 减少技术债务

与此同时，你未来使用代理构建的视图从一开始就会更优秀。代理足够聪明，能够在需要时参考该技能，因此你初始版本的 SwiftUI 视图很有可能已经通过这个 Agent Skill 得到了优化。需要注意的是，代理目前还不能总是自动找到这些技能，但这只是时间问题。

### 欢迎参与贡献！

如果你已经在使用代理进行高强度的开发，你可能已经创建了自己的一套代理指令。我们已经合并了几个来自像你一样的开发者的 Pull Request，并且非常乐意接收更多贡献。

欢迎提交 PR，并请务必阅读我们详细的贡献指南。这并不是因为我们要求严格，而是因为在这个过程中，它将教会你如何构建和测试代理技能！

### 总结

SwiftUI Agent Skill 已经对我使用代理生成的代码产生了积极影响，我相信它也会让你的代码变得更好。该技能目前处于活跃开发阶段，并在不断演进，但我现在已经无法想象没有它该如何编写代码了。即使是我完全手写的视图也能得到改进，这简直是减少技术债务的黄金途径。

如果你想进一步提升你的 AI 开发知识，可以查看相关的 AI 开发分类页面。如果你有任何其他建议或反馈，欢迎联系我或在 Twitter 上给我留言。感谢！

## 相关文档

- [[01-博客/OpenAI/用 Evals 系统化测试 Agent Skills|用 Evals 系统化测试 Agent Skills]]；关联理由：上下游；说明：本文给出 SwiftUI Skill 的构建与使用案例，该文补充了同类 Skill 的系统化评测与回归验证方法。
- [[01-博客/宝玉/SubAgent 与 Skills：AI Agent 的两种扩展方式|SubAgent 与 Skills：AI Agent 的两种扩展方式]]；关联理由：解说；说明：本文展示 Skill 在开发中的实际收益，该文进一步解释 Skills 与 SubAgent 的机制边界和适用场景。
- [[01-博客/宝玉/我写了个 Skill，让 Agent 自动给文章配图|我写了个 Skill，让 Agent 自动给文章配图]]；关联理由：观点一致；说明：两文都强调将领域经验沉淀为可复用 Skill，以减少重复提示并提升 AI 产出质量。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/skills]]
- [[00-元语/github]]
- [[00-元语/软件工程]]
