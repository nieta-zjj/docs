# RTEB：检索评测新标准

## 文档信息

- 发布日期：2025-10-01
- 原文链接：https://huggingface.co/blog/rteb

## 摘要

### 1) 一句话总结
检索嵌入基准（RTEB）是一个结合公开与私有数据集的全新评估标准，旨在准确衡量嵌入模型在真实企业级应用和未见数据上的检索泛化能力。

### 2) 核心要点
*   **解决现有痛点**：现有基准测试存在“泛化差距”（模型容易过拟合公开测试数据）且脱离实际应用，RTEB 旨在打破这种“应试教育”式的评估。
*   **混合评估策略**：采用公开与私有数据集相结合的机制。若模型在私有数据集上性能显著下降，则明确暴露出过拟合问题。
*   **公开数据集**：语料库、查询和相关性标签完全开源，确保透明度与结果的可复现性。
*   **私有数据集**：由 MTEB 维护者保密管理（维护者承诺不使用这些数据训练模型），以提供对未见数据泛化能力的无偏见衡量。
*   **聚焦企业级领域**：数据集专门针对现实世界中的关键垂直领域构建，包括法律、医疗保健、代码和金融。
*   **多语言支持**：原生支持多语言评估，目前基准测试涵盖 20 种常见及较罕见语言。
*   **高效且科学的指标**：采用 **NDCG@10** 作为默认的检索排序评估指标；数据集规模适中（至少 1000 篇文档和 50 个查询），在保证评估意义的同时控制计算成本。

### 3) 风险与不足（局限性）
*   **QA 数据集改编风险**：目前约 50% 的检索数据集由问答（QA）数据集改编，可能导致问题与上下文之间存在强烈的词汇重叠，从而偏袒依赖关键字匹配而非真正语义理解的模型。
*   **模态局限**：当前版本仅支持纯文本检索评估，尚未涵盖文本-图像等其他多模态检索任务。
*   **语言覆盖缺口**：仍需扩大语言覆盖范围，目前缺乏中文、阿拉伯语等主要语言以及更多低资源语言的高质量数据集。
*   **特定数据集的数据偏差/质量风险**：
    *   `_GermanLegal1` 数据集采用的 BM25 基线存在一定风险，可能会使引文匹配之外的数据产生偏差。
    *   `ChatDoctor_HealthCareMagic` 数据集存在轻微风险，部分问答中存在语法不一致的情况。
*   **范围局限**：目前专注于现实的检索优先用例，尚未将极具挑战性的合成数据集纳入评估目标。

## 正文

