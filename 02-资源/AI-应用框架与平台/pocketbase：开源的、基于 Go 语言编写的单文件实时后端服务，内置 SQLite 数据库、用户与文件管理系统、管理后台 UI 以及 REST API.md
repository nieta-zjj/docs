---
title: "pocketbase：开源的、基于 Go 语言编写的单文件实时后端服务，内置 SQLite 数据库、用户与文件管理系统、管理后台 UI 以及 REST API"

发布日期: "2026-02-22"
对象: "GitHub 项目 `pocketbase/pocketbase`"
项目主页: "https://github.com/pocketbase/pocketbase"
官方网站: "https://pocketbase.io"
开源协议: "MIT License"
主要语言: "Go"
统计快照: "Stars 56286，Forks 3139，Watchers 295（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.36.5（发布时间：2026-02-21T11:45:32Z）"
---

## 摘要

1) **一句话总结**
PocketBase 是一个开源的、基于 Go 语言编写的单文件实时后端服务，内置 SQLite 数据库、用户与文件管理系统、管理后台 UI 以及 REST API。

2) **关键要点**
* **核心特性**：提供单文件运行的后端服务，内置带有实时订阅功能的 SQLite 数据库。
* **项目热度与协议**：采用 MIT 开源协议，主要使用 Go 语言开发，在 GitHub 上拥有超过 5.6 万 Stars。
* **官方 SDK 支持**：提供官方的 JavaScript SDK（支持浏览器、Node.js、React Native）和 Dart SDK（支持 Web、移动端、桌面端及 CLI）。
* **独立应用模式**：可直接下载预编译的可执行文件作为独立应用运行，默认启用 JS VM 插件，支持使用 JavaScript 扩展功能。
* **Go 框架模式**：可作为常规 Go 库引入（需 Go 1.23+），用于构建包含自定义业务逻辑的单一可移植可执行文件。
* **源码编译**：纯 Go SQLite 驱动支持多种跨平台构建目标（如 Linux, Windows, Darwin 等），编译 `examples/base` 示例需 Go 1.24+ 环境。
* **贡献规范**：欢迎针对新增 OAuth2 提供商、Bug 修复、代码优化和文档改进的 PR；但强烈建议在提交“新功能” PR 前先进行讨论，以免与项目路线图冲突。

3) **风险与缺口**
* 项目仍处于积极开发阶段，在发布 v1.0.0 版本之前，不保证完全的向后兼容性。

## 功能与定位

Open Source realtime backend in 1 file

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:51:15Z。
- 项目创建于 2022-07-05T06:06:21Z，具备持续迭代与社区沉淀。
- 以 `Go` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/pocketbase/pocketbase
- 官网：https://pocketbase.io
- README：https://raw.githubusercontent.com/pocketbase/pocketbase/master/README.md
- Releases：https://github.com/pocketbase/pocketbase/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/self-hosting]]
- [[00-元语/sdk]]
- [[00-元语/cli]]
- [[00-元语/protocol]]
