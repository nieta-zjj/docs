---
title: "简单说一下 GitHub Copilot 和 Cursor 的差别，以及为什么我觉得 Cursor 要更好"

来源: "https://baoyu.io/blog/github-copilot-vs-cursor"
发布日期: "2024-12-16"
作者: "宝玉"
---

## 摘要

### 1) 一句话总结
本文对比了 GitHub Copilot 和 Cursor 的核心功能差异，指出 Cursor 凭借多位置同步修改、精准的手动上下文控制以及支持全局代码应用的智能体（Agent）能力，在整体开发效率上优于 GitHub Copilot。

### 2) 关键要点
*   **底层架构差异**：GitHub Copilot 最初作为 VSCode 插件存在（现逐步融合至内核）；Cursor 则是基于 VSCode 源码深度定制的 AI 编辑器，VSCode 用户可无缝切换。
*   **自动补全与修改**：Copilot 一次只能在光标后提示并修改一个位置；Cursor 支持同时对多个位置进行准确的提示和修改重构。
*   **提示词入口与交互**：两者均可通过 `CMD + I` 或侧边栏唤出提示词窗口，但 Copilot 缺乏明显的快捷键 UI 提示；Cursor 推荐使用 `CMD + I` 唤出 Composer 面板进行全局操作。
*   **上下文控制（核心差异）**：Copilot 依赖打开的 Tab 标签来“猜测”上下文，准确率有限；Cursor 允许在 Composer 中通过 `+` 或 `@` 手动精准附加代码作为上下文，更适合专业程序员。
*   **代码应用方式**：Copilot Chat 仅生成参考代码，需手动复制粘贴；Cursor Chat 提供“Apply”按钮，可直接将代码应用到对应文件。
*   **全局重构能力**：Copilot 的内联修改仅限当前文件；Cursor 的 Composer 可以在项目全局添加、删除和修改代码，并支持用户 Review 后全部或局部接受/拒绝。
*   **Agent（智能体）模式**：Cursor 的 Composer 提供 Normal 和 Agent 两种模式。Agent 模式可根据指令自主分析代码、安装依赖包（需用户确认），特别适合新项目环境搭建。

### 3) 风险与不足（原文明确提及）
*   **信息时效性风险**：GitHub Copilot 更新频繁，文章中提到的部分功能对比可能已经或即将过时。
*   **AI 自动选择上下文的局限性**：现阶段完全寄希望于 AI 自动“猜测”并选择代码上下文是不靠谱的，必须依赖开发者的手动精确控制。

## 正文

简单说一下 GitHub Copilot 和 Cursor 的差别，以及为什么我觉得 Cursor 要更好。

最开始 GitHub Copilot 是 VSCode 插件形式，只能在当前光标位置自动完成，当然现在越来越多的功能融合到 VSCode 内核中了，比如 CMD + I 就可以弹出对话框，比如有专门的聊天侧边栏。VSCode 也在提供更多的原生 AI 编辑器的支持。

Cursor 最开始不是基于 VSCode，但后来直接基于 VSCode 魔改了，是基于 VSCode 集成了 AI 功能的编辑器。VSCode 用户几乎可以无缝切换到 Cursor，Cursor 的成功一大半得归功于 VSCode 的开源。

功能上有几点主要差别（GitHub Copilot 最近更新很频繁，我写的一些内容可能已经或者将会过时）

第一个常用的是自动补全、修改功能。

这个功能是你在正在修改代码、写代码的时候，编辑器自动给出智能提示，猜测你要做什么修改，如果猜对了你只要按 Tab 键，就可以自动修改。

GitHub Copilot会在你的光标后用灰色显示，但是一次只能提示一个位置；Cursor 可以提示多个位置同时对多个位置进行修改重构。并且 Cursor 会更准确，经常你一点光标它就能给出靠谱的智能提示。如果你用惯了 Cursor 再去用 GitHub Copilot 会觉得它很“笨”，经常猜不到你要什么，而且要一个地方一个地方修改。

第二个是通过提示词添加、重构、删除新功能

很多人在用 AI 编辑器只用了自动补全修改的功能，而通过提示词让 AI 帮你生成代码的功能用的比较少或者不会用，这就相当于让 AI 编辑器的能力只发挥了一小部分，真正体现智能的地方就是通过提示词对项目全局修改。

GitHub Copilot 和 Cursor 都可以通过两种方式唤出写提示词的窗口：CMD + I 或者侧边栏的 AI Chat。GitHub Copilot 的 CMD + I 这个快捷键功能没有太多人知道，因为 VSCode 上没有明显提示，很多人不知道，Cursor 在选中代码后有提示相对好一点。

但是 Cursor 又有两个功能键 CMD + K 和 CMD + I，有一些细微差别，建议默认选择 CMD + I 这个，也叫 Composer。

![Image 1](https://baoyu.io/uploads/2024-12-16/1734391397999.png)

这个提示词撰写窗口对于 GitHub Copilot 和 Cursor 来说，有个根本性的差别，包括 Windsurf 也没有的，就是上下文内容的手动选择。对于 GitHub Copilot 来说，它是根据你打开的 Tab 标签来“猜测”你的上下文，但这很难猜准，而 Cursor 可以让你手动选择你想要的上下文，在Composer中通过+号或者 @ 去附加代码。对于专业程序员来说，手动控制上下文这非常非常重要！因为在修改代码时，肯定少不了要引用现有的代码，参考其API，参考其代码结构等等，虽然你也可以手动复制进去，但是如果你可以方便的选择那是最好的。

回归到提示词工程，要让提示词效果好核心有两点：

1.   指令清晰

2.   上下文充分

如果你自己作为专业程序员不能精确控制上下文，寄希望于 AI 帮你选择上下文，现阶段还是不靠谱的，这点 Cursor 是做的非常好的。如果你还没有用过 Cursor 的 Composer 或者 Composer 的手动选择代码作为上下文的功能，一旦你习惯了，你再也受不了 GitHub Copilot 和 WIndsurf 这些帮你“猜”上下文代码的 AI 编辑器。

第三个是 Agent 或者说智能体的功能

GitHub Copilot 的 Chat，如果你用过就知道，它只能给出修改建议，生成参考代码，无法帮你直接应用修改，你需要手动去复制粘贴创建代码。

Cursor 的 Chat，默认也不会，但是你可以在代码上点击“Apply”链接应用代码到相应的文件。

GitHub Copilot 的 Composer，只能修改当前文件代码，不能应用到其他文件位置。

Cursor 的 Composer，它可以在项目全局添加、删除和修改代码，你只要review一下修改就可以应用这些修改，不满意也可以拒绝或者局部拒绝。

Cursor 的 Composer，现在有两个模式：Normal 和 Agent，Normal 就是简单的根据指令和上下文生成代码、应用修改。Agent 则可以像一个机器人一样，根据你的指令去分析代码，去安装需要添加的包，当然需要你自己确认。这个 Agent 功能在你创建新项目达环境的时候特别实用，一步步帮你把包都安装好了，直接就可以运行。

Agent 功能 Windsurf 做的非常好，Cursor 可能是借鉴的 Windsurf，GitHub Copilot 据说也要推出了。

综合下来，我觉得还是 Cursor 最好用，但最重要的是，你自己得试试用一用，适合自己的能最大化提升效率的才是最好的。

## 关联主题

- [[00-元语/Cursor]]
- [[00-元语/copilot]]
- [[00-元语/github]]
- [[00-元语/ide]]
- [[00-元语/Agent]]
- [[00-元语/context-optimization]]
- [[00-元语/productivity]]
- [[00-元语/prompt]]
- [[00-元语/workflow]]
