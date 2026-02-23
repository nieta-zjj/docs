---
title: "Claude 第三方集成 Cookbook 语音与多模态应用"

发布日期: "2025-11-27"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/tree/main/third_party"
覆盖范围:
  - "`third_party/Deepgram/prerecorded_audio.ipynb`"
  - "`third_party/ElevenLabs/low_latency_stt_claude_tts.ipynb`"
  - "`third_party/LlamaIndex/Multi_Modal.ipynb`"
---

## 摘要

### 一句话摘要
本文档介绍了如何将 Claude 与 Deepgram、ElevenLabs 及 LlamaIndex 等第三方工具集成，以构建涵盖语音转录、低延迟语音助手和图文联合检索的实时多模态交互应用。

### 关键要点
*   **核心目标**：将 Claude 从离线文本问答扩展至实时交互流程，涵盖语音转文本（ASR）、文本推理（LLM）、语音合成（TTS）及图文联合检索。
*   **Deepgram 集成**：用于处理音频转录，并将文本无缝接入后续的问答流程。
*   **ElevenLabs 集成**：结合 Claude 构建低延迟的语音助手链路。
*   **LlamaIndex 集成**：提供 Multi-Modal 能力，补齐图像与文本的联合检索功能。
*   **模型配置示例**：代码示例展示了调用 `claude-haiku-4-5` 模型处理转录文本，并设定参数 `max_tokens=1000` 与 `temperature=0`。
*   **延迟监控建议**：在实时语音链路中，必须对 ASR、LLM、TTS 每一段的延迟进行单独监控。
*   **回退策略建议**：音频场景应用需明确制定回退策略（如降级为纯文本交互模式）。

### 风险与缺漏
*   **幻觉风险**：在进行多模态检索前若未做数据清洗，图文错配会导致模型产生幻觉。

## 正文

该分组聚焦语音与多模态链路：语音转文本、文本推理、语音合成，以及图文联合检索。核心价值是把 Claude 集成进实时交互流程，而不是停留在离线文本问答。

### 能力主线
- Deepgram：处理音频转录并进入后续问答流程。
- ElevenLabs：构建低延迟语音助手链路。
- LlamaIndex Multi-Modal：补齐图像与文本联合检索能力。

### 示例代码
```python
assert ELEVENLABS_API_KEY is not None
assert ANTHROPIC_API_KEY is not None

elevenlabs_client = elevenlabs.ElevenLabs(
    api_key=ELEVENLABS_API_KEY, base_url="https://api.elevenlabs.io"
)

anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

message = anthropic_client.messages.create(
    model="claude-haiku-4-5",
    max_tokens=1000,
    temperature=0,
    messages=[{"role": "user", "content": transcription.text}],
)
```

### 使用建议
- 实时语音链路要单独监控每一段延迟：ASR、LLM、TTS。
- 音频场景应明确回退策略，例如降级为文本模式。
- 多模态检索前先做数据清洗，避免图文错配导致幻觉。

## 相关文档

- [[01-博客/Anthropic/ElevenLabs 与 Claude 低延迟语音助手实践|ElevenLabs 与 Claude 低延迟语音助手实践]]；关联理由：引用；说明：本篇明确覆盖 ElevenLabs notebook，这篇文档是对应语音链路实现与排障细节的直接来源。
- [[01-博客/Anthropic/Deepgram 与 LlamaIndex 集成入口|Deepgram 与 LlamaIndex 集成入口]]；关联理由：引用；说明：本篇涉及 Deepgram 与 LlamaIndex 集成，这篇文档提供对应入口与能力边界说明。
- [[01-博客/Anthropic/Claude Multimodal Cookbook 实战手册|Claude Multimodal Cookbook 实战手册]]；关联理由：延伸思考；说明：本篇覆盖语音与第三方多模态集成链路，该文补充 Claude 原生视觉工作流，可用于对比两类落地路径。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/audio]]
- [[00-元语/asr]]
- [[00-元语/tts]]
- [[00-元语/rag]]
- [[00-元语/sdk]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
- [[00-元语/stream-processing]]
- [[00-元语/observability]]
