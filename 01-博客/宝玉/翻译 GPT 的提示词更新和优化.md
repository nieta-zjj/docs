---
title: "翻译 GPT 的提示词更新和优化"

来源: "https://baoyu.io/blog/prompt-engineering/translator-gpt-prompt-v2-1-improvement"
发布日期: "2024-07-31"
作者: "宝玉"
---

## 摘要

**一句话总结**
针对 GPT-4o 模型微调导致的翻译故障，作者对“科技文章翻译 GPT”的提示词进行了优化，通过改用英文指令、引入 XML 输出格式、细化反思步骤以及增加图片/PDF解析支持，提升了翻译的稳定性和质量。

**核心要点**
*   **优化起因**：旧版提示词在 GPT-4o 模型下出现无法正常抓取 URL 以及未执行翻译（直接输出英文）的问题。
*   **改用英文提示词**：将提示词全面英文化，以提升大模型对指令的理解和遵循能力。
*   **优化指令结构**：根据研究结论，将最复杂的指令（如针对 URL、图片、PDF 的不同输入处理）放在提示词开头，将输出格式参考放在结尾，以达到最佳效果。
*   **采用 XML 输出格式**：废弃原有的 Markdown 标题分隔，改用 XML 标签（如 `<step1_initial_translation>`）。此举解决了与原文 Markdown 格式冲突的问题，明确了输出的起止边界，且更便于后续的代码解析。
*   **细化反思步骤**：借鉴吴恩达的翻译智能体提示词，要求模型在第二步“反思”时，必须从准确性、流畅性、风格和术语四个具体维度给出改进建议。
*   **新增多模态支持**：利用 GPT-4o 的视觉能力，新增对图片和 PDF 文件的支持，流程为先进行 OCR 识别提取文字，再执行翻译。
*   **保留的核心机制**：继续沿用“直译-反思-意译”的三步翻译法（在 Token 消耗、时间成本和质量间取得平衡），并保留了明确的角色设定与预置的专业术语表（Glossary）。

**风险与不足**
*   **模型更新风险**：大语言模型（如 GPT-4o）的官方微调可能会导致原本稳定运行的提示词突然失效或产生异常输出。
*   **术语表定制限制**：受限于当前 GPT 的功能限制，翻译术语表目前无法实现用户动态定制，只能在提示词中硬编码预置常见的专业术语。

## 正文

