---
title: "File System as Meta Tool：AI Agent 基础设施新思路"

站点: "微信公众平台"
原文链接: "https://mp.weixin.qq.com/s/seaRW3uKwNfX0pnis8g0Rw"
发布日期: "2025-11-23"
作者: "thinkingloop"
---

## 摘要

**1) 一句话总结**
本文探讨了将文件系统作为 AI Agent 底层基础设施（Meta Tool）的新思路，主张借鉴“一切皆文件”的理念，通过统一的分布式文件系统接口来简化多智能体协作、工具调用与上下文管理。

**2) 核心要点**
*   **行业趋势验证**：Manus 和 Claude Code 的实践证明，“文件系统 + Bash” 的极简架构在处理 Agent 上下文时，比复杂的 Embedding 和索引路线更有效。
*   **核心设计哲学**：致敬 Unix 和 Plan 9 操作系统“一切皆文件”的理念，主张将队列、数据库、云存储甚至外部 API（如天气、订单）全部抽象为文件系统接口。
*   **现有基建痛点**：当前的 Agent 基础设施（API + 容器 + 本地文件系统）相互割裂，导致调试困难、协作依赖网络层拼接，且可观测性差。
*   **数据库的局限性**：虽然数据库擅长数据存取，但难以处理控制流（如 if-else、循环）和工具调用。Agent 需要的是“编程能力 + 数据访问能力”的结合。
*   **AGFS 项目实践**：开源项目 AGFS（Aggregated File System）将各种远程服务和可插拔沙盒（如 WebAssembly）封装为文件系统接口，提供统一的交互标准。
*   **赋能多智能体协同**：面向 Multi-Agent 架构，分布式文件系统（如 QueueFS 任务分发、S3FS 结果收集）能够原生支持跨地域、大规模的 Agent 协调工作。
*   **Meta Tool（元工具）定位**：与其为 Agent 提供单一的特定工具，不如提供原子能力（文件系统 + 命令行），让擅长编写 Shell 脚本的大模型自行组合出所需功能。
*   **高度可扩展性**：文件系统设计为可插拔模式，例如挂载 VectorFS 后，Agent 可以直接使用标准的 `grep` 命令在向量数据库中执行语义查询。

**3) 风险与不足**
*   **传统文件系统的缺陷**：传统文件系统仅适合非结构化数据（唯一的结构是文件夹目录），且难以支持 Agent 之间的消息投递与通信。
*   **现有协议的局限**：目前的 MCP 等协议本质上只是函数调用（Function Call）协议，并非为多智能体协同（Multi-Agent Coordination）而设计。
*   **本地操作风险**：近期频发的“Agent 删库事件”表明，Agent 直接操作本地文件系统存在安全隐患，需要更好的组织方式与分布式隔离机制。

## 正文

Thinkingloop 邀请到 PingCAP 联合创始人兼 CTO 黄东旭（主要作品有 Codis 和 TiDB），共同探讨近期备受关注的“文件系统”话题：为什么越来越多的人提出“File system for Agent Context”？为什么黄东旭在项目中提出“Everything is a file system”？以及他体现这一理念的最新个人项目 AGFS。

### 文件系统的复兴与历史借鉴

最近，文件系统作为 AI Agent 的核心架构正在被重新审视。Manus 发布了关于 Using File System as a Context 的文章；Claude Code 用“文件系统 + bash”的简单方案击败了复杂的 embedding 索引路线；Anthropic 的 Skill 系统也在用文件夹组织能力模块。这些实践都指向同一个方向：文件系统在 AI Agent 架构中正在展现出独特的价值。

但 AGFS 项目的创始人黄东旭认为，不应止步于文件本身。大多数人只是在文件上做抽象（例如把能力写成文本文件），但文件系统本身就可以做抽象。在 AGFS（Aggregated File System）的理念里，队列、数据库、天气 API 甚至咖啡订单，都可以是文件系统。

这种理念源自 Unix 的设计哲学：“Everything is a file”。设备、进程、网络连接都可以通过文件接口访问。这一理念在 90 年代的 Plan 9 操作系统中被推向极致，尝试将计算和存储节点抽象为文件系统，组成分布式操作系统。Linux 的 VFS（虚拟文件系统）也采用了类似思路，通过标准接口提供底层能力。

AGFS 延续了这一理念：Unix Pipeline + File System，能够以最小的代价组合出最多的可能性。只要将工具通过文件系统接口提供，就可以直接串联到 bash 上。正如黄东旭在项目 README 中所写：“'Everything is a file'. A tribute to Plan9, but in RESTful APIs”。

### Context、Memory 与文件系统的关系

当前的 AI Agent 基本遵循顺序执行模式，但真正复杂的任务很难用顺序的 Action Chain 串联。未来要让 AI Agent 完成更复杂的任务，必然需要 Multi-Agent Collaboration（多智能体协作）架构。

当前的 AI Agent 基础设施存在明显问题：Infra = APIs + Containers + Local File System。每个子系统（Memory、Tools、Communication）都是独立的 API，调试困难，协作依赖网络层拼接，可观测性往往是事后补充的。

作为数据库专家，黄东旭常被问到：为什么不直接用数据库作为底层平台？他指出，数据库对数据的存取和 SQL 操作很方便，但对控制流支持不佳（如 if-else、for loop 编写繁琐），且难以调用其他工具。Agent 需要的是“编程能力 + 数据访问能力”的结合。数据和代码合二为一，才能构成构建其他模块的 Meta Tool。

