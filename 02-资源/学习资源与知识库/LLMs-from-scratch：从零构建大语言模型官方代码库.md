---
title: "LLMs-from-scratch：从零构建大语言模型官方代码库"

对象: "Git 项目"
发布日期: "2026-02-22"
来源:
  - "https://github.com/rasbt/LLMs-from-scratch"
  - "https://raw.githubusercontent.com/rasbt/LLMs-from-scratch/main/README.md"
  - "https://raw.githubusercontent.com/rasbt/LLMs-from-scratch/main/LICENSE.txt"
  - "https://api.github.com/repos/rasbt/LLMs-from-scratch"
许可说明: "`LICENSE.txt` 基于 Apache-2.0 但包含定制边界，明确排除与该软件相关的特定书籍与图像内容。"
输入备注: "用户附带数字 `31160`；当前 `https://github.com/rasbt/LLMs-from-scratch/issues/31160` 返回 404，无法确认为公开可访问 issue。"
---

## 摘要

**1) 一句话总结**
`rasbt/LLMs-from-scratch` 是书籍《Build a Large Language Model (From Scratch)》的官方配套代码库，目标是用 PyTorch 从零实现、预训练和微调 GPT 风格大语言模型。

**2) 核心要点**
- 项目定位：以教学为中心，覆盖 LLM 从基础实现到微调的完整实践链路。
- 内容结构：按章节组织，覆盖文本处理、注意力机制、GPT 架构、预训练、分类微调、指令微调及附录练习。
- 技术路线：主线代码基于 PyTorch，强调底层实现而非依赖现成 LLM 框架。
- 代码形态：以 Jupyter Notebook 与 Python 脚本为主，便于逐步运行和复现实验。
- 运行门槛：README 指出主章节代码可在常规笔记本运行，并可自动使用可用 GPU。
- 社区与反馈：提供 Manning Forum 与 GitHub Discussions 作为交流入口。

**3) 风险与不足**
- 贡献边界：为保持与纸质书一致，维护者明确不接受会扩展主章节内容的外部贡献。
- 许可边界：仓库许可文本为 Apache-2.0 定制版，部分内容再分发权受限。
- 编号有效性：`31160` 对应 issue 在 2026-02-22 返回 HTTP 404。

## 功能与定位

该项目定位于“从零实现 LLM”的教学与实践仓库。它不是单一库函数文档，而是把模型构建流程拆成可执行章节，帮助学习者理解训练与微调过程中的关键机制与工程细节。

## 典型使用场景

- 作为系统化学习材料，配合书籍逐章实践 LLM 构建流程。
- 用于教学演示和课程实验，展示从数据到模型的端到端实现。
- 作为参考代码模板，辅助理解和对照 GPT 类模型的实现细节。

## 核心功能

- 章节化代码组织与对应实验入口。
- 覆盖预训练与两类常见微调任务。
- 提供附录与练习解答材料。
- 提供额外 bonus 内容，扩展到更多模型结构和评测主题。

## 特色与差异点

- 以“从零实现”为导向，强调可读性与教学可追踪性。
- 面向入门到进阶学习路径，章节与练习耦合紧密。
- 兼顾书籍、代码与讨论社区三类学习资源。

## 使用方式概览

1. 先阅读 `setup/README.md` 完成环境准备与依赖安装。
2. 按章节顺序运行 notebook 或脚本，逐步理解实现过程。
3. 结合附录与练习解答进行回顾与验证。
4. 遇到问题通过 Manning Forum 或 GitHub Discussions 交流。

## 限制与注意事项

- 贡献限制：主章节代码与纸质书保持一致，扩展型贡献通常不被接受。
- 许可限制：需按 `LICENSE.txt` 理解可再分发边界，特别是书籍与相关图像内容。
- 资料时效：仓库热度与外部链接会变化，引用时应附抓取日期。

## 链接

- 仓库：https://github.com/rasbt/LLMs-from-scratch
- README：https://raw.githubusercontent.com/rasbt/LLMs-from-scratch/main/README.md
- LICENSE：https://raw.githubusercontent.com/rasbt/LLMs-from-scratch/main/LICENSE.txt
- 讨论区：https://github.com/rasbt/LLMs-from-scratch/discussions
- 编号核验：https://github.com/rasbt/LLMs-from-scratch/issues/31160

## 关联主题

- [[00-元语/learning-resource]]
- [[00-元语/llm]]
- [[00-元语/github]]
- [[00-元语/book]]
