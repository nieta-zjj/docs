---
title: "我是如何高效翻译 65 页 Google 官方提示工程白皮书 PDF 文件的"

来源: "https://baoyu.io/blog/efficiently-translate-google-prompt-engineering-pdf"
发布日期: "2025-04-14"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
作者分享了通过“PDF转Markdown再翻译”以及利用Deep Research功能一键处理长文档，从而高效、高质量翻译65页Google提示工程白皮书的实战经验。

**2) 核心要点**
*   **翻译策略**：放弃保持原PDF排版的翻译方式，采用“PDF转Markdown -> 翻译Markdown -> 重新生成PDF”的流程，以避免排版错乱和上下文割裂影响翻译质量。
*   **PDF转Markdown（大模型法）**：推荐使用Gemini 2.5 Pro（通过AI Studio可免费使用），操作简单且能保留表格，但需手动提取图片。
*   **PDF转Markdown（API法）**：推荐三款工具：Mineru（开源免费，效果最好，单文档限200MB/600页）、LlamaParse（提供UI，免费额度大，但仅支持包月）、MistralOCR（按量付费，但无UI）。
*   **Markdown翻译**：长文档需手动分块翻译。Gemini 2.5 Pro支持的上下文长度表现最好，而GPT-4.5的翻译质量最佳；可通过在提示词中加入“术语表”来保证翻译一致性。
*   **短文档一键翻译**：10页以内的PDF，可直接让大模型翻译并输出Markdown。
*   **长文档一键翻译（Deep Research）**：对于65页左右的长PDF，可将其上传至公网（如GitHub Pages、S3）并提供URL，利用Deep Research进行一键翻译。
*   **Deep Research效果对比**：Gemini Deep Research的翻译结果优于OpenAI，且支持直接导出为Google Doc并下载为PDF；OpenAI则需要手动复制Markdown并清理多余的引用链接。

**3) 风险与不足（原文明确提及）**
*   **大模型解析限制**：直接使用大模型将PDF转Markdown时，几十页以上的PDF可能无法正常提取，且无法自动提取内置图片。
*   **MistralOCR使用门槛**：该工具没有提供UI，需要借助代码或开源项目辅助，且作者在实际测试中未能成功提取图片。
*   **Deep Research长度极限**：Deep Research的翻译长度受限于产品限制，65页已接近极限，更长的文档必须拆分为多个小PDF进行翻译。

## 正文

前几天翻译 Google 官方提示工程白皮书 PDF 的时候，尝试了一些自动化的方法来提升效率，分享一些我翻译 PDF 的经验和心得。

首先我个人比较排斥保持排版的翻译方式，因为 PDF 在翻译后，文字长度不一致会导致排版很难看，忽大忽小；另外翻译的时候由于布局导致的文字被强行分割，导致上下文不完整会影响翻译质量。

我在翻译 PDF 时，会把 PDF 先转成 Markdown，再基于 Markdown 去翻译，翻译好了基于翻译好的 Markdown 再去重新生成 PDF，对于文字、表格、图片都能很好的保留，主要缺点是布局格式保留的不是很好，不过我翻译的通常是文字图表为主的，所以影响不大。

如何将 PDF 转 Markdown？
-------------------

我常用的 PDF 转 Markdown 主要有两种方式：

一种是直接使用多模态的大语言模型去生成 Markdown

其中 Gemini 效果最好，OCR 能力强上下文窗口长度大，尤其是最新的 Gemini 2.5 Pro，效果非常好，如果你能访问 AI Studio （aistudio.google.com），每天有很多免费额度，几乎是不用花钱的。如果已经是 Gemini 订阅用户，Gemini 上用 Gemini 2.5 Pro 也很方便。

使用方法很简单，上传 PDF 文件，提示词参考：

> 帮我把这个PDF转成Markdown，保留所有内容不要删减

