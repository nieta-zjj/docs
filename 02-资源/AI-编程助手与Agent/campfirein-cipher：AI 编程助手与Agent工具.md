---
title: "campfirein-cipher：AI 编程助手与Agent工具"

发布日期: "2026-02-22"
来源: "https://github.com/campfirein/cipher"
发现评分: "100"
Stars: "3529"
---

## 摘要

**1) 一句话总结**
Byterover Cipher 是一款专为编程智能体（Coding Agents）设计的开源记忆层工具，通过 MCP 协议为各类主流 AI 编程助手和编辑器提供底层的记忆支持。

**2) 核心要点**
* **产品定位**：专为编程智能体打造的开源记忆层（Memory Layer）工具。
* **核心功能**：为 AI 编程助手提供专用的记忆管理能力，辅助 AI 编程过程。
* **通信协议**：作为底层记忆组件，通过 MCP（Model Context Protocol）协议与外部工具进行对接与通信。
* **广泛兼容**：支持市面上绝大多数主流 AI 编程工具、代码编辑器及终端客户端。
* **支持工具列表**：兼容 Cursor、Codex、Claude Code、Windsurf、Cline、Claude Desktop、Gemini CLI、AWS Kiro、VS Code、Roo Code、Trae、Amp Code 以及 Warp。
* **开源与资源**：项目代码完全开源，相关资源可通过其 GitHub 仓库（campfirein/cipher）及开发者网站（byterover.dev）获取。

## 功能与定位

Byterover Cipher 是一个专门为编程智能体（Coding Agents）打造的开源记忆层（Memory Layer）工具。

## 典型使用场景

作为底层记忆组件，通过 MCP（Model Context Protocol）协议与各类 AI 编程助手、代码编辑器及终端工具集成，为 AI 编程过程提供记忆支持。

## 核心功能

- **编程 Agent 记忆层**：为 AI 编程助手提供专用的记忆管理能力。
- **多平台协议支持**：通过 MCP 协议实现与外部工具的对接与通信。

## 特色与差异点

- **开源属性**：项目代码开源。
- **广泛的生态兼容性**：支持市面上绝大多数主流 AI 编程工具与客户端，包括 Cursor、Codex、Claude Code、Windsurf、Cline、Claude Desktop、Gemini CLI、AWS Kiro、VS Code、Roo Code、Trae、Amp Code 以及 Warp。

## 使用方式概览

通过 MCP（Model Context Protocol）协议，将其接入到受支持的 AI 编程工具或代码编辑器中配合使用。

## 链接

- GitHub 仓库：https://github.com/campfirein/cipher
- 开发者网站：https://byterover.dev/

## 相关文档

- [[02-资源/AI-编程助手与Agent/CaviraOSS-OpenMemory：AI 编程助手与Agent工具|CaviraOSS-OpenMemory：AI 编程助手与Agent工具]]；关联理由：观点一致；说明：两者都定位为 AI 编程助手与 Agent 的记忆层，重点都是长期上下文持久化。
- [[02-资源/AI-编程助手与Agent/doobidoo-mcp-memory-service：AI 编程助手与Agent工具|doobidoo-mcp-memory-service：AI 编程助手与Agent工具]]；关联理由：观点一致；说明：两者都通过可集成组件为 Agent 提供持久化记忆能力，解决多轮开发中的上下文丢失。
- [[02-资源/AI-编程助手与Agent/GreatScottyMac-context-portal：AI 编程助手与Agent工具|GreatScottyMac-context-portal：AI 编程助手与Agent工具]]；关联理由：上下游；说明：Context Portal 侧重项目知识图谱记忆库，可与 Cipher 这类通用记忆层在 MCP 开发链路中互补。

## 关联主题

- [[00-元语/memory]]
- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/ide]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/context-database]]
- [[00-元语/cli]]
