---
title: "Titans 与 MIRAS：让 AI 具备长期记忆"

发布日期: "2025-12-04"
原文链接: "https://research.google/blog/titans-miras-helping-ai-have-long-term-memory/"
---

## 摘要

**1) 一句话总结**
Google Research 推出了 Titans 架构和 MIRAS 理论框架，通过采用深度神经网络作为长期记忆模块并在运行时基于“意外度”动态更新，成功结合了 RNN 的高效推理速度与 Transformer 的准确性，使 AI 能够高效处理超过 200 万 token 的超长上下文。

**2) 关键要点**
*   **核心机制（测试时记忆）**：模型在主动运行（推理）过程中，无需专门的离线重新训练，即可通过学习和更新自身参数来整合新知识并保持长期记忆。
*   **突破传统架构瓶颈**：解决了 Transformer 随序列长度增加而计算成本激增的问题，同时克服了传统 RNN 和状态空间模型（如 Mamba-2）因固定大小压缩而丢失丰富上下文信息的缺陷。
*   **深度长期记忆模块**：Titans 采用深度神经网络（多层感知机）作为记忆模块，而非传统的固定大小向量或矩阵，从而提供更高的表达能力以总结海量信息。
*   **“意外度”指标（Surprise Metric）**：模型通过内部误差信号（梯度）评估新输入。低意外度（常规信息）会被跳过，高意外度（打破上下文的新颖信息）会被优先永久存储到长期记忆中。
*   **动量与遗忘机制**：Titans 结合了动量（综合当前与过去的意外度）和自适应权重衰减（作为遗忘门丢弃无用信息），以在处理极长序列时有效管理有限的记忆容量。
*   **MIRAS 统一框架**：将序列建模视为联想记忆问题，通过四个核心设计（记忆架构、注意力偏置、保留门、记忆算法）统一了不同架构的设计空间。
*   **超越传统 MSE 优化**：MIRAS 摆脱了对均方误差（MSE）的依赖，衍生出三种无注意力（attention-free）变体：YAAD（对异常值更鲁棒）、MONETA（使用广义范数增强稳定性）和 MEMORA（强制记忆表现为概率图以实现受控更新）。
*   **卓越的性能与扩展性**：在标准数据集和零样本推理任务中，Titans 及其变体优于同等规模的 Transformer++、Mamba-2 和 Gated DeltaNet，且保持了快速的线性推理速度。
*   **极限长上下文召回**：在 BABILong 基准测试中，Titans 展现出处理超过 200 万 token 上下文窗口的能力，在参数更少的情况下超越了 GPT-4 等超大型模型。

## 正文

Titans + MIRAS：赋予 AI 长期记忆能力
================================================

2025年12月4日

Ali Behrouz（学生研究员）、Meisam Razaviyayn（主任研究员）和 Vahab Mirrokni（副总裁兼 Google Fellow），Google Research

我们推出了 Titans 架构和 MIRAS 框架，它们允许 AI 模型在主动运行的同时更新其核心记忆，从而大幅提高运行速度并处理海量上下文。

快捷链接
-----------

