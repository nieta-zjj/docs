---
title: "OpenCode 多智能体套件：oh-my-opencode-slim"

来源:
  - "https://github.com/alvinunreal/oh-my-opencode-slim"
  - "https://github.com/alvinunreal/oh-my-opencode-slim/blob/master/README.md"
  - "https://github.com/alvinunreal/oh-my-opencode-slim/blob/master/docs/installation.md"
  - "https://github.com/alvinunreal/oh-my-opencode-slim/blob/master/docs/quick-reference.md"
开源协议: "MIT License"
备注: "用户提供的 `README.zh-CN.md` 在 2026-02-22 访问返回 404（https://github.com/alvinunreal/oh-my-opencode-slim/blob/master/README.zh-CN.md）"
---

## 摘要

### 1) 一句话总结
oh-my-opencode-slim 是一个支持混合多模型提供商的开放多智能体编程套件，通过专职智能体协作实现代码库探索、架构设计、代码精简与自动化测试。

### 2) 核心要点
*   **开源协议**：采用 MIT License (2025) 开源。
*   **多智能体矩阵 (The Pantheon)**：内置分工明确的智能体，包括负责调度的 Orchestrator（协调者）、负责代码侦察的 Explorer（探索者）、负责架构决策的 Oracle（先知）以及负责知识检索的 Librarian（图书管理员）等。
*   **多模型混合路由**：支持为不同智能体分配不同的 LLM，兼容 OpenCode 免费模型、Kimi For Coding、OpenAI、Antigravity (Claude 4.5 / Gemini 3) 以及 Chutes 等提供商。
*   **高度可定制与动态排序**：通过 JSON/JSONC 配置文件自由映射模型，并可选择性接入 Artificial Analysis 或 OpenRouter API，利用质量、延迟、价格等元数据动态优化模型选择。
*   **专属扩展技能**：
    *   `cartography`：自动生成层级化代码地图 (`codemap.md`)，支持**增量上下文更新**（仅重新分析变更文件夹以节省 Token）。
    *   `simplify`：执行极简主义 (YAGNI) 原则，自动识别并移除过度设计的代码。
    *   `agent-browser`：提供外部浏览器自动化能力，支持元素交互与网页视觉验证截图。
*   **安装与配置**：通过 `bunx` 运行安装，使用 `opencode auth login` 进行 OAuth 授权，支持通过环境变量 (`OH_MY_OPENCODE_SLIM_PRESET`) 或配置文件切换预设。

### 3) 风险与不足
*   **前置依赖限制**：强依赖于 OpenCode CLI 工具，未安装配置该工具则无法使用。
*   **混合模式锁定**：在混合模型模式下，`designer` 智能体会被固定映射到外部提供商，无法使用 OpenCode 的免费模型。
*   **环境依赖**：`cartography` 技能底层依赖 Python 引擎 (`cartographer.py`) 管理状态，运行环境必须支持 Python 3。
*   **监控配置要求**：通过 Tmux 进行智能体实时监控的功能非默认开启，必须在安装时或配置中显式启用。

## 功能与定位

oh-my-opencode-slim 是一个面向 OpenCode 的多智能体套件与安装配置工具。它把不同角色的智能体、模型映射、技能与可选的监控集成整理成一套可安装、可切换的预设，让你能用“分工明确的一组智能体”来协作完成编码相关任务。

## 典型使用场景

- 需要用多角色协作方式处理复杂编码任务，例如：摸清陌生代码库、制定改造方案、分解实现步骤、执行修复与优化。
- 希望不同子任务用不同模型完成，按能力与成本分配“强模型/便宜模型”给不同智能体。
- 想把常用技能（例如代码库地图、YAGNI 精简、浏览器验证）按角色绑定，并能快速切换预设。

## 核心功能

- 多智能体角色集：以 Orchestrator 作为调度核心，并搭配 Explorer、Oracle、Librarian、Designer、Fixer 等角色。
- 多模型提供商组合：支持为每个角色分配不同提供商与模型，并支持“OpenCode 免费模型发现与刷新”等能力。
- 预设切换机制：通过配置文件的 `preset` 字段或环境变量切换一整套模型与能力映射。
- 扩展技能体系：包含 `cartography`、`simplify`、`agent-browser` 等技能的安装与分配思路。

## 特色与差异点

- 把“多智能体分工 + 多模型映射 + 技能分配 + 预设切换”打包成可安装的工作流，而不是只提供单一提示词。
- 在支持的组合里，允许在不同智能体之间混合多个提供商，并提供一些可选的动态选择信号来源。
- 通过 `cartography` 的增量更新思路，把代码库理解沉淀为层级化 `codemap.md`，降低重复读源码的成本。

## 使用方式概览

- 安装：通过 `bunx` 运行交互式或非交互式安装命令，按需启用提供商选项。
- 授权：通过 `opencode auth login` 完成对应提供商的登录与授权流程。
- 配置：编辑 `~/.config/opencode/oh-my-opencode-slim.json`（或 `.jsonc`）调整预设、模型映射、技能许可、以及可选的 tmux 集成。

## 限制与注意事项

- 依赖 OpenCode CLI：未安装 OpenCode 的情况下无法使用；安装文档也提示需要先确认 `opencode --version`。
- 多提供商意味着更多配置面：需要为不同提供商分别完成认证与密钥配置，并自行权衡成本、延迟与可用性。
- tmux 监控需要显式启用：相关能力不是默认开启的路径。

## 链接

- 仓库：https://github.com/alvinunreal/oh-my-opencode-slim
- README：https://github.com/alvinunreal/oh-my-opencode-slim/blob/master/README.md
- 安装指南：https://github.com/alvinunreal/oh-my-opencode-slim/blob/master/docs/installation.md
- 快速参考：https://github.com/alvinunreal/oh-my-opencode-slim/blob/master/docs/quick-reference.md

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/github]]
- [[00-元语/skills]]
- [[00-元语/browser-automation]]
- [[00-元语/context-optimization]]
- [[00-元语/workflow]]
