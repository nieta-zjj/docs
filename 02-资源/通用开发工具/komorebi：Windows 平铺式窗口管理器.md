---
title: "komorebi：Windows 平铺式窗口管理器"

来源:
  - "https://github.com/LGUG2Z/komorebi"
  - "https://lgug2z.github.io/komorebi"
  - "https://komorebi.lgug2z.com/schema"
  - "https://github.com/LGUG2Z/komorebi-license"
适用系统: "Windows 10 及以上"
许可: "Komorebi License 2.0.0（基于 PolyForm Strict 1.0.0 的分支；个人用途与商业用途限制明显不同）"
---

## 摘要

**1) 一句话总结**
komorebi 是一款专为 Windows 10 及以上版本设计的平铺窗口管理器，作为 DWM 扩展运行，提供丰富的命令行控制与自定义功能，但严格限制未经授权的商业及工作场所使用。

**2) 关键要点**
*   **运行机制**：作为微软桌面窗口管理器（DWM）的扩展运行，默认极少修改系统环境，深度定制需用户通过配置文件主动开启。
*   **控制与热键**：通过 `komorebic.exe` 提供 CLI 控制，自身不处理键盘绑定，需配合 `whkd` 或 AutoHotKey 等第三方热键守护程序使用。
*   **布局与UI**：内置 BSP（二分空间划分）和垂直堆叠等多种布局，并包含支持小部件和主题定制的专属状态栏（`komorebi-bar.exe`）。
*   **外观自定义**：支持独立设置工作区内边距和容器内边距，支持活动窗口边框高亮，并可按单窗口、堆叠或单片眼镜模式设置不同颜色。
*   **应用兼容性**：提供社区维护的特定应用配置文件，用于修复不符合 Windows 开发指南的应用程序在平铺时的异常行为。
*   **安装与初始化**：可通过 Scoop、WinGet 安装或使用 Rust 从源码构建；提供 `komorebic quickstart` 命令一键下载预设配置。
*   **系统优化建议**：官方强烈建议开启 Windows 长路径支持，并关闭“不必要的系统动画”以获得最佳性能。
*   **隐私安全**：不收集或外发任何设备及使用数据，日志文件仅保存在本地 `$Env:LOCALAPPDATA\\komorebi\\` 目录。

**3) 风险与缺口**
*   **严格的商业使用限制**：采用 Komorebi 2.0.0 许可证，完全禁止任何形式的商业或工作场所使用（需单独购买许可证）；在注册了 MDM（移动设备管理）的设备上运行会强制弹出商业使用警告。
*   **边框功能稳定性风险**：由于微软 Win32 API 的限制，自定义活动窗口边框功能在实现上属于“粗糙的 Hack”，开发者明确指出该功能可能存在 Bug。

## 功能与定位

komorebi 是面向 Windows 的平铺式窗口管理器。它以扩展 Microsoft Desktop Window Manager 的方式工作：不替换桌面环境，而是让你用命令行控制窗口平铺、工作区与显示器等行为，并把“如何绑定热键”交给外部工具（例如 `whkd`、AutoHotKey）。

它的设计取向是默认尽可能少改系统；需要更多视觉/行为改动时，由用户在自己的配置文件里选择性开启。

## 典型使用场景

- 想在 Windows 上获得接近 Linux 平铺窗口管理器的键盘驱动体验。
- 多显示器、多工作区下，需要更高效的窗口组织与切换方式。
- 希望把窗口管理能力“脚本化”：用 CLI 命令、外部热键工具、以及状态栏/自定义集成来构建自己的工作流。

## 核心功能

- 窗口管理器与命令行客户端分离：窗口管理器进程（`komorebi.exe`）与命令行控制（`komorebic.exe`）。
- 通过配置文件启用布局、间距、边框高亮等行为，并提供示例配置降低上手成本。
- 提供与窗口管理器深度集成的状态栏（`komorebi-bar.exe`）。
- 提供配置 Schema 参考，用于校验与自动补全配置。
- 生态协作：推荐与 `whkd`、AutoHotKey 等热键方案搭配；并提供社区维护的应用兼容性配置库。

## 特色与差异点

- Windows 原生桌面环境之上的“扩展式”平铺方案（相对“替换整个桌面/壳层”的路线更克制）。
- 把热键绑定明确交给外部工具，组件边界清晰。
- 明确提供配置 Schema 与 CLI 参考文档，利于自动化与二次集成。
- 许可证策略非常明确：个人用途与工作场景用途的边界要求严格。

## 使用方式概览

- 安装方式：Scoop、WinGet、离线 MSI、或从源码构建（详见官方安装文档）。
- 初始配置：通过 `komorebic quickstart` 获取示例配置与相关文件，再按需调整。
- 日常操作：用热键工具触发 `komorebic` 命令，驱动平铺、布局、工作区与窗口行为。

## 限制与注意事项

- 许可证限制是使用前必须确认的前置条件：默认许可不允许在工作场景使用；如需商业用途，需要单独的 Individual Commercial Use License。
- 在 MDM 管理设备上运行时，可能出现与商业使用提醒相关的提示；文档也提供了对应的处理路径（如许可证校验命令）。
- 活动窗口边框功能在实现上受到 Win32 API 能力限制，作者明确提示其可能不稳定。
- 本地数据：文档声明会在本机目录保存日志与临时窗口句柄；另外，若用户主动执行许可证校验相关命令，会产生一次联网验证请求。

## 链接

- GitHub 仓库：https://github.com/LGUG2Z/komorebi
- 官方文档：https://lgug2z.github.io/komorebi
- CLI 快速开始：https://lgug2z.github.io/komorebi/cli/quickstart.html
- 安装文档：https://lgug2z.github.io/komorebi/installation.html
- 示例配置：https://lgug2z.github.io/komorebi/example-configurations.html
- 配置 Schema：https://komorebi.lgug2z.com/schema
- 许可证：https://github.com/LGUG2Z/komorebi-license
- 商业许可证说明：https://lgug2z.com/software/komorebi
- whkd：https://github.com/LGUG2Z/whkd
- Awesome komorebi：https://github.com/LGUG2Z/awesome-komorebi
- Discord：https://discord.gg/mGkn66PHkx
- komorebi for Mac：https://github.com/LGUG2Z/komorebi-for-mac

## 关联主题

- [[00-元语/windows]]
- [[00-元语/desktop-client]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
- [[00-元语/compliance]]
- [[00-元语/productivity]]
