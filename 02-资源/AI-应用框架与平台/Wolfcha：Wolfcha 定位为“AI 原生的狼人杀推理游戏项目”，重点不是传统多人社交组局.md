---
title: "Wolfcha：Wolfcha 定位为“AI 原生的狼人杀推理游戏项目”，重点不是传统多人社交组局"

对象: "GitHub 开源项目"
来源: "https://wolf-cha.com/"
---

## 摘要

Wolfcha 是一款基于多大语言模型驱动的 AI 狼人杀社交推理游戏，核心特色是双层 AI 角色扮演机制与模型竞技场设计。

- 项目定位：AI 驱动的狼人杀项目，提供在线体验与本地运行路径。
- 核心机制：双层 AI 角色扮演机制与模型同台竞技。
- 支持模型：README 列举 DeepSeek、Qwen、Kimi、Gemini、Seed 等示例模型。
- 技术栈：基于 Next.js App Router、TypeScript、Tailwind、Radix UI、Jotai、Framer Motion。
- 外部依赖：完整运行依赖 ZenMux、MiniMax、Dashscope、Supabase、Stripe 等服务配置。

## 功能与定位

Wolfcha 定位为“AI 原生的狼人杀推理游戏项目”，重点不是传统多人社交组局，而是让玩家在单人或人机混合场景下与多模型驱动的 AI 角色进行对局，并观察不同模型在推理、伪装和博弈中的表现差异。

## 典型使用场景

- 作为 AI 推理博弈游戏进行体验和娱乐。
- 作为模型行为观察场，比较不同模型在同类博弈任务中的表现。
- 作为前端与 AI 结合的开源样例，用于二次开发或教学演示。

## 核心功能

- 双层 AI 角色扮演：同一 AI 同时受“人物设定”和“狼人杀身份规则”约束。
- 模型竞技场机制：同局内可观察多模型驱动角色的发言与策略差异。
- 在线体验入口：官方提供可直接访问的演示站点。
- 本地运行支持：仓库提供环境变量示例与本地开发启动说明。

## 特色与差异点

- 玩法与评测结合：在游戏体验中自然暴露模型推理与话术能力差异。
- 技术栈现代：项目采用 Next.js App Router、TypeScript、Tailwind、Radix UI 等组合。
- 开源透明：代码、运行说明和版本发布在同一仓库可追踪。

## 使用方式概览

- 体验路径：直接访问 `https://wolf-cha.com/`。
- 开发路径：从 GitHub 克隆项目后，按 `.env.example` 配置必要密钥，再执行依赖安装与开发启动。
- 评估路径：通过同一玩法场景观察不同模型在策略和对话层面的行为差异。

## 限制与注意事项

- 外部依赖较多：完整功能依赖多项第三方 API 与后端配置，离线不可完整复现。
- 动态指标会变化：Star/Fork/Release 等数据会随时间更新，引用时应标注快照日期。
- 协议信息需以 LICENSE 为准：README 中出现过 `MIT` 文本，但仓库 `LICENSE` 文件为 Apache-2.0。

## 链接

- 仓库主页：https://github.com/oil-oil/wolfcha
- 中文 README：https://github.com/oil-oil/wolfcha/blob/main/README.zh.md
- LICENSE：https://github.com/oil-oil/wolfcha/blob/main/LICENSE
- Releases：https://github.com/oil-oil/wolfcha/releases
- 在线体验：https://wolf-cha.com/

## 关联主题

- [[00-元语/game]]
- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/decision-making]]
- [[00-元语/benchmark]]
- [[00-元语/github]]
