---
title: ai-toolkit：模型项目
对象: GitHub 仓库
项目主页: https://github.com/ostris/ai-toolkit
开源协议: MIT
来源:
  - https://github.com/ostris/ai-toolkit
  - https://github.com/ostris/ai-toolkit/blob/main/README.md
  - https://github.com/ostris/ai-toolkit/blob/main/FAQ.md
  - https://github.com/ostris/ai-toolkit/blob/main/dgx_instructions.md
  - https://github.com/ostris/ai-toolkit/blob/main/LICENSE
---

## 摘要

ai-toolkit 是一个开源扩散模型训练套件，支持在消费级 GPU 或云端环境中通过 CLI 与可视化界面完成多类图像和视频模型微调任务。

- 支持 FLUX、Wan I2V、OmniGen2、Qwen Image、SDXL、SD 1.5、Lumina 等多类模型方向。
- 支持 LoRA、LoKr 与全量微调，并提供按层筛选训练范围的能力。
- 提供本地 UI 与命令行两种入口，UI 支持访问令牌保护。
- 提供 RunPod、Modal 与 DGX OS 等环境的部署与运行说明。
- 代码采用 MIT 协议，但部分上游模型存在单独许可边界，需要按模型逐项核对。

## 功能与定位

ai-toolkit 定位为扩散模型训练套件，面向希望在单机或云端执行模型微调的开发者与创作者。项目提供 GUI 与 CLI 双入口，目标是在相对有限的硬件条件下支持较新的图像与视频模型训练任务。

## 典型使用场景

- 在本地工作站上做 LoRA 训练与迭代。
- 在 RunPod、Modal 等云算力环境运行训练任务。
- 在 DGX OS 环境部署训练流程。
- 基于已有数据集做模型风格微调或指令数据集训练。

## 核心功能

- 支持多类模型训练配置，仓库内提供多组示例配置文件。
- 支持 LoRA、LoKr、全量微调等训练方式。
- 支持通过参数筛选或排除特定网络层进行训练。
- 提供 Web UI，用于启动、监控与管理训练任务。
- 支持数据集图像与同名文本的配对训练模式。

## 特色与差异点

- 兼顾消费级硬件可用性与较完整的训练功能。
- 同时覆盖本地与云端训练场景，降低环境迁移成本。
- 配置样例覆盖面较广，包含 FLUX、Wan、OmniGen2、Qwen Image、Lumina、SD 系列等方向。
- 明确提供 UI 访问令牌机制，适合在对外网络环境下做基础访问控制。

## 使用方式概览

- 先准备 Python 虚拟环境与 GPU 运行环境，再按仓库依赖完成安装。
- 根据目标模型选择对应示例配置并调整训练参数。
- 可通过 CLI 发起任务，也可通过 UI 做任务启动与状态查看。
- 需要云端或专用硬件时，可参考仓库中的 RunPod、Modal、DGX OS 指引迁移。

## 限制与注意事项

- FLUX.1 相关训练存在显存门槛，FAQ 与 README 均给出 24GB VRAM 的最低要求说明。
- 数据集格式当前以 jpg/jpeg/png 为主，README 明确提到 webp 兼容存在问题。
- 不同上游模型存在各自许可边界，例如 FLUX.1-dev 的非商业许可与访问前置要求，需要在使用前单独核对。
- 项目功能更新较快，具体能力以仓库 README 与配置样例为准。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/lora]]
- [[00-元语/multimodal]]

## 链接

- https://github.com/ostris/ai-toolkit
- https://github.com/ostris/ai-toolkit/blob/main/README.md
- https://github.com/ostris/ai-toolkit/blob/main/FAQ.md
- https://github.com/ostris/ai-toolkit/blob/main/dgx_instructions.md
- https://github.com/ostris/ai-toolkit/blob/main/LICENSE
