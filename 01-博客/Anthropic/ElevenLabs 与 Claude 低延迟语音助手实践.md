---
title: "ElevenLabs 与 Claude 低延迟语音助手实践"

发布日期: "2025-11-01"
作者: "Anthropic"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/blob/main/third_party/ElevenLabs/README.md"
译注: "原文为英文仓库文档，本稿为中文整理版。"
---

## 摘要

**1) 一句话摘要**
本指南演示了如何结合 ElevenLabs 的语音处理（STT/TTS）与 Claude 的智能回复，通过 WebSocket 流式传输技术构建并优化一个低延迟的实时语音助手。

**2) 核心要点**
* **核心组件**：提供了一个用于学习延迟优化技术的交互式 Notebook，以及一个支持连续对话和无缝播放的生产就绪级 WebSocket 流式传输脚本。
* **API 权限要求**：必须配置 Anthropic 和 ElevenLabs 的 API 密钥，其中 ElevenLabs 密钥需明确授予文本转语音、语音转文本以及语音和模型的读取权限。
* **技术实现**：生产脚本使用 `sounddevice` 库进行实时麦克风录音，并采用自定义音频队列来管理音频的无缝播放。
* **延迟优化**：指南明确指出，相较于其他方法，WebSocket 流式传输能提供延迟与质量的最佳平衡，并显著降低首个 token 的生成时间 (TTFT)。
* **环境依赖**：除了 Python 包，系统底层必须安装 PortAudio 和 FFmpeg 才能正常处理和播放音频。
* **应用场景**：该架构可扩展用于构建会议记录员、语言学习导师、免提编程助手和语音激活智能家居等项目。

**3) 风险与不足**
* **音频爆音问题**：ElevenLabs 免费套餐强制使用 MP3 格式，在实时分块流式传输时，FFmpeg 偶尔会因解码不完整帧而导致音频出现短暂的爆音或噼啪声（需升级付费套餐并改用 `pcm_44100` 格式才能彻底消除）。
* **系统权限拦截**：如果未在操作系统（macOS/Windows/Linux）的隐私设置中明确授予终端或 Python 麦克风访问权限，会导致录音报错（如 `Errno -9999`）。
* **网络与连接中断**：WebSocket 流式传输可能会因防火墙拦截（443 端口）、VPN 干扰或超出 API 速率限制而导致连接失败或超时。

## 正文

# ElevenLabs <> Claude Cookbooks

