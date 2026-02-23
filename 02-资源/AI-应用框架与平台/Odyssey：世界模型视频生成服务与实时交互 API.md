---
title: "Odyssey：世界模型视频生成服务与实时交互 API"

发布日期: "2026-02-22"
对象: "Odyssey（网站与开发者 API）"
来源: "https://documentation.api.odyssey.ml/session-management.md"
备注: "含用户实测交互反馈（点击后弹出 action list）。"
---

## 摘要

**1) 一句话总结**
Odyssey 及其核心模型 Odyssey-2 Pro 是一个支持实时交互的通用世界模型，能够通过文本或图像提示即时生成长达数分钟的连续视频流，并提供易于集成的多语言 SDK。

**2) 关键要点**
- 模型机制：Odyssey-2 Pro 为 action-conditioned world model，可基于当前状态、动作和历史序列预测下一帧视频。
- 实时生成：支持即时开流，官方文档给出约 50ms 每帧，并支持 midstream prompt updates。
- 输入与接入：支持 text-to-video 与 image-to-video，提供 JavaScript 和 Python SDK。
- API 形态：核心接口包含 interactive streams、viewable streams、simulations。
- 交互体验：除文本输入外，用户实测体验页支持点击/触摸触发悬浮 action list，交互密度高于纯文本输入。

**3) 风险与不足**
- 并发受限：interactive streams 并发数受账号计划限制（文档示例提到 Free tier 最多 5 路并发）。
- 会话管理成本：页面关闭、网络抖动或开发阶段 HMR 可能导致 dangling sessions，需主动 disconnect 清理。

## 功能与定位

Odyssey 的定位是通用世界模型平台。其核心产品 Odyssey-2 Pro 强调“连续、可交互”的视频生成，不只输出固定时长片段，而是持续滚动生成并允许用户在流中实时干预。

## 典型使用场景

- 在产品中嵌入实时可交互的视频流界面。
- 通过文本或初始图片驱动多分钟连续模拟。
- 结合 API 构建在线交互体验与离线模拟工作流。

## 核心功能

- 实时逐帧视频生成与流式输出。
- 流中交互：生成过程中可追加提示词调整方向。
- 双入口生成：text-to-video、image-to-video。
- 多端点 API：interactive streams、viewable streams、simulations。

## 特色与差异点

- 与传统“先等待、后输出固定短片”的视频模型相比，Odyssey 更强调低等待与持续可控的交互过程。
- 官方资料明确面向开发者嵌入场景，文档给出快速接入路径（开发者账号、SDK、Quick Start）。
- 用户实测中出现“点击后弹出 action list 的悬浮指令框”，说明其交互不仅限于文字输入。

## 使用方式概览

- 申请开发者账号并获取 API Key。
- 使用 `@odysseyml/odyssey` 或 Python SDK 建立连接。
- 基本生命周期为 `connect -> startStream -> interact -> endStream/disconnect`。
- 若使用 image-to-video，输入图片大小与格式需满足官方限制。

## 限制与注意事项

- image-to-video 输入存在文件大小与格式约束，接入前应校验素材。
- interactive streams 并发额度受套餐约束，压力场景需要做并发规划。
- 生产和开发环境都应实现主动断连策略，避免 dangling sessions 长时间占用额度。
- 具体商用与调用边界以 API License Agreement 为准。

## 链接

- 体验页：https://experience.odyssey.ml/
- 官网：https://odyssey.world/
- API 文档入口：https://documentation.api.odyssey.ml/index.md
- Odyssey-2 Pro 概览：https://documentation.api.odyssey.ml/odyssey-2-overview.md
- API Quick Start：https://documentation.api.odyssey.ml/api-quick-start.md
- Session Management：https://documentation.api.odyssey.ml/session-management.md
- 开发者控制台：https://developer.odyssey.ml/dashboard
- API 许可协议：https://odyssey.ml/legal

## 关联主题

- [[00-元语/AI]]
- [[00-元语/video]]
- [[00-元语/stream-processing]]
- [[00-元语/multimodal]]
- [[00-元语/sdk]]
