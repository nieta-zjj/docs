---
title: "介绍 Amazon Bedrock 中智能体的有状态运行时环境"
发布日期: 2026-02-27
作者: "OpenAI Team"
来源: "OpenAI"
原文链接: "https://openai.com/index/introducing-the-stateful-runtime-environment-for-agents-in-amazon-bedrock"
译注: "根据原文翻译整理"
---

## 摘要

**1) 一句话总结**
OpenAI 与 Amazon 合作，在 Amazon Bedrock 中推出了由 OpenAI 模型驱动的原生有状态运行时环境，旨在通过自动管理上下文和状态，简化并加速复杂 AI 智能体多步工作流的生产部署。

**2) 关键点**
*   **产品发布**：OpenAI 与 Amazon 联合推出在 Amazon Bedrock 中原生运行的全新有状态运行时环境（Stateful Runtime Environment）。
*   **底层驱动**：该环境由 OpenAI 模型驱动，并针对 AWS 基础设施及智能体工作流进行了专门优化。
*   **解决无状态痛点**：免去了开发团队手动构建编排层以处理状态存储、工具调用、错误处理及长时间任务恢复的繁重工作。
*   **自动化上下文管理**：智能体可自动执行复杂步骤并保留“工作上下文”，包括内存/历史记录、工具与工作流状态、环境使用以及身份/权限边界。
*   **加速投产时间**：运行时接管了跨步骤的持久编排和状态管理，使团队能够专注核心业务逻辑而非底层脚手架。
*   **支持长周期任务**：专为长时间可靠运行设计，能够延续多步执行所需的上下文和控制边界。
*   **原生部署与治理**：直接在客户的 AWS 环境内部运行，轻松兼容现有的安全态势、工具集成和治理规则。
*   **适用场景**：有助于解锁多系统客户支持、销售运营、内部 IT 自动化及带有审批和审计的财务流程等复杂用例。
*   **可用性**：该功能目前处于“即将推出”状态。

## 正文

AI 智能体擅长推理。更困难的部分在于运营：随着时间的推移，在真实的工具和真实的系统中，以正确的控制方式可靠地运行多步工作。

今天，我们通过与 Amazon 的合作及联合协作，为客户简化了这一过程，推出了**在 Amazon Bedrock 中原生运行的全新有状态运行时环境（Stateful Runtime Environment）。** AWS 客户将能够访问由 OpenAI 模型驱动的运行时环境，该环境针对 AWS 基础设施进行了优化，并为智能体工作流量身定制，具备生产工作所需的状态、可靠性和治理能力。

##### 简化智能体投入生产的过程

许多基于无状态 API 的智能体原型解决的是简单的用例：一个提示词，一个回答，也许还有一次工具调用。生产工作则不同。真实的工作流在多个步骤中展开，需要之前操作的上下文，依赖于多个工具的输出、审批和系统状态，并且需要在安全环境中建立可信的护栏。

无状态 API 需要为智能体构建支持性的编排层。开发团队需要承担弄清楚状态如何存储、工具如何调用、错误如何处理以及长时间运行的任务如何安全恢复的重担。

有状态运行时环境是为减轻这种负担而联合设计的。它**在您的 AWS 环境内部**运行，并经过优化以与 AWS 服务协同工作。现在，您的智能体不再需要手动拼接断开的请求来使事情运转，而是自动执行复杂的步骤，并带有“工作上下文”，该上下文会延续内存/历史记录、工具和工作流状态、环境使用以及身份/权限边界。

##### 这将解锁什么

现在，交付多系统客户支持、销售运营工作流、内部 IT 自动化以及带有审批和审计的财务流程等解决方案比以往任何时候都更容易。

##### 加快多步工作流的投产时间

当运行时处理跨步骤的持久编排和状态时，团队可以专注于工作流和业务逻辑，而不是脚手架。

##### 更适合长周期工作

有状态任务旨在随着时间的推移可靠地运行，延续多步执行所需的上下文和控制边界。

##### AWS 原生部署与治理

该运行时旨在客户的 AWS 环境内运行，以轻松遵守现有的安全态势、工具集成和治理规则。

**开始使用**

Amazon Bedrock 中的有状态运行时即将推出。如果您想探索这将如何使您的 AI 之旅受益，请联系您的 OpenAI 团队或请求与我们联系。

名字*

姓氏*

电子邮件*

电话号码*

公司名称*

公司规模*

您能分享更多关于您的业务需求和挑战的信息吗？

最多 500 个字符

*

名字

*

姓氏

*

电话（表单填写）：

*

工作电子邮件

*

公司规模

*

公司名称

*

您能分享更多关于您的业务需求和挑战的信息吗？

*

运营选择加入：

- [x]

作者

继续阅读

![Image 1: Scaling AI for everyone > Cover](https://images.ctfassets.net/kftzwdyauwt9/fP8Ew5sXGzLJ6U6EEbFr0/abe21d4c326bb0ad1020e9bdee5b19ec/one_platfrom-1.png?w=3840&q=90&fm=webp)

![Image 2: microsoft > cover](https://images.ctfassets.net/kftzwdyauwt9/6t70beUwBvhVWleb7B268I/57f6d18653e0f62027e90355d7a57243/Microsoft_Oct_Hero_1x1.png?w=3840&q=90&fm=webp)

![Image 3: Amazon > Card](https://images.ctfassets.net/kftzwdyauwt9/KnGPrCMI6RRSrpeLqMi5G/7cf83bc7e73df70949e3f5020a5c8b86/Amazon-1.png?w=3840&q=90&fm=webp)

我们的研究

最新进展

安全

ChatGPT

Sora

API 平台

企业服务

公司

支持

更多

条款与政策

[（在新窗口中打开）](https://x.com/OpenAI)[（在新窗口中打开）](https://www.youtube.com/OpenAI)[（在新窗口中打开）](https://www.linkedin.com/company/openai)[（在新窗口中打开）](https://github.com/openai)[（在新窗口中打开）](https://www.instagram.com/openai/)[（在新窗口中打开）](https://www.tiktok.com/@openai)[（在新窗口中打开）](https://discord.gg/openai)

OpenAI © 2015–2026 管理 Cookie

英语 美国

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/OpenAI]]
