---
title: "Coinbase 使用 AI 编程工具提升开发效率，同时正在欺诈预防、客户支持、风险评分、设计等多个业务领域积极应用 AI 技术"

来源: "https://baoyu.io/blog/coinbase-ai-improves-development-efficiency"
发布日期: "2025-02-21"
作者: "宝玉"
---

## 摘要

### 1) 一句话总结
Coinbase 正在全面整合 AI 技术以提升业务效率与安全性，涵盖全员使用 Cursor 编程、规划自动生成 PR，并在欺诈预防、客户支持、链上风险评分及产品设计等核心领域落地了成熟的 AI 解决方案。

### 2) 关键要点
*   **全员普及 AI 编程：** 100% 的 Coinbase 工程师已使用 Cursor（基于 VS Code 的 AI 编辑器）进行智能补全和代码重构，显著提升了开发速度和代码质量。
*   **探索工单自动生成 PR：** 计划实现为每个 Jira/Linear 工单自动生成 AI 草拟的拉取请求（PR），从低难度修复类任务开始，经人工审核后合并，以实现需求到代码的初步自动化。
*   **机器学习驱动欺诈预防：** 在 AWS SageMaker 上部署大规模 ML 模型（如 XGBoost、神经网络），将模型训练时间从 20 小时缩短至 10 分钟，实时拦截恶意行为并降低资金损失。
*   **生成式 AI 重塑客户支持：** 采用 Anthropic 的 Claude 模型构建智能客服、坐席助手和帮助中心搜索；通过多云架构（AWS 和 GCP）实现 99.9999% 的超高可用性，有效应对突发流量并降低人工成本。
*   **统一内部 AI 平台 (CB-GPT)：** 构建了无代码内部平台 CB-GPT，集成多家大模型（Azure、GCP、Anthropic 及开源模型），目前已快速孵化 35～50 个内部定制 AI 应用。
*   **区块链地址风险评分：** 利用 Node2Vec 图嵌入算法和监督学习，为链上地址生成 0～1 的风险评分，提前预警欺诈交易，已为用户避免数百万美元损失并增强了反洗钱（AML）合规能力。
*   **AI 辅助产品设计：** 设计团队利用多模态 AI（如 Stable Diffusion、DALL·E、LLM）快速生成视觉概念草稿、起草 UI 文案并分析用户反馈，大幅加速了创意产出和迭代周期。

### 3) 风险与不足（基于原文明确提及）
*   **风控误报风险：** 欺诈检测模型可能会产生误报从而影响正常用户，必须在训练前进行严格的历史回测和 A/B 测试以将影响降至最低。
*   **合规与数据泄露风险：** AI 客服在交互中可能违反财务合规要求或泄露敏感信息，需要制定严格的问答规则和内容过滤机制。
*   **单点故障风险：** 依赖单一云服务提供商可能导致 AI 服务受限或中断，因此必须采用多云策略（如同时使用 AWS 和 Google Cloud）来保证弹性和冗余。
*   **AI 生成代码的安全性隐患：** 完全由 AI 生成的代码（如自动 PR）无法保证绝对的正确性和安全性，当前流程中必须强制保留人类工程师的代码评审（Code Review）和测试环节。

## 正文

