---
title: aichat：命令行工具
对象: GitHub 仓库
项目主页: https://github.com/sigoden/aichat
来源:
  - https://github.com/sigoden/aichat/blob/main/README.md
  - https://github.com/sigoden/aichat/blob/main/Cargo.toml
当前版本: 0.30.0
开源协议: MIT OR Apache-2.0
---

## 摘要

aichat 是一款面向终端场景的全能型 LLM CLI 工具，通过统一接口整合多模型对话、Shell 助手、RAG、AI Agent 与本地 API 服务能力。

- 支持多家主流模型服务商与 OpenAI 兼容接口。
- 提供 CMD 与 REPL 两种交互模式，覆盖单次调用和连续会话。
- 支持 stdin、本地文件/目录、远程 URL、外部命令输出等多形态输入。
- 内置本地 HTTP 服务与 Playground/Arena，用于接口代理和模型对比测试。
- 支持角色、会话、宏与主题等个性化配置，适配多平台安装方式。

## 功能与定位

aichat 定位为命令行中的统一 AI 交互入口，目标是把模型调用、上下文输入、工具调用与会话管理收敛到一个 CLI 工具内，减少在多模型、多工具之间切换的成本。

## 典型使用场景

- 在终端中进行快速问答、代码解释和命令辅助。
- 将本地文件、目录、网页或管道输入作为上下文进行分析。
- 使用 RAG 与工具调用构建面向任务的 Agent 流程。
- 启动本地服务，对接 OpenAI 风格接口并做模型横向比较。

## 特色与差异点

- 一体化能力覆盖较广：CLI 交互、RAG、Agent、API 服务、Web 测试界面。
- 交互方式灵活：既支持一次性命令，也支持长会话 REPL。
- 生态兼容性强：支持多模型提供方与 OpenAI 兼容 API。
- 安装渠道完整：支持 Cargo、Homebrew、Pacman、Scoop、Termux 与预编译二进制。

## 使用方式概览

- 安装后可直接以命令模式调用，或进入 REPL 进行连续对话。
- 可按需加载文件、目录、URL 等上下文输入。
- 可启用内置服务，在本地暴露聊天、向量与重排相关接口。

## 限制与注意事项

- 本条目基于 README 与 Cargo 元数据整理，不覆盖 Wiki 全部细节与社区实践。
- 多模型能力依赖外部服务配置与可用性，实际效果受模型与网络环境影响。
- 本仓库仅记录项目定位与公开能力，不复述任何不当用途的可操作细节。

## 链接

- https://github.com/sigoden/aichat
- https://github.com/sigoden/aichat/releases
- https://crates.io/crates/aichat
- https://github.com/sigoden/aichat/wiki

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/cli]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/terminal]]
- [[00-元语/tool]]
