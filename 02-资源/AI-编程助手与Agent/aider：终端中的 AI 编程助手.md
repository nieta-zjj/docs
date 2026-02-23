---
title: "aider：终端中的 AI 编程助手"

发布日期: "2026-02-22"
对象: "GitHub 项目 `Aider-AI/aider`"
项目主页: "https://github.com/Aider-AI/aider"
官方网站: "https://aider.chat/"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 40832，Forks 3904，Watchers 228（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.86.0（发布时间：2025-08-09T17:42:19Z）"
---

## 摘要

**1) 一句话总结**
Aider 是一个基于终端的开源 AI 结对编程助手，支持多种主流大语言模型，能够直接在本地代码库中进行代码编写、修改、自动化测试和 Git 提交。

**2) 核心要点**
*   **项目基础**：基于 Python 开发，采用 Apache License 2.0 开源协议，GitHub 拥有超 4 万 Stars，PyPI 累计安装量达 490 万次。
*   **多模型支持**：兼容云端和本地大语言模型，官方推荐搭配 Claude 3.7 Sonnet、DeepSeek R1 & V3、OpenAI o1/o3-mini/GPT-4o 等模型使用。
*   **全局代码库映射**：能够为整个代码库构建映射图（Repo map），使其在大型复杂项目中也能高效工作。
*   **广泛的语言支持**：支持 Python、JavaScript、Rust、Go、C++ 等 100 多种主流编程语言。
*   **Git 深度集成**：AI 修改代码后会自动进行 commit，并生成合理的提交信息，开发者可使用熟悉的 Git 工具管理或撤销更改。
*   **自动化代码检查与测试**：每次修改后可自动运行 Lint 和测试套件，Aider 能够自动修复其中检测到的问题。
*   **多模态与语音交互**：支持在对话中引入图片和网页作为视觉上下文，同时提供“语音转代码”功能，允许通过语音请求新功能或修复 Bug。
*   **IDE 与工作流兼容**：支持在主流 IDE 中通过添加代码注释来触发 Aider 工作，也支持与 Web 版 LLM 聊天界面进行便捷的复制粘贴交互。
*   **自我迭代能力**：在最新发布的版本中，高达 88% 的新代码是由 Aider 自身编写完成的。

## 功能与定位

aider is AI pair programming in your terminal

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:38:30Z。
- 项目创建于 2023-05-09T18:57:49Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/Aider-AI/aider
- 官网：https://aider.chat/
- README：https://raw.githubusercontent.com/Aider-AI/aider/main/README.md
- Releases：https://github.com/Aider-AI/aider/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/tool]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/ide]]
- [[00-元语/llm]]
- [[00-元语/github]]
