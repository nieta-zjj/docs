---
title: "Claude Skills Notebook 实战进阶"

发布日期: "2026-02-17"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/tree/main/skills/notebooks"
覆盖范围:
  - "`skills/notebooks/01_skills_introduction.ipynb`"
  - "`skills/notebooks/02_skills_financial_applications.ipynb`"
  - "`skills/notebooks/03_skills_custom_development.ipynb`"
---

## 摘要

**1) 一句话摘要**
本文档基于 Anthropic 官方 Cookbook，系统介绍了 Claude Skills 从基础接入、金融场景应用到自定义扩展的三层实战进阶路径及开发建议。

**2) 核心要点**
*   **文档来源**：发布于 2026-02-17，内容源自 `anthropics/claude-cookbooks` 仓库，覆盖基础介绍、金融应用和自定义开发三个核心 Notebook。
*   **三层演进路径**：将 Skills 的使用拆分为基础接入（对应试点）、业务化应用（对应上线）和自定义扩展（对应平台化）。
*   **基础接入**：主要涉及加载 Skills、配置容器（container）以及调用工具。
*   **金融场景**：通过结合 Skills 与代码执行（code execution）能力来处理报表类任务。
*   **自定义开发**：支持定义可复用的能力单元，并对其进行版本管理。
*   **API 配置细节**：示例代码中使用了 `max_tokens=4096`，并显式启用了三个 Beta 功能：`code-execution-2025-08-25`、`files-api-2025-04-14` 和 `skills-2025-10-02`。
*   **设计原则**：Skills 的设计应优先考虑输入输出的稳定性，其次再考虑功能的丰富度。
*   **架构建议**：建议将业务技能与通用技能分层维护，以降低系统耦合。

**3) 风险与缺口**
*   **版本升级风险**：自定义 Skills 在升级时存在破坏旧任务的风险，必须配备最小回归测试以避免此问题。

## 正文

该分组把 Skills 的使用方式拆成三层：基础接入、业务化应用、自定义扩展。对于已经在用 Claude API 的团队，这三层对应了“试点 -> 上线 -> 平台化”的常见路径。

### 能力主线
- 基础接入：加载 Skills、配置容器、调用工具。
- 金融场景：通过 Skills + code execution 处理报表类任务。
- 自定义开发：定义可复用能力单元并进行版本管理。

### 示例代码
```python
def create_skills_message(client, prompt, skills, prefix="", show_token_usage=True):
    response = client.beta.messages.create(
        model=MODEL,
        max_tokens=4096,
        container={"skills": skills},
        tools=[{"type": "code_execution_20250825", "name": "code_execution"}],
        messages=[{"role": "user", "content": prompt}],
        betas=[
            "code-execution-2025-08-25",
            "files-api-2025-04-14",
            "skills-2025-10-02",
        ],
    )
    return response
```

### 使用建议
- Skills 设计优先考虑输入输出稳定性，再考虑功能丰富度。
- 业务技能与通用技能分层维护，降低耦合。
- 自定义 Skills 要有最小回归测试，避免升级破坏旧任务。

## 相关文档

- [[01-博客/Anthropic/Claude Skills Cookbook 使用指南|Claude Skills Cookbook 使用指南]]；关联理由：解说；说明：该文提供 Skills 的完整概念与能力边界，是本篇 Notebook 实战内容的基础说明。
- [[01-博客/Anthropic/Claude Skills Cookbook 开发与排障手册|Claude Skills Cookbook 开发与排障手册]]；关联理由：上下游；说明：本篇强调实战进阶，手册补充了同一能力在真实开发中的排障与验证流程。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/skills]]
- [[00-元语/sdk]]
- [[00-元语/evals]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
