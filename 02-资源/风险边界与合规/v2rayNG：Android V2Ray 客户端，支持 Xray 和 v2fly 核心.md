---
title: "v2rayNG：Android V2Ray 客户端，支持 Xray 和 v2fly 核心"

发布日期: "2026-02-22"
对象: "GitHub 项目 `2dust/v2rayNG`"
项目主页: "https://github.com/2dust/v2rayNG"
官方网站: "https://v2rayng.2dust.link"
开源协议: "GNU General Public License v3.0"
主要语言: "Kotlin"
统计快照: "Stars 51241，Forks 6958，Watchers 636（抓取时间：2026-02-22）"
版本快照: "最新发布 2.0.10（发布时间：2026-02-22T06:29:19Z）"
---

## 摘要

**1) 一句话总结**
v2rayNG 是一款基于 Kotlin 开发的 Android 平台 V2Ray 客户端，支持 Xray 和 v2fly 核心，采用 GPL v3.0 协议开源且拥有极高的社区热度（超 5.1 万 Stars）。

**2) 关键要点**
*   **核心功能**：专为 Android 设备设计的 V2Ray 客户端，兼容并支持 Xray core 与 v2fly core。
*   **技术要求**：主要使用 Kotlin（版本 2.3.0）开发，要求 Android API 24 及以上版本。
*   **项目数据**：截至 2026 年 2 月，项目拥有 51241 个 Stars 和 6958 个 Forks，最新发布版本为 2.0.10。
*   **路由规则配置**：`geoip.dat` 和 `geosite.dat` 存放在应用的 assets 目录下；支持下载 Loyalsoldier 仓库的增强版规则，也支持手动导入官方列表或第三方 dat 文件（如 h2y）。
*   **开发与编译**：项目可在 Android Studio 或使用 Gradle wrapper 直接编译；核心 aar 文件需通过 Golang 项目（`AndroidLibV2rayLite` 或 `AndroidLibXrayLite`）编译生成。
*   **模拟器兼容性**：支持在 Android 模拟器上运行；若在 WSA（Windows 上的 Android 子系统）中使用，需通过命令行（`appops`）手动授予 VPN 激活权限。

**3) 风险/缺口**
*   **合规风险**：项目被明确归类为“风险边界与合规”类别，并标记有 `risk_flag: 1`。
*   **功能依赖缺口**：在应用内下载增强版路由规则文件时，前提是必须已经有一个可正常工作的代理（working proxy）。
*   **开发组件过时风险**：官方开发指南中明确指出，项目自带的 aar 文件中的 v2ray 核心可能已经过时（outdated），开发者可能需要自行重新编译。

## 功能与定位

A V2Ray client for Android, support Xray core and v2fly core

## 典型使用场景

- 用于识别项目的合规边界与使用风险。
- 为内部收录提供风险说明，避免误用。

## 核心功能

- 记录项目定位与公开信息。
- 标注潜在合规、授权或滥用风险。
- 不提供可操作细节。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:31:32Z。
- 项目创建于 2019-05-15T02:15:31Z，具备持续迭代与社区沉淀。
- 以 `Kotlin` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 该项目可能涉及安全测试、访问规避或策略边界等高风险议题。
- 本仓库仅记录项目定位与风险提示，不复述任何可执行步骤、命令、脚本、配置或分发渠道细节。
- 若无法在合规边界内使用，建议不采用。

## 链接

- 仓库：https://github.com/2dust/v2rayNG
- 官网：https://v2rayng.2dust.link
- README：https://raw.githubusercontent.com/2dust/v2rayNG/master/README.md
- Releases：https://github.com/2dust/v2rayNG/releases

## 关联主题

- [[00-元语/compliance]]
- [[00-元语/risk]]
- [[00-元语/security]]
- [[00-元语/protocol]]
- [[00-元语/tool]]
- [[00-元语/github]]
