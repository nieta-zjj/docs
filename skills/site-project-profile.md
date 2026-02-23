---
name: site-project-profile
description: 记录一个网站或 Git 项目的功能、用途、典型场景与特色，产出可复用的“档案页”（非机械抓取）。
---

# Site / Project Profile

## 目标

把“一个网站/一个 Git 项目”整理成一份可复用的档案页，回答这些问题：

- 它是什么？解决什么问题？适合谁？
- 典型使用场景有哪些？核心功能是什么？
- 它的特色/差异点是什么？有哪些限制与注意事项？
- 关键链接在哪里（官网/文档/定价/源码/协议）？

与“网页归档”不同：这里的重点不是把正文搬进仓库，而是**提炼可用信息**，让后续你（或智能体）能快速判断“该不该用、怎么用、适合什么场景”。

## 输出位置与命名（强制）

- 输出目录：`02-资源/{类别}/`
- 类别（一级目录固定）：
  - `AI-编程助手与Agent`
  - `AI-应用框架与平台`
  - `AI-模型与推理基础设施`
  - `学习资源与知识库`
  - `区块链与Web3`
  - `通用开发工具`
  - `风险边界与合规`
- 目录边界（强制）：
  - 一级目录只能是类别，禁止使用项目名作为一级目录。
  - 最终文档直接落盘：`02-资源/{类别}/{中文标题}.md`。
  - 禁止 `02-资源/{项目名}/{中文标题}.md` 的“一个目录一个文件”结构。
- 单文件交付：`{中文标题}.md`（模型名、`review`、`agent` 等技术术语可保留英文）
- 标题与文件名命名（强制）：
  - 必须“自解释”：看到标题/文件名就能判断它是什么、主要做什么。
  - 文件名与 frontmatter `title` 硬禁词：`GitHub 项目档案`、`项目档案`、`网站档案`、`项目风险边界档案`、`风险边界档案`、`项目风险档案`、`风险档案`、`档案`、`项目文档`、`产品文档`、`项目介绍`、`产品介绍`。
  - 命中任一硬禁词即不允许落盘，必须改名后再提交。
  - 命名必须“看标题就知道大致内容与功能定位”，禁止只表达“这是项目/文档/档案”而不说明功能。
  - 必须使用：`{对象名}：{对象类型}{核心定位}`。
  - `{对象类型}` 至少包含一个类型词，如“工具 / 框架 / 平台 / 知识库 / 客户端 / 服务 / 引擎 / 协议 / 模型 / 项目”。
  - 文件名与 frontmatter `title` 语义保持一致，禁止一个泛化一个具体。
  - 标题与文件名禁止保留营销符号或噪音片段（如 `•`、`|`、emoji）；必须改写为可读短语。
  - 若暂时无法确认对象类型与定位，先补齐来源，不要落盘占位命名。
- 命名示例：
  - 推荐：`PowerToys：Windows 系统增强工具.md`，`title: PowerToys：Windows 系统增强工具`
  - 推荐：`Langfuse：LLM 应用观测平台.md`，`title: Langfuse：LLM 应用观测平台`
  - 禁止：`PowerToys：GitHub 项目档案.md`，`title: PowerToys：GitHub 项目档案`
- 文件名禁止包含日期/时间信息；日期统一写在 frontmatter 字段：`发布日期: YYYY-MM-DD`
- 临时文件：统一写到当前目录 `.tmp/`（可随时清空；不进入最终结构）

## 固定结构（推荐）

最终文档推荐使用以下结构（按需增删小节，但不要写括号式说明型标题）：

- `---`
- `title: 名称`
- `---`
- frontmatter 元信息字段（如 `发布日期`、`对象`、`项目主页`、`官网`、`来源`）
- `## 摘要`（必须由 `scripts/gemini_task.py summarize` 生成）
- `## 功能与定位`
- `## 典型使用场景`
- `## 核心功能`
- `## 特色与差异点`
- `## 使用方式概览`
- `## 限制与注意事项`
- `## 链接`

## 信息来源与边界（硬性）

- 只写“从来源可验证”的信息；不确定就不写，不做脑补。
- 不要把营销文案原样堆砌；用自己的话提炼，但不新增事实。
- 不要输出抓取通道、脚本日志、反爬过程等过程性信息。
- 禁止在标题/字段名里加括号说明（如“功能（官网）”）。
- 索引/清单文档中的链接列表必须可公开访问且可复核：禁止收录带凭证/临时签名/退订/本机回环地址的链接（如 `unsubscribe-auth`、`jwt`、`X-Amz-`、`127.0.0.1`、`localhost`）。
- 索引/清单文档中的链接列表若末尾混入中文或英文标点（如 `）`、`。`、`,`）必须清理后再落盘，避免点击失效。
- 合规边界：若来源涉及绕过授权/破解/盗版/入侵/规避限制等高风险话题，最终档案页只能记录站点定位、栏目结构与风险提示；不得复述可操作步骤、命令/配置、下载镜像与直链。

## 操作流程（SOP）

### A) 网站档案

1) 收集来源（尽量少而全）
   - 首页/产品页
   - 文档/帮助中心/FAQ
   - 定价页（如有）
   - 隐私/条款（如与用途强相关）

2) 抓取到 `.tmp/`

优先用 `scripts/fetch_web_full_text.py`，若遇到防护页再用 `r.jina.ai` 路线（参考 `skills/web-full-archive.md`）。

