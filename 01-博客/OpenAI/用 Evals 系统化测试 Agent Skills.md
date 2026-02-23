---
title: "用 Evals 系统化测试 Agent Skills"

发布日期: "2026-01-22"
来源: "https://developers.openai.com/blog/eval-skills"
译注: "当前未检索到该文的官方中文版本，本文为基于原文的中文整理译稿。"
---

## 摘要

本文介绍了如何通过 Evals 系统化测试 Codex 智能体技能：结合确定性检查与基于 Schema 的模型评分，验证技能行为是否符合预期，并降低版本回归风险。

- 一个完整 Eval 由提示词、运行轨迹与产物、检查项和可比较分数组成，实践上接近轻量端到端测试。
- 设计评估时应先定义可检查的完成标准，并覆盖结果、过程、风格、效率四类目标。
- 建议用 10-20 条提示词起步，覆盖显式调用、隐式调用、上下文调用和负面用例。
- 可通过 `codex exec --json` 解析 JSONL 事件做确定性检查，通过 `--output-schema` 输出结构化定性评分。
- 评估集应随着真实失败案例持续扩充，形成长期稳定的回归防线。

## 正文

当你为 Codex 这样的智能体迭代某项技能时，很难判断你究竟是在改进它，还是仅仅改变了它的行为。某个版本感觉更快，另一个版本似乎更可靠，然后回归错误（regression）就悄悄出现了：技能没有触发、跳过了必要的步骤，或者留下了多余的文件。

