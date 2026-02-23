---
title: "Claude 第三方集成 Cookbook 检索与知识工具"

发布日期: "2025-11-27"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/tree/main/third_party"
覆盖范围:
  - "`third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb`"
  - "`third_party/LlamaIndex/Multi_Document_Agents.ipynb`"
  - "`third_party/LlamaIndex/Router_Query_Engine.ipynb`"
  - "`third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb`"
  - "`third_party/LlamaIndex/ReAct_Agent.ipynb`"
  - "`third_party/Pinecone/rag_using_pinecone.ipynb`"
  - "`third_party/Pinecone/claude_3_rag_agent.ipynb`"
  - "`third_party/MongoDB/rag_using_mongodb.ipynb`"
  - "`third_party/Wikipedia/wikipedia-search-cookbook.ipynb`"
  - "`third_party/WolframAlpha/using_llm_api.ipynb`"
---

## 摘要

**一句话总结**
本文档总结了 Claude 与 LlamaIndex、Pinecone、MongoDB 等第三方检索与知识工具的集成方案，旨在将模型从“凭记忆回答”升级为“基于可验证知识回答”的系统。

**关键点**
*   **核心目标**：通过向量检索、文档路由、分解式问答和外部知识 API 工具化，将 Claude 接入外部知识系统。
*   **LlamaIndex 集成**：支持快速搭建基础 RAG、多文档代理（Multi-Document Agents）、路由查询引擎（Router）、子问题查询引擎（SubQuestion）及 ReAct 代理。
*   **生产数据层接入**：通过 Pinecone 和 MongoDB 实现生产环境下的语义检索与 RAG 代理构建。
*   **外部工具引入**：支持将 Wikipedia（开放知识）与 WolframAlpha（计算引擎）作为 API 工具供模型调用。
*   **动态路由策略**：可利用 ReAct、Router 或 SubQuestion 模式，根据具体问题类型动态分配不同的检索策略。
*   **代码实践**：示例展示了使用 LlamaIndex 加载本地目录文档、构建向量索引，并执行 Top-3 相似度查询的标准流程。
*   **架构建议**：在决定检索层复杂度之前，应优先定义系统“可接受的错误类型”；路由策略应优先保证可解释性。

**风险/不足**
*   **黑箱决策风险**：若路由策略缺乏可解释性，会导致决策过程难以回溯。
*   **成本失控风险**：外部 API 工具调用若未进行配额隔离，存在单个请求无限放大导致成本超支的风险。

## 正文

该分组聚焦“把 Claude 接入外部知识系统”这一主问题：向量检索、文档路由、分解式问答、外部知识 API 工具化。它的共同价值是把模型从“凭记忆回答”升级为“基于可验证知识回答”。

### 能力主线
- LlamaIndex：快速搭建索引、查询引擎与多文档代理。
- Pinecone / MongoDB：将语义检索接入生产数据层。
- Wikipedia / WolframAlpha：把开放知识与计算引擎作为工具引入。
- ReAct / Router / SubQuestion：按问题类型动态路由不同检索策略。

### 示例代码
```python
from llama_index.core import (
    SimpleDirectoryReader,
    VectorStoreIndex,
)

documents = SimpleDirectoryReader("./data/paul_graham").load_data()
index = VectorStoreIndex.from_documents(documents)
query_engine = index.as_query_engine(similarity_top_k=3)
response = query_engine.query("What did author do growing up?")
```

### 使用建议
- 先定义“可接受的错误类型”，再决定检索层复杂度。
- 路由策略应优先可解释，避免黑箱决策难以回溯。
- 外部 API 工具调用要配额隔离，避免单个请求放大成本。

## 相关文档

- [[01-博客/Anthropic/Voyage AI Embeddings 接入与检索实践|Voyage AI Embeddings 接入与检索实践]]；关联理由：上下游；说明：该文提供 embeddings 侧实现细节，是本文检索链路的向量化上游。
- [[01-博客/Anthropic/Deepgram 与 LlamaIndex 集成入口|Deepgram 与 LlamaIndex 集成入口]]；关联理由：引用；说明：该文中的 LlamaIndex README 条目直接列出本文覆盖的多种检索 notebook，可作为范围核对来源。
- [[01-博客/Anthropic/Claude 第三方集成 Cookbook 语音与多模态应用|Claude 第三方集成 Cookbook 语音与多模态应用]]；关联理由：同一事件；说明：两文同属 Claude Cookbooks third_party 分组，分别覆盖检索链路与语音多模态链路。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/rag]]
- [[00-元语/context-database]]
- [[00-元语/Agent]]
- [[00-元语/react]]
- [[00-元语/llm]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
