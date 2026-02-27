---
title: SDL：Simple DirectMedia Layer 开发工具
对象: SDL (Simple DirectMedia Layer)
类型: 跨平台多媒体开发库
项目主页: https://www.libsdl.org/
仓库: https://github.com/libsdl-org/SDL
文档: https://wiki.libsdl.org/SDL3
许可证: zlib License
来源:
  - https://github.com/libsdl-org/SDL
  - https://raw.githubusercontent.com/libsdl-org/SDL/main/README.md
  - https://raw.githubusercontent.com/libsdl-org/SDL/main/INSTALL.md
  - https://raw.githubusercontent.com/libsdl-org/SDL/main/docs/README.md
  - https://raw.githubusercontent.com/libsdl-org/SDL/main/docs/README-platforms.md
  - https://raw.githubusercontent.com/libsdl-org/SDL/main/docs/README-versions.md
  - https://raw.githubusercontent.com/libsdl-org/SDL/main/examples/README.md
  - https://raw.githubusercontent.com/libsdl-org/SDL/main/WhatsNew.txt
---

## 摘要

SDL（Simple DirectMedia Layer）是一个采用 zlib 许可证的跨平台底层多媒体开发库，目标是为游戏、模拟器等应用提供音频、输入设备和图形硬件的统一访问接口。

- 官方支持 Windows、macOS、Linux、iOS、Android，以及 Xbox、PlayStation 4/5、Nintendo Switch 等多类平台。
- 在传统 `main` 入口之外，还提供回调式应用结构，方便在 Web 等场景复用程序框架。
- 采用奇偶版本策略，稳定版与预发布版边界清晰，便于按风险制定升级节奏。

## 功能与定位

SDL 是面向多媒体应用的跨平台底层开发库，主要提供音频、键盘、鼠标、手柄与图形硬件访问能力。它重点解决“同一套代码在多平台构建与运行”的工程问题，降低平台差异带来的开发成本。

## 典型使用场景

- 跨平台游戏开发。
- 模拟器与视频播放软件开发。
- 需要统一输入、渲染与音频能力的图形交互程序。
- 需要同时覆盖桌面端、移动端和 Web 端的多媒体应用。

## 核心功能

- 底层接口：统一访问音频、输入设备与图形能力。
- 渲染能力：支持 2D 渲染、GPU 设备能力扩展，以及纹理/颜色空间相关特性。
- 示例与测试：仓库内提供 `examples/` 与 `tests/`，可用于快速验证构建与 API 使用。
- 文档体系：官方 wiki、平台说明与迁移说明分层清晰，便于从 SDL2 迁移到 SDL3。

## 特色与差异点

- 平台覆盖广：官方列出大量已支持平台，并为不同平台提供独立说明文档。
- 入口模型灵活：除传统 `main` 入口外，还支持回调式应用结构，便于 Web 等场景复用同一套程序框架。
- 许可友好：主库使用 zlib 许可证，示例目录代码标注为 Public Domain，便于教学、试验和商用集成。
- 版本治理明确：文档中定义了稳定版与预发布版判定规则，便于团队制定升级策略。

## 使用方式概览

- 在常见环境中可直接用 CMake 或各平台 IDE 构建 SDL。
- 集成时通常按“引入头文件 + 链接库”方式接入项目。
- 需要运行官方示例时，可在 CMake 构建阶段启用示例选项。
- 需要查 API 时，优先参考 `wiki.libsdl.org/SDL3` 的接口文档与教程。

## 限制与注意事项

- 文档明确指出 SDL 不面向提权进程（如 setuid/setgid 或附带特权能力的可执行文件）设计，不应在攻击者可控执行环境下调用 SDL。
- 部分历史平台在 SDL3 中不再维护；如需覆盖这些平台，需要评估 SDL2 与 SDL3 的 API 不兼容问题。
- 预发布版本不适合稳定发行流程，生产环境应优先选择稳定分支。

## 链接

- 项目主页：https://www.libsdl.org/
- 仓库：https://github.com/libsdl-org/SDL
- API 文档与教程：https://wiki.libsdl.org/SDL3
- 在线示例：https://examples.libsdl.org/SDL3
- 平台支持说明：https://raw.githubusercontent.com/libsdl-org/SDL/main/docs/README-platforms.md
- 版本策略说明：https://raw.githubusercontent.com/libsdl-org/SDL/main/docs/README-versions.md
- 变更记录：https://raw.githubusercontent.com/libsdl-org/SDL/main/WhatsNew.txt

## 关联主题

- [[00-元语/game]]
- [[00-元语/audio]]
- [[00-元语/sdk]]
