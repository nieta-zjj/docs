---
title: "中国开源AI生态的架构抉择：超越DeepSeek的构建之路"
---

## 摘要

### 1) 一句话总结
自“DeepSeek时刻”以来，中国开源AI生态正从单纯追求模型性能，全面转向以混合专家架构（MoE）、多模态、小模型、宽松开源协议及深度适配国产硬件为核心的系统级构建。

### 2) 核心要点
*   **MoE架构成为标配**：中国头部模型（如Kimi K2、MiniMax M2、Qwen3）全面转向混合专家（MoE）架构，不再盲目追求绝对性能，而是通过动态算力分配寻求最佳性价比与灵活部署。
*   **多模态与智能体全面爆发**：开源重心从纯文本向音视频、3D和智能体扩展。阶跃星辰（如击败闭源的Step-Audio-R1.1）和腾讯（Hunyuan Video/3D）等企业正推动非文本模态的系统级开源。
*   **小模型实用性凸显**：0.5B到30B参数范围的模型因易于本地运行和微调而备受青睐（如Qwen 1.5-0.5B衍生模型最多）；100B-700B的超大模型则主要作为“教师模型”用于能力蒸馏。
*   **开源协议趋于宽松**：Apache 2.0 已成为中国社区的默认选择，定制化或严格的许可证呈下降趋势，大幅降低了企业在生产环境中商用部署的阻力。
*   **推理端实现国产硬件“零日”支持**：模型发布从“模型优先”转向“硬件优先”，例如 DeepSeek-V3.2-Exp 发布时即同步支持华为昇腾和寒武纪芯片的复现推理。
*   **国产芯片深入训练环节**：蚂蚁Ling模型在国产芯片上的优化训练使成本降低约20%；百度Qianfan-VL在超5000张昆仑芯P800上完成训练；智谱GLM-Image和中国电信TeleChat3均宣布完全基于国产芯片训练。
*   **基础设施系统性开源**：企业开始开源生产级服务系统与工具链，如月之暗面的 Mooncake 服务系统、百度的 FastDeploy 2.0 量化部署工具，以及阿里 Qwen 的全栈集成生态。

### 3) 风险与缺口
*   **算力紧缺限制业务扩张**：国内算力受限的现状已对企业构成实际威胁，例如智谱AI因算力紧张被迫限制了相关AI服务的注册与使用。
*   **外部出口管制的不确定性**：面对美国的硬件销售与出口管制（如NVIDIA H200的销售动态），中国生态系统将如何应对仍是一个悬而未决的问题。

## 正文

