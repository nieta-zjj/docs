---
title: "Uptime Kuma：开源自托管可用性监控工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `louislam/uptime-kuma`"
项目主页: "https://github.com/louislam/uptime-kuma"
官方网站: "https://uptime.kuma.pet"
开源协议: "MIT License"
主要语言: "JavaScript"
统计快照: "Stars 83100，Forks 7432，Watchers 305（抓取时间：2026-02-22）"
版本快照: "最新发布 2.1.3（发布时间：2026-02-19T05:37:30Z）"
---

## 摘要

**1) 一句话总结**
Uptime Kuma 是一款基于 JavaScript 开发的、高人气的开源自托管监控工具，提供美观的界面并支持多种协议监控与丰富的通知渠道。

**2) 关键要点**
* **项目数据与协议**：项目采用 MIT 开源协议，拥有超过 83,100 个 Stars 和 7,400+ 个 Forks，最新发布版本为 2.1.3。
* **多协议监控支持**：支持监控 HTTP(s)、TCP、Websocket、Ping、DNS 记录、Push、Steam 游戏服务器以及 Docker 容器。
* **高频检测与状态展示**：支持最短 20 秒的检测间隔，提供 Ping 图表、证书信息查看，并支持创建多个状态页及绑定特定域名。
* **丰富的通知集成**：内置 90 多种通知服务支持，包括 Telegram、Discord、Gotify、Slack、Pushover 和电子邮件 (SMTP) 等。
* **安全与扩展功能**：支持双因素认证（2FA）、代理设置以及多语言界面。
* **部署方式**：官方推荐使用 Docker Compose 或 Docker 命令行进行部署（默认端口 3001）；同时支持在主流 Linux 和 Windows 系统上通过 Node.js（>= 20.4）和 PM2 进行非 Docker 部署。

**3) 风险/局限性**
* **文件系统限制**：Docker 部署时明确不支持使用 NFS（网络文件系统），必须将数据映射到本地目录或卷。
* **非 Docker 部署平台限制**：非 Docker 安装方式明确不支持 FreeBSD / OpenBSD / NetBSD 操作系统，也不支持在 Replit / Heroku 平台上运行。

## 功能与定位

A fancy self-hosted monitoring tool

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:34:52Z。
- 项目创建于 2021-07-03T01:02:42Z，具备持续迭代与社区沉淀。
- 以 `JavaScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/louislam/uptime-kuma
- 官网：https://uptime.kuma.pet
- README：https://raw.githubusercontent.com/louislam/uptime-kuma/main/README.md
- Releases：https://github.com/louislam/uptime-kuma/releases

## 关联主题

- [[00-元语/observability]]
- [[00-元语/self-hosting]]
- [[00-元语/protocol]]
- [[00-元语/dns]]
- [[00-元语/security]]
- [[00-元语/github]]
