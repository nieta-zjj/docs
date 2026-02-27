---
title: burn：Burn is a next generation tens 模型项目
对象: GitHub 项目
项目主页: https://github.com/tracel-ai/burn
官方文档: https://burn.dev/books/burn/
API 文档: https://burn.dev/docs/burn
来源:
  - https://github.com/tracel-ai/burn
  - https://github.com/tracel-ai/burn/blob/main/README.md
  - https://github.com/tracel-ai/burn/blob/main/burn-book/src/overview.md
  - https://github.com/tracel-ai/burn/blob/main/burn-book/src/getting-started.md
  - https://github.com/tracel-ai/burn/blob/main/crates/burn/Cargo.toml
---

## 摘要

Burn 是一个基于 Rust 的张量库与深度学习框架，强调在训练与推理一体化流程中兼顾灵活性、效率与跨平台可移植性。项目通过可组合的后端架构覆盖 CUDA、ROCm、Metal、Vulkan、WebGPU、NdArray、LibTorch 等运行路径，并提供 ONNX 导入、PyTorch/Safetensors 权重加载、训练监控和较完整的示例体系。当前项目仍处于活跃迭代阶段，存在破坏性变更风险，落地时需要关注版本兼容和后端特定配置。

## 功能与定位

Burn 面向 Rust 生态中的深度学习与数值计算场景，定位为“张量库 + 深度学习框架”的统一基础设施。它的目标是在不牺牲模型开发灵活性的前提下，提供较高执行效率与跨硬件可移植能力。

## 典型使用场景

- 在同一工程内完成模型训练、评估、推理与部署。
- 需要跨后端运行同一模型代码的项目，例如在云端训练后部署到不同硬件环境。
- 需要 WebAssembly 浏览器推理或嵌入式 `no_std` 场景的 Rust 应用。
- 基于仓库示例快速构建文本分类、文本生成、MNIST、自定义数据集与自定义训练循环任务。

## 核心功能

- 多后端支持：GPU 后端覆盖 CUDA、ROCm、Metal、Vulkan、WebGPU、LibTorch；CPU 后端覆盖 CubeCL CPU、NdArray、LibTorch。
- 后端可组合架构：核心代码围绕 `Backend` trait 泛型化，可通过装饰器模式叠加自动微分、融合、路由、远程执行等能力。
- 模型互操作：通过 `burn-onnx` 导入 ONNX；支持导入 PyTorch 与 Safetensors 权重。
- 训练可观测性：提供终端 UI 训练仪表盘用于实时监控训练过程。
- 文档与示例体系：Burn Book 提供从入门到高级主题路径，仓库提供多个可运行示例。

## 特色与差异点

- Rust 原生实现，强调类型系统与泛型能力在性能和工程一致性上的收益。
- 训练与推理流程衔接紧密，减少从实验到部署时的工具链切换。
- 在单一框架内同时覆盖桌面/服务器 GPU、CPU、浏览器与部分嵌入式场景。

## 使用方式概览

- 先准备 Rust 与 Cargo 环境。
- 新建项目后添加依赖，例如使用 `cargo add burn --features wgpu` 启用指定后端。
- 结合 Burn Book 的基础工作流与仓库 examples 逐步扩展到自定义训练循环、数据处理与部署场景。

## 限制与注意事项

- 项目处于 active development，官方明确提示可能存在 breaking changes。
- `no_std` 当前仅明确支持 NdArray 后端。
- 在部分 `wgpu` 场景下，可能需要设置 `#![recursion_limit = "256"]` 以规避编译递归深度问题。

## 链接

1. https://github.com/tracel-ai/burn
2. https://github.com/tracel-ai/burn/blob/main/README.md
3. https://burn.dev/books/burn/
4. https://burn.dev/docs/burn
5. https://github.com/tracel-ai/burn/blob/main/burn-book/src/getting-started.md

## 关联主题

- [[00-元语/AI]]
- [[00-元语/wasm]]
- [[00-元语/benchmark]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
