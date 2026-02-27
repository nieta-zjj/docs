---
title: aisuite：开发工具
对象: GitHub 仓库
项目主页: https://github.com/andrewyng/aisuite
来源: README、guides、aisuite-js README、pyproject.toml、LICENSE
---

## 摘要

aisuite 是一个轻量级的 Python 与 TypeScript 开发库，提供统一的 `provider:model` 调用接口，帮助开发者以更低改造成本在多个生成式 AI 供应商之间切换，并支持轻量级工具调用与 Agent 场景。

核心要点：
- Python 主库在 `pyproject.toml` 中标注版本为 `0.1.14`，项目采用 MIT License。
- 统一接口覆盖聊天补全、工具调用等常见能力，强调按 OpenAI 风格进行跨供应商抽象。
- 支持通过 `extras` 按需安装供应商依赖，也支持安装全量依赖。
- 支持 MCP 工具接入，便于把外部工具暴露给模型使用。
- 项目明确不是重度 Agent 编排框架，定位为轻量抽象层。

## 功能与定位

aisuite 的定位是“多模型统一访问层”（Uniform access layer for LLMs）。它把不同供应商 SDK 的接口差异、认证与参数差异抽象到统一调用方式中，降低跨模型切换与迁移成本。项目在 README 中明确说明：它不是完整的 Agent 框架，但提供轻量级 Agent 抽象能力。

## 典型使用场景

- 在同一应用里快速切换不同模型供应商并做效果对比。
- 用统一接口构建带工具调用能力的聊天或任务型应用。
- 基于 `max_turns` 的自动工具调用流程，快速搭建轻量级 Agent。
- 在 JS/TS 环境用同一模式调用聊天、流式输出与语音识别能力。

## 核心功能

- 使用 `provider:model` 标识模型，例如 `openai:gpt-4o`。
- 工具调用支持两种方式：
  - 传入 OpenAI 风格 JSON 工具定义并手动控制执行流程。
  - 传入 Python callable 并配合 `max_turns` 进行自动执行。
- 提供 MCP 集成，可连接 MCP Server 并在模型调用中使用其工具。
- 采用可扩展的 Provider 架构约定（`<provider>_provider.py`），便于新增供应商支持。
- 提供 `aisuite-js` 包，覆盖 chat completion、tool calling、streaming、error handling、ASR 示例。

## 特色与差异点

- 以“统一接口 + 低学习成本”为核心，减少多供应商切换时的接口重写工作。
- Python 侧通过 extras 机制按需安装供应商依赖，适合控制项目依赖体积。
- 同时覆盖 Python 与 TypeScript 两种常用开发栈，便于跨技术栈复用调用模式。

## 使用方式概览

- Python：
  - 基础安装：`pip install aisuite`
  - 按供应商安装：`pip install 'aisuite[anthropic]'`
  - 全量安装：`pip install 'aisuite[all]'`
- Node.js / TypeScript：
  - 安装：`npm install aisuite`
- 接入前通常需要准备对应供应商的 API Key，并按文档方式注入环境变量或客户端配置。

## 限制与注意事项

- 项目定位为轻量抽象层，不等同于完整 Agent 编排框架。
- Python 与 JS/TS 版本在供应商覆盖范围上可能存在差异，使用前需按对应 README 核对。
- `guides/` 中的供应商接入说明默认不代表供应商官方背书。

## 链接

- GitHub 仓库：https://github.com/andrewyng/aisuite
- Python README：https://github.com/andrewyng/aisuite/blob/main/README.md
- Provider Guides：https://github.com/andrewyng/aisuite/blob/main/guides/README.md
- TypeScript README：https://github.com/andrewyng/aisuite/blob/main/aisuite-js/README.md
- PyPI：https://pypi.org/project/aisuite/
- MCP 介绍：https://modelcontextprotocol.io/docs/getting-started/intro

## 相关文档

- [[02-资源/AI-应用框架与平台/LiteLLM：统一多模型调用网关与 SDK|LiteLLM：统一多模型调用网关与 SDK]]；关联理由：观点一致；说明：两者都以统一接口屏蔽多供应商差异，适合做跨模型接入层选型对照；
- [[02-资源/AI-应用框架与平台/MCP Python SDK：Model Context Protocol 官方 Python 开发包|MCP Python SDK：Model Context Protocol 官方 Python 开发包]]；关联理由：上下游；说明：aisuite 支持 MCP 工具接入，而该 SDK 提供 MCP 客户端与服务端能力实现参考；

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
- [[00-元语/sdk]]
- [[00-元语/typescript]]
