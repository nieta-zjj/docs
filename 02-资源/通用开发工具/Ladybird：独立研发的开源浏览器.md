---
title: "Ladybird：独立研发的开源浏览器"

发布日期: "2026-02-22"
对象: "GitHub 项目 `LadybirdBrowser/ladybird`"
项目主页: "https://github.com/LadybirdBrowser/ladybird"
官方网站: "https://ladybird.org"
开源协议: "BSD-2-Clause"
主要语言: "C++"
统计快照: "Stars 58655，Forks 2677，Watchers 269（抓取时间：2026-02-22）"
版本快照: "无正式 release（抓取结果 0）"
备注: "用户提供“22939”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

**1) 一句话总结**
Ladybird 是一款采用 C++ 编写、基于全套自研引擎的完全独立开源网页浏览器，目前处于 Pre-alpha 阶段，需通过源码编译且主要供开发者研究与贡献。

**2) 核心要点**
* **开源与语言**：项目采用 BSD-2-Clause 协议开源，主要使用 C++ 语言开发。
* **完全独立引擎**：不依赖 Blink、Gecko 或 WebKit 等现有主流引擎，从零开始构建符合 Web 标准的渲染与执行环境。
* **技术渊源**：底层全套核心组件（包括 LibWeb、LibJS、LibWasm、LibHTTP 等）深度继承自 SerenityOS 操作系统项目。
* **多进程架构**：系统由主 UI 进程、多个 WebContent 渲染进程、图像解码进程（ImageDecoder）以及请求服务进程（RequestServer）协同工作。
* **安全与沙盒隔离**：每个浏览器标签页拥有专属的渲染进程并与系统隔离，图像解码和网络连接也在独立进程中执行以防御恶意内容。
* **跨平台支持**：可在 Linux、macOS、多种类 Unix 系统上运行，Windows 用户需通过 WSL2 运行。
* **使用场景**：目前仅适合开发者参与现代浏览器引擎的底层开发、测试，以及跨平台架构与沙盒机制的研究。

**3) 风险与不足**
* **成熟度极低**：项目当前处于 Pre-alpha（准内测）状态，尚未达到普通用户日常浏览网页的标准。
* **无预编译版本**：目前 GitHub 仓库中暂无正式的 Release 发布版本，用户必须自行配置环境并从源码编译。

## 功能与定位

Ladybird 是一款定位为“真正独立”的网页浏览器项目，其核心采用基于 Web 标准的全新自研引擎。项目的长远目标是为现代 Web 构建一个完整且可用的浏览器。目前该项目仍处于 Pre-alpha（准内测）阶段，仅适合开发者使用和研究。

## 典型使用场景

* 开发者参与现代浏览器引擎的底层开发、测试与贡献。
* 跨平台（类 Unix 环境）的浏览器架构与沙盒机制研究。

## 核心功能

* **多进程架构**：系统由主 UI 进程、多个 WebContent 渲染进程、ImageDecoder（图像解码）进程以及 RequestServer（请求服务）进程协同工作。
* **安全与沙盒隔离**：
  * 图像解码和网络连接均在独立进程中执行，以增强对恶意内容的防御能力。
  * 每个浏览器标签页都拥有专属的渲染进程，并与系统其他部分进行沙盒隔离。
* **全套自研核心组件**（继承自 SerenityOS）：
  * **引擎层**：LibWeb（Web 渲染引擎）、LibJS（JavaScript 引擎）、LibWasm（WebAssembly 实现）。
  * **网络与安全**：LibHTTP（HTTP/1.1 客户端）、LibCrypto/LibTLS（加密原语与传输层安全）。
  * **多媒体与图形**：LibGfx（2D 图形库、图像解码与渲染）、LibMedia（音视频播放）。
  * **系统与基础库**：LibCore（事件循环与 OS 抽象层）、LibIPC（进程间通信）、LibUnicode（Unicode 与本地化支持）。

## 特色与差异点

* **完全独立的引擎**：不依赖现有的主流浏览器引擎（如 Blink、Gecko 或 WebKit），从零开始构建符合 Web 标准的渲染与执行环境。
* **技术渊源**：其底层核心组件库深度继承自 SerenityOS 操作系统项目。

## 使用方式概览

* **支持平台**：可在 Linux、macOS、Windows（需通过 WSL2）以及多种类 Unix 系统上运行。
* **编译运行**：项目需通过源码编译，具体构建步骤依赖于项目内的 `Documentation/BuildInstructionsLadybird.md` 文档指导。

## 限制与注意事项

* **成熟度极低**：当前处于 Pre-alpha 状态，尚未达到普通用户日常浏览网页的标准。
* **无预编译版本**：目前 GitHub 仓库中暂无正式的 Release 发布版本，用户必须自行配置环境并编译源码。

## 链接

* 项目主页：https://github.com/LadybirdBrowser/ladybird
* 官方网站：https://ladybird.org
* Discord 社区：https://discord.gg/nvfjVJ4Svh

## 关联主题

- [[00-元语/github]]
- [[00-元语/desktop-client]]
- [[00-元语/wasm]]
- [[00-元语/security]]
- [[00-元语/windows]]
