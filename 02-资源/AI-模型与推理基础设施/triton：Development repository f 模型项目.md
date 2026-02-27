---
title: triton：Development repository f 模型项目
对象: GitHub 仓库
来源: triton-lang/triton
项目主页: https://github.com/triton-lang/triton
官方文档: https://triton-lang.org/main/index.html
最新版本: v3.6.0
版本发布时间: 2026-01-21
开源协议: MIT License
---

## 摘要

Triton 是一个基于 Python 的开源并行编程语言与编译器，面向自定义深度学习算子开发，目标是在现代 GPU 上实现高吞吐执行。项目提供 `@triton.jit`、`triton.language`、`triton.testing` 等能力，覆盖从内核编写到性能验证的完整路径。其定位是兼顾 CUDA 级性能与更高开发效率，典型用于融合算子和可定制矩阵计算。

## 功能与定位

Triton 的官方定位是“用于编写高效自定义深度学习 primitives 的语言和编译器”，并以 Python 为主要开发入口。项目强调两点：

1. 在生产力上高于直接编写 CUDA。
2. 在灵活性上高于常见 DSL，便于按任务定制算子。

文档体系同时覆盖安装、教程、Python API、Triton MLIR 方言与编程指南，适合从入门到进阶优化连续使用。

## 典型使用场景

1. 融合带宽受限算子：例如教程中的 fused softmax。
2. 自定义矩阵乘法与融合变体：用于替代或补充通用库难以覆盖的 workload。
3. 基础并行计算内核教学与验证：例如 vector add、reduction、matmul 等教程链路。

## 特色与差异点

1. Python 驱动的 GPU 内核开发体验，降低高性能内核编写门槛。
2. `@triton.jit` 与语言原语结合，支持在内核层做更细粒度控制。
3. 结合 `triton.testing` 与教程样例，便于从正确性校验过渡到性能基准。
4. 项目持续发布 release notes，公开跟踪前端、编译器后端、AMD/HIP、NVIDIA 等方向演进。

## 使用方式概览

1. 通过 `pip install triton` 安装稳定版本（README 标注支持 CPython 3.10-3.14）。
2. 需要参与开发或验证前沿特性时，可从源码安装并运行项目测试流程。
3. 按官方教程从 vector add、softmax、matmul 逐步进入真实算子开发与调优。

## 限制与注意事项

1. 官方 README 当前明确支持 Linux。
2. 硬件兼容性条目包括 NVIDIA GPU（Compute Capability 8.0+）与 AMD GPU（ROCm 6.2+）。
3. CPU 支持在 README 中标注为开发中。
4. 性能收益与硬件、算子形态、访存模式相关，应以目标环境基准测试为准。

## 链接

1. https://github.com/triton-lang/triton
2. https://triton-lang.org/main/index.html
3. https://github.com/triton-lang/triton/releases/tag/v3.6.0
4. http://www.eecs.harvard.edu/~htk/publication/2019-mapl-tillet-kung-cox.pdf

## 关联主题

- [[00-元语/AI]]
- [[00-元语/tool]]
- [[00-元语/benchmark]]
