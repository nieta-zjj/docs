---
title: "ninehills/blog 技术 issue 提及文档索引"

来源仓库: "https://github.com/ninehills/blog"
来源页面: "https://github.com/ninehills/blog/issues"
发布日期: "2026-02-22"
统计范围: "仓库全部 issue（含 open/closed，已排除 PR）"
技术筛选规则: "排除 `book`/`diary`/`tv`/`Comment` 标签与明显非技术标题；其余按 issue 正文与评论中出现的链接统计"
链接清洗规则: "移除带凭证或临时签名的私密链接、退订链接、本机回环地址，并清理末尾标点"
技术 issue 数: "76"
文档链接总数: "522"
文档链接去重数: "511"
---

## 摘要

### 一句话总结
本文档是 `ninehills/blog` 仓库截至 2026 年 2 月 22 日的技术 Issue 链接索引，共收录 76 个技术 Issue 及 511 个去重后的参考文档链接，内容主要涵盖大语言模型（LLM）、SRE/云原生、系统工具配置及 LeetCode 算法题等领域的学习与实践记录。

### 核心要点
*   **统计范围与数据**：统计了仓库中全部 open/closed 状态的 Issue（排除 PR），共筛选出 76 个技术 Issue，提取文档链接总数 522 个，去重后为 511 个。
*   **数据清洗规则**：排除了 `book`、`diary` 等非技术标签与非技术标题；对提取的链接移除了带凭证的私密链接、退订链接、本机回环地址，并清理了末尾标点。
*   **AI 与大模型（LLM）前沿技术**：近期 Issue 高度集中于 AI 领域，探讨了自主 Agent 与上下文工程、DeepSeek R1、模型量化（GPTQ/GGUF）、推理性能优化及微调技术。
*   **AI 实用资源汇总**：整理了大量 AI 研发资源，包括大语言模型高质量数据集、免费或廉价 GPU 算力平台、中文 Embedding & Reranker 模型选型，以及 AI 技术博客列表。
*   **SRE 与云原生架构**：中期 Issue 包含多期 SRE 技术简报（2019-2020年）及 SREcon 会议推荐清单，涉及 Kubernetes 队列实现、工作流引擎调研及系统高可用设计。
*   **系统配置与工具实践**：记录了多项实用工具配置与问题排查，如基于 GitHub Issues 实现博客、WSL2 配置全局代理、MacOS 常见问题（如 QEMU 模拟 ARM、Docker 磁盘清理）等。
*   **算法与基础学习**：早期 Issue（主要在 2017 年）集中于基础能力建设，包含大量 LeetCode 算法题的刷题记录与系统设计入门资料。

## 正文

### #154 OpenClaw 思考
- Issue 链接：https://github.com/ninehills/blog/issues/154
- 状态：open
- 标签：blog
- 链接数：2
- 创建日期：2026-02-05
- 更新日期：2026-02-05
- 文档链接：
1. https://ninehills.github.io/jack-diary/articles/20260204-sentience-vs-consciousness.html
2. https://github.com/user-attachments/assets/1bfb2b0d-1247-4aec-9571-dd705806cea5

### #150 自主 Agent / 上下文工程资料索引
- Issue 链接：https://github.com/ninehills/blog/issues/150
- 状态：open
- 标签：blog
- 链接数：28
- 创建日期：2026-01-04
- 更新日期：2026-02-17
- 文档链接：
1. https://www.anthropic.com/engineering/building-effective-agents
2. https://www.anthropic.com/engineering/multi-agent-research-system
3. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
4. https://www.anthropic.com/engineering/advanced-tool-use
5. https://www.anthropic.com/engineering/code-execution-with-mcp
6. https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
7. https://www.anthropic.com/engineering/claude-code-sandboxing
8. https://github.com/anthropic-experimental/sandbox-runtime
9. https://www.anthropic.com/engineering/writing-tools-for-agents
10. https://www.anthropic.com/engineering/claude-code-best-practices
11. https://github.com/marckrenn/claude-code-changelog
12. https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk
13. https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
14. https://rlancemartin.github.io/2025/06/23/context_engineering/
15. https://rlancemartin.github.io/2025/10/15/manus/
16. https://www.youtube.com/watch?v=6_BcCthVvb8
17. https://drive.google.com/file/d/1QGJ-BrdiTGslS71sYH4OJoidsry3Ps9g/view
18. https://www.bestblogs.dev/video/087a1f3
19. https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/
20. https://github.com/MoonshotAI/kimi-cli
21. https://github.com/langchain-ai/deepagents
22. https://www.philschmid.de/agents-2.0-deep-agents
23. https://rlancemartin.github.io/2025/07/30/bitter_lesson/
24. https://rllm-project.com/post.html?post=sdk.md
25. https://saurabhalone.com/blog/agent
26. https://lucumr.pocoo.org/2025/12/13/skills-vs-mcp/
27. https://arxiv.org/abs/2510.16720
28. https://agent-guidance.manus.space/

### #148 Tinker RL 测试（含代码库）
- Issue 链接：https://github.com/ninehills/blog/issues/148
- 状态：open
- 标签：blog
- 链接数：2
- 创建日期：2025-12-25
- 更新日期：2025-12-25
- 文档链接：
1. https://github.com/user-attachments/assets/003f8056-20aa-44ff-83d8-e39a1ab883bb
2. https://github.com/ninehills/tinker-countdown

### #143 LLM 量化（GPTQ、GGUF）实战以及效果和推理性能实测
- Issue 链接：https://github.com/ninehills/blog/issues/143
- 状态：open
- 标签：blog
- 链接数：6
- 创建日期：2025-09-22
- 更新日期：2025-09-23
- 文档链接：
1. https://github.com/ninehills/llm-speedup
2. https://conda-forge.org/download/
3. https://hf-mirror.com
4. https://huggingface.co/docs/hub/en/gguf
5. https://github.com/ggml-org/llama.cpp.git
6. https://developer.nvidia.com/cuda-toolkit-archive

### #137 不同硬件和推理引擎模型输出的精度差异
- Issue 链接：https://github.com/ninehills/blog/issues/137
- 状态：open
- 标签：blog
- 链接数：2
- 创建日期：2025-09-09
- 更新日期：2025-09-10
- 文档链接：
1. https://platform.openai.com/docs/api-reference/chat/create#chat_create-logprobs
2. https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/

### #133 免费 GPU 或廉价算力
- Issue 链接：https://github.com/ninehills/blog/issues/133
- 状态：open
- 标签：blog
- 链接数：12
- 创建日期：2025-09-03
- 更新日期：2025-09-04
- 文档链接：
1. https://colab.research.google.com/
2. https://modelscope.cn/
3. https://aistudio.baidu.com/
4. https://console.ebcloud.com/
5. https://www.autodl.com/
6. https://www.suanlix.cn/
7. https://www.runpod.io/
8. https://mirrors.tuna.tsinghua.edu.cn/help/pypi/
9. https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/
10. https://hf-mirror.com/
11. https://openi.org.cn/
12. https://xihe.mindspore.cn/

