---
title: "GitHub Copilot SDK：Copilot agent 工作流多语言集成开发包"

对象: "GitHub 开源项目"
来源: "https://github.com/github/copilot-sdk/blob/main/LICENSE"
开源协议: "MIT"
项目状态: "Technical preview"
版本快照: "截至 2026-02-22，发布页显示 `v0.1.25` 与 `v0.1.26-preview.0`"
---

## 摘要

GitHub Copilot SDK 是 GitHub 官方提供的多语言开发包，用于通过 Copilot CLI 将 Copilot agent 工作流以编程方式嵌入应用程序。

- 项目状态与协议：采用 MIT 开源协议，当前处于 Technical preview 阶段。
- 多语言支持：官方提供 Node.js/TypeScript、Python、Go、.NET 四套 SDK。
- 运行架构：SDK 客户端通过 JSON-RPC 与 Copilot CLI 的 server mode 通信。
- 认证与计费：支持 CLI 登录态、OAuth GitHub App、环境变量与 BYOK；标准模式遵循 Copilot 请求配额，BYOK 可使用外部提供商密钥。
- 权限模型：第一方工具默认权限等同 `--allow-all`，可按需配置启用或禁用。

## 功能与定位

该项目定位为“把 Copilot agent 能力嵌入现有产品”的基础 SDK 层，不要求开发者从零构建 agent 编排、工具调用和会话生命周期管理。

## 典型使用场景

- 在已有应用或服务中接入 Copilot agent 交互能力。
- 基于业务场景注册自定义工具并处理工具调用结果。
- 在多语言技术栈中统一接入同一套 Copilot CLI 能力。
- 在企业场景中按鉴权策略切换标准模式与 BYOK 模式。

## 核心功能

- 多语言官方 SDK：Node.js/TypeScript、Python、Go、.NET。
- 会话与事件机制：支持流式事件订阅、工具调用与会话管理。
- CLI 连接策略：可由 SDK 管理本地 CLI 进程，也可连接外部 CLI 服务。
- 鉴权体系：支持 GitHub 登录态、OAuth App token、环境变量 token、BYOK。
- 文档与配套：提供入门文档、认证文档与跨语言 cookbook 入口。

## 特色与差异点

- 复用 Copilot CLI 引擎：SDK 层直接复用 CLI 的 agent runtime。
- 跨语言一致性：核心能力在多语言 SDK 中保持相近接口与用法。
- 接入门槛较低：官方文档提供从最小示例到工具扩展的渐进路径。
- 社区扩展活跃：README 同时列出 Java、Rust、Clojure、C++ 的非官方实现。

## 使用方式概览

- 先安装并可用 Copilot CLI。
- 选择一门官方 SDK 完成依赖安装与客户端初始化。
- 配置鉴权方式与模型提供方选项。
- 在会话配置中按需启用自定义工具和事件处理逻辑。

## 限制与注意事项

- 当前为 Technical preview，API 与行为仍可能变化。
- SDK 依赖 Copilot CLI，无法完全脱离 CLI 独立运行。
- 默认工具权限较高（等同 `--allow-all`），生产环境应显式收敛权限。
- BYOK 文档已说明静态令牌与身份提供商支持范围存在边界，落地前需评估。
- 发布节奏较快，版本与行为以官方文档和 release 说明为准。

## 链接

- 仓库主页：https://github.com/github/copilot-sdk
- README：https://github.com/github/copilot-sdk/blob/main/README.md
- 入门文档：https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md
- 认证文档：https://github.com/github/copilot-sdk/blob/main/docs/auth/index.md
- BYOK 文档：https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md
- 发布页：https://github.com/github/copilot-sdk/releases
- 许可证：https://github.com/github/copilot-sdk/blob/main/LICENSE

## 关联主题

- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/AI]]
- [[00-元语/copilot]]
- [[00-元语/github]]
- [[00-元语/sdk]]
- [[00-元语/protocol]]
- [[00-元语/cli]]
- [[00-元语/workflow]]
