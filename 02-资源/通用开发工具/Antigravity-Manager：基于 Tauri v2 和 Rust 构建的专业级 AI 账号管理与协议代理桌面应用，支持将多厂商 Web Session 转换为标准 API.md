---
title: "Antigravity-Manager：基于 Tauri v2 和 Rust 构建的专业级 AI 账号管理与协议代理桌面应用，支持将多厂商 Web Session 转换为标准 API"

发布日期: "2026-02-22"
对象: "GitHub 项目 `lbjlaq/Antigravity-Manager`"
项目主页: "https://github.com/lbjlaq/Antigravity-Manager"
官方网站: "https://lbjlaq.github.io/Antigravity-Manager/"
开源协议: "Other"
主要语言: "Rust"
统计快照: "Stars 23936，Forks 2684，Watchers 92（抓取时间：2026-02-22）"
版本快照: "最新发布 v4.1.22（发布时间：2026-02-21T16:07:23Z）"
---

## 摘要

**1) 一句话总结**
Antigravity-Manager 是一款基于 Tauri v2 和 Rust 构建的专业级 AI 账号管理与协议代理桌面应用，支持将多厂商 Web Session 转换为标准 API，并提供智能调度、无缝切换与多协议兼容功能。

**2) 核心要点**
*   **技术栈与热度**：采用 Tauri v2 框架，后端基于 Rust (Axum)，前端基于 React 开发，目前在 GitHub 拥有超 2.3 万 Stars。
*   **账号管理与监控**：支持 OAuth 2.0 授权及 JSON 批量导入，提供全局配额实时监控、403 封禁自动检测跳过，以及基于配额冗余度的最佳账号一键切换。
*   **多协议转换**：将 Web 端 Session 转化为标准 API，原生提供 OpenAI (`/v1/chat/completions`)、Anthropic (`/v1/messages`) 和 Gemini 格式接口。
*   **高可用与智能路由**：遇到 `429` 或 `401` 错误时支持毫秒级自动重试与静默轮换；内置模型路由中心，支持正则映射、按账号类型（Ultra/Pro/Free）的分级路由及后台任务静默降级。
*   **多模态与绘图支持**：支持 Imagen 3 高级绘图，后端允许高达 100MB 的 Payload；兼容通过 OpenAI Images API 或 Chat API 直接传递 `size` 和 `quality` 参数。
*   **多环境部署**：提供跨平台一键安装脚本、Homebrew 安装以及 Docker 部署方案（Docker 版支持 `API_KEY` 与 `WEB_PASSWORD` 独立鉴权逻辑）。
*   **最新版本迭代 (v4.1.22)**：主推模型已平滑迁移至 Claude Sonnet/Opus 4.6 及 Gemini 3.1 Pro；修复了 Cherry Studio 等客户端在 Claude 协议下的兼容性问题（如强制限制输出上限为 65536 tokens，对齐思考模式预算为 24576）。

**3) 风险与不足**
*   **2api 风控风险**：官方在 v4.1.22 更新中明确警告，受近期谷歌风控影响，使用 2api 功能会导致账号被风控的概率显著增加，强烈建议减少或停止使用该功能（目前正积极测试 gRPC/gRPC-Web 协议作为替代方案）。

## 功能与定位

Professional Antigravity Account Manager & Switcher. One-click seamless account switching for Antigravity Tools. Built with Tauri v2 + React (Rust).专业的 Antigravity 账号管理与切换工具。为 Antigravity 提供一键无缝账号切换功能。

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:43:55Z。
- 项目创建于 2025-11-26T10:47:13Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/lbjlaq/Antigravity-Manager
- 官网：https://lbjlaq.github.io/Antigravity-Manager/
- README：https://raw.githubusercontent.com/lbjlaq/Antigravity-Manager/main/README.md
- Releases：https://github.com/lbjlaq/Antigravity-Manager/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/protocol]]
- [[00-元语/desktop-client]]
- [[00-元语/react]]
- [[00-元语/self-hosting]]
- [[00-元语/github]]
