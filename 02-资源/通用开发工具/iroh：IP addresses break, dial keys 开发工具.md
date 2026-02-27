---
title: iroh：IP addresses break, dial keys 开发工具
对象: GitHub 仓库
项目主页: https://github.com/n0-computer/iroh
官方文档: https://iroh.computer/docs
来源:
  - https://github.com/n0-computer/iroh
  - https://github.com/n0-computer/iroh/tree/main/iroh
  - https://github.com/n0-computer/iroh/blob/main/iroh/docs/relays.md
  - https://github.com/n0-computer/iroh/tree/main/iroh/examples
  - https://github.com/n0-computer/iroh/blob/main/CHANGELOG.md
---

## 摘要

iroh 是一个基于 QUIC 的 P2P 开发工具库，核心思路是“按公钥拨号”而不是依赖固定 IP。它会优先直连、失败后尝试 NAT 打洞，再回退到中继网络，以降低复杂网络环境下的连接失败率。项目以 `Endpoint` 为核心入口，配合中继选择、地址发现和多协议生态，适合需要跨网络稳定互联的实时通信与数据传输场景。

## 功能与定位

iroh 提供“公钥即连接目标”的网络能力封装，让应用侧从“管理地址可达性”转向“声明要连接的对端身份”。

它面向需要跨 NAT、跨网络环境建立端到端连接的开发场景，底层基于 QUIC 与 Quinn，提供加密连接、并发流和数据报传输能力。

## 典型使用场景

- P2P 应用中的节点互联与会话建立。
- 需要在复杂网络中保持连接可用性的实时通信系统。
- 希望在直连与中继之间自动切换的跨地域数据传输。
- 需要基于公钥身份完成对端认证和连接管理的系统。

## 特色与差异点

- 连接目标使用公钥标识，弱化了对固定 IP 地址的依赖。
- 路由策略分层执行：直连优先，失败后打洞，再回退中继。
- 端点启动会基于延迟选择主中继，并可维护多中继连接。
- 仓库是工作区结构，核心库与 relay、DNS 发现、网络诊断组件拆分清晰。
- 采用 MIT 或 Apache-2.0 双许可证，便于工程侧集成。

## 使用方式概览

- Rust 集成：通过 `cargo add iroh` 引入核心库，以 `Endpoint` 作为主要入口。
- 场景示例：仓库内提供 connect、listen、echo、transfer、0-RTT、地址查找与连接监控等示例。
- 协议组合：可与 `iroh-blobs`、`iroh-gossip`、`iroh-docs` 等组件配合使用。
- 跨语言扩展：通过 `iroh-ffi` 支持非 Rust 语言调用。

## 限制与注意事项

- 双方建立连接前需要已知并可验证对端公钥身份。
- 打洞能力依赖中继可见性，至少需要已知目标端可用的中继信息。
- 若完全不使用中继，监听端必须在网络上直接可达。
- 本文仅整理项目定位与可验证能力，不包含任何绕过授权或规避限制的可操作细节。

## 链接

- GitHub 仓库：https://github.com/n0-computer/iroh
- 官方文档：https://iroh.computer/docs
- Rust 文档：https://docs.rs/iroh
- crates.io：https://crates.io/crates/iroh
- 变更记录：https://github.com/n0-computer/iroh/blob/main/CHANGELOG.md

## 关联主题

- [[00-元语/protocol]]
- [[00-元语/security]]
- [[00-元语/sdk]]