### #129 大语言模型高质量数据集汇总
- Issue 链接：https://github.com/ninehills/blog/issues/129
- 状态：open
- 标签：blog
- 链接数：31
- 创建日期：2025-07-10
- 更新日期：2025-12-06
- 文档链接：
1. https://huggingface.co/datasets/BAAI/IndustryCorpus2
2. https://huggingface.co/datasets/opencsg/Fineweb-Edu-Chinese-V2.1
3. https://huggingface.co/datasets/m-a-p/Matrix
4. https://huggingface.co/datasets/openbmb/Ultra-FineWeb
5. https://huggingface.co/datasets/opencsg/chinese-cosmopedia
6. https://github.com/huggingface/datatrove
7. https://github.com/modelscope/data-juicer
8. https://github.com/multimodal-art-projection/MAP-NEO/tree/main/Matrix
9. https://github.com/OpenDCAI/DataFlow
10. https://huggingface.co/datasets/m-a-p/neo_sft_phase2
11. https://huggingface.co/datasets/OpenCoder-LLM/opc-sft-stage1
12. https://huggingface.co/datasets/OpenCoder-LLM/opc-sft-stage2
13. https://huggingface.co/datasets/BAAI/Infinity-Instruct
14. https://huggingface.co/datasets/hfl/ruozhiba_gpt4
15. https://huggingface.co/datasets/Mxode/Chinese-Instruct
16. https://huggingface.co/collections/HuggingFaceTB/instruct-datasets-66c12756198f9d79f2a60550
17. https://huggingface.co/datasets/Magpie-Align/Magpie-Qwen2-Pro-200K-Chinese
18. https://huggingface.co/datasets/lenML/longwriter-6k-filtered
19. https://huggingface.co/datasets/THUDM/LongAlign-10k
20. https://huggingface.co/datasets/opencsg/smoltalk-chinese
21. https://docs.google.com/spreadsheets/d/1YP8-loVUxgxo36UEpOwflR3GRHLieBnLlCy8g10g8RU/edit?gid=0#gid=0
22. https://huggingface.co/datasets/llamafactory/DPO-En-Zh-20k
23. https://huggingface.co/datasets/tastypear/unalignment-toxic-dpo-v0.2-zh_cn
24. https://huggingface.co/datasets/HuggingFaceH4/ultrafeedback_binarized
25. https://huggingface.co/datasets/opencsg/UltraFeedback-chinese
26. https://huggingface.co/datasets/m-a-p/COIG-Writer
27. https://huggingface.co/datasets/PrimeIntellect/INTELLECT-2-RL-Dataset
28. https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M
29. https://huggingface.co/datasets/Congliu/Chinese-DeepSeek-R1-Distill-data-110k
30. https://github.com/THUDM/AlignBench
31. https://huggingface.co/datasets/m-a-p/COIG-P

### #128 AI Tech Blog
- Issue 链接：https://github.com/ninehills/blog/issues/128
- 状态：open
- 标签：blog
- 链接数：10
- 创建日期：2025-07-08
- 更新日期：2025-07-10
- 文档链接：
1. https://eugeneyan.com/
2. https://youtube.com/@gpumode?si=9BBmi4OwXDLwyWCI
3. https://simonw.substack.com/
4. https://magazine.sebastianraschka.com/
5. https://twitter.com/karpathy
6. https://www.philschmid.de/
7. https://lilianweng.github.io/
8. https://hamel.dev/
9. https://hazyresearch.stanford.edu/blog
10. https://nonint.com

### #121 DeepSeek R1 阅读清单
- Issue 链接：https://github.com/ninehills/blog/issues/121
- 状态：open
- 标签：blog
- 链接数：27
- 创建日期：2025-01-29
- 更新日期：2025-03-03
- 文档链接：
1. https://platform.openai.com/docs/guides/reasoning-best-practices
2. https://github.com/user-attachments/assets/9ea9e1ea-a1b0-4971-9a27-a6a70b19541b
3. https://magazine.sebastianraschka.com/p/understanding-reasoning-llms
4. https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-reasoning-llms
5. https://huggingface.co/blog/NormalUhr/grpo
6. https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf
7. https://arxiv.org/pdf/2501.12599v1
8. https://arxiv.org/pdf/2402.03300
9. https://arxiv.org/abs/2501.17161
10. https://huggingface.co/docs/trl/main/en/grpo_trainer
11. https://github.com/volcengine/verl
12. https://docs.unsloth.ai/basics/reasoning-grpo-and-rl
13. https://github.com/willccbb/verifiers
14. https://github.com/huggingface/open-r1/
15. https://github.com/Jiayi-Pan/TinyZero
16. https://github.com/NovaSky-AI/SkyThought
17. https://github.com/FreedomIntelligence/HuatuoGPT-o1
18. https://github.com/hkust-nlp/simpleRL-reason
19. https://github.com/EvolvingLMMs-Lab/open-r1-multimodal
20. https://github.com/open-thoughts/open-thoughts
21. https://huggingface.co/datasets/bespokelabs/Bespoke-Stratos-17k
22. https://huggingface.co/datasets/open-thoughts/OpenThoughts-114k
23. https://huggingface.co/datasets/ServiceNow-AI/R1-Distill-SFT
24. https://huggingface.co/datasets/Congliu/Chinese-DeepSeek-R1-Distill-data-110k
25. https://github.com/AlpacaACE/o1-imitator
26. https://github.com/WangRongsheng/awesome-LLM-resourses?tab=readme-ov-file#open-o1
27. https://colab.research.google.com/drive/1bfhs1FMLW3FGa8ydvkOZyBNxLYOu0Hev?usp=sharing

### #118 Embedding Model Fine-Tuning 案例
- Issue 链接：https://github.com/ninehills/blog/issues/118
- 状态：open
- 标签：blog
- 链接数：8
- 创建日期：2024-10-26
- 更新日期：2024-10-30
- 文档链接：
1. https://github.com/ninehills/embedding_finetuning/blob/main/README.md
2. https://pytorch.org/get-started/locally/
3. https://github.com/huggingface/diffusers/issues/9704
4. https://github.com/AIR-Bench/AIR-Bench/blob/main/docs/available_tasks.md#air-bench_2405
5. https://huggingface.co/datasets/infgrad/retrieval_data_llm
6. https://huggingface.co/BAAI/bge-small-zh-v1.5
7. https://sbert.net/docs/sentence_transformer/loss_overview.html
8. https://sbert.net/docs/package_reference/sentence_transformer/losses.html#multiplenegativesrankingloss

### #111 中文 Emebedding & Reranker 模型选型
- Issue 链接：https://github.com/ninehills/blog/issues/111
- 状态：open
- 标签：blog
- 链接数：20
- 创建日期：2023-12-28
- 更新日期：2025-01-20
- 文档链接：
1. https://huggingface.co/TownsWu/PEG
2. https://arxiv.org/pdf/2311.11691.pdf
3. https://huggingface.co/thenlper/gte-large-zh
4. https://arxiv.org/abs/2308.03281
5. https://huggingface.co/sensenova/piccolo-large-zh
6. https://huggingface.co/infgrad/stella-large-zh-v2
7. https://zhuanlan.zhihu.com/p/655322183
8. https://huggingface.co/BAAI/bge-large-zh-v1.5
9. https://arxiv.org/pdf/2309.07597.pdf
10. https://github.com/FlagOpen/FlagEmbedding
11. https://huggingface.co/moka-ai/m3e-large
12. https://github.com/wangyuxinwhy/uniem
13. https://huggingface.co/intfloat/multilingual-e5-large
14. https://arxiv.org/pdf/2212.03533.pdf
15. https://huggingface.co/amu/tao-8k
16. https://huggingface.co/BAAI/bge-reranker-large
17. https://huggingface.co/models?other=xlm-roberta
18. https://huggingface.co/Pristinenlp/alime-reranker-large-zh
19. https://huggingface.co/spaces/mteb/leaderboard
20. https://github.com/user-attachments/assets/2d795cde-8a4e-4cb3-8128-dbcc89cb8525

