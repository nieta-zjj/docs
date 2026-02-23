---
title: "Agent 架构综述：从 Prompt 到 Context"

站点: "微信公众平台"
原文链接: "https://mp.weixin.qq.com/s/pIcZPDqYzXrE3i6Zh4sr-Q"
发布日期: "2025-08-21"
作者: "火山引擎开发者社区"
---

## 摘要

**1) 一句话总结**
现代 Agent 系统的核心架构正从静态的提示工程（Prompt Engineering）演进为动态的上下文工程（Context Engineering），专注于通过 RAG、多智能体编排和自动化数据流为大模型提供精准的背景信息与工具。

**2) 关键要点**
*   **范式转移：** 从战术性的 Prompt Engineering（手动构建指令）转向战略性的 Context Engineering（构建自动化系统），Prompt 负责指导模型“如何思考”，而 Context 负责提供“所需知识和工具”。
*   **Context 的完整范畴：** 涵盖 LLM 响应前所需的所有信息生态，包括系统指令、长短期记忆、动态检索数据（RAG）、可用工具定义及输出格式规范。
*   **RAG 作为核心基石：** RAG 架构通过离线索引和在线推理（检索、增强、生成）构建 Context Stack，目前已从基础实现演进为包含自我反思（CRAG）、自主学习（Self-RAG）和智能体集成（Agentic RAG）的高级形态。
*   **上下文工程核心技术：** 包含从原始数据到相关分块（如语义分块、智能体分块）、通过两阶段检索（召回+Cross-Encoder 精排）提升精度，以及通过过滤、提取和摘要来压缩优化上下文窗口。
*   **智能体上下文管理策略：** LangChain 提出了实现自动化系统（SITL）的四大策略：持久化（Write）、检索（Select）、优化（Compress）和隔离（Isolate）。
*   **工作流与智能体的结合：** 复杂系统通过编排层结合了高确定性的工作流（如链式、路由、编排器-工作者模式）与高灵活性的智能体（基于 ReAct、规划和反思机制）。
*   **LangGraph 状态图架构：** 通过共享状态（State）、计算节点（Nodes）、流向边（Edges）和持久化检查点（Checkpointer）清晰定义和管理多智能体系统中的数据流动。

**3) 风险与缺口（基于原文明确提及）**
*   **提示工程的生产局限性：** 纯提示方法存在脆弱性（微小措辞变化导致输出差异大）、扩展性差、增加用户负担以及无状态性（难以处理多步任务）等固有限制。
*   **大模型的固有缺陷：** 存在知识停留在训练时间点（知识冻结）、缺乏组织私有领域知识以及容易产生事实幻觉的风险（需通过 RAG 缓解）。
*   **“Lost in the Middle”现象（中间迷失）：** LLM 在处理长上下文时呈 U 型性能曲线，关键信息若位于中间段落容易被忽略（“知道但说不出来”），简单堆砌上下文反而会淹没关键信号。
*   **分块与语义破坏风险：** 在 RAG 流程中，采用固定大小的朴素分块容易切断句子，导致文本语义破碎。
*   **智能体可控性风险：** 相比于预定义代码路径的工作流（Workflows），完全自主的智能体（Agents）动态决定数据流向，系统可控性较低。

## 正文

### 背景：术语的分歧与演进

在观察去年以来对于“Prompt Engineering（提示工程）”的解构时，我们可以观察到一个微妙但重要的分歧。

一方面，专注于构建可扩展系统的前沿实践者们（如 Andrej Karpathy 等），积极倡导用“Context Engineering（上下文工程）”来描述工作。他们认为“Prompt Engineering”这个词不足以涵盖复杂性，甚至认为它只是“给在聊天框里打字起的一个可笑的自命不凡的名字”。因为构建 Agent 系统的核心挑战并非仅仅是 Prompt，而是设计整个数据流以动态生成最终提示的架构。

