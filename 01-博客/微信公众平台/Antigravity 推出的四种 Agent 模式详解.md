# Antigravity 推出的四种 Agent 模式详解

## 文档信息

- 站点：微信公众平台
- 原文链接：https://mp.weixin.qq.com/s/BHb9-B6wCUxhwVJTIONI6w
- 发布日期：2026-02-18
- 作者：草莓派

## 摘要

### 一句话总结
Antigravity 推出了四种全新的 Agent 模式（严格模式、审查驱动、代理驱动和自定义配置），通过灵活配置终端执行、审查和脚本执行策略，满足开发者从强制人工审批到全自动免打扰的不同工作流需求。

### 核心要点
*   **严格模式（Strict Mode）**：将 Agent 降级为“建议者”，强制人类作为最后一道防线确认所有更改。
*   **严格模式配置**：审查策略（Review Policy）、终端命令自动执行（Terminal Command Auto Execution）和 JavaScript 执行策略均设置为 Disable。
*   **审查驱动开发模式（Review-driven development）**：系统默认首选模式，要求在 AI 执行操作前进行人工审查，以便开发者了解其操作意图。
*   **审查驱动模式配置**：终端执行和审查策略设置为 Request Review，JavaScript 执行策略设置为 Disable。
*   **代理驱动开发模式（Agent-driven development）**：无需中间确认过程，只看最终结果，适合管理多个 Agent 的开发者，支持通过允许/阻止列表优化工作流。
*   **代理驱动模式配置**：终端执行、审查和 JavaScript 执行策略均设置为 Always Proceed。
*   **自定义配置模式（Custom configuration）**：允许开发者针对特定工作流，自由组合和自定义上述三种策略的状态。

### 风险与缺口
*   **不可逆操作风险**：在生产环境或核心系统中，微小的自动化错误可能导致删库或配置错误等不可逆的后果（需通过严格模式防范）。
*   **AI 幻觉风险**：Agent 存在产生幻觉的可能，需要引入如 Gemini Code Assist 等外部审计工具进行对冲。
*   **代码透明度风险**：Agent 在后台静默运行复杂的 JavaScript 逻辑脚本会降低透明度（审查驱动模式通过禁用该功能来规避此风险）。

## 正文


在之前关于 Antigravity 的文章中，有读者提问：“如果不想在 Agent 运行的过程中与它互动，应该如何设置？”这两天，Antigravity 推出了四种全新的 Agent 模式，正好解答了这个问题。

这四种模式分别是：严格模式（Strict Mode）、审查驱动开发模式（Review-driven development）、代理驱动开发模式（Agent-driven development）以及自定义配置模式（Custom configuration）。

### 严格模式（Strict Mode）

在处理生产环境或核心系统时，任何微小的自动化错误都可能导致不可逆的后果（如删库、配置错误等）。严格模式要求你务必审查所有更改。

这种配置将 Agent 降级为“建议者”而非“执行者”。它强制人类开发者作为最后一道防线，确保每一行代码和每一个命令都经过人工确认，并引入 Gemini Code Assist 等外部审计工具来对冲 AI 的幻觉风险。

**策略配置状态：**
*   **Review Policy（审查策略）：** Disable
*   **Terminal Command Auto Execution（终端命令自动执行）：** Disable
*   **JavaScript Execution Policy（JavaScript 执行策略）：** Disable

### 审查驱动开发模式（Review-driven development）

这是系统的默认首选模式，优先强调学习和细致的代码编写。建议从这个模式开始，等更熟练后再调整设置。

**策略配置状态：**
*   **Terminal execution policy：** Request Review
*   **Review Policy：** Request Review
    *   *说明：* 这是为了让开发者在 AI 执行操作前，清楚地看到“它要做什么”和“它为什么要这么做”。
*   **JavaScript execution policy：** Disable
    *   *说明：* 这是为了防止 Agent 在后台静默运行复杂的逻辑脚本，从而确保代码逻辑的透明度。

### 代理驱动开发模式（Agent-driven development）

这个模式非常适合忙碌的 AI 工程师——特别是那些已经配置了一些技能，并且正在管理多个 AI Agent 的开发者。它能通过在允许列表或阻止列表中添加更多条目来优化你的工作流。

用这种模式，你只需要看结果，不需要中间的确认过程（这也正是解答前文读者提问的模式）。

**策略配置状态：**
*   **Terminal execution policy：** Always Proceed
*   **Review Policy：** Always Proceed
*   **JavaScript execution policy：** Always Proceed

### 自定义配置模式（Custom configuration）

当你希望为特定工作流定制 Agent 策略时，可以选择自定义配置模式。例如，有时你会希望让 Agent 主导生成，但仍坚持先审批计划，这种模式就很合适。

**策略配置状态：**
*   **Terminal execution policy**、**Review Policy** 以及 **JavaScript execution policy** 均可由开发者进行自定义配置。

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/workflow]]
- [[00-元语/code-review]]
