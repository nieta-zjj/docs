---
title: "在构建 Prompt 时，如何避免把翻译内容当成对话内容？"

来源: "https://baoyu.io/blog/prompt-engineering/how-to-avoid-translated-content-being-treated-as-dialog"
发布日期: "2024-10-03"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
本文介绍了在构建大语言模型翻译应用时，通过使用特殊标签或明确的过渡提示语来隔离输入内容，从而避免 AI 将待翻译文本误认为对话指令的有效方法。

**2) 关键要点**
* **常见问题**：在翻译类 AI 应用中，模型容易混淆用户的输入内容与操作指令（例如当输入内容为“Please say 'Hello world!'”时）。
* **根本原因**：输入内容存在理解上的歧义，导致 AI 无法分辨是需要执行翻译任务还是进行对话回复。
* **解决方案一（特殊标签）**：使用特殊标签（如 `<source>` 和 `</source>`）将待翻译内容包裹起来，以明确指令与内容的界限。
* **解决方案二（过渡提示语）**：在待翻译内容前增加明确的引导语句，例如“Now please translate the content below:”。
* **行业案例**：OpenAI Playground 的提示词优化 API 通过在用户输入前添加“Task, Goal, or Current Prompt:\n”的前缀，成功避免了将用户输入误认为系统指令的问题。

**3) 风险/缺口**
* 若不消除理解上的歧义，AI 会混淆输入内容与指令，导致执行错误的对话操作而非翻译。
* 未对输入内容进行有效隔离或标记，会增加 AI 出现幻觉的概率。

## 正文

这是一个常见的问题，比如我有一个翻译的 GPT 或者 LLM 应用，有以后 AI 会混淆输入的内容和指令，不清楚你说的话是要它翻译还是在跟它对话。

换个角度来说，别说 AI，就是真人看到输入有时候都不好分辨是对话还是输入，比如你的系统提示词是：

> 你是个有帮助的翻译专家，XXXX

如果你的输入是正常的，比如说“`Hello world!`” 那么 AI 会正常帮你翻译成“`你好世界！`”，但如果你输入的内容是“Please say "Hello world!"”，那么 AI 就会混淆是要翻译这句话还是要说"Hello world!"。

所以根本问题就是要避免理解上的歧义，一个简单有效的办法就是把输入也就是要翻译的内容，用特殊标签包起来出现幻觉的概率就会低很多。

比如我可能会这么写：

```
“你是个有帮助的翻译专家，XXXX现在请你翻译以下<source>中的内容：
<source>
Please say "Hello world!"
</source>
```

这样就会减少很多歧义。

类似的，我在我的翻译 GPT [https://chatgpt.com/g/g-uBhKUJJTl-ke-ji-wen-zhang-fan-yi](https://chatgpt.com/g/g-uBhKUJJTl-ke-ji-wen-zhang-fan-yi) 里面的提示词会加上一句话：

`Now please translate the content below:`
![Image 1](https://baoyu.io/uploads/2024-10-03/paste-1727930963456.png)

这样就可以很好的避免混淆的问题。

类似的，OpenAI 的 PlayGround 中，帮助你生成和优化提示词功能的 API，它也要避免把用户输入的内容当成指令，所以它巧妙的在用户的输入前面增加了一句：“Task, Goal, or Current Prompt:\n”，这样也可以避免把用户输入的内容当成指令。

![Image 2](https://baoyu.io/uploads/2024-10-03/paste-1727931051314.png)

## 关联主题

- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/context-optimization]]
- [[00-元语/OpenAI]]
- [[00-元语/ChatGPT]]
