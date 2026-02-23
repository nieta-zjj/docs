---
title: "json：现代 C++ 的 JSON 库项目"
对象: "GitHub 项目"
项目主页: "https://github.com/nlohmann/json"
Stars快照: "48948"
官方网站: "https://json.nlohmann.me"
主要语言: "C++"
开源协议: "MIT"
---

## 摘要

**1) 一句话总结**
nlohmann/json 是一个专为现代 C++ 设计的单头文件 JSON 库，通过零依赖、直观的语法和类 STL 的操作，为开发者提供类似一等数据类型的极简 JSON 处理体验。

**2) 核心要点**
*   **基本信息**：基于纯 C++11 编写，采用 MIT 开源协议，在 GitHub 拥有超 4.8 万 Stars。
*   **极简集成**：零外部依赖，仅需引入单个 `json.hpp` 头文件，无需复杂的构建系统或调整编译器标志。
*   **直观语法**：利用现代 C++ 运算符重载特性，支持通过初始化列表、自定义字面量（`_json`）和原生字符串快速构建 JSON 对象。
*   **类 STL 操作**：提供类似 C++ 标准模板库的访问方式，支持迭代器操作，并支持与 STL 容器的相互转换及任意类型转换。
*   **多格式与高级特性**：内置 JSON Pointer、Patch 和 Merge Patch 支持，并兼容 BSON、CBOR、MessagePack、UBJSON 等多种二进制数据格式。
*   **严苛的质量保证**：实现 100% 单元测试覆盖率，通过 Valgrind 和 Clang Sanitizers 确保无内存泄漏，并接入 Google OSS-Fuzz 进行 24/7 持续模糊测试。
*   **现代化支持**：支持通过包管理器或 CMake 集成，开启 `NLOHMANN_JSON_BUILD_MODULES` 后可支持 C++20 的模块化导入。

**3) 风险与不足**
*   **性能权衡**：设计上优先考虑开发效率和易用性，而非追求极致的解析速度或极低的内存占用。
*   **默认内存开销**：默认情况下每个 JSON 对象存在一定的内存开销（需通过模板化 `basic_json` 类自定义底层数据类型来优化特定需求）。

## 功能与定位
nlohmann/json 是一个专为现代 C++ 设计的 JSON 处理库。其核心定位是让 JSON 在 C++ 代码中表现得像一等数据类型（类似 Python 中的体验），通过直观的语法和极简的集成方式，大幅提升开发者的工作效率。

## 核心功能
- **解析与序列化**：支持从文件流、原生字符串字面量解析 JSON，以及将 JSON 对象序列化输出。
- **类 STL 操作**：提供类似 C++ 标准模板库（STL）的访问方式，支持迭代器、元素查找、容量查询和修改等操作。
- **数据转换**：支持与 STL 容器的相互转换、隐式转换、任意类型转换以及枚举类型的特化转换。
- **高级 JSON 特性**：内置对 JSON Pointer、JSON Patch 以及 JSON Merge Patch 的支持。
- **二进制格式支持**：支持 BSON、CBOR、MessagePack、UBJSON 和 BJData 等多种二进制数据格式的读写。

## 特色与差异点
- **极其直观的语法**：充分利用现代 C++ 的运算符重载特性，支持使用初始化列表和自定义字面量（如 `_json`）快速构建 JSON 对象。
- **零依赖单头文件集成**：整个库仅由一个 `json.hpp` 头文件组成，基于纯 C++11 编写。无需复杂的构建系统、无需调整编译器标志，也无任何外部依赖。
- **严苛的质量保证**：
  - 拥有 100% 的单元测试覆盖率（包含异常行为测试）。
  - 通过 Valgrind 和 Clang Sanitizers 确保无内存泄漏。
  - 接入 Google OSS-Fuzz 进行 24/7 的持续模糊测试。
  - 遵循核心基础设施倡议（CII）最佳实践。
- **设计权衡**：该库优先考虑开发效率和易用性，而非极致的解析速度或内存占用。默认情况下，每个 JSON 对象有一定的内存开销，但开发者可以通过模板化 `basic_json` 类来自定义底层数据类型以满足特定需求。

## 使用方式概览
- **引入项目**：直接包含 `json.hpp` 头文件，或通过 CMake、Pkg-config 及主流包管理器集成。
- **模块化支持**：在开启 `NLOHMANN_JSON_BUILD_MODULES` 后，支持 C++20 的模块化导入（`import nlohmann.json;`）。
- **创建对象**：
  - 从文件读取：使用 `std::ifstream` 配合 `json::parse()`。
  - 从代码构建：支持原生字符串字面量解析、`_json` 后缀字面量，或直接使用 C++ 初始化列表（如 `json ex = {{"key", value}};`）。

## 链接

- 仓库：https://github.com/nlohmann/json
- 官网：https://json.nlohmann.me

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