### #109 Gemini Pro Vision 作为 表格 OCR 解决方案的简单测试
- Issue 链接：https://github.com/ninehills/blog/issues/109
- 状态：open
- 标签：blog
- 链接数：4
- 创建日期：2023-12-20
- 更新日期：2023-12-20
- 文档链接：
1. https://github.com/ninehills/blog/assets/270298/7ec9c58b-4a33-4417-bd33-020720a41a75
2. https://github.com/ninehills/blog/assets/270298/0e94befa-7f5b-4e7c-a36e-e201d885d74a
3. https://github.com/ninehills/blog/assets/270298/10bc43c1-7c29-414c-859c-7aea4d641115
4. https://github.com/ninehills/blog/assets/270298/0c97a1eb-6b89-4b6d-a4d2-3a488cf7b75a

### #107 大语言模型（LLM）推理性能优化以及推理框架、后端的评测
- Issue 链接：https://github.com/ninehills/blog/issues/107
- 状态：open
- 标签：blog
- 链接数：45
- 创建日期：2023-12-19
- 更新日期：2023-12-19
- 文档链接：
1. https://github.com/ninehills/llm-inference-benchmark
2. https://jalammar.github.io/illustrated-gpt2/
3. https://github.com/ninehills/blog/assets/270298/230a80cf-2583-4817-9e22-4217c37699b9
4. https://github.com/ninehills/blog/assets/270298/b524b00c-d6a2-4fc9-8a90-39e2ffbd6ca4
5. https://github.com/ninehills/blog/assets/270298/b5667917-3d8a-46cb-867c-48b90bb137b7
6. https://github.com/ninehills/blog/assets/270298/25baad9b-897b-4176-a810-7ea7056669e2
7. https://arxiv.org/pdf/2306.00978.pdf
8. https://github.com/ninehills/blog/assets/270298/806ac211-0f9b-48ad-8939-8e6e1361b91d
9. https://huggingface.co/papers/2310.06927
10. https://zhuanlan.zhihu.com/p/638468472
11. https://github.com/ninehills/blog/assets/270298/f0f9fd0e-6871-4def-b0e4-2856b2bd48d0
12. https://blog.vllm.ai/2023/06/20/vllm.html
13. https://github.com/ninehills/blog/assets/270298/0fe270b7-e5bb-4f32-8bdf-b8d939142415
14. https://github.com/ninehills/blog/assets/270298/96278069-aeee-489f-93c5-3afb9f6ccbb4
15. https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices
16. https://github.com/ninehills/blog/assets/270298/84e2e038-7c39-45fc-88b3-ae687eebd154
17. https://github.com/oobabooga/text-generation-webui
18. https://github.com/bentoml/OpenLLM
19. https://github.com/bentoml/BentoML
20. https://github.com/vllm-project/vllm
21. https://docs.ray.io/en/latest/ray-core/starting-ray.html
22. https://github.com/xorbitsai/inference
23. https://github.com/huggingface/text-generation-inference
24. https://github.com/vectorch-ai/ScaleLLM
25. https://github.com/lm-sys/FastChat
26. https://github.com/huggingface/transformers
27. https://github.com/TimDettmers/bitsandbytes
28. https://github.com/PanQiWei/AutoGPTQ
29. https://huggingface.co/docs/accelerate/index
30. https://github.com/turboderp/exllamav2
31. https://github.com/NVIDIA/TensorRT-LLM
32. https://github.com/NVIDIA/TensorRT-LLM/blob/main/docs/source/precision.md
33. https://github.com/huggingface/candle
34. https://github.com/OpenNMT/CTranslate2
35. https://github.com/ggerganov/llama.cpp
36. https://github.com/InternLM/lmdeploy
37. https://github.com/microsoft/DeepSpeed/tree/master/blogs/deepspeed-fastgen
38. https://github.com/abetlen/llama-cpp-python
39. https://zhuanlan.zhihu.com/p/655325832
40. https://betterprogramming.pub/speed-up-llm-inference-83653aa24c47
41. https://blog.vllm.ai/2023/11/14/notes-vllm-vs-deepspeed.html
42. https://huggingface.co/blog/zh/optimize-llm
43. https://zhuanlan.zhihu.com/p/642412124
44. https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/
45. https://www.baseten.co/blog/llm-transformer-inference-guide/

### #104 Embedding 模型在 RAG 场景下的评估和微调
- Issue 链接：https://github.com/ninehills/blog/issues/104
- 状态：open
- 标签：blog
- 链接数：13
- 创建日期：2023-11-03
- 更新日期：2024-04-28
- 文档链接：
1. https://github.com/FlagOpen/FlagEmbedding/blob/master/C_MTEB/README.md
2. https://huggingface.co/spaces/mteb/leaderboard
3. https://huggingface.co/datasets/C-MTEB/T2Reranking
4. https://huggingface.co/datasets/C-MTEB/T2Retrieval
5. https://github.com/FlagOpen/FlagEmbedding/blob/master/examples/finetune/README.md
6. https://cloud.baidu.com/doc/WENXINWORKSHOP/s/alj562vvu
7. https://colab.research.google.com/drive/1PcJcgWZ-B5AQUZ2FsRYd6inQ42_NqnUr?usp=sharing
8. https://huggingface.co/BAAI/bge-small-zh-v1.5
9. https://colab.research.google.com/drive/1dAAVssdWNin47e2xeGsEpWnArU6Nx4eu?usp=sharing
10. https://github.com/FlagOpen/FlagEmbedding/issues/179
11. https://github.com/ninehills
12. https://github.com/ninehills/blog/issues/104#issuecomment-2078837686
13. https://github.com/ninehills/blog/issues/104#issuecomment-2078940706

### #100 实现基于 Github Issues 的博客
- Issue 链接：https://github.com/ninehills/blog/issues/100
- 状态：open
- 标签：blog
- 链接数：2
- 创建日期：2023-06-28
- 更新日期：2025-10-27
- 文档链接：
1. https://github.com/ninehills/blog/blob/gh-pages/generate.py
2. https://github.com/ninehills/blog/blob/gh-pages/.github/workflows/main.yml