另一方面，近年来学术和正式文献倾向用“Prompt Engineering”作为一个广义的伞形术语（umbrella term），其定义包括了支持性内容（Supporting content）或上下文（Context），把所有在不改变模型权重的前提下操纵模型输入的技术归为同一类型。

这种术语上的分歧反映了该领域的成熟过程：随着 AI 应用从简单的单次交互发展到复杂的、有状态的智能体系统，优化静态指令已经无法满足需求。“Context Engineering”的出现，正是为了区分两种不同层次的活动：一是编写指令的技能，二是构建自动化系统以为该指令提供成功所需信息的科学。

*注：本文明确，尽管在学术上 Prompt Engineering 可能涵盖上下文，但在工程实践中，Context Engineering 是专注于如何动态构建和管理上下文的专门学科。*

---

### 重新定义 Agent 数据流：Context is All You Need

从 Prompt Engineering 到 Context Engineering 的转变，代表了人工智能应用开发领域一次关键的演进——从业界最初关注的战术性指令构建，转向由可扩展、高可靠性系统需求驱动的战略性架构设计。

#### Prompt Engineering：指令的艺术
Prompt Engineering 是与大型语言模型（LLM）交互的基础，其核心在于精心设计输入内容，以引导模型生成期望的输出。

一个提示（Prompt）是一个结构化的输入，通常包含以下组件：
*   **指令（Instructions）：** 对模型的核心任务指令，明确告知模型需要执行什么操作。
*   **主要内容/输入数据（Primary Content/Input Data）：** 模型需要处理的文本或数据，是分析、转换或生成任务的对象。
*   **示例（Examples/Shots）：** 演示期望的输入-输出行为，为模型提供“上下文学习”的基础。
*   **线索/输出指示器（Cues/Output Indicators）：** 启动模型输出的引导性词语，或对输出格式（如 JSON、Markdown）的明确要求。
*   **支持性内容（Supporting Content/Context）：** 为模型提供的额外背景信息，帮助其更好地理解任务情境。正是这一组件，构成了 Context Engineering 发展的概念萌芽。

**核心技术分类：**
*   **零样本提示（Zero-Shot Prompting）：** 不提供示例，直接下达任务。
*   **少样本提示（Few-Shot Prompting）：** 提供少量高质量示例引导模型行为。
*   **思维链提示（Chain-of-Thought Prompting, CoT）：** 引导模型将复杂问题分解为中间推理步骤。
*   **高级推理技术：** 如思维树（Tree-of-Thought）、苏格拉底式提示和由简到繁提示（Least-to-Most Prompting）。

**局限性：**
尽管至关重要，但以提示为中心的方法在生产环境中存在固有的局限性：
1.  **脆弱性与不可复现性：** 微小的措辞变化可能导致输出巨大差异，更像依赖试错的“艺术”而非“科学”。
2.  **扩展性差：** 手动优化提示难以应对大量用户、多样化用例和边缘情况。
3.  **用户负担：** 将构建详尽指令的负担压在用户身上，对自主运行或高并发系统不切实际。
4.  **无状态性：** 本质上为单轮交互设计，难以处理需要记忆和状态管理的长对话或多步任务。

#### Context Engineering 的兴起：范式转移
Context Engineering 并非要取代 Prompt Engineering，而是一个更高阶、更侧重于系统设计的必要学科。它旨在设计、构建并优化动态自动化系统，为 LLM 在正确的时间、以正确的格式提供正确的信息和工具，从而可靠、可扩展地完成复杂任务。

简而言之：**Prompt 告诉模型如何思考，而 Context 则赋予模型完成工作所需的知识和工具。**

**“Context”的范畴涵盖了 LLM 做出响应前所能看到的所有信息生态系统：**
*   系统级指令和角色设定。
*   对话历史（短期记忆）。
*   持久化的用户偏好和事实（长期记忆）。
*   动态检索的外部数据（例如来自 RAG）。
*   可用的工具（API、函数）及其定义。
*   期望的输出格式（例如 JSON Schema）。

