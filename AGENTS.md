遵循 `/root/wsl-docs/skills` 中的方案来整理文档。

入口方案：
- [获取博客网页到 markdown 的技术路线](skills/web-full-archive.md)
- [Gemini 任务调用规范](skills/gemini-task-usage.md)
- [网站 / Git 项目档案（功能与场景整理）](skills/site-project-profile.md)
- [GitHub 仓库文档入博客（价值筛选与归档）](skills/github-repo-blog-archive.md)
- [图书记录（书目信息与读书笔记整理）](skills/book-record.md)
- [文档关联与索引（关系图谱整理）](skills/tag-index-wiki.md)
- [文档关联性（强关联规则）](skills/文档关联性.md)
- [新内容发现（候选分级与归档优先级）](skills/new-content-discovery.md)

工作方式（先立规矩，再动手）：

- 重点不是“把这一次的问题修好”，而是把**规范确认清楚、文档写清楚、并加入可执行的自检**，从而避免下次再犯。
- 任何一次发现“机械化/噪音字段/流程偏差”的情况，都必须反向沉淀为规则：
  - 更新本文件（`AGENTS.md`）与对应 skill（例如 `skills/web-full-archive.md`）
  - 增加/调整一条能用命令验证的自检（默认使用 `rg`）
  - 让规则可复用：写“禁止什么/必须什么/如何验证”，不要写一次性解释
- 此类问题的完成定义（DoD）：规则已写入文档 + 自检命令可执行且通过 + 全仓库搜索不再出现该反例文本。

全局规范（避免重复返工）：

1) 目标不是“自动化提取”，而是“获取到完整正文 + 由助手整理成最终文档”  
   - 不创建 `captures/` 目录  
   - 需要落盘的临时内容，统一放在当前目录的 `.tmp/`（可随时清空；不纳入最终文档结构）  
   - **Gemini 前置约束（硬性）**：任何要交给 Gemini 处理的输入/输出文档都只能位于 `.tmp/`  
     - 禁止把 `01-博客/`、`02-资源/`、`03-图书/` 中的文件直接作为 Gemini 输入；必须先复制到 `.tmp/` 再处理  
     - 禁止把 Gemini 输出直接写入最终目录；Gemini 的 `-o/--output` 必须写到 `.tmp/`，再由助手通读整理后落盘到最终目录  
   - 最终交付文档必须由助手通读、补齐缺失要素、去噪后再落盘
   - 技术文档若原文存在代码示例，最终文档必须保留对应代码块；若抓取结果出现“实现方式/代码示例/快速入门”等引导语但缺少代码块，必须回退到更完整的来源（优先 `r.jina.ai`）重新抓取后再翻译整理
   - 微信公众号链接（`mp.weixin.qq.com/s/...`）抓取默认第一优先使用 `scripts/wechat_hq_fetch.py`（高保真含图片与排版）；不得把“直连或 `r.jina.ai` 失败”当作结束条件
   - 若目标是“公众号账号级更新”，必须先用 `scripts/newrank_latest_probe.py` 通过 `https://gw.newrank.cn/api/wechat/xdnphb/detail/v1/rank/article/lists`（`account=...`）做免费最新探测并与本地去重；仅当存在“本地缺失的新条目”时，才允许显式 `--allow-paid` 调用 `scripts/wechat_update_from_wxrank.py` 或 `scripts/wxrank_wechat_full_sync.py` 获取 `mp.weixin.qq.com` 文章链接
   - Newrank 鉴权信息（`n-token`、`cookie`）只能通过命令参数或环境变量（`NEWRANK_N_TOKEN`、`NEWRANK_COOKIE`）传入；禁止写入文档正文与最终交付文档

2) 存储位置固定：`01-博客/{品牌或作者姓名}/`  
   - `{品牌或作者姓名}` 优先使用站点品牌；个人博客用作者名  
   - 文件名必须使用中文标题；模型名、`review`、`agent` 等技术术语保持英文  
   - 文件名禁止包含日期/时间信息；日期统一写入 frontmatter 字段 `发布日期`（仅当日期属于标题语义本身时例外）

3) 多语言与翻译（必须先检查）  
   - 先找“官方中文译文”（例如 OpenAI：`/zh-Hans-CN/` 路径）  
   - 若官方中文存在：优先保存官方中文版本，避免自行翻译  
   - 官方中文正文有效性判定（硬性）：若抓取结果命中站点导航噪音（如 `跳至主要内容`、`返回主菜单`、`研究索引`、`商业应用概览`、`开发者专区`、孤立的 `登录/转到/切换至`），该版本视为“无效正文”，必须回退到英文正文并走 `translate`，禁止直接落盘  
   - 若官方中文不存在：必须提供中文全文翻译，并保留原文链接用于核对  
   - 翻译任务默认走 `skills/gemini-task-usage.md`；默认信任 Gemini `translate` 质量，Codex 非必要不改写  
   - 允许修改 Gemini 翻译的条件仅限：事实或术语错误、明显误译/病句、与仓库格式规范冲突；修改必须“最小必要”，禁止为改而改

