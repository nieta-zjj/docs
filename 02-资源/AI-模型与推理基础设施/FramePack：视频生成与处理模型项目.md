---
title: "FramePack：视频生成与处理模型项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `lllyasviel/FramePack`"
项目主页: "https://github.com/lllyasviel/FramePack"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 16634，Forks 1645，Watchers 137（抓取时间：2026-02-22）"
版本快照: "最新发布 windows（发布时间：2025-04-18T03:22:59Z）"
---

## 摘要

**1) 一句话总结**
FramePack 是一个基于下一帧预测和上下文打包技术的视频扩散模型桌面软件，能够在仅需 6GB 显存的普通笔记本 GPU 上运行 13B 模型，实现渐进式的长视频生成。

**2) 关键点**
* **核心技术**：采用下一帧（或帧片段）预测架构，将输入上下文压缩为固定长度，使生成工作量不受视频总长度的影响。
* **极低显存要求**：最低仅需 6GB 显存（支持笔记本 GPU），即可使用 13B 模型生成 1 分钟（30fps，共 1800 帧）的视频。
* **生成速度与反馈**：在 RTX 4090 桌面显卡上，未优化速度为 2.5 秒/帧，开启 teacache 后为 1.5 秒/帧；由于采用渐进式生成，用户在完整视频生成前即可获得大量实时视觉反馈。
* **硬件与系统支持**：支持 Windows 和 Linux 系统；需配备支持 fp16 和 bf16 的 Nvidia RTX 30XX、40XX 或 50XX 系列显卡。
* **便捷安装**：Windows 提供一键安装包（内置 CUDA 12.6 和 PyTorch 2.6）；首次运行会自动从 HuggingFace 下载超过 30GB 的模型文件。
* **注意力机制兼容**：默认使用 PyTorch attention，同时支持 xformers、flash-attn 和 sage-attention（官方建议先使用默认设置，因为第三方内核会轻微影响生成结果）。
* **版本演进**：目前已发布 FramePack-F1，并正在测试包含“计划防漂移（Planned Anti-Drifting）”和“历史离散化（History Discretization）”设计的下一代版本 FramePack-P1。
* **开源与热度**：项目基于 Python 开发，采用 Apache License 2.0 开源协议，在 GitHub 上已获得超过 1.6 万 Stars。

**3) 风险/不足**
* **虚假网站诈骗风险**：官方明确声明 GitHub 仓库是唯一的官方主页，并列举了大量假冒网站（如 framepack.co、framepack.ai 等），警告用户切勿在其他网站付费或下载文件。
* **硬件与噪声敏感性**：下一帧预测模型对噪声和硬件的微小差异非常敏感，不同设备上生成的结果可能会有轻微差异，官方建议使用前先进行基准测试（Sanity Check）。
* **旧硬件未测试**：官方明确表示未对 GTX 10XX 和 20XX 系列显卡进行测试，可能存在兼容性或运行问题。

## 功能与定位

Lets make video diffusion practical!

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T04:10:42Z。
- 项目创建于 2025-04-12T14:45:22Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/lllyasviel/FramePack
- README：https://raw.githubusercontent.com/lllyasviel/FramePack/main/README.md
- Releases：https://github.com/lllyasviel/FramePack/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/video]]
- [[00-元语/multimodal]]
- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/risk]]
- [[00-元语/windows]]
