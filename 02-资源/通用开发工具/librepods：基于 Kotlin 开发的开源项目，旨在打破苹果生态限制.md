---
title: "librepods：基于 Kotlin 开发的开源项目，旨在打破苹果生态限制"

发布日期: "2026-02-22"
对象: "GitHub 项目 `kavishdevar/librepods`"
项目主页: "https://github.com/kavishdevar/librepods"
开源协议: "GNU General Public License v3.0"
主要语言: "Kotlin"
统计快照: "Stars 25469，Forks 1368，Watchers 84（抓取时间：2026-02-22）"
版本快照: "最新发布 linux-v0.1.0（发布时间：2025-11-10T08:40:41Z）"
---

## 摘要

### 1) 一句话总结
LibrePods 是一个基于 Kotlin 开发的开源项目，旨在打破苹果生态限制，让 Android 和 Linux 等非苹果设备也能解锁并使用 AirPods 的专属高级功能（如降噪控制、入耳检测和助听器等）。

### 2) 核心要点
*   **核心功能**：在非苹果设备上实现降噪模式切换、入耳检测（自动控制音乐及切换扬声器）、精准电量显示、头部手势接听电话以及对话感知等功能。
*   **设备兼容性**：全面支持 AirPods Pro（第二代）、AirPods Pro（第三代，除心率监测外）和 AirPods Max；其他 AirPods 型号支持电量显示和入耳检测等基础功能。
*   **平台支持**：支持 Android 和 Linux 平台。Linux 旧版功能较少，新版正在开发中；Android 版提供丰富的 UI 界面、桌面小部件和快捷设置磁贴。
*   **VendorID 伪装**：通过将设备的 VendorID 修改为苹果的 ID，可解锁最多两台设备的多点连接、自定义通透模式以及完整的助听器配置功能。
*   **Android 运行要求**：除 ColorOS/OxygenOS 16 外，由于 Android 蓝牙栈的已知 Bug，应用必须在 Android 13 及以上系统运行，且**强制要求 Root 权限并安装 Xposed 框架**。
*   **个性化定制**：支持重命名 AirPods、自定义长按操作、调整所有无障碍设置，若通过 Root 模块安装为系统应用，还可在 Android 系统设置中显示 AirPods 图标和电量。
*   **项目热度与协议**：项目采用 GNU GPL v3.0 协议开源，目前已获得超过 2.5 万个 Stars。

### 3) 风险与不足
*   **开发暂停**：因开发者需准备考试（JEE Advanced），项目开发及 PR/Issue 的处理已暂停，预计 2026 年 5 月 17 日恢复。
*   **Android 系统限制**：由于 Android 蓝牙栈的底层 Bug，绝大多数 Android 用户必须 Root 设备并使用 Xposed 才能使用该软件，目前没有免 Root 的替代方案。
*   **固件兼容性问题**：受近期 AirPods 固件升级影响，用户必须启用“关闭聆听模式（Off listening mode）”才能将耳机切换至“关闭”状态。
*   **蓝牙连接与重命名缺陷**：在 Android 上重命名 AirPods 后必须重新配对才能生效；此外，摘下耳机后，Android 系统可能会持续尝试重新连接 A2DP 配置文件，应用需进行主动干预断开。

## 功能与定位

AirPods liberated from Apple's ecosystem.

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T11:50:41Z。
- 项目创建于 2024-09-26T19:31:11Z，具备持续迭代与社区沉淀。
- 以 `Kotlin` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/kavishdevar/librepods
- README：https://raw.githubusercontent.com/kavishdevar/librepods/main/README.md
- Releases：https://github.com/kavishdevar/librepods/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/hardware-control]]
- [[00-元语/audio]]
- [[00-元语/desktop-client]]
- [[00-元语/tool]]
