---
title: "Claude Code 核心功能与使用概览"

来源: "https://www.anthropic.com/engineering/claude-code-best-practices"
---

## 摘要

**一句话总结**
Claude Code 是一款具备智能代理能力的编程工具，支持跨平台与多设备无缝协作，能够通过自动化代码编辑、工具集成和任务流转来显著提升开发效率。

**关键要点**
*   **工具定位**：作为智能代理编程工具，可直接读取代码库、编辑文件并运行命令。
*   **多平台与环境**：支持终端、VS Code、Cursor、JetBrains IDEs、桌面应用、Web 端，并可集成至 Slack、GitHub Actions 及 GitLab CI/CD。
*   **系统与安装**：兼容 macOS（Intel/Apple Silicon）和 Windows (x64)；官方推荐原生安装，同时支持 Homebrew 和 WinGet。
*   **日常开发自动化**：可自动处理繁琐工作、构建新功能、修复 Bug，并自动创建代码提交（Commits）和拉取请求（PRs）。
*   **工具扩展性**：支持通过 MCP 连接现有开发工具，并允许使用自定义指令、技能和钩子（hooks）进行个性化配置。
*   **高级自动化**：支持运行智能代理团队、构建自定义代理，以及使用 CLI 进行管道传输和脚本编写。
*   **跨端无缝流转**：可通过 `/teleport` 命令将 Web 或 iOS 上的任务拉取到终端，或使用 `/desktop` 命令将终端会话移交至桌面应用进行可视化代码审查。
*   **团队协作路由**：支持在 Slack 等团队聊天中直接分配任务（如 `@Claude` 附带 Bug 报告即可直接生成修复 PR）。

**风险与缺口**
*   Windows ARM64 操作系统目前仅支持远程会话（Remote sessions）。
*   Chrome 扩展程序目前仍处于 Beta 版阶段。

## 正文

Claude Code 是一款具备智能代理能力的编程工具（agentic coding tool）。它可以读取你的代码库、编辑文件、运行命令，并与你现有的开发工具无缝集成。无论是在终端、IDE、桌面应用还是浏览器中，你都可以随时随地使用它。

### 支持的平台与安装方式

Claude Code 提供了广泛的平台支持与灵活的安装选项，以适应不同的开发环境：

*   **支持的平台与环境**：终端 (Terminal)、VS Code、Cursor、JetBrains IDEs、桌面应用、Web 端、Chrome 扩展程序（Beta 版）。此外，它还支持集成到 Slack、GitHub Actions 以及 GitLab CI/CD 中。
*   **操作系统**：支持 macOS（包括 Intel 和 Apple Silicon 芯片）、Windows (x64) 以及 Windows ARM64（仅限远程会话）。
*   **安装方式**：官方推荐使用原生安装（Native Install），同时也支持通过 Homebrew 和 WinGet 进行安装。

### 核心功能与应用场景

使用 Claude Code，你可以极大地提升开发效率并实现工作流的自动化：

*   **日常开发**：自动化处理那些你一直拖延的繁琐工作，快速构建新功能并修复 Bug。
*   **代码管理**：自动创建代码提交（Commits）和拉取请求（Pull requests）。
*   **工具扩展**：通过 MCP 连接你现有的开发工具，并使用自定义指令、技能和钩子（hooks）进行个性化配置。
*   **高级自动化**：运行智能代理团队、构建自定义代理，或使用 CLI 进行管道传输、编写脚本和自动化操作。

### 随时随地无缝工作

Claude Code 打破了设备与平台的限制，支持跨端无缝协作：

*   **跨设备流转**：你可以在 Web 端或 iOS 应用上启动一个耗时较长的任务，随后使用 `/teleport` 命令将其拉取到你的终端中继续处理。
*   **可视化审查**：使用 `/desktop` 命令，可以将终端会话一键移交给桌面应用，以便进行可视化的代码差异审查（visual diff review）。
*   **团队协作路由**：支持从团队聊天中直接分配任务。例如，在 Slack 中提及 `@Claude` 并附上 Bug 报告，它就能直接为你生成并返回一个修复该 Bug 的拉取请求。

### 后续步骤与学习资源

为了更好地将 Claude Code 融入你的开发流程，建议探索以下资源：

*   **快速入门 (Quickstart)**：跟随指南完成你的第一个实际任务，体验从探索代码库到提交修复的完整流程。
*   **进阶提升**：学习官方提供的最佳实践（Best practices）和常见工作流（Common workflows）。
*   **个性化与支持**：通过设置（Settings）为你的工作流定制 Claude Code；遇到问题时可查阅故障排除（Troubleshooting）指南。
*   **了解更多**：访问 code.claude.com 查看产品演示、定价以及更多产品细节。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/mcp]]
- [[00-元语/cli]]
- [[00-元语/terminal]]
- [[00-元语/ide]]
