---
title: "用 AI 做绘本"

来源: "https://baoyu.io/blog/ai-picture-book-creation"
发布日期: "2024-12-26"
作者: "宝玉"
---

## 摘要

### 一句话总结
本文记录了作者利用 OpenAI o1 pro 将故事拆分为分镜提示词，并结合 Google ImageFX 规避平台审查，最终生成卡通风格绘本的完整实践流程。

### 关键要点
*   **工具组合**：使用 OpenAI o1 pro 负责文本处理与提示词（Prompt）生成，使用 Google ImageFX 负责实际的图像绘制。
*   **标准工作流**：确立了“寻找故事素材 -> AI 拆分场景并编写英文提示词 -> 逐个场景生成图片”的创作步骤。
*   **场景拆分**：AI 将输入的“兔子与老狼”故事结构化，精准拆分为 5 个分镜场景（初次冲突、回家戴帽、再次碰面、老虎密谋、终极对峙）。
*   **风格设定**：在提示词中明确要求使用卡通漫画风格（Cartoon-style），并加入“whimsical”、“exaggerated”等词汇以突出幽默感和滑稽感。
*   **暴力弱化处理**：在提示词编写中，使用“scolding（责骂）”、“mocking（嘲笑）”等词汇替代直白的暴力动作（如 punch 或 slap），以适应儿童读物或幽默漫画的调性。

### 风险与不足
*   **平台内容审查风险**：画图平台存在严格的审查机制，如果提示词中包含直接的暴力细节（如打人），存在触发审查导致图片被拦截或无法正常生成的风险。

## 正文

尝试了一下用 AI 做个绘本，不过我也不会写画图的提示词，也是让 AI 帮我完成。

步骤：

1.   找个小故事

2.   让 AI 帮我：

*   把小故事拆分成场景

*   对每个场景写成prompt

*   额外要求：用卡通漫画风格；注意平台的审查

1.   分别去画每个 Prompt

选择的 AI 工具：

*   OpenAI o1 pro：生成提示词

*   Google ImageFX：画图

生成画图 Prompt 的提示词：

```
请根据下面的故事，设计成几个画面场景，然后针对每个场景写成英文的画图的Prompt，用卡通漫画形式精准的还原故事场景。但是注意要避开平台生成图片时对prompt内容的审查，避免无法正常生成：
***
兔子在街上走着，迎面碰上了老狼。老狼伸手就给他一大嘴巴，“让你丫不戴帽子”。

兔子很郁闷地回家了，弄一帽子戴着。

第二天又碰上老狼了，又挨了一大嘴巴，“让你丫戴帽子”。

如是几次，总挨打。兔子想，这么老挨打不是个事儿啊，不行，我得找老虎投诉去。

刚到老虎家门口，就听老虎在屋里说话。

“你也不能老这么蛮不讲理打兔子啊，回头兔子找我投诉来，我也不好罩着你。好歹咱面子上得过得去，我教你一招。

下回你见着兔子，跟他说：给我弄块肉来。他给你拿来肥的，你就打他一顿，说我要的是瘦肉。他拿来瘦的，你也能打，说我要肥肉。

要不然你跟他说，去，给我找个女的来。他给你找个胖的，你打他一顿说我要苗条的；给你找个瘦的，你也打一顿，说我要丰满的。

这样不结了，你也能打他，我面子上也能说得过去。”

兔子一听，得，咱也别投诉了，回家吧。

第二天，兔子在街上又撞上老狼。老狼大喝一声：“去，给我找块肉来。”

兔子不慌不忙：“你是要肥肉啊，还是要瘦肉啊？”

老狼一听，嗯？有一手啊。又说：“去，给我找个女的来。”

兔子还是不慌不忙：“你是要丰满的，还是苗条的？”

老狼一听勃然大怒，伸手就给兔子一个大嘴巴，

“让你丫不戴帽子！”
```

o1 返回结果：

