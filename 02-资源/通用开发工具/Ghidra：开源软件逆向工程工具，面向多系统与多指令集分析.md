---
title: "Ghidra：开源软件逆向工程工具，面向多系统与多指令集分析"

发布日期: "2026-02-22"
对象: "GitHub 项目 `NationalSecurityAgency/ghidra`"
项目主页: "https://github.com/NationalSecurityAgency/ghidra"
官方网站: "https://www.nsa.gov/ghidra"
开源协议: "Apache License 2.0"
主要语言: "Java"
统计快照: "Stars 64858，Forks 7168，Watchers 1098（抓取时间：2026-02-22）"
版本快照: "最新发布 Ghidra_12.0.3_build（发布时间：2026-02-11T10:30:37Z）"
---

## 摘要

**1) 一句话总结**
Ghidra 是由美国国家安全局（NSA）创建并维护的一款开源软件逆向工程（SRE）框架，支持多平台和多种指令集，提供反汇编、反编译及脚本扩展等高级分析功能。

**2) 关键要点**
* **项目基础信息**：项目主要使用 Java 编写，采用 Apache License 2.0 开源协议，在 GitHub 上拥有超 6.4 万 Stars 和 7000+ Forks，最新版本为 12.0.3。
* **核心功能**：包含反汇编、汇编、反编译、图表化和脚本编写等数百种功能，支持交互式和自动化两种运行模式。
* **平台与兼容性**：支持 Windows、macOS 和 Linux 操作系统，兼容广泛的处理器指令集和可执行文件格式。
* **高度可扩展**：用户可以使用 Java 或 Python 编写自定义的 Ghidra 扩展组件和脚本。
* **安装要求**：运行官方预编译版本需要安装 JDK 21 64-bit，解压后通过执行 `ghidraRun` 或 `pyGhidraRun` 启动。
* **源码构建依赖**：从源码构建需要 JDK 21、Gradle 8.5+、Python 3（3.9 至 3.13 版本），以及对应平台的 C/C++ 编译工具（如 Linux/macOS 的 GCC/Clang 和 make，Windows 的 MSVC 2017+）。
* **开发环境集成**：支持通过 Eclipse 的 *GhidraDev* 插件或 Visual Studio Code 进行用户脚本和扩展开发；针对 Ghidra 核心工具的深度开发，官方强烈推荐使用 Eclipse。

**3) 风险/不足**
* **安全漏洞警告**：官方明确指出某些版本的 Ghidra 存在已知的安全漏洞，建议用户在操作前阅读官方的安全公告（Security Advisories）以了解潜在影响。

## 功能与定位

Ghidra is a software reverse engineering (SRE) framework

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:40:23Z。
- 项目创建于 2019-03-01T03:27:48Z，具备持续迭代与社区沉淀。
- 以 `Java` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/NationalSecurityAgency/ghidra
- 官网：https://www.nsa.gov/ghidra
- README：https://raw.githubusercontent.com/NationalSecurityAgency/ghidra/master/README.md
- Releases：https://github.com/NationalSecurityAgency/ghidra/releases

## 关联主题

- [[00-元语/软件工程]]
- [[00-元语/desktop-client]]
- [[00-元语/tool]]
- [[00-元语/security]]
- [[00-元语/github]]
