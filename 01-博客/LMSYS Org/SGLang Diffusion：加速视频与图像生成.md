---
title: "SGLang Diffusion：加速视频与图像生成"

站点: "LMSYS Org"
发布日期: "2025-11-07"
原文链接: "https://lmsys.org/blog/2025-11-07-sglang-diffusion/"
译注: "未找到官方中文版本，本文基于英文原文翻译整理。"
---

## 摘要

**1) 一句话总结**
SGLang Diffusion 是一个专为加速图像和视频生成而设计的高性能推理引擎，通过模块化架构和先进的并行技术，实现了 1.2 倍至 5.9 倍的速度提升。

**2) 核心要点**
*   **显著加速**：在各类工作负载下，相比 Hugging Face Diffusers 实现了 1.2 倍至 5.9 倍的推理加速。
*   **广泛的模型支持**：原生支持主流开源视频模型（Wan 系列、FastWan、Hunyuan）和图像模型（Qwen-Image、Qwen-Image-Edit、Flux）。
*   **灵活的 API 接口**：提供兼容 OpenAI 的 API、命令行接口（CLI）和 Python 引擎 API，支持以极低的成本无缝集成到现有工作流中。
*   **模块化架构设计**：引入 `ComposedPipelineBase` 和 `PipelineStage` 抽象（如去噪循环、VAE 解码），方便开发者灵活组合和重用组件以构建定制化流水线。
*   **先进的并行策略**：核心 Transformer 块支持统一序列并行（USP，结合 Ulysses-SP 和 Ring-Attention），其他模型组件支持 CFG 并行和张量并行（TP）。
*   **端到端生态系统**：与 FastVideo 团队深度合作，FastVideo 负责模型蒸馏等训练任务，SGLang 负责推理，共同提供从训练后到生产服务的全流程支持。
*   **明确的演进路线**：未来计划支持 LongCat-Video 模型、量化内核、Blackwell 架构的 Flash Attention 4 集成，以及批处理（Batching）和云存储上传等服务器功能。

## 正文

