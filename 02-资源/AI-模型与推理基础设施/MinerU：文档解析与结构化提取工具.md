---
title: "MinerU：文档解析与结构化提取工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `opendatalab/MinerU`"
项目主页: "https://github.com/opendatalab/MinerU"
官方网站: "https://opendatalab.github.io/MinerU/"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Python"
统计快照: "Stars 54687，Forks 4533，Watchers 217（抓取时间：2026-02-22）"
版本快照: "最新发布 mineru-2.7.6-released（发布时间：2026-02-06T03:39:53Z）"
---

## 摘要

**1) 一句话总结**
MinerU 是一个基于 Python 的开源文档分析工具，能够将复杂的 PDF 文档（包含公式、表格等）高精度地转换为适用于大语言模型（LLM）和智能体工作流的 Markdown 或 JSON 格式。

**2) 关键要点**
* **核心功能**：支持将 PDF 转换为机器可读格式，保留原文档结构（标题、段落、列表），并按人类阅读顺序输出文本，适应单栏、多栏及复杂排版。
* **多模态与元素提取**：能够自动提取图像、图表描述、表格及脚注，并将文档中的公式自动转换为 LaTeX 格式，表格转换为 HTML 格式。
* **OCR 与多语言支持**：自动检测扫描版和乱码 PDF 并启用 OCR 功能，支持高达 109 种语言的文本检测与识别。
* **智能清洗**：自动去除页眉、页脚、脚注和页码等干扰元素，确保提取文本的语义连贯性。
* **跨平台与硬件加速**：兼容 Windows、Linux 和 Mac 平台，支持纯 CPU 运行，同时支持 GPU (CUDA)、NPU (CANN)、MPS 加速。
* **国产算力全面适配**：最新版本（2.7.6）已广泛适配昇腾、海光、燧原、摩尔线程、寒武纪、昆仑芯等十余种主流国产计算平台和芯片架构。
* **混合后端引擎（Hybrid Backend）**：2.7.0 版本引入并默认使用 `hybrid-auto-engine` 后端，结合了 `pipeline` 和 `vlm` 的优势，原生支持文本 PDF 的多语言识别，并大幅减少解析幻觉。
* **开源与社区影响力**：采用 GNU AGPL v3.0 协议开源，在 GitHub 上拥有超 5.4 万 Stars；该项目源自 InternLM 预训练过程，专注于解决科学文献中的符号转换问题。

**3) 风险与不足**
* **产品成熟度差距**：官方明确指出，与知名商业产品相比 MinerU 仍然年轻，解析结果可能存在不符合预期的情况（官方文档中列有“已知问题”清单）。
* **依赖项安全风险（已修复）**：历史版本中存在第三方依赖项安全漏洞，官方在 2.7.1 版本中通过更新 `pdfminer.six` 依赖版本修复了 CVE-2025-64512 漏洞。

## 功能与定位

Transforms complex documents like PDFs into LLM-ready markdown/JSON for your Agentic workflows.

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:10:43Z。
- 项目创建于 2024-02-29T08:52:34Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/opendatalab/MinerU
- 官网：https://opendatalab.github.io/MinerU/
- README：https://raw.githubusercontent.com/opendatalab/MinerU/main/README.md
- Releases：https://github.com/opendatalab/MinerU/releases

## 关联主题

- [[00-元语/ocr]]
- [[00-元语/multimodal]]
- [[00-元语/llm]]
- [[00-元语/markdown]]
- [[00-元语/ETL]]
- [[00-元语/data-pipeline]]
- [[00-元语/Agent]]
- [[00-元语/workflow]]
