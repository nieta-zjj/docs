---
title: R1-V：Witness the aha moment of VLM 模型项目
对象: GitHub 仓库
来源: Deep-Agent/R1-V
项目主页: https://github.com/Deep-Agent/R1-V
---

## 摘要

R1-V 是一个以低成本路线（README 表述为低于 3 美元）增强视觉语言模型泛化与推理能力的开源项目，核心方向是把 RLVR 方法用于视觉推理任务。

项目已公开 RL 训练、SFT、评测与数据蒸馏相关代码，当前重点围绕 Qwen2-VL / Qwen2.5-VL 在计数与几何推理任务上的效果提升，并提供对应数据集与评测基准。

仓库同时给出了已知限制与工程注意点，例如批处理训练问题、显存压力和环境依赖对齐要求，适合作为“VLM 强化学习实验与复现”的研究型基础设施参考。

## 功能与定位

R1-V 面向视觉语言模型的强化学习训练与泛化能力提升，重点不是通用应用封装，而是提供可复现的研究与工程框架。

从仓库 README 与代码结构看，项目覆盖训练、评测和数据构建链路，定位偏向“方法验证 + 训练基础设施”，适合需要快速开展 VLM-RL 实验的团队。

## 典型使用场景

- 在视觉计数、复杂视觉推理、几何问答等任务上开展 RLVR 训练实验。
- 对 Qwen2-VL 与 Qwen2.5-VL 做 GRPO 或 SFT 训练，并对比基线模型与训练后模型表现。
- 使用项目给出的评测脚本在 SuperClevr、GeoQA 等基准上做复现与回归测试。
- 基于 `src/distill_r1` 的数据生成与过滤流程构建视觉推理训练数据。

## 特色与差异点

- 低成本导向明确：README 将项目目标表述为“低成本强化泛化能力”。
- 强调视觉推理中的 RLVR 路线，围绕训练效率、任务多样性和泛化表现持续迭代。
- 提供数据蒸馏模块，支持从推理轨迹到可训练数据集的整理流程。
- 有针对 CoT 输出格式的实验观察，指出小参数模型在特定任务下不一定从强制思维链格式中获益。

## 使用方式概览

- 支持模型：Qwen2-VL、Qwen2.5-VL。
- 训练数据：CLEVR-70k-Counting、CLEVR-70k-Complex、GEOQA-8k，以及 R1-Distilled 视觉推理数据。
- 评测任务：SuperClevr-200、GeoQA-Test-Direct-Answer-735。
- 代码结构上可直接定位训练与评测入口，例如 `src/r1-v/src/open_r1/`、`src/scripts/`、`src/eval/`。
- 当前仓库可见标签为 `v0.1.0`。

## 限制与注意事项

- README 提到存在批处理训练相关问题，复现时需要关注批大小等设置。
- 训练过程可能出现显存压力，需按硬件条件调整训练配置。
- 依赖环境需要与仓库要求对齐（如 `src/requirements.txt`）。
- 本文档仅做项目定位与能力边界整理，不复述逐步可执行训练命令。

## 链接

- 仓库主页: https://github.com/Deep-Agent/R1-V
- Releases: https://github.com/Deep-Agent/R1-V/releases
- 项目更新说明（README Updates）: https://github.com/Deep-Agent/R1-V/blob/main/README.md
- 相关研究博客: https://deepagent.notion.site/rlvr-in-vlms
- 关联项目 G1: https://github.com/chenllliang/G1
- 数据集 CLEVR-70k-Counting: https://huggingface.co/datasets/leonardPKU/clevr_cogen_a_train
- 数据集 CLEVR-70k-Complex: https://huggingface.co/datasets/MMInstruction/Clevr_CoGenT_TrainA_70K_Complex
- 数据集 GEOQA-8k: https://huggingface.co/datasets/leonardPKU/GEOQA_R1V_Train_8K
- 数据集 R1-Distilled Visual Reasoning: https://huggingface.co/datasets/MMInstruction/Clevr_CoGenT_TrainA_R1

## 关联主题

- [[00-元语/AI]]
- [[00-元语/multimodal]]
- [[00-元语/llm]]
- [[00-元语/evals]]
- [[00-元语/benchmark]]
