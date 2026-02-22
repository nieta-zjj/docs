---
name: web-full-archive
description: 获取网页文章“完整正文”并由助手整理成最终 Markdown。遇到 Cloudflare/反爬页面时，自动走 r.jina.ai 可行路线获取正文文本；同时优先寻找官方中文译文以避免自行翻译。
---

# Web Full Archive

## 目标

- 稳定拿到“完整正文”（不是摘要、不是导航/推荐/页脚）。
- 只输出最终产物：`01-博客/{品牌或作者姓名}/`（只含对读者有用的信息）。
- 不创建 `captures/` 目录；需要落盘的临时内容统一放在当前目录的 `.tmp/`（可随时清空）。
- 凡是要交给 Gemini 处理的输入（翻译/摘要/review 前的文本），必须先写入 `.tmp/`，禁止直接用最终目录文件作为 Gemini 输入。
- 优先使用网站官方中文译文（若存在），避免自行翻译；若不存在，需要补齐中文全文翻译。
- 最终交付采用“仅中文正文 + 原文链接”模式，不保留英文原文全文。
- 最终文档固定包含摘要段落，且摘要由 Gemini 生成。

## 扩展场景（同一套交付标准）

本方案的核心是“把材料整理成最终博客文档”。材料不只来自网页，也可能来自字幕与对话记录；两者都遵循相同的交付形态与清洁要求：

- 仍然输出到：`01-博客/{品牌或作者姓名}/`
- 仍然固定结构：`# 标题` → `## 文档信息` → `## 摘要` → `## 正文`
- 仍然禁止：在标题/小标题/字段名里添加括号式说明（例如“正文（……）”）
- 仍然要求：最终文档必须由助手通读整理后落盘；若来源是 Gemini `translate`，默认保留原输出，仅在必要时最小改动
- 若输入来自 GitHub 仓库文档的价值筛选场景，先执行 `skills/github-repo-blog-archive.md` 再回到本流程落盘

### 场景 A：视频字幕转博客

适用：`SRT/VTT/转写文本` → 文章。

- 目标：把“断行碎、缺标点、错字多”的字幕内容，整理成可读的文章结构（段落/小标题/列表/引用/术语一致）。
- 必须：
  - 删除字幕格式噪音（如 `WEBVTT`、时间戳、序号、`-->`）。
  - 去口癖与重复，合并断行，补齐标点与段落。
  - 修正明显听写错误（如同一术语反复出现但拼写混乱）。
- 推荐流程（临时文件写 `.tmp/`）：
  1) `scripts/gemini_task.py subtitles_blog` 生成文章草稿（不要直接落盘到最终目录）。
  2) `scripts/gemini_task.py review` 做术语与逻辑一致性检查。
  3) `scripts/gemini_task.py summarize` 生成 `## 摘要`。
  4) 助手通读并做必要修订后，落盘到 `01-博客/{作者或频道}/{中文标题}.md`。

### 场景 B：双人/群聊对话转博客

适用：`聊天记录` → 文章（问答或主题综述）。

- 目标：保留关键问题、关键回答与论证链；去掉寒暄、跑题、引用噪音，统一说话人标识。
- 隐私与合规：
  - 默认移除无关的个人信息与可识别细节；仅在内容本身需要时保留身份标签。
  - 不把“内部口径/未公开信息”用更明确的方式复述出来（宁可删减，也不要强化暴露）。
- 推荐流程（临时文件写 `.tmp/`）：
  1) `scripts/gemini_task.py chat_blog` 生成文章草稿。
  2) `scripts/gemini_task.py review` 做事实边界与结构检查。
  3) `scripts/gemini_task.py summarize` 生成 `## 摘要`。
  4) 助手通读并做必要修订后落盘。

### 场景 C：GitHub 仓库文档转博客

适用：从单个仓库中挑选高价值文档（README/docs/guide）并整理为博客稿。