### #97 大语言模型（LLM）学习路径和资料汇总
- Issue 链接：https://github.com/ninehills/blog/issues/97
- 状态：open
- 标签：blog
- 链接数：44
- 创建日期：2023-06-27
- 更新日期：2026-02-22
- 文档链接：
1. https://openrouter.ai/
2. https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/1/introduction
3. https://github.com/GitHubDaily/ChatGPT-Prompt-Engineering-for-Developers-in-Chinese
4. https://platform.openai.com/docs/quickstart
5. https://platform.openai.com/docs/api-reference
6. https://www.youtube.com/watch?v=bZQun8Y4L2A
7. https://karpathy.ai/stateofgpt.pdf
8. https://www.youtube.com/watch?v=7xTGNNLPyMI
9. https://b23.tv/vF2vS6t
10. https://learn.deeplearning.ai/chatgpt-building-system/lesson/1/introduction
11. https://www.bilibili.com/video/BV1gj411X72B/
12. https://python.langchain.com/
13. https://learn.deeplearning.ai/langchain/lesson/1/introduction
14. https://www.bilibili.com/video/BV1Ku411x78m/
15. https://dify.ai/
16. https://platform.openai.com/docs/guides/gpt-best-practices/gpt-best-practices
17. https://github.com/openai/openai-cookbook
18. https://github.com/brexhq/prompt-engineering
19. https://zh.d2l.ai/
20. https://courses.d2l.ai/zh-v2/
21. https://www.bilibili.com/video/BV1J94y1f7u5/
22. https://www.youtube.com/watch?v=wjZofJX0v4M
23. https://github.com/RUCAIBox/LLMSurvey
24. https://github.com/LLMBook-zh/LLMBook-zh.github.io
25. https://intro-llm.github.io/
26. https://www.bilibili.com/video/BV1pf421z757
27. https://www.bilibili.com/video/BV1AF411b7xQ
28. https://www.bilibili.com/video/BV1WM4m1y7Uh
29. https://yaofu.notion.site/6dafe3f8d11445ca9dcf8a2ca1c5b199
30. https://www.bilibili.com/video/BV1TPpbeVEUi/
31. https://tokens-for-thoughts.notion.site/post-training-101
32. https://github.com/rasbt/LLMs-from-scratch
33. https://github.com/hiyouga/LLaMA-Factory
34. https://github.com/multimodal-art-projection/MAP-NEO
35. https://huggingface.co/spaces/nanotron/ultrascale-playbook
36. https://huggingface.co/spaces/Ki-Seki/ultrascale-playbook-zh-cn
37. https://eugeneyan.com/writing/synthetic/
38. https://data.baai.ac.cn/details/BAAI-IndustryCorpus-v2
39. https://github.com/FlagOpen/FlagData/blob/main/README_zh.md
40. https://arxiv.org/abs/2405.08944
41. https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-quantization
42. https://arxiv.org/abs/2407.12994
43. https://arxiv.org/pdf/2407.21059
44. https://lilianweng.github.io/posts/2023-06-23-agent/

### #96 中文模型 C-Eval 评测结果简单小评测
- Issue 链接：https://github.com/ninehills/blog/issues/96
- 状态：open
- 标签：blog
- 链接数：8
- 创建日期：2023-06-27
- 更新日期：2023-06-27
- 文档链接：
1. https://github.com/ninehills/ninehills.github.io/assets/270298/dc2c0987-7079-42bd-a168-d888b6134dc8
2. https://huggingface.co/datasets/ceval/ceval-exam/viewer/logic/val
3. https://www.modelscope.cn/studios/AI-ModelScope/ChatGLM6B-unofficial/summary
4. https://p.sda1.dev/12/9a84a0cf8b5159a2d8bf7b050e4dfac3/QQ图片20230627221006.png
5. https://p.sda1.dev/12/6f58fcec47ae3fa0153c76d16f260124/QQ图片20230627221010.png
6. https://p.sda1.dev/12/da60612b8b037ed6e282fc056fe547e1/QQ图片20230627221011.png
7. https://p.sda1.dev/12/cde4ff53ef9897c93fa3e301bff22636/QQ图片20230627221013.png
8. https://p.sda1.dev/12/9115b773454b94852f75ae7c7be3e693/QQ图片20230627221014.png

### #95 大语言模型（LLM）后训练数据准备相关笔记
- Issue 链接：https://github.com/ninehills/blog/issues/95
- 状态：open
- 标签：blog
- 链接数：12
- 创建日期：2023-06-26
- 更新日期：2023-11-21
- 文档链接：
1. https://blog.h2o.ai/blog/streamlining-data-preparation-for-fine-tuning-of-large-language-models/
2. https://wandb.ai/wandb_gen/llm-data-processing/reports/Processing-Data-for-Large-Language-Models--VmlldzozMDg4MTM2
3. https://platform.openai.com/docs/guides/fine-tuning
4. https://github.com/miso-belica/jusText
5. https://github.com/adbar/trafilatura
6. https://github.com/google-research/deduplicate-text-datasets
7. https://github.com/ekzhu/datasketch
8. https://github.com/EleutherAI/lm-evaluation-harness/blob/master/docs/decontamination.md#decontamination
9. https://github.com/microsoft/presidio
10. https://github.com/EdyVision/pii-codex
11. https://github.com/hiyouga/LLaMA-Factory/blob/main/data/README_zh.md
12. https://huggingface.co/datasets/olm/olm-wikipedia-20221220

### #94 值得关注的对中文支持较好的开源模型
- Issue 链接：https://github.com/ninehills/blog/issues/94
- 状态：open
- 标签：blog
- 链接数：23
- 创建日期：2023-06-21
- 更新日期：2023-07-13
- 文档链接：
1. https://github.com/lm-sys/FastChat
2. https://github.com/oobabooga/text-generation-webui
3. https://github.com/ggerganov/llama.cpp
4. https://github.com/nomic-ai/gpt4all
5. https://github.com/vllm-project/vllm
6. https://github.com/FlagAI-Open/FlagAI/tree/master/examples/Aquila/Aquila-pretrain
7. https://huggingface.co/IDEA-CCNL/Ziya-LLaMA-13B-Pretrain-v1
8. https://github.com/ymcui/Chinese-LLaMA-Alpaca
9. https://github.com/baichuan-inc/baichuan-13B
10. https://huggingface.co/mosaicml/mpt-30b
11. https://github.com/InternLM/InternLM
12. https://github.com/LianjiaTech/BELLE
13. https://huggingface.co/baichuan-inc/Baichuan-13B-Chat
14. https://github.com/THUDM/ChatGLM-6B
15. https://github.com/THUDM/ChatGLM2-6B
16. https://huggingface.co/IDEA-CCNL/Ziya-LLaMA-13B-v1.1
17. https://github.com/FlagAI-Open/FlagAI/tree/master/examples/Aquila/Aquila-chat
18. https://huggingface.co/WizardLM/WizardLM-30B-V1.0
19. https://huggingface.co/mosaicml/mpt-30b-chat
20. https://huggingface.co/lmsys/vicuna-33b-v1.3
21. https://huggingface.co/moka-ai/m3e-base
22. https://huggingface.co/GanymedeNil/text2vec-large-chinese
23. https://github.com/ninehills/ninehills.github.io/assets/270298/b9fcaefd-bac0-4094-91c0-b616a08a8696

### #93 WSL2 使用 Clash for Windows 的 TUN 模式全局访问外网
- Issue 链接：https://github.com/ninehills/blog/issues/93
- 状态：open
- 标签：无
- 链接数：1
- 创建日期：2023-06-16
- 更新日期：2025-12-24
- 文档链接：
1. https://docs.cfw.lbyczf.com/contents/tun.html#windows

