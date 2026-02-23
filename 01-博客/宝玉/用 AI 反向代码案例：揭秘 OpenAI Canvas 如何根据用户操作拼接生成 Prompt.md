---
title: "用 AI 反向代码案例：揭秘 OpenAI Canvas 如何根据用户操作拼接生成 Prompt"

来源: "https://baoyu.io/blog/ai/reverse-engineering-openai-canvas-prompt-generation"
发布日期: "2024-10-07"
作者: "宝玉"
---

## 摘要

### 1) 一句话总结
本文通过实际案例展示了如何结合 Chrome 开发者工具与大语言模型（LLM），逆向还原 OpenAI Canvas 的前端混淆代码，从而揭秘其根据用户操作（如提问、编辑、评论等）动态拼接生成 Prompt 的底层逻辑与完整流程。

### 2) 关键要点
*   **定位源码**：通过 Chrome DevTools 的 Network 面板抓取 Canvas 生成的 Prompt 文本，提取关键词（如 `# Context`）并在 Sources 面板全局搜索，从而定位到负责拼接 Prompt 的前端混淆代码。
*   **AI 代码还原**：将约 2000 行的混淆 JavaScript 代码输入给 LLM（如 o1），并设定明确的 Prompt 要求（如命名友好、补充完整 TypeScript 类型、不使用 any、添加中文注释），成功将其还原为高可读性的源码。
*   **核心操作类型**：还原的代码揭示了 Canvas 定义的四种主要用户操作（`UserActionType`）：提问（ASK）、编辑（EDIT）、评论（COMMENT）和创建文档（CREATE_TEXTDOC）。
*   **上下文提取机制**：当用户选中文本时，系统不仅会提取选中的内容，还会通过 `extractSurroundingContext` 函数提取选中部分前后各 30 个字符作为“周围上下文（Surrounding Context）”一并发送给大模型。
*   **动态 Prompt 路由**：主函数 `handleUserOperation` 会根据用户的具体操作类型，调用 `generatePrompt` 并路由到对应的子函数（如 `generateAskPrompt`、`generateEditPrompt`）来生成特定格式的指令。
*   **严格的工具调用指令**：生成的 Prompt 中包含了对大模型严格的工具使用要求，例如强制使用 `update_textdoc` 工具，以及在特定情况下使用正则表达式（如 `.*`）来精确替换或重写文本。
*   **AI 辅助架构分析**：除了还原代码，还可以进一步要求 LLM 根据代码逻辑生成 ASCII 格式的架构类图和执行流程图，以直观展示数据流向和函数调用关系。

### 3) 风险与局限（原文提及）
*   **代码体积限制**：当需要逆向还原的代码体积过大（如超过 1000 行）时，要求 LLM 一次性完整还原可能会遇到困难，建议基于特定模块（如仅关注构建 Prompt 部分）进行拆分提问。

## 正文

用一个实例来看看如何借助 AI 来反向代码，帮助你更好的理解一些商业产品功能的实现。这里以 OpenAI 新推出的 Canvas 为例，我们看看它是如何根据用户的操作生成不同 Prompt 的。

### 第一步先找到相应的代码模块

打开 Chrome Dev Tool，监听 Network Request，在操作 Cavans 时，你会发现它会根据你的操作拼接了一段 Prompt：

```
# Context
The user requests that you directly edit the document.

## Selected Text
The user has selected this text in "670415fa16b4819198e7ff0bdb23866a" in particular:

## Surrounding Context
Here is the surrounding context:
.............

# Instructions
Use the update_textdoc tool to make this edit. You MUST fully rewrite the entire document by using ".*" as the update regex pattern.
```

