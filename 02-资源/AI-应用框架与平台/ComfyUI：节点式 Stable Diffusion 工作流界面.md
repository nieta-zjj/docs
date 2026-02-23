---
title: "ComfyUI：节点式 Stable Diffusion 工作流界面"

发布日期: "2026-02-22"
对象: "GitHub 项目 `comfyanonymous/ComfyUI`"
项目主页: "https://github.com/comfyanonymous/ComfyUI"
官方网站: "https://www.comfy.org/"
开源协议: "GPL-3.0"
主要语言: "Python"
统计快照: "Stars 103843，Forks 11862，Watchers 668（抓取时间：2026-02-22）"
版本快照: "最新 release `v0.14.2`，发布时间 `2026-02-18`"
备注: "用户提供“26367”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

**1) 一句话总结**
ComfyUI 是一个基于 Python 开发的、高度模块化的节点式视觉 AI 引擎与图形界面，支持零代码搭建并执行涵盖图像、视频、音频及 3D 生成的复杂扩散模型工作流。

**2) 核心要点**
* **项目数据与架构**：采用 GPL-3.0 开源协议，GitHub Stars 超 10 万（最新版本 v0.14.2）；架构分为 Core、Desktop 和 Frontend，遵循每周一的发布周期。
* **广泛的模型支持**：全面兼容 SD 系列、Flux、Hunyuan、Wan 等主流图像与视频模型，同时支持 Stable Audio 和 Hunyuan3D 等音频与 3D 模型。
* **零代码节点化操作**：提供基于流程图的交互界面，用户可通过节点连线搭建高清修复、局部重绘、区域合成及模型融合等高级工作流。
* **极致的性能优化**：具备智能内存管理（最低支持在 1GB 显存的 GPU 上运行大型模型）和按需执行机制（仅重新运行发生更改的节点），内置异步队列。
* **工作流状态复用**：支持将工作流保存为 JSON，或直接从生成的 PNG、WebP 和 FLAC 文件中无缝读取包含种子的完整工作流。
* **全平台与硬件兼容**：支持 Windows、Linux 和 macOS，兼容 NVIDIA、AMD、Intel、Apple Silicon、Ascend 等多种 GPU，亦支持纯 CPU 运行。
* **丰富的扩展与共享**：支持安全加载 safetensors 等格式文件及 ControlNet、LoRA 等扩展，可通过 `extra_model_paths.yaml` 自定义路径以共享庞大的模型文件。
* **完全离线与灵活部署**：核心组件默认完全离线运行；提供桌面应用、Windows 免配置便携版、命令行（`comfy-cli`）及手动安装等多种部署方式。

**3) 风险与不足**
* **环境兼容性风险**：在 Python 3.14 环境下，部分自定义节点（custom nodes）可能会出现问题（官方推荐使用 Python 3.13 及 PyTorch 2.4+）。
* **版本稳定性风险**：稳定发布标签（Stable release tags）之外的最新提交（commits）可能非常不稳定，并有可能导致许多自定义节点失效。
* **性能限制**：虽然支持纯 CPU 运行，但在此模式下生成速度会非常慢。

## 功能与定位

ComfyUI 是一个强大且高度模块化的视觉 AI 引擎和应用程序。它提供了一个基于图/节点/流程图的交互界面，可作为图形用户界面（GUI）、API 和后端使用，专门用于设计和执行高级的 Stable Diffusion 工作流。

## 典型使用场景

- **零代码工作流搭建**：无需编写任何代码，即可通过节点连线的方式实验和创建复杂的 Stable Diffusion 生成流程。
- **多模态内容生成与编辑**：涵盖图像生成、图像编辑、视频生成、音频生成以及 3D 模型生成。
- **高级图像处理**：适用于执行高清修复（Hires fix）、区域合成（Area Composition）、局部重绘（Inpainting）以及模型融合等复杂任务。

## 核心功能

