---
title: univer：开发框架
对象: GitHub 仓库
项目主页: https://univer.ai
仓库: https://github.com/dream-num/univer
技术栈: TypeScript
开源协议: Apache-2.0
---

## 摘要

univer 是一个面向 Web 与服务端的同构开发框架，核心定位是构建与嵌入电子表格能力，并扩展到文档与演示场景。项目强调可嵌入、可扩展与高性能，提供插件化架构、渲染引擎与公式引擎，并通过 Univer Platform 支持用自然语言驱动表格，适合需要在业务系统中集成“可编辑数据界面”的团队。

## 功能与定位

univer 的定位是“用于创建和编辑表格的全栈框架”，可运行在浏览器与 Node.js 环境。仓库 README 同时给出产品线方向：Sheets 为核心成熟能力，Docs 为 rc 状态，Slides 为开发中。项目主页与仓库描述均强调 AI-native spreadsheets，并将自然语言驱动能力放在 Univer Platform（`dream-num/univer-mcp`）中提供。

## 典型使用场景

1. 在企业内部系统中嵌入可编辑电子表格，用于报表录入、运营台账与审批数据处理。
2. 将表格能力作为 SaaS 产品中的数据交互层，支持多人协作编辑与导入导出。
3. 在 AI 产品中把表格作为结构化结果承载界面，通过自然语言驱动数据操作。
4. 同时需要文档与演示能力的场景，可基于同一框架逐步扩展到 Docs/Slides。

## 特色与差异点

1. 同构架构：同一套 API 面向 Web 与服务端，便于前后端协同。
2. 插件化扩展：可按业务需求叠加功能，而非一次性引入整套能力。
3. 引擎能力完整：README 明确包含 canvas 渲染引擎与高性能公式引擎。
4. 多文档类型一体化：表格、文档、演示共享体系，便于统一交互与数据流。
5. 国际化与主题定制：支持多语言与主题，适合产品化落地。

## 使用方式概览

1. 优先从官方文档与在线示例确认目标能力（如 Sheets、导入导出、协作、打印）。
2. 根据场景选择先以 Sheets 为主线接入，再评估 Docs/Slides 的适配阶段。
3. 对需要自然语言驱动表格的场景，结合 Univer Platform 进行能力拼装。
4. 在正式上线前，重点验证性能、协作一致性、导入导出兼容性与权限模型。

## 限制与注意事项

1. README 标注了部分能力属于 non-OSS 版本，这些能力可免费商用，并包含付费升级计划；选型时应先确认功能边界与授权策略。
2. Docs 当前为 rc、Slides 为开发中，若业务强依赖这两类能力，应先做可用性验证再决定上线范围。
3. 项目迭代较快，接口与能力细节应以官方文档与发布说明为准。

## 链接

1. https://github.com/dream-num/univer
2. https://univer.ai
3. https://docs.univer.ai/en-US
4. https://docs.univer.ai/en-US/showcase
5. https://github.com/dream-num/univer-mcp

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/typescript]]
