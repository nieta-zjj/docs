# Java 近期资讯：JDK 26 候选发布版及各大主流框架更新

## 文档信息
- 来源：https://www.infoq.cn/article/laeU5SxqYSUrm0KdpaOj?utm_source=rss&utm_medium=article

## 摘要
**1) 一句话总结**
近期 Java 生态迎来了多项重要更新，包括 JDK 26 正式进入首个候选发布（RC1）阶段并确定了 10 项最终特性，以及 Spring、Open Liberty、EclipseStore、Quarkus 和 Gradle 等主流框架与工具的版本迭代和功能增强。

**2) 关键要点**
*   **JDK 26 与 27 进展**：JDK 26 已解决所有 P1 级别错误并进入 RC1 阶段，预计于 2026 年 3 月 17 日发布，包含移除 Applet API、结构化并发等 10 个最终特性；JDK 27 发布了早期访问 Build 9。
*   **Spring Framework 7.0.4**：优化了 Java 注解实例的缓存机制，在 `RestClient.ResponseSpec` 中新增 `requiredBody()` 方法，该版本将被集成至 Spring Boot 4.0.3 中。
*   **Open Liberty 26.0.0.2 Beta**：增强了 `mcpServer-1.0` 特性（新增基于角色的授权、请求 ID 及元数据字段），并允许通过 `server.xml` 自定义异常错误消息。
*   **Micronaut 4.10.8**：基于 Core 4.10.15 发布，主要包含 Maven 插件、SQL 库、日志和数据等多个核心模块的缺陷修复与补丁更新。
*   **EclipseStore 4.0 Beta 1**：通过集成基于图的索引 JVector，正式转型为纯 Java 的向量数据库，提供本地持久化、懒加载及磁盘索引功能。
*   **Quarkus 3.31.3**：修复了生成 JDK 25 应用时 Docker 文件缺失镜像的问题，并在特定测试模式下补充了预期的 JVM 选项 `--add-opens`。
*   **Micrometer 更新**：1.17.0-M2 修复了标签转义问题并支持压缩指标负载以提升性能；Tracing 1.7.0-M3 修复了 `OtelSpan` 类中因空消息引发的空指针异常。
*   **Gradle 9.4.0 RC1**：新增对即将发布的 JDK 26 的支持，并改进了测试发现与执行机制以及配置缓存报告。

## 正文
### JDK 26 与 JDK 27 最新进展

上周，JDK 27 的早期访问构建版本 Build 9 正式发布，包含了从 Build 8 以来的更新与各项问题修复。同时，JDK 26 的早期访问构建版本 Build 35 也已发布，同样包含了从 Build 34 以来的更新与修复。开发者可以通过发布说明获取更多细节，并鼓励大家通过 Java Bug 数据库报告缺陷。

根据 JDK 26 的发布计划，Oracle 的 Java 平台组首席架构师 Mark Reinhold 正式宣布：由于 Build 34 中已没有未解决的 P1 级别错误，JDK 26 已正式进入其第一个候选发布版本（RC1）阶段。正式版预计将于 2026 年 3 月 17 日发布，并将包含以下 10 个最终特性：

*   **JEP 500**：让 Final 名副其实（Prepare to Make Final Mean Final）
*   **JEP 504**：移除 Applet API（Remove the Applet API）
*   **JEP 516**：适用于任何 GC 的 Ahead-of-Time 对象缓存（Ahead-of-Time Object Caching with Any GC）
*   **JEP 517**：面向 HTTP Client API 的 HTTP/3（HTTP/3 for the HTTP Client API）
*   **JEP 522**：G1 GC：通过减少同步提高吞吐量（G1 GC: Improve Throughput by Reducing Synchronization）
*   **JEP 524**：加密对象 PEM 编码（PEM Encodings of Cryptographic Objects，第二轮预览）
*   **JEP 525**：结构化并发（Structured Concurrency，第六轮预览）
*   **JEP 526**：延迟常量（Lazy Constants，第二轮预览)
*   **JEP 529**：向量 API（Vector API，第十一轮孵化）
*   **JEP 530**：模式、instanceof 和 switch 中的原始类型（Primitive Types in Patterns, instanceof, and switch，第四轮预览）

