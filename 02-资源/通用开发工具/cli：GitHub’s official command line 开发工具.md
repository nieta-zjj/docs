---
title: cli：GitHub’s official command line 开发工具
对象: GitHub CLI (gh)
来源: GitHub
项目主页: https://github.com/cli/cli
官方文档: https://cli.github.com/manual/
开源协议: MIT License
---

## 摘要

GitHub CLI（`gh`）是 GitHub 官方维护的开源命令行工具，用于把 Pull Request、Issue 等 GitHub 工作流直接带到终端，并可用于本地开发与 CI/CD 自动化场景。它支持 GitHub.com、GitHub Enterprise Cloud 与 GitHub Enterprise Server 2.20+，覆盖 macOS、Windows、Linux/Unix，并从 2.50.0 起提供构建来源证明（Build Provenance Attestation）校验能力。

## 功能与定位

`gh` 是 GitHub 官方命令行工具，定位是让开发者在终端内直接完成 GitHub 相关协作动作，而不必频繁切换到网页端。它面向日常开发、团队协作和自动化流水线中的 GitHub 操作。

## 典型使用场景

- 在终端中处理 Pull Request 与 Issue 的常见流程。
- 在 GitHub Actions 或其他 CI/CD 流程中执行 GitHub 相关自动化操作。
- 在需要验证下载产物来源时，结合构建证明能力做供应链完整性校验。

## 特色与差异点

- 与早期工具 `hub` 不同，`gh` 是独立工具而非 `git` 包装代理。
- 官方团队维护，面向 GitHub 工作流持续迭代。
- 在 GitHub 生态内有较完整的文档与平台支持（包括企业版本支持边界）。

## 使用方式概览

- 支持通过 macOS、Windows、Linux/Unix 的常见安装方式部署。
- 支持通过预编译二进制安装，也支持源码构建。
- GitHub-hosted runners 默认预装 `gh`，并按周更新。
- 普通使用与命令手册以 `https://cli.github.com/manual/` 为主。

## 限制与注意事项

- GitHub Enterprise Server 需 2.20 及以上版本。
- `gh` 不是 `hub` 的一比一替代品，迁移时应按工作流差异评估。

## 链接

- GitHub 仓库：https://github.com/cli/cli
- 官方手册：https://cli.github.com/manual/
- README：https://github.com/cli/cli/blob/trunk/README.md
- 差异说明（gh vs hub）：https://github.com/cli/cli/blob/trunk/docs/gh-vs-hub.md
- 许可证：https://github.com/cli/cli/blob/trunk/LICENSE

## 关联主题

- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/tool]]
