---
title: "HeartMuLa：开源音乐基础模型家族"

发布日期: "2026-01-15"
来源链接: "https://heartmula.github.io/"
论文链接: "https://arxiv.org/abs/2601.10547"
代码仓库: "https://github.com/HeartMuLa/heartlib"
译注: "站点未提供官方中文版本，正文为中文翻译整理稿。"
---

## 摘要

HeartMuLa 是一套开源的音乐基础模型生态系统，集成了音频文本对齐、低帧率编解码、歌词识别与多条件可控歌曲生成功能，旨在推动大规模的音乐理解与生成。

- 开源与统一框架：HeartMuLa 提供了一个可扩展的开源生态系统，将音乐的理解、对齐和可控生成统一在同一个框架内。
- HeartCLAP：构建统一嵌入空间，用于音乐描述和跨模态检索。
- HeartCodec：采用 12.5 Hz 低帧率设计，在保持高保真和细粒度声学细节的同时，支持高效自回归建模。
- HeartTranscriptor：面向真实音乐场景的鲁棒歌词识别模型。
- HeartMuLa 生成模型：基于 LLM，支持文本风格描述、歌词、参考音频等多条件输入。
- 细粒度段落控制：支持按前奏、主歌、副歌等段落指定风格。
- 短视频配乐模式：可生成短时、适合短视频背景的音乐。

## 正文

HeartMuLa 提出了一套开源音乐基础模型体系，用于推进跨任务、跨模态的大规模音乐理解与生成。其框架由四个核心组件构成：

- HeartCLAP：音频-文本对齐模型，建立统一嵌入空间，支持音乐描述理解与跨模态检索。
- HeartCodec：低帧率（12.5 Hz）高保真音乐编解码分词器，兼顾长程结构建模与细节保真。
- HeartTranscriptor：为真实世界音乐场景优化的鲁棒歌词识别模型。
- HeartMuLa：基于 LLM 的歌曲生成模型，支持文本风格描述、歌词、参考音频等多条件控制生成。

此外，系统提供两种专门模式：

- 细粒度音乐属性控制：可按歌曲段落（如前奏、主歌、副歌）分别指定风格。
- 短时音乐生成：适用于短视频背景音乐场景。

该项目主页同时给出框架图、视频演示与歌曲生成样本对比，构成了“理解-对齐-可控生成”一体化的开源音乐模型生态。

相关可验证资源：

- 主页：https://heartmula.github.io/
- 论文 PDF：https://arxiv.org/pdf/2601.10547
- 演示视频：https://www.youtube.com/embed/QebE-jVc0Ic?si=oYL2O1vssJQcXvHe
- 相关论文：
  - UniAudio：https://arxiv.org/abs/2310.00704
  - ALMTokenizer：https://arxiv.org/abs/2504.10344
  - SimpleSpeech：https://arxiv.org/abs/2406.02328

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/audio]]
- [[00-元语/multimodal]]
- [[00-元语/asr]]
- [[00-元语/paper]]
