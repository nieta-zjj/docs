---
title: "Bifrost Gateway 快速开始：设置网关与两种配置模式"

来源: "https://docs.getbifrost.ai/quickstart/gateway/setting-up"
译注: "站点无官方中文译文，本文基于原文机器翻译并做最小必要整理。"
---

## 摘要

**1) 一句话摘要**
Bifrost 是一款支持 30 秒零配置启动的 HTTP API 网关，它提供统一的 OpenAI 兼容接口来路由各类 AI 提供商请求，并支持通过 Web UI 或本地文件进行灵活配置。

**2) 关键要点**
*   **快速部署**：支持通过 NPX（`npx -y @maximhq/bifrost`）或 Docker 快速启动，默认运行在 8080 端口。
*   **统一 API 标准**：全面兼容 OpenAI 的请求与响应格式，通过统一端点（如 `/v1/chat/completions`）和 `提供商/模型`（如 `openai/gpt-4o-mini`）的命名规则自动路由请求。
*   **目录与数据存储**：通过 `-app-dir` 标志管理数据目录，内部包含 `config.json`（可选配置文件）、`config.db`（UI 配置库）和 `logs.db`（日志库）。
*   **内置 Web UI**：提供可视化界面（默认 `http://localhost:8080`），支持免代码配置提供商、实时生效、实时监控及使用量治理。
*   **双重配置模式**：支持“Web UI 配置（数据库驱动）”和“基于文件的配置（`config.json`）”两种模式。
*   **文件配置特性**：若 `config.json` 中未配置 `config_store`，则 UI 被禁用，系统处于只读内存模式，修改配置需重启服务。
*   **三种存储类型**：系统包含配置存储（用于 UI 和密钥管理）、日志存储（用于 UI 请求日志，可禁用）和向量存储（用于语义缓存，可禁用）。

**3) 风险/缺口**
*   **配置模式互斥**：系统不支持同时使用 Web UI 配置和纯文件配置模式。
*   **文件修改失效风险**：在 `config.json` 中启用 `config_store` 后，文件仅用于首次数据库引导（Bootstrap），此后直接修改 `config.json` 将完全无效，必须通过 UI 或 HTTP API 进行后续更改。

## 正文

### 设置

只需 30 秒即可在零配置的情况下将 Bifrost 作为 HTTP API 网关运行。完美适用于任何编程语言。

