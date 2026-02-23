---
title: "使用 Gradio 的 gr.HTML 一键构建任意 Web 应用"

来源: "https://huggingface.co/blog/gradio-html-one-shot-apps"
---

## 摘要

**1) 一句话总结**
Gradio 6 推出的 `gr.HTML` 功能允许开发者在单个 Python 文件中通过自定义 HTML、作用域 CSS 和 JavaScript 构建任意交互式 Web 组件，极大地简化了 AI 辅助编程（Vibe Coding）和应用的快速部署。

**2) 关键要点**
*   **核心机制**：`gr.HTML` 接收三个核心模板参数（`html_template`、`css_template`、`js_on_load`），将前端、后端和状态管理集中在一个 Python 文件中，无需额外的构建步骤。
*   **状态同步 API**：使用 `${value}` 将 Python 状态注入前端，在 JavaScript 中通过 `props.value` 更新状态，并调用 `trigger('change')` 将状态同步回 Python。
*   **支持组件复用**：开发者可以通过创建 `gr.HTML` 的子类来封装自定义组件，其调用方式与 Gradio 内置的 32 个标准组件（如 `gr.Image()`）完全一致。
*   **AI 编程友好**：单文件输出模式非常适合 Claude 等大语言模型生成代码，配合 Gradio 的重载模式，可实现秒级的“描述需求 → 生成代码 → 运行 → 修复”反馈循环。
*   **常规应用案例**：已成功测试构建了带 CSS 动画的番茄钟计时器、支持原生 HTML5 拖拽与内联编辑的看板、交互式 GitHub 贡献热力图以及幸运转盘。
*   **机器学习专属案例**：可构建专业的 ML 组件，如目标检测/分割掩码查看器、集成 Three.js 的 3D 相机控制视图（用于图像编辑模型），以及带实时字数统计（WPM）的语音转录界面。
*   **极速部署**：开发完成的单文件应用可通过 `gradio deploy` 在几秒钟内一键部署到 Hugging Face Spaces，或使用 `share=True` 生成临时链接。

## 正文

Gradio 6 悄然发布了一项非常强大的功能：`gr.HTML` 现在支持自定义模板、作用域 CSS 和 JavaScript 交互。这意味着你可以构建几乎任何 Web 组件，并且可以通过 Claude（或其他前沿大语言模型）一次性生成所有内容：前端、后端和状态管理全部集中在一个 Python 文件中。

我们通过构建不同类型的应用对此进行了测试。每个应用都只有一个 Python 文件，无需构建步骤，几秒钟内即可部署到 Hugging Face Spaces。

### 生产力应用

*   **番茄钟计时器 (Pomodoro Timer)**：一款专注计时器，像素风的树会随着你的工作而生长。从一颗种子开始，发芽长出树枝，再长出树叶。完成一个专注时段后，这棵树就会加入你的森林。会话追踪、主题切换、休息模式——所有这些交互都包含在一个文件中。通常，单单是树的动画就需要一个单独的 React 组件。而在这里，它只是 `css_template` 中的 CSS 关键帧和 `js_on_load` 中的状态更新。

### 商业应用

*   **GitHub 贡献热力图 (GitHub Contribution Heatmap)**：点击任意单元格即可切换贡献状态。支持多种颜色主题和模式生成器（连续打卡、季节性、随机）。实时统计数据会随着你的编辑而更新。
*   **看板 (Kanban Board)**：支持列与列之间的完整拖拽功能。支持内联编辑（双击任意卡片）以及实时过滤的搜索功能，列也可以折叠。实现拖拽功能通常意味着需要引入外部库。但在这里，只需在 `js_on_load` 中连接原生的 HTML5 拖拽事件，并通过 `trigger('change')` 将状态同步回 Python 即可。

### 创意应用

*   **幸运转盘 (Spin-to-Win Wheel)**：具备流畅的 CSS 动画，旋转状态在重新渲染时依然保持。内置了用于“是/否”决策、餐厅选择、团队分组的预设配置。你还可以随时动态添加自定义的旋转区块。

