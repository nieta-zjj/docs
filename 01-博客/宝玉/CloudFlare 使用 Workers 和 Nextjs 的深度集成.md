---
title: "CloudFlare 使用 Workers 和 Nextjs 的深度集成"

来源: "https://baoyu.io/blog/cloudflare/cloudflare-workers-nextjs-deep-integration"
发布日期: "2024-10-06"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
借助 OpenNext 项目，Next.js 现可与 Cloudflare Workers 实现深度集成，使开发者能在同一项目中同时运行网站与 Workers 的多种后台处理程序。

**2) 关键要点**
*   **集成方式演进**：过去 Cloudflare 仅支持通过 Cloudflare Pages 集成 Next.js，现可通过 OpenNext 项目直接与 Cloudflare Workers 集成。
*   **功能扩展**：结合 Workers，Next.js 项目可使用 Fetch Handler（处理 HTTP/WebSocket）、Email Handler（接收邮件）和 Scheduled Handler（后台定时任务）等功能。
*   **自定义 Worker 路径**：在 `wrangler.toml` 中，将默认的 `main` 路径修改为自定义文件（例如 `main = "src/worker.ts"`）。
*   **引入构建产物**：在自定义的 Worker 文件中，需引入通过 `npm run preview/deploy` 生成的构建文件 `../.worker-next/index.mjs`。
*   **代码实现**：在自定义 Worker 中，可通过 `export default` 暴露 `fetch`（代理给 PagesFunction.fetch）、`scheduled` 和 `email` 等处理函数，从而在提供网站服务的同时运行其他后台服务。

**3) 风险/不足**
*   **默认配置限制**：使用 OpenNext 创建项目时，默认配置（`main = .worker-next/index.mjs`）会导致无法直接添加其他的 worker handlers，必须通过自定义 Worker 文件来绕过此限制。

## 正文

以前 CloudFlare 只提供了 [Cloudflare Pages](https://developers.cloudflare.com/pages) 的方式集成 Nextjs，现在有了 OpenNext [https://opennext.js.org/](https://opennext.js.org/)项目后，Nextjs 也可以和 [Cloudflare Workers](https://developers.cloudflare.com/workers)集成，这意味着你创建一个项目，不仅有网站，还有 Workers。

毕竟 CloudFlare 的 Worker，可以有处理 Http/WebSocket 请求的 Fetch Handler [https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/) ，还有接收邮件的 Email Handler [https://developers.cloudflare.com/email-routing/email-workers/runtime-api/](https://developers.cloudflare.com/email-routing/email-workers/runtime-api/)，还有后台定时任务的 Scheduled Handler [https://developers.cloudflare.com/workers/runtime-apis/handlers/scheduled/](https://developers.cloudflare.com/workers/runtime-apis/handlers/scheduled/) 等等强大的功能。

在你使用 OpenNext 创建一个 Nextjs 项目，在 `wrangler.toml` 中，worker 默认指向的是：

`main = .worker-next/index.mjs`
这样你是无法加其他 worker handlers，但是你可以自己创建一个 worker 文件，比如 `src/worker.ts`，在 `wrangler.toml` 中，将 worker 路径指向它：

`main = "src/worker.ts"`
然后在 worker 文件中，你再 import build 好的 `../.worker-next/index.mjs` 文件（`npm run preview/deploy` 可以生成），就可以在 Worker 里面提供网站之外的服务：

```
import PagesFunction from "../.worker-next/index.mjs";

export default {
  // fetch: PagesFunction.fetch,
  async fetch(
    request: Request,
    env: CloudflareEnv,
    ctx: ExecutionContext
  ): Promise<Response> {
    return PagesFunction.fetch(request, env, ctx);
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(doSomeTaskOnASchedule());
  },
  async email(message, env, ctx) {
    message.forward("<YOUR_EMAIL>");
  },
} satisfies ExportedHandler<CloudflareEnv>;
```

## 关联主题

- [[00-元语/cloudflare]]
- [[00-元语/serverless]]
- [[00-元语/react]]
