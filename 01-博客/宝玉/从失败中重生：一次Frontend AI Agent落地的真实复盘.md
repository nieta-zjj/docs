---
title: "Reborn from Failure: A Real-World Retrospective on Landing a Frontend AI Agent"

来源: "https://baoyu.io/blog/reborn-from-failure-frontend-ai-agent-retrospective"
发布日期: "2025-12-20"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
本文回顾了一个前端AI Agent项目从技术成功到产品失败的真实案例，分享了团队如何将认知从“构建独立的Agent平台”升级为“开发集成于现有工作流的AI技能（Skill）”。

**2) 关键要点**
*   **项目背景与目标**：为解决通用大模型无法生成企业私有设计系统代码的痛点，团队尝试构建一个支持Figma/截图直接生成内部规范前端代码的AI Agent。
*   **技术底座与环境**：基于Claude Agent SDK构建；放弃了浏览器沙盒（Sandpack），转而为Agent提供本地文件系统（VM或独立目录）以最大化其读写和编译能力。
*   **私有组件学习方案**：未使用复杂的RAG技术，而是将设计规范和API文档转为Markdown，允许Agent通过本地文件检索来学习文档和高质量参考代码。
*   **自动化验证闭环**：构建了“生成 -> 验证 -> 修复”闭环，利用静态检查、编译检查和视觉差异对比（Chrome DevTool MCP）确保代码可用，并将验证工具放入子Agent以避免污染主上下文。
*   **认知转变一（面向AI设计）**：工作流需从“以人为中心”转向“以AI为中心”，采用AI易于理解的技术栈（如基于shadcn/ui扩展），仅保留Design Tokens，而非维护庞大的私有组件库。
*   **认知转变二（从Agent到Skill）**：放弃构建独立的Agent平台，将设计系统封装为“技能（Skill = Markdown文档 + 自动化脚本）”，直接接入Cursor或Claude Code等开发者现有的AI开发环境中。
*   **核心结论**：技术成功不等于产品成功；将能力封装为插件化的Skill比构建高门槛的独立Agent平台更具实用价值。

**3) 风险与不足（导致产品失败的原因）**
*   **用户习惯阻力**：设计师和产品经理习惯在Figma中工作，将其转移到对话式界面存在巨大的摩擦力，用户甚至不知道该输入什么。
*   **80/20瓶颈**：Agent能完美完成80%的工作，但剩余20%的瑕疵需要极高的人工修改成本，而这20%往往决定了代码最终是否可用。
*   **工作流割裂**：独立的Agent生成环境与真实的开发环境脱节，开发者需要手动复制粘贴代码，导致流程繁琐。

## 正文

Today at FEDay, I shared a case study on implementing a Frontend Agent. The core narrative wasn't about a victory lap; it was the story of how a team went from "Technical Success" to "Product Failure," and how that failure led to a crucial upgrade in our cognitive framework.

The value of this story lies not in a methodology for success, but in the pitfalls we encountered and the evolution of our thinking.

