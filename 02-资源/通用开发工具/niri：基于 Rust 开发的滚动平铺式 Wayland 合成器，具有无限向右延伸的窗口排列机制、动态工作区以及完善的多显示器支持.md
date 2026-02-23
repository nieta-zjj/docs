---
title: "niri：基于 Rust 开发的滚动平铺式 Wayland 合成器，具有无限向右延伸的窗口排列机制、动态工作区以及完善的多显示器支持"

发布日期: "2026-02-22"
对象: "GitHub 项目 `YaLTeR/niri`"
项目主页: "https://github.com/niri-wm/niri"
官方网站: "https://niri-wm.github.io/niri/"
开源协议: "GNU General Public License v3.0"
主要语言: "Rust"
统计快照: "Stars 20217，Forks 703，Watchers 62（抓取时间：2026-02-22）"
版本快照: "最新发布 v25.11（发布时间：2025-11-29T10:06:23Z）"
---

## 摘要

**1) 一句话总结**
Niri 是一款基于 Rust 开发的滚动平铺式 Wayland 合成器，具有无限向右延伸的窗口排列机制、动态工作区以及完善的多显示器支持。

**2) 核心要点**
* **项目基础**：使用 Rust 语言编写，采用 GPL v3.0 开源协议，在 GitHub 上拥有超 20,000 个 Star，最新版本为 v25.11。
* **核心排列机制**：窗口在无限延伸的带状区域内按列向右排列，打开新窗口时不会导致现有窗口调整大小。
* **多显示器与工作区**：每个显示器拥有独立的窗口带和垂直排列的动态工作区（底部始终保留一个空工作区）；显示器断开或重新连接时，工作区布局会自动迁移和恢复。
* **视觉与布局定制**：支持窗口标签页（Tabs）、自定义间距与边框尺寸、Oklab/Oklch 渐变边框，以及支持自定义着色器（Shaders）的动画效果。
* **实用功能**：内置截图 UI，支持通过 `xdg-desktop-portal-gnome` 进行屏幕投屏（支持动态目标切换和敏感窗口屏蔽），并支持配置文件热重载。
* **硬件与显示兼容性**：原生支持多显示器混合 DPI 和分数缩放（UI 保持像素级清晰），兼容 NVIDIA 显卡，支持触摸板和鼠标手势。
* **生态与协议支持**：自 v25.01 起支持浮动窗口，自 v25.08 起通过 `xwayland-satellite` 集成 Xwayland；支持主流 Wlr 协议（如 layer-shell、screencopy 等）及屏幕阅读器。

**3) 风险与不足**
* **非完整桌面环境**：Niri 仅为 Wayland 合成器，并非完整的桌面环境，用户需要自行准备和配置状态栏（如 waybar）和应用启动器（如 fuzzel）等组件。
* **手势支持缺失**：虽然支持触摸板手势，但目前尚未支持触摸屏手势（touchscreen gestures）。

## 功能与定位

A scrollable-tiling Wayland compositor.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:09:44Z。
- 项目创建于 2023-08-10T10:53:14Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/YaLTeR/niri
- 官网：https://niri-wm.github.io/niri/
- README：https://raw.githubusercontent.com/YaLTeR/niri/main/README.md
- Releases：https://github.com/YaLTeR/niri/releases

## 相关文档

- [[02-资源/通用开发工具/Hyprland：an independent, highly customizable|Hyprland：an independent, highly customizable]]；关联理由：观点一致；说明：两者都是 Wayland 平铺式合成器，适合并行对比窗口布局机制与可定制能力。

## 关联主题

- [[00-元语/desktop-client]]
- [[00-元语/ui-protocol]]
- [[00-元语/protocol]]
- [[00-元语/github]]
- [[00-元语/tool]]
