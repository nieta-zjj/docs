---
title: "DeepSeek-Coder：代码大模型项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `deepseek-ai/DeepSeek-Coder`"
项目主页: "https://github.com/deepseek-ai/DeepSeek-Coder"
官方网站: "https://chat.deepseek.com/"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 22808，Forks 2735，Watchers 225（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

### 一句话总结
DeepSeek-Coder 是一系列基于 2 万亿 token 从头训练的开源代码语言模型，支持 16K 上下文和项目级代码补全，在多项代码基准测试中达到了开源模型的最先进水平。

### 核心要点
*   **开源协议与社区热度**：项目采用 MIT 协议开源，主要使用 Python 开发，GitHub 仓库已获得超 2.2 万 Stars。
*   **模型规模与上下文**：提供 1B、5.7B、6.7B 和 33B 四种参数规模，支持 16K 的上下文窗口大小。
*   **海量训练数据**：模型在 2 万亿（2T）token 的数据上从头训练，数据构成包含 87% 的代码和 13% 的中英文自然语言。
*   **卓越的评估性能**：Base-33B 模型在 HumanEval、MBPP 和 DS-1000 等基准测试中显著超越 CodeLlama-34B；Instruct-33B（指令微调版）在 HumanEval 上超越了 GPT-3.5-turbo。
*   **项目级代码能力**：在数据处理阶段解析了仓库内文件的依赖关系并进行拼接，结合填空（fill-in-the-blank）任务，使其具备强大的项目级代码补全与插入能力。
*   **广泛的语言支持**：支持 Python、C++、Java、Rust、Go 等 80 多种编程语言。
*   **三阶段训练流程**：
    1. **初始预训练**：在 1.8T token 上使用 4K 窗口训练。
    2. **长上下文预训练**：在额外 200B token 上将窗口扩展至 16K，产出基础模型（Base）。
    3. **指令微调**：使用 2B token 的指令数据进行微调，产出指令模型（Instruct）。
*   **便捷的部署与使用**：用户可通过安装 `requirements.txt` 依赖，并利用 Hugging Face 的 `transformers` 库快速实现代码补全（Code Completion）和代码插入（Code Insertion）推理。

## 功能与定位

DeepSeek Coder: Let the Code Write Itself

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:37:55Z。
- 项目创建于 2023-10-20T06:38:01Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/deepseek-ai/DeepSeek-Coder
- 官网：https://chat.deepseek.com/
- README：https://raw.githubusercontent.com/deepseek-ai/DeepSeek-Coder/main/README.md
- Releases：https://github.com/deepseek-ai/DeepSeek-Coder/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/benchmark]]
- [[00-元语/github]]