**根据 Coinbase 首席执行官布莱恩·阿姆斯特朗（Brian Armstrong）的消息**，Coinbase 正在多个业务领域积极应用人工智能（AI）技术，包括欺诈预防、客户支持、风险评分、设计等。目前 **100% 的工程师** 已开始使用名为 Cursor 的 AI 编程工具提升开发效率 ([Coinbase CEO: Coinbase is using artificial intelligence in many ways - PANews](https://www.panewslab.com/en/articledetails/8w7gd6k1.html#:~:text=PANews%20reported%20on%20February%2019,all%20tickets%20in%20the%20future))。**下一步**，Coinbase 计划为每个 Jira 或 Linear 工单自动生成一份 AI 草拟的拉取请求（PR）供工程师参考，实现从需求到代码的初步自动化 ([Coinbase CEO: Coinbase is using artificial intelligence in multiple ways - ChainCatcher](https://www.chaincatcher.com/en/article/2168318#:~:text=have%20started%20using%20Cursor))。下面将分领域介绍这些 AI 应用案例、采用的技术方案，以及它们为 Coinbase 带来的商业价值和影响。

![Image 1](https://baoyu.io/uploads/2025-02-21/1740178274141.png)

### 欺诈预防（Fraud Prevention）

**AI 应用案例：** 在欺诈预防方面，Coinbase 利用 AI 来检测并阻止各类恶意行为和可疑交易。通过机器学习模型分析用户登录、交易等行为模式，识别异常并及时采取措施，保护用户账户安全 ([Using advanced Machine Learning models to protect our users accounts](https://www.coinbase.com/blog/using-advanced-machine-learning-models-to-protect-our-users-accounts#:~:text=Our%20Data%2C%20Risk%2C%20and%20Security,build%20trust%20with%20its%20users))。此外，AI 还用于身份验证等环节，例如自动审核用户提交的身份证件，以防范身份冒用。

**技术方案：**

*   **机器学习模型：** 构建了大规模的**欺诈检测模型**，输入包含数千种行为和环境特征（如用户地理位置、浏览器指纹、登录方式、链上交易历史、关系网络等） ([Using advanced Machine Learning models to protect our users accounts](https://www.coinbase.com/blog/using-advanced-machine-learning-models-to-protect-our-users-accounts#:~:text=Our%20Machine%20Learning%20system%20consists,to%20ensure%20maximized%20customer%20protection))。模型采用提升树（如 XGBoost）、序列模型和深度神经网络等先进架构，以提高检测恶意活动的准确率和召回率 ([Using advanced Machine Learning models to protect our users accounts](https://www.coinbase.com/blog/using-advanced-machine-learning-models-to-protect-our-users-accounts#:~:text=type%20to%20on,well%20as%20automatic%20data%20refresh))。模型训练前进行严格的历史回测和 A/B 测试，确保在拦截欺诈的同时将误报对正常用户的影响降到最低。

*   **风控平台与基础设施：** Coinbase 构建了完善的**机器学习平台**，包括实时和批处理特征存储、一键模型训练部署、高可用低延迟的在线推断服务，以及自动化的数据刷新机制 ([Using advanced Machine Learning models to protect our users accounts](https://www.coinbase.com/blog/using-advanced-machine-learning-models-to-protect-our-users-accounts#:~:text=boosted%20trees%2C%20sequence%20models%2C%20and,well%20as%20automatic%20data%20refresh))。在基础设施上，Coinbase将模型部署在 AWS 的 SageMaker 托管平台上运行 ([Lowering total cost of ownership for machine learning and increasing productivity with Amazon SageMaker | AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/lowering-total-cost-of-ownership-for-machine-learning-and-increasing-productivity-with-amazon-sagemaker/#:~:text=Image%20Coinbase%20uses%20ML%20models,Amazon%20SageMaker%2C%20NuData%20Security%20prevents))。借助 SageMaker 的分布式训练和自动伸缩能力，模型训练时间从过去的20小时缩短到10分钟 ([Lowering total cost of ownership for machine learning and increasing productivity with Amazon SageMaker | AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/lowering-total-cost-of-ownership-for-machine-learning-and-increasing-productivity-with-amazon-sagemaker/#:~:text=Image%20Coinbase%20uses%20ML%20models,six%20months%20to%20one%20week))。同时，利用 SageMaker 内置的安全合规模块，降低了模型部署的运维成本和合规风险 ([Lowering total cost of ownership for machine learning and increasing productivity with Amazon SageMaker | AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/lowering-total-cost-of-ownership-for-machine-learning-and-increasing-productivity-with-amazon-sagemaker/#:~:text=Image%20Coinbase%20uses%20ML%20models,Amazon%20SageMaker%2C%20NuData%20Security%20prevents))。

**商业价值和影响：**

*   **账户安全与用户信任：** AI驱动的风控体系使Coinbase能更主动地**拦截欺诈行为**，减少黑客盗取账户、欺诈交易等对用户造成的损失，为1亿多用户提供更安全的交易环境 ([Using advanced Machine Learning models to protect our users accounts](https://www.coinbase.com/blog/using-advanced-machine-learning-models-to-protect-our-users-accounts#:~:text=Our%20Data%2C%20Risk%2C%20and%20Security,build%20trust%20with%20its%20users)) ([Using advanced Machine Learning models to protect our users accounts](https://www.coinbase.com/blog/using-advanced-machine-learning-models-to-protect-our-users-accounts#:~:text=Ultimately%2C%20our%20machine%20learning%20models,best%20safeguard%20the%20entire%20community))。强大的欺诈预防能力有助于建立用户对平台的信任，提升 Coinbase 品牌声誉。

*   **降低损失与合规风险：** 通过机器学习实时阻断可疑交易，Coinbase **避免了潜在的资金损失**和欺诈赔付支出；同时，在身份验证、反洗钱等环节应用AI有助于满足监管要求，降低合规风险和罚款概率。整体而言，AI风控措施为公司节省了成本并保护了用户资产安全。

### 客户支持（Customer Support）

**AI 应用案例：** 在客户服务方面，Coinbase 引入了**生成式 AI**来提升支持效率和用户体验。具体应用包括：面向客户的**智能客服聊天机器人**，可以回答常见问题；提供给坐席人员的**工单助手**，实时协助客服代表撰写回复、解释操作流程；以及改进**帮助中心搜索**功能，由 AI 根据知识库内容直接生成简明答案 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Coinbase%20integrated%20Claude%20into%20three,key%20systems))。这些 AI 应用旨在7×24小时提供高质量支持，并减少人工客服的压力 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=The%20customer%20support%20chatbot%20has,agents%2C%20enabling%20faster%20customer%20service))。

**技术方案：**

*   **大型语言模型：** Coinbase 选择了 Anthropic 公司的 **Claude** 模型作为客服智能的核心引擎。内部测试显示，Claude 在回答准确性和稳定性方面优于其他模型，因此被采用为主要对话模型 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Coinbase%20chose%20Claude%20for%20its,%E2%80%9D))。为了确保服务的可靠性，Coinbase 通过多云架构部署 Claude，同时利用 AWS Bedrock 和 Google Vertex AI 提供服务，以实现接近 **99.9999%** 的超高可用性 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Coinbase%20chose%20Claude%20for%20its,%E2%80%9D)) ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Coinbase%27s%20multi,quotas%20across%20different%20cloud%20platforms))。这种多云策略提供了弹性和冗余，保证即使单一云服务受限时，AI 客服仍能稳定运行。

*   **提示优化与安全控制：** 在上线 AI 客服前，Coinbase 工程团队与 Anthropic 密切合作，设计了优化的 prompt 提示和对话流程 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Before%20releasing%20their%20conversational%20AI,instructions%20to%20Claude%20more%20effectively))。他们为 Claude 制定了严格的**财务合规问答规则**和内容过滤，确保 AI 回复符合监管要求，不泄露敏感信息 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=,knowledge%20bases%20and%20customer%20data))。此外，Claude 模型被调整为支持多语言沟通，让来自不同国家的用户都能获得流畅的自动支持。

