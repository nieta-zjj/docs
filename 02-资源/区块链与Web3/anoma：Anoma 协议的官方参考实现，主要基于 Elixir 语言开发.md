---
title: "anoma：Anoma 协议的官方参考实现，主要基于 Elixir 语言开发"

发布日期: "2026-02-22"
对象: "GitHub 项目 `anoma/anoma`"
项目主页: "https://github.com/anoma/anoma"
官方网站: "https://anoma.net"
开源协议: "MIT License"
主要语言: "Elixir"
统计快照: "Stars 34054，Forks 4113，Watchers 193（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.35.1（发布时间：2026-02-22T09:59:39Z）"
---

## 摘要

**1) 一句话总结**
Anoma 是 Anoma 协议的官方参考实现，主要基于 Elixir 语言开发，是一个高关注度的区块链与 Web3 开源项目。

**2) 核心要点**
* **项目数据**：基于 MIT 协议开源，拥有超 3.4 万 Stars 和 4100+ Forks，最新发布版本为 v0.35.1。
* **技术栈与依赖**：核心开发语言为 Elixir；源码编译需要 Elixir、Rust、Protobuf 以及严格指定版本的 `protoc-gen-elixir` (0.11.0) 插件。
* **开发与发布周期**：项目采用双周（每两周一次）的发布周期，开发进度主要通过 GitHub Projects 和官方 Research Forums 追踪。
* **Git 工作流**：采用类似 Linux/Git 的代码管理风格，新代码需基于 `base` 分支开发，开发者无需手动与 `main` 分支同步，合并冲突由项目维护者统一处理。
* **运行方式**：支持下载预编译二进制文件运行（需配置 OpenSSL 等环境），支持源码编译运行（提供交互式 `iex -S mix` 和非交互式 `mix run --no-halt` 两种模式），并支持 Docker 镜像构建与运行。
* **跨平台支持**：源码编译提供了针对 MacOS、Ubuntu/Debian 和 Windows 的明确依赖安装指南。

**3) 风险与缺口**
* **文档缺失**：开发者文档（Developer Docs）和用户文档（User Docs）目前尚未发布（标记为 Coming Soon）。
* **已知编译问题 (:enacl)**：在部分 OSX 和 Linux 版本上编译 `:enacl` 依赖时可能失败，需切换至 `mariari/no-libsodium` 分支并重新获取依赖来解决。
* **已知编译问题 (:cairo)**：编译 `:cairo` 依赖时对 Rust 编译器版本要求严格，可能因工具链不兼容报错，官方建议安装 Rust 1.76.0 版本以解决此问题。

## 功能与定位

Reference implementation of Anoma

## 典型使用场景

- 用于链上应用、协议研究与基础设施选型。
- 适合作为 Web3 工程与生态调研入口。

## 核心功能

- 覆盖协议、执行环境或相关开发工具。
- 支持链上系统设计与验证。
- 强调生态兼容性与安全边界。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T11:17:33Z。
- 项目创建于 2021-02-02T10:00:16Z，具备持续迭代与社区沉淀。
- 以 `Elixir` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/anoma/anoma
- 官网：https://anoma.net
- README：https://raw.githubusercontent.com/anoma/anoma/base/README.md
- Releases：https://github.com/anoma/anoma/releases

## 关联主题

- [[00-元语/blockchain]]
- [[00-元语/protocol]]
- [[00-元语/cli]]
- [[00-元语/github]]
