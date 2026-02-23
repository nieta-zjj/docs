---
title: "Claude Code  之父 Boris 的 9 条实战技巧：原来高手的配置这么“朴实无华”"

来源: "https://baoyu.io/blog/claude-code-boris-9-practical-tips-simple-config"
发布日期: "2026-01-02"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
Claude Code 之父 Boris 分享了其“开箱即用”的极简配置理念，强调通过多任务并行、使用 Opus 模型、维护 CLAUDE.md 项目记忆、先计划后执行以及建立自动化验证闭环来最大化 AI 编程效率。

**2) 核心要点**
*   **极简配置理念**：Claude Code 开箱即用效果极佳，无需过度追求复杂的“最佳实践”或定制，适合个人节奏最重要。
*   **多任务并行**：日常同时运行 5 个终端实例与 5-10 个网页端任务，利用 `&` 或 `--teleport` 在本地与网页间无缝切换，让 Agent 自主执行，人工仅在需要确认时介入。
*   **模型选择**：所有任务均使用 Opus 4.5 配合 thinking 模式；虽然单次响应较慢，但因纠错次数少、工具调用准，整体交付速度更快。
*   **团队共享记忆**：将 `CLAUDE.md` 作为项目说明书提交至 Git 团队共享，每次发现 AI 错误即补充规则；并在 PR 中通过 GitHub Action（`@.claude`）自动追加新规则。
*   **Plan 模式优先**：通过 `Shift+Tab` 切换至 Plan 模式，先与 AI 讨论并对齐执行计划，确认无误后再生成代码，大幅降低返工成本。
*   **自动化重复工作**：将高频操作封装为斜杠命令（存入 `.claude/commands/`），利用子 Agent 处理特定任务（如代码简化、端到端测试），并使用 PostToolUse Hook 自动格式化代码。
*   **工具链集成**：通过 `/permissions` 预批常用命令（存入 `.claude/settings.json`），并利用 MCP 协议直接接入 Slack、BigQuery 和 Sentry 等外部工具。
*   **长任务处理**：针对耗时任务，利用 Stop Hook、`ralph-wiggum` 插件（Bash 循环持续改进）或沙箱免打扰模式，让 AI 自主运行并自我纠错。
*   **核心验证机制**：赋予 Claude 自我验证能力（如运行测试套件、浏览器 UI 测试），建立反馈闭环，可将最终产出质量提升 2 到 3 倍。
*   **基础设施支撑**：高效的多任务并行高度依赖于完善的 Git 版本控制、CI（持续集成）自动化测试以及人工代码审查（PR）工作流。

**3) 风险与不足**
*   **成本问题**：全面使用 Opus 4.5 模型会导致更高的使用成本。
*   **使用者门槛**：多线程 Agent 工作模式对开发者分配任务和上下文切换的能力要求极高，对习惯单任务开发的传统模式构成巨大挑战。
*   **基础设施依赖风险**：若缺乏完善的 Git 代码管理和 CI/代码审查工作流，多任务并行将无法有效开展，且出现问题时无法回滚。
*   **权限安全风险**：`--dangerously-skip-permissions` 属于危险选项，日常应避免使用（改用预授权），仅建议在沙箱环境的长任务中使用以防打断。

## 正文

Boris Cherny 在 Anthropic 内部有个绰号：Claude Code 之父。他最近在 X 上很活跃，于是很多人问 Boris：你自己到底怎么用 Claude Code？他刚在 X 上分享了 9 条实战技巧。

没有你想象的那么多技巧，每一条都朴实无华。

【1】核心理念：Claude Code 的最佳实践并没有标准答案

Boris 开场就说：

> My setup might be surprisingly vanilla! Claude Code works great out of the box, so I personally don't customize it much. 我的配置可能出乎你意料地“原装”。Claude Code 开箱即用效果就很好，我个人没做太多定制。

也能理解，那些最佳实践，比如 Skills、Plugins，作为 Claude Code 开发者，他们早就作为功能内置了。

