# AI Memory：高质量仓库与博客产品清单

## 文档信息

- 发布日期：2026-02-22
- 时间范围：2025-08-26 至 2026-02-22
- 条目总数：75
- 仓库数量：55
- 博客数量：20
- 原文链接：见正文各条目链接

## 摘要

### 1) 一句话总结
本文档汇总了75个高评分的AI记忆与上下文管理资源，涵盖了从底层向量数据库、通用记忆层到多智能体编排框架及前沿研究博客的开源项目与技术进展。

### 2) 核心要点
*   **项目规模与质量**：列表共包含75个开源代码库和技术博客，评分集中在89至100之间，重点聚焦于AI智能体（Agent）的长期记忆、RAG（检索增强生成）和上下文工程。
*   **头部高星项目**：最受关注的开源项目包括高吞吐量推理引擎 `vllm`（70,898 Stars）、AI通用记忆层 `mem0`（47,773 Stars）以及生产级AI编排框架 `haystack`（24,257 Stars）。
*   **通用记忆层（Memory Layer）的崛起**：涌现出大量旨在取代复杂RAG流水线的独立记忆层项目（如 `memvid`、`supermemory`、`cognee`、`Memori`），为AI智能体提供即时检索、SQL原生支持和持久化的长期记忆。
*   **MCP（模型上下文协议）的广泛集成**：MCP 正在成为标准，多个项目（如 `supermemory-mcp`、`mcp-memory-service`、`context-portal`）利用该协议为不同的LLM、IDE（如 Cursor、VS Code）和工作流提供统一的记忆访问接口。
*   **RAG 技术的深度演进**：RAG 正在与知识图谱和图数据库深度结合（如 `HippoRAG` 引入个性化 PageRank，`AutoMem` 提供关系型图向量记忆），以提升跨文档知识的持续整合能力。
*   **端侧与本地轻量化方案**：针对资源受限环境的记忆方案受到重视，例如适用于端侧的 `Wax`、总大小仅888KiB且可运行于ESP32微控制器的 `zclaw`，以及100%本地运行的 `LocalRecall`。
*   **记忆标准化与格式化**：行业开始探索智能体记忆的标准化，例如 `agent-file` 提出了一种 `.af` 开放文件格式，用于在不同框架间序列化、共享和版本控制带有持久化记忆的AI智能体。
*   **头部AI企业的技术聚焦**：Google、DeepMind、Anthropic、Mistral 和 OpenAI 等企业密集发布了关于长上下文提示（Long Context）、上下文检索（Contextual Retrieval）以及智能体记忆系统构建的工程实践博客。

### 3) 风险/不足
*(注：以下提取自原文明确提及的痛点或问题)*
*   **内存泄漏风险**：在 LLM 高吞吐量推理引擎 vLLM 的工程实践中，存在需要专门调试的内存泄漏（Memory Leak）问题（来源：Mistral 博客）。
*   **算力瓶颈**：LLM Embedding 模型在 Query（查询）侧存在算力瓶颈，目前有最新研究（如 LightRetriever）正致力于从架构上彻底移走该瓶颈（来源：机器之心博客）。

## 正文

### Top 10

1. deepset-ai/haystack（评分：100，Stars：24257）
- 链接：https://github.com/deepset-ai/haystack

2. memvid/memvid（评分：100，Stars：13179）
- 链接：https://github.com/memvid/memvid

3. panaversity/learn-agentic-ai（评分：100，Stars：3911）
- 链接：https://github.com/panaversity/learn-agentic-ai

4. campfirein/cipher（评分：100，Stars：3529）
- 链接：https://github.com/campfirein/cipher

5. volcengine/OpenViking（评分：100，Stars：3290）
- 链接：https://github.com/volcengine/OpenViking

6. OSU-NLP-Group/HippoRAG（评分：100，Stars：3227）
- 链接：https://github.com/OSU-NLP-Group/HippoRAG

7. qhjqhj00/MemoRAG（评分：100，Stars：2210）
- 链接：https://github.com/qhjqhj00/MemoRAG

8. neuron-core/neuron-ai（评分：100，Stars：1704）
- 链接：https://github.com/neuron-core/neuron-ai

9. szczyglis-dev/py-gpt（评分：100，Stars：1626）
- 链接：https://github.com/szczyglis-dev/py-gpt

10. supermemoryai/supermemory-mcp（评分：100，Stars：1616）
- 链接：https://github.com/supermemoryai/supermemory-mcp

### 仓库清单

1. deepset-ai/haystack（评分：100，Stars：24257）
- 链接：https://github.com/deepset-ai/haystack

2. memvid/memvid（评分：100，Stars：13179）
- 链接：https://github.com/memvid/memvid

3. panaversity/learn-agentic-ai（评分：100，Stars：3911）
- 链接：https://github.com/panaversity/learn-agentic-ai

