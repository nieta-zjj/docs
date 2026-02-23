---
title: "Prompt to build a \"Retro Camera Web App\" by Gemini 3"

来源: "https://baoyu.io/blog/retro-camera-web-app-prompt"
发布日期: "2025-11-20"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
本文档提供了一份详细的提示词，用于指导 Gemini 3 生成一个基于 React 的复古相机 Web 应用，该应用具备调用摄像头拍照、拍立得显影动画、自由拖拽照片墙以及基于 Gemini Flash API 的 AI 智能配文功能。

**2) 关键要点**
*   **技术栈要求**：构建单文件 React 应用，使用 Tailwind CSS（样式）、Framer Motion（拖拽与动画）、Lucide-react（图标）以及 html2canvas（DOM 截图下载）。
*   **视觉与布局**：采用复古主题和手写字体；主相机容器尺寸为 450x450px，固定在视口左下角（距底部和左侧各 64px），并使用指定的复古相机背景图。
*   **取景器与快门**：调用用户摄像头，将视频流裁剪为圆形并精准覆盖在相机镜头上方；在快门位置设置隐形点击区域，点击后播放音效并触发拍照。
*   **显影动画效果**：生成的拍立得照片严格遵循 3:4 竖版比例，采用从相机内部向上滑出的动画，并模拟真实拍立得从白色/模糊逐渐变得清晰的显影过程。
*   **拖拽照片墙**：照片显影后，用户可点击拍立得卡片的任意位置将其从相机槽拖出，并在屏幕（照片墙）上自由移动和放置。
*   **AI 视觉分析与配文**：集成 Gemini Flash API 分析拍摄内容，生成与用户浏览器语言一致的简短温馨祝福，连同日期显示在照片底部。
*   **文本交互与编辑**：鼠标悬停配文区域可显示“编辑”和“刷新（重新生成 AI 配文）”图标；支持通过点击图标或双击文本进入编辑模式（Enter 保存，Esc 取消）。
*   **照片卡片控制**：悬停在照片墙上的卡片时显示顶部工具栏，提供“删除”功能以及“下载”功能（将包含边框、照片、日期和手写文字的完整拍立得卡片渲染为图片下载）。

## 正文

![Image 1](https://baoyu.io/uploads/2025-11-20/1763608541944.png)

Share:

*   v1: [https://ai.studio/apps/drive/1q42BaBYgV2szCt0tgaDnut4y2DNqYyLG](https://ai.studio/apps/drive/1q42BaBYgV2szCt0tgaDnut4y2DNqYyLG)

*   v2: [https://ai.studio/apps/drive/1eg4iNENmZcsfFzuTAyiSwx-DAvJVLMx5](https://ai.studio/apps/drive/1eg4iNENmZcsfFzuTAyiSwx-DAvJVLMx5)

Prompt:

```
Please generate a single-file React application for a "Retro Camera Web App" with the following specifications:

1. Visual Layout & Container Strategy
- Theme: Retro aesthetic with a "Handwritten" font style for all text.
- Title: "Bao Retro Camera" displayed at the top center.
- Instructions: Display usage instructions at the bottom right.
- Main Camera Container:
    - Create a fixed wrapper `div` that acts as the parent for the camera image, viewfinder, shutter button, and photo ejection slot.
    - Positioning: This container must be fixed at exactly 64px from the bottom and 64px from the left of the viewport (`bottom: 64px; left: 64px;`).
    - Dimensions: Width 450px, Height 450px.
    - Z-index: 20
    - All subsequent positioning coordinates (percentages) for camera elements are relative to this container.
- Background Image within Container:
    - Image Source: `https://s.baoyu.io/images/retro-camera.webp`
    - Size: 100% width and height of the container.
    - Position: Left 0, Bottom 0

2. Camera Functionality (The Viewfinder)
- Access the user's webcam.
- Viewfinder Position: The live video feed must be masked to a circle and positioned exactly over the camera lens.
- CSS for Video (Relative to Container): `bottom: 32%; left: 62%; transform: translateX(-50%); width: 27%; height: 27%; border-radius: 50%;z-index: 30`.
- Layering: The video must sit *above* the camera base image visually but within the container.

3. Shutter & Photo Interaction
- Shutter Button: Create an invisible clickable area over the camera's button.
- CSS for Button (Relative to Container): `bottom: 40%; left: 18%; width: 11%; height: 11%; cursor: pointer;z-index: 30`.
- Action: When clicked, play a shutter sound effect and trigger the "Photo Ejection" animation.

4. Photo Ejection & Development Animation
- Aspect Ratio: The generated Polaroid-style photo card must strictly follow a 3:4 portrait aspect ratio (Vertical).
- Ejection Animation: The photo paper slides UPWARDS (negative Y) from behind the camera body.
- Layering: The photo must appear to emerge from *inside* the camera (start with z-index(10) lower than camera body, then animate out).
- Ejection Container Origin CSS: `transform: translateX(-50%); top: 0; left: 50%; width: 35%;height: 100%;` (start position relative to the camera container).
- Ejection Container anmiation position from: ` translateY(0)` to ` translateY(-40%)`
- Developing Effect: Once the photo is taken, the image on the paper should transition from white/blurry to clear/sharp over a few seconds.

5. Drag & Drop "Photo Wall"
- Interaction: The user must be able to drag the ejected photo *out* of the camera slot and drop it anywhere on the rest of the screen (the "Photo Wall").
- Drag Handle: The entire Polaroid card (the white frame and the photo) must be interactive. The user should be able to click and drag from any part of the card to move it.
- Logic: While developing, the photo is attached to the camera container. Once dragged, it becomes absolutely positioned on the main screen body.
- Freedom: Once on the wall, photos can be dragged and repositioned freely.

6. AI Integration & Text Interactions
- Caption Generation: Use the Gemini Flash API to analyze the captured image content.
- Prompt: Generate a warm, short blessing or nice comment based on the photo content.
- Language Requirement: The generated text language must match the user's browser language.
- Footer Layout: The bottom of the Polaroid paper (below the image) should display the current date and the AI-generated text.
- Text Interaction & Icons:
    - When hovering specifically over the text area, display two small icons:
        1. Pencil Icon: Enters edit mode.
        2. Refresh Icon: Re-triggers the AI generation for that specific photo to get a new caption.
- Editing Logic:
    - Trigger: Edit mode can be entered by clicking the Pencil icon OR by double-clicking the text itself.
    - Behavior: When editing, replace the text display with an input/textarea showing the raw text.
    - Controls: Pressing Enter saves the changes. Pressing Esc cancels the edit and reverts to the previous text.

7. Photo Controls (Card Level)
- Hover Actions: When hovering over a developed photo card on the wall (general hover), show a small toolbar at the top of the photo with:
    - Download Button: When clicked, this must render the entire Polaroid card (including the white frame, the photo, the date, and the handwritten caption) into a single image file and download it. (Recommended: use `html2canvas` or similar logic).
    - Delete Button: Removes the photo from the screen.

Technical Stack
- React (functional components).
- Tailwind CSS for styling.
- Framer Motion (recommended for complex dragging and layout animations).
- Lucide-react for icons.
- html2canvas (or similar) for snapshotting the DOM elements.
```

## 关联主题

- [[00-元语/gemini]]
- [[00-元语/AI]]
- [[00-元语/prompt]]
- [[00-元语/vibe-coding]]
- [[00-元语/llm]]
- [[00-元语/react]]
- [[00-元语/multimodal]]
