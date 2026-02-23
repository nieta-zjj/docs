---
title: "如何使用 DALL-E 给 PPT 画风格稳定的配图？"

来源: "https://baoyu.io/blog/dall-e-ppt-image-style-guide"
发布日期: "2024-11-12"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
本文介绍了使用 DALL-E 为 PPT 生成风格稳定配图的三个核心技巧：使用专属 DALL-E GPT、设定风格与尺寸比例，以及在同一会话中连续作图。

**2) 关键要点**
*   **使用专属模型**：推荐使用专门的 DALL-E GPT（可通过 GPT Store 或专属 URL 访问）进行绘图，而非通用的 GPT-4o 模型。
*   **预设参数**：作图前，利用 DALL-E GPT 界面底部的按钮预先设定好图像的风格和尺寸比例。
*   **重画与局部修正**：若对结果不满意可要求重画；点开图像后可使用“套索工具”选中局部区域，并输入提示词进行细节修正。
*   **同一会话保持一致**：在初始设定好风格和尺寸后，同一会话中的后续指令无需重复设定风格。
*   **上下文参考**：在同一会话中，DALL-E GPT 会自动参照前文的提示词来生成新的绘图提示词，从而最大程度地保持配图风格的一致性。

**3) 风险/缺口**
*   直接使用 GPT-4o 绘图存在不稳定性，可能会出现拒绝出图或单次仅生成一张图的情况。

## 正文

我之前在准备《如何写好提示词？》 [https://baoyu.io/blog/how-to-write-good-prompt](https://baoyu.io/blog/how-to-write-good-prompt) 的配图时，都是用 DALL-E 帮我画的，整体效果还是挺满意的。

![Image 1](https://baoyu.io/uploads/2024-11-12/%E5%A6%82%E4%BD%95%E5%86%99%E5%A5%BD%E6%8F%90%E7%A4%BA%E8%AF%8D%EF%BC%9F.076.png)![Image 2](https://baoyu.io/uploads/2024-11-12/%E5%A6%82%E4%BD%95%E5%86%99%E5%A5%BD%E6%8F%90%E7%A4%BA%E8%AF%8D%EF%BC%9F.056.png)

其实用法很简单，就三个技巧：

1.   使用 DALL-E 的 GPT 而不是 GPT-4o

2.   设定风格样式和尺寸

3.   基于同一会话

### 技巧一：使用 DALL-E 的 GPT 而不是 GPT-4o 画图

GPT-4o 并不是一个专门用来画图的模型，所以有时候它不会给你出图，就算出图一次也只有一张。

但 DALL-E 的 GPT 是专门用来调用 DALL-E 画图的，出图很稳定，还有一些小工具可以选择。可以在 GPT Store [https://chatgpt.com/gpts](https://chatgpt.com/gpts) 找到 DALL-E 或者直接用 URL：[https://chatgpt.com/g/g-2fkFE8rbu-dall-e](https://chatgpt.com/g/g-2fkFE8rbu-dall-e)

![Image 3](https://baoyu.io/uploads/2024-11-12/1731385014795.png)

### 技巧二：设定好风格和尺寸比例

打开 DALL-E GPT 后，底部有按钮可以选择风格和尺寸比例。

![Image 4](https://baoyu.io/uploads/2024-11-12/1731385119741.png)

选好风格和尺寸比例，就可以让它画图，不满意可以让它基于前面的结果重画。

![Image 5](https://baoyu.io/uploads/2024-11-12/1731385171616.png)

点开后还有一个套索工具，可以选中局部输入提示词修正

![Image 6](https://baoyu.io/uploads/2024-11-12/1731385353511.png)

### 技巧三：基于同一会话保持风格一致

在一开始设定好风格和图像尺寸比例，后面的消息就可以省略风格设定了，直接提要求就可以，并且由于 DALL-E 的 GPT 会帮你生成画图的提示词，那么在同一会话中，它会尽可能参照前面的提示词产生新的提示词，这样可以最大限度的保持风格的一致。

![Image 7](https://baoyu.io/uploads/2024-11-12/1731385471465.png)

有兴趣你也可以试试。

## 关联主题

- [[00-元语/OpenAI]]
- [[00-元语/ChatGPT]]
- [[00-元语/multimodal]]
- [[00-元语/prompt]]
- [[00-元语/image-editing]]
- [[00-元语/design]]
