---
title: "Claude Code 团队的 10 个内部技巧，但你不一定都要学"

来源: "https://baoyu.io/blog/2026/02/01/claude-code-tips-from-creator"
发布日期: "2026-02-01"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
本文总结了 Claude Code 团队内部的 10 个高效使用技巧，涵盖并行开发、规划模式、自定义配置与自动化，强调开发者应根据自身需求定制专属的 AI 辅助工作流。

**2) 核心要点**
*   **并行运行会话**：利用 Git worktrees 同时检出 3-5 个工作目录，在不同目录中并行运行独立的 Claude Code 会话以推进多项任务。
*   **善用 Plan Mode（规划模式）**：面对复杂任务，先通过 Plan Mode 与 Claude 反复讨论并确认方案，再切换至自动编辑模式执行，避免方向跑偏。
*   **投资 CLAUDE.md**：在项目根目录维护 `CLAUDE.md` 文件（约 2.5k tokens），记录核心规范与常见错误，并让 Claude 在犯错后自行更新该文件以积累经验。
*   **创建自定义技能（Skills）**：将高频操作（如提交、推送、创建 PR）封装为可通过斜杠命令调用的 Skill，并提交至 Git 以实现跨项目复用。
*   **让 AI 自主修复 Bug**：将 Slack 上的 Bug 反馈或失败的 CI 测试日志直接发给 Claude，赋予其足够权限让其自主排查和修复。
*   **优化提示词策略**：让 Claude 反向审查你的代码修改；当 AI 给出糟糕方案时，直接要求其“推倒重来”而不是在错误基础上打补丁；尽可能提供详尽的需求细节以减少歧义。
*   **终端与输入优化**：推荐使用 Ghostty 或 tmux 优化多会话终端体验，并建议使用语音输入以提供更长、更详细的提示词。
*   **使用 Subagents（子代理）**：在请求后添加“use subagents”指令，将任务拆分给多个子代理并行处理，从而保持主会话的上下文整洁。
*   **拓展应用场景**：通过封装 CLI 或 MCP（如 BigQuery `bq`），让 Claude 直接执行 SQL 查询与数据分析；或让其生成 HTML 幻灯片和 ASCII 图表来辅助学习新代码与复杂架构。

**3) 风险与不足（基于原文明确指出）**
*   **并行任务的注意力损耗**：并行处理多个任务会导致开发者频繁切换大脑线程，不推荐同时进行多个复杂的并行任务。
*   **CLAUDE.md 内容过载风险**：`CLAUDE.md` 不建议放入过多内容（如 AI 已训练过的通用设计模式），否则会适得其反；应仅保留最重要的核心规范，其他内容按需加载。
*   **Subagents 稳定性不足**：实际使用中 Subagents 的稳定性仍有欠缺，经常会出现子代理挂掉（崩溃）的情况。
*   **上下文污染干扰判断**：当 Claude 给出错误方案时，在当前会话继续对话可能会被之前的错误信息干扰，建议回滚代码并新开会话重试。
*   **Bug 修复依赖清晰描述**：让 AI 修 Bug 时，如果未提供清晰的复现步骤、期望结果和实际错误日志，AI 将缺乏足够的上下文来定位和验证问题。
*   **Plan Mode 偏航风险**：在执行阶段一旦发现事情跑偏，必须立刻回到 Plan Mode 重新规划，不能让 AI 在错误方向上硬推。

## 正文

Claude Code 团队分享的 10 条内部技巧，已经很多人分享过了，大部分我还是结合自己经验解读一下。

其中最重要的一句话是：“没有唯一正确的使用方式，每个人的设置都不一样。”

我按难度分了层，加上自己的理解和背景信息。

【1】并行运行：团队公认的第一大效率提升，但你不一定要学
----------------------------

这是团队最推荐的技巧，但不一定是你要学的技巧。

做法是用 **git worktrees** 同时检出 3-5 个工作目录，每个目录跑一个独立的 Claude Code 会话。比如目录 A 在重构模块，目录 B 在写测试，目录 C 在改文档。三件事并行推进。

**Git worktree 是什么？** 让你在同一个仓库里同时打开多个分支的工作目录，不用来回切换。命令大概是 `git worktree add ../feature-a feature-a`。

