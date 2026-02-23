---
title: "怎么能让ai更好的读我的prompt里 结构化数组对象数据呢？"

来源: "https://baoyu.io/blog/improve-ai-prompt-structured-data"
发布日期: "2024-12-27"
作者: "宝玉"
---

## 摘要

**1) 一句话总结**
通过在提示词中仅提供数据结构与分析需求，并利用大语言模型（如 ChatGPT 或 Claude）生成及运行代码，可以有效解决 AI 处理长篇结构化数据时受限于上下文窗口和计算能力的问题。

**2) 关键要点**
*   **核心方案**：将大语言模型与代码结合，让 AI 自动生成并运行代码来读取和分析结构化数据，而不是让 AI 直接阅读完整数据。
*   **精简输入**：在 Prompt 中只需提供数据结构和少量示例数据，无需输入完整数据集，以避免超出上下文窗口限制。
*   **明确需求**：在提示词中清晰说明需要对数据进行何种操作和分析（例如：“分析哪个月、哪一周、哪一天的访问量最大”）。
*   **执行流程**：AI 的标准处理流程为：对数据进行抽样了解结构 -> 根据需求生成代码 -> 运行代码处理文件 -> 输出最终分析结果。
*   **工具差异**：在处理此类任务时，ChatGPT 通常使用 Python（如 Pandas 库）生成和执行代码，而 Claude 则使用 JavaScript（如 PapaParse 库）。
*   **实际案例**：该方法成功应用于分析 X（原 Twitter）导出的 CSV 访问数据，精准计算出了年度访问量最高的月份、周次和具体日期。

**3) 风险与不足（原文明确提及）**
*   **上下文窗口限制**：直接向 AI 输入过长的完整数据会导致部分内容被截断或遗弃。
*   **数学计算能力弱**：大语言模型本身不擅长数学，无法直接基于用户提供的结构化数据进行准确的计算操作。

## 正文

问：怎么能让ai更好的读我的prompt里 结构化数组对象数据呢？内容很长感觉就被遗弃了一些

答：由于上下文窗口的限制，所以无法给很长的内容，并且由于大语言模型并不擅长数学，所以它也无法帮助你基于你提供的结构化数据去做计算。这时候最好是大语言模型结合代码。并且不用担心，像 ChatGPT、Claude 都可以自动帮你生成代码去分析你提供的数据，当然你也可以自己去写代码去实现。

基本原理是这样的：

1.   在给大语言的 prompt 里面，你只需要提供你结构化数据的数据结构，可以辅助给一些示例数据，而不需要给完整数据，这样就不会让输入的数据在 Prompt 中太长

2.   说明你要对数据操作、分析的需求是什么

3.   让 AI 基于你的需求去生成代码，然后用代码去读取数据，并生成结果

