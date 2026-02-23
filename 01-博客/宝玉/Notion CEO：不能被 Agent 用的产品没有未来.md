---
title: "Notion CEO：不能被 Agent 用的产品没有未来"

来源: "https://baoyu.io/blog/2026-02-19/notion-ceo-agent-future"
发布日期: "2026-02-19"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
Notion CEO Ivan Zhao 在播客中分享了公司向 AI Agent 平台转型的战略，重点披露了即将推出的企业级 Custom Agents、从按席位向按用量收费的商业模式转变，以及构建模型中立的多人协作生态的决心。

**2) 核心要点**
*   **Custom Agents 核心场景与成效：** 即将发布支持企业级权限管控的多人协作 Agent，主攻回答重复问题、分拣任务和撰写报告。Alpha 客户 Ramp 已借此自动解答 4000 个问题，节省约 2000 人类工时。
*   **内部 AI 深度应用：** Ivan 已通过对话式 Agent 接管个人收件箱，并使用连接 Snowflake 的 Agent 进行自然语言数据查询；目前 Notion 内部超 50% 的数据库由 Agent 而非人类构建。
*   **定价模式与 IPO 计划：** 商业模式正从“按席位收费”转向“按用量收费（Usage-based）”，Custom Agents 是首个试水产品。跑通该模式是 Notion 推进 IPO 的前提，预计需 2-3 个季度。
*   **SaaS 行业的未来判断：** 软件必须能被 Agent 调用，未来行业将从“卖工具”转向“卖工作与服务”，市场规模将扩大 10 倍。Notion 选择在行业封闭数据时反向拥抱开放和开发者。
*   **“瑞士”中立战略：** Notion 定位于模型中立的协作平台，不绑定单一 AI 厂商（如 OpenAI 或 Anthropic），允许客户自由选择并快速接入最新模型。
*   **新产品线规划：** 正在开发一款独立的 Chat-first Agent 应用程序（集成 Notion、日历和邮件上下文）；此外，一款由 16 岁高中生工程师主导开发的新产品预计于 5 月发布。
*   **AI 提效的“横向”特征：** 目前 AI 节省时间的方式是“横向的”（每个人省 5-10 分钟），尚未出现“纵向”的单一岗位被完全替代的组织结构变化。

**3) 风险与不足（基于原文明确提及）**
*   **商业模式转型风险：** 除开发者工具外，目前知识工作领域尚无软件公司成功规模化实现“按用量/成果收费”的转型；同时，高昂的 AI 推理成本对该定价模型构成挑战。
*   **技术与安全限制：** AI 模型的基础能力仍需提升，企业级权限和安全护栏（Guardrails）体系需要进一步完善。
*   **产品体验短板：** Notion 的新手学习曲线依然陡峭（目前需依赖 AI 辅助跨越）；此外，因工程资源全面向 AI 倾斜，Notion 至今仍未实现类似 Google Docs 的多人实时输入可见功能。

## 正文

Ivan Zhao 是 Notion 联合创始人兼 CEO。Notion 年收入超过 6 亿美元 ，估值约 110 亿美元 ，正从协作工具转型为 AI Agent 平台。他 2025 年底发表的文章《 钢铁、蒸汽机与无限大脑 》提出了“无限心智的管理者”概念，后来被微软 CEO Satya Nadella 在达沃斯论坛上引用。

这期 Access Podcast 里，Ivan 聊了不少内容：他怎么用 Agent 接管了邮件、为什么雇了一个 16 岁的高中生做程序员、Notion 正在推进的定价模式转型，以及他对 SaaS 行业未来的判断。

原始视频链接： https://www.youtube.com/watch?v=vR39zcMWY0I

## 要点速览

- Notion Custom Agents 即将公开发布，核心场景是回答重复问题、分拣任务和写状态报告，alpha 客户 Ramp 已用它节省约 2000 人类工时

- Ivan 基本不再用传统方式查看邮件，而是通过 Agent 对话式管理收件箱

- AI 目前节省的时间是“水平的”而非“垂直的”，每个人省 5-10 分钟，还没出现整个岗位被替代的结构性变化

