---
title: "LTX Studio 的 LTX-2 Playground 图生视频 i2v 页面记录"

来源: "https://app.ltx.studio/ltx-2-playground/i2v"
辅助来源: "https://cdn.app.ltx.studio/assets/index-C9XsOAvr.js"
品牌: "LTX"
译注: "原页面为 JS 驱动的应用入口，本文基于可验证的页面元信息与前端常量整理。"
---

## 摘要

**一句话总结**
LTX Studio 是一个 AI 驱动的视频制作平台，其前端打包文件揭示了包含图生视频（i2v）、文生视频（t2v）等多种生成路由，以及详细的视频时长、帧率和摄像机运动控制参数。

**关键要点**
*   **页面基础信息**：页面标题为 "AI video production | LTX"，语言设为英文（en），且包含 "noindex, nofollow" 的 Meta 标签以阻止搜索引擎收录。
*   **技术架构**：该平台涵盖从构思到制作的电影制作流程，其页面骨架由 JavaScript 驱动，应用程序打包文件从 `cdn.app.ltx.studio` 加载。
*   **核心路由（Playground）**：前端代码包含 `/t2v`、`/i2v`、`/video-control`、`/retake`、`/a2v` 和 `/extend` 等功能路径。
*   **i2v 参数**：配置项至少包含 `motionScale`、`videoSeed`、`duration`、`outputFPS`、`intensity` 以及 `denoisePercent`（默认值为 1）。
*   **视频时长选项**：支持 2秒、3秒、4秒、5秒、6秒、7秒、9秒和 12秒。
*   **视频帧率选项**：支持 8 fps、16 fps 和 24 fps。
*   **摄像机运动控制**：类型分组包括 `scene`、`natural`、`extreme`、`custom`、`interpolate`、`livePortrait`，并支持自定义、插值和自动参数。

**风险/缺口**
*   直接抓取无法获取该 URL 完整的静态正文。
*   使用 r.jina.ai 抓取时，主要返回 Cookie/隐私面板，无法获取完整的应用内交互内容。

## 正文

该链接对应 LTX Studio 的 LTX-2 Playground `i2v` 路由入口。页面本身是前端应用入口壳，首屏可验证信息主要来自 HTML 头部元数据与加载的 JS 打包文件。

从页面元信息可确认：
- 页面标题为 `AI video production | LTX`。
- 页面 `lang` 为 `en`。
- 页面包含 `noindex, nofollow` 标记。
- 站点描述将 LTX 定位为覆盖“从构思到制作”的 AI 影视制作平台。

从前端打包文件可确认，LTX-2 Playground 至少包含这些路由：
- `/ltx-2-playground/t2v`
- `/ltx-2-playground/i2v`
- `/ltx-2-playground/video-control`
- `/ltx-2-playground/retake`
- `/ltx-2-playground/a2v`
- `/ltx-2-playground/extend`

与 `i2v` 相关的配置常量显示，该模式与 `t2v` 共用一组生成参数体系，并可确认以下字段：
- 基础参数：`motionScale`、`videoSeed`、`duration`、`outputFPS`、`intensity`。
- 运镜参数：`cameraMotionType`、`cameraMotionCustomParameters`。
- 可选参数：`cameraMotionInterpolateParameters`、`cameraMotionAutomaticParameters`。
- 降噪参数：`denoisePercent`（默认值为 1）。

可验证的枚举项包括：
- 时长：2秒、3秒、4秒、5秒、6秒、7秒、9秒、12秒。
- 帧率：8 fps、16 fps、24 fps。
- 运镜类型分组：`scene`、`natural`、`extreme`、`custom`、`interpolate`、`livePortrait`。

当前通过静态抓取工具无法得到该页面完整的应用内交互内容，因此本记录聚焦于可验证的公开元信息与前端常量。

## 相关文档

- [[02-资源/AI-模型与推理基础设施/LTX-2 的 Direct audio-to-motion mapping 提示词指南|LTX-2 的 Direct audio-to-motion mapping 提示词指南]]；关联理由：解说；说明：同属 LTX-2 体系，该文补充了提示词编写与能力边界，可用于解释 i2v 参数配置的使用语境。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/video]]
- [[00-元语/multimodal]]
- [[00-元语/web-crawling]]
- [[00-元语/tool]]
