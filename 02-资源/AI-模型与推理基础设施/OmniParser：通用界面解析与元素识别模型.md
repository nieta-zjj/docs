---
title: "OmniParser：通用界面解析与元素识别模型"

发布日期: "2026-02-22"
对象: "GitHub 项目 `microsoft/OmniParser`"
项目主页: "https://github.com/microsoft/OmniParser"
开源协议: "Creative Commons Attribution 4.0 International"
主要语言: "Jupyter Notebook"
统计快照: "Stars 24378，Forks 2122，Watchers 180（抓取时间：2026-02-22）"
版本快照: "最新发布 v.2.0.1（发布时间：2025-09-12T20:34:05Z）"
---

## 摘要

### 一句话总结
微软开源的 OmniParser 是一个面向纯视觉 GUI 智能体的屏幕解析工具，能够将界面截图转化为结构化元素，从而显著提升大视觉语言模型（如 GPT-4V）生成精准界面操作的能力。

### 核心要点
* **高关注度项目**：该项目在 GitHub 上拥有超 2.4 万 Stars，并曾登顶 Hugging Face 模型库趋势榜第一。
* **核心解析能力**：能够进行细粒度/小图标检测，并能预测屏幕上的每个元素是否具有可交互性。
* **V2 版本性能突破**：最新发布的 V2 版本在 Screen Spot Pro 基础基准测试中取得了 39.5% 的 SOTA（当前最佳）成绩，并在 Windows Agent Arena 中表现最佳。
* **OmniTool 虚拟机控制**：2025年2月推出了 OmniTool，结合 OmniParser 与主流视觉大模型（如 OpenAI 4o/o1、DeepSeek R1、Qwen 2.5VL、Anthropic Computer Use），可开箱即用地控制 Windows 11 虚拟机。
* **数据流水线支持**：2025年3月新增本地轨迹日志记录功能，支持用户利用 OmniParser+OmniTool 为特定领域的智能体构建训练数据流水线。
* **环境与部署**：项目主要基于 Jupyter Notebook，依赖 Python 3.12 环境，官方提供了 `demo.ipynb` 示例和 `gradio_demo.py` 以供快速启动交互式演示。
* **模型权重协议差异**：`icon_caption` 相关模型（blip2/florence）采用 MIT 协议，但 `icon_detect` 模型因继承 YOLO 模型，强制采用 AGPL 协议。

### 风险/不足
* **文档与功能未完善**：本地轨迹日志记录功能的文档仍在编写中（WIP）；OmniTool 的多智能体编排和用户界面仍在逐步添加和改进中。
* **开源协议限制**：`icon_detect` 模型权重受严格的 AGPL 协议约束，在闭源或商业化集成时存在合规风险。

## 功能与定位

A simple screen parsing tool towards pure vision based GUI agent

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T08:27:51Z。
- 项目创建于 2024-09-20T05:18:18Z，具备持续迭代与社区沉淀。
- 以 `Jupyter Notebook` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/microsoft/OmniParser
- README：https://raw.githubusercontent.com/microsoft/OmniParser/main/README.md
- Releases：https://github.com/microsoft/OmniParser/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/benchmark]]
- [[00-元语/data-pipeline]]
- [[00-元语/windows]]
- [[00-元语/compliance]]
- [[00-元语/github]]
