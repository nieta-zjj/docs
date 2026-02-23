---
title: "代码界新王登基！Gemini 3.1 Pro 血洗 Claude 与 GPT，12 项基准测试第一！"

来源: "https://www.infoq.cn/article/Ic69NzLCGqQ6HRuCligh?utm_source=rss&utm_medium=article"
---

## 摘要

**1) 一句话总结**
谷歌正式推出采用混合专家架构（MoE）的 Gemini 3.1 Pro 基础模型，其核心推理能力实现翻倍，在 12 项基准测试中超越 Claude 与 GPT 竞品位列第一，并已面向开发者、企业和消费者多端同步上线。

**2) 关键要点**
*   **模型架构与容量**：采用混合专家架构（MoE），支持高达 100 万 token 的多模态输入（涵盖文本、视频等），响应输出最高可达 6.4 万 token。
*   **多端同步上线**：已分批接入开发者工具（Gemini API、CLI、Android Studio 等）、企业服务（Vertex AI、Gemini Enterprise）及消费者端（Gemini App、NotebookLM）。
*   **推理能力翻倍**：在 ARC-AGI-2 基准测试中获得 77.1% 的成绩，是上一代 Gemini 3 Pro（31.1%）的两倍以上，并超越了 Claude Opus 4.6（68.8%）和 GPT-5.2（52.9%）。
*   **基准测试领先**：在官方公布的 16 项基准测试中，有 12 项排名第一，包括 MCP Atlas（69.2%）、Terminal-Bench 2.0（编程）和 SciCode（科学编程）。
*   **免费开放策略**：不同于每日限用 10 次的付费订阅版 Gemini Deep Think，Gemini 3.1 Pro 作为基础模型向所有用户免费开放。
*   **核心应用场景**：专为复杂问题求解、跨领域分析和抽象逻辑任务设计，可执行如创建 SVG 动画、转化文学风格为网站设计等复杂落地任务。
*   **规模化业务数据**：谷歌 API 目前每分钟处理超过 100 亿个 token，Gemini App 月活跃用户已突破 7.5 亿。
*   **行业趋势转变**：社区反馈指出，大模型竞争焦点已从单纯的“参数规模”转向“真实任务完成率”、工程可用性及稳定性。

**3) 风险/不足**
*   **性能上限差距**：Gemini 3.1 Pro 在 ARC-AGI-2 测试中的得分（77.1%）仍低于此前发布的、仅限订阅用户使用的 Gemini Deep Think 模型（84.6%）。

## 正文

### 核心能力全面下放，多端同步上线

继上周发布面向科学研究与工程领域复杂问题的 Gemini 3 Deep Think 重大更新后，谷歌今日正式推出支撑这些突破的“核心智能”升级版本——Gemini 3.1 Pro。

Gemini 3.1 Pro 是一款采用混合专家架构（MoE）的 Transformer 模型，在生成提示响应时仅激活部分参数。用户可输入高达 100 万 token 数据量的提示词，内容不仅涵盖文本，还包括视频等多模态文件，其响应输出最多可包含 6.4 万 token。

这意味着，Gemini 3 系列的最新能力不再只停留在实验室或演示阶段，而是开始全面进入开发者工具、企业服务以及普通用户的日常应用场景。根据官方披露，Gemini 3.1 Pro 已于今日开始分批上线：

*   **开发者**：可通过 Gemini API（Google AI Studio）、Gemini CLI、智能体开发平台 Google Antigravity 以及 Android Studio 预览使用。
*   **企业用户**：通过 Vertex AI 和 Gemini Enterprise 接入。
*   **消费者**：可在 Gemini App 及 NotebookLM 中直接体验。

### 推理表现翻倍，12 项基准测试排名第一

从技术定位来看，Gemini 3.1 Pro 并非简单的性能微调，而是一次**核心推理能力（core reasoning）的系统性升级**。官方将其描述为“更聪明、更具能力的基础模型”，尤其适用于复杂问题求解、跨领域分析以及需要抽象逻辑的任务。

这一进步直观体现在权威评测成绩上。在专门评估模型泛化与推理能力的 ARC-AGI-2 基准测试中，Gemini 3.1 Pro 获得了 77.1% 的经验证成绩（人类参与者的平均正确率约为 60%）。这一分数是上一代 Gemini 3 Pro（31.1%）的两倍以上。短短三个月时间，同一系列模型的闭卷推理能力实现了跨越式提升。

