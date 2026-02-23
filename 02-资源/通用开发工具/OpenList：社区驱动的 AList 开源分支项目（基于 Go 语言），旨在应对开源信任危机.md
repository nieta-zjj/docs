---
title: "OpenList：社区驱动的 AList 开源分支项目（基于 Go 语言），旨在应对开源信任危机"

发布日期: "2026-02-22"
对象: "GitHub 项目 `OpenListTeam/OpenList`"
项目主页: "https://github.com/OpenListTeam/OpenList"
官方网站: "https://doc.oplist.org"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Go"
统计快照: "Stars 20872，Forks 1754，Watchers 51（抓取时间：2026-02-22）"
版本快照: "最新发布 beta（发布时间：2025-11-11T13:59:34Z）"
---

## 摘要

### 1) 一句话总结
OpenList 是一个社区驱动的 AList 开源分支项目（基于 Go 语言），旨在应对开源信任危机，提供支持数十种云存储后端的开箱即用文件管理与共享工具。

### 2) 核心要点
*   **项目背景**：作为 AList 的分支（Fork）项目，由社区驱动并长期治理，旨在保护开源生态免受基于信任的攻击。
*   **开源与合规**：采用 Go 语言开发，严格遵循 AGPL-3.0 开源协议，承诺代码完全公开和修改透明，目前无任何付费计划或商业部署。
*   **多存储支持**：支持接入 40 余种存储后端，包括本地存储、阿里云盘、OneDrive、Google Drive、S3、WebDAV、FTP/SFTP 等国内外主流云盘与协议。
*   **核心功能**：支持全格式文件预览（音视频/字幕、Office 文档、PDF、代码等）、WebDAV、离线下载、跨存储复制以及单线程下载的多线程加速。
*   **部署与管理**：支持 Docker 部署和 Cloudflare Workers 代理，提供 Web 端文件管理（上传、删除、重命名、移动等）、受保护路由（密码与身份验证）及暗黑模式。
*   **技术实现**：基于官方 SDK 或 API 运行，仅执行 HTTP 302 重定向或流量转发，不拦截、存储或篡改任何用户数据。

### 3) 风险与不足
*   **第三方冒用与侵权风险**：社区中存在冒用“OpenList”名称的第三方衍生项目（如 OpenListApp）及闭源商业化软件，可能导致用户混淆或违反 AGPL 协议。
*   **账号与限速风险**：用户需自行承担使用该软件可能带来的云盘账号被封禁或下载限速等风险。
*   **免责声明**：软件按“原样”提供，不提供任何明示或暗示的保证，项目维护者不对因使用或无法使用该软件造成的任何直接或间接损害负责。

## 功能与定位

A new AList Fork to Anti Trust Crisis

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:39:30Z。
- 项目创建于 2025-06-11T23:35:02Z，具备持续迭代与社区沉淀。
- 以 `Go` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/OpenListTeam/OpenList
- 官网：https://doc.oplist.org
- README：https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README.md
- Releases：https://github.com/OpenListTeam/OpenList/releases

## 相关文档

- [[02-资源/通用开发工具/alist：A file list／WebDAV program that supports multiple storages, powered by Gin and S|alist：A file list／WebDAV program that supports multiple storages, powered by Gin and S]]；关联理由：版本演进；说明：OpenList 明确定位为 AList 的社区分支，理解上游项目有助于判断其功能基线与分叉动因。

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/community]]
- [[00-元语/self-hosting]]
- [[00-元语/virtual-file-system]]
- [[00-元语/protocol]]
- [[00-元语/compliance]]
- [[00-元语/risk]]