4) 交付形态（硬性）  
   - 文件名必须使用中文标题；模型名、`review`、`agent` 等技术术语保持英文  
   - 最终文档采用“仅中文正文 + 原文链接”模式，不保留英文原文全文  
   - 全仓库 Markdown 文档禁止包含“指向脚本或 Notebook 的可点击链接”（如 `.py`、`.sh`、`.ipynb`）；这类引用只能写成纯文本（如 ``tool_use/example.ipynb``），不能使用 Markdown 链接语法  
   - 禁止在标题/小标题/字段名里添加括号式说明（形如“正文（……）”“中文链接（……）”）  
   - 所有 `##` 标题必须满足：前后各一行空行，且标题后的空行只能有一行  
   - 推荐固定结构：`---` + `title: 标题` + `---` → `## 摘要` → `## 正文`
   - 全目录文档（`00-元语/`、`01-博客/`、`02-资源/`、`03-图书/`）必须使用 frontmatter `title`；正文禁止保留内置标题行 `# 标题`
   - 元信息统一写在 frontmatter（如 `发布日期`、`作者`、`来源`、`原文链接`、`译注`），正文不再保留 `## 文档信息`
   - frontmatter 日期字段统一使用：`发布日期: YYYY-MM-DD`
   - 仅 `01-博客/` 强制要求 `发布日期`；`00-元语/`、`02-资源/`、`03-图书/` 不按本条强制
   - `01-博客/` 的 `发布日期` 必须是“可证据化的网络原始发布时间”，禁止使用入库日期/采集日期替代
   - 若 `01-博客/` 的 `发布日期` 为“当天或前一天”（当前批次为 `2026-02-23`、`2026-02-22`），必须先完成联网取证并写入 `.tmp/publish-date-evidence-final.tsv` 后才能发布
   - `## 摘要` 必须由 Gemini 生成（`scripts/gemini_task.py summarize`）
   - 若抓取正文存在明显断句/版式错乱（异常换行、段落破碎、列表粘连），必须先调用 `scripts/gemini_task.py subtitles_blog` 生成排版优化稿，再基于优化稿执行 `review` 与 `summarize`
   - 发布前必须跑自检：`rg -n "正文（|站点中文链接（|（中文翻译）|（如识别到）|未识别|（提取）" 01-博客`
   - 占位词自检（命中即修复）：`rg -n "待补充|TODO 占位|占位文件|## TODO" 01-博客`
   - 版式优化规则自检（规范文件中必须存在该规则）：`rg -n "版式错乱|subtitles_blog|排版优化稿" AGENTS.md skills/web-full-archive.md skills/gemini-task-usage.md`
   - 博客发布日期存在性自检（应无输出）：`rg --files-without-match -P -U '\\A---\\n(?:.*\\n)*?发布日期:\\s*\\d{4}-\\d{2}-\\d{2}\\n(?:.*\\n)*?---\\n' 01-博客 -g '*.md'`
   - 博客“当天/前一天日期”自检（命中需有联网证据并人工复核）：`rg -n "^发布日期:\\s*2026-02-(22|23)$" 01-博客`
   - 博客“当天/前一天日期”证据自检（命中条目必须在证据表中）：`rg -n "\\t2026-02-(22|23)\\t" .tmp/publish-date-evidence-final.tsv`
   - 代码块完整性自检（技术文档，命中即复核来源并重抓）：`rg -nP -U '(实现方式：|代码示例：|快速入门[\\s\\S]{0,20}：)\\n\\n(?!```)' 01-博客`
   - 微信来源额外自检（防止把验证码页当正文）：`rg -n "完成验证后即可继续访问|wappoc_appmsgcaptcha|^# 环境异常$" 01-博客`
   - 微信优先策略自检（规范文件中必须存在“第一优先 wechat_hq_fetch.py”）：`rg -n "微信.*第一优先|第一优先.*wechat_hq_fetch\\.py|wecha[t]?_hq_fetch\\.py|高保真.*图片.*排版" AGENTS.md skills/web-full-archive.md`
   - 微信账号级同步规则自检（规范与脚本均需命中）：`rg -n "免费探测优先|newrank_latest_probe\\.py|wechat_update_from_wxrank\\.py|wxrank_wechat_full_sync\\.py|--allow-paid|NEWRANK_N_TOKEN|NEWRANK_COOKIE|gw\\.newrank\\.cn/api/wechat/xdnphb/detail/v1/rank/article/lists|account=Rockhazix" AGENTS.md skills/web-full-archive.md scripts/newrank_latest_probe.py scripts/wechat_update_from_wxrank.py`
   - 站点导航噪音自检（命中即阻断发布并返工正文）：`rg -n "跳至主要内容|返回主菜单|研究索引|商业应用概览|开发者专区|^登录$|^转到$|^切换至$|\\[跳至主要内容\\]\\(|\\*\\s+\\[研究索引\\]\\(" 01-博客`
   - 涉及高风险来源时追加自检（按需扩展关键词，避免误伤正常社群链接）：`rg -n "mediafire\\.com|internxt\\.com|gen\\.paramore\\.su|vk\\.com/monkrus|t\\.me/s/real_monkrus" 01-博客 02-资源`
   - 索引链接安全自检（索引/汇总类文档必做）：`rg -n "^[0-9]+\\. https?://(127\\.0\\.0\\.1|localhost)|^[0-9]+\\. .*unsubscribe-auth|^[0-9]+\\. .*private-user-images\\.githubusercontent\\.com/.*(jwt=|X-Amz-)" 01-博客 02-资源`
   - 索引链接尾标点自检（命中即修复）：`rg -n "^[0-9]+\\. https?://[^ ]+[）。，；：,]$" 01-博客 02-资源`
   - frontmatter `title` 自检（应无输出）：`rg --files-without-match -P -U '\\A---\\ntitle:\\s*(\"[^\\n]+\"|[^\\n]+)\\n---\\n' 00-元语 01-博客 02-资源 03-图书 -g '*.md'`
   - 内置标题残留自检（应无输出）：`rg --files -0 00-元语 01-博客 02-资源 03-图书 -g '*.md' | xargs -0 awk 'FNR==1 {in_fm=0; checked=0} !checked { if (FNR==1 && $0=="---") {in_fm=1; next} if (in_fm) { if ($0=="---") {in_fm=0; next} next } if ($0 ~ /^[[:space:]]*$/) next; if ($0 ~ /^# /) print FILENAME ":" FNR ":" $0; checked=1 }'`
   - `##` 标题空行格式自检（应无输出）：`python3 scripts/normalize_h2_spacing.py --check AGENTS.md skills 00-元语 01-博客 02-资源 03-图书`
   - `## 文档信息` 残留自检（应无输出）：`rg -n "^## 文档信息$" 00-元语 01-博客 02-资源 03-图书 -g '*.md'`
   - 脚本/Notebook 链接自检（命中即修复为纯文本）：`rg -nP "\\[[^\\]]+\\]\\((?:https?://[^)\\s]+/[^)\\s]+\\.(?:ipynb|py|sh|js|ts|ps1)(?:[?#/][^)]*)?|(?:(?!https?://)[^)]*/[^)/?#]+\\.(?:ipynb|py|sh|js|ts|ps1)(?:[?#/][^)]*)?)|[^)]*/scripts/[^)]*)\\)" 00-元语 01-博客 02-资源 03-图书 skills`
   - 翻译规则自检：`rg -n "默认信任 Gemini translate 质量|最小必要|禁止为改而改" AGENTS.md skills/gemini-task-usage.md skills/web-full-archive.md`

