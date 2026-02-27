---
title: "ZLinq：应用平台"
对象: "GitHub 仓库 Cysharp/ZLinq"
项目主页: "https://github.com/Cysharp/ZLinq"
开源协议: "MIT"
最新版本: "v1.5.5"
版本发布日期: "2026-02-12"
来源: "README、src/ZLinq*.csproj、tests/System.Linq.Tests/README、GitHub Releases、GitHub API"
记录日期: "2026-02-26"
---

## 摘要

- ZLinq 是一个面向 .NET、Unity 和 Godot 的零分配 LINQ 实现，核心目标是在保持 LINQ 习惯的前提下降低分配并提升性能。
- 项目通过 `AsValueEnumerable()` 将枚举过程转为结构体链路，并提供 LINQ to Span、LINQ to SIMD、LINQ to Tree 等能力。
- 仓库强调与 .NET 10 LINQ 的高兼容性，并提供 `ZLinq.DropInGenerator` 用于 drop-in replacement。
- 最新 release 为 `v1.5.5`（2026-02-12），公开变更包含 `Average(int)` 溢出修复与部分算子资源释放问题修复。

## 功能与定位

ZLinq 定位为 .NET 生态中的高性能 LINQ 替代实现，重点服务对分配和吞吐敏感的后端服务、工具链以及游戏开发场景。其核心思想是以 `ValueEnumerable` 和 `IValueEnumerator<T>` 为基础，在链式查询中减少额外分配，并尽量保持 LINQ 使用体验。

## 典型使用场景

- 需要在热点路径中减少 LINQ 分配成本的 .NET 应用。
- 对 `Span<T>`、数组、列表进行高频查询与聚合的场景。
- 对树结构做遍历查询的场景，如文件系统节点、`JsonNode`、Unity 的 GameObject/Transform。
- 希望在现有代码中渐进替换标准 LINQ、而不是重写全部查询逻辑的团队。

## 核心功能

- 零分配链式查询：通过 `AsValueEnumerable()` 进入结构体枚举链路。
- 高兼容 LINQ API：README 声称与 .NET 10 LINQ 高兼容，并覆盖多项新增操作符。
- SIMD 优化路径：在 .NET 8+ 且满足条件时，可对 `Sum`、`Average`、`Min`、`Max`、`Contains`、`SequenceEqual` 等操作应用 SIMD。
- 树查询扩展：提供面向树结构的 `Ancestors`、`Children`、`Descendants`、`BeforeSelf`、`AfterSelf`。
- 扩展包生态：包含 `ZLinq.FileSystem`、`ZLinq.Json`，并覆盖 Unity/Godot 场景。
- Drop-in Generator：提供 `ZLinq.DropInGenerator`，用于按命名空间和集合类型生成替换扩展。

## 特色与差异点

- 框架覆盖范围较广：`netstandard2.0`、`netstandard2.1`、`net8.0`、`net9.0`、`net10.0`。
- 不只做对象集合 LINQ，还提供 Span、SIMD、Tree 三类能力。
- 把“性能优化”与“兼容现有 LINQ 写法”放在同一条演进路径上，便于逐步迁移。

## 使用方式概览

1. 从 NuGet 安装核心包 `ZLinq`。
2. 在代码中引入 `using ZLinq;`。
3. 对可迭代数据调用 `AsValueEnumerable()` 后进行查询链式调用。
4. 需要树结构查询时按对象类型引入对应扩展包（如 `ZLinq.FileSystem`、`ZLinq.Json`）。
5. 需要全局替换策略时评估 `ZLinq.DropInGenerator` 的生成范围与命名空间边界。

## 限制与注意事项

- 在 .NET 9+ 下，`ValueEnumerable` 为 `ref struct`，不能直接作为 `IEnumerable<T>` 传递，也不能跨 `await`/`yield` 使用。
- 对小规模数据或超长链路，结构体拷贝成本可能削弱收益，需用基准测试验证。
- 与仅接受 `IEnumerable<T>` 的外部 API 协作时，通常仍需先物化为数组或列表。
- README 中的性能与兼容性结论来自项目自述和公开测试/基准，应结合自身场景复测。

## 链接

- 仓库主页：https://github.com/Cysharp/ZLinq
- README：https://github.com/Cysharp/ZLinq/blob/main/README.md
- Core csproj：https://github.com/Cysharp/ZLinq/blob/main/src/ZLinq/ZLinq.csproj
- FileSystem csproj：https://github.com/Cysharp/ZLinq/blob/main/src/ZLinq.FileSystem/ZLinq.FileSystem.csproj
- Json csproj：https://github.com/Cysharp/ZLinq/blob/main/src/ZLinq.Json/ZLinq.Json.csproj
- 测试说明：https://github.com/Cysharp/ZLinq/blob/main/tests/System.Linq.Tests/README.md
- Releases：https://github.com/Cysharp/ZLinq/releases
- Latest release（v1.5.5）：https://github.com/Cysharp/ZLinq/releases/tag/1.5.5

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
