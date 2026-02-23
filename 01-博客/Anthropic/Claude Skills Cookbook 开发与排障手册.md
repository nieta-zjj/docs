---
title: "Claude Skills Cookbook 开发与排障手册"

发布日期: "2025-10-24"
作者: "Anthropic"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/blob/main/skills/CLAUDE.md"
译注: "原文为英文仓库文档，本稿为中文整理版。"
---

## 摘要

### 1) 一句话总结
这是一个面向开发者的 Jupyter Notebook 综合指南，旨在演示如何通过集成 Claude 的 Beta 版 Skills 和 Files API 来自动化生成 Excel、PowerPoint、PDF 和 Word 等业务文档。

### 2) 关键要点
* **核心功能**：利用 Claude 内置的 Agent skills（xlsx、pptx、pdf、docx）生成包含公式、图表的结构化文档，重点应用于金融与分析领域。
* **环境与依赖**：需在 Python 虚拟环境中运行，并安装支持 Skills 的 Anthropic SDK（要求版本 >= 0.71.0），需配置 `ANTHROPIC_API_KEY`。
* **Beta API 规范**：必须使用 `client.beta.*` 命名空间，且调用 `messages.create()` 时必须包含 `container` 参数和代码执行工具（`code_execution_20250825`）。
* **请求头设置**：必须在每次请求中通过 `betas` 参数显式传递三个请求头：`code-execution-2025-08-25`、`files-api-2025-04-14` 和 `skills-2025-10-02`。
* **文件处理机制**：需从工具执行结果（`bash_code_execution_tool_result`）中提取 `file_id`，并使用 `client.beta.files` 提供的方法进行下载和元数据检索。
* **项目进度**：规划了 3 个进阶式 Notebook，目前“入门篇”已完成测试，“金融应用”和“自定义 Skills 开发”正在开发中（WIP）。
* **性能预期**：文档生成耗时较长，Excel 通常需要约 2 分钟，PPT 和 PDF 约 1-2 分钟，建议在代码单元格前添加明确的等待提示。
* **测试标准**：提交更改前必须在全新的虚拟环境中重启内核运行所有单元格，并确保生成的文件能在原生应用程序中正确打开。

### 3) 风险与缺口
* **SDK 版本描述冲突**：文档在“开发避坑指南”中强调需使用 `>= 0.71.0` 版本，但在“调试 API 错误”部分又指出版本应该是 `0.69.0`，存在版本要求不一致的缺口。
* **全局请求头风险**：若在 `default_headers` 中全局设置 Skills beta，会导致所有 API 请求都被强制要求使用代码执行工具（必须改为按请求单独设置）。
* **API 响应属性错误风险**：Files API 的响应对象与标准 API 不同，直接调用 `.content` 或 `.size` 会报错（必须严格使用 `.read()` 获取内容，使用 `.size_bytes` 获取大小）。
* **文件覆盖风险**：测试文件下载时，默认行为会覆盖本地已存在的同名文件（需显式设置 `overwrite=False` 才能防止覆盖）。
* **环境隔离失效风险**：在 VSCode 或 Jupyter 中若未手动切换至 `venv` 内核，会导致依赖项错误；且修改辅助模块（如 `file_utils.py`）后若不重启内核或重新加载模块，更改将不会生效。

## 正文

# Skills Cookbook - Claude 代码指南

## 项目概述

这是一个综合性的 Jupyter notebook cookbook，用于演示 Claude 的 Skills 功能在文档生成（Excel、PowerPoint、PDF）方面的应用。它专为学习将 Skills 集成到其应用程序中的开发者而设计。

## 快速入门命令

### 环境设置
```bash
# 创建并激活虚拟环境
python -m venv venv
source venv/bin/activate  # 在 Windows 上：venv\Scripts\activate

# 安装依赖（必须使用本地 whl 文件以支持 Skills）
pip install -r requirements.txt

# 配置 API 密钥
cp .env.example .env
# 编辑 .env 并添加你的 ANTHROPIC_API_KEY
```

### 运行 Notebooks
```bash
# 启动 Jupyter
jupyter notebook

# 或在 VSCode 中使用 Jupyter 扩展
# 确保在 VSCode 中选择 venv 内核：Cmd+Shift+P → "Python: Select Interpreter"
```

### 测试与验证
```bash
# 验证环境和 SDK 版本
python -c "import anthropic; print(f'SDK Version: {anthropic.__version__}')"

# 检查 outputs 目录中生成的文件
ls -lh outputs/
```

## 架构概述