- 先走：`skills/github-repo-blog-archive.md`（完成候选评分与归档决策）
- 再走：本流程的翻译/review/summarize 与最终落盘规范
- 强制约束：
  - 候选评分文件写 `.tmp/github-repo-*.review.md`
  - Gemini 输入与输出都必须在 `.tmp/`
  - 最终文档仍落盘到 `01-博客/{品牌或作者姓名}/{中文标题}.md`

## 目录与命名规范（强制）

- 最终文档存储：`01-博客/{品牌或作者姓名}/`
  - `{品牌或作者姓名}` 优先站点品牌；个人博客用作者名。
- 文件名（必须中文）：
  - 使用中文标题作为文件名；模型名、`review`、`agent` 等技术术语保持英文原样。
  - 禁止在文件名中添加日期时间（如 `2026-02-09`、`20260209`、时间戳）；只有当日期本身是标题语义的一部分时才允许保留。
  - 不使用 URL slug 作为最终文件名。
- 统一单文件交付：`{中文标题}.md`
  - 文件内仅保留中文正文与原文链接，不落盘英文原文全文。

## 多语言与翻译策略（先做这一步）

1) 先判断是否存在官方中文译文（不要一上来就翻译）。
2) 对 OpenAI 博客优先尝试规则：
   - 原文：`https://openai.com/index/{slug}/`
   - 中文：`https://openai.com/zh-Hans-CN/index/{slug}/`
3) 若中文 URL 可正常抓取且正文完整：以官方中文为主文档；英文可作为旁路备份。
4) 若“中文链接存在但正文仍为英文”（伪中文页），按“无官方中文译文”处理。
5) 若官方中文不存在或不完整：最终文档必须包含中文全文翻译，并保留原文链接以便核对。
6) 翻译流程必须参考 `skills/gemini-task-usage.md`：
   - 先把输入文本写入 `.tmp/`，再调用 Gemini；
   - 使用 Gemini `translate` 生成中文稿；
   - 默认保留 Gemini 翻译输出，只有在事实/术语错误、明显误译病句、格式不合规时才做最小必要修改（禁止为改而改）。

## 抓取策略（含 r.jina.ai 可行路线）

1. 先尝试原始 URL 直连抓取。
2. 若命中防护页（例如 `Just a moment...`、`Enable JavaScript and cookies to continue`、403 挑战页），切换到 `r.jina.ai` 包装 URL。
   - 微信链接需额外识别验证码页：若出现 `环境异常`、`完成验证后即可继续访问`、`去验证` 或 URL 包含 `wappoc_appmsgcaptcha`，一律视为“未拿到正文”。
3. `r.jina.ai` 优先顺序：
   - `https://r.jina.ai/http://https://{host}{path_and_query}`
   - `https://r.jina.ai/http://https://www.{host}{path_and_query}`（若原 host 非 `www`）
   - `https://r.jina.ai/http://{host}{path_and_query}`
   - `https://r.jina.ai/http://www.{host}{path_and_query}`
4. 若全部失败，输出：
   - 不写 `待补充` 或 `TODO` 占位文档。
   - 仅允许写“访问受限记录”类型文档：说明来源链接与受限事实，不写过程日志（如抓取通道、脚本报错、HTTP 细节、已尝试 URL 清单）。
   - 记录文档中只保留可确认字段；无法确认的标题/作者/发布日期直接省略，不写占位词。

### 微信公众号专项 SOP（已验证可复用）

适用：`https://mp.weixin.qq.com/s/...` 链接，直连与 `r.jina.ai` 仍返回验证码页时。

1) 执行顺序（必须）：
- 先直连抓取；
- 再走 `r.jina.ai` 四种包装 URL；
- 仍失败时，切换 `Playwright Firefox` 动态渲染，读取 `#js_content`。

