---
title: "Ink 文档站：基于 Next.js 与 Nextra 的官方文档仓库"

对象: "Git 项目"
发布日期: "2026-02-22"
项目仓库: "https://github.com/inkonchain/docs"
项目主页: "https://docs.inkonchain.com"
项目创建时间: "2024-05-07"
主要语言: "MDX"
用户提供热度快照: "40551"
GitHub 检索星标: "36847；抓取日期：2026-02-22；来源：`https://api.github.com/search/repositories?q=repo:inkonchain/docs`"
---

## 摘要

`inkonchain/docs` 是 Ink 的官方文档站源码仓库，采用 Next.js 与 Nextra 构建，围绕文档协作提供自动化检查、分支预览部署与主分支持续发布能力。

## 功能与定位

该仓库用于维护 Ink 官方文档站，定位是“文档内容生产 + 质量把关 + 发布流水线”一体化。它既是文档前端应用代码库，也是文档协作的工程基础设施。

## 典型使用场景

- 团队维护链上生态文档、开发者指南与说明页面。
- 贡献者通过 PR 提交文档内容改动并进行预览审查。
- 运维侧通过自动化流水线持续发布最新文档版本。

## 核心功能

- 基于 Next.js 与 Nextra 的文档站渲染与路由组织。
- 针对 PR 的自动化检查流水线，覆盖代码风格、Markdown 规范与拼写质量。
- 基于 AWS Amplify 的临时预览环境与主分支持续部署。
- 提供 Docker 化运行方式，支持容器环境中的一致化部署。

## 特色与差异点

- 将文档质量检查与部署流程内置在同一仓库，减少手工发布成本。
- 通过特性分支预览机制提升文档变更的审查效率。
- 使用 MDX 组织文档内容，便于混合文本与组件化呈现。

## 使用方式概览

1. 在满足版本要求的 Node.js 环境中进行本地开发。
2. 通过仓库约定的依赖管理与开发脚本进行内容迭代。
3. 以 PR 流程触发自动化检查和预览，再合并到主分支发布。

## 限制与注意事项

- README 明确提到当前仍使用 Pages Router，尚未切换到 App Router。
- 仓库元数据显示 `license` 字段为空，公开页面未直接给出可验证的开源协议声明。
- 你提供的热度快照 `40551` 与本次抓取值 `36847` 存在差异，建议按记录时间理解该类动态指标。

## 链接

- GitHub：https://github.com/inkonchain/docs
- 站点主页：https://docs.inkonchain.com
- README：https://raw.githubusercontent.com/inkonchain/docs/main/README.md
- 组织主页：https://github.com/inkonchain

## 相关文档

- [[02-资源/区块链与Web3/Ink Node：Ink 链全节点与归档节点运行仓库|Ink Node：Ink 链全节点与归档节点运行仓库]]；关联理由：上下游；说明：该仓库维护 `docs.inkonchain.com` 文档站，而 Ink Node 文档以该站点作为官方入口，属于直接上下游关系。

## 关联主题

- [[00-元语/blockchain]]
- [[00-元语/CI]]
- [[00-元语/github]]
- [[00-元语/markdown]]
- [[00-元语/react]]
- [[00-元语/serverless]]
