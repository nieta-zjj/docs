---
title: "Claude Multimodal Cookbook 实战手册"

发布日期: "2026-02-17"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/tree/main/multimodal"
覆盖范围:
  - "`multimodal/getting_started_with_vision.ipynb`"
  - "`multimodal/best_practices_for_vision.ipynb`"
  - "`multimodal/crop_tool.ipynb`"
  - "`multimodal/how_to_transcribe_text.ipynb`"
  - "`multimodal/reading_charts_graphs_powerpoints.ipynb`"
  - "`multimodal/using_sub_agents.ipynb`"
---

## 摘要

**1) 一句话总结**
本文档总结了 Claude 多模态实战手册的核心内容，提供了一条涵盖图像输入、视觉提示、局部裁剪、文档转录、图表理解及子代理协同的完整多模态工作流落地路径。

**2) 关键要点**
*   **核心模块覆盖**：包含视觉入门、最佳实践、裁剪工具、文本转录、图表/PPT阅读及子代理协同六个核心 Notebook。
*   **视觉输入规范化**：统一了 URL、Base64 和文件路径的图像输入方式（如使用 `pil_to_base64` 将图像转为 RGB 模式并输出 Base64 编码）。
*   **视觉提示工程**：通过任务拆解和 Few-shot（少样本）提示技术，有效提高模型识别结果的一致性。
*   **局部裁剪工具**：定义了 `crop_image` 工具，通过 0 到 1 之间的相对坐标（x1, y1, x2, y2）划定边界框，实现“先定位目标区域，再进行高精度分析”。
*   **图文混合理解**：支持将图表、PPT、表单等复杂视觉材料纳入同一处理链路进行解析。
*   **子代理协同架构**：采用主模型负责全局规划、轻量级模型负责执行子任务的协同模式。
*   **典型落地场景**：包括报表和看板的趋势与异常解读、票据与表单的结构化字段转录，以及结合子代理的多文档并行阅读与汇总。

## 正文

这组 notebook 给出了一条完整多模态落地路径：图像输入、视觉提示、局部裁剪、文档转录、图表理解，再到子代理协同。它的价值不在“能看图”，而在“如何稳定提取可用信息并接入工作流”。

### 能力主线
- 视觉输入规范化：统一 URL / Base64 / 文件输入路径。
- 视觉提示工程：通过任务拆解和 few-shot 提高识别一致性。
- 局部裁剪工具：先定位目标区域，再做高精度分析。
- 图文混合理解：将图表、PPT、表单纳入同一处理链路。
- 子代理协同：主模型负责规划，轻量模型执行子任务。

### 示例代码
```python
def pil_to_base64(image: PILImage.Image) -> str:
    if image.mode in ("RGBA", "P"):
        image = image.convert("RGB")
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    return base64.standard_b64encode(buffer.getvalue()).decode("utf-8")

CROP_TOOL = {
    "name": "crop_image",
    "description": "Crop an image by specifying a bounding box.",
    "input_schema": {
        "type": "object",
        "properties": {
            "x1": {"type": "number", "minimum": 0, "maximum": 1},
            "y1": {"type": "number", "minimum": 0, "maximum": 1},
            "x2": {"type": "number", "minimum": 0, "maximum": 1},
            "y2": {"type": "number", "minimum": 0, "maximum": 1},
        },
    },
}
```

### 典型场景
- 报表和看板解读：自动读取图表趋势和关键异常。
- 票据与表单转录：把半结构化文档转为字段化数据。
- 多文档研究助手：结合子代理并行阅读并汇总结论。

## 相关文档

- [[01-博客/Anthropic/Claude 第三方集成 Cookbook 语音与多模态应用|Claude 第三方集成 Cookbook 语音与多模态应用]]；关联理由：解说；说明：两文都处理多模态输入理解链路，本文聚焦原生视觉与裁剪，关联文补充语音与外部检索集成。
- [[01-博客/Anthropic/Claude Tool Use Cookbook 实战清单下篇|Claude Tool Use Cookbook 实战清单下篇]]；关联理由：上下游；说明：本文解决视觉信息提取，上游结果可直接进入 `vision_with_tools` 一类工具执行链路完成生产化动作。
- [[01-博客/Anthropic/Claude Cookbooks 项目总览与能力地图|Claude Cookbooks 项目总览与能力地图]]；关联理由：上下游；说明：该文给出 cookbooks 全局能力地图并明确 multimodal 分组位置，是本文所属模块的总览入口。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/multimodal]]
- [[00-元语/image-editing]]
- [[00-元语/ocr]]
- [[00-元语/prompt]]
- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/workflow]]
