---
title: "Claude Agent SDK Notebook 实战进阶"

发布日期: "2026-02-17"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/tree/main/claude_agent_sdk"
覆盖范围:
  - "`claude_agent_sdk/00_The_one_liner_research_agent.ipynb`"
  - "`claude_agent_sdk/01_The_chief_of_staff_agent.ipynb`"
  - "`claude_agent_sdk/02_The_observability_agent.ipynb`"
---

## 摘要

**1) 一句话总结**
本文档基于 Claude Cookbooks，展示了使用 Claude Agent SDK 从构建极简检索智能体到实现多角色协同与可观测性的完整演进路线及最佳实践。

**2) 核心要点**
*   **演进路线**：教程涵盖三个核心阶段，从“最小可运行 Agent”逐步进阶到“多角色协同 + 可观测”的复杂系统。
*   **实操细节**：相比纯文本说明，Notebook 提供了具体的调用循环、工具约束（如 `allowed_tools=["WebSearch"]`）和输出追踪的代码示例。
*   **极简研究智能体（One-liner Research Agent）**：展示如何使用最少代码（通过 `query` 和 `ClaudeAgentOptions`）完成一个可用的检索代理。
*   **幕僚长智能体（Chief of Staff Agent）**：重点展示多角色协同、记忆管理与命令编排能力。
*   **可观测性智能体（Observability Agent）**：演示如何将 Agent 的执行链路接入观测系统以便于排障。
*   **开发建议**：建议从单 Agent 模板起步，完成验证后再增加角色分工。
*   **架构原则**：多 Agent 的角色拆分依据应是“职责边界”，而不是模型的数量。
*   **观测指标**：可观测性建设需要与业务指标强关联，避免仅记录底层技术日志。

## 正文

这组 notebook 给出从“最小可运行 Agent”到“多角色协同 + 可观测”的完整演进路线。相比只读 README，notebook 展示了更具体的调用循环、工具约束和输出追踪方式。

### 能力主线
- One-liner Research Agent：用最小代码完成可用检索代理。
- Chief of Staff Agent：多角色协同、记忆与命令编排。
- Observability Agent：把执行链路接入观测系统进行排障。

### 示例代码
```python
from claude_agent_sdk import ClaudeAgentOptions, query

messages = []
async for msg in query(
    prompt="Research the latest trends in AI agents and give me a brief summary and relevant citiations links.",
    options=ClaudeAgentOptions(model=MODEL, allowed_tools=["WebSearch"]),
):
    print_activity(msg)
    messages.append(msg)
```

### 使用建议
- 从单 Agent 模板起步，验证后再增加角色分工。
- 角色拆分依据应是职责边界，而不是模型数量。
- 可观测性要与业务指标关联，避免只记录技术日志。

## 相关文档

- [[01-博客/Anthropic/使用 Claude Agent SDK 构建强大智能体教程|使用 Claude Agent SDK 构建强大智能体教程]]；关联理由：解说；说明：该文对应同一套 Claude Agent SDK 教程总览，补充了本篇三份 Notebook 的环境准备与能力边界。
- [[01-博客/Anthropic/Claude Agent Workflow Notebook 实战|Claude Agent Workflow Notebook 实战]]；关联理由：上下游；说明：该文先给出通用多 Agent 工作流模板，本篇再落到 Claude Agent SDK 的工程化实战实现。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/memory]]
- [[00-元语/sdk]]
- [[00-元语/observability]]
- [[00-元语/llmops]]
- [[00-元语/workflow]]
