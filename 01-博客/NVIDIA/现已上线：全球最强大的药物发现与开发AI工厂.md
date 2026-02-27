---
title: "现已上线：全球最强大的药物发现与开发AI工厂"
发布日期: 2026-02-26
作者: "NVIDIA"
来源: "NVIDIA"
原文链接: "https://blogs.nvidia.com/blog/lilly-ai-factory-live/"
译注: "根据原文翻译整理"
---

## 摘要

**1) 一句话总结**
礼来公司（Lilly）正式上线了由1016块NVIDIA Blackwell Ultra GPU驱动的全球最强药物研发AI工厂“LillyPod”，旨在通过突破性的超级计算能力加速药物发现与开发。

**2) 关键要点**
*   **顶级硬件配置**：LillyPod是全球首个配备DGX B300系统的NVIDIA DGX SuperPOD，搭载1016块NVIDIA Blackwell Ultra GPU，可提供超过9000 petaflops的AI算力。
*   **高效部署与海量处理**：该系统仅用四个月即在印第安纳波利斯组装完成，利用超290 TB的高带宽GPU内存可处理高达700 TB的数据。
*   **突破传统研发瓶颈**：构建了大规模计算“干实验室”，使科学家能在物理实验前并行模拟数十亿个分子假设，打破了传统“湿实验室”每年每个靶点仅能测试约2000个分子的物理限制。
*   **核心模型训练**：主要用于支持蛋白质扩散模型、小分子图神经网络模型以及基因组学基础模型的大规模训练。
*   **全栈软件与网络支持**：采用NVIDIA Spectrum-X以太网网络，并利用NVIDIA Mission Control软件安全高效地管理工作负载和自动化AI操作。
*   **TuneLab平台与联邦学习**：推出Lilly TuneLab平台，结合NVIDIA BioNeMo和基于NVIDIA FLARE的联邦学习技术，使外部生物技术公司能在保护自身数据隐私的前提下，访问礼来耗资超10亿美元数据构建的专有AI模型。
*   **可持续发展规划**：系统采用高效液冷技术，礼来计划到2030年实现该AI基础设施100%使用可再生电力运行。

## 正文

