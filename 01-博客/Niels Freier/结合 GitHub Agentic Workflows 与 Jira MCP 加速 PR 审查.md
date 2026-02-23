---
title: "结合 GitHub Agentic Workflows 与 Jira MCP 加速 PR 审查"
---

## 摘要

### 一句话总结
通过结合 GitHub Agentic Workflows 与共享的 MCP（模型上下文协议），该方案能自动从 Jira 和 Confluence 提取上下文并生成结构化的 PR 评论，从而消除手动查找背景信息的耗时，加速代码审查过程。

### 关键点
*   **核心技术**：使用 GitHub Agentic Workflows (gh-aw)，允许在 `.github/workflows/` 目录下通过纯 Markdown 文件和自然语言定义 AI 智能体。
*   **安全与执行**：智能体在 GitHub Actions 容器内沙盒化运行，遵循最小权限原则（默认只读，仅允许通过预先批准的安全渠道输出，如添加 PR 评论或标签）。
*   **共享集成 (MCP)**：通过定义共享的 Atlassian MCP 配置，实现 Jira 和 Confluence 的统一接入，代码库中的其他工作流可复用该接口（符合 DRY 原则）。
*   **触发与提取机制**：工作流在 PR 开启或标记为“准备审查”时触发，自动从 PR 标题、分支名（如 `feat/ABC-1234`）、描述或提交记录中提取 Jira 密钥。
*   **上下文抓取**：通过 MCP 工具自动获取 Jira 工单摘要、验收标准，以及关联 Confluence 页面中的设计决策、技术规范和明确的“超出范围”事项。
*   **自动化输出**：在 PR 提交后的 1-2 分钟内，自动发布包含业务背景、验收标准复选框、技术上下文和差距分析的结构化 PR 评论。
*   **模型无关性**：Markdown 工作流定义与底层 AI 模型解耦，支持接入 GitHub Copilot、Claude 或 OpenAI Codex。

### 风险与不足
*   **处于测试阶段**：gh-aw 目前明确处于 Beta 阶段，未来可能会发生重大变化，应用于关键任务前需谨慎评估。
*   **强依赖命名规范**：信息提取完全依赖于团队的分支命名或描述纪律，若未按规范包含 Jira 密钥，智能体将无法工作。
*   **受限于文档质量**：输出质量直接取决于现有的文档质量（垃圾进，垃圾出），若 Confluence 页面过时或内容稀少，生成的上下文也会缺乏价值。
*   **存在执行延迟**：冷启动的工作流在 PR 开启时存在几分钟的延迟，并非完全实时生成。

## 正文

