---
title: "Terminal-Bench：终端智能体评测基准与论文关联"

对象: "网站与论文关联档案"
来源: "https://github.com/laude-institute/terminal-bench"
关联说明: "论文明确将 `tbench.ai` 作为数据集与评测框架发布入口"
---

## 摘要

Terminal-Bench 是一个面向命令行环境 AI 智能体的高难度评测基准生态，包含任务集、评测框架与公开排行榜；关联论文《Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces》给出了 2.0 版本的数据构成、评测设置和误差分析。

- 任务规模：Terminal-Bench 2.0 含 89 个任务，来自 93 位贡献者提交的 229 个候选任务筛选结果。
- 评测现状：论文报告前沿模型与智能体在该基准上的得分低于 65%，并给出多组合对比结果。
- 评测基础设施：官网与公告同时强调 Harbor 及其容器化评测能力，并提供任务注册、排行榜与贡献者页面。
- 开放生态：评测相关代码与资源通过 `laude-institute/terminal-bench` 提供。
- 风险提示：上述性能数据属于论文或官网报告值，实际表现受模型版本、agent 实现与运行配置影响。

## 功能与定位

Terminal-Bench 的定位是“终端智能体评测基准与基础设施”，重点评估 AI 智能体在真实、长时程、可验证的终端任务中的完成能力，而不是只测单轮问答或静态代码题。

## 典型使用场景

- 比较不同模型与 agent scaffold 在终端任务上的通过率和稳定性。
- 为 agent 迭代提供回归评测基线，观察版本更新后的能力变化。
- 结合失败类型分析定位薄弱环节，用于后续训练与优化策略设计。

## 核心功能

- Terminal-Bench 2.0 任务集：由人工与 LM 辅助流程共同完成筛选与验证。
- Harbor 评测框架：支持容器化评测、任务分发与统一执行接口。
- 网站功能页：提供 Leaderboard、Registry、Contributors、News、Terminus 等入口。
- 论文支撑：给出任务构建流程、实验规模与误差分类分析。

## 特色与差异点

- 难度上限高：论文报告当前前沿组合尚未达到满分区间，头部结果仍低于 65%。
- 任务来源真实：任务来自社区贡献并经审查，强调与实际终端工作流对齐。
- 评测可持续：2.0 公告明确提出“更难且更严格验证”的维护方向。
- 网站与论文闭环：站点提供持续更新入口，论文提供方法与实验细节依据。

## 使用方式概览

- 从官网进入 Leaderboard 与 Registry，先建立能力基线认知。
- 按公告与文档了解 Harbor 的评测执行路径。
- 结合论文的任务构建与误差分析章节，设计本团队的评测与改进流程。

## 限制与注意事项

- 性能数字与排名属于论文或官网披露值，跨环境复现实验时可能出现差异。
- 基准会随模型能力变化而演进，历史结果不等于长期领先。
- 本仓库仅做定位、功能与场景归档，不复述任何可操作攻击或滥用细节。

## 链接

- 官网：https://www.tbench.ai/
- 2.0 公告：https://www.tbench.ai/news/announcement-2-0
- 论文页面：https://arxiv.org/html/2601.11868v1
- GitHub：https://github.com/laude-institute/terminal-bench

## 关联主题

- [[00-元语/AI]]
- [[00-元语/benchmark]]
- [[00-元语/Agent]]
- [[00-元语/evals]]
- [[00-元语/terminal]]
- [[00-元语/cli]]
- [[00-元语/paper]]
- [[00-元语/llm]]
- [[00-元语/github]]
