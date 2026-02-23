---
title: "Code Review in the AI Era: Why Writing It Twice Is Actually Faster"

来源: "https://baoyu.io/blog/code-review-ai-era-writing-twice-faster"
发布日期: "2026-01-03"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
在AI时代，利用AI快速构建用于验证需求和排雷的废弃原型（第一版），再以传统工程标准进行正式开发（第二版），这种“写两次”的模式反而能降低开发成本并提高整体效率。

**2) 关键要点**
*   **AI改变了原型开发的经济学**：过去原型开发成本过高，而AI编码工具极大提升了速度（如将3天的开发时间缩短至3小时），使构建原型变得具有实际可行性。
*   **第一版（原型）定位**：核心目标仅为确认需求和解决技术难题。不考虑架构、代码质量、安全性和性能。
*   **第一版执行策略**：完全放开限制，无需代码审查直接合并AI生成的代码。代码应存放在独立分支或仓库中，预期最终会被废弃。
*   **第二版（生产）定位**：回归传统软件工程标准，注重前期设计、模块化、CI流水线、代码审查、可维护性及安全性。
*   **第二版执行策略**：由人类主导设计，利用AI的计划模式（plan mode）生成代码。保持小批量提交以便于人工审查，同时可复用第一版中的核心算法和业务逻辑。
*   **避免过度工程**：传统开发常在需求未明确时进行架构设计导致过度工程；“写两次”方法能以最低成本在前期扫清需求和技术障碍。
*   **降低心理抗拒**：明确第一版代码是“阅后即焚”的，能有效降低资深开发者对AI生成代码质量的心理抗拒。

## 正文

If you've been coding for a few years, you've probably lived through this nightmare: you finish the first version, finally get it running, and then realize you misunderstood half the requirements, hit three technical dead ends, and the architecture won't survive the next iteration. Want to rewrite from scratch? The deadline says no. So you keep piling on patches, and three years later, that codebase has become the legacy monster no one dares to touch.

This problem has existed for decades. But AI coding tools have accidentally given us a new solution.

My Approach: Two Versions, Two Standards

This idea isn't new. Software engineering textbooks call it "prototyping", build a rough version to validate your ideas, then do the real development. But nobody actually did this, because it was too expensive. Building a working prototype could take half the time of the real implementation. Who has that kind of runway?

Things have changed. AI writes code at a speed that still catches me off guard. A feature that used to take three days might now have a working version in three hours. This shift in velocity turns prototyping from "theoretically nice" into "practically worth it."

Here's how it works: you build two separate versions.

Version One: The Prototype, Let AI Run Wild

The first version has a clear purpose: it's a prototype, not a product. Two goals only: confirm the requirements and solve the hard technical problems.

The principle here is "no constraints", don't think about architecture, don't worry about code quality, ignore security and performance. Focus on one thing: make it work. Merge AI-generated code without review. Let the AI iterate until your product manager nods and says, "Yes, that's what I wanted."

This code is meant to be thrown away, so put it on a separate branch or even in a standalone repo. Its value isn't in the code itself, it's in two things: figuring out what the requirements actually are, and stepping on all the technical landmines first.

No matter how detailed your requirements doc is, you often can't think clearly until you build something. Technical challenges are the same, theory and reality are different beasts. The first version exists to step on every landmine at the lowest possible cost.

Think of it like an architect's sketch. Sketches don't need precise lines or perfect proportions. They help you externalize your thinking quickly, experiment, adjust, confirm direction. Nobody builds from a sketch.

Version Two: Production, Back to Traditional Engineering

Once the first version has cleared the path, you build the second. This is what actually ships.

Now you return to traditional software engineering: design first, then break it into modules, run CI pipelines, do proper code reviews. Keep commits small so humans can actually review them. Consider design, maintainability, security, all the things that matter.

AI still does the heavy lifting in this phase, but humans lead. Design before implementation. Use plan mode to have AI generate code according to your thinking.

The first version's code isn't completely wasted, some modules can be reused, especially algorithm implementations and core business logic.

It's like extracting the valuable parts from a sketch and putting them into proper construction drawings.

Why This Actually Works

Why go through the trouble of two versions?

The core reason: before the first version is done, your understanding of the requirements is almost certainly incomplete.

The problem with traditional development is that it invests too much effort in the first version. You start architecting before the requirements are fully understood. You consider scalability and maintainability before you've figured out the technical challenges. The result? Massive over-engineering for scenarios that "might happen someday" but never will. Time gets spent on edge cases while the real problems get ignored.

The two-version approach lets you clear the path at minimum cost first. After the first version, requirements are confirmed, technical problems are solved, and then you design—knowing exactly what to design and what to skip. Far fewer wrong turns.

There's a hidden benefit too. Many senior developers resist AI coding because they can't accept the quality of AI-generated code. But if you tell them this code is meant to be thrown away, it's just for validating ideas, the psychological resistance drops significantly. It's an out: use AI, but don't be responsible for that code.

Ultimately, AI hasn't just changed how fast we write code, it's changed the economics of the entire development process. Two passes used to be too expensive. Now two passes is actually cheaper. Accepting that the first version is disposable lets you build a much better second version.

![Image 1](https://baoyu.io/uploads/2026-01-03/1767464015467.png)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/code-review]]
- [[00-元语/CI]]
- [[00-元语/vibe-coding]]
- [[00-元语/productivity]]
- [[00-元语/design]]
- [[00-元语/软件工程]]
- [[00-元语/workflow]]