5) 最终文档要“干净”  
   - 不要出现类似 `（如识别到）`、`未识别`、`（提取）` 这类提示语  
   - 不要出现 `待补充`、`TODO 占位`、`占位文件` 这类占位语义
   - 不要出现站点导航/菜单/登录入口等模板噪音（例如 `跳至主要内容`、`返回主菜单`、`研究索引`、`商业应用概览`、`开发者专区`、孤立的 `登录/转到/切换至`）
   - 元信息只写确定的字段；不确定就省略字段，不写占位  
   - 不写抓取通道/反爬策略等过程性信息到最终文档（这些只属于过程，不属于文档）

6) 合规与风险（必须有边界意识）

- 若来源内容涉及绕过授权/破解/盗版/入侵/规避限制等高风险话题：
  - 最终文档只允许记录“站点/项目是什么、面向谁、包含哪些模块/栏目、有哪些风险与边界提示”。
  - 禁止写入任何可执行步骤、命令、配置、脚本片段、下载镜像与直链（即使来源里出现了也要省略）。
  - 需要在 `## 限制与注意事项` 中明确写出“本仓库不复述可操作细节”的边界说明。
  - 若无法在不包含可操作细节的前提下完成整理：宁可不收录，也不要输出可用于不当用途的内容。

7) 扩展场景（同一套交付标准）

除“网页归档”外，以下两类输入也按同一套交付规范整理成博客文档（仍然输出到 `01-博客/{品牌或作者姓名}/`，仍然必须有 `## 摘要`，仍然禁止机械括号说明）：

- 视频字幕转博客
  - 输入：字幕/转写原文（可能无标点、断行碎、错字多）。
  - 必须：断句、去口癖与重复、修正明显听写错误、补齐段落与小标题，使其成为可读的文章。
  - 禁止：把时间戳、序号、`WEBVTT`、`-->` 等字幕格式残留到最终文档。
  - 工具链：先用 `scripts/gemini_task.py subtitles_blog` 生成文章草稿，再用 `review` 做一致性检查，最后用 `summarize` 生成 `## 摘要`。

- 双人/群聊对话转博客
  - 输入：聊天记录（可能包含表情、引用、打断、跑题、敏感信息）。
  - 必须：保留关键观点与论证链；必要时改写为“问答”或“主题综述”结构；统一说话人标识；去掉与主题无关的寒暄与噪音。
  - 隐私：默认移除无关的个人信息与可识别细节；仅在内容本身需要时保留身份标签。
  - 工具链：先用 `scripts/gemini_task.py chat_blog` 生成文章草稿，再用 `review`，最后 `summarize`。

扩展场景发布前自检（按需使用）：

- 字幕格式残留：`rg -n "WEBVTT|-->|^\\d+$" 01-博客`
- 时间戳残留（谨慎）：`rg -n "\\b\\d{1,2}:\\d{2}(:\\d{2})?\\b" 01-博客`

8) 新增场景：网站/项目档案（功能、用途、场景、特色）

目标不是“抓网页正文”，而是产出一个可复用的**档案页**，用于后续快速理解与选型。

- 适用对象：
  - 一个网站（产品/工具/导航站/服务）
  - 一个 Git 项目（开源库/工具/框架/模板）
- 产出目录：`02-资源/{类别}/`
- 类别（一级目录固定）：
  - `AI-编程助手与Agent`
  - `AI-应用框架与平台`
  - `AI-模型与推理基础设施`
  - `学习资源与知识库`
  - `区块链与Web3`
  - `通用开发工具`
  - `风险边界与合规`
