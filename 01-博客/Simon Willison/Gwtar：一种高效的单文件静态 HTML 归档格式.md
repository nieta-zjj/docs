---
title: "Gwtar：一种高效的单文件静态 HTML 归档格式"

来源: "https://simonwillison.net/2026/Feb/15/gwtar/#atom-everything"
发布日期: "2026-02-15"
---

## 摘要

**1) 一句话总结**
Gwtar 是一种高效的单文件静态 HTML 归档格式，它通过在加载早期截断请求并利用 HTTP 范围请求按需提取内联的 tar 数据，解决了将大量资源合并到单一文件中的加载难题。

**2) 关键要点**
* **项目背景**：由 Gwern Branwen 和 Said Achmiz 提出，旨在将大量资源合并为单个 HTML 归档文件，同时保持在浏览器中查看的便利性。
* **核心机制**：在页面加载早期触发 `window.stop()`，阻止浏览器下载整个文件。
* **数据存储**：在 `window.stop()` 调用之后，直接内联未压缩的 tar 格式内容。
* **按需加载**：页面需要时，通过 HTTP 范围请求（HTTP range requests）从内联的 tar 数据中获取具体内容。
* **URL 重写**：已加载的 JavaScript 会将资源 URL 重写为 `https://localhost/`，纯粹为了强制其加载失败。
* **拦截与注入**：使用 `PerformanceObserver` 捕获加载尝试，通过 `resourceURLStringsHandler` 回调发起 HTTP 范围请求获取未加载的资源，最后使用 `blob:` URL 将其插入正确位置。
* **本地提取方案**：若需在本地查看，需使用特定的 Shell 命令（结合 `perl` 和 `tar --extract`）提取出标准的 HTML 文件后再进行浏览。

**3) 风险/不足**
* **本地查看受限**：由于 Web 浏览器的安全限制，gwtar 文件无法直接在本地电脑上打开运行，直接打开只会显示错误提示信息。
* **依赖外部工具提取**：本地离线查看必须依赖命令行工具（如 `perl` 和 `tar`）进行手动提取操作。

## 正文

Gwern Branwen 和 Said Achmiz 提出了一个引人注目的新项目——Gwtar。这是一种静态且高效的单文件 HTML 格式，旨在解决一个核心挑战：如何将大量资源合并到单个归档的 HTML 文件中，同时又不会导致在浏览器中查看时变得极其不便。

### 核心技术原理

Gwtar 使用的关键技巧是：在页面加载的早期触发 `window.stop()`，以此来阻止浏览器下载整个文件。紧随该调用之后的是内联的未压缩 tar 内容。

通过这种方式，当页面需要时，它可以发起 HTTP 范围请求（HTTP range requests），按需从该 tar 数据中获取内容。

### 资源加载与拦截机制

为了实现按需加载，已经加载的 JavaScript 会将资源 URL 重写为指向 `https://localhost/`——这样做的纯粹目的是让它们加载失败。

随后，系统会使用 `PerformanceObserver` 来捕获这些尝试加载的操作：
* `resourceURLStringsHandler` 回调函数会检查资源是否已经加载。
* 如果未加载，则通过 HTTP 范围请求获取该资源。
* 最后，使用 `blob:` URL 将资源插入到正确的位置。

如果你查看文档源码，就能清楚地看到包含 `window.stop()` 部分的代码结构。

### 本地查看的限制与解决方法

有趣的是，作为一种归档格式，如果你直接在自己的电脑上打开该文件，它实际上是无法运行的。如果你尝试本地打开，由于 Web 浏览器的安全限制，你将看到一条提示信息，而不是原本应该显示的页面内容：

> “您看到此消息，而不是您应该看到的页面，是因为 gwtar 文件无法在本地打开（由于 Web 浏览器的安全限制）。”

要在电脑上打开此页面，需要使用以下 Shell 命令进行提取：

```bash
perl -ne'print $_ if $x; $x=1 if /<!-- GWTAR END/' < foo.gwtar.html | tar --extract
```

提取完成后，在任何 Web 浏览器中打开生成的 `foo.html` 文件即可正常浏览。

## 关联主题

- [[00-元语/protocol]]
- [[00-元语/virtual-file-system]]
- [[00-元语/cli]]
