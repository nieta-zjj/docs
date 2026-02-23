---
title: "system-prompts-and-models-of-ai-tools：AI 工具 system prompts 与内部工具配置汇编"

对象: "GitHub 开源项目"
项目: "`x1xhlol/system-prompts-and-models-of-ai-tools`"
来源: "https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools"
开源协议: "GPL-3.0"
默认分支: "`main`"
版本状态: "Releases 页面显示暂无正式版本"
最近提交: "`ae37329aea0c7044366694e2f2484ca3fcbd0a60`（2026-02-17）"
社区数据快照: "页面抓取显示约 `116k stars`、`30k forks`（2026-02-22）"
发布日期: "2026-02-22"
---

## 摘要

该项目是一个开源的 GitHub 仓库，集中收录多类 AI 产品与开源工具的 system prompts、内部工具配置以及模型相关文本，便于做提示词结构研究与产品对比。

- 覆盖范围广：按目录汇集 Anthropic、Cursor、Devin AI、Perplexity、Replit、Windsurf、v0 等多类工具材料。
- 文件形态清晰：主要为 `Prompt.txt`、`Tools.json`、`*.yaml` 等可直接阅读的配置与文本。
- 使用价值集中在“横向参考”：适合研究 prompt 设计风格、工具调用结构和 agent 行为约束表达。
- 合规风险需要前置评估：内容涉及第三方产品系统提示词汇编，使用前需核对授权与合规边界。

## 功能与定位

该仓库定位为“AI 工具 system prompts 与工具配置的汇编库”，核心价值是把分散在不同产品中的提示词和配置内容集中归档，便于检索、比较和学习。

## 典型使用场景

- 对比不同 AI coding agent 在系统提示词层面的风格差异。
- 研究工具调用配置（tool schema）与提示词约束如何协同。
- 为团队内部 prompt 设计评审提供参考样本库。
- 做安全研究时识别“敏感提示词泄露”带来的潜在风险面。

## 核心功能

- 多目录收录：按产品或工具分目录组织材料。
- 多格式并存：覆盖纯文本 prompt、JSON 工具配置和 YAML 配置。
- 开源工具子集：包含 `Open Source prompts` 目录，便于对比闭源与开源工具写法。
- 持续更新：仓库提交历史显示目录和文件持续增补。

## 特色与差异点

- 集中度高：同一仓库汇总大量跨产品的 prompt 与工具配置。
- 可读性强：以可直接浏览的文本/配置文件为主，不依赖额外编译流程。
- 对安全议题有直接提示：README 明确提及 prompt 与模型配置泄露风险。

## 使用方式概览

- 进入仓库后按目录选择目标产品。
- 打开对应 `Prompt.txt`、`Tools.json` 或 `*.yaml` 文件阅读。
- 按自身场景抽取“结构模式”做方法参考，而不是直接照搬具体文本。

## 限制与注意事项

- 仓库为汇编性质资料，第三方内容可能存在授权与使用边界差异，落地前应自行核验。
- README 已提示提示词与模型配置泄露风险，处理相关材料时应采用最小暴露原则。
- Releases 页面暂无正式版本，引用时建议绑定具体 commit。
- 本仓库仅做项目定位、功能与场景归档，不复述任何可用于攻击、规避限制或未授权利用的可操作细节。

## 链接

- 仓库首页：https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools
- README：https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/README.md
- LICENSE：https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/LICENSE.md
- Releases：https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/releases
- 最近提交：https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/commit/ae37329aea0c7044366694e2f2484ca3fcbd0a60

## 关联主题

- [[00-元语/tool]]
- [[00-元语/prompt]]
- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/github]]
- [[00-元语/security]]
- [[00-元语/compliance]]
