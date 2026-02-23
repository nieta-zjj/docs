---
title: "介绍 Daggr：通过代码串联应用，可视化检查工作流"
---

## 摘要

### 1) 一句话总结
Daggr 是一个开源 Python 库，通过代码将 Gradio 应用、AI 模型和自定义函数串联成工作流，并自动生成可视化画布以便于局部调试和状态管理。

### 2) 关键要点
*   **代码优先与可视化结合**：在 Python 中编写工作流代码，系统会自动（默认在 7860 端口）生成可视化画布，兼顾代码版本控制与可视化检查。
*   **局部调试与重运行**：支持在画布中检查任意节点的中间输出、修改输入，并单独重新运行单个步骤，无需执行整个流水线。
*   **Gradio 原生集成**：无需适配器，直接通过 Space 名称和 API 端点即可将任何公开或私有的 Gradio Space 作为工作流节点。
*   **支持三种节点类型**：
    *   `GradioNode`：调用远程或本地的 Gradio 应用。
    *   `FnNode`：执行自定义的 Python 函数。
    *   `InferenceNode`：通过 Hugging Face 推理提供商调用 AI 模型。
*   **本地执行与回退机制**：`GradioNode` 支持 `run_locally=True` 参数，可自动克隆 Space 至本地隔离环境运行；若本地执行失败，会自动回退到远程 API。
*   **状态持久化**：自动保存工作流状态、输入值、缓存结果和画布位置，并支持通过“工作表（sheets）”在同个应用中管理多个工作区。
*   **便捷分享与部署**：可通过 `share=True` 生成公开访问链接，或通过在 `requirements.txt` 中添加 `daggr` 直接部署到 Hugging Face Spaces。
*   **环境要求**：仅需 Python 3.10 或更高版本，可通过 `pip` 或 `uv` 安装。

### 3) 风险与缺口
*   **版本不稳定性**：Daggr 目前处于 Beta 测试阶段，API 可能会在不同版本之间发生变化。
*   **潜在数据丢失**：虽然支持本地持久化工作流状态，但在系统更新期间可能会发生数据丢失。
*   **本地硬件兼容性**：在本地运行 Space 时，部分应用可能会强制将模型加载到 CUDA 或 ZeroGPU；若无 NVIDIA GPU，用户需手动克隆并修改代码以支持 CPU 运行。
*   **部署权限要求**：将包含 `InferenceNode` 的应用部署到 Hugging Face Spaces 时，必须配置细粒度的访问令牌（Token），并明确勾选“Make calls to Inference Providers”权限。

## 正文

**太长不看（TL;DR）：** Daggr 是一个全新的开源 Python 库，用于构建连接 Gradio 应用、机器学习模型和自定义函数的 AI 工作流。它会自动生成一个可视化画布，让你可以在其中检查中间输出、重新运行单个步骤，并管理复杂流水线的状态——所有这些只需几行 Python 代码即可实现！

### 背景

如果你曾构建过结合多个模型或处理步骤的 AI 应用程序，你一定体会过这种痛苦：串联 API 调用、调试流水线，以及丢失中间结果的追踪。当一个 10 步工作流中的第 5 步出错时，你通常不得不重新运行所有内容，仅仅是为了查看发生了什么。

大多数开发者要么编写难以调试的脆弱脚本，要么转向专为生产流水线设计的繁重编排平台——这些都不适合快速实验。

我们开发 Daggr 就是为了解决在构建 AI 演示和工作流时不断遇到的问题：

*   **可视化代码流程**：与拖拽连接节点的基于节点的 GUI 编辑器不同，Daggr 采用代码优先的方法。你在 Python 中定义工作流，系统会自动生成可视化画布。这意味着你可以两全其美：既有可版本控制的代码，又能可视化检查中间输出。
*   **检查并重新运行任意步骤**：可视化画布不仅是为了好看。你可以检查任何节点的输出、修改输入，并重新运行单个步骤，而无需执行整个流水线。当你调试一个 10 步工作流且只有第 7 步出错时，这非常有用。你甚至可以提供“备用节点”——用另一个模型或 Space 替换当前的一个——以构建具有弹性的工作流。
*   **一流的 Gradio 集成**：由于 Daggr 由 Gradio 团队构建，它与 Gradio Spaces 无缝协作。指向任何公开（或私有）的 Space，你就可以将其用作工作流中的节点。无需适配器，无需包装器——只需引用 Space 名称和 API 端点即可。
*   **状态持久化**：Daggr 会自动保存你的工作流状态、输入值、缓存结果和画布位置——这样你就可以从上次停下的地方继续。使用“工作表（sheets）”可以在同一个应用中维护多个工作区。

