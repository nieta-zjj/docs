# Mistral AI 平台服务 La Plateforme 开启 Beta 测试

## 文档信息
- 来源：https://mistral.ai/news/la-plateforme

## 摘要
**1) 一句话总结**
Mistral AI 正式开启其平台服务 La Plateforme 的 Beta 测试，首批开放了三个不同性能层级的文本生成聊天端点和一个嵌入端点。

**2) 关键要点**
* **服务构成**：La Plateforme 首批提供 3 个聊天端点（tiny, small, medium）和 1 个嵌入端点（embed），以满足不同的性能与价格需求。
* **模型训练**：模型基于开放网络数据预训练，并结合高效微调和直接偏好优化（DPO）等技术进行了指令微调。
* **Mistral-tiny**：最具性价比的端点，搭载 Mistral 7B Instruct v0.2，仅支持英语，MT-Bench 得分为 7.6，该模型已开放下载。
* **Mistral-small**：搭载最新的 Mixtral 8x7B 模型，支持英、法、意、德、西五种语言及代码，MT-Bench 得分为 8.3。
* **Mistral-medium**：质量最高的端点，搭载高性能原型模型，支持多语言及代码，MT-Bench 得分为 8.6。
* **Mistral-embed**：提供 1024 维度的嵌入模型，专为检索能力设计，MTEB 检索得分为 55.26。
* **API 与开发支持**：API 遵循主流聊天接口规范，提供 Python 和 JavaScript 客户端库，并支持通过系统提示（System Prompt）进行高级别输出控制。
* **技术合作**：与 NVIDIA 合作整合了 TensorRT-LLM 和 Triton，使稀疏混合专家模型能够兼容 TRT-LLM。

**3) 风险/不足**
* 平台目前正处于稳定期并向完全自助服务过渡，用户在此阶段可能会遇到一些系统不完善之处。

## 正文
我们的首批 AI 端点（Endpoints）现已开放抢先体验。

Mistral AI 致力于为开发者提供最强大的开源生成式模型，并提供高效的方法以便在生产环境中部署和定制这些模型。

今天，我们正式开放首批平台服务的 Beta 测试权限。我们从简单的服务开始：La Plateforme 提供了三个用于根据文本指令生成文本的聊天端点，以及一个嵌入端点（Embedding Endpoint）。每个端点都有不同的性能与价格权衡。

### 模型对齐与训练
前两个端点（mistral-tiny 和 mistral-small）目前使用的是我们已发布的两个开源模型；第三个端点（mistral-medium）使用的是一个性能更高的原型模型，我们正在部署环境中对其进行测试。

我们提供经过指令微调（Instructed）的模型版本。我们致力于整合最有效的对齐技术（如高效微调、直接偏好优化），以打造易于控制且使用体验良好的模型。我们在从开放网络提取的数据上对模型进行预训练，并根据标注进行指令微调。

### 端点详情与性能

*   **Mistral-tiny**：这是我们最具性价比的端点，目前提供 Mistral 7B Instruct v0.2（Mistral 7B Instruct 的一个全新次要版本）。Mistral-tiny 仅支持英语，在 MT-Bench 上获得了 7.6 分。该指令模型目前已提供下载。
*   **Mistral-small**：该端点目前提供我们最新的模型 Mixtral 8x7B。它精通英语、法语、意大利语、德语、西班牙语以及代码，在 MT-Bench 上获得了 8.3 分。
*   **Mistral-medium**：这是我们质量最高的端点，目前提供一个原型模型。根据标准基准测试，该模型是目前可用的顶级服务模型之一。它精通英语、法语、意大利语、德语、西班牙语以及代码，在 MT-Bench 上获得了 8.6 分。（注：原文对比了 Mistral-medium、Mistral-small 的基础模型与竞争对手端点的性能）。
*   **Mistral-embed**：我们的嵌入端点，提供一个具有 1024 嵌入维度的嵌入模型。该模型在设计时充分考虑了检索能力，在 MTEB 上的检索得分为 55.26。

### API 规范与接入

我们的 API 遵循由我们最尊敬的竞争对手最初提出的流行聊天接口规范。我们提供 Python 和 JavaScript 客户端库来查询我们的端点。对于有严格审核要求的应用程序，我们的端点允许用户提供系统提示（System Prompt），以便对模型输出设置更高级别的控制。

随着我们逐步提升容量，从今天起任何人都可以注册使用我们的 API。我们的业务团队可以帮助评估您的需求并加速接入。在我们稳定平台并迈向完全自助服务的过程中，可能会遇到一些不完善之处，敬请谅解。

### 致谢

我们感谢 NVIDIA 在整合 TensorRT-LLM 和 Triton 方面给予的支持，并感谢他们与我们并肩工作，使稀疏混合专家模型（Sparse Mixture of Experts）能够兼容 TRT-LLM。

**AI 的下一篇章属于你。**
