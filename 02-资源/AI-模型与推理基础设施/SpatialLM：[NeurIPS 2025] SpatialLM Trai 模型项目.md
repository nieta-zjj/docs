---
title: SpatialLM：[NeurIPS 2025] SpatialLM Trai 模型项目
对象: GitHub 仓库
项目主页: https://manycore-research.github.io/SpatialLM
来源: manycore-research/SpatialLM
原文链接: https://github.com/manycore-research/SpatialLM
---

## 摘要

SpatialLM 是一个面向结构化室内建模的 3D 大语言模型，重点把多源点云转成可用于理解与推理的结构化场景结果。

- 支持结构化重建、布局估计、3D 目标检测等室内建模任务。
- 可处理单目视频重建点云、RGBD 与 LiDAR 等多来源数据。
- 1.1 版本引入更强点云编码器，支持用户指定类别检测。
- 项目提供模型、训练集与测试集，便于复现和评估。
- 自定义微调可行，但训练资源门槛较高。

## 功能与定位

SpatialLM 的目标是把非结构化 3D 点云转为结构化室内场景表示，例如墙体、门窗和带语义类别的 3D 物体框。项目定位在“3D 场景理解 + 结构化输出”这一层，而不是仅做点云分类或可视化。

## 典型使用场景

- 机器人与具身智能中的室内环境理解。
- 室内导航或数字孪生中的布局提取。
- 从视频重建点云后做结构化场景解析。
- 在特定数据集上微调后用于垂直场景建模。

## 核心功能

- 结构化重建：同时预测墙、门、窗与物体框。
- 布局估计：聚焦建筑结构元素提取。
- 3D 目标检测：输出带方向的对象边界框。
- 指定类别检测：可在给定类别子集内执行检测。
- 评测与可视化：仓库提供评测脚本和可视化流程。

## 特色与差异点

- 同时提供模型权重、数据集与测试集，形成从推理到评测的闭环。
- 1.0 与 1.1 有明确演进：1.1 在点云分辨率与编码器能力上升级，并增强检测灵活性。
- 明确强调输入点云几何约束（坐标轴对齐、尺度），对工程落地有直接指导意义。

## 使用方式概览

- 准备与模型要求一致的 Python、PyTorch、CUDA 环境。
- 准备点云输入并完成对齐与尺度处理。
- 选择合适的 SpatialLM 模型进行推理，生成结构化文本结果。
- 根据任务需要执行可视化或评测。
- 如需迁移到自有数据，可使用仓库提供的训练流程进行 SFT 微调。

## 限制与注意事项

- 输入点云需要满足坐标轴约束（z 轴朝上），否则会影响结果稳定性。
- 模型对尺度敏感，输入点云比例不准确会影响检测与布局质量。
- 官方示例已提到在非标准场景上存在泛化限制。
- 全量微调资源消耗高，官方材料提到约 60GB CUDA 显存。
- 许可条款需要重点核对：不同模型与组件对应不同许可证，其中部分权重带有非商用限制。

## 链接

- GitHub 仓库：https://github.com/manycore-research/SpatialLM
- 项目主页：https://manycore-research.github.io/SpatialLM
- 论文（arXiv）：https://arxiv.org/abs/2506.07491
- 模型（Hugging Face）：https://huggingface.co/manycore-research/SpatialLM1.1-Qwen-0.5B
- 训练集（Hugging Face）：https://huggingface.co/datasets/manycore-research/SpatialLM-Dataset
- 测试集（Hugging Face）：https://huggingface.co/datasets/manycore-research/SpatialLM-Testset

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/paper]]
