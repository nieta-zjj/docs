---
title: "DeepSeek-OCR：基于 MIT 协议开源的视觉-文本压缩与光学字符识别模型，旨在从以大语言模型（LLM）为中心的视角探索视觉编码器的作用与边界"

发布日期: "2026-02-22"
对象: "GitHub 项目 `deepseek-ai/DeepSeek-OCR`"
项目主页: "https://github.com/deepseek-ai/DeepSeek-OCR"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 22524，Forks 2063，Watchers 105（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
DeepSeek-OCR 是一个基于 MIT 协议开源的视觉-文本压缩与光学字符识别模型，旨在从以大语言模型（LLM）为中心的视角探索视觉编码器的作用与边界。

**2) 关键要点**
* **项目热度与协议**：项目主要使用 Python 开发，采用 MIT 开源协议，已获得超过 2.2 万 Stars 和 2000+ Forks。
* **推理框架支持**：全面支持 vLLM 和 Transformers 推理，且已在 vLLM 上游获得官方支持。
* **vLLM 推理性能**：支持图像流式输出和基准测试批量评估，在 A100-40G 显卡上处理 PDF 的并发速度可达约 2500 tokens/s。
* **原生分辨率模式**：支持四种固定分辨率输入，包括 Tiny（512×512，64个视觉token）、Small（640×640，100个）、Base（1024×1024，256个）和 Large（1280×1280，400个）。
* **动态分辨率模式**：支持 Gundam 动态分辨率模式（n×640×640 + 1×1024×1024）。
* **环境与依赖**：推荐运行环境为 CUDA 11.8+、PyTorch 2.6.0 和 Python 3.12.9，Transformers 推理需依赖 Flash Attention 2 和 bfloat16 精度。
* **多场景 Prompt 模板**：内置多种提示词模板，支持文档转 Markdown、无排版纯文本 OCR、图表解析、图像详细描述及目标定位（Grounding）等任务。
* **后续演进**：官方已于 2026 年 1 月 27 日推出了下一代模型 DeepSeek-OCR2。

## 功能与定位

Contexts Optical Compression

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:41:31Z。
- 项目创建于 2025-10-17T06:14:27Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/deepseek-ai/DeepSeek-OCR
- README：https://raw.githubusercontent.com/deepseek-ai/DeepSeek-OCR/main/README.md
- Releases：https://github.com/deepseek-ai/DeepSeek-OCR/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/ocr]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/multimodal]]
- [[00-元语/benchmark]]
