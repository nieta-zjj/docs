---
title: "Vercel 给 Agent Skills 泼了一盆冷水"

站点: "微信公众平台"
原文链接: "https://mp.weixin.qq.com/s/YXdKe4NgHSl4v535UXkjvg"
发布日期: "2026-01-31"
作者: "luckySnail01"
---

## 摘要

### 1) 一句话总结
Vercel 团队通过实践发现，在指导 AI Agent 获取特定版本框架知识时，使用嵌入压缩文档索引的 `Agent.md` 作为系统提示词，比依赖触发率低下的 Agent Skills 更为可靠且高效。

### 2) 核心要点
* **背景需求**：Next.js 版本更新极快，必须确保 AI Agent 在处理项目时调用与当前安装版本匹配的正确 API。
* **Skills 方案被弃用**：Vercel 最初尝试“All In Skills”方案，但发现 Agent 经常无法触发预设的 Skills，即使在提示词中反复强调也无法保证有效。
* **Agent.md 解决方案**：将文档索引直接嵌入 `Agent.md` 文件中。该索引被压缩至仅 8KB，既能让 Agent 准确找到对应文档，又避免了上下文爆炸。
* **关键提示词指令**：在 `Agent.md` 中明确要求 Agent “对于任何 Next.js 任务，优先选择检索主导的推理，而非预训练主导的推理”，该方法的测试成功率达到了 100%。
* **自动化工具支持**：开发者可通过运行 `npx @next/codemod@canary agents-md` 命令，自动完成版本检查、对应文档下载（至 `.next-docs/`）以及索引注入。
* **原理解析**：`Agent.md` 作为系统提示词始终存在于对话中，直接消除了 Agent “判断是否需要调用 Skill” 的额外决策环节，从而大幅提升表现。
* **开发者建议**：知识获取场景优先使用 `Agent.md`；任务流（SOP，如版本升级）处理更适合使用 Skills；框架开发者应主动提供官方的 `Agent.md`。

### 3) 风险/不足
* **Agent Skills 触发失败风险**：Agent Skills 高度依赖提示词表达，且需要 Agent 经历额外的决策环节，导致触发成功率低，不适用于知识获取场景。
* **预训练数据过时风险**：对于 Next.js 等快速迭代的项目，Agent 若依赖其预训练数据而非实时检索，极易调用非当前版本的错误 API。
* **提示词依赖风险**：在实际测试中证明，过度依赖提示词来强制触发 Agent Skills 并非正确的解决路径，无法保证完全有效。

## 正文

Vercel 团队近期分享了一篇博客，探讨了如何让 AI Agent 在处理 Next.js 项目时，能够根据当前安装的版本使用正确的 API，而不是调用非当前版本的 API。由于 Next.js 版本更新极快，确保 API 调用的准确性对于开发者来说至关重要。

### Agent Skills 的局限性

起初，Vercel 团队试图通过“All In Skills”来解决这个问题。Skills 的优势在于能够进行渐进式披露，从而最大程度地防止上下文爆炸。

然而，在实际测试中，他们发现 Skills 并不十分可靠。Agent 经常无法触发 Vercel 编写的 Skills，即使在提示词中反复强调，也无法保证完全有效。事实证明，过度依赖提示词来强制触发 Skills 并非正确的解决路径。

### 破局之道：引入 Agent.md 与文档索引

既然 Agent Skills 走不通，Vercel 团队转变了思路，直接在 `Agent.md` 文件中嵌入文档索引。这仅仅是一个索引，同样起到了避免上下文爆炸的作用。Agent 可以基于该索引获取对应的内容，从而准确使用正确的 API。

在 `Agent.md` 中，有一段至关重要的提示词：

> IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning for any Next.js tasks.
> （重要提示：对于任何 Next.js 任务，优先选择检索主导的推理，而非预训练主导的推理。）

通过这种方式，Agent 会主动查阅文档，而不是依赖其预训练数据。测试表明，在 `Agent.md` 中添加这项说明的效果出奇地好，成功率达到了 100%。

### 自动化工具与原理解析

开发者可以通过运行以下命令亲自验证这一方案：

`npx @next/codemod@canary agents-md`

这个命令在后台自动完成了三件事：
1. 检查当前项目的 Next.js 版本。
2. 下载与该版本匹配的文档到 `.next-docs/` 目录。
3. 将压缩后的索引注入到你的 `Agent.md` 文件中。

值得一提的是，Vercel 通过技术手段将这个索引压缩到了仅 8KB 大小。这既能让 Agent 准确找到对应文档，又避免了过多占用上下文空间。

### 核心总结与开发者建议

Vercel 的这次分享揭示了一个重要事实：**Agent Skills 并非万能解法**。在某些场景下（例如提供知识获取方式），它并不适用。

Vercel 也深入剖析了 `Agent.md` 能够胜过 Skills 的深层原因：
* **Skills 表现不佳的原因**：触发成功率低。它高度依赖提示词的表达来触发，Agent 需要多经历一个“判断是否需要调用”的决策环节。
* **Agent.md 表现优异的原因**：它作为系统提示词，始终存在于每一次对话中。这直接消除了 Agent 的决策环节，使其无需判断，直接调用。

最后，Vercel 给广大开发者提出了几点实用建议：
* **获取知识**：优先使用 `Agent.md`。
* **处理任务流（SOP）**：例如版本升级等操作，更适合使用 Skills。
* **框架开发者**：应当为开发者提供官方的 `Agent.md`，以帮助大家利用 Agent 快速、准确地生成有用的代码。

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/skills]]
- [[00-元语/rag]]
- [[00-元语/prompt]]
- [[00-元语/workflow]]
- [[00-元语/context-optimization]]
