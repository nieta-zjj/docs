---
title: "我们如何构建 OWL —— 驱动基于 ChatGPT 的浏览器 Atlas 的新架构"

来源: "https://openai.com/zh-Hans-CN/index/building-chatgpt-atlas/"
英文原文: "https://openai.com/index/building-chatgpt-atlas/"
发布日期: "2025年10月30日"
分类: "[工程](https://openai.com/news/engineering/)"
作者: "[Ken Rockot](https://openai.com/news/?author=ken-rockot#results)（技术人员）、[Ben Goodger](https://openai.com/news/?author=ben-goodger#results)（ChatGPT Atlas 工程主管）"
标签: "[2025 年](https://openai.com/news/?tags=2025)"
---

## 摘要

**1) 一句话总结**
OpenAI 推出了集成了 ChatGPT 的全新浏览器 Atlas，通过自研的 OWL 架构将原生 Apple UI 与 Chromium 引擎进程解耦，实现了极速启动、高稳定性以及专为 AI 智能体优化的浏览体验。

**2) 关键要点**
*   **架构重构 (OWL)**：开发了 OWL (OpenAI's Web Layer) 架构，将 Chromium 浏览器进程作为独立服务层运行在 Atlas 主应用进程之外。
*   **原生技术栈**：放弃了 Chromium 的开源 UI，Atlas 的用户界面几乎完全基于现代原生框架（SwiftUI、AppKit 和 Metal）构建。
*   **性能与稳定性提升**：Chromium 在后台异步启动，实现 Atlas 界面秒开；且 Chromium 的主线程阻塞或崩溃不会导致 Atlas 主应用卡顿或崩溃。
*   **开发效率优化**：通过分发预编译的 OWL 二进制文件，将构建时间从数小时缩短至几分钟，确保新工程师入职首日即可提交代码。
*   **进程间通信 (IPC)**：Atlas（客户端）与 Chromium（宿主）通过 Chromium 的 Mojo 消息系统进行通信，并为其编写了自定义的 Swift 和 TypeScript 绑定。
*   **跨进程渲染与输入**：通过私有 `CALayerHost` API 嵌入共享合成容器实现跨进程像素传输；在 Swift 客户端中将 macOS 的 `NSEvent` 转换为 Blink 的 `WebInputEvent` 后转发给 Chromium。
*   **智能体视觉适配**：在智能体模式下，将下拉菜单等独立窗口的弹出 UI 按正确坐标合成回主页面图像，确保 AI 模型能在单帧内获取完整上下文。
*   **智能体隔离与安全**：智能体生成的输入事件直接路由至渲染器，绕过特权浏览器层以保持沙盒隔离；利用 `StoragePartition` 启动完全隔离且阅后即焚的临时内存存储会话。

**3) 风险与不足（基于原文明确提及的内容）**
*   **Chromium 默认配置局限**：Chromium 在启动序列、线程模型和标签页模型上的固有设定，难以直接满足 Atlas 快速启动和流畅支持数百个标签页的产品目标。
*   **开发构建成本高**：直接从源码检出和构建 Chromium 需要数小时，严重阻碍了团队“首日交付”的工程文化和快速迭代能力。
*   **智能体状态泄露风险**：在智能体浏览中，若直接共享用户现有的隐身模式配置文件，可能会导致用户状态泄露（已通过隔离的内存存储解决）。
*   **自动化输入越权风险**：若智能体生成的输入事件经过特权浏览器层，存在触发键盘快捷键从而执行与当前网页无关操作的风险（已通过直接路由至渲染器解决）。

## 正文

探索我们的全新流程架构，为你提供更快捷、更智能的网络体验。

