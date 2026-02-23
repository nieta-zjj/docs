---
title: "Pake：网页转桌面应用的开源打包工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `tw93/Pake`"
项目主页: "https://github.com/tw93/Pake"
官方网站: "https://x.com/twitter/status/2025197688422339010"
开源协议: "MIT License"
主要语言: "Rust"
统计快照: "Stars 45928，Forks 9021，Watchers 228（抓取时间：2026-02-22）"
版本快照: "最新发布 V3.9.1（发布时间：2026-02-21T12:48:42Z）"
---

## 摘要

**1) 一句话总结**
Pake 是一个基于 Rust Tauri 的开源工具，支持通过一条命令将任何网页快速打包成轻量级的跨平台（macOS/Windows/Linux）桌面应用。

**2) 核心要点**
*   **极致轻量与高效**：基于 Rust Tauri 构建，打包后的应用体积通常在 5MB 左右，比传统 Electron 方案小近 20 倍，且运行速度更快、内存占用更低。
*   **便捷的 CLI 打包**：开发者可通过全局安装 `pake-cli`，使用单条命令（如 `pake <url> --name <Name>`）快速打包，并支持自定义图标、窗口尺寸和隐藏标题栏等高级参数。
*   **免环境在线构建**：针对无本地开发环境的新手用户，项目支持通过 GitHub Actions 进行云端在线构建。
*   **丰富的内置功能**：生成的桌面应用原生支持多项快捷键（如页面导航、缩放、清理缓存等），并具备沉浸式窗口、拖拽、样式自定义及去广告功能。
*   **提供常用预编译包**：官方已为微信读书、Twitter、ChatGPT、DeepSeek、YouTube 等热门网站提供了开箱即用的 Mac (.dmg)、Windows (.msi) 和 Linux (.deb) 安装包。
*   **本地开发环境要求**：如需克隆项目进行本地二次开发，系统需预装 Rust（>=1.85）和 Node（>=22）。
*   **项目热度与协议**：采用 MIT 开源协议，社区活跃度极高（超 4.5 万 Stars），目前最新发布版本为 V3.9.1。

## 功能与定位

🤱🏻 Turn any webpage into a desktop app with one command.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:18:46Z。
- 项目创建于 2022-10-14T09:32:57Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/tw93/Pake
- 官网：https://x.com/twitter/status/2025197688422339010
- README：https://raw.githubusercontent.com/tw93/Pake/main/README.md
- Releases：https://github.com/tw93/Pake/releases

## 关联主题

- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/productivity]]
- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/windows]]
