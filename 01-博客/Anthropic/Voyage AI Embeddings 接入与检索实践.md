---
title: "Voyage AI Embeddings 接入与检索实践"

发布日期: "2024-04-26"
作者: "Anthropic"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/blob/main/third_party/VoyageAI/how_to_create_embeddings.md"
译注: "原文为英文仓库文档，本稿为中文整理版。"
---

## 摘要

**1) 一句话总结**
Anthropic 通过与 Voyage AI 合作提供文本嵌入服务，开发者可通过 Python 包、HTTP API 或 AWS 访问其通用及特定领域优化的嵌入模型。

**2) 核心要点**
*   **提供商**：Anthropic 自身不提供嵌入模型，首选 Voyage AI 作为官方合作提供商，并支持企业级微调。
*   **访问方式**：支持通过官方 `voyageai` Python 包、HTTP API 以及 AWS Marketplace 进行调用。
*   **推荐模型**：`voyage-2`（通用模型，上下文长度 4000，维度 1024）和 `voyage-code-2`（代码优化模型，上下文长度 16000，维度 1536）。
*   **输入限制**：单次请求最多支持传入 128 个文本字符串；`voyage-2` 的 Token 总数上限为 320K，`voyage-code-2` 为 120K。
*   **检索优化**：建议在检索/搜索场景中明确指定 `input_type` 参数（`query` 或 `document`），Voyage 会自动添加特定提示词以提升检索质量。
*   **相似度计算**：Voyage 嵌入向量已默认归一化为长度 1，因此计算余弦相似度等同于直接计算两个向量的点积。
*   **辅助功能**：提供 `vo.count_tokens()` 方法用于在请求前计算 Token 数量；HTTP API 支持通过 `encoding_format="base64"` 将嵌入压缩输出。

**3) 风险与不足**
*   **原生模型缺失**：Anthropic 自身不提供嵌入模型，需完全依赖第三方（Voyage AI）的服务。
*   **超长文本报错风险**：在生成嵌入时，如果 `truncation` 参数设为 `False` 且文本超过上下文长度，或者在默认（`None`）设置下文本大幅超出上下文窗口限制，系统将直接引发错误。

## 正文

# 嵌入 (Embeddings)
文本嵌入是文本字符串的数字表示，表示为浮点数向量。我们可以使用两个文本嵌入之间的距离（通常是余弦相似度）来衡量两段文本之间的相关性，距离越小预测的相关性越高。

比较字符串的相似度，或根据它们之间的距离对字符串进行聚类，可以实现多种应用，包括**搜索**（在 RAG 架构中很流行）、**推荐**和**异常检测**。

## 如何使用 Anthropic 获取嵌入

