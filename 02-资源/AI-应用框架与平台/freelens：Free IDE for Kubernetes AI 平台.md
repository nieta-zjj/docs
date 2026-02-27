---
title: freelens：Free IDE for Kubernetes AI 平台
对象: GitHub 仓库
项目主页: https://freelens.app
仓库链接: https://github.com/freelensapp/freelens
开源协议: MIT
最新版本: v1.8.1
版本发布时间: 2026-02-13
---

## 摘要

Freelens 是一个基于 MIT 协议开源、面向 Kubernetes 集群管理的跨平台桌面 IDE，定位为 Open Lens 的自由替代方案。它提供 macOS、Windows、Linux 多端可用的图形化操作体验，并通过扩展机制与现有扩展生态兼容，适合需要本地化、可扩展、可自托管工作流的 Kubernetes 使用者与团队。

## 功能与定位

Freelens 的核心定位是“用于 Kubernetes 的免费 IDE”。项目以独立桌面应用形式提供集群管理能力，目标是降低 Kubernetes 运维和日常操作门槛。

## 典型使用场景

- 在本地桌面端统一接入并管理多个 Kubernetes 集群。
- 作为 Open Lens 的替代工具，继续复用已有扩展能力。
- 在不依赖 SaaS 控制面的前提下，进行图形化集群观察与操作。
- 基于开源代码进行二次开发、定制构建与企业内部分发。

## 特色与差异点

- 免费开源且使用 MIT 协议，便于组织内部评估与再分发。
- 跨平台发布渠道完整，支持多种系统包与包管理器安装路径。
- 扩展生态强调兼容性，已覆盖大量原 Open Lens 扩展迁移场景。
- Linux Flatpak 发行形态下集成 `kubectl`、`helm` 等相关命令能力。

## 使用方式概览

- 直接安装发行包：通过 GitHub Releases 获取 macOS、Windows、Linux 对应安装包。
- 包管理器安装：支持 Homebrew、Flathub、Snap、WinGet、Scoop 等渠道。
- 开发者模式：可从源码构建，并以 `pnpm` 作为主要构建与测试工作流工具。

## 限制与注意事项

- 系统要求需满足官方基线：macOS 12+、Linux glibc 2.34+、Windows 10+。
- Flatpak 版本运行在沙盒中，终端与宿主环境交互方式与原生安装有差异。
- 官方开发文档明确指出 `pnpm dev` 与 webpack 存在兼容问题，日常开发建议使用构建后启动的标准流程。

## 链接

- 官网: https://freelens.app
- GitHub 仓库: https://github.com/freelensapp/freelens
- Releases: https://github.com/freelensapp/freelens/releases
- 最新发布: https://github.com/freelensapp/freelens/releases/tag/v1.8.1
- 开发文档: https://github.com/freelensapp/freelens/blob/main/DEVELOPMENT.md
- 扩展说明: https://github.com/freelensapp/freelens/wiki/Extensions

## 关联主题

- [[00-元语/ide]]
- [[00-元语/desktop-client]]
- [[00-元语/github]]
- [[00-元语/cli]]