- Notion 雇佣了 16 岁和 18 岁 的员工，Ivan 认为“很多经验不再重要，关键是能问对问题”

- Ivan 认为产品如果不能被 Agent 使用，未来堪忧；Notion 的策略是在别人关闭数据时选择开放

- Notion 正在从按席位收费转向 按用量收费 ，Custom Agents 是第一个采用新模式的产品

- 一个独立的 Agent Chat App 正在开发中，预计很快发布

## Custom Agents：核心做三件事

主持人问 Ivan，Custom Agents 是不是当年 Notion“让每个人创建自己的软件”愿景的回归。

Ivan 认为精神上是相通的。当年说的是“让普通人也能做软件”，现在变成了“让普通人也能做 AI Agent”。人们从各种角度在尝试这件事，OpenClaw 的爆火就是一个例子，人们买 Mac Mini，想要一个能在后台异步运行的 Agent 来干活。

【注：OpenClaw 是奥地利开发者 Peter Steinberger 创建的开源 AI Agent 项目，2026 年 1 月底爆红。2 月 14 日 Steinberger 宣布加入 OpenAI，负责“下一代个人 Agent”开发。】

但 Notion 要做的不一样。OpenClaw 是给极客自己玩的单人工具，而 Notion Custom Agents 要解决的是： 企业级的多人协作场景 ，带权限管控，7×24 小时运行。Ivan 把它比作“你可以创建一个工厂，让一批 Agent 在里面日夜工作”。

“What is OpenClaw spirit — asynchronous, can do almost everything you can do with a computer — but make it multiplayer, make it collaborative, with enterprise-grade permission and security.”
（OpenClaw 的精神是异步、几乎能做你电脑上的一切，但如果让它变成多人协作、企业级权限和安全，那就是我们在做的事。）

Custom Agents 的 三个核心场景 ：一是回答重复性问题，从知识库中检索答案；二是分类和转发工单、待办事项，以前大量 PM 和工程经理的日常就是把问题从一个 Slack 频道转到另一个；三是撰写状态报告和周报。

“Those three types of use cases, what we consider busy work... agents can do them pretty well, in sometimes superhuman level.”
（这三类我们认为是”忙活”的事……Agent 做得相当好，有时候是超人类水平。）

## AI 省的时间是”横向的”

主持人追问：自动化之后，人们到底多出来的时间在做什么？有没有看到实际成果？

Ivan 举了 Ramp 的例子。Ramp（一家企业信用卡和费用管理公司，约 3,000 人规模）去年全面迁移到 Notion，从原来分散使用六个协作工具缩减到一个。整合的第一步是省钱省时间、信息集中；但更重要的第二步是：一个平台意味着 Agent 有了统一的上下文。

Ramp 的销售团队遇到一个典型痛点：产品迭代太快，销售跟不上最新功能。他们设置了一个 Custom Agent，连接 Slack 频道、内部文档和邮件，自动回答销售人员的产品问题。几周内回答了 4,000 个问题 ，按每个问题平均 30 分钟计算，大约节省了 2,000 小时 人工。

但 Ivan 对 AI 节省时间的形态有一个观察：

“The shape of the time saving is very horizontal, it's not very vertical — meaning it's five minutes, ten minutes here and there for everyone, versus the entire role, the entire job done by agents.”
（AI 节省时间的形态是横向的，不是纵向的，是每个人这里省 5 分钟、那里省 10 分钟，而不是某个完整岗位被 Agent 替代。）

目前还看不到结构性的组织变化。每个人的日子都好过了一点点，但没有哪个岗位被完全取代。如果你问 Notion 团队“我们要把 Custom Agent 收回去”，会引发内部起义；但它还没有对应到任何人的全部职责。

Ivan 补充说，这不只是产品的问题，模型能力还需要提升，权限和护栏体系也需要完善。

## CEO 的邮件已经被 Agent 接管了

主持人问 Ivan 作为 CEO 自己怎么用 Agent。

