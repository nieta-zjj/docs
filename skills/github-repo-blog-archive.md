---
name: github-repo-blog-archive
description: 从 GitHub 仓库中筛选高价值文档，按博客规范归档到 01-博客。
---

# GitHub Repo Blog Archive

## 目标

- 从 GitHub 仓库中筛选“有复用价值”的文档，整理成可读博客稿。
- 避免机械搬运：强调价值评估、去噪和最终人工整理。
- 保持统一交付：`01-博客/{品牌或作者姓名}/{中文标题}.md`。

## 适用范围

- 适用：`README`、`docs/`、`guide`、`tutorial`、`architecture`、`best practices`、高质量技术说明。
- 不适用：纯仓库维护材料或低信息增量内容（默认排除）：
  - `.github/ISSUE_TEMPLATE`、PR 模板、`CODEOWNERS`、`LICENSE`、纯贡献流程文档
  - 自动生成清单、数据样本、与读者使用无关的内部维护脚本说明

## 价值筛选（强制）

每篇候选先记录到 `.tmp/github-repo-*.review.md`，并包含：

- `评分`（0-100）
- `等级`（`高价值`/`有价值`/`普通价值`/`低价值`/`垃圾`）
- `处理建议`（`归档`/`观察`/`丢弃`）
- `来源路径`（仓库内路径）与 `来源链接`（GitHub URL）

建议阈值：

- 优先归档：`高价值`、`有价值`
- 暂缓：`普通价值`
- 不归档：`低价值`、`垃圾`
- 单仓单次归档建议上限 3 篇，优先“可迁移性高”的内容

## 流程（SOP）

1) 盘点候选  
   - 在仓库内列出 Markdown 文档，先做排除再评分。  
   - 记录评审结果到 `.tmp/github-repo-*.review.md`。

2) 复制输入到 `.tmp/`  
   - 只把“处理建议=归档”的文档复制到 `.tmp/`。  
   - Gemini 只允许从 `.tmp/` 读输入，且输出也只能写 `.tmp/`。

3) 生成中文稿与质量检查  
   - 若无官方中文：`translate` 生成中文初稿。  
   - 运行 `review` 做术语与逻辑检查。  
   - 运行 `summarize` 生成 `## 摘要`。

4) 人工整理并落盘  
   - 按仓库规范通读并最小必要修订（禁止为改而改）。  
   - 落盘到 `01-博客/{品牌或作者姓名}/{中文标题}.md`。  
   - 最终结构固定：`---` + `title: 标题` + `---` + 元信息字段 → `## 摘要` → `## 正文`。
   - 链接约束：禁止在最终 Markdown 中使用“指向脚本/Notebook 的可点击链接”（如 `.ipynb`、`.py`、`.sh`）；相关引用只保留为纯文本路径。

## 命名与元信息

- 文件名必须中文；`agent`、`review`、模型名等术语保持英文。
- 文件名禁止带日期时间；日期写入 frontmatter `发布日期: YYYY-MM-DD`。
- 元信息统一放在 frontmatter。
- frontmatter 至少包含：
  - `发布日期`
  - `来源仓库`
  - `原文链接`

## 实操命令（示例）

```bash
# 1) 复制候选输入
cp 01-博客/.claude-cookbooks/README.md .tmp/claude-cookbooks-readme.en.md

# 2) 翻译 + review + 摘要
python3 scripts/gemini_task.py translate --input-file .tmp/claude-cookbooks-readme.en.md -o .tmp/claude-cookbooks-readme.zh.md
python3 scripts/gemini_task.py review --input-file .tmp/claude-cookbooks-readme.zh.md -o .tmp/claude-cookbooks-readme.review.md
python3 scripts/gemini_task.py summarize --input-file .tmp/claude-cookbooks-readme.zh.md -o .tmp/claude-cookbooks-readme.summary.md
```

## 发布前自检

```bash
# 候选评审字段完整性
rg -n "^- 评分：([0-9]|[1-9][0-9]|100)$" .tmp/github-repo-*.review.md
rg -n "^- 等级：(高价值|有价值|普通价值|低价值|垃圾)$" .tmp/github-repo-*.review.md
rg -n "^- 处理建议：(归档|观察|丢弃)$" .tmp/github-repo-*.review.md

# Gemini 输入/输出路径限制
rg -nP "^\\s*(cat\\s+.*\\|\\s*)?python3\\s+scripts/gemini_task\\.py\\b.*--input-file\\s+(?!\\.tmp/)" skills AGENTS.md
rg -nP "^\\s*(cat\\s+.*\\|\\s*)?python3\\s+scripts/gemini_task\\.py\\b.*\\s(?:-o|--output)\\s+(?!\\.tmp/)" skills AGENTS.md

# 最终文档清洁检查
rg -n "正文（|站点中文链接（|（中文翻译）|（如识别到）|未识别|（提取）" 01-博客

# frontmatter title 与内置标题检查（应无输出）
rg --files-without-match -P -U '\\A---\\ntitle:\\s*(\"[^\\n]+\"|[^\\n]+)\\n---\\n' 01-博客 -g '*.md'
rg --files -0 01-博客 -g '*.md' | xargs -0 awk 'FNR==1 {in_fm=0; checked=0} !checked { if (FNR==1 && $0=="---") {in_fm=1; next} if (in_fm) { if ($0=="---") {in_fm=0; next} next } if ($0 ~ /^[[:space:]]*$/) next; if ($0 ~ /^# /) print FILENAME ":" FNR ":" $0; checked=1 }'
python3 scripts/normalize_h2_spacing.py --check 01-博客

# `## 文档信息` 残留检查（命中即修复）
rg -n "^## 文档信息$" 01-博客 -g '*.md'

# 脚本/Notebook 链接检查（命中即修复为纯文本）
rg -nP "\\[[^\\]]+\\]\\((?:https?://[^)\\s]+/[^)\\s]+\\.(?:ipynb|py|sh|js|ts|ps1)(?:[?#/][^)]*)?|(?:(?!https?://)[^)]*/[^)/?#]+\\.(?:ipynb|py|sh|js|ts|ps1)(?:[?#/][^)]*)?)|[^)]*/scripts/[^)]*)\\)" 00-元语 01-博客 02-资源 03-图书 skills
```

## 关联主题

- [[00-元语/github]]
- [[00-元语/workflow]]