### 目录结构
```
skills/
├── notebooks/              # 3 个进阶式 Jupyter notebooks
│   ├── 01_skills_introduction.ipynb
│   ├── 02_skills_financial_applications.ipynb  # 开发中 (WIP)
│   └── 03_skills_custom_development.ipynb      # 开发中 (WIP)
├── sample_data/           # 示例用的金融数据集
├── custom_skills/         # 自定义 skill 开发区
├── outputs/               # 生成的文件 (xlsx, pptx, pdf)
├── file_utils.py          # Files API 辅助函数
└── docs/                  # 实现进度跟踪
```

### 关键技术细节

**Beta API 要求：**
- 所有 Skills 功能均使用 `client.beta.*` 命名空间
- 必需的 beta 请求头：`code-execution-2025-08-25`、`files-api-2025-04-14`、`skills-2025-10-02`
- 必须使用带有 `container` 参数的 `client.beta.messages.create()`
- **必须**包含代码执行工具 (`code_execution_20250825`)
- 通过引用其 `skill_id` 来使用预构建的 Agent skills，或通过 Skills API 创建并上传你自己的 skill

**Files API 集成：**
- Skills 会生成文件并返回 `file_id` 属性
- 必须使用 `client.beta.files.download()` 来下载文件
- 必须使用 `client.beta.files.retrieve_metadata()` 来获取文件信息
- `file_utils.py` 中的辅助函数负责处理提取和下载

**内置 Skills：**
- `xlsx` - 包含公式和图表的 Excel 工作簿
- `pptx` - PowerPoint 演示文稿
- `pdf` - PDF 文档
- `docx` - Word 文档

## 开发避坑指南

### 1. SDK 版本
**重要**：请确保你使用的是支持 Skills 的 Anthropic SDK 0.71.0 或更高版本
```bash
pip install anthropic>=0.71.0
# 如果是升级安装，请在安装后重启 Jupyter 内核！
```

### 2. 必须使用 Beta 命名空间
**问题**：无法识别 `container` 参数，Files API 调用失败
**解决方案**：使用 `client.beta.messages.create()` 和 `client.beta.files.*`
```python
# ❌ 错误
response = client.messages.create(container={...})
content = client.files.content(file_id)

# ✅ 正确
response = client.beta.messages.create(container={...})
content = client.beta.files.content(file_id)
```

### 3. Beta 请求头的位置
**问题**：在 `default_headers` 中设置 Skills beta 会导致所有请求都要求使用 code_execution
**解决方案**：改为在每个请求中使用 `betas` 参数
```python
# ❌ 错误（影响所有请求）
client = Anthropic(default_headers={"anthropic-beta": "skills-2025-10-02"})

# ✅ 正确（按请求设置）
response = client.beta.messages.create(
    betas=["code-execution-2025-08-25", "files-api-2025-04-14", "skills-2025-10-02"],
    ...
)
```

### 4. 提取 File ID
**问题**：响应结构与标准的 Messages API 不同
**解决方案**：File ID 位于 `bash_code_execution_tool_result.content.content[0].file_id` 中
```python
# 使用 file_utils.extract_file_ids() - 可处理 beta 版本的响应结构
from file_utils import extract_file_ids, download_all_files
file_ids = extract_file_ids(response)
```

### 5. Files API 响应对象
**问题**：`'BinaryAPIResponse' object has no attribute 'content'`，`'FileMetadata' object has no attribute 'size'`
**解决方案**：使用 `.read()` 获取文件内容，使用 `.size_bytes` 获取文件大小
```python
# ❌ 错误
file_content = client.beta.files.download(file_id)
with open(path, 'wb') as f:
    f.write(file_content.content)  # 没有 .content 属性！

# ✅ 正确
file_content = client.beta.files.download(file_id)
with open(path, 'wb') as f:
    f.write(file_content.read())  # 使用 .read()

# FileMetadata 字段：id, filename, size_bytes（不是 size）, mime_type, created_at, type, downloadable
metadata = client.beta.files.retrieve_metadata(file_id)
print(f"Size: {metadata.size_bytes} bytes")  # 使用 size_bytes，而不是 size
```

### 6. Jupyter 内核选择
**问题**：错误的 Python 解释器 = 错误的依赖项
**解决方案**：始终在 VSCode/Jupyter 中选择 venv 内核
- VSCode：Cmd+Shift+P → "Python: Select Interpreter" → 选择 venv
- Jupyter：Kernel → Change Kernel → 选择 venv

