---
title: claude-code-action：AI Agent 工具
对象: GitHub Action
来源: anthropics/claude-code-action
项目主页: https://github.com/anthropics/claude-code-action
---

## 摘要

claude-code-action 是一个运行在 GitHub Actions 环境中的 AI Agent 工具，面向 PR 与 Issue 场景提供问答、代码审查、代码修改与自动化执行能力。它基于上下文自动识别触发模式，支持结构化 JSON 输出、进度跟踪、多云模型接入与可扩展配置，适合把代码协作流程和仓库维护任务嵌入现有 CI/CD。使用时需重点关注权限边界、密钥管理、提示注入风险和日志暴露风险。

## 功能与定位

claude-code-action 是一个通用型 GitHub 自动化工具，核心定位是在仓库工作流中引入可控的 AI Agent 执行能力。它支持在 PR 和 Issue 语境中响应触发词、读取上下文、执行分析或修改，并把结果回写到 GitHub 协作流。

## 典型使用场景

- 自动化 PR 代码审查
- Issue 分类、打标与问题分流
- 基于代码变更的文档同步
- 定时仓库维护与健康检查
- CI 失败分析与排障辅助

## 特色与差异点

- 支持上下文感知的模式检测，可根据触发事件自动选择执行方式
- 支持结构化输出，可通过 JSON Schema 产出可被后续 Action 直接消费的结果
- 支持多种模型接入路径，包括 Anthropic API、Amazon Bedrock、Google Vertex AI、Microsoft Foundry
- 提供进度跟踪能力，可在单条评论中动态更新任务状态
- 配置方式聚焦 `prompt` 与 `claude_args`，便于与 Claude Code SDK 使用习惯对齐

## 使用方式概览

- 在仓库工作流中引入 `anthropics/claude-code-action@v1`
- 配置触发事件，如 `issue_comment`、`pull_request_review_comment`、`issues`、`pull_request_review`
- 通过 GitHub Secrets 提供鉴权信息（如 `ANTHROPIC_API_KEY` 或 OAuth Token）
- 按需设置 `prompt`、`claude_args`、`additional_permissions`、`settings` 等参数
- 在评论或 Issue 流程中通过触发词（默认 `@claude`）触发执行

## 限制与注意事项

- 不能提交正式 PR Review 状态，不能 Approve PR
- 默认通过更新单条评论反馈进度与结果，不是多评论对话模式
- 默认不开放任意命令执行能力，需要显式配置工具权限
- 不会自动创建 PR 合并流程，通常由人类确认后手动推进
- 必须避免在工作流中硬编码密钥，统一使用 GitHub Secrets
- 对外部不受信任输入需防范提示注入与隐藏内容绕过
- `show_full_output` 或调试模式可能暴露敏感日志，需按最小暴露原则启用

## 链接

- https://github.com/anthropics/claude-code-action
- https://claude.ai/code
- https://github.com/anthropics/claude-code-base-action
- https://github.com/apps/claude

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/workflow]]
- [[00-元语/tool]]
