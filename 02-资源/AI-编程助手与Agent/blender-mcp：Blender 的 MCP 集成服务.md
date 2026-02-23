---
title: "blender-mcp：Blender 的 MCP 集成服务"

发布日期: "2026-02-22"
对象: "GitHub 项目 `ahujasid/blender-mcp`"
项目主页: "https://github.com/ahujasid/blender-mcp"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 17234，Forks 1633，Watchers 156（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

### 一句话总结
BlenderMCP 是一个基于 Python 的开源项目，它通过模型上下文协议（MCP）将 Blender 与 Claude AI 连接，使 AI 能够直接控制 Blender 以实现提示词辅助的 3D 建模、场景创建和对象操作。

### 核心要点
*   **系统架构**：由两个主要组件构成：一个是创建 Socket 服务器的 Blender 插件（`addon.py`），另一个是实现 MCP 协议并连接到 Blender 的 Python 服务器。
*   **核心功能**：支持双向通信、3D 对象操作（创建/修改/删除）、材质与颜色控制、场景信息获取，以及通过 Claude 在 Blender 中执行任意 Python 代码。
*   **第三方生态集成（v1.5.5）**：支持 Hunyuan3D、Sketchfab 模型搜索与下载、Poly Haven 资产 API，以及使用 Hyper3D Rodin 生成 3D 模型。
*   **环境依赖**：要求 Blender 3.0 及以上版本、Python 3.10 及以上版本，并且**必须**安装 `uv` 包管理器。
*   **客户端支持**：可与 Claude Desktop、Cursor 以及 Visual Studio Code 集成使用。
*   **网络配置**：支持通过设置 `BLENDER_HOST` 和 `BLENDER_PORT` 环境变量在远程主机上运行。
*   **遥测控制**：内置匿名使用数据收集功能，用户可通过 Blender 插件设置取消授权，或通过设置环境变量 `DISABLE_TELEMETRY=true` 完全禁用。

### 风险与不足
*   **代码执行安全风险**：`execute_blender_code` 工具允许执行任意 Python 代码，具有潜在危险，官方强烈建议在生产环境中谨慎使用并在操作前保存工作。
*   **多实例冲突**：官方警告只能同时运行一个 MCP 服务器实例（在 Cursor 或 Claude Desktop 中二选一），不可同时运行。
*   **第三方限制与稳定性**：Hyper3D 的免费试用密钥有每日生成数量限制；此外，Claude 在使用 Poly Haven 集成时行为有时会不稳定。
*   **操作超时风险**：复杂的请求可能会导致超时错误，需要将任务拆分为更小的步骤来执行。

## 功能与定位

项目聚焦工程能力建设。

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:10:52Z。
- 项目创建于 2025-03-07T09:58:58Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/ahujasid/blender-mcp
- README：https://raw.githubusercontent.com/ahujasid/blender-mcp/main/README.md
- Releases：https://github.com/ahujasid/blender-mcp/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/mcp]]
- [[00-元语/protocol]]
- [[00-元语/Claude]]
- [[00-元语/Cursor]]
- [[00-元语/desktop-client]]
- [[00-元语/github]]
- [[00-元语/security]]
