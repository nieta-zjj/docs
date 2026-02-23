---
title: "GPT-SoVITS：开源项目语音克隆与文本转语音"

发布日期: "2026-02-22"
对象: "GitHub 项目 `RVC-Boss/GPT-SoVITS`"
项目主页: "https://github.com/RVC-Boss/GPT-SoVITS"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 55177，Forks 6024，Watchers 263（抓取时间：2026-02-22）"
版本快照: "最新发布 20250606v2pro（发布时间：2025-06-06T03:04:27Z）"
---

## 摘要

1) 一句话总结
GPT-SoVITS 是一个高热度的开源少样本语音克隆与文本转语音 (TTS) 框架，仅需极少量语音样本即可实现高质量、跨语言的语音合成。

2) 关键点
* **核心能力**：支持零样本（5秒语音样本即时推理）和少样本（1分钟数据微调）的语音克隆与 TTS 转换。
* **跨语言支持**：支持在不同于训练集语言的情况下进行推理，目前涵盖中文、英语、日语、韩语和粤语。
* **集成 WebUI 工具**：内置人声伴奏分离、自动训练集分割、中文 ASR 和文本标注等工具，降低了初学者制作数据集和训练模型的门槛。
* **极速推理性能**：v2 ProPlus 版本推理速度（RTF）表现优异，在 RTX 4090 上为 0.014，RTX 4060Ti 上为 0.028，M4 CPU 上为 0.526。
* **项目热度与开源协议**：采用 MIT 协议开源，GitHub 仓库拥有超过 5.5 万 Stars 和 6000+ Forks。
* **跨平台与环境兼容**：支持 Windows、Linux 和 macOS，兼容 Python 3.9-3.11 及多种 PyTorch 版本（支持 CUDA、Apple Silicon 和 CPU），并为 Windows 用户提供了一键运行的整合包。

3) 风险/差距
* **macOS 训练质量问题**：官方明确指出，在 Mac 设备上使用 GPU 训练的模型质量明显低于其他设备，因此目前在 macOS 环境下暂时改用 CPU 进行训练。

## 功能与定位

1 min voice data can also be used to train a good TTS model! (few shot voice cloning)

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:42:52Z。
- 项目创建于 2024-01-14T18:05:21Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/RVC-Boss/GPT-SoVITS
- README：https://raw.githubusercontent.com/RVC-Boss/GPT-SoVITS/main/README.md
- Releases：https://github.com/RVC-Boss/GPT-SoVITS/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/asr]]
- [[00-元语/audio]]
- [[00-元语/tts]]
- [[00-元语/deepfake]]
