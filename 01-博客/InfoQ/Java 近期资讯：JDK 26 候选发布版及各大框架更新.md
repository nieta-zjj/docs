---
title: "Java 近期资讯：JDK 26 候选发布版及各大框架更新"

来源: "https://www.infoq.cn/article/laeU5SxqYSUrm0KdpaOj?utm_source=rss&utm_medium=article"
---

## 摘要

**1) 一句话总结**
本文汇总了近期 Java 生态的重要动态，包括 JDK 26 进入首个候选发布版（RC1）及其确定的 10 项核心特性，以及 Spring、Open Liberty、EclipseStore、Quarkus 等多个主流框架和工具的版本更新与功能改进。

**2) 关键点**
* **JDK 26 进度与特性**：JDK 26 已进入 RC1 阶段，预计于 2026 年 3 月 17 日正式发布，包含 10 项最终特性（如 JEP 500 让 Final 名副其实、JEP 504 移除 Applet API、JEP 525 结构化并发等）。
* **Spring Framework 7.0.4**：优化了注解接口实例的缓存机制，在 `RestClient.ResponseSpec` 中新增 `requiredBody()` 方法，该版本将被集成至 Spring Boot 4.0.3 中。
* **Open Liberty 26.0.0.2 Beta**：增强了 `mcpServer-1.0` 特性（新增基于角色的授权和 `_meta` 字段），并允许在 `server.xml` 中配置自定义错误消息。
* **Micronaut Framework 4.10.8**：基于 Core 4.10.15 发布，主要包含对 Maven 插件、SQL 库、日志和数据等模块的缺陷修复与补丁更新。
* **EclipseStore 4.0 Beta 1**：通过集成基于图的索引 JVector，正式引入了向量数据库能力，支持最近邻搜索及 Java 本地持久性。
* **Quarkus 3.31.3**：修复了生成 JDK 25 应用时 Docker 文件缺少镜像的问题，并在特定测试模式下补充了预期的 JVM 选项 `--add-opens`。
* **Micrometer 更新**：1.17.0 M2 版本支持压缩指标负载以提升大型应用性能；Tracing 1.7.0 M3 修复了因 `Throwable.getMessage()` 返回 null 导致的空指针异常问题。
* **Gradle 9.4.0 RC1**：新增对即将发布的 JDK 26 的支持，并改进了测试报告执行机制与配置缓存报告（支持显式识别 Lambda）。

## 正文

### JDK 26 与 JDK 27 最新动态

JDK 26 的早期访问构建版本 Build 35 已于上周发布，包含了从 Build 34 的更新并修复了各种问题。根据 JDK 26 的发布计划，Oracle 的 Java 平台组首席架构师 Mark Reinhold 正式宣布 JDK 26 已进入其第一个候选发布版本（RC1），因为 Build 34 中已没有未解决的 P1 错误。预计的正式版发布时间为 2026 年 3 月 17 日。

此次 JDK 26 将包含以下 10 个最终特性：
* **JEP 500**：让 Final 名副其实（Prepare to Make Final Mean Final）
* **JEP 504**：移除 Applet API（Remove the Applet API）
* **JEP 516**：适用于任何 GC 的 Ahead-of-Time 对象缓存（Ahead-of-Time Object Caching with Any GC）
* **JEP 517**：面向 HTTP Client API 的 HTTP/3（HTTP/3 for the HTTP Client API）
* **JEP 522**：G1 GC：通过减少同步提高吞吐量（G1 GC: Improve Throughput by Reducing Synchronization）
* **JEP 524**：加密对象 PEM 编码（PEM Encodings of Cryptographic Objects，第二轮预览）
* **JEP 525**：结构化并发（Structured Concurrency，第六轮预览）
* **JEP 526**：延迟常量（Lazy Constants，第二轮预览）
* **JEP 529**：向量 API（Vector API，第十一轮孵化）
* **JEP 530**：模式、instanceof 和 switch 中的原始类型（Primitive Types in Patterns, instanceof, and switch，第四轮预览）

