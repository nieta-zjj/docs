# NVIDIA Blackwell Ultra：为代理型 AI 带来 50 倍性能提升与 35 倍成本降低

## 文档信息
- 来源：https://blogs.nvidia.com/blog/data-blackwell-ultra-performance-lower-cost-agentic-ai/

## 摘要
**1) 一句话总结**
NVIDIA Blackwell Ultra 平台通过软硬件协同创新，专为代理型 AI 优化了低延迟与长上下文处理能力，相比 Hopper 平台实现了高达 50 倍的性能提升与 35 倍的成本降低。

**2) 关键要点**
* **极致性能与成本效益**：相比 NVIDIA Hopper 平台，GB300 NVL72 系统的每兆瓦吞吐量提升高达 50 倍，低延迟场景下每百万 Token 成本降低高达 35 倍。
* **长上下文处理优势**：在 128,000 Token 输入和 8,000 Token 输出的长上下文工作负载中，GB300 NVL72 的每 Token 成本比 GB200 NVL72 降低了 1.5 倍。
* **核心硬件升级**：Blackwell Ultra 的 NVFP4 计算性能提升了 1.5 倍，注意力处理速度提升了 2 倍，能够高效支持 AI 代理跨海量代码库进行推理。
* **软件层面的持续优化**：得益于高性能 GPU 内核、NVLink 对称内存和编程式依赖启动等技术改进，GB200 在低延迟工作负载上的性能在四个月内提升了高达 5 倍。
* **广泛的行业部署**：微软、CoreWeave 和 OCI 等领先云服务提供商正在将 GB300 NVL72 投入生产环境，以支持新一代实时交互式 AI 应用。
* **下一代 Rubin 平台前瞻**：未来的 NVIDIA Rubin 平台在混合专家（MoE）推理的每兆瓦吞吐量上将比 Blackwell 提升高达 10 倍，且训练大型 MoE 模型所需的 GPU 数量仅为 Blackwell 的四分之一。

## 正文
NVIDIA Blackwell 平台已被 Baseten、DeepInfra、Fireworks AI 和 Together AI 等领先的推理服务提供商广泛采用，将每 Token 的成本降低了高达 10 倍。如今，NVIDIA Blackwell Ultra 平台正将这一强劲势头进一步推向代理型 AI（Agentic AI）领域。

根据 OpenRouter 的推理状态报告，AI 代理和编程助手正推动与软件编程相关的 AI 查询量呈爆炸式增长：从去年的 11% 激增至约 50%。这些应用要求极低的延迟，以在多步工作流中保持实时响应能力；同时还需要极长的上下文窗口，以便在整个代码库中进行推理。

SemiAnalysis InferenceX 的最新性能数据显示，NVIDIA 的软件优化与下一代 NVIDIA Blackwell Ultra 平台的结合，在这两个方面均实现了突破性进展。与 NVIDIA Hopper 平台相比，NVIDIA GB300 NVL72 系统现在的每兆瓦吞吐量提升了高达 50 倍，从而使每 Token 的成本降低了 35 倍。

通过在芯片、系统架构和软件层面的持续创新，NVIDIA 极致的协同设计加速了从代理型编程到交互式编程助手等各类 AI 工作负载的性能，同时在大规模应用中显著降低了成本。

### GB300 NVL72 为低延迟工作负载带来高达 50 倍的性能提升

Signal65 的最新分析表明，凭借极致的软硬件协同设计，NVIDIA GB200 NVL72 的每瓦 Token 产出量比 NVIDIA Hopper 平台高出 10 倍以上，使每 Token 成本降至原来的十分之一。随着底层技术栈的不断完善，这些巨大的性能优势还在持续扩大。

来自 NVIDIA TensorRT-LLM、NVIDIA Dynamo、Mooncake 和 SGLang 团队的持续优化，正在显著提升 Blackwell NVL72 在所有延迟目标下处理混合专家（MoE）推理的吞吐量。例如，得益于 NVIDIA TensorRT-LLM 库的改进，GB200 在低延迟工作负载上的性能相比四个月前提升了高达 5 倍。

