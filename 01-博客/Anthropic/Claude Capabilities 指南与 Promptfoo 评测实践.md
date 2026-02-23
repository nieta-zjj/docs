---
title: "Claude Capabilities 指南与 Promptfoo 评测实践"

发布日期: "2026-01-27"
作者: "Anthropic"
来源仓库: "anthropics/claude-cookbooks"
原文链接:
  - "https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/README.md"
  - "https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/classification/README.md"
  - "https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/contextual-embeddings/README.md"
  - "https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/retrieval_augmented_generation/README.md"
  - "https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/summarization/README.md"
  - "https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/text_to_sql/README.md"
  - "https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/classification/evaluation/README.md"
  - "https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/retrieval_augmented_generation/evaluation/README.md"
  - "https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/summarization/evaluation/README.md"
  - "https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/text_to_sql/evaluation/README.md"
译注: "原文为英文仓库文档，本稿为中文整理版。"
---

## 摘要

**1) 一句话总结**
本文档汇集了 Claude 在分类、检索增强生成（RAG）、总结和 Text-to-SQL 等核心能力上的实践指南，并详细说明了如何使用 Promptfoo 框架对这些能力进行自动化测试与评估。

**2) 关键要点**
*   **核心能力覆盖**：指南涵盖了五大主要场景：分类、标准 RAG、使用上下文嵌入（Contextual Embeddings）的 RAG、多源信息总结以及 Text-to-SQL。
*   **标准化目录结构**：每个能力模块都是独立的，均包含主教程笔记本（`guide.ipynb`）、测试数据目录（`data/`）和评估脚本目录（`evaluation/`）。
*   **评估工具链**：统一使用 Promptfoo 进行评估编排，运行前需在系统上安装 Node.js 和 npm，并通过 `npx promptfoo@latest eval` 执行测试。
*   **配置文件结构**：评估逻辑由 `promptfooconfig.yaml` 驱动，其中定义了提示词（Prompts）、模型提供商（Providers）、测试用例（Tests）和输出格式（Output）。
*   **RAG 评估策略**：RAG 的评估被拆分为两个独立部分：检索系统评估（`promptfooconfig_retrieval.yaml`）和端到端性能评估（`promptfooconfig_end_to_end.yaml`）。
*   **总结评估指标**：总结能力的评估使用了自定义指标，包括 BLEU 分数、ROUGE 分数以及基于 LLM 的评估（需额外通过 pip 安装 `nltk` 和 `rouge-score` 依赖）。
*   **环境变量要求**：运行评估前必须配置相应的 API 密钥，如 `ANTHROPIC_API_KEY` 和 `VOYAGE_API_KEY`。
*   **结果可视化**：评估完成后，除了输出 CSV/JSON 等格式文件外，还可以通过运行 `npx promptfoo@latest view` 在 Web UI 中查看结果。

**3) 风险与缺口**
*   **API 速率限制风险**：运行完整的评估套件可能需要高于正常的 API 速率限制（Rate limits），官方建议考虑仅运行测试的子集。
*   **测试通过率预期**：并非所有测试都能开箱即用地通过，评估用例被故意设计得具有一定挑战性。
*   **Python 环境冲突**：Promptfoo 默认在 shell 中运行 Python，如果系统找不到 Python 二进制文件会报错（"python: command not found"），需通过设置 `PROMPTFOO_PYTHON` 环境变量来手动指定可执行文件路径。

## 正文

### 来源文档：`capabilities/README.md`

# Claude 能力 (Capabilities)

欢迎来到 Claude Cookbooks 的能力（Capabilities）部分！本目录包含了一系列指南，展示了 Claude 擅长的特定能力。每篇指南都对某项特定能力进行了深入探索，讨论了潜在的用例、优化结果的提示词工程（prompt engineering）技术，以及评估 Claude 性能的方法。

## 指南

- **使用 Claude 进行分类 (Classification with Claude)（`./classification/guide.ipynb`）**：探索 Claude 如何彻底改变分类任务，特别是在具有复杂业务规则和有限训练数据的场景中。本指南将带您了解数据准备、结合检索增强生成（RAG）的提示词工程、测试和评估。

