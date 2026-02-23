---
title: "如何让 GPT-4 生成更好的摘要"

来源: "https://baoyu.io/blog/prompt-engineering/how-to-get-a-better-summary-result"
发布日期: "2024-03-20"
作者: "宝玉"
---

## 摘要

**一句话总结**
本文介绍了一种提示词技巧，通过将摘要任务拆分为列出话题、补充遗漏、提取要点和分段展开四个步骤，能有效解决 GPT-4 总结时的“偷懒”问题，生成高质量的摘要。

**关键要点**
*   **背景与对比**：虽然常有观点认为 GPT-4 在总结时会“偷懒”且不如 Claude，但通过得当的提示词，GPT-4 的摘要效果可以媲美甚至超越 Claude 3。
*   **测试案例**：在总结 Lex 采访 Sam 的视频文稿最后 45 分钟内容时，使用该方法的 GPT-4 生成的要点更好、结果更完整。
*   **核心方法**：将摘要任务拆分为多个具体步骤，并要求模型每一步分别打印结果。
*   **步骤一（列出话题）**：要求模型尽可能列出讨论的所有话题，不要遗漏。
*   **步骤二（查漏补缺）**：要求模型检查第一步的话题列表，补充缺失的重要话题。
*   **步骤三（提取要点）**：基于每个话题，使用项目符号（bullet points）列出核心要点。
*   **步骤四（展开生成）**：严格以话题为章节，基于要点用 1-3 个自然段落总结每个话题（不使用项目符号），使整体效果呈现为一篇连贯的科普文章。

## 正文

很多人都说 GPT-4 总结的时候会偷懒，Claude 更好，但如果你提示词得当，GPT-4 的效果其实一样可以做到很好，甚至比 Claude 效果还好。

比如以 Lex 采访 Sam 的视频文稿的后面 45 分钟，分别让 GPT-4 和 Claude 3 总结，GPT-4 的要点总结的更好，生成结果更完整。

关键在于要把摘要这个任务分成几个步骤：

1.   列出话题
2.   基于每个话题列出 bullet points 格式的要点
3.   基于上面的结构去展开生成

这是我用的 Prompt：

请用中文详尽总结以下对话内容，按照以下步骤，每一步分别打印结果：

1. 尽可能列出他们讨论的所有话题，不要遗漏

2. 检查第一步列出的话题，补充缺失的重要话题

3. 基于每个话题用bullet points列出要点

4. 严格的以话题为章节，不要遗漏，基于每个话题和下面的要点，用1-3个自然段落总结每个话题的内容，总结每个话题时不要用bullet points，整体效果像是一篇科普文章

以下是要总结的内容：

<你要总结的内容>

![Image 1](https://baoyu.io/images/prompt-engineering/how-to-get-a-better-summary-result/prompt0.webp)![Image 2](https://baoyu.io/images/prompt-engineering/how-to-get-a-better-summary-result/prompt1.webp)![Image 3](https://baoyu.io/images/prompt-engineering/how-to-get-a-better-summary-result/prompt2.webp)![Image 4](https://baoyu.io/images/prompt-engineering/how-to-get-a-better-summary-result/prompt3.webp)

## 关联主题

- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/OpenAI]]
- [[00-元语/ChatGPT]]
- [[00-元语/Claude]]
- [[00-元语/workflow]]
- [[00-元语/learning-resource]]
