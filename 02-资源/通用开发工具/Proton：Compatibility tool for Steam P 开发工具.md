---
title: "Proton：Compatibility tool for Steam P 开发工具"
对象: "GitHub 仓库 `ValveSoftware/Proton`"
项目主页: "https://github.com/ValveSoftware/Proton"
来源: "GitHub README、仓库页与 Releases 页"
原文链接: "https://github.com/ValveSoftware/Proton"
---

## 摘要

Proton 是由 Valve 维护、基于 Wine 的 Steam Play 兼容性工具，目标是让 Windows 游戏可在 Linux 与 Steam Deck 上运行，同时为高级用户提供可定制的源码与构建能力。

- 核心组件围绕 Wine，并与 vkd3d-proton、Wine Mono 等组件配合，用于图形与运行时兼容。
- 项目持续面向具体游戏与硬件问题做修复与适配，包括音视频、字体、GPU 兼容与控制器体验。
- 普通用户可直接使用 Steam 客户端内置 Proton；高级用户可构建并接入本地版本进行验证。
- 仓库活跃度较高，抓取快照显示约 30.3k Stars、1.3k Forks，并有持续发布记录。

## 功能与定位

Proton 的定位是 Steam 生态中的兼容层工具：让原本仅支持 Windows 的游戏在 Linux 环境运行。README 也明确说明，普通用户优先使用 Steam 客户端内置版本，源码主要面向需要定制行为与调试的高级用户。

## 典型使用场景

- Linux 用户在 Steam 中运行仅提供 Windows 版本的游戏。
- Steam Deck 用户通过 Proton 获得更广泛的游戏可运行性。
- 高级用户或开发者针对特定游戏兼容问题，做本地构建、替换组件或调试验证。

## 特色与差异点

- 与 Steam 客户端深度集成，适合作为日常游戏兼容层直接使用。
- 发布节奏稳定，Releases 中持续包含“新增可玩游戏”与兼容修复。
- 组件协同明确，围绕 Wine 与图形相关子组件持续演进。
- 社区与生态体量较大，便于跟踪兼容变化与问题反馈。

## 使用方式概览

- 普通用户：在 Steam Play 设置中选择 Proton 版本并应用到目标游戏。
- 高级用户：在满足容器化构建环境的前提下，基于源码构建本地版本并接入 Steam 进行测试。
- 迭代使用：结合 Releases 与 Changelog 跟进版本变化，针对目标游戏选择更合适的 Proton 版本。

## 限制与注意事项

- 兼容效果与具体游戏、GPU 驱动、系统环境高度相关，不同机器可能出现差异。
- 构建链路涉及多组件并行过程，出现问题时通常需要结合日志逐步定位。
- 涉及容器权限与系统安全策略（如 SELinux）时，应先评估环境风险再执行本地构建。

## 链接

- 仓库：https://github.com/ValveSoftware/Proton
- README：https://github.com/ValveSoftware/Proton/blob/proton_10.0/README.md
- Releases：https://github.com/ValveSoftware/Proton/releases
- Changelog Wiki：https://github.com/ValveSoftware/Proton/wiki/Changelog

## 关联主题

- [[00-元语/game]]
- [[00-元语/windows]]
- [[00-元语/tool]]
