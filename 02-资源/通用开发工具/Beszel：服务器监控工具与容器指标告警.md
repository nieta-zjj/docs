---
title: "Beszel：服务器监控工具与容器指标告警"

发布日期: "2026-02-22"
对象: "GitHub 项目 `henrygd/beszel`"
项目主页: "https://github.com/henrygd/beszel"
官方网站: "https://beszel.dev"
开源协议: "MIT License"
主要语言: "Go"
统计快照: "Stars 19542，Forks 633，Watchers 41（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.18.4（发布时间：2026-02-20T21:10:52Z）"
---

## 摘要

**1) 一句话总结**
Beszel 是一个基于 Go 语言开发的轻量级服务器监控平台，提供历史数据追踪、Docker 容器统计以及多维度告警功能。

**2) 关键要点**
* **项目热度与版本**：该项目拥有 19542 个 Stars 和 633 个 Forks，采用 MIT 开源协议，最新发布版本为 v0.18.4。
* **核心架构**：系统由 Hub（基于 PocketBase 构建的 Web 仪表板应用）和 Agent（部署在被监控系统上用于收集指标）两部分组成。
* **轻量与易用**：资源占用低于主流解决方案，开箱即用，几乎不需要手动配置。
* **容器监控**：支持跟踪所有运行中的 Docker 和 Podman 容器的状态，以及每个容器的 CPU、内存和网络使用历史。
* **丰富的监控指标**：支持监控主机的 CPU、内存（含 swap 和 ZFS ARC）、磁盘使用率与 I/O、网络、负载、温度、GPU（Nvidia、AMD、Intel）、电池电量以及 S.M.A.R.T. 磁盘健康状态。
* **多用户与安全认证**：支持多用户独立管理系统（管理员可共享系统），支持多种 OAuth2/OIDC 提供商认证，并允许禁用密码登录。
* **告警与备份**：可针对 CPU、内存、磁盘、带宽、温度、负载和状态配置告警；支持将数据自动备份至本地磁盘或兼容 S3 的存储中。

## 功能与定位

Lightweight server monitoring hub with historical data, docker stats, and alerts.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:52:47Z。
- 项目创建于 2024-07-07T21:36:28Z，具备持续迭代与社区沉淀。
- 以 `Go` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/henrygd/beszel
- 官网：https://beszel.dev
- README：https://raw.githubusercontent.com/henrygd/beszel/main/README.md
- Releases：https://github.com/henrygd/beszel/releases

## 关联主题

- [[00-元语/observability]]
- [[00-元语/self-hosting]]
- [[00-元语/security]]
- [[00-元语/Agent]]
- [[00-元语/github]]