![Image 1](https://baoyu.io/uploads/2025-12-20-G8mAQPfWIAAnJ90.jpg)

2025 is being hailed as the "Year of the Agent." With the release of Deep Research, Manus, and Claude Code, the tech community is buzzing.

Many teams are asking the same question: "Should we build an Agent?"

![Image 2](https://baoyu.io/uploads/2025-12-20-G8mA13vWIAAulcH.jpg)

Before we dive in, let me clarify my definition of an AI Agent:

> AI Agent: A Large Language Model (LLM) that loops through tool calls to achieve a specific goal.

- Tools in a loop: Model calls tool -> Gets result -> Continues reasoning.

- Clear Endpoint: It works to achieve a goal, not to loop infinitely.

- Flexible Goal Source: The goal can come from a user or another LLM.

- Basic Memory: Maintains context through conversation history.

![Image 3](https://baoyu.io/uploads/2025-12-20-G8mB3oPXsAApGSk.jpg)

The Challenge: Private Design Systems

A friend's team was facing a genuine enterprise pain point: The company had a complete internal Design System and a private frontend framework. However, because this code was private, public AI models had never been trained on it. General-purpose models simply could not generate code that adhered to their internal specifications.

The goal seemed clear: Build a "Lovable-like" tool, but powered by their own Design System. Users would upload a Figma design or a screenshot, and the Agent would automatically generate frontend code compliant with internal standards.

Sounds perfect, right?

![Image 4](https://baoyu.io/uploads/2025-12-20-G8mCUdjWgAAE6Vj.jpg)

The Reality Check The challenges were substantial:

1. Building a complete Agent system is harder than it looks (User interaction, context engineering, etc.).

2. The model has to understand and use private components it has never seen.

3. We needed real-time browser previews of the generated code.

4. We needed auto-repair capabilities if the code failed.

![Image 5](https://baoyu.io/uploads/2025-12-20-G8mCkIdWUAA3Cv7.jpg)

The "Technical Success": How We Built It

As a technical consultant, my first piece of advice was pragmatic: "Get it running before you optimize." Building the Agent isn't the hardest part; completing the full execution loop is.

![Image 6](https://baoyu.io/uploads/2025-12-20-G8mC2VOWMAEuIpO.jpg)

1. The Foundation: Claude Agent SDK

Instead of reinventing the wheel, we built upon the Claude Agent SDK.

- Proven: Claude Code proved this architecture works.

- Ready-to-use: Built-in tools cover 90% of scenarios.

- Extensible: Supports custom tools, MCP (Model Context Protocol), and custom Skills.

(You can find some of the prototype code open-sourced here: [https://github.com/JimLiu/claude-agent-kit](https://github.com/JimLiu/claude-agent-kit))

![Image 7](https://baoyu.io/uploads/2025-12-20-G8mDal6XoAAA2_3.jpg)

2. The Preview Solution: Local File System

We initially tried Sandpack (browser-based sandbox) for code previews, but it failed with complex private components.The Pivot: We gave the Agent a Local File System (a VM or directory per session). This allowed the Agent to freely read, write, modify, and compile code.

![Image 8](https://baoyu.io/uploads/2025-12-20-G8mDyS1XEAI9NUo.jpg)

Giving the Agent a local file system is the only way to maximize its capabilities.

![Image 9](https://baoyu.io/uploads/2025-12-20-G8mEGgNXMAAnkTb.jpg)

3. Solving the "Unknown Component" Issue

How do you teach AI to use a component library it has never seen?

Treat it like a new employee. We converted the Design System specs, component lists, and API docs into Markdown.

No complex RAG needed: We simply allowed the Agent to perform file retrieval on local documentation and "high-quality reference code."

![Image 10](https://baoyu.io/uploads/2025-12-20-G8mEY0MWgAAFYdA.jpg)

4. Quality Assurance: The Verification Loop

To ensure the code actually worked, we built an automated loop: Generation -> Verification -> Repair

- Tools: Static Linting, Compilation checks, and Visual Diffing (using Chrome DevTool MCP).

- Optimization: We placed verification tools into a Skill or SubAgent to avoid polluting the main Agent's context window.

![Image 11](https://baoyu.io/uploads/2025-12-20-G8mEmwAXcAAZ1ly.jpg)

The "Product Failure": The Silence After Launch

The system worked. The demo was stunning. We launched it... and almost no one used it.

After the initial novelty wore off, abandonment rates skyrocketed. We conducted a deep post-mortem and user interviews, realizing the problem wasn't the technology—it was a misalignment between Product Logic and User Habits.

![Image 12](https://baoyu.io/uploads/2025-12-20-G8mFCMUXkAAPDEZ.jpg)

Why It Failed

1. Habit Resistance: Designers and PMs live in Figma, not chat windows. Moving from their comfort zone to a conversational interface was a massive friction point. Most didn't even know what to type.

2. The 80/20 Bottleneck: The Agent did 80% of the work perfectly. But the final 20% required manual modification, which was incredibly high-effort. Often, that 20% determined whether the code was usable at all.

3. Workflow Fragmentation: The generation environment was disconnected from the real development environment. Developers had to manually copy-paste code, making the process tedious.

![Image 13](https://baoyu.io/uploads/2025-12-20-G8mFZsTWsAA6dRh.jpg)

The Cognitive Upgrade: Reframing the Problem

We realized we asked the wrong question: "How do we build a Design System AI Agent?" This made the Agent the goal, rather than the means.

The Right Question was: "What is the ultimate purpose of our Design System?"

1. Unified design specifications across the enterprise.

2. Increased development efficiency.

![Image 14](https://baoyu.io/uploads/2025-12-20-G8mGFyFXcAA0G5D.jpg)

Shift 1: Design for AI, Not Humans

Current workflows are human-centric: Manual communication, iterative modification, manual confirmation.Future workflows must be AI-Centric: Input -> AI Agent -> Output.

New Design Principles:

- AI-Friendly: Choose tech stacks that LLMs understand easily.

- Lightweight: Keep only Design Tokens. Extend upon AI-friendly open-source systems (like shadcn/ui) rather than maintaining a massive private library.

![Image 15](https://baoyu.io/uploads/2025-12-20-G8mGnG5WMAEr-zX.jpg)

Shift 2: From "Agent" to "Skill"

The most critical pivot was abandoning the "Independent Agent Platform."

Old Model (Island): A standalone Agent isolated from the developer, causing friction.

New Model (Integration): Turn the Design System into a Skill that can be embedded into existing AI development environments (like Cursor or Claude Code).

![Image 16](https://baoyu.io/uploads/2025-12-20-G8mHQD2WQAAIYhT.jpg)

What is a Skill?

It is simply Markdown Documentation (for the AI to read) + Automation Scripts (to initialize projects and install the system).

Now, a developer works in their familiar environment. When they need the Design System, the generic Agent calls this "Skill," and the generated code goes directly into the project repository.

(Reference approach: anthropics/skills/tree/main/skills/web-artifacts-builder)

![Image 17](https://baoyu.io/uploads/2025-12-20-G8mHVx9XUAE9YDU.jpg)

Deep Insights: 4 Key Takeaways

1. Technical Success != Product Success

Many engineers (myself included) fall into the trap of thinking "It works, therefore it is successful." Users don't care about your tech stack; they care if it solves their problem without breaking their flow.

2. Design "AI-Centric" Workflows

We talk about "User-Centric," but we must add a layer: "AI-Centric." Don't make AI mimic human workflows. Redesign the workflow so the AI can operate at peak efficiency, then let the human enjoy the result.

3. Skill > Agent

Independent Agent platforms face high adoption barriers. Encapsulating capabilities as a Skill that plugs into the existing ecosystem is a far more pragmatic path.

4. Action

Even though the initial product "failed," the cognitive upgrade was priceless. You cannot learn to shift from "Human Workflow" to "AI Workflow" without getting your hands dirty.

![Image 18](https://baoyu.io/uploads/2025-12-20-G8mHnslWsAAnooo.jpg)

Just Build It!

Failure is acceptable. It is infinitely better than doing nothing at all.

![Image 19](https://baoyu.io/uploads/2025-12-20-G8mH8R6XUAAsqEz.jpg)

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/Cursor]]
- [[00-元语/design]]
- [[00-元语/mcp]]
- [[00-元语/evals]]
- [[00-元语/sdk]]
- [[00-元语/skills]]
- [[00-元语/github]]
- [[00-元语/virtual-file-system]]
- [[00-元语/workflow]]