### 快速开始

使用 pip 或 uv 安装 daggr，它仅需要 Python 3.10 或更高版本：

```bash
pip install daggr
uv pip install daggr
```

下面是一个生成图像并移除背景的简单示例。你可以查看该 Space 底部的 API 参考，了解它接受哪些输入以及产生哪些输出。在这个例子中，该 Space 会返回原始图像和编辑后的图像，因此我们只返回编辑后的图像。

```python
import random
import gradio as gr
from daggr import GradioNode, Graph

# 使用 Gradio Space 生成图像
image_gen = GradioNode(
    "hf-applications/Z-Image-Turbo",
    api_name="/generate_image",
    inputs={
        "prompt": gr.Textbox(
            label="Prompt",
            value="A cheetah sprints across the grassy savanna.",
            lines=3,
        ),
        "height": 1024,
        "width": 1024,
        "seed": random.random,
    },
    outputs={
        "image": gr.Image(label="Generated Image"),
    },
)

# 使用另一个 Gradio Space 移除背景
bg_remover = GradioNode(
    "hf-applications/background-removal",
    api_name="/image",
    inputs={
        "image": image_gen.image,  # 连接到上一个节点的输出
    },
    outputs={
        "original_image": None,  # 隐藏此输出
        "final_image": gr.Image(label="Final Image"),
    },
)

graph = Graph(
    name="Transparent Background Generator",
    nodes=[image_gen, bg_remover]
)
graph.launch()
```

就是这样。运行此脚本，你将自动在 7860 端口启动一个可视化画布，并获得一个可共享的实时链接。画布会显示连接的两个节点，你可以在每个步骤中修改输入并检查输出。

### 节点类型

Daggr 支持三种类型的节点：

**GradioNode**：调用 Gradio Space API 端点或本地提供的 Gradio 应用。通过传递 `run_locally=True`，Daggr 会自动克隆该 Space，创建一个隔离的虚拟环境，并启动该应用。如果本地执行失败，它会优雅地回退到远程 API。

```python
node = GradioNode(
    "username/space-name",
    api_name="/predict",
    inputs={"text": gr.Textbox(label="Input")},
    outputs={"result": gr.Textbox(label="Output")},
)

# 在本地克隆一个 Space 并提供服务
node = GradioNode(
    "hf-applications/background-removal",
    api_name="/image",
    run_locally=True,
    inputs={"image": gr.Image(label="Input")},
    outputs={"final_image": gr.Image(label="Output")},
)
```

**FnNode**：运行自定义的 Python 函数：

```python
def process(text: str) -> str:
    return text.upper()

node = FnNode(
    fn=process,
    inputs={"text": gr.Textbox(label="Input")},
    outputs={"result": gr.Textbox(label="Output")},
)
```

**InferenceNode**：通过 Hugging Face 推理提供商（Inference Providers）调用模型：

```python
node = InferenceNode(
    model="moonshotai/Kimi-K2.5:novita",
    inputs={"prompt": gr.Textbox(label="Prompt")},
    outputs={"response": gr.Textbox(label="Response")},
)
```

### 分享你的工作流

使用 Gradio 的隧道功能生成公开 URL：

```python
graph.launch(share=True)
```

如需永久托管，请使用 Gradio SDK 部署在 Hugging Face Spaces 上——只需将 `daggr` 添加到你的 `requirements.txt` 中即可。

### 包含不同节点的端到端示例

现在我们将开发一个应用，它接收一张图像并生成一个 3D 资产。此演示可以在 daggr 0.4.3 上运行。步骤如下：

1.  **接收图像并移除背景**：为此，我们将克隆 BiRefNet Space 并将其在本地运行。
2.  **缩小图像以提高效率**：我们将使用 FnNode 为此编写一个简单的函数。
3.  **生成 3D 资产风格的图像以获得更好的结果**：我们将使用 InferenceNode，并在推理提供商上调用 Flux.2-klein-4B 模型。
4.  **将输出图像传递给 3D 生成器**：我们将把输出图像发送到托管在 Spaces 上的 Trellis.2 Space。

