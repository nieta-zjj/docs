---
title: "animeko：多端弹幕追番应用，基于 Kotlin 和 Compose Multiplatform，支持聚合数据源、云同步、离线缓存和弹幕"

发布日期: "2026-02-22"
对象: "GitHub 项目 `open-ani/animeko`"
项目主页: "https://github.com/open-ani/animeko"
官方网站: "https://animeko.org"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Kotlin"
统计快照: "Stars 15432，Forks 384，Watchers 25（抓取时间：2026-02-22）"
版本快照: "最新发布 v5.3.1（发布时间：2026-02-07T16:43:26Z）"
---

## 摘要

### 一句话总结
Animeko 是一款基于 Kotlin 和 Compose Multiplatform 构建的跨平台一站式弹幕追番应用，提供聚合数据源、云同步、离线缓存和弹幕等功能。

### 关键点
* **跨平台支持**：全面支持 Android、iOS、Windows、macOS 和 Linux，并对平板和大屏设备进行了界面适配。
* **技术架构**：100% 使用 Kotlin 开发，采用 Kotlin Multiplatform 架构与 Compose Multiplatform 响应式 UI 框架。
* **聚合数据源**：支持 BitTorrent、Jellyfin、Emby 及自定义在线源（内置动漫花园、Mikan等），具备全自动数据源选择器。
* **弹幕系统**：聚合全网弹幕（通过弹弹play），并拥有自建的公益弹幕服务器（弹幕绑定 Bangumi 用户名以防滥用）。
* **进度与信息同步**：深度集成 Bangumi，支持浏览番剧信息、社区评价、新番时间表，并实现追番进度的云同步。
* **播放与缓存**：内置基于 libtorrent 的专属 BT 引擎以优化边下边播体验，支持所有数据源的离线缓存；播放器底层在 Android 端使用 ExoPlayer，PC 端使用 VLC。
* **开源与热度**：项目采用 GNU AGPL v3.0 协议开源，在 GitHub 上拥有超过 1.5 万 Stars，提供稳定版（每两周更新）与测试版（每两天更新）双发布通道。

## 功能与定位

集找番、追番、看番的一站式弹幕追番平台，云收藏同步 (Bangumi)，离线缓存，BitTorrent，弹幕云过滤。100% Kotlin/Compose Multiplatform

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:34:57Z。
- 项目创建于 2022-07-31T17:38:49Z，具备持续迭代与社区沉淀。
- 以 `Kotlin` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/open-ani/animeko
- 官网：https://animeko.org
- README：https://raw.githubusercontent.com/open-ani/animeko/main/README.md
- Releases：https://github.com/open-ani/animeko/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/desktop-client]]
- [[00-元语/community]]
- [[00-元语/video]]
