---
title: "让 Obsidian 会自动工作：用 n8n 打造智能知识库"

站点: "微信公众平台"
原文链接: "https://mp.weixin.qq.com/s/SuxLo0Qb-TKFGO0Yo3a3cA"
发布日期: "2025-10-05"
作者: "林月半子的AI笔记"
---

## 摘要

**1) 一句话总结**
通过配置 Obsidian 的 Local REST API 插件并结合 n8n 工作流，用户可以实现知识库的完全自动化管理，包括自动创建动态日记与定时抓取外部专栏文章入库。

**2) 核心要点**
* **插件配置**：在 Obsidian 安装 Local REST API 插件，开启非加密 HTTP 服务（Enable Non-encrypted Server），获取 API Key 和默认端点（`http://127.0.0.1:27123/`）。
* **n8n 认证**：在 n8n 中创建 Bearer Auth 凭证，填入 Obsidian 的 API Key 以建立连接。
* **网络路由**：若 n8n 通过 Docker 部署，API 请求地址需将 `127.0.0.1` 替换为 `host.docker.internal`。
* **读写操作**：通过 HTTP Request 节点，使用 GET 方法读取知识库列表；使用 POST 方法（Body 配置为 Raw 和 `text/plain`）向指定路径写入 Markdown 内容。
* **自动化日记**：结合 Schedule Trigger、AI Agent（DeepSeek）和高德地图 MCP，可定时（如每天早7点）自动生成包含天气预报和动态日期的每日记录框架。
* **专栏抓取实战**：配合 Crawl4AI 抓取小报童文章，通过 Code 节点处理文件名与路径，自动将 HTML 转换为 Markdown 并存入 Obsidian 文件夹。
* **防重机制**：建议在写入前通过 GET 请求检查文件状态，若返回 404 则创建，返回 200 则跳过或更新，以避免重复抓取。
* **课程信息**：作者提供的 AI 自动化实战课包含 30+ 场景，国庆后价格将从 ¥199 上调至 ¥599。

**3) 风险/缺口**
* **访问限制**：Local REST API 插件仅监听本地回环地址（127.0.0.1），外部网络无法直接访问知识库（原文作为安全提示提及）。
* **非法字符报错风险**：外部文章标题可能包含非法字符（如 `/\?%*:|"<>`），必须在 n8n 的 Code 节点中进行正则清理替换，否则会导致文件创建失败。
* **标题缺失异常**：抓取外部数据时可能遇到标题为空（null 或 undefined）的情况，需在代码中设置备用命名逻辑（如使用文章 ID 或时间戳）。

## 正文

关注「林月半子的AI笔记」，设为「星标」。我是林月半子，与你「探索AI的无限可能」，一起拥抱未来！

你是否有这样的体验？

Obsidian 知识库里积累了大量笔记，也装了不少自动化插件。但当你想要实现一些特定的自动化需求时——比如定时抓取某个专栏的文章，或者把会议纪要自动分类整理，总会发现现有插件要么功能不够灵活，要么根本找不到合适的。

虽然某些工具能帮你导入内容，但它们都是固定的流程。如果你想要完全自定义的自动化方案呢？

想象一下这样的场景：
* 每天早上自动生成包含今日天气、待办事项的日记模板
* 小报童专栏更新后，自动抓取并按你的格式整理成笔记
* 重要邮件自动转存，并根据关键词分类到不同文件夹

这些都不是现成插件能做到的。但是，通过 n8n 配合 Obsidian 的 Local REST API 插件，我们可以把 Obsidian 变成一个可以被任意程序操作的智能工作台，实现完全自定义的自动化流程。

今天这篇文章，我将带你从零开始，一步步实现：
1. 搭建 Obsidian 与 n8n 的连接通道
2. 验证可行性：读取和创建笔记
3. 实战案例：自动抓取小报童并写入知识库

---

### 一、第一步：安装 Local REST API 插件

#### 1. 什么是 Local REST API？
Local REST API 是 Obsidian 社区中的一个强大插件，它的核心作用是：对外暴露 HTTP 接口，让外部程序可以通过标准的 REST API 来操作你的知识库。简单来说，它就像是在 Obsidian 和外部世界之间架起了一座桥梁。

