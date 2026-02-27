---
title: Lean：Lean Algorithmic Trading Engin 开发工具
对象: GitHub 仓库
仓库: https://github.com/QuantConnect/Lean
官网: https://www.lean.io/
文档: https://www.lean.io/docs/
许可证: Apache License 2.0
---

## 摘要

LEAN 是一个开源的事件驱动算法交易引擎，面向量化开发者提供从策略研究、回测到实盘交易的完整工具链。项目支持 C# 与 Python，采用插件化架构，并通过 LEAN CLI 与 Docker 提供跨平台开发与运行体验。

## 功能与定位

LEAN 的核心定位是“可自定义的开源算法交易引擎”。它覆盖策略生命周期中的研究、回测、优化与实盘执行，并提供与数据源、经纪商、结果处理模块的对接能力，适合希望在本地与云端协同开发的量化团队与个人开发者。

## 典型使用场景

- 在历史数据上做策略回测与验证。
- 使用 Docker 化环境进行本地研究、参数优化与回归验证。
- 将策略连接到实盘经纪商执行自动化交易。
- 在本地 IDE 编写调试后，与 QuantConnect 生态协同。

## 特色与差异点

- 事件驱动与模块化设计，核心处理环节可按插件点替换。
- 同时支持 C# 与 Python，便于跨语言量化团队协作。
- 提供 LEAN CLI 与 ToolBox，覆盖项目创建、研究、回测与数据处理等常见流程。
- 以开源仓库交付，许可证为 Apache License 2.0。

## 使用方式概览

- 推荐方式是使用 LEAN CLI 进行项目管理与本地运行。
- 也可直接基于仓库源码在本地构建并运行 Launcher。
- Python 场景可结合 `Algorithm.Python` 文档完成运行配置与开发支持。

## 限制与注意事项

- 该项目是交易基础设施，不构成任何投资建议；策略效果与实盘风险需自行评估。
- 本地运行依赖开发环境配置（如 .NET 与 Python 运行时），跨平台配置细节存在差异。
- 项目能力边界以官方文档与仓库当前实现为准，社区讨论内容不应直接视为官方承诺。

## 链接

- https://github.com/QuantConnect/Lean
- https://www.lean.io/
- https://www.lean.io/docs/
- https://github.com/QuantConnect/Lean/blob/master/Documentation/readme.md
- https://github.com/QuantConnect/Lean/blob/master/Algorithm.Python/readme.md
- https://github.com/QuantConnect/Lean/blob/master/ToolBox/README.md

## 关联主题

- [[00-元语/trading]]
- [[00-元语/cli]]
- [[00-元语/workflow]]
