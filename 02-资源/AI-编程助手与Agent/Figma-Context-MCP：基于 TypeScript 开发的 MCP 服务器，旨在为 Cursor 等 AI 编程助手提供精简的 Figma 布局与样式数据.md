---
title: "Figma-Context-MCP：基于 TypeScript 开发的 MCP 服务器，旨在为 Cursor 等 AI 编程助手提供精简的 Figma 布局与样式数据"

发布日期: "2026-02-22"
对象: "GitHub 项目 `GLips/Figma-Context-MCP`"
项目主页: "https://github.com/GLips/Figma-Context-MCP"
官方网站: "https://www.framelink.ai/"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 13202，Forks 1053，Watchers 64（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.6.4（发布时间：2025-10-06T23:10:33Z）"
---

## 摘要

### 一句话总结
GLips/Figma-Context-MCP（Framelink MCP）是一个基于 TypeScript 开发的 MCP 服务器，旨在为 Cursor 等 AI 编程助手提供精简的 Figma 布局与样式数据，从而大幅提升 AI 一次性准确生成前端代码的能力。

### 关键要点
*   **核心功能**：通过模型上下文协议（MCP），使 Cursor 等 AI 编程工具能够直接访问和解析 Figma 设计文件、框架或分组的数据。
*   **工作流程**：用户只需在 IDE 的 AI 聊天窗口中粘贴 Figma 链接并输入指令，AI 即可自动拉取相关元数据并生成对应代码。
*   **上下文优化**：该工具专门为 Cursor 设计，在返回 Figma API 数据前会进行简化和转换，仅保留最相关的布局和样式信息，从而减少上下文冗余，提高 AI 响应的准确度。
*   **效果对比**：相比于让 AI 识别设计截图，直接提供结构化的 Figma 数据能显著提升代码实现（One-shot）的质量和还原度。
*   **配置要求**：使用该服务器需要提前获取并配置 Figma API 访问令牌（Access Token）。
*   **跨平台运行**：支持通过配置文件在 MacOS/Linux（使用 `npx`）和 Windows（使用 `cmd /c npx`）环境下运行 `figma-developer-mcp` 包。
*   **项目数据**：项目采用 MIT 开源协议，主要使用 TypeScript 开发，社区热度极高（超 13,200 Stars，1,053 Forks），当前最新发布版本为 v0.6.4。

## 功能与定位

MCP server to provide Figma layout information to AI coding agents like Cursor

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:23:10Z。
- 项目创建于 2025-02-13T02:55:06Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/GLips/Figma-Context-MCP
- 官网：https://www.framelink.ai/
- README：https://raw.githubusercontent.com/GLips/Figma-Context-MCP/main/README.md
- Releases：https://github.com/GLips/Figma-Context-MCP/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/mcp]]
- [[00-元语/Cursor]]
- [[00-元语/design]]
- [[00-元语/ide]]
- [[00-元语/context-optimization]]
- [[00-元语/github]]
- [[00-元语/typescript]]
