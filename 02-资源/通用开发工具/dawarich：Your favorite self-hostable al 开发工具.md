---
title: dawarich：Your favorite self-hostable al 开发工具
对象: GitHub 项目
仓库: https://github.com/Freika/dawarich
项目主页: https://dawarich.app
来源: README、CHANGELOG、docs
最新版本: 1.3.0
版本日期: 2026-02-25
---

## 摘要

dawarich 是一个可自托管的位置历史追踪 Web 应用，定位为 Google Timeline 的替代方案。它支持多来源位置数据导入、地图可视化、行程与访问记录、统计分析、家庭位置共享，以及与 Immich 和 Photoprism 的照片地理数据联动；项目活跃迭代，部署前后需要重点关注更新说明与备份策略。

## 功能与定位

dawarich 面向希望自主管理位置数据的个人或家庭用户，核心目标是把“位置采集、历史回放、统计分析、共享协作”集中在一个可自托管系统中。根据仓库 README，它重点覆盖位置历史管理、可视化与导入导出能力，并提供从 Google Maps Timeline 等来源迁移数据的路径。

## 典型使用场景

- 迁移 Google Timeline 历史数据到自托管环境，统一管理个人位置记录。
- 用地图时间轴回看通勤或旅行轨迹，按年份和月份查看活动统计。
- 为家庭成员提供基于授权的位置共享与查看能力。
- 结合 Immich 或 Photoprism，把带地理信息的照片与轨迹联动展示。

## 特色与差异点

- 支持多源导入与标准格式导出，覆盖 Google Maps Timeline、OwnTracks、GPX/GeoJSON、照片 EXIF 等来源。
- 地图视图支持多图层与时间轴/回放能力，便于定位单日或单段旅程的变化。
- 最新版本在 CHANGELOG 中明确记录了用户时区设置、`motion_data` 数据结构、以及 v2 导出导入格式增强（含大数据量分片与兼容策略）。
- 提供 Docker、Synology、Kubernetes 等多环境部署文档，适配从个人服务器到集群环境的不同运维需求。

## 使用方式概览

- 服务端可通过 Docker Compose 快速启动，也可参考仓库文档部署到 Synology 或 Kubernetes。
- 客户端侧需要配合支持的轨迹上报应用使用，例如 Dawarich for iOS、OwnTracks、Overland、GPSLogger、Home Assistant。
- 对外访问通常通过反向代理接入，并在环境变量中配置允许访问的主机名。

## 限制与注意事项

- README 明确提示项目处于活跃开发阶段，不建议自动更新；升级前应先阅读发布说明。
- 官方建议在升级前先备份数据，并保留原始导入数据，避免在异常场景下无法回溯。
- Map v2 依赖 WebGL 支持；大规模导入导出与后台计算会带来额外资源消耗。
- 仓库文档给出默认初始账号密码，实际部署后应立即修改。

## 链接

1. 仓库主页：https://github.com/Freika/dawarich
2. README：https://github.com/Freika/dawarich/blob/master/README.md
3. Changelog：https://github.com/Freika/dawarich/blob/master/CHANGELOG.md
4. 文档入口：https://dawarich.app/docs/intro
5. Docker 安装文档：https://github.com/Freika/dawarich/blob/master/docs/How_to_install_Dawarich_using_Docker.md
6. Synology 安装文档：https://github.com/Freika/dawarich/blob/master/docs/How_to_install_Dawarich_on_Synology.md
7. Kubernetes 安装文档：https://github.com/Freika/dawarich/blob/master/docs/How_to_install_Dawarich_in_k8s.md

## 关联主题

- [[00-元语/github]]
- [[00-元语/self-hosting]]
- [[00-元语/tool]]
- [[00-元语/PostgreSQL]]
- [[00-元语/workflow]]
