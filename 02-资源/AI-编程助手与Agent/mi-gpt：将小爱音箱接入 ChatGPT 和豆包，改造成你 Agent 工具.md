---
title: "mi-gpt：将小爱音箱接入 ChatGPT 和豆包，改造成你 Agent 工具"
对象: "GitHub 仓库"
仓库链接: "https://github.com/idootop/mi-gpt"
项目主页: "https://github.com/idootop/mi-gpt"
开源协议: "MIT"
项目状态: "README 明确标注该仓库已停止维护，并建议迁移到 MiGPT-Next"
---

## 摘要

MiGPT 是一个把小爱音箱接入 ChatGPT 及 OpenAI 兼容模型生态的开源工具，也支持接入豆包相关语音能力与第三方 TTS，从而把传统语音音箱扩展为可配置的 Agent 交互入口。项目以 Docker 与 Node.js 两种部署方式提供落地路径，强调低改造成本与家庭场景可用性。需要注意的是，仓库 README 已明确该项目停止维护，官方建议迁移到 MiGPT-Next。

## 功能与定位

MiGPT 的定位是“基于小米 IoT 开放接口的语音助手增强项目”：在不刷机的前提下，把小爱音箱接入大模型问答、角色化对话、记忆与语音合成能力。

它主要面向两类用户：
- 已有小爱音箱、希望扩展 AI 能力的个人用户
- 需要验证“家庭语音入口 + Agent 能力”可行性的开发者

## 核心功能

- 支持将小爱音箱与 ChatGPT 及 OpenAI 兼容接口模型对接
- 支持角色设定与系统 Prompt 定制
- 支持长短期记忆与连续对话模式（受设备型号影响）
- 支持第三方 TTS 与音色切换（包含豆包相关语音接入场景）
- 支持 Docker 运行与 Node.js 集成两种使用路径

## 典型使用场景

- 家庭语音问答升级：把“小爱同学”从固定问答扩展为大模型问答
- 角色化陪伴交互：按人设配置语音助手的表达风格
- 智能家居语音中控：把音箱作为多设备交互入口，承载 Agent 式编排
- 原型验证：快速验证 IoT 设备接入 LLM 与 TTS 的产品思路

## 特色与差异点

- 非刷机路径：通过 MIoT / MiNA 接口与轮询机制实现接入，门槛较低
- 模型与语音能力解耦：可替换模型服务与 TTS 服务，便于按地区和成本调整
- 社区验证的机型经验：文档给出了不同小爱型号的兼容状态与已知限制
- 明确迁移方向：README 直接给出 MiGPT-Next 与 Open-XiaoAI 的后续建议

## 使用方式概览

- 通过 Docker 部署，或在 Node.js 环境中以 npm 包方式集成
- 运行前需准备模型服务与设备相关配置（如账号、设备标识、模型与语音参数）
- 交互上支持“单次唤醒问答”与“进入连续对话模式”两类方式

## 限制与注意事项

- 项目维护状态：该仓库已停止维护，新增需求与长期稳定性应优先评估 MiGPT-Next
- 兼容性限制：不同小爱机型支持度不同，连续对话与播放状态检测并非全机型可用
- 账号与平台风险：使用中可能遇到账号安全验证、设备控制延迟等问题
- 合规边界：本仓库仅记录项目定位与能力边界，不复述绕过风控、导出凭证等可操作细节
- 官方免责声明指出该项目用于学习研究，使用风险需自行评估与承担

## 链接

- 仓库：https://github.com/idootop/mi-gpt
- README：https://github.com/idootop/mi-gpt/blob/main/README.md
- 兼容性文档：https://github.com/idootop/mi-gpt/blob/main/docs/compatibility.md
- 工作原理：https://github.com/idootop/mi-gpt/blob/main/docs/how-it-works.md
- 常见问题：https://github.com/idootop/mi-gpt/blob/main/docs/faq.md
- 更新日志：https://github.com/idootop/mi-gpt/blob/main/docs/changelog.md
- 后续项目 MiGPT-Next：https://github.com/idootop/migpt-next

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/tts]]
- [[00-元语/workflow]]
