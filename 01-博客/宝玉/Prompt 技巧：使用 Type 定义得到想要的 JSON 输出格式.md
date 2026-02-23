---
title: "Prompt 技巧：使用 Type 定义得到想要的 JSON 输出格式"

来源: "https://baoyu.io/blog/prompt-engineering/prompt-skills-using-type-to-define-json-output"
发布日期: "2023-09-01"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
本文介绍了一种在 Prompt 中利用 TypeScript 类型声明配合代码注释，从而在 GPT-4 中稳定生成指定 JSON 格式的简单有效方法，无需依赖 Function Calling。

**2) 关键要点**
* **核心技巧**：在 Prompt 中直接使用 TypeScript 的类型声明（Type）来规范期望的 JSON 输出格式。
* **适用场景**：在仅需格式化输出 JSON 数据的场景下，该方法简单有效，可作为 Function Calling 的轻量替代方案。
* **配合注释**：在类型声明的代码中加入注释，可向模型清晰解释每个字段的具体含义与逻辑要求。
* **模型表现**：作者指出该 Prompt 技巧在 GPT-4 模型下能够保持稳定的输出表现。
* **实际案例**：文中展示了一个 `TranslatedResult` 的类型定义示例，明确规定了完整翻译内容（字符串）以及单句翻译内容（包含翻译文本、时间戳、首词等嵌套数组结构）。

## 正文

如果只是为了格式化 JSON，用不着 Function Calling，一个最简单有效的办法就是用 TypeScript 的类型声明，还可以配合注释，比如这是我用的一个 Prompt，在 GPT-4 下可以稳定的输出指定的 JSON 格式：

* * *

Your output should resemble a VALID JSON Object with the type TranslatedResult as illustrated below:

type TranslatedResult = {

// The comprehensive translated content from step 1

fullTranslatedContent: string;

// All individual translated sentences.

translatedSentences: Array<{

// A distinct translated sentence.

translated: string;

// Related input items, 1 translated sentence

corresponds to 1 or more input items

related: Array<{

// The timestamp of the input item

timestamp: number;

// The initial word of the related input item.

firstWord: string;

}>

}>;

};

* * *

![Image 1](https://baoyu.io/images/prompt-engineering/prompt-skills-using-type-to-define-json-output/F49BHtjWUAA04Aw.jpeg)

![Image 2](https://baoyu.io/images/prompt-engineering/prompt-skills-using-type-to-define-json-output/F49BlpAXsAMHH61.png)

## 关联主题

- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/OpenAI]]
- [[00-元语/typescript]]
