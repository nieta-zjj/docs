---
title: "FlashMLA：DeepSeek 开源的基于 C++ 的高效多头潜在注意力（MLA）算子库"

发布日期: "2026-02-22"
对象: "GitHub 项目 `deepseek-ai/FlashMLA`"
项目主页: "https://github.com/deepseek-ai/FlashMLA"
开源协议: "MIT License"
主要语言: "C++"
统计快照: "Stars 12496，Forks 989，Watchers 108（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
FlashMLA 是 DeepSeek 开源的基于 C++ 的高效多头潜在注意力（MLA）算子库，为 DeepSeek-V3 和 V3.2-Exp 模型提供底层的稀疏与稠密注意力计算支持。

**2) 核心要点**
*   **项目基础**：采用 MIT 协议开源，主要语言为 C++，定位为 AI 模型与推理基础设施，GitHub 拥有超 1.2 万 Stars。
*   **核心功能**：提供稠密（Dense）和稀疏（Sparse）注意力算子，均完整覆盖 Prefill（预填充）和 Decoding（解码）阶段。
*   **H800 性能表现**：在 H800 SXM5 (CUDA 12.8) 上，稠密 MLA 解码算子最高达 3000 GB/s（访存瓶颈）或 660 TFLOPS（计算瓶颈）；稀疏 MLA 解码达 410 TFLOPS；稀疏 MLA 预填充达 640 TFLOPS。
*   **B200 性能表现**：在 B200 上，稠密 MHA 预填充前向计算达 1460 TFLOPS，反向达 1000 TFLOPS；稀疏 MLA 预填充达 1450 TFLOPS。
*   **环境与硬件要求**：仅支持 SM90 和 SM100 架构 GPU；要求 CUDA 12.8 及以上（SM100 需 CUDA 12.9+），以及 PyTorch 2.0+。
*   **FP8 KV Cache 机制**：稀疏解码算子支持 FP8 KV Cache，每 Token 占用 656 字节（包含 512 字节量化 NoPE、16 字节缩放因子和 128 字节未量化 RoPE），计算时反量化为 BF16 执行。
*   **广泛的硬件生态适配**：项目已获得 MetaX、摩尔线程、海光 DCU、云天励飞、天数智芯及 AMD Instinct 等多家国产与国际硬件厂商/社区的移植与支持。

**3) 风险与不足**
*   **B200 优化不足**：文档明确指出，稀疏 MLA 解码算子在 B200 上的表现（最高 350 TFLOPS）尚未经过充分优化。
*   **批处理维度限制**：稀疏 MLA 预填充算子（Sparse MLA Prefill）原生不支持批处理维度（batch dimension），进行多批次推理时需要手动重塑输入张量并调整索引参数。

## 功能与定位

FlashMLA: Efficient Multi-head Latent Attention Kernels

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T06:43:20Z。
- 项目创建于 2025-02-21T06:31:27Z，具备持续迭代与社区沉淀。
- 以 `C++` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/deepseek-ai/FlashMLA
- README：https://raw.githubusercontent.com/deepseek-ai/FlashMLA/main/README.md
- Releases：https://github.com/deepseek-ai/FlashMLA/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/benchmark]]
- [[00-元语/github]]
