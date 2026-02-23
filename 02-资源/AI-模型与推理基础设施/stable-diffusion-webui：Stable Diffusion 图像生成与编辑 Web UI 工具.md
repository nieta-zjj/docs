---
title: "stable-diffusion-webui：Stable Diffusion 图像生成与编辑 Web UI 工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `AUTOMATIC1111/stable-diffusion-webui`"
项目主页: "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Python"
统计快照: "Stars 160743，Forks 29984，Watchers 1162（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.10.1（发布时间：2025-02-09T08:00:10Z）"
---

## 摘要

### 一句话总结
AUTOMATIC1111/stable-diffusion-webui 是一个基于 Python 和 Gradio 库构建的开源 Stable Diffusion 网页端界面，提供全面的图像生成、编辑及丰富的社区扩展支持。

### 核心要点
*   **项目概况**：采用 Python 编写，基于 AGPL v3.0 协议开源，在 GitHub 拥有超 16 万 Stars，最新发布版本为 v1.10.1。
*   **核心功能**：支持文生图（txt2img）、图生图（img2img）、局部重绘（Inpainting）、画面扩充（Outpainting）以及多种图像放大与面部修复算法（如 GFPGAN、CodeFormer、ESRGAN 等）。
*   **提示词工程**：突破了原生 75 个 Token 的限制，支持提示词权重调整（如 `(tuxedo:1.21)`）、反向提示词（Negative prompt）以及多提示词组合（Composable-Diffusion）。
*   **模型与格式支持**：支持 Stable Diffusion 2.0、Alt-Diffusion、Segmind SSD-1B 等模型，兼容更安全的 Safetensors 格式，并原生支持 Textual Inversion、Hypernetworks 和 LoRAs 等微调模型。
*   **硬件与性能优化**：广泛支持 NVidia（推荐）、AMD、Intel、Apple Silicon 及 Ascend NPU；最低支持在 4GB 显存下运行；支持通过添加 `--xformers` 参数大幅提升特定显卡的生成速度。
*   **工作流与易用性**：自动将生成参数保存在图像元数据中（PNG chunks 或 JPEG EXIF），支持拖拽读取参数；提供 X/Y/Z 参数矩阵图生成功能，并允许通过自定义脚本和社区扩展增强功能。
*   **部署要求**：提供 Windows 和 Linux 的自动化安装脚本，基础依赖为 Git 和 Python。

### 风险与不足
*   **环境兼容性限制**：官方在安装指南中明确指出，较新版本的 Python 不支持 Torch，Windows 用户在进行自动化安装时必须使用 Python 3.10.6 版本。

## 功能与定位

Stable Diffusion web UI

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:31:26Z。
- 项目创建于 2022-08-22T14:05:26Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/AUTOMATIC1111/stable-diffusion-webui
- README：https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/README.md
- Releases：https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/image-editing]]
- [[00-元语/lora]]
- [[00-元语/prompt]]
- [[00-元语/self-hosting]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
