---
title: "OpenManus：AI agent 开发工具链与多智能体任务自动化"

对象: "Git 项目"
发布日期: "2026-02-22"
项目创建时间: "2025-03-06"
当前官方仓库: "https://github.com/FoundationAgents/OpenManus"
原仓库（已迁移）: "https://github.com/mannaandpoem/OpenManus"
开源协议: "MIT License"
主要语言: "Python"
用户提供热度快照: "42450"
GitHub 检索星标: "54576（抓取时间：2026-02-22，来源：`https://api.github.com/search/repositories?q=OpenManus`）"
---

## 摘要

OpenManus 是一个基于 Python 的开源通用 AI 智能体框架，作为 Manus 的开源替代方案，为用户提供无需邀请码的任务自动化、浏览器控制及多智能体协作能力。

- 项目由 MetaGPT 社区贡献者发起并采用 MIT 协议开源，当前官方源码仓库为 `FoundationAgents/OpenManus`。
- 提供三种主要运行模式：基础终端模式、MCP 工具模式和多智能体模式。
- 支持通过配置文件管理全局与视觉模型参数，并可扩展数据分析等专用 agent。
- 根据 2026-02-22 的 GitHub 检索结果，主仓库星标为 54,576；你提供的 `42450` 可视为历史热度快照。
- README 明确提示多智能体模式目前仍属不稳定能力，生产使用前应先验证。

## 功能与定位

OpenManus 面向“可自行部署、可自行改造”的通用 AI agent 开发场景，强调开源、快速上手与可扩展。项目 README 直接将其描述为无需邀请码的开放实现。

## 典型使用场景

- 在终端输入自然语言任务，由智能体执行和反馈。
- 通过 DataAnalysis Agent 处理数据分析与可视化任务。
- 结合浏览器自动化能力完成网页交互型任务。
- 在实验性多智能体流程中拆分并协作处理复杂任务。

## 核心功能

- 提供基础运行入口（`main.py`）。
- 提供 MCP 工具版本入口（`run_mcp.py`）。
- 提供多智能体流程入口（`run_flow.py`）。
- 支持在配置中启用 DataAnalysis Agent。
- 支持按配置文件设置全局与视觉模型参数。

## 特色与差异点

- 项目迁移关系清晰：旧仓库仅保留迁移与归档指引，新仓库承载持续开发。
- 生态上联动 OpenManus-RL，覆盖 agent 强化学习调优方向。
- 以 MIT 协议开源，便于二次开发与集成。

## 使用方式概览

1. 准备 Python 3.12 环境并安装依赖。
2. 配置 `config/config.toml` 中的模型与 API 参数。
3. 根据任务类型选择标准模式、MCP 模式或多智能体模式运行。

## 限制与注意事项

- README 明确标注多智能体版本为不稳定状态，生产使用前建议先做小规模验证。
- 项目本身不提供模型算力，需自行准备可用的 LLM API。
- 若只关注最新代码与文档，应优先使用 `FoundationAgents/OpenManus`。

## 链接

- 官方仓库：https://github.com/FoundationAgents/OpenManus
- 项目主页：https://openmanus.github.io/
- 原仓库迁移页：https://github.com/mannaandpoem/OpenManus
- 原仓库归档版：https://github.com/mannaandpoem/OpenManus_Archive
- OpenManus-RL：https://github.com/OpenManus/OpenManus-RL
- Demo 页面：https://huggingface.co/spaces/lyh-917/OpenManusDemo
- DOI：https://doi.org/10.5281/zenodo.15186407

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/Agent]]
- [[00-元语/mcp]]
- [[00-元语/browser-automation]]
- [[00-元语/llm]]
- [[00-元语/cli]]
- [[00-元语/self-hosting]]