#### 2. 安装与配置步骤
1. 打开 Obsidian 设置 → 社区插件 → 浏览。
2. 搜索 **Local REST API** 并点击安装。
3. 安装完成后，点击 **Enable** 按钮启用插件。
4. 点击 **Options** 进入设置页面。
5. 找到 **Enable Non-encrypted(HTTP) Server** 选项并打开。

**📌 重要信息记录：**
* **API Key:** 在设置页面顶部，复制你的 API Key（后续会用到）。
* **API Endpoint:** 默认地址是 `http://127.0.0.1:27123/`。

> **⚠️ 安全提示：** Local REST API 只监听本地回环地址（127.0.0.1），这意味着只有你本机的程序才能访问，外部网络无法直接访问你的知识库，相对安全。

#### 3. API 能力一览
这个插件支持的操作包括但不限于：
* 📖 读取笔记内容
* ✍️ 创建新笔记
* 🔄 更新现有笔记
* 🗑️ 删除笔记
* 📁 管理文件夹
* 🔍 搜索笔记

---

### 二、第二步：在 n8n 中建立连接

#### 1. 创建 Bearer Token 凭证
在 n8n 中使用 Obsidian API 之前，我们需要先配置认证凭证。
1. 在 n8n 界面中，点击右上角 **Create Credential**。
2. 创建新凭证，选择 **Bearer Auth**。
3. 配置参数：在 **Bearer Token** 中填入 `YOUR_API_KEY`（替换为你从 Obsidian 复制的 API Key）。

#### 2. 测试连接：读取知识库列表
现在让我们创建第一个节点来验证连接：
1. 创建 **HTTP Request** 节点，命名为“读取知识库列表”。
2. 配置参数：
   * **Method:** `GET`
   * **URL:** `http://host.docker.internal:27123/vault/`
   * **Authentication:** 选择刚才创建的 Obsidian API 凭证。
3. 点击右上角的 **Execute step** 按钮执行。

> **💡 关于地址的说明：**
> * 如果 n8n 是通过 Docker 部署的，使用 `host.docker.internal` 代替 `127.0.0.1`。
> * 如果 n8n 是本地安装，直接使用 `http://127.0.0.1:27123/`。

如果配置正确，你应该能看到返回的 JSON 数据，其中包含了你 Obsidian 知识库中所有笔记的列表信息。恭喜！这意味着 n8n 已经成功连接到你的 Obsidian 知识库了！

---

### 三、第三步：创建你的第一篇自动笔记

读取成功只是开始，现在让我们尝试通过 n8n 自动创建一篇笔记。

#### 1. 配置创建笔记节点
在 n8n 中新建一个 **HTTP Request** 节点，这次我们要用它来写入内容。
* **Method:** `POST`
* **URL:** `http://host.docker.internal:27123/vault/n8n自动化测试笔记.md`
* **Authentication:** 选择之前创建的 Obsidian API 认证凭证。

接下来配置 Body：
* 打开 **Send Body** 开关。
* **Body Content Type** 选 `Raw`。
* **Content Type** 填 `text/plain`。
* 最关键的是 **Body** 内容，这里切换到表达式模式，输入我们要创建的笔记内容：

```markdown
# n8n 与 Obsidian 自动化集成测试

> 笔记创建时间: {{$now.format('yyyy-MM-dd HH:mm:ss')}}

## 实验目标
通过 n8n 工作流验证 Local REST API 插件的写入能力,为后续构建自动化知识管理系统打下基础。

## 待实现功能清单
- [ ] 探索更多 Obsidian API 功能
- [ ] 实现小报童文章自动抓取到 Obsidian
- [ ] 测试批量笔记创建性能

## 技术要点
1.**认证方式**: Bearer Token
2.**内容格式**: Markdown
3.**编码设置**: UTF-8
4.**API 端点**: http://127.0.0.1:27123/

## 后续规划
接下来将测试更复杂的场景,包括文件夹管理、笔记更新、搜索功能等,最终目标是打造一个完整的自动化知识管理工作流。
```

配置完成后，点击右上角的 **Execute step** 执行这个节点。切换到 Obsidian，你会发现一篇名为 `n8n自动化测试笔记.md` 的新笔记已经出现在你的知识库中了！

