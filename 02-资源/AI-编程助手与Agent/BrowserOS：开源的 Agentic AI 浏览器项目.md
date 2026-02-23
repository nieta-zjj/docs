---
title: "BrowserOS：开源的 Agentic AI 浏览器项目"
对象: "GitHub 项目"
项目主页: "https://github.com/browseros-ai/BrowserOS"
Stars快照: "9429"
官方网站: "https://BrowserOS.com"
主要语言: "C++"
开源协议: "AGPL-3.0"
---

## 摘要

**1) 一句话总结**
BrowserOS 是一款基于 Chromium 的开源（AGPL-3.0）隐私优先浏览器，原生集成 AI 智能体以实现网页自动化、多模型交互及本地文件协同。

**2) 核心要点**
*   **项目基础**：基于 C++ 开发，采用 AGPL-3.0 开源协议，截至 2026 年 2 月 23 日拥有 9432 Stars 和 905 Forks。
*   **隐私与定位**：定位为 ChatGPT Atlas 等商业产品的隐私优先替代方案，专注纯粹的 AI 体验（无加密货币或 VPN 等附加功能），确保数据保留在本地。
*   **模型支持**：支持配置云端 API Keys（Claude、OpenAI、Gemini），也可通过 Ollama 和 LMStudio 接入完全本地化的模型。
*   **自动化与工作流**：原生运行 AI 智能体，内置可视化工作流构建器，支持设置按天或按分钟的定时任务，并能结合本地文件系统生成报告（Cowork 功能）。
*   **MCP 服务器集成**：可作为 MCP 服务器运行并提供 31 个工具，允许开发者通过 `claude-code` 等命令行客户端直接控制浏览器。
*   **多模型对比（LLM Hub）**：提供统一的聊天界面，支持在任意网页上同时调用并对比多个主流大语言模型的回答。
*   **无缝迁移**：保留 Chrome 一致的 UI，支持导入 Chrome 数据，且完全兼容现有的 Chrome 扩展程序。
*   **内置广告拦截**：支持 Manifest V2，并内置 uBlock Origin 以实现广告拦截。
*   **跨平台支持**：提供 macOS、Windows 和 Linux（AppImage 及 Debian 包）的安装版本。

**3) 风险与不足**
*   项目目前仍处于 Beta 阶段，可能存在不稳定性。
*   部分隐私增强功能依赖于第三方 `ungoogled-chromium` 项目的补丁。

## 功能与定位
BrowserOS 是一款基于 Chromium 分支的开源浏览器，其核心定位是原生运行 AI 智能体（Agent）。该项目旨在将 AI 自动化能力深度集成到本地浏览器中，解决传统浏览器标签页繁杂、缺乏自动化辅助的问题。它被设计为 ChatGPT Atlas、Perplexity Comet 和 Dia 的隐私优先替代方案，确保用户的浏览数据和交互历史保留在本地。

## 典型使用场景
*   **日常网页浏览**：作为常规浏览器使用，无缝兼容现有的 Chrome 扩展程序。
*   **网页自动化操作**：让 AI 自动处理日常繁琐任务，如在线购物下单或表单填写。
*   **网络调研与数据抓取**：利用 AI 智能体在网页上抓取数据，并结合本地文件系统生成并保存调研报告。
*   **多模型对比测试**：在同一网页内并排调用并对比 Claude、ChatGPT 和 Gemini 的回答。
*   **开发者终端控制**：开发者可通过命令行工具（如 `claude-code`）直接控制浏览器执行任务。

## 核心功能
*   **原生 AI 智能体**：AI 智能体直接在浏览器本地运行，支持自动化执行各类网页交互。
*   **灵活的模型支持**：用户可配置自己的 API Keys（支持 Claude、OpenAI、Gemini），或通过 Ollama 和 LMStudio 接入本地模型。
*   **MCP 服务器集成**：BrowserOS 可作为 MCP（Model Context Protocol）服务器运行，提供 31 个工具，允许 `claude-code`、`gemini-cli` 等 MCP 客户端控制浏览器。
*   **可视化工作流（Workflows）**：内置图形化构建器，用于创建和管理可重复的浏览器自动化流程。
*   **协同工作（Cowork）**：支持将浏览器自动化与本地文件操作相结合。
*   **定时任务（Scheduled Tasks）**：支持设置 AI 智能体按天或按分钟频率自动运行。
*   **LLM Hub**：提供统一的聊天界面，可在任意网页上同时与多个主流大语言模型进行交互。
*   **内置广告拦截**：支持 Manifest V2，并内置 uBlock Origin 以提供广告拦截功能。

## 特色与差异点
*   **隐私优先**：与将浏览历史用于广告或模型训练的商业产品不同，BrowserOS 强调数据不出本地，支持完全本地化的模型运行。
*   **零学习成本迁移**：保留了与 Chrome 一致的用户界面，支持导入 Chrome 数据，且所有 Chrome 扩展均可正常工作。
*   **纯粹的 AI 焦点**：相比于 Brave 浏览器，BrowserOS 不包含加密货币、VPN 等附加功能，专注于 AI 驱动的浏览体验。
*   **完全开源**：采用 AGPL-3.0 协议，避免了闭源浏览器（如 Arc）可能带来的停更或数据锁定风险。

## 使用方式概览
1.  **安装**：项目提供 macOS、Windows 和 Linux（AppImage 及 Debian 包）的 Beta 版本。
2.  **数据迁移**：用户可选择导入原有的 Chrome 浏览器数据。
3.  **配置 AI**：连接云端 AI 提供商（输入 API Key）或启动本地模型（如 Ollama）。
4.  **运行**：配置完成后即可开始使用 AI 智能体进行网页自动化操作。

## 限制与注意事项
*   项目目前处于 Beta 阶段。
*   部分隐私增强功能依赖于 `ungoogled-chromium` 项目的补丁。

## 链接

- 仓库：https://github.com/browseros-ai/BrowserOS
- 官网：https://BrowserOS.com

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/sdk]]