4. campfirein/cipher（评分：100，Stars：3529）
- 链接：https://github.com/campfirein/cipher

5. volcengine/OpenViking（评分：100，Stars：3290）
- 链接：https://github.com/volcengine/OpenViking

6. OSU-NLP-Group/HippoRAG（评分：100，Stars：3227）
- 链接：https://github.com/OSU-NLP-Group/HippoRAG

7. qhjqhj00/MemoRAG（评分：100，Stars：2210）
- 链接：https://github.com/qhjqhj00/MemoRAG

8. neuron-core/neuron-ai（评分：100，Stars：1704）
- 链接：https://github.com/neuron-core/neuron-ai

9. szczyglis-dev/py-gpt（评分：100，Stars：1626）
- 链接：https://github.com/szczyglis-dev/py-gpt

10. supermemoryai/supermemory-mcp（评分：100，Stars：1616）
- 链接：https://github.com/supermemoryai/supermemory-mcp

11. doobidoo/mcp-memory-service（评分：100，Stars：1356）
- 链接：https://github.com/doobidoo/mcp-memory-service

12. moyangzhan/langchain4j-aideepin（评分：100，Stars：1168）
- 链接：https://github.com/moyangzhan/langchain4j-aideepin

13. philippgille/chromem-go（评分：100，Stars：868）
- 链接：https://github.com/philippgille/chromem-go

14. heurist-network/heurist-agent-framework（评分：100，Stars：776）
- 链接：https://github.com/heurist-network/heurist-agent-framework

15. GreatScottyMac/context-portal（评分：100，Stars：740）
- 链接：https://github.com/GreatScottyMac/context-portal

16. verygoodplugins/automem（评分：100，Stars：619）
- 链接：https://github.com/verygoodplugins/automem

17. wanxingai/LightAgent（评分：100，Stars：585）
- 链接：https://github.com/wanxingai/LightAgent

18. christopherkarani/Wax（评分：100，Stars：568）
- 链接：https://github.com/christopherkarani/Wax

19. agentset-ai/agentset（评分：97，Stars：1869）
- 链接：https://github.com/agentset-ai/agentset

20. vllm-project/vllm（评分：92，Stars：70898）
- 链接：https://github.com/vllm-project/vllm

21. mem0ai/mem0（评分：92，Stars：47773）
- 链接：https://github.com/mem0ai/mem0

22. steveyegge/beads（评分：92，Stars：16945）
- 链接：https://github.com/steveyegge/beads

23. supermemoryai/supermemory（评分：92，Stars：16571）
- 链接：https://github.com/supermemoryai/supermemory

24. topoteretes/cognee（评分：92，Stars：12465）
- 链接：https://github.com/topoteretes/cognee

25. MemoriLabs/Memori（评分：92，Stars：12212）
- 链接：https://github.com/MemoriLabs/Memori

26. qwibitai/nanoclaw（评分：92，Stars：11756）
- 链接：https://github.com/qwibitai/nanoclaw

27. NevaMind-AI/memU（评分：92，Stars：9745）
- 链接：https://github.com/NevaMind-AI/memU

28. rowboatlabs/rowboat（评分：92，Stars：8304）
- 链接：https://github.com/rowboatlabs/rowboat

29. MemTensor/MemOS（评分：92，Stars：5732）
- 链接：https://github.com/MemTensor/MemOS

30. MemMachine/MemMachine（评分：92，Stars：4646）
- 链接：https://github.com/MemMachine/MemMachine

31. CaviraOSS/OpenMemory（评分：92，Stars：3377）
- 链接：https://github.com/CaviraOSS/OpenMemory

32. Josh-XT/AGiXT（评分：92，Stars：3153）
- 链接：https://github.com/Josh-XT/AGiXT

33. aiming-lab/SimpleMem（评分：92，Stars：2998）
- 链接：https://github.com/aiming-lab/SimpleMem

34. basicmachines-co/basic-memory（评分：92，Stars：2549）
- 链接：https://github.com/basicmachines-co/basic-memory

35. griptape-ai/griptape（评分：92，Stars：2479）
- 链接：https://github.com/griptape-ai/griptape

36. EverMind-AI/EverMemOS（评分：92，Stars：2158）
- 链接：https://github.com/EverMind-AI/EverMemOS

37. parruda/swarm（评分：92，Stars：1642）
- 链接：https://github.com/parruda/swarm

38. letta-ai/letta-code（评分：92，Stars：1625）
- 链接：https://github.com/letta-ai/letta-code

39. ComposioHQ/secure-openclaw（评分：92，Stars：1515）
- 链接：https://github.com/ComposioHQ/secure-openclaw

40. vectorize-io/hindsight（评分：92，Stars：1471）
- 链接：https://github.com/vectorize-io/hindsight

