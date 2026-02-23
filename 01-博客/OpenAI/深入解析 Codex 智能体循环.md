---
title: "深入解析 Codex 智能体循环"

来源: "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/"
英文原文: "https://openai.com/index/unrolling-the-codex-agent-loop/"
发布日期: "2026年1月23日"
分类: "[工程](https://openai.com/news/engineering/)"
---

## 摘要

**1) 一句话总结**
本文深入解析了跨平台本地软件智能体 Codex CLI 的核心运行机制（智能体循环），详细阐述了其如何通过 Responses API 协调用户、模型与工具的交互，并分享了在提示词构建、缓存优化与上下文管理方面的具体设计决策。

**2) 核心要点**
*   **智能体循环机制**：核心逻辑为“接收输入 -> 模型推理 -> 工具调用 -> 追加结果至提示词 -> 再次推理”，循环往复直至模型生成最终的助手消息。
*   **多端点推理支持**：通过 HTTP 请求 Responses API 执行推理，支持 OpenAI 官方端点、Azure 云服务，以及通过 gpt-oss 配合 Ollama/LM Studio 运行的本地端点。
*   **提示词结构与优先级**：提示词按角色（`system`、`developer`、`user`、`assistant`）降序排列，包含系统指令（`instructions`）、工具列表（`tools`，含内置、API及MCP工具）和输入内容（`input`）。
*   **上下文初始化与限制**：在追加用户消息前，Codex 会向 `input` 预先插入沙盒权限、`config.toml` 中的开发者指令，以及从 `AGENTS.md` 等文件聚合的项目指令（大小限制默认为 32 KiB）。
*   **无状态与零数据保留 (ZDR)**：为保持请求完全无状态并严格支持零数据保留原则，Codex 明确决定不使用 `previous_response_id` 参数。
*   **提示缓存优化**：通过确保旧提示词始终是新提示词的“精确前缀”来命中提示缓存，成功将模型采样的计算开销从二次复杂度降低至线性复杂度。
*   **配置变更处理**：当沙盒配置、审批模式或工作目录发生变化时，Codex 会在 `input` 末尾追加一条新消息，而不是修改历史消息，以此避免破坏提示缓存。
*   **上下文压缩 (Compaction)**：当 Token 总数超过阈值时，Codex 会对对话进行压缩（如早期的 `/compact` 命令），利用模型生成对话摘要作为新的 `input`，以继续后续对话。

**3) 风险与不足**
*   **上下文窗口耗尽风险**：智能体在单轮交互中可能发起数百次工具调用，导致提示词不断增长，存在耗尽模型上下文窗口的风险。
*   **缓存未命中风险**：在对话中途更改可用工具、更改目标模型，或直接修改历史配置，会导致提示缓存未命中，从而增加计算成本。
*   **第三方工具沙盒逃逸风险**：Codex 提供的沙盒权限限制仅适用于其内置的 `shell` 工具；来自其他来源（如 MCP 服务器）的工具不受 Codex 沙盒限制，需自行负责执行安全防护措施。

## 正文

