# SWE-bench 2026年2月排行榜更新与模型表现

## 文档信息
- 来源：https://simonwillison.net/2026/Feb/19/swe-bench/#atom-everything
- 发布日期：2026-02-19

## 摘要
**1) 一句话总结**
SWE-bench发布了2026年2月基于“仅限Bash”测试和Verified数据集的最新模型排行榜，Claude Opus 4.5位列第一，且多款中国模型表现亮眼跻身前十。

**2) 关键要点**
* **测试环境**：本次测试采用“仅限 Bash”基准，运行了约9000行Python代码的mini-swe-bench代理。
* **数据集**：测试使用的是由OpenAI资助、人工筛选出的500个样本组成的SWE-bench Verified数据集，而非包含2294个样本的原始数据集。
* **数据分布**：这500个样本主要集中在 django (231个) 和 sympy (75个) 等开源项目中。
* **测试方法**：所有参测模型均使用相同的系统提示词（System Prompt），以确保比较的公平性。
* **头部模型**：排名前三的模型依次为 Claude Opus 4.5、Gemini 3 Flash 和 MiniMax M2.5（229B参数）。其中，Claude Opus 4.5 以约1个百分点的优势击败了 Opus 4.6。
* **中国模型表现**：共有四款中国模型进入前十名，分别为 MiniMax M2.5、GLM-5、Kimi K2.5 和 DeepSeek V3.2。
* **OpenAI排名**：OpenAI上榜表现最好的模型是排在第6位的 GPT-5.2；其最强代码模型 GPT-5.3-Codex 因尚未提供API而未参与排名。
* **图表优化**：作者使用“Claude for Chrome”插件成功向网页注入JavaScript代码，在官方原本无具体数值的柱状图上添加了百分比标签。

**3) 风险与不足**
* **测试方法局限**：由于强制所有模型使用相同的系统提示词，本次测试未能衡量不同测试框架或针对特定模型优化提示词所能带来的质量差异。
* **工具运行异常**：在使用Claude插件修改网页图表时，运行记录显示Claude声称切换到了Playwright，但用户实际上并未配置该工具，存在运行逻辑上的异常与困惑。

## 正文
SWE-bench 是各大 AI 实验室在发布模型时非常喜欢引用的基准测试之一。虽然官方排行榜更新频率不高，但他们刚刚针对当前一代模型进行了一次全面测试。这一点非常值得关注，因为能看到非实验室自评的第三方基准测试结果总是件好事。

### 基准测试详情与数据集

最新结果来自其“仅限 Bash（Bash Only）”基准测试。该测试运行了他们的 mini-swe-bench 代理（约 9000 行 Python 代码）。

需要特别更正的是，此次“仅限 Bash”测试针对的是 **SWE-bench Verified** 数据集，而非包含 2294 个真实世界示例的原始 SWE-bench 数据集。SWE-bench Verified 是由 OpenAI 资助并人工筛选出的 500 个样本子集。该数据集在 Hugging Face 上仅有 2.1MB 的 Parquet 文件，使用 Datasette Lite 浏览非常方便。

这 500 个样本的来源分布如下：
* django/django (231)
* sympy/sympy (75)
* sphinx-doc/sphinx (44)
* matplotlib/matplotlib (34)
* scikit-learn/scikit-learn (32)
* astropy/astropy (22)
* pydata/xarray (22)
* pytest-dev/pytest (19)
* pylint-dev/pylint (10)
* psf/requests (8)
* mwaskom/seaborn (2)
* pallets/flask (1)

### 前十名模型表现

在排名前十的模型中，有几个值得注意的亮点：

* **头部模型**：有趣的是，Claude Opus 4.5 击败了 Opus 4.6（尽管只领先了约一个百分点）。排名前三的模型依次为：Claude Opus 4.5、Gemini 3 Flash，以及 MiniMax M2.5（中国实验室 MiniMax 上周发布的 229B 模型）。
* **中国模型表现亮眼**：除了 MiniMax M2.5，还有三款中国模型也进入了前十名，分别是 GLM-5、Kimi K2.5 和 DeepSeek V3.2。
* **OpenAI 的位置**：OpenAI 表现最好的模型是排在第 6 位的 GPT-5.2。值得注意的是，他们最强大的代码模型 GPT-5.3-Codex 并未出现在榜单中，这可能是因为它尚未在 OpenAI API 中提供。

**测试方法注记**：该基准测试对所有模型使用了相同的系统提示词（System Prompt）。这对于公平比较非常重要，但也意味着本次测试并未衡量不同测试框架或优化提示词所带来的质量差异。

### 使用 Claude 优化图表显示

SWE-bench 网站上的原始图表并没有在柱状图上显示具体的百分比数值。为了截取一张更好的图片，我成功使用了“Claude for Chrome”插件来添加这些数值。

我的提示词序列如下：
1. 使用 Chrome 中的 Claude 打开 https://www.swebench.com/
2. 点击“比较结果（Compare results）”，然后选择“选择前 10 名（Select top 10）”
3. 看到那些柱状图了吗？我希望它们能在每个柱子上显示百分比，以便我截取更好的图片，请据此修改页面。

实际效果令人印象深刻——Claude 向页面注入了自定义 JavaScript 代码，在现有图表上方成功绘制了额外的标签。

*更新*：如果查看运行记录，Claude 声称自己切换到了 Playwright，这让人有些困惑，因为我并不认为自己配置了该工具。
