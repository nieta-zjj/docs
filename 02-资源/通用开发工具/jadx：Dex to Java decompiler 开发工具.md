---
title: jadx：Dex to Java decompiler 开发工具
来源: GitHub 仓库与发布页
项目主页: https://github.com/skylot/jadx
开源协议: Apache License 2.0
---

## 摘要

jadx 是面向 Android 逆向分析场景的开源工具，支持将 Dex、APK 等输入还原为可读 Java 代码，并同时提供 CLI 与 GUI 两种使用形态。

- 支持 APK、dex、aar、aab、zip 等输入类型，并可解码 AndroidManifest.xml 与 resources.arsc 相关资源。
- 内置反混淆能力，图形界面提供语法高亮、跳转、查找用法、全文检索与 Smali 调试能力。
- 既可作为独立工具使用，也可作为 Java 项目中的依赖库集成。
- 官方信息显示其反编译结果并非始终 100% 完整，复杂样本可能出现错误，需要结合故障排查资料复核。

## 功能与定位

jadx 是一款 Dex to Java decompiler 工具，目标是把 Android 应用相关字节码与资源结构转换为更易阅读与分析的形式，服务于代码理解、问题定位与安全研究等场景。

## 典型使用场景

- 分析 APK 与 Dex 内容，理解应用结构与实现逻辑。
- 查看与核对 AndroidManifest.xml 及资源信息。
- 在图形界面中进行类与符号的跳转、检索和对照分析。
- 在研发或研究工具链中作为 Java 库进行集成。

## 核心功能

- Dalvik 字节码到 Java 代码的反编译。
- Android 资源与清单文件解码。
- 反混淆支持，提升可读性。
- CLI 与 GUI 双形态工具。
- GUI 侧提供语法高亮、跳转、用法检索、全文搜索与 Smali 调试。

## 特色与差异点

- 同时覆盖命令行批处理需求与图形化交互分析需求。
- 支持多平台使用，并提供发布包与常见分发渠道。
- 最新发布记录显示项目持续维护，包含 GUI 稳定性与核心类型处理相关修复。

## 使用方式概览

可通过官方仓库发布页获取发行版本，或在满足 Java 11+ 环境下自行构建。项目同时提供命令行工具与图形界面工具，适用于自动化处理与交互式分析两类工作流。

## 限制与注意事项

- 官方已明确说明：jadx 在不少情况下无法保证 100% 完整反编译，结果需人工复核。
- 涉及逆向分析时，应仅在获得授权或合规场景下使用，并遵循适用法律与组织规范。
- 本仓库只保留工具定位与使用边界信息，不复述可能被滥用的可操作细节。

## 链接

- 仓库主页：https://github.com/skylot/jadx
- 发布页：https://github.com/skylot/jadx/releases
- 故障排查：https://github.com/skylot/jadx/wiki/Troubleshooting-Q&A
- 作为库使用说明：https://github.com/skylot/jadx/wiki/Use-jadx-as-a-library
- Smali 调试器说明：https://github.com/skylot/jadx/wiki/Smali-debugger

## 关联主题

- [[00-元语/cli]]
- [[00-元语/security]]
- [[00-元语/compliance]]