> 相关文档：[https://code.claude.com/docs/en/common-workflows#run-parallel-claude-code-sessions-with-git-worktrees](https://code.claude.com/docs/en/common-workflows#run-parallel-claude-code-sessions-with-git-worktrees)

团队里有人给 worktree 目录配上 shell 快捷键（`za`、`zb`、`zc`），一键跳转。还有人专门留一个“分析专用”的 worktree，只用来看日志、跑查询，不写代码。

Boris 本人用的是多个 git checkout 而不是 worktree，但团队大多数人更喜欢 worktree。Claude Desktop 应用为此专门加了原生支持。

**为什么他们把这排第一？** 因为它改变的是整个工作模式。从“一次做一件事”变成“同时推进多件事”。瓶颈从“等 AI 生成”变成了“我的注意力怎么分配”。

![Image 1](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/photo-parallel-worktrees.jpg)

**这个用法不一定适合所有人。**

首先 git worktree 操作比较麻烦（可以让 Claude Code 帮你做）。我个人更喜欢 ClawdBot（一个开源的 Claude 客户端）作者 Peter 的方式，分几个目录，比 worktree 简单：

> 他就简单地 checkout 好几份仓库：clawbot-1、clawbot-2、clawbot-3、clawbot-4、clawbot-5。哪个空闲就用哪个，做完测试、推到主分支、同步。

然后并行任务会让你频繁切换大脑线程，对于编程这种需要注意力的事情还是挺麻烦的。需要一段时间练习。

我估计他们团队有不少简单的 Bug 修复任务，这类任务描述清楚后，基本上复制粘贴过去等着就行。

如果是多个复杂任务并行我不太推荐，当然想试试还是没问题。

【2】Plan Mode：复杂任务先规划再动手
-----------------------

Plan Mode 的价值不只是“计划”本身，而是强迫你在动手前想清楚到底要什么，以及确保 Claude 懂你想要什么。

很多时候我们自己想做一件事时，一开始只有模糊的想法，不知道什么是最优解，这时候直接开始写代码不见得是好事，如果通过 plan 模式反复聊一下，可能就帮你梳理清楚了，有时候 Claude Code 还能有你意想不到的提议。

很多时候 Claude 写出来的东西不对，不是它不行，是它没理解清楚你真正想要的是什么就开始写代码了。通过 Plan Mode 反复聊天确认，可以确保它理解你的意图。

**基本原则：** 遇到复杂任务，先用 Plan Mode 和 Claude 讨论方案。反复迭代，直到你对计划满意，再切换到自动编辑模式让 Claude 执行。一个好的计划通常意味着 Claude 可以一次到位，不用来回改。

团队有人的做法更进一步：让一个 Claude 写计划，另开一个 Claude 以“高级工程师”的身份审核这个计划。**让 AI 审 AI**。

还有一条重要的补充：事情一旦跑偏，立刻回到 Plan Mode 重新规划。不要硬推，不要让 Claude 在错误的方向上越走越远。有人甚至会在验证步骤时也切换到 Plan Mode，不只是在“做”的阶段。

![Image 2](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/screenshot-plan-mode.png)

【3】投资你的 CLAUDE.md
-----------------

这可能是**性价比最高**的一个技巧。

**CLAUDE.md** 是放在项目根目录的文件，Claude Code 每次启动都会读取它。你可以在里面写代码规范、设计原则、PR 模板、常见错误提醒——任何你希望 Claude 记住的东西。

关键在于怎么维护这个文件。团队的做法是：**每次纠正 Claude 的错误后，让它自己更新 CLAUDE.md**。

具体 prompt 可以是：“Update your CLAUDE.md so you don't make that mistake again.”

Boris 的原话是：“Claude is eerily good at writing rules for itself.”（Claude 非常擅长给自己写规则。）

团队里有个工程师的做法更系统：他为每个项目/任务维护一个 notes 目录，每次 PR 后更新。然后在 CLAUDE.md 里指向这些 notes，相当于给 Claude 建了一个持续更新的知识库。

![Image 3](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/screenshot-update-claude-md.png)

这个思路跟我经常提到的 Skills 迭代思路类似。通常一开始规则不够完善，每次遇到问题，基于当前上下文让 Agent 自己去完善是效果最好的。一方面你不需要从头描述问题，另一方面 Agent 很善于归纳总结。

至于维护一个 notes 目录，是个蛮好的积累经验的实践。这事你不需要自己写，可以做一个 Skill，每次让 Claude Code 从当前会话中复盘，提炼成 Note。甚至可以连上 hook，每次会话结束自动执行。不过这条我个人不推荐，太多没意义的信息不见得是好事。

这个技巧的核心是把人脑里的经验变成系统知识。时间越长，CLAUDE.md 越完善，Claude 犯的错越少，你需要纠正的次数也越少。**这是一种复利**。

这里需要补充一个注意事项，CLAUDE MD 不建议放太多内容，只会适得其反，只放最重要的 AI 没训练过的内容，更多的内容作为文件链接按需读取。

很多人把设计模式、规范、最佳实践之类的都放进去，先不说这些 AI 都训练过，你最多说个名字就够了，就算是你需要的，也不是每次都要，不如放一个链接或者移到 Skills 按需加载。

Claude Code 官方项目中 CLAUDE md 文件也就大约 2.5k tokens：

*   常用 Bash 指令：让 AI 知道如何像开发者一样操作命令行。

*   代码风格规范 (Code Style Conventions)：确保 AI 写的代码符合团队编码标准。

*   UI 与内容设计准则：指导 AI 如何设计界面和编写文案。

*   核心技术实现流程：教 AI 如何处理状态管理 (State Management)、日志记录 (Logging)、错误处理 (Error Handling)、功能门控 (Gating，即控制特定功能的开启与关闭) 以及调试 (Debugging)。

*   代码合并请求 (Pull Request) 模板：规范提交代码时的文档格式。

![Image 4](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/screenshot-claude-md-content.jpg)

【4】创建自定义技能（Skills）
------------------

![Image 5: Skills 模块化系统](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/01-infographic-skills-modular.png)

如果某件事你一天要做两次以上，就值得把它变成一个 skill 或者 slash command。

**Skill** 是一组可复用的指令，放在项目里，用斜杠命令调用。比如 `/commit-push-pr` 可以一键完成提交、推送、创建 PR 的整个流程。Boris 说他每天会用这个命令几十次。

团队分享了几个在用的 skill：

*   `/techdebt`：在每次 session 结束时运行，让 Claude 检查并清理重复代码。

还有人搭建了一个 slash command，可以把过去 7 天的 Slack 消息、Google Drive 文档、Asana 任务、GitHub 活动同步到一个上下文里，相当于一键获取“这周发生了什么”的全景视图。

更高级的用法：有人用 skill 构建了“数据分析工程师”类型的 agent，可以自动写 dbt 模型、审核代码、在开发环境测试变更。

Skill 的好处是可以提交到 git，跨项目复用。你在一个项目里积累的自动化，可以带到下一个项目。

> Skill 文档：[https://code.claude.com/docs/en/skills#extend-claude-with-skills](https://code.claude.com/docs/en/skills#extend-claude-with-skills)

【5】让 Claude 自己修 Bug
-------------------

团队的经验是：**大多数 bug，Claude 自己就能修好**。

一个常见场景：启用 Slack MCP，把 Slack 上的 bug 反馈帖子直接粘贴给 Claude，然后只说一个词：“fix”。不需要解释上下文，不需要手动定位问题。Claude 会自己去看代码、理解问题、修复。

另一个场景：CI 测试挂了。直接告诉 Claude：“Go fix the failing CI tests.”不要微管理它怎么做，让它自己去看日志、找原因、改代码。

![Image 6](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/screenshot-fix-failing-ci.png)

更复杂的场景：分布式系统出问题，把 docker logs 指给 Claude，让它帮你排查。Boris 说 Claude 在这方面“surprisingly capable”（能力出乎意料地强）。

Boris 没说的是，描述 Bug 的时候要清楚：

*   如何复现问题

*   期望的结果

*   实际的问题，比如错误日志、截图等等

换个角度说，假设是个程序员，看了你的 Bug 描述也能知道是怎么回事。有了这些基本信息，AI 才能有足够的上下文去定位和验证问题。

这个技巧的核心是给 Claude 足够的上下文和权限，然后信任它。不需要一步步指挥，让它自己闭环。

所以你看，这才是他们能多任务的重要原因——好多 Bug 都是 Claude Code 自己能修的。

【6】提升你的 Prompting 技巧
--------------------

![Image 7: Prompting 三大技巧](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/02-infographic-prompting-techniques.png)

这一部分有几个具体的招数。

### 第一招：让 Claude 来考你

Prompt 示例：“Grill me on these changes and don't make a PR until I pass your test.”（针对这些改动考我，直到我通过测试才能提 PR。）

或者：“Prove to me this works.”（向我证明这个能 work。）让 Claude 对比 main 分支和你的 feature 分支的行为差异。

这相当于把 Claude 从“执行者”变成了“审核者”。让它反过来 review 你。

### 第二招：推倒重来

当 Claude 给出的方案不够好，不要在上面打补丁。直接说：“Knowing everything you know now, scrap this and implement the elegant solution.”（基于你现在知道的所有信息，扔掉这个方案，实现一个更优雅的版本。）

> 我通常会用 git 把代码回滚到修改前，然后新开会话、调整提示词重来。在当前会话继续的话，之前的错误信息可能会干扰 Claude 的判断。

### 第三招：减少歧义

交代任务时，spec 写得越详细越好。你越具体，Claude 的输出越准确。这听起来像废话，但很多人（包括我）还是习惯性地写模糊的需求，然后抱怨 AI 不懂。

> 其实人都懒，能一句话说清楚肯定懒得说第二句。用 Plan 模式相对好一点，你能知道它听懂了没有。

【7】终端和环境配置
----------

团队里很多人用 **Ghostty** 终端，理由是它有同步渲染、24 位真彩色、完善的 unicode 支持。这些对于同时开多个 Claude 会话很重要。

另一个实用技巧：用 `/statusline` 自定义状态栏，始终显示当前的 context 用量和 git 分支。这样你一眼就能知道每个会话的状态。

还有人用 **tmux** 管理多个会话，给每个 tab 上色、命名，一个 tab 对应一个 task 或 worktree。

> Optimize your terminal setup 文档：[https://code.claude.com/docs/en/terminal-config](https://code.claude.com/docs/en/terminal-config)

最后一个容易被忽视的建议：**用语音输入**。

Boris 说你的说话速度是打字速度的三倍。更重要的是，用语音的时候你会不自觉地说得更详细，prompt 质量反而更高。

macOS 上按两下 fn 键就能启动语音输入。试试看？

![Image 8](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/photo-voice-input.jpg)

【8】使用 Subagents
---------------

这是一个进阶技巧，用好了很强大。

**最简单的用法：** 在任何请求后面加上“use subagents”。Claude 会自动把任务拆分给多个 Subagents 并行处理，相当于让它“开更多的线程”来解决问题。

另一个用法是用 Subagents 保持主会话的上下文干净。把一些独立的子任务分派出去，主会话只负责整体协调。这样主会话的 context window 不会被塞满中间过程。

Subagents 可以让任务并行，大大节约时间。比如我之前给文章生成插图的时候，就会让它跑 4 个 Subagents，把提示词文件路径传给每个 Subagent。不过实际用下来稳定性还不够，经常会有 Subagent 挂掉的情况，期待后续版本改进。

更高级的玩法：用 hook 把权限请求路由给 Opus 4.5（Anthropic 最强的模型），让它判断哪些操作是安全的可以自动批准，哪些需要人工确认。相当于给 Claude 加了一个“安全审核员”。

> 参考文档：[https://code.claude.com/docs/en/hooks#permissionrequest](https://code.claude.com/docs/en/hooks#permissionrequest)

![Image 9](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/screenshot-subagents.png)

【9】用 Claude Code 做数据分析
----------------------

![Image 10: Claude Code 数据分析](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/03-infographic-data-analysis.png)

这个用法可能出乎很多人意料。

Anthropic 团队把 BigQuery 的使用封装成了一个 skill，所有人都可以在 Claude Code 里直接用 `bq` 命令行查询数据。Boris 说他已经六个月没写过一行 SQL 了。

这不限于 BigQuery。任何有 CLI、MCP 或 API 的数据库都可以这样用。PostgreSQL、MySQL、MongoDB，都可以让 Claude 帮你写查询、跑分析、生成报告。

对于非工程师来说这可能更有价值。团队里的数据科学家们现在也在用 Claude Code 写查询、做可视化。工具的边界正在模糊。

【10】用 Claude Code 学习
--------------------

![Image 11: 四种学习模式](https://s.baoyu.io/imgs/2026-02-01/claude-code-tips-from-creator/04-infographic-learning-modes.png)

最后这个技巧是关于怎么用 Claude Code 来学习新东西。

首先，在 `/config` 里开启“Explanatory”或“Learning”输出风格。这样 Claude 在改代码的时候会解释“为什么”这么改，而不只是改完拉倒。

第二个用法：让 Claude 生成 **HTML 幻灯片**来解释不熟悉的代码。Boris 说效果出奇的好。你可以直接在浏览器里看一个图文并茂的代码讲解。

第三个用法：让 Claude 画 **ASCII 图**来解释协议、架构、数据流。纯文本的图表意外地有助于理解复杂系统。

最后一个高级玩法：有人搭建了一个“间隔重复学习”（spaced repetition，一种基于遗忘曲线的学习方法）skill。你先向 Claude 解释你对某个概念的理解，Claude 会追问来填补你的知识漏洞，然后把结果存下来。下次复习时再调出来。

* * *

Boris 在推文开头强调“没有唯一正确的使用方式”，这是最重要的一条。他的团队内部使用方式都各不相同。这些技巧是起点，不是终点。找到适合你自己的方式，比照搬别人的设置更重要。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/AI]]
- [[00-元语/skills]]
- [[00-元语/prompt]]
- [[00-元语/mcp]]
- [[00-元语/git-worktree]]
- [[00-元语/terminal]]
- [[00-元语/cli]]
- [[00-元语/CI]]
- [[00-元语/bug-fix]]
- [[00-元语/code-review]]
- [[00-元语/context-optimization]]
- [[00-元语/workflow]]
- [[00-元语/productivity]]
