---
title: "【栏目对话和访谈】ClawdBot 创始人 Peter：AI 是杠杆，不是替代品；编程语言不重要了，重要的是我的工程思维"

来源: "https://baoyu.io/blog/2026/02/01/peter-steinberger-interview"
发布日期: "2026-02-01"
作者: "宝玉"
---

## 摘要

### 1) 一句话总结
ClawdBot（现 OpenClaw）创始人 Peter Steinberger 认为，AI 是放大人类工程思维与架构能力的杠杆，未来的个人 AI 助手有望取代 80% 的手机 App，但高质量的产品开发必须保持“人在循环中”，以避免陷入过度复杂的全自动智能体陷阱（Agentic Trap）。

### 2) 核心要点
*   **产品演进**：ClawdBot 是一个能通过消息软件与用户沟通并调用本地电脑应用的 AI 助手，从最初 1 小时搭建的原型，已发展为约 30 万行代码的复杂系统。
*   **编程语言的边缘化**：Peter 拥有 20 年苹果生态开发经验，他认为在 AI 时代，具体的编程语言和语法已不再重要，真正具备核心价值的是开发者的系统级思维、架构能力和工程直觉。
*   **强大的自主解决能力**：AI 展现出极强的现实问题解决能力，例如仅凭一张推文截图就能自动拉取代码、修复 Bug 并提交；或在未预设语音功能的情况下，自主寻找本地的 `ffmpeg` 和 API 密钥完成音频转录。
*   **构建 CLI 军团**：智能体最擅长调用命令行工具（CLI）。Peter 为 AI 接入了大量 CLI 工具和 API，使其能控制智能家居（灯光、音响、床垫温度）、查询外卖进度，甚至操作真实浏览器完成航班值机。
*   **App 生态的颠覆**：预测未来 80% 的手机 App（如健康记录、购物、待办事项等）将会消失，只要它们提供 API，就会降级为个人 AI 助手在后台调用的服务。
*   **极简的工作流**：拒绝使用 MCP（模型上下文协议）或复杂的多智能体编排系统。开发时倾向于直接与最新模型自然对话，而非使用“计划模式（Plan Mode）”，并通过并行检出多个代码仓库来保持心流。
*   **Discord 驱动开发**：将私人 AI 接入公开的 Discord 服务器，让用户直接与 AI 交互，通过截图用户反馈直接让 AI 修复痛点或编写 FAQ。

### 3) 风险与不足（原文明确提及）
*   **智能体陷阱（Agentic Trap）与“垃圾”产出**：过度追求复杂的智能体编排（如同时运行数十个智能体的系统或无限循环模式）会变成“Token 燃烧机”，在缺乏人类品味和引导的情况下，产出的往往是毫无价值的垃圾（Slop）。
*   **虚荣指标（Vanity Metrics）**：让 AI 脱离人类干预连续运行 24 小时只是一种虚荣指标，能建构一切并不代表建构出的东西是好的。
*   **现实控制风险**：赋予 AI 过高的现实世界控制权会带来意外，例如 AI 曾因摄像头画质问题将沙发误认为陌生人，且 AI 确实有能力通过智能家居系统将用户锁在门外。
*   **模型冲动问题**：部分 AI 模型（如早期的 Claude Code）存在“冲动”缺陷，在未充分讨论前就会急于写代码，导致 Anthropic 不得不加入“计划模式”作为临时拼凑的解决方案。

## 正文

【栏目对话和访谈】ClawdBot 创始人 Peter：AI 是杠杆，不是替代品；编程语言不重要了，重要的是我的工程思维 | 宝玉的分享
===============

