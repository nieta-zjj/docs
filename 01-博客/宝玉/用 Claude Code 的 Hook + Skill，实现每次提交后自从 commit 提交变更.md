---
title: "用 Claude Code 的 Hook + Skill，实现每次提交后自从 commit 提交变更"

来源: "https://baoyu.io/blog/2026-02-13/claude-code-auto-commit"
发布日期: "2026-02-18"
作者: "宝玉"
---

## 摘要

**一句话总结**
通过结合 Claude Code 的 Hook 拦截器与 Commit Skill 技能模块，实现了写作项目 Git 变更的自动分组与规范化提交，解决了手动管理时易遗漏提交的问题。

**核心要点**
*   **核心痛点**：使用 Git 管理写作内容时常忘记提交，导致大量变更堆积，失去版本追踪的意义。
*   **解决方案**：利用 Claude Code 的自动化工作流，在修改文件后自动完成 Git 提交。
*   **Hook 拦截机制**：在 `.claude/settings.local.json` 中配置 Stop Hook，在 Claude Code 任务准备结束时自动触发脚本（`.claude/hooks/auto-commit.sh`）。
*   **未提交检查**：Hook 脚本会检查工作区是否有新文件、修改或删除，若有则阻止任务结束，并指令 Claude Code 去执行提交。
*   **防死循环设计**：由于提交动作本身也会触发“任务结束”，脚本通过 `stop_hook_active` 标志跳过二次触发，避免无限循环。
*   **Skill 执行机制**：在 `.claude/skills/commit/SKILL.md` 中定义了 `/commit` 技能模块，作为 Claude Code 的具体操作手册。
*   **按主题分组**：Skill 规则要求先分析变更文件路径，按主题（如文章、配置、代码）分组进行多次提交，不混杂在一起。
*   **规范化信息**：自动生成固定格式的中文 commit message，例如文章类使用“添加/润色/更新 + 主题”，代码类使用“优化/修复 + 功能”。
*   **精准添加文件**：明确指定需要提交的具体文件，禁止使用 `git add .` 这种粗暴操作，以排除临时文件和备份文件。

## 正文

我用 Git 管理所有写作内容，文章、素材、提纲、草稿，全在仓库里。问题是我经常忘记提交。写完一篇文章，润色完，发布了，然后就去忙别的了。过几天一看 git status ，十几个文件的变更堆在那里，完全不记得哪次改了什么。Git 本来是用来追踪每一步修改的，结果变成了一个大杂烩的快照工具。

现在我用 Claude Code 跑写作流程，从素材分析到成稿发布基本都交给它。既然每次任务它都在改文件，能不能让它改完就自己提交？

两个机制配合就解决了。

## Hook：任务结束时的拦截器

Claude Code 支持 Hook 机制 ，在特定事件（会话开始、工具调用前后、任务结束等）发生时自动执行脚本。思路和 Git Hook 类似，但挂在 Claude Code 的生命周期上。

我在项目的 .claude/settings.local.json 里配了一个 Stop Hook ，每次 Claude Code 准备结束任务时触发：

脚本做的事很简单：检查工作区有没有未提交的变更（新文件、修改、删除），如果有，就阻止 Claude Code 停下来，告诉它“你还有活没干完，去提交”。

核心逻辑就这几行：

还有个细节：提交本身也会触发“任务结束”，不处理就无限循环。脚本用 stop_hook_active 标志跳过二次触发。

## Commit Skill：让提交有意义

Hook 只管拦截，具体怎么提交靠 Commit Skill 。

Skill 是 Claude Code 的技能模块 ，放在 .claude/skills/ 目录下，用 SKILL.md 定义工作流程。 name 字段自动变成 /slash-command ，手动或自动都能触发。相当于一份操作手册，告诉 Claude Code 遇到特定任务该怎么做。

我的 /commit 技能定义了这些规则：

- 先分析变更文件的路径，判断改的是文章、技能配置还是代码

- 按主题分组提交 ，不把所有东西塞进一个 commit。比如改了两篇文章，就分两次提交

- 自动生成 中文 commit message ，格式固定：文章用“添加/润色/更新 + 主题”，代码用“优化/修复 + 功能”

- 明确指定提交文件 ，避免 git add . 这种粗暴操作，排除临时文件和备份文件

这样 git log 里看到的是：

每条都说得清楚这次改了什么，不是那种“update files”或者“misc changes”的垃圾信息。

两个机制的配合：Hook 当守门员，保证没有变更被遗漏；Skill 当执行者，保证每次提交都有意义。 我再也不用惦记提交这件事了。

## 附录：完整配置

### Hook 脚本

文件路径： .claude/hooks/auto-commit.sh

### Commit Skill

文件路径： .claude/skills/commit/SKILL.md

### Hook 配置

文件路径： .claude/settings.local.json （相关部分）

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/skills]]
- [[00-元语/cli]]
- [[00-元语/workflow]]
- [[00-元语/软件工程]]