#### 2. 进阶：定时生成当日记录框架
掌握了手动创建笔记后，我们再进一步——让 n8n 每天早上自动为你生成当日的记录框架，甚至还能加上实时天气信息。

**基础版：纯记录框架**
新建一个工作流，添加 **Schedule Trigger** 节点。然后添加 **HTTP Request** 节点，这次 URL 需要动态生成日期：
`http://host.docker.internal:27123/vault/每日记录/{{$now.format('yyyy')}}/{{$now.format('MM')}}/{{$now.format('yyyy-MM-dd')}} 每日记录.md`

这样会自动按年份创建文件夹。Body 内容可以这样写：

```markdown
---
date: {{$now.format('yyyy-MM-dd')}}
tags: 
  - 每日记录
created: {{ $now.format('yyyy-MM-dd hh:mm:ssa') }}
---

> 📅 {{$now.format('yyyy年MM月dd日 EEEE', 'zh-CN')}}

## 🌅 今日计划
- [ ] 

## 📚 学习笔记

## 💼 工作记录

## 🌙 每日总结

---
**自动生成于 {{$now.format('HH:mm:ss')}}**
```

**进阶版：加入天气信息**
如果想让每日记录更智能，可以在工作流中增加几个节点：
1. 在触发器后添加 **Set** 节点，设置你的城市。
2. 添加 **AI Agent** 节点，连接以下子节点：
   * DeepSeek Chat Model：作为 AI 语言模型
   * 高德地图 MCP：作为天气数据源
   * 结构化输出解析器：格式化天气预报

AI Agent 的 **User Prompt** 可以这样写：
> 请基于以下天气数据生成一份个性化的天气预报：
> 城市：{{ $json.city || '温州' }}
> 查询时间：{{ $json.request_time }}
> 
> 请生成一份包含以下内容的中文天气预报：
> 1. 🌤️ 今日天气概况
> 2. 🌡️ 温度和体感温度
> 3. 👔 穿衣建议
> 4. 🚗 出行提醒
> 5. 💡 生活小贴士
> 
> 要求：语言生动友好，适合日常阅读；包含实用的生活建议；使用emoji增加可读性；总长度控制在200-300字。

**System Prompt** 可以这样写：
> 你是一位贴心的天气播报员，擅长将枯燥的天气数据转化为温馨实用的生活建议。请用温暖友好的语调，为用户提供个性化的天气预报和生活指导。

最后在写入 Obsidian 的 Body 中引用天气数据 `{{ $json.output.formatted_report }}`。

配置完成后，激活工作流。从此每天早上 7 点，Obsidian 就会自动出现一篇已填好日期、天气和基础结构的当日记录框架。这就是自动化的魅力——你可以让 n8n 在任何时间、基于任何触发条件、从任何数据源自动创建笔记！

---

### 四、实战案例：自动采集小报童文章到知识库

现在让我们来做一个真正实用的自动化工作流：将小报童专栏的文章自动抓取并保存到知识库中。

#### 1. 工作流设计思路
整个流程可以分为三个部分：
1. **配置与抓取**：配置小报童专栏参数，使用 Crawl4AI 批量抓取文章。
2. **文章处理**：拆分文章列表，判断是否需要抓取。
3. **写入 Obsidian**：将 HTML 转换为 Markdown，直接保存到知识库。

#### 2. 改造原有工作流
如果你已经有了小报童文章抓取的工作流，现在只需要把原来“保存到本地文件”的部分，替换成“写入 Obsidian”。

在“HTML 转 Markdown”节点之后，添加一个 **Code** 节点来处理文件信息，构建符合 Obsidian 的文件路径和文件名：

```javascript
// 获取文章标题和内容
let title = $input.first().json.title;

// 处理 title 为 null 或 undefined 的情况
if (!title) {
  const articleId = $input.first().json.id;
  title = articleId ? `文章_${articleId}` : `未命名文章_${Date.now()}`;
}

// 清理标题中的非法字符
const safeTitle = title.replace(/[\/\\?%*:|"<>]/g, '_');
const markdown = $input.first().json.data;

// 从 target_url 提取专栏标识符
function extractColumnId(targetUrl) {
  const match = targetUrl.match(/\/p\/([^\/]+)\/?$/);
  return match ? match[1] : 'unknown';
}

// 获取专栏标识符
const targetUrl = $('配置专栏参数').first().json.target_url;
const outputBasePath = $('配置专栏参数').first().json.output_base_path;
const columnId = extractColumnId(targetUrl);

// 构建文件路径(可以根据需要调整文件夹结构)
const filePath = `${outputBasePath}/${columnId}/${safeTitle}.md`;

return {
  json: {
    title: safeTitle,
    markdown: markdown,
    filePath: filePath
  }
};
```

