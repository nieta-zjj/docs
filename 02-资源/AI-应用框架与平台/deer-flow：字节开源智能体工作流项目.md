---
title: "deer-flow：字节开源智能体工作流项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `bytedance/deer-flow`"
项目主页: "https://github.com/bytedance/deer-flow"
官方网站: "https://deerflow.tech"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 20062，Forks 2524，Watchers 104（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
DeerFlow 是由字节跳动开源的一款基于 TypeScript 的超级智能体（SuperAgent）框架，通过编排子智能体、记忆、沙盒和扩展技能来处理复杂的研究、编程和创作任务。

**2) 关键要点**
* **项目定位**：属于 AI 应用框架与平台，旨在处理耗时数分钟到数小时的不同级别复杂任务。
* **核心特性**：系统集成了技能与工具（Skills & Tools）、子智能体（Sub-Agents）、沙盒与文件系统、上下文工程（Context Engineering）以及长期记忆（Long-Term Memory）。
* **版本重构**：DeerFlow 2.0 进行了彻底的底层重写，与 v1 版本无代码共享；原有的深度研究（Deep Research）框架保留在 `1.x` 分支继续维护。
* **技术栈与协议**：项目主要使用 TypeScript 开发，采用 MIT 开源协议。
* **社区热度**：项目受关注度极高，目前已积累超过 20,000 个 Stars 和 2,500 多个 Forks。
* **模型配置**：通过 `make config` 生成本地配置文件 `config.yaml`，支持自定义模型（如 GPT-4）及参数（如 max_tokens、temperature），推荐通过 `.env` 文件管理 API 密钥。
* **部署运行**：官方推荐使用 Docker 启动服务（执行 `make docker-init` 和 `make docker-start`），服务默认访问地址为 `http://localhost:2026`，同时也支持本地开发模式。

## 功能与定位

An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:26:12Z。
- 项目创建于 2025-05-07T02:50:19Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/bytedance/deer-flow
- 官网：https://deerflow.tech
- README：https://raw.githubusercontent.com/bytedance/deer-flow/main/README.md
- Releases：https://github.com/bytedance/deer-flow/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/typescript]]
- [[00-元语/workflow]]
- [[00-元语/github]]
- [[00-元语/memory]]
- [[00-元语/context-optimization]]
- [[00-元语/tool]]
- [[00-元语/skills]]
