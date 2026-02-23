---
title: "释放创造力：解密 AI 贴纸生成器的“神级”提示词模板"

来源: "https://baoyu.io/blog/ai-sticker-generator-prompts"
发布日期: "2025-09-17"
作者: "宝玉"
---

## 摘要

**一句话总结**
本文解析了 AI 贴纸生成的提示词模板框架，通过设定“基础头像”与“情绪”两个核心变量，结合风格细节、排版指令与反向提示，帮助用户高效生成多风格的个性化异形贴纸。

**关键要点**
*   **模板核心价值**：提示词模板通过预设指令框架并留出可变参数，能够保持生成图片风格统一、提高创作效率，并降低新手使用门槛。
*   **两大核心变量**：所有模板均基于 `[附加的头像]`（提供基础参考图）和 `[指定情绪]`（决定角色情感表达）两个变量运行。
*   **明确任务与排版**：提示词通常以“创建一个单张贴纸”开头，并包含“非方形或圆形的、更接近模切图案的有趣轮廓”的指令，以确保生成结果具有真实的异形贴纸质感。
*   **细节与文化符号**：优秀的提示词需包含丰富的风格细节（如波普艺术的“粗黑轮廓线”和“本戴点”），并善用文化符号（如“昭和时代火柴盒”、“复古宝莱坞”）来精准锁定视觉氛围。
*   **反向提示词应用**：在部分风格（如王室风采、贴纸炸弹）中，明确使用反向提示（如“绝不能是写实风格”）来确保卡通风格的统一性，避免风格冲突。
*   **9 种预设风格库**：文档提供了完整的提示词库，涵盖波普艺术、日式复古火柴盒、卡通恐龙、像素艺术、王室风采、复古足球贴纸、黏土动画、复古宝莱坞和贴纸炸弹 9 种风格。
*   **8 种可选情绪**：模板支持填入开心、伤心、生气、惊讶、大笑、爱心、眨眼、困惑等 8 种预设情绪。
*   **适用工具**：用户可将照片与替换好变量的提示词输入至即梦4、nano banana 等 AI 图像生成工具中进行实际创作。

## 正文

