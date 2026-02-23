---
title: "DeepSeek-R1：开源推理模型系列"

发布日期: "2026-02-22"
对象: "GitHub 项目 `deepseek-ai/DeepSeek-R1`"
项目主页: "https://github.com/deepseek-ai/DeepSeek-R1"
Stars（记录值）: "86590（用户记录）"
开源协议: "MIT License"
论文: "https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf"
---

## 摘要

**1) 一句话总结**
DeepSeek-R1 是由 DeepSeek 开源（MIT协议）的具备顶尖推理能力的大模型系列，包含 671B 参数的 MoE 模型及多款打破 SOTA 的蒸馏小模型，在数学、代码和复杂推理任务上性能可媲美 OpenAI-o1。

**2) 关键要点**
*   **模型架构与参数**：DeepSeek-R1 和 R1-Zero 采用混合专家（MoE）架构，总参数量 671B，激活参数 37B，支持高达 128K 的上下文长度。
*   **纯强化学习突破**：DeepSeek-R1-Zero 首次验证了无需监督微调（SFT）冷启动，仅通过大规模强化学习（RL）即可自然涌现出自我验证和长思维链（CoT）等强大推理能力。
*   **多阶段训练管道**：为解决纯 RL 模型的问题，DeepSeek-R1 引入了冷启动数据，并采用包含两个 RL 阶段和两个 SFT 阶段的完整训练管道进行对齐与优化。
*   **高性能蒸馏模型**：开源了 6 款基于 Qwen2.5（1.5B-32B）和 Llama3（8B/70B）的蒸馏模型；其中 32B 蒸馏模型在多项基准测试中超越 OpenAI-o1-mini，创下密集型（Dense）模型的新 SOTA。
*   **部署与调用**：支持网页端（DeepThink）、兼容 OpenAI 格式的 API 调用；蒸馏模型支持通过 vLLM 或 SGLang 快速本地部署，大模型部署需参考 DeepSeek-V3 仓库。
*   **参数设置建议**：官方推荐将 Temperature 设置在 0.5 到 0.7 之间（最推荐 0.6）；数学问题建议在提示词中明确要求“逐步推理并将最终答案放在 `\boxed{}` 中”。

**3) 风险与缺口**
*   **提示词限制**：强烈建议不要添加系统提示词（System Prompt），所有指令必须包含在用户提示词中。
*   **思考过程缺失风险**：模型在回答某些问题时可能会跳过思考过程，建议在每次输出开头强制模型生成 `<think>\n` 以保证充分推理。
*   **输出异常风险**：若 Temperature 设置不当，模型可能会出现输出无限重复或内容不连贯的问题（R1-Zero 早期版本也存在无限重复、可读性差和语言混杂问题）。
*   **框架兼容性缺口**：目前 Hugging Face 的 Transformers 库尚未直接支持 DeepSeek-R1 大模型的运行。
*   **评估偏差风险**：单次测试可能无法准确反映性能，官方建议进行多次测试并取平均值（官方基准测试采用生成 64 个回答来评估 pass@1）。

## 功能与定位

DeepSeek-R1 是一个围绕“复杂推理能力”的开源模型与配套资料集合：既包含大规模 MoE 推理模型，也包含多尺寸蒸馏模型，目标是在数学、代码与多步推理任务上提供强基线，并便于社区在不同算力条件下复现与部署。

## 典型使用场景

- 推理能力评测与研究：对比不同推理策略、提示方式与解码参数的影响。
- 本地推理部署：优先使用蒸馏模型在单机/小集群上运行。
- 作为推理型模型能力底座：为 RAG、Agent 或工具调用提供更强的推理与规划能力（需结合具体框架与安全边界）。

## 核心内容

- 模型系列：R1、R1-Zero 及多个蒸馏模型。
- 论文与复现材料：训练方法、评测结果与使用建议。
- 部署与调用指引：在线体验、API 兼容性说明与推理框架建议。

## 限制与注意事项

- 许可证与使用条款需以官方仓库与平台为准，部署前应明确权重与代码的授权边界。
- 生产使用前应做稳定性与安全评估，尤其是长输出、重复输出与指令注入类风险。

## 链接

- 仓库：https://github.com/deepseek-ai/DeepSeek-R1
- 论文：https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf
- DeepSeek-V3：https://github.com/deepseek-ai/DeepSeek-V3
- Hugging Face 组织页：https://huggingface.co/deepseek-ai

## 关联主题

- [[00-元语/AI]]
- [[00-元语/alignment]]
- [[00-元语/benchmark]]
- [[00-元语/evals]]
- [[00-元语/github]]
- [[00-元语/llm]]
- [[00-元语/paper]]
- [[00-元语/prompt]]
- [[00-元语/risk]]
- [[00-元语/self-hosting]]
