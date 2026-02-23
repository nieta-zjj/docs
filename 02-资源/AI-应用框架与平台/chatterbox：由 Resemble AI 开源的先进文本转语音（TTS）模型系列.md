---
title: "chatterbox：由 Resemble AI 开源的先进文本转语音（TTS）模型系列"

发布日期: "2026-02-22"
对象: "GitHub 项目 `resemble-ai/chatterbox`"
项目主页: "https://github.com/resemble-ai/chatterbox"
官方网站: "https://resemble-ai.github.io/chatterbox_demopage/"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 22786，Forks 3000，Watchers 143（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.1.2（发布时间：2025-06-13T14:42:01Z）"
---

## 摘要

**1) 一句话总结**
Chatterbox 是由 Resemble AI 开源的先进文本转语音（TTS）模型系列，提供低延迟的 Turbo 版本（350M参数）和支持 23 种以上语言的多语种版本（500M参数），并内置了用于安全追踪的隐形水印功能。

**2) 核心要点**
*   **模型矩阵**：提供三款模型，包括 Chatterbox-Turbo（350M参数，英文）、Chatterbox-Multilingual（500M参数，23+语言）以及初代 Chatterbox（500M参数，英文）。
*   **Turbo 版本优化**：Turbo 模型将语音 token 到 mel 频谱的解码步骤从 10 步压缩至 1 步，大幅降低了算力和显存需求，专为低延迟语音代理设计。
*   **副语言标签支持**：Turbo 模型原生支持副语言标签（如 `[cough]` 咳嗽、`[laugh]` 大笑、`[chuckle]` 轻笑），以增强语音的真实感。
*   **多语种与零样本克隆**：多语种版本支持零样本（Zero-shot）声音克隆，覆盖中文、英文、法文、日文等 23 种以上的语言。
*   **内置隐形水印**：所有生成的音频均强制嵌入 PerTh（感知阈值）神经水印，该水印在 MP3 压缩和常规音频编辑后仍能保持近 100% 的检测准确率，并提供了配套的水印提取脚本。
*   **生成控制**：用户可以通过调整 `cfg_weight` 和 `exaggeration` 参数来微调语音的语速、节奏和情感表现力（例如降低 `cfg_weight` 并提高 `exaggeration` 可生成更具戏剧性的语音）。
*   **公开评估**：官方使用 Podonos 平台对 Turbo 模型进行了标准化主观评估，并公开了与 ElevenLabs Turbo v2.5、Cartesia Sonic 3 和 VibeVoice 7B 的对比报告。
*   **技术栈与协议**：项目基于 Python 开发（测试环境为 Python 3.11 和 Debian 11），采用宽松的 MIT 开源协议，可通过 `pip install chatterbox-tts` 快速安装。

**3) 风险与不足**
*   **口音继承问题**：在进行多语种生成时，如果参考音频与指定的语言标签不匹配，输出的语音可能会带有参考音频语言的口音（官方建议将 `cfg_weight` 设为 0 以缓解此问题）。
*   **数据与合规风险**：官方免责声明指出，模型的提示词来源于互联网上的免费公开数据，明确警告用户不得将该模型用于恶意用途。

## 功能与定位

SoTA open-source TTS

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T11:01:21Z。
- 项目创建于 2025-04-23T08:16:38Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/resemble-ai/chatterbox
- 官网：https://resemble-ai.github.io/chatterbox_demopage/
- README：https://raw.githubusercontent.com/resemble-ai/chatterbox/master/README.md
- Releases：https://github.com/resemble-ai/chatterbox/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/tts]]
- [[00-元语/audio]]
- [[00-元语/deepfake]]
- [[00-元语/compliance]]
- [[00-元语/risk]]
- [[00-元语/github]]
