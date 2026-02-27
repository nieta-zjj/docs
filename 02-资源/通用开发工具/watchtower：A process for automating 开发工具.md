---
title: watchtower：A process for automating 开发工具
对象: GitHub 仓库
项目主页: https://github.com/containrrr/watchtower
官方网站: https://containrrr.dev/watchtower
最新版本: v1.7.1
版本发布时间: 2023-11-11
维护状态: 已停止维护
---

## 摘要

watchtower 是一个用于自动检测并更新 Docker 容器镜像的工具，能在发现新镜像后按原有容器配置完成重建与重启。它适合家庭实验室和本地开发等非生产场景，但项目当前已停止维护，长期使用需要评估兼容性与安全更新风险。

## 功能与定位

watchtower 以容器方式运行，持续检查目标容器对应镜像是否有新版本。检测到更新后，它会拉取新镜像并按既有运行参数重建容器，目标是减少手工更新成本并保持服务连续运行。

## 典型使用场景

- 家庭实验室与个人服务器中，定期自动更新常驻服务容器。
- 本地开发环境中，减少基础服务镜像的手工维护工作。
- 小规模自托管场景中，配合通知能力感知更新状态。

## 特色与差异点

- 支持按容器名或标签筛选更新范围，可控制更新对象。
- 支持定时轮询与 HTTP API 触发两种更新触发方式。
- 可在同一主机运行多实例并通过作用域隔离管理边界。
- 内置通知通道与模板能力，可把更新结果发送到常见协作工具。
- 提供实验性的 Prometheus 指标接口，便于接入观测系统。

## 使用方式概览

- 作为独立容器部署，并连接目标 Docker 守护进程。
- 配置轮询策略、容器筛选规则与通知渠道。
- 根据环境需要启用清理旧镜像、滚动重启或仅监控模式。
- 在需要人工控制时，可启用 API 方式按需触发更新流程。

## 限制与注意事项

- 项目已停止维护，后续对 Docker API 变化的兼容与漏洞修复存在不确定性。
- 官方文档不建议将其作为商业生产环境的主要更新方案。
- 仅监控模式下仍可能发生镜像拉取行为，用于比对远端镜像摘要。
- 涉及私有仓库凭据时，应按官方文档处理配置挂载与凭据更新，避免配置漂移。

## 链接

1. https://github.com/containrrr/watchtower
2. https://containrrr.dev/watchtower
3. https://containrrr.dev/watchtower/arguments/
4. https://containrrr.dev/watchtower/notifications/
5. https://api.github.com/repos/containrrr/watchtower/releases/latest

## 关联主题

- [[00-元语/self-hosting]]
- [[00-元语/observability]]
- [[00-元语/cli]]
- [[00-元语/github]]
- [[00-元语/risk]]
