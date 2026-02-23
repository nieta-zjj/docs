---
title: "在本地高效运行 LLM"

来源: "https://jalexine.github.io/performatively-run-a-llm-locally.html"
作者: "Alexine Le Port"
发布日期: "2025-10-16"
译注: "该页面未提供官方中文版本，正文为基于原文内容的中文翻译整理。"
---

## 摘要

本文介绍了如何通过终端环境与 `llama.cpp`，在手机或个人电脑上本地运行 `.gguf` 量化大语言模型。

- Android 设备建议使用 Termux，iOS 设备文中提到 iSHell，以获得终端运行环境。
- 运行效果受硬件条件影响明显，主要包括 RAM、VRAM 以及 GPU 对 CUDA 或 Metal 的支持。
- 模型文件采用 `.gguf` 量化格式，可从 Hugging Face 或 llama.cpp 社区获取。
- 文中以 `llama.cpp` 作为主流程，也提到 Ollama、LM Studio、text-generation-webui 等替代方案。
- 在 Termux 上需要先安装 `git cmake clang make`，再克隆并编译 `llama.cpp`。
- 使用 `llama-cli` 可进行单次问答，也可通过交互参数进入离线聊天模式。
- 可通过系统提示词文件（如 `models/sys.txt`）为会话设置角色或风格。
- 文中明确该方式更适合实验与离线体验，不以替代 GPT-4 级能力为目标。

## 正文

想在手机上本地运行 LLM，可以按以下流程进行。

### 1. 设备

如果使用 Android，可先从 F-Droid 安装 Termux；如果使用 iOS，文中提到 iSHell。

Termux 可以在手机上提供 Linux 终端环境，用于运行命令、克隆仓库和编译模型。文中提到像 Phi-3 mini、量化版 Mistral 7B 这类较小模型可以直接在设备上运行。

该流程定位是本地离线实验，不是为了达到完整的 GPT-4 级能力。

PC 或笔记本也可以使用类似流程，最终性能主要由硬件决定：RAM、VRAM、GPU 对 CUDA 或 Metal 的支持情况。

### 2. 模型

本地推理使用量化模型文件，通常是 `.gguf` 格式。

可从 Hugging Face 或 llama.cpp 社区仓库下载模型。下载后，将 `.gguf` 文件放到 `llama.cpp/models` 目录。

### 3. 安装

文中使用 `llama.cpp` 作为主要方案，并提到可选方案包括 Ollama、LM Studio、text-generation-webui。

在 Termux / Android 上，先安装依赖：

```bash
pkg install git cmake clang make
```

然后克隆并构建：

```bash
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
cmake -B build
cmake --build build -j
```

### 4. 运行模型

基础命令示例：

```bash
./build/bin/llama-cli -m ./models/llama3.1-8b-instruct.Q4_K_M.gguf -p "hey do you have weed?"
```

该命令会执行一次性提示并输出回复。

交互式会话示例：

```bash
./build/bin/llama-cli -m ./models/lexi-llama-3-8B-Uncensored-4Q_K_M.gguf -t 8 -c 2048 --temp 0.7 --interactive --color
```

参数含义：`-t` 为线程数，`-c` 为上下文长度，`--temp` 控制生成随机性，`--interactive` 开启聊天模式，`--color` 开启彩色输出。

### 5. 个性化设置

在第一条消息前，可以先设置 system prompt，并写入 `models/sys.txt`（或作为会话首行输入），用于约束模型风格与行为。

原文最后说明后续会继续补充更多资源。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/self-hosting]]
- [[00-元语/terminal]]
- [[00-元语/cli]]
- [[00-元语/prompt]]