### #92 大语言模型（LLM）微调技术笔记
- Issue 链接：https://github.com/ninehills/blog/issues/92
- 状态：open
- 标签：blog
- 链接数：35
- 创建日期：2023-05-12
- 更新日期：2025-03-21
- 文档链接：
1. https://github.com/ninehills/ninehills.github.io/assets/270298/2c708bea-82f9-4554-b098-1f7a320bfd7d
2. https://github.com/ninehills/ninehills.github.io/assets/270298/f2af11f2-7eee-44d6-b2a0-a4f446bc38cd
3. https://github.com/ninehills/ninehills.github.io/assets/270298/40186c4e-0cfd-4f49-a9a6-ee013a369f41
4. https://huggingface.co/datasets/BAAI/COIG
5. https://github.com/ymcui/Chinese-LLaMA-Alpaca
6. https://huggingface.co/datasets/BelleGroup/train_2M_CN
7. https://huggingface.co/datasets/JosephusCheung/GuanacoDataset
8. https://huggingface.co/datasets/suolyer/webqa
9. https://github.com/CLUEbenchmark/pCLUE
10. https://github.com/CVI-SZU/Linly/blob/main/instructions/README.md
11. https://github.com/hiyouga/ChatGLM-Efficient-Tuning/blob/main/data/README.md
12. https://console.anthropic.com/docs/prompt-design
13. https://guanaco-model.github.io/
14. https://github.com/openai/openai-python/blob/main/chatml.md
15. https://github.com/ninehills/ninehills.github.io/assets/270298/3ffc428b-36a7-4213-b571-111ef816dfec
16. https://github.com/ninehills/ninehills.github.io/assets/270298/aa3ca9a0-67b7-45c7-a7ee-7d29448d3267
17. https://github.com/hiyouga/ChatGLM-Efficient-Tuning
18. https://huggingface.co/CarperAI/stable-vicuna-13b-delta
19. https://huggingface.co/datasets/OpenAssistant/oasst1
20. https://huggingface.co/datasets/Anthropic/hh-rlhf
21. https://huggingface.co/datasets/stanfordnlp/SHP
22. https://github.com/hiyouga/ChatGLM-Efficient-Tuning.git
23. https://github.com/OptimalScale/LMFlow/blob/main/readme/README_zh-hans.md
24. https://github.com/lm-sys/FastChat
25. https://github.com/huggingface/peft
26. https://github.com/AGI-Edgerunners/LLM-Adapters
27. https://github.com/THUDM/ChatGLM-6B
28. https://github.com/FreedomIntelligence/LLMZoo
29. https://github.com/LianjiaTech/BELLE
30. https://github.com/CVI-SZU/Linly
31. http://arxiv.org/abs/2304.13712
32. http://arxiv.org/abs/2303.18223
33. https://github.com/RUCAIBox/LLMSurvey/blob/main/assets/LLM_Survey_Chinese_0418.pdf
34. http://arxiv.org/abs/2106.09685
35. http://arxiv.org/abs/2203.02155

### #88 小工具 p2pfile 可以快速的用于内网大文件分发
- Issue 链接：https://github.com/ninehills/blog/issues/88
- 状态：open
- 标签：blog
- 链接数：1
- 创建日期：2022-01-29
- 更新日期：2022-11-14
- 文档链接：
1. https://github.com/ninehills/p2pfile

### #84 MacBook Airplay 无线投屏失败
- Issue 链接：https://github.com/ninehills/blog/issues/84
- 状态：closed
- 标签：无
- 链接数：3
- 创建日期：2021-09-01
- 更新日期：2023-05-12
- 文档链接：
1. https://flowkit.baidu.com/
2. https://user-images.githubusercontent.com/270298/131601137-7090a300-546a-4a31-a56d-ad2f00778d33.png
3. https://appletoolbox.com/apple-help-tips-and-tricks-support-index/airplay-not-working-how-to-fix-your-problems/

### #83 MacOS 上使用 qemu 模拟 arm 安装操作系统
- Issue 链接：https://github.com/ninehills/blog/issues/83
- 状态：closed
- 标签：无
- 链接数：8
- 创建日期：2020-12-10
- 更新日期：2023-05-12
- 文档链接：
1. https://www.qemu.org/docs/master/system/target-arm.html
2. https://gist.github.com/humbertodias/6237f80df9a4bccf98be298057a82cf2
3. http://ftp.de.debian.org/debian/dists/jessie/main/installer-armel/current/images/versatile/netboot/initrd.gz
4. http://ftp.de.debian.org/debian/dists/jessie/main/installer-armel/current/images/versatile/netboot/vmlinuz-3.16.0-6-versatile
5. http://debian.ustc.edu.cn/
6. https://blog.csdn.net/qq_28046487/article/details/105416785
7. http://releases.linaro.org/components/kernel/uefi-linaro/16.02/release/qemu64/QEMU_EFI.fd
8. https://wiki.qemu.org/Documentation/Networking

### #82 在 macOS 中获取 Mail.app 邮件的唯一URL
- Issue 链接：https://github.com/ninehills/blog/issues/82
- 状态：closed
- 标签：无
- 链接数：3
- 创建日期：2020-07-31
- 更新日期：2023-05-12
- 文档链接：
1. https://user-images.githubusercontent.com/270298/88994931-07b3f280-d31c-11ea-8c24-4e9c40d397b5.png
2. https://user-images.githubusercontent.com/270298/88995018-3e8a0880-d31c-11ea-9cc6-2554f88d0a5e.png
3. https://user-images.githubusercontent.com/270298/88995348-fb7c6500-d31c-11ea-9b2b-beb4f3992e5f.png

### #81 MacOS 在 Finder 中增加复制文件路径的快捷方式
- Issue 链接：https://github.com/ninehills/blog/issues/81
- 状态：closed
- 标签：无
- 链接数：1
- 创建日期：2020-07-30
- 更新日期：2023-05-12
- 文档链接：
1. https://user-images.githubusercontent.com/270298/88873716-dff75880-d24f-11ea-985e-928ddaecefe8.png

### #80 MacOS时间同步有问题
- Issue 链接：https://github.com/ninehills/blog/issues/80
- 状态：closed
- 标签：无
- 链接数：1
- 创建日期：2020-06-28
- 更新日期：2023-05-12
- 文档链接：
1. https://time.is/

### #77 Kubernetes 基于 Namespace 的物理队列实现
- Issue 链接：https://github.com/ninehills/blog/issues/77
- 状态：open
- 标签：blog
- 链接数：10
- 创建日期：2020-04-10
- 更新日期：2020-05-07
- 文档链接：
1. https://kubernetes.io/docs/concepts/policy/resource-quotas/
2. https://kubernetes.io/docs/concepts/policy/resource-quotas/#limit-priority-class-consumption-by-default
3. https://user-images.githubusercontent.com/270298/81274914-8681f200-9083-11ea-8012-a70ef5ce414d.png
4. https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#podtolerationrestriction
5. https://kind.sigs.k8s.io/
6. https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/control-plane-flags/#apiserver-flags
7. https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-isolation-restriction
8. https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction
9. https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#set-based-requirement
10. https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity

