---
title: "autonomous-coding：基于 Claude Agent SDK 的长运行自主编程智能体"

来源:
  - "https://github.com/leonvanzyl/autonomous-coding"
  - "https://youtu.be/YW09hhnVqNM"
授权与许可: "README 标注为 “Internal Anthropic use”"
主要依赖: "Claude Code CLI、Python（`claude-agent-sdk` 等）"
---

## 摘要

### 1) 一句话总结
Autonomous Coding Agent 是一个基于 Claude 的双智能体系统，支持跨会话长效运行，能够根据需求说明在安全沙盒内自主完成从功能拆解、测试用例生成到代码编写的全流程应用构建。

### 2) 核心要点
* **双智能体架构**：由“初始化智能体”（负责生成测试用例、搭建目录和初始化 Git）与“编码智能体”（负责跨会话接续开发、逐个实现功能并更新状态）协同工作。
* **状态持久化与接续**：每个会话使用独立上下文，进度通过本地文件（`feature_list.json` 或 `features.db`）和 Git 提交进行持久化，支持随时中断恢复及 3 秒延迟的自动接续。
* **深度防御安全模型**：在隔离的系统级沙盒中运行 Bash 命令，严格限制文件操作在项目目录内，并采用命令白名单机制（仅允许 `npm`, `git`, `docker` 等，对 `pkill` 等敏感命令有额外验证）。
* **提示词回退机制**：支持项目级自定义提示词，优先加载项目专属模板（如 `app_spec.txt`、`initializer_prompt.md`），若不存在则自动回退使用全局基础模板。
* **自动化进度通知**：支持配置 N8N Webhook，在测试通过时自动发送包含进度百分比、通过数和总数的 JSON 格式通知。
* **便捷的启动与交互**：内置 `/create-spec` 命令用于交互式生成需求；提供 `start.sh`/`start.bat` 脚本自动完成环境检查、虚拟环境创建及依赖安装。
* **前置依赖要求**：必须安装 Claude Code CLI，并配置 Claude Pro/Max 订阅或 Anthropic API Key。

### 3) 风险与限制
* **耗时较长**：完整应用构建需跨会话运行数小时（首次初始化需数分钟且可能看似无响应，后续单次编码迭代需 5-15 分钟）。
* **命令执行受限**：安全系统会拦截白名单之外的命令，若需使用新命令，必须手动修改源码 `security.py` 中的 `ALLOWED_COMMANDS`。
* **授权限制**：文档明确标注该项目的许可证为“内部 Anthropic 使用 (Internal Anthropic use)”。

## 功能与定位

autonomous-coding 是一个“长运行、可跨会话接续”的自主编程智能体示例项目。它基于 Claude Agent SDK 运行，通过“初始化智能体 + 编码智能体”的分工，把一个应用从需求说明出发，逐步推进到实现与验证，并把进度持久化到本地项目目录，便于中断后继续。

## 典型使用场景

- 想用多轮会话的方式让 AI 完成较大工程量的编码任务，并在每轮会话里保持清晰的进度。
- 需要把“需求 → 测试用例/任务 → 实现”的过程落到可追踪的本地工件中，而不是只依赖聊天记录。
- 想在自定义提示词模板与安全约束下，搭建一个可反复运行的 autonomous coding demo。

## 工作流与产物

- 生成项目默认放在 `generations/` 目录下，每个项目单独一个子目录。
- 项目提示词支持项目级覆盖：优先读取项目目录下的 `prompts/`（例如 `app_spec.txt`、`initializer_prompt.md`、`coding_prompt.md`），否则回退到仓库内的基础模板。
- 进度会在本地持久化（代码中可见基于 SQLite 的 `features.db` 统计通过情况），并配合 Git 提交记录每轮进展。

## 安全模型（概览）

该项目实现了对命令执行的防御式约束思路：

- 采用命令白名单策略限制可执行的 shell 命令集合。
- 对少数高风险命令做额外解析与校验（例如 `pkill` 仅允许终止特定开发相关进程）。
- 文档与配置示例建议将调试端口与管理接口限制在本机访问范围内。

## 使用方式概览

- 前置：安装 Claude Code CLI，并完成订阅登录或配置 Anthropic API Key。
- 启动：运行 `start.sh`（macOS/Linux）或 `start.bat`（Windows），脚本会创建 Python 虚拟环境并安装依赖后进入菜单。
- 交互：创建新项目时可使用 `/create-spec` 交互式生成需求说明；后续运行会从持久化的项目状态接续。
- 通知（可选）：可配置 N8N Webhook，用于在测试通过数量增长时推送进度事件。

## 限制与注意事项

- 授权边界需要优先确认：README 明确标注 “Internal Anthropic use”，不应默认其可用于公开分发或生产用途。
- 全自动构建会耗时且受模型与上下文影响：首次初始化与后续迭代可能需要较长等待时间。
- 命令白名单会阻断大量操作：扩展能力通常意味着需要修改 `security.py` 并承担相应的安全风险。

## 链接

- 仓库：https://github.com/leonvanzyl/autonomous-coding
- 演示视频：https://youtu.be/YW09hhnVqNM
- Anthropic 控制台：https://console.anthropic.com/
- Claude Code CLI 安装脚本（macOS/Linux）：https://claude.ai/install.sh
- Claude Code CLI 安装脚本（Windows）：https://claude.ai/install.ps1

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/Claude]]
- [[00-元语/sdk]]
- [[00-元语/github]]
- [[00-元语/workflow]]
- [[00-元语/prompt]]
- [[00-元语/cli]]
- [[00-元语/security]]
- [[00-元语/compliance]]
- [[00-元语/memory]]
