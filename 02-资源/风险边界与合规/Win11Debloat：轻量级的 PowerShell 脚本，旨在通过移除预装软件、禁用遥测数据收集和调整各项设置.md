---
title: "Win11Debloat：轻量级的 PowerShell 脚本，旨在通过移除预装软件、禁用遥测数据收集和调整各项设置"

发布日期: "2026-02-22"
对象: "GitHub 项目 `Raphire/Win11Debloat`"
项目主页: "https://github.com/Raphire/Win11Debloat"
开源协议: "MIT License"
主要语言: "PowerShell"
统计快照: "Stars 39986，Forks 1552，Watchers 194（抓取时间：2026-02-22）"
版本快照: "最新发布 2026.02.19（发布时间：2026-02-19T21:46:02Z）"
---

## 摘要

**1) 一句话总结**
Win11Debloat 是一个轻量级的 PowerShell 脚本，旨在通过移除预装软件、禁用遥测数据收集和调整各项设置，来精简和优化 Windows 10 与 Windows 11 系统的用户体验。

**2) 关键要点**
* **适用范围**：全面兼容 Windows 10 和 Windows 11 操作系统。
* **核心清理功能**：支持批量移除预装的臃肿软件（Bloatware），禁用系统遥测、诊断数据、活动历史记录、应用启动跟踪及定向广告。
* **AI 功能屏蔽**：可禁用或移除 Microsoft Copilot、Windows Recall（仅限 Win11），以及 Edge、画图（Paint）和记事本中的 AI 功能。
* **系统与界面优化**：支持恢复 Win10 经典右键菜单，禁用鼠标加速、快速启动、BitLocker 自动设备加密以及现代待机（Modern Standby）时的网络连接以减少耗电。
* **更新与网络管理**：可阻止系统立即获取最新更新、防止登录期间自动重启，并禁用更新传递优化（Delivery Optimization）。
* **高级用户支持**：支持 Windows 审核模式（Audit mode），允许对其他 Windows 用户应用更改，并提供完整的命令行接口（CLI）参数供系统管理员使用。
* **高可逆性**：脚本执行的所有更改均可轻松还原，几乎所有被卸载的应用都可以通过 Microsoft Store 重新安装。
* **项目热度与开源**：基于 MIT 协议开源，在 GitHub 上拥有近 4 万 Stars 和 1500+ Forks，社区活跃度高。

**3) 风险/缺口**
* **使用风险警告**：官方明确提示，尽管已尽最大努力确保脚本不会意外破坏操作系统的任何功能，但用户仍需“自行承担使用风险”（use at your own risk）。
* **合规与风险标记**：该项目在基本信息中被归类为“风险边界与合规”类别，且带有风险标记（risk_flag：1）。

## 功能与定位

A simple, lightweight PowerShell script to remove pre-installed apps, disable telemetry, as well as perform various other changes to customize, declutter and improve your Windows experience. Win11Debloat works for both Windows 10 and Windows 11.

## 典型使用场景

- 用于识别项目的合规边界与使用风险。
- 为内部收录提供风险说明，避免误用。

## 核心功能

- 记录项目定位与公开信息。
- 标注潜在合规、授权或滥用风险。
- 不提供可操作细节。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:37:40Z。
- 项目创建于 2020-10-27T22:26:59Z，具备持续迭代与社区沉淀。
- 以 `PowerShell` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 该项目可能涉及提示词泄露、限制规避或系统策略变更等高风险议题。
- 本仓库仅记录项目定位与风险提示，不复述任何可执行步骤、命令、脚本、配置或分发渠道细节。
- 若无法在合规边界内使用，建议不采用。

## 链接

- 仓库：https://github.com/Raphire/Win11Debloat
- README：https://raw.githubusercontent.com/Raphire/Win11Debloat/master/README.md
- Releases：https://github.com/Raphire/Win11Debloat/releases

## 关联主题

- [[00-元语/compliance]]
- [[00-元语/risk]]
- [[00-元语/windows]]
- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/security]]