### 机器学习应用

对于机器学习工作而言，这正是 `gr.HTML` 真正有趣的地方：你可以构建专门处理特定输出格式的自定义组件，然后像使用任何内置 Gradio 组件一样使用它们。

*   **检测结果查看器 (Detection Viewer)**：一个用于目标检测、实例分割和姿态估计结果的自定义查看器。它可以渲染边界框、分割掩码、关键点和骨骼连接——所有这些都在一个可复用的 `gr.HTML` 子类中实现，并能直接接入你的模型流水线。

社区也使用 `gr.HTML` 构建了一些极具创意的组件：

*   **用于图像编辑的 3D 相机控制 (3D Camera Control for Image Editing)**：在 Gradio 应用中实现了一个完整的 Three.js 视图！拖动手柄即可控制方位角、仰角和距离。你上传的图像会出现在 3D 场景中，相机参数直接输入到 Qwen 最新的图像编辑模型中。这类交互式 3D 控制通常需要独立的前端，但在 Gradio 中，只需一个 `gr.HTML` 子类即可实现。
*   **实时语音转录 (Real-time Speech Transcription)**：使用 Mistral 的 Voxtral 模型进行实时转录。转录显示界面是一个自定义的 `gr.HTML` 组件，带有动画状态徽章、实时的 WPM（每分钟字数）计数器，以及随着你说话而实时更新的样式化输出。无需使用 React 即可获得实时的 UI 反馈！

### 工作原理

每个 `gr.HTML` 组件都接收三个模板：

```python
gr.HTML(
    value={"count": 0},
    html_template="<button>Clicked ${value.count} times</button>",
    css_template="button { background: #667eea; color: white; }",
    js_on_load="""
        element.querySelector('button').onclick = () => {
            props.value = { count: props.value.count + 1 };
            trigger('change');
        };
    """
)
```

`${value}` 用于注入 Python 状态。`props.value` 用于从 JavaScript 更新状态。`trigger('change')` 则将状态同步回 Python。这就是完整的 API。

对于可复用的组件，可以创建 `gr.HTML` 的子类：

```python
class Heatmap(gr.HTML):
    def __init__(self, value=None, theme="green", **kwargs):
        super().__init__(
            value=value,
            theme=theme,
            html_template=TEMPLATE,
            css_template=STYLES,
            js_on_load=SCRIPT,
            **kwargs
        )
```

现在，`Heatmap()` 就可以像 `gr.Image()` 或 `gr.Slider()` 一样工作了——你可以在 Blocks 中使用它，连接事件处理程序，满足你的任何需求。

### 为什么这对 AI 辅助编程（Vibe Coding）很重要

当你要求大语言模型（LLM）构建一个自定义组件时，单文件输出就是一切。不需要“现在创建样式文件”或“将此连接到你的构建配置中”。只需一个可以立即运行的 Python 文件。

反馈循环变成了：描述你想要什么 → 获取代码 → 运行 `gradio app.py` → 看到它运行 → 描述需要修复的地方 → 重复。借助 Gradio 的重载模式（reload mode），每个循环只需几秒钟。

使用 `gradio deploy` 可以将其部署到 Spaces，或者使用 `demo.launch(share=True)` 分享临时链接。从产生想法到应用上线，只需短短几秒。

### 结语

Gradio 内置了 32 个交互式组件，但有时你完美的 AI Web 应用需要一些特别的东西。这正是 `gr.HTML` 的用武之地。

如果你有任何想法，尝试用 `gr.HTML` 来构建它：向你的 LLM 描述你的需求，生成代码，然后运行它。你可能会对自己能在 5 分钟内交付的成果感到惊讶。

**推荐阅读：**
*   Gradio 指南：[使用 gr.HTML 的自定义组件 (Custom Components with gr.HTML)](https://www.gradio.app/guides/custom-HTML-components)
*   API 文档：[gr.HTML](https://www.gradio.app/docs/gradio/html)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/vibe-coding]]