- **使用 Claude 进行检索增强生成 (Retrieval Augmented Generation with Claude)（`./retrieval_augmented_generation/guide.ipynb`）**：了解如何使用 RAG 利用特定领域的知识来增强 Claude 的能力。本指南演示了如何从头开始构建 RAG 系统、优化其性能并创建评估套件。您将学习摘要索引和重排（re-ranking）等技术如何显著提高问答任务中的精确度、召回率和整体准确性。

- **使用上下文嵌入的检索增强生成 (Retrieval Augmented Generation with Contextual Embeddings)（`./contextual-embeddings/guide.ipynb`）**：了解如何使用一项新技术来提高 RAG 系统的性能。在传统的 RAG 中，文档通常被分割成较小的分块（chunks）以便于高效检索。虽然这种方法适用于许多应用，但当单个分块缺乏足够的上下文时，就会导致问题。上下文嵌入（Contextual Embeddings）通过在嵌入之前为每个分块添加相关的上下文来解决这个问题。您将学习如何将上下文嵌入与语义搜索、BM25 搜索和重排结合使用以提高性能。

- **使用 Claude 进行总结 (Summarization with Claude)（`./summarization/guide.ipynb`）**：探索 Claude 从多个来源总结和综合信息的能力。本指南涵盖了各种总结技术，包括多样本（multi-shot）、基于领域和分块的方法，以及处理长篇内容和多文档的策略。我们还探讨了如何评估总结，这可能是艺术、主观性和正确方法之间的平衡！

- **使用 Claude 进行 Text-to-SQL (Text-to-SQL with Claude)（`./text_to_sql/guide.ipynb`）**：本指南介绍了如何使用提示词技术、自我改进和 RAG 从自然语言生成复杂的 SQL 查询。我们还将探索如何评估和提高生成的 SQL 查询的准确性，包括测试语法、数据正确性、行数等方面的评估。

## 开始使用

要开始使用这些指南，只需导航到所需指南的目录并按照 `guide.ipynb` 文件中提供的说明进行操作。每篇指南都是独立的，并包含重现示例和实验所需的所有代码、数据和评估脚本。

---

### 来源文档：`capabilities/classification/README.md`

# 使用 Claude 进行分类

了解如何使用 Claude 执行分类任务，特别是在具有复杂业务规则和有限训练数据的场景中。

## 包含内容

- `guide.ipynb`：主教程笔记本
- `data/`：用于示例和测试的数据文件
- `evaluation/`：使用 Promptfoo 的评估脚本

有关评估说明，请参阅 `evaluation/README.md`。

---

### 来源文档：`capabilities/contextual-embeddings/README.md`

# 使用上下文嵌入的检索增强生成

了解如何使用上下文嵌入在嵌入之前为每个分块添加相关上下文，从而提高 RAG 性能。

## 包含内容

- `guide.ipynb`：主教程笔记本
- `data/`：用于示例和测试的数据文件
- `evaluation/`：使用 Promptfoo 的评估脚本

有关评估说明，请参阅 `evaluation/README.md`。

---

### 来源文档：`capabilities/retrieval_augmented_generation/README.md`

# 使用 Claude 进行检索增强生成

了解如何使用检索增强生成（RAG）利用特定领域的知识来增强 Claude 的能力。

## 包含内容

- `guide.ipynb`：主教程笔记本
- `data/`：用于示例和测试的数据文件
- `evaluation/`：使用 Promptfoo 的评估脚本

有关评估说明，请参阅 `evaluation/README.md`。

---

### 来源文档：`capabilities/summarization/README.md`

# 使用 Claude 进行总结

探索 Claude 使用各种技术从多个来源总结和综合信息的能力。

## 包含内容

- `guide.ipynb`：主教程笔记本
- `data/`：用于示例和测试的数据文件
- `evaluation/`：使用 Promptfoo 的评估脚本

有关评估说明，请参阅 `evaluation/README.md`。

---

