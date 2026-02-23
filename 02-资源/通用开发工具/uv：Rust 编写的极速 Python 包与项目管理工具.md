---
title: "uv：Rust 编写的极速 Python 包与项目管理工具"

对象: "GitHub 开源仓库与官方文档"
仓库: "astral-sh/uv"
来源:
  - "https://github.com/astral-sh/uv"
  - "https://api.github.com/repos/astral-sh/uv"
  - "https://raw.githubusercontent.com/astral-sh/uv/main/README.md"
  - "https://docs.astral.sh/uv"
  - "https://pypi.org/project/uv/"
开源协议: "Apache-2.0"
默认分支: "main"
主要语言: "Rust"
发布日期: "2023-10-02"
最近推送: "2026-02-20"
统计时间: "2026-02-22"
仓库数据（统计时）: "Stars 79,592；Forks 2,582；Subscribers 152；Open Issues 2,688"
---

## 摘要

**一句话总结**
uv 是一个由 Rust 编写的极速、跨平台 Python 一体化包与项目管理器，目标是替代 pip、poetry、pyenv 等常见工具链，简化工作流并提升性能。

**关键点**
- 底层技术与协议：使用 Rust 开发，采用 Apache-2.0 开源协议。
- 一体化定位：覆盖 `pip`、`pip-tools`、`pipx`、`poetry`、`pyenv`、`twine`、`virtualenv` 等常见工具能力。
- 性能特征：README 将其描述为相对 `pip` 可达 10-100x 的速度提升。
- 项目与版本管理：支持依赖管理、lockfile、workspaces，以及多 Python 版本的安装与 pin。
- 脚本与工具执行：支持单文件脚本的 inline dependency metadata，以及 `uvx` / `uv tool` 的 CLI 工具执行。
- 兼容迁移：提供 `uv pip` 接口，便于在既有 pip 工作流中逐步迁移。
- 缓存与平台：使用 global cache 做依赖去重，支持 macOS、Linux、Windows。

## 功能与定位

uv 的定位是 Python 生态中的统一 package and project manager。它将依赖管理、项目管理、工具执行与 Python 版本管理收敛到同一 CLI，降低多工具链协作的复杂度。

## 典型使用场景

- 在团队项目中管理依赖、生成 lockfile，并使用 workspaces 组织多包仓库。
- 在 CI 或本地环境中替代传统 pip 流程，提升依赖解析与安装速度。
- 运行单文件脚本并声明 inline dependencies，减少脚本运行前的手工准备。
- 使用 `uvx` 或 `uv tool` 安装与运行 Python CLI 工具。
- 在同一机器上安装并切换多个 Python 版本，服务不同项目环境。

## 核心功能

- 项目管理：`uv init`、`uv add`、`uv lock`、`uv sync` 等完整项目工作流。
- 脚本支持：`uv run` 与脚本依赖声明能力。
- 工具管理：`uvx` 与 `uv tool` 的即时运行和安装机制。
- 版本管理：`uv python install`、`uv python pin`、`uv venv` 等环境能力。
- pip 兼容层：`uv pip` 兼容常见 pip / pip-tools / virtualenv 习惯。

## 特色与差异点

- 统一工具链：将“包管理 + 项目管理 + 版本管理 + 工具运行”合并为单工具。
- 以性能为核心卖点：官方 README 明确强调 10-100x 的安装和解析速度优势。
- 迁移成本较低：保留 `uv pip` 接口，便于老项目逐步替换。
- 工程化能力完整：lockfile、workspaces、global cache 等能力覆盖从个人到团队场景。

## 使用方式概览

- 安装方式：可通过官方安装脚本，或通过 `pip` / `pipx` 安装。
- 项目流：`uv init` -> `uv add` -> `uv lock` -> `uv sync`。
- 工具流：用 `uvx` 直接运行工具，或用 `uv tool install` 持久安装。
- Python 版本流：`uv python install` + `uv python pin` + `uv venv`。

## 限制与注意事项

- 仓库热度与 issue 数属于动态数据，引用时需附统计时间。
- 性能收益与项目规模、缓存状态、网络环境有关，具体结果应结合自身场景验证。
- 从既有工具链迁移时，建议先在子项目或 CI 分支逐步替换，避免一次性切换带来的流程波动。

## 链接

- 仓库主页：https://github.com/astral-sh/uv
- GitHub API：https://api.github.com/repos/astral-sh/uv
- README：https://raw.githubusercontent.com/astral-sh/uv/main/README.md
- 官方文档：https://docs.astral.sh/uv
- PyPI：https://pypi.org/project/uv/
- Benchmarks：https://github.com/astral-sh/uv/blob/main/BENCHMARKS.md

## 关联主题

- [[00-元语/tool]]
- [[00-元语/cli]]
- [[00-元语/github]]
- [[00-元语/terminal]]
- [[00-元语/CI]]
- [[00-元语/workflow]]
- [[00-元语/benchmark]]
- [[00-元语/软件工程]]
