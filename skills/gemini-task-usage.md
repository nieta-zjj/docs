---
name: gemini-task-usage
description: 使用 scripts/gemini_task.py 进行 review、摘要、翻译、以及“转博客草稿”任务的操作手册与适用场景说明。
---

# Gemini Task Usage

## 目标

- 用统一脚本 `scripts/gemini_task.py` 处理文本任务：`review`、`summarize`、`translate`，以及将“字幕/对话”整理为博客草稿的任务。
- 通过 `.env` 管理模型、网关地址、API Key，避免命令里硬编码敏感信息。
- 在文档整理流程中，明确“什么时候该用这个脚本，什么时候不该用”。
- 明确 Gemini 在归档流程中的角色是“高质量翻译/草稿生成与质检”；其中 `translate` 输出默认可作为最终正文基线。

## 何时使用（强制判断）

1) 需要结构化审阅意见时，用 `review`
- 适用：草稿发布前做质量检查、术语一致性检查、逻辑漏洞排查。
- 输出：按严重级别分组的问题 + 可执行修改建议。

2) 需要快速提炼关键信息时，用 `summarize`
- 适用：长文预读、周报输入、快速生成摘要版说明。
- 输出：一句话总结 + 要点列表 + 可选风险/信息缺口。
- 在归档文档中，`summarize` 输出用于最终文档的 `## 摘要` 段。

3) 需要把原文转成目标语言时，用 `translate`
- 适用：无官方译文时的中文补齐；跨语言协作内容对齐。
- 输出：完整译文草稿，保留原文信息与语气。

4) 需要把字幕整理成博客草稿时，用 `subtitles_blog`
- 适用：字幕/转写文本断句差、错字多、结构碎，需要整理为可读文章。
- 也适用：网页抓取正文出现版式错乱（异常换行、段落粘连、列表错位）时先做排版优化。
- 输出：博客草稿（Markdown），仅基于输入内容整理，不新增外部信息。

5) 需要把对话记录整理成博客草稿时，用 `chat_blog`
- 适用：双人/群聊对话需要沉淀为问答或主题综述。
- 输出：博客草稿（Markdown），保留关键观点链路，去除寒暄/跑题噪音，并默认做隐私去标识。

6) 需要把网站/项目材料整理成“档案草稿”时，用 `profile`
- 适用：为网站或 Git 项目沉淀功能、用途、场景、特色、限制等信息（见 `skills/site-project-profile.md`）。
- 输出：档案草稿（Markdown），仅基于输入材料提炼，不新增外部信息；不输出 `## 摘要`（摘要由 `summarize` 单独生成）。

## 何时不要使用

- 已存在官方中文译文且可直接采用时，不要额外翻译。
- 你需要“最终发布文档”时，必须人工通读；但对 `translate` 输出应默认保留，非必要不改写。
- 输入内容过短或缺失上下文时，摘要/审阅结果会失真，应先补上下文再调用。
- 允许把 Gemini `translate` 输出直接落盘；仅在出现事实或术语错误、明显误译/病句、格式不合规时做最小必要修改。
- 对 Codex 的约束：不得因个人措辞偏好重写 Gemini `translate` 输出。

## 前置准备

1) 确认 `.env` 存在，且至少包含（一般不需要检查，默认存在）：

```env
LITELLM_BASE_URL=https://litellm.talesofai.cn/
LITELLM_MODEL=gemini-3.1-pro-preview
LITELLM_API_KEY=your_api_key_here
```

2) 确认命令可执行：

```bash
python3 scripts/gemini_task.py --help
```

3) 输入文件路径约束（强制）：

- 凡是 `--input-file` 输入，文件必须位于 `.tmp/` 目录。
- 禁止直接把最终目录文件（如 `01-博客/`、`02-资源/`、`03-图书/`）作为 Gemini 输入。
- 推荐做法：先复制/导出到 `.tmp/xxx.md`，再调用 Gemini。
- 凡是使用 `-o/--output` 写入文件，输出文件必须位于 `.tmp/`（禁止把 Gemini 输出直接写入最终目录）。

