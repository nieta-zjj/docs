---
title: phoenix：AI Observability & Evaluation 应用平台
对象: GitHub 仓库
来源: Arize-ai/phoenix README 与仓库公开页面
仓库: https://github.com/Arize-ai/phoenix
官网: https://arize.com/docs/phoenix
---

## 摘要

phoenix 是一个面向 LLM/Agent 应用的开源可观测与评估平台，核心覆盖 tracing、evaluation、datasets、experiments、playground 与 prompt management。它基于 OpenTelemetry/OpenInference，强调跨语言、跨厂商、跨框架接入，可在本地、容器或云端运行。对需要持续迭代提示词、模型与检索链路的团队，phoenix 的价值在于把运行时观测与评测闭环放到同一平台，减少“定位问题”和“验证改动”之间的切换成本。

## 功能与定位

phoenix 的定位是 AI 应用的可观测与评估中台，重点支持实验、评测与故障排查。根据项目 README，可验证的核心能力包括：

- Tracing：用基于 OpenTelemetry 的方式记录 LLM 应用运行轨迹。
- Evaluation：对响应质量与检索效果进行评测。
- Datasets：维护可版本化的数据集，用于实验与评估。
- Experiments：跟踪 prompt、模型与检索策略变更后的效果差异。
- Playground 与 Prompt Management：用于提示词调优、版本管理和对比测试。

## 典型使用场景

- 构建 RAG 或 Agent 应用时，定位链路中哪一环导致质量下降。
- 发布前后对比模型或提示词版本，验证改动是否真正提升结果。
- 团队协作管理评测数据集与实验记录，形成可复用评估流程。
- 在多框架/多厂商环境中统一观测数据与评测口径。

## 特色与差异点

- 一体化：将 tracing、evaluation、datasets、experiments 放在同一平台，而非分散在多套工具。
- 生态兼容：README 明确强调 vendor/language/framework agnostic，并提供多框架与多模型提供方集成入口。
- 部署灵活：可本地运行，也可容器化部署，或使用云端实例。
- 开源基础：仓库公开，便于团队按自身流程扩展与集成。

## 使用方式概览

- 平台侧可使用完整的 `arize-phoenix` 包部署与使用。
- 也可按场景选用轻量客户端与子包（Python 与 TypeScript 生态均有对应包）。
- 在已有应用中通过 OpenInference/OpenTelemetry 相关集成接入追踪与评测数据，再在平台内查看与比较结果。

## 限制与注意事项

- 许可协议：仓库 README 标注使用 Elastic License 2.0（ELv2）；落地前应先完成组织内许可证合规评估。
- 遥测机制：README 提到默认收集基础产品使用分析；需结合团队隐私与合规要求确认是否启用。
- 版本变更：项目提供迁移指引（MIGRATION）；升级时应先评估 breaking changes 对现有流程的影响。

## 链接

- 仓库主页：https://github.com/Arize-ai/phoenix
- 官方文档：https://arize.com/docs/phoenix
- 云端入口：https://app.phoenix.arize.com/
- OpenInference（相关项目）：https://github.com/Arize-ai/openinference
- 许可文件：https://github.com/Arize-ai/phoenix/blob/main/LICENSE
- 迁移说明：https://github.com/Arize-ai/phoenix/blob/main/MIGRATION.md

## 关联主题

- [[00-元语/observability]]
- [[00-元语/evals]]
- [[00-元语/llmops]]
- [[00-元语/Agent]]