- 目录边界（强制）：
  - `02-资源/` 一级子目录必须是“类别”，禁止使用项目名做一级目录。
  - 最终文档直接落盘到类别目录：`02-资源/{类别}/{中文标题}.md`。
  - 禁止出现 `02-资源/{项目名}/{中文标题}.md` 这类“一个目录一个文件”结构。
- 单文件交付：`{中文标题}.md`（技术术语保持英文）
  - 推荐结构：`---` + `title: 名称` + `---` + 元信息字段 → `## 摘要` → `## 功能与定位` → `## 典型使用场景` → `## 特色与差异点` → `## 使用方式概览` → `## 限制与注意事项` → `## 链接`
  - 规则：
  - 标题与文件名必须“自解释”：看到标题/文件名就能知道它是什么类型、主要做什么。
  - 文件名与 frontmatter `title` 硬禁词：`GitHub 项目档案`、`项目档案`、`网站档案`、`项目风险边界档案`、`风险边界档案`、`项目风险档案`、`风险档案`、`档案`、`项目文档`、`产品文档`、`项目介绍`、`产品介绍`。
  - 命中任一硬禁词即不允许落盘，必须改名后再提交。
  - 命名必须“看标题就知道大致内容与功能定位”，禁止仅描述“这是项目/文档/档案”而不说明做什么。
  - 必须使用明确命名：`{对象名}：{对象类型}{核心定位}`，例如 `PowerToys：Windows 系统增强工具`、`Langfuse：LLM 应用观测平台`。
  - `{对象类型}` 至少包含一个可辨识类型词（如“工具 / 框架 / 平台 / 知识库 / 客户端 / 服务 / 引擎 / 协议 / 模型 / 项目”）。
  - 文件名与 frontmatter `title` 语义必须一致；禁止文件名泛化、标题具体或反过来。
  - 标题与文件名禁止保留营销符号或噪音片段（如 `•`、`|`、emoji）；必须改写为可读短语。
  - 若无法判断对象类型与定位，宁可暂缓收录，不写“档案式占位标题”。
  - 只写“从来源可验证”的信息；不确定就不写，不做脑补。
  - 避免把营销文案原样堆砌；用自己的话提炼，但不新增事实。
  - 仍然禁止括号式说明型标题/字段名（如“功能（官网）”）。
  - 索引/清单文档中的链接列表必须可公开访问且可复核：禁止收录带凭证/临时签名/退订/本机回环地址的链接（如 `unsubscribe-auth`、`jwt`、`X-Amz-`、`127.0.0.1`、`localhost`）。
  - 索引/清单文档中的链接列表若末尾混入中文或英文标点（如 `）`、`。`、`,`）必须清理后再落盘，避免点击失效。
  - 临时材料一律写 `.tmp/`，不要引入 `captures/`。
- 入口方案：`skills/site-project-profile.md`
- README 不足时的补充规则（允许做，但要写清边界）：
  - 允许 `git clone --depth 1` 到 `.tmp/` 读取仓库内的 docs/examples 等材料补齐信息。
  - 允许联网搜索以定位官方文档站、发布说明、包管理器页面等一手来源。
  - 允许通过 GitHub Issues / Discussions 了解常见问题与限制，但必须在文档中明确标注其来源为社区讨论，不把未证实内容当作项目事实。
  - 若本机已安装 GitHub CLI，可用 `gh` 查看 issues、releases 等上下文以补齐信息。
- 发布前目录结构自检（必做）：
  - 类别白名单检查（应无输出）：
    - `find 02-资源 -mindepth 1 -maxdepth 1 -type d -printf '%f\n' | rg -n -v "^(AI-编程助手与Agent|AI-应用框架与平台|AI-模型与推理基础设施|学习资源与知识库|区块链与Web3|通用开发工具|风险边界与合规)$"`
  - 项目名目录残留检查（应无输出）：
    - `find 02-资源 -mindepth 2 -maxdepth 2 -type d`
  - 档案类硬禁词检查（应无输出）：
    - `rg --files 02-资源 | rg -n "(GitHub 项目档案|项目档案|网站档案|项目风险边界档案|风险边界档案|项目风险档案|风险档案|档案|项目文档|产品文档|项目介绍|产品介绍)\\.md$"`
    - `rg -n "^title:\\s*\"?.*(GitHub 项目档案|项目档案|网站档案|项目风险边界档案|风险边界档案|项目风险档案|风险档案|档案|项目文档|产品文档|项目介绍|产品介绍)\"?$" 02-资源`
  - 标题噪音检查（应无输出）：
    - `rg --files 02-资源 | rg -n "[:：].*(•|\\||｜|✨|🐢|🚀|🎬|⭐|💜|📊|⚙|®).+\\.md$"`
    - `rg -n "^title:\\s*\"?.*(•|\\||｜|✨|🐢|🚀|🎬|⭐|💜|📊|⚙|®).*\"?$" 02-资源`

默认执行 SOP（网页归档任务）：

1) 先执行 `skills/web-full-archive.md`，拿到完整正文并清洗结构噪音。
2) 先把待处理文本写入 `.tmp/`，Gemini 仅从 `.tmp/` 读取输入。
3) 判断是否有官方中文译文：
   - 有：先做“导航噪音判定”；仅当正文不含站点导航模板残留时才可直接使用官方中文，否则按“无官方中文有效正文”处理并调用 `translate`。
   - 无：调用 `scripts/gemini_task.py translate` 生成中文初稿。
