---
title: mpv：Command line media player 开发工具
对象: GitHub 仓库
项目主页: https://github.com/mpv-player/mpv
来源: README、DOCS/man/libmpv.rst、DOCS/man/ipc.rst、RELEASE_NOTES
---

## 摘要

mpv 是一款免费、开源、跨平台的命令行媒体播放器，强调高质量视频渲染与可嵌入能力。项目除了播放器本体，还提供 `libmpv`（C API）与 JSON IPC 控制接口，适合在第三方应用、自动化流程与定制化播放场景中复用。其核心优势在于格式兼容范围广、渲染链路成熟、扩展方式灵活；主要限制在于 IPC 不适合暴露到不受信任网络，以及旧硬件与旧系统兼容性不作为主要目标。

## 功能与定位

mpv 是面向桌面与开发场景的命令行媒体播放器，支持多种媒体格式、编解码器与字幕类型。除直接播放外，它也被设计为可复用播放内核，可通过 `libmpv` 集成到其他程序中。

## 典型使用场景

- 本地音视频播放与字幕播放。
- 作为应用内播放后端，供桌面工具或多媒体软件调用。
- 通过本地进程间通信做状态读取、播放控制与自动化联动。
- 通过脚本与插件扩展播放器交互与行为。

## 特色与差异点

- 渲染质量优先：默认渲染路径强调画质能力，不以低功耗设备省电为首要目标。
- 可嵌入能力强：`libmpv` 提供稳定的 C API，便于语言绑定与应用集成。
- 扩展生态完整：支持脚本与插件机制，适合做深度定制。
- 跨平台覆盖：支持 Linux、Windows、macOS，并持续在图形与音视频栈上演进。

## 使用方式概览

- 终端直接调用 mpv 进行媒体播放。
- 在自研程序中通过 `libmpv` 接入播放能力。
- 通过本地 JSON IPC 进行程序化控制与事件监听。
- 需要时可从源码构建，并按项目文档配置依赖与构建参数。

## 限制与注意事项

- JSON IPC 明确不属于安全网络协议，不提供认证与加密能力；应仅用于本地受信任环境。
- 项目对过旧硬件与过旧系统不保证兼容，低性能 GPU 场景可能出现体验下降。
- 版本维护以最新发布为主，旧版本通常不持续维护。
- 本仓库仅记录项目定位、能力与边界，不复述可能被滥用的可操作细节。

## 链接

- 仓库主页：https://github.com/mpv-player/mpv
- 官方手册：https://mpv.io/manual/master/
- 安装说明：https://mpv.io/installation/
- Wiki：https://github.com/mpv-player/mpv/wiki
- FAQ：https://github.com/mpv-player/mpv/wiki/FAQ
- Releases：https://github.com/mpv-player/mpv/releases
- libmpv 文档：https://github.com/mpv-player/mpv/blob/master/DOCS/man/libmpv.rst
- IPC 文档：https://github.com/mpv-player/mpv/blob/master/DOCS/man/ipc.rst

## 关联主题

- [[00-元语/cli]]
- [[00-元语/video]]
- [[00-元语/audio]]
- [[00-元语/desktop-client]]
- [[00-元语/protocol]]
- [[00-元语/sdk]]
