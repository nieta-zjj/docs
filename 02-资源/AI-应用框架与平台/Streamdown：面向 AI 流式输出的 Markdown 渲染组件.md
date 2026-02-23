---
title: "Streamdown：面向 AI 流式输出的 Markdown 渲染组件"

发布日期: "2026-02-22"
来源: "https://ai-sdk.dev/elements/components/message"
---

## 摘要

**1) 一句话总结**
Streamdown 是由 Vercel 开发的、面向 AI 流式输出场景的 React Markdown 渲染组件库，主打对未闭合语法的流式友好处理，并提供安全与可扩展能力。

**2) 核心要点**
- 项目定位：作为 `react-markdown` 的 drop-in replacement，可独立使用，也作为 AI SDK Elements 的 `Message` 组件底层渲染引擎。
- 流式渲染能力：面向 token-by-token 输出场景，支持未闭合 Markdown 的渐进式解析与渲染，减少流式展示中的格式跳变。
- 功能覆盖：支持 GFM、代码高亮、数学公式、Mermaid 图表、CJK 排版，以及复制/下载等交互能力。
- 安全与可控：默认结合 `rehype-sanitize`、`rehype-harden` 等插件，支持元素过滤、URL 转换和控制项开关。
- 集成要点：样式依赖 Tailwind 配置，且流式动画场景需要额外引入 `streamdown/styles.css`。

**3) 风险与不足**
- 数学与 CJK 等能力依赖额外插件，不是默认即开。
- 若 Tailwind 扫描路径或 `@source` 配置不完整，样式可能无法生效。
- 官方快速开始中对 React 版本出现“`>=19.1.1` 且兼容 React 18+”并列表述，实际版本下限需以官方后续说明为准。

## 功能与定位

Streamdown 是一个 React 组件库，定位为 `react-markdown` 的 drop-in replacement，重点解决 AI 输出流式 Markdown 时的渲染问题。官方文档将其描述为专为 AI-powered streaming 设计，目标是在内容尚未闭合时也保持可读、平滑的显示效果。

此外，Streamdown 既可单独安装使用，也被用于 AI SDK Elements 的 `Message` 组件中，适合在对话式应用中统一处理 Markdown 响应渲染。

## 典型使用场景

- AI 聊天应用中 assistant 消息的实时渲染。
- 需要逐 token 展示文本的流式输出界面。
- 需要在同一消息渲染层支持 GFM、代码块、数学公式、Mermaid 图表的产品界面。
- 基于 AI SDK Elements 的消息组件体系，直接复用 `MessageResponse` 与 Streamdown 的组合能力。

## 核心功能

- 流式友好渲染：处理未闭合的加粗、链接、代码块等 Markdown 结构。
- GFM 支持：覆盖表格、任务列表、删除线等常见扩展语法。
- 代码块体验：支持语法高亮、复制、下载等交互。
- 扩展插件：支持数学公式（KaTeX）、Mermaid、CJK 等插件化能力。
- 安全能力：默认配置包含 HTML 清洗与安全加固插件。
- 定制能力：支持组件覆盖、元素过滤、URL 转换、控制项开关等配置。

## 特色与差异点

- 面向流式输出而非静态 Markdown 的渲染优化。
- 与 `react-markdown` API 对齐，迁移成本较低。
- 可按需启用插件并结合 tree-shaking 控制体积。
- 与 Vercel AI 生态（AI SDK Elements）有直接衔接。

## 使用方式概览

- 安装：可直接安装 `streamdown`，或通过 AI SDK Elements 的 `message` 组件接入。
- 样式配置：需要在全局 CSS 中加入 `@source "../node_modules/streamdown/dist/*.js";`（路径按项目结构调整）。
- 动画支持：若使用流式动画能力，需要额外引入 `streamdown/styles.css`。
- 组件接入：在消息渲染处使用 `<Streamdown>` 渲染文本，并按需挂载 `code`、`math`、`mermaid`、`cjk` 等插件。
- Monorepo：若依赖提升到根目录，需同步调整 `@source` 的相对路径。

## 限制与注意事项

- 数学公式和 CJK 支持需要额外安装对应插件。
- 样式效果依赖 Tailwind 配置；配置缺失会导致渲染样式不完整。
- 配置页存在较多 API/props 细节，落地前应结合官方文档逐项确认。
- AI SDK Elements 的 `Message` 页面包含交互式示例内容，整理时应以组件说明和特性条目为主。

## 链接

- 官网：https://streamdown.ai
- 文档主页：https://streamdown.ai/docs
- 快速开始：https://streamdown.ai/docs/getting-started
- 配置说明：https://streamdown.ai/docs/configuration
- GitHub：https://github.com/vercel/streamdown
- AI SDK Elements Message：https://ai-sdk.dev/elements/components/message

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/llm]]
- [[00-元语/markdown]]
- [[00-元语/react]]
- [[00-元语/sdk]]
- [[00-元语/security]]
- [[00-元语/stream-processing]]