4) 若正文版式错乱（断行碎、列表粘连、段落不可读），先调用 `scripts/gemini_task.py subtitles_blog` 生成排版优化稿（输入/输出均在 `.tmp/`）。
5) 在可读稿上调用 `scripts/gemini_task.py review` 做术语一致性和逻辑问题检查。
6) 调用 `scripts/gemini_task.py summarize` 生成摘要，并写入最终文档的 `## 摘要` 段。
7) 助手必须通读并做必要整理最终稿，再落盘到 `01-博客/{品牌或作者姓名}/{中文标题}.md`。
8) 最终稿必须满足：
   - 仅保留对读者有用的信息（frontmatter `title` 与元信息、摘要、正文）。
   - 不包含任何过程日志、抓取策略、占位提示语。

9) 新增场景：图书记录（书目信息与读书笔记）

目标是产出一条可复用的“图书条目”，用于后续检索、选读与做笔记；不是复制图书内容。

- 产出目录：`03-图书/{作者}/`
- 单文件交付：`{书名}-{版本或译本}.md`（尽量短；无版本可只用书名）
- 结构（推荐，按需增删，空内容就不写小节）：
  - `---` + `title: 书名：版本/译本` + `---`
  - frontmatter 元信息（对象、来源、记录日期）
  - `## 基本信息`（作者、译者/编者、版本/译本等，只写确定值）
  - `## 内容概览`（可选：只写你掌握的可靠概览；无材料就不写）
  - `## 阅读建议`（可选：阅读顺序、前置知识、搭配资料）
  - `## 笔记`（可选：自己的读书笔记，不要写占位）
  - `## 链接`（可选：出版社/ISBN/作者页等，必须可验证）
- 边界：
  - 不写 `未识别`、`如识别到` 之类占位。
  - 不写括号式说明型标题/字段名（如“作者（如识别到）”）。
  - 未经允许不要搬运受版权保护的大段正文；只记录书目信息与自己的笔记/摘录（摘录需少量且注明来源页码，若你掌握）。

10) 新增场景：文档关联与索引（关系图谱）

目标是让文档通过“文档链接”形成关系图谱，而不是通过 `#tag` 或“标签索引”单页做聚合。

- 产出目录：默认 `00-元语/`（放 wiki 词条、主题词条、关系图谱与规范）；若某概念在其他目录已有稳定且可复用的独立文档，可直接复用该文档，不强制迁移到 `00-元语/`
- 适用范围：`00-元语/`、`01-博客/`、`02-资源/`、`03-图书/` 中“本次新增或修改”的文档
- 关联规则（强制）：
  - 使用 `## 关联主题`（历史文档若暂未迁移，可临时沿用 `## 标签`）。
  - `## 相关文档` 仅在存在“高置信度强关联”时添加；允许没有该小节（宁缺毋滥）。
  - `## 相关文档` 条目数量按事实决定，可为 0 条或多条；不设机械上限。
  - 每新增 1 条 `## 相关文档`，都必须在文档里显式写出“关联理由 + 一句话说明”；若只能解释为“都差不多”，则不应添加。
  - 推荐格式：`- [[路径|标题]]；关联理由：理由类型；说明：一句话`。
  - 理由类型建议：`引用`、`解说`、`延伸思考`、`观点一致`、`观点相悖`、`同一事件`、`上下游`、`版本演进`。
  - `## 相关文档` 禁止链接不存在的文档路径；链接格式：`- [[01-博客/...|标题]]`、`- [[02-资源/...|标题]]`、`- [[03-图书/...|标题]]`。
  - 每行一个主题链接；默认格式：`- [[00-元语/主题文档名]]`。
  - 若概念文档不在 `00-元语/`，允许直接链接其实际路径（例如 `- [[02-资源/某类别/某概念页]]`）。
  - 元语（主题词条）必须是“名词或概念”，且应有较高共识（绝大多数读者可形成近似理解）；禁止把一次性任务词、流程词、状态词当作元语。
  - `Agent` 与 `agents` 必须合并为同一元语：统一使用 `[[00-元语/Agent]]`。
  - 禁止把 `agents` 作为独立元语词条（如 `[[00-元语/agents]]` 或 `00-元语/agents.md`）。
  - 文中出现英文复数“agents”属于自然语言表达，不等于元语命名；关联主题仍必须回写到 `Agent`。
  - `memory` 与 `memo` 必须合并为同一元语：统一使用 `[[00-元语/memory]]`。
  - 禁止把 `memo` 作为独立元语词条（如 `[[00-元语/memo]]` 或 `00-元语/memo.md`）。
  - 文中出现“memo”可作为自然语言表达，但关联主题必须回写到 `memory`。
  - 禁止使用以下泛化元语：`article`、`resource`、`translation`、`open-source`、`rist`、`blog`。
  - 以上禁用元语必须替换为更具体、可复用的概念词（例如 `github`、`learning-resource`、`workflow`、`tool` 等）。
  - `tool`、`workflow` 仅可作为兜底元语；若文档标题或正文已出现清晰领域概念（如 `ocr`、`tts`、`protocol`、`cli`、`virtual-file-system`），必须至少补 1 个对应的具体元语。
  - 已存在的核心词条可直接复用（如 `[[00-元语/AI]]`、`[[00-元语/Agent]]`）。
  - 每个主题必须指向一个独立文档（而不是锚点或临时说明）。
  - 在 `00-元语/` 词条内，`## 相关词条` 与 `## 关联主题` 中的 `[[00-元语/...]]` 目标必须已存在；禁止悬空链接。
  - 若使用 Gemini 扩写词条，必须先提供“可选词条白名单”，限制模型仅能引用已存在词条。
  - 严禁保留或新增“标签索引”汇总单页（例如 `00-元语/标签索引.md`）。
  - 严禁使用 `- #tag` 语法作为最终交付。