### 来源文档：`capabilities/text_to_sql/README.md`

# 使用 Claude 进行 Text-to-SQL

了解如何使用提示词技术、自我改进和 RAG 从自然语言生成复杂的 SQL 查询。

## 包含内容

- `guide.ipynb`：主教程笔记本
- `data/`：用于示例和测试的数据文件
- `evaluation/`：使用 Promptfoo 的评估脚本

有关评估说明，请参阅 `evaluation/README.md`。

---

### 来源文档：`capabilities/classification/evaluation/README.md`

# 使用 Promptfoo 进行评估

### 先决条件
要使用 Promptfoo，您需要在系统上安装 node.js 和 npm。有关更多信息，请遵循[此指南](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)。

您可以使用 npm 安装 promptfoo，或者使用 npx 直接运行它。在本指南中，我们将使用 npx。

*注意：对于此示例，您不需要运行 `npx promptfoo@latest init`，因为此目录中已经有一个初始化好的 `promptfooconfig.yaml` 文件。*

请参阅官方文档 [此处](https://www.promptfoo.dev/docs/getting-started)。

### 开始使用
评估由 `promptfooconfig.yaml` 文件编排。在此文件中，我们定义了以下部分：

- **Prompts (提示词)**
    - Promptfoo 允许您导入许多不同格式的提示词。您可以在[此处](https://www.promptfoo.dev/docs/configuration/parameters)阅读更多相关信息。
    - 在此示例中，我们将从 `prompts.py` 文件中加载 3 个提示词——与 `guide.ipynb` 中使用的相同：
        - 这些函数与 `guide.ipynb` 中使用的函数相同，不同之处在于它们不调用 Claude API，而是仅返回提示词。然后，Promptfoo 会处理调用 API 和存储结果的编排工作。
        - 您可以在[此处](https://www.promptfoo.dev/docs/configuration/parameters#prompt-functions)阅读有关提示词函数的更多信息。使用 Python 允许我们重用 RAG 所需的 VectorDB 类，该类在 `vectordb.py` 中定义。
- **Providers (提供商)**
    - 使用 Promptfoo，您可以连接到来自不同平台的许多不同的 LLM，请参阅[此处了解更多](https://www.promptfoo.dev/docs/providers)。在 `guide.ipynb` 中，我们使用了默认温度（temperature）为 0.0 的 Haiku。我们将使用 Promptfoo 来试验一系列不同的温度设置，以确定适合我们用例的最佳选择。
- **Tests (测试)**
    - 我们将使用与 `guide.ipynb` 中相同的数据，该数据可以在 [`dataset.csv`](./dataset.csv) 中找到。
    - Promptfoo 具有广泛的内置测试，可以在[此处](https://www.promptfoo.dev/docs/configuration/expected-outputs/deterministic)找到。
    - 在此示例中，我们将在 `dataset.csv` 中定义一个测试，因为我们的评估条件会随着每一行而变化；并在 `promptfooconfig.yaml` 中定义一个测试，用于所有测试用例中保持一致的条件。在[此处](https://www.promptfoo.dev/docs/configuration/parameters/#import-from-csv)阅读更多相关信息。
- **Transform (转换)**
    - 在 `defaultTest` 部分，我们定义了一个转换函数。这是一个 Python 函数，用于从 LLM 响应中提取我们想要测试的特定输出。
- **Output (输出)**
    - 我们定义了输出文件的路径。Promptfoo 可以输出多种格式的结果，[请参阅此处](https://www.promptfoo.dev/docs/configuration/parameters/#output-file)。或者，您可以使用 Promptfoo 的 Web UI，[请参阅此处](https://www.promptfoo.dev/docs/usage/web-ui)。

### 运行评估

要开始使用 Promptfoo，请打开终端并导航到此目录 (`./evaluation`)。

在运行评估之前，您必须定义以下环境变量：

`export ANTHROPIC_API_KEY=YOUR_API_KEY`  
`export VOYAGE_API_KEY=YOUR_API_KEY`

在 `evaluation` 目录中，运行以下命令。

`npx promptfoo@latest eval`

如果您想增加请求的并发数（默认 = 4），请运行以下命令。

`npx promptfoo@latest eval -j 25`  

评估完成后，终端将打印数据集中每一行的结果。

现在您可以回到 `guide.ipynb` 来分析结果了！

---

### 来源文档：`capabilities/retrieval_augmented_generation/evaluation/README.md`

# 使用 Promptfoo 进行评估

### 先决条件
要使用 Promptfoo，您需要在系统上安装 node.js 和 npm。有关更多信息，请遵循[此指南](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)。

您可以使用 npm 安装 promptfoo，或者使用 npx 直接运行它。在本指南中，我们将使用 npx。

*注意：对于此示例，您不需要运行 `npx promptfoo@latest init`，因为此目录中已经有一个初始化好的 `promptfooconfig.yaml` 文件。*

请参阅官方文档 [此处](https://www.promptfoo.dev/docs/getting-started)。

### 开始使用
评估由 `promptfooconfig...` `.yaml` 文件编排。在我们的应用程序中，我们将评估逻辑分为用于评估检索系统的 `promptfooconfig_retrieval.yaml` 和用于评估端到端性能的 `promptfooconfig_end_to_end.yaml`。在每个文件中，我们定义了以下部分：

### 检索评估 (Retrieval Evaluations)

- **Prompts (提示词)**
    - Promptfoo 允许您导入许多不同格式的提示词。您可以在[此处](https://www.promptfoo.dev/docs/configuration/parameters)阅读更多相关信息。
    - 在我们的案例中，我们跳过了每次提供新提示词的步骤，仅仅将 `{{query}}` 传递给每个检索“提供商”进行评估。
- **Providers (提供商)**
    - 我们没有使用标准的 LLM 提供商，而是为 `guide.ipynb` 中找到的每种检索方法编写了自定义提供商。
- **Tests (测试)**
    - 我们将使用与 `guide.ipynb` 中相同的数据。我们将其拆分为 `end_to_end_dataset.csv` 和 `retrieval_dataset.csv`，并向每个数据集添加了一个 `__expected` 列，这使我们能够自动对每一行运行断言。
    - 您可以在 `eval_end_to_end.py` 中找到我们的检索评估逻辑。

### 端到端评估 (End to End Evaluations)

- **Prompts (提示词)**
    - Promptfoo 允许您导入许多不同格式的提示词。您可以在[此处](https://www.promptfoo.dev/docs/configuration/parameters)阅读更多相关信息。
    - 我们的端到端评估配置中有 3 个提示词：每个提示词对应一种方法的使用。
        - 这些函数与 `guide.ipynb` 中使用的函数相同，不同之处在于它们不调用 Claude API，而是仅返回提示词。然后，Promptfoo 会处理调用 API 和存储结果的编排工作。
        - 您可以在[此处](https://www.promptfoo.dev/docs/configuration/parameters#prompt-functions)阅读有关提示词函数的更多信息。使用 Python 允许我们重用 RAG 所需的 VectorDB 类，该类在 `vectordb.py` 中定义。
- **Providers (提供商)**
    - 使用 Promptfoo，您可以连接到来自不同平台的许多不同的 LLM，请参阅[此处了解更多](https://www.promptfoo.dev/docs/providers)。在 `guide.ipynb` 中，我们使用了默认温度为 0.0 的 Haiku。我们将使用 Promptfoo 来试验不同的模型。
- **Tests (测试)**
    - 我们将使用与 `guide.ipynb` 中相同的数据。我们将其拆分为 `end_to_end_dataset.csv` 和 `retrieval_dataset.csv`，并向每个数据集添加了一个 `__expected` 列，这使我们能够自动对每一行运行断言。
    - Promptfoo 具有广泛的内置测试，可以在[此处](https://www.promptfoo.dev/docs/configuration/expected-outputs/deterministic)找到。
    - 您可以在 `eval_retrieval.py` 中找到检索系统的测试逻辑，在 `eval_end_to_end.py` 中找到端到端系统的测试逻辑。
- **Output (输出)**
    - 我们定义了输出文件的路径。Promptfoo 可以输出多种格式的结果，[请参阅此处](https://www.promptfoo.dev/docs/configuration/parameters/#output-file)。或者，您可以使用 Promptfoo 的 Web UI，[请参阅此处](https://www.promptfoo.dev/docs/usage/web-ui)。

### 运行评估

要开始使用 Promptfoo，请打开终端并导航到此目录 (`./evaluation`)。

在运行评估之前，您必须定义以下环境变量：

`export ANTHROPIC_API_KEY=YOUR_API_KEY`  
`export VOYAGE_API_KEY=YOUR_API_KEY`

在 `evaluation` 目录中，运行以下命令之一。

- 评估端到端系统性能：`npx promptfoo@latest eval -c promptfooconfig_end_to_end.yaml --output ../data/end_to_end_results.json`

- 独立评估检索系统性能：`npx promptfoo@latest eval -c promptfooconfig_retrieval.yaml --output ../data/retrieval_results.json`

评估完成后，终端将打印数据集中每一行的结果。您还可以运行 `npx promptfoo@latest view` 在 promptfoo UI 查看器中查看输出。

---

### 来源文档：`capabilities/summarization/evaluation/README.md`

# 使用 Promptfoo 进行评估

### 关于此评估套件的说明

1) 请务必遵循以下说明——特别是关于所需包的先决条件。

2) 运行完整的评估套件可能需要高于正常的速率限制（rate limits）。请考虑仅在 promptfoo 中运行测试的子集。

3) 并非每个测试都能开箱即用地通过——我们将评估设计得具有一定的挑战性。

### 先决条件
要使用 Promptfoo，您需要在系统上安装 node.js 和 npm。有关更多信息，请遵循[此指南](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)。

您可以使用 npm 安装 promptfoo，或者使用 npx 直接运行它。在本指南中，我们将使用 npx。

*注意：对于此示例，您不需要运行 `npx promptfoo@latest init`，因为此目录中已经有一个初始化好的 `promptfooconfig.yaml` 文件。*

请参阅官方文档 [此处](https://www.promptfoo.dev/docs/getting-started)。

#### 注意 - 额外依赖
对于此示例，您需要安装以下依赖项，以便我们的自定义评估（custom_evals）能够正常运行。

`pip install nltk rouge-score`

### 开始使用

要开始使用，请设置您的 ANTHROPIC_API_KEY 环境变量，或您选择的提供商所需的其他密钥。您可以执行 `export ANTHROPIC_API_KEY=YOUR_API_KEY`。

然后，使用 `cd` 进入 `evaluation` 目录并输入 `npx promptfoo@latest eval -c promptfooconfig.yaml --output ../data/results.csv`

之后，您可以通过运行 `npx promptfoo@latest view` 来查看结果。

### 工作原理

`promptfooconfig.yaml` 文件是我们评估设置的核心。它定义了几个关键部分：

**Prompts (提示词)**：
- 提示词从 `prompts.py` 文件中导入。
- 这些提示词旨在测试语言模型 (LM) 性能的各个方面。

**Providers (提供商)**：
- 我们在此处配置不同的 Claude 版本及其设置。
- 这允许我们在多个模型或不同参数（例如，不同的温度设置）下进行测试。

**Tests (测试)**：
- 测试用例在此文件中定义，或者在当前情况下从 `tests.yaml` 导入。
- 这些测试指定了我们评估的输入和预期输出。
- Promptfoo 提供了各种内置的测试类型（参见文档），或者您可以定义自己的测试类型。我们有 3 个自定义评估和 1 个开箱即用的评估（包含方法）：
    - `bleu_eval.py`：实现 BLEU（双语评估替补）分数，用于衡量机器生成的文本与参考文本之间的相似度。
    - `rouge_eval.py`：实现 ROUGE（面向召回的要旨评估替补）分数，通过将总结与参考总结进行比较来评估总结的质量。
    - `llm_eval.py`：包含自定义评估指标，利用语言模型来评估生成文本的各个方面，例如连贯性、相关性或事实准确性。

**Output (输出)**：
- 指定评估结果的格式和位置。
- Promptfoo 也支持各种输出格式！

### 覆盖 Python 二进制文件

默认情况下，promptfoo 将在您的 shell 中运行 python。请确保 python 指向适当的可执行文件。

如果不存在 python 二进制文件，您将看到“python: command not found”错误。

要覆盖 Python 二进制文件，请设置 PROMPTFOO_PYTHON 环境变量。您可以将其设置为路径（例如 `/path/to/python3.11`）或仅设置为 PATH 中的可执行文件（例如 `python3.11`）。

---

### 来源文档：`capabilities/text_to_sql/evaluation/README.md`

# 使用 Promptfoo 进行评估

### 关于此评估套件的说明

1) 请务必遵循以下说明——特别是关于所需包的先决条件。

2) 运行完整的评估套件可能需要高于正常的速率限制。请考虑仅在 promptfoo 中运行测试的子集。

3) 并非每个测试都能开箱即用地通过——我们将评估设计得具有一定的挑战性。

### 先决条件
要使用 Promptfoo，您需要在系统上安装 node.js 和 npm。有关更多信息，请遵循[此指南](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)。

您可以使用 npm 安装 promptfoo，或者使用 npx 直接运行它。在本指南中，我们将使用 npx。

*注意：对于此示例，您不需要运行 `npx promptfoo@latest init`，因为此目录中已经有一个初始化好的 `promptfooconfig.yaml` 文件。*

请参阅官方文档 [此处](https://www.promptfoo.dev/docs/getting-started)。

### 开始使用

要开始使用，请设置您的 ANTHROPIC_API_KEY 环境变量，或您选择的提供商所需的其他密钥。您可以执行 `export ANTHROPIC_API_KEY=YOUR_API_KEY`。

然后，使用 `cd` 进入 `evaluation` 目录并输入 `npx promptfoo@latest eval -c promptfooconfig.yaml --output ../data/results.csv`

之后，您可以通过运行 `npx promptfoo@latest view` 来查看结果。

### 工作原理

`promptfooconfig.yaml` 文件是我们评估设置的核心。它定义了几个关键部分：

**Prompts (提示词)**：
- 提示词从 `prompts.py` 文件中导入。
- 这些提示词旨在测试语言模型 (LM) 性能的各个方面。

**Providers (提供商)**：
- 我们在此处配置我们正在使用的 Claude 模型。

**Tests (测试)**：
- 测试用例在此处定义。
- 这些测试指定了我们评估的输入和预期输出。
- Promptfoo 提供了各种内置的测试类型（参见文档），或者您可以定义自己的测试类型。

**Output (输出)**：
- 指定评估结果的格式和位置。
- Promptfoo 也支持各种输出格式！

### 覆盖 Python 二进制文件

默认情况下，promptfoo 将在您的 shell 中运行 python。请确保 python 指向适当的可执行文件。

如果不存在 python 二进制文件，您将看到“python: command not found”错误。

要覆盖 Python 二进制文件，请设置 PROMPTFOO_PYTHON 环境变量。您可以将其设置为路径（例如 `/path/to/python3.11`）或仅设置为 PATH 中的可执行文件（例如 `python3.11`）。

## 相关文档

- [[01-博客/Anthropic/Claude Cookbooks 项目总览与能力地图|Claude Cookbooks 项目总览与能力地图]]；关联理由：上下游；说明：该文给出 Claude Cookbooks 的总览目录与能力分层，本篇是其中 capabilities 子目录的实战拆解。
- [[01-博客/Anthropic/Voyage AI Embeddings 接入与检索实践|Voyage AI Embeddings 接入与检索实践]]；关联理由：解说；说明：本篇在评测前置条件中要求 `VOYAGE_API_KEY`，关联文补充了 Voyage Embeddings 的接入方式与检索参数边界。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/evals]]
- [[00-元语/prompt]]
- [[00-元语/github]]
- [[00-元语/benchmark]]
- [[00-元语/rate-limiting]]
