---
title: temporal：Temporal service 开发工具
对象: GitHub 仓库
分类: 通用开发工具
项目主页: https://github.com/temporalio/temporal
文档: https://docs.temporal.io/
开源协议: MIT
最新可见发布: v1.29.3
---

## 摘要

Temporal 是一个源自 Uber Cadence 的开源持久化执行平台，通过事件溯源和工作流机制，为分布式系统提供高并发、自动容错与精准的状态恢复能力。

该仓库由 Temporal Technologies 维护，核心是 Temporal Server 端实现；业务侧仍需配合各语言 SDK 编写 Workflow、Activity 与 Worker。

## 功能与定位

Temporal 的核心定位是 Durable Execution Platform。它把应用逻辑组织为 Workflow 执行单元，由服务端负责任务调度、历史持久化与故障恢复，降低分布式系统中的状态一致性与重试治理成本。

仓库范围聚焦在 Temporal Server 本身，而不是业务工作流实现模板。对应用开发者而言，Server 与各语言 SDK 是配套关系。

## 典型使用场景

- 需要长时运行、可恢复、可追踪的业务流程编排。
- 多语言团队在同一工作流平台下协作，统一执行语义与失败处理策略。
- 对任务可靠性要求高的分布式系统，例如跨服务事务、异步编排与后台批处理。

## 特色与差异点

- 事件溯源驱动：以 append-only 历史记录作为状态来源，通过重放恢复 Workflow 状态。
- 服务职责清晰：包含 Frontend、History、Matching、Internal Workers 等核心服务分层。
- 执行边界明确：用户业务代码运行在用户自有 Worker 进程中，Server 负责调度与持久化。
- 任务模型完整：覆盖 Workflow Task、Activity Task、Query Task 等不同执行路径。

## 使用方式概览

- 本地开发可通过 Temporal CLI 启动开发服务器并进行服务操作。
- 运行后可使用 Temporal Web UI 查看工作流执行状态与任务信息。
- 发布版本提供对应发行包与镜像标签，便于在不同环境部署与升级。

## 限制与注意事项

- 本仓库仅覆盖 Server 侧实现；业务逻辑开发必须结合对应语言 SDK。
- Workflow 代码需满足确定性要求，非确定性逻辑应放在 Activity 侧处理。
- 仓库内 `docs/` 更偏向服务内核和贡献者视角；应用开发应优先参考官方文档站的开发指南。

## 链接

- https://github.com/temporalio/temporal
- https://raw.githubusercontent.com/temporalio/temporal/master/README.md
- https://docs.temporal.io/
- https://github.com/temporalio/temporal/releases

## 关联主题

- [[00-元语/workflow]]
- [[00-元语/sdk]]
- [[00-元语/cli]]
- [[00-元语/github]]
- [[00-元语/tool]]