- 流程规则（强制）：
  - 禁止用脚本批量处理关联主题。
  - 禁止用脚本批量新增或修改 `## 相关文档`。
  - 允许把“所有文档”一次性纳入待处理范围，再做批量并发调度任务（如 10 并发分片）加速处理。
  - 但每个任务内部必须逐篇人工判定：读完一篇就回写这一篇，禁止同一任务内机械批量回填。
  - 必须通读当前文档后，手动添加或修正该文档的关联主题。
  - 元语补全顺序固定为“先对照 `00-元语/` 现有词条补齐缺漏 -> 现有词条无法覆盖且为高共识概念时再新增元语 -> 立刻回写当前文档”。
  - 关系图谱主入口保持在 `00-元语/关系图谱.md`，词条使用 wiki 链接互相关联。
- 发布前自检（必做）：
  - 关联小节检查：`rg -n "^## 关联主题$|^## 标签$" 00-元语 01-博客 02-资源 03-图书`
  - 旧语法残留检查（命中即修复）：`rg -n "^- #[a-z0-9-]{2,32}$" 00-元语 01-博客 02-资源 03-图书`
  - 前缀残留检查（命中即修复）：`rg -n "\\[\\[00-元语/tag-" 00-元语 01-博客 02-资源 03-图书`
  - 元语链接有效性检查（应无结果）：`comm -23 <(rg --no-filename -o "\\[\\[00-元语/[^\\]]+\\]\\]" 00-元语 | cut -d/ -f2 | sed 's/\]\]$//' | sort -u) <(find 00-元语 -maxdepth 1 -type f -name '*.md' -printf '%f\n' | sed 's/\.md$//' | sort -u)`
  - 禁止索引页检查（应无结果）：`rg -n "^# 标签索引$|\\[\\[标签索引\\]\\]|00-元语/标签索引\\.md" 00-元语 01-博客 02-资源 03-图书`
  - 元语命名风险检查（命中需人工复核）：`rg -n "^title:\\s*\"?.*(流程|步骤|脚本|临时|待办|todo|索引|标签)\"?$" 00-元语`
  - 非默认路径关系检查（命中需确认确有必要）：`rg -n "^- \\[\\[(01-博客|02-资源|03-图书)/" 00-元语 01-博客 02-资源 03-图书`
  - 禁用元语检查（应无结果）：`rg -n "\\[\\[00-元语/(article|resource|translation|open-source|rist|blog)\\]\\]" 00-元语 01-博客 02-资源 03-图书`
  - Agent 合并检查（链接与标题，应无结果）：`rg -n "\\[\\[00-元语/agents\\]\\]|^title:\\s*\"?(agents|Agents)\"?$" 00-元语 01-博客 02-资源 03-图书`
  - Agent 合并检查（词条文件，应无结果）：`find 00-元语 -maxdepth 1 -type f -iname 'agents.md'`
  - memory 合并检查（链接与标题，应无结果）：`rg -n "\\[\\[00-元语/memo\\]\\]|^title:\\s*\"?(memo|Memo)\"?$" 00-元语 01-博客 02-资源 03-图书`
  - memory 合并检查（词条文件，应无结果）：`find 00-元语 -maxdepth 1 -type f -iname 'memo.md'`
  - 泛词兜底检查（命中需人工补具体元语）：`rg -nUPz "(?s)^## (关联主题|标签)\\n(?:- \\[\\[00-元语/(AI|Agent|tool|workflow|github|learning-resource)\\]\\]\\n){2,8}(?=\\n## |\\z)" 01-博客 02-资源 03-图书`
  - 相关文档小节分布（用于抽检）：`rg -n "^## 相关文档$" 00-元语 01-博客 02-资源 03-图书`
  - 相关文档理由缺失检查（命中即修复）：`rg -nP "^- \\[\\[.*\\]\\](?!.*关联理由：)" 00-元语 01-博客 02-资源 03-图书`
  - 相关文档理由类型检查（命中即复核）：`rg -nP "关联理由：(?!引用|解说|延伸思考|观点一致|观点相悖|同一事件|上下游|版本演进)" 00-元语 01-博客 02-资源 03-图书`
  - 机械化痕迹检查（命中即修复）：`rg -n "自动生成|批量生成|按标签关联|按元语数量关联|按关键词关联|脚本生成关联" 00-元语 01-博客 02-资源 03-图书`
  - 禁止脚本声明一致性（规范文件内应包含该约束）：`rg -n "禁止用脚本批量处理关联主题|允许把“所有文档”一次性纳入待处理范围|每个任务内部必须逐篇人工判定|先对照 00-元语/ 现有词条|若现有词条无法覆盖且存在高共识稳定概念|关联理由：理由类型" AGENTS.md skills/tag-index-wiki.md skills/文档关联性.md`

11) 新增场景：发现新内容（候选分级与归档优先级）

目标是把“自动发现新内容”结果沉淀为可复核的候选池、评分清单与归档队列，而不是仅凭热度做决定。

