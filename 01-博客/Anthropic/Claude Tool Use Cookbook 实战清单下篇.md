---
title: "Claude Tool Use Cookbook 实战清单下篇"

发布日期: "2026-02-17"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/tree/main/tool_use"
覆盖范围:
  - "`tool_use/programmatic_tool_calling_ptc.ipynb`"
  - "`tool_use/tool_search_with_embeddings.ipynb`"
  - "`tool_use/tool_search_alternate_approaches.ipynb`"
  - "`tool_use/automatic-context-compaction.ipynb`"
  - "`tool_use/memory_cookbook.ipynb`"
  - "`tool_use/vision_with_tools.ipynb`"
---

## 摘要

### 1) 一句话总结
本文档总结了 Claude Tool Use Cookbook 下篇的核心内容，聚焦于通过代码化调用、工具检索、上下文压缩、记忆管理和视觉结合等技术，解决复杂场景下 Agent 的可控性、可扩展性与可观测性，实现工具调用能力的生产化落地。

### 2) 关键要点
*   **核心目标**：解决工具数量增多、上下文变长、会话变复杂时的 Agent 管理问题，推动工具调用从“可用”走向“可上线”。
*   **代码化工具调用 (PTC)**：将工具调度逻辑从 Prompt 中外置为可维护的代码。
*   **工具检索 (Tool Search)**：通过 Embeddings 检索候选工具，解决企业内部“工具市场”（如上百个工具并存）的动态路由与大规模工具选择问题。
*   **上下文压缩 (Context Compaction)**：自动压缩上下文，降低 Token 消耗，确保在长周期多轮对话中保持关键信息而不超出上下文限制。
*   **记忆管理 (Memory)**：沉淀跨轮次经验，减少重复探索成本。
*   **视觉与工具结合 (Vision + Tools)**：实现多模态执行链路，将图像识别结果接入外部工具链并完成结构化结果回写。
*   **架构解耦建议**：将“工具选择”和“工具执行”分离，以便于独立进行调优和审计。
*   **工程实践建议**：为上下文压缩与记忆管理设计显式的触发条件（避免隐式魔法化），并对工具调用链增加日志与指标以复盘失败路径。

## 正文

下篇聚焦 Tool Use 的生产化能力：当工具数量变多、上下文变长、会话变复杂时，如何让 Agent 依然可控、可扩展、可观测。这组 notebook 是从“可用”走向“可上线”的关键补充。

### 能力主线
- Programmatic Tool Calling：把工具调度逻辑从 prompt 外置为可维护代码。
- Tool Search：通过 embeddings 检索候选工具，解决大规模工具库选择问题。
- Context Compaction：自动压缩上下文，降低 token 消耗并延长会话寿命。
- Memory 管理：沉淀跨轮次经验，减少重复探索成本。
- Vision + Tools：将图像理解结果接入外部工具链完成后续动作。

### 典型场景
- 企业内部“工具市场”：上百工具并存时的动态路由。
- 长周期任务：多轮对话中保持关键信息而不爆上下文。
- 多模态执行链路：视觉识别 + 工具调用 + 结构化结果回写。

### 示例代码
```python
import json

import anthropic
from utils.team_expense_api import get_custom_budget, get_expenses, get_team_members

client = anthropic.Anthropic()

tools = [
    {
        "name": "get_team_members",
        "description": "Returns a list of team members for a given department.",
        "input_schema": {
            "type": "object",
            "properties": {
                "department": {"type": "string"}
            },
            "required": ["department"],
        },
    },
]
```

### 使用建议
- 将“工具选择”和“工具执行”分离，便于独立调优和审计。
- 给 compaction 与 memory 设计显式触发条件，不要隐式魔法化。
- 对工具调用链增加日志与指标，便于复盘失败路径。

## 相关文档

- [[01-博客/Anthropic/Claude Tool Use Cookbook 实战清单上篇|Claude Tool Use Cookbook 实战清单上篇]]；关联理由：版本演进；说明：两篇同属 Tool Use Cookbook 的连续整理，上篇提供基础能力，下篇聚焦生产化能力扩展。
- [[01-博客/Anthropic/工具搜索工具|工具搜索工具]]；关联理由：解说；说明：下篇覆盖 tool search notebook，关联文提供官方文档级机制说明与接口细节。
- [[01-博客/Anthropic/在 Claude 开发者平台引入高级工具使用功能|在 Claude 开发者平台引入高级工具使用功能]]；关联理由：同一事件；说明：该文发布了 tool search 与 programmatic tool calling，和本文覆盖的下篇 notebook 能力一一对应。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/tool]]
- [[00-元语/sdk]]
- [[00-元语/context-optimization]]
- [[00-元语/context-database]]
- [[00-元语/memory]]
- [[00-元语/multimodal]]
- [[00-元语/observability]]
- [[00-元语/llmops]]
- [[00-元语/workflow]]