上周我们[正式推出 ChatGPT Atlas](https://openai.com/zh-Hans-CN/index/introducing-chatgpt-atlas/)，一种让 ChatGPT 全程陪伴你浏览网络的全新方式。Atlas 不仅是一款功能齐全的网络浏览器，更展现了未来的发展方向：你可以带着 ChatGPT 畅游互联网，它能为你解答疑问、提供建议并完成任务。在本文中，我们将深入剖析该产品最复杂的工程技术之一：如何将 ChatGPT 打造成一款越用越智能的浏览器。

为了让 ChatGPT 真正成为网络浏览的得力助手，我们重新构想了整个浏览器的架构：将 Atlas 与 Chromium 运行时环境分离。这需要我们开发一种全新的 Chromium 集成方式，从而实现我们的产品目标：即时启动、多开标签页仍流畅响应，并为智能体应用场景奠定坚实基础。

构筑基础
----

![Image 2: ChatGPT Atlas 的主屏幕在浏览器中显示，输入框上方有一个提示气泡，上面写着“我们今天应该做什么？”。输入框下方是一些建议提示，例如“寻找旧金山附近的海滨出租房”、“回顾法网公开赛”、“创建一张 1770 年代新英格兰风格的鳄梨椅图片”以及“提高代码可读性”。背景采用柔和的蓝色和淡紫色渐变色。](https://images.ctfassets.net/kftzwdyauwt9/1ZfyDtGIW848OfrnJTaS9Z/6285496b60a6156fad19eddd9801bf87/AtlasBlog_Hero.png?w=3840&q=90&fm=webp)

Chromium 是理想的基础构建模块。它既提供具备稳健安全模型的尖端网络引擎，又拥有公认的性能表现和无与伦比的网络兼容性。更重要的是，它由全球社区开发并持续改进，使其成为现代桌面浏览器的常用选择。

重新构想浏览器体验
---------

我们卓越的设计团队为用户体验设定了宏伟目标，包括为智能体模式等功能配备丰富的动画与视觉效果。这要求工程团队必须采用最前沿的原生框架（SwiftUI、AppKit 和 Metal）构建用户界面，而非简单地对开源 Chromium 用户体验进行重新设计。正因如此，Atlas 的用户界面实现了对整个应用体验的全面重构。

我们同时设定了其他产品目标，例如快速启动和支持数百个标签页而不影响性能。这些目标在 Chromium 的默认配置下难以实现，因其在启动序列、线程模型和标签页模型等细节上存在诸多固有设定。我们曾考虑进行深度改造，但希望保持对 Chromium 的补丁集精准可控，以便快速集成新版本。为确保最大程度提升开发速度，我们必须找到集成与驱动 Chromium 运行时的创新方案。

我们技术投资的试金石不仅在于加速实验、迭代和新功能交付，更在于守护 OpenAI 工程文化的核心：首日交付能力。每位新工程师在入职首日下午都会提交并合并一项小改动。我们需要确保这在技术上可行，尽管 Chromium 的检出和构建过程可能需要数小时。

我们的解决方案：OWL
-----------

为应对这些挑战，我们构建了名为 **OWL(OpenAI's Web Layer)** 的全新架构层。OWL 是我们对 Chromium 的集成实现，其方式是在主 Atlas 应用进程 _之外_ 运行 Chromium 的浏览器进程。

![Image 3: 工作流程示意图展示 AI 系统的三个阶段：构建、部署与优化。构建阶段包含模型、工具、提示及安全防护四个模块。部署阶段由单个长模块组成，标注为“用户界面”。优化阶段包含三个相互连接的模块，分别标注为“优化”、“编排”和“可观测性”，其中一条虚线箭头从“可观测性”循环回到“优化”，表示持续改进。](https://images.ctfassets.net/kftzwdyauwt9/7tSQJdJbXxqGcQvor7qISU/ccd3c639b73969670244477a105538e8/AtlasBlog_Diagram-1-Light-Desktop__1_.svg?w=3840&q=90)

可以这样理解：Chromium 通过将标签页移至独立进程，彻底革新了浏览器。我们更进一步，将 Chromium 本身从主应用程序进程中分离出来，置于一个独立的服务层。这一转变带来了一系列优势：

*   **更简单、现代的应用：**Atlas 几乎完全基于 SwiftUI 与 AppKit 构建。具备统一语言、统一技术栈、统一干净的代码库。
*   **启动速度更快：**Chromium 在后台异步启动。Atlas 无需等待，像素几乎瞬间即可呈现在屏幕上。
*   **避免卡顿和崩溃：**Chromium 是功能强大且复杂的网络引擎。即使其主线程阻塞，Atlas 也不会受到影响。即使 Chromium 崩溃，Atlas 也能保持运行。
*   **更轻松的代码合并：**由于我们并未大量采用 Chromium 的开源用户界面部分，因此与上游 Chromium 的差异要小得多，也更易于维护。
*   **迭代速度更快：**大多数工程师无需在本地构建 Chromium。OWL 已在内部以预编译二进制文件的形式发布，因此 Atlas 的构建只需几分钟，而非数小时。

由于我们团队的大多数工程师并不经常从源代码构建 Chromium，因此开发速度得以大幅提升，即使是新成员，也能在入职后的首日下午合并简单的更改。

OWL 工作原理
--------

从宏观层面来看，Atlas 浏览器是 **OWL 客户端**，而 Chromium 浏览器进程则是 **OWL 宿主**。它们通过 IPC（进程间通信）进行交互，具体来说使用的是[Mojo](https://chromium.googlesource.com/chromium/src/+/main/mojo/README.md) —— Chromium 自有的消息传递系统。我们为 Mojo 编写了自定义 Swift（甚至 TypeScript）绑定，以便我们的 Swift 应用可以直接调用主机端的接口。

OWL 客户端库提供了一个简洁的公共 Swift API，对宿主服务层公开的若干关键概念进行了抽象。

*   **会话：**全局配置和控制宿主
*   **配置文件：**管理特定用户配置文件的浏览器状态
*   **WebView：**控制和嵌入单个网页内容（例如渲染、输入、导航、缩放等）
*   **WebContentRenderer：**将输入事件转发到 Chromium 的渲染管道，并接收来自渲染器的反馈
*   **LayerHost/Client：**在用户界面与 Chromium 之间交换合成信息。

![Image 4: AI 系统的分层架构图。最顶层是构建层，包含模型、工具、提示和安全防护。在其下方，集成层包含应用用户界面、应用逻辑和开发工具。再往下，部署层横跨整个宽度，标注为“用户界面”。最底部，优化层显示优化、编排和可观测性，箭头指示它们之间的反馈循环。](https://images.ctfassets.net/kftzwdyauwt9/7GmV8JW4eIRqk36PgM8Zsc/67943f7df84a1b6965f8750778279671/AtlasBlog_Diagram-2-Light-Desktop__3_.svg?w=3840&q=90)

此外，还有各种各样的服务端点，用于管理书签、下载、扩展程序和自动填充等高级功能。

#### 渲染：跨越进程边界的像素传输

在客户端应用中共享互斥展示空间的 WebView 会通过共享合成容器进行动态切换。例如：浏览器窗口通常设有单一共享容器，选择标签栏中的标签页会将该标签页的 WebView 切换到该容器中。在 Chromium 端，该容器对应由 `CALayer` 最终提供支持的 `gfx::AcceleratedWidget`。我们向客户端公开该图层的背景信息 ID，由 `NSView` 通过私有 `CALayerHost API` 将其嵌入。

![Image 5: 详细技术栈示意图展示 AI 产品的构建与运维体系。最顶层是构建层，包含模型、工具、提示和安全防护。在其下方，集成层显示应用用户界面、应用逻辑和开发工具。部署层横跨整个宽度，标注为“用户界面”。底部的优化层包括优化、编排与可观测性。各层之间标有箭头，分别标注为“开发人员用户体验”、“防护栏与安全”和“数据”，表明信号和反馈如何贯穿整个系统端到端地流动。](https://images.ctfassets.net/kftzwdyauwt9/2myZ2iCZXYNeGFeV822AoK/18493d38fb640cb50d9ced6dfeda80e3/AtlasBlog_Diagram-3-Light-Desktop__2_.svg?w=3840&q=90)

对于特殊场景（如 Chromium 在独立弹出控件中渲染的 `下拉菜单或取色器），同样适用此方法。它们虽没有 content::WebContents，但确实有自带 gfx::AcceleratedWidget 的 content::RenderWidgetHostView，因此仍可采用相同的委托渲染模式。OWL 内部保持视图几何结构与 Chromium 端同步，确保 GPU 合成器能相应更新，持续生成尺寸与设备缩放比例精准的图层内容。我们还复用该技术，将 Chromium 原生视图 UI 元素选择性投射至 Atlas（该机制同样适用于快速启动权限提示等功能，无需在 SwiftUI 中从头构建替代方案）。这项技术大量借鉴了 Chromium 在 macOS 上用于可安装网络应用的现有基础架构。输入事件：解析与转发Chromium UI 会将平台事件（例如 macOS 的 NSEvent）转换为 Blink 的 WebInputEvent 模型，然后再转发给渲染器。但由于 OWL 在隐藏进程中运行 Chromium，因此我们在 Swift 客户端库中自行完成此转换，并将已转换的事件转发给 Chromium。之后，这些事件会遵循与真实网络内容输入事件相同的生命周期。这包括当页面表明未处理该事件时，将事件回传至客户端。如果出现这种情况，我们会重新合成 NSEvent，让应用的其他部分有机会处理该输入。智能体模式：特殊场景处理Atlas 的智能浏览特性对我们的渲染方案、输入事件转发及数据存储方法提出了独特挑战。我们的计算机使用模型期望以屏幕的单个图像作为输入。但部分 UI 元素（如` 下拉菜单）会在标签页边界之外的单独窗口中渲染。在智能体模式下，我们将这些弹出窗口按正确坐标合成回主页面图像，使模型能在单帧内看到完整背景信息。

对于输入，我们应用相同原则：智能体生成的事件直接路由至渲染器，绝不经过特权浏览器层。这样，即使在自动化控制下，仍能保持沙盒边界的隔离。例如，我们不希望此类事件触发键盘快捷键，从而让浏览器执行与当前网络内容无关的操作。

智能体浏览还可以在临时的“未登录”环境下运行。我们不共享用户现有的隐身模式配置文件（这可能会导致状态泄露），而是使用 Chromium 的 `StoragePartition` 基础架构来启动隔离的内存存储。每个智能体会话都会从零开始；会话结束时，所有的 Cookie 和网站数据都会被清除。可以运行多个“未登录”智能体会话，每个会话都在独立的浏览器标签页中，并且彼此完全隔离。

使用网络的全新方式
---------

若无全球 Chromium 社区的卓越贡献及其为现代网络奠定的坚实基础，这一切都无从实现。OWL 以创新方式在此基础上构建：将引擎与应用解耦，融合顶尖网络平台与现代原生框架，从而打造更快、更灵活的架构。

通过重构浏览器与 Chromium 的集成方式，我们为新型体验创造空间：更流畅的启动、更丰富的用户界面、与操作系统其余部分实现更紧密的集成，同时拥有与创意速度匹配的开发循环。如果你愿意迎接此类挑战，欢迎申请我们目前在 Atlas 项目中招聘的 [Atlas 软件工程师](https://openai.com/careers/software-engineer-atlas-san-francisco/)、[iOS](https://openai.com/careers/software-engineer-ios-san-francisco/) 软件工程师[等](https://openai.com/careers/search/?c=e1e973fe-6f0a-475f-9361-a9b6c095d869%2Cf002fe09-4cec-46b0-8add-8bf9ff438a62%2Cab2b9da4-24a4-47df-8bed-1ed5a39c7036)职位。

**请访问 [chatgpt.com/atlas](https://chatgpt.com/atlas) 体验 Atlas。**

## 致谢

特别感谢 Darin Fisher 和 Marie Shin 对本文的贡献，以及所有参与构建 Atlas 的 OpenAI 团队成员。

## 关联主题

- [[00-元语/OpenAI]]
- [[00-元语/ChatGPT]]
- [[00-元语/Agent]]
- [[00-元语/AI]]
- [[00-元语/multimodal]]
- [[00-元语/browser-automation]]
- [[00-元语/desktop-client]]
- [[00-元语/ui-protocol]]
- [[00-元语/protocol]]
- [[00-元语/security]]