*   **内部平台 (CB-GPT)：** Coinbase 开发了内部**“Coinbase-GPT” 平台**，作为统一的生成式AI服务框架。通过该平台，团队可以无代码地构建和部署各种定制 AI 助手，实现快速迭代 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Coinbase%20also%20created%20CB,for%20all%20employees%20and%20customers))。目前 Coinbase 内部已经构建了约 35～50 个 AI 应用，从客服 chatbot 到合规审查助手等，都基于这套平台快速开发 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Coinbase%20also%20created%20CB,for%20all%20employees%20and%20customers))。CB-GPT 平台底层集成了来自 Azure、GCP、Anthropic 等多家的大模型接口，以及自托管的开源模型（如 LLaMA、Mistral），会根据任务需求智能选择最合适的模型以平衡成本和性能 ([CB-GPT - The opportunity and the vision for GenAI at Coinbase](https://www.coinbase.com/blog/cb-gpt-the-opportunity-and-the-vision-for-genAI-at-coinbase#:~:text=%2A%20CB,technologies%2C%20regardless%20of%20their%20source))。

**商业价值和影响：**

*   **提升响应效率，节省人工成本：** 部署 AI 客服后，许多常见问题能够由机器人自动解答并**成功解决更多咨询**，减少了人工介入 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=The%20customer%20support%20chatbot%20has,agents%2C%20enabling%20faster%20customer%20service))。对于需要人工处理的复杂问题，AI **坐席助手**可以先行拟稿或提供相关知识，使人工客服的平均处理时间明显下降，服务更多用户所需的人力投入降低。总体上，这提高了支持团队的人均效率，帮助 Coinbase 控制客户支持成本，同时应对用户规模的增长。