3) 让 Gemini 生成“档案草稿”（不是最终稿）

先把待处理材料写入 `.tmp/`，再用 `scripts/gemini_task.py profile` 生成结构化草稿；禁止直接读取最终目录（如 `01-博客/`、`02-资源/`、`03-图书/`）作为 Gemini 输入。之后人工通读去噪、修正术语、删掉不可靠的推断。

补充约束：如需写入文件（`-o/--output`），Gemini 输出必须落在 `.tmp/`，禁止直接写入最终目录。

4) 用 Gemini 生成摘要并写入最终文档

对草稿（除 `## 摘要` 外的正文部分）运行 `summarize`，把输出填入 `## 摘要`。

### B) Git 项目档案

1) 收集来源
   - README（首要）
   - Docs（若存在）
   - LICENSE（若与使用方式相关）
   - Releases / Changelog（仅记录项目自身明确写出的兼容性与重要变化）
   - README 信息不足时允许补充来源（按可信度优先）：
     - 仓库内更具体的文档与示例（`docs/`、`examples/`、`README_*`、配置样例等）
     - 官方文档站/项目主页/包管理器页面（npm、PyPI、crate、Homebrew 等）
     - Issues / Discussions（只用于补齐“使用中会遇到的问题/限制/兼容性”，并在档案页中明确标注为社区讨论内容，不把未证实的说法当作项目事实）
     - 必要时可用 `git clone --depth 1` 在本地阅读全文，也允许联网搜索以定位官方资料；若已安装 GitHub CLI，可用 `gh` 查看 issue、release 等上下文

2) 抓取方式
   - GitHub 项目页可用 `scripts/fetch_web_full_text.py` 或 `r.jina.ai` 获取正文。
   - 需要本地阅读多个文件时，可 `git clone --depth 1` 到 `.tmp/`（不要进最终目录）。

## 实操命令（示例）

网站：

```bash
python3 scripts/fetch_web_full_text.py 'https://example.com/' -o .tmp/example.raw.md
python3 scripts/gemini_task.py profile --input-file .tmp/example.raw.md -o .tmp/example.profile.draft.md
python3 scripts/gemini_task.py summarize --input-file .tmp/example.profile.draft.md -o .tmp/example.summary.md
```

Git 项目：

```bash
python3 scripts/fetch_web_full_text.py 'https://github.com/org/repo' -o .tmp/repo.raw.md
python3 scripts/gemini_task.py profile --input-file .tmp/repo.raw.md -o .tmp/repo.profile.draft.md
python3 scripts/gemini_task.py summarize --input-file .tmp/repo.profile.draft.md -o .tmp/repo.summary.md
```

## 发布前自检

```bash
find 02-资源 -mindepth 1 -maxdepth 1 -type d -printf '%f\n' | rg -n -v "^(AI-编程助手与Agent|AI-应用框架与平台|AI-模型与推理基础设施|学习资源与知识库|区块链与Web3|通用开发工具|风险边界与合规)$"
find 02-资源 -mindepth 2 -maxdepth 2 -type d
rg -n "正文（|站点中文链接（|（中文翻译）|（如识别到）|未识别|（提取）" 02-资源 01-博客
rg --files-without-match -P -U '\\A---\\ntitle:\\s*(\"[^\\n]+\"|[^\\n]+)\\n---\\n' 02-资源 -g '*.md'
rg --files -0 02-资源 -g '*.md' | xargs -0 awk 'FNR==1 {in_fm=0; checked=0} !checked { if (FNR==1 && $0=="---") {in_fm=1; next} if (in_fm) { if ($0=="---") {in_fm=0; next} next } if ($0 ~ /^[[:space:]]*$/) next; if ($0 ~ /^# /) print FILENAME ":" FNR ":" $0; checked=1 }'
python3 scripts/normalize_h2_spacing.py --check 02-资源
rg -n "^## 文档信息$" 02-资源 -g '*.md'
rg -n "^[0-9]+\\. https?://(127\\.0\\.0\\.1|localhost)|^[0-9]+\\. .*unsubscribe-auth|^[0-9]+\\. .*private-user-images\\.githubusercontent\\.com/.*(jwt=|X-Amz-)" 02-资源 01-博客
rg -n "^[0-9]+\\. https?://[^ ]+[）。，；：,]$" 02-资源 01-博客
rg --files 02-资源 | rg -n "(GitHub 项目档案|项目档案|网站档案|项目风险边界档案|风险边界档案|项目风险档案|风险档案|档案|项目文档|产品文档|项目介绍|产品介绍)\\.md$"
rg -n "^title:\\s*\"?.*(GitHub 项目档案|项目档案|网站档案|项目风险边界档案|风险边界档案|项目风险档案|风险档案|档案|项目文档|产品文档|项目介绍|产品介绍)\"?$" 02-资源
rg --files 02-资源 | rg -n "[:：].*(•|\\||｜|✨|🐢|🚀|🎬|⭐|💜|📊|⚙|®).+\\.md$"
rg -n "^title:\\s*\"?.*(•|\\||｜|✨|🐢|🚀|🎬|⭐|💜|📊|⚙|®).*\"?$" 02-资源
```

## 关联主题

- [[00-元语/wiki]]
- [[00-元语/workflow]]
- [[00-元语/tool]]
