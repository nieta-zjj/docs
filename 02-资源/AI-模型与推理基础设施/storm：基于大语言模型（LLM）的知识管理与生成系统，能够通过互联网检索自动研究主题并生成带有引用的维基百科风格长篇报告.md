---
title: "storm：基于大语言模型（LLM）的知识管理与生成系统，能够通过互联网检索自动研究主题并生成带有引用的维基百科风格长篇报告"

发布日期: "2026-02-22"
对象: "GitHub 项目 `stanford-oval/storm`"
项目主页: "https://github.com/stanford-oval/storm"
官方网站: "http://storm.genie.stanford.edu"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 27915，Forks 2535，Watchers 189（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.1.0（发布时间：2025-01-23T07:21:44Z）"
---

## 摘要

### 1) 一句话总结
STORM 是一个基于大语言模型（LLM）的知识管理与生成系统，能够通过互联网检索自动研究主题并生成带有引用的维基百科风格长篇报告，其升级版 Co-STORM 进一步支持了人机协作探索。

### 2) 核心要点
*   **项目基础**：采用 Python 开发，基于 MIT 协议开源，目前已获得超 2.7 万 Stars，最新版本为 v1.1.0（2025年1月发布）。
*   **STORM 工作流**：分为“写作前（检索资料并生成大纲）”和“写作（基于大纲和参考资料生成带引用的全文）”两个阶段。
*   **核心提问策略**：采用“视角引导提问（发现不同视角以控制提问过程）”和“模拟对话（模拟维基百科作者与领域专家的对话）”来提升问题深度与广度。
*   **Co-STORM 协作机制**：引入了协作对话协议（包含 LLM 专家、主持人和人类用户三种角色），并维护一个动态更新的“思维导图”以降低长对话中的认知负荷。
*   **模型与检索器支持**：系统基于 `dspy` 构建，高度模块化；通过 `litellm` 集成了多种语言模型和嵌入模型；支持 Bing、You.com、DuckDuckGo 等多种搜索引擎，并提供 `VectorRM` 以支持基于用户本地文档的检索。
*   **使用与部署**：提供 `knowledge-storm` pip 安装包和基于 Streamlit 的本地演示界面，其在线研究预览版已有超 7 万人使用。
*   **开源数据集**：发布了 FreshWiki（包含 100 篇高质量维基百科文章）和 WildSeek（基于真实用户复杂信息检索意图）两个数据集以供学术研究。
*   **未来规划**：团队正在开发更多“人在回路（Human-in-the-Loop）”功能，并致力于支持维基百科风格之外的其他信息呈现格式。

### 3) 风险与不足
*   **生成质量限制**：系统目前无法直接生成达到出版标准的文章，通常需要进行大量的人工编辑，其主要定位是辅助经验丰富的编辑进行“写作前”的准备工作。

## 功能与定位

An LLM-powered knowledge curation system that researches a topic and generates a full-length report with citations.

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:43:43Z。
- 项目创建于 2024-03-24T16:23:39Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/stanford-oval/storm
- 官网：http://storm.genie.stanford.edu
- README：https://raw.githubusercontent.com/stanford-oval/storm/main/README.md
- Releases：https://github.com/stanford-oval/storm/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/wiki]]
- [[00-元语/workflow]]
