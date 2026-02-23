# Rodney v0.4.0 发布：浏览器自动化 CLI 工具的新特性

## 文档信息
- 来源：https://simonwillison.net/2026/Feb/17/rodney/#atom-everything
- 发布日期：2026-02-17

## 摘要
**一句话总结**
浏览器自动化 CLI 工具 Rodney 发布了 v0.4.0 版本，新增了 `assert` 测试命令、目录作用域会话、跨平台支持等多项新功能与配置选项。

**关键点**
*   **退出代码调整**：错误提示改为使用退出代码 2，退出代码 1 现专用于检查失败的情况。
*   **新增 `assert` 命令**：支持运行 JavaScript 测试（失败返回退出代码 1），允许通过 Shell 脚本分步测试 Web 应用程序。
*   **会话与缓存管理**：引入 `--local` 和 `--global` 标志实现目录作用域会话，并新增 `reload --hard` 与 `clear-cache` 命令。
*   **浏览器可视化**：新增 `rodney start --show` 选项，可使浏览器窗口保持可见状态。
*   **实例调试**：新增 `rodney connect PORT` 命令，支持连接并调试已在运行的 Chrome 实例。
*   **自定义与安全配置**：新增 `RODNEY_HOME` 环境变量用于自定义状态目录，新增 `--insecure` 标志用于忽略证书错误。
*   **跨平台支持优化**：修复了 Windows 系统上的 Setsid 兼容性问题，并将自动化测试扩展至 `windows-latest` 和 `macos-latest` 环境。

## 正文
自上周我宣布推出用于浏览器自动化的 Rodney CLI 工具以来，它吸引了大量的 PR（Pull Requests）。以下是刚刚发布的 Rodney v0.4.0 版本的更新日志。

### v0.4.0 更新日志

*   **退出代码调整**：错误提示现在使用退出代码 2，这意味着退出代码 1 仅专门用于检查失败的情况。
*   **新增 `assert` 命令**：全新的 `rodney assert` 命令可用于运行 JavaScript 测试，如果测试失败将返回退出代码 1。
*   **目录作用域会话**：新增带有 `--local` 和 `--global` 标志的目录作用域会话功能。
*   **缓存与重载**：新增 `reload --hard` 和 `clear-cache` 命令。
*   **浏览器可视化**：新增 `rodney start --show` 选项，可使浏览器窗口保持可见（感谢 Antonio Cuni）。
*   **调试运行中的实例**：新增 `rodney connect PORT` 命令，用于调试已经处于运行状态的 Chrome 实例（感谢 Peter Fraenkel）。
*   **自定义状态目录**：新增 `RODNEY_HOME` 环境变量，以支持自定义状态目录（感谢 Senko Rašić）。
*   **忽略证书错误**：新增 `--insecure` 标志，用于忽略证书错误（感谢 Jakub Zgoliński）。
*   **Windows 支持**：通过构建标签（build-tag）辅助工具，避免在 Windows 系统上使用 Setsid（感谢 adm1neca）。
*   **跨平台测试**：现在除了 Linux 之外，测试还会在 `windows-latest` 和 `macos-latest` 环境下运行。

### 新功能演示与应用

我一直在使用 Showboat 来为新功能制作演示视频，目前已经完成了关于 `rodney assert`、`rodney reload --hard`、`rodney exit codes` 以及 `rodney start --local` 的功能演示。

其中，`rodney assert` 命令非常巧妙：你现在可以通过编写 Shell 脚本，使用 Rodney 分多个步骤来测试 Web 应用程序（具体用法可参考 README 文件中的改编示例）。
