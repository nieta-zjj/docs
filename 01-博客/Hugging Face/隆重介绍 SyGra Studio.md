# 隆重介绍 SyGra Studio

## 文档信息
- 来源：https://huggingface.co/blog/ServiceNow-AI/sygra-studio

## 摘要
### 一句话摘要
SyGra 2.0.0 推出了交互式可视化环境 SyGra Studio，允许用户通过拖拽节点、配置数据源和模型来构建合成数据生成工作流，并提供实时预览、调试与执行监控功能，同时自动生成底层配置代码。

### 关键点
* **可视化与代码自动生成**：取代了在 YAML 文件和终端间的频繁切换，用户在画布上的操作会自动生成兼容 SyGra 的图配置（Graph Config）和任务执行脚本。
* **广泛的模型支持**：支持配置和验证 OpenAI、Azure OpenAI、Ollama、Vertex、Bedrock、vLLM 以及自定义端点。
* **数据源集成与预览**：可连接 Hugging Face、本地磁盘或 ServiceNow 数据源，支持执行前预览数据，数据列名会自动转换为全局状态变量（如 `{prompt}`）。
* **灵活的节点编排**：支持拖拽 LLM 节点、Lambda/子图节点，可配置提示词（输入 `{` 触发变量自动建议）、结构化输出模式及附加工具。
* **内置调试与审查工具**：提供基于 Monaco 的代码编辑器以审查生成的 YAML/JSON，支持断点、内联日志和自动保存草稿功能。
* **实时执行与监控**：运行工作流时可自定义记录数、批处理大小和重试行为，并实时监控节点进度、Token 成本、延迟和护栏（Guardrail）结果。
* **执行历史记录**：所有的执行记录和详细日志会自动写入并保存在 `.executions/runs/*.json` 目录中，支持下载和对比。
* **向后兼容性**：能够直接加载并运行 `tasks` 目录中现有的工作流（如带有条件分支和循环评估的 Glaive Code Assistant 示例），并允许在 UI 中动态调整参数。
* **快速启动**：通过克隆仓库并执行 `make studio` 命令即可快速部署和启动该环境。

## 正文
SyGra 2.0.0 正式推出了 **Studio**，这是一个交互式环境，将合成数据生成转化为透明且可视化的工作流程。您无需再在 YAML 文件和终端之间来回切换，而是可以直接在画布上编排流程、在提交前预览数据集、利用内联变量提示微调提示词（Prompts），并在同一个界面中实时观察执行情况。在底层，它使用的是与之前相同的平台，因此您在可视化界面上的所有操作，都会自动生成相应的、兼容 SyGra 的图配置（Graph Config）和任务执行脚本。

### Studio 的核心功能

1. 通过引导式表单配置和验证模型（支持 OpenAI、Azure OpenAI、Ollama、Vertex、Bedrock、vLLM 以及自定义端点）。
2. 连接 Hugging Face、本地文件系统或 ServiceNow 数据源，并在执行前预览数据行。
3. 通过选择模型、编写提示词（支持自动建议变量）以及定义输出或结构化模式来配置节点。
4. 使用共享状态变量和基于 Pydantic 的映射来设计下游输出。
5. 端到端执行流程，并即时查看生成结果以及节点级别的进度。
6. 利用内联日志、断点、基于 Monaco 的代码编辑器和自动保存的草稿进行调试。
7. 监控每次运行的 Token 成本、延迟和护栏（Guardrail）结果，执行历史记录将保存在 `.executions/` 目录中。

接下来，让我们逐步了解这一体验。

### 第一步：配置数据源

打开 Studio，点击 **Create Flow（创建流程）**，Start（开始）和 End（结束）节点会自动出现。在添加其他内容之前：

* 选择一个连接器（Hugging Face、本地磁盘或 ServiceNow）。
* 输入 `repo_id`、数据划分（Split）或文件路径等参数，然后点击 **Preview（预览）** 获取样本数据行。
* 列名会立即转换为状态变量（例如 `{prompt}`、`{genre}`），让您清楚地知道在提示词和处理器中可以引用哪些内容。

验证完成后，Studio 会保持配置同步，并将这些变量贯穿整个流程——无需手动连接或猜测。

### 第二步：可视化构建流程

从面板中拖拽所需的模块。以故事生成流水线为例：

1. 拖入一个名为“Story Generator（故事生成器）”的 **LLM 节点**，选择已配置的模型（例如 `gpt-4o-mini`），编写提示词，并将结果存储在 `story_body` 中。
2. 添加第二个名为“Story Summarizer（故事摘要器）”的 **LLM 节点**，在提示词中引用 `{story_body}`，并将输出存入 `story_summary`。
3. 如果您需要可重用的逻辑或分支行为，可以切换结构化输出、附加工具，或添加 Lambda/子图（Subgraph）节点。

Studio 的详细信息面板会将所有内容保持在上下文中——模型参数、提示词编辑器、工具配置、前/后处理代码，甚至多 LLM 设置（如果您需要并行生成）。在提示词中输入 `{` 即可立即显示所有可用的状态变量。

### 第三步：审查与运行

打开 **Code Panel（代码面板）**，检查 Studio 生成的准确 YAML/JSON 代码。这与写入 `tasks/examples/` 的工件完全相同，所见即所得。

当您准备好执行时：

* 点击 **Run Workflow（运行工作流）**。
* 选择记录数量、批处理大小、重试行为等。
* 点击 **Run（运行）**，并在执行面板中实时观察节点状态、Token 使用量、延迟和成本。详细的日志提供了极佳的可观测性，让调试变得毫不费力。所有执行记录都会写入 `.executions/runs/*.json`。

运行结束后，您可以下载输出结果，与之前的执行记录进行对比，并获取延迟和使用详情的元数据。

### 运行现有工作流：以 Glaive Code Assistant 为例

SyGra Studio 也可以执行 `tasks` 目录中现有的工作流。例如 `tasks/examples/glaive_code_assistant/` 工作流——它会摄取 `glaiveai/glaive-code-assistant-v2` 数据集，起草答案，对其进行评估（Critique），并不断循环，直到评估结果返回“NO MORE FEEDBACK（没有更多反馈）”。

在 Studio 中，您会注意到：

1. **画布布局**：两个 LLM 节点（`generate_answer` 和 `critique_answer`）通过条件边连接，要么返回进行更多修改，要么在评估满意时退出到 **END（结束）**。
2. **可调输入**：运行模态框允许您切换数据集划分、调整批处理大小、限制记录数或微调温度参数（Temperature），而无需修改 YAML 文件。
3. **可观测的执行过程**：观察两个节点按顺序亮起，检查中间的评估结果，并实时监控状态。
4. **生成的输出**：合成数据生成完毕，可直接用于模型训练、评估流水线或标注工具。

### 快速开始

使用以下命令获取并运行：

```bash
git clone https://github.com/ServiceNow/SyGra.git
cd SyGra && make studio
```

* **官方文档**：https://servicenow.github.io/SyGra/
* **Studio 文档**：https://servicenow.github.io/SyGra/getting_started/create_task_ui/
* **示例配置**：`tasks/examples/glaive_code_assistant/graph_config.yaml`

SyGra Studio 将合成数据工作流转化为直观、用户友好的体验。一次配置，自信构建，在具备全面可观测性的情况下运行，无需离开画布即可轻松生成数据。
