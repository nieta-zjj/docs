---
title: pydantic：Data validation using Python t 开发工具
对象: GitHub 仓库
项目主页: https://github.com/pydantic/pydantic
文档: https://docs.pydantic.dev/latest/
许可: MIT
---

## 摘要

Pydantic 是一个基于 Python 原生类型提示的高性能数据验证与序列化库，V2 版本底层核心采用 Rust 重写，强调性能、类型生态兼容与工程可维护性。

- 采用 MIT 许可证，要求 Python 3.9 及以上版本。
- 通过 `BaseModel` + 类型提示定义数据模式，自动完成解析、类型转换与校验；失败时抛出 `ValidationError`。
- V2 版本重写并依赖 `pydantic-core`，核心验证逻辑由 Rust 实现。
- 支持严格模式与宽松模式，覆盖不同输入质量与容错需求。
- 可生成 JSON Schema，并对接 OpenAPI 3.1 生态。
- 与 mypy、pyright、PyCharm、VSCode 等类型与开发工具协同良好。
- 支持 `dataclasses`、`TypedDict`、自定义验证器与序列化器。
- 提供 `pydantic.v1` 命名空间，便于从 V1 渐进迁移。

## 功能与定位

pydantic 是面向 Python 应用的数据验证与序列化基础库。它的核心定位是让开发者使用已有的类型提示体系定义数据约束，并在运行时完成解析、校验、转换与结构化输出。

## 典型使用场景

- API 入参与出参校验。
- 配置文件和环境变量加载后的结构化校验。
- 数据管道中外部输入的规范化与错误拦截。
- 需要自动生成 JSON Schema 或与 OpenAPI 对接的服务。

## 核心功能

- 基于类型提示的模型定义与运行时验证。
- 自动类型转换与一致的错误报告机制。
- 字典与 JSON 序列化能力，支持字段过滤等常用控制。
- 严格模式与宽松模式双轨验证。
- 基于 `pydantic-core` 的高性能验证引擎。

## 特色与差异点

- 以 Python 类型提示为中心，学习和迁移成本低。
- V2 通过底层重构获得更高性能与可扩展性。
- 与静态类型检查工具和主流 IDE 协同较好。
- 通过 `pydantic.v1` 降低历史项目迁移阻力。

## 使用方式概览

- 安装：`pip install pydantic`、`uv add pydantic`，或 `conda install pydantic -c conda-forge`。
- 可选依赖：`email`、`timezone` 等 extra 按需安装。
- 基础用法：继承 `BaseModel` 定义字段类型，在实例化时触发验证与数据转换。

## 限制与注意事项

- V1 到 V2 存在破坏性变更，升级时需要按迁移文档核对。
- V1 已停止活跃开发，当前以关键缺陷与安全修复为主。
- 实验性功能可能在后续版本调整或移除，不宜作为长期稳定接口依赖。

## 链接

- 仓库主页：https://github.com/pydantic/pydantic
- README：https://github.com/pydantic/pydantic/blob/main/README.md
- 文档主页：https://docs.pydantic.dev/
- 最新文档：https://docs.pydantic.dev/latest/
- 安装说明：https://docs.pydantic.dev/install/
- 迁移文档：https://docs.pydantic.dev/latest/migration/
- 版本策略：https://docs.pydantic.dev/latest/version-policy/
- 变更记录：https://docs.pydantic.dev/latest/changelog/
- PyPI：https://pypi.org/project/pydantic/

## 相关文档

- [[02-资源/通用开发工具/FastAPI：Python Web API 开发工具，用于快速构建生产级接口服务|FastAPI：Python Web API 开发工具，用于快速构建生产级接口服务]]；关联理由：上下游；说明：FastAPI 将 Pydantic 用作请求与响应数据校验核心组件，二者在 Python API 技术栈中存在直接依赖关系。
- [[02-资源/AI-编程助手与Agent/pydantic-ai：GenAI Agent Framework, the Pydantic way|pydantic-ai：GenAI Agent Framework, the Pydantic way]]；关联理由：上下游；说明：pydantic-ai 在 Agent 框架层复用 Pydantic 的类型约束与结构化数据能力，属于其下游应用形态。

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/protocol]]
- [[00-元语/fastapi]]
