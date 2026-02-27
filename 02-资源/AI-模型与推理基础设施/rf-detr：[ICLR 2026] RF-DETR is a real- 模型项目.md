---
title: rf-detr：[ICLR 2026] RF-DETR is a real- 模型项目
对象: GitHub 仓库
仓库: https://github.com/roboflow/rf-detr
文档: https://rfdetr.roboflow.com
来源:
  - https://github.com/roboflow/rf-detr/blob/main/README.md
  - https://github.com/roboflow/rf-detr/blob/main/docs/learn/run/detection.md
  - https://github.com/roboflow/rf-detr/blob/main/docs/learn/train/index.md
  - https://github.com/roboflow/rf-detr/blob/main/docs/learn/benchmarks.md
  - https://github.com/roboflow/rf-detr/blob/main/docs/learn/deploy.md
  - https://github.com/roboflow/rf-detr/releases
---

## 摘要

RF-DETR 是 Roboflow 开源的实时 Transformer 检测与实例分割模型，基于 DINOv2 骨干并提供统一 API。项目覆盖从 Nano 到 2XL 的模型尺寸，强调在精度与延迟之间做工程化权衡，并提供训练、导出与部署链路。

## 功能与定位

RF-DETR 面向实时目标检测与实例分割场景，核心定位是提供可直接用于推理与微调的模型与 Python 工具链。项目同时覆盖基础模型推理、微调训练、模型导出和部署入口，便于从实验走向应用落地。

## 典型使用场景

- 对图片、视频、摄像头或 RTSP 流做实时检测/分割。
- 在自有数据集上做目标检测或实例分割微调。
- 将模型导出到 ONNX/TensorRT 或接入 Roboflow Inference 服务。
- 在边缘设备与云端服务之间做同一模型体系的部署迁移。

## 特色与差异点

- 基于 DINOv2 视觉 Transformer 骨干，而非传统 CNN 检测架构。
- 官方基准同时给出 COCO 与 RF100-VL 的精度与延迟数据，便于跨模型比较。
- 训练链路支持 COCO/YOLO 数据格式自动识别，并支持多种训练日志后端。
- 模型矩阵覆盖 N/S/M/L/XL/2XL，多档位可按精度与延迟目标选择。

## 使用方式概览

- 安装：`pip install rfdetr`，要求 Python 3.10 及以上。
- 推理：使用 `rfdetr` 包的模型类或 `inference` 包的模型别名执行预测。
- 训练：通过 `train()` 在 COCO/YOLO 数据集上微调检测或分割模型。
- 部署：可导出模型用于推理引擎，也可接入 Roboflow 的部署与服务流程。

## 限制与注意事项

- Python 3.10+ 是硬性前提，较低版本不在支持范围。
- 许可证分层：Nano 到 Large 为 Apache 2.0；XL/2XL 通过 `rfdetr_plus` 提供并受 PML 1.0 约束，使用前需核对许可边界。
- 官方延迟结果基于特定环境（NVIDIA T4、TensorRT、FP16、batch size 1），迁移到其他硬件前应自行复测。

## 链接

- 仓库主页：https://github.com/roboflow/rf-detr
- 发布页：https://github.com/roboflow/rf-detr/releases
- 官方文档：https://rfdetr.roboflow.com
- 基准方法说明（仓库引用）：https://github.com/roboflow/single_artifact_benchmarking

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
