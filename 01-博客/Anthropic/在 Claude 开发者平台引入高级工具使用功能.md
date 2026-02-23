---
title: "在 Claude 开发者平台引入高级工具使用功能"

站点: "Anthropic Engineering"
原文链接: "https://www.anthropic.com/engineering/advanced-tool-use"
译注: "未找到官方中文版本，本文基于英文原文翻译整理。"
---

## 摘要

**1) 一句话总结**
Anthropic 为 Claude 推出了工具搜索、编程式工具调用和工具使用示例三项高级功能，旨在通过动态发现、代码编排和示例学习，大幅降低 Token 消耗并提升复杂智能体工作流的执行准确率。

**2) 核心要点**
*   **功能概览**：发布了三项处于 Beta 阶段（`advanced-tool-use-2025-11-20`）的新功能，以解决智能体在处理成百上千个工具时面临的上下文溢出、推理缓慢和调用错误问题。
*   **工具搜索工具（按需加载）**：通过将工具标记为 `defer_loading: true`，Claude 可以动态搜索并仅加载当前任务所需的工具，而无需预先将所有工具定义塞入上下文，且该机制不会破坏提示词缓存。
*   **工具搜索的效能**：内部测试显示，该功能可减少约 85% 的 Token 消耗（例如从 77K 降至 8.7K），并将 Opus 4.5 的工具选择准确率从 79.5% 提升至 88.1%。
*   **编程式工具调用（代码编排）**：允许 Claude 编写 Python 代码在沙盒环境中调用和编排多个工具（支持循环、条件判断和并行执行），并在代码执行完毕后仅将最终结果返回给模型。
*   **编程式调用的效能**：有效防止海量中间数据（如日志、明细）污染上下文，平均降低 37% 的 Token 消耗，消除多次 API 往返的推理延迟，并将 GIA 基准测试准确率从 46.5% 提升至 51.2%。
*   **工具使用示例（模式学习）**：允许在工具定义中直接添加 `input_examples`，向模型展示 JSON Schema 无法表达的业务约定（如特定日期格式、ID 规范、可选参数的关联性）。
*   **示例功能的效能**：通过提供 1-5 个具体示例，将复杂参数处理的准确率从 72% 提升到了 90%。
*   **最佳实践**：建议根据具体瓶颈分层使用——用“工具搜索”解决上下文膨胀，用“编程式调用”处理庞大的中间结果，用“工具示例”修正参数格式错误。

**3) 风险与局限**
*   **延迟与架构开销**：工具搜索增加了一个搜索步骤，编程式工具调用增加了一个代码执行步骤。这两者都会引入额外的延迟和开销，不适用于简单的单次工具调用或小型工具库（<10 个工具）。
*   **中间过程不可见**：在编程式工具调用中，中间数据由代码处理而不进入上下文。如果任务需要 Claude 查看并推理所有中间结果，则不适用此功能。
*   **Token 成本增加**：添加“工具使用示例”会增加工具定义本身的 Token 数量，因此不建议用于用法明显的简单单参数工具。

## 正文

AI 智能体（Agents）的未来，是模型能够在成百上千个工具之间无缝协作。一个集成了 git 操作、文件操作、包管理器、测试框架和部署流水线的 IDE 助手；一个同时连接 Slack、GitHub、Google Drive、Jira、公司数据库以及数十个 MCP 服务器的运营协调员。

