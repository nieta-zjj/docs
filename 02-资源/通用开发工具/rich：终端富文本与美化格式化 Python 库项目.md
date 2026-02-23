---
title: "rich：终端富文本与美化格式化 Python 库项目"
对象: "GitHub 项目"
项目主页: "https://github.com/Textualize/rich"
Stars快照: "55573"
官方网站: "https://rich.readthedocs.io/en/latest/"
主要语言: "Python"
开源协议: "MIT"
---

## 摘要

**1) 一句话总结**
Rich 是一个广受欢迎的 Python 开源库（MIT协议），通过简单的 API 为终端提供颜色、样式以及表格、进度条、Markdown 和异常回溯等高级富文本渲染功能。

**2) 核心要点**
*   **项目数据**：基于 MIT 协议开源，在 GitHub 上拥有 55,576 Stars 和 2,041 Forks。
*   **基础输出**：提供与原生 `print` 签名一致的替代方法，支持 BBCode 风格的样式标记、自动单词换行及 Emoji 插入。
*   **高级组件**：开箱即用地支持渲染自适应宽度的表格、无闪烁的多任务进度条、状态加载动画（Spinner）、树状图及多列布局。
*   **文本与代码**：内置 Markdown 解析与渲染功能，并基于 Pygments 提供代码语法高亮。
*   **调试与日志**：提供对象详细报告生成（Rich Inspect）、带时间/文件/行号的增强日志、局部变量表打印（`log_locals`）以及高可读的异常回溯（Tracebacks）。
*   **生态与集成**：无需配置即可在 Jupyter Notebook 和 REPL 中运行，基于 Console Protocol 具备高度可扩展性，并作为底层库支撑了 Textual 和 Toad 等生态项目。

**3) 风险与局限**
*   **版本要求**：运行环境必须为 Python 3.8 或更高版本。
*   **Windows 兼容性限制**：在 Windows 系统中，经典的 Windows 终端仅支持 16 色；若需显示真彩色（True color）和 Emoji，必须使用新的 Windows Terminal。

## 功能与定位
Rich 是一个用于在终端中实现富文本和精美格式化输出的 Python 库。它通过提供简单易用的 API，让开发者能够轻松地为终端输出添加颜色、样式，并开箱即用地渲染表格、进度条、Markdown、语法高亮代码及异常回溯等复杂内容。

## 典型使用场景
- **CLI 应用开发**：构建具有现代感、高可读性的命令行界面。
- **代码调试与日志记录**：通过高亮数据结构、局部变量表和美化的异常回溯来辅助排查问题。
- **长时间任务监控**：在终端中展示无闪烁的多任务进度条或加载动画。
- **数据展示**：在终端中以自适应表格、多列布局或树状图的形式清晰呈现结构化数据。

## 核心功能
- **基础输出与样式**：
  - 提供与 Python 内置 `print` 签名一致的替代方法。
  - 支持类似 BBCode 语法的标记语言，实现细粒度的颜色和样式控制。
  - 自动对长文本进行单词换行以适应终端宽度。
  - 支持通过 `::` 语法直接插入 Emoji。
- **高级组件渲染**：
  - **表格（Tables）**：使用 Unicode 框线字符渲染，支持自定义边框、对齐方式，并能根据终端宽度自动调整列宽和换行。
  - **进度条（Progress Bars）**：支持无闪烁的多任务进度条，可自定义显示百分比、文件大小、速度和剩余时间等列。
  - **状态动画（Status）**：为无法计算进度的任务提供多种 Spinner 旋转加载动画。
  - **树状图（Tree）**：带有引导线的树形视图，适合展示文件目录或其他层级数据。
  - **多列布局（Columns）**：以相等或最优宽度将内容整齐排列。
- **富文本与代码支持**：
  - **Markdown**：在终端中解析并合理渲染 Markdown 格式。
  - **语法高亮**：内置基于 Pygments 的代码语法高亮支持。
- **开发者调试工具**：
  - **Rich Inspect**：生成任意 Python 对象（类、实例、内置对象）的详细报告。
  - **增强日志（Log）**：输出包含当前时间、调用文件及行号的日志，支持高亮 Python 数据结构，并可通过 `log_locals` 打印局部变量表。
  - **Logging Handler**：可直接接入 Python 内置的 `logging` 模块，格式化并着色日志输出。
  - **Tracebacks**：提供比标准库更易读、展示更多代码上下文的异常回溯，可设为默认的未捕获异常处理器。
  - **REPL 集成**：可在 Python 交互式环境中安装，自动美化打印数据结构。

## 特色与差异点
- **开箱即用的 Jupyter 支持**：无需额外配置即可在 Jupyter Notebook 中完美运行。
- **高度可扩展**：所有可渲染对象均基于 Console Protocol 实现，开发者可借此构建自定义的富文本内容。
- **生态联动**：拥有命令行工具版本 [Rich CLI](https://github.com/textualize/rich-cli)，并作为底层库支撑了终端 UI 框架 [Textual](https://github.com/Textualize/textual) 及 AI 编码工具 [Toad](https://github.com/batrachianai/toad)。

## 使用方式概览
- **安装**：通过 pip 安装（`python -m pip install rich`）。
- **快速替换 Print**：直接导入 `from rich import print` 即可输出带样式的文本。
- **高级控制**：通过实例化 `Console` 对象（`from rich.console import Console`），调用其 `print`、`log`、`status` 等方法实现更复杂的终端内容管理。

## 限制与注意事项
- **环境要求**：需要 Python 3.8 或更高版本。
- **终端兼容性**：支持 Linux、macOS 和 Windows。但在 Windows 系统中，真彩色（True color）和 Emoji 仅在新的 Windows Terminal 中支持，经典的 Windows 终端仅限 16 色。

## 链接

- 仓库：https://github.com/Textualize/rich
- 官网：https://rich.readthedocs.io/en/latest/

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
