---
title: "copyparty：自托管文件分享与媒体服务"

发布日期: "2026-02-22"
对象: "GitHub 项目 `9001/copyparty`"
项目主页: "https://github.com/9001/copyparty"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 42555，Forks 1735，Watchers 141（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.20.7（发布时间：2026-02-14T23:39:09Z）"
---

## 摘要

### 一句话总结
copyparty 是一个基于 Python 的单文件便携式多协议文件服务器，支持断点续传、重复数据删除、多种传输协议（WebDAV/FTP/SFTP等），并提供功能丰富的浏览器端文件管理与媒体播放体验。

### 核心要点
*   **技术栈与热度**：完全使用 Python（支持 2 或 3）编写，无强制外部依赖；采用 MIT 开源协议，在 GitHub 上拥有超 4.2 万 Stars 和 1700+ Forks。
*   **多协议支持**：除了 HTTP(S) 访问外，还内置支持 WebDAV、SFTP、FTP(S)、TFTP 以及 SMB/CIFS 协议。
*   **核心文件功能**：支持加速的断点续传、拖拽上传、边传边下（Race the beam）、打包下载（ZIP/TAR）、上传撤销（Unpost）以及设置文件生命周期（阅后即焚）。
*   **高级存储与索引**：支持基于软链接的文件上传去重（Deduplication）、文件系统监控与定期扫描、音频标签与扩展属性（xattrs）元数据提取，并支持挂载 AWS S3 等云存储。
*   **媒体与预览**：内置支持几乎所有音频格式的媒体播放器（含播放列表和均衡器），提供图片缩略图、实时日志/文本查看器以及 Markdown 编辑器与渲染器。
*   **权限与认证**：支持基于目录和用户的细粒度权限控制、隐藏特定子目录、基于 IP 范围（CIDR）的自动登录与限制，以及集成 OAuth 等第三方身份认证。
*   **服务端扩展性**：支持局域网服务发现（Zeroconf/mDNS/SSDP）、生成快捷访问二维码、事件触发钩子（支持 ZeroMQ 消息）、Prometheus 监控指标以及反向代理部署（支持获取真实 IP）。
*   **部署与分发**：提供开箱即用的单文件脚本（`copyparty-sfx.py`），并已集成至 Arch Linux、Homebrew 和 Nix 的包管理器中。

### 风险与不足
*   **SMB 协议风险**：官方文档明确指出其内置的 SMB/CIFS 服务器不安全且速度较慢，不推荐在广域网（WAN）环境下使用。
*   **包管理缺失**：目前尚未提供 Fedora 系统的官方安装包。

## 功能与定位

Portable file server with accelerated resumable uploads, dedup, WebDAV, SFTP, FTP, TFTP, zeroconf, media indexer, thumbnails++ all in one file

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:04:37Z。
- 项目创建于 2019-05-26T15:28:33Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/9001/copyparty
- README：https://raw.githubusercontent.com/9001/copyparty/main/README.md
- Releases：https://github.com/9001/copyparty/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/self-hosting]]
- [[00-元语/protocol]]
- [[00-元语/security]]
- [[00-元语/audio]]
- [[00-元语/video]]
- [[00-元语/virtual-file-system]]
