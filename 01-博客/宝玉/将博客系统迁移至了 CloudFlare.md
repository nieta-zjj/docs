---
title: "将博客系统迁移至了 CloudFlare"

来源: "https://baoyu.io/blog/tech/migrate-blog-to-cloud-flare"
发布日期: "2024-10-02"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
作者为解决原有静态博客发布繁琐及 Vercel 资源消耗大的问题，将博客全面迁移至 Cloudflare 技术栈（D1+R2），并结合 NextJS 与 TipTap 编辑器大幅提升了内容发布体验。

**2) 核心要点**
*   **迁移动机**：原有基于 Vercel 和 MDX 的静态博客每次发布需手动建文件、传图片，流程繁琐；且流量和计算资源用量较大，期望通过 Cloudflare 降低成本。
*   **前端框架**：继续沿用 NextJS，放弃了本地热更新存在问题的 Remix；目前 Cloudflare 通过 OpenNext 对 NextJS 提供了良好的兼容支持。
*   **UI 框架**：采用简单强大的 ShadcnUI 构建界面。
*   **数据与存储**：数据库选用 Cloudflare D1（基于 Sqlite），图片等静态资源统一存放在成本更低的 Cloudflare R2 中。
*   **编辑器选型**：选用 TipTap（基于其开源项目 Novel），放弃了需要大量二次开发的 Lexical。
*   **数据兼容策略**：针对 MDX 转换 TipTap 的格式兼容难题，采取在数据库中同时保存原始格式和最终 HTML 的方案；对于 600 多条历史数据，直接抓取并仅保存 HTML 正文。
*   **数据导入方案**：放弃了直接在服务端执行脚本或导入 SQL 文件的方案，最终通过在服务端增加临时 API，并使用本地脚本逐条轮询上传，成功完成 600 多条数据的导入。
*   **最终成果**：新系统支持富文本编辑和图片直接粘贴上传，显著简化了写作与发布流程。

**3) 风险与不足（原文明确提及）**
*   **格式兼容风险**：从 MDX 到 TipTap 的格式很难做到完全兼容，直接转换可能会导致历史内容丢失。
*   **环境与限制**：Cloudflare 服务端无法执行 Node 脚本，且 Cloudflare Worker 存在文件大小限制，导致常规的数据迁移脚本无法正常执行。
*   **D1 数据库不成熟**：Cloudflare 的 D1 数据库在导入 dump 的 sql 文件时，若表记录内容过长会导致导入失败。
*   **编辑器缺陷**：TipTap 编辑器在复制粘贴图文混排的 HTML 内容时，默认会将图片移除（作者后续参考 AIEditor 找到了解决方案）。

## 正文

之前我的博客系统是部署在 Vercel 上的，最初的版本是基于一个 MDX 静态文件的博客系统（[https://github.com/shadcn-ui/taxonomy](https://github.com/shadcn-ui/taxonomy)）构建的，运行的不错，但随着内容越来越多，流量越来越大后，也存在一些问题。

主要问题是 MDX 静态文件的方式发布流程过于繁琐，每次写新的内容，都要创建文件、放图片到指定位置，提交发布。最近更新较少一个原因就是因为嫌麻烦。

另一个问题是可能之前技术实现有问题，所以在 Vercel 上的一些流量和计算时间的用量比较大，想着迁移到 CloudFlare（CF） 上能便宜点，正好学习一下怎么使用 CF 的技术栈搭建网站。

新的技术栈
-----

**前端框架依然是 NextJS。**

其实最初是用的 Remix，但是 Remix 的本地热更新总是有问题，修改后得手动刷新，另外也没有发现比 Nextjs 很明显的优势，于是就切换回了 NextJS。另外现在 Cloudflare 对 Nextjs 支持更好了，可以不需要用 Edge Runtime，可以兼容大部分功能。具体可以参考 [https://opennext.js.org/cloudflare](https://opennext.js.org/cloudflare)

![Image 1](https://baoyu.io/uploads/2024-10-02/paste-1727900047104.png)

UI 框架用的 ShadcnUI

ShadcnUI [https://ui.shadcn.com/](https://ui.shadcn.com/) 一直是我很喜欢的一个 UI 框架，简单强大，常用的组件基本都有。

**数据库选用的 CloudFlare 的 D1。**

D1 数据库是一个相对比较简单功能也不强大的 Sqlite 数据库，对于一个博客系统来说倒也足够了。

**静态存储选用的 CloudFlare 的 R2。**

通常博客会有一些图片，这部分内容现在都存放到 R2 了，足够便宜，也不担心图片访问流量大了。

**编辑器选用的 TipTap。**

编辑器选型纠结了很久，主要是在 Lexical [https://lexical.dev/](https://lexical.dev/) 和 TipTap [https://tiptap.dev/](https://tiptap.dev/) 之间纠结。最终选择了 TipTap 是因为已经有一个开源的编辑器 Novel [https://novel.sh/](https://novel.sh/) 是基于它之上构建的，并且技术栈和我用的相似，而 Lexical 虽然我也很喜欢，但是需要二次开发的工作太多了。

遇到的一些坑
------

在迁移过程中难免有一些坑。最大的麻烦来源于数据迁移。

**数据兼容**

我原来的博客系统是基于 MDX，新的是 TipTap，从 MDX 到 TipTap 的格式是很难做到完全兼容的，这可能会导致一些内容丢失。原本想着有问题的手动更新一下，后来发现一年多发了 600 多条（包括翻译），没法手动做。最后找了个取巧的办法：在数据库中同时保存原始的格式和最终的 HTML，对于历史数据，只保存 HTML，不修改就不会有任何影响，有修改的手动再修正一下就好了。

**数据导入**

另一个麻烦的是如何将 600 多条记录导入到数据库，最开始的方案是 MDX 转 TipTap 格式，但是会有格式不兼容，后来想到个办法是直接从生成的 HTML 抓取正文，只保存 HTML 正文。

**上传数据到生产服务器**

我在本地导入数据很顺利，因为可以执行 Node 脚本访问本地文件。但是 CloudFlare 的服务端可没法执行 Node 脚本。

先是将静态页面文件存 R2，然后写了个迁移的 API 在服务端执行，访问这个 API 就自动执行，但是 CloudFlare worker 有文件大小限制，没法正常执行。后来发现可以将本地的 Sqlite 数据库 dump 成 sql 文件，导入到 D1 数据库，但实际上 CloudFlare 的 D1 数据库不成熟，表记录内容一长就会导致导入失败。

最后采用了一个折中方案，服务端加了一个临时的导入的 API，本地用个脚本把本地数据库的记录轮询一遍，每次上传一条记录，最终终于导入成功了。

**编辑器的坑**

TipTap 编辑器很好，但是有个坑就是就是复制粘贴图文混排的HTML内容，图片会被移除，后来终于在一个叫 AIEditor [http://aieditor.dev/](http://aieditor.dev/) 的编辑器中找到解决方案。

![Image 2](https://baoyu.io/uploads/2024-10-02/paste-1727901282024.png)

**结果**

总的来说结果还不错，现在写一篇内容方便多了，富文本编辑，图片粘贴到编辑器就可以直接上传到服务器。

![Image 3](https://baoyu.io/uploads/2024-10-02/paste-1727901427654.png)

## 关联主题

- [[00-元语/cloudflare]]
- [[00-元语/serverless]]
- [[00-元语/data-pipeline]]
- [[00-元语/ETL]]
- [[00-元语/markdown]]
- [[00-元语/workflow]]