![Image 1](https://baoyu.io/uploads/2025-04-14/Gemini-04-14-2025_09_42_AM.png)

这种方式优点是操作简单方便，表格也能很好的保留，缺点是 PDF 不能太大，几十页以后可能就无法正常提取了，另外 PDF 内的图片也无法帮你提取，需要手动去截图或者工具提取。

一种是使用第三方的 API，我试下来三家的比较好：

mineru：[mineru.net](http://mineru.net/)

开源免费，在线就可以使用，图文并茂，效果是我测试下来最好的，单个文档不能超过200兆600页，但足够用了。

![Image 2](https://baoyu.io/uploads/2025-04-14/1744649995229.png)

LlamaIndex 的 LlamaParse：[https://www.llamaindex.ai/llamaparse](https://www.llamaindex.ai/llamaparse) 好处是有个 UI，直接上传 PDF 就可以生成 Markdown，图片也可以单独下载； 缺点是计费方式不灵活，只有包月的方式，不能按量付费，好在免费额度够大，可以分析好多页

![Image 3](https://baoyu.io/uploads/2025-04-14/1744650005835.png)

Mistra 的 MistraOCR：[https://mistral.ai/news/mistral-ocr](https://mistral.ai/news/mistral-ocr) 好处是计费灵活，可以按照使用量付费，也可以生成 Markdown 和提取图片（但是我没成功过） 缺点是没有提供 UI，需要借助自己写代码或者用开源项目辅助

这种方式好处就是无论多大的 PDF 文件都能解析，另外 PDF 内置的图片也可以提取下来（有些 PDF 也不行）。

如何翻译 Markdown？
--------------

翻译 Markdown 很简单，直接把要翻译的 Markdown 给你喜欢的大语言模型，在开头或者结尾写一句提示词：

> 请把输入的内容用简体中文重写，保持原有 Markdown 格式不变无删减，内容通俗易懂

但是如果 Markdown 内容很长，就需要手动分块，一次翻译一部分，最后手动合并。至于模型能翻译多长，取决于模型本身，翻译长度表现最好是 Gemini 2.5 Pro，最差是 GPT-4.5，不过我觉得 GPT-4.5 翻译效果是最好的，所以很多时候我宁愿手动拆分用 GPT-4.5 一块一块的翻译。

至于翻译的一致性，可以在翻译的提示词里面加上术语表，比如：

> 请将输入的内容用中文重写，尊重原意，让它通俗易懂适合普通人群，无删减，人名不翻译，词汇表： AI Agent -> AI 智能体 LLM -> 大语言模型

或者翻译完了手动替换一下。

如何一键翻译 PDF
----------

上面的解析 Markdown 再用 Markdown 翻译是比较准确翻译的方法，就是比较繁琐。如果你的 PDF 不是很大，也可以用大语言模型一键翻译。

如果 PDF 文件内容不长，比如 10 页以内（具体根据模型不同有所差异，需要多试试），直接让模型翻译并输出 Markdown 即可。

如果 PDF 文件内容比较长，但又不是特别长，比如我翻译的 65 页 Google 官方提示工程白皮书，这就有个秘笈了：用 Deep Research 帮你翻译长 PDF。

绝大部分只支持 Deep Research 可以写调研报告，不知道 Deep Research 实际上还能做一些其他任务，比如翻译、写代码。由于 Deep Research 有一个临时的本地存储，以及它的模型窗口通常都很长，所以对于长内容的翻译，它足以胜任。比如 64 页的 PDF 如果是普通会话，是无法翻译的，但是在 Deep Research 里面可以轻松搞定。

但是 Deep Research 里面无法上传附件，你只能把 PDF 放到一个公网可以访问到的地址，比如 GitHub Pages，S3 等，然后提供 URL 给它翻译。 提示词很简单：

> 请帮我把这个PDF完整的翻译成中文，输出为Markdown格式
>
>
> PDF地址：{pdf url}

Deep Research 可以借助浏览器阅读并翻译 PDF 内容。

![Image 4](https://baoyu.io/uploads/2025-04-14/Gemini-04-14-2025_10_19_AM.png)

OpenAI 的 DeepResearch 和 Google Gemini 的 DeepResearch 都可以胜任这个长 PDF 翻译任务，但是 Gemini 的 DeepResearch 翻译结果更好。另外 Gemini 的结果可以直接导出到 Google Doc，然后下载成 PDF，OpenAI 的 DeepResearch 你需要复制成 Markdown，然后去掉一些不必要的引用链接，再去导出，相对麻烦很多。

![Image 5](https://baoyu.io/uploads/2025-04-14/PDF%E7%BF%BB%E8%AF%91%E8%AF%B7%E6%B1%82-04-14-2025_10_20_AM.png)

这里是我当时分别用 OpenAI 的 DeepResearch 和 Google 的 DeepResearch 翻译的结果会话链接，可以对比参考：

*   Google DeepResearch：[https://g.co/gemini/share/7537a1fecca8](https://g.co/gemini/share/7537a1fecca8)

*   OpenAI DeepResearch：[https://chatgpt.com/share/67fd2597-843c-800f-811c-eb0d9047f71c](https://chatgpt.com/share/67fd2597-843c-800f-811c-eb0d9047f71c)

注意用 DeepResearch 翻译也不是无限长度的，依旧受限于其产品长度限制，65页已经是接近极限的长度了，更长建议就要拆分成多个小 PDF 去翻译了。

## 关联主题

- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/gemini]]
- [[00-元语/OpenAI]]
- [[00-元语/ocr]]
- [[00-元语/markdown]]
- [[00-元语/prompt]]
- [[00-元语/paper]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
