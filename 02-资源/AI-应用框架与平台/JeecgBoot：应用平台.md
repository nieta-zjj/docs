---
title: "JeecgBoot：应用平台"
对象: "GitHub 仓库 jeecgboot/JeecgBoot"
项目主页: "https://github.com/jeecgboot/JeecgBoot"
官方文档: "https://help.jeecg.com"
开源协议: "Apache License 2.0"
最新版本: "v3.9.1"
版本发布日期: "2026-01-28"
来源: "README.md、README.en-US.md、README-AI.md、GitHub Releases"
记录日期: "2026-02-26"
---

## 摘要

- JeecgBoot 是一款开源的企业级 AI 低代码平台，核心是把 AI 智能体能力与低代码开发能力整合到同一套应用平台中。
- 项目支持在线表单、流程设计、报表与大屏、权限体系，以及 AIGC 应用管理、RAG 知识库、多模型接入和 AI 流程编排。
- 平台覆盖单体与微服务两类架构，适合用于企业系统建设与 AI 能力落地，但落地时应按模块分步评估。

## 功能与定位

JeecgBoot 在官方 README 中定位为企业级 AI 低代码平台，强调“AI 生成 -> 在线编码 -> 代码生成 -> 手工合并”的研发模式。项目围绕企业应用开发提供低代码能力，并在同一平台内提供 AI 应用管理、知识库问答和流程编排能力。

核心能力可归纳为两层：
- 低代码层：在线表单、流程设计、报表与大屏、权限控制、代码生成。
- AI 层：AI 应用管理、AI 模型管理、AI 知识库（RAG）、AI 对话与 AI 流程编排。

## 典型使用场景

- 企业信息系统快速开发：SaaS、MIS、OA、ERP、CRM 等。
- 企业知识库问答：基于文档导入构建 RAG 问答能力。
- 业务系统 AI 增强：将 AI 对话或流程能力嵌入已有系统。
- 分阶段架构演进：先单体落地，后按需求扩展到微服务。

## 特色与差异点

- AI 与低代码一体化：不是单独的 AI 应用层，而是与表单、流程、报表等低代码能力同平台协同。
- 双架构支持：README 提供单体与微服务模式的启动入口与文档。
- 全栈技术路线清晰：后端基于 Java + Spring Boot 3.x + Spring Cloud Alibaba，前端基于 Vue3 + TypeScript + Vite6。
- 模块覆盖面广：除 AI 模块外，还包含权限、流程、报表和组织管理等企业常用基础能力。

## 使用方式概览

1. 先阅读仓库 README 与官方文档，确认单体或微服务部署路径。
2. 根据业务范围先选用基础模块（权限、表单、流程、报表）。
3. 再按需求接入 AI 模块（模型管理、知识库、流程编排、聊天应用）。
4. 在 PoC 或试点阶段优先做模块化验证，再逐步扩展到生产场景。

## 限制与注意事项

- 前端运行环境有明确要求：Node.js 20+、pnpm 9+。
- 仓库默认提供 MySQL 脚本，其他数据库通常需要参考官方转库文档处理。
- 功能面较宽（低代码 + AI + 报表 + 流程 + 微服务），生产落地应避免一次性全量接入。
- 本文档仅用于定位与选型，不替代官方部署文档与版本说明。

## 链接

- 仓库主页：https://github.com/jeecgboot/JeecgBoot
- 中文 README：https://github.com/jeecgboot/JeecgBoot/blob/master/README.md
- 英文 README：https://github.com/jeecgboot/JeecgBoot/blob/master/README.en-US.md
- AI 专题 README：https://github.com/jeecgboot/JeecgBoot/blob/master/README-AI.md
- Releases：https://github.com/jeecgboot/JeecgBoot/releases
- License：https://github.com/jeecgboot/JeecgBoot/blob/master/LICENSE
- 官方文档：https://help.jeecg.com
- AIGC 文档：https://help.jeecg.com/aigc

## 关联主题

- [[00-元语/github]]
- [[00-元语/AI]]
- [[00-元语/workflow]]
- [[00-元语/llm]]
- [[00-元语/rag]]
