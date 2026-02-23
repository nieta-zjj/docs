---
title: "Mole：轻量级工具与效率项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `tw93/Mole`"
项目主页: "https://github.com/tw93/Mole"
官方网站: "https://x.com/HiTw93/status/2025424790467871149"
开源协议: "MIT License"
主要语言: "Shell"
统计快照: "Stars 36080，Forks 978，Watchers 94（抓取时间：2026-02-22）"
版本快照: "最新发布 V1.27.0（发布时间：2026-02-21T15:49:46Z）"
---

## 摘要

### 1) 一句话总结
Mole 是一款基于 Shell 开发的 macOS 命令行工具，集成了深度清理、智能卸载、磁盘分析与实时系统监控功能，旨在以单一二进制文件全面优化 Mac 性能。

### 2) 关键要点
*   **项目热度与协议**：采用 MIT 开源协议，目前拥有超过 36,000 个 Stars，最新发布版本为 V1.27.0。
*   **多合一工具包**：将 CleanMyMac、AppCleaner、DaisyDisk 和 iStat Menus 的核心功能整合为一个单一的二进制文件。
*   **深度清理与卸载**：支持扫描并清理缓存、日志和浏览器残留以释放大量空间；智能卸载功能可彻底移除应用及其启动代理、偏好设置等隐藏残留文件。
*   **磁盘分析与监控**：提供磁盘使用情况可视化及大文件管理功能，并支持对 CPU、GPU、内存、磁盘和网络的实时状态监控。
*   **安装方式**：主要面向 macOS 设计，支持通过 Homebrew (`brew install mole`) 或官方脚本一键安装。
*   **命令行交互**：提供丰富的子命令（如 `mo clean`、`mo uninstall`、`mo status`），支持使用 `--dry-run` 预览清理计划，以及使用 `--debug` 查看详细日志和风险等级。
*   **用户体验配置**：支持 Vim 快捷键（h/j/k/l）导航，可配置 Touch ID 进行 sudo 授权，并自动将文件操作记录至 `~/.config/mole/operations.log`。

### 3) 风险与不足
*   **终端兼容性问题**：官方明确指出该工具与 iTerm2 存在已知的兼容性问题，建议用户改用 Alacritty、kitty、WezTerm、Ghostty 或 Warp。
*   **数据永久删除风险**：尽管内置了严格的安全保护机制，但文件删除操作是永久性的，官方强烈建议在执行前仔细审查（可配合 `--dry-run` 预览）。
*   **Windows 版本不成熟**：Windows 版本目前仅为基于用户需求的实验性分支（windows branch），仅供早期尝鲜者使用。

## 功能与定位

🐹 Deep clean and optimize your Mac.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:37:51Z。
- 项目创建于 2025-09-23T06:38:40Z，具备持续迭代与社区沉淀。
- 以 `Shell` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/tw93/Mole
- 官网：https://x.com/HiTw93/status/2025424790467871149
- README：https://raw.githubusercontent.com/tw93/Mole/main/README.md
- Releases：https://github.com/tw93/Mole/releases

## 关联主题

- [[00-元语/tool]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/productivity]]
- [[00-元语/github]]
