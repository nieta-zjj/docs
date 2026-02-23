---
title: "zapret-discord-youtube：基于 Windows 的流量拦截与过滤脚本工具，作为 zapret 的替代方案"

发布日期: "2026-02-22"
对象: "GitHub 项目 `Flowseal/zapret-discord-youtube`"
项目主页: "https://github.com/Flowseal/zapret-discord-youtube"
开源协议: "Other"
主要语言: "Batchfile"
统计快照: "Stars 22936，Forks 1891，Watchers 248（抓取时间：2026-02-22）"
版本快照: "最新发布 1.9.6（发布时间：2026-02-13T13:42:19Z）"
---

## 摘要

**1) 一句话总结**
Flowseal/zapret-discord-youtube 是一个基于 Windows 的流量拦截与过滤脚本工具，作为 zapret 的替代方案，主要通过配置 WinDivert 和不同的网络策略帮助用户绕过限制以访问 Discord、YouTube 等服务。

**2) 关键要点**
*   **核心依赖**：项目主要使用 Batchfile 编写，依赖 `WinDivert` 在 Windows 环境下进行流量拦截与过滤（作为 Linux iptables/NFQUEUE 的替代品）。
*   **前置要求**：使用前必须在浏览器（如 Chrome/Firefox）或 Windows 11 系统设置中开启安全 DNS（Secure DNS）。
*   **手动测试**：通过 `general.bat` 脚本，用户可以手动运行并测试不同的绕过策略（如 ALT、FAKE 等），以寻找当前网络环境下可用的方案。
*   **服务管理**：通过 `service.bat` 脚本，用户可以将有效的策略安装为 Windows 自动启动服务，并执行更新 hosts、运行诊断、测试 DPI 以及切换游戏/IP 过滤模式等操作。
*   **自定义规则**：支持通过修改 `list-general.txt`（域名）和 `ipset-all.txt`（IP及子网）等列表文件，自定义需要绕过或排除的目标地址。
*   **特定故障修复**：针对 Telegram 网页版无法使用或 Discord 语音聊天无限“连接中”的问题，内置了更新 `hosts` 文件的专属修复选项。
*   **上游溯源**：项目 `bin` 目录下的所有二进制文件均直接取自 `bol-van/zapret-win-bundle`，用户可通过哈希值自行校验。

**3) 风险与缺口（原文明确提及）**
*   **杀毒软件拦截风险**：`WinDivert` 常被杀毒软件误报为高风险工具或 PUA（如提示 `Not-a-virus:RiskTool.Multi.WinDivert`）并被隔离或删除，需用户手动配置白名单或关闭 PUA 检测。
*   **策略失效风险**：绕过策略可能会随着时间推移因被检测到而失效，用户需要不断尝试其他策略或自行修改参数创建新策略。
*   **反作弊系统冲突**：部分游戏的反作弊系统可能会对 `WinDivert` 产生拦截或警告。
*   **假冒欺诈风险**：开发者明确声明未运营任何 Telegram 群组或 YouTube 频道，GitHub 页面之外以其名义传播的内容均为假冒。
*   **二进制文件安全风险**：官方强烈建议用户在运行从互联网下载的构建版本时，务必检查并核对二进制文件的哈希/校验和。

## 功能与定位

项目聚焦工程能力建设。

## 典型使用场景

- 用于识别项目的合规边界与使用风险。
- 为内部收录提供风险说明，避免误用。

## 核心功能

- 记录项目定位与公开信息。
- 标注潜在合规、授权或滥用风险。
- 不提供可操作细节。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:54:55Z。
- 项目创建于 2024-10-08T20:02:28Z，具备持续迭代与社区沉淀。
- 以 `Batchfile` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 该项目可能涉及安全测试、访问规避或策略边界等高风险议题。
- 本仓库仅记录项目定位与风险提示，不复述任何可执行步骤、命令、脚本、配置或分发渠道细节。
- 若无法在合规边界内使用，建议不采用。

## 链接

- 仓库：https://github.com/Flowseal/zapret-discord-youtube
- README：https://raw.githubusercontent.com/Flowseal/zapret-discord-youtube/main/README.md
- Releases：https://github.com/Flowseal/zapret-discord-youtube/releases

## 关联主题

- [[00-元语/compliance]]
- [[00-元语/risk]]
- [[00-元语/security]]
- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/windows]]
- [[00-元语/dns]]
- [[00-元语/cli]]