虽然 Anthropic 不提供自己的嵌入模型，但我们已与 [Voyage AI](https://www.voyageai.com/?ref=anthropic) 合作，将其作为我们首选的文本嵌入提供商。Voyage 提供[最先进的 (state of the art)](https://blog.voyageai.com/2023/10/29/voyage-embeddings/?ref=anthropic) 嵌入模型，甚至提供针对金融和医疗保健等特定行业领域定制的模型，以及可以为您的公司进行微调的模型。

要访问 Voyage 嵌入，请首先在 [Voyage AI 网站](https://dash.voyageai.com/?ref=anthropic)上注册，获取 API 密钥，并为了方便起见将该 API 密钥设置为环境变量：

```bash
export VOYAGE_API_KEY="<your secret key>"
```

您可以使用官方的 [`voyageai` Python 包](https://github.com/voyage-ai/voyageai-python)或 HTTP 请求来获取嵌入，如下所述。

### Voyage Python 包

可以使用以下命令安装 `voyageai` 包：

```bash
pip install -U voyageai
```

然后，您可以创建一个客户端对象并开始使用它来嵌入您的文本：

```python
import voyageai

vo = voyageai.Client()
# 这将自动使用环境变量 VOYAGE_API_KEY。
# 或者，您可以使用 vo = voyageai.Client(api_key="<your secret key>")

texts = ["Sample text 1", "Sample text 2"]

result = vo.embed(texts, model="voyage-2", input_type="document")
print(result.embeddings[0])
print(result.embeddings[1])
```

`result.embeddings` 将是一个包含两个嵌入向量的列表，每个向量包含 1024 个浮点数。运行上述代码后，屏幕上将打印出这两个嵌入：

```
[0.02012746, 0.01957859, ...]  # "Sample text 1" 的嵌入
[0.01429677, 0.03077182, ...]  # "Sample text 2" 的嵌入
```

在创建嵌入时，您可以为 `embed()` 函数指定一些其他参数。以下是参数说明：

> `voyageai.Client.embed(texts : List[str], model : str = "voyage-2", input_type : Optional[str] = None, truncation : Optional[bool] = None)`

- **texts** (List[str]) - 文本列表，作为字符串列表传入，例如 `["I like cats", "I also like dogs"]`。目前，列表的最大长度为 128，对于 `voyage-2`，列表中的 Token 总数最多为 320K，对于 `voyage-code-2` 为 120K。
- **model** (str) - 模型名称。推荐选项：`voyage-2`（默认），`voyage-code-2`。
- **input_type** (str, 可选, 默认为 `None`) - 输入文本的类型。默认为 `None`。其他选项：`query`，`document`。
    - 当 input_type 设置为 `None` 时，输入文本将直接由我们的嵌入模型编码。或者，当输入是文档或查询时，用户可以分别将 input_type 指定为 `document` 或 `query`。在这种情况下，Voyage 会在输入文本前添加一个特殊的提示词 (prompt)，并将扩展后的输入发送给嵌入模型。
    - 对于检索/搜索用例，我们建议在对查询或文档进行编码时指定此参数，以提高检索质量。使用和不使用 input_type 参数生成的嵌入是兼容的。

- **truncation** (bool, 可选, 默认为 `None`) - 是否截断输入文本以适应上下文长度。
    - 如果为 `True`，超长的输入文本将在被嵌入模型向量化之前被截断，以适应上下文长度。
    - 如果为 `False`，如果任何给定文本超过上下文长度，将引发错误。
    - 如果未指定（默认为 `None`），如果输入文本略微超过上下文窗口长度，Voyage 将在将其发送到嵌入模型之前对其进行截断。如果它大大超过上下文窗口长度，则会引发错误。

### Voyage HTTP API

您也可以通过请求 Voyage HTTP API 来获取嵌入。例如，您可以在终端中通过 `curl` 命令发送 HTTP 请求：

```bash
curl https://api.voyageai.com/v1/embeddings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $VOYAGE_API_KEY" \
  -d '{
    "input": ["Sample text 1", "Sample text 2"],
    "model": "voyage-2"
  }'
```

您将获得的响应是一个包含嵌入和 Token 使用情况的 JSON 对象：

```bash
{
  "object": "list",
  "data": [
    {
      "embedding": [0.02012746, 0.01957859, ...],
      "index": 0
    },
    {
      "embedding": [0.01429677, 0.03077182, ...],
      "index": 1
    }
  ],
  "model": "voyage-2",
  "usage": {
    "total_tokens": 10
  }
}
```

Voyage AI 的嵌入端点是 `https://api.voyageai.com/v1/embeddings` (POST)。请求头必须包含 API 密钥。请求体是一个包含以下参数的 JSON 对象：

- **input** (str, List[str]) - 单个文本字符串，或作为字符串列表的文本列表。目前，列表的最大长度为 128，对于 `voyage-2`，列表中的 Token 总数最多为 320K，对于 `voyage-code-2` 为 120K。
- **model** (str) - 模型名称。推荐选项：`voyage-2`（默认），`voyage-code-2`。
- **input_type** (str, 可选, 默认为 `None`) - 输入文本的类型。默认为 `None`。其他选项：`query`，`document`。
- **truncation** (bool, 可选, 默认为 `None`) - 是否截断输入文本以适应上下文长度。
    - 如果为 `True`，超长的输入文本将在被嵌入模型向量化之前被截断，以适应上下文长度。
    - 如果为 `False`，如果任何给定文本超过上下文长度，将引发错误。
    - 如果未指定（默认为 `None`），如果输入文本略微超过上下文窗口长度，Voyage 将在将其发送到嵌入模型之前对其进行截断。如果它大大超过上下文窗口长度，则会引发错误。
- **encoding_format** (str, 可选, 默认为 `None`) - 嵌入编码的格式。Voyage 目前支持两个选项：
    - 如果未指定（默认为 `None`）：嵌入表示为浮点数列表；
    - `"base64"`：嵌入被压缩为 [Base64](https://docs.python.org/3/library/base64.html) 编码。

### AWS Marketplace

Voyage 嵌入可在 [AWS Marketplace](https://aws.amazon.com/marketplace/seller-profile?id=seller-snt4gb6fd7ljg) 上获取。以下是在 AWS 上访问 Voyage 的说明：

1. 订阅模型包

    1. 导航到[模型包列表页面](https://aws.amazon.com/marketplace/seller-profile?id=seller-snt4gb6fd7ljg)并选择要部署的模型。
    1. 点击 *Continue to subscribe*（继续订阅）按钮。
    1. 在 *Subscribe to this software*（订阅此软件）页面上，请仔细查看详细信息。如果您和您的组织同意标准的最终用户许可协议 (EULA)、定价和支持条款，请点击“Accept Offer”（接受优惠）。
    1. 选择 *Continue to configuration*（继续配置）并选择一个区域后，您将看到一个 Product Arn。这是使用 Boto3 创建可部署模型所需的模型包 ARN。复制与您选择的区域对应的 ARN，并在后续单元格中使用它。

2. 部署模型包

    从现在开始，我们建议您继续使用我们在 [Sagemaker Studio](https://aws.amazon.com/sagemaker/studio/) 中提供的 notebook（`https://github.com/voyage-ai/voyageai-aws/blob/main/notebooks/deploy_voyage_code_2_sagemaker.ipynb`）。请创建一个 JupyterLab 空间，上传我们的 notebook，然后从那里继续。

## 可用模型

Voyage 推荐使用以下嵌入模型：

| 模型 | 上下文长度 | 嵌入维度 | 描述 |
| --- | --- | --- | --- |
| `voyage-2` | 4000 | 1024 | 最新基础（通用）嵌入模型，具有最佳检索质量。详情请见[博客文章](https://blog.voyageai.com/2023/10/29/voyage-embeddings/?ref=anthropic)。 |
| `voyage-code-2` | 16000 | 1536 | 针对代码检索进行了优化（比替代方案好 17%），并且在通用语料库上也是最先进的 (SoTA)。详情请见[博客文章](https://blog.voyageai.com/2024/01/23/voyage-code-2-elevate-your-code-retrieval/?ref=anthropic)。 |

`voyage-2` 是一个通用嵌入模型，在各个领域都达到了最先进的性能，并保持了高效率。`voyage-code-2` 针对代码应用进行了优化，提供 4 倍的上下文长度以实现更灵活的使用，尽管延迟略高。

Voyage 正在积极开发更高级和专业的模型，并可以为您的公司微调嵌入。请发送电子邮件至 [contact@voyageai.com](mailto:contact@voyageai.com) 以获取试用访问权限或在您自己的数据上进行微调！

- `voyage-finance-2`: 敬请期待
- `voyage-law-2`: 敬请期待
- `voyage-multilingual-2`: 敬请期待
- `voyage-healthcare-2`: 敬请期待

## 引导示例

既然我们已经知道如何获取嵌入，让我们来看一个简短的引导示例。

假设我们有一个包含六个文档的小型语料库可供检索：

```python
documents = [
    "The Mediterranean diet emphasizes fish, olive oil, and vegetables, believed to reduce chronic diseases.",
    "Photosynthesis in plants converts light energy into glucose and produces essential oxygen.",
    "20th-century innovations, from radios to smartphones, centered on electronic advancements.",
    "Rivers provide water, irrigation, and habitat for aquatic species, vital for ecosystems.",
    "Apple’s conference call to discuss fourth fiscal quarter results and business updates is scheduled for Thursday, November 2, 2023 at 2:00 p.m. PT / 5:00 p.m. ET.",
    "Shakespeare's works, like 'Hamlet' and 'A Midsummer Night's Dream,' endure in literature."
]
```

我们首先使用 Voyage 将它们每一个转换为嵌入向量：

```python
import voyageai

vo = voyageai.Client()

# 嵌入文档
doc_embds = vo.embed(
    documents, model="voyage-2", input_type="document"
).embeddings
```

嵌入将允许我们在向量空间中进行语义搜索/检索。给定一个示例查询：

```python
query = "When is Apple's conference call scheduled?"
```

我们将其转换为嵌入，并进行最近邻搜索，以根据嵌入空间中的距离找到最相关的文档。

```python
import numpy as np

# 嵌入查询
query_embd = vo.embed(
    [query], model="voyage-2", input_type="query"
).embeddings[0]

# 计算相似度
# Voyage 嵌入被归一化为长度 1，因此点积和余弦相似度是相同的。
similarities = np.dot(doc_embds, query_embd)

retrieved_id = np.argmax(similarities)
print(documents[retrieved_id])
```

请注意，我们分别使用 `input_type="document"` 和 `input_type="query"` 来嵌入文档和查询。更多规范可以在[此处](#voyage-python-包)找到。

输出将是第 5 个文档，这确实是与查询最相关的文档：

```
Apple’s conference call to discuss fourth fiscal quarter results and business updates is scheduled for Thursday, November 2, 2023 at 2:00 p.m. PT / 5:00 p.m. ET.
```

如果您正在寻找关于如何使用嵌入（包括向量数据库）进行 RAG 的详细 Cookbook，请查看我们的 RAG Cookbook（`https://github.com/anthropics/anthropic-cookbook/blob/main/third_party/Pinecone/rag_using_pinecone.ipynb`）。

## 常见问题解答

### 如何计算两个嵌入向量之间的距离？
余弦相似度是一个常见的选择，但大多数距离函数都可以很好地工作。Voyage 嵌入被归一化为长度 1，因此余弦相似度本质上与两个向量之间的点积相同。以下是可用于计算两个嵌入向量之间余弦相似度的代码片段。

```python
import numpy

similarity = np.dot(embd1, embd2)
# Voyage 嵌入被归一化为长度 1，因此余弦相似度与点积相同。
```

如果您想在大型语料库中寻找 K 个最近邻的嵌入向量，我们建议使用大多数向量数据库中内置的功能。

### 我可以在嵌入字符串之前计算其 Token 数量吗？
可以！您可以使用以下代码执行此操作。

```python
import voyageai

vo = voyageai.Client()
total_tokens = vo.count_tokens(["Sample text"])
```

## 定价

定价信息可在 Voyage 网站的[定价页面](https://docs.voyageai.com/pricing/?ref=anthropic)上获取，请前往该页面查看。

## 相关文档

- [[01-博客/Anthropic/Claude Capabilities 指南与 Promptfoo 评测实践|Claude Capabilities 指南与 Promptfoo 评测实践]]；关联理由：上下游；说明：本篇提供 Voyage Embeddings 接入与参数边界，作为该文 RAG 评测流程的前置依赖。
- [[01-博客/Anthropic/Claude Cookbooks 项目总览与能力地图|Claude Cookbooks 项目总览与能力地图]]；关联理由：引用；说明：该文在 third_party 集成目录中直接引用本篇作为 Voyage embeddings 入口。

## 关联主题

- [[00-元语/rag]]
- [[00-元语/llm]]
- [[00-元语/sdk]]
- [[00-元语/context-database]]
