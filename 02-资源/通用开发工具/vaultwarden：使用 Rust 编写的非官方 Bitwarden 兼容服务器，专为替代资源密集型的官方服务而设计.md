---
title: "vaultwarden：使用 Rust 编写的非官方 Bitwarden 兼容服务器，专为替代资源密集型的官方服务而设计"

发布日期: "2026-02-22"
对象: "GitHub 项目 `dani-garcia/vaultwarden`"
项目主页: "https://github.com/dani-garcia/vaultwarden"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Rust"
统计快照: "Stars 55316，Forks 2565，Watchers 275（抓取时间：2026-02-22）"
版本快照: "最新发布 1.35.3（发布时间：2026-02-10T20:37:03Z）"
---

## 摘要

### 1) 一句话总结
Vaultwarden（原 bitwarden_rs）是一个使用 Rust 编写的非官方 Bitwarden 兼容服务器，专为替代资源密集型的官方服务而设计，非常适合个人和小型组织的轻量级自托管部署。

### 2) 核心要点
*   **基本信息**：项目使用 Rust 编写，采用 AGPL-3.0 开源协议，在 GitHub 上拥有超过 5.5 万 Stars，最新版本为 1.35.3。
*   **客户端兼容性**：兼容官方 Bitwarden 客户端（移动端、桌面端、浏览器插件等），并内置了修改版的 Web 密码库客户端。
*   **核心功能**：提供了几乎完整的 Bitwarden API 实现，包括个人密码库、Send（发送）、附件、网站图标和紧急访问等功能。
*   **组织与高级功能**：支持组织管理（集合、密码共享、成员角色、事件日志、目录同步和策略等）。
*   **多因素认证 (MFA)**：支持多种两步验证方式，包括 Authenticator、电子邮件、FIDO2 WebAuthn、YubiKey 和 Duo。
*   **部署方式**：官方强烈推荐使用容器镜像（发布于 ghcr.io、docker.io 和 quay.io）进行部署，并提供了 Docker CLI 和 Docker Compose 的配置示例。
*   **网络配置**：项目基于 Rocket Web 框架，官方建议用户在前端配置反向代理来处理 TLS 证书。
*   **项目更名**：为避免与官方 Bitwarden 服务器产生商标和品牌混淆，项目已从 Bitwarden_RS 正式更名为 Vaultwarden。

### 3) 风险与不足
*   **数据丢失免责**：官方明确声明不对使用过程中发生的任何数据丢失（包括密码、附件等）承担责任，强烈建议用户定期备份文件和数据库。
*   **安全上下文限制**：Web 密码库依赖 Web Crypto API，必须在安全上下文（即开启 HTTPS 或仅限 `http://localhost`）下才能正常工作。
*   **第三方包风险**：使用社区驱动的第三方安装包可能存在版本滞后，或在配置方式上与官方标准产生偏差的风险。
*   **支持渠道限制**：由于是非官方项目，遇到任何 Bug 或崩溃问题时，**绝对不能**使用官方 Bitwarden 的支持渠道，只能通过 Vaultwarden 的社区（Matrix、GitHub、Discourse）寻求帮助。

## 功能与定位

Unofficial Bitwarden compatible server written in Rust, formerly known as bitwarden_rs

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:57:54Z。
- 项目创建于 2018-02-17T22:40:20Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/dani-garcia/vaultwarden
- README：https://raw.githubusercontent.com/dani-garcia/vaultwarden/main/README.md
- Releases：https://github.com/dani-garcia/vaultwarden/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/self-hosting]]
- [[00-元语/security]]
- [[00-元语/risk]]
