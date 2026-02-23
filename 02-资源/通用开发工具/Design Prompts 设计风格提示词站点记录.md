---
title: "Design Prompts 设计风格提示词站点记录"

来源: "https://www.designprompts.dev/"
品牌: "Design Prompts"
译注: "未找到可用官方中文页面，正文为中文翻译整理稿。"
---

## 摘要

**1. 一句话总结**
Design Prompts 是一个由 AI 驱动的设计风格探索器，提供 30 多种设计风格的实时预览、可复用提示词和可直接复制的代码。

**2. 核心要点**
- 应用定位：站点元信息将其定义为设计风格探索型 Web 应用。
- 核心能力：提供风格化提示词、实时预览和复制即用的实现内容。
- 官方声明：站点多处文案宣称提供 `31+` 种设计风格。
- 交互方式：主页可按 `Mode`、`Type` 浏览风格，并支持键盘导航与打开操作。
- 路由可见性：当前前端包中可提取并验证 30 个风格路径标识。

**3. 差异与注意点**
- 数量差异：页面文案写 `31+`，但当前可验证路由为 30 个。
- 本地化情况：未发现可用官方中文版本。

## 正文

Design Prompts 首页将产品定位为“AI 驱动的设计风格探索器”，强调用户可以基于同一数据查看不同设计风格效果，并将对应提示词用于 AI 生成流程。

从页面可读内容与元信息看，这个站点的核心价值是把“风格灵感”和“可直接复用的提示词”绑定在一起，目标是让设计探索和落地更快。页面展示了风格卡片浏览流程，支持按 `Mode`、`Type` 切换，并给出键盘操作提示（上下选择、回车打开）。

以 `Monochrome` 为例，页面提供该风格的说明和打开入口（https://www.designprompts.dev/monochrome），体现了“风格说明 + 可进入详情页”的信息组织方式。

站点元信息多次给出“31+ 种风格”的描述。与此同时，从当前前端打包文件可提取并验证 30 个风格路径标识：
`academia, art-deco, bauhaus, bold-typography, botanical, claymorphism, cyberpunk, enterprise, flat-design, industrial, kinetic, luxury, material-design, maximalism, minimal-dark, modern-dark, monochrome, neo-brutalism, neumorphism, newsprint, organic, playful-geometric, professional, retro, saas, sketch, swiss-minimalist, terminal, vaporwave, web3`。

结合以上信息，更稳妥的结论是：当前版本至少可验证 30 种风格，站点文案宣称总量为 31+。对于归档与选型使用，建议以“可验证路径集”为准，同时保留官方文案中的总体数量表述。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/prompt]]
- [[00-元语/design]]
- [[00-元语/tool]]
