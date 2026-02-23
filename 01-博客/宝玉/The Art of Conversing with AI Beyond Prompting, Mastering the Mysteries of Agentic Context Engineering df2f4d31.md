---
title: "The Art of Conversing with AI: Beyond Prompting, Mastering the Mysteries of Agentic Context Engineering"

来源: "https://baoyu.io/blog/the-art-of-conversing-with-ai-master-context-engineering-for-ai-agents"
发布日期: "2025-10-15"
作者: "宝玉"
---

## 摘要

### 1) 一句话总结
本文探讨了如何通过“上下文工程（Context Engineering）”——包括信息精简、多智能体协作隔离以及分层动作空间——来解决AI Agent在处理长任务时面临的上下文过载问题，从而构建高效、专注的AI运行环境。

### 2) 关键要点
*   **核心挑战与解决思路**：AI Agent在长任务中易因信息堆积出现“上下文腐败（Context rot）”，盲目扩大上下文窗口并非良策，需通过“上下文工程”为其构建精简、高效的运行环境。
*   **信息压缩（Compaction）**：将大量输出数据（如搜索结果）存入外部文件系统，仅在上下文中保留路径或索引，从而实现无损的记忆减负。
*   **信息总结（Summarization）**：利用AI提炼冗长的交互历史。由于该过程会丢失细节，应在关键信息完成“压缩”后再谨慎使用。
*   **多智能体任务隔离**：遵循“通过通信共享内存”的原则，将独立子任务分配给不包含全局历史的子Agent，以消除信息干扰。
*   **共享上下文协作**：针对复杂的相互依赖任务，子Agent可继承主Agent的完整历史，并配备专属系统提示词与工具集，从专家视角切入问题。
*   **分层动作空间（Layered Action Space）**：为避免工具过载导致的混乱，将Agent的工具集重构为三层递进的生态系统。
*   **三层工具生态详解**：第一层为**核心函数**（提供少于10个如读写文件、执行Shell等原子能力）；第二层为**沙盒环境**（Agent通过Shell自主探索和使用沙盒内的工具）；第三层为**包与API生态**（Agent通过编写代码动态调用外部第三方库解决复杂问题）。
*   **少即是多（Less is More）**：上下文管理的本质是消除噪音、简化架构，通过减少不必要的技巧来激发模型自身的内在智能。

### 3) 风险与不足
*   **上下文腐败风险**：随着上下文信息的不断累积，模型性能会急剧下降，导致Agent出现反应迟钝、重复操作或遗忘初始目标（失忆困境）。
*   **信息丢失风险**：“信息总结（Summarization）”本质上是一种有损过程（如同书评无法替代原著），过度依赖会导致原始细节丢失。
*   **协作成本风险**：在多智能体模式中，“共享上下文（Sharing Context）”模式虽然适合复杂任务，但运行成本更高。
*   **工具混乱风险**：一次性为Agent提供数十甚至上百个工具，会导致其陷入“工具混乱（tool confusion）”，无法准确判断该调用哪个工具。

## 正文

**Source of Inspiration:** Lance (LangChain) & Pete (Manus)

