---
title: "paperless-ngx：基于 Python 的开源文档管理系统，旨在将实体纸质文档扫描、索引并归档为可搜索的在线存储库"

发布日期: "2026-02-22"
对象: "GitHub 项目 `paperless-ngx/paperless-ngx`"
项目主页: "https://github.com/paperless-ngx/paperless-ngx"
官方网站: "http://docs.paperless-ngx.com/"
开源协议: "GNU General Public License v3.0"
主要语言: "Python"
统计快照: "Stars 36827，Forks 2340，Watchers 138（抓取时间：2026-02-22）"
版本快照: "最新发布 v2.20.8（发布时间：2026-02-22T01:40:54Z）"
---

## 摘要

### 1) 一句话总结
Paperless-ngx 是一个基于 Python 的开源文档管理系统，旨在将实体纸质文档扫描、索引并归档为可搜索的在线存储库。

### 2) 关键点
* **项目背景**：该项目是原 Paperless 和 Paperless-ng 的官方继任者，由社区团队共同支持与维护。
* **技术与开源协议**：主要使用 Python 语言开发，采用 GNU General Public License v3.0 开源协议。
* **社区热度**：项目在 GitHub 上拥有极高的关注度，累计获得超 3.6 万 Stars 和 2300+ Forks。
* **部署方式**：官方最推荐的部署方式是使用 `docker compose`，并提供了一键安装脚本以便快速构建环境。
* **版本迁移**：支持从旧版 Paperless-ng 无缝迁移，用户只需替换为新的 Docker 镜像即可完成升级。
* **多语言与协作**：支持多语言界面，翻译工作通过 Crowdin 平台进行社区协同。
* **在线体验**：由 DigitalOcean 赞助，官方提供了一个可供测试的在线 Demo 环境。

### 3) 风险/不足
* **数据明文存储**：系统以明文形式存储文档信息，未进行数据加密。
* **部署环境限制**：由于常用于扫描包含敏感信息（如社保号、税务记录等）的文档，官方强烈警告**绝对不要在不受信任的主机上运行**。
* **无安全担保**：官方不对系统的安全性提供任何保证，用户需自行承担风险；最安全的方案是在具备备份机制的本地家庭服务器上运行。

## 功能与定位

A community-supported supercharged document management system: scan, index and archive all your documents

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T11:38:16Z。
- 项目创建于 2022-02-12T21:56:52Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/paperless-ngx/paperless-ngx
- 官网：http://docs.paperless-ngx.com/
- README：https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/dev/README.md
- Releases：https://github.com/paperless-ngx/paperless-ngx/releases

## 关联主题

- [[00-元语/ocr]]
- [[00-元语/data-pipeline]]
- [[00-元语/self-hosting]]
- [[00-元语/security]]
- [[00-元语/compliance]]
