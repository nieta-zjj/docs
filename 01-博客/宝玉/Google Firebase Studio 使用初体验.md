---
title: "Google Firebase Studio 使用初体验"

来源: "https://baoyu.io/blog/firebase-studio-first-experience"
发布日期: "2025-04-10"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
Google 新推出的在线 AI 开发平台 Firebase Studio 提供了提示词构建与在线代码编辑双模式，深度集成了 Gemini AI 服务且目前免费，编程能力强大但生成的 UI 界面相对简陋。

**2) 关键要点**
* **双交互模式**：提供两种可自由切换的模式，一种是类似 v0.dev 的无代码提示词构建模式，另一种是类似 Cursor/bolt.new 的在线代码编辑器模式。
* **多端实时预览**：不仅支持 Web 程序的实时预览，还支持在浏览器中连接 Android 虚拟机实时预览 React Native 手机应用。
* **局部 UI 编辑**：支持直接选中 UI 元素，并通过提示词对选中部分进行编辑修改。
* **截图标记修改**：支持对 UI 进行截图并在图上画框标记，将截图发送给 AI 即可对标记内容进行针对性修改。
* **生态集成**：集成了 Google Cloud 和 Gemini AI 服务，支持一键配置 Gemini API Key 来开发 AI 应用（如看图写诗应用）。
* **公网发布**：生成的结果支持直接发布到公网上，供其他人访问和测试。
* **底层模型**：AI 代码编辑基于 Gemini 2.5 Pro，具备出色的编程能力。
* **免费使用**：平台目前处于免费阶段（访问地址：studio.firebase.google.com）。

**3) 风险/不足**
* **UI 审美欠佳**：相比于 Claude 3.5/3.7，该平台生成的应用界面较为简陋，缺乏美感。

## 正文

测试了下 Google 新的在线 AI 开发平台 Firebase Studio，很强大，有些交互甚至比 v0.dev 做的还好些。从前台界面上看，它有两种主要的交互方式并且可以自由切换：

![Image 1](https://baoyu.io/uploads/2025-04-10/1744301379375.png)

一种是类似于 v0.dev 这样，不需要你懂代码，直接通过提示词就可以构建应用，并且可以实时预览结果；

![Image 2](https://baoyu.io/uploads/2025-04-10/1744301387937.png)

另一种是类似于 Cursor 或者 [bolt.new](http://bolt.new/) 那样，是一个在线编辑器，但是可以实时预览结果，不止是 Web 程序，包括 React Native 的手机应用程序也可以在浏览器中连一个 Android 的虚拟机实时预览结果。

![Image 3](https://baoyu.io/uploads/2025-04-10/1744301403004.png)

Firebase Studio 在交互细节上还是做的蛮好的，把 v0.dev 的选中 UI 元素再用提示词编辑的交互抄过去了。

![Image 4](https://baoyu.io/uploads/2025-04-10/1744301414225.png)

另外它还有一个实用功能，就是对 UI 截图，然后在截图上画框标记，再把截图发到对话框，让 AI 对标记的内容进行修改编辑。这个还蛮实用的。

另外它集成了 Google Cloud 和 Gemini AI 一系列的服务，也就是你创建的应用程序可以借用 Gemini AI 的 API，做一些 AI 能力的应用，比如图1就是一个根据图片生成诗句的AI应用，当然你需要配置一下自己的 Gemini API Key（点击个按钮就可以自动配置）。最后生成的结果也可以发布到公网上让其他人测试访问。

Firebase Studio 的 AI 代码编辑应该是基于 Gemini 2.5 Pro，编程能力是挺不错的，但是审美似乎不怎么样，做出来的应用都很简陋，不像 Claude 3.5/3.7 做的 UI 美观大气，审美在线。

目前是免费的，推荐去试试，使用地址：[studio.firebase.google.com](http://studio.firebase.google.com/)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Cursor]]
- [[00-元语/gemini]]
- [[00-元语/ide]]
- [[00-元语/llm]]
- [[00-元语/react]]
- [[00-元语/v0]]
- [[00-元语/vibe-coding]]