[![Image 1](https://substackcdn.com/image/fetch/$s_!5FLR!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5c89df0-a89a-491c-8441-35e6bd58f9e7_1536x1024.png)](https://substackcdn.com/image/fetch/$s_!5FLR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5c89df0-a89a-491c-8441-35e6bd58f9e7_1536x1024.png)

每次审查 Pull Request (PR) 时，工程师都要付出一种“隐性税”。

在查看代码差异之前，你得像做考古一样：在 Jira 中翻找工单，点进 Confluence 寻找说明文档，并在脑海中拼凑出*为什么*要进行这项更改，然后才能对*如何*实现发表有用的意见。

顺利的话，这需要三分钟。

糟糕的话，你会发现 Confluence 页面最后一次更新是在六个月前，而工单里有 17 条评论，关键的上下文被埋没在中间。

我一直在尝试 [GitHub Agentic Workflows](https://github.github.io/gh-aw)（GitHub 智能体工作流），这是 GitHub Next 的一项新功能，允许你用纯 Markdown 文件定义由 AI 驱动的自动化流程。我构建了一个工作流，正好解决了上述问题。

它能自动从相关的 Jira 工单和关联的 Confluence 页面中提取上下文，从而丰富每个 PR 的信息。以下是它的工作原理，以及为什么我认为这种“持续 AI (Continuous AI)”将成为标准实践。

### 什么是 GitHub Agentic Workflows？

在深入细节之前，先做个简单介绍。

GitHub Agentic Workflows (gh-aw) 允许你在代码库的 `.github/workflows/` 目录下，将自主智能体定义为 Markdown 文件。

该框架负责沙盒执行、权限和安全输出：在这种模式下，智能体可以自由读取，但写入操作必须通过预先批准的、经过净化的渠道（例如创建 PR 评论、开启 Issue 或更新标签）。

智能体在 GitHub Actions 容器内运行。你可以将其与触发器（如 PR 开启、定时任务、添加标签）绑定，并在 Markdown 文件中用自然语言描述智能体应该做什么。在底层，`gh aw` CLI 会生成一个 `.lock.yml` 来运行实际的 Actions 工作流。你只需编写“做什么”，框架会处理“怎么做”。

你可以接入不同的 AI 引擎：GitHub Copilot、Claude 或 OpenAI Codex。Markdown 定义是与模型无关的。

这就是 GitHub Next 一直在孵化的“持续 AI”概念：不是按需手动调用的 AI，而是作为协作基础设施的一部分系统性运行的 AI，就像 CI/CD 一样。

### 共享的 MCP 配置

我构建的第一步是为 Atlassian 设置一个共享的 MCP（[模型上下文协议](https://modelcontextprotocol.io/docs/getting-started/intro)）配置。MCP 是一种协议，允许 AI 智能体通过标准化接口与外部工具对话。可以把它看作一个插件系统，无论底层运行的是哪个模型，任何智能体都可以使用它。

我的 `workflows/shared/mcp/atlassian.md` 文件声明了 Jira 和 Confluence 的 MCP 服务器配置，代码库中的其他工作流都可以引用它。大致如下：

```yaml
---
mcp-servers:
  atlassian:
    container: "ghcr.io/sooperset/mcp-atlassian"
    version: "latest"
    env:
      CONFLUENCE_URL: "https://${{vars.ATLASSIAN_INSTANCE}}.atlassian.net/wiki"
      CONFLUENCE_USERNAME: "${{vars.ATLASSIAN_EMAIL}}"
      CONFLUENCE_API_TOKEN: "${{ secrets.ATLASSIAN_TOKEN }}"
      JIRA_URL: "https://${{vars.ATLASSIAN_INSTANCE}}.atlassian.net"
      JIRA_USERNAME: "${{vars.ATLASSIAN_EMAIL}}"
      JIRA_API_TOKEN: "${{ secrets.ATLASSIAN_TOKEN  }}"
      JIRA_PROJECT: "${{vars.ATLASSIAN_PROJECT_KEY}}"
      CONFLUENCE_SPACE: "${{vars.ATLASSIAN_PROJECT_KEY}}"
    allowed: ["*"]
---

## Atlassian MCP Server

Shared configuration for Jira and Confluence access.
Provides tools for reading issues, fetching linked pages,
and retrieving acceptance criteria and design specs.
```

这里的关键在于**共享**。你不需要将凭证和服务器配置复制粘贴到每个需要访问 Atlassian 的工作流中，只需定义一次并引用即可。这是应用于 AI 智能体的基础设施思维：DRY（不要重复自己）原则同样适用于此，而不仅仅是应用程序代码。

### 核心工作流：PR 上下文丰富器

主工作流文件才是真正有趣的地方。以下是 `.github/workflows/pr_atlassian_enricher.md` 的简化版本：

```yaml
---
on:
  pull_request:
    types: [opened, ready_for_review]

permissions:
  contents: read
  pull-requests: read

network:
  allowed:
    - defaults
    - "${{vars.ATLASSIAN_INSTANCE}}.atlassian.net"

safe-outputs:
  add-pr-comment:
    header-prefix: "🔍 Atlassian Context"

mcp:
  include: workflows/shared/mcp/atlassian.md
---

## PR Atlassian Enricher

You are a helpful engineering assistant enriching pull requests with context
from related Jira issues and Confluence documentation.

### Steps

1. Read the PR title, description, and branch name.
2. Extract any Jira issue keys (format: `ABC-1234`) from the PR title,
   branch name, or description or Git commits.
3. For each issue found, use the atlassian MCP tool to fetch:
   - Issue summary and description
   - Acceptance criteria
   - Linked Confluence pages
4. For each linked Confluence page, fetch the relevant sections:
   - Design decisions
   - Technical specifications
   - Known constraints or out-of-scope items
5. Compose a concise context comment on the PR that includes:
   - A summary of what the issue is asking for and why
   - Key acceptance criteria the reviewer should check
   - Relevant technical context from the Confluence page
   - Any explicit out-of-scope items (to avoid scope creep reviews)
6. Post a comment with three sections:
   - **Jira Issues**: For each issue, show `[KEY](full-https-url)` - Title - Status
   - **Confluence Pages**: For each page, show `[Page Title](full-https-url)`
   - **Gap Analysis**: List missing requirements or discrepancies
```

就是这样。纯 Markdown，自然语言，没有自定义的 Python 脚本，也不需要自己托管 Webhook。

智能体在 PR 开启或草稿标记为准备审查时触发，从分支名称或描述中提取 Jira 密钥（大多数团队已经在使用 `feat/ABC-1234-short-description` 这样的命名规范），获取所有相关的上下文，并发布结构化的评论。

### 自动生成的 PR 评论示例

当 PR 提交后，在一两分钟内，审查者就会看到自动发布的类似以下内容的评论：

> **🔍 Atlassian Context**
> 
> **Jira: ABC-1234 - Add rate limiting to the ingestion API**
> 
> *为什么需要此更改：* 摄入端点在流量高峰期间一直触及下游服务限制，导致静默数据丢失。此工单在 API 网关层实现了令牌桶限流。
> 
> **需要验证的验收标准：**
> *   [ ] 限流可通过环境变量按租户进行配置
> *   [ ] 超过限制的请求返回 HTTP 429 及 `Retry-After` 请求头
> *   [ ] 限流指标输出到 Datadog
> 
> **技术上下文（来自 Confluence：“Ingestion API Design - v2”）：** 设计文档规定，限流应在身份验证*之后*、反序列化*之前*应用，以避免在无效负载上浪费 CPU。选择的算法是令牌桶（而非漏桶），因为明确要求具备突发容忍度。
> 
> **超出范围（根据设计文档）：** 每端点限流、用户级配额以及基于下游健康状况的自适应限流明确推迟到未来的迭代中。

审查者在打开任何文件之前，就已经掌握了所需的一切信息。他们了解业务背景、需要检查的具体标准、已经做出的架构决策，以及*不应该*在评论中纠结的内容。

审查质量提高了，审查时间缩短了，那些无休止的“你能加个工单链接吗？”的评论也消失了。

### 为什么这种模式具有深远意义？

除了眼前的便利之外，还有几个因素让这种模式非常有趣：

*   **智能体是代码库的一等公民。** 工作流定义与代码一起存在于版本控制中。你可以对其提交 PR、进行审查、回滚。智能体的行为是可审计的，并且可以像应用程序代码一样进行协作。
*   **安全输出作为架构约束。** 智能体只能发布评论和添加标签。它不能合并 PR、推送提交或修改设置。这是框架强制执行的硬性约束，而不是基于信任的荣誉系统。这很好地契合了最小权限原则：智能体只拥有完成工作所需的权限，仅此而已。
*   **MCP 作为可组合的工具层。** 共享的 MCP 配置意味着你可以构建一个完整的工作流生态系统，它们都通过相同的接口与 Jira 和 Confluence 对话。每日站会报告、Sprint 回顾生成器、工单到 PR 的可追溯性检查器：所有这些都可以重用同一个 Atlassian 集成，实现零重复。
*   **自然语言定义大幅降低了门槛。** 工作流读起来像是一份说明书，而不是代码。了解问题领域但不是 GitHub Actions 专家的人也能阅读它、提出改进建议或编写自己的工作流。这在自动化所有权的归属上是一个有意义的转变。

### 实践中的观察与局限

目前这还处于早期阶段。gh-aw 明确处于测试阶段，文档也说明它可能会发生重大变化，在将其用于关键任务之前应认真考虑这一点。

在实践过程中，我注意到了以下几点：

*   **依赖分支命名规范：** Jira 密钥的提取效果取决于团队分支命名的纪律性。如果团队使用 `fix/typo-in-readme` 而不是 `fix/ABC-1234-typo-in-readme`，智能体就找不到任何线索。如果你还没有强制执行分支命名规范，这个工作流是一个很好的推动力。
*   **暴露文档质量问题：** 在大多数组织中，Confluence 页面的质量参差不齐。如果你的设计文档过时或内容稀少，丰富器生成的评论也会反映出这一点。输入的是垃圾，输出的也是垃圾。从某种奇怪的角度来看，这让问题变得可见：当丰富器发布了单薄的上下文时，这就是一个信号，表明文档需要关注了。
*   **存在一定延迟：** 对于冷启动的工作流，PR 开启时的延迟大约为几分钟。虽然不是即时的，但速度已经足够快，通常当审查者从 Slack 打开 PR 链接时，评论已经在那儿了。

### 未来的扩展计划

我计划对此进行一些扩展：

*   **双向同步器：** 在 PR 合并时，自动使用 PR 链接更新 Jira 工单，并在工单上发布评论。手动保持 Jira 和 GitHub 同步是另一项不该由人来承担的“税”。
*   **规范偏移检测器：** 将实际的代码差异与 Confluence 设计文档进行比较，如果实现似乎偏离了记录的决策，则进行标记。这野心更大，幻觉风险也更高，但作为原型很有趣。
*   **审查清单生成器：** 不仅仅是总结验收标准，而是根据工单标签，生成针对更改类型（如安全敏感、数据迁移、API 契约更改等）量身定制的结构化清单。

### 如何开始

gh-aw CLI 可以作为 GitHub CLI 扩展安装：

```bash
gh extension install github/gh-aw
```

安装后，`gh aw add` 会引导你向代码库添加工作流。[快速入门指南](https://github.github.io/gh-aw/setup/quick-start/)真的非常快捷。

如果你用它构建了有趣的东西，特别是任何通过 MCP 将 GitHub 与外部工具连接起来的东西，我很乐意听听你的分享。

智能体工作流和开发者工具的交汇领域发展迅速，未来一年出现的模式将在很长一段时间内塑造我们对软件开发中人机协作的看法。

*感谢阅读。如果你觉得这篇文章有用，请分享给那些在 PR 考古上花费太多时间的人。*

## 关联主题

- [[00-元语/github]]
- [[00-元语/Agent]]
- [[00-元语/mcp]]
- [[00-元语/code-review]]
- [[00-元语/workflow]]
