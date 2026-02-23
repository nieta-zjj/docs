---
title: "youtube-music：YouTube Music 桌面客户端"

发布日期: "2026-02-22"
对象: "GitHub 项目 `th-ch/youtube-music`"
项目主页: "https://github.com/th-ch/youtube-music"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 30877，Forks 1762，Watchers 158（抓取时间：2026-02-22）"
版本快照: "最新发布 v3.11.0（发布时间：2025-09-07T09:01:26Z）"
---

## 摘要

**1) 一句话总结**
Pear Desktop (th-ch/youtube-music) 是一款基于 TypeScript 和 Electron 开发的独立、非官方跨平台音乐播放器桌面扩展应用。

**2) 关键要点**
*   **项目定位**：提供原生外观和体验的音乐播放器扩展桌面应用，支持 Windows、macOS 和 Linux 操作系统。
*   **技术与开源状态**：主要使用 TypeScript 开发，采用 MIT 开源协议；社区活跃度极高，拥有超过 30,800 个 Stars 和 1,700+ Forks。
*   **版本信息**：当前最新发布版本为 v3.11.0。
*   **独立性声明**：该项目是由志愿者团队开发的非营利性、非官方扩展，与 Google LLC 或 YouTube 没有任何官方附属、授权或认可关系。
*   **macOS 安装**：支持通过 Homebrew (`brew install pear-devs/pear/pear-desktop`) 安装。
*   **Windows 安装**：支持通过 Scoop (`extras` bucket) 或 Windows 11 官方包管理器 Winget (`winget install pear-devs.pear-desktop`) 安装。
*   **Linux 安装**：Arch Linux 用户可通过 AUR 安装 `pear-desktop` 包。
*   **扩展与协作**：支持主题（Themes）定制，允许开发者构建自定义插件（Plugins），并通过 Hosted Weblate 平台进行多语言翻译协作。

**3) 风险/缺口**
*   **免责与法律风险**：软件按“原样（AS IS）”提供，开发者不对任何索赔、损害或法律后果承担责任；用户需自行承担使用该软件的所有风险。
*   **macOS 启动拦截**：手动安装 macOS 版本时可能会遇到“应用已损坏且无法打开”的错误，需要通过终端手动运行 `xattr -cr` 命令来解除限制。
*   **Windows 安全拦截**：在 Windows 上通过 CLI 或手动下载 `.exe` 文件安装时，Microsoft Defender SmartScreen 可能会因“未知发布者”而拦截安装。

## 功能与定位

Pear 🍐 is extension for music player

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T09:51:19Z。
- 项目创建于 2019-04-19T18:14:40Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/th-ch/youtube-music
- README：https://raw.githubusercontent.com/th-ch/youtube-music/main/README.md
- Releases：https://github.com/th-ch/youtube-music/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/desktop-client]]
- [[00-元语/audio]]
- [[00-元语/windows]]
- [[00-元语/typescript]]
- [[00-元语/tool]]
