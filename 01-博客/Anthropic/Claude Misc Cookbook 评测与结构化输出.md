---
title: "Claude Misc Cookbook 评测与结构化输出"

发布日期: "2026-02-20"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/tree/main/misc"
覆盖范围:
  - "`misc/building_evals.ipynb`"
  - "`misc/generate_test_cases.ipynb`"
  - "`misc/building_moderation_filter.ipynb`"
  - "`misc/how_to_enable_json_mode.ipynb`"
  - "`misc/how_to_make_sql_queries.ipynb`"
  - "`misc/using_citations.ipynb`"
  - "`misc/pdf_upload_summarization.ipynb`"
  - "`misc/read_web_pages_with_haiku.ipynb`"
---

## 摘要

### 1) 一句话摘要
该文档总结了 Claude Misc Cookbook 中关于评测集构建、结构化输出（JSON/SQL）与引用追踪的实践指南，旨在提升模型输出的可验证性与工程集成度。

### 2) 关键要点
*   **核心目标**：将模型输出转化为可工程化消费的数据，确保输出质量可验证且结果可直接集成。
*   **覆盖范围**：包含评测构建、测试用例生成、内容过滤、JSON/SQL输出、引用追踪、PDF摘要及网页读取等 8 个具体的 Notebook。
*   **评测机制 (Evals)**：采用自动评分与人工复核相结合的方式来评估 Prompt 的实际效果。
*   **样本生成 (Synthetic Cases)**：通过自动生成测试样本，补齐边缘输入的覆盖率。
*   **内容安全 (Moderation)**：支持为业务应用添加可配置的内容过滤层。
*   **结构化输出**：通过 JSON 模式和 SQL 生成，提升数据的可用性、可追踪性与可信度。
*   **接口设计建议**：结构化输出接口应包含版本字段，以便于后续的兼容与升级。
*   **引用评估建议**：在引用场景中，必须明确区分“来源可追溯”与“结论正确”这两个不同的维度。

### 3) 风险/缺口
*   **提示词优化风险**：若未在编写提示词前定义好评测目标，可能出现“模型看起来更聪明但实际指标下降”的风险。
*   **数据解析风险**：模型输出存在解析失败与字段漂移的风险（文档建议通过 JSON Mode 来降低此风险）。

## 正文

这组 notebook 关注“输出质量可验证”与“结果可直接集成”：从评测集构建、JSON 输出约束到 SQL 生成与引用追踪，目标都是把模型输出变成可工程化消费的数据。

### 能力主线
- Evals：通过自动评分与人工复核结合评估 prompt 效果。
- Synthetic Cases：自动生成测试样本，补齐边缘输入覆盖。
- Moderation：为业务添加可配置内容过滤层。
- JSON Mode：降低解析失败与字段漂移。
- SQL 与引用：提升可追踪性与可信度。

### 示例代码
```python
def build_input_prompt(animal_statement):
    user_content = f"""You will be provided a statement about an animal and your job is to determine how many legs that animal has.

    Here is the animal statment.
    <animal_statement>{animal_statement}</animal_statment>

    How many legs does the animal have? Return just the number of legs as an integer and nothing else."""

    messages = [{"role": "user", "content": user_content}]
    return messages
```

### 使用建议
- 先定义评测目标再写提示词，避免“模型看起来更聪明但指标下降”。
- 结构化输出接口要有版本字段，便于后续兼容升级。
- 引用场景中要区分“来源可追溯”与“结论正确”两个维度。

## 相关文档

- [[01-博客/Anthropic/Claude Misc Cookbook 上下文与缓存优化|Claude Misc Cookbook 上下文与缓存优化]]；关联理由：上下游；说明：两文同属 Claude Cookbooks 的 `misc` 实践，前者优化上下文与成本，本文补齐评测与结构化输出的质量控制环节。
- [[01-博客/Anthropic/Claude Capabilities Notebook 实战补充|Claude Capabilities Notebook 实战补充]]；关联理由：观点一致；说明：两文都要求以评测驱动落地，并在结构化输出与 Text-to-SQL 场景强调可验证的工程约束。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/evals]]
- [[00-元语/data-pipeline]]
- [[00-元语/llm]]
- [[00-元语/protocol]]
- [[00-元语/prompt]]
- [[00-元语/security]]
- [[00-元语/workflow]]
