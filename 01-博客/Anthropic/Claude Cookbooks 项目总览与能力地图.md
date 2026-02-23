---
title: "Claude Cookbooks 项目总览与能力地图"

发布日期: "2025-12-18"
作者: "Anthropic"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/blob/main/README.md"
译注: "原文为英文仓库文档，本稿为中文整理版。"
---

## 摘要

**1) 一句话摘要**
Claude Cookbooks 是一个为开发者提供的资源库，包含使用 Claude 构建应用的可复制代码片段和指南，涵盖基础文本处理、工具调用、多模态能力及第三方集成等丰富示例。

**2) 关键要点**
*   **核心目的**：提供实用的代码和指南，帮助开发者轻松将 Claude 集成到自有项目中。
*   **前置条件**：需要获取 Claude API 密钥；示例代码主要使用 Python 编写，但核心概念适用于任何支持 API 交互的编程语言。
*   **基础功能**：提供文本分类、检索增强生成（RAG）和高效文本摘要的具体实现技术。
*   **工具与第三方集成**：包含将 Claude 与外部工具（如计算器、SQL 查询、客服代理）及第三方服务（如 Pinecone 向量数据库、维基百科、Voyage AI Embeddings）集成的代码示例。
*   **多模态能力**：涵盖视觉功能（解读图表、提取表单文本）以及结合 Stable Diffusion 进行图像生成的最佳实践。
*   **高级技巧**：提供包括子代理（Haiku 配合 Opus 使用）、PDF 解析上传、自动化提示词评估、强制 JSON 模式输出、内容审核过滤器及提示词缓存（Prompt caching）的指南。
*   **社区贡献**：鼓励开发者参与贡献（提交想法、修复错别字或添加新指南），建议通过 GitHub issues 页面分享新想法。
*   **学习与附加资源**：推荐新手学习 Claude API 基础课程，并提供 Anthropic 官方文档、Discord 社区以及 AWS 基础设施上的 Claude 部署示例链接。

**3) 风险/缺口**
*   在使用附加资源中的 AWS 示例时，部分代码可能需要进行修改才能与 Claude 达到最佳的配合效果。
*   在参与社区贡献时存在重复劳动的风险，官方明确要求在贡献前需检查现有的 issues 和 pull requests。

## 正文

Claude Cookbooks 提供旨在帮助开发者使用 Claude 进行构建的代码和指南，并提供可复制的代码片段，您可以轻松将其集成到自己的项目中。

## 先决条件

