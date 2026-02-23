---
title: "Open WebUI：自托管 AI 系统与多模型 RAG 集成中枢"

对象: "GitHub 开源项目"
发布日期: "2026-02-22"
项目: "`open-webui/open-webui`"
来源: "https://github.com/open-webui/open-webui/blob/main/LICENSE_HISTORY"
官网: "https://openwebui.com"
文档: "https://docs.openwebui.com"
项目创建时间: "2023-10-06"
主要语言: "Python"
最新版本快照: "`v0.8.3`（2026-02-17）"
最近提交: "`b8112d72b95e480f946f0688bed29321b61e65af`（2026-02-17）"
用户提供热度快照: "53720"
GitHub 星标快照: "124561（抓取日期：2026-02-22）"
许可证状态: "多许可证与品牌保留条款并存（GitHub API 字段：NOASSERTION）"
---

## 摘要

Open WebUI 是一个基于 Python 的自托管、可离线运行的 AI 平台，提供多模型接入、RAG 能力以及开箱即用的企业级认证与权限管理。

- 支持 `pip`、Docker、Kubernetes 等部署路径。
- 兼容 Ollama 与 OpenAI-compatible API 模型生态。
- 内置本地 RAG、网页检索增强、插件与 Pipelines 扩展框架。
- 提供 RBAC、用户组、LDAP/AD、SCIM、SSO 等企业能力，并集成 OpenTelemetry。

## 功能与定位

Open WebUI 的定位是面向团队与个人的 AI 交互与应用承载平台。它把模型接入、对话界面、检索增强、权限体系与观测能力整合在一个可自托管系统中，帮助用户快速构建私有化 AI 使用环境。

## 典型使用场景

- 企业内网部署统一的 AI 入口，满足权限隔离和账号体系对接需求。
- 在离线或受限网络环境中运行本地模型并进行日常问答。
- 基于本地文档库和网页检索构建 RAG 型知识问答应用。
- 通过插件与 Pipelines 接入自定义业务逻辑与工具链。

## 核心功能

- 多模型兼容：支持 Ollama 与 OpenAI-compatible API。
- RAG 能力：支持本地文档检索与多向量数据库接入。
- 权限与认证：RBAC、用户组、LDAP/AD、SCIM、SSO。
- 扩展能力：插件体系与 Pipelines 框架。
- 观测能力：OpenTelemetry traces、metrics、logs。
- 部署形态：从单机容器到 Kubernetes 集群均可覆盖。

## 特色与差异点

- 强调自托管与离线可用，适合数据边界敏感场景。
- 在同类开源 AI 面板中较早整合了较完整的企业身份与权限能力。
- 同时兼顾模型接入、知识检索、扩展开发与生产可观测性。

## 使用方式概览

1. 按场景选择部署方式：`pip`、Docker 或 Kubernetes。
2. 配置模型后端：Ollama 或 OpenAI-compatible API。
3. 按需启用 RAG、权限控制、企业认证与观测能力。
4. 生产使用前结合 releases、文档与许可证条款完成评估。

## 限制与注意事项

- 项目存在多许可证与品牌保留条款，不能简单按常见宽松协议理解。
- LICENSE 中包含对 Open WebUI branding 的约束，涉及二次分发或品牌修改时需重点核对。
- README 明确要求结合 `LICENSE` 与 `LICENSE_HISTORY` 理解不同历史贡献的适用条款。
- 指标会随时间变化，你提供的 `53720` 与本次抓取 `124561` 属于不同时间快照。

## 链接

- 仓库主页：https://github.com/open-webui/open-webui
- README：https://github.com/open-webui/open-webui/blob/main/README.md
- 发布页：https://github.com/open-webui/open-webui/releases
- 许可证：https://github.com/open-webui/open-webui/blob/main/LICENSE
- 许可证历史：https://github.com/open-webui/open-webui/blob/main/LICENSE_HISTORY
- 官网：https://openwebui.com
- 文档：https://docs.openwebui.com

## 关联主题

- [[00-元语/tool]]
- [[00-元语/self-hosting]]
- [[00-元语/rag]]
- [[00-元语/AI]]
- [[00-元语/observability]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/security]]
- [[00-元语/compliance]]
