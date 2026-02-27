---
title: nginx-ui：Yet another WebUI for Ng 开发工具
对象: GitHub 仓库
项目主页: https://github.com/0xJacky/nginx-ui
来源:
  - https://github.com/0xJacky/nginx-ui/blob/dev/README.md
  - https://github.com/0xJacky/nginx-ui/blob/dev/resources/readme/README-zh_CN.md
  - https://nginxui.com/zh_CN/
  - https://nginxui.com/zh_CN/guide/getting-started
  - https://github.com/0xJacky/nginx-ui/releases/tag/v2.3.3
许可证: AGPL-3.0
---

## 摘要

nginx-ui 是一个基于 Go 和 Vue 的 Nginx 可视化管理工具，提供单一二进制分发与多种安装方式，覆盖配置编辑、监控、证书自动化、日志查看、集群管理与 AI 接入等常见运维需求。其差异点在于配置变更后的自动测试与重载机制、备份回滚能力、MCP 接口和跨平台覆盖范围；使用时需注意 AGPLv3 的合规要求。

## 功能与定位

nginx-ui 的定位是为 Nginx 提供图形化运维入口，降低手工改配置与多节点管理的门槛。项目以 Web UI 方式整合配置编辑、服务状态观察、日志读取和证书管理，并强调“可视化 + 自动化”的日常运维流程。

## 典型使用场景

- 需要在浏览器中统一管理多台服务器上的 Nginx 配置与运行状态。
- 频繁调整站点配置，希望保留历史版本并支持快速回滚。
- 需要持续维护 HTTPS 证书，希望减少手工续签工作。
- 需要让 AI agent 参与配置管理或运维辅助流程。
- 需要在不同平台快速部署统一的 Nginx 管理面板。

## 核心功能

- 在线编辑 Nginx 配置，支持 NgxConfigEditor 或 Ace 编辑器。
- 配置保存后自动执行测试并重载 Nginx。
- 配置变更自动备份，支持版本对比与恢复。
- 在线查看 CPU、内存、系统负载、磁盘等运行指标。
- 在线查看 Nginx 日志并提供 Web Terminal。
- 一键申请与自动续签 Let's Encrypt 证书。
- 支持集群镜像操作到多个节点。
- 提供 MCP 接口与 OIDC 登录能力。

## 特色与差异点

- 单一二进制分发，部署路径灵活。
- 同时覆盖 Homebrew、Winget、Docker、Linux 脚本和 release 二进制安装。
- 除主流系统外，还覆盖 FreeBSD、OpenBSD、Dragonfly BSD、OpenWrt 等环境。
- 在配置编辑链路中内置“测试 + 重载 + 备份回滚”，更适合高频变更场景。

## 使用方式概览

- 可通过 Homebrew、Winget、Linux 安装脚本或 Docker 快速安装。
- 也可直接下载 release 二进制文件部署。
- 首次运行后通过浏览器访问服务地址完成初始化配置。

## 限制与注意事项

- 项目采用 AGPLv3 许可证；二次开发或对外提供网络服务前，需要评估并满足协议义务。
- README 与文档涉及多种安装与运行路径，生产环境应先按官方文档核对系统兼容性与部署方式。

## 链接

- https://github.com/0xJacky/nginx-ui
- https://github.com/0xJacky/nginx-ui/blob/dev/README.md
- https://github.com/0xJacky/nginx-ui/blob/dev/resources/readme/README-zh_CN.md
- https://nginxui.com/zh_CN/
- https://nginxui.com/zh_CN/guide/getting-started
- https://nginxui.com/zh_CN/guide/license
- https://github.com/0xJacky/nginx-ui/releases/tag/v2.3.3
- https://demo.nginxui.com

## 相关文档

- [[02-资源/通用开发工具/nginx：The official NGINX Open Source 开发工具.md|nginx：The official NGINX Open Source 开发工具]]；关联理由：上下游；说明：nginx-ui 直接用于管理 NGINX 配置与服务状态，两者是面板与被管理服务的上下游关系。

## 关联主题

- [[00-元语/self-hosting]]
- [[00-元语/observability]]
- [[00-元语/security]]
- [[00-元语/tool]]
