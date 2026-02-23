---
title: "Pangolin：网络与基础设施工具项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `fosrl/pangolin`"
项目主页: "https://github.com/fosrl/pangolin"
官方网站: "https://pangolin.net"
开源协议: "Other"
主要语言: "TypeScript"
统计快照: "Stars 19146，Forks 576，Watchers 56（抓取时间：2026-02-22）"
版本快照: "最新发布 1.15.4（发布时间：2026-02-13T23:01:29Z）"
---

## 摘要

**1) 一句话总结**
Pangolin 是一个基于 WireGuard 构建的开源身份感知远程访问平台，集成了反向代理与 VPN 功能，旨在为各类网络资源提供零信任安全和细粒度的访问控制。

**2) 关键要点**
* **核心技术**：项目主要使用 TypeScript 开发，底层基于 WireGuard 构建，将反向代理和 VPN 功能整合在单一平台中。
* **双重访问模式**：支持基于浏览器的 Web 应用访问（提供路由、负载均衡、自动 SSL 证书），以及基于客户端的私有资源访问（如 SSH、数据库、RDP 及整个网段）。
* **零信任与细粒度控制**：采用零信任安全模型，仅授予用户对特定资源的访问权限，而非暴露整个网络，从而有效减少攻击面。
* **无缝网络连接**：通过轻量级站点连接器创建安全隧道，无需公网 IP 或开放端口；支持智能 NAT 穿透以应对严格的防火墙限制。
* **灵活的部署选项**：提供社区版（免费开源）、企业版（个人/爱好者及年收入低于10万美元的企业免费）以及 Pangolin Cloud（全托管、按需付费的云服务）。
* **多平台客户端**：官方提供适用于 Mac、Windows、Linux、iOS 和 Android 平台的客户端应用。
* **开源协议**：采用双重授权模式，包含 AGPL-3 开源许可证与 Fossorial 商业许可证。
* **项目热度**：该项目在 GitHub 上获得了超过 19,000 个 Stars，并提供了 DigitalOcean 市场的一键安装包以简化部署。

## 功能与定位

Identity-aware VPN and proxy for remote access to anything, anywhere.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:40:44Z。
- 项目创建于 2024-09-27T02:16:47Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/fosrl/pangolin
- 官网：https://pangolin.net
- README：https://raw.githubusercontent.com/fosrl/pangolin/main/README.md
- Releases：https://github.com/fosrl/pangolin/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/security]]
- [[00-元语/self-hosting]]
- [[00-元语/protocol]]