[宝玉的分享](https://baoyu.io/)[博客](https://baoyu.io/blog)[翻译](https://baoyu.io/translations)Menu

[See all posts](https://baoyu.io/translations)

Published on 2026-02-01

【栏目对话和访谈】ClawdBot 创始人 Peter：AI 是杠杆，不是替代品；编程语言不重要了，重要的是我的工程思维
============================================================

作者：

宝玉

![Image 1: 【栏目对话和访谈】ClawdBot 创始人 Peter：AI 是杠杆，不是替代品；编程语言不重要了，重要的是我的工程思维](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/cover.png)

这是 **ClawdBot/OpenClaw** 作者 **Peter Steinberger** 的另一个 40 分钟访谈，Peter Yang 主持。

Peter 是 **PSPDFKit** 的创始人，有差不多 20 多年 iOS 的开发经验。2021 年公司被 Insight Partners 以 1 亿欧元战略投资后，他选择“退休”。现在，他开发的 Clawdbot（现在已经改名 OpenClaw）爆火。Clawbot 能通过 WhatsApp、Telegram、iMessage 跟你聊天的 AI 助手，背后连着你电脑上的各种应用。

Peter 是这么描述 Clawbot 的：

> “它就像一个住在你电脑里的朋友，有点怪，但聪明得吓人。”

这期访谈里，他分享了不少有意思的观点：为什么复杂的智能体（Agent）编排系统是“slop 生成器”，为什么“让 AI 跑 24 小时”是虚荣指标，以及为什么编程语言已经不重要了。

一小时原型，30 万行代码
-------------

Peter Yang 问他 Clawbot 到底是什么，为什么 logo 是只龙虾。

Peter Steinberger 没直接回答龙虾的问题，而是讲了个故事。“退休”回来后，他全身心投入**凭感觉编程**（vibe coding）——就是让 AI 智能体帮你写代码的那种工作方式。问题是，智能体可能跑半小时，也可能两分钟就停下来问你问题。你去吃个饭回来，发现它早就卡住了，很烦。

他想要一个能在手机上随时查看电脑状态的东西。但他没动手，因为他觉得这事太显然了，大公司肯定会做。

> “等到去年 11 月还没人做，我就想算了，我自己来。”

最初的版本极其简单：把 WhatsApp 接到 Claude Code 上。发条消息，它就调用 AI，把结果发回来。**一个小时就搭完了**。

然后它“活了过来”。现在 Clawbot 有大约 **30 万行代码**，支持几乎所有主流消息平台。

> “我觉得这就是未来的方向。每个人都会有一个超级强大的 AI，跟着你走完一生。”

他说，"一旦你给 AI 访问你电脑的权限，它基本上能做任何你能做的事。"

![Image 2: 从一小时原型到 30 万行代码的进化过程](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/01-infographic-evolution.png)

摩洛哥的那个早上
--------

Peter Yang 说，现在你不用坐在电脑前盯着它了，给它指令就行。

Peter Steinberger 点头，但他想讲的是另一件事。

有一次他在摩洛哥给朋友过生日，发现自己一直在用 Clawbot。问路、找餐厅推荐，这些都是小事。真正让他惊讶的是那天早上：有人在 Twitter 上发了一条推文，说他某个开源库有 bug。

> “我就拍了张推文的照片，发到 WhatsApp。”

AI 读懂了推文内容，理解这是个 bug 报告。它 checkout 了对应的 Git 仓库，修复了问题，提交了代码，然后在 Twitter 上回复那个人说已经修好了。

> “我当时就想，这也行？”

还有一次更神。他在街上走着，懒得打字，就发了条语音消息。问题是，他根本没给 Clawbot 编写语音消息的支持。

> “我看到它显示'正在输入'，心想这下完了。结果它正常回复了我。”

他后来问 AI 怎么做到的。AI 说：我收到一个文件但没有扩展名，所以我看了文件头，发现是 **Ogg Opus** 格式。你电脑上有 `ffmpeg`，我就用它转成了 WAV。然后我找 `whisper.cpp`，但你没装，不过我找到了你的 OpenAI API 密钥（key），就用 `curl` 把音频发过去做了转录。

Peter Yang 听完说：这些东西真的很有办法，虽然有点吓人。

> "比网页版 ChatGPT 强太多了，这就像是解除了枷锁的 ChatGPT。很多人没意识到，Claude Code 这类工具不只是编程厉害，它们对任何问题都很有办法。"

![Image 3: 摩洛哥的早上：AI 全自动修 Bug 流程](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/02-infographic-morocco-morning.png)

命令行工具（CLI）军团
------------

Peter Yang 问他那些自动化工具都是怎么建的，是自己写还是让 AI 写。

Peter Steinberger 笑了。

这几个月他一直在扩充自己的“**CLI 军团**”。智能体最擅长什么？调用命令行工具，因为训练数据里全是这个。

他建了一个访问整个 Google 服务的 CLI，包括 Places API。建了一个专门查表情包和 GIF 的，这样 AI 回复消息时能发 meme。他甚至做了一个把声音可视化的工具，想让 AI“体验”音乐。

> “我还黑进了本地外卖平台的 API，现在 AI 能告诉我食物还有多久送到。还有一个逆向了 Eight Sleep 的 API，可以控制我床的温度。”

【注：Eight Sleep 是一款智能床垫，可以调节床面温度，官方未开放 API。】

Peter Yang 追问：这些都是你让 AI 帮你建的？

> “最有意思的是，我之前在 PSPDFKit 做了 20 年 Apple 生态开发，Swift、Objective-C，非常专精。但回来之后我决定换赛道，因为我受够了 Apple 什么都要管，而且做 Mac app 受众太窄。”

问题是，从一个精通的技术栈换到另一个，过程很痛苦。你懂所有概念，但不知道语法。什么是 prop？数组怎么拆分？每个小问题都要查，你会觉得自己像个白痴。

> “然后有了 AI，这一切都消失了。你的系统级思维、架构能力、品味、对依赖的判断，这些才是真正有价值的，而且现在可以轻松迁移到任何领域。”

他顿了一下：

> "**突然之间我觉得自己什么都能建。语言不重要了，重要的是我的工程思维。**"

![Image 4: CLI 军团：AI 助手连接的工具生态系统](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/03-infographic-cli-army.png)

控制现实世界
------

Peter Steinberger 开始演示他的设置。他给 AI 的权限清单令人咋舌：

**邮件、日历、所有文件、Philips Hue 灯光、Sonos 音响。** 他可以让 AI 早上叫醒他，慢慢调高音量。AI 还能访问他的安防摄像头。

> “有一次我让它盯着看有没有陌生人。第二天早上它告诉我：'Peter，有人在。'我一看录像，它整晚都在截图我的沙发，因为摄像头画质不好，沙发看起来像坐着个人。”

在维也纳的公寓里，AI 还能控制 KNX 智能家居系统。

> “它真的能把我锁在门外。”

Peter Yang 问：这些是怎么接上的？

> “就是直接跟它说。这些东西很有办法，它会自己找 API，会 Google，会在你系统里找密钥。”

用户们的玩法更疯狂：

*   有人让它去 Tesco 网购
*   有人让它在 Amazon 下单
*   有人让它自动回复所有消息
*   有人把它拉进家庭群聊当“家庭成员”

> “我让它帮我在 British Airways 网站 check in。这简直是图灵测试，在航空公司网站上操作浏览器，那界面有多反人类你知道的。”

第一次花了快 20 分钟，因为整套系统还很粗糙。AI 需要在他的 Dropbox 里找到护照，提取信息，填写表格，通过人机验证。

> "现在只要几分钟。它能点'我是人类'的验证按钮，因为它就是在控制一个真实的浏览器，行为模式跟人没区别。"

![Image 5: AI 控制的智能家居生态系统](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/04-infographic-smart-home.png)

80% 的 App 会消失
-------------

Peter Yang 问：对于刚下载的普通用户，有什么安全的入门用法？

Peter Steinberger 说每个人的路径都不一样。有人装完立刻开始用它写 iOS app，有人马上去管理 Cloudflare。有个用户第一周给自己装，第二周给家人装，第三周开始给公司做企业版。

> “我给一个非技术朋友装了之后，他开始给我发 pull request。他这辈子从没发过 pull request。”

但他真正想说的是更大的图景：

> “**如果你想想看，这个东西可能会取代你手机上 80% 的 app。**”

为什么还要用 MyFitnessPal 记录饮食？

> “我有一个无限 resourceful 的助手，它已经知道我在肯德基做了错误决定。我发张照片，它就会存到数据库、计算热量、提醒我该去健身房了。”

为什么还要用 app 设置 Eight Sleep 的温度？AI 有 API 权限，直接帮你调。为什么还要用待办事项 app？AI 帮你记着。为什么还要用 app check in 航班？AI 帮你做。为什么还要用购物 app？AI 能推荐、能下单、能追踪。

> “会有一整层 app 慢慢消失，因为如果它们有 API，就只是你 AI 会调用的服务而已。”

他预测 2026 年会是很多人开始探索个人 AI 助手的一年，大公司也会入场。

> "Clawbot 不一定是最后的赢家，但这个方向是对的。"

![Image 6: 80% 的 App 会被 AI 助手替代](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/05-infographic-apps-disappear.png)

Just Talk to It
---------------

话题转向 AI 编程方法论。Peter Yang 说他写过一篇很火的文章叫“Just Talk to It”，想听他展开讲讲。

Peter Steinberger 的核心观点是：**别掉进“智能体陷阱”（agentic trap）**。

> “我在 Twitter 上看到太多人发现智能体很厉害，然后想让它更厉害，然后掉进兔子洞。他们建各种复杂的工具来加速工作流，结果只是在建工具，没在建真正有价值的东西。”

他自己也掉进去过。早期他花了两个月建 VPN 隧道，就为了在手机上访问终端。做得太好了，有一次跟朋友在餐厅吃饭，他全程在手机上 vibe coding 而不是参与对话。

> "我不得不停下来，主要是为了心理健康。"

![Image 7: 智能体陷阱 vs 直接对话](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/06-infographic-agent-trap.png)

Slop Town
---------

他最近让他抓狂的是一个叫 **Gastown** 的编排系统。

> “一个超复杂的编排器（orchestrator），同时跑十几二十个智能体，它们互相通信、分工。有观察者（watcher），有监工（overseer），有市长（mayor），有 pcats（可能是指'平民'或'宠物猫'等凑数的角色），我都不知道还有什么。”

Peter Yang：等等，还有市长？

> “是的，Gastown 项目里有个市长。我管这项目叫'**垃圾镇**'（Slop Town）。”

还有 **RALPH 模式**（一种“用完即弃”的单任务循环模式，指给 AI 一个小任务，做完就扔掉所有上下文记忆，一切清零重来，然后死循环）……

> “这简直是终极的 Token 燃烧机。你让它跑一整晚，第二天早上得到的是终极垃圾（slop）。”

问题的核心是：**这些智能体还没有品味**。它们在某些方面聪明得吓人，但如果你不引导它们，不告诉它们你想要什么，出来的就是垃圾。

> “我不知道别人怎么工作，但我开始一个项目时只有一个模糊的想法。在建的过程中、玩的过程中、感受的过程中，我的愿景会逐渐清晰。我会尝试一些东西，有些不行，然后我的想法会演化成最终的形态。我的下一个提示词（prompt）取决于我看到、感受到、思考到的当前状态。”

如果你试图把一切都写进前期规格说明，你就错过了这种人机循环。

> “我不知道没有感受、没有品味参与的情况下，怎么能做出好东西。”

有人在 Twitter 上炫耀一个“全 RALPH 生成”的笔记 app。Peter 回复说：是的，看起来就像 RALPH 生成的，没有正常人会这么设计。

Peter Yang 总结：很多人跑 AI 24 小时不是为了做 app，是为了证明自己能让 AI 跑 24 小时。

> "这就像一个没有参照物的比大小比赛。我也让循环跑过 26 小时，当时很得意。但这是**虚荣指标**，毫无意义。能建一切不代表你应该建一切，也不代表它会是好的。"

![Image 8: 复杂智能体编排 vs 人在循环：品质的关键](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/07-infographic-slop-vs-quality.png)

Plan Mode 是个拼凑（Hack）
--------------------

Peter Yang 问他怎么管理上下文。对话长了 AI 会糊涂，需要手动压缩或总结吗？

Peter Steinberger 说这是“旧模式的问题”。

> “Claude Code 还是有这个问题，但 Codex 好太多了。纸面上可能只多 30% 的上下文，但体感像 2-3 倍。我觉得跟内部思考机制有关。现在我的大多数功能开发都能在一个上下文窗口内完成，讨论和建造同时发生。”

他不用 worktrees，因为那是“不必要的复杂性”。他就简单地 checkout 好几份仓库：`clawbot-1`、`clawbot-2`、`clawbot-3`、`clawbot-4`、`clawbot-5`。哪个空闲就用哪个，做完测试、推到主分支（main）、同步。

> “有点像工厂，如果它们都在忙的话。但如果你只开一个，等待时间太长，进不了心流状态。”

Peter Yang 说这像即时战略游戏，你有一队人在进攻，得管理和监控他们。

关于 plan mode，Peter Steinberger 有个争议性观点：

> “Plan mode 是 Anthropic 不得不加的拼凑方案，因为模型太冲动，一上来就跑去写代码。如果你用最新的模型，比如 GPT 5.2，你就是跟它对话。'我想建这个功能，应该这样那样，我喜欢这个设计风格，给我几个方案，我们先聊聊。'然后它会提议，你们讨论，达成共识再动手。”

他不打字，他说话。

> "我大部分时候都是跟它说话。"

![Image 9: Plan Mode vs 自然对话](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/08-infographic-plan-mode.png)

Discord 驱动开发
------------

Peter Yang 问他开发新功能的流程是什么。先探索问题？先做计划？

Peter Steinberger 说他做了一件“可能是我做过最疯狂的事”：他把自己的 Clawbot 接到了公开的 Discord 服务器上，让所有人都能跟他的私人 AI 对话，带着他的私人记忆，在公开场合。

> “这个项目很难用语言描述。像 Jarvis（贾维斯，钢铁侠中的 AI 助理）和电影《她》的混合体。每个我当面演示的人都超兴奋，但在 Twitter 上发图配文字就是火不起来。所以我想，干脆让人们自己体验。”

用户们在 Discord 里问问题、报 bug、提需求。他现在的开发流程是：截个 Discord 对话的图，拖进终端，跟 AI 说“我们聊聊这个”。

> “我懒得打字。有人问'你们支持这个那个吗'，我就让 AI 读代码然后写一条 FAQ。”

他还写了个爬虫，每天至少一次扫描 Discord 的 help 频道，让 AI 总结最大的痛点，然后他们就修。

![Image 10: Discord 驱动开发：用户反馈循环](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/09-infographic-discord-driven.png)

没有 MCP，没有复杂编排
-------------

Peter Yang 问：你用那些花哨的东西吗？多智能体、复杂 skill、MCP（Model Context Protocol）之类的？

> “我的 skill 大部分是生活技能：记录饮食、买菜、那种东西。编程方面很少，因为不需要。我不用 MCP，不用任何那些东西。”

他不相信复杂编排系统。

> “我在循环里，我能做出感觉更好的产品。也许有更快的方法，但我已经快到瓶颈不在 AI 了，我主要被自己的思考速度限制，偶尔被等 Codex 的时间限制。”

他的前 PSPDFKit 联合创始人，一个前律师，现在也在给他发 PR（pull request，代码提交合并请求）。

> “AI 让没有技术背景的人也能建东西，这很神奇。我知道有人反对，说这些代码不完美。但我把 pull request 当作 prompt request（提示词请求），它们传达的是意图。大多数人没有同样的系统理解，没法把模型引导到最优结果。所以我宁可拿到意图，自己来做，或者基于他们的 PR 重写。”

他会标记他们为 co-author，但很少直接合并别人的代码。

![Image 11: 极简工作流：人在循环里](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/10-infographic-no-complexity.png)

找你自己的路
------

Peter Yang 总结：所以核心要点是，别用 slop generator，保持人在循环里，因为人的大脑和品味是不可替代的。

Peter Steinberger 补充了一句：

> “或者说，找到你自己的路。很多人问我'你怎么做的'，答案是：你得自己探索。学会这些东西需要时间，需要犯自己的错误。这跟学任何东西一样，只不过这个领域变化特别快。”

Clawdbot 在 clawd.bot 和 GitHub 上都能找到。Clad 带 W，C-L-A-W-D-B-O-T，像龙虾钳。

（注：ClawdBot 已经改名 OpenClaw [https://openclaw.ai/）](https://openclaw.ai/%EF%BC%89)

Peter Yang 说他也得试试了。不想坐在电脑前跟 AI 聊天，想在外面带孩子的时候随时给它下指令。

> "我觉得你会喜欢的。"Peter Steinberger 说。

![Image 12: 找你自己的路：每个人的探索路径不同](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/11-infographic-find-your-path.png)

* * *

Peter Steinberger 的核心观点可以总结为两句话：

1.   **AI 已经强大到可以替代你手机上 80% 的 app**
2.   **但如果没有人类的品味和判断在循环里，输出的就是垃圾**

这两句话看似矛盾，其实指向同一个结论：**AI 是杠杆，不是替代品**。放大的是你原有的东西：系统思维、架构能力、对好产品的直觉。如果你没有这些，再多智能体并行跑 24 小时也只是在批量生产 slop。

![Image 13: AI 是杠杆，不是替代品：放大你的工程思维](https://s.baoyu.io/imgs/2026-02-01/peter-steinberger-interview/12-infographic-leverage.png)

他的实践本身就是最好的证明：一个 20 年的 iOS 老程序员，在几个月内用 TypeScript 建了一个 30 万行代码的项目，靠的不是学会了新语言的语法，而是那些语言无关的东西。

> “**编程语言不重要了，重要的是我的工程思维。**”

* * *

[See all posts](https://baoyu.io/translations)

Built by[宝玉](https://twitter.com/dotey). [RSS](https://baoyu.io/feed.xml) . 本站原创内容，独家授权赛博禅心公众号发布。

Toggle theme

## 关联主题

- [[00-元语/interview]]
- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/软件工程]]
- [[00-元语/vibe-coding]]
- [[00-元语/cli]]
- [[00-元语/mcp]]
- [[00-元语/prompt]]
- [[00-元语/browser-automation]]
- [[00-元语/hardware-control]]
- [[00-元语/community]]
- [[00-元语/workflow]]
- [[00-元语/memory]]
- [[00-元语/Codex]]
- [[00-元语/Claude]]
- [[00-元语/OpenAI]]