每天早上他会收到一份 Daily Brief，告诉他当天需要关注什么。录制播客那天的 Brief 有三件事：确认一个正在购买的域名（与即将发布的新产品有关）、准备下午的播客录制、在招聘数据库中审核候选人，他们内部用 Custom Agent 每天自动推送即将发出 offer 的候选人给他审批。

更激进的是邮件。Ivan 说他 基本不再像普通人一样查看收件箱了 。

他的做法是设置一个 Custom Agent 来管理邮件，给这个 Agent 提供“他在做什么”和“他关心什么”的上下文。然后通过对话界面与这个 Agent 交互，而不是打开邮箱一封封地看。他可以直接告诉 Agent：“把今天我认为不重要的邮件归档。”

“I basically don't check my inbox like a normal person anymore. I largely talk to the custom agent that runs my inbox.”
（我已经不像正常人一样查收件箱了。我基本上是跟管理我收件箱的 Custom Agent 对话。）

还有一个“超级版”Agent 连接了 Notion 的 Snowflake 后端数据仓库，让 Ivan 可以用自然语言查询公司内部的几乎任何数据，结合 Slack 对话、Notion 文档和邮件的上下文。他把这个形容为" 口袋里的数据科学团队 "。

Ivan 前一天刚给《华尔街日报》的科技记者 Joanna Stern 做了 Notion 的私人 demo。Joanna 之后发推说“我终于理解 Notion 了，多亏了 AI”。Ivan 自嘲说，这说明 Notion 的新手引导还需要改进，但 AI 确实能帮用户跨过 Notion 陡峭的学习曲线。

目前 Notion 内部超过 50% 的数据库是由 Agent 而非人类构建的。

## 为什么雇一个 16 岁的高中生

主持人问 Notion 的招聘是否像 Shopify CEO Tobi Lütke 那样，要求“除非 AI 做不了，否则不许招人”。

Ivan 说没有那么严格，但整体方向是偏向更年轻、更早期的人才。因为他们假设更少、更乐观、更有冲劲，而且很多传统经验已经不那么重要了。

主持人 Alex 接着问：“你前几天雇了一个 16 岁的？”

Ivan 很意外：“你怎么知道的？”

故事是这样的：去年年中 Notion 雇了一个 18 岁的（刚高中毕业准备上大学），觉得这已经是有史以来最年轻的员工了。结果一个月后，他们在 YouTube 上发现一个人在做关于设计和 AI 的视频，做得很有水准，不算特别出名。他们邀请这个人来办公室参观。Ivan 在电梯里碰到他，随口问“你大学在哪读的？”对方说“我没上大学。”Ivan 以为他退学了。对方说：“不，我还在上高中十年级。”

这个 16 岁的孩子现在是 Notion 的工程师，正在负责一个尚未公开的新产品的“很大一块”开发工作。Ivan 说这个产品预计在 5 月 发布。

“A lot of experience doesn't matter anymore. You just have to be good, ask the right questions.”
（很多经验已经不重要了。你只需要够优秀、会问对的问题。）

Ivan 的逻辑是：过去 10-15 年有互联网伴随成长的人，学习速度的复利效应就已经不同了。而最近几年从小就有 ChatGPT 陪伴的人，又是一个不同的复利速率。

## 计算机科学两大流派：Ivan 的产品哲学根基

主持人问了一个从没有人问过 Ivan 的问题：如果当年就有这些 AI 工具，你会怎样做？

Ivan 说他不是研究者，即使倒回 5-10 年也不会去做 AI 研究。然后他提到一条历史线索。

计算机科学历史上一直有两个流派。东海岸是 AI 学派 ，从 1950 年代 MIT 的 John McCarthy 开始，核心是教计算机下棋、让机器变聪明。西海岸是 HCI（人机交互）学派 ，Douglas Engelbart 和后来的 Alan Kay，核心理念是“增强人类智力”（Augmenting Human Intellect），用工具放大人的能力。

