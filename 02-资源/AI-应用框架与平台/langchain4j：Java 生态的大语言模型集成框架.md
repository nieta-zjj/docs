---
title: "langchain4j：Java 生态的大语言模型集成框架"
对象: "GitHub 项目"
项目主页: "https://github.com/langchain4j/langchain4j"
Stars快照: "10804"
官方网站: "https://docs.langchain4j.dev"
主要语言: "Java"
开源协议: "Apache-2.0"
---

## 摘要

**1) 一句话总结**
LangChain4j 是一个基于 Apache-2.0 协议开源的 Java 库，旨在通过提供统一的 API 和丰富的 AI 工具箱，简化大语言模型（LLM）及 RAG 系统在企业级 Java 应用中的集成。

**2) 关键要点**
*   **项目背景**：始于 2023 年初，融合了 LangChain、Haystack 等项目的核心理念，专为填补 Java 生态中的 LLM 框架空白而打造。
*   **统一 API 接口**：屏蔽了底层专有 API 差异，目前已支持 20 多家主流 LLM 提供商（如 OpenAI、Google Vertex AI）以及 30 多种向量数据库（如 Pinecone、Milvus）。
*   **核心 AI 工具箱**：内置提示词模板、聊天记忆管理、函数/工具调用（包含对 MCP 的支持），并提供开箱即用的 Agents 和 RAG 抽象接口。
*   **企业级框架集成**：提供专属依赖，可无缝接入 Spring Boot、Quarkus、Helidon 或 Micronaut 等主流 Java 框架。
*   **高度可插拔**：开发者可以在不重写业务代码的情况下，极低成本地切换和评估不同的 LLM 提供商或向量数据库。
*   **典型应用场景**：快速构建 AI 聊天机器人、开发从数据摄入到检索的完整 RAG 流水线，以及企业应用智能化改造。
*   **开发资源**：通过 Maven 引入 `dev.langchain4j` 依赖即可使用，官方维护了 `langchain4j-examples` 仓库提供大量实战代码，并配有实验性文档聊天机器人辅助查询。

**3) 风险与不足**
*   该库目前仍处于积极开发阶段，部分功能仍在持续迭代和完善中（尽管核心功能已就绪可直接使用）。

## 功能与定位
LangChain4j 是一个开源的 Java 库，旨在简化大语言模型（LLM）在 Java 应用程序中的集成。该项目始于 2023 年初，旨在填补 Java 生态中缺乏类似 Python 和 JavaScript LLM 框架的空白。它融合了 LangChain、Haystack、LlamaIndex 等项目的核心理念与社区经验，并加入了自身的创新，为开发者提供了一套实用且统一的 API。

## 典型使用场景
*   **构建 AI 聊天机器人**：利用内置的聊天记忆管理和提示词模板快速搭建对话系统。
*   **开发 RAG（检索增强生成）系统**：构建从数据摄入到检索的完整流水线。
*   **多模型与多数据库实验**：在不重写业务代码的情况下，快速切换和评估不同的 LLM 提供商或向量数据库。
*   **企业级 Java 应用智能化**：在现有的 Spring Boot、Quarkus、Helidon 或 Micronaut 项目中无缝接入 AI 能力。

## 核心功能
*   **统一的 API 接口**：屏蔽了不同底层服务的专有 API 差异。目前支持 20 多家主流 LLM 提供商（如 OpenAI、Google Vertex AI）以及 30 多种嵌入存储/向量数据库（如 Pinecone、Milvus）。
*   **全面的 AI 工具箱**：
    *   底层能力：提示词模板（Prompt templating）、聊天记忆管理、函数/工具调用（包含对 MCP 的支持）。
    *   高层模式：开箱即用的 Agents 和 RAG 抽象接口及实现。
*   **企业级框架无缝集成**：提供针对主流 Java 框架的专属依赖和集成方案。

## 特色与差异点
*   **专为 Java 打造**：为 Java 开发者提供原生的 LLM 开发体验，避免跨语言调用的复杂性。
*   **高度抽象与可插拔**：为每种 AI 抽象概念提供统一接口及多种基于常见技术的即用型实现，切换成本极低。
*   **丰富的示例支持**：官方维护了专门的示例仓库，涵盖纯 Java 以及结合 Quarkus、Spring Boot、Helidon、Micronaut 等框架的实战代码。

## 使用方式概览
*   开发者可通过 Maven 等构建工具引入 `dev.langchain4j` 相关依赖。
*   通过官方提供的 `langchain4j-examples` 仓库，可以获取针对不同框架（Plain Java, Quarkus, Spring Boot 等）的初始化代码和使用范例。
*   官方提供了一个实验性的文档聊天机器人，辅助开发者查询使用方法。

## 限制与注意事项
*   该库目前仍处于积极开发阶段，部分功能仍在持续迭代和完善中，但核心功能已经就绪，可直接用于构建 LLM 应用。

## 链接

- 仓库：https://github.com/langchain4j/langchain4j
- 官网：https://docs.langchain4j.dev

## 关联主题

- [[00-元语/AI]]
- [[00-元语/workflow]]
- [[00-元语/github]]
- [[00-元语/sdk]]
- [[00-元语/rag]]