[返回文章列表](https://huggingface.co/blog)

[![Image 1: Frank Liu's avatar](https://cdn-avatars.huggingface.co/v1/production/uploads/61f33092a92c9a858b654991/jFRUSeZ6DnI27dlCAQRHq.jpeg)](https://huggingface.co/fzliu)

[![Image 2: Kenneth C. Enevoldsen's avatar](https://cdn-avatars.huggingface.co/v1/production/uploads/5ff5943752c26e9bc240bada/Exyzf3C_gJ2KdsL4K5_cq.png)](https://huggingface.co/KennethEnevoldsen)

[![Image 3: Solomatin Roman's avatar](https://huggingface.co/avatars/7a4067accdd1005f78c3c4adad3ee0a5.svg)](https://huggingface.co/Samoed)

[![Image 4: Isaac Chung's avatar](https://cdn-avatars.huggingface.co/v1/production/uploads/64cc0e80a257a3212c0c4b24/wqs6WZN8-3OQthcnQXgN7.png)](https://huggingface.co/isaacchung)

[![Image 5: Tom Aarsen's avatar](https://cdn-avatars.huggingface.co/v1/production/uploads/6317233cc92fd6fee317e030/cJHSvvimr1kqgQfHOjO5n.png)](https://huggingface.co/tomaarsen)

[![Image 6: Fődi, Zoltán's avatar](https://cdn-avatars.huggingface.co/v1/production/uploads/no-auth/nXPUWOJbhmjQVCkbBtf6m.png)](https://huggingface.co/fzoll)

**太长不看（TL;DR） –** 我们很高兴推出 [检索嵌入基准（Retrieval Embedding Benchmark，简称 RTEB）](https://huggingface.co/spaces/mteb/leaderboard?benchmark_name=RTEB%28beta%29) 的 Beta 版本，这是一个全新的基准测试，旨在为实际应用可靠地评估嵌入模型（embedding models）的检索准确性。现有的基准测试难以衡量真正的泛化能力，而 RTEB 通过结合公开和私有数据集的混合策略解决了这一问题。它的目标很简单：创建一个公平、透明且以应用为中心的标准，用于衡量模型在未见数据上的表现。

从 RAG（检索增强生成）、智能体（agents）到推荐系统，许多 AI 应用的性能从根本上受限于搜索和检索的质量。因此，准确衡量嵌入模型的检索质量是开发者普遍面临的痛点。你*真正*如何知道一个模型在实际环境（in the wild）中表现如何？

这就是事情变得棘手的地方。目前的评估标准通常依赖于模型在公开基准测试上的“零样本（zero-shot）”表现。然而，这充其量只是模型真实泛化能力的一个近似值。当模型反复在相同的公开数据集上进行评估时，它们报告的分数与在全新的、未见数据上的实际表现之间就会出现差距。

![Image 7](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/rteb/rteb-public-vs-closed.png)

公开数据集与封闭数据集之间的性能差异

为了应对这些挑战，我们开发了 RTEB，这是一个旨在为评估检索模型提供可靠标准的基准测试。

[](https://huggingface.co/blog/rteb#why-existing-benchmarks-fall-short) 为什么现有的基准测试存在不足
----------------------------------------------------------------------------------------------------------

虽然底层的评估方法和指标（如 NDCG@10）已广为人知且非常稳健，但现有基准测试的完整性通常会受到以下问题的阻碍：

**泛化差距（The Generalization Gap）**。当前的基准测试生态系统无意中鼓励了“应试教育（teaching to the test）”。当训练数据源与评估数据集重叠时，模型的分数可能会被夸大，从而破坏基准测试的完整性。这种做法无论是有意还是无意，在几个模型的训练数据集中都很明显。这形成了一个反馈循环，模型因记住测试数据而获得高分，而不是发展出稳健的、可泛化的能力。

由于上述原因，零样本分数（zero-shot score）[[1]](https://huggingface.co/blog/rteb#footnote-1) 较低的模型可能在基准测试中表现得非常好，但却无法泛化到新问题上。因此，通常更推荐那些基准测试性能略低但零样本分数较高的模型。

![Image 8](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/rteb/mteb-zero-shot-models.png)

摘自 [Chung et al. (2025)](https://arxiv.org/abs/2506.21182)

**与当今的 AI 应用脱节**。许多基准测试与开发者目前正在构建的企业级用例严重不符。它们通常依赖于学术数据集或源自问答（QA）数据集的检索任务，这些数据集虽然本身很有用，但并非为评估检索而设计，可能无法捕捉到现实世界检索场景中遇到的分布偏差和复杂性。而没有这些问题的基准测试往往又过于狭窄，仅专注于代码检索等单一领域，因此不适合评估通用模型。

[](https://huggingface.co/blog/rteb#introducing-rteb) 推出 RTEB
----------------------------------------------------------------------

今天，我们非常高兴地推出 **检索嵌入基准（Retrieval Embedding Benchmark，简称 RTEB）**。它的目标是创建一个全新的、可靠的、高质量的基准测试，以衡量嵌入模型的真实检索准确性。

### [](https://huggingface.co/blog/rteb#a-hybrid-strategy-for-true-generalization) 实现真正泛化的混合策略

为了应对基准测试过拟合问题，RTEB 实施了结合公开和私有数据集的混合策略：

*   **公开数据集：** 语料库、查询（queries）和相关性标签完全公开。这确保了透明度，并允许任何用户复现结果。
*   **私有数据集：** 这些数据集保持私有，评估工作由 MTEB 维护者处理以确保公正性。这种设置提供了一个清晰、无偏见的衡量标准，用于评估模型对未见数据的泛化能力。为了保持透明度，我们为每个私有数据集提供了描述性统计信息、数据集描述以及 `(query, document, relevance)`（查询、文档、相关性）三元组示例。

这种混合方法鼓励开发具有广泛、稳健泛化能力的模型。如果一个模型在公开数据集和私有数据集之间的性能出现显著下降，则表明存在过拟合，这为社区提供了一个明确的信号。这在某些模型中已经很明显，它们在 RTEB 的私有数据集上表现出显著的性能下降。

### [](https://huggingface.co/blog/rteb#built-for-real-world-domains) 专为现实世界领域构建

RTEB 的设计特别强调企业级用例。为了清晰起见，它没有使用复杂的层级结构，而是使用了简单的分组。一个数据集可以属于多个组（例如，一个德国法律数据集同时存在于“法律（law）”和“德语（German）”组中）。

*   **本质上的多语言支持：** 基准测试数据集涵盖 20 种语言，从英语或日语等常见语言，到孟加拉语或芬兰语等较罕见的语言。
*   **专注于特定领域：** 该基准测试包含来自法律、医疗保健、代码和金融等关键企业领域的数据集。
*   **高效的数据集规模：** 数据集足够大以保证其意义（至少 1000 篇文档和 50 个查询），但又不会大到让评估变得耗时且昂贵。
*   **检索优先的指标：** 排行榜的默认指标是 **NDCG@10**，这是衡量排序搜索结果质量的黄金标准。

数据集的完整列表见下文。我们计划不断使用不同类别的数据集来更新公开和封闭部分，并积极鼓励社区参与；如果您想建议其他数据集，请在 [GitHub 上的 MTEB 仓库](https://github.com/embeddings-benchmark/mteb/issues) 中提交 Issue。

RTEB 数据集
#### [](https://huggingface.co/blog/rteb#open) 公开

| 数据集 | 数据集分组 | 公开/封闭 | 数据集链接 | 由 QA 改编 | 描述与收录原因 |
| --- | --- | --- | --- | --- | --- |
| AILACasedocs | english, legal | 公开 | [https://huggingface.co/datasets/mteb/AILA_casedocs](https://huggingface.co/datasets/mteb/AILA_casedocs) | 否 | 该数据集包含约 3000 份印度最高法院的案件文档，旨在评估针对特定法律情境检索相关过往案件的能力。它包含 50 个查询，每个查询概述了一个特定场景。我们将此数据集纳入基准测试，是因为文档具有一定的挑战性，查询是非合成的，且标签质量很高。 |
| AILAStatutes | english, legal | 公开 | [https://huggingface.co/datasets/mteb/AILA_statutes](https://huggingface.co/datasets/mteb/AILA_statutes) | 否 | 该数据集包含对 197 项印度最高法院法规的描述，旨在促进针对特定法律情境检索相关过往法规。它包含 50 个查询，每个查询概述了一个特定场景。我们将此数据集纳入基准测试，是因为文档具有一定的挑战性，查询是非合成的，且标签质量很高。 |
| LegalSummarization | english, legal | 公开 | [https://huggingface.co/datasets/mteb/legal_summarization](https://huggingface.co/datasets/mteb/legal_summarization) | 否 | 该数据集包含 446 对法律文本摘录及其对应的简明英语摘要，来源于致力于解释法律文档的知名网站。摘要经过了人工质量审查，确保数据干净且适合评估法律检索。 |
| LegalQuAD | german, legal | 公开 | [https://huggingface.co/datasets/mteb/LegalQuAD](https://huggingface.co/datasets/mteb/LegalQuAD) | 否 | 语料库包含 200 份真实的法律文档，查询集包含 200 个与法律文档相关的问题。 |
| FinanceBench | english, finance | 公开 | [https://huggingface.co/datasets/virattt/financebench](https://huggingface.co/datasets/virattt/financebench) | 是 | FinanceBench 数据集源自 PatronusAI/financebench-test 数据集，仅包含处理成干净格式的 PASS 示例，用于金融领域的问答任务。FinanceBench-rtl 已被改编用于检索。 |
| HC3Finance | english, finance | 公开 | [https://huggingface.co/datasets/Hello-SimpleAI/HC3](https://huggingface.co/datasets/Hello-SimpleAI/HC3) | 否 | HC3 数据集包含数万条来自人类专家和 ChatGPT 的对比回复，涵盖开放领域、金融、医疗、法律和心理学等多个领域。数据收集过程包括获取公开的问答数据集和维基文本，确保人类回答要么由专家提供，要么是高质量的用户回复，从而最大限度地减少错误标记并提高数据集的可靠性。 |
| FinQA | english, finance | 公开 | [https://huggingface.co/datasets/ibm/finqa](https://huggingface.co/datasets/ibm/finqa) | 是 | FinQA 是一个大规模数据集，包含 2800 份财务报告和 8000 个问答对，用于研究基于结构化和非结构化证据的数值推理。 |
| HumanEval | code | 公开 | [https://huggingface.co/datasets/openai/openai_humaneval](https://huggingface.co/datasets/openai/openai_humaneval) | 是 | OpenAI 发布的 HumanEval 数据集包含 164 个编程问题，每个问题都带有手写的函数签名、文档字符串（docstring）、函数体以及几个单元测试。该数据集由 OpenAI 的工程师和研究人员手工制作。 |
| MBPP | code | 公开 | [https://huggingface.co/datasets/google-research-datasets/mbpp](https://huggingface.co/datasets/google-research-datasets/mbpp) | 是 | MBPP 数据集包含约 1000 个众包的 Python 编程问题，旨在让初级程序员能够解决，涵盖编程基础、标准库功能等。每个问题包含任务描述、代码解决方案和 3 个自动化测试用例。如论文所述，数据集作者已对部分数据进行了人工验证以确保质量。 |
| MIRACLHardNegatives |  | 公开 | [https://huggingface.co/datasets/mteb/miracl-hard-negatives](https://huggingface.co/datasets/mteb/miracl-hard-negatives) | 否 | MIRACL（跨连续语言的多语言信息检索）是一个多语言检索数据集，专注于 18 种不同语言的搜索。其困难负样本（hard negative）版本是通过汇总 BM25、e5-multilingual-large 和 e5-mistral-instruct 中每个查询的前 250 篇文档创建的。 |
| APPS | code, english | 公开 | [https://huggingface.co/datasets/codeparrot/apps](https://huggingface.co/datasets/codeparrot/apps) | 是 | APPS 是一个包含 10000 个问题的代码生成基准测试。它可用于评估语言模型从自然语言规范生成代码的能力。为了创建 APPS 数据集，作者从程序员互相分享问题的开放访问网站（包括 Codewars、AtCoder、Kattis 和 Codeforces）中手动整理了问题。 |
| DS1000 | code, english | 公开 | [https://huggingface.co/datasets/xlangai/DS-1000](https://huggingface.co/datasets/xlangai/DS-1000) | 是 | DS-1000 是一个代码生成基准测试，包含一千个数据科学问题，涵盖 NumPy 和 Pandas 等七个 Python 库。它采用多标准评估指标，包括功能正确性和表面形式约束，从而形成了一个高质量的数据集，在被接受的 Codex-002 预测中仅有 1.8% 的错误解决方案。 |
| WikiSQL | code, english | 公开 | [https://huggingface.co/datasets/Salesforce/wikisql](https://huggingface.co/datasets/Salesforce/wikisql) | 是 | WikiSQL 是一个数据集，包含 80,654 个手工标注的自然语言问题及其对应的 SQL 查询示例，涵盖来自维基百科的 24,241 张表格。 |
| ChatDoctor_HealthCareMagic | english, healthcare | 公开 | [https://huggingface.co/datasets/lavita/ChatDoctor-HealthCareMagic-100k](https://huggingface.co/datasets/lavita/ChatDoctor-HealthCareMagic-100k) | 否 | ChatDoctor-HealthCareMagic-100k 数据集包含 112,000 个真实的医疗问答对，提供了大量且多样化的真实医疗对话集合。该数据集存在轻微风险，因为许多问题和答案中存在语法不一致的情况，但这可能有助于区分强弱医疗保健检索模型。 |
| HC3 Medicine | english, healthcare | 公开 | [https://huggingface.co/datasets/Hello-SimpleAI/HC3](https://huggingface.co/datasets/Hello-SimpleAI/HC3) | 否 | HC3 数据集包含数万条来自人类专家和 ChatGPT 的对比回复，涵盖开放领域、金融、医疗、法律和心理学等多个领域。数据收集过程包括获取公开的问答数据集和维基文本，确保人类回答要么由专家提供，要么是高质量的用户回复，从而最大限度地减少错误标记并提高数据集的可靠性。 |
| HC3 French OOD | french, healthcare | 公开 | [https://huggingface.co/datasets/almanach/hc3_french_ood](https://huggingface.co/datasets/almanach/hc3_french_ood) | 否 | HC3 数据集包含数万条来自人类专家和 ChatGPT 的对比回复，涵盖开放领域、金融、医疗、法律和心理学等多个领域。数据收集过程包括获取公开的问答数据集和维基文本，确保人类回答要么由专家提供，要么是高质量的用户回复，从而最大限度地减少错误标记并提高数据集的可靠性。 |
| JaQuAD | japanese | 公开 | [https://huggingface.co/datasets/SkelterLabsInc/JaQuAD](https://huggingface.co/datasets/SkelterLabsInc/JaQuAD) | 是 | JaQuAD 数据集包含 39,696 个基于日语维基百科文章的人工标注问答对，其中 88.7% 的上下文源自精选的高质量文章。 |
| Cure | english, healthcare | 公开 | [https://huggingface.co/datasets/clinia/CUREv1](https://huggingface.co/datasets/clinia/CUREv1) | 否 |  |
| TripClick | english, healthcare | 公开 | [https://huggingface.co/datasets/irds/tripclick](https://huggingface.co/datasets/irds/tripclick) | 否 |  |
| FreshStack | english | 公开 | [https://huggingface.co/papers/2504.13128](https://huggingface.co/papers/2504.13128) | 否 |  |

#### [](https://huggingface.co/blog/rteb#closed) 封闭

| 数据集 | 数据集分组 | 公开/封闭 | 数据集链接 | 备注 | 由 QA 改编 | 描述与收录原因 |
| --- | --- | --- | --- | --- | --- | --- |
| _GermanLegal1 | german, legal | 封闭 |  |  | 是 | 该数据集源自真实的司法判决，并采用了法律引文匹配和 BM25 相似度的结合。BM25 基线带来了一定风险，因为它会使引文匹配之外的数据产生偏差。数据集的一个子集经过了人工验证，以确保正确性和质量。 |
| _JapaneseLegal1 | japanese, legal | 封闭 |  |  | 否 | 该数据集包含从日本政府官方网站 e-Gov 检索到的 8.75K 条去重法律记录，确保了内容的权威性和准确性。记录标题用作查询，而记录正文用作文档。 |
| _FrenchLegal1 | french, legal | 封闭 |  |  | 否 | 该数据集包含来自法国最高行政法院（Conseil d'Etat）的判例法，系统地从 OPENDATA/JADE 存储库中提取，重点关注与税务相关的案件。查询是每篇文档的标题，确保了标签的干净。 |
| _EnglishFinance1 | english, finance | 封闭 |  |  | 是 | 该检索数据集由 TAT-QA 改编而来，TAT-QA 是一个使用表格和文本内容的大规模问答数据集。 |
| _EnglishFinance4 | english, finance | 封闭 |  |  | 否 | 该数据集结合了斯坦福的 Alpaca 和 FiQA，以及另外 1.3K 个使用 GPT-3.5 自定义生成的问答对，然后进一步清理以确保高数据质量。 |
| _EnglishFinance2 | english, finance | 封闭 |  |  | 是 | 这是一个金融领域的数据集，由基于模拟对话流的每个对话轮次的问题组成。数据整理工作由专家标注员完成，确保了相当高的数据质量。问题被改编为查询，而对话块被改编为用于检索的文档。 |
| _EnglishFinance3 | english, finance | 封闭 |  |  | 是 | 该数据集是为解决个人理财各个方面而整理的问答对集合。 |
| _Code1 | code | 封闭 |  |  | 否 | 我们从 GitHub 仓库中提取了函数。通过语法解析，从函数中获取了文档字符串（docstrings）和函数签名。仅保留带有文档字符串的函数。文档字符串用作查询，同时移除了函数签名（包括函数名和参数名）以增加任务难度。每种语言都是一个具有独立语料库的子集。 |
| _JapaneseCode1 | code, japanese | 封闭 |  |  | 否 | 这是 CoNaLa 挑战赛中带有日语问题的一个子集。 |
| _EnglishHealthcare1 | english, healthcare | 封闭 |  |  | 是 | 该数据集包含 2,019 个问答对，由 15 位专家标注，每位专家至少拥有生物医学科学硕士学位。一名医生领导了标注团队，验证每个问答对以确保数据质量。 |
| _GermanHealthcare1 | german, healthcare | 封闭 |  |  | 否 | 该数据集包含 465 段德语医疗对话，发生在患者和医疗助理之间，每个条目都包含详细的患者描述和相应的专业回复。我们已人工验证了数据集的一个子集，以确保准确性和数据质量。 |
| _German1 | german | 封闭 |  |  | 否 | 该数据集是一个对话摘要数据集，源自多个公开语料库，这些语料库经过清理和预处理，形成了统一的格式。每段对话都由标注员手动总结并标记了主题，确保了高质量和干净的数据。对话摘要用作查询，而完整对话用作文档。 |
| _French1 | french | 封闭 |  |  | 是 | 该数据集包含超过 4118 个法语冷知识（trivia）问答对，每个问答对都附有相关的维基百科上下文。我们已人工验证了数据集的一个子集，以确保准确性和数据质量。 |

[](https://huggingface.co/blog/rteb#launching-rteb-a-community-effort) 发布 RTEB：一项社区共同的努力
---------------------------------------------------------------------------------------------------------

RTEB 今天发布了 Beta 版本。我们认为构建一个稳健的基准测试需要社区的共同努力，我们计划根据开发者和研究人员的反馈来不断完善 RTEB。我们鼓励您分享您的想法、建议新的数据集、发现现有数据集中的问题，并帮助我们为所有人构建一个更可靠的标准。请随时加入讨论或在 [GitHub 上的 MTEB 仓库](https://github.com/embeddings-benchmark/mteb) 中提交 Issue。

[](https://huggingface.co/blog/rteb#limitations-and-future-work) 局限性与未来工作
--------------------------------------------------------------------------------------------

为了突出需要改进的领域，我们希望对 RTEB 当前的局限性以及我们未来的计划保持透明。

*   **基准测试范围：** RTEB 专注于现实的、检索优先的用例。极具挑战性的合成数据集目前不是我们的目标，但未来可能会加入。
*   **模态：** 该基准测试目前仅评估纯文本检索。我们计划在未来的版本中纳入文本-图像及其他多模态检索任务。
*   **语言覆盖范围：** 我们正在积极努力扩大语言覆盖范围，特别是中文和阿拉伯语等主要语言，以及更多低资源语言。如果您知道符合这些条件的高质量数据集，请告诉我们。
*   **QA 数据集的改编**：目前约 50% 的检索数据集是由 QA 数据集改编而来的，这可能会导致一些问题，例如问题和上下文之间存在强烈的词汇重叠，从而偏袒依赖关键字匹配而非真正语义理解的模型。
*   **私有数据集：** 为了测试泛化能力，我们使用了仅 MTEB 维护者可访问的私有数据集。为了保持公平，所有维护者承诺不发布在这些数据集上训练的模型，并且仅通过公开渠道在这些私有数据集上进行测试，确保没有任何公司或个人获得不公平的优势。

我们的目标是让 RTEB 成为社区信任的检索评估标准。

RTEB 排行榜今天已在 [Hugging Face](https://huggingface.co/spaces/mteb/leaderboard?benchmark_name=RTEB%28beta%29) 上线，作为 MTEB 排行榜上全新 Retrieval（检索）部分的一部分。我们邀请您去查看、评估您的模型，并加入我们，为整个 AI 社区构建一个更好、更可靠的基准测试。

* * *

[1] 零样本分数（Zero-shot score）是指模型提供者明确声明已在其上进行过训练的评估集的比例。这通常仅包括训练集划分。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/rag]]
- [[00-元语/observability]]
- [[00-元语/learning-resource]]
