---
title: "Context7：面向 LLM 的文档上下文服务"

发布日期: "2026-02-22"
对象: "GitHub 项目 `upstash/context7`"
项目主页: "https://github.com/upstash/context7"
官方网站: "https://context7.com"
开源协议: "MIT"
主要语言: "TypeScript"
统计快照: "Stars 46469，Forks 2203，Watchers 131（抓取时间：2026-02-22）"
版本快照: "最新 release `ctx7@0.3.1`，发布时间 `2026-02-18`"
备注: "用户提供“26003”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

**1) 一句话总结**
Context7 是一个基于 MCP 协议的开源服务器，专为大语言模型（LLM）和 AI 代码编辑器提供最新、特定版本的代码文档与示例，旨在解决 AI 训练数据过时和 API 幻觉问题。

**2) 核心要点**
*   **项目基础**：由 Upstash 开源（MIT 协议），主要使用 TypeScript 开发，当前 GitHub Stars 数为 46469。
*   **核心工具**：提供 `query-docs`（直接提取最新文档与代码示例）和 `resolve-library-id`（将通用名称解析为准确的库 ID）功能。
*   **版本感知能力**：能够精准识别提示词中指定的框架版本号（如“Next.js 14”），并匹配对应版本的文档内容。
*   **精准定位语法**：支持在提示词中使用斜杠语法（如 `use library /supabase/supabase`）跳过搜索，直接获取目标文档。
*   **无缝集成 AI 编辑器**：兼容 Cursor、Claude Code 和 Opencode，支持通过配置全局规则（Rules）实现后台自动检索，消除开发者上下文切换。
*   **灵活部署**：支持远程服务器连接（HTTP 传输）和本地服务器连接（通过 `npx` 命令行调用）。
*   **自动化安装**：通过 `npx ctx7 setup` 命令可快速完成 OAuth 认证或 API Key 生成，并利用 `--cursor` 等参数为特定 AI 代理自动配置。
*   **国际化支持**：项目包含丰富的多语言文档（i18n），支持中文、日语、法语等十余种语言。

**3) 风险与限制**
*   **速率限制**：虽然支持免密使用，但存在请求速率限制，官方强烈建议获取免费 API Key 以提高额度。
*   **OAuth 认证限制**：OAuth 2.0 认证仅适用于远程 HTTP 连接（需使用 `/mcp/oauth` 端点）；若使用本地 stdio 传输的 MCP 连接，则必须使用 API Key 进行认证。
*   **数据一致性差异**：文档指出当前 GitHub 公开 Stars 数（46469）与用户提供的参考数字（26003）存在不一致。

## 功能与定位

Context7 是一个基于 MCP (Model Context Protocol) 的服务器，旨在为大语言模型（LLM）和 AI 代码编辑器提供最新、特定版本的代码文档和示例。它的核心目的是解决 LLM 依赖过时训练数据、捏造不存在的 API（幻觉）以及针对旧版本包提供通用回答的问题。

## 典型使用场景

- **AI 辅助编程**：在 Cursor、Claude Code 或 Opencode 等 AI 编辑器中编写代码时，获取特定第三方库的最新 API 文档。
- **特定版本代码生成**：要求 LLM 生成特定版本框架（例如“Next.js 14”）的中间件、配置或实现代码。
- **自动化文档检索**：通过在 AI 助手中设置系统规则（Rules），让 AI 在遇到库配置、API 调用等任务时，自动在后台检索最新文档，无需开发者手动查阅。

## 核心功能

- **文档与示例提取 (`query-docs`)**：根据具体的库 ID 和用户的查询任务，直接从源头提取最新的文档和代码示例，并将其注入到 LLM 的上下文中。
- **库名称解析 (`resolve-library-id`)**：提供内置工具，将用户输入的通用库名称自动解析并匹配为 Context7 兼容的准确库 ID。
- **版本感知**：能够识别提示词中指定的库版本号，并自动匹配对应版本的文档内容。

## 特色与差异点

- **消除上下文切换**：将最新文档直接带入提示词上下文，开发者无需在编辑器和浏览器标签页之间来回切换。
- **精准的库定位语法**：支持在提示词中直接使用斜杠语法（如 `use library /supabase/supabase`）指定 Library ID，从而跳过搜索匹配阶段，直接获取目标文档。
- **灵活的部署与连接**：支持远程服务器连接（通过 HTTP 传输）和本地服务器连接（通过 `npx` 命令行调用）。
- **广泛的国际化支持**：项目包含丰富的多语言文档（i18n），支持中文、日语、韩语、西班牙语、法语等十余种语言。

## 使用方式概览

- **手动触发**：在与 AI 的对话提示词中直接添加 `use context7`。
- **自动触发（推荐）**：在 MCP 客户端（如 Cursor 的 Rules 或 Claude Code 的 `CLAUDE.md`）中配置全局规则，指示 AI 在需要库文档、代码生成或配置步骤时自动调用 Context7 MCP。
- **快速安装**：可通过运行 `npx ctx7 setup` 命令进行快速设置，该命令支持通过 OAuth 认证、生成 API Key，并可使用参数（如 `--cursor`, `--claude`, `--opencode`）为特定的 AI 代理自动配置 MCP 服务器和规则。

## 限制与注意事项

- **速率限制**：虽然可以免密使用，但官方强烈建议在控制台获取免费的 API Key，以获得更高的请求速率限制。
- **OAuth 认证限制**：Context7 MCP 服务器支持 OAuth 2.0 认证，但该认证方式仅适用于远程 HTTP 连接（端点需改为 `/mcp/oauth`）。对于使用 stdio 传输的本地 MCP 连接，必须使用 API Key 进行认证。

## 链接

- 项目主页：https://github.com/upstash/context7
- 官方网站：https://context7.com
- 控制台（获取 API Key）：https://context7.com/dashboard
- NPM 包：https://www.npmjs.com/package/@upstash/context7-mcp

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/llm]]
- [[00-元语/context-optimization]]
- [[00-元语/protocol]]
- [[00-元语/cli]]
- [[00-元语/tool]]
