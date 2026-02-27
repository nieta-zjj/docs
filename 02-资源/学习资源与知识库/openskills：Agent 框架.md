---
title: openskills：Agent 框架
对象类型: GitHub 项目
项目主页: https://github.com/numman-ali/openskills
来源: GitHub README、Releases、package.json
许可证: Apache-2.0
最近版本: v1.5.0
版本发布日期: 2026-01-17
---

## 摘要

openskills 是一个面向 AI 编程助手的通用技能加载器，用统一的 `SKILL.md` 与 `AGENTS.md` 机制，把 Anthropic 的技能体系扩展到 Claude Code、Cursor、Windsurf、Aider、Codex 等多种 Agent 环境。它强调按需加载（progressive disclosure），减少上下文噪音，并支持从 GitHub、本地目录、私有仓库安装与维护技能。

## 功能与定位

openskills 的定位是“跨 Agent 的技能安装与读取层”。它不替代具体模型或编排平台，而是统一技能文件的安装、索引与调用方式，让不同 Agent 可以复用同一套技能资产。

项目核心能力包括：
- 安装技能：支持 Anthropic 技能仓库、任意 GitHub 仓库、本地目录、私有 Git 仓库。
- 同步技能索引：生成与 Claude Code 兼容的 `<available_skills>` XML 片段并写入 `AGENTS.md`。
- 读取技能：通过 CLI 按需读取技能内容，避免一次性加载全部技能说明。
- 管理生命周期：支持列出、更新、移除技能，以及交互式管理。

## 典型使用场景

- 在多种编程 Agent 并行使用时，维护一套统一技能库。
- 团队私有知识与流程以 `SKILL.md` 方式沉淀，并通过私有仓库分发。
- 在项目内版本化技能目录，使技能随代码库一起演进。
- 在需要控制上下文长度的任务中按需读取技能，降低提示词负担。

## 特色与差异点

- 与 Claude Code 技能格式兼容：沿用 `SKILL.md` 与 `<available_skills>` 结构。
- 提供 `--universal` 模式：可优先安装到 `.agent/skills/`，减少与 `.claude/skills/` 的目录冲突。
- 纯文件与 CLI 方案：与 MCP 这类偏“动态工具协议”的路径不同，openskills 更适合静态技能说明与资源分发。
- 支持本地开发链路：可结合本地目录或符号链接迭代技能。

## 使用方式概览

常见流程是先安装技能，再同步索引，最后由 Agent 按需读取：
- 安装：`openskills install <source>`
- 同步：`openskills sync`
- 读取：`openskills read <skill-name>`

对于多 Agent 项目，可用 `--universal` 将技能目录统一到 `.agent/skills/`。

## 限制与注意事项

- 运行环境要求 Node.js 20.6+ 与 Git。
- 项目声明“实现 Anthropic Agent Skills 规范”，但并非 Anthropic 官方项目。
- 技能内容质量取决于技能作者；落地时仍需团队自行做术语与安全边界校验。

## 链接

- 仓库主页：https://github.com/numman-ali/openskills
- README：https://raw.githubusercontent.com/numman-ali/openskills/main/README.md
- Releases：https://github.com/numman-ali/openskills/releases
- npm：https://www.npmjs.com/package/openskills

## 相关文档

- [[02-资源/AI-编程助手与Agent/Anthropic Skills：Claude Code 可复用技能仓库|Anthropic Skills：Claude Code 可复用技能仓库]]；关联理由：上下游；说明：openskills 面向 Anthropic Skills 规范做跨 Agent 安装与索引，二者是上游规范与下游分发关系。
- [[02-资源/学习资源与知识库/everything-claude-code：Claude Code 资源与实践汇总|everything-claude-code：Claude Code 资源与实践汇总]]；关联理由：解说；说明：该资源汇总覆盖 Claude Code 技能生态，可补充 openskills 的实际接入与维护场景。

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/skills]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/mcp]]
- [[00-元语/workflow]]
