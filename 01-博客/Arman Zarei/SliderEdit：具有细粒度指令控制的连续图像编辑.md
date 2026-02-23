---
title: "SliderEdit：具有细粒度指令控制的连续图像编辑"

来源: "https://armanzarei.github.io/SliderEdit/#"
发布日期: "2026-02-05"
译注: "原页面无官方中文版本，正文为基于原文内容的中文翻译。"
---

## 摘要

SliderEdit 是一个轻量级的连续图像编辑框架，它通过学习单一的低秩适配矩阵和部分提示词抑制技术，实现了对多指令图像编辑中单个编辑属性强度的细粒度、解耦和平滑控制。

- 核心能力：把传统固定强度的指令编辑，扩展为连续可调的编辑强度控制。
- 关键机制：将多段编辑指令解耦为可独立调节的 slider，并通过 PPS 目标训练抑制或调节特定指令。
- 模型设计：使用 STLoRA 与 GSTLoRA 两种适配方案，分别覆盖多指令与单指令场景。
- 泛化特性：通过一组低秩适配矩阵覆盖多类编辑、属性与组合指令，而非为每个属性单独训练。
- 页面报告：在 FLUX-Kontext 与 Qwen-Image-Edit 上显示出可控性、一致性与可操控性提升。

## 正文

### 概述

SliderEdit 面向基于指令的图像编辑模型，目标是在不大幅增加训练与推理负担的前提下，让用户连续调节单条指令的编辑强度，而不是只能接受固定强度的编辑结果。

### 方法

给定输入图像 `X_orig` 和包含 `K` 条编辑指令的提示词 `P`，基础模型会一次性应用所有指令并输出编辑图像。SliderEdit 的目标是学习适配器 `M_theta(P_i)`，在保留其余指令效果的前提下，对某一条指令 `P_i` 进行抑制或强度调节。

#### Partial Prompt Suppression（PPS）

PPS 训练目标要求：带适配器且输入完整提示词的模型，其去噪方向应接近“冻结基础模型 + 去掉第 `i` 条指令”的去噪方向。直观上，这会让模型学会中和目标指令对应 token 的影响。

#### STLoRA 与 GSTLoRA

- STLoRA：仅对目标指令相关 token 应用低秩更新，适合多指令解耦控制。
- GSTLoRA：在单指令场景中对文本与图像 token 进行全局适配，通常可获得更强控制力与更高保真度。

#### 连续控制

训练完成后，通过缩放 LoRA 更新参数 `alpha`，可在“完全应用”与“抑制”之间形成平滑连续的强度变化，并支持超范围增强效果。

### 结果与页面展示结论

- GSTLoRA 的定性示例展示了局部与全局编辑强度的平滑调节。
- STLoRA 在多指令编辑中展示了较好的解耦与插值平滑性。
- 在多主体零样本个性化场景中，可通过调整指令强度生成连贯的渐变序列。

### 代表图链接

- Teaser 图：https://armanzarei.github.io/SliderEdit/static/images/teasor.jpg
- 方法图：https://armanzarei.github.io/SliderEdit/static/images/method.jpg
- 算法图：https://armanzarei.github.io/SliderEdit/static/images/algo.jpg
- 多主体结果图：https://armanzarei.github.io/SliderEdit/static/images/multi_subject_personalization_wide.jpg

### 参考信息

- BibTeX 中论文信息：`arXiv preprint arXiv:2511.09715`（2025）

原文链接：https://armanzarei.github.io/SliderEdit/#

## 关联主题

- [[00-元语/image-editing]]
- [[00-元语/AI]]
- [[00-元语/lora]]
- [[00-元语/multimodal]]
- [[00-元语/prompt]]
- [[00-元语/paper]]
- [[00-元语/slideredit]]