传统文件系统也存在两个缺陷：
1. **只适合非结构化数据**：唯一的结构就是文件夹目录。
2. **难以支持消息投递**：Agent 之间的通信在传统文件系统上实现起来非常别扭。

黄东旭的思路是：针对这些场景实现不同的文件系统，再串联到一个大平台上。这就是 Context File System 的价值：它既是 Context 的载体，也是 Memory 的组织方式。Memory 可以变得很简单——每个 Agent 分配一个文件夹，内部包含 long_term、short_term 等子文件夹，再配合排序和裁剪策略即可。

### AGFS 项目的核心哲学与实现

AGFS（Aggregated File System，也称 Agent File System）是黄东旭向 Plan 9 致敬的开源项目。其核心理念是：将各种远程服务、云存储、数据库、可插拔的 Sandbox 技术（如 WebAssembly）全部封装为文件系统接口，让大模型基于此工作。

黄东旭展示了一个极简的 Minimal Agent Framework：
```bash
cat context.txt | llm > output.txt && exec action.sh
```
读取 Context 传给 LLM，输出写入文件，最后执行 Action。这种模式不仅 LLM 能在一秒钟内理解，人类也能轻松看懂。Claude Code 就是这一思路的成功案例，其“文件系统 + bash”的大道至简模式，效果甚至优于复杂的 embedding 索引路线。

利用 AGFS，可以直接实现类似 Manus 的 Wide Research 功能：
1. 启动 10 个 Claude Code Agent 作为 Worker。
2. 获取 Hacker News 首页的 10 篇文章。
3. 通过 QueueFS 把任务分发到 10 个 Agent 的信箱。
4. Agent 完成后把结果提交到 S3FS 上的指定文件夹。
5. 主程序等待并收集结果。

关键在于，这些队列是分布式的，可以通过分布式系统在全球范围内协调。由于使用的是文件系统接口，开发者甚至可以直接用 `grep` 来筛选结果，这在文件系统中是天生的能力，而无需像传统线上产品那样再封装一层应用。

### 为什么现在是讨论文件系统的好时机？

当前有几个值得关注的行业信号：
* **头部玩家入局**：Manus 发布了关于使用文件系统作为 Context 的文章。
* **极简方案的胜利**：Claude Code 证明了“文件系统 + bash”比复杂的索引方案更有效。
* **安全与组织需求**：Agent 删库事件频发，说明需要更好地组织本地文件系统。
* **协作机制升级**：Multi-Agent 协作需求增长，急需分布式的协调机制。

面对层出不穷的新服务和新工具，AI 需要一个统一的接口（Unified Interface）来降低学习和使用成本。过去的 MCP 协议本质上只是 Function Call 协议，并非为 Multi-Agent 协作而设计。

此外，很多人默认文件系统和 Sandbox “在本地就行”，但如果要协调成千上万的 Agent，文件系统必须是分布式的。将分布式的对象存储（如 S3）暴露为文件系统接口，对 Agent 而言就是一个完美的分布式文件系统。

黄东旭认为，应该给 Agent 提供 Meta Tool（如文件系统 + bash + 命令行），而不是单一的具体工具，让它自己组合出用户需要的结果。大语言模型非常擅长编写 Shell 脚本，如果文件系统能为它提供一个更大的世界，AI 完全可以利用简单的接口撬动复杂的任务。

### 探索方向与未来展望

**原子能力的组合与可插拔设计**
AGFS 提供的是原子能力，支持向上叠加组合。其文件系统设计是高度可插拔的：开发者需要什么能力，就可以用 Rust、C 或其他语言编写一个文件系统，编译成 WebAssembly 包挂载到系统上使用。

**与向量数据库的关系**
AGFS 并非要取代向量数据库，而是用文件系统接口来统一它们。例如，挂载一个 VectorFS 后，可以通过以下方式操作：
```bash
cat /vectorfs/user_a.txt | grep "search keyword"
```
这里的 `grep` 并非直接的关键字匹配，而是在向量数据库中进行语义查询。同样的思路也适用于 Notion（编写 NotionFS 将数据库内容暴露到文件夹中，类似 Obsidian 将数据库作为文件夹的思路）。

**场景脑洞：Coffee File System**
如果将日常任务抽象为文件系统，买咖啡可以变成这样一行命令：
```bash
echo "buy me a coffee" > /coffeefs/order
```
结合天气 API，甚至可以实现更复杂的自动化逻辑（例如晴天买咖啡，雨天不买）：
```bash
weather=$(cat /weatherfs/tomorrow)
if [ "$weather" = "sunny" ]; then
    echo "latte" > /coffeefs/order
fi
```
剩下的工作仅仅是实现 WeatherFileSystem 和 CoffeeFileSystem。正如黄东旭所言：“大家只要把思维再开阔一点，什么东西一切皆可为文件系统。I mean everything.”

### 结语

文件系统在 AI Agent 架构中正在展现出独特的价值。无论是 File system as context，还是 File system as Meta Tool，目前仍处于早期阶段，需要更多 Builder 持续构建。AGFS 项目欢迎开发者加入生态共同探索。同时，许多专注于向量数据库、记忆和传统存储系统的创业者也在进行类似的新尝试，行业正在通过这些实践传递出令人兴奋的新信号。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/cli]]
- [[00-元语/memory]]
- [[00-元语/mcp]]
- [[00-元语/protocol]]
- [[00-元语/virtual-file-system]]
- [[00-元语/wasm]]
- [[00-元语/workflow]]
