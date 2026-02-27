---
title: "MonitorControl： Control your display's brigh 开发工具"
对象: GitHub 仓库
来源: MonitorControl/MonitorControl README
原始链接: https://github.com/MonitorControl/MonitorControl
---

## 摘要

MonitorControl 是面向 macOS 的显示器控制工具，核心用途是统一管理外接显示器与部分虚拟屏幕的亮度、音量和对比度，并在系统层面提供原生风格 OSD 反馈。它适合多屏办公和需要键盘快捷调节亮度/音量的用户，强调“菜单栏轻量操作 + 多协议兼容 + 硬件与软件调光结合”。

## 功能与定位

MonitorControl 提供菜单栏滑杆与键盘控制入口，帮助用户在 macOS 下调节外接显示器参数。基于项目 README，可覆盖亮度、音量、对比度控制，并支持原生 Apple 按键交互与原生风格 OSD 显示。

## 典型使用场景

- 多显示器办公时，用统一入口同步调节多块屏幕亮度。
- 使用 Apple 键盘快捷键控制外接显示器亮度或媒体音量。
- 显示器硬件调节能力有限时，结合软件调光降低屏幕亮度。
- 使用 AirPlay、Sidecar、DisplayLink 等虚拟/转接屏幕时进行亮度管理。

## 特色与差异点

- 多协议控制：同时覆盖 DDC、Apple 原生协议、Gamma 表软件调光与遮罩调光。
- 硬件+软件联动：在硬件最小亮度以下继续通过软件方式降亮，支持更暗场景。
- 多屏一致性：支持单滑杆或快捷键同步多屏，降低多设备调节成本。
- 定制能力较强：支持高级设置与自定义快捷键，适配不同硬件组合。

## 使用方式概览

- 安装方式：从 Releases 下载 `.dmg`，或使用 Homebrew `brew install --cask monitorcontrol`。
- 初次使用：按需授予 `Accessibility` 权限，以启用原生 Apple 亮度/媒体键映射。
- 日常操作：通过菜单栏图标滑杆或键盘快捷键直接调节显示器参数。
- 进阶设置：在应用设置中开启高级选项并配置自定义快捷键。

## 限制与注意事项

- README 明确提示：v4.2.0 在部分运行 macOS 15 Sequoia 或 Tahoe 的配置上可能崩溃，且可能无法自动更新；需手动升级到较新版本。
- 硬件兼容存在边界：部分 Mac 内置 HDMI 口与部分显示器/扩展坞组合不支持完整 DDC，仅能使用软件调光。
- 在部分 macOS Tahoe 场景下，控制中心 OSD 的百分比显示可能不更新。

## 链接

1. 项目主页：https://github.com/MonitorControl/MonitorControl
2. 版本发布：https://github.com/MonitorControl/MonitorControl/releases
3. 社区讨论：https://github.com/MonitorControl/MonitorControl/discussions
4. 项目 README：https://raw.githubusercontent.com/MonitorControl/MonitorControl/main/README.md

## 关联主题

- [[00-元语/hardware-control]]
- [[00-元语/desktop-client]]
