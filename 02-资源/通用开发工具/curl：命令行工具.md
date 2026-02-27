---
title: "curl：命令行工具"
对象: "GitHub 仓库 curl/curl"
项目主页: "https://github.com/curl/curl"
官方网站: "https://curl.se/"
开源协议: "curl（MIT-like）"
参考提交: "8d28ac612bd9e513bb53466c2cb1de7f716b2744"
来源: "README.md、docs/FEATURES.md、docs/INSTALL.md、docs/libcurl/libcurl.md、docs/KNOWN_RISKS.md、SECURITY.md、RELEASE-NOTES、COPYING"
---

## 摘要

- curl 是一个支持多种网络协议的开源命令行数据传输工具，并同时提供可嵌入应用的 `libcurl` C 库。
- 项目覆盖从命令行调用到程序内集成的两类使用方式，强调跨平台能力、协议覆盖与传输稳定性。
- 在安全与运维场景下，官方文档明确给出不可信输入、重定向头部泄露、日志敏感信息暴露等风险边界。

## 功能与定位

curl 的核心定位是“通过 URL 在客户端侧进行数据传输”。

同一仓库同时维护两类能力：
- `curl` 命令行工具：用于终端中的下载、上传、接口调用与网络诊断。
- `libcurl` 开发库：用于在应用程序内集成网络传输能力，支持同步与异步接口模型。

## 典型使用场景

- 在脚本或终端中做 API 调试、文件传输、批量请求。
- 在服务端或桌面程序中通过 `libcurl` 集成 HTTP、FTP、SMTP 等协议通信。
- 在需要代理、认证、IPv4/IPv6 双栈、TLS 后端适配的复杂网络环境中统一传输逻辑。

## 核心功能

- 协议覆盖广：支持 HTTP(S)、FTP(S)、SMTP(S)、POP3(S)、IMAP(S)、SFTP、SCP、SMB、MQTT、TFTP、WS(S) 等。
- 传输能力完整：支持并行传输、重定向处理、断点续传、代理与认证机制。
- 连接与网络能力：支持持久连接、异步 DNS、Happy Eyeballs、DNS-over-HTTPS。
- TLS 与安全能力：支持多 TLS 后端、证书校验、证书固定、会话复用与多种认证方式。
- 开发生态成熟：`libcurl` 有 Easy/Multi/Share 接口模型，并有多语言绑定生态。

## 特色与差异点

- 一个仓库同时覆盖“命令行工具 + 通用传输库”，适合从个人脚本到工程集成的连续场景。
- 官方文档体系完整，既有命令行手册，也有 `libcurl` API 文档与风险说明。
- 维护历史长、发布节奏稳定；在 `RELEASE-NOTES` 中可追踪每次版本变化与已知问题。

## 使用方式概览

- 终端使用：按官方手册选择参数组合完成下载、上传、认证、代理与协议控制。
- 开发集成：在程序生命周期内完成 `libcurl` 初始化、句柄配置、执行传输与资源清理。
- 部署与构建：可使用包管理器安装，也可按官方安装文档基于源码构建并选择 TLS 后端。

## 限制与注意事项

- 功能组合限制：官方文档指出部分构建特性存在互斥关系，启用前需要确认编译选项兼容性。
- 输入信任边界：不要直接执行来自不可信来源的命令行或配置文件。
- 数据泄露风险：启用详细日志、跟随重定向并携带自定义头时，需评估敏感信息暴露风险。
- 生产使用建议：优先采用官方文档中稳定接口与选项，避免依赖未文档化行为。

## 链接

- 仓库：https://github.com/curl/curl
- 官网：https://curl.se/
- 项目 README：https://github.com/curl/curl/blob/8d28ac612bd9e513bb53466c2cb1de7f716b2744/README.md
- 功能清单：https://github.com/curl/curl/blob/8d28ac612bd9e513bb53466c2cb1de7f716b2744/docs/FEATURES.md
- 安装文档：https://github.com/curl/curl/blob/8d28ac612bd9e513bb53466c2cb1de7f716b2744/docs/INSTALL.md
- libcurl 文档：https://github.com/curl/curl/blob/8d28ac612bd9e513bb53466c2cb1de7f716b2744/docs/libcurl/libcurl.md
- 安全策略：https://github.com/curl/curl/blob/8d28ac612bd9e513bb53466c2cb1de7f716b2744/SECURITY.md
- 已知风险：https://github.com/curl/curl/blob/8d28ac612bd9e513bb53466c2cb1de7f716b2744/docs/KNOWN_RISKS.md
- 发布说明：https://github.com/curl/curl/blob/8d28ac612bd9e513bb53466c2cb1de7f716b2744/RELEASE-NOTES

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