```
下面提供了一个将故事分成五个场景的示例，并针对每个场景给出对应的英文 Prompt 供参考。为了尽量减少触发审查的风险，下面的 Prompt 会以卡通漫画的方式进行描述，弱化直接的暴力细节并保持幽默夸张的氛围。

---

## 场景 1：初次冲突

**故事要点：**
- 兔子在街上悠闲走着，没有戴帽子
- 老狼迎面出现，并对兔子十分不客气
- 老狼指责兔子“没戴帽子”，对兔子进行了“教训”（用夸张的卡通方式弱化暴力）

**英文 Prompt 参考：**

```
Cartoon-style illustration. A friendly, anthropomorphic Rabbit walks down a whimsical street with no hat. Suddenly, a tall, grouchy Wolf wearing a scruffy jacket appears and blocks the Rabbit’s path. The Wolf leans forward, pointing at the Rabbit’s bare head in a mocking way. The Rabbit looks startled and confused, with big round eyes and a nervous expression. The environment is colorful, lighthearted, like a fun comic strip. Emphasize the Wolf’s smug attitude and the Rabbit’s timid reaction.
```

---

## 场景 2：兔子回家戴帽子

**故事要点：**
- 兔子回家后情绪低落
- 兔子翻箱倒柜，找到一顶帽子戴上
- 兔子依然显得很沮丧、犹豫

**英文 Prompt 参考：**

```
Cartoon-style interior scene. Show a small, cozy rabbit home with simple furniture. The Rabbit stands near an open wardrobe or dresser, picking out a bright, slightly oversized hat. The Rabbit looks dejected yet determined to try wearing the hat. Soft, warm colors dominate the setting, with comedic details like shoes and carrots scattered around. The expression on the Rabbit’s face shows both worry and resolve.
```

---

## 场景 3：再次碰面

**故事要点：**
- 兔子再次在街上遇到老狼，这次戴着帽子
- 老狼又用理由训斥兔子“戴帽子”，并对兔子进行了进一步“教训”
- 兔子显得更加委屈和不知所措

**英文 Prompt 参考：**

```
Cartoon-style street scene. The Rabbit, now wearing a slightly oversized red hat, encounters the same grumpy Wolf. The Wolf points at the hat with a sneer, as if scolding the Rabbit again. Show exaggerated facial expressions: the Wolf is bossy and intimidating, the Rabbit is shrinking back in confusion. Keep the environment bright and whimsical, with colorful buildings in the background. The mood is comedic, despite the Wolf’s lecturing.
```

---

## 场景 4：老虎家中的密谋

**故事要点：**
- 老狼来到老虎家，抱怨兔子
- 老虎出主意，让老狼不断“刁难”兔子以便“合理”地找借口
- 兔子正好躲在门外或窗外偷听到这番对话

**英文 Prompt 参考：**

```
Cartoon-style interior of a Tiger’s home. The Wolf and a Tiger sit at a small round table, talking conspiratorially. The Tiger is large, dignified, and wearing a casual robe, while the Wolf gestures animatedly, complaining about the Rabbit. Outside a nearby window, the Rabbit peeks in with wide, curious eyes, eavesdropping on their conversation. The setting is comedic and colorful. The Wolf’s expression is frustrated yet cunning, the Tiger looks calm but sly, giving sneaky advice.
```

---

## 场景 5：终极对峙

**故事要点：**
- 老狼在街上再次要求兔子：去弄块肉、或者带一个同伴来
- 兔子淡定反问是“要肥的还是瘦的”、“要丰满的还是苗条的”
- 老狼恼羞成怒，再次用“帽子”借口对兔子进行“教训”
- 保持整体的卡通幽默感

**英文 Prompt 参考：**

```
Cartoon-style street scene again. The Wolf confronts the Rabbit with an imposing stance. The Wolf demands the Rabbit bring something specific (like a piece of meat or a female companion), while the Rabbit calmly asks clarifying questions: "Fat or lean?", "Curvy or slender?" The Wolf’s face twists in comical anger at being outsmarted. In a final comedic twist, the Wolf suddenly berates the Rabbit for not wearing a hat (or some random excuse). Exaggerated gestures and silly reactions emphasize the humor. Vibrant, fun colors with a lighthearted comic strip feel.
```

---

### 使用提示

1. **卡通化弱化冲突**
   以上 Prompt 虽然还原了故事情节，但在语言描述上尽量使用“cartoon-style”、“comical”、“lighthearted”等词汇，弱化直接的暴力和冲突，以免触发过度审查。

2. **突出幽默感**
   使用“whimsical”、“exaggerated”、“fun comic strip feel”、“comical anger”等描述词，突出故事里的滑稽与反讽，让情节更像儿童读物或幽默漫画场景。

3. **适度保留细节**
   对老狼指责兔子的动作可以用“scolding”、“berating”、“mocking”等词语，避免过于直白的暴力描写(如“punch”或“slap”)，可以用“bop on the head”或“cartoonish whack”等较轻松的描述方式，进一步弱化暴力感。

通过以上方式，即可在最大程度还原故事情节的前提下，减少被审查机制拦截的可能性，并保持作品的卡通漫画趣味性。
```

![Image 1](https://baoyu.io/uploads/2024-12-26/1735199915322.png)![Image 2](https://baoyu.io/uploads/2024-12-26/1735199939417.png)![Image 3](https://baoyu.io/uploads/2024-12-26/1735199947438.png)![Image 4](https://baoyu.io/uploads/2024-12-26/1735199956691.png)![Image 5](https://baoyu.io/uploads/2024-12-26/1735199964112.png)![Image 6](https://baoyu.io/uploads/2024-12-26/1735199980888.png)![Image 7](https://baoyu.io/uploads/2024-12-26/1735199990385.png)![Image 8](https://baoyu.io/uploads/2024-12-26/1735199998724.png)![Image 9](https://baoyu.io/uploads/2024-12-26/1735200009612.png)![Image 10](https://baoyu.io/uploads/2024-12-26/1735200019633.png)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/book]]
- [[00-元语/image-editing]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/prompt]]
- [[00-元语/OpenAI]]
- [[00-元语/workflow]]
- [[00-元语/risk]]
