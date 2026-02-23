---
title: "AionUi：开源多 agent 协作桌面应用（Gemini CLI、Claude Code、Codex、OpenCode）"

对象: "GitHub 开源项目"
来源: "https://github.com/iOfficeAI/AionUi/wiki/WebUI-Configuration-Guide"
开源协议: "Apache-2.0"
支持平台: "macOS、Windows、Linux"
版本快照: "截至 2026-02-22，发布页显示最新版本为 `v1.8.15`"
---

## 摘要

AionUi 是一款开源的 AI 智能体协作应用，核心定位是“本地可控的 Cowork 平台”，支持内置 agent、多 agent 接入与 24/7 自动化任务。

- 项目形态：桌面应用为主，强调本地使用与跨平台部署。
- 核心能力：内置零配置 agent、多 agent 自动检测接入、MCP 工具统一管理。
- 生态兼容：可接入 Gemini CLI、Claude Code、Codex、OpenCode、Qwen Code、OpenClaw 等 CLI agent。
- 模型接入：支持自有 API Key、多云模型后端以及本地模型路径（如 Ollama、LM Studio）。
- 自动化与远程：支持 Cron 定时任务与 WebUI/聊天渠道远程访问。

## 功能与定位

AionUi 的定位不是单一聊天客户端，而是让多个 AI agent 在同一工作空间中并行协作的 Cowork 平台。其重点是把“模型调用、工具能力、任务自动化、远程访问”整合到同一套交互界面中。

## 典型使用场景

- 在本地设备上让内置 agent 执行文件处理、文档生成、代码辅助等任务。
- 将已安装的 CLI agent（如 Claude Code、Codex、Gemini CLI）统一接入一个界面并行协作。
- 为日常重复任务配置定时调度，实现无人值守运行。
- 通过 WebUI 或聊天渠道进行远程触发与查看任务结果。

## 核心功能

- 内置 agent：安装后可直接使用，无需先安装外部 CLI。
- 多 agent 模式：自动检测并接入本机已安装的 CLI agent。
- MCP 统一管理：一次配置后可复用于多个 agent 工作流。
- 定时任务：支持基于 Cron 的计划任务自动执行。
- 多模型后端：支持云端模型与本地模型混合使用。
- 多端访问：桌面端结合 WebUI/聊天渠道扩展远程可用性。

## 特色与差异点

- 低门槛与高扩展并存：新手可直接使用内置 agent，进阶用户可叠加外部 CLI agent 生态。
- 本地优先：强调本地工作目录与本地模型能力，适合需要数据可控的场景。
- 工作流导向：围绕任务执行、文件处理、调度与协作，而非仅对话式交互。

## 使用方式概览

- 安装应用后先使用内置 agent 完成基础任务。
- 按文档配置 API Key 或本地模型后端。
- 若本机已安装 CLI agent，可开启多 agent 模式统一管理。
- 根据需要开启定时任务与远程访问能力。

## 限制与注意事项

- 应用能力与模型能力分离：实际效果取决于所接入模型与密钥额度。
- 自动化与文件访问涉及较高权限，生产使用前应明确目录与操作边界。
- 远程访问与聊天渠道集成依赖额外配置，需妥善管理访问令牌与凭据。
- Stars/Forks/版本为页面快照值，后续会动态变化。

## 链接

- 仓库主页：https://github.com/iOfficeAI/AionUi
- 中文说明：https://github.com/iOfficeAI/AionUi/blob/main/readme_ch.md
- 发布页：https://github.com/iOfficeAI/AionUi/releases
- 入门指南：https://github.com/iOfficeAI/AionUi/wiki/Getting-Started
- LLM 配置：https://github.com/iOfficeAI/AionUi/wiki/LLM-Configuration
- 多 agent 配置：https://github.com/iOfficeAI/AionUi/wiki/ACP-Setup
- MCP 配置：https://github.com/iOfficeAI/AionUi/wiki/MCP-Configuration-Guide
- WebUI 配置：https://github.com/iOfficeAI/AionUi/wiki/WebUI-Configuration-Guide
- 许可证：https://github.com/iOfficeAI/AionUi/blob/main/LICENSE

## 关联主题

- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/cli]]
- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
- [[00-元语/workflow]]
- [[00-元语/desktop-client]]
- [[00-元语/gemini]]
- [[00-元语/Claude]]
- [[00-元语/Codex]]
- [[00-元语/github]]
