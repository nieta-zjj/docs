---
title: "WeClone：个人数字分身与对话克隆项目"

发布日期: "2026-02-22"
对象: "GitHub 项目 `xming521/WeClone`"
项目主页: "https://github.com/xming521/WeClone"
官方网站: "https://weclone.love"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Python"
统计快照: "Stars 16349，Forks 1331，Watchers 73（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.3.03（发布时间：2026-01-04T14:40:10Z）"
---

## 摘要

### 1) 一句话总结
WeClone 是一个基于 Python 的开源一站式解决方案，通过提取聊天记录（如 Telegram）并微调大语言模型（LLM），帮助用户创建并部署专属的个性化数字分身。

### 2) 核心要点
*   **项目基础**：采用 GNU AGPL v3.0 开源协议，主要使用 Python 开发，GitHub 拥有超 1.6 万 Stars。
*   **端到端工作流**：提供包含聊天数据导出、数据预处理（隐私过滤）、模型微调（支持图像多模态数据）以及最终部署的完整解决方案。
*   **平台支持**：目前支持将 Telegram 作为数据源（支持文本、图片、转发、位置等），并支持将生成的数字分身部署至 Telegram、Discord 和 Slack 平台。
*   **模型与硬件要求**：默认使用 `Qwen2.5-VL-7B-Instruct` 模型结合 LoRA 方法进行微调；环境要求 CUDA 12.6 及以上；7B 模型在 4-bit QLoRA 下最低显存需求为 6GB。
*   **数据隐私保护**：默认集成 Microsoft Presidio 用于自动剔除手机号、邮箱、IP、银行卡等敏感信息，并提供 `blocked_words` 黑名单供用户手动过滤特定词汇。
*   **第三方集成**：提供兼容 OpenAI 格式的 API 服务（`weclone-cli server`），可直接接入 AstrBot 和 LangBot 等多平台聊天机器人框架。
*   **未来规划**：路线图包括支持更多数据源、丰富的上下文（参与者信息、时间等）、记忆功能、数据增强、GUI 界面以及 COT（思维链）支持。

### 3) 风险与不足
*   **生产环境风险**：项目明确声明仅供学习、研究和实验使用，用于生产环境存在重大风险，作者不对任何直接或间接损失（如数据丢失、财务损失、法律纠纷等）负责。
*   **输出不可靠性**：微调后的模型可能产生不准确、有害或误导性的内容，输出不代表真人观点或意图。
*   **隐私与合规责任**：用户需自行确保聊天记录的使用符合当地法律法规，并获得相关人员的授权，项目不对数据泄露或隐私侵权负责。
*   **身份混淆风险**：官方强烈建议在应用时必须明确标识其为“AI Bot”或“数字分身”，避免让用户误认为是真人交谈。
*   **诈骗警告**：官方声明未与任何平台合作，也未发行任何加密货币，唯一官方网站为 `weclone.love`，需谨防假冒。
*   **环境与功能限制**：Windows 环境尚未经过严格测试（建议使用 WSL）；目前 WhatsApp、Discord 和 Slack 的数据源导出功能仍在开发中，尚未可用；7B 模型效果一般，建议使用 14B 及以上参数模型以获得更好效果。

## 功能与定位

🚀 One-stop solution for creating your digital avatar from chat history 💡 Fine-tune LLMs with your chat logs to capture your unique style, then bind to a chatbot to bring your digital self to life.  从聊天记录创造数字分身的一站式解决方案

## 典型使用场景

- 用于快速搭建 AI 应用、工作流或服务化能力。
- 作为上层产品的能力底座，统一模型调用与业务集成。

## 核心功能

- 提供应用框架或平台化能力。
- 支持模型接入、流程编排或接口服务化。
- 面向开发与部署提供基础工程支持。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:41:05Z。
- 项目创建于 2024-01-31T05:11:12Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/xming521/WeClone
- 官网：https://weclone.love
- README：https://raw.githubusercontent.com/xming521/WeClone/master/README.md
- Releases：https://github.com/xming521/WeClone/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/lora]]
- [[00-元语/multimodal]]
- [[00-元语/data-pipeline]]
- [[00-元语/compliance]]
- [[00-元语/risk]]
- [[00-元语/deepfake]]
