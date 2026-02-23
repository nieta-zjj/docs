---
title: "测试 Chrome 内置  Gemini Nano 大语言模型 (4bit 3.25B) 的方法"

来源: "https://baoyu.io/blog/ai/how-to-enable-gemini-nano-for-chrome"
发布日期: "2024-06-08"
作者: "宝玉"
---

## 摘要

**一句话总结**
本文详细介绍了在 Chrome 127 Canary 版本中开启并测试浏览器内置 Gemini Nano 大语言模型（4bit 3.25B）的具体配置与代码调用步骤。

**关键要点**
*   **版本要求**：需下载 Chrome 127 的 Canary（开发者）版本。
*   **开启 API**：在 `chrome://flags/` 中搜索并把 `Prompt API for Gemini Nano` 设置为 `Enable`。
*   **开启设备端优化**：在 `chrome://flags/` 中将 `Enables optimization guide on device` 设置为 `Enable BypassPerfR`（注意不是 `Enable`）。
*   **重启生效**：完成上述 Flags 设置后，必须重启 Chrome 浏览器。
*   **下载模型**：进入 `chrome://components/`，找到 `Optimization Guide On Device Model` 并点击 `Check for update`，确保模型成功下载。
*   **控制台测试**：在浏览器开发者控制台输入 `window.ai` 检查 API 是否可用。
*   **代码调用**：可通过 `window.ai.canCreateGenericSession()` 检查权限，并使用 `createTextSession()` 创建会话，通过 `promptStreaming()` 实现流式对话输出测试。

## 正文

测试 Chrome 内置 Gemini Nano 的方法：

1.   下载 Chrome 127，可以到 [Chrome Release Channels](https://chromium.org/getting-involved/dev-channel/) 下载 Canary 版本

2.   打开 [chrome://flags/](chrome://flags/)，搜索以下设置并启用：

*   a) 找到 `Prompt API for Gemini Nano` 设置为 `Enable`
*   b) 找到 `Enables optimization guide on device` 设置为 `Enable BypassPerfR` (不是 `Enable`)
*   c) 重启 Chrome

![Image 1](https://baoyu.io/images/ai/how-to-enable-gemini-nano-for-chrome/GPh99BfXQAAQIZK.jpeg)

1.   打开 [chrome://components/](chrome://components/)，检查 `Optimization Guide On Device Model` 中模型是否成功下载，点击 `Check for update`

![Image 2](https://baoyu.io/images/ai/how-to-enable-gemini-nano-for-chrome/GPh-W8DWYAEGaY7.jpeg)

1.   打开控制台，输入 `window.ai` 测试是否能有返回结果，可以用下面的完整代码测试：

const canCreate = await window.ai.canCreateGenericSession()

if (canCreate !== "no") {

const session = await window.ai.createTextSession();

const stream = session.promptStreaming("Tell me a joke!")

for await (const chunk of stream) {

console.log(chunk)

}

session.destroy()

} else {

console.error(" can't create generic session", canCreate)

}

## 关联主题

- [[00-元语/AI]]
- [[00-元语/gemini]]
- [[00-元语/llm]]
- [[00-元语/desktop-client]]
