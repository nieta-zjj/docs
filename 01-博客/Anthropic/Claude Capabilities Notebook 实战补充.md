---
title: "Claude Capabilities Notebook 实战补充"

发布日期: "2026-02-17"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/tree/main/capabilities"
覆盖范围:
  - "`capabilities/classification/guide.ipynb`"
  - "`capabilities/contextual-embeddings/guide.ipynb`"
  - "`capabilities/retrieval_augmented_generation/guide.ipynb`"
  - "`capabilities/summarization/guide.ipynb`"
  - "`capabilities/text_to_sql/guide.ipynb`"
---

## 摘要

**一句话摘要**
本文档是对 Claude Capabilities Notebook 的实战补充，通过可运行的代码示例详细展示了分类、上下文嵌入、RAG、摘要和 Text-to-SQL 等核心能力的工程化实现与评测流程。

**关键要点**
*   **定位与来源**：内容源自 `anthropics/claude-cookbooks` 仓库，相比基础 README，本指南更侧重于提供包含数据准备、评测与调用流程的“可运行示例”。
*   **覆盖范围**：涵盖分类（Classification）、上下文嵌入（Contextual Embeddings）、检索增强生成（RAG）、摘要（Summarization）和 Text-to-SQL 五个核心模块的 `guide.ipynb`。
*   **分类能力**：展示了从数据处理到评估指标计算的完整工程闭环。
*   **上下文嵌入**：通过引入上下文增强技术来有效提升检索质量。
*   **RAG 流程**：实现了分层构建索引与检索，并最终进行生成融合的步骤。
*   **摘要优化**：介绍了从基础摘要生成到多样本（Few-shot）提示词优化的具体方法。
*   **Text-to-SQL**：演示了从自然语言生成 SQL 查询并进行结果验证的完整过程。
*   **评测代码示例**：提供了具体的检索评估函数（`evaluate_retrieval`），通过比对金标准片段（golden chunk）来计算检索平均得分。
*   **最佳实践建议**：建议同一能力先在小数据集上验证再扩展至真实业务数据，同时要求评测脚本与生产逻辑必须复用相同的预处理规则。

**风险与缺口**
*   在应用 Text-to-SQL 能力时，存在生成高风险查询的风险，必须进行额外的数据库权限隔离。

## 正文

相比 capabilities 目录中的 README，本组 guide notebook 更偏“可运行示例”。它把分类、RAG、摘要和 Text-to-SQL 的工程步骤落成了具体数据准备、评测与调用流程。

### 能力主线
- Classification：从数据到评估指标的闭环。
- Contextual Embeddings：通过上下文增强提高检索质量。
- RAG：分层构建索引与检索、再做生成融合。
- Summarization：从基础摘要到多样本提示优化。
- Text-to-SQL：自然语言到 SQL 查询与结果验证。

### 示例代码
```python
def evaluate_retrieval(
    queries: list[dict[str, Any]], retrieval_function: Callable, db, k: int = 20
) -> dict[str, float]:
    total_score = 0
    total_queries = len(queries)

    for query_item in tqdm(queries, desc="Evaluating retrieval"):
        query = query_item["query"]
        golden_chunk_uuids = query_item["golden_chunk_uuids"]
        # ...中间省略：检索并比对金标准片段

    return {"avg_score": total_score / max(total_queries, 1)}
```

### 使用建议
- 同一能力先在小数据集验证，再扩展到真实业务数据。
- 评测脚本与生产逻辑要复用同一预处理规则。
- Text-to-SQL 需要额外权限隔离，避免生成高风险查询。

## 相关文档

- [[01-博客/Anthropic/Claude Capabilities 指南与 Promptfoo 评测实践|Claude Capabilities 指南与 Promptfoo 评测实践]]；关联理由：解说；说明：两文都围绕 Capabilities 目录，前者给出总览与评测框架，后者补足可运行 Notebook 细节。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/llm]]
- [[00-元语/github]]
- [[00-元语/rag]]
- [[00-元语/evals]]
- [[00-元语/benchmark]]
- [[00-元语/prompt]]
