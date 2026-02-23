# 介绍两款全新的 Showboat 工具：Chartroom 与 datasette-showboat

## 文档信息
- 来源：https://simonwillison.net/2026/Feb/17/chartroom-and-datasette-showboat/#atom-everything
- 发布日期：2026-02-17

## 摘要
**1) 一句话总结**
作者发布了 Chartroom 和 datasette-showboat 两款新工具，进一步扩展了 Showboat 生态，使编程智能体能够生成数据图表并将 Markdown 文档实时推送到远程服务器。

**2) 关键要点**
*   **Showboat 远程功能**：Showboat v0.6.0 新增了远程发布功能，通过配置环境变量，在执行 `init`、`note`、`exec` 或 `image` 命令时，会通过 POST 请求将文档片段同步发送至 API 端点。
*   **datasette-showboat 插件**：这是一个 Datasette 插件，新增了 `/-/showboat`（查看文档）和 `/-/showboat/receive`（接收更新）端点，配合 `SHOWBOAT_REMOTE_URL` 环境变量，可实现智能体生成文档的实时流式传输与查看。
*   **结合 Rodney 实时反馈**：结合浏览器自动化截图工具 Rodney，开发者可以在 Claude 工作时实时查看进度截图，并直接在会话中提供反馈。
*   **Chartroom 图表工具**：这是一款基于 matplotlib 的轻量级 CLI 工具，专为编程智能体设计，支持生成柱状图、折线图、散点图和直方图（PNG 格式）以嵌入 Showboat 文档。
*   **Chartroom 数据支持**：支持从文件或标准输入接收 CSV、TSV 或 JSON 数据，并支持通过 `--sql` 参数运行只读查询。
*   **替代文本（Alt text）支持**：Chartroom 可通过参数（如 `-f alt`、`-f html`）生成图表的替代文本；Showboat v0.5.0 也同步增加了对带有替代文本的 Markdown 图片的支持。
*   **AI 辅助开发**：Chartroom 的开发主要由 Claude Code 根据提示词完成，采用了红/绿测试驱动开发（TDD）模式，并在开发过程中使用 Showboat 维护演示文档。
*   **生态系统协同**：Showboat 生态目前包含 Showboat（核心）、Rodney（浏览器自动化）、Chartroom（图表）和 datasette-showboat（远程传输），各工具基于松散的约定（如输出图片路径或文本）高效协同工作。

## 正文
一周前，我发布了 Showboat——这是一款帮助编程智能体（coding agents）创建 Markdown 文档以演示其生成代码的 CLI 工具。我每天都在探索它的新用法，并且刚刚发布了两款新工具，以更好地发挥 Showboat 模式的优势。Chartroom 是一款能与 Showboat 完美配合的 CLI 图表工具；而 datasette-showboat 则利用 Showboat 全新的远程发布功能，将文档增量推送到 Datasette 实例中。

### Showboat 远程发布与 datasette-showboat

我通常在网页版 Claude Code 中使用 Showboat。只需让 Claude Code 运行 `uvx showboat --help`，它就能学会如何使用该工具——帮助文本本身就被设计成一种临时的技能文档。

但这种方法有一个缺点：我必须等到 Claude 完成文档、嵌入截图并推送到 GitHub 仓库的分支后，才能在 GitHub 界面上看到最终的 Showboat 文档。我一直觉得，如果能有一个自己的远程 Web 服务器，让 Claude 实例在工作时将更新提交上去，那将会非常棒。后来我意识到，Showboat 可能就是实现这一目标的理想机制。

Showboat v0.6.0 新增了“远程（remote）”功能。该功能对用户几乎是透明的，只需通过环境变量进行配置。设置好变量后，每次运行 `showboat init`、`note`、`exec` 或 `image` 命令时，生成的文档片段除了会更新本地的 Markdown 文件外，还会通过 POST 请求发送到该 API 端点。

为了接收这些更新，我让 Claude Code 编写了一个 Datasette 插件。**datasette-showboat** 为 Datasette 添加了 `/-/showboat` 端点用于查看文档，以及 `/-/showboat/receive` 端点用于接收来自 Showboat 的更新。

最棒的是，这在网页版 Claude Code 中完美运行。只需在服务器上运行该插件并设置 `SHOWBOAT_REMOTE_URL` 环境变量，智能体创建的文档就会实时传输到服务器并可供查看。

结合我之前开发的浏览器自动化工具 **Rodney**（用于加载网页、交互并截图），我可以在 Claude 工作时实时查看其发布的进度截图，并直接在 Claude 会话中提供反馈。这对开发 Web 界面来说极其有用。

### Chartroom 图表工具

几天前，我又产生了一个扩展 Showboat 生态的想法：如果 Showboat 文档能轻松嵌入图表会怎样？

我有时会使用 Claude Code 进行数据分析，让它下载 SQLite 数据库并运行查询。如果有一个简单的 CLI 工具能生成 PNG 图片，我就可以让 Claude 使用 Showboat 构建包含图表的文档来展示其发现。

**Chartroom** 正是为此而生。它实际上是对优秀的 Python 库 matplotlib 的轻量级封装，专为编程智能体设计，用于创建可嵌入 Showboat 文档的图表。

它支持生成柱状图、折线图、散点图和直方图。此外，Chartroom 还能生成替代文本（Alt text）。通过添加 `-f alt` 参数，它可以输出图表的替代文本而不是图片；或者使用 `-f html` / `-f markdown` 直接获取带有替代文本的图片标签。为了配合这一功能，我在 Showboat v0.5.0 中也添加了对带有替代文本的 Markdown 图片的支持。

最后，Chartroom 还支持不同的 matplotlib 样式。

### Chartroom 的开发过程

我使用 click-app cookiecutter 模板初始化了 Chartroom 仓库，然后在一个全新的网页版 Claude Code 会话中输入了提示词。

我要求它：
*   构建一个使用 matplotlib 生成 PNG 图表的 Python CLI 工具。
*   通过命令行选项控制不同的图表类型，并将所有使用说明放在 `chartroom --help` 输出中。
*   支持从文件或标准输入接收 CSV、TSV 或 JSON 数据，并支持通过 `--sql` 运行只读查询。
*   采用红/绿测试驱动开发（TDD），使用 `uv run pytest` 运行测试。
*   在开发过程中，使用 Showboat 维护一个演示文档，每次实现新的图表类型时，都要提交测试、代码，并使用 Showboat 的 image 命令在文档中嵌入新图表的演示。

这个提示词完成了大部分的开发工作。

### 蓬勃发展的 Showboat 生态

目前，Showboat 系列工具已经包含：
*   **Showboat**：核心工具。
*   **Rodney**：用于浏览器自动化。
*   **Chartroom**：用于生成图表。
*   **datasette-showboat**：用于将远程 Showboat 文档流式传输到 Datasette。

我非常喜欢这些工具基于一套非常松散的约定协同工作的方式。只要一个工具能输出图片路径，Showboat 就能将该图片包含在文档中；任何能输出文本的工具都可以与 Showboat 配合使用。

Showboat 远程流式传输的环境变量机制也是一个有趣的 Hack。目前我只是用它将文档流式传输到其他地方，但它实际上是一个 Webhook 扩展机制，未来可能会有更多意想不到的用途。我几乎肯定会继续构建符合这种模式的工具，因为它们的开发速度真的非常快！
