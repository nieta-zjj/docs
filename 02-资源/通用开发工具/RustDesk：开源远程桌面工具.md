---
title: "RustDesk：开源远程桌面工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `rustdesk/rustdesk`"
项目主页: "https://github.com/rustdesk/rustdesk"
官方网站: "https://rustdesk.com"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Rust"
统计快照: "Stars 107890，Forks 16037，Watchers 561（抓取时间：2026-02-22）"
版本快照: "最新发布 1.4.5（发布时间：2026-01-09T02:28:28Z）"
---

## 摘要

### 1) 一句话总结
RustDesk 是一款基于 Rust 编写的开源跨平台远程桌面应用程序，支持用户自建中继服务器，是 TeamViewer 的理想替代方案。

### 2) 关键点
*   **核心特性**：开箱即用，无需额外配置；用户对数据拥有完全控制权，安全性高。
*   **技术栈**：主要使用 Rust 语言开发，桌面端 GUI 采用 Flutter 或 Sciter（Sciter 已弃用）。
*   **开源与社区**：采用 GNU AGPL v3.0 协议，在 GitHub 上拥有超 10.7 万 Stars 和 1.6 万 Forks。
*   **跨平台支持**：覆盖 Windows、macOS、Linux、Android 和 iOS 等主流操作系统。
*   **服务器选项**：用户可使用官方提供的公共中继服务器，也可选择自托管（Self-hosting）或自行编写服务器。
*   **编译依赖**：构建项目需要 Rust 和 C++ 开发环境，并依赖 `vcpkg` 安装 `libvpx`、`libyuv`、`opus` 和 `aom` 等库。
*   **版本状态**：最新发布版本为 1.4.5（发布于 2026 年 1 月）。

### 3) 风险/不足
*   **合规与滥用风险**：官方明确声明不支持任何不道德或非法的软件使用行为（如未经授权的访问、控制或侵犯隐私），且不对任何滥用行为负责。
*   **技术弃用**：文档中提到用于构建 GUI 的 Sciter 框架已被标记为弃用（deprecated），目前主要转向 Flutter 构建。

## 功能与定位

An open-source remote desktop application designed for self-hosting, as an alternative to TeamViewer.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:12:57Z。
- 项目创建于 2020-09-28T15:36:08Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/rustdesk/rustdesk
- 官网：https://rustdesk.com
- README：https://raw.githubusercontent.com/rustdesk/rustdesk/main/README.md
- Releases：https://github.com/rustdesk/rustdesk/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/desktop-client]]
- [[00-元语/self-hosting]]
- [[00-元语/security]]
- [[00-元语/compliance]]
