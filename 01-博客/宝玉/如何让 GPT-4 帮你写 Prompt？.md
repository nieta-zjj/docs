---
title: "如何让 GPT-4 帮你写 Prompt？"

来源: "https://baoyu.io/blog/prompt-engineering/how-to-write-prompt-with-gpt-4"
发布日期: "2023-10-24"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
本文介绍了如何通过设定专业角色、规范结构以及应用思维链等高级策略，利用 GPT-4 来辅助编写高质量的 Prompt。

**2) 核心要点**
*   **核心方案**：利用 GPT-4 辅助编写 Prompt，可有效解决人工编写（尤其是英文表达）不够准确、高质量的痛点。
*   **避免简单翻译**：仅要求 ChatGPT 翻译需求效果不佳，必须让其遵循优秀的结构和策略（参考 OpenAI 的 GPT 最佳实践）。
*   **设定角色**：在让 GPT-4 写 Prompt 时，首先需为其设定“Prompt Engineer”的角色，以提高生成高质量内容的概率。
*   **应用高级策略**：明确要求 GPT-4 在设计 Prompt 时优先考虑思维链（CoT）、慢思考（分步拆解任务）以及提供样例。
*   **规范输出结构**：要求生成的 Prompt 必须包含三个部分：设定角色、设定任务目标、限定便于程序解析的输出格式（如 JSON 或特殊字符隔开的纯文本）。
*   **持续迭代**：使用 GPT-4 辅助编写的好处在于，若对初步结果不满意，可以通过多轮对话提出进一步要求来优化 Prompt。

**3) 风险/不足**
*   **步骤拆解依赖人工提示**：如果用户自身不能提供清晰的步骤，GPT-4 可能无法将 Prompt 科学地拆分为合理的步骤（例如，在翻译任务中，除非明确要求，否则它不会主动写出“先直译再意译”的两步 Prompt）。

## 正文

很多人苦于不知道如何写高质量的 Prompt，尤其是如果要用英文表达更是吃力，不容易表达准确。

可以试试让 ChatGPT 帮你写，尤其是 GPT-4，生成的质量还是不错的。

如果你只是简单要求它写一个英文 Prompt，它很可能只是把你的要求翻译一遍，这样效果可能不够理想。要让 Prompt 质量高，可以让 Prompt 遵循一个好的结构，并应用一些好的策略，例如思考链、慢思考等等。

以前 OpenAI 分享过：《[GPT best practices](https://platform.openai.com/docs/guides/gpt-best-practices/strategy-write-clear-instructions)》，里面就介绍了很多优秀实践，我也分享过一些参考的结构。

基于这些可以写一个 Prompt 来让它写 Prompt😄

首先给它设定一个角色：“Prompt Engineer，擅长写 GPT-4 能理解并输出高质量结果的”，让它明白它擅长写 Prompt，生成时生成高质量 Prompt 内容的概率能高一点点。

然后告诉它要求，例如要考虑 Cot、慢思考，提供样例。

再告诉它输出的格式应该遵循一个结构。

这样它就能生成还不错的 Prompt 内容。

但是要注意的是，这种方法类似于让 ChatGPT 写代码，如果你自己不能提供清晰的步骤，ChatGPT 不一定能将 Prompt 科学的拆分成合理的步骤。

比如说我让它写一个翻译的 Prompt，它不会写出先直译再意译的 Prompt，只有你明确要求它分成两步翻译，它才能写出先直译再意译的 Prompt。

[参考聊天会话](https://chat.openai.com/share/92676c6b-540a-497c-aa31-2eb1d5bcddb6)

让 GPT-4 帮你写 Prompt 有个好处，就是如果对结果不满意，是可以进一步提要求的。

这是我的[另一个会话](https://chat.openai.com/share/4b62c760-9bc2-44e0-b16f-829512a609b8)，演示了如何一步步优化 Prompt。

参考 Prompt 如下：

> 现在你是一个 Prompt Engineer，擅长写 GPT-4 能理解并输出高质量结果的，撰写设计 Prompt 时，优先考虑：
>
>
> 1.   Chain of Thought, think step by step, Split complex tasks into simpler subtasks, Tactic: Specify the steps required to complete a task
> 2.   Strategy: Give GPTs time to "think"
> 3.   Tactic: Provide examples
>
>
> Prompt 的结构：
>
>
> 1.   设定一个角色，例如你是一个擅长翻译的助手
> 2.   设定任务目标
> 3.   限定输出格式，方便程序解析，例如 JSON，或者特殊字符隔开的文本，没有无关信息
>
>
> 这条消息只要回复 OK，我将在接下来的消息中提出需要你帮助设计和撰写的 Prompt。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/prompt]]
- [[00-元语/ChatGPT]]
- [[00-元语/OpenAI]]
- [[00-元语/llm]]
- [[00-元语/workflow]]
