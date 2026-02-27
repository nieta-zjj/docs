---
title: moonlight-qt：命令行工具
对象: GitHub 项目
项目主页: https://github.com/moonlight-stream/moonlight-qt
来源:
  - https://github.com/moonlight-stream/moonlight-qt
  - https://raw.githubusercontent.com/moonlight-stream/moonlight-qt/master/README.md
  - https://raw.githubusercontent.com/moonlight-stream/moonlight-qt/master/app/cli/commandlineparser.cpp
  - https://api.github.com/repos/moonlight-stream/moonlight-qt/releases?per_page=5
---

## 摘要

moonlight-qt 是基于 C++ 与 Qt 的开源跨平台串流客户端，面向 Windows、macOS、Linux 和 Steam Link。它既提供图形界面，也提供 `pair`、`list`、`stream`、`quit` 等命令行动作，适合需要脚本化管理远程串流会话的用户。项目兼容 NVIDIA GameStream 与 Sunshine，支持硬件解码、4K、HDR、多手柄和多平台分发，但部分能力受服务端与硬件条件限制。

## 功能与定位

moonlight-qt 的核心定位是远程游戏与桌面串流客户端。项目以桌面端为主，同时覆盖 Steam Link 与多种 Linux 发行形态（Snap、Flatpak、AppImage）。

在“命令行工具”维度，它提供可直接调用的 `moonlight` CLI 子命令，适合与自动化脚本或运维流程结合使用。

## 典型使用场景

- 通过命令行快速完成主机配对与应用发现，减少图形界面的重复点击。
- 在多台主机环境中，通过参数化命令统一启动串流会话。
- 将串流启动与退出动作接入本地脚本，实现会话自动化。
- 在图形界面不可用或远程运维场景下，使用 CLI 进行基础控制。

## 核心功能

- 支持 `list`、`quit`、`stream`、`pair` 四类主要 CLI 动作。
- `stream` 支持分辨率、帧率、码率、音频配置、输入行为等参数化控制。
- 支持 H.264、HEVC、AV1 编码能力，以及 HDR、YUV 4:4:4（部分条件下）。
- 支持多手柄、触控、快捷键透传与鼠标控制模式切换。

## 特色与差异点

- 同时覆盖 GUI 与 CLI，兼顾普通用户与自动化使用者。
- 对 Sunshine 生态适配较深，README 明确标注部分特性依赖 Sunshine。
- 跨平台发布形态丰富，包含桌面系统与多类 ARM/RISC-V 设备路径。

## 使用方式概览

- 图形界面：直接安装发布包后连接主机使用。
- 命令行：通过 `moonlight <action>` 触发动作，常见动作包括 `pair`、`list`、`stream`、`quit`。
- 源码构建：README 给出 Qt、编译器与平台依赖要求，可按平台说明编译。

## 限制与注意事项

- AV1、YUV 4:4:4、多点触控等能力在 README 中标注为依赖 Sunshine 或特定硬件条件。
- Steam Link 设备存在明确上限，包含分辨率、帧率、码率与 HDR 支持限制。
- Windows 构建路径要求 MSVC，README 明确说明不支持 MinGW。

## 链接

- 仓库主页：https://github.com/moonlight-stream/moonlight-qt
- README：https://raw.githubusercontent.com/moonlight-stream/moonlight-qt/master/README.md
- CLI 源码：https://raw.githubusercontent.com/moonlight-stream/moonlight-qt/master/app/cli/commandlineparser.cpp
- Releases：https://github.com/moonlight-stream/moonlight-qt/releases
- 官方站点：https://moonlight-stream.org

## 关联主题

- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/game]]
- [[00-元语/video]]
