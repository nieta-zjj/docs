---
title: "Generative AI for Beginners：微软 21 课生成式 AI 入门课程"

发布日期: "2026-02-22"
对象: "GitHub 项目 `microsoft/generative-ai-for-beginners`"
项目主页: "https://github.com/microsoft/generative-ai-for-beginners"
开源协议: "MIT License"
主要语言: "Jupyter Notebook"
统计快照: "Stars 106740，Forks 57197，Watchers 943（抓取时间：2026-02-22）"
版本快照: "Releases 0 条（抓取时间：2026-02-22）"
备注: "用户提供“29370”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

**1) 一句话总结**
微软开源的《生成式 AI 初学者教程》通过 21 节理论与实践相结合的系统性课程，教授开发者使用 Python 和 TypeScript 从零构建生成式 AI 应用程序。

**2) 核心要点**
- **项目背景**：由微软官方出品，采用 MIT 开源协议，主要基于 Jupyter Notebook 进行教学。
- **课程体系**：包含 1 节环境配置指南和 21 节正式课程，内容划分为“学习（Learn）”与“构建（Build）”两大类。
- **技术覆盖广**：涵盖生成式 AI 基础、提示词工程、RAG（检索增强生成）、函数调用、AI 智能体（Agents）、模型微调，以及 AI 应用的 UX 设计与安全生命周期管理。
- **双语代码示例**：课程中的实操代码尽可能同时提供 Python 和 TypeScript 两种编程语言版本。
- **多模型与接口支持**：支持接入 Azure OpenAI Service、GitHub Marketplace 模型目录以及 OpenAI API，并介绍了开源模型及小语言模型（SLM）。
- **高度本地化**：项目提供多达 54 种语言的翻译版本，包含完整的简体中文（zh-CN）翻译及目录结构。
- **灵活的开发环境**：官方推荐使用 GitHub Codespaces 快速启动云端开发，同时提供详细的本地虚拟环境和容器化配置指南。

**3) 风险与不足**
- **外部 API 依赖**：运行课程中的代码示例必须依赖外部大模型服务，学习者需要自行准备并配置受支持的 API 密钥（如 Azure OpenAI 或 OpenAI API）。

## 功能与定位

`generative-ai-for-beginners` 的定位是面向初学者的系统化教学仓库，目标是让学习者从概念理解到代码实践，完整经历生成式 AI 应用的入门路径。

## 典型使用场景

- 作为个人或团队的生成式 AI 入门训练材料。
- 作为课程/社群学习的统一教材与练习仓库。
- 作为 Python/TypeScript 双栈示例库，用于快速对照不同实现方式。
- 作为企业内训或技术分享的章节化参考（按主题拆分学习）。

## 核心功能

- 课程结构化：`00` 环境配置 + `01` 到 `21` 主题课程，覆盖学习与构建两类。
- 主题完整性：从基础认知、提示词工程到 RAG、Agents、微调、模型家族对比。
- 代码实践导向：课程说明强调尽可能同时提供 Python 与 TypeScript 示例。
- 运行路径明确：README 给出 Azure OpenAI、GitHub Marketplace Model Catalog、OpenAI API 三类接入路径。
- 多语言支持：`translations/` 目录含 54 种语言，并提供 `zh-CN` 完整 README。

## 特色与差异点

- 微软官方“for-beginners”系列项目，内容组织偏课程化与可复用。
- 章节粒度清晰，适合按周学习或按主题跳读。
- 同时提供概念讲解、代码练习、视频链接与延伸学习入口。
- 对新手友好：含 Codespaces、本地、容器等多种环境搭建方案。

## 使用方式概览

1. Fork 仓库并准备学习环境（推荐先看 `00-course-setup/README.md`）。
2. 选择运行方式：Codespaces 或本地环境。
3. 配置模型服务密钥（Azure OpenAI / GitHub Marketplace Model Catalog / OpenAI API）。
4. 按课程目录顺序学习，或按主题跳转到目标章节。
5. 在每课的示例代码基础上做改造与扩展。

## 限制与注意事项

- 代码运行依赖外部模型服务，通常需要可用 API Key 和对应配额。
- 课程覆盖范围广，章节深度不完全一致；进阶落地仍需结合官方文档与生产实践。
- 仓库当前无 release 版本节奏，变更主要通过主分支提交持续演进。

## 链接

- 仓库：https://github.com/microsoft/generative-ai-for-beginners
- README：https://raw.githubusercontent.com/microsoft/generative-ai-for-beginners/main/README.md
- 课程环境配置：https://raw.githubusercontent.com/microsoft/generative-ai-for-beginners/main/00-course-setup/README.md
- 中文 README：https://raw.githubusercontent.com/microsoft/generative-ai-for-beginners/main/translations/zh-CN/README.md
- 课程目录：https://github.com/microsoft/generative-ai-for-beginners/tree/main
- 翻译目录：https://github.com/microsoft/generative-ai-for-beginners/tree/main/translations

## 关联主题

- [[00-元语/learning-resource]]
- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/prompt]]
- [[00-元语/typescript]]
- [[00-元语/OpenAI]]
