---
title: vision-agent：Agent 框架
对象: GitHub 仓库
项目主页: https://github.com/landing-ai/vision-agent
来源: landing-ai/vision-agent
开源协议: Apache-2.0
状态: 已弃用
---

## 摘要

VisionAgent 是 LandingAI 提供的视觉 Agent 框架，围绕“输入提示词与图像/视频，输出可执行视觉代码”构建了规划、编码与测试迭代流程。根据仓库公开信息，该项目当前已标记为弃用状态，适合作为视觉 Agent 架构与工具编排的参考实现，不宜作为长期新项目的主线依赖。

## 功能与定位

vision-agent 面向视觉任务的代码生成与执行场景，核心目标是把自然语言需求转换为可运行的视觉处理代码。项目提供 `VisionAgentV2`、`VisionAgentPlannerV2`、`VisionAgentCoderV2` 等组件，用于完成对话、规划和代码落地。

## 典型使用场景

- 图像中的目标检测、计数与分割。
- 视频帧提取与目标跟踪。
- 通过自定义工具扩展特定视觉流程，例如模板匹配或掩码相关任务。
- 在本地 Web 示例中进行人类在环调试与交互。

## 核心功能

- 多智能体分工流程：对话 Agent、规划 Agent、编码 Agent 分别承担不同阶段任务。
- 代码与测试联动：先生成代码，再运行测试并在失败时迭代修正。
- 工具库可复用：内置视觉工具既可由 Agent 调用，也可在外部脚本直接调用。
- 支持 Human-in-the-loop：在规划过程中接受人工反馈后继续执行。

## 特色与差异点

- 以视觉任务为中心，把模型选择与代码生成合并到同一工作流。
- 既支持端到端 Prompt 调用，也支持按工具函数拆分使用。
- 提供本地示例应用，便于快速验证流程与调试交互。

## 使用方式概览

- 安装：支持 `pip install vision-agent` 或 `uv add vision-agent`。
- 运行前准备：需要 Python 3.9+ 环境与对应 API Key 配置。
- 入口方式：可直接调用 `VisionAgentCoderV2` 生成代码，也可运行 `examples/chat` 中的示例应用。
- 扩展方式：通过 `register_tool` 机制注册自定义工具并接入现有流程。

## 限制与注意事项

- 项目状态为已弃用，后续维护与演进存在不确定性。
- 运行流程依赖外部模型与相关 API 配置，部署与成本受上游服务影响。
- Human-in-the-loop 与自定义工具流程涉及额外工程约束，需要先在 PoC 中验证稳定性后再进入生产。

## 链接

- https://github.com/landing-ai/vision-agent
- https://landing-ai.github.io/vision-agent/
- https://landing.ai/blog/visionagent-an-agentic-approach-for-complex-visual-reasoning
- https://va.landing.ai/home

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/multimodal]]
