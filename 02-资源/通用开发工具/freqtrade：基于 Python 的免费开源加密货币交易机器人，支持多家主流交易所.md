---
title: "freqtrade：基于 Python 的免费开源加密货币交易机器人，支持多家主流交易所"

发布日期: "2026-02-22"
对象: "GitHub 项目 `freqtrade/freqtrade`"
项目主页: "https://github.com/freqtrade/freqtrade"
官方网站: "https://www.freqtrade.io"
开源协议: "GNU General Public License v3.0"
主要语言: "Python"
统计快照: "Stars 47071，Forks 9825，Watchers 729（抓取时间：2026-02-22）"
版本快照: "最新发布 2026.1（发布时间：2026-01-31T12:08:07Z）"
---

## 摘要

**1) 一句话总结**
Freqtrade 是一款基于 Python 的免费开源加密货币交易机器人，支持多家主流交易所，并提供策略回测、机器学习优化以及通过 Telegram 或 WebUI 进行远程控制的功能。

**2) 关键要点**
*   **项目热度与协议**：采用 GNU GPL v3.0 开源协议，在 GitHub 上拥有超 4.7 万 Stars 和 9800+ Forks。
*   **核心功能**：支持实盘交易、模拟交易（Dry-run）、历史数据回测、资金管理，以及基于机器学习（FreqAI）的自适应策略优化。
*   **支持的交易所**：官方支持 Binance、OKX、Bybit、Bitget、Gate.io 等主流现货与合约交易所，以及 Hyperliquid 等去中心化交易所（DEX）。
*   **控制与交互**：内置 WebUI，并支持通过 Telegram RPC 命令（如 `/start`, `/profit`, `/forceexit` 等）对机器人进行实时管理和状态监控。
*   **数据与管理**：使用 SQLite 实现数据持久化，支持加密货币的白名单/黑名单管理，并能以法定货币显示盈亏状态。
*   **运行环境要求**：要求 Python 3.11+ 及 TA-Lib；官方建议最低硬件配置为 2GB RAM、1GB 磁盘空间和 2vCPU，推荐使用 Docker 部署。
*   **分支管理**：项目主要维护 `develop`（包含新功能，接收 PR 提交）和 `stable`（最新稳定版）两个主分支。

**3) 风险/缺口**
*   **财务风险**：该软件仅供教育目的使用，作者及关联方不对用户的交易结果承担任何责任，用户需自行承担资金损失风险。
*   **操作风险**：官方强烈建议在投入真实资金前，务必先运行模拟交易（Dry-Run）以了解其工作原理及预期盈亏。
*   **技术门槛**：强烈建议用户具备编程和 Python 知识，以便阅读源码并理解机器人的运行机制。
*   **系统时间同步要求**：运行设备的系统时钟必须高度准确，并频繁与 NTP 服务器同步，否则会导致与交易所的通信出现问题。

## 功能与定位

Free, open source crypto trading bot

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:35:32Z。
- 项目创建于 2017-05-17T23:48:53Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/freqtrade/freqtrade
- 官网：https://www.freqtrade.io
- README：https://raw.githubusercontent.com/freqtrade/freqtrade/develop/README.md
- Releases：https://github.com/freqtrade/freqtrade/releases

## 关联主题

- [[00-元语/trading]]
- [[00-元语/blockchain]]
- [[00-元语/github]]
- [[00-元语/self-hosting]]
- [[00-元语/risk]]
