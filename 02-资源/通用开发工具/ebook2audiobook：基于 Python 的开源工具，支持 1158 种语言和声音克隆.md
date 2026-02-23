---
title: "ebook2audiobook：基于 Python 的开源工具，支持 1158 种语言和声音克隆"

发布日期: "2026-02-22"
对象: "GitHub 项目 `DrewThomasson/ebook2audiobook`"
项目主页: "https://github.com/DrewThomasson/ebook2audiobook"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 18241，Forks 1484，Watchers 87（抓取时间：2026-02-22）"
版本快照: "最新发布 v26.2.20（发布时间：2026-02-20T17:07:38Z）"
---

## 摘要

### 1) 一句话总结
ebook2audiobook 是一个基于 Python 的开源工具，支持 1158 种语言和声音克隆，可通过多种 TTS 引擎将无 DRM 限制的电子书转换为带有章节和元数据的有声读物。

### 2) 关键要点
* **核心功能与引擎**：利用 XTTSv2、Piper-TTS、Vits、Fairseq、Tacotron2 等多种文本转语音（TTS）引擎生成高质量有声读物。
* **格式支持广泛**：支持 20 多种输入格式（包括 `.epub`、`.mobi`、`.pdf`、`.txt` 及各类图片格式），其中 `.epub` 和 `.mobi` 的自动章节检测效果最佳；支持输出 `.m4b`、`.mp3`、`.flac` 等 10 种音频格式。
* **语言与声音克隆**：支持高达 1158 种语言，提供可选的声音克隆功能（通过用户提供的语音文件），并支持使用自定义或微调的 TTS 模型（仅限 XTTSv2）。
* **硬件门槛低**：最低配置仅需 2GB RAM 和 1GB VRAM（推荐 8GB RAM / 4GB VRAM），支持 CPU、CUDA、MPS (Apple Silicon)、ROCM、XPU 和 JETSON 等多种计算平台。
* **高级控制与 OCR**：内置 OCR 扫描功能以处理图片格式的文本页；支持 SML 标签，可精细控制音频的停顿、静音时长及声音切换。
* **多种运行方式**：提供 Gradio Web GUI 界面和命令行（Headless）模式，支持本地运行、Docker 容器化部署，以及在 Hugging Face、Google Colab 和 Kaggle 等云端平台运行。
* **开源与社区**：项目采用 Apache License 2.0 协议，在 GitHub 上拥有超 1.8 万 Stars，属于通用开发工具类别。

### 3) 风险/局限
* **版权与合规风险**：官方明确声明，该工具仅限用于合法获取的无 DRM（数字版权管理）电子书，作者不对任何软件滥用或由此产生的法律后果负责。
* **文本清理需求**：由于 EPUB 格式缺乏统一的结构标准（如章节、段落、序言的明确界定），用户在转换前通常需要手动删除不需要读出的文本。
* **CPU 性能瓶颈**：现代 TTS 引擎在纯 CPU 环境下运行非常缓慢，官方建议在 CPU 上使用 YourTTS、Tacotron2 等较低质量的引擎。
* **Windows 部署限制**：如果在 Windows 系统上使用 Docker 运行该项目，必须开启硬件虚拟化功能。

## 功能与定位

Generate audiobooks from e-books, voice cloning & 1158+ languages!

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:22:51Z。
- 项目创建于 2024-01-22T23:49:55Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/DrewThomasson/ebook2audiobook
- README：https://raw.githubusercontent.com/DrewThomasson/ebook2audiobook/main/README.md
- Releases：https://github.com/DrewThomasson/ebook2audiobook/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/tts]]
- [[00-元语/audio]]
- [[00-元语/ocr]]
- [[00-元语/cli]]
- [[00-元语/compliance]]
