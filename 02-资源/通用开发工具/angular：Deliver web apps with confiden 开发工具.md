---
title: "angular：Deliver web apps with confiden 开发工具"
对象: Angular
类型: Web 开发框架与工具平台
项目主页: https://angular.dev
源码仓库: https://github.com/angular/angular
许可证: MIT
来源:
  - https://github.com/angular/angular
  - https://raw.githubusercontent.com/angular/angular/main/README.md
  - https://raw.githubusercontent.com/angular/angular/main/adev/README.md
  - https://raw.githubusercontent.com/angular/angular/main/CHANGELOG.md
---

## 摘要

Angular 是一个基于 TypeScript/JavaScript 的现代 Web 开发平台，用于构建跨平台的移动端与桌面端 Web 应用。它同时提供框架能力、CLI 工具链、文档体系与生态组件，可覆盖从项目初始化、开发调试到升级维护的完整流程。

## 功能与定位

Angular 面向需要长期维护、工程化能力强、团队协作规模较大的 Web 应用开发场景。项目定位不仅是前端框架，也包含官方工具链与文档平台，强调一致性、可扩展性和可维护性。

从仓库 README 可验证的能力包括组件与模板、表单、路由、懒加载、动画、SSR，以及配套的 Angular CLI 和 Angular Material 生态入口。

## 典型使用场景

- 构建企业级单页应用或多页面 Web 应用，并保持统一的工程结构。
- 构建需要路由、表单、懒加载与动画协同的中大型前端项目。
- 在同一技术栈下覆盖浏览器端渲染、服务端渲染和静态站点生成。
- 使用官方文档与升级指南持续演进已有 Angular 项目。

## 特色与差异点

- 平台化能力完整：框架、CLI、文档站与生态组件协同提供。
- 文档与工程实践紧密绑定：官方文档站本身由 Angular 构建，并展示了 SSG 架构实践。
- 持续发布节奏清晰：`CHANGELOG.md` 按版本记录特性、修复与破坏性变更，便于版本治理。

## 使用方式概览

- 安装 CLI：`npm install -g @angular/cli`
- 创建项目：`ng new [PROJECT NAME]`
- 启动开发服务：`cd [PROJECT NAME]` 后执行 `ng serve`
- 需要参与仓库开发时，文档推荐使用 `pnpm` 进行依赖安装与本地构建。

## 限制与注意事项

- 升级时需要重点核对 `CHANGELOG.md` 的 Breaking Changes，尤其是与安全和渲染行为相关的条目。
- 官方文档仓库在本地构建时可能受 Bazel 缓存影响，遇到构建异常应先按文档建议清理缓存后重试。
- 本文仅整理公开可验证信息；具体选型仍需结合团队技术栈、迁移成本与版本策略评估。

## 链接

- 项目仓库：https://github.com/angular/angular
- 官方网站：https://angular.dev
- 官方文档总览：https://angular.dev/overview
- Angular CLI：https://angular.dev/tools/cli
- Angular Material：https://material.angular.dev/
- 官方博客：https://blog.angular.dev/
- 升级指南：https://angular.dev/update-guide/
- NPM 包入口：https://www.npmjs.com/@angular/core

## 关联主题

- [[00-元语/typescript]]
- [[00-元语/cli]]
