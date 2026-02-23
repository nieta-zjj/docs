---
title: "Headroom：LLM 应用的上下文优化层"

对象: "Git 项目"
发布日期: "2026-02-22"
来源:
  - "https://github.com/chopratejas/headroom"
  - "https://raw.githubusercontent.com/chopratejas/headroom/main/README.md"
  - "https://raw.githubusercontent.com/chopratejas/headroom/main/pyproject.toml"
  - "https://raw.githubusercontent.com/chopratejas/headroom/main/LICENSE"
---

## 摘要

Headroom（`headroom-ai`）是一个专为 LLM 应用设计的开源上下文优化层，通过剔除冗余信息将 token 成本降低 50-90%，同时保持较高准确率和约 1-5ms 的低延迟。

- 核心定位：针对工具输出中常见的 70-95% 冗余内容做压缩与优化。
- 典型效果：代码搜索与 SRE 故障排查场景压缩率可达约 92%，GitHub issue 分类约 73%，代码库探索约 47%。
- 核心架构：包含 SmartCrusher、CodeCompressor、LLMLingua-2，以及 CCR（Compress-Cache-Retrieve）机制。
- 集成方式：支持 Proxy、`compress()`、LiteLLM callback、ASGI middleware、MCP 等接入路径。

## 功能与定位

Headroom 的定位是“Context Optimization Layer”：针对工具输出中大量样板与重复信息进行压缩与路由，让模型在更小上下文内完成同等任务，从而降低推理成本并缓解上下文窗口压力。

## 典型使用场景

- 多工具 agent 执行链中的上下文瘦身。
- SRE 故障排查与日志分析场景。
- 代码搜索、代码库探索、Issue 分流等高 token 负载任务。
- 已有网关或代理体系中的增量接入（不替换原有架构）。

## 核心功能

- 多类型压缩器：SmartCrusher（结构化数据）、CodeCompressor（代码）、LLMLingua-2（文本）等。
- 路由与上下文管理：ContentRouter、IntelligentContext、Query Echo、CacheAligner。
- CCR（Compress-Cache-Retrieve）机制：压缩后可按需检索原始内容，降低信息丢失风险。
- 多集成形态：Proxy、Python `compress()`、LiteLLM callback、ASGI middleware、Agno、MCP、Strands。

## 特色与差异点

- README 给出“高压缩 + 高准确率”结果：例如 100 条日志测试从 10,144 tokens 降到 1,260 tokens，同时回答正确率保持 4/4。
- 提供多组基准与工作负载数据（如代码搜索、SRE 调试、Issue triage）。
- 兼容多云后端：AWS Bedrock、Google Vertex、Azure OpenAI、OpenRouter。
- 开源协议为 Apache-2.0。

## 使用方式（概览）

- 环境要求：Python 3.10 及以上。
- 安装方式：通过 PyPI 安装 `headroom-ai`（可按 extra 选择 proxy、mcp、langchain、evals 等）。
- 接入路径：
  - 零代码改造路径：使用 Proxy 并切换模型服务 base URL。
  - Python 路径：在请求前调用 `compress()`。
  - 网关路径：通过 callback / middleware 方式接入现有体系。

## 限制与注意事项

- README 中 LangChain 集成为 experimental 状态。
- 文档中的压缩率与准确率来自项目自述基准；生产采用前建议按其 `docs/benchmarks.md` 和 eval 工具做复现验证。

## 链接

- GitHub 仓库：https://github.com/chopratejas/headroom
- 文档站：https://chopratejas.github.io/headroom/
- PyPI：https://pypi.org/project/headroom-ai/
- 集成指南：https://github.com/chopratejas/headroom/blob/main/docs/integration-guide.md
- 基准文档：https://github.com/chopratejas/headroom/blob/main/docs/benchmarks.md

## 关联主题

- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/mcp]]
- [[00-元语/evals]]
- [[00-元语/benchmark]]
- [[00-元语/llmops]]
- [[00-元语/context-optimization]]