此外，JDK 27 的早期访问构建版本 Build 9 也在上周发布，包含了从 Build 8 的更新及多项问题修复。官方鼓励开发者通过 Java Bug 数据库为 JDK 26 和 JDK 27 报告缺陷。

### Spring Framework 7.0.4 发布

Spring Framework 7.0.4 作为第四次维护版本正式发布，提供了缺陷修复、文档改进、依赖升级以及新特性。主要更新包括：
* 修改了定义在 `MethodParameter` 和 `AnnotatedMethod` 类中的 `getMethodAnnotation()/getMethodAnnotations()` 与 `hasMethodAnnotation()/hasMethodAnnotations()` 方法，以缓存 Java 注解接口的实例，并从本地数组中获取返回值。
* 在 `RestClient.ResponseSpec` 接口中新增了 `requiredBody()` 方法，该方法将返回一个非空值，以与现有的 Kotlin 相关扩展保持对齐。

此版本将在即将发布的 Spring Boot 4.0.3 中使用。

### Open Liberty 26.0.0.2 Beta 版

Open Liberty 26.0.0.2 的 Beta 版本带来了多项更新：
* 增强了 `mcpServer-1.0` 特性，包括缺陷修复、基于角色的授权、请求 ID 以及新的 `_meta` 字段，允许客户端和服务器在交互中附加额外的元数据。
* 在 `server.xml` 文件中新增了 `displayCustomizedExceptionText` 属性，允许用户使用更清晰、自定义的消息来覆盖 Open Liberty 的默认错误消息。

### Micronaut Framework 更新

Micronaut 基金会发布了基于 Micronaut Core 4.10.15 的 Micronaut Framework 4.10.8 版本。该版本包含了缺陷修复以及多个模块的补丁更新，涉及：Micronaut Maven Plugin、Micronaut SQL Libraries、Micronaut Logging、Micronaut Discovery Client 和 Micronaut Data。

### EclipseStore 4.0 引入向量数据库能力

EclipseStore 4.0 的第一个 Beta 版本引入了与 JVector 的集成。JVector 是一个基于图的索引，用于最近邻搜索，这一集成将 EclipseStore 转变为一个纯 Java 的向量数据库。JVector 已完全集成在 GigaMap 集合中，提供了 Java 本地持久性、懒加载实体访问以及磁盘上索引等功能。

### Quarkus 3.31.3 维护版本

Quarkus 3.31.3 作为第二次维护版本发布（跳过了 3.31.0 版本），带来了显著的变化：
* 解决了在生成带有 JDK 25 的应用程序时，Docker 文件中缺少镜像的问题。
* 在执行 `IsolatedTestModeMain` 类的测试时，通过 `JvmModulesReconfigurer` 接口的实例添加了预期的 JVM 选项 `--add-opens`。

### Micrometer 系列更新

* **Micrometer Application Metrics 1.17.0 M2**：提供了文档改进、依赖升级和新特性。改进了 `TelegrafStatsdLineBuilder` 类，解决了在标签中使用等号（`=`）时的转义问题；同时在 `OtlpConfig` 接口和 `OtlpHttpMetricsSender` 类中支持压缩指标负载，以提高大型应用程序的性能。
* **Micrometer Tracing Facade 1.7.0 M3**：将依赖升级至 Micrometer 1.17.0-M2 和 OpenTelemetry Instrumentation 2.24.0。此外，修复了 `OtelSpan` 类中 `error(Throwable)` 方法抛出 `NullPointerException` 的问题（该问题由 Java `Throwable.getMessage()` 返回 null 引起，违反了 OpenTelemetry API 对不可空参数的约定）。

### Gradle 9.4.0 候选版本

Gradle 9.4.0 的第一个候选版本（RC1）带来了以下更新：
* 支持即将发布的 JDK 26。
* 改进了测试报告和执行，使用 `JUnit TestEngine` 接口的自定义实现，测试的发现和执行不再需要在类中定义。
* 改进了配置缓存报告，现在能够通过多个 Lambda 显式识别每个 Lambda 及其关联的动作或规范类型。

## 关联主题

- [[00-元语/软件工程]]
- [[00-元语/sdk]]
- [[00-元语/community]]