![Image 1](https://baoyu.io/uploads/2025-09-17-1758092558627-f97c239e-6137-4631-ad76-2487613d39b6.png)

如果你想知道如何使用 AI 生成各种炫酷的贴纸，而苦于不知道如何写提示词，正好我今天看到一个日本网友分享的 Gem 应用（ [https://gemini.google.com/share/53eec61f7d5b](https://gemini.google.com/share/53eec61f7d5b) ），上传照片就可以生成各种风格的贴纸，而且还可以加上不同的表情，所以我花了一点时间研究了下它的提示词模板。

### 核心理念：什么是提示词模板？

在我们开始之前，先来理解一个核心概念：**提示词模板 (Prompt Template)**。

你可以把它想象成一个“填空题”或一个“烘焙食谱”。它预设了大部分的指令框架（比如风格、构图、输出格式），只留下几个关键的可变部分（比如情绪、主题）让你来填充。这样做的好处是：

1.   **保持风格统一**：确保在同一系列中生成的图片风格一致。

2.   **提高效率**：无需每次都从零开始撰写复杂的描述。

3.   **降低门槛**：即使是新手也能通过简单修改，生成高质量的图片。

在下面的例子中，所有提示词都包含两个核心变量：

*   `[附加的头像]`: 这是你提供的基础图片，AI 将基于它进行创作。

*   `'${emotion}'` 或 `[指定情绪]`: 这是你希望角色表达的情感，你可以从文末的情绪列表中选择一个填入。

### 提示词的规律与特点

观察这些模板，我们可以发现一些共通的“黄金法则”：

*   **明确任务 (Define the Task)**：几乎所有提示词都以“创建一个单张贴纸 (Create a single sticker)”开头，直接告诉 AI 最终要生成的产物是什么。

*   **指定风格 (Specify the Style)**：清晰地定义艺术风格，如“波普艺术风格 (Pop Art style)”、“黏土动画风格 (style of a classic claymation character)”。AI 对知名艺术风格有深入的理解。

*   **细节、细节、还是细节 (Details Matter)**：优秀的提示词充满了丰富的细节。例如，在波普艺术中，明确要求了“粗黑轮廓线 (bold, thick black outlines)”、“本戴点 (Ben-Day dots)”、“有限的调色板 (limited, flat color palette)”。细节越丰富，结果越可控。

*   **构图与格式 (Composition & Format)**：许多提示词都包含一句画龙点睛的指令：“最好有一个非方形或圆形的、更接近模切图案的有趣轮廓 (ideally with an interesting outline shape that is not square or circular but closer to a dye-cut pattern)”。这直接决定了最终成品更像一张真实的异形贴纸，而不是一张方形图片。

*   **善用文化符号 (Use Cultural References)**：提及“昭和时代的火柴盒艺术 (Japanese Showa-era matchbox art)”或“复古宝莱坞 (Vintage Bollywood)”等具有强烈视觉特征的文化符号，可以帮助 AI 快速锁定你想要的氛围感。

*   **“反向提示” (Negative Prompts)**：在某些风格中，明确指出**不**想要什么同样重要。例如，在“王室风采”风格中，强调“用户的脸部应始终是卡通风格，绝不能是写实风格 (The user's face should always be in a cartoonish style... and never show in a photorealistic style)”，避免了风格冲突。

下面是完整的各种不同风格贴纸列表。

* * *

贴纸风格提示词库 (Sticker Style Prompt Library)
---------------------------------------

### 🎨 波普艺术 (Pop Art / ポップアート)

![Image 2: Pop Art](https://baoyu.io/uploads/2025-09-17-pop_art_love.png)

创建一个具有鲜明波普艺术风格的单张贴纸。角色需要根据附加的头像进行定制。角色必须表达出 `[指定情绪]` 的情绪。图像应在所有人物、物体和文字周围都带有粗黑的轮廓线。使用有限的、平面的调色板，包含鲜艳的原色和二次色，以无阴影色块的形式应用，但要保持人物的肤色。融合可见的本戴点（Ben-Day dots）或半色调图案来创造阴影、纹理和深度。主题应表现出戏剧性的表情。在对话气泡或动态图形中加入风格化的文字来表示音效（拟声词）。整体美学应干净、图形化，并唤起一种带有精致光泽的、大规模生产的商业艺术感。上传照片中的用户脸部必须是主角，最好有一个非方形或圆形的、更接近模切图案的有趣轮廓。

* * *

`Create a single sticker in the distinct Pop Art style. The character should be customized based on the attached profile picture. The character must express the emotion: '[Specify Emotion]'. The image should feature bold, thick black outlines around all figures, objects, and text. Utilize a limited, flat color palette consisting of vibrant primary and secondary colors, applied in unshaded blocks, but maintain the person skin tone. Incorporate visible Ben-Day dots or halftone patterns to create shading, texture, and depth. The subject should display a dramatic expression. Include stylized text within speech bubbles or dynamic graphic shapes to represent sound effects (onomatopoeia). The overall aesthetic should be clean, graphic, and evoke a mass-produced, commercial art sensibility with a polished finish. The user's face from the uploaded photo must be the main character, ideally with an interesting outline shape that is not square or circular but closer to a dye-cut pattern..`

### 🏮 日式复古火柴盒 (Retro Japanese Matchbox / レトロマッチ箱)

![Image 3: Retro Japanese Matchbox](https://baoyu.io/uploads/2025-09-17-matchbox.png)

制作一张日本昭和时代火柴盒艺术风格的单张贴纸。角色需要根据附加的头像进行定制，并且必须表达出 `[指定情绪]` 的情绪。贴纸内容为一个人在喝咖啡，采用复古平面设计，色彩选用有限的调色板，带有做旧的纸张纹理和一个复古未来主义的火箭飞船，整体为 1960 年代日本火柴盒标签的设计风格。采用昭和媚俗插画风格，线条简洁，双色印刷，最好有一个非方形或圆形的、更接近模切图案的有趣轮廓。

* * *

`Make a single sticker in Japanese Showa-era matchbox art . The character should be customized based on the attached profile picture. The character must express the emotion: '[Specify Emotion]'. Make a sticker in Japanese Showa-era matchbox art of a cat drinking coffee, retro graphic design, limited color palette, distressed paper texture and a retro-futuristic rocket ship, design for a 1960s Japanese matchbox label. Showa kitsch illustration of a person winking, simple lines, 2-color print style., ideally with an interesting outline shape that is not square or circular but closer to a dye-cut pattern.`

### 🦖 卡通恐龙 (Cartoon Dino / 恐竜漫画)

![Image 4: Cartoon Dino](https://baoyu.io/uploads/2025-09-17-dragon.png)

创作一张拟人化卡通恐龙的单张贴纸。角色的脸部根据附加的头像进行定制，必须表达出 `[指定情绪]` 的情绪。风格应可爱、异想天开，色彩鲜艳明快，背景简洁，适合在即时通讯应用中使用，最好有一个非方形或圆形的、更接近模切图案的有趣轮廓。

* * *

`Create a single sticker of an anthropomorphized cartoon dinosaur. The character's face, customized from the attached profile picture, must express the emotion: '[Specify Emotion]'. The style should be cute and whimsical with bright, cheerful colors and a simple background suitable for a messaging app, ideally with an interesting outline shape that is not square or circular but closer to a dye-cut pattern.`

### 👾 像素艺术 (Pixel Art / ピクセルアート)

![Image 5: Pixel Art](https://baoyu.io/uploads/2025-09-17-pixel.png)

创作一张复古像素艺术风格的单张贴纸。角色需要根据附加的头像进行定制，并且必须表达出 `[指定情绪]` 的情绪。像素艺术应色彩丰富、抽象，略带复古未来主义感，融合 8-bit 和故障艺术元素，并加入能代表预设情绪的额外图标或配件，最好有一个非方形或圆形的、更接近模切图案的有趣轮廓。

* * *

`Create a single sticker in the style of a retro Pixel Art piece. The character should be customized based on the attached profile picture. The character must express the emotion: '[Specify Emotion]'. The pixel art should be colorful, abstract, slightly retro-futuristic, combining 8 bit and glitch elements, and incorporating additional icons or accessories that represent the intended emotion, ideally with an interesting outline shape that is not square or circular but closer to a dye-cut pattern..`

### 👑 王室风采 (Royal / 王室)

![Image 6: Royal](https://baoyu.io/uploads/2025-09-17-royal.png)

创作一张单张贴纸，将头像照片变成皇室成员——国王、女王、王子或公主——并配有独角兽和彩虹。角色需要根据附加的头像进行定制，并且必须表达出 `[指定情绪]` 的情绪。图像应包含一个帅气的国王、女王、王子或可爱的公主，并增加黑桃、红心、方块、梅花、独角兽、彩虹和云朵等元素，最好有一个非方形或圆形的、更接近模切图案的有趣轮廓。用户的脸部应始终是卡通风格，与周围的贴纸一致，绝不能是写实风格。

* * *

`Create a single sticker transforming the pic into royalty - a king, queen, prince or princess - with unicorns and rainbows. The character should be customized based on the attached profile picture. The character must express the emotion: '[Specify Emotion]'. The image should feature a cool looking king, queen, prince or cute princess along with augmenting aces, spades, diamonds, hearts, unicorns, rainbows and clouds, ideally with an interesting outline shape that is not square or circular but closer to a die-cut pattern. The user's face should always be in a cartoonish style like the surrounding stickers, and never show in a photorealistic style.`

### ⚽ 复古足球贴纸 (Football Sticker / サッカーシール)

![Image 7: Football Sticker](https://baoyu.io/uploads/2025-09-17-football.png)

生成一张 1970 年代复古足球交换卡风格的单张贴纸。角色需要根据附加的头像进行定制，并且必须表达出 `[指定情绪]` 的情绪。贴纸应包含一名足球运动员或经理的头部或上半身肖像。可选择在顶部添加一个小型、风格化的队徽或复古俱乐部名称横幅。整个贴纸应有清晰的边框和轻微做旧或哑光的效果，以营造一种怀旧、具有收藏感的氛围。

* * *

`Generate a single sticker in the style of vintage 1970s soccer trading cards The character should be customized based on the attached profile picture. The character must express the emotion: '[Specify Emotion]'. The sticker should feature a headshot or upper torso portrait of a football player or manager Optionally, include a small, stylized team crest or a retro club name banner at the top. The entire sticker should have a clean, defined border and a slightly aged or matte finish to evoke a nostalgic, collectible feel.`

### 🏺 黏土动画 (Claymation / クレイアニメ)

![Image 8: Claymation](https://baoyu.io/uploads/2025-09-17-claymation.png)

创作一张经典黏土动画角色风格的单张贴纸。角色需要根据附加的头像进行定制，并且必须表达出 `[指定情绪]` 的情绪。贴纸应呈现一个由黏土制作的角色，背景是一个有趣的黏土动画景观，利用黏土动画的趣味性根据情绪夸大某些特征，并在表达不同情绪时能看到脸部黏土般的塑形痕迹，最好有一个非方形或圆形的、更接近模-cut图案的有趣轮廓。

* * *

`Create a single sticker in the style of a classic claymation character. The character should be customized based on the attached profile picture. The character must express the emotion: '[Specify Emotion]'. The sticker should feature a claymation character where the picture is made to look like it is made from clay, and an interesting claymation landscape in the background, using the playfulness of claymation to exaggerate certain features depending on the emotion, and with clay-like sculpting of the face visible when expressing different emotions, ideally with an interesting outline shape that is not square or circular but closer to a dye-cut pattern.`

### 🎬 复古宝莱坞 (Vintage Bollywood / ボリウッド)

![Image 9: Vintage Bollywood](https://baoyu.io/uploads/2025-09-17-bolly.png)

将我的图片变成一张 1960 年代复古宝莱坞主题海报。角色需要根据附加的头像进行定制。生成一张带有 `[指定情绪]` 情绪的海报。

* * *

`Change my image to a 1960's retro Bollywood themed poster. The character should be customized based on the attached profile picture. Generate a poster with emotion: '[Specify Emotion]'.`

### 💥 贴纸炸弹 (Sticker Bomb / ステッカーボム)

![Image 10: Sticker Bomb](https://baoyu.io/uploads/2025-09-17-bomb.png)

以贴纸炸弹风格对用户图片进行风格化和增强。角色需要根据附加的头像进行定制，并且必须表达出 `[指定情绪]` 的情绪。贴纸炸弹风格，用户的脸周围环绕着五彩缤纷的图形贴纸，这些贴纸也反映了所描绘的情绪，最好有一个非方形或圆形的、更接近模切图案的有趣轮廓。用户的脸部应始终是卡通风格，与周围的贴纸一致，绝不能是写实风格。

* * *

`Stylize and augment the user pic in a stickerbomb style. The character should be customized based on the attached profile picture. The character must express the emotion: '[Specify Emotion]'. Stickerbomb style with colorful graphic stickers surrounding the users face, also reflecting the emotion depicted, ideally with an interesting outline shape that is not square or circular but closer to a dye-cut pattern. The user's face should always be in a cartoonish style like the surrounding stickers, and never show in a photorealistic style.`

* * *

### 可用情绪列表 (Emotion Options)

你可以将下面列表中的任意情绪填充到上面模板的 `[指定情绪]` 或 `[Specify Emotion]` 位置。

中文 英文 日文
开心 Happy ハッピー
伤心 Sad 悲しい
生气 Angry 怒り
惊讶 Surprised 驚き
大笑 Laughing 笑い
爱心 Love 愛
眨眼 Winking ウインク
困惑 Confused 混乱

### 示例

比如我想试试波普艺术的贴纸，选一张照片作为参考图上传给即梦4（nano banana也可以），把提示词模板中情绪替换为开心：

> 创建一个具有鲜明波普艺术风格的单张贴纸。角色需要根据附加的头像进行定制。角色必须表达出 开心 的情绪。图像应在所有人物、物体和文字周围都带有粗黑的轮廓线。使用有限的、平面的调色板，包含鲜艳的原色和二次色，以无阴影色块的形式应用，但要保持人物的肤色。融合可见的本戴点（Ben-Day dots）或半色调图案来创造阴影、纹理和深度。主题应表现出戏剧性的表情。在对话气泡或动态图形中加入风格化的文字来表示音效（拟声词）。整体美学应干净、图形化，并唤起一种带有精致光泽的、大规模生产的商业艺术感。上传照片中的用户脸部必须是主角，最好有一个非方形或圆形的、更接近模切图案的有趣轮廓。

![Image 11](https://baoyu.io/uploads/2025-09-17-1758093306042-2f2d2105-2f63-41c7-b8b9-40b5f9833781.png)

效果还不错。建议你也可以自己动手试试，选择一个你喜欢的风格，挑选一种情绪，然后看看 AI 能为你带来怎样的惊喜。祝你玩得开心！

## 关联主题

- [[00-元语/gemini]]
- [[00-元语/AI]]
- [[00-元语/prompt]]
- [[00-元语/image-editing]]
- [[00-元语/multimodal]]