*   **改善用户体验：** AI 驱动的支持系统能够**即时响应**用户请求，缩短等待时间，提供一致且个性化的回答。这种全天候的即时服务提高了用户满意度 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=The%20customer%20support%20chatbot%20has,agents%2C%20enabling%20faster%20customer%20service))。此外，通过 Claude 模型强大的语言能力，帮助中心搜索结果相关性更高，用户自助找到答案的成功率提升，进一步优化了客户体验。

*   **应对高峰与培训新人大幅提速：** 加密交易市场波动大，Coinbase 客服咨询量会骤增。AI客服具备良好的扩展性，能从容应对峰值流量并保持服务质量 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Claude%20has%20successfully%20managed%20unpredictable,quality%20support))。同时，新招聘的客服人员可以借助 AI 工具快速学习——通过**Agent Assist** 查询内部知识库、多语言回复范例，大大缩短培训周期 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Coinbase%27s%20AI%20tools%20have%20also,range%20of%20unstructured%20text%20inputs))。这使团队能够更快扩编并保持服务水准。

### 风险评分（Risk Scoring）

**AI 应用案例：** Coinbase 构建了**区块链地址风险评分系统**，利用 AI 来评估链上地址的可疑程度 ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=Tl%3Bdr%3A%20Coinbase%20introduces%20an%20innovative,provide%20extended%20protection%20for%20users))。加密交易由于匿名性，会存在不法分子利用新地址进行欺诈的风险。该系统会为外部区块链地址生成0～1之间的风险评分，以预测其是否可能涉及欺诈交易，从而在用户与高风险地址交互时提前发出警示或采取风控措施 ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=Tl%3Bdr%3A%20Coinbase%20introduces%20an%20innovative,provide%20extended%20protection%20for%20users)) ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=What%20does%20it%20all%20mean,for%20you))。通过这一方式，Coinbase 将风险管控从平台内部扩展到了链上生态，为用户提供**延伸的安全保护** ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=Tl%3Bdr%3A%20Coinbase%20introduces%20an%20innovative,provide%20extended%20protection%20for%20users))。

**技术方案：**

*   **特征工程与图算法：** 风险评分模型综合了**链上交易图谱特征**和地址行为特征 ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=address,were%20obtained%20from%20validated%20sources))。一方面，统计每个地址的交易行为汇总特征（如交易次数、频率、金额分布等）；另一方面，引入**图数据库**和网络分析，将地址在区块链交易图中的关联关系纳入考量 ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=address,were%20obtained%20from%20validated%20sources))。为有效表示庞大的交易网络，Coinbase 使用 **Node2Vec 图嵌入算法**将区块链地址映射为低维向量表达，并通过分布式计算对新增地址持续增量训练模型，以适应区块链网络的动态增长 ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=As%20of%20October%202023%2C%20Ethereum,with%20the%20large%20scale%20and)) ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=generating%20graph%20embedding%20for%20blockchain,capability%20to%20effectively%20detect%20fraudulent))。

*   **机器学习模型：** 基于上述丰富特征，Coinbase 训练了**监督学习模型**来输出地址的风险评分 ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=information,were%20obtained%20from%20validated%20sources))。模型训练使用了从历史诈骗案例中获取的标签数据作为真值，通过学习已知恶意地址的特征模式来**预测未知地址的风险** ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=information,were%20obtained%20from%20validated%20sources))。模型部署在高扩展性的分布式环境中，可以对数亿级别的地址进行评分计算，并实时集成到交易流程的风控检查中。