**二者关系：**
Prompt Engineering 是 Context Engineering 的一个子集。Context Engineering 决定用什么内容填充 Context Window，而 Prompt Engineering 负责优化窗口内的具体指令。

---

### Context Engineering 的基石：RAG

检索增强生成（RAG）不仅是一种技术，更是现代 Context Engineering 系统的基础架构。

#### 解决 LLM 的核心弱点
*   **知识冻结：** RAG 通过在推理时注入实时、最新信息，解决模型知识停留在训练数据时间点的问题。
*   **缺乏领域专有知识：** RAG 将 LLM 连接到组织内部私有数据（如技术手册、政策文件）。
*   **幻觉（Hallucination）：** RAG 将回答“锚定”在可验证的检索证据上，提高事实准确性。

#### RAG 工作流
1.  **索引（离线阶段）：** 处理外部知识源。文档被加载、分割成 chunks，通过 Embedding Model 转换为向量并存储在向量数据库中。
2.  **推理（在线阶段）：**
    *   **检索（Retrieve）：** 将用户查询转换为向量，在数据库中进行相似性搜索。
    *   **增强（Augment）：** 将检索到的文档块与用户查询、系统指令结合，构建增强提示。
    *   **生成（Generate）：** 将增强提示输入 LLM，生成有理有据的回答。

#### RAG 架构分类
*   **Naive RAG：** 基础实现，适用于简单问答。
*   **Advanced RAG：** 引入检索前后处理步骤（如复杂分块、查询转换、重排序、上下文压缩）。
*   **Modular RAG：** 模块化视图，包含带记忆的 RAG、分支/路由 RAG 等。
*   **Corrective RAG (CRAG)：** 增加自我反思步骤，评估检索质量并触发替代策略（如网络搜索）。
*   **Self-RAG：** LLM 自主学习判断何时需要检索及检索什么内容。
*   **Agentic RAG：** 最先进的形式，集成到智能体循环中，模型主动与多数据源和工具交互。

#### Context Stack 与向量数据库选型
RAG 系统的组件形成了一个连贯的多层次架构，可抽象为 **Context Stack**。数据在离线阶段从文档流向数据库，在在线阶段从查询流向最终提示。

不同的技术供应商专注于 Stack 的特定层面：
*   **Database layer：** Pinecone, Weaviate, Milvus 等。
*   **Application Orchestration Layer：** LangChain, LlamaIndex 等。
*   **Re-ranking as a Service (RaaS)：** Cohere, Jina AI 等。

组织在选择向量数据库时，需考量：模型（云服务 vs 自托管）、扩展性（数据量与并发）、功能集（混合搜索、多模态）以及易用性与灵活性。

---

### Context 工程化的核心概念和目标

#### 从原始数据到相关分块 (Chunking)
文本分块是 RAG 流程中最关键的一步，目标是创建语义自成一体的文本块。
*   **朴素分块：** 固定大小，容易切断句子导致语义破碎。
*   **内容感知分块：**
    *   *递归字符分割：* 按预设层次（段落->句子->单词）分割。
    *   *文档特定分块：* 基于 Markdown 标题、代码函数等结构分割。
    *   *语言学分块：* 基于 NLP 库的语法边界分割。
    *   *语义分块：* 使用嵌入模型检测语义转变点进行分割，确保主题内聚。
    *   *智能体分块：* 利用 LLM 智能体决定如何分块。

#### 通过重排序 (Re-ranking) 提升精度
业界普遍采用两阶段检索流程以平衡速度和准确性：
1.  **第一阶段（召回）：** 使用快速检索器（向量搜索或 BM25）广泛撒网，召回较大候选集。
2.  **第二阶段（精排）：** 使用强大的 Cross-Encoder 模型对候选集重新评估。Cross-Encoder 将查询和文档同时作为输入，通过注意力机制深度交互，捕捉细微语义关系。

