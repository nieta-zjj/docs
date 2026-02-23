---
title: "Dokploy：自托管 PaaS 部署与运维工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `Dokploy/dokploy`"
项目主页: "https://github.com/Dokploy/dokploy"
官方网站: "https://dokploy.com/"
开源协议: "Other"
主要语言: "TypeScript"
统计快照: "Stars 30759，Forks 2100，Watchers 92（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.27.1（发布时间：2026-02-18T08:03:23Z）"
---

## 摘要

**1) 一句话总结**
Dokploy 是一个免费且可自托管的开源平台即服务（PaaS），作为 Vercel、Netlify 和 Heroku 的替代方案，旨在简化各类应用和数据库的部署与管理。

**2) 关键要点**
*   **项目热度与技术栈**：项目主要使用 TypeScript 开发，目前在 GitHub 上拥有超过 30,750 个 Stars 和 2,100 个 Forks，最新版本为 v0.27.1。
*   **广泛的应用与数据库支持**：支持部署 Node.js、PHP、Python、Go 等多种类型的应用，并支持创建和管理 MySQL、PostgreSQL、MongoDB、MariaDB 和 Redis 数据库。
*   **容器与集群管理**：原生支持 Docker Compose 以管理复杂应用，并利用 Docker Swarm 实现多节点（Multi Node）扩展，同时支持向外部服务器进行远程部署（Multi Server）。
*   **自动化与路由集成**：支持将数据库自动备份至外部存储，并自动集成 Traefik 以实现路由和负载均衡。
*   **监控与通知机制**：提供对 CPU、内存、存储和网络使用情况的实时监控，并支持通过 Slack、Discord、Telegram 和电子邮件等渠道发送部署成功或失败的通知。
*   **便捷操作与扩展**：提供一键部署开源模板（如 Plausible、Pocketbase、Calcom 等）的功能，并支持通过命令行（CLI）或 API 管理资源。
*   **部署方式**：用户可通过单行脚本（`curl -sSL https://dokploy.com/install.sh | sh`）在 VPS 上快速自托管安装，官方同时提供免安装的 Dokploy Cloud 云服务。

## 功能与定位

Open Source Alternative to Vercel, Netlify and Heroku.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:23:15Z。
- 项目创建于 2024-04-19T07:49:30Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/Dokploy/dokploy
- 官网：https://dokploy.com/
- README：https://raw.githubusercontent.com/Dokploy/dokploy/main/README.md
- Releases：https://github.com/Dokploy/dokploy/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/workflow]]
- [[00-元语/github]]
- [[00-元语/self-hosting]]
- [[00-元语/observability]]
- [[00-元语/cli]]
- [[00-元语/security]]
