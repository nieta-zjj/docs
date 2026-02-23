---
title: "shadPS4：PlayStation 4 开源模拟器"

发布日期: "2026-02-22"
对象: "GitHub 项目 `shadps4-emu/shadPS4`"
项目主页: "https://github.com/shadps4-emu/shadPS4"
官方网站: "https://shadps4.net/"
开源协议: "GNU General Public License v2.0"
主要语言: "C++"
统计快照: "Stars 28357，Forks 1935，Watchers 176（抓取时间：2026-02-22）"
版本快照: "最新发布 Pre-release-shadPS4-2026-02-21-9241ebd4dd48ace4f41d78dcba5519e08e84c5d5（发布时间：2026-02-21T11:22:18Z）"
---

## 摘要

**1) 一句话总结**
shadPS4 是一个基于 C++ 开发的早期跨平台（Windows、Linux、macOS）PlayStation 4 模拟器，目前已成功运行《血源诅咒》等部分游戏。

**2) 关键点**
*   **项目热度与协议**：项目创建于 2022 年 10 月，采用 GPL-2.0 开源协议，目前在 GitHub 上拥有超过 28,000 个 Stars 和 1,900+ Forks。
*   **核心与前端分离**：该仓库仅提供模拟器核心（命令行界面），普通用户需额外下载 `QtLauncher` 以使用图形用户界面（GUI）。
*   **游戏兼容性**：尽管处于早期阶段，目前已能成功运行《血源诅咒》（Bloodborne）、《黑暗之魂重制版》和《荒野大镖客：救赎》等游戏。
*   **多平台构建**：支持在 Windows、Linux、macOS 以及 Docker 容器化环境中进行编译。
*   **外设支持**：原生支持 Xbox 和 DualShock 手柄即插即用；支持键鼠操作，且允许为每个游戏单独保存自定义按键映射。
*   **固件依赖**：运行游戏需要特定的 PS4 固件模块（如 `libSceFont.sprx` 等），这些文件必须放置在模拟器的 `sys_modules` 文件夹中。
*   **技术借鉴**：项目在开发中获得了 Panda3DS、fpPS4 等团队的帮助，其着色器编译器以 yuzu 的 Hades 编译器为蓝本进行设计。

**3) 风险/不足**
*   **开发阶段限制**：项目处于早期开发阶段，官方明确表示“不要期望完美的体验”，且运行更复杂的游戏仍需时间。
*   **macOS 硬件/系统限制**：macOS 用户至少需要 macOS 15.4 版本；由于 GPU 问题，目前在 Intel 芯片的 Mac 上存在严重的 Bug。
*   **合规性要求**：官方警告，运行所需的系统模块必须从用户合法拥有的 PlayStation 4 主机中提取。

## 功能与定位

PlayStation 4 emulator for Windows, Linux and macOS written in C++

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T08:06:46Z。
- 项目创建于 2022-10-24T09:48:37Z，具备持续迭代与社区沉淀。
- 以 `C++` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/shadps4-emu/shadPS4
- 官网：https://shadps4.net/
- README：https://raw.githubusercontent.com/shadps4-emu/shadPS4/main/README.md
- Releases：https://github.com/shadps4-emu/shadPS4/releases

## 关联主题

- [[00-元语/game]]
- [[00-元语/cli]]
- [[00-元语/compliance]]
- [[00-元语/risk]]
- [[00-元语/tool]]
- [[00-元语/github]]