2) `Playwright Firefox` 抓取要点（必须）：
- 等待 `domcontentloaded` 后，显式等待 `#js_content` 出现；
- 抽取字段：`#activity-name`（标题）、`#js_name`（作者）、`#publish_time`（展示日期）、`#js_content`（正文）；
- 若正文命中 `完成验证后即可继续访问`、`wappoc_appmsgcaptcha`、`环境异常`，判定为失败，禁止落盘为正文文档；
- 中间产物必须写 `.tmp/`（例如 `.tmp/wx-<id>.firefox.json`、`.tmp/wx-<id>.firefox.raw.md`）。

3) 日期与排版修复（必须）：
- 优先使用页面展示日期（如 `2025年11月30日 13:57`）规范化为 `YYYY-MM-DD`；
- 微信正文抓取成功后，常出现异常换行、断句碎、段落粘连等版式问题；默认按“需要 Gemini 修复排版”处理；
- 必须先执行 `python3 scripts/gemini_task.py subtitles_blog --input-file .tmp/wx-<id>.firefox.raw.md -o .tmp/wx-<id>.polished.md`；
- 再基于 `.tmp/wx-<id>.polished.md` 执行 `review` 与 `summarize`，最后落盘。

4) 失败边界（必须）：
- 微信来源不得写“失败即结束”的结论；必须继续尝试可行链路（含浏览器渲染）后再判断；
- 若最终仍失败，只保留“访问受限记录”，且不得包含抓取日志/脚本报错。

## 整理规则（关键：最终文档必须由助手整理）

抓取只是拿到材料；最终文档需要你（助手）通读并“识别所有内容”后再落盘：

- 保留所有正文信息：段落、标题层级、列表、表格、代码块、引用、注释、图片/图注（能保留链接就保留）。
- 技术文档的代码块必须完整保留：若出现“实现方式/代码示例/快速入门”等引导语但后续无代码块，视为抓取不完整，需切换到更完整来源（优先 `r.jina.ai`）重新抓取。
- 删除非正文噪音：导航、订阅、分享、推荐阅读、页脚版权等。
- 不要把过程性提示写进最终文档：
  - 不要写 `（如识别到）`、`未识别`、`（提取）` 等占位/提示语。
  - 不要写 `待补充`、`TODO 占位`、`占位文件` 等占位语义。
  - 不要写抓取通道、反爬降级、脚本日志等过程信息。
  - 不要在标题/小标题/字段名里添加括号式说明（形如“正文（……）”“中文链接（……）”）。
  - 不要在正文里放“指向脚本/Notebook 的可点击链接”（如 `.py`、`.ipynb`）；此类引用应改为纯文本路径。
- 元信息只写“确定值”；不确定就省略字段。
- 日期字段统一写为：`发布日期：YYYY-MM-DD`（写在 `## 文档信息` 内，不写进文件名）。
- 如无官方中文译文：在最终文档中补齐中文全文翻译（不要遗漏段落/列表/术语）。
- 若正文为人工翻译：在 `## 文档信息` 中加一行 `译注：……`（一句话说明“为何需要翻译”，不要写括号式字段名）。
- 推荐固定结构：
  - `# 标题`
  - `## 文档信息`
  - `## 摘要`（由 `scripts/gemini_task.py summarize` 生成）
  - `## 正文`
- 若正文存在明显版式错乱（断句破碎、段落粘连、列表错位），必须先调用 `scripts/gemini_task.py subtitles_blog` 生成排版优化稿，再进行 `review` 与 `summarize`。

## 实操命令

```bash
python3 scripts/fetch_web_full_text.py \
  'https://openai.com/index/first-proof-submissions/' \
  -o '01-博客/OpenAI/first-proof-submissions.md'
```

字幕转博客（示例）：

```bash
python3 scripts/gemini_task.py subtitles_blog --input-file .tmp/subtitles.txt -o .tmp/draft.md
python3 scripts/gemini_task.py review --input-file .tmp/draft.md -o .tmp/review.md
python3 scripts/gemini_task.py summarize --input-file .tmp/draft.md -o .tmp/summary.md
```

