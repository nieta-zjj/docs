---
title: nx：应用平台
对象: GitHub 仓库
仓库: https://github.com/nrwl/nx
官网: https://nx.dev
开源协议: MIT
来源:
  - https://github.com/nrwl/nx
  - https://api.github.com/repos/nrwl/nx
  - https://api.github.com/repos/nrwl/nx/releases?per_page=5
---

## 摘要

Nx 是一个面向 Monorepo 的应用平台，强调同时提升开发者与 AI agents 的协作效率，通过任务调度、缓存与 CI 能力缩短交付周期。

- 以 TypeScript 生态为核心，支持在现有工作区接入，也支持创建新工作区。
- 通过本地缓存与任务调度减少重复构建成本。
- 结合 Nx Cloud 提供远程缓存、任务分布式执行、e2e 测试拆分与 flaky task 检测等能力。
- 支持自动修复失败 PR 的平台能力，并持续在 release 中迭代。
- GitHub 仓库近期存在 beta 版本持续发布；若用于生产环境，通常需要区分稳定版与预发布版。

## 功能与定位

Nx 的定位是 Monorepo 场景下的构建与工程协作平台。它通过统一的任务执行与缓存机制，优化多项目代码库中的构建、测试和持续集成流程，并提供面向 AI agents 的增强能力。

## 典型使用场景

- 在一个仓库中管理多个前端、后端或共享库项目，并统一执行构建与测试任务。
- 将已有仓库接入 Nx，优先获得任务调度与缓存收益，而不必重建工程结构。
- 在 CI 中利用远程缓存与分布式任务执行，缩短流水线总时长。
- 在 Angular、React、Next.js、Node.js 等 TypeScript/JavaScript 生态项目中做统一工程化管理。

## 核心功能

- 工作区级任务调度与本地缓存。
- Nx Cloud 远程缓存与多机器任务分发。
- e2e 任务自动拆分与 flaky task 检测。
- CLI 方式接入新项目或现有项目。
- 基于 release 持续发布与修复。

## 特色与差异点

- 强调“开发者 + AI agents”协同，而不只是传统构建工具定位。
- 可渐进式引入：既支持从零创建工作区，也支持在现有仓库快速接入。
- 生态覆盖面广，围绕现代 Web 工具链提供集成能力，并配套官方文档与社区渠道。

## 使用方式概览

```shell
npx create-nx-workspace
```

```shell
npx nx init
```

```shell
npx nx connect
```

## 限制与注意事项

- README 明确的高级 CI 能力（如远程缓存、任务分发、测试拆分）依赖 Nx Cloud。
- 最近发布列表同时包含稳定版与 beta 预发布版；评估与落地时应区分版本通道。
- 本文仅整理可验证信息，不包含超出来源材料的实现细节或性能承诺。

## 链接

- 仓库主页: https://github.com/nrwl/nx
- 官方网站: https://nx.dev
- 官方文档: https://nx.dev/docs
- 入门文档: https://nx.dev/getting-started/intro
- CI 文档: https://nx.dev/ci/getting-started/intro
- Nx Cloud: https://nx.dev/nx-cloud
- Releases: https://github.com/nrwl/nx/releases

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/CI]]
- [[00-元语/cli]]
- [[00-元语/github]]
- [[00-元语/typescript]]
- [[00-元语/workflow]]
