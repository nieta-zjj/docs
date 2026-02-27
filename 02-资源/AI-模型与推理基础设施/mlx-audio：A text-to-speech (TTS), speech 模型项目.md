---
title: "mlx-audio：A text-to-speech (TTS), speech 模型项目"
对象: GitHub 仓库
分类: AI-模型与推理基础设施
来源:
  - https://github.com/Blaizzy/mlx-audio
  - http://github.com/Blaizzy/mlx-audio/releases
---

## 摘要

mlx-audio 是一个面向 Apple Silicon 的本地语音推理库，基于 MLX 框架整合了文本转语音、语音转文本、语音到语音与说话人相关能力，并提供 CLI、Python API 与 OpenAI 兼容 REST API。项目的核心价值在于模型覆盖范围广、支持流式处理和量化转换，适合在 Mac 端搭建高性能语音应用；主要限制是硬件平台要求明确，且部分格式与语种能力依赖额外组件。

## 功能与定位

mlx-audio 定位为 Apple Silicon 本地音频推理基础库，重点覆盖 TTS、STT、STS、VAD 与说话人分离等常见语音任务。仓库 README 与代码结构显示其目标是把多模型能力统一到同一套调用接口，降低本地语音功能接入成本。

项目同时提供命令行工具、Python 接口与本地 API 服务，便于从实验脚本扩展到服务化调用。

## 典型使用场景

- 在 Mac 上做本地文本转语音，生成播报或有声内容。
- 对会议录音、访谈音频执行语音识别，并输出带时间信息的结果。
- 用语音到语音与音频分离能力做降噪、声源分离或增强处理。
- 通过本地 OpenAI 兼容接口，把语音能力接入已有应用后端。
- 使用示例工程批量生成长文本音频（仓库 `examples/bible-audiobook` 给出了批处理样例）。

## 特色与差异点

- 面向 Apple Silicon 深度优化，强调在 M 系列芯片上的推理效率。
- 在一个项目中聚合多类语音模型，包括 Kokoro、Qwen3-ASR/TTS、Whisper、Parakeet、Voxtral、Sortformer 等。
- 支持模型量化与转换流程，覆盖 3-bit、4-bit、6-bit、8-bit 等量化配置。
- 同时提供 Web UI 与 OpenAI 兼容 API，兼顾本地交互和服务集成。
- Releases 页面可见项目持续迭代，最新版本条目为 `v0.3.1`。

## 使用方式概览

- 安装层面支持 `pip` 与 `uv tool`。
- 调用层面支持 CLI 与 Python API 两条路径。
- 服务层面可启动 `mlx_audio.server` 提供本地 HTTP 接口。
- 进阶能力包括流式转录、词级对齐、语音克隆与模型量化转换。

## 限制与注意事项

- 硬件前提：主要面向 Apple Silicon Mac（M1/M2/M3/M4）。
- 运行环境：需要 Python 3.10 及以上版本，并依赖 MLX 生态组件。
- 依赖补充：保存 MP3/FLAC 需要系统安装 `ffmpeg`，部分语种能力还需安装额外语言相关依赖。
- 示例工程中包含长时批处理脚本，实际使用前应根据本地资源与稳定性策略做参数和流程调整。

## 链接

- https://github.com/Blaizzy/mlx-audio
- http://github.com/Blaizzy/mlx-audio/releases
- https://github.com/Blaizzy/mlx-audio/tree/main/examples
- https://github.com/Blaizzy/mlx-audio/blob/main/pyproject.toml

## 关联主题

- [[00-元语/AI]]
- [[00-元语/audio]]
- [[00-元语/tts]]
- [[00-元语/asr]]
- [[00-元语/cli]]
