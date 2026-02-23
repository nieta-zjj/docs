---
title: "Transformers.js v4 预览版现已登陆 NPM"

来源: "https://huggingface.co/blog/transformersjs-v4"
---

## 摘要

**一句话总结**
Transformers.js v4 预览版现已登陆 NPM，本次重大更新带来了基于 C++ 重写的全新 WebGPU 运行时、显著的性能提升、全面的代码库重构以及独立的轻量级分词器库。

**关键要点**
*   **NPM 快速安装**：v4 预览版现已发布，用户可通过 `npm i @huggingface/transformers@next` 直接安装。
*   **全新 WebGPU 运行时**：使用 C++ 完全重写，支持在浏览器、Node、Bun 和 Deno 等多种 JavaScript 环境中直接运行 WebGPU 加速模型。
*   **性能与离线优化**：利用 ONNX Runtime 专属算子（如 `GroupQueryAttention` 等）优化导出策略，使基于 BERT 的嵌入模型加速约 4 倍；同时通过本地缓存 WASM 文件实现了全面的离线运行支持。
*   **代码库 Monorepo 重构**：采用 PNPM Workspaces 转换为单体仓库，将超过 8000 行的 `models.js` 拆分为模块化结构，并将示例项目移至独立仓库。
*   **构建系统升级**：从 Webpack 迁移至 esbuild，构建时间从 2 秒降至 200 毫秒（提升 10 倍），默认导出文件 `transformers.web.js` 体积缩小了 53%。
*   **独立的 Tokenizers 库**：分词逻辑被提取为独立的 `@huggingface/tokenizers` 库，零依赖、完全类型安全，gzip 压缩后仅 8.8kB。
*   **扩展的模型与架构支持**：新增对 Mamba、MLA 和 MoE 等高级架构的支持，引入了 GPT-OSS、Olmo3 等热门模型，且均兼容 WebGPU。
*   **大模型运行能力**：增强了对超过 8B 参数模型的支持，测试显示在 M4 Pro Max 上运行 GPT-OSS 20B (q4f16) 速度可达约 60 tokens/秒。

## 正文

我们非常高兴地宣布，Transformers.js v4（预览版）现已在 NPM 上发布！经过近一年的开发（始于2025年3月 🤯），我们终于准备好让大家进行测试了。以前，用户必须通过 GitHub 从源码安装 v4 版本，但现在只需运行一条简单的命令即可：

```bash
npm i @huggingface/transformers@next
```

在正式版发布之前，我们将继续在 NPM 的 `next` 标签下发布 v4 版本的更新，敬请期待定期的版本迭代！

### 性能与运行时提升

最大的变化无疑是采用了全新的 WebGPU 运行时，该运行时完全使用 C++ 进行了重写。我们与 ONNX Runtime 团队密切合作，在我们支持的约 200 种模型架构以及许多 v4 专属的新架构上对该运行时进行了全面测试。

除了更好的算子支持（在性能、准确性和覆盖率方面）之外，这个新的 WebGPU 运行时还允许同一套 Transformers.js 代码在各种 JavaScript 环境中运行，包括浏览器、服务端运行时和桌面应用程序。现在，你可以直接在 Node、Bun 和 Deno 中运行 WebGPU 加速的模型！

我们已经证明了在浏览器中 100% 本地运行最先进的 AI 模型是可行的。现在我们的重点是性能：让这些模型运行得尽可能快，即使在资源受限的环境中也是如此。这要求我们彻底重新思考导出策略，特别是对于大型语言模型（LLM）。我们通过逐个算子重新实现新模型来实现这一目标，利用专门的 ONNX Runtime 贡献者算子（Contrib Operators），如 `GroupQueryAttention`、`MatMulNBits` 或 `QMoE`，以实现性能最大化。

例如，通过采用 `MultiHeadAttention` 算子，我们成功让基于 BERT 的嵌入模型实现了约 4 倍的加速。

此外，本次更新通过在浏览器中本地缓存 WASM 文件实现了全面的离线支持。用户在首次下载后，无需互联网连接即可运行 Transformers.js 应用程序。

### 代码库重构

开发新的大版本为我们提供了一个投资代码库并解决积压已久的重构工作的机会。

