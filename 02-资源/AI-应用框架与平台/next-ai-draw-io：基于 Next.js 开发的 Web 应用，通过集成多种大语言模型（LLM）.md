---
title: "next-ai-draw-io：基于 Next.js 开发的 Web 应用，通过集成多种大语言模型（LLM）"

发布日期: "2026-02-22"
对象: "GitHub 项目 `DayuanJiang/next-ai-draw-io`"
项目主页: "https://github.com/DayuanJiang/next-ai-draw-io"
官方网站: "https://next-ai-drawio.jiang.jp/"
开源协议: "Apache License 2.0"
主要语言: "TypeScript"
统计快照: "Stars 21433，Forks 2274，Watchers 79（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.4.12（发布时间：2026-01-24T10:28:02Z）"
---

## 摘要

1) 一句话总结
next-ai-draw-io 是一个基于 Next.js 开发的 Web 应用，通过集成多种大语言模型（LLM），允许用户使用自然语言交互来创建、修改和增强 draw.io 图表。

2) 关键要点
- **项目基础**：使用 TypeScript 开发，采用 Apache License 2.0 开源协议，目前已获得超 2.1 万 Stars。
- **核心功能**：支持通过自然语言生成和编辑图表，支持上传图片、PDF 或文本文件提取内容生成图表，并提供图表历史版本控制与 AI 推理过程展示。
- **特色图表支持**：专门支持生成云架构图（AWS、GCP、Azure），并支持创建带有动画效果的动态连接线。
- **多模型与服务商支持**：支持 OpenAI、Anthropic、DeepSeek、Ollama、字节跳动豆包等多种 AI 服务商（默认使用 AWS Bedrock），除 AWS 和 OpenRouter 外均支持自定义端点。
- **模型推荐**：官方推荐使用 Claude Sonnet 4.5、GPT-5.1、Gemini 3 Pro 和 DeepSeek V3.2/R1 等具备强长文本和严格格式生成能力的模型，其中 Claude 系列最适合生成云架构图。
- **技术栈**：前端框架使用 Next.js，AI 响应流处理使用 Vercel AI SDK，图表渲染和操作使用 react-drawio（基于 XML 格式）。
- **部署与运行**：提供在线 Demo（支持用户自带 API Key）、桌面客户端（Windows/macOS/Linux）、Docker 镜像，并支持一键部署至 EdgeOne Pages、Vercel 和 Cloudflare Workers。
- **MCP 服务集成**：提供 MCP（模型上下文协议）服务，允许与 Claude Desktop、Cursor 和 VS Code 等 AI 代理集成使用。

3) 风险/缺口
- **功能稳定性风险**：MCP Server（模型上下文协议服务）目前为预览版（Preview）和实验性功能，官方明确表示该功能可能不稳定。

## 功能与定位

A next.js web application that integrates AI capabilities with draw.io diagrams. This app allows you to create, modify, and enhance diagrams through natural language commands and AI-assisted visualization.

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T13:07:52Z。
- 项目创建于 2025-03-23T15:03:48Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/DayuanJiang/next-ai-draw-io
- 官网：https://next-ai-drawio.jiang.jp/
- README：https://raw.githubusercontent.com/DayuanJiang/next-ai-draw-io/main/README.md
- Releases：https://github.com/DayuanJiang/next-ai-draw-io/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/cloudflare]]
- [[00-元语/desktop-client]]
- [[00-元语/github]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
- [[00-元语/react]]
- [[00-元语/sdk]]
- [[00-元语/tool]]
- [[00-元语/typescript]]
- [[00-元语/workflow]]
