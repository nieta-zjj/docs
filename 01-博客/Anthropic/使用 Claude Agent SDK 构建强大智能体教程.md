---
title: "使用 Claude Agent SDK 构建强大智能体教程"

发布日期: "2025-12-04"
作者: "Anthropic"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/README.md"
译注: "原文为英文仓库文档，本稿为中文整理版。"
---

## 摘要

**一句话总结**
本教程系列详细演示了如何使用 Claude Agent SDK 构建从基础研究智能体到通过模型上下文协议（MCP）集成外部系统的复杂多智能体编排系统。

**关键点**
*   **环境准备**：项目依赖于 `uv`、Node.js、Claude Code CLI，需配置 Anthropic API 密钥；部分高级教程还需 GitHub 个人访问令牌和 Docker。
*   **核心 SDK 基础**：教程涵盖了 Python SDK 中 `query()` 方法的基础使用，以及 `ClaudeSDKClient` 和 `ClaudeAgentOptions` 接口的调用。
*   **Notebook 00（研究智能体）**：通过几行代码实现基础智能体循环，演示了 WebSearch 工具、多模态 Read 工具以及系统提示词的使用。
*   **Notebook 01（幕僚长智能体）**：展示生产环境级功能，包括基于 `CLAUDE.md` 的记忆持久化、无执行的计划模式（Plan Mode）、自定义斜杠命令、用于合规审计的钩子（Hooks）以及子智能体编排。
*   **Notebook 02（可观测性智能体）**：通过 MCP 突破本地限制，集成了包含 13+ 工具的 Git MCP 服务器和 100+ 工具的 GitHub MCP 服务器，实现 DevOps 实时监控与自动化事件响应。
*   **独立代码实现**：提供了三个完整的智能体目录（`research_agent`、`chief_of_staff_agent`、`observability_agent`），支持通过 `uv pip install -e .` 安装并在 notebook 外部独立运行。
*   **应用场景扩展**：该 SDK 最初为 Anthropic 内部开发工具，因其强大的任务分解、工具调用和上下文保持能力，现已被广泛应用于数据分析、工作流自动化等非编码类的通用智能体构建。

**风险/不足（前提与限制）**
*   **知识门槛**：教程明确指出，假设学习者对 Claude Code 已经具有一定程度的了解。
*   **环境依赖限制**：若要运行 Notebook 02（可观测性智能体），必须确保本地机器上正在运行 Docker，否则无法完成外部系统集成。

## 正文

这是一个教程系列，演示如何使用 [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk-python) 构建复杂的通用智能体系统，内容涵盖从简单的研究智能体到与外部系统集成的多智能体编排。

## 快速入门

