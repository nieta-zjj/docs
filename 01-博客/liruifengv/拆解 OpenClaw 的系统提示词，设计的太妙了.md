---
title: "拆解 OpenClaw 的系统提示词，设计的太妙了"

作者: "liruifengv"
发布日期: "2026-02-04"
来源: "https://liruifengv.com/posts/openclaw-prompts/"
原文信息: "6326 字，预计阅读 32 分钟"
---

## 摘要

本文拆解了 OpenClaw 的系统提示词体系，指出其通过在本地生成一组 Markdown 文件来实现“文件即记忆”，从而将 Agent 从单纯的命令执行工具转变为具备长期记忆和人格一致性的“可持续成长的伙伴”。

- 核心理念是把 Agent 设计为可持续成长的伙伴，而不是传统工具。
- OpenClaw 会在 `~/.openclaw/workspace` 生成多份 Markdown 文件，承载长期行为规则与记忆。
- `AGENTS.md` 负责总规范，`BOOTSTRAP.md` 负责首次唤醒，`IDENTITY.md` 与 `USER.md` 分别沉淀“我是谁”和“我服务谁”。
- `SOUL.md` 用于约束价值观、语气风格与边界意识，`HEARTBEAT.md` 与 `TOOLS.md` 用于巡检策略和工具偏好。
- 这套机制把长期记忆外置为可读写文件，并通过“日记 + 长期记忆”分层降低上下文丢失。
- 文中强调群聊场景要重质量轻数量，遵循“参与但不主导”的行为原则。
- 作者认为当前模型能力尚不足以完整实现该愿景，但该设计已展示出较强的系统性。

## 正文

作者从 OpenClaw 的拟人化体验出发，尝试回答一个问题：为什么这个 Agent 会给人“在持续成长”的感觉。

文章给出的答案是，OpenClaw 将关键规则与记忆结构化为一组可持续维护的 Markdown 文件，而不是把行为仅仅绑定在一次会话里。

初始化后，`~/.openclaw/workspace` 中的主要文件各有明确分工：

- `AGENTS.md`：定义会话启动步骤、记忆维护方法、安全边界和群聊行为规则。
- `BOOTSTRAP.md`：用于首次对话，引导 Agent 建立身份与关系。
- `IDENTITY.md`：记录 Agent 的名字、风格与表达特征。
- `USER.md`：记录用户称呼、时区和偏好等上下文信息。
- `SOUL.md`：定义长期价值观、语气与边界。
- `HEARTBEAT.md`、`TOOLS.md`：分别记录心跳巡检与工具使用偏好。

作者认为，这种“文件即记忆”的方法有三个直接价值：

- 让长期记忆脱离模型短上下文窗口。
- 通过可读写文件让记忆维护可审计、可迭代。
- 通过明确外部动作边界降低误操作风险。

文中还摘录了多句其认为非常关键的提示词设计，例如：

- “This folder is home. Treat it that way.”
- “Write It Down - No ‘Mental Notes’!”
- “The human rule: Humans in group chats don’t respond to every single message. Neither should you. Quality > quantity.”
- “Participate, don’t dominate.”
- “You’re not a chatbot. You’re becoming someone.”

作者最后总结，这套提示词的意义在于把 Agent 从“工具范式”推向“伙伴范式”。即使现阶段模型尚未完全达到这一目标，这种设计思路已经展示了很强的可迁移性。

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/memory]]
- [[00-元语/markdown]]
- [[00-元语/alignment]]
- [[00-元语/workflow]]