### #76 SRE 技术简报 20200310
- Issue 链接：https://github.com/ninehills/blog/issues/76
- 状态：open
- 标签：blog
- 链接数：7
- 创建日期：2020-03-20
- 更新日期：2020-03-20
- 文档链接：
1. https://upstart.chrishic.com/the-future-of-containers-whats-next/
2. https://sematext.com/guides/kubernetes-logging/
3. https://mp.weixin.qq.com/s/R3BZpYJrBPBI0DwbJYB0YA
4. https://github.com/cloud66-oss/trackman
5. https://netflixtechblog.com/open-sourcing-riskquant-a-library-for-quantifying-risk-6720cc1e4968
6. https://www.fairinstitute.org/learn-fair
7. https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072

### #74 SRE 技术简报 20200114
- Issue 链接：https://github.com/ninehills/blog/issues/74
- 状态：open
- 标签：blog
- 链接数：8
- 创建日期：2020-01-14
- 更新日期：2020-01-15
- 文档链接：
1. https://www.usenix.org/conference/srecon19asia/presentation/oanta
2. https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/daperture-load-balancer.html
3. https://mp.weixin.qq.com/s/cgPrpUo05LFU2Q3bQWSxOw
4. https://github.com/zpoint/CPython-Internals/blob/master/README_CN.md#%E8%A7%A3%E9%87%8A%E5%99%A8%E7%9B%B8%E5%85%B3
5. https://blogs.dropbox.com/tech/2020/01/intelligent-dns-based-load-balancing-at-dropbox/
6. https://blog.sensu.io/reducing-alert-fatigue-with-goalert
7. https://docs.sensu.io/sensu-go/latest/
8. https://mp.weixin.qq.com/s/LkxKJmpqOdEsOuHNxeR0KA

### #73 SRE 技术简报 20191222
- Issue 链接：https://github.com/ninehills/blog/issues/73
- 状态：open
- 标签：blog
- 链接数：12
- 创建日期：2019-12-22
- 更新日期：2019-12-22
- 文档链接：
1. https://github.com/python-poetry/poetry
2. https://github.com/cilium/hubble
3. https://landing.google.com/sre/resources/practicesandprocesses/art-of-slos/
4. https://www.coursera.org/learn/site-reliability-engineering-slos
5. https://cloud.google.com/blog/products/management-tools/shrinking-the-time-to-mitigate-production-incidents
6. https://mads-hartmann.com/sre/2019/08/04/journey-into-observability-reading-material.html
7. https://www.fastly.com/blog/7-tips-live-streaming
8. https://medium.com/glasswall-engineering/are-you-ready-new-starters-journey-to-production-bcf0f7e30ac2
9. https://queue.acm.org/detail.cfm?id=3220266
10. https://queue.acm.org/detail.cfm?id=3197520
11. https://queue.acm.org/detail.cfm?id=3283589
12. https://www.infoq.cn/article/kihSqp_twV16tiiPa1LO

### #72 SRE 技术简报 20191127
- Issue 链接：https://github.com/ninehills/blog/issues/72
- 状态：open
- 标签：blog
- 链接数：17
- 创建日期：2019-11-27
- 更新日期：2019-11-27
- 文档链接：
1. https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/schedule/
2. https://redmonk.com/kfitzpatrick/2019/11/18/kubecon-north-america-2019-day-0/
3. https://redmonk.com/kfitzpatrick/2019/11/19/kubecon-north-america-2019-day-1/
4. https://redmonk.com/kfitzpatrick/2019/11/20/kubecon-north-america-2019-day-2/
5. https://redmonk.com/kfitzpatrick/2019/11/21/kubecon-north-america-2019-day-3/
6. https://storj.io/blog/2019/11/measuring-production-readiness-using-qualification-gates/
7. https://blog.cedriccharly.com/post/20191109-the-configuration-complexity-curse/
8. https://github.blog/2019-11-21-debugging-network-stalls-on-kubernetes/
9. https://mp.weixin.qq.com/s/bSNWPnFZ3g_gciOv_qNhIQ
10. https://mp.weixin.qq.com/s/7ZZqWPE1XNf9Mn_wj1HjUw
11. https://blogs.dropbox.com/tech/2019/11/monitoring-server-applications-with-vortex/
12. https://blog.acolyer.org/2019/11/11/snap-networking/
13. https://blog.acolyer.org/2019/11/15/facebook-taiji/
14. https://github.com/baidu/bfe
15. https://status.azure.com/en-us/status/history/
16. https://azure.microsoft.com/en-us/services/frontdoor/
17. https://www.honeycomb.io/blog/incident-report-running-dry-on-memory-without-noticing/

### #70 SREcon19 American Day 1 粗略扫描
- Issue 链接：https://github.com/ninehills/blog/issues/70
- 状态：closed
- 标签：无
- 链接数：20
- 创建日期：2019-04-03
- 更新日期：2023-05-12
- 文档链接：
1. https://www.usenix.org/conference/srecon19americas/program
2. https://www.usenix.org/conference/srecon19americas/presentation/lawson
3. https://www.usenix.org/conference/srecon19americas/presentation/lykke
4. https://www.usenix.org/conference/srecon19americas/presentation/wieczorek
5. https://www.usenix.org/conference/srecon19americas/presentation/nolan-loadbalancing
6. https://www.usenix.org/conference/srecon19americas/presentation/oanta
7. https://www.usenix.org/conference/srecon19americas/presentation/kraus
8. https://www.usenix.org/conference/srecon19americas/presentation/kitchens
9. https://www.usenix.org/conference/srecon19americas/presentation/kehoe
10. https://www.usenix.org/conference/srecon19americas/presentation/turner
11. https://www.usenix.org/conference/srecon19americas/presentation/iacoboaia
12. https://www.usenix.org/conference/srecon19americas/presentation/davis
13. https://www.usenix.org/conference/srecon19americas/presentation/gud
14. https://www.usenix.org/conference/srecon19americas/presentation/glover
15. https://www.usenix.org/conference/srecon19americas/presentation/root
16. https://www.usenix.org/conference/srecon19americas/presentation/chen
17. https://www.usenix.org/conference/srecon19americas/presentation/hashman
18. https://www.usenix.org/conference/srecon19americas/presentation/wohlner
19. https://www.usenix.org/conference/srecon19americas/presentation/schlossnagle
20. https://www.usenix.org/conference/srecon19americas/presentation/stockman

### #69 关闭 Mac 打印机默认的『双面打印』
- Issue 链接：https://github.com/ninehills/blog/issues/69
- 状态：closed
- 标签：无
- 链接数：1
- 创建日期：2019-02-19
- 更新日期：2023-05-12
- 文档链接：
1. https://www.techbout.com/disable-two-sided-printing-on-mac-28479/

