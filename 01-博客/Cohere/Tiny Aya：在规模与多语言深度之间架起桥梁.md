---
title: "Tiny Aya：在规模与多语言深度之间架起桥梁"

来源: "https://cohere.com/research/papers/tiny-aya-bridging-scale-and-multilingual-depth-2026-02-17"
发布日期: "2026-02-17"
---

## 摘要

**1) 一句话总结**
Tiny Aya 是一款于2026年2月17日发布的拥有33.5亿参数的紧凑型多语言模型，在70种语言的翻译与理解能力上达到业界领先水平，为多语言AI的实际部署提供了高效方案。

**2) 关键要点**
* **发布时间**：2026年2月17日。
* **模型规模**：参数量为33.5亿（3.35B），定位为紧凑型模型。
* **核心能力**：在70种语言的翻译和理解能力上均达到业界领先（State-of-the-Art）水平。
* **技术创新**：采用了创新的训练方法，并开发了针对特定区域优化的模型变体。
* **部署优势**：在模型规模与多语言深度之间取得平衡，适合实际的高效部署。
* **相关研究**：研究团队在多语言模型与推理生成领域还同步探索了 SimMerge（基于相似性信号的合并操作）、最优生成（Making, not Taking, the Best of N）以及 EAGER（熵感知自适应推理时间扩展）等技术。

## 正文

**发布日期**：2026年2月17日

Tiny Aya 是一款拥有 33.5 亿（3.35B）参数的紧凑型多语言模型。通过创新的训练方法和针对特定区域优化的变体，该模型在 70 种语言的翻译和理解能力上均达到了业界领先（State-of-the-Art）水平。它的推出，为实际的多语言 AI 部署提供了一条高效且平衡的路径。

### 研究团队

本研究由以下研究人员共同完成：
Alejandro R. Salamanca, Diana Abagyan, Daniel D’souza, Ammar Khairi, David Mora, Saurabh Dash, Viraat Aryabumi, Sara Rajaee, Mehrnaz Mofakhami, Ananya Sahu, Thomas Euyang, Brittawnya Prince, Madeline Smith, Hangyu Lin, Acyr Locatelli, Sara Hooker, Tom Kocmi, Aidan Gomez, Ivan Zhang, Phil Blunsom, Nick Frosst, Joelle Pineau, Beyza Ermis, Ahmet Üstün, Julia Kreutzer 以及 Marzieh Fadaee。

### 相关研究

在探索多语言模型与推理生成的过程中，团队还涉及了以下相关研究方向：

*   **SimMerge**：从相似性信号中学习选择合并操作（Learning to Select Merge Operators from Similarity Signals）
*   **Making, not Taking, the Best of N**：关于最优生成的探索
*   **EAGER**：用于自适应推理时间扩展的熵感知生成（Entropy-Aware Generation for Adaptive Inference-Time Scaling）

## 相关文档

- [[01-博客/Cohere/释放AI潜能：探索Aya多语言大模型系列.md|释放AI潜能：探索Aya多语言大模型系列]]；关联理由：解说；说明：该文系统梳理 Aya 系列演进并包含 Tiny Aya 的定位与版本划分，可补充本篇背景。
- [[01-博客/Cohere/解锁大型语言模型在机器翻译中的推理能力.md|解锁大型语言模型在机器翻译中的推理能力]]；关联理由：延伸思考；说明：本文提到的 Best of N 研究在该文有更集中讨论，可延伸理解 Tiny Aya 的相关研究脉络。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/paper]]
