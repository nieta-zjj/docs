---
title: "Anthropic Skills：Claude Code 可复用技能仓库"

发布日期: "2026-02-22"
对象: "GitHub 项目 `anthropics/skills`"
项目主页: "https://github.com/anthropics/skills"
开源协议: "未声明"
主要语言: "Python"
统计快照: "Stars 73116，Forks 7484，Watchers 541（抓取时间：2026-02-22）"
版本快照: "无正式 release（抓取结果 0）"
备注: "用户提供“26527”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

**一句话总结**
`anthropics/skills` 是 Anthropic 官方提供的 Claude 智能体技能（Agent Skills）实现与示例库，旨在帮助开发者通过极简的配置构建、集成和使用自定义技能，以提升 AI 在特定专业任务上的表现。

**核心要点**
*   **项目构成**：仓库包含丰富的开箱即用技能示例（`./skills`）、Agent Skills 标准规范文档（`./spec`）以及用于快速创建自定义技能的标准化模板（`./template`）。
*   **极简构建方式**：创建一个技能仅需新建一个文件夹并添加 `SKILL.md` 文件，通过 YAML 定义唯一标识符和描述，并在正文用 Markdown 编写指令与指南即可。
*   **多端无缝集成**：技能支持在 Claude Code（通过 `/plugin` 命令作为插件引入）、Claude.ai（面向付费计划用户）以及 Claude API 中直接调用或上传使用。
*   **广泛的应用场景**：技能示例涵盖创意设计、开发与技术（如生成 MCP 服务器）、企业工作流、文档处理及个人自动化等领域。
*   **生产级源码参考**：开放了驱动 Claude 官方文档处理能力（解析 PDF、Word、Excel、PPT）的底层技能源码，展示了复杂的生产级 AI 应用构建模式。
*   **生态与合作展示**：除了官方实现，该库还展示了优秀的合作伙伴技能（如 Notion Skills for Claude）。
*   **混合开源协议**：仓库中多数技能采用 Apache 2.0 协议，但部分核心文档处理技能为“源码可见（Source-available）”而非开源协议。

**风险与不足**
*   **行为差异风险**：仓库中的技能仅供演示和教育目的，Claude 的实际实现和行为可能与这些示例有所不同。
*   **生产环境风险**：在将技能用于关键任务之前，必须在用户自己的环境中进行充分测试。
*   **协议合规限制**：部分核心文档技能（位于 `skills/docx`、`skills/pdf` 等目录）并非开源协议，仅为源码可见，开发者在使用或借鉴时需注意合规性限制。

## 功能与定位

该仓库是 Anthropic 官方提供的 Claude Agent Skills（智能体技能）的实现与示例集合。

“技能（Skills）”是由指令、脚本和资源组成的独立文件夹，Claude 可以动态加载这些技能，以提升在特定专业任务上的表现。该项目旨在展示 Claude 技能系统的潜力，为开发者提供灵感，并帮助理解构建智能体技能的不同模式和方法。

## 典型使用场景

- **创意与设计**：辅助完成艺术、音乐、设计相关的应用任务。
- **开发与技术**：执行测试 Web 应用、生成 MCP（Model Context Protocol）服务器等技术工作。
- **企业工作流**：遵循企业品牌指南创建文档、处理企业沟通或分析特定工作流数据。
- **文档处理**：解析、提取或生成 PDF、Word (docx)、Excel (xlsx) 和 PowerPoint (pptx) 等格式的文件。
- **个人自动化**：自动化处理日常个人任务。

## 核心功能

- **丰富的技能示例 (`./skills`)**：提供从创意应用到企业工作流的多种开箱即用的技能示例。每个技能独立成一个文件夹，内含 `SKILL.md` 文件（包含 Claude 遵循的指令和元数据）。
- **Agent Skills 规范 (`./spec`)**：包含 Agent Skills 的标准规范文档。
- **技能模板 (`./template`)**：提供标准化的模板，帮助开发者快速创建自定义技能。
- **生产级底层技能参考**：开放了驱动 Claude 官方文档处理能力（如 PDF、Word 解析）的底层技能源码，供开发者参考复杂的生产级 AI 应用是如何构建的。

## 特色与差异点

- **极简的构建方式**：创建一个技能只需新建一个文件夹并添加 `SKILL.md` 文件。通过简单的 YAML frontmatter 定义 `name`（唯一标识符）和 `description`（功能与使用场景描述），并在正文编写 Markdown 格式的指令、示例和指南即可。
- **多端无缝集成**：支持在 Claude Code（作为插件市场引入）、Claude.ai（付费计划内置）以及 Claude API 中直接调用或上传自定义技能。
- **官方背书与生态展示**：不仅包含 Anthropic 官方的实现，还展示了优秀的合作伙伴技能（如 Notion Skills for Claude）。

## 使用方式概览

- **在 Claude Code 中使用**：
  1. 将该仓库注册为插件市场：`/plugin marketplace add anthropics/skills`
  2. 安装特定技能包（如文档技能）：`/plugin install document-skills@anthropic-agent-skills`
  3. 在对话中直接提及技能即可使用（例如：“使用 PDF 技能提取某文件的表单字段”）。
- **在 Claude.ai 中使用**：示例技能已对 Claude.ai 的付费计划用户开放，用户也可按官方指南上传自定义技能。
- **在 Claude API 中使用**：开发者可通过 API 调用预置技能或上传自定义技能。
- **创建自定义技能**：复制仓库中的 `template` 文件夹，修改 `SKILL.md` 中的 YAML 元数据及 Markdown 指令内容即可。

## 限制与注意事项

- **免责声明**：仓库中的技能仅供演示和教育目的。Claude 的实际实现和行为可能与这些示例有所不同。
- **生产环境风险**：在将技能用于关键任务之前，必须在用户自己的环境中进行充分测试。
- **协议限制**：部分核心文档技能（位于 `skills/docx`、`skills/pdf` 等目录）仅为源码可见（Source-available），并非开源协议，使用或借鉴时需注意合规性。

## 链接

- 项目主页：https://github.com/anthropics/skills
- Agent Skills 标准：http://agentskills.io
- 什么是技能：https://support.claude.com/en/articles/12512176-what-are-skills
- 在 Claude 中使用技能：https://support.claude.com/en/articles/12512180-using-skills-in-claude
- 如何创建自定义技能：https://support.claude.com/en/articles/12512198-creating-custom-skills
- Agent Skills 官方工程博客：https://anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
- Claude 文档能力介绍：https://www.anthropic.com/news/create-files
- Skills API 快速入门：https://docs.claude.com/en/api/skills-guide#creating-a-skill
- 合作伙伴技能示例 (Notion)：https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0

## 关联主题

- [[00-元语/skills]]
- [[00-元语/Agent]]
- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/Claude]]
- [[00-元语/cli]]
- [[00-元语/mcp]]
- [[00-元语/protocol]]
- [[00-元语/github]]
- [[00-元语/compliance]]