> 在本地运行的 Spaces 可能会在应用程序文件中将模型加载到 CUDA（使用 `to("cuda")`）或 ZeroGPU。要禁用此行为以在 CPU 上运行模型（如果你没有 NVIDIA GPU 设备，这很有用），请复制你想要使用的 Space 并克隆它。

让我们编写第一步，即背景移除器。我们将克隆并在本地运行这个 Space。该 Space 在 CPU 上运行，大约需要 13 秒。如果你有 NVIDIA GPU，可以将其替换为另一个应用。

```python
from daggr import FnNode, GradioNode, InferenceNode, Graph
import gradio as gr

background_remover = GradioNode(
   "merve/background-removal",
   api_name="/image",
   run_locally=True,
   inputs={
       "image": gr.Image(),
   },
   outputs={
       "original_image": None,
       "final_image": gr.Image(
           label="Final Image"
       ),
   },
)
```

对于第二步，我们需要编写一个辅助函数来缩小图像，并将其传递给 `FnNode`。

```python
from PIL import Image
from daggr.state import get_daggr_files_dir
import uuid
from typing import Any

def downscale_image_to_file(image: Any, scale: float = 0.25) -> str | None:
   pil_img = Image.open(image)
   scale_f = max(0.05, min(1.0, float(scale)))
   w, h = pil_img.size
   new_w = max(1, int(w * scale_f))
   new_h = max(1, int(h * scale_f))
   resized = pil_img.resize((new_w, new_h), resample=Image.LANCZOS)
   out_path = get_daggr_files_dir() / f"{uuid.uuid4()}.png"

   resized.save(out_path)
   return str(out_path)
```

现在我们可以传入该函数来初始化 `FnNode`。

```python
downscaler = FnNode(
   downscale_image_to_file,
   name="Downscale image for Inference",
   inputs={
       "image": background_remover.final_image,
       "scale": gr.Slider(
           label="Downscale factor",
           minimum=0.25,
           maximum=0.75,
           step=0.05,
           value=0.25,
       ),
   },
   outputs={
       "image": gr.Image(label="Downscaled Image", type="filepath"),
   },
)
```

现在我们将使用 Flux 模型编写 `InferenceNode`。

```python
flux_enhancer = InferenceNode(
   model="black-forest-labs/FLUX.2-klein-4B:fal-ai",
   inputs={
       "image": downscaler.image,
       "prompt": gr.Textbox(
           label="prompt",
           value=("Transform this into a clean 3D asset render"),
           lines=3,
       ),
   },
   outputs={
       "image": gr.Image(label="3D-Ready Enhanced Image"),
   },
)
```

> 当将带有 InferenceNode 的应用部署到 Hugging Face Spaces 时，请使用细粒度的 Hugging Face 访问令牌，并仅勾选“Make calls to Inference Providers”选项。

最后一个节点是 3D 生成，通过查询 Hugging Face 上的 Trellis.2 Space 来实现。

```python
trellis_3d = GradioNode(
   "microsoft/TRELLIS.2",
   api_name="/image_to_3d",
   inputs={
       "image": flux_enhancer.image,
       "ss_guidance_strength": 7.5,
       "ss_sampling_steps": 12,
   },
   outputs={
       "glb": gr.HTML(label="3D Asset (GLB preview)"),
   },
)
```

将它们串联起来并启动应用非常简单，如下所示。

```python
graph = Graph(
   name="Image to 3D Asset Pipeline",
   nodes=[background_remover, downscaler, flux_enhancer, trellis_3d],
)

if __name__ == "__main__":
   graph.launch()
```

你可以在相关的 Space 中找到正在运行的完整示例。要在本地运行，你只需获取 `app.py`，安装依赖项并登录 Hugging Face Hub。

### 下一步

Daggr 目前处于测试阶段，且被有意设计为轻量级。API 可能会在不同版本之间发生变化，虽然我们在本地持久化工作流状态，但在更新期间可能会发生数据丢失。如果你有功能请求或发现错误，请在 GitHub 上提交 Issue。我们非常期待你的反馈！在社交媒体上与 Gradio 分享你的 Daggr 工作流，将有机会获得推荐展示。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/workflow]]
- [[00-元语/multimodal]]
- [[00-元语/tool]]