[Codex CLI](https://developers.openai.com/codex/cli) 是我们打造的跨平台本地软件智能体，其设计宗旨是在您的计算机上安全、高效地运行，并交付高质量、可靠的软件变更。[自四月首次发布该 CLI 以来](https://openai.com/zh-Hans-CN/index/introducing-o3-and-o4-mini/)，我们在构建先进软件智能体方面积累了丰富经验。为分享这些收获与思考，我们推出了本系列文章。作为开篇之作，本文将深入解析 Codex 的运作机制与核心原理，并分享我们在实践中积累的经验。（如需详细了解 Codex CLI 的底层实现细节，请查看我们的开源仓库：[https://github.com/openai/codex](https://github.com/openai/codex)。我们的许多设计决策细节都记录在 GitHub 的议题（Issues）和拉取请求中，可供深入查阅。）

首先，我们将聚焦于 _智能体循环_—这是 Codex CLI 的核心逻辑，负责协调用户、模型以及模型为执行任务所调用的工具三者之间的交互。希望本文能帮助您全面理解我们的智能体（或称“运行框架”）在运用大语言模型（LLM）时所发挥的关键作用。

在深入之前，先简单说明一下术语：在 OpenAI，“Codex”是指一系列软件智能体产品，包括 Codex CLI、Codex Cloud 和 Codex VS Code 扩展。本文重点探讨 Codex 的 _运行框架_。它提供了核心的智能体循环与执行逻辑，是所有 Codex 体验的基石，并通过 Codex CLI 对外提供。为行文简洁，下文将交替使用“Codex”与“Codex CLI”。

智能体循环
-----

对任何一个 AI 智能体来说，其核心都是一套称为“智能体循环”的运行机制。其简化示意如下图所示：

首先，智能体接收用户 _输入_，并将其整合为一系列为可供模型使用的文本指令，这一系列指令称为 _提示_。

接着，智能体将指令发送给模型，并要求模型生成响应，这个过程称为 _推理_。在推理过程中，文本提示首先被转换为一串输入 [Token](https://platform.openai.com/docs/concepts#tokens) — 这些 Token 是用于索引模型词汇表的整数值。随后，这些 Token 被用于对模型进行采样，从而生成一串新的输出 Token。

输出 Token 会转换回文本作为模型响应。由于 Token 是逐次生成的，转换过程可以与模型运行同步进行，因此许多大语言模型应用能实现流式输出。实际应用中，推理过程通常封装在一个处理文本的 API 内部，从而对使用者隐藏了 Token 化的细节。

推理步骤完成后，模型可能产生两种结果：(1) 生成对用户原始输入的最终响应；或 (2) 请求智能体执行一次 _工具调用_（例如，“运行 `ls` 命令并返回结果”）。若是情况 (2)，智能体则执行所请求的工具调用，并将工具执行的结果追加到原始提示中。工具的输出结果将用于生成新的输入，并再次提交给模型；智能体基于这个更新后的上下文，开始新一轮推理。

此过程循环往复，直至模型不再发起工具调用，转而生成一条面向用户的消息（在 OpenAI 模型中称为 _助手消息_）。多数情况下，此消息会直接回应用户的初始请求，但也可能是一个向用户提出的追问。

由于智能体能够执行会修改本地环境的工具调用，因此其“输出”并不局限于助手消息本身。在许多场景下，软件智能体最主要的“输出”，其实是它在您计算机上直接编写或修改的代码。然而，每一轮交互最终都会由一条助手消息来结束，例如“您要求的 `architecture.md` 文件已添加”，这标志着智能体循环达到终止状态。从智能体的视角来看，其任务已告完成，控制权也随之交还给用户。

图中所示的从 _用户输入_ 到 _智能体响应_ 的完整过程，被称为一次对话 _轮次_（在 Codex 中也称为一个 _对话线程_）。需要注意的是，一次 _对话轮次_ 可能包含**模型推理**与**工具调用**之间的多次循环迭代。每当您向既有对话发送新消息时，包括之前所有轮次的消息与工具调用在内的完整对话历史，都会被纳入新轮次的提示中：

这意味着，随着对话的推进，用于模型采样的提示也会越来越长。。提示长度至关重要，因为每个模型都有一个 _上下文窗口_，即其单次推理调用所能处理的最大 Token 数。需要注意，此窗口的容量同时涵盖了输入 _与_ 输出 Token。可以想象，智能体在单轮交互中可能发起数百次工具调用，因此存在耗尽上下文窗口的风险。正因如此，_上下文窗口管理_ 便成了智能体的核心职责之一。现在，让我们深入 Codex 内部，看其如何运行智能体循环。

模型推理
----

Codex CLI 通过向 [Responses API](https://platform.openai.com/docs/api-reference/responses) 发送 HTTP 请求来执行模型推理。接下来，我们将详细分析信息如何流经 Codex，以及它如何利用 Responses API 来驱动智能体循环。

*   [通过 ChatGPT 登录](https://github.com/openai/codex/blob/d886a8646cb8d3671c3029d08ae8f13fa6536899/codex-rs/core/src/model_provider_info.rs#L141)使用 Codex CLI 时，会使用 `https://chatgpt.com/backend-api/codex/responses` 作为端点
*   [使用 API 密钥](https://github.com/openai/codex/blob/d886a8646cb8d3671c3029d08ae8f13fa6536899/codex-rs/core/src/model_provider_info.rs#L143)对 OpenAI 托管模型进行身份验证时，会使用 `https://api.openai.com/v1/responses` 作为端点
*   使用 `--oss` 参数运行 Codex CLI 以配合 [gpt-oss](https://openai.com/zh-Hans-CN/index/introducing-gpt-oss/)（并与 [ollama 0.13.4+](https://github.com/openai/codex/pull/8798) 或 [LM Studio 0.3.39+](https://lmstudio.ai/blog/openresponses) 一同使用）时，默认端点为本地运行的 `http://localhost:11434/v1/responses`
*   Codex CLI 也可与 Azure 等云服务商托管的 Responses API 协同运行

接下来，我们探讨 Codex 如何为对话中的第一次推理调用创建提示。

作为最终用户，您在查询 Responses API 时，并不需要逐字输入用于对模型进行采样的提示。取而代之的是，您只需在查询中指定各类输入，Responses API 服务器会负责将这些信息组织成模型可接受的提示结构。您可以将提示理解为一个“项目列表”；本节将阐述您的查询如何被转换为此列表。

在初始提示中，列表内的每个项目都关联一个角色。`角色`决定了其关联内容的权重优先级，取值如下（按优先级降序排列）：`system`、`developer`、`user`、`assistant`。

*   [`instructions`](https://platform.openai.com/docs/api-reference/responses/create#responses_create-instructions)：插入到模型上下文中的系统（或开发者）消息
*   [`tools`](https://platform.openai.com/docs/api-reference/responses/create#responses_create-tools)：模型在生成响应时可能调用的工具列表
*   [`input`](https://platform.openai.com/docs/api-reference/responses/create#responses_create-input)：提供给模型的文本、图像或文件输入列表

`tools` 字段是一个工具定义列表，需符合 Responses API 定义的 schema。对 Codex 而言，这一列表通常包含：Codex CLI 内置工具、通过 Responses API 向 Codex 开放的工具，以及用户（通常通过 MCP 服务器）提供的工具：

最后，JSON 负载中的 `input` 字段本身也是一个项目列表。在添加用户消息之前，Codex 会先[将以下项目插入](https://github.com/openai/codex/blob/99f47d6e9a3546c14c43af99c7a58fa6bd130548/codex-rs/core/src/codex.rs#L1387-L1415)`input`：

1.一条 `role=developer` 的消息，用于描述沙盒权限。此沙盒 _仅适用于在_`tools`部分定义的、由 Codex 提供的 `shell` 工具。也就是说，其他工具（例如来自 MCP 服务器的工具）不受 Codex 沙盒限制，需自行负责执行其防护措施。

（可选）一条 `role=developer` 的消息，其内容是从用户 `config.toml` 文件中读取的 `developer_instructions` 值。

（可选）一条 `role=user` 的消息，其内容为“用户指令”，这些指令并非源自单一文件，而是[从多个来源聚合而来](https://github.com/openai/codex/blob/99f47d6e9a3546c14c43af99c7a58fa6bd130548/codex-rs/core/src/project_doc.rs#L37-L42)。通常，更具体的指令会出现在更靠后的位置：

*   `$CODEX_HOME` 目录中 `AGENTS.override.md` 和 `AGENTS.md` 的内容。
*   受大小限制（默认 32 KiB），从 `cwd` 的 Git/项目根目录（如果存在）开始，向上逐级检查每个目录，直至 `cwd` 本身：添加 `AGENTS.override.md`、`AGENTS.md`、或 config.toml 中由 `project_doc_fallback_filenames` 指定的任何文件的内容
*   如果已配置任何[技能](https://developers.openai.com/codex/skills/)：

当 Codex 根据前述计算对 `input` 进行初始化后，就会将用户消息追加进去，从而开始一轮新的对话。

前面的示例侧重于每条消息的内容，但请注意，`input` 中的每个元素都是一个 JSON 对象，包含 `type`、[`role`](https://www.reddit.com/r/OpenAI/comments/1hgxcgi/what_is_the_purpose_of_the_new_developer_role_in/) 和 `content` 字段，如下所示：

当 Codex 构建好要发送给 Responses API 的完整 JSON 负载后，它会根据 `~/.codex/config.toml` 中 Responses API 端点的配置，发起一个带有 `Authorization` 标头的 HTTP POST 请求（如果指定了额外的 HTTP 头和查询参数，也会一并添加）。

当 OpenAI 的 Responses API 服务器收到请求时，它会使用 JSON 为模型推导出提示，如下所示（当然，Responses API 的自定义实现可能做出不同选择）：

如您所见，提示中前三个项目的顺序由服务器决定，而非客户端。也就是说，在这三个项目中，只有 _system message_ 的内容也由服务器控制，因为 `tools` 和 `instructions` 由客户端决定。之后，来自 JSON 负载的 `input` 会紧随其后，从而完成整个提示的构建。

现在，我们已准备好提示，可以对模型进行采样了。

这次对 Responses API 的 HTTP 请求开启了 Codex 中的第一轮对话。服务器回复一个服务器发送事件 ([SSE](https://en.wikipedia.org/wiki/Server-sent_events)) 流。每个事件的 `data` 是一个 JSON 负载，其`”type”`字段以`”response”`开头，可能类似以下示例（完整事件列表请参阅我们的 [API 文档](https://platform.openai.com/docs/api-reference/responses-streaming)）：

Codex 会[处理事件流](https://github.com/openai/codex/blob/2a68b74b9bf16b64e285495c1b149d7d6ac8bdf4/codex-rs/codex-api/src/sse/responses.rs#L334-L342)，并将其重新发布为可供客户端使用的内部事件对象。像 `response.output_text.delta` 这样的事件用于支持 UI 中的流式输出，而像 `response.output_item.added` 这样的事件则被转换为对象，并追加到 `input` 中，供后续的 Responses API 调用使用。

假设对 Responses API 的第一次请求包含两个 `response.output_item.done` 事件：一个 `type=reasoning`，另一个 `type=function_call`。当我们带着工具调用的响应再次查询模型时，这些事件必须体现在 JSON 的 `input` 字段中：

那么，用于在后续查询中对模型进行采样的提示将如下所示：

需要特别注意的是，旧提示是新提示的 _精确前缀_。这是有意为之的，因为这样可以显著提升后续请求的效率，让我们得以充分利用 _提示缓存_（详见下一节“性能”部分）。

回顾智能体循环的第一张示意图，我们可以看到推理和工具调用之间可能发生多次迭代。提示可能会持续增长，直到我们最终收到一条助手消息，标志该轮对话结束：

在 Codex CLI 中，我们会向用户展示助手消息，并自动聚焦输入框，提示用户该轮到自己继续输入、推进对话了。如果用户做出回应，则上一轮的助手消息和用户的新消息都必须追加到 Responses API 请求的 `input` 中，以开始新一轮对话：

再次强调，随着对话不断推进，我们发送给 Responses API 的 `input` 长度会不断增加：

接下来，我们分析这个不断增长的提示会对性能产生什么样的影响。

不少读者这时可能会想到：“如果把整段对话都算上，发送到 Responses API 的 JSON 总量是不是呈 _二次增长_？”这种直觉是正确的。尽管 Responses API 确实支持一个可选的 [`previous_response_id`](https://platform.openai.com/docs/api-reference/responses/create#responses_create-previous_response_id) 参数来缓解此问题，但 Codex 目前并未使用它，主要是为了保持请求完全无状态，并支持零数据保留 (ZDR) 配置。

选择不使用 `previous_response_id`，可以让 Responses API 提供方的实现更简单，因为每个请求都将保持 _无状态_。对选择启用[零数据保留（ZDR）](https://platform.openai.com/docs/guides/migrate-to-responses#4-decide-when-to-use-statefulness)的客户而言，这也让支持流程更简单明晰，因为只要依赖 `previous_response_id`，就需要存储相应数据，而这与 ZDR 的原则相违背。请注意，ZDR 客户不会牺牲从先前轮次专有推理消息中获益的能力，因为相关的 `encrypted_content` 可以在服务器上解密。（OpenAI 会保存 ZDR 客户的解密密钥，但不会保存他们的数据。）有关支持 ZDR 的 Codex 相关更改，请参见 PR [#642](https://github.com/openai/codex/pull/642) 和 [#1641](https://github.com/openai/codex/pull/1641)。

通常，模型采样的成本远高于网络流量成本，因此采样成为我们提升效率的主要目标。正因如此，提示缓存才至关重要，它使我们能够重用先前推理调用中的计算。一旦命中缓存，_模型采样的开销就会从二次复杂度降为线性复杂度_。我们的[提示缓存](https://platform.openai.com/docs/guides/prompt-caching#structuring-prompts)文档有更详细的说明：

_缓存命中仅在提示内部存在精确的前缀匹配时才可能发生。为实现缓存优势，请将指令和示例等静态内容置于提示开头，而将用户特定信息等可变内容置于提示末尾。这也适用于图像和工具，它们在各次请求间必须完全相同。_

考虑到这一点，让我们看看哪些类型的操作可能导致 Codex 发生“缓存未命中”：

*   在对话中途更改模型可用的 `tools`。
*   更改作为 Responses API 请求目标的`模型`（实际上，这会更改原始提示中的第三项，因为该项包含模型特定的指令）。
*   更改沙盒配置、审批模式或当前工作目录。

在可能的情况下，我们通过向 `input` 追加一条 _新_ 消息（而非修改之前的消息）来处理对话中发生的配置更改：

*   如果沙盒配置或审批模式发生变化，我们[插入](https://github.com/openai/codex/blob/99f47d6e9a3546c14c43af99c7a58fa6bd130548/codex-rs/core/src/codex.rs#L1037-L1057)一条新的 `role=developer` 消息，其格式与原始的 `<permissions instructions>` 项目相同。
*   如果当前工作目录发生变化，我们[插入](https://github.com/openai/codex/blob/99f47d6e9a3546c14c43af99c7a58fa6bd130548/codex-rs/core/src/codex.rs#L1017-L1035)一条新的 `role=user` 消息，其格式与原始的 `<environment_context>` 相同。

我们竭尽全力确保缓存命中以提升性能。我们还需管理另一个关键资源：上下文窗口。

为避免耗尽上下文窗口，我们采用的通用策略是：当 Token 总数超过设定阈值时，就对当前对话进行 _压缩_。具体来说，我们用一个新的、更小的项目列表替换 `input`，该列表代表了对话内容，使智能体能够在理解已发生情况的基础上继续工作。早期的[压缩实现](https://github.com/openai/codex/pull/1527)要求用户手动调用 `/compact` 命令，该命令会使用现有对话加上用于[摘要](https://github.com/openai/codex/blob/e2c994e32a31415e87070bef28ed698968d2e549/SUMMARY.md)的自定义指令来查询 Responses API。Codex 将包含摘要的助手消息结果[用作新的 `input`](https://github.com/openai/codex/blob/e2c994e32a31415e87070bef28ed698968d2e549/codex-rs/core/src/codex.rs#L1424)，用于后续对话轮次。

下期预告
----

我们已经介绍了 Codex 智能体循环，并逐步讲解了 Codex 在查询模型时如何构建和管理其上下文。在此过程中，我们强调了在 Responses API 之上构建智能体循环时的实用考量和最佳实践。

虽然智能体循环为 Codex 奠定了基础，但这仅仅是个开始。在接下来的文章中，我们将深入探讨 CLI 的架构、研究工具使用的实现方式，并仔细审视 Codex 的沙盒模型。

## 相关文档

- [[01-博客/OpenAI/解锁 Codex 运行框架：我们如何构建 App Server|解锁 Codex 运行框架：我们如何构建 App Server]]；关联理由：上下游；说明：该文在本篇智能体循环基础上展开到 App Server 协议与线程生命周期，属于同一运行框架的下游实现。
- [[01-博客/OpenAI/Harness engineering：在代理优先的世界里运用 Codex|Harness engineering：在代理优先的世界里运用 Codex]]；关联理由：解说；说明：该文给出 Codex 运行框架在真实工程团队中的落地方法，解释了循环能力如何转化为工程产能。

## 关联主题

- [[00-元语/OpenAI]]
- [[00-元语/Codex]]
- [[00-元语/Agent]]
- [[00-元语/AI]]
- [[00-元语/mcp]]
- [[00-元语/prompt]]
- [[00-元语/protocol]]
- [[00-元语/cli]]
- [[00-元语/llm]]
- [[00-元语/context-optimization]]
- [[00-元语/workflow]]
- [[00-元语/tool]]
- [[00-元语/security]]
