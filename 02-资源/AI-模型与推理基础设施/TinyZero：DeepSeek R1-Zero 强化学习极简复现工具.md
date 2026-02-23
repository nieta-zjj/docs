---
title: "TinyZero：DeepSeek R1-Zero 强化学习极简复现工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `Jiayi-Pan/TinyZero`"
项目主页: "https://github.com/Jiayi-Pan/TinyZero"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 12771，Forks 1558，Watchers 125（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
TinyZero 是一个基于 veRL 框架构建的 DeepSeek R1-Zero 极简复现项目，通过强化学习使 3B 规模的基础语言模型在倒计时和乘法任务中自主发展出自我验证与搜索能力。

**2) 关键要点**
* **项目定位**：DeepSeek R1-Zero 的极简复现，主要针对倒计时（countdown）和乘法任务。
* **核心技术**：基于字节跳动的 veRL 框架构建，通过强化学习（RL）激发模型的推理能力。
* **模型与成本**：主要使用 Qwen2.5 系列作为基础模型，仅需不到 30 美元的成本即可复现模型顿悟的“Aha moment”。
* **单卡训练**：支持 1.5B 及以下参数规模的模型在单 GPU 上运行。
* **多卡训练**：对于 3B 及以上规模的模型（如 Qwen2.5-3B），模型能够发展出复杂的推理技能（示例脚本使用 2 张 GPU）。
* **指令微调消融实验**：项目支持对 Qwen-2.5-3B Instruct 模型进行实验，并提供了适配聊天模板的数据重处理脚本。
* **依赖环境**：主要依赖 Python 3.9、PyTorch 2.4.0、vLLM 0.6.3、Ray 和 Flash Attention 2 等基础设施。
* **开源与热度**：采用 Apache License 2.0 协议，项目在 GitHub 上已获得超 12,700 个 Stars 和 1,500+ 个 Forks。

**3) 风险/不足**
* **显存溢出风险**：在运行训练代码时可能会遇到显存不足（Out-of-vram）的问题，官方建议在脚本中添加 `critic.model.enable_gradient_checkpointing=True` 来尝试解决。
* **小模型能力瓶颈**：项目明确指出，Qwen2.5-0.5B 基础模型在实验中未能成功学习到推理能力（fails to learn reasoning）。

## 功能与定位

Minimal reproduction of DeepSeek R1-Zero

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:53:17Z。
- 项目创建于 2025-01-21T16:49:12Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/Jiayi-Pan/TinyZero
- README：https://raw.githubusercontent.com/Jiayi-Pan/TinyZero/main/README.md
- Releases：https://github.com/Jiayi-Pan/TinyZero/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/github]]