这些软件层面的进步包括：
*   **优化的高性能 GPU 内核：** 专为高效率和低延迟打造，有助于充分发挥 Blackwell 强大的计算能力并提升吞吐量。
*   **NVIDIA NVLink 对称内存（Symmetric Memory）：** 支持 GPU 到 GPU 的直接内存访问，实现更高效的通信。
*   **编程式依赖启动（Programmatic dependent launch）：** 通过在前一个内核完成前启动下一个内核的设置阶段，最大限度地减少系统空闲时间。

在这些软件进步的基础上，搭载 Blackwell Ultra GPU 的 GB300 NVL72 将每兆瓦吞吐量的极限推高至 Hopper 平台的 50 倍。

这种性能提升转化为卓越的经济效益：在整个延迟范围内，NVIDIA GB300 的成本均低于 Hopper 平台。在代理型应用所依赖的低延迟场景中，成本降幅最为显著——每百万 Token 的成本比 Hopper 平台降低了高达 35 倍。

对于代理型编程和交互式助手这类工作负载而言，多步工作流中的每一毫秒都至关重要。这种不懈的软件优化与下一代硬件的结合，使 AI 平台能够将实时交互体验扩展到更庞大的用户群体中。

### 在长上下文工作负载中展现卓越的经济效益

虽然 GB200 NVL72 和 GB300 NVL72 都能高效提供超低延迟，但 GB300 NVL72 在长上下文场景中的独特优势最为明显。对于具有 128,000 Token 输入和 8,000 Token 输出的工作负载（例如跨代码库进行推理的 AI 编程助手），GB300 NVL72 的每 Token 成本比 GB200 NVL72 降低了高达 1.5 倍。

随着 AI 代理读取的代码越来越多，上下文也会随之增长。这虽然能让代理更好地理解代码库，但也需要消耗大量的算力。Blackwell Ultra 的 NVFP4 计算性能提升了 1.5 倍，注意力处理速度提升了 2 倍，从而使代理能够高效地理解整个代码库。

### 代理型 AI 的基础设施与行业部署

领先的云服务提供商和 AI 创新企业已经大规模部署了 NVIDIA GB200 NVL72，并正在将 GB300 NVL72 投入生产环境。微软、CoreWeave 和 OCI 正在部署 GB300 NVL72，以应对代理型编程和编程助手等低延迟和长上下文用例。通过降低 Token 成本，GB300 NVL72 催生了能够实时跨海量代码库进行推理的新一代应用。

CoreWeave 工程高级副总裁 Chen Goldberg 表示：“随着推理成为 AI 生产的核心，长上下文性能和 Token 效率变得至关重要。Grace Blackwell NVL72 直接解决了这一挑战。CoreWeave 的 AI 云（包括 CKS 和 SUNK）旨在基于 GB200 的成功经验，将 GB300 系统的优势转化为可预测的性能和成本效益。最终的结果是，为大规模运行工作负载的客户带来更好的 Token 经济性和更具实用价值的推理能力。”

### NVIDIA Vera Rubin NVL72 将带来下一代性能飞跃

随着 NVIDIA Blackwell 系统的大规模部署，持续的软件优化将不断为现有用户解锁更多的性能提升和成本优化空间。

展望未来，将六款新芯片整合为一台 AI 超级计算机的 NVIDIA Rubin 平台，即将带来新一轮的巨大性能飞跃。在 MoE 推理方面，与 Blackwell 相比，Rubin 的每兆瓦吞吐量提升了高达 10 倍，这意味着每百万 Token 的成本将降至十分之一。而对于下一代前沿 AI 模型，Rubin 训练大型 MoE 模型所需的 GPU 数量仅为 Blackwell 的四分之一。
