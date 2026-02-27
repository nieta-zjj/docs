---
title: LunaTranslator：视觉小说翻译器 - Visual Novel Transla 开发工具
对象: GitHub 仓库
项目主页: https://github.com/HIllya51/LunaTranslator
官网: https://lunatranslator.org/
最新版本: v10.15.6.1
开源协议: GPLv3
来源:
  - https://github.com/HIllya51/LunaTranslator
  - https://github.com/HIllya51/LunaTranslator/tree/main/docs
  - https://github.com/HIllya51/LunaTranslator/releases
---

## 摘要

LunaTranslator 是一款基于 GPLv3 协议开源的视觉小说与游戏文本提取、翻译工具，集成了 HOOK、OCR、多引擎翻译与语言学习辅助能力，面向 Windows 平台使用。

- 以游戏文本提取与翻译为主线，覆盖 HOOK、OCR 与内嵌翻译场景。
- 支持多类翻译接口与语音相关能力，并提供日语学习辅助组件。
- 官方文档给出 Windows 10/11 主线版本，同时提供旧版系统兼容包。
- 需要关注安全软件误报、管理员权限和性能开销等使用边界。

## 功能与定位

LunaTranslator 的定位是“面向视觉小说与游戏文本的翻译辅助工具”。它通过进程文本提取与图像识别两条路径获取文本，再调用在线或离线翻译引擎输出译文，并提供语言学习相关辅助能力。

## 典型使用场景

- 游玩未汉化或需即时理解文本的视觉小说与相关游戏。
- 在模拟器环境中读取文本并进行实时翻译。
- 对无法直接提取文本的画面使用 OCR 识别翻译。
- 将游戏阅读与日语学习流程结合使用。

## 核心功能

- HOOK 文本提取与部分游戏的内嵌翻译显示。
- 模拟器文本读取支持（文档列出 NS、PSP、PSV、PS2 等场景）。
- OCR 识别与多 OCR 引擎接入能力。
- 多翻译引擎接入，包含大语言模型翻译与离线翻译路径。
- 日语分词、假名注音、AnkiConnect、Yomitan 等学习辅助能力。
- 语音合成与 Windows 语音识别相关能力。

## 特色与差异点

- 功能覆盖从文本获取、翻译到学习辅助的一体化链路。
- 文档展示了较强的兼容与配置能力，包括通用设置与游戏专用设置。
- 发布页持续提供多个 Windows 构建包与校验信息，便于版本选择与核验。

## 使用方式概览

- HOOK 模式：选择游戏进程后进行文本行选择并翻译。
- OCR 模式：框选区域后持续识别并翻译图像文本。
- 运行模式：提供普通模式、管理员模式和调试模式。

## 限制与注意事项

- 官方文档提示：该类文本提取机制可能触发安全软件误报并影响组件可用性。
- 部分游戏场景需要管理员权限才能正常工作。
- 文档提示避免安装到 `C:\Program Files` 等特殊路径。
- 高级配置不当可能带来性能影响。
- 本仓库只记录工具定位与使用边界，不复述注入配置、特殊码等可操作细节。

## 链接

1. https://github.com/HIllya51/LunaTranslator
2. https://lunatranslator.org/
3. https://github.com/HIllya51/LunaTranslator/tree/main/docs
4. https://github.com/HIllya51/LunaTranslator/blob/main/docs/zh/index.md
5. https://github.com/HIllya51/LunaTranslator/blob/main/docs/zh/README.md
6. https://github.com/HIllya51/LunaTranslator/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/ocr]]
- [[00-元语/tts]]
- [[00-元语/windows]]
