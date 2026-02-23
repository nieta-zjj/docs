---
title: "Ultralytics：计算机视觉模型工具库，覆盖 YOLOv3 至 YOLO26 系列"

发布日期: "2026-02-22"
对象: "GitHub 项目 `ultralytics/ultralytics`"
项目主页: "https://github.com/ultralytics/ultralytics"
官方网站: "https://docs.ultralytics.com"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Python"
统计快照: "Stars 53481，Forks 10247，Watchers 248（抓取时间：2026-02-22）"
版本快照: "最新发布 v8.4.14（发布时间：2026-02-10T11:31:00Z）"
---

## 摘要

**一句话总结**
Ultralytics YOLO 是一个基于 Python 的开源计算机视觉框架，提供从 YOLOv3 到最新 YOLO26 的先进模型，支持目标检测、图像分割、姿态估计、目标跟踪和图像分类等多种任务。

**关键信息**
*   **项目规模与协议**：该项目在 GitHub 拥有超 5.3 万 Stars，采用 GNU AGPL v3.0 开源协议（商业用途需额外申请企业许可）。
*   **核心功能**：全面支持目标检测（Detection）、目标跟踪（Tracking）、实例分割（Instance Segmentation）、图像分类（Image Classification）和姿态估计（Pose Estimation）。
*   **模型系列**：支持从早期的 YOLOv3 到最新的 YOLO26 系列模型，且在首次使用时会自动从最新发布版中下载预训练模型。
*   **预训练数据**：检测、分割和姿态模型基于 COCO 数据集（80 个类别）进行预训练；分类模型基于 ImageNet 数据集（1000 个类别）进行预训练。
*   **环境依赖**：要求运行环境为 Python >= 3.8 且 PyTorch >= 1.8，支持通过 pip、Conda、Docker 或 Git 源码等多种方式安装。
*   **使用接口**：提供开箱即用的命令行工具（CLI，如 `yolo predict`）和 Python API，支持模型的训练、验证、推理以及格式导出（如导出为 ONNX 格式）。
*   **性能评估**：官方提供了 YOLO26 各规模版本（n/s/m/l/x）的详细性能指标，包括参数量（2.4M 至 62.8M 不等）、计算量（FLOPs）、mAP 精度，以及在 CPU (ONNX) 和 GPU (T4 TensorRT10) 上的具体推理耗时。

## 功能与定位

Ultralytics YOLO 🚀

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:18:26Z。
- 项目创建于 2022-09-11T16:39:45Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/ultralytics/ultralytics
- 官网：https://docs.ultralytics.com
- README：https://raw.githubusercontent.com/ultralytics/ultralytics/main/README.md
- Releases：https://github.com/ultralytics/ultralytics/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/sdk]]
- [[00-元语/benchmark]]
- [[00-元语/compliance]]