横向对比当前大模型竞争格局，Gemini 3.1 Pro 的表现同样亮眼：
*   **Gemini 3.1 Pro**：77.1%
*   **Claude Opus 4.6**：68.8%
*   **Claude Sonnet 4.6**：58.3%
*   **GPT-5.2**：52.9%

虽然 77.1% 的得分低于前阵子发布的 Gemini Deep Think（84.6%），但 Gemini 3.1 Pro 是一款向所有用户免费开放的基础模型；而具备“深度思考”能力的 Deep Think 模式目前仅限 Google AI Ultra 订阅用户使用，且每日限用 10 次。

此外，在谷歌官方公布的 16 项基准测试数据中，Gemini 3.1 Pro 在其中 12 项均位列第一：
*   **MCP Atlas 测试**（评估使用第三方服务执行任务能力）：以 69.2% 的成绩领先于 Claude Sonnet 4.6。
*   **Terminal-Bench 2.0**（编程测试）：编码能力高于 Opus 4.6 与 GPT-5.2。
*   **SciCode**（科学编程任务）：表现比 Claude Opus 4.6 高出 7%。

### 实用智能落地与未来展望

Gemini 3.1 Pro 专为那些“给出一个简单答案远远不够”的任务而设计。无论是将复杂主题清晰直观地呈现、把分散数据综合成统一视图，还是推动创意项目从构想走向落地，升级后的智能水平都能在现实场景中发挥巨大作用。例如，该模型可以创建用于网站的 SVG 动画，或将小说的文学风格转化为个人作品集网站的设计。

从发布节奏来看，谷歌正在尝试将前沿研究成果更快转化为“默认可用”的基础能力：先通过 Deep Think 展示上限，再通过 3.1 Pro 将能力沉淀为更稳定、更通用的底座模型，并迅速推向市场。

去年加盟谷歌 DeepMind 的清华物理系知名研究者姚顺宇（Shunyu Yao）透露，更强的模型也将很快亮相。同时，谷歌 CEO Sundar Pichai 在 2025 年第四季度收益报告中表示：“我们的第一方模型（如 Gemini）现在通过客户直接使用 API，每分钟处理超过 100 亿个 token，Gemini App 的月活跃用户已增长到超过 7.5 亿。”

### 社区反馈：竞争焦点转向“真实任务完成率”

随着 Gemini 3.1 Pro 正式上线，技术社区的讨论热度迅速攀升。与以往高度关注“参数规模”不同，网友普遍认为此次更新释放的关键信号在于整体推理和复杂问题求解能力的持续上推。

有开发者明确指出，头部大模型的竞争焦点正在发生转折——从“谁的参数更多”，转向“谁能把问题真正做完、做好”。Gemini 3.1 Pro 不再单纯追求模型规模的扩张，而是更强调在真实任务中的完成度和稳定性。

同时，社区也关注到 AI 发展节奏已进入“以月甚至以周计”的阶段。Gemini 3.1 Pro 在较短时间内推出，并在降低使用成本的同时提升智能水平，被视为谷歌对现实压力的直接回应。这种优化路径对于推动 AI 在生产环境中的应用尤为关键。

综合来看，Gemini 3.1 Pro 的发布不仅是一次常规的模型升级，更是一次方向性的表态：在大模型逐渐走向成熟的阶段，真正决定胜负的，将是推理能力、工程可用性以及规模化落地的综合表现。

---

**参考资料：**
*   InfoQ 报道：https://www.infoq.cn/article/Ic69NzLCGqQ6HRuCligh?utm_source=rss&utm_medium=article
*   Google 官方博客：https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/
*   AI.jp 报道：https://www.ai.jp.net/article/google-s-gemini-3-1-pro-a-new-reasoning-champion-c710f5
*   Shunyu Yao (X): https://x.com/ShunyuYao14
*   DeepMind Gemini Pro: https://deepmind.google/models/gemini/pro/

## 关联主题

- [[00-元语/AI]]
- [[00-元语/gemini]]
- [[00-元语/llm]]
- [[00-元语/benchmark]]
- [[00-元语/multimodal]]