【注：Douglas Engelbart 是“鼠标之父”和超文本概念先驱，1968 年在斯坦福展示了被称为“所有演示之母”的人机交互 demo。Alan Kay 是面向对象编程和图形界面的先驱，提出了“个人电脑”概念。】

Ivan 说吸引他创办 Notion 的、吸引他接触计算机的，始终是工具和界面那一边。

“What drew me to start Notion... it's the interface, the tool side — create the shape of something that you can hold in your hand that hopefully amplifies what makes us human.”
（吸引我创办 Notion 的……是界面，是工具那一面，创造一种你可以握在手中的东西，希望能放大人之所以为人的那些特质。）

他认为现在是一个特殊的时刻：AI 变得如此强大，如何用这种力量创造全新的工具形态，是一个还没有人真正回答好的问题。

Ivan 提到， 看板（Kanban board）又回来了 ，人们用了一两年的 IDE 来管理 Agent，结果发现管理多个 Agent 最好的方式还是看板。Ellis 拿出了他收藏的 SimCity 2000 原版包装盒，说管理 Agent 的感觉就像当模拟城市的市长。Ivan 顺着说，也许更像《文明》（Civilization）游戏，因为你最终要管理的不是一个而是多个“城市”。

## 不能被 Agent 用的产品没有未来

主持人直接问：Notion 怎么在 Agent 时代生存？OpenAI 和 Anthropic 可能想把你变成它们 Agent 的一个 API 调用。

Ivan 承认“SaaS 是否已死”是当下讨论很多的问题，但他认为这更像是“双城记”，变化巨大，但也有巨大的新机会。

核心论点： 软件公司不再只是在为人类构建产品，也要为 AI 模型和 Agent 构建。

“If your product cannot be used by agents, I don't think the future is really promising for you.”
（如果你的产品不能被 Agent 使用，我不认为你的未来会很光明。）

但这不只是威胁，也是机遇。Ivan 算了一笔账：过去 15 年科技行业主要是卖工具，以 SaaS 按人头订阅的方式。但更大的市场不是卖工具，而是 卖工作本身 ，那个市场大约是工具市场的 10 倍 。

“For the longest time, tech mostly selling tools... but the larger market is not just selling tools, it's selling the work and services — that's about 10 times the market.”
（一直以来，科技公司主要在卖工具……但更大的市场不只是卖工具，而是卖工作和服务，大约是 10 倍的市场规模。）

有些公司会很难转型。Ivan 没有点名，但暗示了一个标准：如果一个产品界面上有上千个按钮（他暗示的是那些 90 年代和 2000 年代早期的企业软件），Agent 很难理解怎么使用它。如果 Agent 不能用你的产品，而未来大部分知识工作由 Agent 完成，那你就会丢市场份额。

他还观察到：当整个 SaaS 行业在封闭数据和 API 端点时，Notion 选择了反其道而行。

“When the entire software market sort of closes down their data, it's a time to actually embrace open, embrace developers, embrace getting coding agents to access your data.”
（当整个软件市场都在封锁自己的数据时，恰恰是该拥抱开放、拥抱开发者、让编码 Agent 能访问你数据的时候。）

Ivan 说 Notion 历史上不算一个很”开发者中心”的公司，但这即将改变。Custom Agents 发布后的几周和几个月内，还会有更多面向开发者的功能推出。

## 从按人头收费到按用量收费

主持人问：你会转向 usage-based 定价吗？

“That's what we're doing right now.”（这就是我们现在在做的事。）

Custom Agents 是 Notion 第一个基于用量计费的产品 。Ivan 说他们的 alpha 客户（Ramp、Vercel、Clay、Cursor 等）已经开始采用，因为他们能清楚地看到 Agent 节省了多少真实的人工时间，这可以直接折算成美元价值，远比按人头收费有意义。

Ivan 提到，目前在知识工作领域， 还没有一家软件公司成功地规模化实现从卖工具到卖工作的转型 （开发者工具除外）。所有人都在互相观望。

“Not a single software company has done this, has scaled yet, outside developer tools.”
（除了开发者工具之外，还没有一家软件公司成功规模化这种转型。）

