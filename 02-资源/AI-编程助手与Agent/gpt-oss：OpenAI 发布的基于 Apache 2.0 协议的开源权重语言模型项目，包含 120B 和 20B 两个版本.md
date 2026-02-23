---
title: "gpt-oss：OpenAI 发布的基于 Apache 2.0 协议的开源权重语言模型项目，包含 120B 和 20B 两个版本"

发布日期: "2026-02-22"
对象: "GitHub 项目 `openai/gpt-oss`"
项目主页: "https://github.com/openai/gpt-oss"
官方网站: "https://openai.com/open-models"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 19806，Forks 2044，Watchers 108（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.0.9（发布时间：2026-01-13T19:03:30Z）"
---

## 摘要

**1) 一句话总结**
`openai/gpt-oss` 是 OpenAI 发布的基于 Apache 2.0 协议的开源权重语言模型项目，包含 120B 和 20B 两个版本，专为复杂推理、Agent 任务和开发者多功能场景设计。

**2) 核心要点**
*   **模型规格**：提供 `gpt-oss-120b`（1170亿参数，51亿激活，面向生产与高推理需求）和 `gpt-oss-20b`（210亿参数，36亿激活，面向低延迟与本地部署）两个版本。
*   **硬件要求**：模型采用 MXFP4 混合精度量化，120B 版本可在一张 80GB 显存的 GPU（如 H100 或 MI300X）上运行，20B 版本可在 16GB 内存/显存下运行。
*   **开源协议**：采用宽松的 Apache 2.0 协议，无 copyleft 限制，支持自由实验、参数微调及商业化部署。
*   **核心能力**：支持动态配置推理力度（低、中、高），开放完整的思维链（Chain-of-Thought）过程以便调试，并原生具备函数调用、网页浏览、Python 代码执行和结构化输出等 Agent 能力。
*   **专属交互格式**：模型训练基于专属的 `harmony` 响应格式，官方同步发布了 `openai-harmony` 库用于格式化提示词与解析输出。
*   **生态兼容**：支持通过 Transformers、vLLM、Ollama、LM Studio 以及 Codex 等第三方工具和框架进行推理与部署。
*   **参考实现**：仓库内提供了基于 PyTorch、Triton（单卡优化）和 Metal（苹果芯片）的推理参考代码，以及终端聊天（Terminal Chat）和 Responses API 的服务端示例。

**3) 风险与不足**
*   **格式强依赖**：模型必须使用 `harmony` 响应格式，否则将无法正常工作。
*   **非生产就绪代码**：官方提供的 PyTorch、Triton、Metal 推理代码以及 Browser 浏览器工具实现仅供教育和参考使用，不建议直接用于生产环境。
*   **硬件与系统限制**：未优化的 PyTorch 参考实现至少需要 4 张 H100 GPU 才能运行；此外，官方提供的参考实现均未在 Windows 系统上进行过测试。

## 功能与定位

gpt-oss-120b and gpt-oss-20b are two open-weight language models by OpenAI

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T10:30:43Z。
- 项目创建于 2025-06-23T16:43:33Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/openai/gpt-oss
- 官网：https://openai.com/open-models
- README：https://raw.githubusercontent.com/openai/gpt-oss/main/README.md
- Releases：https://github.com/openai/gpt-oss/releases

## 相关文档

- [[02-资源/AI-编程助手与Agent/Codex：OpenAI 终端代码智能体仓库|Codex：OpenAI 终端代码智能体仓库]]；关联理由：上下游；说明：该条目强调 gpt-oss 可通过 Codex 等工具接入，Codex 条目可作为模型能力落地到终端开发流程的下游实现参考。
- [[02-资源/AI-编程助手与Agent/LocalAI：开源、本地优先的 AI 推理引擎，作为 OpenAI、Claude 等 API 的直接替代方案|LocalAI：开源、本地优先的 AI 推理引擎，作为 OpenAI、Claude 等 API 的直接替代方案]]；关联理由：上下游；说明：两者都覆盖开源模型的本地化与私有化部署路径，LocalAI 条目可补充 gpt-oss 在推理引擎层面的部署对照。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/OpenAI]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/Codex]]
- [[00-元语/github]]
- [[00-元语/protocol]]
- [[00-元语/self-hosting]]
