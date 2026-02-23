---
title: "为何被 OpenClaw 依赖的 Pi，极简又强大"

发布日期: "2026-02-05"
作者: "yibie"
来源:
  - "https://x.com/yibie/status/2019271706335182965"
  - "https://github.com/badlogic/pi-mono/"
  - "https://raw.githubusercontent.com/badlogic/pi-mono/master/README.md"
---

## 摘要

Pi 是一个极简且强大的 AI 编码智能体框架，其核心可抽象为“一个调用 LLM 的 while 循环 + 四个基础工具”。通过按需加载的 Markdown 技能系统、实时干预队列和基于源码的上下文压缩机制，它在保持可扩展性的同时显著控制了系统复杂度。

- 架构主线：以“对话-执行-反馈”循环组织智能体行为，避免重型工作流引擎。
- 工具哲学：默认只提供 `read`、`bash`、`edit`、`write`，强调用 Bash 复用现有 Unix 工具链。
- 扩展方式：Skill 采用按需加载与热更新，不靠预注入大量静态规则。
- 运行控制：`steer` 与 `followUp` 双队列分别处理紧急与非紧急干预。
- 关联仓库：`badlogic/pi-mono` 以 monorepo 形式承载 `pi-ai`、`pi-agent-core`、`pi-coding-agent` 等核心组件。

## 正文

### X 帖子正文
Pi是一个极简、可扩展的AI编码智能体框架（harness），其核心设计哲学可以用一句话概括：一个调用LLM的while循环，加上四个基础工具。与当今复杂的AI Agent平台不同，Pi选择了一条反其道而行的道路——不是增加更多功能，而是将复杂性降到最低。

开发者Armin Ronacher和Mario Zechner认为，现代顶尖大语言模型（如Claude Sonnet）已经具备足够的能力：它们擅长读取文件、编辑文件、执行命令。因此，Pi坚信： "Bash就是你所需要的一切" 。这个看似极端的理念背后，是对LLM能力的深度信任和对工具链复杂性的警惕。

让我们看看Pi的核心代码，理解什么是真正的"极简"。

Pi的核心确实如开发者所说——就是一个while循环。在 packages/agent/src/agent-loop.ts 中：

javascript

```
// 外层循环：处理后续消息队列
while (true) {
    let hasMoreToolCalls = true;
    let steeringAfterTools: AgentMessage[] | null = null;
    // 内层循环：处理工具调用和转向消息
    while (hasMoreToolCalls || pendingMessages.length > 0) {
        // 1. 处理待处理消息（用户新输入或转向消息）
        if (pendingMessages.length > 0) {
            for (const message of pendingMessages) {
                currentContext.messages.push(message);
            }
            pendingMessages = [];
        }
        // 2. 调用LLM获取响应
        const message = await streamAssistantResponse(currentContext, config, signal, stream);
        // 3. 检查是否有工具调用
        const toolCalls = message.content.filter((c) => c.type === "toolCall");
        hasMoreToolCalls = toolCalls.length > 0;
        // 4. 执行工具调用
        if (hasMoreToolCalls) {
            const toolExecution = await executeToolCalls(
                currentContext.tools, message, signal, stream, config.getSteeringMessages
            );
            // 工具结果会作为新消息加入上下文
            for (const result of toolExecution.toolResults) {
                currentContext.messages.push(result);
            }
        }
        // 5. 检查转向消息（实时干预）
        pendingMessages = (await config.getSteeringMessages?.()) || [];
    }
    // 6. 检查后续消息队列
    const followUpMessages = (await config.getFollowUpMessages?.()) || [];
    if (followUpMessages.length > 0) {
        pendingMessages = followUpMessages;
        continue; // 继续外层循环
    }
    break; // 没有更多消息，结束
}
```

人话解释：

这个循环逻辑非常简单：

1.   把用户消息发给AI

2.   AI说"我要用工具" → 执行工具 → 把结果告诉AI

3.   AI继续思考，可能还要用工具 → 重复步骤2

4.   AI说"我完成了" → 检查有没有新用户消息 → 有就继续，没有就结束

这就是全部。 没有复杂的状态机，没有工作流引擎，没有递归调用——就是一个简单的"对话-执行-反馈"循环。

在 packages/coding-agent/src/core/tools/index.ts 中，Pi定义了四个核心工具：

javascript

```
// 默认工具集：只有4个
export const codingTools: Tool[] = [readTool, bashTool, editTool, writeTool];
// 只读工具集（用于探索阶段）
export const readOnlyTools: Tool[] = [readTool, grepTool, findTool, lsTool];
```

