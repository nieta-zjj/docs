---
title: "OpenHands：开源软件开发 agent 工具套件"

发布日期: "2026-02-22"
对象: "GitHub 项目 `All-Hands-AI/OpenHands`"
项目主页: "https://github.com/All-Hands-AI/OpenHands"
官方网站: "https://openhands.dev"
开源协议: "Other"
主要语言: "Python"
统计快照: "Stars 68058，Forks 8479，Watchers 426（抓取时间：2026-02-22）"
版本快照: "最新发布 1.4.0（发布时间：2026-02-18T15:42:57Z）"
---

## 摘要

### 1) 一句话总结
OpenHands 是一个高人气的 AI 驱动开发平台，提供从底层 Python SDK 到 CLI、本地 GUI、云端托管及企业自托管的全套 AI 编程助手解决方案。

### 2) 关键要点
*   **项目热度与状态**：该项目拥有超过 6.8 万 Stars 和 8400+ Forks，主要使用 Python 开发，最新版本为 1.4.0。
*   **基准测试成绩**：在 SWEBench 评测中获得了 77.6 的分数。
*   **核心 SDK (Software Agent SDK)**：提供可组合的 Python 库作为底层引擎，支持在本地定义和运行 Agent，或在云端扩展至数千个 Agent。
*   **命令行工具 (CLI)**：提供类似 Claude Code 或 Codex 的终端交互体验，支持接入 Claude、GPT 及其他各类大语言模型 (LLM)。
*   **本地图形界面 (Local GUI)**：包含 REST API 和 React 单页应用，允许用户在本地笔记本上运行 Agent，体验类似 Devin 或 Jules。
*   **云端托管版 (OpenHands Cloud)**：提供基于 Minimax 模型的免费体验（通过 GitHub/GitLab 登录），支持 Slack/Jira/Linear 集成、多用户、RBAC 权限及协作功能。
*   **企业版 (Enterprise)**：支持大型企业通过 Kubernetes 在自有 VPC 中自托管，提供扩展支持和研究团队访问权限（源码可见，超过一个月需购买许可证）。
*   **开源协议**：核心代码及 `openhands`、`agent-server` Docker 镜像均采用 MIT 协议开源，仅 `enterprise/` 目录采用特定的企业许可证。
*   **周边生态**：项目还维护了评估基础设施（benchmarks）、Chrome 扩展程序以及心智理论模块（ToM-SWE）。

## 功能与定位

🙌 OpenHands: AI-Driven Development

## 典型使用场景

- 作为开发阶段的 AI 助手，承担代码理解、生成与任务编排。
- 在团队中作为可扩展 agent 能力层，连接模型与工具链。

## 核心功能

- 提供面向工程任务的 agent 交互能力。
- 支持与代码仓库、终端或外部服务集成。
- 通过配置扩展模型、工具或执行策略。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T11:52:35Z。
- 项目创建于 2024-03-13T03:33:31Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/All-Hands-AI/OpenHands
- 官网：https://openhands.dev
- README：https://raw.githubusercontent.com/All-Hands-AI/OpenHands/main/README.md
- Releases：https://github.com/All-Hands-AI/OpenHands/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/benchmark]]
- [[00-元语/cli]]
- [[00-元语/github]]
- [[00-元语/llm]]
- [[00-元语/sdk]]
- [[00-元语/self-hosting]]
- [[00-元语/软件工程]]