#### 核心问题：Lost in the Middle
当前 LLM 存在认知局限：在处理长上下文时表现出 U 型性能曲线。模型能高效利用开头和结尾的信息，但当关键信息隐藏在中间时，性能显著下降。实验表明，简单堆砌上下文不仅无益，反而会淹没关键信息。模型内部探测显示，模型通常能编码信息位置，但在生成答案时未能有效利用（“知道但说不出来”）。

#### 优化上下文窗口：压缩与摘要
为了在固定的 Token 预算内最大化“信号”并最小化“噪声”，需要主动管理上下文：
*   **过滤式压缩：** 利用 LLM (LLMChainFilter) 或余弦相似度 (EmbeddingsFilter) 决定是否保留整个文档。
*   **内容提取式压缩：** 使用 LLM 从文档中仅提取与查询相关的句子。
*   **用 top N 代替压缩：** 重排序后仅返回排名最高的 N 个文档。
*   **摘要：** 对长文档或对话历史生成摘要注入上下文，保留关键信息并减少 Token。

#### 智能体系统的上下文管理：从 HITL 到 SITL
Prompt Engineering 是手动的 Human-in-the-Loop (HITL) 过程，而 Context Engineering 旨在构建自动化的 System-in-the-Loop (SITL)。

LangChain 提出了智能体上下文管理的四个关键策略：
1.  **Write (持久化)：** 使用 Scratchpads 记录中间步骤，使用 Memory 存储长期事实和偏好。
2.  **Select (检索)：** 动态使用 RAG 从记忆、工具库或知识库中选择相关上下文。
3.  **Compress (优化)：** 利用摘要或修剪技术防止上下文窗口溢出。
4.  **Isolate (分割)：** 通过多智能体系统分解任务，或在沙盒环境中执行工具调用，隔离复杂对象。

---

### 多智能体架构中的 Context 数据流与工作流编排

当智能体需要调用工具、访问数据库并进行多轮交互时，内部数据流的设计至关重要。

#### 工作流 (Workflows) vs. 智能体 (Agents)
*   **工作流：** LLM 和工具通过预定义代码路径编排，数据流向固定。确定性高，适合有明确业务流程、高风控要求的场景。
*   **智能体：** LLM 动态指导流程和工具使用，自主决定数据流向。灵活性高，适合开放式问题，但可控性较低。

复杂的系统通常是两者的混合体，由**编排层（Orchestration Layer）**进行管理。

#### 预定义数据流的实现模式
*   **链式工作流 (Prompt Chaining)：** 模块串行执行，每个模块负责明确的子任务。
*   **路由工作流 (Routing)：** 充当“路由器”的 LLM 决定下一步调用哪个业务模块。
*   **编排器-工作者模式 (Orchestrator-Workers)：** 中心 Orchestrator 分解任务，分配给拥有独立上下文和专用工具的 Workers 智能体。

#### 决策与数据选择机制
*   **ReAct 框架：** 模拟人类的“思考-行动-观察”循环。LLM 先进行内部推理（Thought），决定调用工具（Action），系统执行并返回结果（Observation），LLM 接收新数据后再次思考。
*   **Planning 和任务分解：** 高阶规划模块将宏大目标分解为子任务清单，定义后续调用的顺序和数据依赖关系。
*   **Reflection 机制：** 智能体在执行任务后评估结果质量，若发现问题则自我修正并重新规划路径。

#### 框架与工具：LangGraph
LangGraph 将智能体应用构建为状态图（State Graph），清晰定义数据流动：
*   **状态 (State)：** 所有节点共享的中央数据对象（数据总线）。
*   **节点 (Nodes)：** 计算单元，接收 State，执行任务并返回更新。
*   **边 (Edges)：** 连接节点，定义数据流向（包括简单边和条件边）。
*   **检查点 (Checkpointer)：** 提供持久化机制，支持长期记忆和流程的中断/恢复。

