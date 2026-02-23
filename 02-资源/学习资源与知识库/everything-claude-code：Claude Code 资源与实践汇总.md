---
title: "everything-claude-code：Claude Code 资源与实践汇总"

发布日期: "2026-02-22"
对象: "GitHub 项目 `affaan-m/everything-claude-code`"
项目主页: "https://github.com/affaan-m/everything-claude-code"
开源协议: "MIT License"
主要语言: "JavaScript"
统计快照: "Stars 49314，Forks 6114，Watchers 283（抓取时间：2026-02-22）"
版本快照: "最新发布 v1.5.0（发布时间：2026-02-11T10:07:45Z）"
---

## 摘要

**1) 一句话总结**
该项目是由 Anthropic 黑客松冠军开源的 Claude Code 完整配置集合，提供了经过实战检验的智能体、技能、钩子、命令、规则及 MCP 配置。

**2) 核心要点**
*   **项目热度与基础信息**：项目极受欢迎，拥有超 4.9 万 Stars 和 6000+ Forks，由 24 位贡献者参与，采用 MIT 协议，主要使用 JavaScript 编写。
*   **核心指南与功能**：提供详尽的短篇与长篇指南，涵盖 Token 优化、记忆持久化（跨会话自动保存/加载）、持续学习（自动提取模式为可复用技能）、验证循环、并行化及子智能体编排。
*   **多语言与框架支持**：规则架构支持按需安装 TypeScript、Python (Django)、Go 和 Java (Spring Boot) 等语言配置，且项目文档及配置已全面支持简体中文等多种语言。
*   **v1.4.x 版本更新**：引入了交互式安装向导（`configure-ecc`）、PM2 及多智能体编排的 6 个新命令，重构了多语言规则目录，并修复了导入时内容丢失的 Bug。
*   **OpenCode 插件集成 (v1.3.0)**：全面支持 OpenCode 插件系统，包含 12 个智能体、24 个命令、16 项技能，以及 3 个原生自定义工具（运行测试、检查覆盖率、安全审计）。
*   **持续学习机制 (v1.2.0)**：升级了基于直觉（Instinct-based）的持续学习 v2 版本，包含置信度评分、导入/导出及演化功能。

**3) 风险/不足**
*   **安装限制**：受 Claude Code 插件系统限制，插件无法自动分发 `rules`（规则）文件，用户必须手动进行安装。

## 功能与定位

Complete Claude Code configuration collection - agents, skills, hooks, commands, rules, MCPs. Battle-tested configs from an Anthropic hackathon winner.

## 典型使用场景

- 作为学习与选型参考入口，快速定位资料与最佳实践。
- 用于团队知识库沉淀与技术调研。

## 核心功能

- 汇总课程、示例、清单或社区经验。
- 强调可检索性与持续更新。
- 适合学习路径规划与资源导航。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:34:09Z。
- 项目创建于 2026-01-18T00:51:51Z，具备持续迭代与社区沉淀。
- 以 `JavaScript` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/affaan-m/everything-claude-code
- README：https://raw.githubusercontent.com/affaan-m/everything-claude-code/main/README.md
- Releases：https://github.com/affaan-m/everything-claude-code/releases

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/Agent]]
- [[00-元语/skills]]
- [[00-元语/mcp]]
- [[00-元语/cli]]
- [[00-元语/memory]]
- [[00-元语/workflow]]
- [[00-元语/learning-resource]]
- [[00-元语/github]]