41. Shichun-Liu/Agent-Memory-Paper-List（评分：92，Stars：1258）
- 链接：https://github.com/Shichun-Liu/Agent-Memory-Paper-List

42. CommandCodeAI/BaseAI（评分：92，Stars：1200）
- 链接：https://github.com/CommandCodeAI/BaseAI

43. BAI-LAB/MemoryOS（评分：92，Stars：1193）
- 链接：https://github.com/BAI-LAB/MemoryOS

44. StarlightSearch/EmbedAnything（评分：92，Stars：1161）
- 链接：https://github.com/StarlightSearch/EmbedAnything

45. letta-ai/agent-file（评分：91，Stars：1004）
- 链接：https://github.com/letta-ai/agent-file

46. agentscope-ai/ReMe（评分：91，Stars：984）
- 链接：https://github.com/agentscope-ai/ReMe

47. rohitg00/pro-workflow（评分：91，Stars：902）
- 链接：https://github.com/rohitg00/pro-workflow

48. morettt/my-neuro（评分：91，Stars：866）
- 链接：https://github.com/morettt/my-neuro

49. memodb-io/memobase（评分：90，Stars：2568）
- 链接：https://github.com/memodb-io/memobase

50. SuanmoSuanyangTechnology/MemoryBear（评分：90，Stars：802）
- 链接：https://github.com/SuanmoSuanyangTechnology/MemoryBear

51. Growth-Kinetics/DiffMem（评分：90，Stars：787）
- 链接：https://github.com/Growth-Kinetics/DiffMem

52. tnm/zclaw（评分：90，Stars：759）
- 链接：https://github.com/tnm/zclaw

53. mudler/LocalRecall（评分：90，Stars：757）
- 链接：https://github.com/mudler/LocalRecall

54. RichmondAlake/memorizz（评分：90，Stars：687）
- 链接：https://github.com/RichmondAlake/memorizz

55. Tencent/loli_profiler（评分：90，Stars：673）
- 链接：https://github.com/Tencent/loli_profiler

### 博客清单

1. How we built Agent Builder’s memory system（评分：98）
- 链接：https://blog.langchain.com/how-we-built-agent-builders-memory-system/

2. Titans + MIRAS: Helping AI have long-term memory（评分：98）
- 链接：https://research.google/blog/titans-miras-helping-ai-have-long-term-memory/

3. a new model and dataset for long range memory（评分：98）
- 链接：https://deepmind.google/blog/a-new-model-and-dataset-for-long-range-memory/

4. How to Use Memory in Agent Builder（评分：97）
- 链接：https://blog.langchain.com/how-to-use-memory-in-agent-builder/

5. contextual retrieval（评分：97）
- 链接：https://www.anthropic.com/engineering/contextual-retrieval

6. effective context engineering for ai agents（评分：97）
- 链接：https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents

7. Context Management for Deep Agents（评分：96）
- 链接：https://blog.langchain.com/context-management-for-deepagents/

8. memory（评分：96）
- 链接：https://mistral.ai/news/memory

9. prompting long context（评分：95）
- 链接：https://www.anthropic.com/news/prompting-long-context

10. le chat mcp connectors memories（评分：95）
- 链接：https://mistral.ai/news/le-chat-mcp-connectors-memories

11. debugging memory leak in vllm（评分：94）
- 链接：https://mistral.ai/news/debugging-memory-leak-in-vllm

12. donating the model context protocol and establishing of the agentic ai foundation（评分：94）
- 链接：https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation

13. Harness engineering: leveraging Codex in an agent-first world（评分：93）
- 链接：https://openai.com/index/harness-engineering

14. code execution with mcp（评分：93）
- 链接：https://www.anthropic.com/engineering/code-execution-with-mcp

15. llm as rag judge（评分：92）
- 链接：https://mistral.ai/news/llm-as-rag-judge

16. rag architecture（评分：92）
- 链接：https://cohere.com/blog/rag-architecture

17. Introducing RTEB: A New Standard for Retrieval Evaluation（评分：91）
- 链接：https://huggingface.co/blog/rteb

18. GGML and llama.cpp join HF to ensure the long-term progress of Local AI（评分：90）
- 链接：https://huggingface.co/blog/ggml-joins-hf

19. ​​Speech-to-Retrieval (S2R): A new approach to voice search（评分：90）
- 链接：https://research.google/blog/speech-to-retrieval-s2r-a-new-approach-to-voice-search/

20. ICLR 2026｜把LLM Embedding Model算力瓶颈，从Query侧彻底移走，LightRetriever来了（评分：89）
- 链接：https://www.jiqizhixin.com/articles/2026-02-22-4

## 关联主题

- [[00-元语/memory]]
- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/rag]]
- [[00-元语/mcp]]
- [[00-元语/context-optimization]]
- [[00-元语/knowledge-graph]]
