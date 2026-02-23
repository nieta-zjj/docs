---
title: "MarkItDown：多格式内容转 Markdown 的 Python 工具"

对象: "Git 项目"
发布日期: "2026-02-22"
项目仓库: "https://github.com/microsoft/markitdown"
项目创建时间: "2024-11-13"
开源协议: "MIT License"
主要语言: "Python"
用户提供热度快照: "41966"
GitHub 检索星标: "87491；抓取日期：2026-02-22；来源：`https://api.github.com/search/repositories?q=repo:microsoft/markitdown`"
---

## 摘要

MarkItDown 是由微软开源的轻量级 Python 工具，专门用于将多种格式的文件和多媒体资源转换为 Markdown，旨在为大语言模型和文本分析流水线提供高效、结构化的数据预处理支持。

## 功能与定位

MarkItDown 的核心定位是把异构内容统一转成适合机器处理的 Markdown。它强调保留标题、列表、表格、链接等结构信息，服务对象主要是 LLM 与自动化文本处理流程，而不是追求视觉还原度最高的排版转换。

## 典型使用场景

- 为 RAG、Agent、知识抽取流程准备结构化输入。
- 将 Office 文档、PDF、网页和多媒体内容统一清洗为 Markdown 语料。
- 在需要 MCP 集成的桌面或服务端应用中提供文档转换能力。
- 在数据处理流水线中作为预处理模块，降低后续解析复杂度。

## 核心功能

- 支持 PDF、Word、PowerPoint、Excel、HTML、EPub、CSV、JSON、XML 等常见格式。
- 支持图片 OCR 与 EXIF 元数据提取。
- 支持音频转录及相关元数据处理。
- 支持 ZIP 内容遍历转换与 YouTube 字幕抓取。
- 支持第三方插件扩展及 `markitdown-mcp` 组件集成。

## 特色与差异点

- 面向机器解析优化，强调结构信息保真。
- 使用可选依赖分组机制，便于按需安装能力。
- 提供 CLI、Python API、Docker 三种使用路径。
- 与 Azure Document Intelligence 和 LLM 客户端可组合使用。

## 使用方式概览

1. 在 Python 3.10+ 环境中安装 MarkItDown。
2. 按需启用格式依赖、插件或 MCP 组件。
3. 通过命令行或 Python API 执行转换并输出 Markdown。

## 限制与注意事项

- 项目更偏向机器可读性，不保证人类阅读场景下的高保真排版。
- 0.1.0 版本引入了破坏性变更，旧项目升级时需检查接口和依赖配置。
- 处理特定格式或高级能力时，需额外安装对应可选依赖。

## 链接

- GitHub：https://github.com/microsoft/markitdown
- PyPI：https://pypi.org/project/markitdown/
- README：https://raw.githubusercontent.com/microsoft/markitdown/main/README.md
- MCP 子项目：https://github.com/microsoft/markitdown/tree/main/packages/markitdown-mcp
- Azure Document Intelligence 指南：https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/how-to-guides/create-document-intelligence-resource?view=doc-intel-4.0.0

## 关联主题

- [[00-元语/tool]]
- [[00-元语/markdown]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/mcp]]
- [[00-元语/ocr]]
- [[00-元语/asr]]
- [[00-元语/multimodal]]
- [[00-元语/cli]]
- [[00-元语/data-pipeline]]
- [[00-元语/ETL]]
- [[00-元语/github]]
