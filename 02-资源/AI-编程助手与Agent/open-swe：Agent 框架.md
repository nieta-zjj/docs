---
title: open-swe：Agent 框架
对象: GitHub 仓库
项目主页: https://github.com/langchain-ai/open-swe
官方演示: https://swe.langchain.com
许可证: MIT
项目状态: 已废弃（官方声明不再积极维护）
来源:
  - https://github.com/langchain-ai/open-swe/blob/main/README.md
  - https://github.com/langchain-ai/open-swe/blob/main/apps/docs/index.mdx
  - https://github.com/langchain-ai/open-swe/blob/main/apps/docs/usage/intro.mdx
  - https://github.com/langchain-ai/open-swe/blob/main/apps/docs/usage/ui.mdx
  - https://github.com/langchain-ai/open-swe/blob/main/apps/docs/usage/github.mdx
  - https://github.com/langchain-ai/open-swe/blob/main/apps/docs/faq.mdx
---

## 摘要

open-swe 是 LangChain 发布的开源异步 Agent 框架，基于 LangGraph 的 Manager、Planner、Programmer 三图协作架构，覆盖从代码理解、任务规划到自动生成 PR 的端到端流程。它支持 Web UI 交互和 GitHub Issue 标签触发两种方式，兼顾人工审核与自动执行。该仓库已在 README 中明确标注为 deprecated，适合参考其工程设计与工作流思路，不适合作为长期依赖的生产基座。

## 功能与定位

open-swe 的定位是云端异步编程 Agent 框架，用于在完整代码仓库范围内执行开发任务。它强调先规划再执行，并把任务执行链路与 GitHub 协作流程连接起来。

## 典型使用场景

- 在 Web 界面中提交需求，先看计划再决定是否执行。
- 通过 GitHub Issue 标签触发自动化处理，让任务流进入规划与代码实现。
- 在 LangGraph 相关项目中使用其三图分工和消息路由思路，作为 Agent 工程化参考。

## 核心功能

- 规划阶段与执行阶段分离，支持在执行前人工接受、修改或拒绝计划。
- 运行中可继续向 Agent 发送补充信息，支持人机协同迭代。
- 完成实现后自动创建 PR，并与 Issue 流程联动。
- 支持并行任务运行，依赖云端沙盒执行环境。
- 提供 LangGraph Engineer 模式，用于强化 LangGraph 相关任务的提示与文档利用。

## 特色与差异点

- 三图架构分工明确：Manager 负责路由与编排，Planner 负责计划生成，Programmer 负责代码落地。
- 同时提供手动模式与自动模式，覆盖“高控制”与“高吞吐”两类开发偏好。
- 项目文档对运行行为、权限边界与失败恢复流程描述较完整，便于团队理解 Agent 行为边界。

## 使用方式概览

- Web UI：在 `swe.langchain.com` 里选择仓库、切换手动/自动模式并提交任务。
- GitHub 触发：给 Issue 添加 `open-swe` 或 `open-swe-auto` 标签触发运行。
- FAQ 给出成本参考与恢复方式，例如失败后可从检查点重启任务。

## 限制与注意事项

- 仓库已废弃且不再持续维护，评估时应优先考虑可持续维护的替代方案。
- Demo 需要自备 LLM API Key；GitHub Webhook 功能需要自行部署实例，Demo 不提供该能力。
- 通过 GitHub 触发的运行存在访问控制限制，文档说明默认仅 Issue 创建者可访问对应运行链接。
- 文档中的成本区间会受模型、任务复杂度和仓库规模影响，不能视为固定开销。

## 链接

- https://github.com/langchain-ai/open-swe
- https://swe.langchain.com
- https://github.com/langchain-ai/open-swe/tree/main/apps/docs
- https://blog.langchain.com/introducing-open-swe-an-open-source-asynchronous-coding-agent/
- https://youtu.be/TaYVvXbOs8c

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/llm]]
- [[00-元语/workflow]]
