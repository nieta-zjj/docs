---
title: LeetCUDA：LeetCUDA Modern CUDA Learn No 知识库
对象: GitHub 仓库
来源: https://github.com/xlite-dev/LeetCUDA
许可证: GNU General Public License v3.0
最近更新: 2026-02-25
---

## 摘要

LeetCUDA 是一个围绕 CUDA 与 PyTorch 的学习型知识库，提供 200+ 按难度分层的 CUDA Kernel 实现，以及与 LLM/CUDA 优化相关的技术文章索引。仓库强调“Kernel 实现 -> PyTorch 绑定 -> 测试验证”的学习闭环，适合从基础算子逐步过渡到 HGEMM、FlashAttention、Triton、CUTLASS/CuTe 等进阶主题。

## 功能与定位

LeetCUDA 的定位是“可实践的 CUDA 学习仓库”，核心不是单一库 API，而是面向学习和复现实验的题库式组织。

它覆盖从基础算子到高阶算子的实现路径，包括 elementwise、reduce、softmax、layer norm、GEMM、FlashAttention 等，并将内容按难度划分为 Easy、Medium、Hard、Hard+、Hard++。

## 典型使用场景

- CUDA 学习者按难度分层逐步练习，建立从 CUDA Cores 到 Tensor Cores 的实现认知。
- 需要研究 LLM 推理算子优化的开发者，可参考 HGEMM、FlashAttention 相关实现与基准说明。
- 需要 PyTorch + CUDA 一体化实践路径的读者，可按仓库给出的“实现、绑定、测试”流程搭建自己的训练题库。
- 团队内部做 GPU 优化知识共享时，可把该仓库作为算子案例与外部文章索引库。

## 特色与差异点

- 算子数量大且分层清晰：README 明确给出 200+ CUDA Kernel 与 100+ LLM/CUDA 相关文章索引。
- 覆盖多精度与多实现路线：涉及 FP32、FP16、BF16、FP8，以及 Triton、CUTLASS/CuTe 等实现分支。
- 强调性能导向实践：README 给出 HGEMM 与 FlashAttention 的基准对比与优化思路，便于做复现实验。
- 项目生态外延较多：README 同时关联 HGEMM、ffpa-attn、Cache-DiT 等相关项目，适合继续深挖。

## 使用方式概览

- 先阅读仓库 README 的目录与难度分层，再从 `kernels/` 下的基础目录开始。
- 按主题查看对应实现与说明目录，逐步过渡到 `hgemm`、`flash-attn`、`openai-triton`、`cutlass` 等进阶主题。
- 结合仓库提供的博客索引，补齐算子背景知识与优化上下文。

## 限制与注意事项

- 该仓库是学习与实践导向的代码集合，不是稳定 API 产品；不同目录的成熟度可能不同。
- README 中部分性能描述为项目作者给出的基准结论，复现结果会受硬件、CUDA 版本与实验配置影响。
- 仓库采用 GPLv3.0，二次分发与集成前应先核对许可证义务。

## 链接

- 仓库主页：https://github.com/xlite-dev/LeetCUDA
- 仓库 README：https://github.com/xlite-dev/LeetCUDA/blob/main/README.md
- 贡献说明：https://github.com/xlite-dev/LeetCUDA/blob/main/CONTRIBUTE.md
- HGEMM（关联项目）：https://github.com/xlite-dev/HGEMM
- ffpa-attn（关联项目）：https://github.com/xlite-dev/ffpa-attn
- Cache-DiT（README 新闻中提及）：https://github.com/vipshop/cache-dit

## 关联主题

- [[00-元语/github]]
- [[00-元语/learning-resource]]
- [[00-元语/benchmark]]
