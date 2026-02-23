---
title: "TypeScript-Go：TypeScript 的 Go 实现实验项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `microsoft/typescript-go`"
项目主页: "https://github.com/microsoft/typescript-go"
开源协议: "Apache License 2.0"
主要语言: "Go"
统计快照: "Stars 24186，Forks 835，Watchers 109（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
`microsoft/typescript-go` 是微软使用 Go 语言原生重写 TypeScript（即 TypeScript 7）的开发暂存仓库，目前已提供预览版，未来计划合并回 TypeScript 主仓库。

**2) 关键要点**
* **项目定位**：使用 Go 语言原生移植 TypeScript 的开发暂存仓库，主要语言为 Go，采用 Apache License 2.0 开源协议。
* **预览体验**：可通过 npm 安装 `@typescript/native-preview`（使用 `tsgo` 命令替代 `tsc`），或在 VS Code 安装预览版扩展并通过设置 `"typescript.experimental.useTsgo": true` 开启。
* **已完成功能 (Done)**：程序创建、解析/扫描、命令行与 `tsconfig` 解析、类型解析与检查、JSX、构建模式/项目引用以及增量构建（与 TS 6.0 保持一致的语法错误和类型）。
* **开发中功能 (In progress)**：JS 特定推断与 JSDoc、声明生成、JS 输出生成（目前较好支持 `target: esnext`）、语言服务（LSP）。
* **未来规划**：该仓库为过渡性质，长期计划是将其内容合并至 `microsoft/TypeScript` 主仓库，届时当前仓库及 Issue 追踪器将被关闭。
* **版本差异**：与 TypeScript 6.0 相比的有意更改记录在 `CHANGES.md` 文件中。
* **贡献要求**：参与贡献提交 PR 前需要签署微软的贡献者许可协议（CLA）。

**3) 风险与缺漏**
* 项目仍在开发中，尚未达到与原版 TypeScript 完全对等的功能，可能存在 Bug。
* `tsconfig` 的解析错误提示可能不如原版详细/有用。
* 类型检查错误中的类型打印显示（Types printback）可能与 TS 6.0 有所不同。
* JS 输出生成（Emit）对 `target: esnext` 之外的其他目标可能存在功能缺失。
* Watch 模式目前仅为原型（Prototype），会监视文件并重建，但没有增量重新检查功能且未经过优化（官方建议不要为此提交 Bug）。
* API 功能目前处于“未准备好（not ready）”状态，暂不可用。

## 功能与定位

Staging repo for development of native port of TypeScript

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:09:29Z。
- 项目创建于 2024-09-19T20:25:12Z，具备持续迭代与社区沉淀。
- 以 `Go` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/microsoft/typescript-go
- README：https://raw.githubusercontent.com/microsoft/typescript-go/main/README.md
- Releases：https://github.com/microsoft/typescript-go/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/typescript]]
- [[00-元语/cli]]
- [[00-元语/ide]]
- [[00-元语/roadmap]]
- [[00-元语/tool]]
