---
title: "Tauri：桌面与移动应用开发工具，使用 Rust 与 Web 前端技术构建小体积高性能且更安全的应用"

发布日期: "2026-02-22"
对象: "GitHub 项目 `tauri-apps/tauri`"
项目主页: "https://github.com/tauri-apps/tauri"
官方网站: "https://tauri.app"
开源协议: "Apache License 2.0"
主要语言: "Rust"
统计快照: "Stars 103084，Forks 3405，Watchers 537（抓取时间：2026-02-22）"
版本快照: "最新发布 tauri-driver-v2.0.5（发布时间：2026-02-04T15:43:13Z）"
---

## 摘要

**1) 一句话总结**
Tauri 是一个基于 Rust 的开源框架，允许开发者使用 Web 前端技术（HTML、JS、CSS）构建体积小、速度快且更安全的跨平台桌面和移动端应用程序。

**2) 关键要点**
* **核心架构**：后端采用 Rust 编写，前端支持任意可编译为 HTML/JS/CSS 的框架，前后端通过 API 进行交互。
* **底层依赖**：使用 `tao` 库处理跨平台窗口，使用 `WRY` 库调用系统原生 Webview（如 macOS/iOS 的 WKWebView、Windows 的 WebView2、Linux 的 WebKitGTK 等）进行渲染。
* **跨平台支持**：支持 Windows (7+)、macOS (10.15+)、Linux、iOS/iPadOS (9+) 以及 Android (7/8+) 平台的开发与分发。
* **内置打包工具**：支持将应用打包为多种原生格式，包括 `.app`、`.dmg`、`.deb`、`.rpm`、`.AppImage` 以及 Windows 安装程序（`.exe` 和 `.msi`）。
* **核心特性**：提供桌面端内置自动更新、系统托盘图标、原生通知、原生 WebView 协议（无需创建本地 HTTP 服务）等功能，并提供 VS Code 插件和 GitHub Actions CI 支持。
* **快速启动**：开发者可通过 `create-tauri-app` 脚手架（例如运行 `npm create tauri-app@latest`）快速初始化项目。
* **项目状态**：该项目在 GitHub 拥有超过 10 万 Stars，代码主要遵循 MIT 或 Apache 2.0 开源协议，作为 Commons Conservancy 旗下的项目进行管理。

## 功能与定位

Build smaller, faster, and more secure desktop and mobile applications with a web frontend.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:35:11Z。
- 项目创建于 2019-07-13T09:09:37Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/tauri-apps/tauri
- 官网：https://tauri.app
- README：https://raw.githubusercontent.com/tauri-apps/tauri/dev/README.md
- Releases：https://github.com/tauri-apps/tauri/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/desktop-client]]
- [[00-元语/security]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/protocol]]
