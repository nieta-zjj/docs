---
title: "edit：基于 Rust 开发的简单终端文本编辑器，它致敬了经典的 MS-DOS 编辑器"

发布日期: "2026-02-22"
对象: "GitHub 项目 `microsoft/edit`"
项目主页: "https://github.com/microsoft/edit"
开源协议: "MIT License"
主要语言: "Rust"
统计快照: "Stars 13553，Forks 636，Watchers 83（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.2.1（发布时间：2025-10-15T14:26:15Z）"
---

## 摘要

### 一句话总结
Microsoft/edit 是一个基于 Rust 开发的简单终端文本编辑器，它致敬了经典的 MS-DOS 编辑器，同时提供了类似 VS Code 的现代界面和输入控制，旨在让不熟悉终端的用户也能轻松使用。

### 关键要点
* **项目基础信息**：采用 MIT 协议开源，主要使用 Rust 语言开发，目前拥有 13553 个 Stars 和 636 个 Forks，最新发布版本为 v1.2.1。
* **安装方式**：官方提供预编译的二进制文件，Windows 用户可直接通过 WinGet (`winget install Microsoft.Edit`) 进行安装。
* **编译要求**：需要安装 Rust 及其 nightly 工具链（或设置环境变量 `RUSTC_BOOTSTRAP=1`），并根据 Rust 版本（1.90 及更早版本或更新版本）使用不同的 release 配置文件进行构建。
* **构建配置**：支持在编译时通过环境变量进行配置，例如使用 `EDIT_CFG_LANGUAGES` 指定需要包含的语言列表。
* **包命名规范**：标准可执行文件名为 "edit"，为避免冲突，官方建议包维护者使用备用名称 "msedit"（需避免使用 "ms-edit"），并在可能的情况下分配 "edit" 别名。
* **ICU 库依赖**：项目的“搜索与替换”功能可选依赖 ICU 库。默认查找无版本后缀的 SONAME，但允许通过 `EDIT_CFG_ICUUC_SONAME` 等环境变量自定义库名称和 C++ 导出符号。
* **测试配置**：可通过运行 `cargo test -- --ignored` 来测试自定义的 ICU 环境变量设置是否生效。

### 风险与不足
* **命令冲突风险**：可执行文件名称 "edit" 存在与系统中现有命令发生冲突的潜在风险。
* **ICU 自动检测可靠性风险**：若开启 `EDIT_CFG_ICU_RENAMING_AUTO_DETECT=true` 让程序在运行时自动检测 ICU 版本，该检测方式未获得 ICU 官方支持，官方明确表示不建议对其产生依赖。

## 功能与定位

We all edit.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T06:06:29Z。
- 项目创建于 2025-03-21T18:58:21Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/microsoft/edit
- README：https://raw.githubusercontent.com/microsoft/edit/main/README.md
- Releases：https://github.com/microsoft/edit/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/productivity]]
- [[00-元语/terminal]]
- [[00-元语/cli]]
- [[00-元语/windows]]
