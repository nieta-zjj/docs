---
title: "What You Need Is Not an AI Agent, But an AI-Friendly Workflow"

来源: "https://baoyu.io/blog/ai-agent/what-you-need-is-ai-friendly-workflow"
发布日期: "2024-10-09"
作者: "宝玉"
---

## 摘要

### 1) 一句话总结
有效利用AI的核心不在于盲目追求“AI Agent（智能体）”概念，而在于回归第一性原理，设计出能充分发挥AI优势的“AI友好型工作流”。

### 2) 关键要点
*   **Agent并非银弹**：吴恩达提出的多智能体翻译（直译、审查、意译）能提升质量，本质上是利用了“思维链（CoT）”将复杂推理拆解，而非Agent概念本身的功劳。
*   **避免过度拟人化**：不要将人类解决问题的方法生搬硬套给AI（例如试图让AI模仿产品经理、架构师、测试员等人类团队分工），而应采用适合AI的模式（如GitHub Copilot的辅助生成模式）。
*   **AI定位为辅助而非决策者**：当前主流且有效的模式是将AI作为“副驾（Copilot）”，或让AI处理边界清晰的具体任务（如抓取评论、情感分析、草拟回复），而非让其主导开放性任务。
*   **跨领域工具结合**：不要过度依赖单一的大语言模型（LLM），应将LLM与其他领域的专业AI模型或外部工具结合使用。
*   **运用第一性原理**：将AI视为工具，明确核心问题，拆解基本要素，从零构建最适合的解决方案。
*   **成功案例1（PDF转Markdown）**：PDFGPT项目通过工作流结合了PyMuPDF（提取图表并用红框标记）与GPT-4的视觉能力，成功解决了PDF结构化提取的难题。
*   **成功案例2（漫画翻译）**：comic-translate项目设计了包含气泡检测、OCR提取、文本擦除、GPT-4视觉翻译及文本回填的组合工作流，实现了高效自动化，且GPT-4 API成本仅约0.02美元/页。

### 3) 风险与不足
*   **自主决策风险**：当前AI尚无法在开放性任务中做出可靠决策，完全依赖AI自主决策（如早期的AutoGPT项目）会导致大量Token消耗且缺乏实际产出。
*   **拟人化分工缺乏实用性**：试图让AI Agent完全模仿人类软件开发角色的项目，通常只停留在学术论文阶段，缺乏实际应用价值。
*   **纯LLM的局限性**：仅使用LLM处理复杂任务（如解析PDF）时，会面临上下文长度限制以及视觉内容嵌入困难的问题。

## 正文

The concept of AI agents is gaining popularity, and some people see them as a silver bullet for solving problems with AI. The hype around AI agents suggests that if you have one, many challenges can be easily tackled. However, there are also those who argue that AI agents are overhyped and lack real, viable applications.

A well-known example often cited is from Andrew Ng, who used multi-agent translation to improve quality. In this scenario, three agents are used: a direct translation agent, a review agent, and a paraphrasing agent, which can significantly boost translation quality. However, it's not necessarily about using three agents to improve translation quality. In fact, I've previously proposed a method that uses prompts to guide large language models (LLMs) through direct translation, reflection, and paraphrasing steps, resulting in high-quality output.

The key point here is that leveraging LLMs to solve problems often comes down to a method called "Chain of Thought" (CoT). CoT helps enhance the quality of outputs by breaking down complex reasoning into steps. The translation quality improves not because agents are involved but because of the CoT process. Whether you use separate agents for each step or organize them into a single process, the outcome is not fundamentally different.

For most AI applications, the core principle is similar: if you want to use AI effectively, it's not about having an agent; it's about designing an AI-friendly workflow.

How to Design an AI-Friendly Workflow
-------------------------------------

So, how do you design a workflow that works well with AI? I believe several key factors are worth considering:

### 1. Avoid Limiting AI Solutions to Human Methods

Sometimes, we anthropomorphize AI too much, applying human problem-solving approaches to AI systems. This can be effective at times, but it's often not the optimal way to leverage AI. For example, professional translators can achieve high-quality translations in one go without explicitly following steps like direct translation, reflection, and paraphrasing. Initially, many AI translation prompts followed this approach—just translating directly, which often produced awkward results. By realizing the value of breaking down the task using a CoT approach, we can design workflows better suited to AI.

I’ve also seen AI agent projects trying to mimic human software development roles: project managers, product managers, architects, developers, and testers. This approach, attempting to mirror human job divisions, is overly anthropomorphic and doesn’t necessarily fit well with how AI can work most effectively. Hence, such ideas usually remain within academic papers without practical impact. On the other hand, tools like GitHub Copilot, which assist in code generation, align well with how AI can improve software workflows and significantly boost productivity.

