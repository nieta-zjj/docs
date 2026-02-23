---
title: "Junie：JetBrains 的 LLM-agnostic coding agent"

对象: "网站产品与文档"
来源: "https://junie.jetbrains.com/cli"
产品状态: "EAP"
---

## 摘要

Junie 是 JetBrains 推出的一款处于 EAP 阶段、与大语言模型解耦的编程智能体，支持在终端、CI/CD 流水线及 GitHub/GitLab 等平台中辅助自动化软件开发。

- 模型解耦：官方定位为 LLM-agnostic，并展示 GPT、Claude、Gemini、Grok 等模型系列支持。
- 多场景运行：支持终端交互、CI/CD headless 模式，以及 JetBrains IDE 场景。
- 终端交互能力：支持 slash commands，并可通过 `@` 附加项目上下文。
- CI/CD 集成：提供 GitHub Action 与 GitLab CI/CD 工作流接入路径。
- 认证机制：支持 JetBrains 账户、`JUNIE_API_KEY` 与 BYOK。
- 安装方式：文档展示 npm、Homebrew 等安装通道。

- EAP 阶段：能力和策略仍可能变化。
- 可用性差异：模型与功能可用范围可能受账户、地区或配置影响。
- headless 依赖鉴权：在流水线场景运行需要有效 Token。

## 功能与定位

Junie 的核心定位是“用于真实开发流程的 coding agent”，重点不在单一 IDE 插件，而是覆盖终端、IDE 与 CI/CD 的统一智能体执行路径。

## 典型使用场景

- 在本地终端中执行开发任务、代码修改与审查。
- 在 CI/CD 中以 headless 方式执行自动化检查、修复与提交流程。
- 在 GitHub/GitLab 中通过 issue、PR/MR 评论触发智能体任务。

## 核心功能

- 交互式 CLI：面向终端工作流的任务执行与上下文附加。
- Headless 模式：支持脚本化调用和流水线自动执行。
- GitHub Action：支持触发词、参数化配置、输出参数、MCP 扩展等能力。
- GitLab CI/CD：支持 @junie 触发任务并创建 MR，覆盖托管与自托管场景。
- 多种认证：JetBrains 登录、API Key、BYOK 可组合使用。

## 特色与差异点

- 以模型解耦为核心卖点，减少对单一模型供应商的绑定。
- 同时覆盖交互式开发与流水线自动化两个使用平面。
- 由 JetBrains 产品体系提供文档、支持与 issue 追踪入口。

## 使用方式概览

- 按文档完成 CLI 安装并在项目根目录启动。
- 按账号或 API Key 完成认证，再分配首个任务。
- 在需要自动化的仓库中接入 GitHub Action 或 GitLab CI/CD 工作流。

## 限制与注意事项

- 当前属于 EAP 阶段，使用前需确认 `tos-eap` 条款。
- 文档中列出的模型与能力属于官方声明范围，不等于所有环境默认可用。
- 在 CI/CD 与 headless 场景下，需要妥善管理鉴权 Token 与仓库权限边界。

## 链接

- 官网：https://junie.jetbrains.com/
- 文档总览：https://junie.jetbrains.com/docs/
- CLI 快速开始：https://junie.jetbrains.com/docs/junie-cli.html
- Headless 模式：https://junie.jetbrains.com/docs/junie-headless.html
- GitHub Action：https://junie.jetbrains.com/docs/junie-on-github.html
- GitLab CI/CD：https://junie.jetbrains.com/docs/junie-gitlab-ci-cd.html
- CLI 入口：https://junie.jetbrains.com/cli
- EAP 条款：https://junie.jetbrains.com/tos-eap

## 关联主题

- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/ide]]
- [[00-元语/CI]]
- [[00-元语/jetbrains]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/github]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
