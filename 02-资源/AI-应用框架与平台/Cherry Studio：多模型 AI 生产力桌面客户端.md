---
title: "Cherry Studio：多模型 AI 生产力桌面客户端"

发布日期: "2026-02-22"
对象: "GitHub 项目 `CherryHQ/cherry-studio`"
项目主页: "https://github.com/CherryHQ/cherry-studio"
官方网站: "https://cherry-ai.com"
官方文档: "https://docs.cherry-ai.com"
开源协议: "GNU AGPLv3"
主要语言: "TypeScript"
统计快照: "Stars 40021，Forks 3686，Watchers 177（抓取时间：2026-02-22）"
版本快照: "最新 release `v1.7.19`，发布时间 `2026-02-14`"
备注: "用户提供“28752”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

### 一句话总结
Cherry Studio 是一款跨平台的 AI 桌面客户端，通过统一接口集成多家大语言模型、300+ 预置助手及 MCP 扩展，旨在提升多模态交互、文档处理与代码开发的生产力。

### 核心要点
- **全平台支持**：提供适用于 Windows、Mac 和 Linux 系统的原生桌面客户端。
- **多模型协同**：支持接入多家 LLM 提供商，允许在同一对话中调用不同模型进行交互与对比。
- **海量内置助手**：内置超过 300 个预配置的 AI 助手，并支持用户创建自定义助手以处理垂直领域任务。
- **多模态与文档处理**：具备解析和处理文本、图像、Office 文档及 PDF 文件的能力。
- **代码与可视化支持**：内置代码智能体（Code Agent），支持 Markdown 渲染、代码高亮以及 Mermaid 图表可视化。
- **高扩展性架构**：基于 TypeScript 开发的模块化架构，支持小程序（Mini-program）和 MCP（Model Context Protocol）服务器接入。
- **数据安全**：内置 WebDAV 备份功能，保障用户本地数据安全。

### 风险与不足
- **开源协议限制**：项目采用 GNU AGPL-3.0 协议，对代码的修改与网络分发具有严格的开源传染性要求。
- **功能尚未完善**：部分核心功能（如完整的插件系统）目前仍处于路线图（Roadmap）规划阶段，尚未落地。
- **版本差异**：项目存在企业版（Enterprise Edition），在功能或服务支持上可能与当前的开源社区版存在差异。

## 功能与定位

Cherry Studio 的定位是“AI 生产力工作室”桌面客户端，强调在单一应用中整合多模型接入、智能聊天、助手体系、文档处理和开发辅助能力，降低多服务切换成本。

## 典型使用场景

- 在同一界面管理并切换多家 LLM 供应商的模型。
- 使用预置或自定义助手处理写作、分析、翻译、开发等任务。
- 在对话中结合多格式资料（文本、图片、Office、PDF）进行问答与整理。
- 借助 Code Agent、Markdown 和 Mermaid 完成技术讨论与内容产出。

## 核心功能

- 多供应商模型接入与多模型并行对话。
- 300+ 内置助手与自定义助手机制。
- 多格式文档与数据处理能力。
- WebDAV 备份、主题与界面自定义。
- MCP server 与小程序扩展能力。

## 特色与差异点

- 桌面端优先，面向日常生产力场景而非单一聊天入口。
- 功能覆盖聊天、知识处理、开发辅助、扩展生态等多个层面。
- 文档体系同时提供英文与中文结构化文档（`docs/en`、`docs/zh`）。
- 项目迭代频率较高，release 连续更新。

## 使用方式概览

1. 从官网或 GitHub Releases 获取对应系统安装包。
2. 启动后配置模型供应商凭据或接入本地模型。
3. 选择内置助手或创建自定义助手开始任务。
4. 按需启用 WebDAV 备份、MCP server 或其他扩展能力。

## 限制与注意事项

- AGPLv3 对二次分发与网络服务化场景有合规要求，商用前需评估许可证义务。
- 企业版与社区版在能力边界上可能不同，选型时需核对官方说明。
- 路线图中的功能不等于已稳定可用，落地前建议以当前 release 文档为准。

## 链接

- 仓库：https://github.com/CherryHQ/cherry-studio
- 官网：https://cherry-ai.com
- 文档：https://docs.cherry-ai.com
- README：https://raw.githubusercontent.com/CherryHQ/cherry-studio/main/README.md
- 文档仓库入口：https://raw.githubusercontent.com/CherryHQ/cherry-studio/main/docs/README.md
- Releases：https://github.com/CherryHQ/cherry-studio/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/desktop-client]]
- [[00-元语/multimodal]]
- [[00-元语/mcp]]
- [[00-元语/productivity]]
- [[00-元语/github]]
- [[00-元语/compliance]]
