---
title: "TradingAgents-CN：开源学习工具多智能体LLM中文金融交易与股票分析"

发布日期: "2026-02-22"
对象: "GitHub 项目 `hsliuping/TradingAgents-CN`"
项目主页: "https://github.com/hsliuping/TradingAgents-CN"
开源协议: "Other"
主要语言: "Python"
统计快照: "Stars 17593，Forks 3773，Watchers 178（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

**1) 一句话总结**
TradingAgents-CN 是一个基于多智能体和大语言模型（LLM）的中文金融交易与股票分析学习框架，采用 FastAPI + Vue 3 全新架构，专为学习研究设计并支持多市场数据与多种国内外大模型。

**2) 关键要点**
*   **项目定位**：基于 TauricResearch 的开源项目进行中文增强，定位为合规友好的学习与研究平台，支持 A股/港股/美股 分析，不提供实盘交易指令。
*   **架构升级**：v1.0.0-preview 版本将后端从 Streamlit 迁移至 FastAPI，前端重构为 Vue 3 + Element Plus，并采用 MongoDB + Redis 双数据库架构，性能提升 10 倍。
*   **开源与授权**：采用混合许可证，除 `app/`（后端）和 `frontend/`（前端）目录需商业授权外，其余遵循 Apache 2.0 协议；个人使用完全免费。
*   **AI 与模型支持**：支持动态添加 LLM 供应商，原生集成 OpenAI、Google AI，并全面支持 DeepSeek、通义千问等国产大模型，具备智能模型匹配能力。
*   **数据与功能**：统一集成 Tushare、AkShare、BaoStock 等数据源；提供批量分析、模拟交易、智能选股以及 Markdown/Word/PDF 多格式专业报告导出功能。
*   **企业级特性**：新增用户权限管理、配置管理中心、多级缓存系统，以及基于 SSE+WebSocket 的实时进度跟踪。
*   **部署方式**：提供 Windows 绿色版、Docker 多架构版（支持 amd64 和 arm64）以及本地源码版三种部署途径。
*   **核心修复**：v1.0.0-preview 彻底修复了技术指标计算不准确、基本面数据（PE、PB等）计算错误以及分析过程中的死循环问题。

**3) 风险与局限**
*   **盗版与侵权风险**：官方明确指出 `tradingagents-ai.com` 网站未经授权盗用其专有代码；受此盗版问题影响，开发中的 v2.0.0 版本暂时取消开源计划。
*   **投资与预测风险**：框架仅用于研究和教育，不构成投资建议；AI 模型的预测存在不确定性，实际交易表现受多种因素影响。
*   **数据依赖风险**：在进行股票分析前必须完成数据同步，否则会导致分析结果出现数据错误。

## 功能与定位

基于多智能体LLM的中文金融交易框架 - TradingAgents中文增强版

## 典型使用场景

- 作为学习与选型参考入口，快速定位资料与最佳实践。
- 用于团队知识库沉淀与技术调研。

## 核心功能

- 汇总课程、示例、清单或社区经验。
- 强调可检索性与持续更新。
- 适合学习路径规划与资源导航。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T13:09:00Z。
- 项目创建于 2025-06-26T07:45:09Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/hsliuping/TradingAgents-CN
- README：https://raw.githubusercontent.com/hsliuping/TradingAgents-CN/main/README.md
- Releases：https://github.com/hsliuping/TradingAgents-CN/releases

## 相关文档

- [[02-资源/AI-应用框架与平台/TradingAgents：交易场景多智能体框架.md|TradingAgents：交易场景多智能体框架]]；关联理由：版本演进；说明：该项目是 TradingAgents-CN 的上游基础框架，对照阅读可明确中文增强版的继承关系与架构变化。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/trading]]
- [[00-元语/fastapi]]
- [[00-元语/github]]
- [[00-元语/learning-resource]]
- [[00-元语/compliance]]
- [[00-元语/risk]]
