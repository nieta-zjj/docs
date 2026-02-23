---
title: "Why do so many people struggle with prompt engineering despite using templates and AI assistance?"

来源: "https://baoyu.io/blog/why-people-struggle-with-prompt-engineering"
发布日期: "2025-10-06"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
提示词工程并非简单的静态模板，而是一个系统性的迭代优化过程，其核心难点与关键在于利用领域知识评估AI输出与目标的差距并进行针对性调整。

**2) 关键点**
*   **复杂任务仍需提示词工程**：尽管AI模型能力大幅提升，但面对复杂任务时，简单的指令并不足够，仍需要系统的提示词工程。
*   **提示词工程的本质**：它是一个系统性设计、测试和优化的“迭代过程”，而不是收集网上现成的静态模板。
*   **核心痛点**：多数人遇到困难是因为无法评估AI当前输出与预期目标的差距，或者不知道如何进行调整。
*   **标准迭代周期**：包含5个步骤：0.设定目标（Goal） -> 1.构思（Idea） -> 2.编写初版提示词（Prompt） -> 3.测试（Test） -> 4.评估差距（Evaluate），并根据需要循环此过程。
*   **真实案例（15+次迭代）**：作者在开发YouTube字幕生成器时，迭代了15个以上的版本。面对AI在段落中间插入时间戳的问题，直接下达指令无效，最终通过添加“少样本示例（few-shot example）”展示如何拆分长段落才得以解决。
*   **优秀提示词工程师的特质**：不在于拥有最好的模板或AI助手，而在于能够精准识别输出与目标的差距，并知道该调整哪个“杠杆”来消除差距。
*   **领域知识的重要性**：评估结果和诊断问题高度依赖领域专业知识（Domain expertise）。

**3) 风险/差距**
*   **缺乏领域知识的风险**：如果没有相关领域的专业知识（例如非程序员使用AI写代码），即使拥有完美的提示词模板也会陷入困境，因为用户无法评估AI输出的正确性或诊断需要修复的问题。
*   **直接指令失效风险**：在处理复杂任务（如上述字幕时间戳格式问题）时，仅靠直接的文字指令（Direct instructions）可能无法达到预期效果，需要转换为提供具体示例等其他策略。

## 正文

* * *

Most people think prompt engineering is dead: "Models are so powerful now, who needs prompt engineering? Just tell the AI what you want!"

This is only partially true. Simple tasks? Sure. Complex tasks? You still need systematic prompt engineering.

**So what IS prompt engineering?**

Prompt engineering is a PROCESS - systematically designing, testing, and optimizing prompts. It's not the static templates you find online. It's the iterative journey that creates those templates.

**The core issue most people face:**

They can't evaluate the gap between current output and their goal, or don't know how to adjust.

Here's the real prompt engineering cycle:

![Image 1](https://baoyu.io/uploads/2025-10-06/1759727213270.png)

[Image: The flowchart showing the iterative process - Goal → Idea → Prompt → Testing → Evaluation → repeat]

**0. GOAL:** Define what success looks like

**1. IDEA:** Brainstorm your approach (write it yourself, use AI, adapt templates)

**2. PROMPT:** Write v1. Don't overthink it - just take your first shot

**3. TEST:** Run it and get results

**4. EVALUATE:** Measure the gap between results and your goal

If it doesn't hit the mark? Loop back to step 1. Sometimes you nail it first try. Sometimes you need 10+ iterations.

Real example: When building a YouTube subtitle generator, I went through 15+ versions. The AI kept inserting timestamps mid-paragraph, ruining readability. Direct instructions didn't work.

The breakthrough? Adding a few-shot example showing how to split long segments into multiple paragraphs. Problem instantly solved.

![Image 2](https://baoyu.io/uploads/2025-10-06/1759727229696.png)

**Here's what separates good from bad prompt engineers:**

It's NOT about having the best templates or the smartest AI assistant.

It's about:

*   Recognizing the specific gap between output and goal

*   Knowing which lever to pull to close that gap

This is why domain expertise matters. A non-coder using AI to code will struggle even with perfect templates - they can't evaluate if the output is correct or diagnose what needs fixing.

The best prompt engineers aren't template collectors. They're shooters who measure, adjust, and shoot again until they hit the bullseye.

* * *

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/evals]]
- [[00-元语/prompt]]
- [[00-元语/workflow]]
- [[00-元语/软件工程]]