为了充分利用本 cookbook 中的示例，您需要一个 Claude API 密钥（在[此处](https://www.anthropic.com)免费注册）。

虽然代码示例主要使用 Python 编写，但这些概念可以适用于任何支持与 Claude API 交互的编程语言。

如果您是 Claude API 的新手，我们建议您从我们的 [Claude API 基础课程](https://github.com/anthropics/courses/tree/master/anthropic_api_fundamentals)开始，以打下坚实的基础。

## 进一步探索

正在寻找更多资源来提升您使用 Claude 和 AI 助手的体验？请查看以下有用的链接：

- [Anthropic 开发者文档](https://docs.claude.com/claude/docs/guide-to-anthropics-prompt-engineering-resources)
- [Anthropic 支持文档](https://support.anthropic.com)
- [Anthropic Discord 社区](https://www.anthropic.com/discord)

## 贡献

Claude Cookbooks 的蓬勃发展离不开开发者社区的贡献。我们非常重视您的参与，无论是提交想法、修复错别字、添加新指南，还是改进现有指南。通过您的贡献，您可以帮助使这一资源对每个人都更有价值。

为了避免重复劳动，请在贡献之前查看现有的 issues 和 pull requests。

如果您对新的示例或指南有任何想法，请在 [issues 页面](https://github.com/anthropics/anthropic-cookbook/issues)上分享。

## 示例目录

### 功能特性 (Capabilities)
- [分类](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification): 探索使用 Claude 进行文本和数据分类的技术。
- [检索增强生成](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/retrieval_augmented_generation): 学习如何利用外部知识增强 Claude 的回复。
- [摘要生成](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/summarization): 了解使用 Claude 进行高效文本摘要的技术。

### 工具使用与集成 (Tool Use and Integration)
- [工具使用](https://github.com/anthropics/anthropic-cookbook/tree/main/tool_use): 学习如何将 Claude 与外部工具和函数集成以扩展其功能。
  - 客户服务代理（`https://github.com/anthropics/anthropic-cookbook/blob/main/tool_use/customer_service_agent.ipynb`）
  - 计算器集成（`https://github.com/anthropics/anthropic-cookbook/blob/main/tool_use/calculator_tool.ipynb`）
  - SQL 查询（`https://github.com/anthropics/anthropic-cookbook/blob/main/misc/how_to_make_sql_queries.ipynb`）

### 第三方集成 (Third-Party Integrations)
- [检索增强生成](https://github.com/anthropics/anthropic-cookbook/tree/main/third_party): 使用外部数据源补充 Claude 的知识。
  - 向量数据库 (Pinecone)（`https://github.com/anthropics/anthropic-cookbook/blob/main/third_party/Pinecone/rag_using_pinecone.ipynb`）
  - 维基百科（`https://github.com/anthropics/anthropic-cookbook/blob/main/third_party/Wikipedia/wikipedia-search-cookbook.ipynb`）
  - 网页（`https://github.com/anthropics/anthropic-cookbook/blob/main/misc/read_web_pages_with_haiku.ipynb`）
- [使用 Voyage AI 生成 Embeddings](https://github.com/anthropics/anthropic-cookbook/blob/main/third_party/VoyageAI/how_to_create_embeddings.md)

### 多模态能力 (Multimodal Capabilities)
- [Claude 视觉功能](https://github.com/anthropics/anthropic-cookbook/tree/main/multimodal): 
  - 图像处理入门（`https://github.com/anthropics/anthropic-cookbook/blob/main/multimodal/getting_started_with_vision.ipynb`）
  - 视觉功能最佳实践（`https://github.com/anthropics/anthropic-cookbook/blob/main/multimodal/best_practices_for_vision.ipynb`）
  - 解读图表和图形（`https://github.com/anthropics/anthropic-cookbook/blob/main/multimodal/reading_charts_graphs_powerpoints.ipynb`）
  - 从表单中提取内容（`https://github.com/anthropics/anthropic-cookbook/blob/main/multimodal/how_to_transcribe_text.ipynb`）
- 使用 Claude 生成图像（`https://github.com/anthropics/anthropic-cookbook/blob/main/misc/illustrated_responses.ipynb`）: 将 Claude 与 Stable Diffusion 结合使用以生成图像。

### 高级技巧 (Advanced Techniques)
- 子代理 (Sub-agents)（`https://github.com/anthropics/anthropic-cookbook/blob/main/multimodal/using_sub_agents.ipynb`）: 学习如何将 Haiku 作为子代理与 Opus 结合使用。
- 向 Claude 上传 PDF（`https://github.com/anthropics/anthropic-cookbook/blob/main/misc/pdf_upload_summarization.ipynb`）: 解析 PDF 并将其作为文本传递给 Claude。
- 自动化评估（`https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building_evals.ipynb`）: 使用 Claude 自动化提示词 (prompt) 评估过程。
- 启用 JSON 模式（`https://github.com/anthropics/anthropic-cookbook/blob/main/misc/how_to_enable_json_mode.ipynb`）: 确保 Claude 输出一致的 JSON 格式。
- 创建审核过滤器（`https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building_moderation_filter.ipynb`）: 使用 Claude 为您的应用程序创建内容审核过滤器。
- 提示词缓存 (Prompt caching)（`https://github.com/anthropics/anthropic-cookbook/blob/main/misc/prompt_caching.ipynb`）: 学习使用 Claude 进行高效提示词缓存的技术。

## 附加资源

- [AWS 上的 Anthropic](https://github.com/aws-samples/anthropic-on-aws): 探索在 AWS 基础设施上使用 Claude 的示例和解决方案。
- [AWS 示例](https://github.com/aws-samples/): 来自 AWS 的代码示例集合，可调整后与 Claude 配合使用。请注意，某些示例可能需要修改才能与 Claude 达到最佳配合效果。

## 相关文档

- [[01-博客/Anthropic/Claude Cookbooks 仓库开发规范|Claude Cookbooks 仓库开发规范]]；关联理由：上下游；说明：本篇是目录与能力地图，上述文档给出该仓库的贡献和实现规范，形成从总览到落地的上下游关系。
- [[01-博客/Anthropic/Claude Capabilities 指南与 Promptfoo 评测实践|Claude Capabilities 指南与 Promptfoo 评测实践]]；关联理由：解说；说明：该文对本篇列出的 capabilities 分组做了展开，并补充了评测方法与执行细节。
- [[01-博客/Anthropic/Voyage AI Embeddings 接入与检索实践|Voyage AI Embeddings 接入与检索实践]]；关联理由：引用；说明：本篇在 third_party 集成中明确列出 Voyage AI embeddings 条目，该文是对应的实作细化页。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/github]]
- [[00-元语/rag]]
- [[00-元语/multimodal]]
- [[00-元语/prompt]]
- [[00-元语/evals]]
- [[00-元语/tool]]
- [[00-元语/learning-resource]]
