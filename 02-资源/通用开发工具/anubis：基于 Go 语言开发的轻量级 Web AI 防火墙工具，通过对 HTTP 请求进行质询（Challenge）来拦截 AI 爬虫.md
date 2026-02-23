---
title: "anubis：基于 Go 语言开发的轻量级 Web AI 防火墙工具，通过对 HTTP 请求进行质询（Challenge）来拦截 AI 爬虫"

发布日期: "2026-02-22"
对象: "GitHub 项目 `TecharoHQ/anubis`"
项目主页: "https://github.com/TecharoHQ/anubis"
官方网站: "https://anubis.techaro.lol/"
开源协议: "MIT License"
主要语言: "Go"
统计快照: "Stars 17115，Forks 503，Watchers 55（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.25.0（发布时间：2026-02-18T16:33:02Z）"
---

## 摘要

**1) 一句话总结**
Anubis 是一个基于 Go 语言开发的轻量级 Web AI 防火墙工具，通过对 HTTP 请求进行质询（Challenge）来拦截 AI 爬虫，从而保护上游资源。

**2) 关键点**
* **项目定位**：旨在保护小型互联网社区免受 AI 公司海量爬虫请求冲击的防火墙实用程序。
* **技术与开源状态**：主要使用 Go 语言开发，采用 MIT 开源许可证。
* **项目活跃度**：在 GitHub 上拥有 17115 个 Stars 和 503 个 Forks，最新发布版本为 v1.25.0（2026年2月18日）。
* **轻量化设计**：系统设计尽可能轻量，以确保所有用户都能以极低的成本保护其社区。
* **自定义策略**：支持配置机器人策略定义（bot policy definitions）以显式设置白名单，官方正在开发“已知良好”机器人的精选集以平衡可发现性与正常运行时间。
* **适用场景**：作为 Cloudflare 的替代方案，专为无法或不愿使用 Cloudflare 保护源站的用户提供服务。
* **技术支持**：用户可通过提交 GitHub Issue 报告问题，或通过 Patreon 加入 Discord 的 `#anubis` 频道获取实时交流支持。
* **商业赞助**：项目获得了 Raptor Computing Systems、Databento、Gitea 等多个钻石级和黄金级赞助商的支持。

**3) 风险/不足**
* **误伤正常爬虫（强硬拦截）**：官方明确指出该工具的拦截策略属于“核反应”级别，会导致网站屏蔽小型爬虫，并可能阻碍如 Internet Archive（互联网档案馆）等“好机器人（good bots）”的正常访问。

## 功能与定位

Weighs the soul of incoming HTTP requests to stop AI crawlers

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:25:28Z。
- 项目创建于 2025-03-17T17:35:28Z，具备持续迭代与社区沉淀。
- 以 `Go` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/TecharoHQ/anubis
- 官网：https://anubis.techaro.lol/
- README：https://raw.githubusercontent.com/TecharoHQ/anubis/main/README.md
- Releases：https://github.com/TecharoHQ/anubis/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/security]]
- [[00-元语/web-crawling]]
- [[00-元语/cloudflare]]
- [[00-元语/github]]
- [[00-元语/protocol]]
- [[00-元语/risk]]
