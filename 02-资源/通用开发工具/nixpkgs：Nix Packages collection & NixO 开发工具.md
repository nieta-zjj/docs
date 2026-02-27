---
title: nixpkgs：Nix Packages collection & NixO 开发工具
对象: GitHub 仓库
项目主页: https://github.com/NixOS/nixpkgs
来源: NixOS/nixpkgs 官方仓库文档
---

## 摘要

nixpkgs 是 Nix 包管理器与 NixOS 的核心仓库，提供超过 120,000 个软件包定义，并通过声明式与纯函数式模型实现可复现的软件构建和系统配置。它同时覆盖包集合维护、NixOS 模块体系、Hydra 持续集成与缓存分发链路，适合需要跨环境一致性、可回滚配置和大规模包管理的开发与运维场景。

## 功能与定位

nixpkgs 是 Nix 生态的基础包集合与系统配置代码库，既提供软件包定义，也承载 NixOS 发行版相关模块与构建逻辑。项目核心定位是以声明式方式管理软件与系统状态，提升可复现性、可审计性和跨机器一致性。

## 典型使用场景

- 在开发机或 CI 中统一依赖版本，减少“本地能跑、线上失败”的环境偏差。
- 用 NixOS 模块配置系统服务、网络与运行时参数，实现配置即系统。
- 在团队内复用同一套包定义与构建规则，降低多平台维护成本。
- 为开源项目编写和维护 Nix 表达式，接入 Nix 生态进行分发。

## 特色与差异点

- 规模大：官方 README 明确其包集合规模超过 120,000。
- 可复现：依赖、构建和系统配置均以声明式表达，强调结果一致性。
- 工程化链路完整：结合 Hydra 持续构建与 `cache.nixos.org` 分发。
- 仓库角色复合：不仅是包集合，也包含 NixOS 相关模块与测试能力。

## 使用方式概览

- 通过 Nix 命令行与 nixpkgs 包集合安装或构建软件。
- 在 NixOS 配置中引入 nixpkgs，按声明式配置生成系统。
- 在仓库贡献流程中，按 `CONTRIBUTING.md` 与各子目录 README 约定提交包或模块变更。
- 通过 Nixpkgs/NixOS 手册查阅包定义、模块使用和贡献规则。

## 限制与注意事项

- 仓库采用 MIT 许可证，但不自动覆盖由 nixpkgs 构建出的上游软件制品；实际使用需分别核对对应软件许可证。
- 仓库体量与变更频率高，贡献前需要遵循其测试、审查与兼容性约束。
- 与系统引导、底层模块相关的改动风险较高，应优先参考官方贡献与评审规范。

## 链接

- GitHub 仓库：https://github.com/NixOS/nixpkgs
- README：https://github.com/NixOS/nixpkgs/blob/master/README.md
- 贡献指南：https://github.com/NixOS/nixpkgs/blob/master/CONTRIBUTING.md
- Nixpkgs 文档目录说明：https://github.com/NixOS/nixpkgs/blob/master/doc/README.md
- Nixpkgs 手册：https://nixos.org/manual/nixpkgs/
- NixOS 手册：https://nixos.org/nixos/manual
- Nix 手册：https://nixos.org/nix/manual

## 关联主题

- [[00-元语/cli]]
- [[00-元语/CI]]
- [[00-元语/github]]
- [[00-元语/workflow]]
