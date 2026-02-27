---
title: "lapce：开发工具"
对象: "GitHub 项目 `lapce/lapce`"
项目主页: "https://github.com/lapce/lapce"
官方网站: "https://lap.dev/lapce/"
官方文档: "https://docs.lapce.dev/"
开源协议: "Apache License 2.0"
主要语言: "Rust"
版本快照: "稳定版 v0.4.6（2026-01-21 发布）；nightly（2026-02-26 发布）"
统计快照: "Stars 38097，Forks 1235，Open Issues 870（抓取时间：2026-02-26）"
来源: "README、docs、CHANGELOG、GitHub Releases/API"
---

## 摘要

**1) 一句话总结**
Lapce 是一款基于纯 Rust 编写并采用 GPU 渲染的极速开源代码编辑器，主打无阻塞性能、远程开发体验与 Vim 模态编辑支持。

**2) 关键要点**
- 采用 Rust + Floem + wgpu 技术栈，定位为跨平台代码编辑器。
- 内置 LSP 与 DAP 相关能力，覆盖补全、诊断、跳转与调试等常见开发需求。
- 远程开发强调本地编辑体验，配合代理架构减少远端网络延迟对输入响应的影响。
- 支持 WASI 插件生态与内置终端，兼顾扩展能力与日常命令行工作流。
- 提供 Windows、Linux、macOS 预编译包，也支持包管理器安装与源码构建。

## 功能与定位

Lapce 是面向通用软件开发场景的开源代码编辑器，核心目标是以 Rust 实现高性能编辑体验，并覆盖从本地开发到远程开发的统一工作流。

## 典型使用场景

- 作为日常主力编辑器完成多语言工程开发。
- 在远程服务器或云开发环境中进行代码编辑与调试。
- 对 Vim 操作习惯有依赖，但同时需要现代编辑器特性（LSP、终端、图形化界面）的开发者。
- 需要通过插件机制扩展编辑器能力的团队或个人。

## 核心功能

- 内置 LSP 能力：代码补全、诊断、代码操作、跳转与引用查询。
- 模态编辑能力：支持 Vim 风格编辑模式并可按需切换。
- 远程开发支持：提供与本地流程接近的远程开发体验。
- WASI 插件支持：可使用可编译到 WASI 的语言构建插件。
- 内置终端与差异对比：支持在编辑器内运行命令并进行文件差异查看。

## 特色与差异点

- 项目强调“编辑响应优先”的架构思路，目标是在复杂工程中保持交互流畅。
- 纯 Rust 实现配合 GPU 渲染路径，减少传统前端技术栈在大型文本场景中的性能瓶颈。
- 从 README 到 docs 一致强调远程开发体验，是其区别于一般轻量编辑器的重要方向。

## 使用方式概览

1. 通过 Releases 下载对应系统的预编译包并直接使用。
2. 在支持的平台中使用包管理器安装（如 Flatpak、Scoop，部分发行版有社区包）。
3. 需要自定义构建时，可按官方文档准备依赖后进行源码编译。

## 限制与注意事项

- 部分包管理器分发渠道属于社区维护，版本可能与官方 Releases 不同步。
- nightly 构建更新频繁，稳定性与兼容性应在生产使用前单独验证。
- 源码构建依赖较多，跨平台构建前需先核对官方文档中的系统依赖与构建条件。

## 链接

- 仓库：https://github.com/lapce/lapce
- 官网：https://lap.dev/lapce/
- 文档：https://docs.lapce.dev/
- README：https://github.com/lapce/lapce/blob/master/README.md
- Why Lapce：https://github.com/lapce/lapce/blob/master/docs/why-lapce.md
- 安装说明：https://github.com/lapce/lapce/blob/master/docs/installing-with-package-manager.md
- 构建说明：https://github.com/lapce/lapce/blob/master/docs/building-from-source.md
- 版本发布：https://github.com/lapce/lapce/releases

## 关联主题

- [[00-元语/ide]]
- [[00-元语/desktop-client]]
- [[00-元语/github]]
- [[00-元语/terminal]]
