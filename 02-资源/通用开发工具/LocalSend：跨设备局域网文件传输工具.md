---
title: "LocalSend：跨设备局域网文件传输工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `localsend/localsend`"
项目主页: "https://github.com/localsend/localsend"
官方网站: "https://localsend.org"
开源协议: "Apache License 2.0"
主要语言: "Dart"
统计快照: "Stars 75355，Forks 4013，Watchers 298（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.17.0（发布时间：2025-02-20T01:23:55Z）"
---

## 摘要

**1) 一句话总结**
LocalSend 是一款基于 Dart 开发的开源跨平台局域网文件与消息传输工具（AirDrop 的替代方案），无需互联网连接即可通过 REST API 和动态 HTTPS 加密实现设备间的安全通信。

**2) 关键点**
*   **项目热度与协议**：采用 Apache License 2.0 协议开源，在 GitHub 上拥有超 75,000 个 Stars 和 4,000+ Forks。
*   **核心技术**：使用 REST API 进行设备间通信，所有数据通过 HTTPS 安全传输，并在每台设备上动态生成 TLS/SSL 证书以确保安全性。
*   **跨平台支持**：兼容 Android (5.0+)、iOS (12.0+)、macOS (11+)、Windows (10+)、Linux 及 Fire OS。
*   **分发与安装**：由于应用本身不支持自动更新，官方强烈建议通过应用商店（如 App Store, Play Store）或包管理器（如 Winget, Homebrew, Flathub）进行下载。
*   **网络配置要求**：需在防火墙中允许 TCP 和 UDP 的 53317 端口入站流量，并确保路由器已禁用“AP 隔离（AP isolation）”功能。
*   **高级运行模式**：支持便携模式（在可执行文件同级目录创建 `settings.json`）以及隐藏启动模式（使用 `--hidden` 启动参数）。
*   **开发与编译**：项目依赖 Rust 和特定旧版本的 Flutter，官方建议使用 `fvm` 来管理 Flutter 版本以保证开发环境一致性。
*   **国际化**：支持包含中文在内的十余种语言，翻译工作主要通过 Weblate 平台进行管理。

**3) 风险/不足**
*   **Android 传输限速**：官方在故障排除中明确指出，向 Android 设备传输文件时存在速度过慢的已知问题（关联外部依赖库的 issue）。
*   **无自动更新机制**：应用内部不包含自动更新功能，若直接下载安装包（如 EXE/APK），用户需手动跟进版本更新。
*   **构建版本依赖风险**：由于项目依赖较旧的 Flutter 版本，若直接使用系统全局的最新版 Flutter 可能会导致编译失败。
*   **预览版稳定性风险**：官方提供的非官方 MSIX 预览版（Unofficial MSIX preview）不保证运行稳定性。

## 功能与定位

An open-source cross-platform alternative to AirDrop

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:45:38Z。
- 项目创建于 2022-12-16T00:46:07Z，具备持续迭代与社区沉淀。
- 以 `Dart` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/localsend/localsend
- 官网：https://localsend.org
- README：https://raw.githubusercontent.com/localsend/localsend/main/README.md
- Releases：https://github.com/localsend/localsend/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/desktop-client]]
- [[00-元语/protocol]]
- [[00-元语/security]]
- [[00-元语/productivity]]
