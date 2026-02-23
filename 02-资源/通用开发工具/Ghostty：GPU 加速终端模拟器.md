---
title: "Ghostty：GPU 加速终端模拟器"

发布日期: "2026-02-22"
对象: "GitHub 项目 `ghostty-org/ghostty`"
项目主页: "https://github.com/ghostty-org/ghostty"
官方网站: "https://ghostty.org"
开源协议: "MIT License"
主要语言: "Zig"
统计快照: "Stars 44301，Forks 1697，Watchers 183（抓取时间：2026-02-22）"
版本快照: "最新发布 tip（发布时间：2022-11-17T19:22:01Z）"
---

## 摘要

**1) 一句话总结**
Ghostty 是一个基于 Zig 语言开发的快速、功能丰富且跨平台的终端模拟器，它结合了原生 UI 与 GPU 加速技术，旨在成为现有终端的直接替代品。

**2) 关键要点**
*   **项目热度与规范**：采用 MIT 开源协议，在 GitHub 上拥有超 4.4 万 Stars 和 1697 个 Forks，主要使用 Zig 语言编写。
*   **核心优势**：打破了传统终端在“速度、功能、原生 UI”三者间必须取舍的现状，同时提供这三种优势。
*   **渲染架构与性能**：采用多渲染器架构（Linux 使用 OpenGL，macOS 使用 Metal）。它是唯一支持连字（ligatures）的 Metal 渲染终端，在高负载下可维持约 60fps。
*   **I/O 性能**：配备专用 I/O 线程，读取纯文本转储的速度比 iTerm 和 Kitty 快 4 倍，比 Terminal.app 快 2 倍，速度与 Alacritty 相当但功能更丰富。
*   **标准兼容性**：已完成全面的 xterm 审计（Issue #632），行为规范依次遵循：官方标准（如 ECMA-48）、xterm 行为、其他流行终端行为。
*   **已完成的路线图**：目前已实现标准兼容的终端模拟、具备竞争力的性能、基础自定义（字体、背景色等）以及高级窗口功能（多窗口、标签页、窗格）。

**3) 风险与不足（基于原文明确提及）**
*   **性能优化空间**：官方明确指出，尽管目前速度很快，但在性能和基准测试方面仍有很大的改进空间。
*   **平台支持缺失**：目前尚未支持 Windows 终端（包括 PowerShell、Cmd、WSL），该计划处于未开始状态（❌）。
*   **部分功能未完善**：原生平台体验（如 Mac 偏好设置面板）以及用于嵌入式终端的跨平台 `libghostty` 库目前仍处于开发/未完善状态（⚠️）。

## 功能与定位

👻 Ghostty is a fast, feature-rich, and cross-platform terminal emulator that uses platform-native UI and GPU acceleration.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:22:46Z。
- 项目创建于 2022-03-29T17:38:26Z，具备持续迭代与社区沉淀。
- 以 `Zig` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/ghostty-org/ghostty
- 官网：https://ghostty.org
- README：https://raw.githubusercontent.com/ghostty-org/ghostty/main/README.md
- Releases：https://github.com/ghostty-org/ghostty/releases

## 关联主题

- [[00-元语/terminal]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/benchmark]]
- [[00-元语/windows]]
- [[00-元语/tool]]
- [[00-元语/github]]
