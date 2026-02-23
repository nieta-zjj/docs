# 免费使用 Unsloth 和 Hugging Face Jobs 训练 AI 模型

## 文档信息
- 来源：https://huggingface.co/blog/unsloth-jobs

## 摘要
1) 一句话总结
本文介绍了如何利用 Unsloth 和 Hugging Face Jobs，结合 AI 编程助手（如 Claude Code 和 Codex）快速且低成本地微调小型大语言模型。

2) 核心要点
* **性能与成本优势**：使用 Unsloth 可将训练速度提升约 2 倍，减少约 60% 的显存占用，使小型模型的训练成本降至几美元。
* **端侧模型优化**：以 `LiquidAI/LFM2.5-1.2B-Instruct` 为代表的小型模型运行内存不到 1GB，微调后可直接在 CPU、手机和笔记本电脑上部署。
* **免费资源获取**：用户可通过加入 Unsloth Jobs Explorers 组织领取 Hugging Face Jobs 的免费训练额度及一个月的 Pro 订阅。
* **必要准备工作**：需具备 Hugging Face 账号、已验证的计费信息，以及具有写入权限（write permissions）的 HF Token。
* **命令行任务提交**：安装 `hf` CLI 后，可通过 `hf jobs` 命令直接提交训练任务，并指定硬件配置（如 `--flavor a10g-small`）、超时时间和数据集。
* **AI 助手自动化**：在 Claude Code 或 Codex 中安装 Hugging Face 技能（Skill）后，可通过自然语言指令自动生成 UV 训练脚本并提交任务。
* **全托管工作流**：训练在云端 GPU 上完全托管，AI 助手会自动配置依赖、提供 Trackio 监控链接，并在完成后将模型推送到 Hugging Face Hub。
* **明确的成本预估**：根据模型参数量提供 GPU 推荐及预估成本（例如：1-3B 模型推荐 `t4-medium`，约 $0.60/小时；3-7B 模型推荐 `a10g-small`，约 $1.00/小时）。

