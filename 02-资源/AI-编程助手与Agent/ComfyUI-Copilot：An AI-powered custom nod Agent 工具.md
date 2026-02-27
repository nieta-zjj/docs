---
title: ComfyUI-Copilot：An AI-powered custom nod Agent 工具
对象: GitHub 仓库
项目主页: https://github.com/AIDC-AI/ComfyUI-Copilot
开源协议: MIT
来源: README、README_CN、assets/FAQ、GitHub Releases、GitHub API
---

## 摘要

ComfyUI-Copilot 是面向 ComfyUI 的 AI 智能助手节点，通过接入大语言模型，覆盖工作流生成、调试、改写与参数调优等环节。它在 v2.0 后定位为“开发伙伴”而非单点工具，适合需要持续迭代 ComfyUI 工作流的用户与团队。

## 功能与定位

ComfyUI-Copilot 是一个为 ComfyUI 设计的 AI 驱动自定义节点，目标是降低工作流开发与维护成本。项目从“辅助工具”扩展到覆盖工作流全流程的协作型助手，核心围绕生成、排错、改写与调参四类任务。

## 典型使用场景

- 通过自然语言快速生成首版工作流候选，缩短从需求到可运行流程的时间。
- 在工作流报错时定位问题节点，辅助排查参数或连接错误。
- 对既有工作流进行结构改写，例如增删节点、调整参数、优化逻辑路径。
- 对参数进行批量测试并比较结果，支持迭代优化生成效果。

## 特色与差异点

- 覆盖工作流生命周期，而非只做单一推荐或问答。
- 同时提供节点查询、节点推荐、模型推荐与下游节点推荐，适合组合式迭代。
- 模型接入方式较灵活，可配置云端 LLM 服务，也可对接本地模型服务入口（如 LMStudio 的 OpenAI 兼容地址）。

## 使用方式概览

- 作为 ComfyUI 自定义节点安装到 `ComfyUI/custom_nodes` 目录并安装依赖。
- 在 ComfyUI 面板中激活 Copilot，并配置所需模型服务参数。
- 通过对话式交互触发生成、调试、改写、推荐等能力。

## 限制与注意事项

- 官方 FAQ 提示：通过 ComfyUI Manager 安装可能出现权限或更新失败，手动 Git 安装更稳定。
- 在非默认主题下可能出现 UI 显示异常，属于已知兼容性问题。
- FAQ 明确当前不支持纯离线模式，核心功能依赖外部 LLM API 服务。
- GitHub 统计数据会持续变化；本条目中的仓库统计以 2026-02-26 抓取结果为准。

## 链接

1. https://github.com/AIDC-AI/ComfyUI-Copilot
2. https://github.com/AIDC-AI/ComfyUI-Copilot/blob/main/README.md
3. https://github.com/AIDC-AI/ComfyUI-Copilot/blob/main/README_CN.md
4. https://github.com/AIDC-AI/ComfyUI-Copilot/blob/main/assets/FAQ.md
5. https://github.com/AIDC-AI/ComfyUI-Copilot/releases
6. https://aclanthology.org/2025.acl-demo.61.pdf

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/copilot]]
- [[00-元语/workflow]]
- [[00-元语/llm]]
- [[00-元语/github]]
