---
title: "CLIProxyAPI：面向 AI 编程 CLI 的多模型代理 API"

来源:
  - "https://github.com/router-for-me/CLIProxyAPI"
  - "https://help.router-for.me/cn/"
  - "https://help.router-for.me/"
开源协议: "MIT License"
实现语言: "Go（模块路径含 `/v6`，并提供可复用 SDK）"
---

## 摘要

**1) 一句话总结**
CLIProxyAPI 是一个支持多模型兼容与多账户负载均衡的 CLI 代理服务器，允许开发者通过 OAuth 授权无密钥接入主流大语言模型，并可无缝集成至 AI 编程工具或内嵌于 Go 后端服务中。

**2) 核心要点**
* **多模型与协议兼容**：提供兼容 OpenAI、Gemini、Claude 的 API 端点，支持流式与非流式响应、函数调用（Function calling）及图文多模态输入。
* **无密钥 OAuth 接入**：支持通过 OAuth 登录使用个人订阅（如 Google、ChatGPT、Claude），无需配置 API 密钥即可直接在 Claude Code、Cline、Roo Code 等 AI 编程工具中使用。
* **多账户负载均衡**：支持对 Gemini、OpenAI Codex、Claude Code、Qwen Code 和 iFlow 的多账户进行轮询（Round-robin）调度，有效避免单账户配额限制。
* **Amp CLI 深度集成**：内置提供商路由别名、智能模型回退与映射功能（例如将 `claude-opus-4.5` 自动路由至 `claude-sonnet-4`）。
* **Go SDK 内嵌支持**：提供可复用的 `sdk/cliproxy` 模块，支持在 Go 服务中内嵌代理与路由能力，并自动管理后台令牌刷新与优雅关闭。
* **灵活的网络与上游配置**：支持配置 Socks5/HTTP/HTTPS 代理 URL，并可接入兼容 OpenAI 格式的上游提供商（如 OpenRouter）。
* **独立运行与自定义配置**：可通过 `config.yaml` 启动，支持自定义绑定地址、端口、TLS 证书、API 密钥列表及日志轮转策略。
* **高并发性能优化**：提供“商业模式（commercial-mode）”，开启后可禁用高开销的 HTTP 中间件，以降低高并发场景下的单请求内存占用。

**3) 风险与限制**
* **安全访问限制**：管理 API 默认仅限本地主机（localhost）访问，且所有管理请求均需验证 Secret Key；官方建议将 pprof 调试服务器也绑定在本地以确保安全。
* **请求失败与重试触发**：当遇到 403、408 或 50x（500/502/503/504）错误状态码时，系统默认最多重试 3 次，需注意配置凭据冷却的最大等待时间。

## 功能与定位

CLIProxyAPI 是一个“代理与协议兼容层”：把不同厂商的大模型服务接入到一个对外统一的兼容接口之下，目标是让各类 AI 编程 CLI/IDE 扩展可以用更一致的方式接入多个模型提供方，并支持 OAuth 登录、多账户轮询与一定程度的路由策略。

## 典型使用场景

- 在 AI 编程工具（例如 Claude Code、Cline、Roo Code、Amp CLI 等）里，希望统一接入多家模型服务，并按需切换与回退。
- 需要管理多个账号/凭据，在配额或限流触发时进行轮询、切换或重试。
- 希望在自己的 Go 服务或桌面应用中内嵌“多提供方执行与翻译层”，而不是仅以外部进程方式部署代理。

## 核心能力概览

- 兼容多类 API 端点与常见交互形态：流式与非流式响应、函数调用、文本与图片输入等。
- 多提供方接入：文档与仓库说明覆盖 OpenAI、Gemini、Claude，以及 Codex、Qwen Code、iFlow 等 OAuth 接入路径。
- 路由与回退：支持多账户轮询，并提供一定的模型映射/回退能力，便于将“不可用模型”路由到替代项。
- 管理与运维：提供管理 API（强调本地访问与密钥保护），并通过配置项支持日志、调试与并发相关的开关。
- SDK 复用：提供 `sdk/cliproxy` 以 Go 库方式复用代理能力，便于集成到自研服务。

## 限制与注意事项

- 合规边界：涉及 OAuth 订阅与多工具接入时，应确保使用方式符合对应提供方及工具的服务条款与授权边界；不应将其用于绕过授权、共享/转售订阅或其他不当用途。
- 安全边界：管理面与调试面应按文档建议限制为本地访问，并妥善保管管理密钥，避免在公网暴露管理端点。
- 配置复杂度：项目支持多提供方、多账户、路由与回退等能力，实际部署与维护成本会随配置复杂度上升。

## 链接

- 仓库：https://github.com/router-for-me/CLIProxyAPI
- 用户手册（中文）：https://help.router-for.me/cn/
- 用户手册（英文）：https://help.router-for.me/
- 管理 API 文档（中文）：https://help.router-for.me/cn/management/api
- SDK 使用文档（仓库内，中文）：https://github.com/router-for-me/CLIProxyAPI/blob/main/docs/sdk-usage_CN.md

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/protocol]]
- [[00-元语/llmops]]
- [[00-元语/sdk]]
- [[00-元语/rate-limiting]]
- [[00-元语/self-hosting]]
- [[00-元语/security]]
- [[00-元语/compliance]]
