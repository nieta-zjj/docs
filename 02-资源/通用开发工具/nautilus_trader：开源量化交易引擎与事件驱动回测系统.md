---
title: "nautilus_trader：开源量化交易引擎与事件驱动回测系统"

发布日期: "2026-02-22"
对象: "GitHub 项目 `nautechsystems/nautilus_trader`"
项目主页: "https://github.com/nautechsystems/nautilus_trader"
官方网站: "https://nautilustrader.io"
开源协议: "GNU Lesser General Public License v3.0"
主要语言: "Rust"
统计快照: "Stars 20251，Forks 2379，Watchers 184（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.223.0（发布时间：2026-02-21T10:54:03Z）"
---

## 摘要

1) 一句话总结
NautilusTrader 是一个基于 Rust 核心的高性能、事件驱动型开源量化交易与回测平台，提供 Python 原生环境并确保回测与实盘交易代码的完全一致。

2) 核心要点
- **技术栈与性能**：核心组件使用 Rust 编写（结合 `tokio` 实现异步网络），通过 Cython 和 PyO3 提供 Python 绑定，兼顾了底层极高的执行效率与 Python 数据科学大生态。
- **回测与实盘一致性**：解决了量化交易中的环境差异痛点，策略代码无需任何修改即可在历史数据回测和实盘部署之间无缝切换。
- **高级交易功能**：支持纳秒级精度的多市场、多品种、多策略同步运行；内置丰富的订单类型（如 IOC, FOK, 冰山订单）及条件触发和组合订单（如 OCO, OTO）。
- **广泛的平台接入**：采用模块化适配器设计，已稳定支持 Interactive Brokers、Binance、OKX、Bybit、Databento、Polymarket 等多个主流券商、加密交易所和数据源。
- **双精度模式**：支持高精度（128位整数，最高16位小数）和标准精度（64位整数，最高9位小数）两种核心数值模式，以满足不同资产的计算需求。
- **项目定位**：专注于为个人和小型量化团队提供单节点的回测与实盘交易引擎，且回测引擎速度足以用于训练 AI 交易代理（RL/ES）。
- **版本与分支管理**：目标保持双周发布周期，维护 `master`（生产可用）、`nightly`（每日快照测试）和 `develop`（活跃开发）三个主要分支。

3) 风险与不足
- **API 不稳定性**：项目仍处于活跃开发阶段，API 尚未完全稳定（计划在 2.x 版本实现稳定），版本更新之间可能会出现破坏性变更（Breaking changes）。
- **Windows 平台精度限制**：由于 MSVC 编译器的限制，Windows 平台上的 Python 预编译包（wheels）仅支持标准精度（64位），无法使用高精度（128位）模式。
- **功能范围限制**：项目明确将 UI 仪表盘、分布式编排以及内置的 AI/ML 工具排除在开发范围之外（Out of scope）。

## 功能与定位

A high-performance algorithmic trading platform and event-driven backtester

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:43:35Z。
- 项目创建于 2018-06-25T06:26:16Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/nautechsystems/nautilus_trader
- 官网：https://nautilustrader.io
- README：https://raw.githubusercontent.com/nautechsystems/nautilus_trader/develop/README.md
- Releases：https://github.com/nautechsystems/nautilus_trader/releases

## 关联主题

- [[00-元语/trading]]
- [[00-元语/stream-processing]]
- [[00-元语/risk]]
- [[00-元语/github]]
- [[00-元语/tool]]
