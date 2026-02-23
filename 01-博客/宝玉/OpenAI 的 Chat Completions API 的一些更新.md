---
title: "OpenAI 的 Chat Completions API 的一些更新"

来源: "https://baoyu.io/blog/openai/chat-completion-api-changes"
发布日期: "2023-12-15"
作者: "宝玉"
---

## 摘要

1) 一句话总结
本文介绍了 OpenAI Chat Completions API 的近期更新，重点解析了用于查看 Token 生成概率的 `logprobs` 和 `top_logprobs` 参数，并梳理了 `seed`、`n` 参数的用法及工具调用参数的重命名。

2) 关键点
- **新增 `logprobs` 参数**：默认值为 false，设为 true 时，API 返回结果中会包含每个生成 Token 的概率，有助于直观调试 Prompt。
- **新增 `top_logprobs` 参数**：需配合 `logprobs=true` 使用，取值范围为 0-5，用于在返回结果中显示每次生成时最有可能的候选 Token 及其概率。
- **Token 组合逻辑**：返回的候选 Token 可能带有前导空格作为独立词，也可能不带空格以便与前文拼接成新词（如 "How" 和 "dy" 组合成 "Howdy"）。
- **`n` 参数**：支持一次性生成并返回多个不同的结果，适用于需要让用户从多个选项中挑选最佳结果的场景。
- **`seed` 参数**：传入相同的 seed 及其他参数，可使 API 每次的生成结果尽可能保持一致（类似图像生成中的 seed）。
- **参数重命名**：原 `functions` 和 `function_call` 参数已被弃用，分别更名为 `tools` 和 `tool_choice`，参数结构无明显变化。

3) 风险/不足
- 新增的 `logprobs` 和 `top_logprobs` 参数对普通开发者而言实用性有限，主要适用于专业的 Prompt 工程师。

## 正文

OpenAI 的 Chat Completions API 新增了 logprobs，那么这个参数是做什么用的呢？

我们知道 LLM（大语言模型）是概率模型，会根据 Token 出现的概率来决定下一个 Token，但我们通常是无法知道 LLM 在生成的时候，各个 Token 的概率是什么样的，只能看到最终的结果，所以在调试 Prompt 的时候无法直观的看到 Prompt 和参数的设置对生成结果的影响。

新增的 logprobs 参数，默认是 false 的，如果你设置成 true，那么在返回的结果中，会多一个 logprobs 的项，里面会列出来每一个 Token 在生成时的概率。

![Image 1](https://baoyu.io/images/openai/chat-completion-api-changes/logprobs.webp)

但这个只是让你看到一种结果。如果你仔细看文档，还可以看到新增了一个 top_logprobs 参数，需要同时将 logprobs 设置为 true 才能生效，这个参数是一个 0-5 之间的数字，意味着在返回结果的时候，会同时其他显示在生成时，当时最有可能的候选 Token 有哪些，以及各自的概率是多少。

![Image 2](https://baoyu.io/images/openai/chat-completion-api-changes/top_logprobs.webp)

比如我将 top_logprobs 设置成 5，就可以看到在生成第一个词的时候，最有可能得 5 个 Token 是：“How”、“Hello”、“I”、“Great”和“Thank”。

当第一个词选定“How”后，生成第二个词是最有可能的 5 个词分别是：“can”，“may”， “May”， “Can”， “dy”。

注意前 4 个前面都有空格，而第 5 个没有空格，也就是每一次的 Token 既可能是个独立的单词也可能和前面的组成一个新的单词，比如第 5 个“dy”就可以和前面的“How”组成一个新词“Howdy”。

不过对于普通开发者来说，感觉并没有太大的用处，只有真正的 Prompt Engineer 才可能会用的上。

另外还有两个参数我以前没注意到，不确认是不是新增的：

n 参数，可以同时返回多个生成结果。比如有时候你可以一次性生成几个不同的结果，让用户选择一个他们觉得最好的结果。

![Image 3](https://baoyu.io/images/openai/chat-completion-api-changes/choices-n.webp)

还有一个就是上次开发者大会说到的 seed 参数，这个类似于用 Stable Diffusion 画图的时候用到的 seed 参数，当你每次传入相同的 seed 和其他相同参数时，每次返回的结果会尽可能的保持一致。

还有两个变化也要注意：

functions 参数和 function_call 已经改名字了，分别对应的是 tools 参数和 tool_choice，参数结果似乎没明显变化。

![Image 4](https://baoyu.io/images/openai/chat-completion-api-changes/functions-deprecated.webp)

更多详细信息请参见官方文档：platform.openai.com/docs/api-reference/chat/create

也欢迎评论补充：你觉得这两个新增的参数 logprobs 和 top_logprobs 可以有哪些实用的应用场景？

## 关联主题

- [[00-元语/OpenAI]]
- [[00-元语/llm]]
- [[00-元语/prompt]]
- [[00-元语/protocol]]
- [[00-元语/tool]]