**Original Video:**[https://www.youtube.com/watch?v=6_BcCthVvb8](https://www.youtube.com/watch?v=6_BcCthVvb8)

**Slides**: [https://drive.google.com/file/d/1QGJ-BrdiTGslS71sYH4OJoidsry3Ps9g/view](https://drive.google.com/file/d/1QGJ-BrdiTGslS71sYH4OJoidsry3Ps9g/view)

We stand on the precipice of a revolution driven by AI Agents. We envision them as reliable assistants, autonomously navigating long and complex tasks. Yet, a profound paradox is quietly unfolding: the more we rely on them, the more susceptible they become to getting lost. When a task stretches across dozens or even hundreds of interactions, these once-brilliant agents can grow sluggish, repetitive, and even forget their original objective. This is the "amnesia" dilemma of AI Agents—an invisible shackle holding back their full potential.

The root of the problem lies in the finite space known as the "context window." It is the agent's working memory, where all information needed for decision-making—instructions, conversation history, tool outputs—must be loaded. As this information accumulates, the context becomes bloated, and a phenomenon called "context rot" sets in, causing the model's performance to plummet. Many believe the solution is to endlessly expand this window, but that's akin to solving a library's retrieval problem by building an infinitely large building. The true answer lies not in brute-force expansion, but in a more subtle wisdom: the art of "Context Engineering." At its core, this discipline is about creating an elegant, efficient, and focused environment for the AI's mind to operate.

![Image 1](https://baoyu.io/uploads/2025-10-15/1760497706491.png)

#### **The Art of Reduction: Lightening AI's Cognitive Load**

To grasp the logic behind this, we must first recognize that not all information holds equal immediate value. The starting point of context engineering is learning to strategically "lighten the load" on an AI's memory. This involves two distinct yet complementary techniques: "Compaction" and "Summarization."

"Compaction" is a precise art of externalization. Imagine a tool, like a web search, returns a massive volume of text. Instead of permanently pinning thousands of words to the agent's memory board, we can save the full output to an external file system, leaving only a concise path or index in the context, such as "Search results saved to `result_01.txt`." This process is entirely reversible; no information is lost. The AI gains a perfect digital external memory, allowing it to retrieve the original data whenever needed. This method ensures the integrity of the historical record, enabling the agent to trace back to every initial detail, even a hundred steps later.

![Image 2](https://baoyu.io/uploads/2025-10-15/1760497764521.png)

However, when the context growth surpasses a critical threshold, even compaction is not enough to prevent overload. This is when we must turn to "Summarization." This is more an act of intellectual distillation than mere information transfer. It often involves another AI model stepping in to read a lengthy interaction history and distill it into a highly condensed summary. This process is inherently lossy, just as a profound book review can never replace the original work. Therefore, it must be used judiciously. The most effective approach is to first solidify key information using reversible "compaction" before applying summarization to the remainder. This ensures that while the memory is being lightened, the most precious sparks of insight are preserved.

![Image 3](https://baoyu.io/uploads/2025-10-15/1760497794864.png)

#### **The Wisdom of Collaboration: Building a "Social Network" for Agents**

![Image 4](https://baoyu.io/uploads/2025-10-15/1760497869685.png)

Once we master the management of a single agent's memory, a grander picture emerges: how can we enable multiple agents to collaborate efficiently, like a well-orchestrated team? This brings us to the second pillar of context engineering: Isolation. A maxim from computer science is particularly fitting here: "Don't communicate by sharing memory; instead, share memory by communicating." This wisdom reveals two fundamental patterns for constructing an agent "social network."

![Image 5](https://baoyu.io/uploads/2025-10-15/1760497825180.png)

The first pattern is "Communicating." This is like a project manager assigning a clearly defined, self-contained task (e.g., "Find all bugs in this code report") to a specialist. While executing the task, the specialist's context window contains only this specific instruction, free from the noise of the entire project's history. They simply need to complete the job and return the final result. This pattern is clean and efficient, ideal for sub-tasks that can be neatly decoupled, minimizing informational interference.

![Image 6](https://baoyu.io/uploads/2025-10-15/1760497893931.png)

The second pattern is "Sharing Context." Imagine a strategic consultant being brought into an ongoing project. To provide valuable insights, they must read all the meeting minutes, email threads, and decision documents from the project's inception. In this model, a sub-agent is granted access to the main agent's full historical context but operates with its own unique system prompt and specialized toolset. This allows it to approach the problem from a fresh, expert perspective while being fully informed of the global background. Though more costly, this pattern is invaluable for complex, interdependent tasks that require deep contextual understanding, such as in-depth research.

![Image 7](https://baoyu.io/uploads/2025-10-15/1760497912616.png)

#### **The "Layered Action Space": The Leap from Toolbox to Ecosystem**

![Image 8](https://baoyu.io/uploads/2025-10-15/1760497937796.png)

Thus far, our discussion has centered on managing the _information_ within the context. However, the most revolutionary idea in context engineering lies in applying the same principles to managing the _tools_ themselves. When an agent is presented with dozens or even hundreds of tools, it can fall into "tool confusion," unsure which one to invoke in a given situation. The real solution is not to give it an infinitely large toolbox, but to build a hierarchical, explorable "action ecosystem." This is the "Layered Action Space" framework.

![Image 9](https://baoyu.io/uploads/2025-10-15/1760497963754.png)

**Layer One is the Core: Function Calling.** These are the agent's most fundamental, atomic abilities—its "primal instincts." At this level, we provide only a very small number (e.g., fewer than ten) of absolutely essential and universal functions, such as: read file, write file, execute shell command, search. These functions form the stable, reliable, and easily understood bedrock of its interaction with the digital world.

![Image 10](https://baoyu.io/uploads/2025-10-15/1760497980191.png)

**Layer Two is the Environment: Sandbox Utilities.** Here, the paradigm shifts. The agent is no longer passively "given" tools; it is placed within a virtual sandbox pre-loaded with various utilities. Using the "execute shell command" function from its core layer, it can discover, learn, and use these tools just as a human would on a computer (e.g., using `ls` to see files, `grep` to search content, or running a custom `mcp-cli` program). The agent evolves from a mere "tool user" to an "environment explorer." Its capabilities are no longer limited by the length of its system prompt but can expand infinitely as it learns its surroundings.

![Image 11](https://baoyu.io/uploads/2025-10-15/1760497994050.png)

**Layer Three is the Ecosystem: Packages & APIs.** This is the highest level of abstraction. Here, the agent is empowered to write and execute code, such as Python scripts. This grants it access to a virtually limitless universe of third-party libraries and external APIs, whether for complex data analysis, 3D model generation, or fetching real-time financial market data. At this level, the agent becomes a "solution creator," dynamically composing the powers of the external ecosystem to build unprecedentedly complex workflows on the fly.

![Image 12](https://baoyu.io/uploads/2025-10-15/1760498022024.png)

This three-tiered framework transforms the agent's capabilities from a flat list into a three-dimensional, explorable ecosystem. It not only solves the problem of tool overload but, more importantly, provides a clear and powerful pathway for the agent's growth and emergent intelligence.

![Image 13](https://baoyu.io/uploads/2025-10-15/1760498051817.png)

#### **Less is More: Returning to the Essence of Symbiosis with AI**

![Image 14](https://baoyu.io/uploads/2025-10-15/1760498095379.png)

Looking back at the strategies of context engineering—from compaction and summarization to isolation and layering—we arrive at a simple, profound truth: its ultimate goal is not to build an increasingly complex scaffold around the AI, but to make its job _simpler_.

![Image 15](https://baoyu.io/uploads/2025-10-15/1760498116508.png)

Every successful act of context management is an exercise in eliminating noise and sharpening focus. Our greatest leaps forward often come from simplifying our architecture, from removing unnecessary tricks, and from placing a little more trust in the model's inherent intelligence. The essence of context engineering is to create a pristine environment where that intelligence can flourish.

In the end, our pursuit is not a "super-program" force-fed with commands and tools, but a "digital partner" endowed with core capabilities and trusted to learn, explore, and create within a rich ecosystem. This, perhaps, is the true path toward a symbiotic future with AI—not by building more, but by understanding more.

* * *

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/prompt]]
- [[00-元语/tool]]
- [[00-元语/cli]]
- [[00-元语/context-optimization]]
- [[00-元语/context-database]]
- [[00-元语/memory]]
- [[00-元语/workflow]]
