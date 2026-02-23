# NVIDIA Blackwell Ultra：为智能体AI带来50倍性能提升与35倍成本降低

## 文档信息
- 来源：https://blogs.nvidia.com/blog/data-blackwell-ultra-performance-lower-cost-agentic-ai/

## 摘要
**1) 一句话总结**
NVIDIA Blackwell Ultra（GB300 NVL72）通过软硬件协同设计，专为智能体 AI 和长上下文工作负载优化，实现了相比 Hopper 平台高达 50 倍的每兆瓦吞吐量提升与 35 倍的 Token 成本降低。

**2) 关键要点**
*   **需求激增：** 软件编程相关的 AI 查询量占比从去年的 11% 飙升至约 50%，智能体 AI 对极低延迟和超长上下文窗口的需求急剧增加。
*   **吞吐量与成本突破：** 相比 NVIDIA Hopper 平台，GB300 NVL72 系统的每兆瓦吞吐量提升高达 50 倍，在低延迟场景下每百万 Token 成本降低高达 35 倍。
*   **软件优化加持：** 借助优化的 GPU 内核、NVLink 对称内存和程序化依赖启动技术，NVIDIA 软件栈（如 TensorRT-LLM）在短短四个月内将 GB200 的低延迟工作负载性能提升了 5 倍。
*   **长上下文经济性：** 针对 128,000 个 Token 输入和 8,000 个 Token 输出的工作负载，GB300 NVL72 的每 Token 成本比 GB200 NVL72 低 1.5 倍。
*   **硬件规格升级：** Blackwell Ultra 具备 1.5 倍的 NVFP4 计算性能和 2 倍的注意力处理速度，能够高效处理不断增长的代码上下文计算量。
*   **行业规模部署：** 微软（Microsoft）、CoreWeave 和 OCI 等领先云服务提供商正在生产环境中部署 GB300 NVL72，以支持智能体编程和交互式助手。
*   **下一代 Rubin 平台展望：** 未来的 Vera Rubin NVL72 平台在混合专家（MoE）推理方面，将比 Blackwell 的每兆瓦吞吐量再提升 10 倍（成本降至十分之一），且训练大型 MoE 模型所需 GPU 数量仅为 Blackwell 的四分之一。

## 正文
NVIDIA Blackwell 平台已被 Baseten、DeepInfra、Fireworks AI 和 Together AI 等领先的推理服务提供商广泛采用，将每个 Token 的成本降低了高达 10 倍。如今，NVIDIA Blackwell Ultra 平台正将这一强劲势头进一步推向智能体 AI（Agentic AI）领域。

根据 OpenRouter 的《推理状态报告》（State of Inference report），AI 智能体和编程助手正推动与软件编程相关的 AI 查询量呈爆炸式增长：去年该比例从 11% 飙升至约 50%。这些应用程序需要极低的延迟，以在多步工作流中保持实时响应能力；同时还需要超长的上下文窗口，以便在整个代码库中进行推理。

SemiAnalysis InferenceX 的最新性能数据显示，NVIDIA 的软件优化与新一代 NVIDIA Blackwell Ultra 平台的结合，在这两个方面都实现了突破性的进展。与 NVIDIA Hopper 平台相比，NVIDIA GB300 NVL72 系统现在的每兆瓦吞吐量提升了高达 50 倍，从而使每个 Token 的成本降低了 35 倍。

通过在芯片、系统架构和软件层面的持续创新，NVIDIA 极致的软硬件协同设计加速了从智能体编程到交互式编程助手等各类 AI 工作负载的性能，同时在大规模应用中大幅降低了成本。

### GB300 NVL72 在低延迟工作负载中实现高达50倍的性能提升

Signal65 的最新分析表明，凭借极致的软硬件协同设计，NVIDIA GB200 NVL72 提供的每瓦 Token 数量比 NVIDIA Hopper 平台高出 10 倍以上，使每个 Token 的成本降至后者的十分之一。随着底层技术栈的不断完善，这些巨大的性能优势还在持续扩大。

