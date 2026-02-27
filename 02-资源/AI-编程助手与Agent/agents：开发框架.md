---
title: agents：开发框架
对象: GitHub 仓库
来源: livekit/agents
仓库: https://github.com/livekit/agents
文档: https://docs.livekit.io/agents/
协议: Apache-2.0
主要语言: Python
---

## 摘要

LiveKit agents 是一个基于 Python 的开源开发框架，面向服务端实时语音 AI Agent 构建，强调多模态交互、低延迟会话和可扩展集成能力。

- 支持灵活组合 STT、LLM、TTS 与多家 Realtime API。
- 以 `Agent`、`AgentSession`、`AgentServer` 为核心抽象，覆盖从会话启动到多 agent 协作。
- 提供 MCP、调度分发、测试与可观测能力，适合从原型到生产化落地。

## 功能与定位

该项目定位为实时语音智能体开发框架，主要用于构建运行在服务端的可编程参与者，并通过 LiveKit 生态接入实时音视频链路。项目重点不是单一模型封装，而是把语音输入、推理、语音输出、工具调用和会话控制统一到一套工程化接口中。

## 典型使用场景

- 实时语音助手与客服对话。
- 多 agent 协作与任务交接。
- 电话网络接入场景下的语音自动化。
- 结合外部工具或 MCP 服务的任务执行。
- 带评测与回归测试的语音 Agent 产品化开发。

## 特色与差异点

- 服务端架构明确，适合生产环境中的集中部署与运维。
- 组件组合自由度高，可按需求替换 STT、LLM、TTS 与 Realtime 提供方。
- 示例覆盖广，从基础会话到多 agent、MCP、RAG、错误处理与追踪均有参考实现。
- 开源协议为 Apache-2.0，可用于企业内二次开发与自托管。

## 使用方式概览

- 安装方式以 Python 包为主，常见用法是安装 `livekit-agents` 与所需 provider 插件。
- 开发入口通常为 `entrypoint`，在其中初始化 `AgentSession` 并启动会话。
- 关键对象包括 `Agent`、`AgentSession`、`AgentServer`，可扩展函数工具与外部能力。
- 示例目录提供实时模型、工具调用、多 agent、MCP 和可观测相关范式，便于按场景选型。

## 限制与注意事项

- 该项目当前要求 Python 版本为 `>=3.10,<3.15`。
- 部分能力依赖特定模型提供方或插件，需要单独配置对应 API 凭据。
- 仓库发布节奏较快，版本特性与兼容边界应以发布说明和官方文档为准。根据 GitHub Releases，`livekit-agents@1.4.3` 发布时间为 2026-02-23。

## 链接

1. https://github.com/livekit/agents
2. https://docs.livekit.io/agents/
3. https://github.com/livekit/agents/blob/main/README.md
4. https://github.com/livekit/agents/blob/main/examples/voice_agents/README.md
5. https://github.com/livekit/agents/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/asr]]
- [[00-元语/tts]]
- [[00-元语/multimodal]]
- [[00-元语/mcp]]
- [[00-元语/github]]
