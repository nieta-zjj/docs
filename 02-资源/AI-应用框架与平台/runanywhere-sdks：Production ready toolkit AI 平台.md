---
title: "runanywhere-sdks：Production ready toolkit AI 平台"
对象: "GitHub 仓库 `RunanywhereAI/runanywhere-sdks`"
项目主页: "https://github.com/RunanywhereAI/runanywhere-sdks"
来源: "README、仓库首页、Releases 页面"
记录日期: "2026-02-26"
---

## 摘要

RunAnywhere 是一个面向多平台的端侧 AI 工具包，核心定位是让应用在本地设备离线运行 LLM、STT 与 TTS，强调隐私、低延迟和跨端一致的 SDK 体验。

- 支持 Swift、Kotlin、Web、React Native、Flutter 多端接入。
- 以 llama.cpp、Whisper ONNX、Piper ONNX 组成主要能力栈，覆盖文本生成、语音识别与语音合成。
- 提供模型下载与进度跟踪、流式输出等工程化能力，并在部分平台提供 VLM、Tool Calling、结构化输出等扩展特性。
- 仓库同时提供示例应用与 Playground 项目，便于从最小演示到完整产品化验证。

## 功能与定位

RunAnywhere 的定位是“Production ready toolkit to run AI locally”，目标是把端侧 AI 能力封装为可直接接入应用的 SDK 套件。

从 README 可验证的主能力包括：

- LLM 文本生成（GGUF/llama.cpp）。
- Speech-to-Text（Whisper ONNX）。
- Text-to-Speech（Piper ONNX）。
- 语音链路 STT -> LLM -> TTS。

仓库结构显示其为多语言 SDK 体系：`runanywhere-swift`、`runanywhere-kotlin`、`runanywhere-web`、`runanywhere-react-native`、`runanywhere-flutter`，并以 `runanywhere-commons` 作为共享核心。

## 典型使用场景

- 在 iOS、Android、Web 或跨端 App 中接入本地 AI 聊天与语音交互。
- 构建离线或弱网可用的语音助手、文本生成与多模态体验。
- 基于官方 examples/Playground 快速做 PoC、演示与性能验证。
- 需要隐私优先的数据处理场景（文本与语音尽量本地完成）。

## 核心功能

- 多平台统一 SDK 接口与基础初始化流程。
- 模型下载、加载和推理调用的工程化封装。
- 示例应用覆盖 iOS、Android、Web、React Native、Flutter。
- 文档入口覆盖各平台：Swift、Kotlin、React Native、Flutter（README 中给出 docs.runanywhere.ai 对应页面）。

## 特色与差异点

- 以“端侧优先”作为产品主线，强调无云依赖的本地推理体验。
- 同一仓库内提供 SDK、examples、Playground、releases 资产，便于从开发到分发的一体化验证。
- Releases 页面显示持续迭代的多平台构建产物（例如 v0.19.6 的 iOS/Android 相关资产与 Kotlin AAR）。

## 使用方式概览

1. 按目标平台选择 SDK（Swift/Kotlin/Web/React Native/Flutter）。
2. 完成 SDK 初始化与推理后端注册。
3. 下载并加载目标模型。
4. 调用聊天、语音识别或语音合成接口完成业务集成。
5. 结合官方 examples/Playground 做端到端验证后再进入生产部署。

## 限制与注意事项

- 不同平台功能覆盖不完全一致，接入前需要逐项核对 README 的能力矩阵与平台状态。
- 端侧推理受设备算力与内存限制，模型体积与体验存在明显硬件差异。
- Releases 与依赖版本迭代较快，建议锁定版本并跟踪发布说明。
- Playground 中包含自动化 agent 等示例；本文档仅做能力定位与场景说明，不复述可直接执行的自动化细节。

## 链接

- 仓库主页：https://github.com/RunanywhereAI/runanywhere-sdks
- README：https://raw.githubusercontent.com/RunanywhereAI/runanywhere-sdks/main/README.md
- 官网：https://www.runanywhere.ai/
- Swift 文档：https://docs.runanywhere.ai/swift/introduction
- Kotlin 文档：https://docs.runanywhere.ai/kotlin/introduction
- React Native 文档：https://docs.runanywhere.ai/react-native/introduction
- Flutter 文档：https://docs.runanywhere.ai/flutter/introduction
- Releases：https://github.com/RunanywhereAI/runanywhere-sdks/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/AI]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
