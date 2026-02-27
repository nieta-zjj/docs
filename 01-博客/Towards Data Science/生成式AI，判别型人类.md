---
title: "生成式AI，判别型人类"
发布日期: 2026-02-27
作者: "Towards Data Science"
来源: "Towards Data Science"
原文链接: "https://towardsdatascience.com/generative-ai-discriminative-human/"
译注: "根据原文翻译整理"
---

## 摘要

### 1) 一句话总结
本文指出在生成式AI时代，人类的工作角色正从“内容生成者”转向“内容判别者”，并呼吁公众在工具选择、人机协作、叙事动机、供应链及技术普及等十个维度上对AI保持批判性思维。

### 2) 核心要点
*   **核心范式转变**：工作模式正从过去的“判别式AI + 生成型人类”转变为现在的“生成式AI + 判别型人类”，人类的核心价值转向塑造方向、辨别质量和提供真实上下文。
*   **精准定义工具**：“AI”是一个过于宽泛的术语，应将其视为包含经典机器学习、统计方法和符号方法等特定技术的工具箱，而非解决所有问题的单一工具。
*   **人机协作模式**：有效的人机互动包括将AI视为工具的“半人马”和“赛博格”模式，但需警惕由AI系统主导并优化人类行为的“反向半人马”模式。
*   **内容同质化**：研究表明，大规模使用生成式AI会导致在线内容高度雷同；相反，不使用AI生成的内容反而能获得更积极的用户互动。
*   **认知参与度下降**：麻省理工学院的研究显示，在执行任务时，使用大语言模型（LLM）辅助的人群大脑活动最弱，且长期来看在神经、语言和行为层面上表现不佳。
*   **影响评估框架**：评估AI对特定领域的影响应采用“4个W”框架：工作台（工具）、工作（任务与结构）、工作者（利益相关者）和世界观（运作方式与假设）。
*   **商业驱动的叙事**：预计2025年全球AI支出将达1.5万亿美元，当前的AI叙事主要由销售方和公关机器（如向网红支付40万至60万美元进行推广）驱动，而非真实用户。
*   **技术普及存在滞后**：需区分AI的“发明”（如2025年平均每月发布两次新模型）、“采用”与“普及”。如同拖拉机取代马匹，AI在组织和社会中的真正普及需要数年时间。
*   **人类的主导权**：AI的发展阶段类似于早期汽车（先有汽车，数十年后才有车钥匙、安全带和交通标志），目前正处于技术采用与建立安全规则、法规之间的空白期，人类仍有能力塑造其未来。

### 3) 风险与隐患
*   **目标错位与“暗黑模式”风险**：AI系统的目标往往服务于AI公司的商业利益（如最大化参与度和广告收入），而非消费者利益，这可能导致成瘾、错误信息等次生灾害。
*   **心理健康（Mental Fitness）受损风险**：将认知任务外包给LLM会使人类失去与任务的联系，长期使用会像久坐不动影响身体健康一样，悄悄危及人类的心理健康。
*   **供应链伦理与法律风险**：生成式AI的底层供应链存在三大严重问题：训练数据面临非法复制的版权诉讼；模型训练和推理产生庞大的气候足迹；依赖低成本国家劳动力在剥削条件下处理有害数据。
*   **误导性裁员风险**：受商业利益驱动的夸大叙事可能会说服企业管理者解雇人类员工，并用实际上无法胜任该工作的AI系统来取代他们。

## 正文