四个核心工具的职责：

1.   read | 读取文件内容 | AI需要知道代码长什么样

2.   bash | 执行shell命令 | 运行git、npm、测试、grep、find等

3.   edit | 精确修改文件（查找替换） | 修改现有代码

4.   write | 写入新文件 | 创建新文件

为什么不需要更多？

看 bash 工具的定义（简化版）：

Bash可以调用grep、find、ls、git、npm……整个Unix工具链都是AI的延伸。Pi的哲学是：不要为每个功能写新工具，让AI用Bash调用现有工具。

typescript

```
const bashSchema = Type.Object({
    command: Type.String({ description: "Bash command to execute" }),
    timeout: Type.Optional(Type.Number({ description: "Timeout in seconds" })),
});
```

可迁移经验：

*   ✅ 工具设计遵循"Unix哲学"：每个工具做一件事，但可以组合

*   ✅ 优先使用系统已有能力，而非重新发明

*   ✅ 工具描述要清晰，让AI知道什么时候用什么

Pi的"元文档"约占总提示词的25%，教AI如何扩展自己。这是通过 Skill系统 实现的。

在 packages/coding-agent/src/core/skills.ts 中：

javascript

```
export interface Skill {
    name: string;           // 技能名称
    description: string;    // 技能描述（AI根据这个决定何时加载）
    filePath: string;       // 技能文件路径
    baseDir: string;        // 技能根目录
    source: string;         // 来源（user/project/path）
    disableModelInvocation: boolean; // 是否禁用自动调用
}
// 加载技能
export function loadSkills(options: LoadSkillsOptions = {}): LoadSkillsResult {
    // 从多个位置加载：
    // - ~/.pi/agent/skills/ (全局)
    // - .pi/skills/ (项目本地)
    // - CLI --skill 参数指定的路径
}
// 将技能格式化为系统提示词
export function formatSkillsForPrompt(skills: Skill[]): string {
    const lines = [
        "The following skills provide specialized instructions for specific tasks.",
        "Use the read tool to load a skill's file when the task matches its description.",
        ...
        "<available_skills>",
    ];
    for (const skill of visibleSkills) {
        lines.push(`  <skill>`);
        lines.push(`    <name>${skill.name}</name>`);
        lines.push(`    <description>${skill.description}</description>`);
        lines.push(`    <location>${skill.filePath}</location>`);
        lines.push(`  </skill>`);
    }
    return lines.join("\n");
}
```

人话解释：

技能系统的工作流程：

1.   启动时：Pi扫描指定目录下的所有

文件
2.   系统提示词中：只告诉AI有哪些技能（名称+描述），不包含详细内容

3.   AI按需加载：当任务匹配技能描述时，AI用read工具读取完整的SKILL.md

4.   内容：包含具体操作步骤、脚本命令、示例等

一个典型的

：

markdown

```
---
name: pdf-processing
description: Extracts text and tables from PDF files. Use when working with PDF documents.
---
# PDF Processing
## Setup
Run once before first use:
bash
cd /path/to/pdf-processing && npm install
```

./extract-text.js <input.pdf> # Extract text ./extract-tables.js <input.pdf> # Extract tables

热重载原理：

Skill就是Markdown文件。当AI读取它时，内容立即进入上下文。**没有注册过程，没有重启需求**——这就是"编写即用，修改即生效"。

可迁移经验： - ✅ 使用"渐进式披露"：只把必要信息放系统提示词，详细内容按需加载 - ✅ 文档即代码：用Markdown写"能力"，而不是写代码 - ✅ 让AI自己找工具：告诉AI"有什么"，让它自己决定"用什么"

这是Pi最独特的功能之一。在 `packages/agent/src/agent.ts` 中：

typescript

```
export class Agent {
    private steeringQueue: AgentMessage[] = [];    // 转向队列
    private followUpQueue: AgentMessage[] = [];    // 后续队列
    /**
     * 发送转向消息：中断当前执行
     * 在当前工具执行完成后立即处理，跳过剩余工具
     */
    steer(m: AgentMessage) {
        this.steeringQueue.push(m);
    }
    /**
     * 发送后续消息：在当前轮次完全结束后处理
     */
    followUp(m: AgentMessage) {
        this.followUpQueue.push(m);
    }
}
```

在 agent-loop.ts 中的实际使用：

typescript

