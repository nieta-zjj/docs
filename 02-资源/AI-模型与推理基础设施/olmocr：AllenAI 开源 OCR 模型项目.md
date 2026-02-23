---
title: "olmocr：AllenAI 开源 OCR 模型项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `allenai/olmocr`"
项目主页: "https://github.com/allenai/olmocr"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 16924，Forks 1347，Watchers 96（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.4.25（发布时间：2026-01-25T02:58:26Z）"
---

## 摘要

**1) 一句话总结**
allenai/olmocr 是一个基于 7B 视觉语言模型（VLM）的开源工具包，专为大语言模型（LLM）数据集构建和训练设计，能够将 PDF 及图像格式的文档高效、低成本地转换为干净且具有自然阅读顺序的 Markdown 文本。

**2) 关键要点**
*   **核心功能**：支持将 PDF、PNG 和 JPEG 文件转换为 Markdown 格式，能够准确处理数学公式、表格、手写内容及复杂排版。
*   **智能排版解析**：自动移除页眉和页脚，即使在包含图表、多栏布局和插图的复杂文档中，也能按自然的阅读顺序输出文本。
*   **高效低成本**：转换成本极低（低于 200 美元/百万页）；由于底层基于 7B 参数的视觉语言模型，运行该工具需要 GPU 支持。
*   **模型与推理优化**：最新模型（v0.4.0）引入了强化学习（RL）训练和合成数据；推理管道已从 sglang 切换至 vllm，并默认采用 FP8 精度以显著提升运行速度。
*   **基准测试（olmOCR-Bench）**：项目发布了专属的 OCR 性能基准测试套件，包含跨越 1400 份文档的 7000 多个测试用例，并与 Mistral OCR、Marker、MinerU 等工具进行了对比。
*   **部署与训练支持**：提供官方 Docker 镜像（支持 CUDA 12.8），并提供了清理后的训练代码（trainer code），大幅简化了用户自行训练 olmOCR 模型的流程。
*   **开源与社区数据**：项目采用 Apache License 2.0 开源协议，在 GitHub 上获得了高度关注（超 16900 颗 Stars 和 1300+ Forks）。

## 功能与定位

Toolkit for linearizing PDFs for LLM datasets/training

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T11:51:55Z。
- 项目创建于 2024-09-17T14:53:40Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/allenai/olmocr
- README：https://raw.githubusercontent.com/allenai/olmocr/main/README.md
- Releases：https://github.com/allenai/olmocr/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/ocr]]
- [[00-元语/llm]]
- [[00-元语/data-pipeline]]
- [[00-元语/multimodal]]
- [[00-元语/benchmark]]
- [[00-元语/markdown]]
- [[00-元语/github]]