- **广泛的模型支持**：
  - **图像模型**：支持 SD1.x, SD2.x, SDXL, SDXL Turbo, Stable Cascade, SD3/3.5, Pixart, AuraFlow, HunyuanDiT, Flux, Lumina 2.0, HiDream, Qwen Image, Hunyuan Image 2.1, Z Image 等。
  - **图像编辑模型**：支持 Omnigen 2, Flux Kontext, HiDream E1.1, Qwen Image Edit。
  - **视频模型**：支持 Stable Video Diffusion (SVD), Mochi, LTX-Video, Hunyuan Video (含1.5), Wan 2.1/2.2。
  - **音频与 3D 模型**：支持 Stable Audio, ACE Step 以及 Hunyuan3D 2.0。
- **工作流状态管理**：
  - 支持将工作流保存或加载为 JSON 文件。
  - 能够直接从生成的 PNG、WebP 和 FLAC 文件中读取并加载完整的工作流（包含种子信息）。
- **性能与执行优化**：
  - **智能内存管理**：通过智能卸载技术，可在显存低至 1GB 的 GPU 上自动运行大型模型。
  - **按需执行**：在多次执行之间，系统仅会重新运行工作流中发生更改的部分。
  - 内置异步队列系统。
- **丰富的扩展支持**：
  - 安全加载 ckpt、safetensors、pt、pth 等格式文件（支持独立的扩散模型、VAE 和 CLIP 模型）。
  - 支持 Embeddings/Textual inversion、Loras（常规、locon、loha）、Hypernetworks。
  - 支持 ControlNet、T2I-Adapter、GLIGEN 以及多种放大模型（ESRGAN 及其变体、SwinIR 等）。
  - 提供 TAESD 潜在空间预览（Latent previews）。

## 特色与差异点

- **完全离线运行**：核心组件默认完全离线工作，除非用户主动操作，否则不会下载任何内容。
- **跨平台与全硬件兼容**：支持 Windows、Linux 和 macOS；兼容 NVIDIA、AMD、Intel、Apple Silicon 和 Ascend 等多种 GPU，同时也支持纯 CPU 运行（使用 `--cpu` 参数）。
- **模型文件共享**：提供配置文件（`extra_model_paths.yaml`），允许用户自定义模型搜索路径，从而轻松与其他 UI 共享庞大的模型文件。
- **模块化架构与发布机制**：项目分为 Core（核心库）、Desktop（桌面版）和 Frontend（前端），遵循每周（通常是周一）的发布周期。

## 使用方式概览

- **桌面应用程序**：提供 Windows 和 macOS 版本，是最简单的入门方式。
- **Windows 便携版**：提供独立的压缩包（包含针对 Nvidia、AMD 或纯 CPU 的版本），解压后即可运行，无需复杂配置。
- **命令行安装**：可通过 `comfy-cli` 工具进行安装（执行 `pip install comfy-cli` 后运行 `comfy install`）。
- **手动安装**：支持克隆仓库并手动配置环境，适用于 Windows 和 Linux。
- **快捷键交互**：内置丰富的快捷键系统（如 `Ctrl+Enter` 将当前图加入生成队列，`Ctrl+S` 保存工作流，`Ctrl+B` 旁路节点等），大幅提升操作效率。

## 限制与注意事项

- **环境兼容性**：对 Python 3.13 支持极佳；Python 3.14 虽然可用，但部分自定义节点（custom nodes）可能会出现问题（如遇到依赖问题可回退至 3.12）。推荐使用 PyTorch 2.4 及以上版本。
- **版本稳定性风险**：在稳定发布标签（Stable release tags）之外的最新提交（commits）可能非常不稳定，并有可能导致许多自定义节点失效。
- **纯 CPU 运行性能**：虽然支持在没有 GPU 的情况下运行，但生成速度会非常慢。
- **外部 API 节点**：包含可选的 API 节点以调用外部提供商的付费模型，如果不需要，可通过 `--disable-api-nodes` 参数禁用。

## 链接

- https://github.com/Comfy-Org/ComfyUI
- https://www.comfy.org/
- https://github.com/Comfy-Org/ComfyUI/releases
- https://comfyanonymous.github.io/ComfyUI_examples/

## 关联主题

- [[00-元语/AI]]
- [[00-元语/workflow]]
- [[00-元语/multimodal]]
- [[00-元语/image-editing]]
- [[00-元语/video]]
- [[00-元语/audio]]
- [[00-元语/lora]]
- [[00-元语/desktop-client]]
- [[00-元语/cli]]
- [[00-元语/self-hosting]]
