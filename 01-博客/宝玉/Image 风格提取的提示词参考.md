---
title: "Image 风格提取的提示词参考"

来源: "https://baoyu.io/blog/image-style-prompt-reference"
发布日期: "2025-05-19"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
本文提供了一个用于反向提取图片风格的提示词模板，通过要求AI输出包含多维度参数的结构化JSON数据来全面解析图像。

**2) 关键要点**
*   **文档背景**：文章由宝玉发布于2025年5月19日，旨在提供反向推导图片提示词的方法。
*   **核心机制**：利用提示词设定AI为专业视觉风格分析师，要求其严格输出有效的JSON格式数据，并允许在必要时添加额外字段或注释以阐明艺术选择。
*   **基础画面解析**：JSON结构要求提取整体场景（scene）、主体详情（subjects，含类型、描述、位置）、艺术风格（style）以及3-7个主要配色（color_palette）。
*   **摄影与光影解析**：包含光照效果（lighting）、构图方式（composition）以及详细的相机参数（camera，细分为角度、距离和镜头特性）。
*   **深层与细节解析**：涵盖情绪氛围（mood）、画面中的文字排版（typography）、象征意义与隐喻（symbolism）以及包含材质与特效的渲染细节（rendering_details）。

**3) 风险/不足**
*   通过提取的参数来精准还原原图存在一定难度，提供的提示词仅能作为参考使用。

## 正文

如果你需要反向图片的提示词，可以考虑把图片提取成 JSON 格式的，把各种常见参数都照顾到，但要想精准还原还是有些难度，所以下面的提示词也只是作为一个参考。

Image 风格提取的提示词参考：

You are a professional visual-style analyst. Analyze the attached image carefully and return **ONLY valid JSON** strictly following the provided schema. Feel free to include additional keys or detailed comments if needed to clarify artistic choices.

**JSON Schema**:

```
{
  "scene":         "string",   // 描述整体场景内容和核心主题（如角色与背景关系）
  "subjects": [
    {
      "type":        "string", // 主体类型（人物、物体或概念）
      "description": "string", // 详细外观描述与艺术特点
      "position":    "string"  // 在画面中的位置与布局关系
    }
  ],
  "style":          "string",    // 艺术风格或渲染方式（如皮克斯风格3D角色插画）
  "color_palette":  ["string"],  // 主要色系 (3-7个色彩，注意和谐与视觉表达)
  "lighting":       "string",    // 光照类型、方向、阴影效果
  "mood":           "string",    // 场景整体传达的情绪氛围
  "composition":    "string",    // 构图方式和视角特点
  "camera": {
    "angle":    "string",       // 摄影机角度（如正面、低角度、微仰视）
    "distance": "string",       // 与主体的距离（如中距离特写、近景）
    "lens":     "string"        // 镜头特性（广角、中距、望远镜头）
  },
  "typography": {
    "text":          "string",  // 画面中的文字内容
    "font_style":    "string",  // 字体风格（如极简黑色无衬线字体）
    "position":      "string"   // 字体在画面中的位置与布局
  },
  "symbolism": {
    "concept":       "string",  // 画面中的象征意义、隐喻或艺术概念
    "representation":"string"   // 如何通过视觉表达实现这一象征意义
  },
  "rendering_details": {
    "textures":     "string",   // 材质和纹理的细节描述
    "effects":      "string"    // 特殊视觉效果（如颗粒感、光斑、梦幻效果）
  }
}
```

## 相关文档

- [[01-博客/宝玉/如何控制 LLM 的输出格式和解析其输出结果？|如何控制 LLM 的输出格式和解析其输出结果？]]；关联理由：上下游；说明：本文给出图像风格提取的 JSON 提示词模板，而该文详细解释了如何稳定约束并解析 JSON 输出，是落地该模板的下游实现参考。
- [[01-博客/宝玉/如何轻松写出好用的提示词模板？|如何轻松写出好用的提示词模板？]]；关联理由：延伸思考；说明：两文都围绕“提示词模板化”，该文补充了如何从样例中抽取变量并迭代优化模板的方法。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/prompt]]
- [[00-元语/image-editing]]
- [[00-元语/multimodal]]