**商业价值和影响：**

*   **提前防范潜在威胁：** 该地址风险评分系统已应用于 Coinbase 多个产品，充当用户资产的“防火墙”。当用户尝试与高风险地址进行交易时，系统可以**主动发出警告或延迟交易**以便人工复核 ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=The%20blockchain%20address%20risk%20scoring,with%20high%20risk%20blockchain%20addresses))。这种提前介入机制已经保护了大量用户免受诈骗损失，据报道此系统已为用户**避免了数百万美元的潜在损失** ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=The%20blockchain%20address%20risk%20scoring,with%20high%20risk%20blockchain%20addresses))。

*   **增强平台安全合规：** 有了对外部地址的风险洞察，Coinbase 在反洗钱（AML）和制裁合规方面更加主动。系统标记的高风险地址可以与监管名单比对，帮助 Coinbase 更及时地报告可疑活动，避免卷入非法交易。总体而言，风险评分提高了平台安全等级，让用户在 Coinbase 上交易时更加安心 ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=Together%2C%20these%20algorithmic%20advancements%20in,working%20to%20keep%20your%20crypto))。

### 设计（Design）

**AI 应用案例：** 在产品和视觉设计领域，Coinbase 的团队也开始探索**生成式 AI**的辅助作用，将其视为激发创意和提高产出的新工具之一。设计师使用 AI 来快速生成头脑风暴素材，例如利用文本生成模型起草产品界面的文案描述，或通过图像生成模型创造初步的视觉概念稿。这些 AI 产生的素材可供设计团队参考、筛选和再创作，加速了设计迭代过程 ([CB-GPT - The opportunity and the vision for GenAI at Coinbase](https://www.coinbase.com/blog/cb-gpt-the-opportunity-and-the-vision-for-genAI-at-coinbase#:~:text=Generative%20AI%20,driven%20landscape))。

**技术方案：**

*   **文本与图像生成模型：** Coinbase 设计团队尝试将**多模态生成 AI**融入工作流程。例如，使用图像生成模型（如 _Stable Diffusion_、_DALL·E_ 等）根据文本提示快速生成产品插画、图标草稿，帮助视觉设计师在短时间内获得多种风格创意。与此同时，利用大型语言模型（LLM）处理设计需求文档和市场素材：一方面**自动生成 UI 文案**、产品说明等文字内容，确保语调和品牌风格一致；另一方面，通过 NLP 模型分析用户研究的反馈文本，提炼共性意见供设计师参考，以数据驱动迭代方向。

*   **协同设计工具：** 这些 AI 模型通常集成到设计师熟悉的工具链中。例如，通过 Figma 等设计软件的插件接入 OpenAI 的接口，或使用专门的 AI 原型工具，将生成式 AI 功能嵌入到界面设计、用户体验优化的过程中。这样设计师无需深厚的编程背景，也能方便地调用 AI 来辅助完成特定设计任务。

**商业价值和影响：**

*   **加速创意产出：** 引入 AI 后，设计团队在**概念探索阶段**的效率大幅提升。以前可能需要数天完成的多版概念草图，借助生成式模型几分钟即可产生初稿供团队讨论。这种并行化的创意产出让设计师有更多方案可以对比筛选，从中选取最佳思路，加快了决策和迭代速度。

*   **降低成本并提高品质：** AI 工具承担了部分重复劳动（如素材搜集、版式尝试），让设计师将精力集中于**创意把控和细节打磨**。同时，AI 模型可以学习既有的品牌视觉规范，确保生成内容在风格上一致性，从而减少返工。总体来看，这些措施缩短了设计周期，节约了外包插画、素材采购等成本，并有助于产出更丰富高质的视觉内容，强化了 Coinbase 产品的市场吸引力。

### 工程师开发效率（Engineering Productivity）

**AI 应用案例：** Coinbase 非常重视开发流程中的 AI 赋能，旨在提高工程团队的效率和代码质量。据 Brian Armstrong 透露，公司**所有工程师**目前都在使用一款名为 **Cursor** 的 AI 驱动代码编辑器来辅助日常开发 ([Coinbase CEO: Coinbase is using artificial intelligence in many ways - PANews](https://www.panewslab.com/en/articledetails/8w7gd6k1.html#:~:text=PANews%20reported%20on%20February%2019,all%20tickets%20in%20the%20future))。开发者可以在撰写代码时随时获得 AI 提示和自动补全，甚至通过对话式指令让 AI 重构代码、查找 bug 等，从而极大提升开发效率。这个案例表明，AI 已深入融入 Coinbase 的软件工程实践。

**技术方案：**

*   **Cursor AI 编辑器：** Cursor 是由 VS Code 分支改造而来的高级编程工具，内置了强大的 AI 能力 ([Using AI-powered IDEs with our docs - Coinbase Docs](https://docs.cdp.coinbase.com/get-started/docs/use-ai-tooling#:~:text=Built%20as%20a%20fork%20of,language%20editing%2C%20and%20codebase%20understanding))。它利用大型语言模型理解代码上下文和开发者的自然语言意图，实现**智能代码补全**、自动更正和批量重构等功能 ([Using AI-powered IDEs with our docs - Coinbase Docs](https://docs.cdp.coinbase.com/get-started/docs/use-ai-tooling#:~:text=Built%20as%20a%20fork%20of,language%20editing%2C%20and%20codebase%20understanding))。工程师可以用类似聊天的方式向 Cursor 提出需求，例如“重写此函数以提高性能”或“在此文件添加错误处理”，Cursor 便会解析指令并产出相应的代码修改建议。由于继承了 VS Code 界面，工程师几乎无需学习成本即可将其融入日常工作流程。

*   **底层模型与集成：** Cursor 背后的 AI 模型据悉包括 OpenAI GPT 系列等主流代码生成模型（例如 Codex/GPT-4），以及可能结合开源的代码大模型。它支持本地项目的索引，能够**理解整个代码库**的结构和依赖关系，从而在生成代码时确保与现有代码风格和规范一致。此外，Cursor 提供了即插即用的插件和API接口，方便与 Coinbase 内部的开发者工具链集成，例如自动触发代码检查、测试运行等，加速从代码编写到提交的全过程。

**商业价值和影响：**

*   **显著提高开发速度：** 借助 AI 自动补全和代码生成，工程师撰写代码的速度大幅提升。许多样板代码和重复性编码工作由 AI 即时提供，减少了手工输入的时间。实验表明，使用 Cursor 后开发者完成功能的时间明显缩短，**加快了产品迭代**和发布节奏。对于初级工程师，AI 工具也起到了教学辅导作用，帮助其迅速掌握最佳实践。

*   **代码质量改进：** Cursor 等工具还能及时发现代码中的潜在错误或安全隐患，并建议修复方案。这种实时反馈机制在代码评审之前就**提升了代码质量**，减少了 Bug 引入。工程师在提交代码前即可根据 AI 建议进行优化，降低了代码审核和测试阶段发现问题的概率。结果是，Coinbase 的整体软件交付质量和稳定性得到提高，减少了生产环境故障率。

*   **激发工程创新：** 由于 AI 减轻了程序员不少重复劳动，工程团队可以将更多精力投入到复杂架构设计和创新性项目上。这提高了工程师的工作满意度和创造力，有助于 Coinbase 吸引和留住顶尖开发人才。同时，通过在全公司推广 AI 开发助手，Coinbase 树立了技术先锋形象，在行业内形成正向影响。

### 自动生成 PR（Auto-Generated PR for Jira/Linear）

**AI 应用案例：** Coinbase 正在展望更进一步的**开发流程自动化**——让 AI 直接根据需求描述生成代码变更提案。Armstrong 提到，公司计划实现每个 Jira 或 Linear 工单在创建时**自动附带一个 AI 生成的拉取请求（PR）草稿** ([Coinbase CEO: Coinbase is using artificial intelligence in multiple ways - ChainCatcher](https://www.chaincatcher.com/en/article/2168318#:~:text=have%20started%20using%20Cursor))。也就是说，当产品或项目经理在工单中描述一个待解决的问题或新功能（可能还包含截图等信息）时，AI 能理解这些描述并产出相应的代码修改建议（即 PR）。首先会从**低难度的“修复类”工单**开始试验，由 AI 提交修补代码；待验证效果良好后，再逐步拓展到更复杂的任务 ([Coinbase CEO: Coinbase is using artificial intelligence in multiple ways - ChainCatcher](https://www.chaincatcher.com/en/article/2168318#:~:text=But%20the%20next%20step%20is,all%20tickets%20in%20the%20future))。

**技术方案：**

*   **需求到代码的生成模型：** 实现自动 PR 生成需要综合运用自然语言处理和代码生成技术。首先，AI 模型需要**理解工单的文本描述**（包含故障现象、需求说明等）以及附加的截图信息。这可能需要引入多模态的大型模型——例如 OpenAI 的 GPT-4 (Vision) 等，能够同时处理文本和图像输入，从中提取关键信息（如错误日志、UI界面变化） ([Coinbase CEO: Coinbase is using artificial intelligence in multiple ways - ChainCatcher](https://www.chaincatcher.com/en/article/2168318#:~:text=have%20started%20using%20Cursor))。接着，结合 Coinbase 代码库的上下文，利用专门训练的**代码生成模型**（类似于 Codex 或 Code Llama 等）编写出满足需求的代码改动。整个过程相当于让 AI 扮演初级开发者的角色，根据描述自行修改代码并提交初稿。

*   **人机协作审核：** 由于完全由 AI 生成的代码仍需严格把关，Coinbase 会在流程中保持人类工程师审核环节。AI 提交 PR 草稿后，分配相关模块的工程师进行代码评审和测试，确保修改的正确性和安全性，然后才能合入主代码库。随着模型能力的提升和信任度建立，审核流程或可进一步优化，但在人机协作模式下可以稳步推进此功能上线。

*   **持续学习优化：** 每一次 AI PR 草稿与最终人工修改的对比，都会成为训练数据，反馈给模型不断学习改进。这种**闭环学习**使 AI 越来越熟悉 Coinbase 的系统和编码规范，输出的建议质量也会随之提高。长期来看，模型或许能胜任越来越复杂的改动提案，真正融入开发团队工作。

**商业价值和影响：**

*   **开发效率变革：** 若该功能成功实施，将显著**减少工程师在简单任务上花费的时间**。重复性的漏洞修复、代码格式调整等都可由 AI 自动完成初稿，工程师只需审核合并即可。由此，开发团队可将更多时间用于核心功能开发和技术攻关，**加快产品交付**。对于大量小型改进需求，AI PR 可以做到即时响应，不再受制于人手排期。

*   **降低出错率：** AI 在生成 PR 时会严格按照描述执行，不会遗漏步骤，从而降低了因人为疏忽导致的遗漏或错误修改。同时，AI 可以针对每个工单提供一个**标准化的初始解决方案**，使团队对问题的响应更一致，减少因为理解偏差造成的反复修改。这有助于提高代码库的整洁度和维护效率。

*   **创新文化与行业领先：** Coinbase 尝试用 AI 改造开发流程本身，这在行业中属于前沿实践。一旦证明可行，将引领软件开发模式的革新。对于 Coinbase 而言，这样的创新文化不仅提升内部士气，也彰显其技术领导力，有助于在加密行业和科技领域获得更大的影响力。

**参考文献：**

1.   【ChainCatcher】Coinbase 正在多领域使用 AI，包括欺诈预防、客户支持、风险评分、设计，以及让 100% 工程师使用 Cursor，并计划为 Jira/Linear 工单自动生成 PR ([Coinbase CEO: Coinbase is using artificial intelligence in multiple ways - ChainCatcher](https://www.chaincatcher.com/en/article/2168318#:~:text=ChainCatcher%20news%2C%20Coinbase%20CEO%20Brian,engineers%20have%20started%20using%20Cursor))

2.   **Coinbase 博客** - _Using advanced Machine Learning models to protect our users accounts_. 介绍了 Coinbase 如何利用机器学习模型保护用户账户安全，包含特征工程、模型架构（提升树、序列模型、神经网络）等技术细节 ([Using advanced Machine Learning models to protect our users accounts](https://www.coinbase.com/blog/using-advanced-machine-learning-models-to-protect-our-users-accounts#:~:text=Our%20Machine%20Learning%20system%20consists,to%20ensure%20maximized%20customer%20protection)) ([Using advanced Machine Learning models to protect our users accounts](https://www.coinbase.com/blog/using-advanced-machine-learning-models-to-protect-our-users-accounts#:~:text=type%20to%20on,well%20as%20automatic%20data%20refresh))。

3.   **AWS 案例** - _Coinbase uses ML models on Amazon SageMaker..._ 提到 Coinbase 在 AWS SageMaker 上部署机器学习用于欺诈预防、身份验证和合规等，并将模型训练时间从20小时缩短到10分钟 ([Lowering total cost of ownership for machine learning and increasing productivity with Amazon SageMaker | AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/lowering-total-cost-of-ownership-for-machine-learning-and-increasing-productivity-with-amazon-sagemaker/#:~:text=Image%20Coinbase%20uses%20ML%20models,Amazon%20SageMaker%2C%20NuData%20Security%20prevents))。

4.   **Coinbase 博客** - _Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System_. 介绍了 Coinbase 的区块链地址风险评分系统，利用 Node2Vec 图嵌入和机器学习对链上地址进行风险预测，为用户提供扩展保护 ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=Tl%3Bdr%3A%20Coinbase%20introduces%20an%20innovative,provide%20extended%20protection%20for%20users)) ([Detecting Fraudulent Transactions: Coinbase Scalable Blockchain Address Risk Scoring System](https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk#:~:text=address,were%20obtained%20from%20validated%20sources))。

5.   **Anthropic 案例** - _Coinbase transforms customer support with Claude AI integration..._. 阐述了 Coinbase 将 Anthropic 的 Claude 模型应用于客服聊天机器人、坐席辅助、帮助中心搜索等，并通过多云部署实现高可用性 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Coinbase%20integrated%20Claude%20into%20three,key%20systems)) ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Coinbase%20chose%20Claude%20for%20its,%E2%80%9D))。还提到内部构建了 “CB-GPT” 平台用于快速开发AI应用 ([Coinbase transforms customer support with Claude AI integration across chatbot, agent tools, and help center \ Anthropic](https://www.anthropic.com/customers/coinbase#:~:text=Coinbase%20also%20created%20CB,for%20all%20employees%20and%20customers))。

6.   **Coinbase 博客** - _CB-GPT: The opportunity and vision for GenAI at Coinbase_. 描述了 Coinbase 内部统一的生成式AI平台整合了多家 LLM（包括 Azure/OpenAI、Anthropic 以及开源模型等），并提供检索增强型生成（RAG）等能力来支持不同业务场景 ([CB-GPT - The opportunity and the vision for GenAI at Coinbase](https://www.coinbase.com/blog/cb-gpt-the-opportunity-and-the-vision-for-genAI-at-coinbase#:~:text=%2A%20CB,technologies%2C%20regardless%20of%20their%20source))。

7.   **Coinbase 文档** - _使用 AI 驱动的 IDE（Cursor）_. 说明了 Cursor AI 编辑器是 VS Code 的分支，具备 AI 代码补全、自然语言编辑和代码理解等功能，可以提升编程体验 ([Using AI-powered IDEs with our docs - Coinbase Docs](https://docs.cdp.coinbase.com/get-started/docs/use-ai-tooling#:~:text=Built%20as%20a%20fork%20of,language%20editing%2C%20and%20codebase%20understanding))。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Cursor]]
- [[00-元语/Claude]]
- [[00-元语/productivity]]
- [[00-元语/llmops]]
- [[00-元语/llm]]
- [[00-元语/prompt]]
- [[00-元语/multimodal]]
- [[00-元语/ide]]
- [[00-元语/code-review]]
- [[00-元语/compliance]]
- [[00-元语/security]]
- [[00-元语/blockchain]]
- [[00-元语/risk]]
- [[00-元语/design]]
- [[00-元语/软件工程]]
- [[00-元语/workflow]]
