# rustfs：基于 Rust 构建的高性能、兼容 S3 的开源分布式对象存储系统，采用商业友好的 Apache 2.0 许可

## 文档信息
- 发布日期：2026-02-22
- 对象：GitHub 项目 `rustfs/rustfs`
- 项目主页：https://github.com/rustfs/rustfs
- 官方网站：https://rustfs.com/download/
- 开源协议：Apache License 2.0
- 主要语言：Rust
- 统计快照：Stars 22104，Forks 941，Watchers 63（抓取时间：2026-02-22）
- 版本快照：最新发布 1.0.0-alpha.83（发布时间：2026-02-11T09:14:49Z）

## 摘要
### 1) 一句话总结
RustFS 是一个基于 Rust 构建的高性能、兼容 S3 的开源分布式对象存储系统，采用商业友好的 Apache 2.0 许可，在处理 4KB 对象时性能比 MinIO 快 2.3 倍。

### 2) 关键点
*   **核心性能与安全**：基于 Rust 语言开发，具备内存安全性，专为数据湖、AI 和大数据工作负载优化。
*   **高度兼容性**：100% 兼容 S3 API，支持与 MinIO、Ceph 等其他 S3 兼容平台的平滑迁移与共存。
*   **开源与合规**：采用 Apache 2.0 协议（避免了 AGPL 的限制），无遥测数据收集，符合 GDPR (欧盟/英国)、CCPA (美国) 和 APPI (日本) 等数据隐私法规。
*   **已就绪功能**：目前已支持 S3 核心功能、上传/下载、版本控制、日志记录、事件通知、防位翻转（Bitrot Protection）、单节点模式、存储桶复制以及 K8s Helm Charts。
*   **部署方式多样**：支持一键脚本、Docker/Podman、Docker Compose（内置 Grafana/Prometheus 等可观测性工具）、源码编译（支持多架构）、Helm Chart 及 Nix Flake。
*   **项目热度**：截至最新数据，项目在 GitHub 上拥有超过 22,100 个 Stars，最新发布版本为 `1.0.0-alpha.83`。

### 3) 风险/不足
*   **功能完善度差距**：生命周期管理（Lifecycle Management）、分布式模式（Distributed Mode）以及 RustFS KMS 目前仍处于“测试中（Under Testing）”状态，尚未完全可用。
*   **Docker 权限风险**：容器以非 root 用户（UID 10001）运行，若使用 `-v` 挂载主机目录时未将目录所有者更改为 10001，将导致“权限被拒绝（permission denied）”错误。
*   **macOS 编译限制**：在 macOS 上进行 Linux 交叉编译时，由于系统默认的 `ulimit -n` 仅为 256，可能会触发 `ProcessFdQuotaExceeded` 错误，需要手动将限制调高至 4096 或以上。

## 功能与定位
🚀2.3x faster than MinIO for 4KB object payloads. RustFS is an open-source, S3-compatible high-performance object storage system supporting migration and coexistence with other S3-compatible platforms such as MinIO and Ceph.

## 典型使用场景
- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能
- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点
- 仓库长期活跃，最近更新时间为 2026-02-22T11:55:56Z。
- 项目创建于 2023-11-23T13:45:10Z，具备持续迭代与社区沉淀。
- 以 `Rust` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览
1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项
- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接
- 仓库：https://github.com/rustfs/rustfs
- 官网：https://rustfs.com/download/
- README：https://raw.githubusercontent.com/rustfs/rustfs/main/README.md
- Releases：https://github.com/rustfs/rustfs/releases

## 关联主题
- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/protocol]]
- [[00-元语/self-hosting]]
- [[00-元语/benchmark]]
- [[00-元语/compliance]]
- [[00-元语/observability]]
- [[00-元语/security]]
