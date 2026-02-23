---
title: "PaddleOCR：开源 OCR 与文档解析工具库"

发布日期: "2026-02-22"
对象: "GitHub 项目 `PaddlePaddle/PaddleOCR`"
项目主页: "https://github.com/PaddlePaddle/PaddleOCR"
官方网站: "https://www.paddleocr.com"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 71015，Forks 9844，Watchers 522（抓取时间：2026-02-22）"
版本快照: "最新发布 v3.4.0（发布时间：2026-01-29T11:19:45Z）"
---

## 摘要

### 1) 一句话总结
PaddleOCR 是一个强大的开源轻量级 OCR 与文档 AI 引擎，致力于将图像和 PDF 转化为结构化数据（如 JSON 和 Markdown）以赋能大语言模型（LLM），支持超百种语言并具备极高的工业级可用性。

### 2) 关键点
* **项目热度与应用**：基于 Python 开发，采用 Apache 2.0 开源协议，GitHub Star 数超 7.1 万，已被 MinerU、RAGFlow、cherry-studio 等 6000 多个项目集成使用。
* **核心模型 PaddleOCR-VL-1.5**：最新（v3.4.0）发布的 0.9B 视觉语言模型（VLM），在 OmniDocBench v1.5 上达到 94.5% 的准确率；支持 111 种语言（新增藏语和孟加拉语），擅长处理倾斜、弯曲、扫描、复杂光照和屏幕拍摄等真实场景，并支持跨页长文档解析。
* **PP-OCRv5 文本识别**：单一模型支持简繁中文、英文、日文和拼音 5 种文本，准确率提升 13%；其多语言识别模型仅 2M 参数，支持 109 种语言，部分语言准确率较上代提升超 40%。
* **PP-StructureV3 文档解析**：可将复杂 PDF 和文档图像智能转换为 Markdown 和 JSON 文件，并完美保留原始文档的排版和层级结构。
* **PP-ChatOCRv4 信息提取**：原生集成 ERNIE 4.5 模型，关键信息提取准确率较上一代提升 15%。
* **生态与工具链集成**：提供 MCP 服务器，支持与 Claude Desktop 等 Agent 应用无缝集成；同时提供涵盖模型训练、推理和部署的完整工具链。

### 3) 风险/缺口
* **版本兼容性风险**：官方明确指出，PaddleOCR 3.x 引入了重大的接口变更，基于 PaddleOCR 2.x 编写的旧代码很可能与 3.x 版本不兼容。

## 功能与定位

Turn any PDF or image document into structured data for your AI. A powerful, lightweight OCR toolkit that bridges the gap between images/PDFs and LLMs. Supports 100+ languages.

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:20:56Z。
- 项目创建于 2020-05-08T10:38:16Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/PaddlePaddle/PaddleOCR
- 官网：https://www.paddleocr.com
- README：https://raw.githubusercontent.com/PaddlePaddle/PaddleOCR/main/README.md
- Releases：https://github.com/PaddlePaddle/PaddleOCR/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/ocr]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/mcp]]
- [[00-元语/Agent]]
- [[00-元语/markdown]]
