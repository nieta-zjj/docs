---
title: "AI 将何去何从？[译]"

来源: "https://baoyu.io/blog/ai-future-translation"
发布日期: "2025-01-07"
作者: "宝玉"
---

## 摘要

### 1) 一句话总结
2025年AI领域将从技术探索转向务实应用，重点聚焦于低成本快速原型开发、影视级音视频生成、提升模型数据效率、普及自主行动智能体（Agents）以及构建促进社会共识的亲社会AI。

### 2) 核心要点
*   **快速原型与部署（吴恩达）：** AI极大降低了软件原型开发的成本与门槛，结合智能体工作流（如Bolt、Replit Agent、Vercel V0）可实现应用的快速生成与直接部署。
*   **定制化与可及性（Hanno Basse）：** 生成式AI将向专业化发展，涌现大量针对特定细分场景微调的小模型；同时需在基础模型上开发更完善的工具，降低非技术人员的使用门槛。
*   **全模态视频生成（David Ding）：** 能够同时生成高质量视频画面与音频（语音、音乐、音效）的模型即将成熟，用户对音视频输出的可控度将持续提升，大幅加速影视创作流程。
*   **智能体技术栈与商业回报（Joseph Gonzalez）：** 行业重心将从基础模型训练转向“智能体技术栈（agents stack）”和“AI投资回报率（ROI）”，AI将超越聊天形态，成为在后台自动处理任务的专属智能体。
*   **提升样本学习效率（Albert Gu）：** 行业将致力于让模型在更少数据下学到更多，通过优化数据筛选、特征工程、多模态融合与可解释性，缩小AI与人类在学习效率上的数量级差距。
*   **视觉能力与行动型智能体（Mustafa Suleyman）：** 2025年AI将具备“视觉”能力（如嵌入软件与用户联合浏览），并迈入能代表用户执行具体行动的“人工能动智能（ACI）”时代。
*   **亲社会AI与多元对齐（Audrey Tang）：** 呼吁将AI算法的优化目标从单纯的“互动量”转向“建设性交流”，通过多元参与的治理模式（如Polis工具）弥合社会分歧，打造数字公共空间。

### 3) 风险与不足
*   **成本与数据瓶颈：** 大模型正触及规模极限，面临推理成本上升、训练耗费巨量时间与能源，以及高质量训练数据逐渐枯竭的危机（Joseph Gonzalez, Albert Gu）。
*   **样本效率低下：** 当前模型对数据的需求量远超人类，大部分训练工作消耗在数据准备而非模型结构改进上，削弱了AI作为自动化学习工具的价值（Albert Gu）。
*   **幻觉与信任危机：** “幻觉”依然是AI大规模应用的重要阻碍，若无法保障真实性，将严重限制用户对AI的信任和使用场景（Mustafa Suleyman）。
*   **行动授权的安全隐患：** 赋予AI自主行动能力意味着需要最高标准的安全、保障与责任规范，且面临与众多外部系统整合的技术障碍（Mustafa Suleyman）。
*   **算法导致的社会分裂：** 现有基于“互动量”优化的推荐算法容易榨取用户注意力、损害社会信任，存在放大少数人偏见并加剧群体对立的风险（Audrey Tang）。

## 正文

六位 AI 领域的领军人物在 The Batch 中分享了他们对来年 AI 的期望：

*   **Hanno Basse：面向艺术家的生成式 AI**

*   **David Ding：带有音乐、音效和对话的生成视频**

*   **Joseph Gonzalez：通用智能**

*   **Albert Gu：更少数据、更多学习**

*   **Mustafa Suleyman：行动型智能体**

*   **Audrey Tang：团结我们的 AI**

* * *

亲爱的朋友们，

新年快乐，祝大家快乐地度过`sum(i**3 for i in range(10))` ！

我从十几岁起就在从事 AI 工作，但现在我对 AI 的前景比以往任何时候都更感到兴奋，尤其是在构建 AI 应用方面。这个领域火花四射，2025 年将会是大展身手的一年！

我特别兴奋的一点是，构建软件原型变得非常容易。AI 正在降低软件开发的成本并拓宽潜在应用的范围。尽管 AI 确实能帮助扩展或维护大型软件系统，但它在快速打造原型及其他简单应用方面的价值尤其突出。