#### 3. 写入 Obsidian 节点
最后一步，添加 **HTTP Request** 节点将内容写入 Obsidian。
* **Method:** `POST`
* **URL:** `http://host.docker.internal:27123/vault/{{$json.filePath}}` （动态使用前面节点生成的文件路径）
* **Body:** 打开 Send Body，选 Raw 和 text/plain，内容填 `{{$json.markdown}}`。

点击 **Execute Workflow** 运行。几秒钟后，切换到 Obsidian，你会发现专栏文件夹中已经出现了所有抓取的文章，且都是标准的 Markdown 格式。

#### 4. 进阶优化建议
* **添加文章元数据**：在写入前，为每篇文章添加 YAML Front Matter（包含标题、来源、抓取时间、标签等）。
* **避免重复抓取**：在写入前，先用 GET 请求检查文件是否已存在。如果返回 404 说明不存在可以创建；返回 200 说明已存在，可跳过或更新。
* **定时自动执行**：在工作流开头添加 Schedule Trigger 节点，实现完全自动化的文章采集。

---

### 五、写在最后

从安装插件到验证连接，再到实现小报童文章的自动采集，我们用 n8n 让 Obsidian 真正“活”了起来。回头看整个过程，其实核心就做了三件事：
1. 用 Local REST API 插件打开了 Obsidian 的大门。
2. 在 n8n 中配置好认证，建立起连接通道。
3. 改造现有工作流，把数据写入知识库而不是本地文件。

更重要的是思路。一旦理解了这套玩法，你就能把 Obsidian 连接到任何数据源：
* 每天早上自动生成日记模板和待办清单
* RSS 订阅的文章自动整理归档
* 会议纪要通过 API 直接入库
* 重要邮件一键转存为笔记
* 数据库定期导出生成报告

小报童只是一个例子。微信公众号、知乎专栏、Medium、甚至是你自己的数据库，只要能拿到数据，就能自动写入 Obsidian。你的知识库不再是一个需要手动维护的仓库，而是一个会自动生长的知识系统。

大家好，我是林月半子，一个 n8n 自动化爱好者。如果这篇文章对你有帮助，欢迎分享给更多热爱知识管理和自动化的朋友。如果你有任何问题或者创意，也欢迎在评论区交流讨论！

---

**限时涨价通知**

这篇文章分享的 n8n + Obsidian 自动化方案，只是我在AI自动化场景实战课中的一个小案例。如果你想系统掌握这套方法论，课程里还有 30+ 个真实场景：数据处理自动化、内容生产自动化、多平台内容同步、AI 工具深度集成...

🎯 **课程特色**
* ✅ **零基础友好** - 非技术背景也能完全学会
* ✅ **干货满满** - 30+ 真实案例，可直接复用
* ✅ **持续更新** - 一次付费，永久免费更新
* ✅ **陪跑服务** - 赠送 3 个月免费咨询，保障落地效果

课程基于真实工作场景设计，培养的不只是工具操作，更是发现问题→分析需求→选择方案→落地执行的完整思维链条。

⏰ **课程调价通知**
* 当前价格: ¥199
* 国庆后调整为: ¥599

课程持续升级中：案例库从 10+ 扩充到 30+，覆盖更多实战场景；新增每周日直播答疑与案例拆解；提供独家出海经验分享。早期用户用更低的价格支持了课程成长，现在课程价值提升，定价也相应调整。现在加入，享受最后的早鸟价！

👉 [立即加入课程] https://rvfdqgohv5q.feishu.cn/wiki/DkU6we3HGiKgNzkYRHLcOdBMncd

## 关联主题

- [[00-元语/workflow]]
- [[00-元语/知识工作]]
- [[00-元语/web-crawling]]
- [[00-元语/mcp]]
- [[00-元语/markdown]]
