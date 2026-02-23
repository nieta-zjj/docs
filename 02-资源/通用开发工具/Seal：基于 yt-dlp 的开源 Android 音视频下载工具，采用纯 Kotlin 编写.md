---
title: "Seal：基于 yt-dlp 的开源 Android 音视频下载工具，采用纯 Kotlin 编写"

发布日期: "2026-02-22"
对象: "GitHub 项目 `JunkFood02/Seal`"
项目主页: "https://github.com/JunkFood02/Seal"
开源协议: "GNU General Public License v3.0"
主要语言: "Kotlin"
统计快照: "Stars 24722，Forks 1065，Watchers 136（抓取时间：2026-02-22）"
版本快照: "最新发布 v2.0.0-alpha.5（发布时间：2024-11-29T15:46:57Z）"
---

## 摘要

### 1) 一句话总结
Seal 是一款基于 yt-dlp 的开源 Android 音视频下载工具，采用纯 Kotlin 编写，支持丰富的自定义下载配置与 Material Design 3 界面。

### 2) 关键要点
*   **核心功能**：基于 yt-dlp，支持下载其兼容的所有视频平台的音视频文件。
*   **技术栈**：采用纯 Kotlin 编写（单 Activity 架构），UI 遵循 Material Design 3 规范并支持动态主题色。
*   **下载增强**：内置 aria2c 作为外部下载器，支持一键下载整个播放列表。
*   **媒体处理**：支持在音频文件中嵌入元数据和封面（基于 mutagen），以及在视频中嵌入字幕。
*   **高级配置**：允许用户通过模板执行自定义的 yt-dlp 命令，并提供应用内的下载任务和模板管理功能。
*   **项目状态**：采用 GPL-3.0 开源协议，在 GitHub 拥有超 2.4 万 Stars，最新版本为 v2.0.0-alpha.5。
*   **分发渠道**：官方推荐安装 arm64-v8a 版本的 APK，可通过 GitHub Releases 或 F-Droid 下载。

### 3) 风险与缺口
*   **商标/命名限制**：官方明确警告，除受 GPLv3 协议约束的源代码外，禁止任何第三方（包括但不限于分支 Fork 和非官方构建版本）使用 "Seal" 作为下载器应用的名称。

## 功能与定位

🦭 Video/Audio Downloader for Android, based on yt-dlp

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:59:35Z。
- 项目创建于 2022-04-15T01:15:25Z，具备持续迭代与社区沉淀。
- 以 `Kotlin` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/JunkFood02/Seal
- README：https://raw.githubusercontent.com/JunkFood02/Seal/main/README.md
- Releases：https://github.com/JunkFood02/Seal/releases

## 相关文档

- [[02-资源/通用开发工具/yt-dlp：跨站点音视频下载工具|yt-dlp：跨站点音视频下载工具]]；关联理由：上下游；说明：Seal 以内置和封装 yt-dlp 为核心能力，二者属于直接的工具依赖关系。

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/audio]]
- [[00-元语/video]]
- [[00-元语/compliance]]
