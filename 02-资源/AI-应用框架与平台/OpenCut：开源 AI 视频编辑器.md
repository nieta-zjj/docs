---
title: "OpenCut：开源 AI 视频编辑器"

发布日期: "2026-02-22"
对象: "GitHub 项目 `OpenCut-app/OpenCut`"
项目主页: "https://github.com/OpenCut-app/OpenCut"
官方网站: "https://opencut.app"
开源协议: "MIT"
主要语言: "TypeScript"
统计快照: "Stars 45953，Forks 4703，Watchers 194（抓取时间：2026-02-22）"
版本快照: "无正式 release（抓取结果 0）"
备注: "用户提供“25943”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

**1) 一句话总结**
OpenCut 是一款基于 TypeScript 开发的免费、开源且注重隐私的跨平台视频编辑器，旨在成为剪映（CapCut）的替代方案。

**2) 关键要点**
* **开源与定位**：采用 MIT 协议开源，支持 Web、桌面和移动端，致力于解决商业剪辑软件日益增加的付费墙问题。
* **核心功能**：支持基于时间轴的多轨道视频编辑、实时视频预览以及无水印导出。
* **隐私与费用**：视频处理完全在用户本地设备上进行，不侵犯隐私，且提供免费的基础编辑功能，无订阅费用。
* **技术架构**：主要语言为 TypeScript；前端基于 Next.js 构建并使用 Zustand 进行状态管理；后端及本地服务依赖 PostgreSQL 和 Redis。
* **第三方集成**：使用 Databuddy 提供 100% 匿名的分析服务，博客系统由 Marble Headless CMS 驱动。
* **开发环境要求**：本地部署需依赖 Node.js（v18+）、Bun，以及 Docker 和 Docker Compose（用于启动数据库和 Redis）。
* **项目热度**：当前 GitHub 仓库公开 Stars 数量为 45953。

**3) 风险/不足**
* **核心功能重构中**：项目目前正使用新的二进制渲染方法重构“预览面板（含字体、贴纸、特效）”和“导出功能”，官方建议开发者暂时避开这些区域，将贡献精力集中在时间轴、项目管理、性能优化及 Bug 修复上。

## 功能与定位

OpenCut 是一款免费、开源的视频编辑器，旨在成为剪映（CapCut）的开源替代方案。项目支持 Web、桌面和移动端，主打简单易用的操作体验，并致力于解决商业软件日益增加的付费墙问题。

## 核心功能

- 基于时间轴的视频编辑
- 多轨道支持
- 实时视频预览
- 导出无水印

## 特色与差异点

- **隐私优先**：视频处理保留在用户本地设备上，不侵犯隐私。
- **完全免费**：提供大多数基础的视频编辑功能，无订阅费用。
- **技术架构**：前端主要基于 Next.js 构建，使用 Zustand 等进行状态管理；后端及本地服务依赖 PostgreSQL 和 Redis。
- **第三方集成**：使用 Databuddy 提供 100% 匿名且非侵入式的分析服务，博客系统由 Marble Headless CMS 驱动。

## 使用方式概览

项目主要面向开发者提供了本地运行和部署的指南：
1. **环境依赖**：需要安装 Node.js（v18+）、Bun（作为 npm 的替代品），以及 Docker 和 Docker Compose（用于运行本地数据库和 Redis 服务）。
2. **本地开发**：
   - 通过 Docker 启动数据库和 Redis 服务。
   - 配置必要的环境变量（包括数据库连接、Better Auth 密钥、Redis 配置等）。
   - 运行数据库迁移并启动本地开发服务器。

## 限制与注意事项

- **功能重构中**：项目目前正在使用新的二进制渲染方法重构“预览面板（包括字体、贴纸、特效）”以及“导出功能”。官方建议贡献者暂时避开这些区域，将精力集中在时间轴功能、项目管理、性能优化、Bug 修复及预览面板外的 UI 改进上。

## 链接

- [GitHub 仓库](https://github.com/OpenCut-app/OpenCut)
- [官方网站](https://opencut.app)
- [Databuddy](https://www.databuddy.cc?utm_source=opencut)
- [Marble CMS](https://marblecms.com?utm_source=opencut)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/video]]
- [[00-元语/desktop-client]]
- [[00-元语/typescript]]
- [[00-元语/PostgreSQL]]