这直接关系到 Notion 的 IPO 时间表 。Ivan 说得很明确：IPO 的前提是先把 usage-based 商业模式跑通。他们选择在私有状态下完成这个转型，这样可以承受更大的风险，动作更快，同时观察公开市场的反应。他认为这可能需要“下一个两到三个季度”。

【注：2026 年 1 月底，Notion 完成了由 GIC、红杉和 Index Ventures 参与的 tender offer（员工和早期投资者可出售部分股份），估值约 110 亿美元。为了让更多员工参与，Notion 取消了期权的一年 cliff（锁定期）。多家媒体报道 Notion 年收入已超过 6 亿美元，其中超过一半来自 AI 相关产品。Bloomberg 报道称 Notion 正在考虑最早于 2026 年底上市。】

主持人 Ellis 指出，他见过的唯一在 usage-based 定价上说得同样清楚的人是 Brett Taylor（Sierra AI CEO），Sierra 从一开始就按成效收费。这个模型的好处是你可以按成果定价，可能收入更高；但风险是 AI 推理成本很高，Notion 本身就是大量购买各家 AI 公司 token 的买家。Ivan 没有否认这些挑战，但表示他相信这是未来方向，而且 Notion 想在这条路上走在前面。

## 邮件、日历与一个尚未公开的独立应用

主持人问：为什么当初要收购邮件和日历应用？

Ivan 说原始计划是“建自己的管道”，拥有邮件和日历数据的直接通路。这个长期计划没变，但有一条更快的路径可以创造价值：先做好 AI 对邮件和日历的工具调用（tool use）能力。Ivan 认为浏览器和电脑的使用（browser use、computer use）很快会成熟，到那时邮件和日历就不一定需要专门的管道了。但在此之前，做好高质量的 tool use 基础设施更重要。

他还透露，Notion 正在开发一个 独立的 Agent 聊天应用 。

这个应用是“chat-first”的，集成了 Notion 的所有上下文，可以用来管理日历和邮件，是一个单独的 App。Ivan 说“hopefully soon enough”就会发布。他的理由是：“现在一个小团队配上编码 Agent，几周内就能做出来。”

主持人 Ellis 开玩笑说，作为设计师最大的梦想就是用自家 App 填满 iPhone 的整个 dock。Ivan 回了一句：“那只剩 Slack 了吧。”

## 做 AI 模型中立的“瑞士”

谈到 Notion 如何抵御 AI 大公司的威胁，Ivan 给出了清晰的战略定位。

他在知识工作市场画了一张地图：OpenClaw 在一个象限，强大但复杂、面向极客、单人使用。Anthropic 的 Claude Cowork 在另一个象限，文件处理很强，律师和财务团队喜欢用，但也偏单人。

Notion 要占的位置是：从一开始就为 多人协作和企业场景 设计，坐在云端， 模型中立 。

“There's a value to be neutral, there's a value to be a Switzerland of all the model providers.”
（保持中立有价值，做所有模型提供商的“瑞士”有价值。）

【注：瑞士自 1815 年以来一直奉行永久中立政策，不参与任何军事联盟或对外战争，在两次世界大战中均保持中立。因此英文中常用“Switzerland”比喻在竞争各方之间保持中立、不选边站的角色。Ivan 这里的意思是 Notion 不绑定任何一家 AI 模型提供商，而是同时支持所有主流模型，让客户自由选择。】

实操层面，当 OpenAI 或 Anthropic 发布新模型时，Notion 次日甚至当天就接入。客户想用哪个模型就用哪个。这种中立性在企业客户眼里是有价值的。

加上 Notion 已有 5 年以上的协作产品积累、文档和项目管理工具、完整的企业权限体系，这些构成了一个在当前市场还没有太多竞争对手的定位。Ivan 说他们要在接下来几个季度“钉死”这个位置。

## “无限心智的管理者”

主持人问 Ivan 被 Satya Nadella 在达沃斯世界经济论坛上引用是什么感受。