现已上线：用于药物发现与开发的Lilly AI工厂 | NVIDIA 博客
![Image 4: country_code](https://www.nvidia.com/content/dam/1x1-00000000.png)

现已上线：全球最强大的药物发现与开发AI工厂

 LillyPod由1,000多块NVIDIA Blackwell Ultra GPU构建而成，现已上线，旨在为科学研究提供动力并为医学的未来注入强大动能。

 2026年2月26日 作者：[Rory Kelleher](https://blogs.nvidia.com/blog/author/rorykelleher/)

![Image 5](https://blogs.nvidia.com/wp-content/uploads/2026/02/Lilly-AI-Factory_Poster-Image-scaled.png)

**分享**

[](https://twitter.com/intent/tweet?text=Now%20Live:%20The%20World%E2%80%99s%20Most%20Powerful%20AI%20Factory%20for%20Pharmaceutical%20Discovery%20and%20Development%20https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Flilly-ai-factory-live%2F)[](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Flilly-ai-factory-live%2F)[](http://news.ycombinator.com/submitlink?u=https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Flilly-ai-factory-live%2F&t=Now+Live%3A+Lilly+AI+Factory+for+Pharmaceutical+Discovery+and+Development+%7C+NVIDIA+Blog)[](https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Flilly-ai-factory-live%2F&title=Now+Live%3A+Lilly+AI+Factory+for+Pharmaceutical+Discovery+and+Development+%7C+NVIDIA+Blog)[电子邮件 0](https://blogs.nvidia.com/blog/lilly-ai-factory-live/#ea-share-count-email)

拯救和改善生命——这一最伟大的人类事业——刚刚获得了超级计算的助力。

Lilly（礼来）本周推出了由制药公司全资拥有和运营的最强大的AI工厂，以帮助其团队更快、更准确、以前所未有的规模取得有意义的医学进展。该工厂被称为LillyPod，是全球首个配备[DGX B300系统](https://www.nvidia.com/en-us/data-center/dgx-b300/)的[NVIDIA DGX SuperPOD](https://www.nvidia.com/en-us/data-center/dgx-superpod/)。

Lilly的AI工厂由配备1,016块NVIDIA Blackwell Ultra GPU的DGX SuperPOD提供动力，可提供超过9,000 petaflops的AI性能。它仅用四个月就组装完成。

 LillyPod于周三在印第安纳波利斯的剪彩仪式上正式启用。

“超级计算机的上线对我们来说是个大日子，但这也是酝酿了150年的一天，”Lilly执行副总裁兼首席信息与数字官Diogo Rau表示。“LillyPod是我们是谁以及我们为何从事这项工作的有力象征：让世界各地人们的生活变得更美好。此时此地，我们正处于以一种前所未有的方式推进生物学发展的绝佳时机。”

走进LillyPod的幕后

曾经需要700万台Cray超级计算机的计算能力，现在只需一块NVIDIA GPU即可容纳——而LillyPod包含1,000多块这样的GPU。这一基础设施使Lilly的基因组学团队能够利用超过290 TB的高带宽GPU内存来处理700 TB的数据。

“计算是生物学的核心，也是科学的核心，”Lilly高级副总裁兼首席AI官Thomas Fuchs表示。“对于像我们这样的公司来说，能够进行大规模计算不是可选项，而是绝对必要的。因此，我们正在构建医学的计算未来，你可以在制药价值链的所有领域看到这一点。”

![Image 6](https://blogs.nvidia.com/wp-content/uploads/2026/02/Lilly-AI-Factory_triptych1-scaled.png)

Lilly的AI工厂将支持蛋白质扩散模型、小分子[图神经网络](https://blogs.nvidia.com/blog/what-are-graph-neural-networks/)模型和基因组学[基础模型](https://blogs.nvidia.com/blog/what-are-foundation-models/)的大规模训练。

NVIDIA DGX SuperPOD提供的NVIDIA全栈AI工厂架构——包括加速计算、[NVIDIA Spectrum-X以太网](https://www.nvidia.com/en-us/networking/spectrumx/)网络和优化的AI软件——为医疗健康和生命科学领域高度受监管的工作流提供了一个安全、可扩展的平台。

这台超级计算机的近5,000个连接由超过1,000磅的光纤电缆构建而成。Lilly的目标是到2030年使其新的AI超级计算基础设施100%使用可再生电力运行，采用高效的液冷技术，并将新增能源影响降至最低。

![Image 7](https://blogs.nvidia.com/wp-content/uploads/2026/02/Lilly-AI-Factory_triptych2-scaled.png)

推进基础模型、物理AI和代理AI

LillyPod不仅仅是一个工具——它是一种将专有数据和高级AI模型结合在一起的新型科学仪器。

在此基础上，Lilly团队可以分析基因组，探索数十亿种化学可能性，并在临床开发和制造中应用AI，以设计更好的试验、优化生产并加速决策。这些功能共同实现了更快、更精确、更具可扩展性的药物创造和交付。

“LillyPod将开启AI驱动的药物发现新纪元，”Lilly高级副总裁兼首席技术官Tim Coleman表示。“我们相信计算是科学的基础，Lilly的患者理应获得我们所能提供的每一项优势。”

您的浏览器不支持HTML5视频。

部分模型将通过Lilly TuneLab提供，这是一个AI和机器学习平台，为生物技术公司提供访问基于Lilly耗资超10亿美元生成的专有数据构建的药物发现模型的途径。

作为首个计划同时提供Lilly模型和用于医疗健康与生命科学的[NVIDIA BioNeMo](https://www.nvidia.com/en-us/industries/healthcare-life-sciences/biopharma/)开放基础模型的药物发现平台，TuneLab使用基于[NVIDIA FLARE](https://developer.nvidia.com/flare)构建的联邦学习基础设施，这使得生物技术公司能够利用强大的专有AI模型，同时保持其数据私密并与其他用户隔离。随着更多公司的参与，模型将不断改进，从而使所有用户受益，并进一步扩大生物技术生态系统的AI访问权限。

您的浏览器不支持HTML5视频。

从历史上看，药物发现一直受到湿实验室物理限制的制约。即使是高产的团队，通常每年每个靶点也只能分析大约2,000个分子构想，因为每个实验都需要进行物理合成和测试。

“现在，超级计算中心基本上打破了[湿实验室的]物理限制，”Lilly研发信息学副总裁Yue Wang Webster表示。“现在在干实验室中，您可以触手可及地测试数十亿个分子构想。”

LillyPod通过创建一个大规模的计算干实验室消除了这一限制，科学家可以在进行物理实验之前，并行模拟和评估数十亿个分子假设。

借助其内部AI平台，Lilly员工还可以使用LillyPod构建聊天机器人、代理工作流和研究实验室代理，而无需重复造轮子。

![Image 8](https://blogs.nvidia.com/wp-content/uploads/2026/02/Lilly-AI-Factory_2R7A2042-scaled.jpg)

通过结合科学、数据和计算能力，Lilly和NVIDIA正在为生命科学领域的AI开辟新天地。

“这台机器正是AI应有的使用方式，”Fuchs说。“它应该用于科学。它应该用于减轻痛苦和改善人类生存状况。”

在[NVIDIA GTC](https://www.nvidia.com/gtc/?ncid=prsy-146963)的以下会议中聆听Lilly的分享：

_了解更多关于Lilly与NVIDIA在_[_这座AI工厂_](https://blogs.nvidia.com/blog/lilly-ai-factory-nvidia-blackwell-dgx-superpod/)_以及即将推出的_[_联合创新AI实验室_](https://nvidianews.nvidia.com/news/nvidia-and-lilly-announce-co-innovation-lab-to-reinvent-drug-discovery-in-the-age-of-ai)_方面的合作。_

分类：[数据中心](https://blogs.nvidia.com/blog/category/enterprise/)[生成式AI](https://blogs.nvidia.com/blog/category/generative-ai/)

标签：[AI工厂](https://blogs.nvidia.com/blog/tag/ai-factory/)[人工智能](https://blogs.nvidia.com/blog/tag/artificial-intelligence/)[医疗健康与生命科学](https://blogs.nvidia.com/blog/tag/healthcare-life-sciences/)[高性能计算](https://blogs.nvidia.com/blog/tag/high-performance-computing/)[NVIDIA DGX](https://blogs.nvidia.com/blog/tag/nvidia-dgx/)[科学可视化](https://blogs.nvidia.com/blog/tag/scientific-visualization/)[社会影响](https://blogs.nvidia.com/blog/tag/social-impact/)

相关新闻

[![Image 9](https://blogs.nvidia.com/wp-content/uploads/2026/02/cyber-gen-ai-press-1920x1080-1-960x540.jpg)](https://blogs.nvidia.com/blog/ai-cybersecurity-operational-technology-industrial-control-systems/)[NVIDIA将AI驱动的网络安全引入全球关键基础设施](https://blogs.nvidia.com/blog/ai-cybersecurity-operational-technology-industrial-control-systems/)

 随着全球技术和系统变得更加数字化和互联，运营技术（OT）环境和工业控制系统（ICS）——从能源和制造到交通和公用事业…… [阅读文章](https://blogs.nvidia.com/blog/ai-cybersecurity-operational-technology-industrial-control-systems/)

[![Image 10](https://blogs.nvidia.com/wp-content/uploads/2026/02/ai-infra-corp-blog-india-impact-summit-2026-1280x680-1-960x510.png)](https://blogs.nvidia.com/blog/india-ai-mission-infrastructure-models/)[印度携手NVIDIA推动其AI使命](https://blogs.nvidia.com/blog/india-ai-mission-infrastructure-models/)

 从AI基础设施领导者到前沿模型开发者，印度正与NVIDIA合作，推动全国范围内的AI转型…… [阅读文章](https://blogs.nvidia.com/blog/india-ai-mission-infrastructure-models/)

[![Image 11](https://blogs.nvidia.com/wp-content/uploads/2026/02/inference-charts-inferencemax-v1.5-perf-charts-4753570-r12_1-alt-960x540.png)](https://blogs.nvidia.com/blog/data-blackwell-ultra-performance-lower-cost-agentic-ai/)[SemiAnalysis InferenceX最新数据显示，NVIDIA Blackwell Ultra为代理AI提供高达50倍的性能提升和35倍的成本降低](https://blogs.nvidia.com/blog/data-blackwell-ultra-performance-lower-cost-agentic-ai/)

 NVIDIA Blackwell平台已被Baseten、DeepInfra、Fireworks AI和Together AI等领先的推理提供商广泛采用，将每个Token的成本降低了高达10倍…… [阅读文章](https://blogs.nvidia.com/blog/data-blackwell-ultra-performance-lower-cost-agentic-ai/)

[![Image 12](https://blogs.nvidia.com/wp-content/uploads/2026/02/inference-press-moe-x-tokenomics-think-smart-blog-4779150-1280x680-1-960x510.jpg)](https://blogs.nvidia.com/blog/inference-open-source-models-blackwell-reduce-cost-per-token/)[领先的推理提供商利用NVIDIA Blackwell上的开源模型将AI成本降低高达10倍](https://blogs.nvidia.com/blog/inference-open-source-models-blackwell-reduce-cost-per-token/)

 医疗健康领域的诊断洞察。互动游戏中的角色对话。客户服务代理的自主解决方案。这些由AI驱动的交互中的每一个都建立在相同的…… [阅读文章](https://blogs.nvidia.com/blog/inference-open-source-models-blackwell-reduce-cost-per-token/)

### 公司信息

### 参与其中

### 新闻与活动

 版权所有 © 2026 NVIDIA Corporation

### 在Mastodon上分享

输入您的Mastodon实例URL（可选） 分享

分享此文章
朋友的电子邮件地址

您的姓名

您的电子邮件地址

发送电子邮件

电子邮件已发送！

NVIDIA使用cookie来改善您在我们的网站上的体验。我们和我们的第三方合作伙伴还使用cookie和其他工具来收集和记录您提供的信息以及有关您与我们网站互动的相关信息，以用于性能改进、分析并协助营销工作。继续使用本网站或点击下方按钮之一，即表示您同意按照我们的[隐私政策](https://www.nvidia.com/en-us/about-nvidia/privacy-policy/)和[Cookie政策](https://www.nvidia.com/en-us/about-nvidia/cookie-policy/)（受您的设置约束）中所述使用cookie和其他工具，并接受我们的[服务条款](https://www.nvidia.com/en-us/about-nvidia/terms-of-service/)（其中包含重要的豁免条款）。有关我们隐私惯例的更多信息，请参阅我们的[隐私政策](https://www.nvidia.com/en-us/about-nvidia/privacy-policy/)。

我们检测到了全球隐私控制（GPC）信号，并已在此浏览器上为您选择退出了本网站上的所有可选cookie。您可以通过点击“管理设置”来管理您的cookie设置。有关更多信息，请参阅我们的[Cookie政策](https://www.nvidia.com/en-us/about-nvidia/cookie-policy/)。要选择退出出于定向广告目的的非cookie个人信息“销售”/“共享”，请访问[NVIDIA偏好中心](https://www.nvidia.com/en-us/privacy-center/)。有关我们隐私惯例的更多信息，请参阅我们的[隐私政策](https://www.nvidia.com/en-us/about-nvidia/privacy-policy/)。

我们检测到了全球隐私控制信号（GPC），并已在此浏览器上为您选择退出了所有可选cookie。您可以通过点击“管理设置”来管理您的cookie设置。有关更多信息，请参阅我们的[Cookie政策](https://www.nvidia.com/en-us/about-nvidia/cookie-policy/)。我们还为您选择退出了cookie之外的个人信息“共享”/“销售”。您可以在[NVIDIA偏好中心](https://www.nvidia.com/en-us/privacy-center/)管理这些设置。有关更多信息，请参阅我们的[隐私政策](https://www.nvidia.com/en-us/about-nvidia/privacy-policy/)。

我们检测到了全球隐私控制信号（GPC），并已在此浏览器上为您选择退出了所有可选cookie。您可以通过点击“管理设置”来管理您的cookie设置。有关更多信息，请参阅我们的[Cookie政策](https://www.nvidia.com/en-us/about-nvidia/cookie-policy/)。我们还为您选择退出了cookie之外的个人信息“共享”/“销售”，这会覆盖您之前至少一项设置。您可以在[NVIDIA偏好中心](https://www.nvidia.com/en-us/privacy-center/)管理它们。有关更多信息，请参阅我们的[隐私政策](https://www.nvidia.com/en-us/about-nvidia/privacy-policy/)。

管理设置

关闭可选Cookie 同意

![Image 14: NVIDIA Logo](https://cdn.cookielaw.org/logos/10ddf4ca-c072-45d0-b3ac-eead0ed93db0/6e17f6e4-c77b-4a11-9f34-c107c42e4bfc/7981.png)

Cookie设置

我们和我们的第三方合作伙伴（包括社交媒体、广告和分析合作伙伴）使用cookie和其他跟踪技术来收集、存储、监控和处理有关您访问我们网站时的某些信息。收集的信息可能与您、您的偏好或您的设备有关。我们使用这些信息来使网站正常运行、分析我们网站的性能和流量、提供更个性化的网络体验，并协助我们的营销工作。

根据某些隐私法，您有权指示我们不要出于定向广告目的“出售”或“共享”您的个人信息。要选择退出通过cookie“出售”和“共享”个人信息，您必须使用下方的切换按钮选择退出可选cookie。要选择退出通过其他方式（例如在线表单）收集的数据的“出售”和“共享”，您还必须通过[NVIDIA偏好中心](https://www.nvidia.com/en-us/about-nvidia/privacy-center/)更新您的数据共享偏好。

点击下方不同的类别标题以了解更多信息并根据您的偏好更改设置。您无法选择退出必需的Cookie，因为部署它们是为了确保我们网站的正常运行（例如提示cookie横幅和记住您的设置等）。点击底部的“保存并接受”或“全部拒绝”，即表示您同意按照我们的[Cookie政策](https://www.nvidia.com/en-us/about-nvidia/cookie-policy/)（根据您的设置）中所述使用cookie和其他工具，并接受我们的[服务条款](https://www.nvidia.com/en-us/about-nvidia/terms-of-service/)（其中包含重要的豁免条款）。有关我们隐私惯例的更多信息，请参阅我们的[隐私政策](https://www.nvidia.com/en-us/about-nvidia/privacy-policy/)。

必需的Cookie

始终处于活动状态

这些cookie可实现核心功能，例如安全性、网络管理和无障碍环境。这些cookie是网站运行所必需的，无法关闭。

Cookie详细信息

性能Cookie

- [x] 性能Cookie

Cookie详细信息

个性化Cookie

- [x] 个性化Cookie

这些cookie收集有关您如何与我们网站互动的数据，以帮助我们改善您的网络体验，例如您访问了哪些页面。这些cookie可能会存储一个唯一ID，以便我们的系统在您返回时记住您。它们可能由我们或我们已将其服务添加到我们页面的第三方提供商设置。这些cookie使我们能够提供增强的网站功能和个性化，并使我们发送给您的营销信息更符合您的兴趣。如果您不允许这些cookie，那么部分或所有这些服务可能无法正常运行。

Cookie详细信息

广告Cookie

- [x] 广告Cookie

这些cookie记录您对我们网站的访问、您访问过的页面以及您关注的链接，以影响您在其他网站上看到的广告。这些cookie及其收集的信息可能由其他公司（包括我们的广告合作伙伴）管理，并可能用于建立您的兴趣档案并在其他网站上向您展示相关广告。我们和我们的广告合作伙伴将使用这些信息使我们的网站及其上显示的广告更符合您的兴趣。

Cookie详细信息

Cookie列表

清除

*   - [x] 复选框标签 标签

应用 取消

同意 合法利益

- [x] 复选框标签 标签

- [x] 复选框标签 标签

- [x] 复选框标签 标签

全部拒绝 保存并接受

[![Image 15: Powered by Onetrust](https://cdn.cookielaw.org/logos/static/powered_by_logo.svg)](https://www.onetrust.com/products/cookie-consent/)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