*   **PNPM Workspaces**：此前，我们的 GitHub 仓库直接作为 npm 包使用。当仓库只暴露一个库时，这很有效。但面向未来，我们需要各种严重依赖 Transformers.js 核心的子包来应对不同的用例（例如特定库的实现，或大多数用户不需要但对某些人必不可少的小型实用工具）。因此，我们使用 pnpm workspaces 将仓库转换为了 Monorepo（单体仓库）。这使我们能够发布依赖于 `@huggingface/transformers` 的更小的包，而无需承担维护独立仓库的开销。
*   **模块化类结构**：另一项重大重构针对的是不断膨胀的 `models.js` 文件。在 v3 中，所有可用模型都定义在一个超过 8000 行的单一文件中，维护变得越来越困难。在 v4 中，我们将其拆分为更小、更专注的模块，明确区分了实用函数、核心逻辑和特定模型的实现。这种新结构提高了可读性，并使添加新模型变得更加容易。开发者现在可以专注于特定模型的逻辑，而无需在数千行无关代码中穿梭。
*   **示例仓库**：在 v3 中，许多 Transformers.js 示例项目直接存放在主仓库中。在 v4 中，我们将它们移至专门的示例仓库，从而保持核心库代码的整洁。这也让用户更容易查找和贡献示例，而无需在主仓库中翻找。
*   **Prettier 格式化**：我们更新了 Prettier 配置并重新格式化了仓库中的所有文件，确保整个代码库的格式一致。未来的所有 PR 都将自动遵循相同的样式。再也不用为格式化争论了，Prettier 会处理好一切，为所有人保持代码的整洁和可读。

### 新模型与架构

得益于我们新的导出策略以及 ONNX Runtime 对自定义算子不断扩展的支持，我们在 v4 中添加了许多新模型和架构。其中包括 GPT-OSS、Chatterbox、GraniteMoeHybrid、LFM2-MoE、HunYuanDenseV1、Apertus、Olmo3、FalconH1 和 Youtu-LLM 等热门模型。

其中许多模型要求我们实现对高级架构模式的支持，包括 Mamba（状态空间模型）、多头潜在注意力（MLA）和混合专家模型（MoE）。最重要的是，这些模型都兼容 WebGPU，允许用户在浏览器或服务端 JavaScript 环境中利用硬件加速直接运行它们。

### 全新的构建系统

我们将构建系统从 Webpack 迁移到了 esbuild，结果非常惊人。构建时间从 2 秒骤降至仅 200 毫秒，实现了 10 倍的提升，大大加快了开发迭代速度。除了速度，打包体积也平均减小了 10%。最显著的改进是我们的默认导出文件 `transformers.web.js`，其体积缩小了 53%，这意味着用户可以获得更快的下载和启动速度。

### 独立的 Tokenizers.js 库

用户经常要求将分词（Tokenization）逻辑提取到一个独立的库中。在 v4 中，我们做到了。`@huggingface/tokenizers` 是对分词逻辑的彻底重构，旨在跨浏览器和服务端运行时无缝工作。它在 gzip 压缩后仅有 8.8kB，零依赖，极其轻量且完全类型安全。

示例代码：

```javascript
import { Tokenizer } from "@huggingface/tokenizers";

// 从 Hugging Face Hub 加载
const modelId = "HuggingFaceTB/SmolLM3-3B";
const tokenizerJson = await fetch(
  `https://huggingface.co/${modelId}/resolve/main/tokenizer.json`
).then(res => res.json());

const tokenizerConfig = await fetch(
  `https://huggingface.co/${modelId}/resolve/main/tokenizer_config.json`
).then(res => res.json());

// 创建分词器
const tokenizer = new Tokenizer(tokenizerJson, tokenizerConfig);

// 文本分词
const tokens = tokenizer.tokenize("Hello World");
// ['Hello', 'ĠWorld']

const encoded = tokenizer.encode("Hello World");
// { ids: [9906, 4435], tokens: ['Hello', 'ĠWorld'], ... }
```

这种分离保持了 Transformers.js 核心的专注和精简，同时提供了一个多功能、独立的工具，任何 WebML 项目都可以独立使用。

### 其他改进

我们在整个库中进行了多项体验优化：

*   **类型系统增强**：引入了基于输入自适应的动态 Pipeline 类型，提供了更好的开发者体验和类型安全。
*   **日志改进**：赋予用户更多控制权，并在模型执行期间提供更清晰的反馈。
*   **大模型支持**：增加了对超过 8B 参数的更大模型的支持。在我们的测试中，能够在 M4 Pro Max 上以约 60 tokens/秒 的速度运行 GPT-OSS 20B (q4f16)。

### 致谢

我们衷心感谢所有为这个大版本做出贡献的人，特别是 ONNX Runtime 团队在全新 WebGPU 运行时上的出色工作以及他们在整个开发过程中的支持，同时也感谢所有外部贡献者和早期测试人员。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/wasm]]
- [[00-元语/sdk]]
