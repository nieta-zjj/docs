---
title: wasp：开发框架
对象: GitHub 仓库
项目主页: https://github.com/wasp-lang/wasp
官网: https://wasp.sh
开源协议: MIT
---

## 摘要

Wasp 是一个面向全栈 Web 开发的开源框架，通过声明式配置与编译器机制，把 React、Node.js、Prisma 的协作流程收敛为更少样板代码的开发体验，适合快速构建具备工程化能力的应用。

- 核心机制是以 `main.wasp` 为中心的高层声明，编译器负责生成并组织客户端、服务端与数据库协作代码。
- 框架提供全栈 Auth、RPC、后台任务、邮件发送、类型安全与部署支持，降低全栈工程搭建成本。
- 官方文档给出 `npm i -g @wasp.sh/wasp-cli@latest`、`wasp new`、`wasp start` 的快速上手路径，并要求 Node.js 版本不低于 22.12。
- 从官方示例可见，其覆盖文档问答、看板、实时投票等常见业务形态，适合做中小到中等复杂度应用原型与产品化迭代。
- 版本更新节奏较快，v0.21.x 涉及安装方式、Vite 配置与生态依赖升级，升级时需优先参考官方迁移指南。

## 功能与定位

Wasp（Web Application Specification）是一个面向 React、Node.js、Prisma 技术栈的全栈开发框架。它强调通过声明式配置与统一编译流程，减少前后端协作中的重复工程代码，让团队更聚焦业务逻辑。

## 典型使用场景

- 需要快速从 0 到 1 搭建全栈 Web 应用的项目。
- 希望在 React 与 Node.js 生态内保持工程一致性，同时减少手工拼装成本的团队。
- 需要在认证、数据读写、后台任务、部署等模块上采用预置能力的应用开发。

## 核心功能

- 全栈身份验证能力。
- 前后端调用与类型安全协作能力。
- 后台任务与邮件发送支持。
- 结合官方 CLI 的项目创建、开发与部署流程。
- 覆盖多场景的官方示例项目与教程文档。

## 特色与差异点

- 通过 `main.wasp` 做高层建模，统一应用结构入口。
- 使用编译生成方式组织全栈代码，降低样板代码与结构分散问题。
- 底层基于主流生态（React、Node.js、Prisma），不绑定单一云厂商。
- 在近期版本中持续跟进前端工具链与框架升级。

## 使用方式概览

1. 准备 Node.js 与 npm 环境，并满足最低版本要求。
2. 通过 npm 安装 Wasp CLI。
3. 使用 CLI 创建新项目并启动本地开发。
4. 在 `main.wasp` 中声明应用结构，再配合 React/Node.js/Prisma 完成业务开发。

## 限制与注意事项

- 项目当前仍在 Beta 阶段，版本迭代较快。
- Windows 开发优先建议使用 WSL；官方文档对 WSL2 文件系统位置有明确限制说明。
- 从旧版本升级到新版本时，需先确认是否存在破坏性变更，并按迁移指南调整项目配置。

## 链接

- https://github.com/wasp-lang/wasp
- https://wasp.sh
- https://wasp.sh/docs
- https://wasp.sh/docs/quick-start
- https://raw.githubusercontent.com/wasp-lang/wasp/main/README.md
- https://raw.githubusercontent.com/wasp-lang/wasp/main/web/docs/introduction/introduction.md
- https://raw.githubusercontent.com/wasp-lang/wasp/main/web/docs/introduction/quick-start.md
- https://raw.githubusercontent.com/wasp-lang/wasp/main/examples/README.md
- https://github.com/wasp-lang/wasp/releases/tag/v0.21.1
- https://github.com/wasp-lang/wasp/releases/tag/v0.21.0
- https://wasp.sh/docs/migration-guides/migrate-from-0-20-to-0-21

## 关联主题

- [[00-元语/react]]
- [[00-元语/cli]]
- [[00-元语/workflow]]
- [[00-元语/软件工程]]
