---
title: "Deepgram 与 LlamaIndex 集成入口"

发布日期: "2025-09-16"
作者: "Anthropic"
来源仓库: "anthropics/claude-cookbooks"
原文链接:
  - "https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Deepgram/README.md"
  - "https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/README.md"
译注: "原文为英文仓库文档，本稿为中文整理版。"
---

## 摘要

**1) 一句话总结**
本文档介绍了 Claude Cookbooks 中关于 Deepgram（语音与语言智能 API）和 LlamaIndex（LLM 数据框架）的集成指南、示例 Notebooks 以及相关开发者资源。

**2) 关键要点**
*   **Deepgram 功能定位**：一家提供语音转文本、文本转语音、文本转文本及语言智能功能的基础 AI 公司。
*   **Deepgram 示例**：提供了一个 `prerecorded_audio.ipynb` Notebook，用于演示如何转录预先录制的音频。
*   **Deepgram 开发资源**：支持 Python、Node、.NET 和 Go SDK，开发者可通过其控制台获取免费 API 密钥和额度以快速入门。
*   **LlamaIndex 功能定位**：一个专为需要上下文增强的 LLM（大语言模型）应用程序设计的数据框架。
*   **LlamaIndex 示例概览**：提供了 6 个结合 Anthropic 模型使用的 Cookbook Notebooks，涵盖从基础到高级的 LLM 应用场景。
*   **RAG 与查询引擎**：包含基础 RAG 流水线构建 (`Basic_RAG`)、查询路由 (`Router_Query_Engine`) 以及跨多文档的复杂子查询 (`SubQuestion_Query_Engine`)。
*   **代理与多模态**：包含使用 ReAct 代理调用工具 (`ReAct_Agent`)、处理海量文档的高效 RAG (`Multi_Document_Agents`) 以及多模态应用构建 (`Multi_Modal`)。
*   **社区与支持**：两个项目均提供了官方文档链接，并拥有活跃的社区支持渠道（如 Discord、GitHub Discussions 等）。

## 正文

### 来源文档：`third_party/Deepgram/README.md`

# Deepgram <> Claude Cookbooks

[Deepgram](https://deepgram.com/) 是一家基础人工智能公司，提供语音转文本、文本转语音、文本转文本以及语言智能功能，帮助您将数据转化为人类或机器可读且可操作的形式。

* 预录制音频 Notebook（`./prerecorded_audio.ipynb`） 允许您使用 Deepgram 转录预先录制好的音频。

# 了解更多关于 Deepgram 的信息

以下是我们最推荐的一些入门资源：
- [API Playground](https://playground.deepgram.com/)
- [入门应用](https://github.com/deepgram-starters)
- [Python SDK](https://github.com/deepgram/deepgram-python-sdk)
- [Node SDK](https://github.com/deepgram/deepgram-node-sdk)
- [.NET SDK](https://github.com/deepgram/deepgram-dotnet-sdk)
- [Go SDK](https://github.com/deepgram/deepgram-go-sdk)
- [官方文档](https://developers.deepgram.com/documentation/)
- [博客文章](https://deepgram.com/learn)

# 我们的社区

您有任何问题、建议，或者想与我们交流吗？请前往我们的 [Github Discussions](https://github.com/orgs/deepgram/discussions) 或加入我们的 [Discord](https://discord.com/invite/xWRaCDBtW4)。

# 快速入门

如果您准备好开始使用 Deepgram，请前往 [Deepgram 控制台](https://console.deepgram.com/signup) 获取免费的 API 密钥和免费额度，并开始使用我们强大的语音、文本和智能 [API](https://developers.deepgram.com/reference/) 进行开发。

### 来源文档：`third_party/LlamaIndex/README.md`

# LlamaIndex <> Claude Cookbooks

[LlamaIndex](https://github.com/run-llama/llama_index) 是一个专为基于 LLM（大语言模型）的应用程序设计的数据框架，这些应用程序可从上下文增强中获益。

在这里，我们提供了使用 Anthropic 和 LlamaIndex 构建 LLM 应用程序的 Cookbooks。

1. `Basic_RAG_With_LlamaIndex.ipynb` - 帮助您使用 LlamaIndex 构建 RAG（检索增强生成）流水线的 Notebook。
2. `Router_Query_Engine.ipynb` - 帮助您使用 `RouterQueryEngine` 将用户查询路由到不同索引的 Notebook。
3. `SubQuestion_Query_Engine` - 帮助您使用 `SubQuestionQueryEngine` 回答跨越多个文档的复杂用户查询的 Notebook。
4. `ReAct_Agent.ipynb` - 帮助您使用 `ReActAgent` 来调用工具（Tools）和查询引擎工具（QueryEngine Tools）的 Notebook。
5.  `Multi_Document_Agents.ipynb` - 帮助您为大量文档构建高效 RAG 流水线的 Notebook。
6.  `Multi_Modal.ipynb` - 帮助您使用 LlamaIndex 构建多模态（Multi-Modal）应用程序的 Notebook。

[官方文档](https://docs.llamaindex.ai/en/stable/)
[Discord](https://discord.gg/dGcwcsnxhU)
[Twitter](https://twitter.com/llama_index)
[LinkedIn](https://www.linkedin.com/company/llamaindex/)

## 相关文档

- [[01-博客/Anthropic/ElevenLabs 与 Claude 低延迟语音助手实践|ElevenLabs 与 Claude 低延迟语音助手实践]]；关联理由：同一事件；说明：两篇都来自 Claude Cookbooks 的 third_party 集成目录，分别覆盖语音场景中的不同服务实现。
- [[01-博客/Anthropic/Voyage AI Embeddings 接入与检索实践|Voyage AI Embeddings 接入与检索实践]]；关联理由：上下游；说明：本篇 LlamaIndex 的 RAG 查询能力通常以上游 Embeddings 质量为基础，该文对应向量化环节。
- [[01-博客/Anthropic/Claude Cookbooks 项目总览与能力地图|Claude Cookbooks 项目总览与能力地图]]；关联理由：引用；说明：总览文档将 Deepgram 与 LlamaIndex 列在 third_party 集成中，本篇是对应条目的下钻入口。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/github]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/tool]]
- [[00-元语/audio]]
- [[00-元语/asr]]
- [[00-元语/tts]]
- [[00-元语/multimodal]]
- [[00-元语/sdk]]