[![Adina Yakefu](https://cdn-avatars.huggingface.co/v1/production/uploads/63a369d98c0c89dcae3b8329/AiH2zjy1cnt9OADAAZMLD.jpeg)](https://huggingface.co/AdinaY) [![Irene Solaiman](https://cdn-avatars.huggingface.co/v1/production/uploads/62543749b777cd32720675c2/EF_KRZO4hTo8TWXOtvc-n.png)](https://huggingface.co/irenesolaiman)

本文是探讨自2025年1月“DeepSeek时刻”以来，中国开源社区历史性进展系列博客的三部曲之二。第一篇博客可[在此](https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment)阅读，第三篇博客可[在此](https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment-blog-3)阅读。

在这第二篇文章中，随着“开源”成为常态，我们将把目光从模型本身转向中国企业在架构和硬件上的选择。

对于依赖开源生态的AI研究人员和开发者，以及需要了解快速变化环境的政策制定者而言，**架构偏好、模态多样化、许可证的开放程度、小模型的流行，以及中国国产硬件日益增长的采用率，都指明了多条路径上的领先战略。DeepSeek R1自身的特性激发了技术重叠与竞争，并促使中国更加关注国产硬件。**

### 混合专家模型（MoE）成为默认选择

过去一年中，**中国社区的头部模型几乎一致转向了混合专家（MoE）架构**，包括 [Kimi K2](https://huggingface.co/collections/moonshotai/kimi-k2)、[MiniMax M2](https://huggingface.co/MiniMaxAI/MiniMax-M2) 和 [Qwen3](https://huggingface.co/collections/Qwen/qwen3)。R1本身就是一个MoE模型，它也证明了一个关键点：**强大的推理能力是可以开源、可复现并在实践中进行工程化的。** 在中国现实世界的限制下，为了在保持高能力的同时控制成本，并确保模型能够被训练、部署和广泛采用，MoE成为了一个自然的解决方案。

MoE就像一个可控的算力分配系统；在单一的能力框架下，通过根据任务的复杂性和价值动态激活不同数量的专家，将算力资源分配到各个请求和部署环境中。更重要的是，它不需要每次推理都消耗全部资源，也不假设所有部署环境都具备相同的硬件条件。

2025年中国开源模型的整体方向很明确：**不一定追求绝对的最强性能，而是追求可持续运行、灵活部署和持续进化的能力，从而实现最佳的性价比平衡。**

### 模态争霸战

从2025年2月开始，开源活动不再仅仅局限于文本模型，而是迅速扩展到多模态和基于智能体（Agent）的方向：**任意到任意（Any-to-Any）模型、文生图、图生视频、文生视频、TTS（文本转语音）、3D** 以及 **智能体** 都在同步推进。社区推动的不仅仅是模型权重，而是一整套工程资产，包括推理部署、数据集与评估、工具链、工作流以及端云协同。视频生成工具、3D组件、蒸馏数据集和智能体框架的并行涌现，表明这不仅仅是孤立的突破——它指向了可复用的系统级能力。

在非文本模态领域，争夺类似DeepSeek领导地位的竞争日益激烈。阶跃星辰（StepFun）发布了高性能的多模态模型，在[音频](https://huggingface.co/collections/stepfun-ai/step-audio)、[视频](https://huggingface.co/stepfun-ai/stepvideo-t2v)以及[图像](https://huggingface.co/stepfun-ai/Step1X-Edit)生成、处理或编辑方面表现出色。他们最新的语音到语音模型 [Step-Audio-R1.1](https://huggingface.co/stepfun-ai/Step-Audio-R1.1) 拥有业界领先的性能，甚至击败了闭源模型。腾讯也通过在视频和3D领域的开源工作反映了这一转变。其 [Hunyuan Video](https://huggingface.co/collections/tencent/hunyuanvideo) 模型以及 [Hunyuan 3D](https://huggingface.co/collections/tencent/hunyuan3d) 等项目，反映出超越以文本为中心的模型竞争正在加剧。

### 小模型备受青睐

0.5B到30B参数范围内的模型更容易在本地运行、微调，并集成到业务系统和智能体工作流中。例如：在Qwen系列中，[Qwen 1.5-0.5B](https://huggingface.co/Qwen/Qwen1.5-0.5B) 拥有最多的衍生模型。在算力受限或合规要求严格的环境中，这些模型更适合长期运行。与此同时，头部玩家通常使用100B到700B范围内的大型MoE模型作为能力天花板或“教师模型”，然后将这些能力蒸馏到许多较小的模型中。这形成了一个清晰的结构：顶部是少数超大模型，底部是大量实用模型。月度总结中小模型份额的增长，反映了社区中真实的实际使用需求。

*(参考数据：[Hub Model Tree Stats](https://huggingface.co/spaces/cfahlgren1/hub-model-tree-stats))*

### 更宽松的开源许可证

在R1之后，Apache 2.0 几乎成为了中国社区开源模型的默认选择。**更宽松的许可证降低了在生产环境中使用、修改和部署模型的阻力，使企业能够更容易地将开源模型引入实际系统。** 对 Apache 2.0 和 MIT 等标准许可证的熟悉同样简化了使用流程；而规定性强且定制化的许可证则会因为陌生感和新的法律障碍增加摩擦，这也导致了下图中所示的下降趋势。

[![License Trends](https://cdn-uploads.huggingface.co/production/uploads/63a369d98c0c89dcae3b8329/-aFgz1QVgGBJZ6pxsNU0z.png)](https://cdn-uploads.huggingface.co/production/uploads/63a369d98c0c89dcae3b8329/-aFgz1QVgGBJZ6pxsNU0z.png)
*基于中国开源热力图中所有组织的发布数据*

### 从“模型优先”到“硬件优先”

2025年，模型的发布越来越与推理框架、量化格式、服务引擎和边缘运行时保持一致。**一个突出的目标不再仅仅是让权重可下载，而是确保模型能够直接在目标国产硬件上运行——并且运行得可靠、高效。** 这一变化在推理端最为明显。例如，通过 [DeepSeek-V3.2-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V3.2-Exp)，华为昇腾和寒武纪芯片都实现了“零日（day-zero）”支持，这不仅仅是云端演示，而是与权重一起发布的可复现推理流水线，使开发者能够直接验证真实世界的性能。

与此同时，训练端的信号也开始显现。蚂蚁集团的 [Ling](https://huggingface.co/collections/inclusionAI/ling) 开源模型在国产AI芯片上使用了优化训练，实现了接近NVIDIA H800的性能，将训练1万亿token的成本降低了约20%。百度的开源 [Qianfan-VL](https://huggingface.co/collections/baidu/qianfan-vl) 模型明确记录了该模型是在超过5000个百度昆仑芯P800加速器（其旗舰AI芯片）组成的集群上训练的，并详细说明了并行化和效率。在2026年初，智谱的 [GLM-Image](https://huggingface.co/zai-org/GLM-Image) 和中国电信最新开源的模型 [TeleChat3](https://huggingface.co/Tele-AI/TeleChat3-36B-Thinking)，均宣布完全在国产芯片上进行训练。这些信息披露表明，国产计算机不再局限于推理，而是已经开始进入训练流水线的关键阶段。

**在服务和基础设施方面，工程能力正在被系统性地开源。** **月之暗面（Moonshot AI）** 发布了其服务系统：[Mooncake](https://github.com/kvcache-ai/Mooncake)，并明确支持了 prefill/decoding 分离等特性。**通过开源生产级经验，这些努力显著提高了整个社区部署和运营的基准，使得大规模可靠地运行模型变得更加容易。** 这一方向在整个生态系统中得到了呼应。百度的 [FastDeploy 2.0](https://github.com/PaddlePaddle/FastDeploy) 强调了极致量化和集群级优化，以在紧张的算力预算下降低推理成本。阿里巴巴的 [Qwen](https://huggingface.co/Qwen) 生态系统追求全栈集成，将模型、推理框架、量化策略和云部署工作流紧密结合，以最大限度地减少从开发到生产的摩擦。尽管如此，有关中国算力受限的报道仍对扩张构成威胁；据[报道](https://www.scmp.com/tech/tech-trends/article/3341000/computing-constraints-force-chinas-zhipu-restrict-sign-ups-ai-coding-service?module=top_story&pgtype=section)，在算力紧缺的情况下，智谱AI正在限制服务的使用。

当模型、工具和工程被打包交付时，生态系统的增长不再仅仅依靠增加项目，而是建立在共享基础上的结构性分化——并开始自我进化。随着NVIDIA销售H200，中国将如何应对美国的硬件销售和出口管制，仍然是一个[悬而未决的问题](https://www.forbes.com/sites/joetoscano1/2026/01/26/temporary-nvidia-h200-halt-shows-chinas-desire-for-ai-independence/)。点击[此处](https://huggingface.co/blog/huggingface/shifting-compute-landscape)阅读更多关于全球算力格局变化的信息。

### 重构正在进行中

2025年1月的“DeepSeek时刻”不仅仅引发了一波新的开源模型浪潮。它迫使人们更深刻地重新思考：当开源不再是可选项而是基础时，AI系统应该如何构建，以及为什么这些底层选择现在具有了战略分量。

中国企业不再仅仅优化孤立的模型。相反，他们正在追求独特的架构路径，旨在构建适合开源世界的完整生态系统。在模型日益商品化的环境中，这些决定标志着竞争正从模型性能向系统设计发生明显转变。

我们的下一篇博客将深入探讨组织层面的胜利，并分享我们对2026年的一些期望。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/Agent]]
- [[00-元语/llmops]]
- [[00-元语/compliance]]
- [[00-元语/hardware-control]]
