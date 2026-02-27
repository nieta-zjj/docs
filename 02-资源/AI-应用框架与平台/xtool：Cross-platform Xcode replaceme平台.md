---
title: xtool：Cross-platform Xcode replaceme平台
对象: GitHub 仓库
项目主页: https://github.com/xtool-org/xtool
开源协议: MIT License
来源: xtool README 与 Documentation
---

## 摘要

xtool 是一个开源的跨平台命令行工具，允许开发者在 Linux、Windows 和 macOS 上脱离 Xcode，使用 Swift Package Manager 构建、签名并向真机部署 iOS 应用。它以 `xtool.yml` 声明式配置为核心，覆盖项目初始化、编译、签名、设备安装与运行等流程，并提供 `XKit` 库供程序化接入 Apple Developer Services 与设备管理能力。对于希望在非 macOS 环境做 iOS 开发验证、或希望减少对 Xcode 工程体系依赖的团队，xtool 提供了一条可复用的工程化路径。

## 功能与定位

xtool 定位为“跨平台 Xcode 替代工具”，重点是以 SwiftPM 工程和命令行流程复刻 iOS 应用开发的关键环节。

它面向已经具备 Swift/iOS 基础、希望通过 Linux 或 Windows WSL 参与 iOS 开发，或希望在 macOS 上采用更轻量命令行工作流的开发者与团队。

## 典型使用场景

- 在 Linux 或 Windows WSL 上构建、签名并安装 iOS 应用到真机。
- 在 macOS 上采用 SwiftPM + 命令行方式完成 iOS 开发迭代，减少对 Xcode UI 工作流的依赖。
- 在 CI 或自动化脚本中调用 `xtool` / `XKit`，执行设备管理与开发者服务相关操作。
- 通过 `xtool.yml` 管理应用元数据、资源、权限与扩展配置，统一工程配置入口。

## 特色与差异点

- 提供 Linux/WSL/macOS 的跨平台 iOS 开发路径，而非仅限 macOS。
- 基于 SwiftPM 项目结构，便于与现有 Swift 代码库和编辑器生态集成。
- 内置对 Apple Developer Services 的流程化集成，可覆盖设备注册、证书与描述文件相关步骤。
- 支持 App Extension 与 Entitlements 配置，适合从简单应用到中等复杂度项目的增量扩展。

## 使用方式概览

- 安装阶段：按平台准备 Swift 工具链与依赖组件，安装 `xtool`。
- 初始化阶段：执行 `xtool setup` 完成认证与 SDK 相关初始化。
- 开发阶段：使用 `xtool new` 创建模板项目，在项目内执行 `xtool dev` 构建与部署。
- 配置阶段：通过 `xtool.yml` 管理 `bundleID`、`Info.plist`、资源、图标、权限与扩展。
- 设备操作阶段：使用 `devices`、`install`、`uninstall`、`launch` 等子命令完成真机侧操作。

## 限制与注意事项

- 免费 Apple ID 场景下存在能力限制，部分权限能力不可用，且 Bundle ID 处理存在额外约束。
- 密码登录模式依赖 Apple 私有 API，实践中需自行评估账号安全与合规风险。
- 文档明确提到尚未支持 ExtensionKit，扩展能力目前以传统扩展机制为主。
- Linux/Windows 路径依赖 USB 通信组件与本地环境配置，部署前应先做设备连通性验证。

## 链接

- 仓库主页：https://github.com/xtool-org/xtool
- README：https://github.com/xtool-org/xtool/blob/main/README.md
- 文档入口：https://github.com/xtool-org/xtool/blob/main/Documentation/xtool.docc/xtool.md
- Linux/Windows 安装文档：https://github.com/xtool-org/xtool/blob/main/Documentation/xtool.docc/Installation-Linux.md
- macOS 安装文档：https://github.com/xtool-org/xtool/blob/main/Documentation/xtool.docc/Installation-macOS.md
- App 配置文档：https://github.com/xtool-org/xtool/blob/main/Documentation/xtool.docc/Control.md
- App Extension 文档：https://github.com/xtool-org/xtool/blob/main/Documentation/xtool.docc/Appex.md
- 入门教程：https://github.com/xtool-org/xtool/blob/main/Documentation/xtool.docc/First-app.tutorial
- 发布页：https://github.com/xtool-org/xtool/releases

## 关联主题

- [[00-元语/cli]]
- [[00-元语/ide]]
- [[00-元语/sdk]]
- [[00-元语/windows]]