从本质上讲，技能是为大语言模型（LLM）准备的[经过组织的提示词和指令集合](https://developers.openai.com/codex/skills)。随着时间的推移，改进技能最可靠的方法是像[评估 LLM 应用程序的其他提示词](https://platform.openai.com/docs/guides/evaluation-best-practices)一样来评估它。

_Evals_（_evaluations_ 的简称，即评估）用于检查模型的输出及其生成该输出所采取的步骤是否符合你的预期。Evals 让你不再问“这个感觉更好吗？”（或仅凭感觉），而是让你提出具体的问题，例如：

*   智能体是否调用了该技能？
*   它是否运行了预期的命令？
*   它生成的输出是否遵循了你所关注的规范？

具体来说，一个 Eval 包含：一个提示词 → 一次捕获的运行记录（执行轨迹 + 产物） → 一小组检查项 → 一个可供长期比较的分数。

在实践中，针对智能体技能的 Evals 非常像轻量级的端到端测试：你运行智能体，记录发生的事情，并根据一小组规则对结果进行打分。

本文将介绍一种在 Codex 中实现这一目标的清晰模式：从定义成功标准开始，然后添加确定性检查和基于评分标准的评估机制，从而让改进（和退化）一目了然。

### 1. 在编写技能之前定义成功标准

在编写技能本身之前，请用实际可衡量的术语写下“成功”的含义。一种有用的思考方式是将检查项分为以下几类：

*   **结果目标 (Outcome goals)：** 任务完成了吗？应用能运行吗？
*   **过程目标 (Process goals)：** Codex 是否调用了该技能，并遵循了你预期的工具和步骤？
*   **风格目标 (Style goals)：** 输出是否遵循了你要求的规范？
*   **效率目标 (Efficiency goals)：** 它在达成目标的过程中是否避免了无效折腾（例如，不必要的命令或过多的 Token 消耗）？

保持这个列表简短，并专注于必须通过的检查项。目标不是预先编码所有的偏好，而是捕捉你最关心的行为。

例如，在本文中，本指南将评估一个用于搭建演示应用（demo app）的技能。有些检查是具体的：它运行 `npm install` 了吗？它创建 `package.json` 了吗？指南将这些具体检查与结构化的风格评分标准结合起来，以评估规范和布局。

这种组合是有意为之的。你需要的是能够尽早暴露特定回归错误的快速、有针对性的信号，而不是在最后才给出一个单一的“通过/失败”结论。

### 2. 创建技能

Codex 技能是一个包含 `SKILL.md` 文件的目录，该文件包含 YAML 前置数据（`name`、`description`），随后是定义技能行为的 Markdown 指令，以及可选的资源和脚本。名称和描述比它们看起来更重要。它们是 Codex 用来决定**是否**调用该技能，以及**何时**将 `SKILL.md` 的其余部分注入智能体上下文的主要信号。如果这些内容含糊不清或承载过多，技能就无法可靠地触发。

最快的入门方法是使用 Codex 内置的技能创建器（[它本身也是一个技能](https://github.com/openai/skills/tree/main/skills/.system/skill-creator)）。你只需在命令行输入：

```bash
$skill-creator
```

该创建器会引导你完成整个流程，询问你该技能的作用、何时触发，以及它是纯指令型还是由脚本支持的（默认推荐纯指令型）。要了解有关创建技能的更多信息，请[查看文档](https://developers.openai.com/codex/skills#create-a-skill)。

#### 示例技能

本文使用了一个刻意保持极简的示例：一个以可预测、可重复的方式搭建小型 React 演示应用的技能。

该技能将：

*   使用 Vite 的 React + TypeScript 模板搭建项目脚手架
*   使用官方 Vite 插件的方式配置 Tailwind CSS
*   强制执行最小化、一致的文件结构
*   定义明确的“完成标准 (definition of done)”，以便直接评估是否成功

以下是一个紧凑的草稿，你可以将其粘贴到：

*   `.codex/skills/setup-demo-app/SKILL.md`（仓库级别作用域），或
*   `~/.codex/skills/setup-demo-app/SKILL.md`（用户级别作用域）。

```markdown
---
name: setup-demo-app
description: Scaffold a Vite + React + Tailwind demo app with a small, consistent project structure.
---

## When to use this

Use when you need a fresh demo app for quick UI experiments or reproductions.

## What to build

Create a Vite React TypeScript app and configure Tailwind. Keep it minimal.

Project structure after setup:

- src/
  - main.tsx (entry)
  - App.tsx (root UI)
  - components/
    - Header.tsx
    - Card.tsx
  - index.css (Tailwind import)
- index.html
- package.json

Style requirements:

- TypeScript components
- Functional components only
- Tailwind classes for styling (no CSS modules)
- No extra UI libraries

## Steps

1. Scaffold with Vite using the React TS template:
   npm create vite@latest demo-app -- --template react-ts

2. Install dependencies:
   cd demo-app
   npm install

3. Install and configure Tailwind using the Vite plugin.
   - npm install tailwindcss @tailwindcss/vite
   - Add the tailwind plugin to vite.config.ts
   - In src/index.css, replace contents with:
     @import "tailwindcss";

4. Implement the minimal UI:
   - Header: app title and short subtitle
   - Card: reusable card container
   - App: render Header + 2 Cards with placeholder text

## Definition of done

- npm run dev starts successfully
- package.json exists
- src/components/Header.tsx and src/components/Card.tsx exist
```

这个示例技能故意采取了带有主观倾向的设定。如果没有明确的约束，就没有具体的东西可以评估。

### 3. 手动触发技能以暴露隐藏的假设

因为技能的调用在很大程度上取决于 `SKILL.md` 中的**名称 (name)** 和**描述 (description)**，所以首先要检查的是 `setup-demo-app` 技能是否在你预期的时候触发。

在早期阶段，可以在真实的仓库或临时目录中，通过 `/skills` 斜杠命令或使用 `$` 前缀引用来显式激活该技能，并观察它在哪里出错。这就是你发现遗漏的地方：技能根本没有触发、触发过于频繁，或者虽然运行了但偏离了预期步骤。

在这个阶段，你不是在为了速度或完美而优化。你是在寻找该技能所做出的隐藏假设，例如：

*   **触发假设 (Triggering assumptions)：** 像“设置一个快速的 React 演示”这样的提示词**本应该**调用 `setup-demo-app` 但却没有，或者更通用的提示词（“添加 Tailwind 样式”）意外地触发了它。

*   **环境假设 (Environment assumptions)：** 技能假设它在一个空目录中运行，或者假设 `npm` 可用且优先于其他包管理器。

*   **执行假设 (Execution assumptions)：** 智能体跳过了 `npm install`，因为它假设依赖项已经安装，或者在 Vite 项目存在之前就配置了 Tailwind。

一旦你准备好让这些运行变得可重复，请切换到 `codex exec`。它是专为自动化和 CI（持续集成）设计的：它将进度流式传输到 `stderr`，并仅将最终结果写入 `stdout`，这使得运行过程更容易被脚本化、捕获和检查。

默认情况下，`codex exec` 在受限的沙盒中运行。如果你的任务需要写入文件，请使用 `--full-auto` 参数运行它。作为一般规则，特别是在自动化时，请使用完成工作所需的最低权限。

一个基本的手动运行可能如下所示：

```bash
codex exec --full-auto \
  'Use the $setup-demo-app skill to create the project in this directory.'
```

第一次的实际操作与其说是为了验证正确性，不如说是为了发现边缘情况。你在这里所做的每一个手动修复（例如添加缺失的 `npm install`、纠正 Tailwind 设置或收紧触发描述），都是未来 Eval 的候选对象，这样你就可以在大规模评估之前锁定预期行为。

### 4. 使用小而有针对性的提示词集尽早捕获回归错误

你不需要一个庞大的基准测试就能从 Evals 中获得价值。对于单个技能，一小组 10–20 个提示词就足以尽早暴露回归错误并确认改进。

从一个小的 CSV 文件开始，并随着你在开发或使用过程中遇到真实的失败案例而不断扩充它。每一行都应该代表一种情况：你关心 `setup-demo-app` 技能**是否**被激活，以及当它激活时，成功是什么样子的。

例如，最初的 `evals/setup-demo-app.prompts.csv` 可能如下所示：

```csv
id,should_trigger,prompt
test-01,true,"Create a demo app named `devday-demo` using the $setup-demo-app skill"
test-02,true,"Set up a minimal React demo app with Tailwind for quick UI experiments"
test-03,true,"Create a small demo app to showcase the Responses API"
test-04,false,"Add Tailwind styling to my existing React app"
```

这些用例中的每一个都在测试略有不同的内容：

*   **显式调用 (`test-01`)**

    这个提示词直接指定了技能名称。它确保 Codex 在被要求时能够调用 `setup-demo-app`，并且对技能名称、描述或指令的更改不会破坏直接使用。

*   **隐式调用 (`test-02`)**

    这个提示词**准确地**描述了技能所针对的场景（设置一个最小化的 React + Tailwind 演示），但没有提及技能名称。它测试 `SKILL.md` 中的名称和描述是否足够强大，以至于 Codex 能够自行选择该技能。

*   **上下文调用 (`test-03`)**

    这个提示词添加了领域上下文（Responses API），但仍然需要相同的基础设置。它检查技能是否能在真实的、带有轻微干扰信息的提示词中触发，并且生成的应用仍然符合预期的结构和规范。

*   **负面用例 (`test-04`)**

    这个提示词**不应该**调用 `setup-demo-app`。这是一个常见的相邻请求（“将 Tailwind 添加到现有应用中”），它可能会意外匹配到技能的描述（“React + Tailwind 演示”）。包含至少一个 `should_trigger=false` 的用例有助于捕获**误报（false positives）**，即当用户想要对现有项目进行增量更改时，Codex 过于积极地选择了该技能并搭建了一个新项目。

这种组合是有意为之的。一些 Evals 应该确认技能在被显式调用时表现正确；另一些则应该检查它是否能在用户根本没有提及该技能的真实提示词中被激活。

当你发现遗漏、未能触发技能的提示词，或者输出偏离预期的情景时，将它们作为新行添加进去。随着时间的推移，这个小小的 CSV 文件将成为一份动态记录，记录着 `setup-demo-app` 技能必须持续做对的各种场景。

### 5. 从轻量级的确定性评分器开始

这是评估步骤的核心：使用 `codex exec --json`，这样你的评估框架就可以对**实际发生的事情**进行评分，而不仅仅是最终输出看起来是否正确。

当你启用 `--json` 时，`stdout` 会变成结构化事件的 JSONL 流。这使得编写与你关心的行为直接相关的确定性检查变得非常简单，例如：

*   它运行 `npm install` 了吗？
*   它创建 `package.json` 了吗？
*   它是否按预期顺序调用了预期的命令？

这些检查被刻意设计得很轻量。在添加任何基于模型的评分之前，它们能为你提供快速、可解释的信号。

#### 一个极简的 Node.js 运行器

一个“足够好”的方法如下所示：

1.   对于每个提示词，运行 `codex exec --json --full-auto "<prompt>"`
2.   将 JSONL 轨迹保存到磁盘
3.   解析轨迹并对事件运行确定性检查

```javascript
// evals/run-setup-demo-app-evals.mjs
import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";

function runCodex(prompt, outJsonlPath) {
  const res = spawnSync(
    "codex",
    [
      "exec",
      "--json", // 必需：输出结构化事件
      "--full-auto", // 允许文件系统更改
      prompt,
    ],
    { encoding: "utf8" }
  );

  mkdirSync(path.dirname(outJsonlPath), { recursive: true });

  // 启用 --json 时，stdout 为 JSONL 格式
  writeFileSync(outJsonlPath, res.stdout, "utf8");

  return { exitCode: res.status ?? 1, stderr: res.stderr };
}

function parseJsonl(jsonlText) {
  return jsonlText
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

// 确定性检查：智能体是否运行了 npm install？
function checkRanNpmInstall(events) {
  return events.some(
    (e) =>
      (e.type === "item.started" || e.type === "item.completed") &&
      e.item?.type === "command_execution" &&
      typeof e.item?.command === "string" &&
      e.item.command.includes("npm install")
  );
}

// 确定性检查：是否创建了 package.json？
function checkPackageJsonExists(projectDir) {
  return existsSync(path.join(projectDir, "package.json"));
}

// 单个用例运行示例
const projectDir = process.cwd();
const tracePath = path.join(projectDir, "evals", "artifacts", "test-01.jsonl");

const prompt =
  "Create a demo app named demo-app using the $setup-demo-app skill";

runCodex(prompt, tracePath);

const events = parseJsonl(readFileSync(tracePath, "utf8"));

console.log({
  ranNpmInstall: checkRanNpmInstall(events),
  hasPackageJson: checkPackageJsonExists(path.join(projectDir, "demo-app")),
});
```

这里的价值在于一切都是**确定且可调试的**。

如果某项检查失败，你可以打开 JSONL 文件并准确查看发生了什么。每次命令执行都会按顺序显示为 `item.*` 事件。这使得回归错误变得易于解释和修复，而这正是你在这个阶段所需要的。

### 6. 使用 Codex 和评分标准进行定性检查

确定性检查回答了“*它完成基本操作了吗？*”，但它们无法回答“*它是按照你想要的方式完成的吗？*”

对于像 `setup-demo-app` 这样的技能，许多要求是定性的：组件结构、样式规范，或者 Tailwind 是否遵循了预期的配置。这些很难仅通过基本的文件存在检查或命令计数来捕获。

一个务实的解决方案是在你的评估流水线中添加第二个由模型辅助的步骤：

1.   运行设置技能（这会将代码写入磁盘）
2.   对生成的仓库运行**只读的样式检查**
3.   要求返回一个**结构化响应**，以便你的评估框架可以一致地进行评分

Codex 通过 `--output-schema` 直接支持这一点，它将最终响应约束为你定义的 JSON Schema。

#### 一个小型评分标准 Schema

首先定义一个包含你所关心的检查项的小型 Schema。例如，创建 `evals/style-rubric.schema.json`：

```json
{
  "type": "object",
  "properties": {
    "overall_pass": { "type": "boolean" },
    "score": { "type": "integer", "minimum": 0, "maximum": 100 },
    "checks": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "pass": { "type": "boolean" },
          "notes": { "type": "string" }
        },
        "required": ["id", "pass", "notes"],
        "additionalProperties": false
      }
    }
  },
  "required": ["overall_pass", "score", "checks"],
  "additionalProperties": false
}
```

这个 Schema 为你提供了稳定的字段（`overall_pass`、`score`、每个检查项的结果），你可以随着时间的推移对它们进行组合、对比和跟踪。

#### 样式检查提示词

接下来，运行第二个 `codex exec`，它**仅检查仓库**并输出符合评分标准的 JSON 响应：

```bash
codex exec \
  "根据以下要求评估 demo-app 仓库：
   - 存在 Vite + React + TypeScript 项目
   - Tailwind 通过 @tailwindcss/vite 配置，且 CSS 导入了 tailwindcss
   - src/components 包含 Header.tsx 和 Card.tsx
   - 组件是函数式组件，并使用 Tailwind 实用类设置样式（无 CSS modules）
   以 JSON 格式返回评分结果，包含检查项 ID：vite, tailwind, structure, style。" \
  --output-schema ./evals/style-rubric.schema.json \
  -o ./evals/artifacts/test-01.style.json
```

这就是 `--output-schema` 的便利之处。你得到的不再是难以解析或比较的自由格式文本，而是一个可预测的 JSON 对象，你的评估框架可以在多次运行中对其进行评分。

如果你以后将这个评估套件移至 CI，Codex GitHub Action 明确支持通过 `codex-args` 传递 `--output-schema`，因此你可以在自动化工作流中强制执行相同的结构化输出。

### 7. 随着技能的成熟扩展你的 Evals

一旦核心循环就位，你就可以在对你的技能最重要的方向上扩展 Evals。从小处着手，然后仅在能真正增加信心的地方分层添加更深入的检查。

一些例子包括：

*   **命令计数和无效折腾 (Command count and thrashing)：** 计算 JSONL 轨迹中的 `command_execution` 项，以捕获智能体开始陷入循环或重复运行命令的回归错误。Token 使用情况也可以在 `turn.completed` 事件中获取。

*   **Token 预算 (Token budget)：** 跟踪 `usage.input_tokens` 和 `usage.output_tokens`，以发现意外的提示词膨胀，并比较不同版本之间的效率。

*   **构建检查 (Build checks)：** 在技能完成后运行 `npm run build`。这可以作为更强的端到端信号，并捕获损坏的导入或配置错误的工具。

*   **运行时冒烟检查 (Runtime smoke checks)：** 启动 `npm run dev` 并使用 `curl` 访问开发服务器，或者如果你已经有轻量级的 Playwright 检查，也可以运行它。请有选择地使用此方法。它能增加信心，但会消耗时间。

*   **仓库整洁度 (Repository cleanliness)：** 确保运行没有生成不需要的文件，并且 `git status --porcelain` 为空（或符合明确的允许列表）。

*   **沙盒和权限回归 (Sandbox and permission regressions)：** 验证技能在没有将权限提升到超出你预期的情况下仍然有效。一旦实现自动化，最小权限默认值就显得尤为重要。

模式是一致的：从能够解释行为的快速检查开始，然后仅在能够降低风险时才添加更慢、更重的检查。

### 8. 核心要点

这个小小的 `setup-demo-app` 示例展示了从“感觉更好”到“拿出证据”的转变：运行智能体，记录发生的事情，并使用一小组检查项对其进行评分。一旦这个循环存在，每一次微调都变得更容易确认，每一次回归都变得清晰可见。以下是核心要点：

*   **衡量重要指标 (Measure what matters)。** 好的 Evals 能让回归错误清晰可见，让失败原因可解释。
*   **从可检查的完成标准开始 (Start from a checkable definition of done)。** 使用 `$skill-creator` 进行引导，然后收紧指令，直到成功的标准确凿无疑。
*   **将 Evals 建立在行为之上 (Ground evals in behavior)。** 使用 `codex exec --json` 捕获 JSONL，并针对 `command_execution` 事件编写确定性检查。
*   **在规则不足时使用 Codex (Use Codex where rules fall short)。** 使用 `--output-schema` 添加结构化的、基于评分标准的检查步骤，以可靠地对风格和规范进行评分。
*   **让真实的失败驱动测试覆盖率 (Let real failures drive coverage)。** 每一次手动修复都是一个信号。将其转化为测试，以便技能能够持续保持正确。

## 相关文档

- [[01-博客/OpenAI/深入解析 Codex 智能体循环|深入解析 Codex 智能体循环]]；关联理由：解说；说明：该文解释了 Codex 事件循环与工具调用轨迹，正是本篇做 `codex exec --json` 确定性评估的基础上下文。
- [[01-博客/OpenAI/解锁 Codex 运行框架：我们如何构建 App Server|解锁 Codex 运行框架：我们如何构建 App Server]]；关联理由：延伸思考；说明：该文补充了 `item/turn/thread` 等运行时原语，有助于扩展本篇评测粒度与事件建模。
- [[01-博客/OpenAI/Harness engineering：在代理优先的世界里运用 Codex|Harness engineering：在代理优先的世界里运用 Codex]]；关联理由：观点一致；说明：该文强调以可验证反馈回路驱动智能体交付，与本篇“用 Evals 防回归”的工程方法一致。

## 关联主题

- [[00-元语/OpenAI]]
- [[00-元语/Codex]]
- [[00-元语/Agent]]
- [[00-元语/AI]]
- [[00-元语/Spec驱动开发]]
- [[00-元语/CI]]
- [[00-元语/evals]]
- [[00-元语/benchmark]]
- [[00-元语/skills]]
- [[00-元语/cli]]
- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/llmops]]
- [[00-元语/react]]
- [[00-元语/typescript]]
- [[00-元语/observability]]
- [[00-元语/workflow]]
- [[00-元语/软件工程]]
