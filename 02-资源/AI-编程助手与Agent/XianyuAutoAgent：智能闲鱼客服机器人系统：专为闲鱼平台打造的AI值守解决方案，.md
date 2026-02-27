---
title: XianyuAutoAgent：智能闲鱼客服机器人系统：专为闲鱼平台打造的AI值守解决方案，
对象: GitHub 仓库
项目主页: https://github.com/shaxiu/XianyuAutoAgent
来源:
  - https://github.com/shaxiu/XianyuAutoAgent
  - https://github.com/shaxiu/XianyuAutoAgent/blob/main/README.md
  - https://github.com/shaxiu/XianyuAutoAgent/releases
---

## 摘要

XianyuAutoAgent 是一款专为闲鱼平台打造的开源智能客服机器人系统，提供 7×24 小时自动化值守、上下文感知对话与智能议价等核心能力。

- 项目定位为闲鱼场景下的 AI 值守方案，支持多专家协同决策。
- 公开信息显示其已实现 LLM 自动回复、上下文会话管理、阶梯降价、网络搜索整合与基础日志。
- 对话处理采用提示词与规则结合的路由方式，可在议价、技术、客服等场景间分发。
- 运行方式支持 Python 3.8+ 与 Docker 部署，配置依赖 `.env` 与 `prompts/` 模板文件。
- GitHub 页面显示该项目采用 GPL-3.0，且截至 2026-02-26 约有 5.1k Stars、948 Forks。
- 仓库 Releases 页面显示暂无正式发布版本。

## 功能与定位

XianyuAutoAgent 面向闲鱼平台客服值守场景，核心目标是把买卖双方对话中的常规接待、议价沟通与技术咨询交由 LLM 驱动的机器人处理，以降低人工持续在线成本。

## 典型使用场景

- 卖家希望在非工作时段维持 7×24 的基础咨询响应。
- 商品沟通中存在高频议价对话，需要统一策略进行价格回应。
- 同一账号同时处理客服问答、技术问题解释与交易前咨询。

## 核心功能

- 上下文感知对话：保留并使用会话历史作为后续回复输入。
- 专家路由机制：按意图把请求分配到议价、技术、默认客服等提示词流程。
- 议价策略支持：提供阶梯式降价相关能力。
- 搜索辅助回复：通过网络搜索补充部分答复信息。
- 运行日志记录：具备基础监控与日志输出能力。

## 特色与差异点

- 业务导向明确：围绕闲鱼客服与交易沟通流程设计，不是通用聊天机器人模板。
- 多提示词模块化：`prompts/` 下按分类、价格、技术、默认等职责拆分提示词。
- 提供容器化部署入口：仓库同时给出 Dockerfile 与 `docker-compose.yml`。

## 使用方式概览

- 运行基础为 Python 3.8+。
- 依赖集中在 `openai`、`websockets`、`loguru`、`python-dotenv`、`requests`。
- 配置项包括模型服务参数与平台登录态参数，提示词模板可按业务自行调整。

## 限制与注意事项

- 该项目依赖第三方平台登录态与自动化消息处理，使用前需要自行评估账号安全、平台规则与合规边界。
- README 明确写有“仅供学习与交流”，并提示项目可能停止更新或删除。
- 仓库当前无正式 Release，版本稳定性与兼容性信息主要依赖 README 与源码现状判断。
- 本仓库仅做项目定位与信息归档，不复述可执行自动化步骤或敏感操作细节。

## 链接

- https://github.com/shaxiu/XianyuAutoAgent
- https://github.com/shaxiu/XianyuAutoAgent/blob/main/README.md
- https://github.com/shaxiu/XianyuAutoAgent/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/compliance]]