如今在社交媒体上“末日刷屏”阅读AI新闻，就像在做[罗夏墨迹测验](https://en.wikipedia.org/wiki/Rorschach_test)：你想找什么，就能找到什么。

如果你认为AI是[巨大的资金浪费](https://www.nytimes.com/2025/08/13/business/ai-business-payoff-lags.html)，你会发现这个角度的报道非常充分。如果你是行业利益相关者并担心[AI是否是一个泡沫](https://www.cnbc.com/2025/10/21/are-we-in-an-ai-bubble.html)，关于这个话题有许多令人屏息的观点。如果你在寻找[AI将毁灭世界](https://www.nationalgeographic.com/science/article/science-fiction-artificial-intelligence-robots)的证据，能够证实这一观点的“突发新闻”比比皆是。

在那些由代理型AI递归生成的、充满幻觉的摘要垃圾中，我有幸与[Praxis](https://medium.com/@praxishq)的一些友善人士交谈，他们在向学生普及批判性思维技能的迫切需求方面做了出色的工作。

那次交谈启发了这篇文章。

以下是我总结的10条核心观点，希望能分享给那些想要批判性地思考AI如何影响我们世界的人。

## 1. 生成式AI加上判别型人类是世界的新常态。

在数据科学和AI团队之外，有些人可能会感到惊讶：直到最近，大多数机器学习模型在本质上都是“判别式”的，执行诸如异常检测、数据分析和分类等任务（2010年代早期AI模型的一个著名例子是专注于[区分猫和狗](https://www.kaggle.com/c/dogs-vs-cats)）。

然后，数据分析师和数据科学家利用这些输出**生成**引人入胜的叙事（一种被称为“数据讲故事”的技能），通过精美的报告和演示文稿呈现出来。

如今，**这种动态已经逆转**——生成式AI可以制作那些精美的报告和演示文稿，但人类需要发挥批判性思维——塑造内容生成的方向，辨别质量，并提供真实的上下文（超越AI应用中“上下文窗口”这个巧妙的误称）。

简而言之：

一份好工作的要求并没有改变——但角色正在互换。

如果你从这篇文章中只记住一点，那就是——我们正在从以**判别式AI**和**生成型人类**为特征的工作，走向一个需要**判别型人类**的**生成式AI**世界。

## 2. 批判性地思考使用什么类型的AI，以及是否需要使用AI。

在深入探讨之前，有必要承认“AI”通常是一个无益的术语。虽然它是一个成熟的[学术研究领域](https://aima.cs.berkeley.edu/)，但目前它的使用过于宽泛，以至于正在脱离其基本原理。

实际上，AI涵盖了大量的方法和技术，将AI作为一个总称会使讨论变得模糊，并为误解提供肥沃的土壤，用炒作、抛头露面和不必要的混淆取代了对不同AI方法优势和局限性的细致、扎实的讨论。

例如，经典机器学习技术在小数据集上非常高效，当你对特征之间的关系感兴趣时，统计方法是正确的工具，而明确表示问题和知识的符号方法则解决了可解释性问题。AI的这些子分支都代表了一个强大且完善的工具包，可以解决困扰当前大型语言模型的问题。

从这个意义上说，AI不像是一把用来砸向每个问题的锤子，而更像是一个装有各种工具的工具箱，将正确类型的AI应用于正确的问题，在消除其神秘感和风险方面大有裨益。下次你听到“AI”时，要求使用具体的术语会让你更加清晰。

如果你把大型语言模型当作计算器来用，我表面上会微笑，但内心会感到崩溃。

## 3. 批判性地思考如何设计AI系统来协助你，否则你可能会发现它们在控制你。

一篇被广泛引用的论文将不同人与AI有效互动的方式比作[“赛博格”和“半人马”](https://www.hbs.edu/faculty/Pages/item.aspx?num=68273)。半人马创造了明确的分工，将AI视为工具；而赛博格（半机械人）则以更灵活、动态的方式将AI深度融入他们的思维和工作流程中。

两者都是有效的人机协作模式，但最危险和阴险的是由科利·多克托罗（Cory Doctorow）提出的[“反向半人马”](https://locusmag.com/feature/commentary-cory-doctorow-reverse-centaurs/)，即AI系统主导和指挥，**AI将人类视为工具**。一个例子是他描述的送货工人受制于AI系统，这些系统通过对他们进行极其细致的监控（甚至细致到车辆中的摄像头追踪他们眼球的运动）来为公司优化结果。

关于继续快速蔓延的[AI“暗黑模式”](https://www.forbes.com/sites/federicoguerrini/2024/11/17/ai-driven-dark-patterns-how-artificial-intelligence-is-supercharging-digital-manipulation/)的一个相关观点是，人们意识到AI系统的目标往往是AI**公司**的目标，而不是AI**消费者**的目标。驱动社交媒体信息流以最大化参与度的推荐引擎就是一个典型的例子，它们本质上是部署了一支由工程师、心理学家和设计师组成的队伍，将他们的才华集中对付你，以为广告收入机器提供燃料。而成瘾、错误信息和其他次生灾害则成了令人不便但很大程度上被忽视的事实。

这尤其阴险，因为公司还可以躲在“我们只是在给客户他们想要的东西”的叙事背后。但在这种情况下，公司是在利用我们更低级的“系统1”爬行动物大脑（通常在设计上有效地[劫持了我们的思想](https://medium.com/thrive-global/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3)），而不是服务于深思熟虑的“系统2”大脑的更好意图。

积极设计AI系统，使其服务于最好的你。

## 4. 批判性地思考生成式AI如何模糊独特性，以及如何保持你独特的自我。

一项[最近的研究](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5367123)表明，大量人群使用生成式AI制作内容的意外后果之一是，在线内容看起来越来越雷同。尽管系统、提示词和使用方式存在差异，但这种情况依然存在。

同一项研究还表明，人们更喜欢**没有**生成式AI的内容——虽然研究发现不使用AI会导致在线发布的帖子减少，但没有生成式AI发布的内容获得了更积极的互动。这并不奇怪，用下面这句话可以很好地概括：

> “如果一个人连写都不愿意写，我为什么要费心去读呢？”
>
> —— [BBC专题报道](https://www.bbc.com/news/articles/c15q5qzdjqxo)

这表明，无论是为了最大化你的外部影响力，还是为了发展你的内在身份，找到并坚持你自己的声音，现在比以往任何时候都更加重要。

## 5. 批判性地思考使用大型语言模型如何影响我们的大脑和心理健康。

此外，LLM用户缺乏所有权感，并且难以引用自己的工作。随着时间的推移，LLM用户“在神经、语言和行为层面上始终表现不佳”。

当我们选择使用AI来帮助我们完成认知任务时，我们就失去了与任务的联系，也失去了自己完成任务的好处，这具有长期的影响。

正如从体力劳动转向久坐不动的生活方式会[给我们的身体健康带来风险](https://medlineplus.gov/healthrisksofaninactivelifestyle.html#:~:text=By%20not%20getting%20regular%20exercise,High%20blood%20pressure)，从而需要[建议进行刻意的体育活动](https://pmc.ncbi.nlm.nih.gov/articles/PMC3419586/)来弥补一样，LLM已经在悄悄地危及我们的心理健康（mental fitness）。

## 6. 批判性地思考AI如何影响我们的世界观。

前一点将我们引向如何思考AI的影响。许多讨论集中在AI如何影响我们的工作并威胁要[自动化取代我们的工作](https://www.forbes.com/sites/jackkelly/2025/04/25/the-jobs-that-will-fall-first-as-ai-takes-over-the-workplace/)，但这只是故事的一部分。

首先，仅仅因为一项任务“暴露于AI”并不意味着它应该被自动化，而且工作不仅仅是任务的集合。它还包含人际关系、责任感和道德判断，更不用说人类的在场了。

代理型AI的一个讽刺之处在于，我们很少谈论**作为人类的我们**拥有怎样的能动性来设计我们在哪里以及如何实施AI，并将其引向正确的方向。

> 你知道推动一切AI化的最大问题是什么吗？方向错了。
>
> 我希望AI能帮我洗衣服和洗碗，这样我就可以进行艺术创作和写作，而不是让AI来做我的艺术创作和写作，好让我去洗衣服和洗碗。
>
> —— Joanna Maciejewska (@AuthorJMac) [2024年3月29日](https://twitter.com/AuthorJMac/status/1773679197631701238?ref_src=twsrc%5Etfw)

思考AI对任何特定领域影响的一个更有用的方法是通过“4个W”——工作台（Workbench）、工作（Work）、工作者（Workers）、世界观（Worldview）。工作台是用于工作的工具或技术。工作是指正在执行的任务和活动以及支持它们的结构。工作者是指从事工作的人员和其他利益相关者，而世界观是指一个领域中不成文的假设和事物运作的方式。

以教育为例，目前有关于学生使用ChatGPT和类似AI系统做作业和考试的讨论。人们对如何使用像ChatGPT这样的新生成式AI工具（工作台）来完成作业（工作）感到非常焦虑。但是，与其孤立地执着于如何检测生成式AI的使用，不如思考学生（工作者）正在发生怎样的变化——他们在学习AI素养的同时，对学科知识的学习却减少了，以及教育系统需要如何适应（世界观）这一新现实。

## 7. 批判性地思考正在讲述的AI故事，并寻找缺失的故事。

对于世界上许多最大的AI公司来说，这关系到[高达超过一万亿美元](https://www.gartner.com/en/newsroom/press-releases/2025-09-17-gartner-says-worldwide-ai-spending-will-total-1-point-5-trillion-in-2025)的巨额资金。这给这些公司带来了巨大的压力，迫使他们加速其AI产品的采用，并通过营销支出、高调的媒体采访以及能够以自私的方式扭曲事实的公关机器来推动AI的“炒作”。最近有新闻爆出，AI公司[向网红支付40万至60万美元](https://www.cnbc.com/2026/02/06/google-microsoft-pay-creators-500000-and-more-to-promote-ai.html#:~:text=Some%20said%20they%20have%20turned,his%20performances%20at%20Renaissance%20fairs.)来发布关于AI的内容。

重要的是要认识到，我们被告知的许多关于AI的故事绝大多数代表了**销售**AI的人的观点，而不是**真正体验**AI的人的观点。

这被称为[AI故事危机](https://link.springer.com/article/10.1007/s00146-022-01548-2#:~:text=Cave%20et%20al.-,2019).,a%20beneficial%20and%20equitably%20future.&text=Instead%2C%20a%20more%20nuanced%20approach,for%20bias%20and%20communicative%20purpose.&text=When%20asked%20about%20'dominant%20narratives,participants%20before%20discussing%20missing%20narratives.)，即塑造公众对AI讨论的主流叙事是由样本存在偏差的讲故事者塑造的，这可能会分散和误导公众对AI的理解和概念。

我想进一步指出，叙事塑造的不仅仅是“公众”，还延伸到了政府和公司，这提高了风险。

> AI无法取代你的工作，但AI推销员绝对可以说服你的老板解雇你，并用一个无法胜任你工作的AI来取代你。
>
> —— 柯利·多克托罗 (Cory Doctorow)

在这种环境下，要保持敏锐，不仅要看**内容**，还要看**贡献者**。思考每个AI故事背后的人是谁，以及是什么在驱动他们：你所读到的内容是来自某人的真实观点，还是来自被激励以特定方式构建故事的人？质疑故事的框架，并思考哪些利益相关者的声音没有被听到。

就真实的观点而言——检验这些故事的最好方法之一……就是亲自去体验AI。

## 8. 批判性地思考AI行业背后的供应链。

作为一名数据科学家，AI模型的三个重要输入是模型的**训练数据**、用于注释和处理数据的**劳动力**，以及用于模型训练和使用（称为“推理”）的**算力**。不幸的是，生成式AI的很大一部分建立在一个供应链上，而这个供应链中这三个组成部分都远非理想。

郝凯伦（Karen Hao）撰写的佳作《AI帝国》（[Empire of AI](https://www.amazon.com/Empire-AI-Dreams-Nightmares-Altmans/dp/0593657500)）在阐述这些功能失调方面比我做得更好。但简而言之：

*   **数据**：用于训练大型语言模型的数据目前是多起[诉讼](https://www.theguardian.com/technology/2025/dec/05/new-york-times-perplexity-ai-lawsuit)的焦点，AI公司被指控非法复制数百万篇文章来训练AI模型。
*   **环境问题**：当前一代AI模型存在大量环境问题。训练活动是高度能源密集型的，运行用户查询（称为“推理”）所消耗的能源也是如此。信息披露通常存在问题且不完整，但指出其具有庞大的[气候足迹](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/)，而成本可能会转嫁给消费者。
*   **劳动力**：AI行业可能会让人联想到在光鲜亮丽的城市办公室里享受免费午餐的高薪数据科学家和软件工程师，但实际上，大型语言模型也是由庞大的离岸劳动力驱动的，他们的工作涉及标记、注释和处理令人不安的内容，包括有毒和有害内容、血腥暴力以及更糟糕的内容。这些活动大部分发生在[低成本国家的剥削条件下](https://www.theguardian.com/technology/article/2024/jul/06/mercy-anita-african-workers-ai-artificial-intelligence-exploitation-feeding-machine)，并以牺牲心理健康为巨大代价。

有更好的方法来创建AI系统，我们应该抵制这种情况成为常态。

## 9. 批判性地思考采用的时间跨度，以解析AI的真实影响。

回到我们最初提到的“末日刷屏”，一种视角表明世界正在一夜之间发生变化，主要供应商[宣布在2025年平均每月发布两次模型](https://www.llmtimeline.com/)。

然而，新模型的发布与改变世界相去甚远。我发现区分**发明**（新模型的突破及其发布）、**采用**（该模型被实施到可用的产品中），以及最重要的[**普及**](https://www.oecd.org/en/topics/sub-issues/technology-diffusion.html)（它随着时间的推移慢慢在组织和家庭中传播）是很有用的。

以AI取代工作的叙事为例，工作远不止是任务的总和，它还包含深厚的背景、责任和人际关系。此外，虽然新的基础模型在[金融](https://arxiv.org/html/2512.08270v1)和[医学](https://pubmed.ncbi.nlm.nih.gov/41230320/)等高难度考试中表现良好，但这些模型的发明与它们广泛普及到组织和社会之间存在显著的滞后。

总的来说，我在大公司背景下的经验表明，虽然随着知识席卷整个组织，发明可以用天来衡量，但将模型采用到AI系统和产品中往往需要数周时间，而普及是一个慢得多的过程，可能会延伸到数年，因为习惯的形成、工作流程的缓慢重构以及技术缓慢地克服一系列个人、文化和组织障碍。

AI被比作拖拉机，因为它取代工人的能力类似于拖拉机最终取代马匹用于农业。事后看来，具有指导意义的是，拖拉机[花了整整一代人的时间才取代马匹](https://www.economist.com/christmas-specials/2023/12/20/a-short-history-of-tractors-in-english)。虽然有人认为在数字世界中事物发展得更快，但真正的普及很可能需要数年时间。

## 10. 你可以改变我们体验AI的方式。

与此同时，尽管流行的叙事听起来像是AI以一种不可避免的方式发生在我们身上，但我们体验“AI”的方式并不像一列在轨道上行驶的火车，而人类被绑在铁轨上等待着众所周知的火车失事。

将AI视为现代交通工具的早期阶段会更有用。一方面，我们意识到它是一个将在未来深远影响我们生活的基础系统。但另一方面，令人清醒的是，虽然第一辆[现代汽车大约在1885年发明](https://en.wikipedia.org/wiki/History_of_the_automobile)，但车门钥匙[直到1908年才出现](https://en.wikipedia.org/wiki/Car_key#History)，[三点式安全带直到1958年才发明](https://www.volvogroup.com/en/about-us/heritage/three-point-safety-belt.html)，而国际道路标志直到[1968年才标准化](https://treaties.un.org/Pages/ViewDetailsIII.aspx?src=TREATY&mtdsg_no=XI-B-20&chapter=11)。

现代汽车的初步采用与拥有有效且广泛的道路规则之间的这段时间差距，正是我们今天在AI领域所处的阶段。

我们还有工作要做——汽车及其发动机（AI应用及其模型）需要进行测试，车锁（AI安全功能）需要安装，驾驶员需要安全带和驾驶执照（用户需要AI安全和认证），道路标志（AI法规）需要统一。

未来是你今天就可以掌控的方向。

* * *

_上方显示的所有图像仅用于非商业说明目的。本文以个人身份撰写，不代表我工作或所属组织的观点。在起草本文时未使用生成式AI。不过，使用了Grammarly作为拼写和语法检查器。_

参考文献：

Randazzo, Steven, Hila Lifshitz, Katherine C. Kellogg, Fabrizio Dell’Acqua, Ethan Mollick, François Candelon, and Karim R. Lakhani. [“Cyborgs, Centaurs and Self-Automators: The Three Modes of Human-GenAI Knowledge Work and Their Implications for Skilling and the Future of Expertise.”](https://www.hbs.edu/faculty/Pages/download.aspx?name=26-036.pdf)Harvard Business School Working Paper, №26–036, December 2025.

Liu, Chaoran and Wang, Tong and Yang, S. Alex, Generative AI and Content Homogenization: The Case of Digital Marketing (July 26, 2025). Available at SSRN: [https://ssrn.com/abstract=5367123](https://ssrn.com/abstract=5367123) or [http://dx.doi.org/10.2139/ssrn.5367123](https://dx.doi.org/10.2139/ssrn.5367123)

Patel, Jaisal & Chen, Yunzhe & He, Kaiwen & Wang, Keyi & Li, David & Xiao, Kairong & Liu, Xiao-Yang. (2025). Reasoning Models Ace the CFA Exams. 10.48550/arXiv.2512.08270.

Kasagga A, Sapkota A, Changaramkumarath G, Abucha JM, Wollel MM, Somannagari N, Husami MY, Hailu KT, Kasagga E. Performance of ChatGPT and Large Language Models on Medical Licensing Exams Worldwide: A Systematic Review and Network Meta-Analysis With Meta-Regression. Cureus. 2025 Oct 10;17(10):e94300. doi: 10.7759/cureus.94300. PMID: 41230320; PMCID: PMC12603599.

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
