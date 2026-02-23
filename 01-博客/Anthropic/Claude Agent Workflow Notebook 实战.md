---
title: "Claude Agent Workflow Notebook 实战"

发布日期: "2026-02-17"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/tree/main/patterns/agents"
覆盖范围:
  - "`patterns/agents/basic_workflows.ipynb`"
  - "`patterns/agents/evaluator_optimizer.ipynb`"
  - "`patterns/agents/orchestrator_workers.ipynb`"
---

## 摘要

**1) 一句话总结**
本文档总结了 Anthropic 官方提供的三个 Claude Agent 工作流 Notebook，介绍了链式、并行、路由、评估优化和编排分工等多 Agent 设计的基础结构模板与使用建议。

**2) 核心要点**
* **文档来源**：发布于 2026-02-17，代码及示例出自 `anthropics/claude-cookbooks` 仓库。
* **核心定位**：提供可迁移至大多数工作流系统的多 Agent 结构模板，而非特定业务 Demo。
* **基础工作流 (Basic Workflows)**：包含链式处理（顺序调用 LLM）、并行处理（基于 Python `ThreadPoolExecutor` 实现多线程并发）和路由分发。
* **评估-优化模式 (Evaluator-Optimizer)**：通过生成与评估形成闭环迭代，适用于对质量要求高且可迭代的任务。
* **编排-执行模式 (Orchestrator-Workers)**：由调度者（Orchestrator）拆分任务，子代理（Workers）并行执行，使用时需明确任务分解标准与结果合并规则。
* **架构设计建议**：在决定是否引入多 Agent 架构之前，应先将业务流程拆分为最小职责单元。

## 正文

这组三个 notebook 提供了多 Agent 设计的基础范式：链式、并行、路由、评估优化、编排分工。它们不是特定业务 demo，而是可以迁移到大多数工作流系统的结构模板。

### 能力主线
- Basic Workflows：链式处理、并行处理、路由分发。
- Evaluator-Optimizer：让生成和评估形成闭环迭代。
- Orchestrator-Workers：由调度者拆分任务，子代理并行执行。

### 示例代码
```python
def chain(input: str, prompts: list[str]) -> str:
    result = input
    for prompt in prompts:
        result = llm_call(f"{prompt}\nInput: {result}")
    return result

def parallel(prompt: str, inputs: list[str], n_workers: int = 3) -> list[str]:
    with ThreadPoolExecutor(max_workers=n_workers) as executor:
        futures = [executor.submit(llm_call, f"{prompt}\nInput: {x}") for x in inputs]
        return [f.result() for f in futures]
```

### 使用建议
- 先把流程拆成最小职责单元，再决定是否需要多 Agent。
- Evaluator-Optimizer 适合质量要求高但可迭代的任务。
- Orchestrator-Workers 需要明确任务分解标准与结果合并规则。

## 相关文档

- [[01-博客/Anthropic/Building Effective Agents 常见工作流最小实现|Building Effective Agents 常见工作流最小实现]]；关联理由：上下游；说明：该文给出同一批工作流模式的 README 级最小实现，本篇是对应 Notebook 的实操展开。
- [[01-博客/Anthropic/Claude Agent SDK Notebook 实战进阶|Claude Agent SDK Notebook 实战进阶]]；关联理由：延伸思考；说明：该文把本篇的工作流模板延伸到 SDK、多角色协同与可观测工程实践。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/workflow]]
- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/evals]]
- [[00-元语/github]]
