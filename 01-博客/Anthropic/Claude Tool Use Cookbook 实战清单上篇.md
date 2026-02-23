---
title: "Claude Tool Use Cookbook 实战清单上篇"

发布日期: "2026-02-17"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/tree/main/tool_use"
覆盖范围:
  - "`tool_use/calculator_tool.ipynb`"
  - "`tool_use/customer_service_agent.ipynb`"
  - "`tool_use/tool_choice.ipynb`"
  - "`tool_use/tool_use_with_pydantic.ipynb`"
  - "`tool_use/extracting_structured_json.ipynb`"
  - "`tool_use/parallel_tools.ipynb`"
---

## 摘要

**1) 一句话总结**
本文档总结了 Claude Tool Use Cookbook 的核心入门路径，涵盖工具定义、调用策略、结构化输出与并行执行，旨在帮助开发者将单轮问答升级为行为可控的 Agent。

**2) 核心要点**
*   **覆盖范围**：包含计算器、客服 Agent、工具选择、Pydantic 结合、JSON 提取及并行工具调用等 6 个核心实战 Notebook。
*   **工具定义**：通过明确的 `name`、`description` 和 `input_schema` 严格约束模型可调用的动作。
*   **调用策略**：利用 `tool_choice` 参数，支持在自动选择、强制调用和禁用调用之间灵活切换。
*   **结构化输出**：结合 Pydantic 或 JSON schema 进行信息抽取，有效降低后处理解析成本。
*   **并行执行**：支持将多个独立查询拆分为并行工具调用，以缩短端到端响应时间。
*   **典型场景**：适用于高精度计算与规则查表、客服与业务流程（系统读写）、以及将自由文本稳定转化为可落库的结构化对象。
*   **开发建议**：工具 schema 的设计应从小且稳定起步，再逐步扩展参数和工具数量。

**3) 风险与缺口**
*   **单点阻塞风险**：并行工具调用时存在单点阻塞的风险，必须配合超时与失败回退策略。
*   **格式输出风险**：不能完全依赖模型“尽量输出正确格式”，若缺乏对关键字段的强校验，可能导致解析失败。

## 正文

本篇聚焦 Tool Use 的核心入门路径：先定义工具，再约束调用策略，最后实现结构化输出与并行调用。相比只看 API 参数，这组 notebook 更强调“模型行为可控性”，适合把单轮问答升级为可执行 Agent。

### 能力主线
- 工具定义：以明确的 `name`、`description`、`input_schema` 约束模型可调用动作。
- 调用策略：通过 `tool_choice` 在自动选择、强制调用、禁用调用之间切换。
- 结构化输出：结合 Pydantic 或 JSON schema，降低后处理解析成本。
- 并行执行：将多个独立查询拆分为并行工具调用，减少端到端响应时间。

### 典型场景
- 计算和查表类任务：把高精度计算、规则查询交给工具层。
- 客服与业务流程：模型负责理解与决策，工具负责系统读写。
- 信息抽取：把自由文本稳定转成可落库的结构化对象。

### 示例代码
```python
def make_query_and_print_result(messages, tools=None):
    response = client.messages.create(
        model=MODEL_NAME,
        messages=messages,
        max_tokens=1000,
        tool_choice={"type": "auto"},
        tools=tools or [weather_tool, time_tool],
    )

    for block in response.content:
        match block.type:
            case "text":
                print(block.text)
            case "tool_use":
                print(f"Tool: {block.name}({block.input})")

    return response
```

### 使用建议
- 先把工具 schema 做小做稳，再逐步扩展参数和工具数量。
- 对关键字段做强校验，不要只依赖模型“尽量输出正确格式”。
- 并行工具调用要配合超时与失败回退策略，避免单点阻塞。

## 相关文档

- [[01-博客/Anthropic/Claude Tool Use Cookbook 实战清单下篇|Claude Tool Use Cookbook 实战清单下篇]]；关联理由：版本演进；说明：下篇延续上篇的工具调用基础，补充大规模工具检索与生产化能力。
- [[01-博客/Anthropic/在 Claude 开发者平台引入高级工具使用功能|在 Claude 开发者平台引入高级工具使用功能]]；关联理由：延伸思考；说明：本文覆盖基础工具调用范式，关联文进一步展开大规模工具库下的高级能力与取舍。
- [[01-博客/Anthropic/工具搜索工具|工具搜索工具]]；关联理由：上下游；说明：本文先建立通用 Tool Use 基础，关联文对应工具规模扩大后的按需检索能力。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/llm]]
- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/sdk]]
- [[00-元语/workflow]]