---

### Context Engineering 的未来

1.  **Graph RAG 的兴起：** 利用知识图谱检索显式关系，支持复杂的多跳推理，弥补标准向量 RAG 处理高度互联数据时的局限。
2.  **智能体自主性的增强：** Self-RAG 和 Agentic RAG 将成为趋势，LLM 将承担更多管理自身上下文的责任。
3.  **超越固定上下文窗口：** 针对 Lost in the Middle 问题的研究（如改进位置编码和训练技术）可能从根本上改变当前的约束。
4.  **终极目标：** Context Engineering 本质上是一套补偿机制，用以弥补 LLM “只读 Token 不读心”的现实。长远来看，随着具有更强大内部世界模型的 AI 的出现，对庞大外部上下文支架的依赖将逐渐减少。

---

### 参考链接
*   [Core prompt learning techniques | Microsoft Press Store](https://www.microsoftpressstore.com/articles/article.aspx?p=3192408&seqNum=2)
*   [Prompt Engineering for AI Guide | Google Cloud](https://cloud.google.com/discover/what-is-prompt-engineering)
*   [A Systematic Survey of Prompt Engineering in Large Language Models - arXiv](https://arxiv.org/pdf/2402.07927)
*   [What is Prompt Engineering? - AWS](https://aws.amazon.com/what-is/prompt-engineering/)
*   [Which Prompting Technique Should I Use? - arXiv](https://arxiv.org/html/2506.05614v1)
*   [The rise of "context engineering" - LangChain Blog](https://blog.langchain.com/the-rise-of-context-engineering/)
*   [Context Engineering - LangChain Blog](https://blog.langchain.com/context-engineering-for-agents/)
*   [Unleashing the potential of prompt engineering for large language models - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12191768/)
*   [Retrieval Augmented Generation (RAG) for LLMs - Prompt Engineering Guide](https://www.promptingguide.ai/research/rag)
*   [What Is Retrieval-Augmented Generation aka RAG - NVIDIA Blog](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)
*   [Never Lost in the Middle - arXiv](https://arxiv.org/html/2311.09198v2)
*   [Mastering Chunking Strategies for RAG - Databricks Community](https://community.databricks.com/t5/technical-blog/the-ultimate-guide-to-chunking-strategies-for-rag-applications/ba-p/113089)
*   [How to do retrieval with contextual compression - Python LangChain](https://python.langchain.com/docs/how_to/contextual_compression/)
*   [How do I choose between Pinecone, Weaviate, Milvus, and other vector databases?](https://milvus.io/ai-quick-reference/how-do-i-choose-between-pinecone-weaviate-milvus-and-other-vector-databases)
*   [Retrieve & Re-Rank — Sentence Transformers documentation](https://www.sbert.net/examples/sentence_transformer/applications/retrieve_rerank/README.html)
*   [Lost in the Middle: How Language Models Use Long Contexts - Stanford](https://cs.stanford.edu/~nfliu/papers/lost-in-the-middle.arxiv2023.pdf)
*   [LLMs Get Lost In Multi-Turn Conversation - arXiv](https://arxiv.org/pdf/2505.06120)
*   [Building Effective AI Agents - Anthropic](https://www.anthropic.com/research/building-effective-agents)
*   [What is LLM Orchestration? - IBM](https://www.ibm.com/think/topics/llm-orchestration)
*   [Agent architectures - LangGraph](https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/)
*   [What is a ReAct Agent? | IBM](https://www.ibm.com/think/topics/react-agent)
*   [LLM Agents - Prompt Engineering Guide](https://www.promptingguide.ai/research/llm-agents)

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/prompt]]
- [[00-元语/rag]]
- [[00-元语/context-optimization]]
- [[00-元语/memory]]
- [[00-元语/react]]
- [[00-元语/knowledge-graph]]
- [[00-元语/workflow]]
