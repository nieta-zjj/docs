---
title: "Building Effective Agents 常见工作流最小实现"

发布日期: "2024-12-19"
作者: "Anthropic"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/README.md"
译注: "原文为英文仓库文档，本稿为中文整理版。"
---

## 摘要

**1) 一句话总结**
本仓库是 Erik Schluntz 和 Barry Zhang 所著《Building Effective Agents》的参考实现，提供了常见智能体工作流的最小化代码示例。

**2) 核心要点**
* **项目背景**：作为 Anthropic 博客文章《Building Effective Agents》的配套参考代码库。
* **基础构建块**：包含提示词链（Prompt chaining）、路由（Routing）以及多 LLM 并行化（Multi-LLM parallelization）的最小实现。
* **高级工作流**：包含编排者-工作者（Orchestrator-workers）和评估者-优化者（Evaluator-optimizer）模式的实现。
* **快速入门资源**：提供三个 Jupyter Notebook 文件以便快速上手，分别对应基础工作流、评估者-优化者工作流和编排者-工作者工作流。

## 正文

Erik Schluntz 和 Barry Zhang 撰写的文章 [Building Effective Agents](https://anthropic.com/research/building-effective-agents) 的参考实现。

本仓库包含了博客中讨论的常见智能体工作流的最小实现示例：

- 基础构建块
  - 提示词链
  - 路由
  - 多 LLM 并行化
- 高级工作流
  - 编排者-工作者
  - 评估者-优化者

## 快速入门

详细示例请参阅以下 Jupyter Notebook：

- 基础工作流（`basic_workflows.ipynb`）
- 评估者-优化者工作流（`evaluator_optimizer.ipynb`） 
- 编排者-工作者工作流（`orchestrator_workers.ipynb`）

## 相关文档

- [[01-博客/Anthropic/构建高效智能体：Building Effective Agents|构建高效智能体：Building Effective Agents]]；关联理由：引用；说明：本篇明确作为该文提出的五类工作流模式的最小参考实现，可对照方法论与代码示例阅读。
- [[01-博客/Anthropic/使用 Claude Agent SDK 构建强大智能体教程|使用 Claude Agent SDK 构建强大智能体教程]]；关联理由：延伸思考；说明：该文将本篇的最小工作流模式扩展到 SDK 驱动的多智能体工程实现与外部系统集成。
- [[01-博客/Anthropic/Claude Agent Workflow Notebook 实战|Claude Agent Workflow Notebook 实战]]；关联理由：解说；说明：该文对本篇同一组工作流模式提供了 Notebook 级别的逐项展开与实践说明。

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/workflow]]
- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/evals]]
- [[00-元语/Claude]]
- [[00-元语/github]]