## 使用方法

1) 审阅（review）

```bash
python3 scripts/gemini_task.py review --input-file .tmp/draft.md
```

2) 摘要（summarize）

```bash
python3 scripts/gemini_task.py summarize --input-file .tmp/long-article.md
```

3) 翻译到简体中文（translate）

```bash
python3 scripts/gemini_task.py translate \
  --target-language "简体中文" \
  --input-file .tmp/source.en.md
```

4) 通过 stdin 输入

```bash
cat source.txt | python3 scripts/gemini_task.py summarize
```

5) 写入文件

```bash
python3 scripts/gemini_task.py review --input-file .tmp/draft.md -o .tmp/review-notes.md
```

6) 字幕转博客草稿（subtitles_blog）

```bash
python3 scripts/gemini_task.py subtitles_blog --input-file .tmp/subtitles.txt -o .tmp/draft.md
```

6.1) 网页正文排版优化（subtitles_blog）

```bash
python3 scripts/gemini_task.py subtitles_blog --input-file .tmp/web-raw.md -o .tmp/web-polished.md
```

7) 对话转博客草稿（chat_blog）

```bash
python3 scripts/gemini_task.py chat_blog --input-file .tmp/chat.txt -o .tmp/draft.md
```

8) 网站/项目档案草稿（profile）

```bash
python3 scripts/gemini_task.py profile --input-file .tmp/sources.md -o .tmp/profile.draft.md
python3 scripts/gemini_task.py summarize --input-file .tmp/profile.draft.md -o .tmp/profile.summary.md
```

## 与 web-full-archive 流程的衔接

1) 先按 `skills/web-full-archive.md` 获取并整理“完整正文”。
2) 若无官方中文译文，再用 `translate` 生成中文初稿。
3) 用 `review` 对中文稿做术语、逻辑、风格一致性检查。
4) 由助手通读并仅做必要修订（术语统一、歧义消解、格式合规）；禁止为改而改。
5) 最终文档格式遵循：
   - 固定顺序：`---` + `title: 标题` + `---` + 元信息字段 → `## 摘要` → `## 正文`；
   - 文档顶部必须有 frontmatter `title`，正文禁止保留内置标题行 `# 标题`；
   - 元信息字段（如 `发布日期`、`作者`、`来源`、`原文链接`、`译注`）统一放在 frontmatter；
   - 所有 `##` 标题必须满足：前后各一行空行，且标题后的空行只能有一行；
   - `## 摘要` 必须来自 Gemini `summarize` 输出；
   - 日期字段写在 frontmatter：`发布日期: YYYY-MM-DD`；
   - 仅 `01-博客/` 强制要求 `发布日期`，且必须是“可证据化的网络原始发布时间”，禁止把入库日期/采集日期当发布日期；
   - 若 `01-博客/` 命中“当天/前一天日期”（当前批次为 `2026-02-23`、`2026-02-22`），先联网取证并写入 `.tmp/publish-date-evidence-final.tsv`，再决定保留或修正；
   - 仅中文正文 + 原文链接；
   - 禁止在标题/小标题里添加括号式说明（形如“正文（……）”）。
6) 临时文件约定：
   - 任何中间文本/草稿统一写到当前目录的 `.tmp/`（例如 `.tmp/source.en.md`、`.tmp/summary.md`）。
   - Gemini 只允许读取 `.tmp/` 下的输入文件。

## 常见问题

- 报错 `LITELLM_API_KEY is missing`
  - 原因：`.env` 缺失或变量名不对。
  - 处理：补齐 `.env`，变量名必须是 `LITELLM_API_KEY`。

- 报错网络不可达或超时
  - 原因：网关不可访问或网络受限。
  - 处理：检查 `LITELLM_BASE_URL`、网络连通性，必要时提高 `--timeout`。

## 关联主题

- [[00-元语/gemini]]
- [[00-元语/prompt]]
- [[00-元语/workflow]]
