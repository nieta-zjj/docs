---
title: pyenv：Simple Python version manageme 开发工具
对象: GitHub 仓库项目
项目主页: https://github.com/pyenv/pyenv
源码仓库: https://github.com/pyenv/pyenv
许可证: MIT
来源:
  - https://github.com/pyenv/pyenv/blob/master/README.md
  - https://github.com/pyenv/pyenv/blob/master/COMMANDS.md
  - https://github.com/pyenv/pyenv/blob/master/plugins/python-build/README.md
  - https://github.com/pyenv/pyenv/blob/master/CHANGELOG.md
---

## 摘要

pyenv 是一个基于纯 Shell 编写的非侵入式 Python 版本管理工具，通过 Shims 机制拦截命令，支持在全局、用户级或项目级灵活安装和切换多个 Python 版本。

- 无 Python 依赖与非侵入式：通过在 `PATH` 前插入 shims 目录路由 `python`、`pip` 等命令。
- 层级化版本控制：按 `PYENV_VERSION`、`.python-version`、`~/.pyenv/version` 的优先级决定最终版本。
- 内置 `python-build`：支持从源码安装多个 Python 发行版，并可通过环境变量定制构建。
- 支持多版本并发激活：可配合 `tox` 等工具进行跨版本兼容性测试。

## 功能与定位

pyenv 是一个面向开发者的 Python 版本管理工具，核心目标是在不改变项目代码结构的前提下，让同一台机器稳定管理并切换多个 Python 版本。它遵循单一职责思路，专注版本选择与命令分发，不把虚拟环境管理作为核心职责。

## 典型使用场景

- 同机维护多个项目时，为每个项目绑定独立 Python 版本并自动切换。
- 在本地或 CI 场景进行跨 Python 版本兼容性验证。
- 需要从源码安装特定版本或特定构建参数的 Python。
- 同时使用 CPython 与其他发行版（如 PyPy、Miniconda）进行开发或验证。

## 核心功能

- 安装与卸载：通过 `pyenv install` 和 `pyenv uninstall` 管理本机 Python 版本。
- 多级版本选择：支持 Shell 级、目录级、全局级版本设置。
- Shims 路由机制：统一拦截 `python`、`pip` 等命令并路由到当前选定版本。
- 多版本并发可见：可同时激活多个版本并按顺序查找可执行文件。
- 插件扩展：支持通过插件机制扩展能力，`python-build` 为内置关键插件。

## 特色与差异点

- 纯 Shell 实现，不依赖 Python 自身即可启动与运行。
- 非侵入式：主要通过 `PATH` 与 shims 工作，对现有项目结构影响较小。
- 版本选择规则清晰，可定位命令来自哪个真实解释器路径。
- 提供从源码构建与构建参数定制能力，便于处理兼容性或性能需求。

## 使用方式概览

- 安装版本：`pyenv install <version>`，可用前缀解析到最新补丁版本。
- 查看可安装版本：`pyenv install -l`。
- 设置全局版本：`pyenv global <version>`。
- 设置目录版本：`pyenv local <version>`（写入 `.python-version`）。
- 设置当前 Shell 版本：`pyenv shell <version>`。
- 查看当前与已安装版本：`pyenv version`、`pyenv versions`。

## 限制与注意事项

- 大多数版本是源码安装，需预先准备系统构建依赖。
- `system` 仅表示回退到 shims 之后 `PATH` 中可见的系统 Python，pyenv 不负责识别外部安装来源。
- Linux 下默认不启用 Homebrew 依赖查找，以降低滚动升级导致环境破坏的风险。
- 开启高优化构建通常能提升性能，但会增加构建耗时。

## 链接

- 项目主页：https://github.com/pyenv/pyenv
- README：https://github.com/pyenv/pyenv/blob/master/README.md
- 命令参考：https://github.com/pyenv/pyenv/blob/master/COMMANDS.md
- python-build README：https://github.com/pyenv/pyenv/blob/master/plugins/python-build/README.md
- 版本历史：https://github.com/pyenv/pyenv/blob/master/CHANGELOG.md
- 许可证：https://github.com/pyenv/pyenv/blob/master/LICENSE

## 相关文档

- [[02-资源/通用开发工具/uv：Rust 编写的极速 Python 包与项目管理工具|uv：Rust 编写的极速 Python 包与项目管理工具]]；关联理由：延伸思考；说明：两者都覆盖 Python 版本管理，但 pyenv 强调单一职责，uv 强调一体化工具链，可用于选型对照。

## 关联主题

- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
- [[00-元语/软件工程]]