![Image 1](https://baoyu.io/uploads/2024-10-07/paste-1728337233398.png)

可以看得出这部分 Prompt 是在客户端拼接的，接下来我们来尝试通过关键词搜索找到这部分代码在哪个文件：

切换 Chrome Dev Tool 到 Sources Tab，在左侧导航的 top 上点右键，选“Search in all files”

![Image 2](https://baoyu.io/uploads/2024-10-07/paste-1728337493407.png)

选一段 Prompt 中用到的关键词，比如`# Context`去搜索：

![Image 3](https://baoyu.io/uploads/2024-10-07/paste-1728337857337.png)

这样我们就找到了生成 Prompt 部分的源码所在文件。

### 第二步复制代码去 LLM 提问或者还原代码

取决于代码体积，如果 1000 行以内的代码可以直接要求还原成可读性高的代码，如果超过 1000 行可以基于某个模块提问，完整还原可能有点困难。要还原代码可以参考《分享一点前沿 AI 用法：用 o1 逆向代码》：[https://baoyu.io/blog/ai/o1-cutting-edge-ai-use-reverse-engineering-code](https://baoyu.io/blog/ai/o1-cutting-edge-ai-use-reverse-engineering-code)

这里代码有差不多 2000 行，我只要还原我关心的构建 Prompt 部分代码就好。

![Image 4](https://baoyu.io/uploads/2024-10-07/paste-1728338151496.png)

> 下面是一段混淆后的 JavaScript 代码，请先阅读代码，然后将根据用户操作拼接 Prompt，并发送请求处理返回结果的相关代码还原成类型定义完整的 TypeScript 代码，要求： - 命名友好，类型完整，不要使用 any 类型 - 加上适当的中文注释 - 下面代码中引用了一些外部方法，不需要生成这些外部方法，只需要注释中注明即可
>
>
> 以下是完整代码，请生成拼接 Prompt和发送请求的TypeScript代码：

然后你就可以得到完整的构建 Prompt 的代码：

![Image 5](https://baoyu.io/uploads/2024-10-07/paste-1728338314714.png)![Image 6](https://baoyu.io/uploads/2024-10-07/paste-1728338352153.png)

现在比起之前那一堆乱码是不是看着舒服多了？

### 第三步：进一步追问帮助你理解或者生成更多内容

如果你觉得代码还是看不太明白，可以继续提要求，比如画个流程图：

> 现在请将这部分代码的逻辑，生成一份架构图和流程图，方便理解它是如何运行的

![Image 7](https://baoyu.io/uploads/2024-10-07/paste-1728338599133.png)

这图虽然 ASCII 画的，但还是挺直观的！

附录
--

返回的代码：

```
// 定义用户操作类型枚举
enum UserActionType {
  ASK = 'ASK', // 提问
  EDIT = 'EDIT', // 编辑
  COMMENT = 'COMMENT', // 评论
  CREATE_TEXTDOC = 'CREATE_TEXTDOC', // 创建文本文档
}

// 定义用户消息类型枚举
enum UserMessageType {
  ASK_CHATGPT = 'ASK_CHATGPT', // 向 ChatGPT 提问
  ACCEPT_COMMENT = 'ACCEPT_COMMENT', // 接受评论
  FULL_SCREEN_SUBMIT = 'FULL_SCREEN_SUBMIT', // 全屏提交
  ACCELERATOR = 'ACCELERATOR', // 加速器
}

// 定义选择类型枚举
enum SelectionType {
  ENTIRE_DOCUMENT = 'entire document', // 整个文档
  SELECTED_TEXT = 'selected text', // 选中文本
  SURROUNDING_CONTEXT = 'surrounding context', // 周围上下文
}

// 定义文本文档类型枚举
enum TextdocType {
  DOCUMENT = 'document', // 文档类型
  // 其他类型...
}

// 定义文本选择范围接口
interface SourceRange {
  start: number; // 选择起始位置
  end: number; // 选择结束位置
}

// 定义文本文档版本接口
interface TextdocVersion {
  textdocId: string; // 文档 ID
  type: TextdocType; // 文档类型
  versionInt: number; // 版本号
  content: string; // 文档内容
}

// 定义加速器元数据接口
interface AcceleratorMetadata {
  action: UserActionType; // 动作类型
  id: string; // 加速器 ID
  prompt: string; // 加速器提示
}

// 定义选择元数据接口
interface SelectionMetadata {
  selection_type: SelectionType; // 选择类型
  selection_position_range: SourceRange; // 选择的位置范围
}

// 定义请求参数接口
interface RequestParams {
  content: string; // 用户输入内容
  sourceRange?: SourceRange; // 文本选择范围（可选）
  action: UserActionType; // 用户操作类型
  userMessageType: UserMessageType; // 用户消息类型
  acceleratorMetadata?: AcceleratorMetadata; // 加速器元数据（可选）
  selectionMetadata?: SelectionMetadata; // 选择元数据（可选）
}

// 定义周围上下文接口
interface SurroundingContext {
  before: string; // 选中内容前的文本
  after: string; // 选中内容后的文本
  allSurrounding: string; // 包含选中内容的完整上下文
}

// 生成提示的主函数，根据用户操作类型生成对应的提示
function generatePrompt(
  textdocId: string,
  textdocType: TextdocType,
  action: UserActionType,
  selectedText?: string,
  surroundingContext?: SurroundingContext,
): string {
  switch (action) {
    case UserActionType.ASK:
      return generateAskPrompt(textdocId, textdocType, selectedText, surroundingContext);
    case UserActionType.EDIT:
      return generateEditPrompt(textdocId, textdocType, selectedText, surroundingContext);
    case UserActionType.COMMENT:
      return generateCommentPrompt(textdocId, selectedText, surroundingContext);
    case UserActionType.CREATE_TEXTDOC:
      return generateCreateTextdocPrompt(textdocId, selectedText, surroundingContext);
    default:
      return '';
  }
}

// 生成提问操作的提示
function generateAskPrompt(
  textdocId: string,
  textdocType: TextdocType,
  selectedText?: string,
  surroundingContext?: SurroundingContext,
): string {
  const selectionDescription = describeSelection(selectedText, surroundingContext);
  return `
# Context
${generateContext(textdocId, selectedText, surroundingContext)}

# Instructions
The user would like you to perform one of the following actions:

- Update the ${selectionDescription} via the \`update_textdoc\` tool.
${additionalInstructions(textdocType, selectionDescription)}

- Explain the selected text via chat, or answer a general question about the selected text (no tool call required).

- Comment on the ${selectionDescription} with feedback via the \`comment_textdoc\` tool. This should only be used if the user very explicitly asks for feedback, critique, or comments.

Based on the user's request, choose the appropriate action.
`.trim();
}

// 生成编辑操作的提示
function generateEditPrompt(
  textdocId: string,
  textdocType: TextdocType,
  selectedText?: string,
  surroundingContext?: SurroundingContext,
): string {
  const selectionDescription = describeSelection(selectedText, surroundingContext);
  const updateInstructions = generateUpdateInstructions(textdocType, selectionDescription);
  return `
# Context
The user requests that you directly edit the document.

${describeSelectionInContext(textdocId, selectedText, surroundingContext)}

# Instructions
Use the \`update_textdoc\` tool to make this edit. ${updateInstructions}
`.trim();
}

// 生成评论操作的提示
function generateCommentPrompt(
  textdocId: string,
  selectedText?: string,
  surroundingContext?: SurroundingContext,
): string {
  return `
# Context
The user requests that you add comments about some text.

${describeSelectionInContext(textdocId, selectedText, surroundingContext)}

# Instructions
Do not respond to the user's question directly, just leave comments.
`.trim();
}

// 生成创建文本文档操作的提示
function generateCreateTextdocPrompt(
  textdocId: string,
  selectedText?: string,
  surroundingContext?: SurroundingContext,
): string {
  return `
# Context
${describeSelectionInContext(textdocId, selectedText, surroundingContext)}

# Instructions
The user would like you to create a new textdoc.
`.trim();
}

// 生成上下文信息
function generateContext(
  textdocId: string,
  selectedText?: string,
  surroundingContext?: SurroundingContext,
): string {
  return `
The user is requesting that you directly edit the document.

${describeSelectionInContext(textdocId, selectedText, surroundingContext)}
`.trim();
}

// 描述选择的文本或上下文
function describeSelectionInContext(
  textdocId: string,
  selectedText?: string,
  surroundingContext?: SurroundingContext,
): string {
  if (!selectedText || !surroundingContext) {
    return `The user is referring to the entire text of "${textdocId}".`;
  } else if (surroundingContext.allSurrounding === selectedText) {
    return `
Selected Text
The user has selected this text in "${textdocId}" in particular:
${selectedText}
`.trim();
  } else {
    return `
Selected Text
The user has selected this text in "${textdocId}" in particular:
${selectedText}

Surrounding Context
Here is the surrounding context:
${surroundingContext.allSurrounding}
`.trim();
  }
}

// 描述选择类型
function describeSelection(selectedText?: string, surroundingContext?: SurroundingContext): string {
  if (!selectedText || !surroundingContext) {
    return 'entire document';
  } else if (selectedText === surroundingContext.allSurrounding) {
    return 'selected text';
  } else {
    return 'surrounding context';
  }
}

// 生成更新指令的附加说明
function additionalInstructions(textdocType: TextdocType, selectionDescription: string): string {
  if (textdocType === TextdocType.DOCUMENT) {
    if (selectionDescription === 'entire document') {
      return `If you choose to update the ${selectionDescription}, you MUST fully rewrite the ${selectionDescription} by using "." as the update regex pattern.`;
    } else {
      return `If you choose to update the ${selectionDescription}, you MUST fully rewrite the entire document by using "." as the update regex pattern. When you do so, ONLY modify the ${selectionDescription} and rewrite other sections exactly as is, except for parts that must change based on this update.`;
    }
  }
  return '';
}

// 生成编辑操作的更新指令
function generateUpdateInstructions(textdocType: TextdocType, selectionDescription: string): string {
  if (textdocType === TextdocType.DOCUMENT) {
    return `For the update pattern, create a regex which exactly matches the ${selectionDescription}. Edit just this string in order to fulfill the user's request. NEVER rewrite the entire document. Instead, ALWAYS edit ONLY the ${selectionDescription}. The only exception to this rule is if the ${selectionDescription} includes markdown lists or tables. In that case, fully rewrite the document using ".*" as the regex update pattern.`;
  }
  return '';
}

// 定义发送请求的函数（假设有一个外部方法 sendPromptRequest）
function sendPromptRequest(prompt: string): Promise<any> {
  // TODO: 调用发送请求的外部方法（此处仅为示例，实际实现中需要调用真实的请求方法）
  // 这里只需要注明有一个外部方法用于发送请求，不需要实现
  return Promise.resolve();
}

// 主函数，处理用户操作
function handleUserOperation(params: RequestParams, textdocVersion: TextdocVersion) {
  const {
    content,
    sourceRange,
    action,
    userMessageType,
    acceleratorMetadata,
    selectionMetadata,
  } = params;

  if (!textdocVersion || textdocVersion.versionInt == null) {
    return;
  }

  const { textdocId, type, versionInt, content: docContent } = textdocVersion;

  let selectedText: string | undefined;
  let surroundingContext: SurroundingContext | null = null;

  // 如果有选择范围，提取选中文本和上下文
  if (sourceRange) {
    selectedText = docContent.slice(sourceRange.start, sourceRange.end);
    surroundingContext = extractSurroundingContext(sourceRange, docContent);
  }

  // 生成提示
  const prompt = generatePrompt(textdocId, type, action, selectedText, surroundingContext);

  // 调用发送请求的函数
  sendPromptRequest(prompt).then((result) => {
    // 处理返回结果（这里不需要实现）
    // TODO: 在这里处理返回结果
  });
}

// 提取周围的上下文
function extractSurroundingContext(sourceRange: SourceRange, content: string): SurroundingContext {
  // 这里使用简单的逻辑提取上下文，可以根据需要调整
  const contextLength = 30; // 上下文长度，可根据需要调整

  const beforeStart = Math.max(0, sourceRange.start - contextLength);
  const afterEnd = Math.min(content.length, sourceRange.end + contextLength);

  const before = content.slice(beforeStart, sourceRange.start);
  const after = content.slice(sourceRange.end, afterEnd);
  const allSurrounding = before + content.slice(sourceRange.start, sourceRange.end) + after;

  return { before, after, allSurrounding };
}
```

### 架构图

该代码的架构主要由以下几个部分组成：

1.   **枚举类型（Enums）**：定义了用户操作类型、消息类型、选择类型和文本文档类型等。

2.   **接口（Interfaces）**：定义了源代码范围、文本文档版本、加速器元数据、选择元数据等数据结构。

3.   **主要函数（Functions）**：

    *   `handleUserOperation`：主函数，处理用户操作。

    *   `generatePrompt`：根据用户操作类型生成对应的提示（Prompt）。

    *   各种辅助函数，用于生成特定操作的提示和描述。

4.   **外部方法**：

    *   `sendPromptRequest`：发送生成的提示到外部服务进行处理（实际实现不在此代码中）。

下面以文字和简单的类图形式描述代码的架构：

### 类图

```
+-------------------+
|   UserActionType  |
+-------------------+
| + ASK             |
| + EDIT            |
| + COMMENT         |
| + CREATE_TEXTDOC  |
+-------------------+

+-------------------+
|  UserMessageType  |
+-------------------+
| + ASK_CHATGPT     |
| + ACCEPT_COMMENT  |
| + FULL_SCREEN_SUBMIT |
| + ACCELERATOR     |
+-------------------+

+-------------------+
|   SelectionType   |
+-------------------+
| + ENTIRE_DOCUMENT |
| + SELECTED_TEXT   |
| + SURROUNDING_CONTEXT |
+-------------------+

+-------------------+
|   TextdocType     |
+-------------------+
| + DOCUMENT        |
|  (other types...) |
+-------------------+

+-------------------+
|   SourceRange     |
+-------------------+
| - start: number   |
| - end: number     |
+-------------------+

+-------------------+
|  TextdocVersion   |
+-------------------+
| - textdocId: string |
| - type: TextdocType |
| - versionInt: number |
| - content: string   |
+-------------------+

+-------------------+
| AcceleratorMetadata |
+-------------------+
| - action: UserActionType |
| - id: string            |
| - prompt: string        |
+-------------------+

+-------------------+
|  SelectionMetadata  |
+-------------------+
| - selection_type: SelectionType |
| - selection_position_range: SourceRange |
+-------------------+

+-------------------+            +-------------------+
| handleUserOperation |          |  generatePrompt    |
+-------------------+            +-------------------+
| - params: RequestParams       | - ...              |
| - textdocVersion: TextdocVersion |
|                               |
|  Calls generatePrompt()       |
|  Calls sendPromptRequest()    |
+-------------------+            +-------------------+
```

### 流程图

下面是 `handleUserOperation` 函数的流程图，描述了代码处理用户操作的步骤。

```
+-------------------------------------------+
|           handleUserOperation             |
+-------------------------------------------+
                |
                v
+-------------------------------------------+
| 1. 从参数中解构出所需的字段：                |
|    - content                              |
|    - sourceRange                          |
|    - action                               |
|    - userMessageType                      |
|    - acceleratorMetadata                  |
|    - selectionMetadata                    |
+-------------------------------------------+
                |
                v
+-------------------------------------------+
| 2. 检查 textdocVersion 是否有效              |
|    - 如果无效，则返回                      |
+-------------------------------------------+
                |
                v
+-------------------------------------------+
| 3. 提取选中的文本和周围上下文                |
|    - 如果有 sourceRange：                   |
|      - 从文档内容中提取 selectedText       |
|      - 调用 extractSurroundingContext()    |
|        获取 surroundingContext            |
|    - 否则：                                |
|      - selectedText 为 undefined           |
|      - surroundingContext 为 null          |
+-------------------------------------------+
                |
                v
+-------------------------------------------+
| 4. 调用 generatePrompt() 生成提示            |
|    - 参数包括：                            |
|      - textdocId                          |
|      - type                               |
|      - action                             |
|      - selectedText                       |
|      - surroundingContext                 |
+-------------------------------------------+
                |
                v
+-------------------------------------------+
| 5. 调用 sendPromptRequest() 发送生成的提示     |
|    - 发送 prompt 到外部服务                |
|    - 处理返回结果（此处未实现）              |
+-------------------------------------------+
```

### 代码逻辑说明

1.   **处理用户操作**：

    *   `handleUserOperation` 是主函数，负责处理用户的操作。它接受用户的请求参数和当前的文本文档版本。

    *   首先，它从参数中提取必要的信息，如内容、选择范围、用户操作类型等。

    *   检查文本文档版本是否有效，如果无效则不进行后续操作。

    *   如果用户有选中的文本（即提供了 `sourceRange`），则从文档内容中提取选中的文本和周围的上下文信息。

    *   调用 `generatePrompt` 函数，根据用户的操作类型和选择的文本生成相应的提示（Prompt）。

    *   最后，调用 `sendPromptRequest` 函数，将生成的提示发送到外部服务进行处理。

2.   **生成提示**：

    *   `generatePrompt` 函数根据用户的操作类型，调用对应的生成函数，如 `generateAskPrompt`、`generateEditPrompt` 等。

    *   每个生成函数都会根据传入的参数，生成特定格式的提示，包含上下文和指令信息。

3.   **辅助函数**：

    *   `describeSelectionInContext`：用于描述用户选中的文本和上下文，生成上下文部分的内容。

    *   `extractSurroundingContext`：根据用户选中的文本位置，从文档内容中提取前后的上下文，以便在提示中提供更完整的信息。

    *   `additionalInstructions` 和 `generateUpdateInstructions`：根据文本文档的类型和选择的内容，生成额外的指令，指导模型如何处理用户的请求。

4.   **外部方法**：

    *   `sendPromptRequest`：负责将生成的提示发送到外部服务，例如 OpenAI 的 API，以获取模型的响应。该函数在代码中未实现，标注为需要外部实现的方法。

* * *

通过以上架构图和流程图，可以清晰地理解代码的整体结构和运行流程。代码主要是根据用户的操作类型和选中的文本，生成相应的提示，发送到外部服务进行处理，然后处理返回的结果。

## 关联主题

- [[00-元语/OpenAI]]
- [[00-元语/ChatGPT]]
- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/typescript]]
- [[00-元语/软件工程]]
- [[00-元语/workflow]]
- [[00-元语/tool]]
