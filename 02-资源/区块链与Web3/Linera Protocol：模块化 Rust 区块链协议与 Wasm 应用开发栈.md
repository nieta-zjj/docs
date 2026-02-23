---
title: "Linera Protocol：模块化 Rust 区块链协议与 Wasm 应用开发栈"

发布日期: "2026-02-22"
对象: "GitHub 项目 `linera-io/linera-protocol`"
项目主页: "https://github.com/linera-io/linera-protocol"
官方网站: "https://linera.io"
开发者页面: "https://linera.dev"
开源协议: "Apache-2.0"
主要语言: "Rust"
统计快照: "Stars 32135，Forks 2293，Watchers 195（抓取时间：2026-02-22）"
版本快照: "最新 release `v0.15.13`（prerelease），发布时间 `2026-02-18`"
备注: "用户提供“27981”，与当前公开 Stars 统计不一致；本条目按抓取时公开数据记录。"
---

## 摘要

**一句话总结**
Linera-protocol 是一个基于 Rust 开发的 Web3 区块链基础设施，提供多模块架构、Wasm 智能合约 SDK 及全功能 CLI 工具，专为高可扩展、低延迟的去中心化应用设计。

**核心要点**
- 技术栈与协议：主要使用 Rust 编写，采用 Apache-2.0 开源协议，当前公开 Stars 数为 32135。
- 多模块架构：系统采用 multi-crate 结构，涵盖底层基础与执行（`linera-base`, `linera-execution`, `linera-core`）以及通信与存储（`linera-rpc`, `linera-storage`）。
- 应用开发 SDK：提供 `linera-sdk`，专门用于开发编译为 WebAssembly (Wasm) 目标的 Rust 智能合约与去中心化应用（dApps）。
- 全功能 CLI 工具：内置 `linera` 命令行客户端，支持资产转账、开/关链、所有权变更、网络与节点管理、应用发布及钱包管理。
- 配套生态服务：包含索引器（`linera-indexer`）、浏览器（`linera-explorer`），并支持 Docker 和 Kubernetes 部署配置。
- 外部 HTTP 请求机制：支持在智能合约中执行受共识约束的外部 HTTP 请求，提供三种模式（服务发起、合约直接发起、合约通过服务预言机发起），允许开发者在非确定性隔离与执行成本之间进行权衡。
- 丰富的业务场景：适用于代币、众筹、社交、自动化做市商（AMM）、订单匹配引擎、任务处理及 LLM 代理等 Web3 场景，官方 `examples` 目录提供了大量开箱即用的示例合约。
- 开发环境要求：基础依赖包括 Rust（需 wasm32 target）、protoc 和 Git；macOS 需安装 clang/llvm，Windows 建议使用 WSL，同时提供 Nix flake 开发环境选项。

**风险与不足**
- 当前最新版本（如 v0.15.13）仍处于预发布（prerelease）阶段，尚未发布正式稳定版。
- 在智能合约中直接发起 HTTP 请求时，存在破坏共识的风险，开发者需严格注意共识机制下的确定性约束。

## 功能与定位

Linera Protocol 定位为面向高可扩展、低延迟 Web3 应用的区块链基础设施主仓库。仓库采用多 crate 架构，覆盖链核心、执行层、存储与 RPC、客户端与服务端、SDK 与示例应用等完整开发链路。

## 典型使用场景

- 构建基于 Rust + Wasm 的去中心化应用。
- 搭建包含代币、众筹、社交、AMM、订单匹配等链上业务逻辑的应用原型。
- 在本地网络中完成钱包初始化、链操作、应用发布与验证。
- 在应用中处理外部 HTTP 数据，并根据确定性要求选择调用模式。

## 核心功能

- 模块化协议栈：`linera-base`、`linera-execution`、`linera-chain`、`linera-core`、`linera-rpc` 等分层模块。
- 应用开发能力：`linera-sdk` 支持 Wasm 目标的 Rust 应用开发。
- CLI 工具链：`linera` 命令覆盖链管理、钱包、应用发布、网络与存储操作。
- 部署配套：仓库内提供 `docker`、`kubernetes`、`configuration` 等目录用于环境配置与部署辅助。
- 示例生态：`examples` 提供 `counter`、`fungible`、`social`、`amm`、`rfq`、`llm`、`task-processor` 等示例。

## 特色与差异点

- 多层架构清晰：从底层数据结构到链执行与服务层的职责边界明确，便于按模块演进。
- 开发与运行一体化：仓库同时覆盖 SDK、CLI、服务、示例与部署配置，减少跨仓整合成本。
- 共识约束下的外部数据处理：通过 service、contract、oracle 三种 HTTP 请求模式处理确定性与成本的工程权衡。

## 使用方式概览

1. 按 `INSTALL.md` 准备 Rust、wasm32 target、protoc、Git 等基础环境。
2. 通过 CLI 启动本地网络并初始化钱包，验证链上基本操作流程。
3. 使用 `linera-sdk` 编写应用并编译为 Wasm。
4. 通过 CLI 发布模块并创建应用实例，结合示例目录进行功能验证。
5. 按部署需求接入 Docker 或 Kubernetes 配置。

## 限制与注意事项

- 最新版本为预发布版本，生产使用前需评估版本稳定性与兼容性。
- 涉及外部 HTTP 请求时，必须优先评估确定性要求，避免因响应差异影响共识结果。
- 该项目模块较多，落地前建议按具体场景选择子模块与示例，避免一次性引入过大范围。

## 链接

- 仓库：https://github.com/linera-io/linera-protocol
- README：https://raw.githubusercontent.com/linera-io/linera-protocol/main/README.md
- CLI 文档：https://raw.githubusercontent.com/linera-io/linera-protocol/main/CLI.md
- 安装说明：https://raw.githubusercontent.com/linera-io/linera-protocol/main/INSTALL.md
- 官网：https://linera.io
- 开发者页面：https://linera.dev
- 白皮书：https://linera.io/whitepaper
- 最新 Release：https://github.com/linera-io/linera-protocol/releases/tag/v0.15.13

## 关联主题

- [[00-元语/protocol]]
- [[00-元语/github]]
- [[00-元语/blockchain]]
- [[00-元语/wasm]]
- [[00-元语/sdk]]
- [[00-元语/cli]]
- [[00-元语/self-hosting]]
