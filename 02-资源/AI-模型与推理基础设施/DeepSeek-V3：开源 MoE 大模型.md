---
title: "DeepSeek-V3：开源 MoE 大模型"

发布日期: "2026-02-22"
对象: "GitHub 项目 `deepseek-ai/DeepSeek-V3`"
项目主页: "https://github.com/deepseek-ai/DeepSeek-V3"
Stars（记录值）: "85075（用户记录）"
代码许可: "MIT License"
模型许可: "DeepSeek License Agreement（见仓库 LICENSE-MODEL）"
论文: "https://arxiv.org/pdf/2412.19437"
---

## 摘要

### 1) 一句话总结
DeepSeek-V3 是一款拥有 6710 亿参数的高效开源混合专家（MoE）语言模型，凭借创新的架构设计与极低的训练成本，展现出媲美顶尖闭源模型的卓越性能。

### 2) 核心要点
* **参数规模**：总参数量高达 6710 亿（671B），在处理每个 Token 时激活 370 亿（37B）参数。
* **核心架构**：沿用多头潜在注意力（MLA）与 DeepSeekMoE 架构，并首创无辅助损失（auxiliary-loss-free）负载均衡策略，减少性能损耗。
* **长上下文与多 Token 预测**：支持高达 128K 的上下文长度；引入多 Token 预测（MTP）目标以提升整体性能并支持投机解码加速推理。
* **推理能力蒸馏**：成功将 DeepSeek-R1 的长思维链推理、验证与反思能力蒸馏至该模型，在数学（Math）和代码（Code）任务上优势显著。
* **极致训练效率**：首次在超大规模模型上验证了 FP8 混合精度训练的有效性，并通过软硬件协同设计克服了跨节点 MoE 训练的通信瓶颈。
* **低成本与高稳定性**：在 14.8 万亿 Token 上预训练仅耗费 266.4 万 H800 GPU 小时（全量训练总计 278.8 万小时），且训练全程无不可恢复的损失突增或回滚。
* **开源与部署**：提供 Base 和 Chat 版本，代码采用 MIT 协议，模型权重（共 685B）托管于 Hugging Face，支持本地运行。

### 3) 风险与不足
* **许可与使用限制**：模型及其衍生品虽允许商业用途，但必须遵守特定的基于用途的限制（Use-based restrictions），且任何分发或衍生的模型必须包含相同的限制条款。
* **输出内容免责**：官方对模型生成的输出内容不主张任何权利，用户需对生成内容及其后续使用承担全部责任。
* **MTP 模块支持尚未完善**：多 Token 预测（MTP）模块的社区支持目前仍处于积极开发阶段。

## 功能与定位

DeepSeek-V3 是一个以高效 MoE 架构为核心的开源基础模型（Base/Chat），强调在超大规模训练与推理部署中兼顾性能与效率，并提供与推理相关的技术路线（例如多 Token 预测、投机解码适配等）。

## 典型使用场景

- 作为开源大模型基座：在对话、工具调用或业务应用中作为底层模型使用（需要结合安全策略与评测）。
- 大规模推理部署研究：在 MoE、长上下文与精度/吞吐权衡方面做工程实践。
- 作为其他推理能力工作的基础：与 R1 等推理训练/蒸馏路线形成配套。

## 核心内容

- 模型权重与推理说明：Base/Chat 版本及其运行方式。
- 训练与架构论文：MoE、MLA、负载均衡策略、FP8 训练等关键设计。
- 许可与分发条款：代码与模型权重的授权边界、分发与衍生限制。

## 限制与注意事项

- 代码与模型权重许可不同：使用前应分别核对仓库中的代码许可与模型许可条款。
- 若要分发衍生权重或服务化提供，应优先按官方条款确认是否需要附带相同限制与声明。

## 链接

- 仓库：https://github.com/deepseek-ai/DeepSeek-V3
- 论文：https://arxiv.org/pdf/2412.19437
- Hugging Face（Base）：https://huggingface.co/deepseek-ai/DeepSeek-V3-Base
- Hugging Face（Chat）：https://huggingface.co/deepseek-ai/DeepSeek-V3
- DeepSeek-R1：https://github.com/deepseek-ai/DeepSeek-R1

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/github]]
- [[00-元语/paper]]
- [[00-元语/compliance]]
- [[00-元语/benchmark]]
- [[00-元语/self-hosting]]
- [[00-元语/risk]]
