---
title: "如何写出高质量的 Prompt？"

来源: "https://baoyu.io/blog/prompt-engineering/how-to-write-high-quality-prompt"
发布日期: "2023-07-18"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
编写高质量 Prompt 的核心在于掌握指令的结构与模板，而非死记硬背大量具体指令，通过基础角色设定、进阶示例提供以及高级的链式思考即可满足绝大部分交互需求。

**2) 关键要点**
*   **核心理念**：无需记忆网传的“160条权威指令”，掌握 Prompt 的底层模板和结构最为重要。
*   **基础用法**：直接输入明确的指令（如翻译、摘要等），同时为 GPT 指定一个专业角色可以有效提升输出效果。
*   **进阶用法**：在 Prompt 中提供一到多个示例，引导 GPT 严格按照期望的格式输出结果。
*   **高级用法**：结合“链式思考（分多步做）”与“慢思考（打印每一步的中间结果）”，适用于复杂的推理过程。
*   **官方实践参考**：OpenAI 官方文档建议在处理复杂问题（如助教评估学生答案）时，让模型先独立得出解决方案，再与学生答案对比，最后提供提示而非直接给出正确答案。
*   **万能 Prompt 模板**：绝大部分场景可直接套用该结构：✅ 角色/技能/个性 ✅ 目标 ✅ 具体的上下文/关键词/负面词 ✅ 输入规则 ✅ 输出规则 ✅ 输入输出的例子。
*   **推荐开源资源**：可参考《Prompt 提示工程指南》、《Prompt 编写模式》以及《Awesome ChatGPT Prompts》等项目以获取更多灵感。

**3) 风险/不足**
*   **复杂推理出错风险**：对于复杂的推理过程，如果直接让 GPT 给出最终答案，很容易出现错误（需通过分步思考和打印中间步骤来规避）。

## 正文

看到有人发《全网都在找的 GPT 最权威的 160 条指令》，其实没人记得住 160 条 Prompt，也没有必要去记 160 条 Prompt！

跟 ChatGPT 交互，最重要是掌握 Prompt 的模板或者说结构，而不需要记住那么多 Prompt。

一、基础用法 直接输入你希望的指令，例如：

*   “请将以下内容翻译为简体中文：”
*   “请生成以下内容的摘要：”
*   “请给 10 岁的孩子解释什么是 ChatGPT”

基本上一大半的需求就直接可以满足，如果想效果更好一点，可以为 GPT 指定一个角色，这样效果会稍微好一点。例如： “你是一位专业的英文翻译，请翻译以下内容为简体中文：”

附：为什么要指定角色？[https://twitter.com/dotey/status/1671316445093933057](https://twitter.com/dotey/status/1671316445093933057)

二、进阶用法

提供一到多个示例，通过示例来让 GPT 按照你期望的格式输出，比如这个例子：

> 你是一个专业翻译，擅长翻译英文到中文，但是注意双引号内的英文不翻译。 例如：
>
>
> "Dichroic-Filter" - Separates light into different wavelengths to create a color separation effect.
>
>
> 翻译为：
>
>
> "Dichroic-Filter"- 将光分离成不同的波长以创建颜色分离效果。

[](https://baoyu.io/blog/prompt-engineering/how-to-write-high-quality-prompt#%E8%AF%B7%E7%BF%BB%E8%AF%91%E4%BB%A5%E4%B8%8B%E5%86%85%E5%AE%B9)请翻译以下内容：
-----------------------------------------------------------------------------------------------------------------------------------------------------

结合示例，基本上大部分问题都可以解决。

三、高级

链式思考（分多步做）+ 慢思考（打印每一步的结果）

对于一些复杂的推理过程，如果直接让 GPT 给出答案，是很容易出错的！最好是让 GPT 一步步来做，并且打印出中间步骤。在 OpenAI 官方文档里面，有一篇《[GPT 最佳实践](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-instruct-the-model-to-work-out-its-own-solution-before-rushing-to-a-conclusion)》 ，就举了一个很好的例子来给学生做助教，在收到学生的问题后，不直接给出正确或者错误的结果，而是：

> 按照这些步骤来回答用户的询问。
>
>
> 第 1 步--首先找出你自己的问题解决方案。不要依赖学生的解决方案，因为它可能是不正确的。在这一步中，你的所有工作都要用三重引号 (""") 括起来。
>
>
> 第 2 步--将你的解决方案与学生的解决方案进行比较，评估学生的解决方案是否正确。将你在这一步的所有工作都放在三重引号 (""") 内。
>
>
> 第 3 步--如果学生犯了错误，确定你可以在不泄露答案的情况下给学生什么提示。把你在这一步的所有工作都放在三重引号 (""") 内。
>
>
> 第 4 步--如果学生犯了一个错误，向学生提供上一步的提示（在三重引号之外）。不要写 "第 4 步--..."，而是写 "提示："。

当然你还可以在链式思考这个基础上加上几个示例，效果更佳。

最后，下面是一个模板，绝大部分场景都可以直接套用模板而不需要记住所谓 GPT 最权威的 160 条指令，这些指令都不会超出下面的范围。

✅ 角色、技能、个性 ✅ 目标 ✅ 具体的上下文、关键词、负面词 ✅ 输入规则 ✅ 输出规则 ✅ 输入输出的例子

有关上面的模板，可以

参考 @JefferyTatsuya [这条推文](https://twitter.com/JefferyTatsuya/status/1670204872711630848).

另外推荐几个 Prompt 开源项目参考：

*   [Prompt 提示工程指南](https://promptingguide.ai/zh)
*   [Prompt 编写模式] ([https://github.com/prompt-engineering/prompt-patterns](https://github.com/prompt-engineering/prompt-patterns))
*   [Awesome ChatGPT Prompts](https://github.com/PlexPt/awesome-chatgpt-prompts-zh)

![Image 1](https://baoyu.io/images/prompt-engineering/how-to-write-high-quality-prompt/chatgpt-cheetsheet.png)

![Image 2](https://baoyu.io/images/prompt-engineering/how-to-write-high-quality-prompt/image2.png)

![Image 3](https://baoyu.io/images/prompt-engineering/how-to-write-high-quality-prompt/image3.png)

## 关联主题

- [[00-元语/prompt]]
- [[00-元语/ChatGPT]]
- [[00-元语/llm]]
- [[00-元语/OpenAI]]
- [[00-元语/learning-resource]]
- [[00-元语/workflow]]