![图 3：Bifrost 网关安装](https://mintcdn.com/bifrost/rSCLqSryHy0FlOS5/media/getting-started.png?fit=max&auto=format&n=rSCLqSryHy0FlOS5&q=85&s=a514276862de03a67ce2ca85e27448a1)

#### 30 秒快速设置

在**零配置**的情况下，将 Bifrost 作为极速 HTTP API 网关运行。通过遵循 **OpenAI 请求/响应格式**的统一 API，连接到任何 AI 提供商（OpenAI、Anthropic、Bedrock 等）。

##### 1. 选择您的设置方法

两种选项都能完美运行 - 请选择适合您工作流的方式：

###### NPX 二进制文件
```
# 在本地安装并运行
npx -y @maximhq/bifrost

# 安装特定版本
npx -y @maximhq/bifrost --transport-version v1.3.9
```

###### Docker
```
# 拉取并运行 Bifrost HTTP API
docker pull maximhq/bifrost
docker run -p 8080:8080 maximhq/bifrost

# 拉取特定版本
docker pull maximhq/bifrost:v1.3.9
docker pull maximhq/bifrost:v1.3.9-amd64
docker pull maximhq/bifrost:v1.3.9-arm64
```

**用于数据持久化**

```
# 用于在重启后保持配置持久化
docker run -p 8080:8080 -v $(pwd)/data:/app/data maximhq/bifrost
```

##### 2. 配置标志

| 标志 | 默认值 | NPX | Docker | 描述 |
| --- | --- | --- | --- | --- |
| port | 8080 | `-port 8080` | `-e APP_PORT=8080 -p 8080:8080` | HTTP 服务器端口 |
| host | localhost | `-host 0.0.0.0` | `-e APP_HOST=0.0.0.0` | 服务器绑定的主机地址 |
| log-level | info | `-log-level info` | `-e LOG_LEVEL=info` | 日志级别 (debug, info, warn, error) |
| log-style | json | `-log-style json` | `-e LOG_STYLE=json` | 日志样式 (pretty, json) |

**了解应用目录 (App Directory)**

`-app-dir` 标志决定了 Bifrost 存储其所有数据的位置：

```
# 指定自定义目录
npx -y @maximhq/bifrost -app-dir ./my-bifrost-data

# 如果未指定，将在您的操作系统配置目录中创建：
# • Linux/macOS: ~/.config/bifrost
# • Windows: %APPDATA%\bifrost
```

**app-dir 中存储的内容：**
*   `config.json` - 配置文件（可选）
*   `config.db` - 用于 UI 配置的 SQLite 数据库
*   `logs.db` - 请求日志数据库

**注意：** 通过 Docker 使用 Bifrost 时，您挂载的卷（volume）将被用作 app-dir。

##### 3. 打开 Web 界面

在浏览器中导航至 **[http://localhost:8080](http://localhost:8080/)**：

```
# macOS
open http://localhost:8080

# Linux
xdg-open http://localhost:8080

# Windows
start http://localhost:8080
```

🖥️ **Web UI 提供以下功能：**
*   **可视化的提供商设置** - 通过点击而非代码来添加 API 密钥
*   **实时配置** - 更改立即生效
*   **实时监控** - 请求日志、指标和分析
*   **治理管理** - 虚拟密钥、使用预算等

##### 4. 测试您的第一个 API 调用

```
curl -X POST http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai/gpt-4o-mini",
    "messages": [{"role": "user", "content": "Hello, Bifrost!"}]
  }'
```

**🎉 就是这样！** Bifrost 已运行并准备好路由 AI 请求。

#### 刚才发生了什么？

- **零配置启动**：Bifrost 在没有任何配置文件的情况下启动 - 一切都可以通过 Web UI 或 API 进行配置
- **兼容 OpenAI 的 API**：所有 Bifrost API 均遵循 OpenAI 请求/响应格式，以实现无缝集成
- **统一的 API 端点**：`/v1/chat/completions` 适用于任何提供商（OpenAI、Anthropic、Bedrock 等）
- **提供商解析**：`openai/gpt-4o-mini` 告诉 Bifrost 使用 OpenAI 的 GPT-4o Mini 模型
- **自动路由**：Bifrost 自动处理身份验证、速率限制和请求路由

* * *

#### 两种配置模式

Bifrost 支持**两种配置方法** - 您不能同时使用两者：

##### 模式 1：Web UI 配置

![图 4：通过 UI 配置](https://mintcdn.com/bifrost/haPSvjWru9cl-Jd-/media/ui-config.png?fit=max&auto=format&n=haPSvjWru9cl-Jd-&q=85&s=2c864081902d9f9f13115e0bc81da5fb)

**当 UI 可用时：**
*   不存在 `config.json` 文件（Bifrost 会自动创建 SQLite 数据库）
*   存在 `config.json` 且已配置 `config_store`

##### 模式 2：基于文件的配置

**何时使用：** 高级设置、GitOps 工作流，或者不需要 UI 时。在您的应用目录中创建 `config.json`：

```
{
  "client": {
    "drop_excess_requests": false
  },
  "providers": {
    "openai": {
      "keys": [
        {
          "name": "openai-key-1",
          "value": "env.OPENAI_API_KEY",
          "models": ["gpt-4o-mini", "gpt-4o"],
          "weight": 1.0
        }
      ]
    }
  },
  "config_store": {
    "enabled": true,
    "type": "sqlite",
    "config": {
      "path": "./config.db"
    }
  }
}
```

**在 `config.json` 中没有 `config_store` 时：**
*   **UI 被禁用** - 无法进行实时配置
*   **只读模式** - `config.json` 永远不会被修改
*   **仅内存** - 所有配置在启动时加载到内存中
*   **需要重启** - 对 `config.json` 的更改仅在重启后生效

**在 `config.json` 中包含 `config_store` 时：**
*   **UI 被启用** - 可通过 Web 界面进行全面的实时配置
*   **数据库检查** - Bifrost 会检查配置存储（config store）数据库是否存在且包含数据
    *   **空数据库**：使用 `config.json` 的设置引导（Bootstrap）数据库，然后专门使用该数据库
    *   **现有数据库**：直接使用数据库，**忽略** `config.json` 的配置
*   **持久化存储** - 所有更改立即保存到数据库中

**高级用户注意事项：** 如果您希望实现数据库持久化但不想使用 UI，请注意，在启用 `config_store` 的情况下，初始引导后修改 `config.json` 是无效的。请改用公共 HTTP API 来进行配置更改。

**三种存储 (Stores) 解释：**
*   **配置存储 (Config Store)**：存储提供商配置、API 密钥、MCP 设置 - UI 功能所必需
*   **日志存储 (Logs Store)**：存储在 UI 中显示的请求日志 - 可选，可以禁用
*   **向量存储 (Vector Store)**：用于语义缓存 - 可选，可以禁用

* * *

#### 后续步骤

既然您已经运行了 Bifrost，请探索以下专题指南：

###### 核心主题
*   **[提供商配置](https://docs.getbifrost.ai/quickstart/gateway/provider-configuration)** - 多提供商、自动故障转移与负载均衡
*   **[集成](https://docs.getbifrost.ai/integrations/what-is-an-integration)** - OpenAI、Anthropic 和 GenAI SDK 的直接替换方案 (Drop-in replacements)
*   **[多模态支持](https://docs.getbifrost.ai/quickstart/gateway/multimodal)** - 支持文本、图像、音频和流式传输，全部统一在一个通用接口之后。

###### 高级主题
*   **[追踪 (Tracing)](https://docs.getbifrost.ai/features/observability/default)** - 记录请求以进行监控和调试
*   **[MCP 工具](https://docs.getbifrost.ai/mcp/overview)** - 使 AI 模型能够使用外部工具（文件系统、网络搜索、数据库）
*   **[治理 (Governance)](https://docs.getbifrost.ai/features/governance/virtual-keys)** - 使用量跟踪、速率限制和成本控制
*   **[部署](https://docs.getbifrost.ai/deployment-guides/k8s)** - 生产环境设置与扩展

* * *

**祝您使用 Bifrost 开发愉快！** 🚀

## 关联主题

- [[00-元语/llmops]]
- [[00-元语/protocol]]
- [[00-元语/OpenAI]]
- [[00-元语/cli]]
- [[00-元语/observability]]
- [[00-元语/rate-limiting]]
- [[00-元语/mcp]]
- [[00-元语/self-hosting]]
