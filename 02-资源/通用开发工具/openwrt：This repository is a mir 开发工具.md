---
title: openwrt：This repository is a mir 开发工具
对象: GitHub 仓库
来源: openwrt/openwrt
项目主页: https://github.com/openwrt/openwrt
---

## 摘要

OpenWrt 是一个面向嵌入式设备的 Linux 操作系统，通过可写文件系统与 `opkg` 包管理机制替代传统静态固件，支持把路由器等设备改造成可持续扩展的平台。该仓库是官方 `git.openwrt.org` 的镜像，主要用于参考与接收 Pull Request，再经官方流程合并。它适合需要设备定制、网络功能扩展或嵌入式固件开发的用户与开发者，但使用前需要确认硬件兼容性并准备符合要求的编译环境。

## 功能与定位

OpenWrt 提供的是一套可构建、可扩展的嵌入式 Linux 基础系统，而不是仅提供单一型号设备的固定固件。

它的核心定位包括两层：

- 面向普通用户：替换原厂固件，获得更细粒度的网络与系统控制能力。
- 面向开发者：提供完整构建框架，可为不同目标硬件生成定制固件与软件包。

仓库说明明确该 GitHub 仓库为镜像仓库，代码主线在官方 Git 仓库维护，GitHub 侧继续接受 Pull Request。

## 典型使用场景

- 路由器固件替换与能力扩展：在设备支持前提下，从原厂固件迁移到 OpenWrt，按需安装网络与系统组件。
- 嵌入式系统开发：基于 OpenWrt 构建工具链与包管理体系，面向目标架构编译固件和应用。
- 网络功能增强：结合社区包与路由相关仓库，构建更复杂的路由和网络部署方案。

## 特色与差异点

- 可写文件系统：相较静态固件，后续运维和功能演进更灵活。
- 包管理生态：通过 `opkg` 和多个相关仓库持续扩展能力边界。
- 分层仓库协作：主仓库与 LuCI、Packages、Routing、Video 等仓库形成模块化生态。
- 多架构覆盖：官方提供多架构固件镜像与配套文档入口。

## 使用方式概览

- 直接使用固件：通过 Firmware Selector 与下载文档检索目标设备镜像和安装说明。
- 源码方式使用：在支持大小写敏感文件系统的环境中，按 OpenWrt 构建流程拉取软件包定义、完成配置并构建固件。
- 文档与社区协作：通过官方文档、论坛、邮件列表与缺陷跟踪系统获取支持和提交反馈。

## 限制与注意事项

- 硬件兼容性不是全覆盖，安装前必须先在官方硬件数据库确认设备支持状态。
- 编译环境有前提要求，README 明确指出 Cygwin 不受支持。
- GitHub 仓库为镜像定位，理解其合并路径与维护方式有助于正确参与贡献。

## 链接

- GitHub 仓库: https://github.com/openwrt/openwrt
- README: https://raw.githubusercontent.com/openwrt/openwrt/main/README.md
- Firmware Selector: https://firmware-selector.openwrt.org/
- 下载入口: https://openwrt.org/downloads
- 硬件数据库: https://openwrt.org/supported_devices
- 开发文档: https://openwrt.org/docs/guide-developer/start
- Releases: https://github.com/openwrt/openwrt/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/hardware-control]]
