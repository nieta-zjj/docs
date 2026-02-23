---
title: "我的代码编辑器使用史，从语法高亮到 AI 生成"

来源: "https://baoyu.io/blog/coding/my-experience-with-code-editor-evolution"
发布日期: "2024-08-24"
作者: "宝玉"
---

## 摘要

### 一句话总结
作者回顾了1999年至2024年间个人代码编辑器的使用史，展现了从纯文本、语法高亮、代码自动完成到AI智能生成的演进过程，并强调了拥抱高效工具对软件开发的巨大价值。

### 核心要点
*   **1999年（纯文本阶段）**：使用Windows自带的记事本编写HTML，代码无任何高亮提示。
*   **2000-2001年（语法高亮阶段）**：先后使用Frontpage、Dreamweaver和EditPlus，开始体验到可视化编辑、语法高亮以及快捷网页预览功能。
*   **2002-2003年（智能感知阶段）**：使用Visual Studio编写Asp.Net，首次体验到基于语法解析的智能感知和自动完成，开发效率大幅提升。
*   **2010-2013年（平台转移）**：转向苹果生态与前端开发，先后使用XCode和Sublime（Sublime仅支持基于单词匹配的自动完成）。
*   **2015年（现代IDE阶段）**：全面迁移至VSCode，重新获得基于当前代码语法的自动完成功能。
*   **2021年（AI辅助阶段）**：开始使用GitHub Copilot，习惯通过编写注释来提示AI生成代码，大幅减少了测试代码等重复性工作。
*   **2024年（AI主导阶段）**：转向Cursor编辑器，利用其更强的代码库理解能力、CMD+K（对话式生成/重构）和CMD+I（多文件生成）交互，进一步减少手动操作。
*   **核心观点**：工具的演进不可逆（“由奢入俭难”），开发者的核心价值在于借助高效工具快速构建产品和修复Bug，而非排斥高级IDE或AI工具。

### 风险/不足
*   **工具依赖风险**：习惯使用高级AI编辑器后，一旦无法使用AI，可能会出现“大脑短路”而不知道如何编写代码的情况。

## 正文