### 7. 需要重新加载模块
**问题**：对 `file_utils.py` 的更改未在运行中的 notebooks 里生效
**解决方案**：重启内核或重新加载模块
```python
import importlib
importlib.reload(file_utils)
```

### 8. 文档生成时间
**问题**：文件创建时间比典型的 API 调用要长，用户可能会认为单元格卡死了
**实际观察到的时间：**
- Excel：约 2 分钟
- PowerPoint：约 1-2 分钟（简单的 2-3 页幻灯片演示）
- PDF：约 1-2 分钟

**解决方案**：在文件创建单元格之前添加明确的时间预期提示
```markdown
**⏱️ 注意**：Excel 生成通常需要 1-2 分钟。
请耐心等待 - 运行时单元格会显示 [*]！
```
**重要**：保持示例简单且重点突出。对于范围合理的示例，生成时间通常稳定在 1-2 分钟。

## 常见任务

### 添加新的 Notebook 章节
1. 遵循 `01_skills_introduction.ipynb` 中的现有结构
2. 包含带有导入和 beta 请求头的设置单元格
3. 展示 API 调用、响应处理和文件下载
4. 添加错误处理示例
5. 更新 `docs/skills_cookbook_plan.md` 检查清单

### 创建示例数据
1. 将真实的财务数据添加到 `sample_data/`
2. 表格数据使用 CSV，结构化数据使用 JSON
3. 包含表头和正确的格式
4. 在 notebook 中使用 pandas 进行引用
5. 保持合理的文件大小（<100KB）

### 测试文件下载
1. 运行 notebook 单元格以生成文件
2. 检查响应中的 `file_id`
3. 使用 `download_all_files()` 辅助函数
4. 验证文件是否在 `outputs/` 目录中
5. 在原生应用程序中打开文件以进行验证

**注意**：默认情况下会覆盖文件。当文件已存在时，你会在下载摘要中看到 `[overwritten]`。设置 `overwrite=False` 可防止覆盖。

### 调试 API 错误
1. 检查 SDK 版本：`anthropic.__version__` 应该是 `0.69.0`
2. 验证是否在每个请求中都传递了 beta 请求头
3. 确保包含了 `code_execution` 工具
4. 使用 `print(response)` 检查响应结构
5. 在 `response.stop_reason` 中查找错误详细信息

## 测试检查清单

在提交 notebook 更改之前：
- [ ] 重启内核并运行所有单元格
- [ ] 验证所有文件下载是否正常工作
- [ ] 检查 `outputs/` 中的生成文件
- [ ] 验证文件是否能在原生应用程序中正确打开
- [ ] 更新 `skills_cookbook_plan.md` 检查清单
- [ ] 在全新的虚拟环境中进行测试

## 参考资源

- **API 参考**：https://docs.claude.com/en/api/messages
- **Files API**：https://docs.claude.com/en/api/files-content
- **Skills 文档**：https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview

## 项目特定说明

- **重点领域**：具有实际业务应用的金融与分析
- **目标受众**：中级开发者和业务分析师
- **Notebook 1**：已完成并测试（文件下载正常）
- **Notebook 2**：金融应用 - 下一步的优先级
- **Notebook 3**：自定义 Skills 开发 - 在 Notebook 2 之后进行

## 环境变量

`.env` 文件中必需：
```bash
ANTHROPIC_API_KEY=your-api-key-here
```

可选（用于高级示例）：
```bash
ANTHROPIC_BASE_URL=https://api.anthropic.com  # 如果使用代理
```

## 相关文档

- [[01-博客/Anthropic/Claude Skills Cookbook 使用指南|Claude Skills Cookbook 使用指南]]；关联理由：解说；说明：该文给出 Skills 能力与基础用法总览，本篇补齐开发期 API 细节与排障路径。
- [[01-博客/Anthropic/Claude Cookbooks 仓库开发规范|Claude Cookbooks 仓库开发规范]]；关联理由：上下游；说明：仓库级贡献规范定义环境、依赖和提交流程，是本篇 Notebook 开发实践的上游约束。
- [[01-博客/Anthropic/Cookbook Notebook 审核规范与评分清单|Cookbook Notebook 审核规范与评分清单]]；关联理由：上下游；说明：该文提供 Notebook 审核与评分标准，可作为本篇示例与产出的下游验收准则。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/skills]]
- [[00-元语/sdk]]
- [[00-元语/workflow]]
- [[00-元语/Agent]]
- [[00-元语/tool]]
- [[00-元语/bug-fix]]
- [[00-元语/github]]
