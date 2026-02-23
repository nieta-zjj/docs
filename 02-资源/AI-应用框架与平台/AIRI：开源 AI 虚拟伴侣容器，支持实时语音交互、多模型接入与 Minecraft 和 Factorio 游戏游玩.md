---
title: "AIRI：开源 AI 虚拟伴侣容器，支持实时语音交互、多模型接入与 Minecraft 和 Factorio 游戏游玩"

发布日期: "2026-02-22"
对象: "GitHub 项目 `moeru-ai/airi`"
项目主页: "https://github.com/moeru-ai/airi"
官方网站: "https://airi.moeru.ai/docs/"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 17542，Forks 1712，Watchers 75（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.8.4（发布时间：2026-01-30T13:41:53Z）"
---

## 摘要

**1) 一句话总结**
AIRI (moeru-ai/airi) 是一个受 Neuro-sama 启发的开源 AI 虚拟伴侣容器，支持跨平台运行、实时语音交互、多模型接入以及游玩 Minecraft 和 Factorio 等游戏。

**2) 关键要点**
*   **项目基础**：基于 TypeScript 开发，采用 MIT 开源协议，目前在 GitHub 拥有超 1.7 万 Stars（最新版本 v0.8.4）。
*   **核心能力**：提供 AI 虚拟角色托管，具备语音输入/识别（浏览器/Discord）、语音合成（ElevenLabs）以及跨平台聊天（Telegram/Discord）功能。
*   **虚拟形象支持**：原生支持 Live2D 和 VRM 模型，并内置自动眨眼、视线跟随和待机眼部运动等动画控制。
*   **游戏交互**：AI 具备游玩《Minecraft》（我的世界）的能力，对《Factorio》（异星工厂）的支持正在开发中（已提供 PoC 演示）。
*   **跨平台与技术栈**：深度集成 WebGPU、WebAudio、WebAssembly 等 Web 技术，支持在现代浏览器和移动端运行；桌面端则通过 HuggingFace `candle` 默认支持原生 NVIDIA CUDA 和 Apple Metal 硬件加速。
*   **广泛的模型支持**：通过内置的 `xsai` 库，支持数十种主流 LLM API 供应商及本地推理框架（包括 OpenAI, Claude, Gemini, DeepSeek, Ollama, vLLM 等）。
*   **生态系统**：项目衍生了多个子项目（归属 `@proj-airi` 组织），涵盖 RAG、DuckDB WASM 数据库驱动、Tauri MCP 插件、Factorio 自动化库等。

**3) 风险与缺口**
*   **加密货币欺诈风险**：官方明确警告，该项目**没有**发行任何官方加密货币或代币，提醒用户谨慎甄别。
*   **开发阶段限制**：项目仍处于早期开发阶段，官方正在积极招募 Live2D/VRM 建模师、计算机视觉、强化学习及 WebGPU 等领域的开发者。
*   **功能缺口**：纯浏览器端本地 WebGPU 推理、高级记忆系统（Memory Alaya）仍在开发中（WIP）；部分云服务商（如 Azure OpenAI、AWS Claude、火山引擎等）的 API 接入尚未完成，正在等待社区 PR。

## 功能与定位

💖🧸 Self hosted, you owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:56:08Z。
- 项目创建于 2024-12-01T16:33:36Z，具备持续迭代与社区沉淀。
- 以 `TypeScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/moeru-ai/airi
- 官网：https://airi.moeru.ai/docs/
- README：https://raw.githubusercontent.com/moeru-ai/airi/main/README.md
- Releases：https://github.com/moeru-ai/airi/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/self-hosting]]
- [[00-元语/asr]]
- [[00-元语/tts]]
- [[00-元语/multimodal]]
- [[00-元语/game]]
- [[00-元语/wasm]]
- [[00-元语/mcp]]
- [[00-元语/typescript]]
