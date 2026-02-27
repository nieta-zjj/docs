---
title: ai-goofish-monitor：AI 编程助手与 Agent 工具
来源: GitHub 仓库
项目主页: https://github.com/Usagi-org/ai-goofish-monitor
原始仓库: https://github.com/dingyufei615/ai-goofish-monitor
许可证: MIT
---

## 摘要

ai-goofish-monitor 是一个基于 Playwright 与 AI 的闲鱼商品监控工具，提供 Web 可视化管理、多任务并发、AI 分析过滤和多渠道通知能力，面向需要持续跟踪二手商品信息的用户。

## 功能与定位

该项目定位为面向闲鱼场景的自动化监控与分析工具。输入侧聚焦关键词、价格、区域等筛选条件，处理侧结合页面抓取与多模态模型分析，输出侧通过通知和结果视图支持快速决策。

## 典型使用场景

- 持续跟踪指定关键词与价格区间的商品变化。
- 对候选商品做 AI 辅助筛选，减少人工逐条查看成本。
- 同时运行多个监控任务，并按任务维度查看结果与日志。
- 将命中结果推送到 ntfy.sh、企业微信、Bark、Telegram 或 Webhook。

## 特色与差异点

- 提供完整 Web 管理界面，覆盖任务、账号、结果、日志与系统设置。
- 支持多账号绑定任务，以及代理轮换与失败重试机制。
- 采用前后端分离结构：后端 FastAPI，前端 Vue 3 + Vite。
- 运行数据以本地文件为主（如 JSONL 结果、日志、图片等），部署路径相对轻量。

## 使用方式概览

- 运行依赖包含 Python、Playwright 与前端构建环境。
- 提供本地运行与 Docker 两种主要部署路径。
- 核心参数通过 `.env` 与项目配置文件管理。
- Web 端支持登录认证与任务可视化配置。

## 限制与注意事项

- 项目涉及对平台页面的自动化访问，使用时需遵守目标平台协议与相关法律法规。
- 仓库文档明确提示仅供学习与研究用途，不建议用于非法或不当场景。
- 默认认证口令属于初始配置，生产环境应替换并加强访问控制。
- 本仓库仅记录项目定位、功能与风险边界，不复述可直接执行的操作细节。

## 链接

- https://github.com/Usagi-org/ai-goofish-monitor
- https://github.com/dingyufei615/ai-goofish-monitor

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/browser-automation]]
- [[00-元语/fastapi]]