【注：2026 年 1 月，微软 CEO Satya Nadella 在达沃斯与前英国首相 Rishi Sunak 对话时，引用了 Steve Jobs 的“思维的自行车”和 Bill Gates 的“指尖上的信息”之后，说“All of us are going to be managers of infinite minds”，这个短语来自 Ivan Zhao 在 2025 年 12 月发表的文章“ Steam, Steel, and Infinite Minds ”。】

Ivan 说很受宠若惊。微软是他尊敬的公司，它实现了“每张桌上、每个家里都有一台个人电脑”的愿景。Steve Jobs 是他进入科技行业时仰望的人。而 Satya 是一个“真正懂产品的人”，他是从 Excel 等产品一路做上来的。

至于“Manager of Infinite Minds”这个短语是怎么来的，他不确定是不是自己原创的。可能是 Notion Agent 反复迭代了很多次，某些词就冒出来了。他更像是扮演了编辑角色，“wow that feels right, so I kept it”。

Ivan 说他喜欢用隐喻思考。Steve Jobs 说电脑是“思维的自行车”，我们在信息高速公路上骑了几十年。AI 的到来意味着 从骑自行车升级到开汽车 。Ivan 说当他向团队和其他人表达这个比喻时，人们一下就懂了。

他在 Notion 博客上的原文中写到：联合创始人 Simon 从一个“10 倍工程师”变成了“30-40 倍工程师”，不是因为他写代码更快，而是因为他同时指挥三四个 AI 编码 Agent，中午吃饭前或睡前排好任务，让它们在他不在时继续工作。“He's become a manager of infinite minds.”（他成为了无限智能的管理者。）

## Notion 还缺什么

在访谈接近尾声时，Ellis 提到 Notion 至今仍然看不到其他人实时输入的内容，这是 Google Docs 仍然领先的地方。Ivan 的回答是：技术架构上他们能做到，但问题是“我们是把工程力量花在 AI 上，还是回去跟 Google Docs 竞争？”

主持人开玩笑说“再雇几个青少年，一天就搞定了”。Ivan 回应：“你们有表弟或外甥要推荐吗？我们很乐意收。”

最后，主持人问 Ivan 有没有在跑 Notion AI 会议笔记。Ivan 说没有，因为“我们基本上聊的都是已经聊过的东西。你们需要问更好的问题”。主持人 Alex 评价：“这是一种很现代的 burn（调侃）。”

Ivan Zhao 在这次对话中的核心立场可以概括为三点： 第一 ，Agent 时代的核心竞争力是你的产品能否被 Agent 使用，而不是能否被人使用； 第二 ，SaaS 行业必须从卖工具转向卖工作和成果，这是一个 10 倍大的市场，但目前没有人成功做到； 第三 ，Notion 的策略是做模型中立的“瑞士”，做多人协作优先的 Agent 平台，同时在行业封闭时选择开放。

值得继续关注的信号：Custom Agents 正式发布后的企业采纳速度、usage-based 定价的具体方案和客户反馈、5 月预计发布的由 16 岁工程师参与开发的新产品，以及 Notion 独立 Agent 聊天应用的推出时间。

完整访谈视频： https://www.youtube.com/watch?v=vR39zcMWY0I

## 相关文档

- [[01-博客/Ivan Zhao/钢铁、蒸汽与无限心智|钢铁、蒸汽与无限心智]]；关联理由：引用；说明：本文在“无限心智的管理者”部分直接引用了该文提出的核心隐喻与论证脉络。
- [[01-博客/宝玉/AI 新纪元：无限大脑的重构力——从钢铁蒸汽到未来组织，告别后视镜思维|AI 新纪元：无限大脑的重构力——从钢铁蒸汽到未来组织，告别后视镜思维]]；关联理由：延伸思考；说明：两文都讨论 Agent 时代的组织重构，该文对本访谈观点做了更系统的延展分析。

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/AI]]
- [[00-元语/OpenAI]]
- [[00-元语/Claude]]
- [[00-元语/interview]]
- [[00-元语/workflow]]
- [[00-元语/productivity]]
- [[00-元语/知识工作]]
- [[00-元语/无限大脑]]