如果你想做一个给孩子打印抽认卡的小应用（我刚在 o1 的帮助下用几个小时就搞定了），或者写一个监控汇率、管理多个国际银行账户的应用（[DeepLearning.AI](http://deeplearning.ai/) 的财务团队真这么做了），或者自动分析用户评论、快速定位产品问题（[DeepLearning.AI](http://deeplearning.ai/) 的内容团队也在用），如今通过 AI 辅助编程都可以很快实现。

我发现 AI 辅助编程在原型开发上尤其有效，原因是：（1）很多原型是独立的，需要的上下文与系统集成度都相对较少；（2）处于 alpha 测试阶段的原型通常对可靠性的要求不高。当然，生成式 AI 也有助于构建大型、关键任务型的软件系统，但由于需要向 AI 系统提供全部上下文以及严格保证代码的可靠性（例如覆盖所有重要的边界情况），在这类场景下的生产力提升并没有那么显著。

![Image 1](https://baoyu.io/uploads/2025-01-07/1736276206798.png)

一直以来，“如何将原型部署到用户手中”都是一个阻碍速度的关键点。像 Bolt、Replit Agent、Vercel V0 等平台使用带有智能体（agentic）工作流程的生成式 AI 来改进代码质量，但更重要的是，这些平台还能直接部署生成的应用。（我个人的工作流程通常是先用 LLM 设计系统架构，然后分模块生成代码。如果模块比较大，就逐个模块生成。接着我会测试各个模块，必要时再次编辑——有时会用到类似 Cursor 这类支持 AI 的 IDE——最后再把各个模块组装起来。）

快速构建原型是检验想法、完成任务的有效方式，也是学习的好途径。最关键的是，这样做非常有趣！（至少在我看来是这样。😄）

在来年，你该如何把握这些机会？当你制定新年计划时，我希望你能：

*   **制定学习计划！**

为了成为高效的构建者，我们都需要跟上不断涌现的精彩变化。2025 年你想每月学几门短课程？如果能和朋友一起交流学习计划，大家可以相互鼓励。例如，我们上线了一个[学习进度汇总页面](https://learn.deeplearning.ai/my/learnings?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--3x-UXmTAnW8kegCf35Jtc_r6APvCp-nI6Shjc5ArNos3a6Uly9QN8bkCLho3UsQSykNBS)，可以查看他人学过哪些短课程。有几位 [DeepLearning.AI](http://deeplearning.ai/) 的团队成员还要进行友好竞赛，看谁在 2025 年学的课程最多！

*   **去构建！**

如果你已经会编程，我鼓励你在灵感来时、在空闲时就去快速做个原型。如果你还不会编程，那么[学习](https://www.deeplearning.ai/short-courses/ai-python-for-beginners/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--3x-UXmTAnW8kegCf35Jtc_r6APvCp-nI6Shjc5ArNos3a6Uly9QN8bkCLho3UsQSykNBS)编程非常值得！即使只是一些小的成功——比如我打印的抽认卡，让我女儿昨晚多花了 20 分钟练习乘法表——也能让生活变得更好。或许你会发明出能大放异彩的产品。即使最终没有“起飞”，你也能在这个过程中收获乐趣并学到很多东西。

新年快乐！

Andrew

P.S. 我主要用 Python 编程。但如果你喜欢 JavaScript，那就祝你快乐地度过

```
Array.from({ length: 10 }, (_, i) => i ** 3).reduce((a, b) => a + b, 0)
```

吧！

* * *

2025 即将到来
---------

我们正站在一个新时代的门槛：AI 系统拥有了非凡的能力来推理世界、把握人类的需求，并采取行动来满足这些需求。我们将用这些力量做什么？我们邀请了业内领袖来谈谈他们对来年的希望。和我们[之前](https://www.deeplearning.ai/the-batch/issue-229/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--3x-UXmTAnW8kegCf35Jtc_r6APvCp-nI6Shjc5ArNos3a6Uly9QN8bkCLho3UsQSykNBS)的[多期](https://www.deeplearning.ai/the-batch/issue-177/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--3x-UXmTAnW8kegCf35Jtc_r6APvCp-nI6Shjc5ArNos3a6Uly9QN8bkCLho3UsQSykNBS)[新年](https://www.deeplearning.ai/the-batch/issue-125/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--3x-UXmTAnW8kegCf35Jtc_r6APvCp-nI6Shjc5ArNos3a6Uly9QN8bkCLho3UsQSykNBS)[特刊](https://www.deeplearning.ai/the-batch/issue-72/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--3x-UXmTAnW8kegCf35Jtc_r6APvCp-nI6Shjc5ArNos3a6Uly9QN8bkCLho3UsQSykNBS)[专栏](https://www.deeplearning.ai/the-batch/issue-20/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--3x-UXmTAnW8kegCf35Jtc_r6APvCp-nI6Shjc5ArNos3a6Uly9QN8bkCLho3UsQSykNBS)一样，他们的回答呈现出对未来所能构建的事物以及潜在积极影响的鼓舞人心的展望。

* * *

![Image 2](https://baoyu.io/uploads/2025-01-07/1736276268328.png)

Hanno Basse：面向艺术家的生成式 AI
------------------------

Stability AI 的目标是让各行各业的艺术家从那些重复、机械化的工作中解脱出来，让他们能把更多时间花在真正富有创造性的部分。因此，我们对下一年的最大期望是，生成式 AI 能帮助人们变得更具创造性和生产力。

同时，我也希望 AI 社群能把重点放在以下几个方向：

1.   **安全与完整性：**

在开发最初就融入完整性设计，以打造安全的产品，并确保技术被合理使用，从而对叙事艺术做出有意义的贡献。

2.   **可及性：**

生成式 AI 产品与工具必须能被最广泛的群体使用。目前，生成式 AI 主要还是对工程师等高技术门槛人群更友好。要想让更多人受益，我们需要在基础模型之上开发更完善的工具，让各类用户都能从中获益。

3.   **定制化：**

我们期待生成式 AI 未来会越来越专业化。在大型基础模型之外，会出现大量针对特定、甚至非常细分用例和应用场景进行微调的较小模型。这才是生成式 AI 真正大显身手的地方；同时，这也是在现实世界中部署生成式 AI 最安全、最负责的方式。

_Hanno Basse 是 Stability AI 的首席技术官，曾担任 Digital Domain、微软 Azure 媒体与娱乐部门以及 20 世纪福克斯电影公司的 CTO。_

* * *

![Image 3](https://baoyu.io/uploads/2025-01-07/1736276281308.png)

David Ding：带有音乐、音效和对话的生成视频
--------------------------

去年，我们看到了很多模型可以生成高质量的视频或音频。今年，我期待能看到能够同时生成视频剪辑和音频（包括语音、音乐和音效）的模型。我希望这些模型能为电影般的创作形态开启新纪元。

相关技术已基本就位。现在已有多家公司提供非常有竞争力的视频生成模型，也有像 Udio 这样可以生成音乐的模型。只需再把视频和音频同时建模，并加入对话及画外音就行。（事实上，Meta 已经展示了类似的 Movie Gen 系统：用户输入对场景的描述，Movie Gen 就能生成配乐与音效俱全的视频片段。）

要训练这样的模型，确实需要海量数据集。但我猜想，用于训练现有视频生成模型的视频本身就带有音轨、对话、音乐和音效，因此数据可能并不会成为极大的阻碍。

最初，这些模型的输出无法与专业视频剪辑师的作品媲美，但它们会迅速进步。不久之后，它们生成的视频及配音质量或许能接近好莱坞大片所呈现的水准，就像如今的图像模型已经能够生成和高端摄影作品难以区分的图片一样。

与此同时，用户对视频和音频输出的可控度也会越来越高。比如，Udio 刚上线时，用户没法控制生成音乐的和声；几个月后，我们发布了一个更新，允许指定歌曲的调，用户就能把已有的歌曲在不同调之间任意切换。我们还在进一步研究如何让用户在嗓音、旋律、节拍等方面拥有更多可控操作，相信视频生成领域的研究团队也在做同样的努力。

也许有人会对“完全生成完整电影级视频”感到不安。我能理解。但我自己是摄影师兼音乐爱好者，我发现图像和音频生成工具在我的创作中可以成为一个很好的起点。比方说，如果我想要一张图像打底，可以先用 AI 生成，再拿到 Photoshop 中继续完善；或者想要创作音乐时，可以先用 AI 生成一个旋律，再进行采样或追加编曲。或者再比如，AI 编程助手可以一次性生成整个网站，你就不必再去依赖网站开发者——可如果你找一位真正的网页开发者聊聊，他们也会告诉你，给网站写那些通用的“模板代码”并不总是让人开心。有了自动搭建网站框架的工具后，他们就能把时间更多用于更富挑战性、也更有乐趣的开发任务。

同样的道理，你可以在写好剧本后，快速做一个电影粗剪版本。你甚至可以生成一千个版本，从中选出喜欢的，再让真人摄制团队和演员参考那个版本去拍摄。

艺术的核心在于做出独特的创意选择。你我都能用 Midjourney 生成一幅风景画，但如果你是艺术家，对你想要的风景意象有清晰想法，你生成的作品就会比我的更具吸引力。同理，任何人都能用 Udio 生成高质量音乐，但如果你乐感更好，你做出来的音乐就会更精彩。即便未来的电影能由 AI 来做大部分工作，真正推动艺术的依然是创作者——他们决定电影主题、视觉风格和氛围，并能更灵活、更快速、更互动地完成这些艺术选择。

_David Ding 自幼从事音乐创作，同时也是 Udio 的联合创始人。Udio 提供一个生成音乐的 Web 应用，帮助用户创作原创音乐。David 此前曾在 Google DeepMind 担任高级研究工程师。_

* * *

![Image 4](https://baoyu.io/uploads/2025-01-07/1736276291216.png)

Joseph Gonzalez：通用智能
--------------------

我预计在 2025 年，随着我们触及大模型的规模极限并面临不断上升的推理成本，基础模型的训练速度将放缓。取而代之，我们会看到更多基于 AI 的创新层出不穷，比如目前快速发展的[智能体技术栈（agents stack）](https://info.deeplearning.ai/e3t/Ctc/LX+113/cJhC404/VWDWFb7nZnZjW5NftxJ44cwFYW6rg8CD5qhw-_MGxfV03qgyTW7lCdLW6lZ3mcVCFdyG8bf-80W2W9w0k3DbqwrMxWwDDhfMq_W3Xmzhg8VYdw-Mq5x1Px6q9CW2HzxL9856psvW2phKjz4R3-_DN2K0jtMNQKkMW1hKTfX4B4k-0W5grprr4cK085W3Z_-VY8_cTkyW3TCFwR7WwgJLV8HFNJ2hmY7cW2hBCgH7G8NMxN3H1QY8DGvlKW5gg6lk24nyWQN8f-lc_5JZ6nN2yWfGW_jQMcW1HJn2M3HJWcNVNy3dL1wHpzxW21-wTG7qJZ0gW7DxX6y37fjcZW2q6Xtx7GrzKWV4Jb0H8cqbdlf2hTvld04?ref=dl-staging-website.ghost.io)。我希望我们能看到更多将 AI 与现有工具或系统相结合的方式，从而诞生崭新的产品类别，带来全新的能力。更重要的是，我期待看到人们在这个新世界里会如何改变自身。

**我们已经实现了 AGI，那么接下来呢？**

先说说一个或许有点争议的观点：我认为我们已经实现了所谓的通用人工智能（AGI），至少从“通用性”这个定义上来看：我们的 AI 现在确实**通用**了。对于“感知”或“超级智能”的更深层讨论，就留给哲学家去探讨吧。这里我想强调的创新点在于它的“通用性”。

过去几十年的人工智能或机器学习虽“智能”，但高度专用，只在狭窄的任务上超越人类（比如图像识别或内容推荐）。然而，如今的模型以及围绕这些模型构建的[系统](https://info.deeplearning.ai/e3t/Ctc/LX+113/cJhC404/VWDWFb7nZnZjW5NftxJ44cwFYW6rg8CD5qhw-_MGxfV03qgyTW7lCdLW6lZ3k_W1LX2XK1sXM_qW3_GlFJ97CwXGW169-C-8GgksHW2wmGk66xt6GvW3k7HYk3R5HdFW3BRfn23yPdg9W2T7pYJ2ktHc_W9f1tqT8MqlRwW81yftL5DWXqGW4_fdcQ8lZMLrVZ81NC5X-VW6W4LZGkN4W4ltBW8FWPFm36278JW2FvcD_62QwWzW3yn4Cl4ysFWGW7zkkNz4JlBhVW339P8K6Jq_k5N2q571gGgp_xV2g9393MVd17W4mrMqr7GQsTKV1vNDt6slwrTW7MVd8n5QHb72W65FMc68JgzzMW92FrKj98fzl4f3TmqvH04?ref=dl-staging-website.ghost.io)，可以完成非常广泛的任务，往往能达到或超越人类的水平。正是这种“通用性”让工程师、科学家和艺术家能够在模型开发者从未预见的方向上进行创新。也正是这种“通用性”结合市场力量，让 2025 年变得如此令人期待。

**迈向 AI 原生（AI-native）：**

由于这些模型具备通用性，而且它们的自然语言接口让所有人都能使用并探索它们。我们**正在**使用它们——我们在学习如何向机器解释自己的处境、提供上下文和指令，并获得个性化的回答和方案。在我共同创办的 [RunLLM](https://info.deeplearning.ai/e3t/Ctc/LX+113/cJhC404/VWDWFb7nZnZjW5NftxJ44cwFYW6rg8CD5qhw-_MGxfTq3qgyTW69sMD-6lZ3pXW255RkJ6S23P_W7K5NZm5X6n6KW4kpWtC8mH-dqW1wmcNy8SJSFsW2yDfz16c5fvnW8Glx3N8WK3YYW6ZSCmy3Jptt-W3pmvgR4_C5BLV5M5Hk6DPQs-W62QZ1l3G9344W99-j5H80njM9W6wXKd63PykWTW1GkjTJ1cCnrRW5LWLvy189H5kW7j9M_D5--wLrW2pnQPY3GwFHxW7m3lFJ6-3C4gW5TfF955fztfFW14K3M-60SMF8V5LccL6BF9qtf3rB44C04?ref=dl-staging-website.ghost.io) 里，我们在打造高质量的技术支持型智能体。我们发现用户不仅用我们的智能体来解决常规问题，也会把自己的具体需求全盘托出，获取更个性化的解决方案。令人惊讶的是，用户往往愿意对 AI 透露更多信息，而对真人可能就没这么放松。

另一方面，在加州大学伯克利分校，我看到学生们会用 AI 来重新解读我的课程讲义，或者用 AI 生成的习题来复习。他们已经找到如何利用 AI 个性化地提升学习效果的方法。到了 2025 年，也许当我们想要帮助或想学习时，我们甚至会更愿意求助 AI 而不是人类。

在这一切应用中，我们可以看到，我们正愈加擅长绕过大语言模型的局限，并以我在 12 个月前根本想象不到的方式来使用 AI。

**AI 的回报（Return on AI）：**

2025 年的关注重点会转向如何让过去的投资带来真正价值。投资人和企业会要求初创公司和企业 AI 团队从单纯的探索走向务实，为降低成本、提升营收或改善用户体验等实际需求提供解决方案。这对需要筹集科研经费的学者来说不算好消息（如果你还在寻找 2024 财年剩余的科研经费，可以私信我），但对大多数人而言都是好消息，因为这意味着会有更多 AI 驱动的新功能涌现。

各行各业都会竞相探索如何把 AI 融入产品和业务的方方面面。短期内，我们可能会先看到比较仓促的聊天机器人或自动摘要功能——这只是迈向 AI 之旅的第一步。我希望这些功能能被迅速升级成根据用户上下文来学习和适应需求的智能体。疫情加速了远程办公（数字化）的普及，也让更多工具具备了为未来智能体所需的工作环境。这些智能体或许会专注于承担某些原本由人类完成的角色，也可能会衍生出新的角色（由其他智能体来填补）。或许只有等到我们每个人都管理着一支专属的智能体团队时，才能真正说明 AI 已兑现了它的潜能。

**聊天只是开始：**

我对 2025 年最大的期望是我们能超越聊天，发现使用 AI 创造更伟大事物的方法！我希望能看到那些在幕后默默为我们完成各种日常工作的 AI 智能体。他们会在我们做决策时提供上下文，在世界发生变化时帮助我们学习，帮我们留意漏掉的要点、拾起被遗漏的球。我们会减少聊天，AI 智能体则能替我们完成更多实际工作。我期待有一天，当我离开键盘时，我可以毫不担心，因为 AI 已经帮我做好了一切，我就能专注于那些真正重要的人际交流。

_Joseph Gonzalez 是加州大学伯克利分校的教授、RunLLM 联合创始人，同时担任 Genmo 和 Letta 的顾问。_

* * *

![Image 5](https://baoyu.io/uploads/2025-01-07/1736276298747.png)

Albert Gu：更少数据、更多学习
-------------------

构建一个基础模型需要海量的数据。在来年，我希望我们能让模型在更少数据的情况下学到更多。

AI 社区通过扩大 Transformer 和数据集的规模取得了了不起的成功。但这种方法可能正在进入边际效益递减的阶段——在从事下一代模型预训练的圈子里，越来越多人开始这样认为。不管怎么说，目前的方法在实践上也带来很多挑战。训练超级大模型需要巨量的时间与能源，而且我们还能找到的新数据也越来越少。

事实是，当前的模型对数据的需求量远超人类掌握相当水平知识所需的数据量。其实我们也知道这一点，只是之前因为“大力出奇迹”非常有效，就没太在意。要训练模型，需要数万亿级别的 token；而培养一个普通人类只需要远少于这个量级的数据。也就是说，我们的最佳模型与人类在样本效率上还存在几个数量级的差距。人类学习告诉我们，一定存在更高效的学习算法、目标函数、模型结构，或者它们的结合，可以显著提升模型的样本效率。

要解决这一问题的关键之一，是让模型能产生更高层次的抽象，同时过滤掉噪声。我认为，这个想法与当前 AI 领域的其他问题息息相关：

*   **数据筛选（Data curation）：**

我们知道用于训练模型的具体数据非常重要。业内也心照不宣地认为：现在训练基础模型的大部分工作其实都是在处理数据，而不是在改进模型结构。这背后说明了一个问题：我们的模型学习效率不足，所以我们不得不在训练前做大量的数据准备工作。这可能削弱了 AI 作为自动化学习工具的潜在价值。

*   **特征工程（Feature engineering）：**

深度学习的发展历程就是不断移除手动特征工程的过程。从深度学习浪潮开始，我们一步步去掉了计算机视觉中的边缘检测、自然语言处理中的 n-grams 等等。但其实特征工程并没有消失，而是转移到其他环节。比如分词（tokenization）本质上也是一种隐形的特征工程。这说明我们在让模型具备通用的数据高效处理能力方面，还有很大提升空间。

*   **多模态（Multimodality）：**

让模型理解并融合多种数据模态的关键在于找到它们之间的核心抽象，并建立关联。这样做不仅能让模型在更少数据下学到更多，还能使模型在多模态学习中相互借力。

*   **可解释性与健壮性（Interpretability & Robustness）：**

如果我们想知道模型为什么得出某个输出，就需要模型在内部做出更高层次的抽象，并让我们能追踪到这些抽象的形成过程。这样也能提升模型的抗噪能力，并减少对训练数据的依赖。

*   **推理（Reasoning）：**

若模型能抽取更高层次的模式和抽象，那么它在这些层面上进行推理的能力也会更强。同理，能更好地推理意味着需要更少的训练数据。

*   **民主化（Democratization）：**

训练最先进的大模型成本极高，包括收集和清洗大量数据的成本。能做到这一点的企业屈指可数，也就导致了技术成果对那些缺乏数据或资金的领域应用受限。如果模型的学习效率更高，就能以更低的门槛带来更大价值，让更多人从中受益。

综合来看，数据效率与上述问题都密切相关。究竟哪一个是因，哪一些是果还不明确。也许当我们解决了可解释性，所带来的机制会促使模型学习到更好的特征，从而提升数据效率；也可能是我们先在数据效率上取得突破，也帮助模型变得更易解释。无论如何，数据效率非常关键，而这方面的进展往往也是 AI 整体突破的风向标。我期待来年我们在这方面能取得重大进展。

_Albert Gu 是卡内基梅隆大学的机器学习助理教授，以及 Cartesia AI 的首席科学家。他入选了《时代》杂志评选的 2024 年度 AI 领域最具影响力人物榜单。_

* * *

![Image 6](https://baoyu.io/uploads/2025-01-07/1736276310210.png)

Mustafa Suleyman：行动型智能体
-----------------------

到了 2025 年，AI 将能“看见”，智能度和准确性显著提升，并开始代表你去做一些事。

目前，AI 系统在理解我们所处情境方面依然很有限。它们只看得到聊天窗口里有限的信息，并不了解我们的整体需求或目标。若要真正理解我们的意图，它们需要“看见”我们所见的内容。

这种能力现在已经出现了。AI 可以嵌入到我们的软件里，和我们一起“联合浏览”。如果说文本是过去与 AI 交互的第一种模态，语音是 2024 年的突破性应用，那么我认为视觉将在 2025 年扮演类似的角色。作为我在微软 AI 的主要工作目标之一，我们一直在打造能“进入浏览器、与你共同浏览”的 AI，让你可以和它“对话”你所看到的内容，形成真正的双向交互。

视觉将带来一次“跨越式”变化，和以往使用电脑的方式有明显区别。我非常期待在未来几个月里看到这一技术的更多进展。

除了视觉，我们也将在减少“幻觉”（hallucination）方面取得重大突破。幻觉仍然是 AI 大规模应用的一个重要阻碍。如果人们不信任 AI 所给的信息，就会严重限制他们对 AI 的使用场景。信任是 AI 的基石。好消息是，目前模型的检索与真实性保障能力还在快速提升。

我并不认为我们能完全消除幻觉，但相信到了明年这个时候，我们不会再像现在这样对幻觉耿耿于怀。大多数情境下，与 AI 对话至少会和用搜索引擎一样靠谱，甚至可能更好。这并非来自某次单点的技术突破，而是“积跬步”的结果。但这将带来巨大改变。

最后，我们正在步入智能体时代。我们已经梦想这个时刻很久了。我在我的书《The Coming Wave: Technology, Power, and the 21st Century’s Greatest Dilemma》里提到过一个概念“ACI”（artificially capable intelligence，人工能动智能），即 AI 开始能代表用户采取具体行动的节点。这标志着 AI 不再只是“和我们对话”，而是真的“在做事”。这是一个重大转折，且即将到来。

如果我们处理得当，AI 可以同时让我们的生活更轻松、平静，又能极大地提升商业和个人的效率。但让 AI 拥有行动能力意味着需要最高标准的安全、保障与责任规范。与此同时，要想让这些智能体真正有用，还需要克服各种障碍，尤其是与众多外部系统的整合。

然而，这个趋势已势不可挡。AI 的行动能力正在袭来。2025 年会是一个大年。

_Mustafa Suleyman 是微软 AI 的首席执行官，曾共同创办 Inflection AI，并是 DeepMind Technologies 的创始人之一。_

* * *

![Image 7](https://baoyu.io/uploads/2025-01-07/1736276322590.png)

Audrey Tang：团结我们的 AI
--------------------

在迈向 2025 年之际，我最大的愿望是，AI 能促进[亲社会](https://info.deeplearning.ai/e3t/Ctc/LX+113/cJhC404/VWDWFb7nZnZjW5NftxJ44cwFYW6rg8CD5qhw-_MGxfVj3qgyTW7Y8-PT6lZ3pJW5BGbBm83TnJVW5fVK3R3m74vYW8rC14X1WtKrVVF35Gq8xq2YJVq3sjH99-DHhW7bkDfb8gM-RpW77jWWT2RY-19W5WDjS_78crHtW4BT4yc1rd8NGW2_M-BW3LC5sMW462nN34QfC12W4mCVcp3jjd7jW2ZjMsq84NCDYW91rlBx2x92xzW8J-1Zk3n8WQhW5bNKW-6KZZrJW1mmqVz4xHFgyW4v6kBQ3q7jDgW7--dGV3xYSSKW8KL5m5117HfSW8vBYp08w-BLFW4YfNJr8XPgw-W8mJhMr7Fm7RGW1DD8rJ5hgrxrW3fjD9n4tzNTnW6PZtcB7HBYQpf7q_Gtq04?ref=dl-staging-website.ghost.io)的平台发展，帮助人们增加同理心、理解与合作，而不是造成分裂。

过去相当长的时间里，社交媒体算法更像是“大规模挖矿机”，榨取用户的注意力同时损害信任与社会凝聚力，留下“资源枯竭”的网络空间——在这里同理心难以生根，群体协作也缺乏土壤。AI 能，也**应该**，帮助我们突破这种固化的隔阂。

要实现这一目标，我们必须在 AI 系统中融入亲社会的价值观，避免加剧矛盾与对立。推荐算法可以引导我们看到更多能够“搭桥”的内容，而不是只让我们陷在信息茧房中。它们可以明确标注一则内容对应的社群类型：是地理社群、宗教社群、政治社群、社会社群、文化社群，还是职业社群——以及这条内容要修补的“分歧”所在。

要做到这一点，就要在优化目标上进行根本转变：不能只盯着“互动量”这种指标，还要纳入价值导向的指标，优先考量建设性交流和相互理解。比如，我们可以将“出人意料却令人信服的发声者”找出来——他们能带来有益的挑战，提升我们对那些看似不可调和问题的认知。研究者和开发者也应当一起探索新的排名和推荐方式，在主流平台中实现并[评估](https://info.deeplearning.ai/e3t/Ctc/LX+113/cJhC404/VWDWFb7nZnZjW5NftxJ44cwFYW6rg8CD5qhw-_MGxfVC3qgyTW8wLKSR6lZ3n6W5fP8rW4Y6BM4W5hX8hP8HsfRKW3qSyJt290fywW6fdfwS99sB5cW2yh2Vb6dZbt9W1CC18n1kHmBhW5tX9rT7YYxdXN7j2XFRTQkhXW2qt0xX4QbfmnW4LqL3T8ZBcxLVBcDG06wbLLmW1jwHn46WHcZJW3dN6Sp7QdVVRW5xYSc4614mZ8W6tVxCP3C5gllW9dpq574cJcjFVLVBGg1SBYf_W3rFhfX81j6_fW55Cx-j35tTRyW2BY0L-6dkV-lW2XpZJF37Y3x1W8zfpLG1YbZkQW3vQyfY6-ZVnzN3Yyd9Vq8ZbsW2qxpyy7_t2rqW88DNvX7W6MSJVdhtSQ8vw2rgVjdLsj21TBdff8F5J4x04?ref=dl-staging-website.ghost.io) 它们对民主生活的影响。

与此同时，AI 社群还应当践行多方参与、包容多元的开发和治理模式。[多元对齐（pluralistic alignment）](https://info.deeplearning.ai/e3t/Ctc/LX+113/cJhC404/VWDWFb7nZnZjW5NftxJ44cwFYW6rg8CD5qhw-_MGxfV03qgyTW7lCdLW6lZ3p4W3gN80C6crVhXW97QFHP5tDVpSW44mHLL3J3p1-V925h46vF4rbW25wM1S9gz7vXW1WzqmT3HBpzvW6-JGVv3KRhG_W679cfP5SrzHwW2CnBn08CnY-YN8MCPvnF7LCLW1hCSNv7fmzNNW3vgvFW6SWzqpW5FXx8L6VkTxgW1MmThk1xx1wCW7WD5Hp5YG_lsW3zdwdK7xKGh4W8spKCR1z_d2VW5NCh3S52BvntMZVzT27-0TJW36h_nv8rQpgqW2Xk2xF1hGDryW2LPSvX3XyvKwW6NTRNV18vpvXW1KsbwG8f0tKTf31D2rq04?ref=dl-staging-website.ghost.io)认为，AI 系统是在复杂社会语境下诞生并运行的，因此多元参与能避免潜在的制度盲点。[Polis](https://info.deeplearning.ai/e3t/Ctc/LX+113/cJhC404/VWDWFb7nZnZjW5NftxJ44cwFYW6rg8CD5qhw-_MGxfV03qgyTW7lCdLW6lZ3p4W3gN80C6crVhXW97QFHP5tDVpSW44mHLL3J3p1-V925h46vF4rbW25wM1S9gz7vXW1WzqmT3HBpzvW6-JGVv3KRhG_W679cfP5SrzHwW2CnBn08CnY-YN8MCPvnF7LCLW1hCSNv7fmzNNW3vgvFW6SWzqpW5FXx8L6VkTxgW1MmThk1xx1wCW7WD5Hp5YG_lsW3zdwdK7xKGh4W8spKCR1z_d2VW5NCh3S52BvntMZVzT27-0TJW36h_nv8rQpgqW2Xk2xF1hGDryW2LPSvX3XyvKwW6NTRNV18vpvXW1KsbwG8f0tKTf31D2rq04?ref=dl-staging-website.ghost.io) 等工具可以可视化不同意见、挖掘潜在共识，证明了如何把纷繁复杂变为简明清晰。这样的参与式方法能确保 AI 反映出社会中不同人群的诉求，而不是放大少数人的偏见。

通过拥抱这些更具包容性和民主精神的原则，AI 将帮助我们共同打造[数字公共空间](https://info.deeplearning.ai/e3t/Ctc/LX+113/cJhC404/VWDWFb7nZnZjW5NftxJ44cwFYW6rg8CD5qhw-_MGxfTK3qgyTW6N1vHY6lZ3lgW2qs4N07G44N6W683jG82QS2fqW6tydh383ZsC2W7DN9-g5kkMtYW5h-HpV2HsKFvW8RkqKc2vX6HWW8xhVc83fF4FMN8KPqy3-bflGW3QDQXZ6rFTlCW8Fzb_Y326PynW2NSc7x1Z3bTmW7fzBWs8kvjg-W2lxBjY5-r--DW34gQWh5V8tFvW9bMgmf7KpKJyW6Q97NV8YbFw_W8VCWNZ1yYmYmN81B6bclj3XhVmWcRv1GTsnJW6MDL5s5fVHRMW6HJzSc1Lj2Z2W1KY3655WZMBzf8m514x04?ref=dl-staging-website.ghost.io)，在这里人们之间的社会凝聚力更强而不是被削弱。将多方意见从数据收集到治理政策的制定等环节全面纳入，才能让 AI 真正体现多元价值观，并成为推动理解与合作的催化剂。

_Audrey Tang 是台湾的数位大使、前数位发展部长，并合著《Plurality：协作科技与民主的未来》一书。_

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/audio]]
- [[00-元语/video]]
- [[00-元语/workflow]]
- [[00-元语/productivity]]
- [[00-元语/risk]]
- [[00-元语/security]]
- [[00-元语/alignment]]
- [[00-元语/community]]
- [[00-元语/roadmap]]
