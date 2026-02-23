---
title: "claudia：基于 Tauri 2 构建的 Claude Code 图形化桌面客户端与工具包"

发布日期: "2026-02-22"
对象: "GitHub 项目 `getAsterisk/claudia`"
项目主页: "https://github.com/winfunc/opcode"
官方网站: "https://opcode.sh"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "TypeScript"
统计快照: "Stars 20634，Forks 1596，Watchers 101（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.2.0（发布时间：2025-08-31T15:13:14Z）"
---

## 摘要

### 1) 一句话总结
opcode 是一款基于 Tauri 2 构建的 Claude Code 图形化桌面客户端与工具包，支持自定义 AI 代理创建、交互式会话管理、MCP 服务器配置及 API 成本监控。

### 2) 核心要点
*   **项目热度与协议**：项目在 GitHub 上拥有超 20,600 颗 Stars，采用 GNU AGPL v3.0 开源协议。
*   **技术栈**：前端采用 React 18 + TypeScript + Vite 6 + Tailwind CSS v4；后端采用 Rust + Tauri 2；数据库使用 SQLite；包管理器为 Bun。
*   **项目与会话管理**：提供可视化的项目浏览器（读取 `~/.claude/projects/`），支持查看历史会话、智能搜索以及会话元数据展示。
*   **自定义 AI 代理（CC Agents）**：允许创建具有专属系统提示词的代理，支持在独立进程中后台非阻塞运行，并提供详细的执行日志和性能指标。
*   **成本与使用量看板**：内置数据仪表盘，可按模型、项目和时间段实时追踪 Claude API 的 Token 使用量及成本，并支持图表可视化与数据导出。
*   **MCP 服务器管理**：提供中央 UI 来管理模型上下文协议（MCP）服务器，支持手动添加、JSON 导入或从 Claude Desktop 导入配置，并内置连接测试功能。
*   **时间线与检查点**：支持会话版本控制，用户可以在编码会话中创建检查点，通过可视化时间线实现一键恢复、分支克隆（Fork）及差异对比（Diff）。
*   **安全与隐私机制**：强调数据完全本地存储、无遥测数据收集（No Telemetry）、代理进程隔离以及细粒度的文件/网络权限控制。
*   **独立性声明**：该项目由 Asterisk 团队独立开发，非 Anthropic 官方附属、赞助或认可项目。

### 3) 风险/不足
*   **预编译程序未发布**：文档明确指出官方发布版可执行文件“即将发布（Will Be Published Soon）”，当前用户必须配置完整的开发环境（Rust, Bun 等）从源码进行构建。
*   **部分功能未完善**：使用量警报（usage alerts）功能目前标记为“即将推出（coming soon）”。

## 功能与定位

A powerful GUI app and Toolkit for Claude Code - Create custom agents, manage interactive Claude Code sessions, run secure background agents, and more.

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:53:43Z。
- 项目创建于 2025-06-19T13:53:26Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/getAsterisk/claudia
- 官网：https://opcode.sh
- README：https://raw.githubusercontent.com/getAsterisk/claudia/main/README.md
- Releases：https://github.com/getAsterisk/claudia/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/Claude]]
- [[00-元语/desktop-client]]
- [[00-元语/mcp]]
- [[00-元语/observability]]
- [[00-元语/security]]
- [[00-元语/workflow]]
