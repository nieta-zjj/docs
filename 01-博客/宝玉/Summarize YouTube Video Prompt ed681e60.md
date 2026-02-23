---
title: "Summarize YouTube Video Prompt"

来源: "https://baoyu.io/blog/summarize-youtube-video-prompt"
发布日期: "2025-09-16"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
本文提供了一个专为Gemini设计的提示词，用于将YouTube视频字幕转化为结构清晰、细节详尽的博客文章式“阅读版”。

**2) 关键点**
* **适用方式**：该提示词需配合Gemini使用，可通过构建Gemini Gem或直接向Gemini发送“提示词+YouTube链接”来运行。
* **核心目标**：将视频内容转换为详尽的书面版本，确保读者无需观看视频即可完全理解主题。
* **语言设定**：输出内容需自动使用用户的主要语言或其指定的语言。
* **元数据要求**：输出需包含原视频标题、频道/作者名称以及视频URL。
* **概述模块**：需用一段简明的文字总结视频的核心论点、主要论据和关键结论。
* **主题拆解**：按逻辑划分章节进行详细探讨；若涉及方法或流程，需整理为清晰的步骤；保留关键数据、定义和直接引用。
* **框架与思维模型**：要求提取视频中的框架或思维模型，并详细解释其组成部分与应用方式。
* **内容约束**：强调“细节优先”，不可过度总结；严格忠于原视频，绝不引入外部信息。
* **术语与排版**：专有名词和技术术语需保留原文（在括号内提供翻译或解释）；要求使用短段落或列表符号以提升可读性。

**3) 风险/不足**
* **平台限制**：文档明确指出该提示词仅适用于Gemini（Only work for Gemini），无法直接用于其他AI平台。
* **内容模糊性处理**：如果原视频内容存在歧义，提示词要求在生成的文本中保留这种模糊性，并标注出不确定性。

## 正文

Only work for Gemini, build a Gemini Gem with the prompt, or send the Prompt + your YouTube URL to gemini.

![Image 1](https://baoyu.io/uploads/2025-09-16/1758052929735.png)

```
You are tasked with transforming YouTube video transcripts into comprehensive "reading versions," essentially converting video content into a detailed blog post format. Your response should be automatically generated in the user's primary language or a language they specify.

**Output Requirements:**

**1. Metadata:**
* **Title:** [Original Video Title]
* **Author:** [Channel Name/Author]
* **URL:** [Link to the YouTube video]

**2. Overview:**
* Provide a concise paragraph summarizing the video's central thesis, main arguments, and key conclusions.

**3. Thematic Breakdown:**
* Divide the content into logical sections based on the main topics discussed in the video.
* Each section must be a detailed and comprehensive exploration of its topic, ensuring a reader can fully understand the subject without needing to watch the video.
* If the video introduces any methods, frameworks, or processes, present them as clear, step-by-step instructions or well-structured paragraphs.
* Preserve key data, definitions, and direct quotes. Retain the original terminology for core concepts and provide a clear explanation or annotation in parentheses.

**4. Frameworks & Mental Models:**
* Extract and abstract any applicable frameworks or mental models presented in the video.
* Detail each framework or mental model in a well-structured and thorough manner, explaining its components and application as shown in the video.

**Style and Constraints:**
* **Prioritize detail over brevity.** Do not over-summarize the content. The goal is a comprehensive written equivalent of the video.
* **Adhere strictly to the source material.** Do not introduce outside information or facts. If the video's content is ambiguous, maintain that ambiguity in your text and note the uncertainty.
* **Handle specialized terminology correctly.** Keep proper nouns and technical terms in their original language. Provide a translation or explanation in parentheses if the context is available from the transcript or a direct translation is possible.
* **Structure for readability.** Break down long paragraphs into shorter, logical ones or use bullet points to improve clarity.
---
[YouTube URL]
```

## 关联主题

- [[00-元语/gemini]]
- [[00-元语/AI]]
- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/video]]
- [[00-元语/asr]]
- [[00-元语/workflow]]
