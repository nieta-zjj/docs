---
title: pocketpal-ai：模型项目
对象: GitHub 仓库
项目主页: https://github.com/a-ghorbani/pocketpal-ai
来源: README、docs/getting_started.md、GitHub API
开源协议: MIT
---

## 摘要

PocketPal AI 是一款开源（MIT 协议）的移动端 AI 助手应用，支持在 iOS 和 Android 设备上完全离线运行和测试多种小语言模型（SLM），主打隐私保护与个性化角色定制。

## 功能与定位

PocketPal AI 将小语言模型部署到手机端运行，强调“离线可用 + 本地隐私”。根据 README 与入门文档，项目支持在应用内下载或导入模型、加载后直接对话，并提供推理参数调节、消息编辑重试、性能指标展示等能力。项目定位是“可在日常移动设备上使用和测试端侧模型”的应用型框架。

## 典型使用场景

- 无网络或弱网环境下进行本地 AI 对话。
- 需要将提示词与聊天内容保留在本机，不希望上传到外部服务。
- 在同一设备上对比不同 SLM 的速度与内存表现。
- 通过 Pals 功能创建不同角色或任务导向的助手模板。

## 特色与差异点

- 强调端侧隐私：默认处理在本地进行，仅用户主动提交反馈或分享测试结果时才会外发数据。
- Hugging Face 集成：支持在应用内检索与下载 GGUF 模型，并支持配置 Token 访问 gated 模型。
- 多设备覆盖：README 明确支持 iPhone、Android 与 iPad 场景。
- 可观测性较强：提供 tokens/s、ms/token 等实时指标，并内置 benchmark 流程。

## 使用方式概览

- 终端用户可通过 App Store 或 Google Play 安装。
- 首次使用通常是“选择模型并下载 -> 加载到内存 -> 进入聊天”。
- 需要访问受限模型时，可在应用设置中配置 Hugging Face Token。
- 对开发者而言，仓库基于 React Native 与 TypeScript，可用于扩展端侧模型交互能力。

## 限制与注意事项

- 文档标注了稳定性边界：项目为个人主导开发，可能在部分设备上存在兼容性问题。
- 入门文档注明部分内容已过时，需要结合 README 与最新 Release 信息交叉核对。
- 大模型在后台回前台自动重载时可能产生等待时间。
- 文本复制能力目前存在格式保留限制（尤其是 Markdown 场景）。

## 链接

- GitHub 仓库：https://github.com/a-ghorbani/pocketpal-ai
- App Store：https://apps.apple.com/us/app/pocketpal-ai/id6502579498
- Google Play：https://play.google.com/store/apps/details?id=com.pocketpalai
- 最新发布页：https://github.com/a-ghorbani/pocketpal-ai/releases
- AI Phone Leaderboard：https://huggingface.co/spaces/a-ghorbani/ai-phone-leaderboard

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/benchmark]]
- [[00-元语/typescript]]