使用 Claude Code 没有唯一正确的方式。团队故意把它设计成可以随便折腾的样子，你想怎么用、怎么改、怎么魔改都行。Claude Code 团队内部每个人的用法都完全不同。

所以没必要去费力找“最佳实践”，适合自己的节奏最重要。

【2】多 Agent 任务并行：同时开十几个 Claude

![Image 1](https://baoyu.io/uploads/2026-01-02-1767391980628-22c0e3a5-6b11-46c1-891b-f0bdba1278b6.png)

Boris 的日常是这样的：终端里开 5 个 Claude Code 实例，标签页编号 1 到 5，开着系统通知，哪个需要输入就跳过去处理。

![Image 2](https://baoyu.io/uploads/2026-01-02-1767392000913-0edf6bd2-47ea-4baf-ab5a-f2b1ca6df605.png)

同时，他还在 claude.ai/code 网页版上跑 5 到 10 个任务。终端和网页可以互相“交接”：用&符号把本地会话转到网页，或者用--teleport 在两边来回切换。

他每天早上和白天会从手机 Claude 应用上启动几个任务，晚点再回来看结果。

这种“多线程”工作方式的核心逻辑是：Claude Code 擅长自主执行，很多任务不需要你盯着。你启动任务、给个方向，让它跑着，自己去忙别的。等它需要你确认的时候再切回来。

这跟传统的“人敲一行代码、AI 补几行”完全是两种节奏。但这也对使用者有更高的要求，你需要擅长给 Agent 分配任务，并且能随时在多个任务之间切换。对于习惯了自己开发，同时只有一个任务进行的传统开发模式来说，是个很大挑战。

惭愧的说，虽然我也常用 Coding Agent，还是不习惯太多任务同时运行，今年要加强这方面的练习。

【3】模型选择：为什么用 Opus 而不是更快的 Sonnet

Boris 说他所有任务都用 Opus 4.5 加上 thinking 模式。这是他用过最好的编程模型。

有人会问：Opus 不是比 Sonnet 更大、更慢吗？Boris 的回答是：虽然单次响应慢一点，但你需要纠正它的次数少得多，工具调用也更准确，最终算下来反而更快。

这点其实我一直很认同，写代码这种事不能求快，还是得质量高，如果一个快模型需要你来回纠正三次，不如用个慢模型一次搞定。时间不只是模型响应时间，还有你的注意力和精力成本。

唯一的问题就是 Opus 成本更高。

【4】CLAUDE.md：团队共享的“项目记忆”

CLAUDE.md 是 Claude Code 的一个特殊配置文件，放在项目根目录。每次启动 Claude Code，它会自动读取这个文件，把里面的内容当作“背景知识”。你可以理解为：这是你给 AI 写的项目说明书，告诉它这个项目的架构、规范、注意事项。

![Image 3](https://baoyu.io/uploads/2026-01-02-1767392047324-97ba2ffe-3389-499a-97c7-bdbc17cd03f6.png)

Boris 团队的做法是：整个 Claude Code 仓库共用一个 CLAUDE.md，提交到 Git 里，所有人一起维护。每周都有人往里加东西。规则很简单：每次看到 Claude 做错了什么，就把“别这样做”写进去，下次它就知道了。

![Image 4](https://baoyu.io/uploads/2026-01-02-1767392115435-782996b2-9e0d-4b34-a234-994dc1f56150.png)

更有意思的是，他们在代码审查时也会用到这个机制。Boris 会在同事的 PR 里@.claude，让 Claude 把某条新规则加到 CLAUDE.md 里。这是通过 Claude Code 的 GitHub Action 实现的。

Dan Shipper 管这种做法叫“复利工程”：每一次纠错都变成团队资产，让 AI 越来越懂你们的项目。

如果你还没用过 CLAUDE.md，或者没像他们这样频繁更新规则，强烈建议试试。最简单的起步方式是运行/init 命令，Claude 会自动分析项目结构，生成一个初始版本。然后你边用边补充，看到不对的地方就加进去。

【5】Plan 模式：先想清楚再动手

![Image 5](https://baoyu.io/uploads/2026-01-02-1767392129337-1b3fbe50-0d62-42a3-9544-5ae5e4001652.png)

Boris 说，他大多数会话都从 Plan 模式开始。在 Claude Code 中按两下 Shift+Tab 就能切换。

Plan 模式下，Claude 不会直接改代码，而是先给你一个执行计划。你可以来回讨论、修改计划，直到满意为止。然后切到自动接受模式，Claude 通常能一次性完成。

“好的计划真的很重要”，这个习惯其实是把软件开发的经典智慧搬到了 AI 协作里：先设计再编码。很多人用 AI 写代码的问题是直接开干，结果方向错了返工成本很高。花几分钟对齐计划，能省几小时的返工。

【6】自动化重复工作：斜杠命令和子 Agent

![Image 6](https://baoyu.io/uploads/2026-01-02-1767392144770-9e0c6563-7b90-4317-b18b-b0041c8aa0bd.png)

Boris 有几个每天要用几十次的操作，他把它们做成了斜杠命令。比如"/commit-push-pr"，一键完成提交、推送、创建 PR。

斜杠命令本质上是 Markdown 文件，放在.claude/commands/目录下。你可以用自然语言写指令，还能嵌入 bash 脚本预先获取一些信息，减少模型来回调用的次数。这些命令可以提交到 Git，整个团队共享。

![Image 7](https://baoyu.io/uploads/2026-01-02-1767392162735-19e04f57-b7b7-467a-bb3f-184f24f6c312.png)

除了斜杠命令，他还用子 Agent（[https://code.claude.com/docs/en/sub-agents](https://code.claude.com/docs/en/sub-agents) ）。子 Agent 是独立的 Claude 实例，专门干某类活。比如他有个 code-simplifier 子 Agent，在主 Claude 完成工作后自动简化代码；还有个 verify-app 子 Agent，专门负责端到端测试。

这两个功能的共同点是：把你反复做的事情固化下来，让 Claude 自己调用。你不用每次都重复解释，也不用记住各种命令细节。

![Image 8](https://baoyu.io/uploads/2026-01-02-1767392196338-e22d7b84-3f2f-41ad-b363-cd7b3f16bcad.png)

使用 PostToolUse Hook 来格式化 Claude 生成的代码。Claude 通常能自动生成格式良好的代码，而这个 Hook 会处理最后 10% 的代码，以避免后续在持续集成 (CI) 过程中出现格式错误。

【7】安全与集成：权限配置和外部工具

![Image 9](https://baoyu.io/uploads/2026-01-02-1767392327598-eb1a93fc-8a7a-45a6-b1dc-344d20b4f17f.png)

Boris 不用--dangerously-skip-permissions 这个“危险”选项。相反，他用/permissions 命令预先批准一些常用的安全命令，避免每次都弹确认框。这些配置保存在.claude/settings.json 里，团队共享。

![Image 10](https://baoyu.io/uploads/2026-01-02-1767392360739-cf8b5f0b-69c5-423b-ab3a-e8ddb65af83b.png)

更强大的是 MCP 服务器集成。MCP 是 Model Context Protocol 的缩写，是 Anthropic 推出的让 AI 连接外部工具的标准协议。通过 MCP，Claude Code 可以直接：

*   搜索和发送 Slack 消息

*   跑 BigQuery 查询回答数据问题

*   从 Sentry 拉错误日志

Boris 团队把 Slack 的 MCP 配置也提交到了仓库，所有人开箱即用。

这意味着 Claude Code 不只是个编程工具，而是能调用你整个工具链的“全能助手”。

【8】长任务处理：让 Claude 自己验证

![Image 11](https://baoyu.io/uploads/2026-01-02-1767392385108-9004f62a-8158-499c-8010-610045248cd6.png)

对于跑很久的任务，Boris 有几个策略：

一是让 Claude 完成后自动用后台 Agent 验证结果。你可以在提示词里要求，也可以用 Stop Hook 更确定性地触发。

> 注：Hooks 是 Claude Code 的"钩子"机制，让你在 Claude 执行操作的特定时刻插入自定义逻辑。你可以把它理解为"触发器"：当某个事件发生时，自动执行你预设的命令或脚本。 Stop Hook 就是在 Claude 完成响应、准备交还控制权时。 相关文档：[https://code.claude.com/docs/en/hooks](https://code.claude.com/docs/en/hooks)

二是用 ralph-wiggum 插件 [https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-wiggum](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-wiggum) 。这是一个有趣的设计：“Ralph 本质上就是一个 Bash 循环”：想象一个简单的死循环（while true），它不停地把同一个任务说明书（提示词文件）喂给 AI 智能体，让它一遍又一遍地改进工作，直到彻底完成。

三是在沙箱环境里用--permission-mode=dontAsk 或--dangerously-skip-permissions，让 Claude 不被权限确认打断，自己跑到底。

核心思路是：既然是长任务，就别让它等你。给它足够的自主权和自我纠错能力。

【9】最重要的一条：给 Claude 验证能力

Boris 把这条放在最后，说这可能是获得好结果最重要的因素。

如果 Claude 能验证自己的工作，最终产出质量能提升 2 到 3 倍。

他举了个例子：他们提交到 claude.ai/code 的每一个改动，Claude 都会用 Chrome 扩展自己测试：打开浏览器、测试 UI、发现问题就迭代，直到功能正常、体验合理。

验证方式因场景而异。可能是跑一个 bash 命令，可能是跑测试套件，可能是在浏览器或手机模拟器里测试应用。形式不重要，重要的是：让 AI 有反馈闘环。

这个道理其实很朴素。人类工程师也是靠“写代码—测试—看结果—修改”这个循环来保证质量的。AI 也一样。如果它只能写不能测，就像闭着眼睛做事，质量全靠运气。

Boris 的建议是：投入精力把验证机制做扎实。这是回报率最高的投资。

![Image 12](https://baoyu.io/uploads/2026-01-02-1767392416023-840bd6ae-f940-4f8e-9940-bbfd8c186d4e.png)

【10】 那些你看不见的东西

Boris 有一点没提的就是基础的 源代码管理/ CI（持续集成） / 代码审查 workflow，这些事情可能对他们大厂做习惯了的来说是平常，默认就应该有的事情

比如说当他用 Claude Code 完成一个任务，不会说直接合并到主分支，而是提交一个 PR。

提交 PR 后，在 CI 服务器上会自动跑所有的 lint 和自动化测试，如果测试失败 PR 是无法合并的。

一个 PR 通过了所有的自动化测试，还需要有人去做代码审查（当然可以 AI 辅助，但还是需要人确认），如果代码审查发现问题，是需要继续修改的。

这些也是他们能多任务并行的基础，如果没有做好这些基础工作流，就无法做到多任务并行。

对于很多个人开发者并没有习惯去搭建一个 CI/代码审查的 工作流，甚至连 Git 代码管理都没有做，出问题都没法回滚。

【11】高手用剑无招胜有招

武侠小说里面，高手用剑没有那么多花里胡哨的招式，无招胜有招。Boris 没有炫耀复杂的定制配置，没有神秘的私藏提示词，用的就是官方功能。区别在于：他真正理解这些功能背后的逻辑，然后把它们组合成高效的工作流。

并行工作是因为 Claude 能自主执行；用 Opus 是因为综合效率更高；CLAUDE.md 是把纠错变成资产；Plan 模式是先想清楚再动手；斜杠命令和子 Agent 是自动化重复劳动；验证机制是给 AI 反馈闭环。

如果你刚开始用 Claude Code，不必急着研究各种高级配置。先把基础用好：学会并行，学会规划，学会积累 CLAUDE.md，学会给 AI 验证手段。

等你真正遇到瓶颈了，再去折腾那些花活不迟。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/mcp]]
- [[00-元语/github]]
- [[00-元语/CI]]
- [[00-元语/code-review]]
- [[00-元语/terminal]]
- [[00-元语/cli]]
- [[00-元语/memory]]
- [[00-元语/security]]
- [[00-元语/prompt]]
- [[00-元语/workflow]]