网页版式优化（示例）：

```bash
python3 scripts/gemini_task.py subtitles_blog --input-file .tmp/web-raw.md -o .tmp/web-polished.md
python3 scripts/gemini_task.py review --input-file .tmp/web-polished.md -o .tmp/web-polished.review.md
python3 scripts/gemini_task.py summarize --input-file .tmp/web-polished.md -o .tmp/web-polished.summary.md
```

对话转博客（示例）：

```bash
python3 scripts/gemini_task.py chat_blog --input-file .tmp/chat.txt -o .tmp/draft.md
python3 scripts/gemini_task.py review --input-file .tmp/draft.md -o .tmp/review.md
python3 scripts/gemini_task.py summarize --input-file .tmp/draft.md -o .tmp/summary.md
```

## 结果验证

- 最终文档写入 `01-博客/{品牌或作者姓名}/`，并满足：
  - 正文完整、结构清晰、无导航/推荐/页脚噪音
  - 若存在官方中文译文：优先使用官方中文；若无：中文全文翻译已补齐
  - 含 `## 摘要` 段，且由 Gemini 生成
  - 仅保留原文链接，不粘贴英文原文全文
  - 无括号式说明型标题/小标题
  - 文档中不出现占位/提示括号文案（如 `（如识别到）`、`未识别`、`（提取）`）

发布前自检（必做）：

```bash
rg -n "正文（|站点中文链接（|（中文翻译）|（如识别到）|未识别|（提取）" 01-博客
```

占位词自检（必做）：

```bash
rg -n "待补充|TODO 占位|占位文件|## TODO" 01-博客
```

版式优化规则自检（必做，命中表示规则已写入）：

```bash
rg -n "版式错乱|subtitles_blog|排版优化稿" AGENTS.md skills/web-full-archive.md skills/gemini-task-usage.md
```

技术文档代码块完整性自检（按需，命中即阻断发布）：

```bash
rg -nP -U '(实现方式：|代码示例：|快速入门[\\s\\S]{0,20}：)\\n\\n(?!```)' 01-博客
```

微信来源附加自检（按需，但命中即阻断发布）：

```bash
rg -n "完成验证后即可继续访问|wappoc_appmsgcaptcha|^# 环境异常$" 01-博客
```

微信专项 SOP 规则自检（必做，命中表示规则已写入）：

```bash
rg -n "微信公众号专项 SOP|Playwright Firefox|#js_content|wappoc_appmsgcaptcha" skills/web-full-archive.md
```

脚本/Notebook 链接自检（必做，命中即阻断发布）：

```bash
rg -nP "\\[[^\\]]+\\]\\((?:https?://[^)\\s]+/[^)\\s]+\\.(?:ipynb|py|sh|js|ts|ps1)(?:[?#/][^)]*)?|(?:(?!https?://)[^)]*/[^)/?#]+\\.(?:ipynb|py|sh|js|ts|ps1)(?:[?#/][^)]*)?)|[^)]*/scripts/[^)]*)\\)" 00-元语 01-博客 02-资源 03-图书 skills
```

Gemini 输入路径自检（必做）：

```bash
rg -nP "^\\s*(cat\\s+.*\\|\\s*)?python3\\s+scripts/gemini_task\\.py\\b.*--input-file\\s+(?!\\.tmp/)" skills AGENTS.md
```

Gemini 输出路径自检（必做）：

```bash
rg -nP "^\\s*(cat\\s+.*\\|\\s*)?python3\\s+scripts/gemini_task\\.py\\b.*\\s(?:-o|--output)\\s+(?!\\.tmp/)" skills AGENTS.md
```

扩展场景自检（按需）：

```bash
rg -n "WEBVTT|-->|^\\d+$" 01-博客
```

## 关联主题
- [[00-元语/workflow]]
- [[00-元语/translation]]
- [[00-元语/wiki]]
