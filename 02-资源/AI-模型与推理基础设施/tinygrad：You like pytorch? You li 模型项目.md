---
title: tinygrad：You like pytorch? You li 模型项目
对象: GitHub 仓库
项目主页: https://github.com/tinygrad/tinygrad
文档: https://docs.tinygrad.org/
许可证: MIT
最新版本: v0.12.0
版本发布时间: 2026-01-12
---

## 摘要

tinygrad 是一个由 tiny corp 维护的轻量级端到端深度学习栈，定位介于 PyTorch 与 micrograd 之间，强调可读性与可改造性。

- 核心定位：吸收 PyTorch、JAX、TVM 的部分思路，兼顾常见训练工作流与编译栈可见性。
- 全栈能力：包含 Tensor、自动求导、IR/编译、JIT 与图执行，以及 nn/optim/datasets 等训练组件。
- 多后端支持：覆盖 OpenCL、CPU、Metal、CUDA、AMD、NV、QCOM、WebGPU，并支持多 GPU 分片。
- 典型任务：示例覆盖视觉、音频与生成式模型，如 EfficientNet、YOLOv8、Whisper、Stable Diffusion、LLaMA。
- 后端扩展门槛：README 明确新增后端约需支持 25 个底层算子。
- 项目活跃度：release 信息显示 v0.11.0（2025-08-19）至 v0.12.0（2026-01-12）期间有高频迭代。
- 版本状态：官方文档说明项目尚未 1.0，但 API 已在一段时间内保持相对稳定。

## 功能与定位

tinygrad 是一个端到端深度学习项目，不仅提供类似主流框架的 Tensor 与自动求导接口，也暴露了 IR、编译与执行链路，适合希望同时掌握“模型表达层 + 执行与后端层”的开发者。

## 典型使用场景

- 训练或推理常见神经网络任务，并保持对底层执行路径的可观察性。
- 在不同硬件环境间迁移运行（桌面 GPU、移动芯片、WebGPU 等）。
- 以较低复杂度尝试新硬件后端接入与算子执行优化。

## 核心功能

- Tensor API 与 autograd。
- IR 与编译流程，用于 kernel 融合与下沉。
- TinyJit 与图执行机制。
- nn、optim、datasets 等训练所需基础模块。
- 多设备与多 GPU 分片能力。

## 特色与差异点

- 相比仅聚焦前端 API 的框架，tinygrad 更强调编译执行层的可见性与可改造性。
- 相比只做编译器的项目，tinygrad 同时提供可直接训练与推理的上层组件。
- 项目体量与设计目标偏“tiny + hackable”，适合学习与实验驱动的工程实践。

## 使用方式概览

- 安装路径以源码安装或直接 Git 安装为主。
- 使用入口以 Tensor API 为中心，文档提供 quickstart 与 MNIST 教程。
- 仓库 `examples` 与 `docs/showcase` 提供模型示例与参考场景。

## 限制与注意事项

- 当前不是 1.0 正式版，生产使用前建议先做版本与回归验证。
- 资料中展示了大量示例与后端能力，但具体性能和稳定性仍依赖硬件、驱动与工作负载。
- 本条目仅做项目定位与能力整理，不替代官方文档与 release 说明。

## 链接

1. https://github.com/tinygrad/tinygrad
2. https://docs.tinygrad.org/
3. https://github.com/tinygrad/tinygrad/blob/master/docs/showcase.md
4. https://github.com/tinygrad/tinygrad/releases
5. https://github.com/tinygrad/tinygrad/blob/master/LICENSE

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/github]]