我们很高兴推出 SGLang Diffusion，它将 SGLang 最先进的性能引入扩散模型，以加速图像和视频的生成。SGLang Diffusion 支持主流的开源视频和图像生成模型（Wan、Hunyuan、Qwen-Image、Qwen-Image-Edit、Flux），同时通过多个 API 入口（兼容 OpenAI 的 API、CLI、Python 接口）提供快速的推理速度和易用性。SGLang Diffusion 在各种工作负载下实现了 1.2 倍至 5.9 倍的加速。通过与 FastVideo 团队合作，我们为扩散模型提供了一个完整的生态系统，涵盖从训练后（post-training）到生产服务的全流程。代码请见[此处](https://github.com/sgl-project/sglang/tree/main/python/sglang/multimodal_gen)。文档请见[此处](https://docs.sglang.io/diffusion/index.html)。

H100 GPU 上的 SGLang Diffusion 性能基准测试

H200 GPU 上的 SGLang Diffusion 性能基准测试

## 为什么在 SGLang 中引入 Diffusion？

随着扩散模型成为最先进的图像和视频生成的核心基石，我们听到了社区的强烈需求，希望将 SGLang 标志性的性能和无缝的用户体验引入这些新模态。我们构建了 SGLang Diffusion 来响应这一呼声，为语言和扩散任务提供统一的高性能引擎。

这种统一的方法至关重要，因为生成的未来在于结合不同的架构。前沿模型已经在融合自回归（AR）和基于扩散的方法的优势——从字节跳动的 [Bagel](https://github.com/ByteDance-Seed/Bagel) 和 Meta 的 [Transfusion](https://arxiv.org/abs/2408.11039) 等使用单一 Transformer 处理这两项任务的模型，到 NVIDIA 的 [Fast-dLLM v2](https://nvlabs.github.io/Fast-dLLM/v2/)（它调整了 AR 模型以实现并行生成）。

SGLang Diffusion 旨在成为一个面向未来的高性能解决方案，随时准备为这些创新系统提供动力。

## 架构

SGLang Diffusion 专为性能和灵活性而设计，建立在 SGLang 经过实战检验的服务架构之上。它继承了强大的 SGLang 调度器，并重用了高度优化的 sgl-kernel 以实现最高效率。

在核心层面，我们的架构旨在适应现代扩散模型的多样化结构。我们引入了 `ComposedPipelineBase`，这是一个灵活的抽象，用于编排一系列模块化的 `PipelineStage`。每个阶段封装了一个常见的扩散功能——例如 `DenoisingStage` 中的去噪循环或 `DecodingStage` 中的 VAE 解码——允许开发者轻松组合和重用这些组件，以构建复杂、定制化的流水线（pipelines）。

为了实现最先进的速度，我们集成了先进的并行技术。它支持统一序列并行（Unified Sequence Parallelism, USP）——Ulysses-SP 和 Ring-Attention 的结合——用于核心 Transformer 块，同时支持 CFG 并行（CFG-parallelism）和张量并行（TP）用于其他模型组件。

为了加速开发并培育强大的生态系统，我们的系统建立在 **FastVideo** 的增强分支之上，并且我们正在与其团队密切合作。这种合作关系使 SGLang Diffusion 能够专注于提供尖端的推理速度，而 **FastVideo** 则为模型蒸馏等训练相关任务提供全面支持。

## 模型支持

我们支持各种流行的开源视频和图像生成模型，包括：

*   视频模型：Wan 系列、FastWan、Hunyuan
*   图像模型：Qwen-Image、Qwen-Image-Edit、Flux

有关支持模型的完整列表，请参考[此处](https://docs.sglang.io/diffusion/compatibility_matrix.html)。

## 使用方法

为了提供无缝的用户体验，我们提供了一套熟悉的接口，包括 CLI、Python 引擎 API 和兼容 OpenAI 的 API，允许用户以极低的接入成本将扩散生成集成到他们的工作流中。

### 安装

SGLang Diffusion 可以通过多种方式安装：

```
# 使用 pip 或 uv
uv pip install 'sglang[diffusion]' --prerelease=allow

# 从源码安装
git clone https://github.com/sgl-project/sglang.git
cd sglang
uv pip install -e "python[diffusion]" --prerelease=allow
```

### CLI

启动服务器然后发送请求：

```
sglang serve --model-path black-forest-labs/FLUX.1-dev --port 3000

curl http://127.0.0.1:3000/v1/images/generations \
  -o >(jq -r '.data[0].b64_json' | base64 --decode > example.png) \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "black-forest-labs/FLUX.1-dev",
    "prompt": "A cute baby sea otter",
    "n": 1,
    "size": "1024x1024",
    "response_format": "b64_json"
  }'
```

或者，在不启动服务器的情况下生成图像：

```
sglang generate --model-path black-forest-labs/FLUX.1-dev \
  --prompt "A Logo With Bold Large Text: SGL Diffusion" \
  --save-output
```

参考[安装指南](https://docs.sglang.io/diffusion/installation.html)和 [CLI 指南](https://docs.sglang.io/diffusion/api/cli.html)了解更多安装方法。

### 演示

#### 文本到视频：Wan-AI/Wan2.1

```
sglang generate --model-path Wan-AI/Wan2.1-T2V-1.3B-Diffusers \
    --prompt "A curious raccoon" \
    --save-output
```
 您的浏览器不支持 video 标签。 
备用链接：[下载视频](https://github.com/lm-sys/lm-sys.github.io/releases/download/test/T2V.mp4)

#### 图像到视频：Wan-AI/Wan2.1-I2V

```
sglang generate --model-path=Wan-AI/Wan2.1-I2V-14B-480P-Diffusers \
    --prompt="Summer beach vacation style, a white cat wearing sunglasses sits on a surfboard. The fluffy-furred feline gazes directly at the camera with a relaxed expression. Blurred beach scenery forms the background featuring crystal-clear waters, distant green hills, and a blue sky dotted with white clouds. The cat assumes a naturally relaxed posture, as if savoring the sea breeze and warm sunlight. A close-up shot highlights the feline's intricate details and the refreshing atmosphere of the seaside." \
    --image-path="https://github.com/Wan-Video/Wan2.2/blob/990af50de458c19590c245151197326e208d7191/examples/i2v_input.JPG?raw=true" \
    --num-gpus 2 --enable-cfg-parallel --save-output
```
 您的浏览器不支持 video 标签。 
备用链接：[下载视频](https://github.com/lm-sys/lm-sys.github.io/releases/download/test/TI2V.mp4)

#### 文本到图像：FLUX

```
sglang generate --model-path black-forest-labs/FLUX.1-dev \
    --prompt "A Logo With Bold Large Text: SGL Diffusion" \
    --save-output
```

![Image 1: Text to Image: FLUX](https://github.com/lm-sys/lm-sys.github.io/releases/download/test/T2I_FLUX.jpg)

#### 文本到图像：Qwen-Image

```
sglang generate --model-path=Qwen/Qwen-Image \
    --prompt='A curious raccoon' \
    --width=720 --height=720 --save-output
```

![Image 2: Text to Image: FLUX](https://github.com/lm-sys/lm-sys.github.io/releases/download/test/T2I_Qwen_Image.jpg)

#### 图像到图像：Qwen-Image-Edit

```
sglang generate --model-path=Qwen/Qwen-Image-Edit \
    --prompt="Convert 2D style to 3D style" --image-path="https://github.com/lm-sys/lm-sys.github.io/releases/download/test/TI2I_Qwen_Image_Edit_Input.jpg" \
    --width=1536 --height=1024 --save-output
```

![Image 3: Input](https://github.com/lm-sys/lm-sys.github.io/releases/download/test/TI2I_Qwen_Image_Edit_Input.jpg)

输入

![Image 4: Output](https://github.com/lm-sys/lm-sys.github.io/releases/download/test/TI2I_Qwen_Image_Edit_Output.jpg)

输出

## 性能基准测试

如本文顶部的图表所示，我们比较了 SGLang Diffusion 的性能：

*   与流行的开源基准 Hugging Face Diffusers 相比。SGLang Diffusion 提供了最先进的性能，显著加速了图像和视频的生成。
*   在不同的并行设置下。与单 GPU 设置相比，CFG 并行和 USP 都实现了显著的加速。

## 路线图与 Diffusion 生态系统

我们的愿景是与 **FastVideo** 团队合作构建一个全面的扩散生态系统，提供从模型训练到高性能推理的端到端解决方案。

SGLang Diffusion 团队致力于在性能和模型支持方面进行持续创新：

*   模型支持与优化 
    *   优化 Wan、FastWan、Hunyuan、Qwen-Image 系列、FLUX
    *   支持 LongCat-Video

*   Kernel（内核）支持与融合 
    *   量化内核
    *   旋转位置编码（Rotary embedding）内核
    *   在 sgl-kernel 中为 Blackwell 架构集成 Flash Attention 4

*   更多服务器功能 
    *   可配置的生成文件云存储上传
    *   批处理（Batching）支持
    *   更多并行方法
    *   量化

*   通用架构： 
    *   简化支持新模型的工作量
    *   增强缓存和注意力（attention）后端支持

构建这个生态系统是社区共同的努力，我们欢迎并鼓励所有形式的贡献。加入我们，共同塑造开源扩散生成的未来。

![Image 5](https://lmsys.org/images/blog/sgl-diffusion/diffusion_ecosystem.png)

## 致谢

SGLang Diffusion 团队：[Yuhao Yang](https://github.com/yhyang201), [Xinyuan Tong](https://github.com/JustinTong0323), [Yi Zhang](https://github.com/yizhang2077), [Ke Bao](https://github.com/ispobock), [Ji Li](https://github.com/GeLee-Q/GeLee-Q), [Xi Chen](https://github.com/RubiaCx), [Laixin Xie](https://github.com/laixinn), [Yikai Zhu](https://github.com/zyksir), [Mick](https://mickqian.github.io/)

FastVideo 团队：[Peiyuan Zhang](https://github.com/jzhang38), [William Lin](https://github.com/SolitaryThinker), [Yongqi Chen](https://github.com/BrianChen1129), [Kevin Lin](https://github.com/kevin314), [Wenxuan Tan](https://github.com/Edenzzzz), [Wei Zhou](https://github.com/JerryZhou54), [Runlong Su](https://github.com/rlsu9), [Jinzhe Pan](https://github.com/Eigensystem), [Hangliang Ding](https://github.com/foreverpiano), [Matthew Noto](https://github.com/RandNMR73), [You Zhou](https://github.com/PorridgeSwim), [Jiali Chen](https://github.com/Gary-ChenJL), [Hao Zhang](https://cseweb.ucsd.edu/~haozhang/)

特别感谢 NVIDIA 和 Voltage Park 提供的算力支持。

## 了解更多

*   路线图：[Diffusion (2025 Q4)](https://github.com/sgl-project/sglang/issues/12799)
*   Slack 频道：[#diffusion](https://sgl-fru7574.slack.com/archives/C09P0HTKE6A)（通过 slack.sglang.io 加入）

## 关联主题

- [[00-元语/AI]]
- [[00-元语/multimodal]]
- [[00-元语/video]]
- [[00-元语/image-editing]]
- [[00-元语/benchmark]]
- [[00-元语/cli]]
- [[00-元语/roadmap]]
- [[00-元语/github]]
