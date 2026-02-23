---
title: "Sunshine：开源的自托管低延迟云游戏流媒体服务器，专为 Moonlight 客户端设计"

发布日期: "2026-02-22"
对象: "GitHub 项目 `LizardByte/Sunshine`"
项目主页: "https://github.com/LizardByte/Sunshine"
官方网站: "http://app.lizardbyte.dev/Sunshine/"
开源协议: "GNU General Public License v3.0"
主要语言: "C++"
统计快照: "Stars 34663，Forks 1708，Watchers 137（抓取时间：2026-02-22）"
版本快照: "最新发布 v2026.221.41532（发布时间：2026-02-21T10:04:44Z）"
---

## 摘要

**1) 一句话总结**
Sunshine 是一个开源的自托管低延迟云游戏流媒体服务器，专为 Moonlight 客户端设计，支持多平台硬件编码及 Web UI 配置。

**2) 关键点**
* **项目基础**：基于 C++ 开发，采用 GPL v3.0 开源协议，在 GitHub 上拥有超过 3.4 万 Stars。
* **核心功能**：为各种设备上的 Moonlight 客户端提供云游戏服务，并提供 Web UI 以便在浏览器中进行配置和客户端配对。
* **硬件编码支持**：全面支持 AMD (AMF/VCE)、Intel (QuickSync) 和 Nvidia (NVENC) GPU 的硬件编码，同时提供软件编码备选方案。
* **跨平台兼容性**：支持 FreeBSD (14.3+)、Linux (Debian 13+/Fedora 41+/Ubuntu 22.04+)、macOS (14+) 和 Windows (11+) 操作系统。
* **手柄模拟**：支持在宿主机上模拟多种主流手柄，包括 PlayStation (DS4/DS5)、Nintendo Switch Pro 和 Xbox (360/One/Series) 手柄（具体支持情况因操作系统而异）。
* **屏幕捕获技术**：根据不同系统提供多种捕获方式，如 Windows 的 DXGI、Linux/FreeBSD 的 KMS/Wayland/X11，以及 macOS 的 Video Toolbox。
* **最低系统要求**：至少需要 4GB 内存、AMD Ryzen 3 或 Intel Core i3 处理器，以及 5GHz 802.11ac 无线网络。
* **进阶体验建议**：若需体验 4K 或 HDR 画质，官方建议升级至 Ryzen 5 或 Core i5 处理器、更高阶的 GPU（如 Nvidia GTX 10 系列或 RTX 2000 系列以上），并使用 CAT5e 及以上的有线网络。

**3) 风险/不足**
* 官方明确警告：系统要求相关表格仍在完善中（Work in progress），用户不应仅基于该文档信息来购买硬件。
* Windows Server 操作系统不支持虚拟手柄（Virtual gamepads）。
* 部分屏幕捕获功能（如 Linux 下的 NVIDIA NvFBC 和 Windows 下的 Windows.Graphics.Capture）目前仅为部分支持（Partial Support）。

## 功能与定位

Self-hosted game stream host for Moonlight.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T13:00:00Z。
- 项目创建于 2021-12-15T23:38:57Z，具备持续迭代与社区沉淀。
- 以 `C++` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/LizardByte/Sunshine
- 官网：http://app.lizardbyte.dev/Sunshine/
- README：https://raw.githubusercontent.com/LizardByte/Sunshine/master/README.md
- Releases：https://github.com/LizardByte/Sunshine/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/self-hosting]]
- [[00-元语/game]]
- [[00-元语/video]]
- [[00-元语/desktop-client]]
- [[00-元语/windows]]
- [[00-元语/risk]]
