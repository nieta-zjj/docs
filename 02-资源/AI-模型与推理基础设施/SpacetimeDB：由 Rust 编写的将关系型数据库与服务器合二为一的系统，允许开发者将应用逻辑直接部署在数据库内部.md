---
title: "SpacetimeDB：由 Rust 编写的将关系型数据库与服务器合二为一的系统，允许开发者将应用逻辑直接部署在数据库内部"

发布日期: "2026-02-22"
对象: "GitHub 项目 `clockworklabs/SpacetimeDB`"
项目主页: "https://github.com/clockworklabs/SpacetimeDB"
官方网站: "https://spacetimedb.com"
开源协议: "Other"
主要语言: "Rust"
统计快照: "Stars 19201，Forks 686，Watchers 77（抓取时间：2026-02-22）"
版本快照: "最新发布 v2.0.0-rc1（发布时间：2026-02-20T22:03:10Z）"
---

## 摘要

### 1) 一句话总结
SpacetimeDB 是一个由 Rust 编写的将关系型数据库与服务器合二为一的系统，允许开发者将应用逻辑直接部署在数据库内部，专为游戏和实时应用提供极低延迟的后端支持。

### 2) 核心要点
* **架构创新**：将数据库和服务器合并，客户端直接连接数据库并执行应用逻辑（称为“模块”），彻底消除对微服务、容器、Kubernetes 或额外服务器基础设施的需求。
* **高性能与低延迟**：专为游戏、聊天和协作工具等实时应用优化（非 OLAP 工作负载），通过将所有应用状态保存在内存中并使用预写日志（WAL）进行持久化来实现极高速度。
* **实战验证**：该系统是 MMORPG 游戏《BitCraft Online》的唯一后端，负责实时存储和处理游戏中所有的聊天、物品、地形及玩家位置同步。
* **多语言支持**：服务端模块（Modules）目前支持使用 Rust 和 C# 编写；客户端库（SDKs）支持 Rust、C# 和 TypeScript。
* **安装与运行**：提供 `spacetime` CLI 工具，支持 macOS、Linux 和 Windows 的脚本一键安装，同时支持通过 Docker 容器运行或从源码编译。
* **开源协议**：采用 BSL 1.1 协议（初期非严格意义上的开源），几年后将自动转换为带有自定义链接例外（linking exception）的 AGPL v3.0 协议，以确保社区贡献回流的同时，不强制要求使用者开源其商业代码。
* **项目热度**：该项目在 GitHub 上拥有超过 19,000 个 Stars，主要使用 Rust 语言开发。

## 功能与定位

Development at the speed of light

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:24:59Z。
- 项目创建于 2023-06-17T07:28:29Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/clockworklabs/SpacetimeDB
- 官网：https://spacetimedb.com
- README：https://raw.githubusercontent.com/clockworklabs/SpacetimeDB/master/README.md
- Releases：https://github.com/clockworklabs/SpacetimeDB/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/game]]
- [[00-元语/cli]]
- [[00-元语/sdk]]
- [[00-元语/serverless]]
- [[00-元语/github]]