为了[构建高效的智能体](https://www.anthropic.com/research/building-effective-agents)，它们需要能够使用无限的工具库，而不是预先将每个定义都塞进上下文中。我们在关于[结合 MCP 的代码执行](https://www.anthropic.com/engineering/code-execution-with-mcp)的博客文章中讨论过，有时在智能体开始处理请求之前，工具的结果和定义就会消耗掉 50,000 多个 Token。智能体应该按需发现和加载工具，只保留与当前任务相关的内容。

智能体还需要具备从代码中调用工具的能力。当使用自然语言调用工具时，每次调用都需要一次完整的推理过程，并且无论中间结果是否有用，它们都会在上下文中不断堆积。代码天生适合处理编排逻辑，例如循环、条件判断和数据转换。智能体需要能够根据手头的任务，在代码执行和模型推理之间灵活选择。

智能体还需要从示例中学习正确的工具用法，而不仅仅是依赖 Schema 定义。JSON Schema 定义了结构上合法的内容，但无法表达使用模式：何时应包含可选参数，哪些参数组合是有意义的，或者你的 API 期望什么样的约定。

今天，我们发布了三个新功能，让这一切成为可能：

*   **工具搜索工具 (Tool Search Tool)**：允许 Claude 使用搜索工具访问数千个工具，而不会消耗其上下文窗口。
*   **编程式工具调用 (Programmatic Tool Calling)**：允许 Claude 在代码执行环境中调用工具，从而减少对模型上下文窗口的影响。
*   **工具使用示例 (Tool Use Examples)**：为演示如何有效使用特定工具提供了一个通用标准。

在内部测试中，我们发现这些功能帮助我们构建了使用传统工具调用模式无法实现的应用。例如，**[Claude for Excel](https://www.claude.com/claude-for-excel)** 使用编程式工具调用来读取和修改包含数千行的电子表格，而不会使模型的上下文窗口超载。

基于我们的经验，我们相信这些功能将为您使用 Claude 进行开发开辟新的可能性。

工具搜索工具 (Tool Search Tool)
----------------

### 面临的挑战

MCP 工具定义提供了重要的上下文，但随着连接的服务器越来越多，这些 Token 的消耗会不断累加。考虑一个包含五个服务器的设置：

*   GitHub: 35 个工具（约 26K Token）
*   Slack: 11 个工具（约 21K Token）
*   Sentry: 5 个工具（约 3K Token）
*   Grafana: 5 个工具（约 3K Token）
*   Splunk: 2 个工具（约 2K Token）

在对话开始之前，这 58 个工具就已经消耗了大约 55K Token。如果再添加像 Jira 这样的服务器（仅它本身就使用约 17K Token），你很快就会面临接近 100K+ 的 Token 开销。在 Anthropic，我们曾见过在优化之前，工具定义就消耗了 134K Token 的情况。

但 Token 成本并不是唯一的问题。最常见的失败原因是错误的工具选择和不正确的参数，特别是当工具名称相似时，例如 `notification-send-user` 与 `notification-send-channel`。

### 我们的解决方案

工具搜索工具不再预先加载所有工具定义，而是按需发现工具。Claude 只会看到它当前任务实际需要的工具。

![Image 1: Tool Search Tool diagram](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Ff359296f770706608901eadaffbff4ca0b67874c-1999x1125.png&w=3840&q=75)

_与 Claude 的传统方法相比，工具搜索工具保留了 191,300 个 Token 的上下文（传统方法仅保留 122,800 个）。_

传统方法：

*   预先加载所有工具定义（50+ 个 MCP 工具约 72K Token）
*   对话历史和系统提示词竞争剩余空间
*   总上下文消耗：在开始任何工作之前约 77K Token

使用工具搜索工具：

*   预先只加载工具搜索工具（约 500 Token）
*   按需发现工具（3-5 个相关工具，约 3K Token）
*   总上下文消耗：约 8.7K Token，保留了 95% 的上下文窗口

这代表着在保持对完整工具库访问权限的同时，Token 使用量减少了 85%。内部测试表明，在处理大型工具库时，MCP 评估的准确性有了显著提高。启用工具搜索工具后，Opus 4 的准确率从 49% 提高到 74%，Opus 4.5 的准确率从 79.5% 提高到 88.1%。

### 工具搜索工具的工作原理

工具搜索工具让 Claude 能够动态发现工具，而不是预先加载所有定义。你可以将所有工具定义提供给 API，但将工具标记为 `defer_loading: true`，使其可以按需发现。被延迟加载的工具最初不会加载到 Claude 的上下文中。Claude 只会看到工具搜索工具本身以及任何标记为 `defer_loading: false` 的工具（即你最关键、最常用的工具）。

当 Claude 需要特定功能时，它会搜索相关工具。工具搜索工具会返回匹配工具的引用，这些引用随后会在 Claude 的上下文中扩展为完整的定义。

例如，如果 Claude 需要与 GitHub 交互，它会搜索 "github"，此时只有 `github.createPullRequest` 和 `github.listIssues` 会被加载——而不是来自 Slack、Jira 和 Google Drive 的其他 50 多个工具。

通过这种方式，Claude 可以访问你的完整工具库，同时只需为它实际需要的工具支付 Token 成本。

**提示词缓存注意事项：** 工具搜索工具不会破坏提示词缓存，因为延迟加载的工具完全被排除在初始提示词之外。它们只有在 Claude 搜索后才会被添加到上下文中，因此你的系统提示词和核心工具定义仍然可以被缓存。

**实现方式：**

```json
{
  "tools": [
    // 包含一个工具搜索工具（正则表达式、BM25 或自定义）
    {"type": "tool_search_tool_regex_20251119", "name": "tool_search_tool_regex"},

    // 标记工具以供按需发现
    {
      "name": "github.createPullRequest",
      "description": "Create a pull request",
      "input_schema": {...},
      "defer_loading": true
    }
    // ... 数百个带有 defer_loading: true 的延迟加载工具
  ]
}
```

对于 MCP 服务器，你可以延迟加载整个服务器，同时保持特定的高频使用工具处于加载状态：

```json
{
  "type": "mcp_toolset",
  "mcp_server_name": "google-drive",
  "default_config": {"defer_loading": true}, # 延迟加载整个服务器
  "configs": {
    "search_files": {
      "defer_loading": false
    }  // 保持最常用的工具处于加载状态
  }
}
```

Claude 开发者平台开箱即用地提供了基于正则表达式和基于 BM25 的搜索工具，但你也可以使用向量嵌入（embeddings）或其他策略来实现自定义搜索工具。

### 何时使用工具搜索工具

像任何架构决策一样，启用工具搜索工具需要权衡。该功能在工具调用之前增加了一个搜索步骤，因此当节省的上下文和准确性的提升超过了增加的延迟时，它能提供最佳的投资回报率 (ROI)。

**适用场景：**

*   工具定义消耗 >10K Token
*   遇到工具选择准确性问题
*   构建包含多个服务器的 MCP 驱动系统
*   有 10 个以上的可用工具

**较不适用场景：**

*   小型工具库（<10 个工具）
*   所有工具在每次会话中都被频繁使用
*   工具定义非常紧凑

编程式工具调用 (Programmatic Tool Calling)
-------------------------

### 面临的挑战

随着工作流变得越来越复杂，传统的工具调用会产生两个根本性问题：

*   **中间结果导致的上下文污染**：当 Claude 分析一个 10MB 的日志文件以寻找错误模式时，整个文件都会进入其上下文窗口，尽管 Claude 只需要错误频率的摘要。当跨多个表获取客户数据时，每条记录都会在上下文中累积，无论其是否相关。这些中间结果消耗了大量的 Token 预算，并可能将重要信息完全挤出上下文窗口。
*   **推理开销和手动合成**：每次工具调用都需要一次完整的模型推理过程。收到结果后，Claude 必须“逐一查看”数据以提取相关信息，推理各个部分如何组合在一起，并决定下一步做什么——所有这些都是通过自然语言处理完成的。一个包含五个工具的工作流意味着五次推理过程，加上 Claude 解析每个结果、比较数值并综合得出结论。这既缓慢又容易出错。

### 我们的解决方案

编程式工具调用使 Claude 能够通过代码而不是通过单独的 API 往返来编排工具。Claude 不再是一次请求一个工具并将每个结果返回到其上下文中，而是编写代码来调用多个工具、处理它们的输出，并控制哪些信息实际进入其上下文窗口。

Claude 非常擅长编写代码，通过让它用 Python 而不是自然语言工具调用来表达编排逻辑，你可以获得更可靠、更精确的控制流。循环、条件判断、数据转换和错误处理在代码中都是显式的，而不是隐含在 Claude 的推理中。

#### 示例：预算合规性检查

考虑一个常见的业务任务：“哪些团队成员超出了他们的第三季度差旅预算？”

你有三个可用的工具：

*   `get_team_members(department)` - 返回包含 ID 和级别的团队成员列表
*   `get_expenses(user_id, quarter)` - 返回用户的费用明细
*   `get_budget_by_level(level)` - 返回员工级别的预算限制

**传统方法**：

*   获取团队成员 → 20 人
*   对于每个人，获取他们的 Q3 费用 → 20 次工具调用，每次返回 50-100 个明细项（航班、酒店、餐饮、收据）
*   按员工级别获取预算限制
*   所有这些都进入 Claude 的上下文：2,000+ 个费用明细项（50 KB+）
*   Claude 手动汇总每个人的费用，查找他们的预算，将费用与预算限制进行比较
*   与模型进行更多次往返交互，消耗大量上下文

**使用编程式工具调用**：

不再将每个工具结果返回给 Claude，而是由 Claude 编写一个 Python 脚本来编排整个工作流。该脚本在代码执行工具（一个沙盒环境）中运行，当需要你的工具结果时暂停。当你通过 API 返回工具结果时，它们由脚本处理，而不是被模型消耗。脚本继续执行，Claude 只看到最终输出。

![Image 2: Programmatic tool calling flow](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F65737d69a3290ed5c1f3c3b8dc873645a9dcc2eb-1999x1491.png&w=3840&q=75)

编程式工具调用使 Claude 能够通过代码而不是单独的 API 往返来编排工具，从而允许并行执行工具。

以下是 Claude 为预算合规性任务编写的编排代码示例：

```python
team = await get_team_members("engineering")

# 获取每个唯一级别的预算
levels = list(set(m["level"] for m in team))
budget_results = await asyncio.gather(*[
    get_budget_by_level(level) for level in levels
])

# 创建一个查找字典：{"junior": budget1, "senior": budget2, ...}
budgets = {level: budget for level, budget in zip(levels, budget_results)}

# 并行获取所有费用
expenses = await asyncio.gather(*[
    get_expenses(m["id"], "Q3") for m in team
])

# 找出超出差旅预算的员工
exceeded = []
for member, exp in zip(team, expenses):
    budget = budgets[member["level"]]
    total = sum(e["amount"] for e in exp)
    if total > budget["travel_limit"]:
        exceeded.append({
            "name": member["name"],
            "spent": total,
            "limit": budget["travel_limit"]
        })

print(json.dumps(exceeded))
```

Claude 的上下文仅接收最终结果：超出预算的两到三个人。2,000 多个明细项、中间汇总和预算查找不会影响 Claude 的上下文，将消耗从 200KB 的原始费用数据减少到仅 1KB 的结果。

效率提升是显著的：

*   **节省 Token**：通过将中间结果排除在 Claude 的上下文之外，编程式工具调用（PTC）大幅降低了 Token 消耗。在复杂的研究任务中，平均使用量从 43,588 个 Token 下降到 27,297 个，减少了 37%。
*   **降低延迟**：每次 API 往返都需要模型推理（数百毫秒到数秒）。当 Claude 在单个代码块中编排 20 多次工具调用时，你消除了 19 次以上的推理过程。API 处理工具执行，而无需每次都返回给模型。
*   **提高准确性**：通过编写显式的编排逻辑，Claude 犯的错误比在自然语言中处理多个工具结果时要少。内部知识检索准确率从 25.6% 提高到 28.5%；[GIA 基准测试](https://arxiv.org/abs/2311.12983)从 46.5% 提高到 51.2%。

生产工作流涉及杂乱的数据、条件逻辑和需要扩展的操作。编程式工具调用让 Claude 能够以编程方式处理这种复杂性，同时将其注意力集中在可操作的结果上，而不是原始数据处理上。

### 编程式工具调用的工作原理

#### 1. 将工具标记为可从代码调用

将 `code_execution` 添加到工具中，并设置 `allowed_callers` 以允许工具进行编程式执行：

```json
{
  "tools": [
    {
      "type": "code_execution_20250825",
      "name": "code_execution"
    },
    {
      "name": "get_team_members",
      "description": "Get all members of a department...",
      "input_schema": {...},
      "allowed_callers": ["code_execution_20250825"] # 允许编程式工具调用
    },
    {
      "name": "get_expenses",
 	...
    },
    {
      "name": "get_budget_by_level",
	...
    }
  ]
}
```

API 会将这些工具定义转换为 Claude 可以调用的 Python 函数。

#### 2. Claude 编写编排代码

Claude 不再一次请求一个工具，而是生成 Python 代码：

```json
{
  "type": "server_tool_use",
  "id": "srvtoolu_abc",
  "name": "code_execution",
  "input": {
    "code": "team = get_team_members('engineering')\n..." # 上面的代码示例
  }
}
```

#### 3. 工具执行而不进入 Claude 的上下文

当代码调用 `get_expenses()` 时，你会收到一个带有 `caller` 字段的工具请求：

```json
{
  "type": "tool_use",
  "id": "toolu_xyz",
  "name": "get_expenses",
  "input": {"user_id": "emp_123", "quarter": "Q3"},
  "caller": {
    "type": "code_execution_20250825",
    "tool_id": "srvtoolu_abc"
  }
}
```

你提供结果，该结果在代码执行环境中处理，而不是在 Claude 的上下文中处理。代码中的每次工具调用都会重复此请求-响应周期。

#### 4. 只有最终输出进入上下文

当代码运行完毕时，只有代码的结果会返回给 Claude：

```json
{
  "type": "code_execution_tool_result",
  "tool_use_id": "srvtoolu_abc",
  "content": {
    "stdout": "[{\"name\": \"Alice\", \"spent\": 12500, \"limit\": 10000}...]"
  }
}
```

这就是 Claude 所看到的全部内容，而不是在此过程中处理的 2000 多个费用明细项。

### 何时使用编程式工具调用

编程式工具调用在你的工作流中增加了一个代码执行步骤。当节省的 Token、延迟的改善和准确性的提升非常显著时，这种额外的开销是值得的。

**最适用场景：**

*   处理大型数据集，且你只需要聚合或摘要结果
*   运行包含三个或更多依赖工具调用的多步工作流
*   在 Claude 看到工具结果之前对其进行过滤、排序或转换
*   处理中间数据不应影响 Claude 推理的任务
*   跨多个项目运行并行操作（例如，检查 50 个端点）

**较不适用场景：**

*   进行简单的单工具调用
*   处理 Claude 应该看到并推理所有中间结果的任务
*   运行响应较小的快速查找

工具使用示例 (Tool Use Examples)
-----------------

### 面临的挑战

JSON Schema 擅长定义结构——类型、必填字段、允许的枚举值——但它无法表达使用模式：何时包含可选参数，哪些组合有意义，或者你的 API 期望什么约定。

考虑一个支持工单 API：

```json
{
  "name": "create_ticket",
  "input_schema": {
    "properties": {
      "title": {"type": "string"},
      "priority": {"enum": ["low", "medium", "high", "critical"]},
      "labels": {"type": "array", "items": {"type": "string"}},
      "reporter": {
        "type": "object",
        "properties": {
          "id": {"type": "string"},
          "name": {"type": "string"},
          "contact": {
            "type": "object",
            "properties": {
              "email": {"type": "string"},
              "phone": {"type": "string"}
            }
          }
        }
      },
      "due_date": {"type": "string"},
      "escalation": {
        "type": "object",
        "properties": {
          "level": {"type": "integer"},
          "notify_manager": {"type": "boolean"},
          "sla_hours": {"type": "integer"}
        }
      }
    },
    "required": ["title"]
  }
}
```

该 Schema 定义了什么是合法的，但留下了未解答的关键问题：

*   **格式歧义：** `due_date` 应该使用 "2024-11-06"、"Nov 6, 2024" 还是 "2024-11-06T00:00:00Z"？
*   **ID 约定：** `reporter.id` 是 UUID、"USR-12345" 还是仅仅是 "12345"？
*   **嵌套结构用法：** Claude 什么时候应该填充 `reporter.contact`？
*   **参数关联性：** `escalation.level` 和 `escalation.sla_hours` 与优先级（priority）有什么关系？

这些歧义可能导致格式错误的工具调用和不一致的参数使用。

### 我们的解决方案

工具使用示例允许你在工具定义中直接提供示例工具调用。你不再仅仅依赖 Schema，而是向 Claude 展示具体的使用模式：

```json
{
    "name": "create_ticket",
    "input_schema": { /* 与上面的 schema 相同 */ },
    "input_examples": [
      {
        "title": "Login page returns 500 error",
        "priority": "critical",
        "labels": ["bug", "authentication", "production"],
        "reporter": {
          "id": "USR-12345",
          "name": "Jane Smith",
          "contact": {
            "email": "jane@acme.com",
            "phone": "+1-555-0123"
          }
        },
        "due_date": "2024-11-06",
        "escalation": {
          "level": 2,
          "notify_manager": true,
          "sla_hours": 4
        }
      },
      {
        "title": "Add dark mode support",
        "labels": ["feature-request", "ui"],
        "reporter": {
          "id": "USR-67890",
          "name": "Alex Chen"
        }
      },
      {
        "title": "Update API documentation"
      }
    ]
  }
```

从这三个示例中，Claude 学到了：

*   **格式约定**：日期使用 YYYY-MM-DD，用户 ID 遵循 USR-XXXXX 格式，标签使用 kebab-case（短横线分隔）
*   **嵌套结构模式**：如何构建带有嵌套 contact 对象的 reporter 对象
*   **可选参数关联性**：严重（critical）的 bug 具有完整的联系信息 + 带有严格 SLA 的升级（escalation）；功能请求有报告人（reporter）但没有联系方式/升级信息；内部任务只有标题（title）

在我们自己的内部测试中，工具使用示例将复杂参数处理的准确率从 72% 提高到了 90%。

### 何时使用工具使用示例

工具使用示例会增加工具定义中的 Token 数量，因此当准确性的提升超过了额外成本时，它们最有价值。

**最适用场景：**

*   JSON 结构合法，但无法保证复杂嵌套结构用法正确的情况
*   具有许多可选参数且包含模式很重要的工具
*   具有未在 Schema 中捕获的特定领域约定的 API
*   相似的工具，示例可以澄清应该使用哪一个（例如，`create_ticket` 与 `create_incident`）

**较不适用场景：**

*   用法明显的简单单参数工具
*   Claude 已经理解的标准格式，如 URL 或电子邮件
*   最好由 JSON Schema 约束处理的验证问题

最佳实践
--------------

构建采取实际行动的智能体意味着要同时处理规模、复杂性和精确性。这三个功能协同工作，以解决工具使用工作流中的不同瓶颈。以下是如何有效地组合它们。

### 战略性地分层使用功能

并非每个智能体都需要在给定任务中使用所有三个功能。从你最大的瓶颈开始：

*   工具定义导致的上下文膨胀 → 工具搜索工具
*   污染上下文的大型中间结果 → 编程式工具调用
*   参数错误和格式错误的调用 → 工具使用示例

这种专注的方法让你能够解决限制智能体性能的具体约束，而不是预先增加复杂性。

然后根据需要分层添加其他功能。它们是互补的：工具搜索工具确保找到正确的工具，编程式工具调用确保高效执行，工具使用示例确保正确调用。

### 设置工具搜索工具以实现更好的发现

工具搜索会匹配名称和描述，因此清晰、描述性的定义可以提高发现的准确性。

```json
// 好的做法
{
    "name": "search_customer_orders",
    "description": "Search for customer orders by date range, status, or total amount. Returns order details including items, shipping, and payment info."
}

// 差的做法
{
    "name": "query_db_orders",
    "description": "Execute order query"
}
```

添加系统提示词指导，让 Claude 知道有哪些可用工具：

```text
你可以访问用于 Slack 消息传递、Google Drive 文件管理、
Jira 工单跟踪和 GitHub 仓库操作的工具。使用工具搜索
来查找特定功能。
```

保持你最常用的三到五个工具始终加载，延迟加载其余的工具。这平衡了常见操作的即时访问和其他所有操作的按需发现。

### 设置编程式工具调用以实现正确执行

由于 Claude 会编写代码来解析工具输出，因此请清楚地记录返回格式。这有助于 Claude 编写正确的解析逻辑：

```json
{
    "name": "get_orders",
    "description": "Retrieve orders for a customer.
Returns:
    List of order objects, each containing:
    - id (str): Order identifier
    - total (float): Order total in USD
    - status (str): One of 'pending', 'shipped', 'delivered'
    - items (list): Array of {sku, quantity, price}
    - created_at (str): ISO 8601 timestamp"
}
```

以下类型的工具非常适合使用编程式编排：

*   可以并行运行的工具（独立操作）
*   可以安全重试的操作（幂等性）

### 设置工具使用示例以提高参数准确性

精心制作示例以明确行为：

*   使用真实数据（真实的城市名称、合理的价格，而不是 "string" 或 "value"）
*   展示多样性，包括最小、部分和完整规范模式
*   保持简洁：每个工具 1-5 个示例
*   关注歧义（仅在从 Schema 中无法明显看出正确用法时添加示例）

快速入门
---------------

这些功能目前处于测试阶段（beta）。要启用它们，请添加 beta 请求头并包含你需要的工具：

```python
client.beta.messages.create(
    betas=["advanced-tool-use-2025-11-20"],
    model="claude-sonnet-4-5-20250929",
    max_tokens=4096,
    tools=[
        {"type": "tool_search_tool_regex_20251119", "name": "tool_search_tool_regex"},
        {"type": "code_execution_20250825", "name": "code_execution"},
        # 带有 defer_loading、allowed_callers 和 input_examples 的你的工具
    ]
)
```

有关详细的 API 文档和 SDK 示例，请参阅我们的：

*   工具搜索工具的[文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)和 Cookbook（`https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/tool_search_with_embeddings.ipynb`）
*   编程式工具调用的[文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling)和 Cookbook（`https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/programmatic_tool_calling_ptc.ipynb`）
*   工具使用示例的[文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples)

这些功能将工具使用从简单的函数调用推向了智能编排。随着智能体处理跨越数十个工具和大型数据集的更复杂工作流，动态发现、高效执行和可靠调用将成为基础。

我们很期待看到你构建的成果。

致谢
----------------

本文由 Bin Wu 撰写，Adam Jones、Artur Renault、Henry Tay、Jake Noble、Nathan McCandlish、Noah Picard、Sam Jiang 以及 Claude 开发者平台团队做出了贡献。这项工作建立在 Chris Gorgolewski、Daniel Jiang、Jeremy Fox 和 Mike Lambert 的基础研究之上。我们还从整个 AI 生态系统中汲取了灵感，包括 [Joel Pobar 的 LLMVM](https://github.com/9600dev/llmvm)、[Cloudflare 的 Code Mode](https://blog.cloudflare.com/code-mode/) 以及[结合 MCP 的代码执行](https://www.anthropic.com/engineering/code-execution-with-mcp)。特别感谢 Andy Schumeister、Hamish Kerr、Keir Bradwell、Matt Bleifer 和 Molly Vorwerck 的支持。

## 相关文档

- [[01-博客/Anthropic/工具搜索工具|工具搜索工具]]；关联理由：解说；说明：本文的工具搜索章节在该文有完整 API 机制、限制与错误处理细节。
- [[01-博客/Anthropic/使用 MCP 执行代码|使用 MCP 执行代码]]；关联理由：版本演进；说明：本文的编程式工具调用建立在该文“代码执行结合 MCP”方法之上，并进一步演进为平台级能力。

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/Claude]]
- [[00-元语/mcp]]
- [[00-元语/tool]]
- [[00-元语/llm]]
- [[00-元语/context-optimization]]
- [[00-元语/workflow]]
- [[00-元语/sdk]]
