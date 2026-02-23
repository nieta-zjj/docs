---
title: "3FS：DeepSeek 开源的一款基于 C++ 的高性能分布式文件系统，专为 AI 训练与推理工作负载设计"

发布日期: "2026-02-22"
对象: "GitHub 项目 `deepseek-ai/3FS`"
项目主页: "https://github.com/deepseek-ai/3FS"
开源协议: "MIT License"
主要语言: "C++"
统计快照: "Stars 9712，Forks 1009，Watchers 91（抓取时间：2026-02-22）"
版本快照: "暂无正式发布记录"
---

## 摘要

### 1) 一句话总结
3FS（Fire-Flyer File System）是 DeepSeek 开源的一款基于 C++ 的高性能分布式文件系统，专为 AI 训练与推理工作负载设计，通过结合现代 SSD 和 RDMA 网络提供强大的共享存储能力。

### 2) 核心要点
* **基础信息**：项目主要使用 C++ 开发，采用 MIT 开源协议，目前在 GitHub 上拥有 9700+ Stars。
* **存储计算分离架构**：聚合了数千个 SSD 的吞吐量和数百个存储节点的网络带宽，使应用程序能够以无视数据局部性（locality-oblivious）的方式访问存储资源。
* **强一致性与标准接口**：采用 CRAQ（Chain Replication with Apportioned Queries）算法实现强一致性；通过事务型 KV 存储（如 FoundationDB）支持无状态元数据服务，并提供开发者熟悉的标准文件接口。
* **多场景 AI 工作负载支持**：
  * **数据加载**：支持跨计算节点对训练样本进行随机访问，消除预取或 Shuffle 数据的需求。
  * **Checkpointing**：支持大规模训练的高吞吐量并行 Checkpointing。
  * **推理 KVCache**：提供比基于 DRAM 的缓存更具成本效益的替代方案，具备高吞吐和更大容量。
* **极限性能表现**：在 180 个存储节点（配备 NVMe SSD 和 200Gbps IB 网卡）和 500+ 客户端的压测中，聚合读取吞吐量达到约 **6.6 TiB/s**。
* **GraySort 排序性能**：在 25 个存储节点和 50 个计算节点的集群上，耗时 30 分钟 14 秒完成了 110.5 TiB 数据的排序，平均吞吐量达 **3.66 TiB/min**。
* **KVCache 性能**：KVCache 客户端的峰值读取吞吐量最高可达 **40 GiB/s**。
* **构建依赖**：需要 `libfuse` (≥3.16.1)、`FoundationDB` (≥7.1) 以及 `Rust` 工具链 (≥1.75.0)，并支持在 Ubuntu、openEuler、TencentOS 等系统或通过 Docker 进行构建。

### 3) 风险与不足
* **编译器版本兼容性风险**：由于历史代码中使用了 `std::shuffle`，使用不同编译器版本（如 `g++10` 与 `g++11+`）编译的二进制文件可能存在不兼容问题（Issue #368）。
* **编译配置强依赖**：为解决上述兼容性问题，开发者在编译时必须显式指定 `-DSHUFFLE_METHOD` 参数以锁定一致的算法；且集群一旦部署，后续所有构建都必须严格保持该配置不变。

## 功能与定位

A high-performance distributed file system designed to address the challenges of AI training and inference workloads.

## 典型使用场景

- 用于模型训练、微调、推理或文档解析等基础能力建设。
- 作为上层 AI 应用的数据与模型基础设施。

## 核心功能

- 提供模型/推理相关核心能力。
- 支持与主流 AI 工具链协同。
- 兼顾实验验证与工程落地场景。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-21T09:58:43Z。
- 项目创建于 2025-02-27T13:36:53Z，具备持续迭代与社区沉淀。
- 以 `C++` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/deepseek-ai/3FS
- README：https://raw.githubusercontent.com/deepseek-ai/3FS/main/README.md
- Releases：https://github.com/deepseek-ai/3FS/releases

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/virtual-file-system]]
- [[00-元语/benchmark]]