```
async function executeToolCalls(...) {
    for (let index = 0; index < toolCalls.length; index++) {
        const toolCall = toolCalls[index];

        // 执行工具...
        const result = await tool.execute(...);

        // 关键：每个工具执行后检查转向消息
        if (getSteeringMessages) {
            const steering = await getSteeringMessages();
            if (steering.length > 0) {
                steeringMessages = steering;
                // 跳过剩余工具调用
                const remainingCalls = toolCalls.slice(index + 1);
                for (const skipped of remainingCalls) {
                    results.push(skipToolCall(skipped, stream));
                }
                break;
            }
        }
    }
    return { toolResults: results, steeringMessages };
}
```

人话解释：

想象你在和AI对话，AI正在执行一系列操作：

*   正常情况：AI调用工具A → 调用工具B → 调用工具C → 完成任务

*   发现问题：你看到AI走错方向了

*   你发送消息："等等，不要用那个方法"

*   Pi的处理：如果消息进入 转向队列(steer)：当前工具执行完后，立即处理你的消息，跳过剩余工具 如果消息进入**后续队列(followUp)**：等AI这一轮完全结束后再处理

这就像开车时的"转向"和"下一站"的区别。

可迁移经验：

*   ✅ 给用户"干预权"：允许在AI执行中实时纠正

*   ✅ 区分"紧急"和"非紧急"：设计不同的队列机制

*   ✅ 优雅中断：不要强制终止，而是让当前操作完成后自然过渡

5. "代码即真理"：没有外部记忆

Pi明确拒绝向量数据库、记忆银行等外部记忆系统。看 compaction/compaction.ts 中的上下文管理：

人话解释：

Pi的"记忆"策略很简单：

typescript

```
export interface CompactionSettings {
    enabled: boolean;
    reserveTokens: number;      // 预留token数（默认16384）
    keepRecentTokens: number;   // 保留最近对话token数（默认20000）
}
// 当上下文窗口快满时，压缩历史
export function shouldCompact(contextTokens: number, contextWindow: number, settings: CompactionSettings): boolean {
    return contextTokens > contextWindow - settings.reserveTokens;
}
// 压缩策略：保留最近N个token的对话，更早的用LLM总结
export function findCutPoint(
    entries: SessionEntry[],
    startIndex: number,
    endIndex: number,
    keepRecentTokens: number,
): CutPointResult {
    // 从最新消息开始，向前累积token
    // 当超过keepRecentTokens时，在那个点"切断"
    // 更早的内容会被LLM总结成摘要
}
```

1.   优先用真实代码：AI直接用read/grep读取项目文件，而不是依赖可能过时的摘要

2.   对话历史管理：当上下文快满时，把太旧的对话 压缩成摘要

3.   摘要格式：保留目标、约束、进度、关键决策、下一步——结构化信息，而不是向量嵌入

可迁移经验：

*   ✅ 结构化摘要优于向量检索：用LLM生成"人类可读"的摘要，而不是不可解释的嵌入

*   ✅ 源码即真相：让AI直接读文件，而不是依赖可能过期的"记忆"

*   ✅ 渐进压缩：保留最近完整对话，旧的只保留摘要

Pi的设计告诉我们：在AI时代，减法比加法更难，但也更有价值。当其他框架在比拼功能列表长度时，Pi证明了——一个设计良好的极简系统，可以通过组合和扩展，完成复杂系统能做到的一切，同时保持清晰和可控

### 关联仓库：badlogic/pi-mono

- 仓库定位：Pi 的 monorepo，用于构建 AI agent 以及管理 LLM 部署。
- 与帖子关系：帖子讨论的 Pi 框架设计与工程实现，主要对应该仓库中的 `packages/agent` 与 `packages/coding-agent`。
- README 中的核心包：
  - `@mariozechner/pi-ai`：多提供商 LLM API 统一层
  - `@mariozechner/pi-agent-core`：Agent 运行时与工具调用
  - `@mariozechner/pi-coding-agent`：交互式 coding agent CLI
  - `@mariozechner/pi-pods`：vLLM GPU Pod 部署管理 CLI
- 仓库备注：README 顶部标注 OSS Vacation，Issue 与 PR 在 2026-02-23 重新开放。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/cli]]
- [[00-元语/prompt]]
- [[00-元语/markdown]]
- [[00-元语/skills]]
- [[00-元语/terminal]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
- [[00-元语/context-optimization]]
- [[00-元语/memory]]
- [[00-元语/github]]
- [[00-元语/x]]
