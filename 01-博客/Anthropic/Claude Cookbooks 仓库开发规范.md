---
title: "Claude Cookbooks 仓库开发规范"

发布日期: "2026-02-17"
作者: "Anthropic"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/blob/main/CLAUDE.md"
译注: "原文为英文仓库文档，本稿为中文整理版。"
---

## 摘要

**1) 一句话总结**
本文档是 Claude Cookbooks 的开发与贡献指南，详细说明了环境配置、代码规范、Git 工作流、核心开发规则以及添加新示例的标准化流程。

**2) 关键要点**
*   **环境初始化**：使用 `uv` 管理依赖（`uv sync`）并安装 pre-commit 钩子，通过 `.env` 文件配置 API 密钥。
*   **代码检查与格式化**：使用 Ruff 作为格式化工具（限制行宽 100 字符，使用双引号），可通过 `make` 命令或 `uv run ruff` 执行代码检查与修复。
*   **Git 工作流**：分支命名需遵循 `<username>/<feature-description>` 格式，提交信息需采用约定式提交（Conventional Commits，如 feat, fix, docs）。
*   **依赖管理**：强制使用 `uv add` 命令添加依赖包。
*   **模型命名规范**：调用 Claude 模型时必须使用不带日期的别名（如 `claude-sonnet-4-6`）；Bedrock 模型需遵循特定格式并推荐使用 `global.` 前缀。
*   **Notebook 规范**：每个 notebook 仅聚焦单一概念，需保留运行输出，并确保自上而下执行无错误。
*   **项目结构与审查**：项目按功能模块划分目录（如 capabilities, tool_use 等），支持在 CI 中使用斜杠命令（如 `/model-check`, `/notebook-review`）进行自动化审查。
*   **贡献流程**：新增 Cookbook 需创建 notebook、更新 `registry.yaml` 和 `authors.yaml`，并在提交 PR 前通过 `make check` 质量检查。

**3) 风险/缺口**
*   **密钥泄露风险**：明确警告永远不要提交 `.env` 文件，必须通过 `os.environ.get("ANTHROPIC_API_KEY")` 获取密钥。
*   **配置损坏风险**：明确禁止直接手动编辑 `pyproject.toml` 文件来管理依赖。
*   **模型调用错误风险**：明确警告永远不要使用带日期的 Claude 模型 ID（Opus 4.6 之前的 Bedrock 旧模型除外）。

## 正文

# Claude Cookbooks

包含一系列 Jupyter notebook 和 Python 示例，用于使用 Claude API 构建应用。

## 快速开始

```bash
# 安装依赖
uv sync --all-extras

# 安装 pre-commit 钩子
uv run pre-commit install

# 设置 API 密钥
cp .env.example .env
# 编辑 .env 文件并添加你的 ANTHROPIC_API_KEY
```

## 开发命令

```bash
make format        # 使用 ruff 格式化代码
make lint          # 运行代码检查
make check         # 运行格式检查 + 代码检查
make fix           # 自动修复问题 + 格式化
make test          # 运行 pytest
```

或者直接使用 uv：

```bash
uv run ruff format .           # 格式化
uv run ruff check .            # 代码检查
uv run ruff check --fix .      # 自动修复
uv run pre-commit run --all-files
```

## 代码风格

- **行宽：** 100 个字符
- **引号：** 双引号
- **格式化工具：** Ruff

Notebook 对文件中间导入 (E402)、重新定义 (F811) 和变量命名 (N803, N806) 的规则要求较为宽松。

## Git 工作流

**分支命名：** `<username>/<feature-description>`

**提交格式（约定式提交 conventional commits）：**
```
feat(scope): add new feature
fix(scope): fix bug
docs(scope): update documentation
style: lint/format
```

## 关键规则

1. **API 密钥：** 永远不要提交 `.env` 文件。始终使用 `os.environ.get("ANTHROPIC_API_KEY")`

2. **依赖项：** 使用 `uv add <package>` 或 `uv add --dev <package>`。永远不要直接编辑 pyproject.toml。

3. **模型：** 使用当前的 Claude 模型。请查看 docs.anthropic.com 获取最新版本。
   - Sonnet: `claude-sonnet-4-6`
   - Haiku: `claude-haiku-4-5`
   - Opus: `claude-opus-4-6`
   - **永远不要使用带日期的模型 ID**（例如 `claude-sonnet-4-6-20250514`）。始终使用不带日期的别名。
   - **Bedrock 模型 ID** 遵循不同的格式。请使用文档中的基础 Bedrock 模型 ID：
     - Opus 4.6: `anthropic.claude-opus-4-6-v1`
     - Sonnet 4.5: `anthropic.claude-sonnet-4-5-20250929-v1:0`
     - Haiku 4.5: `anthropic.claude-haiku-4-5-20251001-v1:0`
     - 对于全局端点，请在前面加上 `global.`（推荐）：`global.anthropic.claude-opus-4-6-v1`
     - 注意：Opus 4.6 之前的 Bedrock 模型需要在其 Bedrock 模型 ID 中使用带日期的 ID。

4. **Notebooks：**
   - 保留 notebook 中的输出（为了演示而特意保留）
   - 每个 notebook 只包含一个概念
   - 测试 notebook，确保从上到下运行无错误

5. **质量检查：** 提交前运行 `make check`。Pre-commit 钩子会验证格式和 notebook 结构。

## 斜杠命令

以下命令可在 Claude Code 和 CI 中使用：

- `/notebook-review` - 审查 notebook 质量
- `/model-check` - 验证 Claude 模型引用
- `/link-review` - 检查已更改文件中的链接

## 项目结构

```
capabilities/      # Claude 核心能力（RAG、分类等）
skills/            # 基于高级技能的 notebook
tool_use/          # 工具使用与集成模式
multimodal/        # 视觉与图像处理
misc/              # 批处理、缓存、实用工具
third_party/       # Pinecone、Voyage、Wikipedia 集成
extended_thinking/ # 扩展推理模式
scripts/           # 验证脚本
.claude/           # Claude Code 命令与技能
```

## 添加新的 Cookbook

1. 在相应的目录中创建 notebook
2. 在 `registry.yaml` 中添加条目，包含标题 (title)、描述 (description)、路径 (path)、作者 (authors) 和分类 (categories)
3. 如果是新的贡献者，请将作者信息添加到 `authors.yaml`
4. 运行质量检查并提交 PR

## 相关文档

- [[01-博客/Anthropic/Cookbook Notebook 审核规范与评分清单|Cookbook Notebook 审核规范与评分清单]]；关联理由：解说；说明：该文给出了 notebook 审核评分细则，直接细化了本文的质量门禁与审查要求
- [[01-博客/Anthropic/Claude Cookbooks 项目总览与能力地图|Claude Cookbooks 项目总览与能力地图]]；关联理由：上下游；说明：该文给出仓库模块划分与能力入口，本文则规定这些模块的统一开发与提交流程
- [[01-博客/Anthropic/Claude Skills Cookbook 开发与排障手册|Claude Skills Cookbook 开发与排障手册]]；关联理由：上下游；说明：该文是 `skills/` 子目录的实践手册，直接落地了本文的环境、模型与质量检查规范

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/workflow]]
- [[00-元语/github]]
- [[00-元语/CI]]
- [[00-元语/code-review]]
- [[00-元语/security]]
- [[00-元语/cli]]
- [[00-元语/skills]]
- [[00-元语/软件工程]]
