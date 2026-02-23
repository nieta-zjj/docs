---
title: "Datus-agent：AI 原生数据工程 agent 与 CLI SQL 客户端"

发布日期: "2026-02-22"
对象: "GitHub 项目 `Datus-ai/Datus-agent`"
项目主页: "https://github.com/Datus-ai/Datus-agent"
官方网站: "https://datus.ai/"
官方文档: "https://docs.datus.ai/getting_started/Quickstart/"
开源协议: "Apache License 2.0"
主要语言: "Python"
运行环境: "Python 3.12 及以上"
统计快照: "Stars 994，Forks 153，Watchers 17（抓取时间：2026-02-22）"
版本快照: "最新 tag `v0.2.5`，发布时间 2026-02-16"
---

## 摘要

**1) 一句话总结**
Datus-agent 是一个基于 Python 的开源 AI 原生数据工程代理与 CLI SQL 客户端，旨在为现代数据栈提供上下文工程和持续学习能力。

**2) 核心要点**
* **项目数据与协议**：项目采用 Apache License 2.0 协议开源，GitHub 仓库当前公开统计为 994 Stars、153 Forks。
* **核心架构**：包含 Datus-CLI、Datus-Chat 与 Datus-API 三个主要模块，分别面向工程师命令行工作流、分析师 Web 对话与系统集成调用。
* **主要特性**：强调上下文数据工程、领域子代理（domain subagents）与持续学习反馈循环。
* **环境与安装**：要求 Python >= 3.12；支持通过 `pip install datus-agent` 安装，CLI 入口命令为 `datus-agent`。
* **初始化与使用**：通过 `datus-agent init` 完成 LLM 提供商、数据库命名空间、工作区与可选知识库配置；CLI 同时支持 SQL 与聊天式命令。
* **近期版本动态**：`v0.2.5` 更新包含 OpenAI Agent SDK 0.7.0 升级、Kimi-2.5/Gemini-3 支持、AgentSkills 支持与 MCP server 能力。

## 功能与定位

Datus-agent 的定位是面向现代数据栈的数据工程 agent。它将传统 SQL 客户端能力与 AI 上下文工程结合，目标不是只做单次 SQL 生成，而是持续构建可复用、可演进的数据语义与知识上下文。

## 典型使用场景

- 数据工程师在命令行中执行 SQL、上下文检索和对话式分析。
- 团队将数据域能力封装成子代理，给分析师提供面向业务域的问答入口。
- 通过 API 把数据查询与上下文能力集成到其他 agent 或业务系统。

## 核心功能

- Datus-CLI：终端中的 SQL 与自然语言混合交互。
- Datus-Chat：面向分析师的 Web 聊天界面与反馈闭环。
- Datus-API：供外部系统调用的数据能力接口。
- 上下文工程：围绕元数据、SQL 经验与语义信息构建可演进上下文。
- 子代理机制：按业务域封装规则、上下文与工具。

## 特色与差异点

- 把“数据工程上下文”作为核心资产，而非仅把模型当作 SQL 翻译器。
- 兼顾工程师终端工作流与分析师对话入口，形成同一知识闭环。
- 近版本提供 AgentSkills 与 MCP server 能力，便于对接外部 agent 生态。

## 使用方式概览

1. 准备 Python 3.12+ 环境并安装 `datus-agent`。
2. 运行 `datus-agent init`，按向导配置模型、数据库命名空间和工作区。
3. 启动 CLI 后执行 SQL 或使用对话命令进行分析。
4. 按需启用子代理和 API 能力，扩展到团队或系统集成场景。

## 限制与注意事项

- 运行环境依赖 Python 3.12 及以上版本。
- 效果依赖初始化质量，包括模型配置、数据库连接与上下文准备完整度。
- 将工具暴露为 MCP server 或接入外部系统前，应先确认本地权限和数据访问边界。

## 链接

- 仓库：https://github.com/Datus-ai/Datus-agent
- 官网：https://datus.ai/
- Quickstart：https://docs.datus.ai/getting_started/Quickstart/
- 发布记录：https://github.com/Datus-ai/Datus-agent/releases
- README：https://raw.githubusercontent.com/Datus-ai/Datus-agent/main/README.md
- LICENSE：https://raw.githubusercontent.com/Datus-ai/Datus-agent/main/LICENSE
- pyproject：https://raw.githubusercontent.com/Datus-ai/Datus-agent/main/pyproject.toml

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/cli]]
- [[00-元语/data-pipeline]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
