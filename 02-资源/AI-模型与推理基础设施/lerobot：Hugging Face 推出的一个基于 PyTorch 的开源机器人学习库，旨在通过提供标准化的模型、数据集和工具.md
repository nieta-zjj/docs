---
title: "lerobot：Hugging Face 推出的一个基于 PyTorch 的开源机器人学习库，旨在通过提供标准化的模型、数据集和工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `huggingface/lerobot`"
项目主页: "https://github.com/huggingface/lerobot"
官方网站: "https://huggingface.co/docs/lerobot"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 21712，Forks 3813，Watchers 145（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.4.3（发布时间：2026-01-22T10:59:37Z）"
---

## 摘要

**1) 一句话总结**
LeRobot 是 Hugging Face 推出的一个基于 PyTorch 的开源机器人学习库，旨在通过提供标准化的模型、数据集和工具，降低现实世界机器人 AI 技术的入门门槛。

**2) 关键要点**
* **开源与基础信息**：项目采用 Apache 2.0 开源协议，主要使用 Python 开发，目前在 GitHub 上拥有超 2.1 万 Stars。
* **硬件无关的控制接口**：提供统一的 `Robot` 类接口，将控制逻辑与底层硬件解耦，原生支持 SO100、Reachy2、Unitree G1、OpenARM 等多种机器人及遥操作设备（如手柄、键盘、手机）。
* **标准化数据集格式**：推出 `LeRobotDataset` 格式（Parquet 结合 MP4 视频或图像），与 Hugging Face Hub 深度集成，支持海量机器人数据集的高效存储、流式传输、处理与可视化。
* **内置前沿（SoTA）模型**：提供纯 PyTorch 实现的先进策略，涵盖模仿学习（ACT、Diffusion、VQ-BeT）、强化学习（HIL-SERL、TDMPC）以及视觉-语言-动作（VLA）模型（如 Pi0Fast、GR00T N1.5、SmolVLA 等）。
* **极简的训练与评估**：通过 `lerobot-train` 和 `lerobot-eval` 等命令行工具，用户可以快速配置并启动模型训练，或在仿真环境（如 LIBERO、MetaWorld）及真实硬件上评估策略。
* **高可扩展性**：开发者可以轻松实现自定义的 Robot 接口或策略模型，并复用 LeRobot 的数据收集、训练和可视化工具，同时支持将模型和数据集分享至 HF Hub。
* **丰富的社区与教程资源**：官方提供详细的文档、免费的机器人学习实操课程，并包含经过验证的中文详细教程（涵盖组装、遥操作、数据集、训练与部署）。

## 功能与定位

🤗 LeRobot: Making AI for Robotics more accessible with end-to-end learning

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T13:05:26Z。
- 项目创建于 2024-01-26T15:50:41Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/huggingface/lerobot
- 官网：https://huggingface.co/docs/lerobot
- README：https://raw.githubusercontent.com/huggingface/lerobot/main/README.md
- Releases：https://github.com/huggingface/lerobot/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/hardware-control]]
- [[00-元语/cli]]
- [[00-元语/data-pipeline]]
