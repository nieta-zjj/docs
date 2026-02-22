# windows：允许在 Docker 容器中运行 Windows 操作系统的开源项目，内置全自动安装、KVM 硬件加速及 Web 视图访问功能

## 文档信息
- 发布日期：2026-02-22
- 对象：GitHub 项目 `dockur/windows`
- 项目主页：https://github.com/dockur/windows
- 开源协议：MIT License
- 主要语言：Shell
- 统计快照：Stars 50053，Forks 4046，Watchers 235（抓取时间：2026-02-22）
- 版本快照：最新发布 v5.14（发布时间：2025-11-22T04:09:01Z）

## 摘要
### 1) 一句话总结
dockur/windows 是一个允许在 Docker 容器中运行 Windows 操作系统的开源项目，内置全自动安装、KVM 硬件加速及 Web 视图访问功能。

### 2) 核心要点
*   **项目基础**：主要使用 Shell 编写，采用 MIT 开源协议，在 GitHub 上拥有超 5 万 Stars，最新发布版本为 v5.14。
*   **核心特性**：支持自动下载 ISO 镜像、KVM 硬件加速，并提供基于 Web 的查看器（默认端口 8006）和 RDP 远程桌面连接（默认端口 3389）。
*   **部署方式**：支持通过 Docker Compose、Docker CLI、Kubernetes、GitHub Codespaces 以及图形化安装器（WinBoat）进行部署。
*   **系统版本**：默认安装 Windows 11 Pro，可通过 `VERSION` 环境变量指定安装 Windows 10/8.1/7/Vista/XP/2000、Windows Server (2003-2025)，或使用自定义 ISO 链接及本地镜像文件。
*   **资源配置**：默认分配 2 核 CPU、4GB 内存和 64GB 磁盘空间，可通过 `CPU_CORES`、`RAM_SIZE` 和 `DISK_SIZE` 环境变量进行自定义调整。
*   **自动化与定制**：默认执行全自动安装并创建默认账户（用户名 `Docker`，密码 `admin`，可修改）；支持通过挂载 `/oem` 目录运行自定义安装后脚本（`install.bat`）。
*   **硬件与网络**：支持宿主机文件共享（挂载至 `/shared`）、多磁盘添加、物理磁盘/分区直通及 USB 设备直通；网络支持默认桥接、macvlan 独立 IP 分配及 DHCP 模式。
*   **合法性**：项目仅包含开源代码，不分发受版权保护的材料，使用的产品密钥均为微软提供的通用试用占位符。

### 3) 风险与不足
*   **磁盘扩容风险**：通过环境变量扩大磁盘容量后，新增空间会显示为未分配，必须在 Windows 内手动扩展磁盘分区。
*   **手动安装风险**：官方建议使用自动安装以避免虚拟环境中的常见问题，若强制开启手动安装（`MANUAL="Y"`）需用户自行承担风险。
*   **网络隔离限制**：使用 macvlan 为容器分配独立 IP 时，受 macvlan 设计限制，该 IP 默认无法与 Docker 宿主机进行通信。
*   **USB 磁盘直通风险**：若直通 USB 磁盘设备，必须等待 Windows 安装完全结束后再连接，否则可能导致磁盘顺序重排而使安装失败。
*   **云环境兼容性**：依赖 KVM 加速，大多数云服务提供商（VPS）不支持嵌套虚拟化，可能导致无法正常运行。

## 功能与定位
Windows inside a Docker container.

## 典型使用场景
- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能
- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点
- 仓库长期活跃，最近更新时间为 2026-02-22T12:00:17Z。
- 项目创建于 2024-01-14T13:09:40Z，具备持续迭代与社区沉淀。
- 以 `Shell` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览
1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项
- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接
- 仓库：https://github.com/dockur/windows
- README：https://raw.githubusercontent.com/dockur/windows/master/README.md
- Releases：https://github.com/dockur/windows/releases

## 关联主题
- [[00-元语/windows]]
- [[00-元语/self-hosting]]
- [[00-元语/cli]]
- [[00-元语/hardware-control]]
- [[00-元语/compliance]]
- [[00-元语/github]]