### #66 Workflow 调研
- Issue 链接：https://github.com/ninehills/blog/issues/66
- 状态：closed
- 标签：blog、done
- 链接数：18
- 创建日期：2018-06-06
- 更新日期：2023-05-12
- 文档链接：
1. https://airflow.incubator.apache.org/
2. https://github.com/apache/incubator-airflow
3. https://github.com/spotify/luigi
4. https://azkaban.github.io/
5. https://github.com/azkaban/azkaban
6. https://github.com/pinterest/pinball
7. https://www.spinnaker.io/
8. https://www.spinnaker.io/concepts/pipelines/
9. https://github.com/spinnaker
10. https://docs.openstack.org/mistral/latest/overview.html
11. http://cloudslang.io/
12. https://github.com/vicalloy/django-lb-workflow
13. https://github.com/viewflow/viewflow/
14. https://github.com/knipknap/SpiffWorkflow
15. https://segmentfault.com/a/1190000005078547
16. http://bytepawn.com/luigi-airflow-pinball.html
17. http://bytepawn.com/pinball.html
18. https://github.com/pditommaso/awesome-pipeline/blob/master/README.md

### #63 SREcon18 Americas 我的推荐清单
- Issue 链接：https://github.com/ninehills/blog/issues/63
- 状态：open
- 标签：blog、done
- 链接数：30
- 创建日期：2018-06-02
- 更新日期：2018-06-06
- 文档链接：
1. https://www.usenix.org/conference/srecon18americas
2. https://www.usenix.org/conference/srecon18americas/presentation/ish-shalom
3. https://github.com/Fewbytes/rubber-docker
4. https://docs.google.com/presentation/d/10vFQfEUvpf7qYyksNqiy-bAxcy-bvF0OnUElCOtTTRc/edit?usp=sharing
5. https://www.usenix.org/conference/srecon18americas/presentation/virji
6. https://pdos.csail.mit.edu/6.824/
7. https://www.usenix.org/conference/srecon18americas/presentation/meickle
8. https://github.com/Eronarn/deploying-applications-with-ansible
9. https://www.usenix.org/conference/srecon18americas/presentation/carey
10. https://lisafc.github.io/tw101-reading/
11. https://www.usenix.org/conference/srecon18americas/presentation/butow
12. https://www.usenix.org/conference/srecon18americas/presentation/forsgren
13. https://www.usenix.org/conference/srecon18americas/presentation/saino
14. https://www.usenix.org/conference/srecon18americas/presentation/hirschfeld
15. https://www.usenix.org/conference/srecon18americas/presentation/matsunobu
16. http://myrocks.io/
17. https://www.usenix.org/conference/srecon18americas/presentation/duch
18. https://www.usenix.org/conference/srecon18americas/presentation/chakrabarti
19. https://www.usenix.org/conference/srecon18americas/presentation/schulman
20. https://www.usenix.org/conference/srecon18americas/presentation/flaming
21. https://www.usenix.org/conference/srecon18americas/presentation/lund
22. https://www.usenix.org/conference/srecon18americas/presentation/wong
23. https://www.usenix.org/conference/srecon18americas/presentation/bustos
24. https://www.usenix.org/conference/srecon18americas/presentation/wojtyniak
25. https://www.usenix.org/conference/srecon18americas/presentation/boone
26. https://www.usenix.org/conference/srecon18americas/presentation/maini
27. https://www.usenix.org/conference/srecon18americas/presentation/brown
28. https://www.usenix.org/conference/srecon18americas/presentation/thukral
29. https://www.usenix.org/conference/srecon18americas/presentation/chen
30. https://www.usenix.org/conference/srecon18americas/presentation/schwartz

### #53 LeetCode-357. Count Numbers with Unique Digits
- Issue 链接：https://github.com/ninehills/blog/issues/53
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-28
- 更新日期：2017-08-28
- 文档链接：
1. https://leetcode.com/problems/count-numbers-with-unique-digits/description/

### #51 LeetCode-35. Search Insert Position
- Issue 链接：https://github.com/ninehills/blog/issues/51
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-08
- 更新日期：2017-08-08
- 文档链接：
1. https://leetcode.com/problems/search-insert-position/description/

### #50 LeetCode-34. Search for a Range
- Issue 链接：https://github.com/ninehills/blog/issues/50
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-08
- 更新日期：2017-08-08
- 文档链接：
1. https://leetcode.com/problems/search-for-a-range/description/

### #49 LeetCode-33. Search in Rotated Sorted Array
- Issue 链接：https://github.com/ninehills/blog/issues/49
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-08
- 更新日期：2017-08-21
- 文档链接：
1. https://leetcode.com/problems/search-in-rotated-sorted-array/description/

### #48 LeetCode-32. Longest Valid Parentheses
- Issue 链接：https://github.com/ninehills/blog/issues/48
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-08
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problems/longest-valid-parentheses/description/

### #47 LeetCode-31. Next Permutation
- Issue 链接：https://github.com/ninehills/blog/issues/47
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-08
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problems/next-permutation/description/

### #46 LeetCode-30. Substring with Concatenation of All Words
- Issue 链接：https://github.com/ninehills/blog/issues/46
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-08
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/

### #45 LeetCode-29. Divide Two Integers
- Issue 链接：https://github.com/ninehills/blog/issues/45
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-08
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problems/divide-two-integers/description/

### #44 LeetCode-28. Implement strStr()
- Issue 链接：https://github.com/ninehills/blog/issues/44
- 状态：closed
- 标签：problem
- 链接数：2
- 创建日期：2017-08-04
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problems/implement-strstr/description/
2. https://zh.wikipedia.org/wiki/%E5%85%8B%E5%8A%AA%E6%96%AF-%E8%8E%AB%E9%87%8C%E6%96%AF-%E6%99%AE%E6%8B%89%E7%89%B9%E7%AE%97%E6%B3%95

### #43 LeetCode-27. Remove Element
- Issue 链接：https://github.com/ninehills/blog/issues/43
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-04
- 更新日期：2017-08-04
- 文档链接：
1. https://leetcode.com/problems/remove-element/description/

### #42 LeetCode-26. Remove Duplicates from Sorted Array
- Issue 链接：https://github.com/ninehills/blog/issues/42
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-01
- 更新日期：2017-08-03
- 文档链接：
1. https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

### #41 LeetCode-25. Reverse Nodes in k-Group
- Issue 链接：https://github.com/ninehills/blog/issues/41
- 状态：closed
- 标签：problem
- 链接数：2
- 创建日期：2017-08-01
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problems/reverse-nodes-in-k-group/description/
2. https://discuss.leetcode.com/topic/31618/succinct-iterative-python-o-n-time-o-1-space

### #40 LeetCode-24. Swap Nodes in Pairs
- Issue 链接：https://github.com/ninehills/blog/issues/40
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-01
- 更新日期：2017-08-01
- 文档链接：
1. https://leetcode.com/problems/swap-nodes-in-pairs/description/

### #39 LeetCode-23. Merge k Sorted Lists
- Issue 链接：https://github.com/ninehills/blog/issues/39
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-08-01
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problems/merge-k-sorted-lists/description/

### #38 写作：『如何写出一份合格的故障事后分析报告』
- Issue 链接：https://github.com/ninehills/blog/issues/38
- 状态：closed
- 标签：study、write
- 链接数：1
- 创建日期：2017-07-31
- 更新日期：2018-06-06
- 文档链接：
1. https://github.com/dastergon/postmortem-templates

### #37 调研workflow-engine
- Issue 链接：https://github.com/ninehills/blog/issues/37
- 状态：closed
- 标签：study、done
- 链接数：1
- 创建日期：2017-07-31
- 更新日期：2018-06-06
- 文档链接：
1. https://github.com/ninehills/ninehills.github.io/wiki/Workflow-%E8%B0%83%E7%A0%94

