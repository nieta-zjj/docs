---
title: ImageGlass：A lightweight, versatile 开发工具
对象: GitHub 仓库
项目主页: https://imageglass.org
源码: https://github.com/d2phap/ImageGlass
开源协议: GPL-3.0
最新稳定版: 9.4.1.15
版本发布时间: 2026-01-02
适用平台: Windows 10/11 64-bit
---

## 摘要

ImageGlass 是一款适用于 Windows 的开源轻量级图片浏览工具，支持 90+ 图像格式，并提供多帧处理、基础编辑、命令行调用和高度可定制能力。它同时提供 Classic（免费）与 Store（付费自动更新）两种发行形态，适合日常看图、设计辅助与轻量图像处理场景。

## 功能与定位

ImageGlass 面向需要“启动快、格式广、界面简洁”的本地图片浏览需求。其核心定位是图片查看器，而不是全功能修图软件；在此基础上提供了基础编辑能力和与外部工具协作的扩展能力。

已公开资料显示，该项目基于 Magick.NET / ImageMagick 生态实现广泛格式支持，并针对动画与多帧图像提供单独的帧导航与导出能力。

## 典型使用场景

- 本地相册与素材库快速浏览：多缩放模式、全屏/无边框/窗口适配视图。
- 设计与素材筛选：查看 EXIF、颜色采样、通道查看、外部编辑器联动。
- 动图和多帧文件处理：对 GIF、WEBP、TIF、ICO 等进行帧级查看与导出。
- 系统集成场景：通过命令行工具进行默认看图器设置、主题/语言包安装与更新检查。

## 特色与差异点

- 双发行模式：Classic 免费手动更新，Store 版本提供自动更新和更快热修复分发。
- 高可定制性：主题、布局、扩展图标、快捷键与配置文件可按需调整。
- 文件资源管理器排序同步：可与 Windows 文件资源管理器排序行为对齐（有前提条件）。
- 命令行工具链完善：除主程序参数外，提供 `igcmd.exe` 覆盖常见系统级操作。

## 使用方式概览

- 安装方式：可通过官网发布包或 Microsoft Store 获取。
- 运行环境：Windows 10/11 64-bit（1809+），部分 SVG 体验依赖 WebView2。
- 日常操作：以 UI 浏览为主，辅以快捷键、手势与多窗口模式提升浏览效率。
- 自动化与集成：可借助命令行参数和 `igcmd.exe` 完成批量或系统级调用。

## 限制与注意事项

- SVG 默认使用 WebView2 渲染时，部分功能（如旋转、裁剪、导出帧）会受限。
- Window Backdrop 仅在 Windows 11 下生效。
- 与资源管理器排序同步时，需要相关资源管理器窗口保持打开状态。
- 仓库默认开发分支为 `develop`，稳定发布通常以 release 页面为准。

## 链接

- 仓库主页：https://github.com/d2phap/ImageGlass
- 官方网站：https://imageglass.org
- 官方文档：https://imageglass.org/docs
- 功能说明：https://imageglass.org/docs/features
- 支持格式：https://imageglass.org/docs/supported-formats
- 命令行文档：https://imageglass.org/docs/command-line-utilities
- 版本发布：https://github.com/d2phap/ImageGlass/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/windows]]
- [[00-元语/cli]]
- [[00-元语/image-editing]]
