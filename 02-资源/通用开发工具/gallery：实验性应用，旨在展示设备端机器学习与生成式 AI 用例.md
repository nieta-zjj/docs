---
title: "gallery：实验性应用，旨在展示设备端机器学习与生成式 AI 用例"

发布日期: "2026-02-22"
对象: "GitHub 项目 `google-ai-edge/gallery`"
项目主页: "https://github.com/google-ai-edge/gallery"
开源协议: "Apache License 2.0"
主要语言: "Kotlin"
统计快照: "Stars 15172，Forks 1307，Watchers 161（抓取时间：2026-02-22）"
版本快照: "最新发布 1.0.9（发布时间：2025-12-18T17:15:47Z）"
---

## 摘要

**1) 一句话总结**
Google AI Edge Gallery 是一款实验性应用，旨在展示设备端机器学习与生成式 AI 用例，支持用户在 Android 和 iOS 设备上完全离线地运行、体验和评估本地大模型。

**2) 关键要点**
*   **平台支持**：支持 Android（需 Android 12 及以上，通过 Google Play 或 APK 安装）和 iOS（目前通过 TestFlight 测试，计划 2026 年初正式登陆 App Store）。
*   **完全离线运行**：模型加载后无需网络连接，所有数据处理和生成均在设备本地完成。
*   **多模态交互**：提供“Ask Image”（图像问答、对象识别）和“Audio Scribe”（音频录制/上传转录与翻译）功能。
*   **文本与对话功能**：内置 AI Chat（多轮对话）和 Prompt Lab（单轮指令，如文本总结、重写、代码生成）。
*   **特色与实验性玩法**：包含“Tiny Garden”（纯离线自然语言种花小游戏）和“Mobile Actions”（加载微调模型以解锁离线设备控制）。
*   **开发者友好**：支持实时性能监控（TTFT、解码速度、延迟），允许无缝切换 Hugging Face 模型，并支持开发者导入自定义的 LiteRT (`.litertlm`) 模型。
*   **底层技术栈**：主要使用 Kotlin 开发，核心依赖包括 Google AI Edge、LiteRT 运行时以及 LLM Inference API。
*   **项目热度**：采用 Apache 2.0 开源协议，目前已获得超 15,000 颗 Stars 和 1,300+ 次 Forks，最新版本为 1.0.9。

**3) 风险/不足**
*   **版本兼容性断裂**：安装最新版本前必须卸载所有旧版本，旧版本应用将不再可用且不再受支持。
*   **iOS 测试限制**：TestFlight 测试名额上限为 10,000 人（先到先得），且存在硬件门槛，仅支持至少配备 6GB RAM 的 iOS 设备。
*   **项目状态**：该应用目前仍处于实验性的 Beta 测试阶段。

## 功能与定位

A gallery that showcases on-device ML/GenAI use cases and allows people to try and use models locally.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:04:35Z。
- 项目创建于 2025-03-31T17:47:28Z，具备持续迭代与社区沉淀。
- 以 `Kotlin` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/google-ai-edge/gallery
- README：https://raw.githubusercontent.com/google-ai-edge/gallery/main/README.md
- Releases：https://github.com/google-ai-edge/gallery/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/asr]]
- [[00-元语/audio]]
- [[00-元语/hardware-control]]
- [[00-元语/github]]