- 输入与输出：
  - 发现脚本：`scripts/discover_ai_content.py`
  - 发现输出：`.tmp/discovery-ai-webwide-*.json`、`.tmp/discovery-ai-webwide-*.md`、`.tmp/discovery-ai-webwide-*.txt`
  - 评审输出：`.tmp/discovery-*.review.md`（逐条评分）与 `.tmp/discovery-*.top10.md`（归档优先级）
  - 发现流程文件禁止直接写入 `01-博客/`、`02-资源/`、`03-图书/`
- 发现阶段规则（强制）：
  - 默认运行：`python3 scripts/discover_ai_content.py --days 7 --limit 1000 --show-top 20`
  - 来源分层：优先官方/一手源（公司 blog、知名从业者 X/blog），再补广域可复核源（Google News、HN、GitHub）
  - 微信来源仅允许本地可复核种子（`01-博客/微信公众平台/*.md`），禁止把验证码页当正文
  - 终端必须出现 `=== Discovery Summary ===`，并展示 `total_selected`、`family_counts`、`collection_counts`、`top_sources`、`outputs`
  - 发现输出必须保留关键字段：`returned_count`、`family_counts`、`collection_counts`、`source_counts`
- 五档标准（强制）：
  - `高价值`：85-100
  - `有价值`：70-84
  - `普通价值`：50-69
  - `低价值`：30-49
  - `垃圾`：0-29 或命中一票否决
- 一票否决（命中即垃圾）：
  - 与 AI/技术主题基本无关
  - 无法定位原始来源的纯转载/聚合摘要
  - 标题党且几乎无信息增量
  - 页面不可读且无法获取正文
  - 含高风险可操作细节且无法安全整理
- 每条记录必须包含：
  - `评分`
  - `等级`
  - `处理建议`（仅限 `归档`、`观察`、`丢弃`）
  - `链接`
- 入口方案：`skills/new-content-discovery.md`
- 发布前自检（必做）：
  - `rg -n "discover_ai_content\\.py|Discovery Summary|family_counts|collection_counts|top_sources|outputs" AGENTS.md skills/new-content-discovery.md scripts/discover_ai_content.py`
  - `rg -n "\"returned_count\"|\"family_counts\"|\"collection_counts\"|\"source_counts\"" .tmp/discovery-ai-webwide-*.json`
  - `rg -n "^- 评分：([0-9]|[1-9][0-9]|100)$" .tmp/discovery-*.review.md`
  - `rg -n "^- 等级：(高价值|有价值|普通价值|低价值|垃圾)$" .tmp/discovery-*.review.md`
  - `rg -n "^- 处理建议：(归档|观察|丢弃)$" .tmp/discovery-*.review.md`
  - `rg -n "完成验证后即可继续访问|wappoc_appmsgcaptcha|^# 环境异常$" .tmp/discovery-*.review.md`
  - `rg -n "新内容发现（候选分级与归档优先级）|skills/new-content-discovery\\.md|scripts/discover_ai_content\\.py|高价值：85-100|处理建议（仅限 .*归档.*观察.*丢弃.*）" AGENTS.md skills/new-content-discovery.md`

12) 新增场景：GitHub 仓库文档入博客（价值筛选与归档）

目标是从 GitHub 仓库文档中筛选“可复用、可验证、有信息增量”的内容，整理为博客条目；不是把整个仓库机械搬运进 `01-博客/`。

- 入口方案：`skills/github-repo-blog-archive.md`
- 适用对象：
  - 仓库中的 `README`、`docs/`、`guide`、`tutorial`、`architecture`、`best practices` 等知识型文档
  - 与 Claude/AI 开发实践直接相关的可迁移经验
- 默认排除（除非有明显跨项目复用价值）：
  - `.github/ISSUE_TEMPLATE`、PR 模板、`CODEOWNERS`、`SECURITY`、`LICENSE`、纯贡献流程文档
  - 自动生成清单、纯数据文件、仅面向仓库维护的内部流程文档
- 价值筛选（强制）：

  - 每篇候选必须写入 `.tmp/github-repo-*.review.md`，并包含：`评分`、`等级`、`处理建议`、`来源路径/链接`
  - 等级沿用五档：`高价值`（85-100）/`有价值`（70-84）/`普通价值`（50-69）/`低价值`（30-49）/`垃圾`（0-29）
  - 单仓单次归档建议上限 3 篇，避免“低价值批量入库”
  - 若输入是批量 `owner/repo,score` 并行记录任务，除 `.tmp/github-repo-*.review.md` 外，必须同步落盘总表到 `02-资源/学习资源与知识库/GitHub 并行仓库清单：归档候选知识库.md`
  - 总表必须覆盖“当前批次 + 尚未入总表的历史并行批次”，避免只留在 `.tmp/`
  - 当用户显式要求“全部归档”时，相关批次的 `处理建议` 只允许 `归档`，禁止输出 `观察`、`丢弃`
- 归档流程（强制）：
  - 先把源文档复制到 `.tmp/`，再调用 Gemini（禁止直接读取最终目录作为输入）
  - `translate`（若无官方中文）→ `review` → `summarize`，Gemini 输出只写 `.tmp/`
  - 助手通读后再落盘到 `01-博客/{品牌或作者姓名}/{中文标题}.md`
  - 最终文档仍必须满足：`---` + `title: 标题` + `---` + 元信息字段 → `## 摘要` → `## 正文`
  - 最终文档中的脚本/Notebook 只能以纯文本出现；禁止写成 Markdown 可点击链接（如 `[](...ipynb)`、`[](...py)`）