### #36 Read "SRE Weekly Issue #83"
- Issue 链接：https://github.com/ninehills/blog/issues/36
- 状态：closed
- 标签：study
- 链接数：1
- 创建日期：2017-07-31
- 更新日期：2018-06-06
- 文档链接：
1. http://sreweekly.com/sre-weekly-issue-83/

### #35 LeetCode-22. Generate Parentheses
- Issue 链接：https://github.com/ninehills/blog/issues/35
- 状态：closed
- 标签：problem
- 链接数：2
- 创建日期：2017-07-31
- 更新日期：2017-07-31
- 文档链接：
1. https://leetcode.com/problems/generate-parentheses/
2. https://discuss.leetcode.com/topic/28374/clean-python-dp-solution

### #33 0xAX/linux-insides
- Issue 链接：https://github.com/ninehills/blog/issues/33
- 状态：closed
- 标签：learn
- 链接数：2
- 创建日期：2017-07-31
- 更新日期：2023-05-12
- 文档链接：
1. https://github.com/0xAX/linux-insides
2. https://github.com/MintCN/linux-insides-zh

### #30 LeetCode-21. Merge Two Sorted Lists
- Issue 链接：https://github.com/ninehills/blog/issues/30
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-28
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problems/merge-two-sorted-lists/tabs/description

### #29 LeetCode-20. Valid Parentheses
- Issue 链接：https://github.com/ninehills/blog/issues/29
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-28
- 更新日期：2017-07-30
- 文档链接：
1. https://leetcode.com/problems/valid-parentheses/tabs/description

### #28 LeetCode-19. Remove Nth Node From End of List
- Issue 链接：https://github.com/ninehills/blog/issues/28
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-28
- 更新日期：2017-07-29
- 文档链接：
1. https://leetcode.com/problems/remove-nth-node-from-end-of-list/tabs/description

### #27 LeetCode-18. 4Sum
- Issue 链接：https://github.com/ninehills/blog/issues/27
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-28
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problems/4sum/tabs/description

### #26 LeetCode-17. Letter Combinations of a Phone Number
- Issue 链接：https://github.com/ninehills/blog/issues/26
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-26
- 更新日期：2017-07-26
- 文档链接：
1. https://user-images.githubusercontent.com/270298/28599551-f5f423b4-71dd-11e7-9fe2-854b15cdb82b.png

### #25 LeetCode-16. 3Sum Closest
- Issue 链接：https://github.com/ninehills/blog/issues/25
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-25
- 更新日期：2017-07-25
- 文档链接：
1. https://leetcode.com/problems/3sum-closest/#/description

### #24 LeetCode-15. 3Sum
- Issue 链接：https://github.com/ninehills/blog/issues/24
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-24
- 更新日期：2017-07-25
- 文档链接：
1. https://en.wikipedia.org/wiki/3SUM

### #21 LeetCode-14. Longest Common Prefix
- Issue 链接：https://github.com/ninehills/blog/issues/21
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-21
- 更新日期：2017-07-24
- 文档链接：
1. https://leetcode.com/problems/longest-common-prefix/#/description

### #20 LeetCode-13.  Roman to Integer
- Issue 链接：https://github.com/ninehills/blog/issues/20
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-21
- 更新日期：2017-07-21
- 文档链接：
1. https://leetcode.com/problems/roman-to-integer/#/description

### #19 LeetCode-12. Integer to Roman
- Issue 链接：https://github.com/ninehills/blog/issues/19
- 状态：closed
- 标签：problem
- 链接数：2
- 创建日期：2017-07-20
- 更新日期：2017-07-20
- 文档链接：
1. https://leetcode.com/problems/integer-to-roman/#/description
2. https://en.wikipedia.org/wiki/Roman_numerals

### #15 LeetCode-8. String to Integer (atoi)
- Issue 链接：https://github.com/ninehills/blog/issues/15
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-19
- 更新日期：2017-07-20
- 文档链接：
1. https://leetcode.com/problems/string-to-integer-atoi/#/description

### #14 LeetCode-7. Reverse Integer
- Issue 链接：https://github.com/ninehills/blog/issues/14
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-17
- 更新日期：2017-07-20
- 文档链接：
1. https://leetcode.com/problems/reverse-integer/

### #13 LeetCode-6. ZigZag Conversion
- Issue 链接：https://github.com/ninehills/blog/issues/13
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-17
- 更新日期：2017-07-20
- 文档链接：
1. https://leetcode.com/problems/zigzag-conversion/

### #9 LeetCode-5. Longest Palindromic Substring
- Issue 链接：https://github.com/ninehills/blog/issues/9
- 状态：closed
- 标签：problem
- 链接数：2
- 创建日期：2017-07-15
- 更新日期：2017-07-20
- 文档链接：
1. https://leetcode.com/problems/longest-palindromic-substring/
2. http://articles.leetcode.com/longest-palindromic-substring-part-ii/

### #8 LeetCode-4. Median of Two Sorted Arrays
- Issue 链接：https://github.com/ninehills/blog/issues/8
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-15
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problems/median-of-two-sorted-arrays/

### #7 LeetCode-3. Longest Substring Without Repeating Characters
- Issue 链接：https://github.com/ninehills/blog/issues/7
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-13
- 更新日期：2017-07-20
- 文档链接：
1. https://leetcode.com/problems/longest-substring-without-repeating-characters

### #6 LeetCode-2. Add Two Numbers
- Issue 链接：https://github.com/ninehills/blog/issues/6
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-13
- 更新日期：2017-07-20
- 文档链接：
1. https://leetcode.com/problems/add-two-numbers/

### #5 LeetCode-1. Two Sum
- Issue 链接：https://github.com/ninehills/blog/issues/5
- 状态：closed
- 标签：problem
- 链接数：1
- 创建日期：2017-07-13
- 更新日期：2017-07-20
- 文档链接：
1. https://leetcode.com/problems/two-sum

### #4 做一个可能做不到的事情，每天刷一道LeetCode
- Issue 链接：https://github.com/ninehills/blog/issues/4
- 状态：closed
- 标签：learn
- 链接数：2
- 创建日期：2017-07-13
- 更新日期：2017-11-13
- 文档链接：
1. https://leetcode.com/problemset/all/
2. https://github.com/kamyu104/LeetCode

### #3 解决 Mac Docker.qcow2 文件过大的问题
- Issue 链接：https://github.com/ninehills/blog/issues/3
- 状态：open
- 标签：blog、done
- 链接数：1
- 创建日期：2017-07-13
- 更新日期：2017-11-13
- 文档链接：
1. https://github.com/docker/for-mac/issues/371

### #2 系统设计入门
- Issue 链接：https://github.com/ninehills/blog/issues/2
- 状态：closed
- 标签：learn、pending、done
- 链接数：1
- 创建日期：2017-07-12
- 更新日期：2023-05-12
- 文档链接：
1. https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md

## 关联主题

- [[00-元语/learning-resource]]
- [[00-元语/github]]
- [[00-元语/workflow]]
- [[00-元语/benchmark]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/AI]]
- [[00-元语/rag]]
- [[00-元语/ocr]]
- [[00-元语/observability]]
