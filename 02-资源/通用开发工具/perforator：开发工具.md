---
title: perforator：开发工具
对象: GitHub 仓库
项目主页: https://github.com/yandex/perforator
官方文档: https://perforator.tech/docs/
来源:
  - https://raw.githubusercontent.com/yandex/perforator/main/README.md
  - https://perforator.tech/docs/
  - https://github.com/yandex/perforator/releases
---

## 摘要

perforator 是 Yandex 开源的持续性能分析工具，面向生产环境与大型数据中心，主打低开销、非侵入式采集与集群级可观测能力。它基于 eBPF 采集内核态与用户态调用栈，支持本地 CLI 与 Kubernetes 两种使用方式，并提供查询与火焰图能力用于定位性能瓶颈。

## 功能与定位

perforator 的定位是持续性能剖析工具，用于在不中断业务的前提下长期收集与分析 CPU 性能数据。项目强调在生产环境可用，并提供从采集、存储到分析展示的一体化能力。

## 典型使用场景

- 在生产环境持续追踪服务性能退化，定位高 CPU 消耗函数或调用链。
- 在 Kubernetes 集群中做集中化性能画像采集与分析。
- 在优化流程中生成 sPGO（AutoFDO）相关画像数据，用于编译器优化。
- 在版本对比或实验流量场景下，观察不同实现的性能差异。

## 特色与差异点

- 基于 eBPF 的非侵入式采集，不要求对目标程序做代码改造。
- 支持在缺少 frame pointer 或 debug symbols 时进行栈回溯。
- 同时提供本地录制能力与集群部署路径，适配从单机到大规模环境的使用需求。
- 提供查询语言与火焰图 UI，便于从原始采样数据快速进入问题定位。

## 使用方式概览

- 本地模式：通过 CLI 在单机执行采样与分析，作为 Linux perf 的替代路径之一。
- 集群模式：按官方文档使用 Helm 在 Kubernetes 中部署，实现持续采集与集中查看。
- 交付形态：可从源码构建，也可使用 releases 提供的预编译二进制。

## 限制与注意事项

- 平台约束来自官方说明：最低为 x86 64-bit Linux。
- 资源约束来自 README：基础运行内存约 512MB，CPU 开销通常低于 1%。
- 语言支持存在成熟度差异：C++/C/Go/Rust 为主要支持，Java/Python 仍含实验性范围。
- 版本升级需关注兼容性提示：发布记录中出现过数据库 schema 变更并要求迁移的情况。
- 许可证为混合模式：仓库主许可证为 Apache-2.0，部分 eBPF/JVM 相关代码为 GPL-2.0，落地前应做合规评估。

## 链接

- https://github.com/yandex/perforator
- https://perforator.tech/docs/
- https://raw.githubusercontent.com/yandex/perforator/main/README.md
- https://github.com/yandex/perforator/releases

## 关联主题

- [[00-元语/observability]]
- [[00-元语/cli]]
- [[00-元语/tool]]
