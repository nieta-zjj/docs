---
title: egui：egui an easy-to-use immediate 开发工具
对象: GitHub 仓库
项目主页: https://github.com/emilk/egui
官方文档: https://docs.rs/egui
最新版本: 0.33.3
最新版本发布时间: 2025-12-11
来源: README、ARCHITECTURE、crates/eframe README、GitHub Releases
---

## 摘要

egui 是一个纯 Rust 编写的即时模式 GUI 库，目标是以较低心智负担构建跨平台 UI（桌面与 Web/Wasm），并通过官方框架 eframe 提供较完整的应用开发与运行路径。项目强调无 `unsafe`、模块化与高可集成性，适合需要快速实现交互界面的 Rust 工程；同时需接受即时模式在复杂布局与 Web 端体验上的客观限制。

## 功能与定位

egui 定位为 Rust 生态中的易用型即时模式 GUI 库，强调简单、快速、可移植。它是一个 UI 库而不是完整应用框架：核心库负责 UI 逻辑与绘制数据生成，不直接绑定平台输入或渲染后端。

官方提供 eframe 作为首选框架，用于把同一套应用代码编译到 Linux、macOS、Windows、Android 与 Web/Wasm。

## 典型使用场景

- 给 Rust 工具或业务程序快速添加可交互 GUI。
- 用一套代码同时发布桌面端与 Web 端应用。
- 在已有引擎或图形系统中嵌入 UI 层（如游戏或可视化程序）。
- 需要较强响应性、但不追求原生系统风格外观的界面开发。

## 核心功能

- 常见控件与布局：按钮、滑块、文本编辑、窗口、面板、滚动区域等。
- 2D 绘制能力：通过 epaint 支持文本、图形与图像渲染。
- 可定制外观：支持自定义字体、颜色、间距与样式。
- 可访问性能力：支持 AccessKit（平台支持范围受后端能力影响）。
- 多后端集成：官方集成包含 eframe、egui-winit、egui-wgpu、egui_glow。

## 特色与差异点

- 即时模式范式：交互逻辑通常以“每帧重建 UI”表达，减少回调链与状态同步复杂度。
- 集成门槛低：只要环境能绘制纹理三角形即可接入。
- 安全与依赖取向：核心库强调最小依赖，并明确无 `unsafe` 代码。
- 模块化设计：数学、绘制、平台集成等能力分层为多个 crate，便于按需组合。

## 使用方式概览

- 独立应用：优先使用 eframe，按模板项目初始化并在 `update` 流程中构建 UI。
- 自定义集成：每帧按“输入采集 -> 调用 UI 代码 -> 处理输出 -> 渲染网格”执行。
- Web 部署：通过 Wasm 目标构建，渲染后端为 WebGPU 或 WebGL2（由运行环境与配置决定）。

示例（来自 README 的典型交互写法）：

```rust
if ui.button("Increment").clicked() {
    age += 1;
}
```

## 限制与注意事项

- 项目处于持续演进中，README 明确提到仍有功能缺口，且新版本可能出现 breaking changes。
- 即时模式在复杂布局场景可能出现首帧布局抖动，并在大规模长列表下带来额外 CPU 压力。
- eframe 的 Web 方案存在已知限制：搜索、移动端输入体验、无障碍能力等方面与传统 Web 技术栈仍有差距。
- 若使用同名窗口或动态命名组件，需要自行提供稳定唯一 ID，避免状态冲突。

## 链接

- [GitHub 仓库](https://github.com/emilk/egui)
- [README](https://raw.githubusercontent.com/emilk/egui/master/README.md)
- [ARCHITECTURE](https://raw.githubusercontent.com/emilk/egui/master/ARCHITECTURE.md)
- [eframe README](https://raw.githubusercontent.com/emilk/egui/master/crates/eframe/README.md)
- [官方文档（docs.rs/egui）](https://docs.rs/egui)
- [最新发布](https://github.com/emilk/egui/releases/latest)
- [Web Demo](https://www.egui.rs/#demo)

## 关联主题

- [[00-元语/desktop-client]]
- [[00-元语/wasm]]
- [[00-元语/tool]]
- [[00-元语/github]]