*   [Titans 论文](https://arxiv.org/abs/2501.00663)
*   [MIRAS 论文](https://arxiv.org/pdf/2504.13173)
*   分享

    *   [](https://twitter.com/intent/tweet?text=https%3A//research.google/blog/titans-miras-helping-ai-have-long-term-memory/ "在 Twitter 上分享")
    *   [](https://www.facebook.com/sharer/sharer.php?u=https%3A//research.google/blog/titans-miras-helping-ai-have-long-term-memory/ "在 Facebook 上分享")
    *   [](https://www.linkedin.com/shareArticle?url=https%3A//research.google/blog/titans-miras-helping-ai-have-long-term-memory/&mini=true "在 LinkedIn 上分享")
    *   [](mailto:name@example.com?subject=Check%20out%20this%20site&body=Check%20out%20https%3A//research.google/blog/titans-miras-helping-ai-have-long-term-memory/ "通过电子邮件发送")
    *    复制链接  ×

[Transformer 架构](https://en.wikipedia.org/wiki/Transformer_(deep_learning))引入了[注意力机制（attention）](https://en.wikipedia.org/wiki/Attention_%28machine_learning%29)，彻底改变了[序列建模](https://medium.com/machine-learning-basics/sequence-modelling-b2cdf244c233)。通过该机制，模型可以回顾早期的输入，从而优先处理相关的输入数据。然而，计算成本会随着序列长度的增加而急剧上升，这限制了基于 Transformer 的模型扩展到极长上下文的能力，例如全文档理解或基因组分析所需的上下文。

研究界探索了各种解决方案，例如高效的线性[循环神经网络](https://www.d2l.ai/chapter_recurrent-modern/index.html) (RNN) 和[状态空间模型](https://huggingface.co/blog/lbourdois/get-on-the-ssm-train) (SSM)，如 [Mamba-2](https://arxiv.org/pdf/2405.21060)。这些模型通过将上下文压缩为固定大小，提供了快速的线性扩展能力。然而，这种固定大小的压缩无法充分捕捉极长序列中丰富的信息。

在两篇新论文《[_Titans_](https://arxiv.org/abs/2501.00663)》和《[_MIRAS_](https://arxiv.org/pdf/2504.13173)》中，我们介绍了一种架构和理论蓝图，将 RNN 的速度与 Transformer 的准确性结合起来。Titans 是具体的架构（工具），而 MIRAS 是推广这些方法的理论框架（蓝图）。它们共同推进了测试时记忆（test-time memorization）的概念，即 AI 模型在运行过程中，无需专门的离线重新训练，就能通过整合更强大的“意外度”指标（即意料之外的信息片段）来保持长期记忆的能力。

正如 Titans 所展示的那样，MIRAS 框架引入了向实时适应的重大转变。该架构不再将信息压缩为静态状态，而是随着数据流的输入，主动学习并更新自身的参数。这一关键机制使模型能够立即将新的、具体的细节整合到其核心知识中。

Titans：动态学习新上下文
---------------------------------------

一个有效的学习系统需要独立但又相互连接的记忆模块，这反映了[人类大脑对短期记忆和长期记忆的区分](https://research.google/blog/introducing-nested-learning-a-new-ml-paradigm-for-continual-learning/)。

虽然注意力机制在精确的短期记忆方面表现出色，但 Titans 引入了一种新颖的神经[长期记忆模块](https://arxiv.org/abs/2306.07174#:~:text=LongMem%20can:%20*%20Memorize%20long%20past%20context,Yan%20*%20Jianfeng%20Gao%20*%20Furu%20Wei)。与传统 RNN 中固定大小的向量或矩阵记忆不同，它充当一个深度神经网络（具体来说，是一个[多层感知机](https://en.wikipedia.org/wiki/Multilayer_perceptron)）。该记忆模块提供了显著更高的表达能力，允许模型总结大量信息而不会丢失重要的上下文。模型不仅仅是在做笔记；它是在理解和综合整个故事。

关键在于，Titans 不仅仅是被动地存储数据。它主动学习*如何*识别并保留连接整个输入中各个 token 的重要关系和概念主题。这种能力的一个关键方面是我们所谓的“意外度指标”（surprise metric）。在人类心理学中，我们知道我们会快速且轻易地忘记常规的、意料之中的事件，但会记住那些打破常规的事情——意料之外的、令人惊讶的或情绪激动的事件。

![Image 2: 神经架构图解，包含三层：上下文记忆（学习）、核心（上下文学习）和持久记忆（固定权重）。](https://storage.googleapis.com/gweb-research2023-media/images/Titans-1-Overview.width-1250.png)

Titans (MAC) 架构概述。它使用长期记忆来压缩过去的数据，然后将摘要整合到上下文中并传递给注意力机制。注意力机制随后可以决定是否需要关注过去的摘要。

在 Titans 的语境中，“意外度指标”是指模型检测到其当前记忆与新输入信息之间的巨大差异。

*   *低意外度*：如果新词是“猫 (cat)”，而模型的记忆状态已经预期会出现一个动物词汇，那么梯度（意外度）就很低。它可以安全地跳过将“猫”这个词记忆到其永久长期状态中的步骤。
*   *高意外度*：如果模型的记忆状态正在总结一份严肃的财务报告，而新输入是一张香蕉皮的图片（意外事件），那么梯度（意外度）将会非常高。这表明新输入是重要的或异常的，必须优先将其永久存储在长期记忆模块中。

模型使用这种内部误差信号（梯度）作为数学上的等效表达，即“这出乎意料且很重要！”这使得 Titans 架构能够选择性地仅用最新颖和打破上下文的信息来更新其长期记忆，从而保持整体过程的快速和高效。

Titans 通过结合两个关键元素来完善这一机制：

1.   *动量 (Momentum)*：模型同时考虑“瞬间意外度”（当前输入）和“过去意外度”（最近的上下文流）。这确保了相关的后续信息也能被捕获，即使这些 token 单独来看并不令人意外。
2.   *遗忘（权重衰减，weight decay）*：为了在处理极长序列时管理有限的记忆容量，Titans 采用了一种自适应的权重衰减机制。这充当了一个遗忘门，允许模型丢弃不再需要的信息。

MIRAS：序列建模的统一视角
------------------------------------------

序列建模的每一次重大突破——从现代 Transformer 到全新、闪电般快速的线性 RNN——在底层本质上都是同一回事：一个高度复杂的[联想记忆](https://www.geeksforgeeks.org/computer-organization-architecture/associative-memory/)模块。

因此，MIRAS 既独特又实用的原因在于它看待 AI 建模的方式。它看到的不是各种不同的架构，而是解决同一个问题的不同方法：有效地将新信息与旧记忆结合起来，同时不让基本概念被遗忘。

MIRAS 通过四个关键设计选择来定义序列模型：

*   *记忆架构*：存储信息的结构（例如，向量、矩阵或深度多层感知机，如 Titans 中所示）。
*   *注意力偏置*：模型优化的内部学习目标，决定了它优先考虑什么。
*   *保留门*：记忆正则化器。MIRAS 将“遗忘机制”重新解释为特定形式的[正则化](https://dev.to/nareshnishad/day-27-regularization-techniques-for-large-language-models-llms-4af3)，以平衡新学习与保留过去知识之间的关系。
*   *记忆算法*：用于更新记忆的优化算法。

播放静音循环视频 暂停静音循环视频

取消静音视频 静音视频

MIRAS 框架概述。在 MIRAS 框架中，我们的目标是学习一种联想记忆，在键（keys）和值（values）之间建立映射。对于每个 token，记忆模块在内部优化其内部注意力偏置，同时使用其保留门来确保它不会偏离其过去的状态。优化过程通过基于梯度的优化器完成。

### 超越均方误差范式

几乎所有现有的成功序列模型都依赖[均方误差](https://en.wikipedia.org/wiki/Mean_squared_error) (MSE) 或[点积相似度](https://medium.com/advanced-deep-learning/understanding-vector-similarity-b9c10f7506de)来实现其偏置和保留。这种依赖性会使模型对异常值敏感，并限制其表达能力。

MIRAS 超越了这一限制，它提供了一个生成框架，结合优化和统计学文献，探索更丰富的设计空间。这允许创建具有[非欧几里得目标](https://en.wikipedia.org/wiki/Non-Euclidean_geometry)和正则化的新颖架构。

使用 MIRAS，我们创建了三个特定的无注意力（attention-free）模型：

*   *YAAD*：我们设计的这个 MIRAS 变体对重大错误或“异常值”（比如大型文档中的单个拼写错误）不太敏感。它对错误使用更温和的数学惩罚（[Huber 损失](https://en.wikipedia.org/wiki/Huber_loss)），因此不会对一次性问题反应过度。当输入数据杂乱或不一致时，这使得模型更加稳健。
*   *MONETA*：该模型探索了使用更复杂和严格的数学惩罚（称为[广义范数](https://en.wikipedia.org/wiki/Norm_(mathematics))）。它研究了对模型关注的内容和遗忘的内容使用这些更严格的规则，是否能带来整体上更强大、更稳定的长期记忆系统。
*   *MEMORA*：该模型专注于通过强制其记忆表现得像一个严格的概率图来实现最佳的记忆稳定性。通过使用这种约束，它确保每次更新记忆状态时，变化都是受控和平衡的。这保证了整合新信息的干净、稳定的过程。几乎所有现有的成功序列模型都依赖[均方误差](https://en.wikipedia.org/wiki/Mean_squared_error) (MSE) 或[点积相似度](https://medium.com/advanced-deep-learning/understanding-vector-similarity-b9c10f7506de)来实现其偏置和保留。这种依赖性会使模型对异常值敏感，并限制其表达能力。*(注：此处原文存在重复段落)*

实验与结果
-----------------------

我们将 Titans 以及 MIRAS 变体（YAAD、MONETA、MEMORA）与领先的架构进行了严格对比，包括 [Transformer++](https://arxiv.org/abs/2003.04974)、[Mamba-2](https://arxiv.org/pdf/2405.21060) 和 [Gated DeltaNet](https://arxiv.org/pdf/2412.06464)。我们还通过在基因组建模 (DNA) 和时间序列预测上测试 Titans，进一步验证了其多功能性，证明该架构能有效地泛化到文本之外的领域。

在标准语言建模数据集（[C4](https://c4model.com/)、[WikiText](https://huggingface.co/datasets/Salesforce/wikitext)）和[零样本推理任务](https://medium.com/@hetzer2807/zero-shot-reasoning-unleashed-the-magic-of-large-language-models-4e877dfe470e)（[HellaSwag](https://arxiv.org/abs/1905.07830)、PIQA）中，我们的模型始终表现出更高的准确率和更低的[困惑度](https://en.wikipedia.org/wiki/Perplexity)（perplexity，衡量大语言模型在看到一段文本时的惊讶程度的指标）。

### 深度记忆的力量

消融实验清楚地表明，记忆架构的深度至关重要。当比较大小相同但深度不同的长期记忆模块时，具有更深记忆的模块在语言建模中始终实现更低的困惑度。此外，它们表现出更好的扩展特性，在序列长度显著增加时仍能保持性能。

![Image 3: 两张折线图显示，随着序列长度的增加，在 3.6 亿和 7.6 亿参数规模下，LMM 和 MM 模型保持比 Mamba 更低的困惑度。](https://storage.googleapis.com/gweb-research2023-media/images/Titans-3-Performance1.width-1250.png)

*记忆深度对 3.6 亿和 7.6 亿参数规模下困惑度的影响。*

### 语言建模与效率

在语言建模和常识推理任务中，Titans 架构优于最先进的线性循环模型（如 Mamba-2 和 Gated DeltaNet）以及同等规模的 Transformer++ 基线。新颖的 MIRAS 变体（MONETA、YAAD、MEMORA）与这些基线相比也实现了性能提升，验证了探索稳健的、非 MSE 优化机制的益处。重要的是，这些模型保持了高效的、可并行的训练和快速的线性推理速度。

### 极限长上下文召回

这些新架构最显著的优势是它们处理极限长上下文的能力。这在 [BABILong 基准测试](https://github.com/booydar/babilong)中得到了突出体现，该任务需要跨分布在极长文档中的事实进行推理。在这种极具挑战性的设置中，Titans 优于所有基线，包括像 GPT-4 这样的超大型模型，尽管其参数要少得多。Titans 进一步展示了有效扩展到超过 200 万个 token 的上下文窗口大小的能力。

![Image 4: 折线图显示，与 GPT-4、Mamba-FT 和其他模型相比，Titans (MAC)-FT 在不断增加的序列长度上保持了更高的准确率。](https://storage.googleapis.com/gweb-research2023-media/images/Titans-4-Performance2.width-1250.png)

*Titans 在极限长上下文推理上的性能。*

结论
----------

Titans 和 MIRAS 框架的推出标志着序列建模领域的重大进步。通过采用深度神经网络作为记忆模块，在数据输入时学习记忆，这些方法克服了固定大小循环状态的局限性。此外，MIRAS 提供了强大的理论统一，揭示了在线优化、联想记忆和架构设计之间的联系。通过超越标准的欧几里得范式，这项研究为新一代序列模型打开了大门，这些模型将 RNN 的效率与长上下文 AI 时代所需的表达能力结合在一起。

标签：*   [生成式 AI](https://research.google/blog/label/generative-ai)
*   [机器智能](https://research.google/blog/label/machine-intelligence)
*   [自然语言处理](https://research.google/blog/label/natural-language-processing)

快捷链接
-----------

*   [Titans 论文](https://arxiv.org/abs/2501.00663)
*   [MIRAS 论文](https://arxiv.org/pdf/2504.13173)
*   分享

    *   [](https://twitter.com/intent/tweet?text=https%3A//research.google/blog/titans-miras-helping-ai-have-long-term-memory/ "在 Twitter 上分享")
    *   [](https://www.facebook.com/sharer/sharer.php?u=https%3A//research.google/blog/titans-miras-helping-ai-have-long-term-memory/ "在 Facebook 上分享")
    *   [](https://www.linkedin.com/shareArticle?url=https%3A//research.google/blog/titans-miras-helping-ai-have-long-term-memory/&mini=true "在 LinkedIn 上分享")
    *   [](mailto:name@example.com?subject=Check%20out%20this%20site&body=Check%20out%20https%3A//research.google/blog/titans-miras-helping-ai-have-long-term-memory/ "通过电子邮件发送")
    *    复制链接  ×

### 其他您可能感兴趣的文章

*   [![Image 5](https://storage.googleapis.com/gweb-research2023-media/original_images/DialogLab-1.jpg) 2026年2月10日 超越一对一：创作、模拟和测试动态的人机群体对话 * 人机交互与可视化 · * 机器智能](https://research.google/blog/beyond-one-on-one-authoring-simulating-and-testing-dynamic-human-ai-group-conversations/)
*   [![Image 6](https://storage.googleapis.com/gweb-research2023-media/original_images/NAI_Hero.png) 2026年2月5日 AI 工具如何重新定义通用设计以提高无障碍性 * 教育创新 · * 机器智能 · * 自然语言处理 · * 负责任的 AI](https://research.google/blog/how-ai-agents-can-redefine-universal-design-to-increase-accessibility/)
*   [![Image 7](https://storage.googleapis.com/gweb-research2023-media/original_images/ATS-gif-1.gif) 2026年2月3日 合作开展一项关于 AI 在真实世界虚拟护理中应用的全国性随机研究 * 生成式 AI · * 健康与生物科学 · * 机器智能](https://research.google/blog/collaborating-on-a-nationwide-randomized-study-of-ai-in-real-world-virtual-care/)

×❮❯

![Image 8: Titans-4-Performance2](https://storage.googleapis.com/gweb-research2023-media/original_images/Titans-4-Performance2.png)

 折线图显示，与 GPT-4、Mamba-FT 和其他模型相比，Titans (MAC)-FT 在不断增加的序列长度上保持了更高的准确率。

![Image 9: Titans-3-Performance1](https://storage.googleapis.com/gweb-research2023-media/original_images/Titans-3-Performance1.png)

 两张折线图显示，随着序列长度的增加，在 3.6 亿和 7.6 亿参数规模下，LMM 和 MM 模型保持比 Mamba 更低的困惑度。

![Image 10: Titans-1-Overview](https://storage.googleapis.com/gweb-research2023-media/original_images/Titans-1-Overview.png)

 神经架构图解，包含三层：上下文记忆（学习）、核心（上下文学习）和持久记忆（固定权重）。

关注我们

*   [](https://x.com/GoogleResearch "在 X 上关注我们")
*   [](https://www.linkedin.com/showcase/googleresearch/ "在 LinkedIn 上关注我们")
*   [](https://www.youtube.com/c/GoogleResearch "在 YouTube 上关注我们")
*   [](https://github.com/google-research "在 GitHub 上关注我们")

[](https://www.google.com/ "Google")

*   [关于 Google](https://about.google/)
*   [Google 产品](https://about.google/intl/zh-CN/products/)
*   [隐私权](https://policies.google.com/privacy)
*   [条款](https://policies.google.com/terms)

*   [帮助](https://support.google.com/?hl=zh-Hans)
*    提交反馈

×

![Image 11](https://research.google/blog/titans-miras-helping-ai-have-long-term-memory/)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/memory]]
- [[00-元语/context-optimization]]
- [[00-元语/benchmark]]
- [[00-元语/paper]]
