---
title: evolution-api：Evolution API is an open 开发工具
对象: GitHub 仓库
仓库: https://github.com/EvolutionAPI/evolution-api
官方文档: https://doc.evolution-api.com
许可证: Apache-2.0（含附加条款）
---

## 摘要

Evolution API 是一个基于 Node.js 的消息集成 API 平台，支持 WhatsApp 多种连接模式，并可对接客服系统、AI 服务与消息队列。

- 同时支持基于 Baileys 的 WhatsApp Web 连接与 Meta 官方 WhatsApp Cloud API。
- 可集成 Typebot、Chatwoot、Dify、OpenAI，并支持 RabbitMQ、Kafka、SQS、WebSocket、Webhook 等事件通道。
- 提供 Docker 镜像与文档站，便于部署与接口联调。
- 提供 Evolution API Lite，面向更轻量的微服务连接场景。

## 功能与定位

Evolution API 最初面向 WhatsApp 控制场景，当前定位是多平台消息服务与集成 API。它用于统一接入消息通道、事件分发与外部系统联动，适合需要把会话、机器人、客服与自动化流程整合到同一服务层的团队。

## 典型使用场景

- 在客服体系中对接 Chatwoot，承接企业会话处理。
- 对接 Typebot 或 Dify，构建自动化对话与触发流程。
- 把消息事件推送到 Kafka、RabbitMQ、SQS 或 WebSocket 消费端，用于实时处理。
- 结合 OpenAI 能力处理语音转文本等 AI 增强场景。

## 核心功能

- 多连接模式：支持 Baileys 方案与 WhatsApp Cloud API。
- 多集成能力：支持 Chatwoot、Typebot、Dify、OpenAI、N8N 等。
- 事件分发：支持 Webhook 与多消息队列通道。
- 媒体与存储：支持对接 Amazon S3 与 Minio 存储媒体文件。
- 多租户与联系人处理：支持按实例隔离与联系人筛选。

## 特色与差异点

- 同时覆盖“免费网页协议路线”和“官方商业 API 路线”，便于按成本与稳定性分层选型。
- 官方提供 Lite 版本，强调微服务连接场景下的轻量与性能。
- 版本迭代中持续增强事件可观测性与第三方集成能力。

## 使用方式概览

- 通过官方 Docker 镜像部署服务。
- 按业务选择 Baileys 或 Cloud API 连接模式。
- 根据下游系统接入 Webhook、WebSocket 或消息队列。
- 通过官方文档与 Postman 集合进行接口调试与联调。

## 限制与注意事项

- LICENSE 在 Apache-2.0 基础上声明了附加条款，尤其涉及前端标识与闭源系统中的使用声明要求。
- 基于 WhatsApp Web 的连接方式在稳定性和能力边界上可能与官方 Cloud API 不同。
- Cloud API 使用需遵循 Meta 政策，并可能产生按消息量计费。
- 项目说明中提到存在遥测能力，用于收集路由与版本使用信息。

## 链接

1. https://github.com/EvolutionAPI/evolution-api
2. https://doc.evolution-api.com
3. https://hub.docker.com/r/evoapicloud/evolution-api
4. https://github.com/EvolutionAPI/evolution-api/blob/main/CHANGELOG.md
5. https://github.com/EvolutionAPI/evolution-api/blob/main/SECURITY.md
6. https://github.com/EvolutionAPI/evolution-api/blob/main/LICENSE
7. https://github.com/EvolutionAPI/evolution-api-lite

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/security]]
- [[00-元语/PostgreSQL]]
