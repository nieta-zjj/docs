---
title: "ChatGPT 的 Mac 客户端是是怎么读取应用程序内容并让 GPT 知道的？"

来源: "https://baoyu.io/blog/chatgpt-mac-client-read-app-content-gpt"
发布日期: "2024-11-14"
作者: "宝玉"
---

## 摘要

**一句话总结**
ChatGPT Mac 客户端通过原生应用能力和用户授权，直接读取 VSCode、Xcode 等应用窗口的文本内容并转化为提示词，让用户可以基于当前工作内容向 GPT 提问。

**关键要点**
*   **支持应用**：可连接 VSCode、Xcode、iTerm2、TextEdit、Terminal 等常用编辑器和命令行工具。
*   **读取机制**：基于原生能力直接获取窗口完整文本内容，而非使用截图，因此窗口被遮挡也不影响读取。
*   **插件依赖**：部分应用（如 VSCode）需要额外安装插件才能获取完整文本。
*   **数据格式**：提取的窗口内容会被封装成带有 `<windows>`、`<window>` 等标签的结构化提示词提交给 GPT。
*   **透明度**：用户将鼠标悬停在客户端横幅或历史消息顶部，即可查看实际发送给 GPT 的具体内容。
*   **编辑器读取规则**：包含打开窗格的全部内容，直至达到最大长度限制被截断；若选中文本，GPT 会重点关注选中内容，但仍保留完整窗口上下文。
*   **终端读取规则**：默认包含最后 200 行内容；若选中文本，则重点关注选中内容及相邻文本，直至达到截断限制。

**风险与不足**
*   **上下文局限**：仅支持窗口级别的读取，不支持项目或整个代码库级别的上下文获取。
*   **交互断层**：GPT 生成的结果无法自动更新或写入回原应用程序窗口，需要手动复制粘贴。
*   **能力定位**：仅为一个产品功能，无法替代 Cursor 等专业的 AI 编程工具。

## 正文

ChatGPT 的 Mac 客户端现在可以连接常用的一些应用程序，比如 VSCode、XCode、iTerm2，这样可以直接就这些应用程序上的内容去提问，效果很棒！

![Image 1](https://baoyu.io/uploads/2024-11-14/1731621975261.png)

它基于原生应用程序的能力以及加上用户对它的授权，可以获取到这些应用当前窗口的内容，然后将窗口的内容整理成提示词一起提交到 GPT，这样 GPT 就可以根据窗口内容来处理了，提示词类似于下面这样：

```
<windows>
<instructions>
You are being provided with textfield content from windows the user has asked you to focus on.
</instructions>
<window>
<title>Visual Studio Code</title>
<app_name>Code</app_name>
<textfields>
<textfield id="窗口文件名">
【窗口内容】
</textfield>
</textfields>
</window>
</windows>
```

Mac 客户端下载地址：[https://openai.com/chatgpt/desktop](https://openai.com/chatgpt/desktop)

它不是通过截图获取内容的，是直接获取窗口完整内容的，比如VSCode，需要额外安装插件以获取完整文本，所以窗口被遮挡也没关系。

可以将鼠标悬停在 ChatGPT Mac 客户端横幅上，查看 ChatGPT 发送哪些内容。

![Image 2](https://baoyu.io/uploads/2024-11-15/1731642297901.png)

在历史消息中，鼠标悬停在消息顶部，也可以看发送过的内容。

![Image 3](https://baoyu.io/uploads/2024-11-15/1731642325182.png)

使用编辑器和 IDE（Xcode、VS Code、TextEdit）时，ChatGPT 会包含打开的编辑器窗格的全部内容，直到达到最大长度限制被截断。

如果在编辑器中选择文本，ChatGPT 会重点关注选中的内容，窗口的全部内容仍然会包含在上下文中。

使用命令行窗口（Terminal、iTerm）时ChatGPT 包含最后 200 行内容。如果在窗口中选中文本，ChatGPT 将重点关注所选内容以及相邻文本，直至截断限制。

这个功能确实不错，但要说能替代 Cursor 那还太扯了：

*   它不是项目级别的，只是窗口级别的，编程是要用到整个代码库的

*   它的结果不能自动更新回窗口，需要手动复制粘贴

只是个小小的产品功能而已，过些天大家就会忘记了。

## 关联主题

- [[00-元语/OpenAI]]
- [[00-元语/ChatGPT]]
- [[00-元语/AI]]
- [[00-元语/desktop-client]]
- [[00-元语/ide]]
- [[00-元语/terminal]]
- [[00-元语/cli]]
- [[00-元语/prompt]]
- [[00-元语/context-optimization]]
