---
title: "LangSmith 正式上线 Google Cloud Marketplace"

来源: "https://blog.langchain.com/langsmith-is-now-available-in-google-cloud-marketplace/"
发布日期: "2026-02-09"
---

## 摘要

**1) 一句话总结**
LangChain 旗下的智能体工程平台 LangSmith 已正式上线 Google Cloud Marketplace，为企业客户提供简化的采购流程、统一计费服务以及与 Google Cloud 生态系统的深度集成。

**2) 关键要点**
*   **采购与财务优势**：通过 Google Cloud Marketplace 采购可实现统一计费，简化供应商管理，且费用可直接抵扣现有的 Google Cloud 承诺消费额度。
*   **四大核心功能**：LangSmith 提供全面的可观测性（实时监控与调试）、评估（A/B 测试与持续反馈）、部署（管理有状态智能体及 30 多个 API 端点）以及无代码智能体构建器（Agent Builder）。
*   **模型与计算集成**：原生支持 Vertex AI 及最新的 Gemini 3 Pro 和 Flash 等 200 多种模型；其全托管 SaaS 服务运行在 Google Kubernetes Engine (GKE) 等 GCP 基础设施上。
*   **数据与工具生态**：原生集成 AlloyDB、BigTable、BigQuery、Spanner 等 Google 数据库（用于向量存储和聊天记录），并支持调用 Google Drive、Finance 和 Trends 等工具。
*   **灵活的部署选项**：为满足企业安全与合规需求，提供全托管 SaaS、数据保留在客户 VPC 的混合部署，以及在 GKE 上完全自托管（使用 Helm 和 Terraform）三种模式。
*   **深化战略合作**：此次上线是双方长期合作的延伸，此前双方已在 Gemini 模型集成、Agent2Agent (A2A) 协议及数据库 MCP 工具箱等项目上展开密切合作。

## 正文

今天，我们非常高兴地宣布，LangChain 旗下的智能体工程平台 LangSmith 已正式登陆 Google Cloud Marketplace。Google Cloud 客户现在可以通过现有的 Google Cloud 账户直接采购 LangSmith，从而实现无缝计费、简化采购流程，并能够直接抵扣现有的 Google Cloud 承诺消费额度。

LangSmith 已经受到顶尖工程团队的信任，致力于为复杂的智能体工作流（Agentic workflows）带来可靠性与可视化。此次上线 Marketplace 深化了我们与 Google Cloud 的长期合作关系。LangSmith 的 SaaS 服务运行在 Google Cloud 基础设施之上，并且 LangChain 在 Gemini 模型集成、Agent2Agent (A2A) 协议以及数据库 MCP 工具箱等项目上与 Google 进行了密切合作。LangSmith 登陆 Google Cloud Marketplace 是帮助我们共同的客户构建、测试和部署生产级 AI 应用程序的自然之举。

### LangSmith 的核心优势

LangSmith 为企业团队提供了一个统一的平台，用于调试、测试、部署和监控 AI 应用程序。其核心功能涵盖可观测性、评估、提示词工程和部署：

*   **可观测性 (Observability)**
    LangSmith 通过详细的追踪和实时监控，提供对应用程序行为的深度可视化。工程团队可以检查和调试单个交互，为关键指标配置警报，并跟踪随时间变化的趋势。这一可观测性层有助于企业团队保持智能体行为的可审计性和可解释性。
*   **评估 (Evaluation)**
    LangSmith 能够轻松评估应用程序的性能，支持部署前测试以及对生产环境流量的持续反馈。团队可以运行实验来比较提示词或模型的更改，通过标注队列收集人类反馈，并组织可复用的数据集以跟踪长期性能。这有助于团队捕获回归问题并不断迭代以提高质量。
*   **部署 (Deployment)**
    LangSmith Deployment（前身为 LangGraph Platform）提供了部署、扩展和管理有状态、长时间运行的智能体所需的基础设施。团队可以通过一键式 GitHub 集成在几分钟内完成部署，通过 30 多个 API 端点暴露智能体，并可选择 SaaS、混合或完全自托管选项以满足合规性要求。
*   **智能体构建器 (Agent Builder)**
    使用 LangSmith Agent Builder，无需编写代码即可在几分钟内构建强大的 AI 智能体。从现成的模板开始，连接您已在使用的应用程序，让您的智能体处理起草电子邮件、总结更新和组织信息等日常任务。您可以直接在聊天中或通过 Slack 等工具与智能体协作，随时随地获取帮助。借助内置的审批工作流，您可以掌控最重要的操作。这是一种完全按照您的需求运作的自动化体验。

### 无缝集成 Google Cloud

LangChain 提供了与 Google Cloud 服务集成的丰富生态系统，使 GCP 客户能够完全在其云环境中轻松构建 AI 应用程序：

*   **Vertex AI & Gemini：** 针对 Gemini 模型提供一流的支持（使用最新的 Gemini 3 Pro 和 Flash），并可访问 Vertex AI Model Garden 中的 200 多种模型（包括 Claude、Llama 和 Mistral）。
*   **数据库：** 原生集成 AlloyDB for PostgreSQL、BigTable、BigQuery、Spanner、Firestore 以及 Memorystore，用于向量存储、文档加载和聊天记录管理。
*   **计算：** 提供全托管的 SaaS 服务，LangChain 托管并运营所有使用 Google Kubernetes Engine (GKE) 等 GCP 服务构建的 LangSmith 基础设施和服务。
*   **工具：** 支持从 Google Finance 查询财务数据，与 Google Drive 中的文档交互，以及从 Google Trends 搜索趋势。

这些集成意味着 GCP 客户可以充分利用其现有的数据和基础设施投资，同时通过 LangSmith 获得全面的可观测性和控制力。

### 为何通过 Google Cloud Marketplace 采购 LangSmith？

通过 Google Cloud Marketplace 采购 LangSmith 为企业团队带来了显著优势：

*   **统一计费：** 所有 LangSmith 费用都会显示在您现有的 Google Cloud 账单上，简化了供应商管理和财务报告。
*   **抵扣承诺消费额度：** 购买 LangSmith 的费用可计入您的 Google Cloud 承诺消费额度，帮助您最大化现有云投资的价值。
*   **简化采购流程：** 由于 Google Cloud 已经是您获批的供应商，团队可以加快采购周期并减少管理开销。

LangSmith 提供多种部署配置以满足您的安全和合规要求：从全托管的 SaaS（已在 Google Cloud 基础设施上运行），到数据保留在您的 VPC 中的混合部署，再到使用我们的 Helm charts 和 Terraform 模块在 GKE 上完全自托管。

### 快速入门

准备好为您在 Google Cloud 上的 AI 应用程序带来可靠性、可视化和控制力了吗？

*   前往 Google Cloud Marketplace 获取 LangSmith。
*   联系销售团队讨论您的企业需求。

### 关于 LangChain

LangChain 提供开发者快速交付可靠智能体所需的智能体工程平台和开源框架。我们的开源框架 LangGraph 和 LangChain 帮助开发者以极快的速度和细粒度的控制力构建智能体，而 LangSmith 则为快速迭代提供可观测性、评估和部署功能。LangChain 受到全球数百万开发者以及 Klarna、Clay、Cloudflare 和 Cisco 等 AI 团队的信任，提供了一套集成的工具集，致力于将 LLM 系统转化为可靠的生产体验。

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/observability]]
- [[00-元语/evals]]
- [[00-元语/gemini]]
- [[00-元语/mcp]]
- [[00-元语/self-hosting]]
