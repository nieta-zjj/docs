---
title: "Docling：开源文档解析工具与结构化转换"

发布日期: "2026-02-22"
对象: "GitHub 项目 `docling-project/docling`"
项目主页: "https://github.com/docling-project/docling"
官方网站: "https://docling-project.github.io/docling"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 53816，Forks 3644，Watchers 207（抓取时间：2026-02-22）"
版本快照: "最新发布 v2.74.0（发布时间：2026-02-17T21:16:44Z）"
---

## 摘要

**1) 一句话总结**
Docling 是一个开源的 Python 文档解析工具，支持将 PDF 等多种复杂文档格式转换为适用于生成式 AI 生态的统一表示格式。

**2) 核心要点**
* **项目基础**：采用 MIT 开源协议，GitHub 拥有超 5.3 万 Stars，最新版本为 v2.74.0。
* **多格式解析**：支持解析 PDF、DOCX、PPTX、XLSX、HTML、图像、音频（WAV/MP3）、LaTeX 及 WebVTT 等多种文件格式。
* **高级 PDF 理解**：具备识别页面布局、阅读顺序、表格结构、代码、公式及图像分类的能力，最新版本默认采用 Heron 布局模型以提升解析速度。
* **统一输出格式**：提供统一的 `DoclingDocument` 表示格式，支持导出为 Markdown、HTML、DocTags 和无损 JSON。
* **AI 生态集成**：开箱即用支持 LangChain、LlamaIndex、Crew AI 和 Haystack，并提供 MCP 服务器以连接各类智能体（Agent）应用。
* **多模型与 OCR 支持**：内置广泛的 OCR 支持，兼容视觉语言模型（如 GraniteDocling）和自动语音识别（ASR）模型。
* **安全与跨平台**：支持在 macOS、Linux 和 Windows（x86_64 及 arm64）上本地运行，适用于敏感数据和物理隔离环境。
* **未来规划**：即将推出元数据提取、图表理解（柱状图、饼图等）以及复杂化学结构（分子式）理解功能。

**3) 风险与缺口**
* **环境兼容性缺口**：自 v2.70.0 版本起，已明确放弃对 Python 3.9 的支持，用户必须使用 Python 3.10 或更高版本。
* **功能成熟度**：结构化信息提取（Structured information extraction）目前仍处于 Beta 测试阶段。

## 功能与定位

Get your documents ready for gen AI

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:03:20Z。
- 项目创建于 2024-07-09T07:50:26Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/docling-project/docling
- 官网：https://docling-project.github.io/docling
- README：https://raw.githubusercontent.com/docling-project/docling/main/README.md
- Releases：https://github.com/docling-project/docling/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/tool]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/ocr]]
- [[00-元语/asr]]
- [[00-元语/markdown]]
- [[00-元语/mcp]]
- [[00-元语/github]]