### Spring Framework 更新

Spring Framework 发布了 7.0.4 版本（第四次维护发布）。该版本提供了缺陷修复、文档改进、依赖升级以及部分新特性：
*   修改了定义在 `MethodParameter` 和 `AnnotatedMethod` 类中的 `getMethodAnnotation()`/`getMethodAnnotations()` 以及 `hasMethodAnnotation()`/`hasMethodAnnotations()` 方法，以缓存 Java 注解接口的实例，并从本地数组中获取返回值。
*   在 `RestClient.ResponseSpec` 接口中添加了新的 `requiredBody()` 方法，该方法将返回一个非空值，以与现有的 Kotlin 相关扩展对齐。

此版本将在即将发布的 Spring Boot 4.0.3 中被使用。

### Open Liberty 与 Micronaut 框架

**Open Liberty 26.0.0.2 Beta 版**
该版本主要增强了 `mcpServer-1.0` 特性，包括缺陷修复、基于角色的授权、请求 ID 以及新的 `_meta` 字段（允许客户端和服务器在交互中附加额外的元数据）。此外，在 `server.xml` 文件中引入了一个新属性 `displayCustomizedExceptionText`，允许用户使用更清晰的自定义消息来覆盖 Open Liberty 的默认错误消息。

**Micronaut Framework 4.10.8**
Micronaut 基金会发布了基于 Micronaut Core 4.10.15 的新版本。此次更新主要包含缺陷修复以及多个模块的补丁更新，涉及：`Micronaut Maven Plugin`、`Micronaut SQL Libraries`、`Micronaut Logging`、`Micronaut Discovery Client` 和 `Micronaut Data`。

### EclipseStore 引入向量数据库功能

EclipseStore 4.0 的第一个 Beta 版本引入了与 JVector 的集成。JVector 是一个基于图的索引，专门用于最近邻搜索。这一集成将 EclipseStore 转变为一个纯 Java 的向量数据库。JVector 已被完全集成到其 GigaMap 集合中，提供了 Java 本地持久性、懒加载实体访问以及磁盘上索引等强大功能。更多细节可在 EclipseStore 及其姊妹项目 EclipseSerializer 的发布说明中查看。

### Quarkus 与 Micrometer 维护发布

**Quarkus 3.31.3**
作为第二次维护发布（跳过了 3.31.0 版本），Quarkus 带来了显著变化：
*   解决了在生成带有 JDK 25 的应用程序时，Docker 文件中缺少镜像的问题。
*   在执行 `IsolatedTestModeMain` 类的测试时，通过 `JvmModulesReconfigurer` 接口的实例添加了预期的 JVM 选项 `--add-opens`。

**Micrometer Application Metrics 1.17.0-M2**
该里程碑版本提供了文档改进和依赖升级，并包含以下新特性：
*   改进了 `TelegrafStatsdLineBuilder` 类，解决了在标签中使用等号（`=`）时的转义问题。
*   在 `OtlpConfig` 接口和 `OtlpHttpMetricsSender` 类中支持压缩指标负载，以提高性能（特别是在大型应用程序中）。

**Micrometer Tracing Facade 1.7.0-M3**
此版本将依赖升级到了 Micrometer 1.17.0-M2 和 OpenTelemetery Instrumentation 2.24.0。同时，修复了 `OtelSpan` 类中 `error(Throwable)` 方法抛出 `NullPointerException` 的问题（该问题由 Java `Throwable.getMessage()` 返回 null 引起，违反了 OpenTelemetry API 对不可空参数的约定）。

### Gradle 9.4.0 候选版本

Gradle 9.4.0 的第一个候选版本（RC1）带来了以下重要更新：
*   支持即将发布的 JDK 26。
*   改进了测试报告和执行：使用 `JUnit TestEngine` 接口的自定义实现，测试的发现和执行不再需要在类中定义。
*   改进了配置缓存报告：现在能够通过多个 lambda 显式识别每个 lambda 与其关联的动作或规范类型。
