---
title: "Union：基于零知识证明的跨链基础设施"

发布日期: "2026-02-22"
对象: "GitHub 项目 `unionlabs/union`"
项目主页: "https://github.com/unionlabs/union"
官方文档: "https://docs.union.build/"
官方应用: "https://app.union.build/"
Stars（记录值）: "79178（用户记录）"
开源协议: "Apache License 2.0 / MIT License"
---

## 摘要

**1) 一句话总结**
Union 是一个基于零知识证明（ZK）的跨链基础设施层，旨在通过完全去信任化、零第三方依赖的方式，实现多链生态间的通用消息传递、资产转移与 DeFi 应用构建。

**2) 核心要点**
*   **项目热度与开源**：GitHub 拥有 79178 Stars，采用 Apache License 2.0 和 MIT License 双重开源协议。
*   **零第三方依赖**：架构设计完全不依赖受信任的第三方、预言机（Oracles）、多重签名或多方计算（MPC），通过底层共识验证机制保障跨链安全。
*   **广泛的生态兼容**：原生兼容 Cosmos 生态（实现 IBC 协议），并支持连接 EVM 兼容链（如 Ethereum, Arbitrum, Base, BSC）以及 Sui, Sei, Babylon 等其他网络。
*   **全栈模块化组件**：核心组件包括 `uniond`（基于 CometBLS 的节点）、`galoisd`（ZK 证明器）、`voyager`（高性能跨生态中继器）以及多生态轻客户端。
*   **开发者支持**：提供 CosmWasm 和 EVM 双栈智能合约支持，配备 TypeScript SDK，且已支持十余个主流区块链网络的主网或测试网接入。
*   **去中心化治理**：协议演进、跨链合约升级、网络连接及代币配置均由去中心化治理控制。
*   **可重复构建**：开发工作流深度集成 Nix，为开发者提供统一的依赖环境，确保所有组件的构建过程完全可重复。

**3) 风险与不足**
*   **平台构建限制**：部分组件仅限 Linux 环境构建，macOS 用户无法直接原生编译，需借助虚拟机（官方推荐使用 OrbStack 搭建 NixOS）进行开发。

## 功能与定位

Union 面向跨链消息与资产互操作：目标是提供一个去信任化的跨链基础设施层，用以连接不同链生态并承载更上层的 DeFi/NFT/应用协议。

## 典型使用场景

- 跨链消息传递与链间应用交互。
- 跨链资产转移与跨生态流动性/DeFi 组合。
- 为多链产品提供统一的互操作基础设施。

## 核心组件

- `uniond`：节点实现（仓库描述为基于 CometBLS）。
- `galoisd`：零知识证明器。
- `voyager`：跨生态中继器（Relayer）。
- 多生态轻客户端与合约/SDK 支持：CosmWasm、EVM、TypeScript SDK。

## 限制与注意事项

- 构建与开发环境依赖较重（Nix），并且部分组件对平台有要求；在团队落地前应先验证开发与部署链路。
- 跨链基础设施属于高风险领域：上线前应充分评估安全模型、审计与应急预案。

## 链接

- 仓库：https://github.com/unionlabs/union
- 文档：https://docs.union.build/
- 应用：https://app.union.build/
- 官网：https://union.build
- Discord：https://discord.union.build

## 关联主题

- [[00-元语/blockchain]]
- [[00-元语/github]]
- [[00-元语/protocol]]
- [[00-元语/sdk]]
- [[00-元语/wasm]]
- [[00-元语/security]]
- [[00-元语/risk]]