### 2. Don't Rely Solely on AI for Decisions—Use AI to Assist

One of last year’s trending projects was AutoGPT, which allows you to enter a task and then GPT-4 breaks it down, creates a plan, invokes external tools (like Google Search), and even executes code to complete the task. This was one of the pioneering AI agent projects. However, the hype around it has faded because current AI is not yet capable of making reliable decisions for open-ended tasks. This led to large token expenditures with minimal practical outcomes.

Nowadays, the mainstream approach to AI is using it as a "copilot"—it assists humans rather than making all decisions. Alternatively, you can design workflows where AI handles specific, well-defined tasks without having to make complex decisions. Take, for instance, a workflow for handling negative customer reviews:

1.   The system scrapes review data.

2.   AI analyzes the sentiment of each review and flags negative ones.

3.   AI drafts responses for these negative reviews (which can be reviewed by humans).

This workflow is ideal for AI because it relies on AI for simpler tasks—sentiment analysis and response generation—without requiring complex, overarching decisions. As a result, it improves efficiency while maintaining reliability.

### 3. Combine AI Models and Tools Across Domains for Better Solutions

The recent surge of interest in AI is largely driven by the emergence of LLMs. These models are powerful and versatile, capable of basic reasoning, and easy to use—whether via chatbot interfaces or API calls. This accessibility has allowed non-specialists, like myself, to utilize AI without deep expertise in AI engineering. Previously, AI had a much higher barrier to entry, requiring data preprocessing, training, and parameter tuning.

However, this has led to a tendency to over-rely on LLMs and neglect the potential of combining them with other domain-specific AI tools. By integrating various AI models and tools into a well-designed workflow, you can create more efficient solutions.

### 4. Return to the Root Problem—AI Is Just a Tool

The mistakes mentioned above stem from an overemphasis on trendy concepts while neglecting the core problem at hand. AI is a tool, not an end in itself. Elon Musk's "first principles" thinking emphasizes breaking problems down to their most fundamental elements, analyzing them, and finding optimal solutions. Applying first principles involves three steps:

1.   Clearly define the core problem you want to solve.

2.   Break down the problem into its essential components.

3.   Create a solution from the ground up.

This same thinking is useful for using AI effectively—designing a workflow that allows AI to do what it does best in service of your real goals.

Two Examples of AI-Optimized Workflows
--------------------------------------

### 1. Converting PDFs to Markdown

If you've ever translated a PDF, you know that preparing content for translation—structuring it into Markdown format—makes a huge difference in the quality of the output. However, extracting content from a PDF is challenging since it’s primarily designed for printing rather than structured data. Handling figures and tables further complicates the process.

I recently saw a project called [PDFGPT](https://github.com/CosmosShadow/gptpdf), which approaches this problem in an elegant way. It uses GPT-4 and PyMuPDF as part of a workflow:

1.   A PDF library (PyMuPDF) detects images, figures, and tables, extracting them as separate images.

2.   Each page is converted into an image, with red boxes marking the figures and tables.

3.   GPT-4, with its visual capabilities, interprets these marked images and generates corresponding Markdown content.

Using only an LLM would struggle with such a task due to context length limits and difficulties embedding visual content. By combining PyMuPDF with a suitable workflow, this project effectively converts PDFs to Markdown with great results.

### 2. Translating Comics

Comics are another interesting challenge—translating speech bubbles into another language requires extracting the text, translating it, and placing it back into the original layout. The key challenges are:

*   Speech bubbles are irregular and sometimes overlap, making text extraction difficult.

*   A straightforward translation of extracted text may not be coherent without understanding the comic's context.

*   After translation, the original text must be removed and replaced in the correct positions.

A project called [comic-translate](https://github.com/ogkalu2/comic-translate) handles this problem quite well by designing a tailored workflow:

1.   A specialized model detects and locates the speech bubbles.

2.   OCR extracts the text from these bubbles.

3.   Another model removes the original text from the bubbles.

4.   GPT-4 translates the text based on visual content.

5.   The translated text is re-inserted into the original bubbles.

If you overlook translation quality for a moment, this can be a fully automated workflow—highly efficient and low-cost, with GPT-4's API being the most expensive part at about $0.02 per page. Adding human oversight to refine translations further boosts the quality without sacrificing efficiency.

Conclusion
----------

To make the most of AI, the key is to design workflows that fit AI's strengths. Whether it involves an AI agent, an LLM, or another model is secondary. The true focus should always be on solving the core problem effectively, using AI as a tool rather than an end in itself.

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/workflow]]
- [[00-元语/llm]]
- [[00-元语/copilot]]
- [[00-元语/decision-making]]
- [[00-元语/prompt]]
- [[00-元语/multimodal]]
- [[00-元语/ocr]]
- [[00-元语/tool]]
