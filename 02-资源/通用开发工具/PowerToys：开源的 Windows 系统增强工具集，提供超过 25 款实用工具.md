---
title: "PowerToys：开源的 Windows 系统增强工具集，提供超过 25 款实用工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `microsoft/PowerToys`"
项目主页: "https://github.com/microsoft/PowerToys"
开源协议: "MIT License"
主要语言: "C#"
统计快照: "Stars 129999，Forks 7722，Watchers 1166（抓取时间：2026-02-22）"
版本快照: "最新发布 v0.97.2（发布时间：2026-02-10T07:37:29Z）"
---

## 摘要

### 一句话总结
Microsoft PowerToys 是一个开源的 Windows 系统增强工具集，提供超过 25 款实用工具，旨在深度定制 Windows 体验并大幅提升用户日常任务的生产力。

### 核心要点
*   **项目基础**：采用 MIT 协议开源，主要使用 C# 开发，在 GitHub 上拥有约 13 万 Stars，属于极受欢迎的通用系统辅助工具。
*   **丰富的功能集**：内置超过 25 款实用工具，包括高级粘贴（Advanced Paste）、颜色拾取器（Color Picker）、命令面板（Command Palette）、窗口布局（FancyZones）、批量重命名（PowerRename）和快速启动（PowerToys Run）等。
*   **灵活的安装方式**：支持通过 GitHub Releases（提供 x64/ARM64 及单用户/全系统安装包）、Microsoft Store、WinGet 以及社区包管理器（如 Chocolatey 和 Scoop）进行安装。
*   **最新版本动态**：最新版本 v0.97.2（2026年2月）重点修复了 v0.97.0 中出现的稳定性问题，包括 Advanced Paste 的 JSON 反序列化崩溃、Color Picker 的 UI 对比度问题以及 Workspaces 的多屏 DPI 坐标错位等。
*   **多显示器与硬件适配**：近期更新显著优化了多显示器体验（如 Cursor Wrap 新增仅在最外侧边缘环绕的选项），并加入了笔记本合盖检测以动态更新显示器拓扑结构。
*   **企业与命令行支持**：为 FancyZones、File Locksmith 和 Image Resizer 新增了命令行接口（CLI）支持；同时在 ADMX 模板中添加了 CursorWrap 的组策略（GPO）定义，便于企业级统一管理。
*   **AI 与高级特性**：Advanced Paste 工具现已支持本地和在线 AI 模型，新增了图像输入支持，并在剪贴板历史记录中加入了十六进制颜色预览功能。

## 功能与定位

Microsoft PowerToys is a collection of utilities that supercharge productivity and customization on Windows

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:29:52Z。
- 项目创建于 2019-05-01T17:44:02Z，具备持续迭代与社区沉淀。
- 以 `C#` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/microsoft/PowerToys
- README：https://raw.githubusercontent.com/microsoft/PowerToys/main/README.md
- Releases：https://github.com/microsoft/PowerToys/releases

## 关联主题

- [[00-元语/windows]]
- [[00-元语/productivity]]
- [[00-元语/desktop-client]]
- [[00-元语/hardware-control]]
- [[00-元语/cli]]
- [[00-元语/tool]]
- [[00-元语/github]]
