---
name: new-content-discovery
description: 先批量发现近 7 天 AI 新内容，再做人工复核与五档分级，输出可复核的归档优先级列表。
---

# New Content Discovery

## 目标

把“自动发现新内容”变成可执行闭环：

- 先拿到近 7 天、去重后的候选池（默认 1000 条）
- 再给出可复核评分与处理建议（归档/观察/丢弃）

重点是“可复核”而非“拍脑袋”：每条必须有来源、分数、等级、简要理由和处理建议。

## 输入与输出位置（强制）

- 发现脚本：`scripts/discover_ai_content.py`
- 发现输出：`.tmp/discovery-ai-webwide-*.json`、`.tmp/discovery-ai-webwide-*.md`、`.tmp/discovery-ai-webwide-*.txt`
- 评审输出：`.tmp/discovery-*.review.md`、`.tmp/discovery-*.top10.md`
- 禁止把发现过程文件直接写入 `01-博客/`、`02-资源/`、`03-图书/`
- 最终归档时，再按内容类型进入对应流程（`web-full-archive` 或 `site-project-profile`）

## 发现阶段（强制）

### 执行命令

```bash
python3 scripts/discover_ai_content.py --days 7 --limit 1000 --show-top 20
```

### 获取策略（必须遵守）

- 第一层：官方与一手源（AI 公司 RSS/Sitemap、官方工程博客、知名从业者 X/博客）
- 第二层：可公开复核的广域源（Google News RSS、Hacker News、GitHub Search）
- 第三层：微信仅使用可复核种子（`01-博客/微信公众平台/*.md` 中已有 `mp.weixin.qq.com/s/...`）
- 不可复核或受限源（验证码页、私有链接、临时签名）只记为 `unavailable`，不伪造正文

### 终端输出规范（必须看到）

- 采集阶段进度：`[DISCOVERY] <source> collected: <count>`
- 最终摘要：`=== Discovery Summary ===`
- 结果必须显示：
  - `total_selected`
  - `family_counts`
  - `collection_counts`
  - `top_sources`
  - `outputs`（json/md/txt 路径）

### 候选池质量规则

- 默认窗口：近 7 天
- 默认目标：1000 条去重 URL（不足则如实输出不足量）
- 使用“最低配额 + 上限约束”平衡来源，避免单源淹没
- 微信来源必须通过本地种子注入，且不能把验证码文本当正文

## 五档标准（强制）

### 一票否决（命中即“垃圾”）

- 与 AI/技术主题基本无关（正文相关性明显不足）
- 纯转载或聚合摘要，无法定位原始来源
- 标题党/情绪宣泄，几乎无信息增量
- 页面不可读且无法获取正文（验证码页、死链、广告落地页）
- 含高风险可操作细节且无法在不复述细节的前提下安全收录

### 评分维度（总分 100）

- 主题相关性（0-25）
- 原创与一手性（0-25）
- 技术深度与可迁移性（0-20）
- 时效与热度（0-15）
- 可信度与可验证性（0-10）
- 归档可用性（0-5）

### 等级映射

- `高价值`：85-100
- `有价值`：70-84
- `普通价值`：50-69
- `低价值`：30-49
- `垃圾`：0-29 或命中一票否决

## 操作流程（SOP）

1) 运行发现脚本  
   - 生成近 7 天候选池：`scripts/discover_ai_content.py`。  
   - 确认终端出现 `Discovery Summary` 与输出路径。

2) 准备评审输入  
   - 以 `.tmp/discovery-ai-webwide-*.md` 或其中文翻译作为人工评审底稿。  
   - 若需翻译，输入必须先在 `.tmp/`，再调用 `scripts/gemini_task.py translate`。

3) 逐条评分  
   - 每条都写 `评分`、`等级`、`理由`、`处理建议`。  
   - 处理建议限定为：`归档`、`观察`、`丢弃`。

4) 生成统计与 Top 10  
   - 统计五档数量与占比。  
   - Top 10 优先从 `高价值` 选，必要时补 `有价值`。

5) 进入归档链路  
   - 网站/Git 项目：走 `skills/site-project-profile.md`。  
   - 文章正文：走 `skills/web-full-archive.md`。

## 评审记录模板（推荐）

```markdown
# 新内容发现评审（YYYY-MM-DD）

1. 标题
- 评分：88
- 等级：高价值
- 理由：一手发布，含可复用工程细节
- 处理建议：归档
- 链接：https://example.com
```

## 实操命令（示例）

```bash
# 1) 发现（近 7 天，1000 条，去重）
python3 scripts/discover_ai_content.py --days 7 --limit 1000 --show-top 20

# 2) 快速校验（1000/去重/7天）
python3 - <<'PY'
import json, time
p='.tmp/discovery-ai-webwide-20260222-auto-dedup1000-balanced.json'
d=json.load(open(p,'r',encoding='utf-8'))
items=d['items']
now=int(time.time()); start=now-7*86400; mx=now+86400
print('total',len(items))
print('unique_urls',len({x.get("url","") for x in items}))
print('in_window',sum(1 for x in items if start<=int(x.get("published_ts",0))<=mx))
PY

# 3) 评审字段检查
rg -n "^- 评分：([0-9]|[1-9][0-9]|100)$" .tmp/discovery-*.review.md
rg -n "^- 等级：(高价值|有价值|普通价值|低价值|垃圾)$" .tmp/discovery-*.review.md
rg -n "^- 处理建议：(归档|观察|丢弃)$" .tmp/discovery-*.review.md
```

## 发布前自检

```bash
# 发现脚本/规范一致性
rg -n "discover_ai_content\\.py|Discovery Summary|family_counts|collection_counts|top_sources|outputs" skills/new-content-discovery.md AGENTS.md scripts/discover_ai_content.py

# 发现结果关键字段
rg -n "\"returned_count\"|\"family_counts\"|\"collection_counts\"|\"source_counts\"" .tmp/discovery-ai-webwide-*.json

# 评分与建议完整性
rg -n "^- 评分：([0-9]|[1-9][0-9]|100)$" .tmp/discovery-*.review.md
rg -n "^- 等级：(高价值|有价值|普通价值|低价值|垃圾)$" .tmp/discovery-*.review.md
rg -n "^- 处理建议：(归档|观察|丢弃)$" .tmp/discovery-*.review.md

# 微信验证码残留检查
rg -n "完成验证后即可继续访问|wappoc_appmsgcaptcha|^# 环境异常$" .tmp/discovery-*.review.md
```

## 关联主题

- [[00-元语/decision-making]]
- [[00-元语/workflow]]