## 正文
本文将介绍如何使用 [Unsloth](https://github.com/unslothai/unsloth) 和 Hugging Face Jobs，通过 Claude Code 和 Codex 等 AI 编程助手，快速微调大语言模型（特别是 [`LiquidAI/LFM2.5-1.2B-Instruct`](https://huggingface.co/LiquidAI/LFM2.5-1.2B-Instruct)）。与标准方法相比，Unsloth 能将训练速度提升约 2 倍，并减少约 60% 的显存占用，因此训练小型模型的成本只需几美元。

**为什么选择小型模型？**
像 LFM2.5-1.2B-Instruct 这样的小型语言模型是微调的理想选择。它们训练成本低、迭代速度快，并且在特定任务上越来越能与大型模型媲美。该模型运行内存不到 1GB，专为端侧部署优化，微调后的模型可以直接在 CPU、手机和笔记本电脑上运行。

### 准备工作

我们正在为 Hugging Face Jobs 上的模型微调提供免费额度。加入 [Unsloth Jobs Explorers](https://huggingface.co/unsloth-jobs) 组织即可领取免费额度及一个月的 Pro 订阅。

你需要准备：
* 一个 [Hugging Face](https://huggingface.co/) 账号（使用 HF Jobs 必备）。
* 设置计费信息（用于验证，你可以在[计费页面](https://huggingface.co/settings/billing)监控使用情况并管理计费）。
* 一个具有写入权限 (write permissions) 的 Hugging Face Token。
* （可选）一个 AI 编程助手（如 `Open Code`、`Claude Code` 或 `Codex`）。

### 运行训练任务

如果你想使用 HF Jobs 和 Unsloth 训练模型，只需使用 `hf jobs` 命令行工具提交任务即可。

首先，安装 `hf` CLI：

```bash
# Mac 或 Linux
curl -LsSf https://hf.co/cli/install.sh | bash
```

然后，运行以下命令提交任务：

```bash
hf jobs uv run https://huggingface.co/datasets/unsloth/jobs/resolve/main/sft-lfm2.5.py \
    --flavor a10g-small  \
    --secrets HF_TOKEN  \
    --timeout 4h \
    --dataset mlabonne/FineTome-100k \
    --num-epochs 1 \
    --eval-split 0.2 \
    --output-repo your-username/lfm-finetuned
```

更多详情，请查看[训练脚本](https://huggingface.co/datasets/unsloth/jobs/blob/main/sft-lfm2.5.py)和 [Hugging Face Jobs 文档](https://huggingface.co/docs/hub/jobs)。

### 安装 AI 编程助手技能 (Skill)

Hugging Face 的模型训练技能 (Skill) 让你可以通过简单的提示词来训练模型，大大降低了入门门槛。首先，需要在你的编程助手中安装该技能。

#### Claude Code
Claude Code 通过其[插件系统](https://code.claude.com/docs/en/discover-plugins)发现技能，因此我们需要先安装 Hugging Face 技能：

1. 添加插件市场：
```bash
/plugin marketplace add huggingface/skills
```

2. 在 `Discover` 标签页浏览可用技能：
```bash
/plugin
```

3. 安装模型训练器技能：
```bash
/plugin install hugging-face-model-trainer@huggingface-skills
```
更多详情，请参阅关于使用 Hub 技能的[文档](https://huggingface.co/docs/hub/en/agents-skills)或 Claude Code [技能文档](https://code.claude.com/docs/en/skills)。

#### Codex
Codex 通过 [`AGENTS.md`](https://developers.openai.com/codex/guides/agents-md) 文件和 [`.agents/skills/`](https://developers.openai.com/codex/skills) 目录发现技能。

使用 `$skill-installer` 安装单个技能：
```bash
$skill-installer install https://github.com/huggingface/skills/tree/main/skills/hugging-face-model-trainer
```
更多详情，请参阅 [Codex 技能文档](https://developers.openai.com/codex/skills)和 [AGENTS.md 指南](https://developers.openai.com/codex/guides/agents-md)。

#### 其他通用方法
一种通用的安装方法是直接克隆[技能仓库](https://github.com/huggingface/skills)，并将[技能](https://github.com/huggingface/skills/tree/main/skills/hugging-face-model-trainer)复制到你的助手技能目录中：

```bash
git clone https://github.com/huggingface/skills.git
mkdir -p ~/.agents/skills && cp -R skills/skills/hugging-face-model-trainer ~/.agents/skills/
```

### 快速开始

技能安装完成后，只需向你的编程助手下达训练模型的指令：

> "Train LiquidAI/LFM2.5-1.2B-Instruct on mlabonne/FineTome-100k using Unsloth on HF Jobs"

助手将根据技能中的[示例](https://github.com/huggingface/skills/blob/main/skills/hugging-face-model-trainer/scripts/unsloth_sft_example.py)生成训练脚本，将训练任务提交到 HF Jobs，并通过 Trackio 提供监控链接。

### 工作原理

训练任务运行在 [Hugging Face Jobs](https://huggingface.co/docs/huggingface_hub/guides/jobs)（完全托管的云端 GPU）上。编程助手会执行以下操作：

1. 生成带有内联依赖项的 UV 脚本。
2. 通过 `hf` CLI 将其提交到 HF Jobs。
3. 报告任务 ID 和监控 URL。
4. 将训练好的模型推送到你的 Hugging Face Hub 仓库。

#### 示例训练脚本
助手会基于示例生成类似如下的脚本：

```python
# /// script
# dependencies = ["unsloth", "trl>=0.12.0", "datasets", "trackio"]
# ///

from unsloth import FastLanguageModel
from trl import SFTTrainer, SFTConfig
from datasets import load_dataset

model, tokenizer = FastLanguageModel.from_pretrained(
    "LiquidAI/LFM2.5-1.2B-Instruct",
    load_in_4bit=True,
    max_seq_length=2048,
)

model = FastLanguageModel.get_peft_model(
    model,
    r=16,
    lora_alpha=32,
    lora_dropout=0,
    target_modules=[
        "q_proj",
        "k_proj",
        "v_proj",
        "out_proj",
        "in_proj",
        "w1",
        "w2",
        "w3",
    ],
)

dataset = load_dataset("trl-lib/Capybara", split="train")

trainer = SFTTrainer(
    model=model,
    tokenizer=tokenizer,
    train_dataset=dataset,
    args=SFTConfig(
        output_dir="./output",
        push_to_hub=True,
        hub_model_id="username/my-model",
        per_device_train_batch_size=4,
        gradient_accumulation_steps=4,
        num_train_epochs=1,
        learning_rate=2e-4,
        report_to="trackio",
    ),
)

trainer.train()
trainer.push_to_hub()
```

#### GPU 推荐与预估成本

| 模型参数量 | 推荐 GPU | 预估成本/小时 |
| --- | --- | --- |
| <1B | `t4-small` | ~$0.40 |
| 1-3B | `t4-medium` | ~$0.60 |
| 3-7B | `a10g-small` | ~$1.00 |
| 7-13B | `a10g-large` | ~$3.00 |

如需全面了解 Hugging Face Spaces 的定价，请查看[官方指南](https://huggingface.co/docs/hub/en/spaces-overview#hardware-resources)。

### 使用 AI 编程助手的提示

* **明确指定模型和数据集**：请包含 Hub ID（例如 `Qwen/Qwen2.5-0.5B` 和 `trl-lib/Capybara`），助手会搜索并验证这些组合。
* **明确提及 Unsloth**：如果你想使用 Unsloth，请在提示词中明确说明。否则，助手将根据模型和预算自行选择框架。
* **预估成本**：在启动大型任务之前，要求助手提供成本估算。
* **请求监控**：要求使用 Trackio 监控以获取实时的 Loss 曲线。
* **检查状态**：提交任务后，可以让助手检查日志以了解任务状态。

### 参考资源

* [Hugging Face 技能仓库](https://github.com/huggingface/skills)
* [Unsloth Jobs Explorers 免费额度领取](https://huggingface.co/unsloth-jobs)
* [Hugging Face Jobs 上的 Unsloth 教程](https://unsloth.ai/docs/basics/inference-and-deployment/deploying-with-hugging-face-jobs)
* [Unsloth Jobs 示例脚本](https://huggingface.co/datasets/unsloth/jobs)