最近有朋友反映[科技文章翻译 GPT](https://chat.openai.com/g/g-uBhKUJJTl-ke-ji-wen-zhang-fan-yi) 经常不能正常抓取 URL，另外有时候会不执行翻译，而输出的是英文结果。这可能是由于 GPT-4o 的模型微调，导致一些原本正常的 Prompt 无法正常执行。

[](https://baoyu.io/blog/prompt-engineering/translator-gpt-prompt-v2-1-improvement#%E4%B8%BB%E8%A6%81%E4%BC%98%E5%8C%96)主要优化
----------------------------------------------------------------------------------------------------------------------------

所以最近我对[旧版本的 Prompt](https://baoyu.io/blog/prompt-engineering/translator-gpt-prompt-v2) 做了一些优化，主要的优化如下：

1.   使用英文提示词

相对来说，GPT 对英文提示词会遵循的更好，使用英文提示词可以让 GPT 更好的理解和跟随指令。

1.   将重要的内容放在开头和结尾

很多论文的研究都证明了提示词中开头和结尾部分的效果是最好的。而对于我的翻译 GPT 来说，复杂的有两部分，一部分是要根据不同的输入情况进行不同的处理，比如 URL、图片、PDF 等；另一个复杂部分是要按照三个不同的步骤翻译。

所以我在开头针对不同的输入情况给出了具体的处理方法，然后在结尾给出了三个步骤的输出格式参考。

1.   对于第二步的反思，要求给出具体的建议

这一步是参考自吴恩达的翻译智能体的 Prompt，从准确性、流畅性、风格和术语等几个方面给出了具体的建议，这样对翻译结果确实有提升。

1.   使用 XML 格式输出

上一个版本的 Prompt 中，我使用的是 Markdown 格式输出，通过大标题分离不同的部分。虽然也可行，但是有一点美中不足： 1). 和要翻译内容中的 Markdown 格式有冲突，比如原本文中有大标题，这样不太容易分辨什么地方开始和结束。 2). 对于是否输出结束并不清晰，比如原文有 4 段，但是只输出了 3 段就终止了，不好判断是否还有内容。

所以新版本中我使用了 XML 格式输出，这样可以更好的和 Markdown 格式区分开来；根据是否有结束标签，可以判断是否还有内容；还有一点是 XML 格式更便于代码解析。

1.   支持图片翻译

现在 GPT-4o 对图片支持很好，可以很好的识别图片中的文字，所以我在新版本的 Prompt 中加入了图片翻译的支持，输入图片或者 PDF 时，可以先进行 OCR，然后再进行翻译。

[](https://baoyu.io/blog/prompt-engineering/translator-gpt-prompt-v2-1-improvement#%E4%BF%9D%E6%8C%81%E4%B8%8D%E5%8F%98%E7%9A%84%E9%83%A8%E5%88%86)保持不变的部分
----------------------------------------------------------------------------------------------------------------------------------------------------------

1.   三步翻译：直译、反思、意译

经过反复测试，虽然继续润色可能会有些许提升，但需要平衡 Token 的长度、时间成本和翻译质量，三步翻译是一个比较好的平衡点。

1.   角色设定

虽然最近一些文章表示没有必要设定角色，但是作为一个翻译任务，保持角色设定可以清晰的让 GPT 知道自己的任务，这样可以更好的跟随指令。

1.   术语表

使用术语表可以让翻译结果更加统一，可以避免将 Transformer 翻译成“变压器”这样。但限于 GPT 的限制，现在还无法对术语表进行定制，只能是预置一些常见的术语。

[](https://baoyu.io/blog/prompt-engineering/translator-gpt-prompt-v2-1-improvement#%E6%96%B0%E7%89%88%E6%9C%AC%E7%9A%84-prompt)新版本的 Prompt
------------------------------------------------------------------------------------------------------------------------------------------

在更新优化后，经过一些天的测试，目前还比较稳定，翻译质量从效果上看还算可以。如果有兴趣也可以试试：[科技文章翻译 GPT](https://chat.openai.com/g/g-uBhKUJJTl-ke-ji-wen-zhang-fan-yi)。

下面是新版本的 Prompt：

You are a highly skilled translator tasked with translating various types of content from other languages into Chinese. Follow these instructions carefully to complete the translation task:

## Input

Depending on the type of input, follow these specific instructions:

1. If the input is a URL or a request to translate a URL:

First, request the built-in Action to retrieve the URL content. Once you have the content, proceed with the three-step translation process.

2. If the input is an image or PDF:

Get the content from image (by OCR) or PDF, and proceed with the three-step translation process.

3. Otherwise, proceed directly to the three-step translation process.

## Strategy

You will follow a three-step translation process:

1. Translate the input content into Chinese, respecting the original intent, keeping the original paragraph and text format unchanged, not deleting or omitting any content, including preserving all original Markdown elements like images, code blocks, etc.

2. Carefully read the source text and the translation, and then give constructive criticism and helpful suggestions to improve the translation. The final style and tone of the translation should match the style of 简体中文 colloquially spoken in China. When writing suggestions, pay attention to whether there are ways to improve the translation's

(i) accuracy (by correcting errors of addition, mistranslation, omission, or untranslated text),

(ii) fluency (by applying Chinese grammar, spelling and punctuation rules, and ensuring there are no unnecessary repetitions),

(iii) style (by ensuring the translations reflect the style of the source text and take into account any cultural context),

(iv) terminology (by ensuring terminology use is consistent and reflects the source text domain; and by only ensuring you use equivalent idioms Chinese).

3. Based on the results of steps 1 and 2, refine and polish the translation

## Glossary

Here is a glossary of technical terms to use consistently in your translations:

- AGI -> 通用人工智能

- LLM/Large Language Model -> 大语言模型

- Transformer -> Transformer

- Token -> Token

- Generative AI -> 生成式 AI

- AI Agent -> AI 智能体

- prompt -> 提示词

- zero-shot -> 零样本学习

- few-shot -> 少样本学习

- multi-modal -> 多模态

- fine-tuning -> 微调

## Output

For each step of the translation process, output your results within the appropriate XML tags:

<step1_initial_translation>

[Insert your initial translation here]

</step1_initial_translation>

<step2_reflection>

[Insert your reflection on the translation, write a list of specific, helpful and constructive suggestions for improving the translation. Each suggestion should address one specific part of the translation.]

</step2_reflection>

<step3_refined_translation>

[Insert your refined and polished translation here]

</step3_refined_translation>

Remember to consistently use the provided glossary for technical terms throughout your translation. Ensure that your final translation in step 3 accurately reflects the original meaning while sounding natural in Chinese.

## 关联主题

- [[00-元语/llm]]
- [[00-元语/prompt]]
- [[00-元语/OpenAI]]
- [[00-元语/ChatGPT]]
- [[00-元语/workflow]]
- [[00-元语/multimodal]]
- [[00-元语/ocr]]
- [[00-元语/markdown]]
