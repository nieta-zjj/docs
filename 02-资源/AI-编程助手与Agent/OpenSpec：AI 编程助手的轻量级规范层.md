---
title: "OpenSpec：AI 编程助手的轻量级规范层"

来源:
  - "https://github.com/Fission-AI/OpenSpec"
  - "https://www.npmjs.com/package/@fission-ai/openspec"
  - "https://github.com/Fission-AI/OpenSpec/tree/main/docs"
开源协议: "MIT License"
运行环境: "Node.js 20.19.0 及以上"
---

## 摘要

**1) 一句话总结**
OpenSpec 是一个专为 AI 编程助手设计的轻量级规范层工具，通过结构化工件和斜杠命令工作流，帮助开发者在编码前与 AI 达成需求共识，从而解决 AI 输出不可预测的问题。

**2) 核心要点**
* **结构化工件管理**：将需求拆解为四个层层递进的核心文件：`proposal.md`（意图与范围）、`specs/`（增量规范）、`design.md`（技术方案）和 `tasks.md`（实现任务清单）。
* **OPSX 工作流**：提供一组斜杠命令（如 `/opsx:new`, `/opsx:ff`, `/opsx:apply`, `/opsx:archive`），支持非线性的开发迭代，允许随时创建、更新或归档工件。
* **双目录架构**：明确区分“事实来源”（`specs/` 目录，记录系统当前行为）与“提议的变更”（`changes/` 目录，记录进行中的修改及历史审计）。
* **增量规范（Delta Specs）**：通过 `ADDED`、`MODIFIED`、`REMOVED` 三种状态管理需求变更，归档时自动合并至主规范中。
* **项目级上下文注入**：通过 `config.yaml` 定义工作流 Schema，自动向 AI 注入项目技术栈、API 约定及团队架构规则。
* **广泛的工具兼容性**：不绑定特定 IDE 或单一模型，支持 20 多种主流 AI 编程助手（包括 Cursor, Claude Code, GitHub Copilot 等）。
* **开放的自定义能力**：指令模板和 Schema 完全开放，开发者可自由修改提示词模板和工作流依赖。
* **CLI 工具支持**：需 Node.js 20.19.0+ 环境，提供 `init`、`list`、`view` 等终端命令，并支持 `--json` 选项供 AI 代理进行结构化读取。

**3) 风险与不足**
* **模型能力依赖**：建议使用具备高推理能力的模型（如 Opus 4.5 和 GPT 5.2）进行规划和实现。
* **上下文窗口限制**：工具高度依赖干净的上下文窗口，要求在开始实现阶段前清理上下文，并保持良好的上下文卫生。
* **配置大小限制**：项目配置文件（`config.yaml`）中的上下文内容存在 50KB 的大小上限。
* **特定工具兼容性缺陷**：GitHub Copilot CLI 目前不支持从项目目录加载自定义斜杠命令，需手动设置自定义 Agent 作为变通方案（IDE 扩展不受此影响）。
* **隐私与数据收集**：默认收集匿名使用统计数据（仅命令名称和版本），需手动设置环境变量（`OPENSPEC_TELEMETRY=0` 或 `DO_NOT_TRACK=1`）才能退出收集。

## 功能与定位

OpenSpec 是一个面向 AI 编程助手的“规范与工件层”工具：把需求、设计与任务拆成可追踪的 Markdown 工件，让人和 AI 在写代码前先对齐“要做什么、怎么验证、怎么实现”，并把变更过程保存在代码库里，避免需求只停留在聊天上下文中。

## 典型使用场景

- 用 AI 迭代功能时，想让需求与验收标准从一开始就可追踪、可复核。
- 在团队里同时使用多种 AI 编程工具，希望用统一的结构与指令模板约束输出质量。
- 需要在实现过程中频繁回改需求/设计，但又不想被线性“阶段门”绑死。
- 希望把“变更历史”和“最终规范”都留在仓库里，便于审计与回溯。

## 核心功能

- OPSX 斜杠命令工作流：围绕 `/opsx:new` → `/opsx:ff` 或 `/opsx:continue` → `/opsx:apply` → `/opsx:archive` 的迭代流程组织变更。
- 工件与目录结构：
  - `openspec/specs/`：系统当前行为的规范（事实来源）。
  - `openspec/changes/`：每个变更一个目录，包含 `proposal.md`、`design.md`、`tasks.md` 和 `specs/`（增量规范）。
- Delta Specs：用 `ADDED`、`MODIFIED`、`REMOVED` 描述需求变更，归档时把增量合并进主规范并将变更移入归档目录。
- 可配置工作流：通过 `openspec/config.yaml` 选择 Schema，并向所有工件指令注入项目上下文与规则。
- 多工具集成：`openspec init` 会为所选工具生成对应的 skills/commands 文件，覆盖 Claude Code、Cursor、Cline、Gemini CLI、Windsurf、Codex、OpenCode 等多种生态。
- CLI 支持：提供初始化、查看、校验、归档、模板与 Schema 管理等终端命令，并为部分命令提供 `--json` 输出便于脚本化读取。

## 特色与差异点

- 更偏“工件驱动的协作与对齐”，而不是把所有规范都锁在某个 IDE 或单一模型生态里。
- 工作流与模板可编辑：Schema 与 templates 可改，便于按项目/团队试验不同的提示词与工件依赖。
- 适配存量项目：强调迭代与渐进落地（brownfield），而不是只针对从零开始的新项目。

## 使用方式概览

1. 通过 npm 安装 `@fission-ai/openspec` 并在项目中运行 `openspec init` 生成目录与集成配置。
2. 在你使用的 AI 编程工具里按 OPSX 流程创建变更工件、完善任务清单，再进入实现。
3. 实现完成后归档变更，让增量规范合并到主规范，并保留变更历史便于回溯。

## 限制与注意事项

- 对模型推理能力与上下文管理有要求：文档建议使用更强的推理模型并保持上下文“干净”。
- `openspec/config.yaml` 的 `context` 有大小上限（文档说明为 50KB），需要控制注入内容的体量。
- GitHub Copilot CLI 对“项目内自定义斜杠命令”的支持存在限制，需要按官方说明采用替代方案。
- 遥测：文档说明会收集匿名使用统计（命令名称与版本；不含参数、路径与内容；CI 中自动禁用）。可通过 `OPENSPEC_TELEMETRY=0` 或 `DO_NOT_TRACK=1` 选择退出；CLI 文档也提供 `telemetry.enabled` 的配置项。

## 链接

- 仓库：https://github.com/Fission-AI/OpenSpec
- npm 包：https://www.npmjs.com/package/@fission-ai/openspec
- 文档目录：https://github.com/Fission-AI/OpenSpec/tree/main/docs
- Getting Started：https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md
- OPSX 工作流：https://github.com/Fission-AI/OpenSpec/blob/main/docs/opsx.md
- CLI 参考：https://github.com/Fission-AI/OpenSpec/blob/main/docs/cli.md
- 支持的工具列表：https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md
- Discord：https://discord.gg/YctCnvvshC

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Spec驱动开发]]
- [[00-元语/workflow]]
- [[00-元语/Agent]]
- [[00-元语/tool]]
- [[00-元语/cli]]
