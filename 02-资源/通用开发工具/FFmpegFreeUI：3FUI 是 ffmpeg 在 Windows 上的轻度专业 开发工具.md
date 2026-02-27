---
title: FFmpegFreeUI：3FUI 是 ffmpeg 在 Windows 上的轻度专业 开发工具
对象: GitHub 仓库
来源: Lake1059/FFmpegFreeUI
仓库链接: https://github.com/Lake1059/FFmpegFreeUI
---

## 摘要

FFmpegFreeUI（3FUI）是基于 .NET 10 与 WinForm 的 Windows 平台 FFmpeg 图形化外壳，面向需要轻度专业参数控制、批量任务处理与外部集成的用户。

项目核心是“GUI 外壳与 ffmpeg 核心解耦”：软件本体不内置 ffmpeg，可由用户按需配置并跟随 ffmpeg 更新。它提供任务队列、常用媒体处理能力、启动参数与远程调用、插件扩展等能力，适合个人压制、小规模工作流集成和可视化参数管理。

## 功能与定位

FFmpegFreeUI 是一个运行在 Windows 上的 FFmpeg 图形化交互外壳。项目将定位放在“轻度专业参数调整”，强调用可视化界面管理编码参数和任务队列，而不是做全自动一键转码。

从定位看，它适合愿意理解参数含义、希望提升批量处理效率的用户，也支持更深入的参数自定义与扩展。

## 典型使用场景

- 批量转码与格式转换：需要对一批视频、音频、图片做统一处理。
- 参数可视化配置：在 GUI 中组合编码器、滤镜与输出参数，减少手写命令成本。
- 外部系统集成：通过启动参数或远程调用，把转码任务接入既有工具链。
- 插件扩展：在已有工作流上扩展自定义 UI 或任务投递能力。

## 特色与差异点

- 不内置 ffmpeg：由用户自行配置 ffmpeg 可执行文件，便于快速跟进上游更新。
- 面向批量任务：强调任务队列管理、进度查看和处理过程可视化。
- 能力覆盖较广：除转码外，还覆盖常见媒体处理能力（如缩放、裁剪、字幕烧录、色彩管理、降噪等）。
- 可扩展：提供插件机制，并支持外部/远程触发任务。
- 发布形态多样：提供 ReadyToRun、SelfContained、SingleFile 等构建形态，便于按部署环境选择。

## 使用方式概览

1. 准备并配置 ffmpeg（放置到程序目录或配置环境变量）。
2. 在界面中选择编码器和参数。
3. 将输入文件加入任务队列执行。
4. 按需启用外部调用、远程调用或插件扩展能力。

## 限制与注意事项

- 开箱依赖外部 ffmpeg：未完成 ffmpeg 配置时无法直接转码。
- 平台重心在 Windows：Linux/macOS 主要依赖 Wine 等兼容层，兼容性与体验受环境影响。
- 许可需分层理解：仓库主项目为 MIT，但依赖组件有各自许可证，二次分发或商用前应逐项核对。

## 链接

- 仓库主页：https://github.com/Lake1059/FFmpegFreeUI
- README：https://github.com/Lake1059/FFmpegFreeUI/blob/main/README.md
- Releases：https://github.com/Lake1059/FFmpegFreeUI/releases
- Linux 文档：https://github.com/Lake1059/FFmpegFreeUI/blob/main/doc/linux.md
- 许可证：https://github.com/Lake1059/FFmpegFreeUI/blob/main/LICENSE.txt

## 相关文档

- [[02-资源/通用开发工具/FFmpeg：Mirror of https:／／git, ffmpeg, org／ffmpeg, git|FFmpeg：Mirror of https:／／git, ffmpeg, org／ffmpeg, git]]；关联理由：上下游；说明：FFmpegFreeUI 作为图形化外壳依赖 FFmpeg 核心能力，二者属于直接上游与下游关系。

## 关联主题

- [[00-元语/video]]
- [[00-元语/windows]]
- [[00-元语/desktop-client]]
- [[00-元语/cli]]
- [[00-元语/github]]
- [[00-元语/tool]]
