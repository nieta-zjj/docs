---
title: "uBlock：专为 Chromium 和 Firefox 设计的开源、高效且占用资源极低的广谱内容拦截工具，旨在保护用户隐私并拦截广告、追踪器及恶意网站"

发布日期: "2026-02-22"
对象: "GitHub 项目 `gorhill/uBlock`"
项目主页: "https://github.com/gorhill/uBlock"
开源协议: "GNU General Public License v3.0"
主要语言: "JavaScript"
统计快照: "Stars 61690，Forks 3950，Watchers 1013（抓取时间：2026-02-22）"
版本快照: "最新发布 1.69.1b4（发布时间：2026-02-07T16:56:59Z）"
---

## 摘要

1) 一句话总结
uBlock Origin (uBO) 是一款专为 Chromium 和 Firefox 设计的开源、高效且占用资源极低的广谱内容拦截工具，旨在保护用户隐私并拦截广告、追踪器及恶意网站。

2) 关键要点
* **核心功能**：默认拦截广告、追踪器、网页挖矿脚本、弹窗、反拦截器及恶意网站。
* **性能优势**：CPU 和内存占用极低，性能表现优于或等同于大多数主流拦截器。
* **跨平台支持**：支持 Firefox（官方推荐体验最佳）、Chromium 系浏览器（Chrome、Edge、Opera）以及 Thunderbird。
* **内置与自定义规则**：默认集成 EasyList、EasyPrivacy、Peter Lowe's Blocklist 等规则，同时支持 Hosts 文件、自定义规则及 uBO 扩展语法。
* **双重交互模式**：提供“基础模式”（开箱即用的简单面板）和“高级模式”（支持基于站点的点击式防火墙动态过滤）。
* **开源与免费**：采用 GNU GPLv3 协议开源（JavaScript 编写），完全免费，且明确表示不寻求任何捐赠。
* **企业级支持**：提供企业部署（Enterprise Deployment）相关的文档与支持。

3) 风险/不足
* **Chrome 支持终止风险**：受 Google Chrome 扩展政策影响，uBO 将在 Chrome 139 版本终止支持。
* **Thunderbird 版本停滞**：Thunderbird 官方插件库中的 uBO 停滞在 1.49.2 版本，后续版本需通过 GitHub Releases 手动安装，且通常无法自动更新。
* **兼容性冲突风险**：官方明确警告**切勿**将 uBO 与其他内容拦截器同时使用，否则会破坏 uBO 的隐私保护及反拦截器破解功能。

## 功能与定位

uBlock Origin - An efficient blocker for Chromium and Firefox. Fast and lean.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:33:15Z。
- 项目创建于 2015-04-01T17:51:11Z，具备持续迭代与社区沉淀。
- 以 `JavaScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/gorhill/uBlock
- README：https://raw.githubusercontent.com/gorhill/uBlock/master/README.md
- Releases：https://github.com/gorhill/uBlock/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/security]]
- [[00-元语/risk]]