![Image 1](https://baoyu.io/uploads/2024-12-27/1735261700131.png)

比如说，我把我 X 上的访问数据导出成 csv 文件，包含每一天的访问量，然后我把这个数据提交给 ChatGPT（Claude也可以），让它帮我：“分析我这一年的推文数据中，是哪个月访问量最大？哪一周访问量最大？哪一天访问两最大？”

![Image 2](https://baoyu.io/uploads/2024-12-27/1735261711639.png)

ChatGPT 首先会对我的数据进行抽样，了解我的数据结构是什么样的。

![Image 3](https://baoyu.io/uploads/2024-12-27/1735261722403.png)

然后根据需求去生成代码，最后运行代码获得结果。

![Image 4](https://baoyu.io/uploads/2024-12-27/1735261740412.png)

Claude 也是类似，唯一的差别是 ChatGPT 用 Python，而 Claude 使用 JavaScript。

![Image 5](https://baoyu.io/uploads/2024-12-27/1735261759253.png)

Claude 返回结果：

```
我来帮您分析这些数据。我会使用分析工具来处理CSV文件，查看不同时间维度的访问量（Profile visits）数据。

```js
// 读取并解析CSV文件
const fileContent = await window.fs.readFile('account_overview_analytics 2.csv', { encoding: 'utf8' });
import Papa from 'papaparse';

const parsedData = Papa.parse(fileContent, {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true
});

const data = parsedData.data;

// 按月份分组
const monthlyVisits = {};
data.forEach(row => {
  const date = new Date(row.Date);
  const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  if (!monthlyVisits[monthKey]) {
    monthlyVisits[monthKey] = 0;
  }
  monthlyVisits[monthKey] += row['Profile visits'] || 0;
});

// 找出访问量最大的月份
const maxMonthVisits = Object.entries(monthlyVisits)
  .sort((a, b) => b[1] - a[1])[0];
console.log('月度访问量最高：', maxMonthVisits);

// 按周分组
const weeklyVisits = {};
data.forEach(row => {
  const date = new Date(row.Date);
  const weekNumber = getWeekNumber(date);
  const weekKey = `${date.getFullYear()}-W${String(weekNumber).padStart(2, '0')}`;
  if (!weeklyVisits[weekKey]) {
    weeklyVisits[weekKey] = 0;
  }
  weeklyVisits[weekKey] += row['Profile visits'] || 0;
});

// 找出访问量最大的周
const maxWeekVisits = Object.entries(weeklyVisits)
  .sort((a, b) => b[1] - a[1])[0];
console.log('周访问量最高：', maxWeekVisits);

// 找出访问量最大的天
const dailyVisits = data.map(row => ({
  date: row.Date,
  visits: row['Profile visits'] || 0
}));
const maxDayVisits = dailyVisits.sort((a, b) => b.visits - a.visits)[0];
console.log('日访问量最高：', maxDayVisits);

// 辅助函数：获取日期所在的周数
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
}
```

根据分析结果：

1. 访问量最高的月份是 2024年2月，总访问量达到了 25,317 次
2. 访问量最高的周是 2024年第7周（2月中旬），访问量为 9,537 次
3. 访问量最高的单日是 2024年2月16日（星期五），当天访问量达到了 4,203 次

看起来2月份是您账号表现最好的时期，特别是2月中旬的那一周。您是否记得在2月16日发布了什么特别的内容，导致访问量激增？这可能对您未来的内容策略有所启发。

如果您想了解更多细节，比如具体的内容类型分析或者其他指标（如互动率、关注率等），我也可以为您进一步分析。
```

ChatGPT:

```
```python
import pandas as pd

# Load the CSV file to analyze the data
file_path = '/mnt/data/account_overview_analytics (2).csv'
data = pd.read_csv(file_path)

# Display the first few rows to understand the structure of the data
data.head()

```

Result:
```
Result
                Date  Impressions  Likes  Engagements  Bookmarks  Shares  \
0  Fri, Dec 27, 2024        17955     65          405         29       1
1  Thu, Dec 26, 2024      1126219   2870        21818       1386      65
2  Wed, Dec 25, 2024      1657311   4312        19589       1544      78
3  Tue, Dec 24, 2024       401326   1424        12266        749      41
4  Mon, Dec 23, 2024       467837   1528        16703        782      43

   New follows  Unfollows  Replies  Reposts  Profile visits  Create Post  \
0            4          0       10       10              35            0
1          206         39      198      427            1099            1
2          361         23      179      667            1700            3
3          141         15      153      272             517            5
4           96         27      217      260             559            2

   Video views  Media views
0          242          346
1        22707        88041
2        12096        23161
3        17368        42005
4        34821        77995
```

The dataset includes columns such as `Date`, `Impressions`, `Likes`, and others. To answer your questions regarding:

1. **Month with the maximum impressions**: I'll group the data by month and calculate total impressions.
2. **Week with the maximum impressions**: I'll group the data by week and calculate total impressions.
3. **Day with the maximum impressions**: I'll find the single date with the highest impressions.

Let me proceed with the calculations.

```python
# Convert the 'Date' column to a datetime format for easier grouping
data['Date'] = pd.to_datetime(data['Date'], format='%a, %b %d, %Y')

# Add helper columns for month and week
data['Month'] = data['Date'].dt.to_period('M')
data['Week'] = data['Date'].dt.isocalendar().week

# Group by month and sum the impressions
monthly_impressions = data.groupby('Month')['Impressions'].sum()

# Group by week and sum the impressions
weekly_impressions = data.groupby('Week')['Impressions'].sum()

# Find the day with the maximum impressions
max_day = data.loc[data['Impressions'].idxmax()]

# Extract the results
max_month = monthly_impressions.idxmax()
max_month_value = monthly_impressions.max()

max_week = weekly_impressions.idxmax()
max_week_value = weekly_impressions.max()

max_day_date = max_day['Date']
max_day_value = max_day['Impressions']

(max_month, max_month_value, max_week, max_week_value, max_day_date, max_day_value)
```

Result

```
(Period('2024-02', 'M'),
 22484999,
 7,
 7480737,
 Timestamp('2024-02-16 00:00:00'),
 2753640)
```

Here is the analysis of your tweet impressions:

1. **Month with the maximum impressions**: February 2024, with a total of 22,484,999 impressions.
2. **Week with the maximum impressions**: Week 7 (mid-February 2024), with a total of 7,480,737 impressions.
3. **Day with the maximum impressions**: February 16, 2024, with 2,753,640 impressions.

Let me know if you'd like a more detailed visualization or further breakdown!
```

## 关联主题

- [[00-元语/prompt]]
- [[00-元语/llm]]
- [[00-元语/context-optimization]]
- [[00-元语/ChatGPT]]
- [[00-元语/Claude]]
- [[00-元语/workflow]]
- [[00-元语/tool]]
- [[00-元语/数学]]
