---
title: "Open-AutoGLM：开源手机端智能助理系统，自动规划并执行 Android、HarmonyOS 和 iOS 设备操作任务"

发布日期: "2026-02-22"
对象: "GitHub 项目 `zai-org/Open-AutoGLM`"
项目主页: "https://github.com/zai-org/Open-AutoGLM"
官方网站: "https://autoglm.z.ai/blog"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 23584，Forks 3726，Watchers 108（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

### 一句话总结
Open-AutoGLM 是一个基于视觉语言模型构建的开源手机端智能助理框架，能够通过自然语言指令自动规划并执行 Android、HarmonyOS 和 iOS 设备上的操作任务。

### 关键要点
* **核心工作流**：通过多模态模型感知手机屏幕内容，解析用户自然语言意图，并利用 ADB（Android）或 HDC（HarmonyOS）自动执行点击、滑动、输入等操作。
* **多平台支持**：原生支持 Android 7.0+ 和 HarmonyOS NEXT+ 设备，并提供专门的 iOS 环境配置指南（基于 WebDriverAgent）。
* **模型版本**：开源了针对中文优化的 `AutoGLM-Phone-9B` 和支持英文等场景的 `AutoGLM-Phone-9B-Multilingual` 模型。
* **部署方式**：支持使用 vLLM 或 SGLang 进行本地私有化部署，也支持直接调用智谱 BigModel 或 ModelScope 的第三方 API 服务。
* **应用兼容性**：目前已支持 50+ 款主流 Android 中文应用以及 60+ 款 HarmonyOS 原生和系统应用。
* **高级特性**：内置敏感操作确认机制，支持在登录或验证码场景下进行人工接管（Take_over），并支持通过 WiFi 进行远程设备调试与控制。
* **生态集成**：已完成与视觉驱动的开源 UI 自动化 SDK Midscene.js 的适配。
* **基础信息**：项目主要使用 Python 开发（建议 3.10+），采用 Apache License 2.0 开源协议，目前在 GitHub 拥有超 2.3 万 Stars。

### 风险与不足
* **合规限制**：官方明确声明本项目仅供研究和学习使用，严禁用于非法获取信息、干扰系统或任何违法活动。
* **敏感页面限制**：在遇到支付、密码、银行类等敏感页面时，系统截图会失败（黑屏），此时需要人工接管。
* **设备配置要求**：部分 Android 机型必须同时开启“USB 调试”和“USB 调试(安全设置)”才能正常执行点击操作；部分机型在设置开发者选项后需重启才能生效。
* **模型部署风险**：在测试模型部署时，如果输出的思维链（Think）长度很短或出现乱码，通常意味着模型部署失败，需重新检查配置和依赖。

## 功能与定位

An Open Phone Agent Model & Framework. Unlocking the AI Phone for Everyone

## 典型使用场景

- 用于智能体开发、编排与执行链路搭建。
- 适合 AI 编程助手与自动化协作流程建设。

## 核心功能

- 支持 Agent 工具调用、任务分解或上下文管理。
- 提供与开发环境协作的自动化能力。
- 强调可扩展、可观测与工程集成。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:39:06Z。
- 项目创建于 2025-12-08T09:23:44Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/zai-org/Open-AutoGLM
- 官网：https://autoglm.z.ai/blog
- README：https://raw.githubusercontent.com/zai-org/Open-AutoGLM/main/README.md
- Releases：https://github.com/zai-org/Open-AutoGLM/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/hardware-control]]
- [[00-元语/sdk]]
- [[00-元语/compliance]]