- 发布前自检（必做）：
  - 候选评审字段完整性：
    - `rg -n "^- 评分：([0-9]|[1-9][0-9]|100)$" .tmp/github-repo-*.review.md`
    - `rg -n "^- 等级：(高价值|有价值|普通价值|低价值|垃圾)$" .tmp/github-repo-*.review.md`
    - `rg -n "^- 处理建议：(归档|观察|丢弃)$" .tmp/github-repo-*.review.md`
  - 并行总表落盘检查：
    - `test -f '02-资源/学习资源与知识库/GitHub 并行仓库清单：归档候选知识库.md'`
    - `rg -n "^[0-9]+\\. .+\\| 原始热度：[0-9]+ \\| 评分：[0-9]+ \\| 等级：(高价值|有价值|普通价值|低价值|垃圾) \\| 处理建议：归档 \\| 链接：https://github\\.com/.+$" '02-资源/学习资源与知识库/GitHub 并行仓库清单：归档候选知识库.md'`
    - `rg -n "处理建议：观察|处理建议：丢弃" '02-资源/学习资源与知识库/GitHub 并行仓库清单：归档候选知识库.md'`
  - 规则落地一致性：
    - `rg -n "GitHub 仓库文档入博客（价值筛选与归档）|单仓单次归档建议上限 3 篇|owner/repo,score|全部归档|GitHub 并行仓库清单：归档候选知识库|skills/github-repo-blog-archive\\.md|skills/site-project-profile\\.md|默认排除（除非有明显跨项目复用价值）" AGENTS.md skills/github-repo-blog-archive.md skills/site-project-profile.md`
  - 脚本/Notebook 链接检查：
    - `rg -nP "\\[[^\\]]+\\]\\((?:https?://[^)\\s]+/[^)\\s]+\\.(?:ipynb|py|sh|js|ts|ps1)(?:[?#/][^)]*)?|(?:(?!https?://)[^)]*/[^)/?#]+\\.(?:ipynb|py|sh|js|ts|ps1)(?:[?#/][^)]*)?)|[^)]*/scripts/[^)]*)\\)" 00-元语 01-博客 02-资源 03-图书 skills`

13) 新增场景：微信公众号账号级更新（免费探测优先，按需付费补链）

目标是把“最新是否有新增”与“是否需要付费补链”拆开：先免费探测并本地去重，只在确认有新增时才调用付费接口拿文章链接。

- 适用对象：
  - 一个公众号已完成历史入库后的周期更新
  - 首次全量之后的低成本巡检与补链
- 脚本入口：
  - 首次全量（付费，仅在初始化时使用）：`scripts/wxrank_wechat_full_sync.py`
  - 免费最新探测：`scripts/newrank_latest_probe.py`
  - 增量总控（免费优先 + 条件付费 + 转发检索）：`scripts/wechat_update_from_wxrank.py`
- 流程边界（强制）：
  - 第一步必须调用 Newrank 免费接口 `https://gw.newrank.cn/api/wechat/xdnphb/detail/v1/rank/article/lists`，表单参数 `account=Rockhazix`（或目标账号）。
  - 只有当免费探测结果显示“存在本地缺失的新条目”时，才允许传 `--allow-paid --key` 调用付费接口 `http://data.wxrank.com/weixin/getps` 补齐 `mp.weixin.qq.com` 链接。
  - 若免费探测无新增，禁止调用付费接口。
  - 所有输出必须位于 `.tmp/`；禁止把账号级同步结果直接写入 `01-博客/`。
  - `n-token` 与 `cookie` 仅允许通过命令参数或环境变量（`NEWRANK_N_TOKEN`、`NEWRANK_COOKIE`）传入，禁止写入文档正文。
- 输出约定（强制）：
  - 免费探测：`free.raw.json`、`free.items.json`、`free.new.items.json`
  - 条件付费补链：`paid.pages.raw.json`、`paid.items.json`、`paid.new.items.json`
  - 最终候选：`new.items.final.json`、`new.items.final.tsv`、`new.items.final.urls.txt`
  - 可选转发检索：`repost.candidates.json`、`repost.candidates.tsv`
- 推荐命令：
  - `python3 scripts/newrank_latest_probe.py --account Rockhazix --output-root .tmp/newrank-latest`
  - `python3 scripts/wechat_update_from_wxrank.py --account Rockhazix --output-root .tmp/wechat-update`
  - `python3 scripts/wechat_update_from_wxrank.py --account Rockhazix --allow-paid --key "$WXRANK_KEY" --wxid gh_94dba26f8ca0 --output-root .tmp/wechat-update`
- 发布前自检（必做）：
  - `rg -n "免费探测优先|newrank_latest_probe\\.py|wechat_update_from_wxrank\\.py|wxrank_wechat_full_sync\\.py|--allow-paid|NEWRANK_N_TOKEN|NEWRANK_COOKIE|gw\\.newrank\\.cn/api/wechat/xdnphb/detail/v1/rank/article/lists|account=Rockhazix" AGENTS.md skills/web-full-archive.md scripts/newrank_latest_probe.py scripts/wechat_update_from_wxrank.py`

## 关联主题

- [[00-元语/workflow]]
- [[00-元语/wiki]]
- [[00-元语/skills]]
- [[00-元语/knowledge-graph]]
