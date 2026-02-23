---
title: "Supabase：开源后端服务与PostgreSQL数据库"

发布日期: "2026-02-22"
对象: "GitHub 项目 `supabase/supabase`"
项目主页: "https://github.com/supabase/supabase"
官方网站: "https://supabase.com"
开源协议: "Apache License 2.0"
主要语言: "TypeScript"
统计快照: "Stars 97997，Forks 11604，Watchers 636（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.26.02（发布时间：2026-02-05T21:38:22Z）"
---

## 摘要

**1) 一句话总结**
Supabase 是一个基于 PostgreSQL 的开源开发平台，旨在通过整合企业级开源工具提供类似 Firebase 的后端服务，支持 Web、移动端和 AI 应用的开发。

**2) 核心要点**
* **项目热度与规范**：主要使用 TypeScript 编写，采用 Apache License 2.0 开源协议，在 GitHub 上拥有约 9.8 万 Stars 和 1.1 万 Forks，社区活跃。
* **核心定位**：并非 Firebase 的 1:1 复制，而是利用现有的优质开源工具（MIT、Apache 2 等协议）为开发者提供类似 Firebase 的开发体验。
* **主要功能**：提供托管的 Postgres 数据库、身份验证与授权、自动生成 API（REST、GraphQL、实时订阅）、数据库/边缘函数、文件存储以及 AI/向量嵌入工具包。
* **部署方式**：支持开箱即用的云端托管服务（Hosted），同时也支持自托管（Self-host）和本地开发（Local development）。
* **底层架构**：由多个独立开源组件构成，包括 Postgres（核心数据库）、Realtime（Elixir 编写的 WebSocket 服务器）、PostgREST（REST API 转换）、GoTrue（JWT 认证）、Kong（API 网关）等。
* **客户端库**：采用模块化设计，官方目前提供针对 JavaScript (TypeScript)、Flutter 和 Swift 的完整客户端支持，涵盖数据库、认证、实时通信、存储和函数等子模块。
* **技术支持渠道**：提供多维度的支持，包括 GitHub Discussions（开发与最佳实践讨论）、GitHub Issues（Bug 反馈）、Discord（社区交流）以及官方邮件（基础设施与数据库故障支持）。

## 功能与定位

The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:35:16Z。
- 项目创建于 2019-10-12T05:56:49Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/supabase/supabase
- 官网：https://supabase.com
- README：https://raw.githubusercontent.com/supabase/supabase/main/README.md
- Releases：https://github.com/supabase/supabase/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/PostgreSQL]]
- [[00-元语/self-hosting]]
- [[00-元语/serverless]]
- [[00-元语/sdk]]
