---
title: Warp：Agent 框架
对象: GitHub 仓库（warpdotdev/Warp）
项目主页: https://warp.dev
仓库链接: https://github.com/warpdotdev/Warp
文档: https://docs.warp.dev/
---

## 摘要

Warp 是一个面向多 Agent 协同编码的现代化终端与开发环境，核心由 Oz 编排平台承载本地交互与云端自动化任务。

- 仓库 `warpdotdev/Warp` 为 issues-only 仓库，主要用于收集 Bug 与功能请求。
- 产品定位强调“coding with agents”，可在 Warp 中使用内置 Oz，也兼容第三方 CLI agents（如 Claude Code、Codex、Gemini CLI）。
- Oz 平台覆盖 CLI、API/SDK、任务编排、执行环境与可观测性，支持并发运行与审计追踪。
- 运行模式分为本地交互（`oz agent run`）与云端自动化（`oz agent run-cloud`），适配终端、脚本、CI 等场景。
- 平台支持 Slack、Linear、GitHub Actions 等触发集成。
- API 能力包含创建运行与查询运行记录（例如 `POST /agent/run`、`GET /agent/runs`）。
- 环境能力强调可复现执行（如镜像、仓库上下文、启动配置），用于跨团队标准化。
- 官方说明服务端目前闭源，仓库未开放完整产品源码。

## 功能与定位

Warp 将终端体验与 Agent 工作流结合，目标是把“本地编写代码”和“多 Agent 并行执行任务”放在同一开发体系中。

在官方文档中，Oz 被定义为 cloud agents 的 orchestration platform，用于承载触发、任务调度、执行与结果追踪。

## 典型使用场景

- 在本地终端中发起交互式 Agent 会话，做日常编码、调试与重构。
- 通过计划任务、Webhook、CI 事件或第三方集成触发云端自主任务。
- 在团队中统一管理多仓库、多任务并发执行，并回看运行记录与输出。

## 核心功能

- Agent 编排：以任务为单位追踪状态与生命周期。
- 多入口调用：支持 Oz Web App、Oz CLI、API/SDK。
- 自动化触发：支持与外部系统集成后触发云端运行。
- 运行可观测：保留状态、元数据、执行输出等记录用于审计。
- 环境标准化：可配置执行环境以提高复现性与一致性。

## 特色与差异点

- 同时覆盖“终端内交互开发”与“云端自动化编排”两种 Agent 工作模式。
- 提供从交互式使用到程序化调用（CLI/API/SDK）的连续能力。
- 在文档中明确了任务状态流转与运行记录机制，适合团队协作与治理。

## 使用方式概览

- 客户端侧可通过 Warp 应用与内置 CLI 使用 Oz 能力。
- 命令侧已从 `warp-cli` 迁移到 `oz`。
- 自动化场景可使用 API key 与 API/SDK 进行非交互调用。

## 限制与注意事项

- `warpdotdev/Warp` 不是完整源码仓库，而是问题反馈入口。
- 官方明确服务端当前闭源，评估时应区分“可用产品能力”与“可见源码范围”。
- 以产品页为来源时需注意营销措辞，建议以 README 与文档参考页为主要事实依据。

## 链接

- GitHub 仓库：https://github.com/warpdotdev/Warp
- README：https://raw.githubusercontent.com/warpdotdev/Warp/main/README.md
- 仓库 API：https://api.github.com/repos/warpdotdev/Warp
- 官网：https://warp.dev
- 下载：https://www.warp.dev/download
- Agents 文档总览：https://docs.warp.dev/agents
- Oz 平台架构：https://docs.warp.dev/agent-platform/cloud-agents/platform
- Oz CLI 参考：https://docs.warp.dev/reference/cli
- Oz API & SDK 参考：https://docs.warp.dev/reference/api-and-sdk/agent
- Changelog：https://docs.warp.dev/getting-started/changelog
- Oz 产品页：https://www.warp.dev/oz

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/terminal]]
- [[00-元语/cli]]
- [[00-元语/observability]]
- [[00-元语/github]]