#### 1. 安装 uv、[node](https://nodejs.org/en/download/) 和 Claude Code CLI（如果尚未安装）

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
npm install -g @anthropic-ai/claude-code
```

#### 2. 克隆并设置项目

```bash
git clone https://github.com/anthropics/anthropic-cookbook.git
cd anthropic-cookbook/claude_agent_sdk
uv sync
```

#### 3. 将 venv 注册为 Jupyter 内核，以便在 notebook 中使用

```bash
uv run python -m ipykernel install --user --name="cc-sdk-tutorial" --display-name "Python (cc-sdk-tutorial)"
```

#### 4. Claude API 密钥
1. 访问 [console.anthropic.com](https://console.anthropic.com/dashboard)
2. 注册或登录您的帐户
3. 点击 "Get API keys"
4. 复制密钥并将其粘贴到您的 `.env` 文件中，格式为 `ANTHROPIC_API_KEY="<token>"`

#### 5. 用于 Notebook 02 的 GitHub 令牌
如果您计划学习可观测性智能体 (Observability Agent) 的 notebook：
1. 在[此处](https://github.com/settings/personal-access-tokens/new)获取 GitHub 个人访问令牌 (Personal Access Token)
2. 选择带有默认选项（公共仓库，无帐户权限）的 "Fine-grained"（细粒度）令牌
3. 将其添加到您的 `.env` 文件中，格式为 `GITHUB_TOKEN="<token>"`
4. 确保 [Docker](https://www.docker.com/products/docker-desktop/) 正在您的机器上运行（用于运行相关 MCP 服务器）

## 教程系列概述

本教程系列将带您体验从基础智能体实现到能够处理现实世界复杂性的高级多智能体系统的全过程。每个 notebook 都建立在前一个的基础之上，在引入新概念和功能的同时，保持实用且生产就绪的实现方式。

### 您将学到什么

通过本系列教程，您将接触到：
- **核心 SDK 基础知识**：使用 Python SDK 中的 `query()` 以及 `ClaudeSDKClient` 和 `ClaudeAgentOptions` 接口
- **工具使用模式**：从基础的 WebSearch 到复杂的 MCP 服务器集成
- **多智能体编排**：专业子智能体及其协同工作
- **企业级功能**：利用钩子 (hooks) 进行合规性跟踪和审计跟踪
- **外部系统集成**：通过模型上下文协议 (MCP) 实现

注意：本教程假设您对 Claude Code 有一定程度的了解。理想情况下，如果您一直在使用 Claude Code 来加速您的编码任务，并希望利用其原始的智能体能力来处理软件工程之外的任务，本教程将帮助您快速入门。

## Notebook 结构与内容

### Notebook 00：单行代码研究智能体（`00_The_one_liner_research_agent.ipynb`）

用仅需几行代码构建的简单却强大的研究智能体开启您的旅程。本 notebook 介绍了核心 SDK 概念，并演示了 Claude Agent SDK 如何实现自主的信息收集与综合。

**核心概念：**
- 使用 `query()` 和异步迭代的基础智能体循环
- 用于自主研究的 WebSearch 工具
- 使用 Read 工具的多模态能力
- 使用 `ClaudeSDKClient` 进行对话上下文管理
- 用于智能体专业化的系统提示词 (System prompts)

### Notebook 01：幕僚长智能体（`01_The_chief_of_staff_agent.ipynb`）

为初创公司 CEO 构建一个全方位的 AI 幕僚长，展示适用于生产环境的高级 SDK 功能。本 notebook 演示了如何创建具有治理、合规性和专业领域知识的复杂智能体架构。

**探索的关键功能：**
- **记忆与上下文：** 使用 CLAUDE.md 文件实现持久化指令
- **输出风格：** 为不同受众量身定制的沟通方式
- **计划模式 (Plan Mode)：** 针对复杂任务的无执行战略规划
- **自定义斜杠命令：** 针对常见操作的用户友好型快捷方式
- **钩子 (Hooks)：** 自动化的合规性跟踪和审计跟踪
- **子智能体编排：** 协调专业智能体以提供领域专业知识
- **Bash 工具集成：** 执行 Python 脚本以处理程序性知识和复杂计算

### Notebook 02：可观测性智能体（`02_The_observability_agent.ipynb`）

通过模型上下文协议 (MCP) 将智能体连接到外部系统，从而突破本地能力的限制。将您的智能体从被动观察者转变为 DevOps 工作流中的主动参与者。

**高级能力：**
- **Git MCP 服务器：** 13+ 个用于仓库分析和版本控制的工具
- **GitHub MCP 服务器：** 100+ 个用于完整 GitHub 平台集成的工具
- **实时监控：** CI/CD 流水线分析和故障检测
- **智能事件响应：** 自动化的根本原因分析
- **生产工作流自动化：** 从监控到可操作的洞察

## 完整的智能体实现

每个 notebook 都在其各自的目录中包含了一个智能体实现：
- **`research_agent/`** - 具备网络搜索和多模态分析能力的自主研究智能体
- **`chief_of_staff_agent/`** - 具备财务建模和合规能力的多智能体高管助手
- **`observability_agent/`** - 集成了 GitHub 的 DevOps 监控智能体

**运行独立智能体：** 要在 notebook 之外导入智能体模块，请从 `claude_agent_sdk/` 目录运行，或以可编辑模式安装该包：
```bash
uv pip install -e .
```

## 背景

### Claude Agent SDK 的演进

Claude Code 已成为 Anthropic 最成功的产品之一，但这不仅仅是因为其 SOTA（业界领先）的编码能力。它真正的突破在于更基础的层面：**Claude 在智能体工作方面表现得异常出色**。

让 Claude Code 与众不同的不仅仅是代码理解能力，还在于它能够：
- 自主地将复杂任务分解为可管理的步骤
- 有效地使用工具，并智能地决定何时使用何种工具
- 在长时间运行的任务中保持上下文和记忆
- 从错误中优雅地恢复，并在需要时调整方法
- 知道何时该要求澄清，何时该基于合理的假设继续前进

这些能力使得 Claude Code 成为最接近 Claude 原始智能体能力的“裸机 (bare metal)”级工具：它是一个极简但完整且复杂的接口，能以尽可能低的开销让模型的能力大放异彩。

### 超越编码：智能体构建者的工具包

该 SDK 最初是 Anthropic 工程师为加速开发工作流而构建的内部工具，但其公开发布展现出了意想不到的潜力。在 Claude Agent SDK 及其 GitHub 集成发布后，开发者们开始将其用于远超编码范畴的任务：

- **研究智能体**：跨多个信息源收集和综合信息
- **数据分析智能体**：探索数据集并生成洞察
- **工作流自动化智能体**：处理重复性的业务流程
- **监控和可观测性智能体**：监视系统并对问题做出响应
- **内容生成智能体**：创建和完善各种类型的内容

模式已经很清晰：该 SDK 在无意中已经成为一个高效的智能体构建框架。其旨在处理软件开发复杂性的架构，被证明非常适合用于创建通用智能体。

本教程系列演示了如何利用 Claude Agent SDK 为任何领域或用例构建高效的智能体，涵盖从简单的自动化到复杂的企业系统。

## 贡献

发现了问题或有任何建议？请提交 issue 或发起 pull request！

## 相关文档

- [[01-博客/Anthropic/Building Effective Agents 常见工作流最小实现|Building Effective Agents 常见工作流最小实现]]；关联理由：解说；说明：该文给出常见 Agent 工作流最小范式，可作为本教程多智能体编排的结构化补充。
- [[01-博客/Anthropic/在 Claude 开发者平台引入高级工具使用功能|在 Claude 开发者平台引入高级工具使用功能]]；关联理由：延伸思考；说明：本教程讲解工具与 MCP 集成，该文进一步延伸到高级工具能力的边界与接入策略。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/sdk]]
- [[00-元语/cli]]
- [[00-元语/mcp]]
- [[00-元语/memory]]
- [[00-元语/observability]]
- [[00-元语/CI]]
- [[00-元语/compliance]]
- [[00-元语/multimodal]]
- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
