---
title: "Claude 工程专题 Notebook Extended Thinking Finetuning 与可观测性"

发布日期: "2026-02-17"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks"
覆盖范围:
  - "`coding/prompting_for_frontend_aesthetics.ipynb`"
  - "`extended_thinking/extended_thinking.ipynb`"
  - "`extended_thinking/extended_thinking_with_tool_use.ipynb`"
  - "`finetuning/finetuning_on_bedrock.ipynb`"
  - "`observability/usage_cost_api.ipynb`"
  - "`tool_evaluation/tool_evaluation.ipynb`"
---

## 摘要

**1) 一句话摘要**
本文档总结了 Claude 官方关于扩展思考（推理预算）、工具评估、成本观测与模型微调的工程实践 Notebook，旨在帮助开发者将 Agent 从“能跑”提升至“可治理”的生产级状态。

**2) 核心要点**
*   **覆盖范围**：包含 6 个核心 Notebook，涉及前端提示词、扩展思考（含工具调用）、Bedrock 微调、成本 API 及工具评估。
*   **扩展思考 (Extended Thinking)**：在复杂任务中管理推理预算，代码示例中展示了为 `claude-sonnet-4-6` 模型设置 `MAX_TOKENS = 4000` 与 `THINKING_BUDGET_TOKENS = 2000` 的具体配置。
*   **解析推理过程**：通过 Anthropic SDK 遍历响应内容，可专门提取并输出 `block.type == "thinking"` 的推理过程数据。
*   **工具评估 (Tool Evaluation)**：提供量化工具调用质量与分类失败类型的方法。
*   **成本观测 (Usage & Cost API)**：通过 API 跟踪调用量与成本变化，建议按模型、场景、团队三个维度来监控成本趋势。
*   **模型微调 (Finetuning)**：支持在特定任务（如 Bedrock 环境）上进行定制化适配。
*   **前端提示词 (Frontend Prompting)**：提供专门面向前端代码生成与美学的提示策略。

**3) 风险与不足**
*   **推理预算配置风险**：不建议对推理预算进行全量统一配置，应按任务类别进行分级管理。
*   **过早微调风险**：存在未充分验证而过早进入模型训练阶段的风险，明确建议在微调前必须先排查和验证 Prompt 与数据问题。

## 正文

这组 notebook 关注工程上线最难的几件事：如何给推理过程预算、如何评估工具调用质量、如何观测成本、何时需要微调。它们共同目标是让 Agent 从“能跑”变成“可治理”。

### 能力主线
- Extended Thinking：在复杂任务中管理推理预算。
- Tool Evaluation：量化工具调用质量与失败类型。
- Usage & Cost API：跟踪调用量与成本变化。
- Finetuning：在特定任务上做定制化适配。
- Frontend Prompting：面向前端代码生成的提示策略。

### 示例代码
```python
import anthropic
import os

MODEL_NAME = "claude-sonnet-4-6"
MAX_TOKENS = 4000
THINKING_BUDGET_TOKENS = 2000

client = anthropic.Anthropic()

def print_thinking_response(response):
    for block in response.content:
        if block.type == "thinking":
            print(block.thinking[:500])
```

### 使用建议
- 推理预算应按任务类别分级，不建议全量统一配置。
- 成本监控要分模型、分场景、分团队维度看趋势。
- 微调前先验证 prompt 与数据问题，避免过早进入训练阶段。

## 相关文档

- [[01-博客/Anthropic/Claude Tool Use Cookbook 实战清单下篇|Claude Tool Use Cookbook 实战清单下篇]]；关联理由：延伸思考；说明：该文将本文提到的工具治理与可观测诉求延展到工具检索、上下文压缩和记忆管理的生产化实践。
- [[01-博客/Anthropic/Claude Agent SDK Notebook 实战进阶|Claude Agent SDK Notebook 实战进阶]]；关联理由：上下游；说明：本文给出扩展思考、评估与成本治理框架，该文对应这些能力在 Agent SDK 编排与观测中的实现落地。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/sdk]]
- [[00-元语/observability]]
- [[00-元语/evals]]
- [[00-元语/prompt]]
- [[00-元语/tool]]
- [[00-元语/llmops]]
