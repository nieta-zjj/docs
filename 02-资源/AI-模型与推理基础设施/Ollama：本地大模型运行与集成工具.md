---
title: "Ollama：本地大模型运行与集成工具"

对象: "GitHub 开源仓库与官网"
仓库: "ollama/ollama"
来源:
  - "https://github.com/ollama/ollama"
  - "https://raw.githubusercontent.com/ollama/ollama/main/README.md"
  - "https://api.github.com/repos/ollama/ollama"
  - "https://ollama.com"
开源协议: "MIT"
创建时间: "2023-06-26"
统计时间: "2026-02-22"
仓库数据（抓取时）: "Stars 163,109；Forks 14,640；Subscribers 899"
---

## 摘要

**一句话总结**
Ollama 是一个基于 Go 语言开发的开源工具，旨在帮助用户在本地多平台环境中快速部署、运行和定制大语言模型，并提供 REST API 与官方 SDK 供各类应用无缝集成。

**关键要点**
* **技术栈与开源影响**：采用 Go 语言开发，基于 MIT 协议开源，在 GitHub 上拥有超过 16 万 Stars。
* **多平台支持**：支持在 macOS、Windows、Linux 上安装，同时提供 Docker 镜像部署及源码编译选项。
* **便捷的命令行交互**：提供简洁的 CLI 工具，通过 `ollama run` 或 `ollama launch` 等命令即可快速拉取并启动模型。
* **API 与 SDK 支持**：内置本地 REST API 服务（默认端点为 `http://localhost:11434/api/...`），并提供官方的 Python (`ollama-python`) 和 JavaScript (`ollama-js`) SDK。
* **模型定制化**：支持开发者通过 `Modelfile` 导入和自定义模型配置。
* **广泛的模型兼容性**：支持运行 Kimi-K2.5、GLM-5、MiniMax、DeepSeek、Qwen、Gemma 等多种主流大语言模型。
* **丰富的生态集成**：可作为底层推理引擎，与社区的 Chat UIs、代码编辑器、RAG 工具，以及 Claude Code、Codex、OpenClaw 等第三方生态工具结合使用。

## 功能与定位

Ollama 是一个用于本地运行开源大模型的基础工具链，核心定位是让开发者在本机或本地网络环境中快速完成模型拉取、启动、调用与集成。

从官方 README 看，项目同时覆盖 CLI 交互、HTTP API、SDK 与多平台安装路径，面向“本地推理 + 应用接入”场景。

## 典型使用场景

- 在本地开发机上快速运行和测试不同开源模型。
- 作为本地推理后端，对接聊天界面、编辑器插件、Agent 工具链。
- 通过 REST API 把模型能力嵌入脚本服务或内部应用。
- 结合 Docker 在统一环境中部署推理节点。

## 核心功能

- 多平台安装：macOS、Windows、Linux 与 Docker。
- CLI 运行入口：`ollama run`、`ollama launch` 等命令。
- 本地 REST API：默认端点 `http://localhost:11434/api/...`
- 模型配置能力：支持 `Modelfile` 导入与自定义。
- 官方 SDK：`ollama-python` 与 `ollama-js`。

## 特色与差异点

- 覆盖多模型生态：README 与仓库描述列出 Kimi-K2.5、GLM-5、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等。
- 集成面广：文档中直接给出与 Claude Code、Codex、OpenClaw 等工具的集成入口。
- 生态丰富：README 维护了大量社区集成（聊天界面、编辑器、SDK、RAG 与 Agent 框架）。

## 使用方式概览

- 安装 Ollama（本机安装或 Docker）。
- 通过 CLI 拉取并运行模型（如 `ollama run gemma3`）。
- 通过本地 REST API 或官方 SDK 将模型接入应用。
- 按文档进行模型导入、Modelfile 配置与集成扩展。

## 限制与注意事项

- 该项目提供的是运行与集成框架，具体模型效果与资源消耗取决于所选模型与硬件条件。
- README 中包含大量社区集成链接，稳定性与维护状态需逐项核验。
- 仓库热度为动态数据，外部引用旧数字可能已过时，应以抓取时间为准。

## 链接

- 仓库主页：https://github.com/ollama/ollama
- README：https://raw.githubusercontent.com/ollama/ollama/main/README.md
- GitHub API：https://api.github.com/repos/ollama/ollama
- 官网：https://ollama.com
- 文档主页：https://docs.ollama.com
- Docker 镜像：https://hub.docker.com/r/ollama/ollama
- Python SDK：https://github.com/ollama/ollama-python
- JavaScript SDK：https://github.com/ollama/ollama-js

## 关联主题

- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/cli]]
- [[00-元语/sdk]]
- [[00-元语/self-hosting]]
- [[00-元语/github]]