在 1999 年我刚上大一的时候，有一门必修课叫计算机基础，讲计算机常识，其中就有讲 HTML，至今印象深刻，老师用 windows 自带的记事本软件，写了一段当时看起来像天书的 HTML，保存成扩展名为 .html 的文件，就变成了一个可以 IE 打开看到的网页，我觉得 HTML 很神奇，唯独这代码看着像天书。 ![Image 1](https://www1.udel.edu/CIS/103/pconrad/05F/images/activity01/step3.01.HTML.tag.png)

2000 年开始学做网页，用 Frontpage 98/2000做网页，发现可以可见即所得做网页，太神奇了，不过稍微复杂一点的Table之类的就不能在可视化编辑中编辑，需要切换到HTML视图，看到有语法高亮的HTML代码，再也不觉得像天书了。当然后来还有Dreamweaver，比Frontpage更强大一点，但更多是网页编辑部分，代码编辑似乎没有太大增强。 ![Image 2](https://www.webdesignmuseum.org/uploaded/old-software/html-editors/microsoft-frontpage/microsoft-frontpage-98-04.png)

![Image 3](https://www.allaboutken.com/images/original/blog/20years-dreamweaver-2.jpg)

然后 2001 年开始学 Asp，开始使用一款文本编辑器叫 EditPlus，语法加亮做的特别好，还可以定制配色，比 Frontpage 好看多了，而且体积很小速度很快。值得一提的是它有个快捷键 Ctrl+B，一键从 HTML 代码切换成网页预览，非常方便看 HTML 结果。 ![Image 4](https://www.editplus.com/ss/php.gif)

2002/2003 年开始用 Visual Studio 写 Asp.Net，不止是是有语法加亮，居然有智能感知、自动完成，习惯了输入"."之后等一会自动完成的结果，很多时候选择一个结果就可以了，感觉开发效率上了一个台阶。 ![Image 5](https://origin2.cdn.componentsource.com/sites/default/files/styles/image_large/public/images/product_description/fms/fms-total-net-sourcebook-visual-studio-2002-2003/img_454108.png?itok=VmFgCSwl)

2010 年左右开始做苹果下的移动开发，使用 XCode，感觉远不如 Visual Studio 好用，但是没得选择。 ![Image 6](https://live.staticflickr.com/4088/5188941273_e87556b577_b.jpg)

2013 年左右做前端开发，已经习惯了使用 MacOS，编辑器换成了 Sublime，有很好的语法高亮，但是只有基于单词匹配的自动完成，没有像 Visual Studio 基于语法解析的。 ![Image 7](https://forum.sublimetext.com/uploads/default/original/3X/5/b/5b5b50279ce23ee59c8b5c21cacc7983014a8eec.jpg)

2015 年 VSCode 发布，发现它不仅有语法高亮，还有基于当前代码语法的自动完成，开始搭配着 Sublime 使用，然后很快就完全迁移过去，并向身边人安利。代码自动完成对于编程效率的提升效果太明显了。 ![Image 8](https://code.visualstudio.com/assets/updates/December/render-key-binding.png)

2021 年 GitHub Copilot 发布，开始试用，AI 辅助生成能大幅提升效率，减少重复性工作，成为会员直到几个月前。开始习惯了生成代码之前先写注释，借助注释中的提示词生成代码，喜欢上了写测试代码，因为基本上不需要自己去写，大部分都可以自动完成。 ![Image 9](https://images.squarespace-cdn.com/content/v1/569d067edc5cb4298588a3d6/9d01ab59-8e97-4a3f-99ec-b5324405c311/pair_programmer.png)

2024 年，开始试用 Cursor 编辑器，比起 GitHub Copilot，对代码库的代码理解更好，生成结果的准确率更高，大部分时候一路 Tab 就可以完成重构工作，并且 CMD+K 的交互更加自然，不再需要借助注释，只要调出对话窗口，输入要生成的代码要求，甚至对于生成结果还可以进一步要求调整；CMD+I 则可以直接生成多个项目文件，快速生成页面级的代码，减少很多手动操作，效率进一步提升。

![Image 10](https://baoyu.io/images/coding/my-experience-with-code-editor-evolution/cursor-ai.png)

“由俭入奢易，由奢入俭难！”，在经历了“记事本” -> “语法高亮” -> “语法自动完成” -> “AI 智能生成”一个个阶段后，再难回到上一个阶段。用习惯了 Cursor 再回去用 GitHub Copilot 会发现怎么这么难用，无法使用 AI 时甚至大脑都会短路代码该怎么写了。

十多二十年前，居然有人倡议不应该用 Visual Studio 这种高级 IDE（Integrated Development Environment），而应该回归使用只有简单语法加亮的编辑器，还列了一堆好处，大意就是减少对于 IDE 的依赖，避免没有了 IDE 不会写代码了。

现在这种反对 IDE 声音倒是少了，因为编辑器和代码都只是工具，重点不是你能记住多少语法，而是能借助代码构建出优秀的软件，越是善于借助优秀的高效的编辑器工具，就能更多的构建有价值的软件。

现在和将来一定也会有声音说不要过于依赖 AI 生成的代码甚至是反对使用 AI 生成代码，但历史的趋势是无法阻挡的，一如从语法高亮到自动完成的 IDE。对于用户来说，没人会关心你的产品是 AI 帮助生成的还是你用记事本手写的，但是他们关心你是不是能快速的推出想要的功能，快速修复产品的 bug。

期待代码编辑器的进一步发展，期待未来越来越多的代码由 AI 帮我们完成。

## 关联主题

- [[00-元语/ide]]
- [[00-元语/copilot]]
- [[00-元语/Cursor]]
- [[00-元语/productivity]]
- [[00-元语/workflow]]
- [[00-元语/AI]]
- [[00-元语/软件工程]]
