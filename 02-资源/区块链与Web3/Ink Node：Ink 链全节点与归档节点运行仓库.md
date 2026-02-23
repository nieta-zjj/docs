---
title: "Ink Node：Ink 链全节点与归档节点运行仓库"

对象: "Git 项目"
发布日期: "2026-02-22"
项目仓库: "https://github.com/inkonchain/node"
项目创建时间: "2024-05-13"
项目主页: "https://docs.inkonchain.com"
开源协议: "MIT License"
主要语言: "Shell"
用户提供热度快照: "40765"
GitHub 检索星标: "36799；抓取日期：2026-02-22；来源：`https://api.github.com/search/repositories?q=repo:inkonchain/node`"
---

## 摘要

`inkonchain/node` 是一个基于 Docker Compose 的开源脚本项目，用于在 Ink 链的主网或测试网上快速部署、配置和监控全节点与归档节点。

## 功能与定位

`inkonchain/node` 用于为 Ink 链提供标准化节点运行方式。项目定位是让节点运营者基于统一脚本管理主网与测试网节点，同时支持 Full Node 和 Archive Node 两类运行形态。

## 典型使用场景

- 基础设施团队为 Ink 链部署并维护长期在线节点。
- 开发与数据团队搭建测试网或主网同步节点用于查询与验证。
- 需要通过统一容器编排方式管理节点日志、同步状态和监控面板的运维场景。

## 核心功能

- 支持主网 `ink-mainnet` 与测试网 `ink-sepolia`。
- 支持全节点与归档节点两种模式。
- 支持通过环境变量配置 L1 RPC、Beacon 端点、同步模式和镜像参数。
- 提供日志查看、重启、升级、同步进度估算与 Grafana 可视化监控能力。

## 特色与差异点

- 项目基于 Optimism 的 `simple-optimism-node` Fork 并做 Ink 链定制。
- 以 Docker Compose 为核心，便于在同一套运行模型下执行部署和维护。
- 文档中给出了主网与测试网的硬件建议，可直接用于容量规划初判。

## 使用方式概览

1. 准备支持 Docker 与 Docker Compose 的运行环境。
2. 克隆仓库并基于 `.env.example` 配置节点参数。
3. 选择网络与节点类型后启动服务。
4. 通过日志与监控面板持续观察同步与运行状态。

## 限制与注意事项

- 节点运行对硬件和带宽有较高要求，归档节点资源需求更高。
- 文档包含会清理数据卷的危险操作说明，执行前需确认备份策略。
- 你提供的热度快照 `40765` 与本次抓取值 `36799` 存在差异，建议按具体记录日期理解该类指标。

## 链接

- GitHub：https://github.com/inkonchain/node
- Docs：https://docs.inkonchain.com
- README：https://raw.githubusercontent.com/inkonchain/node/main/README.md
- 上游项目：https://github.com/smartcontracts/simple-optimism-node

## 相关文档

- [[02-资源/区块链与Web3/Ink 文档站：基于 Next.js 与 Nextra 的官方文档仓库|Ink 文档站：基于 Next.js 与 Nextra 的官方文档仓库]]；关联理由：解说；说明：该仓库维护 Ink 官方文档站，而本项目的节点运行说明以该站点为主要入口。

## 关联主题

- [[00-元语/blockchain]]
- [[00-元语/protocol]]
- [[00-元语/self-hosting]]
- [[00-元语/observability]]
- [[00-元语/cli]]
- [[00-元语/github]]