[ElevenLabs](https://elevenlabs.io/) 提供由 AI 驱动的语音转文本 (speech-to-text) 和文本转语音 (text-to-speech) API，用于创建声音自然的语音应用程序，并具备语音克隆和流式合成等高级功能。

本指南演示了如何通过将 ElevenLabs 的语音处理与 Claude 的智能回复相结合，构建一个低延迟的语音助手，并逐步针对实时性能进行优化。

## 包含内容

* **低延迟语音助手 Notebook（`./low_latency_stt_claude_tts.ipynb`）** - 一个交互式教程，逐步引导您构建语音助手，演示各种优化技术，通过流式传输 (streaming) 最大限度地降低延迟。

* **WebSocket 流式传输脚本（`./stream_voice_assistant_websocket.py`）** - 一个生产就绪的对话式语音助手，具有连续麦克风输入、无缝音频播放功能，并使用 WebSocket 流式传输实现尽可能低的延迟。

## 如何使用本指南

我们建议按照以下顺序进行操作，以充分利用本指南：

### 第 1 步：设置您的环境

1. **创建虚拟环境：**
   ```bash
   # 导航到 ElevenLabs 目录
   cd /path/to/claude-cookbooks/third_party/ElevenLabs

   # 创建虚拟环境
   python -m venv venv

   # 激活它
   source venv/bin/activate  # 在 macOS/Linux 上
   # 或者
   venv\Scripts\activate     # 在 Windows 上
   ```

2. **获取您的 API 密钥：**
   - **ElevenLabs API 密钥：** [elevenlabs.io/app/developers/api-keys](https://elevenlabs.io/app/developers/api-keys)

     创建 API 密钥时，请确保其具有以下最低权限：
     - Text to speech (文本转语音)
     - Speech to text (语音转文本)
     - Read access on voices (语音读取权限)
     - Read access on models (模型读取权限)

   - **Anthropic API 密钥：** [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)

3. **配置您的环境：**
   ```bash
   cp .env.example .env
   ```

   编辑 `.env` 文件并添加您的 API 密钥：
   ```
   ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
   ANTHROPIC_API_KEY=sk-ant-api03-...
   ```

4. **安装依赖项：**
   ```bash
   # 在激活 venv 的情况下
   pip install -r requirements.txt
   ```

### 第 2 步：学习 Notebook

从 **低延迟语音助手 Notebook（`./low_latency_stt_claude_tts.ipynb`）** 开始。这个交互式指南将教您：

- 如何使用 ElevenLabs 进行语音转文本转录
- 如何生成 Claude 回复并测量延迟
- 流式传输如何减少首个 token 的生成时间 (time-to-first-token)
- 如何流式传输文本转语音以实现更快的音频播放
- 不同流式传输方法之间的权衡
- 为什么 WebSocket 流式传输能提供延迟和质量的最佳平衡

该 Notebook 包含每个步骤的性能指标和比较，帮助您了解每项优化的影响。

### 第 3 步：尝试生产脚本

在理解了 Notebook 中的概念之后，运行 **WebSocket 流式传输脚本（`./stream_voice_assistant_websocket.py`）** 来体验一个功能齐全的语音助手：

```bash
python stream_voice_assistant_websocket.py
```

**工作原理：**
1. 按 Enter 键开始录音
2. 对着麦克风说出您的问题
3. 按 Enter 键停止录音
4. 助手将以自然的语音进行回复
5. 重复上述步骤，或按 Ctrl+C 退出

该脚本演示了以下功能的生产就绪实现：
- 使用 sounddevice 进行实时麦克风录音
- 保留上下文的连续对话
- 基于 WebSocket 的流式传输，实现极低延迟
- 用于无缝播放的自定义音频队列

## 故障排除

### 音频爆音或噼啪声

**症状：** 在播放过程中，您可能会偶尔听到短暂的爆音、咔哒声或音频丢失。

**原因解释：**

发生这种情况是因为脚本使用了 MP3 格式的音频，这是 ElevenLabs 免费套餐所要求的。在实时分块流式传输 MP3 数据时，FFmpeg 偶尔会收到无法解码的不完整帧。这通常发生在：
- 流式传输开始时（第一个数据块可能太小）
- 短暂的网络延迟期间
- 音频生成结束时（最后一个数据块可能不完整）

脚本会自动通过跳过这些失败的数据块来处理它们（在音频解码逻辑中使用 try-except 模式），这可以防止控制台中出现错误，但可能会导致短暂的音频间隙，表现为爆音或咔哒声。

**影响：**
- 音频播放继续正常进行
- 短暂的爆音或咔哒声通常难以察觉或很轻微
- WebSocket 连接保持稳定
- 不会丢失任何功能

**解决方案：**

这是在免费套餐上使用 MP3 格式时的预期行为。如果您想完全消除音频爆音：
1. 升级到 ElevenLabs 付费套餐
2. 修改脚本以使用 `pcm_44100` 格式代替 MP3
3. PCM 格式提供更纯净的流式传输，没有解码问题

### API 密钥问题

**症状：** `AssertionError: ELEVENLABS_API_KEY is not set` 或 `AssertionError: ANTHROPIC_API_KEY is not set`

**解决方案：**
1. 确认您已将 `.env.example` 复制为 `.env`：`cp .env.example .env`
2. 编辑 `.env` 并确保两个 API 密钥均已正确设置
3. 检查您的 API 密钥中是否有拼写错误或多余的空格
4. 确认您的 ElevenLabs 密钥具有所需的权限（参见第 1 步）

### 依赖项问题

**症状：** 出现类似 `ImportError: PortAudio library not found` 的错误或音频播放失败

**解决方案：**

**macOS：**
```bash
brew install portaudio ffmpeg
```

**Ubuntu/Debian：**
```bash
sudo apt-get install portaudio19-dev ffmpeg
```

**Windows：**
- 从 [ffmpeg.org](https://ffmpeg.org/download.html) 安装 FFmpeg
- 将 FFmpeg 添加到您的系统 PATH 环境变量中
- 在 Windows 上，PortAudio 通常会随 sounddevice 自动安装

然后重新安装 Python 依赖项：
```bash
pip install -r requirements.txt
```

### 麦克风权限

**症状：** `OSError: [Errno -9999] Unanticipated host error` 或无法访问麦克风

**解决方案：**
- **macOS：** 转到“系统偏好设置” → “安全性与隐私” → “隐私” → “麦克风”，然后启用终端（或您的 Python IDE）
- **Windows：** 转到“设置” → “隐私” → “麦克风”，然后为 Python/终端启用麦克风访问权限
- **Linux：** 检查您的用户是否在 `audio` 组中：`sudo usermod -a -G audio $USER`（然后注销并重新登录）

测试您的麦克风设置：
```bash
python -c "import sounddevice as sd; print(sd.query_devices())"
```

### WebSocket 连接失败

**症状：** 连接错误、超时或流中断

**解决方案：**
1. 检查您的互联网连接是否稳定
2. 验证防火墙是否未阻止 WebSocket 连接（端口 443）
3. 尝试暂时禁用 VPN 或代理
4. 确保您没有超出 API 速率限制（请参阅 ElevenLabs 仪表板了解使用情况）

如果您继续遇到问题，请查看 [ElevenLabs 状态页面](https://status.elevenlabs.io/) 获取服务更新。

## 项目创意

一旦您熟悉了语音助手，这里有一些您可以构建的启发性项目：

- **会议记录员** - 实时记录和转录会议，然后使用 Claude 从对话中生成摘要、待办事项和关键要点。

- **语言学习导师** - 通过实时反馈练习任何语言的对话。Claude 可以纠正发音、建议更好的措辞，并根据您的技能水平调整难度。

- **互动讲故事者** - 创建“选择你自己的冒险”游戏，由 Claude 讲述故事并对您的口头选择做出回应，并为每个角色提供不同的声音。

- **免提编程助手** - 在双手不离开键盘的情况下，口头描述代码更改、错误或功能。非常适合小黄鸭调试法 (rubber duck debugging) 或单人结对编程。

- **语音激活智能家居** - 构建用于控制家庭设备的自然对话界面。可以询问复杂的问题，例如“现在够冷了吗，需要打开加热器吗？”，而不是简单的开/关命令。

- **个人语音日记** - 通过说出您的想法来记录每日日记。Claude 可以按主题组织条目、跟踪您随时间变化的情绪，并在您需要时调出相关的过去条目。

## 了解更多关于 ElevenLabs 的信息

以下是一些有助于加深您理解的有用资源：

- [ElevenLabs 平台](https://elevenlabs.io/) - 官方网站
- [API 文档](https://elevenlabs.io/docs/overview) - 完整的 API 参考
- [语音库](https://elevenlabs.io/voice-library) - 探索可用的声音
- [API 游乐场 (Playground)](https://elevenlabs.io/app/speech-synthesis/text-to-speech) - 交互式测试声音
- [Python SDK](https://github.com/elevenlabs/elevenlabs-python) - 官方 Python SDK

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/audio]]
- [[00-元语/asr]]
- [[00-元语/tts]]
- [[00-元语/stream-processing]]