来自 NVIDIA TensorRT-LLM、NVIDIA Dynamo、Mooncake 和 SGLang 团队的持续优化，不断显著提升 Blackwell NVL72 在所有延迟目标下处理混合专家（MoE）推理的吞吐量。例如，与仅仅四个月前相比，NVIDIA TensorRT-LLM 库的改进已使 GB200 在低延迟工作负载上的性能提升了高达 5 倍。

这些软件进步主要得益于以下几点：
*   **优化的 GPU 内核：** 专为高效率和低延迟设计的高性能 GPU 内核，充分发挥了 Blackwell 巨大的计算能力并提升了吞吐量。
*   **NVIDIA NVLink 对称内存（Symmetric Memory）：** 支持 GPU 之间的直接内存访问，实现更高效的通信。
*   **程序化依赖启动（Programmatic dependent launch）：** 通过在前一个内核完成之前启动下一个内核的设置阶段，最大限度地减少了空闲时间。

在这些软件进步的基础上，搭载 Blackwell Ultra GPU 的 GB300 NVL72 将每兆瓦吞吐量的极限推高至 Hopper 平台的 50 倍。

这种性能提升转化为卓越的经济效益：在整个延迟频谱中，NVIDIA GB300 的成本均低于 Hopper 平台。其中，成本降幅最大的是智能体应用程序运行的低延迟场景——与 Hopper 平台相比，每百万 Token 的成本降低了高达 35 倍。

对于智能体编程和交互式助手等工作负载而言，每一毫秒的延迟都会在多步工作流中不断累加。这种不懈的软件优化与新一代硬件的结合，使 AI 平台能够将实时交互体验扩展到数量庞大的用户群中。

### GB300 NVL72 在长上下文工作负载中具备卓越的经济性

虽然 GB200 NVL72 和 GB300 NVL72 都能高效提供超低延迟，但 GB300 NVL72 的独特优势在长上下文场景中表现得最为明显。对于具有 128,000 个 Token 输入和 8,000 个 Token 输出的工作负载（例如在整个代码库中进行推理的 AI 编程助手），GB300 NVL72 的每 Token 成本比 GB200 NVL72 低 1.5 倍。

随着智能体读取的代码越来越多，上下文也会随之增长。这虽然能让智能体更好地理解代码库，但也需要更多的计算量。Blackwell Ultra 拥有 1.5 倍的 NVFP4 计算性能和 2 倍的注意力处理速度，能够让智能体高效地理解整个代码库。

### 智能体AI的基础设施与行业部署

领先的云服务提供商和 AI 创新企业已经大规模部署了 NVIDIA GB200 NVL72，并且正在生产环境中部署 GB300 NVL72。微软（Microsoft）、CoreWeave 和 OCI 正在部署 GB300 NVL72，以应对智能体编程和编程助手等低延迟和长上下文用例。通过降低 Token 成本，GB300 NVL72 催生了一类能够在海量代码库中进行实时推理的新型应用程序。

CoreWeave 工程高级副总裁 Chen Goldberg 表示：“随着推理成为 AI 生产的核心，长上下文性能和 Token 效率变得至关重要。Grace Blackwell NVL72 直接解决了这一挑战。CoreWeave 的 AI 云（包括 CKS 和 SUNK）旨在将 GB300 系统的优势（建立在 GB200 的成功之上）转化为可预测的性能和成本效益。其结果是为大规模运行工作负载的客户提供更好的 Token 经济性和更实用的推理能力。”

### NVIDIA Vera Rubin NVL72 将带来下一代性能飞跃

随着 NVIDIA Blackwell 系统的大规模部署，持续的软件优化将不断为现有设备解锁额外的性能和成本改进。

展望未来，NVIDIA Rubin 平台（将六颗新芯片组合成一台 AI 超级计算机）将带来新一轮的巨大性能飞跃。在 MoE 推理方面，与 Blackwell 相比，它的每兆瓦吞吐量提升了高达 10 倍，这意味着每百万 Token 的成本降至十分之一。而对于下一代前沿 AI 模型，Rubin 训练大型 MoE 模型所需的 GPU 数量仅为 Blackwell 的四分之一。
