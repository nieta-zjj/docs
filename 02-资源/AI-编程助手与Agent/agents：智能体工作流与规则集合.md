---
title: "agents：智能体工作流与规则集合"

发布日期: "2026-02-22"
对象: "GitHub 项目 `wshobson/agents`"
项目主页: "https://github.com/wshobson/agents"
官方网站: "https://sethhobson.com"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 29095，Forks 3190，Watchers 295（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
wshobson/agents 是一个专为 Claude Code 打造的生产级智能自动化与多智能体编排系统，通过 72 个细粒度插件集成了 112 个专业智能体和 146 项专属技能。

**2) 核心要点**
*   **庞大的组件库**：系统包含 72 个单用途插件、112 个专业领域智能体、146 项智能体技能、16 个多智能体工作流编排器以及 79 个开发工具。
*   **Token 优化架构**：采用细粒度插件设计与“渐进式披露（Progressive disclosure）”机制，按需加载特定智能体和技能，避免将不必要的资源载入上下文，从而最小化 Token 消耗。
*   **三层模型调度策略**：根据任务复杂度分配模型以平衡性能与成本。Opus 4.6 用于关键架构和安全审查；Sonnet 4.6（或继承默认设置）用于复杂开发与支持；Haiku 4.5 用于快速的运维和搜索任务。
*   **Agent Teams（新特性）**：新增多智能体团队插件，支持并行工作流，提供 7 种预设团队模式（如并行代码审查、假设驱动调试、并行功能开发等）。
*   **Conductor（新特性）**：新增上下文驱动开发插件，将 Claude Code 转化为项目管理工具，提供“上下文设置 -> 规格与计划 -> 实施”的结构化测试驱动开发（TDD）工作流。
*   **广泛的领域覆盖**：插件覆盖 24 个类别，包括全栈开发、Kubernetes 运维、云基础设施、安全扫描、AI/ML 管道、区块链（Web3）以及 SEO 营销等。
*   **模块化与可组合性**：用户通过 Marketplace 安装特定插件（而非直接安装智能体），各插件相互隔离但可自由组合，以应对复杂的全栈开发或安全加固等工作流。
*   **高关注度开源项目**：该项目基于 MIT 协议开源，主要使用 Python，在 GitHub 上已获得超过 29,000 颗 Star。

## 功能与定位

Intelligent automation and multi-agent orchestration for Claude Code

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:38:29Z。
- 项目创建于 2025-07-24T23:28:14Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/wshobson/agents
- 官网：https://sethhobson.com
- README：https://raw.githubusercontent.com/wshobson/agents/main/README.md
- Releases：https://github.com/wshobson/agents/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/Claude]]
- [[00-元语/llm]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/skills]]
- [[00-元语/workflow]]
