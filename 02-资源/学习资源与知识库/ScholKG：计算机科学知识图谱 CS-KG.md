---
title: "ScholKG：计算机科学知识图谱 CS-KG"

对象: "产品网站"
来源:
  - "https://scholkg.kmi.open.ac.uk/"
记录日期: "2026-02-22"
---

## 摘要

**1) 一句话总结**
ScholKG 提供了一个从 1450 万篇学术文献中自动生成的大规模计算机科学知识图谱（CS-KG），支持通过 SPARQL 端点或离线数据包获取结构化的学术实体与关系。

**2) 核心要点**
* **定位与演进**：CS-KG 是一个旨在结构化描述学术文献信息的自动生成知识图谱，现已取代早期的“人工智能知识图谱”（AI-KG）。
* **数据规模**：图谱从 1450 万篇文章中提取了 6700 万条陈述，涵盖 2400 万个学术实体（如任务、方法、材料、指标），包含 219 种语义关系。
* **自动化提取流水线**：综合使用 DyGIE++、Stanford CoreNLP、CSO Classifier 以及一种新型词性标注器（PoS Tagger）四种工具进行实体与关系的自动提取。
* **数据质量控制**：采用结合深度学习与语义技术的混合过滤机制，对生成的三元组（triples）进行整合与过滤。
* **查询与获取方式**：支持通过官方 SPARQL 端点进行在线检索，或下载 TTL 和 CSV 格式的完整数据转储（Dump）进行本地离线分析。
* **配套资源**：除主图谱外，还提供专门的基准测试集（Benchmark），并保留了旧版 AI-KG 的数据转储和本体（Ontology）供访问。
* **开源协议**：所有 CS-KG 数据均基于 CC BY 4.0 许可协议提供。

## 功能与定位

ScholKG 是 CS-KG 与 AI-KG 的官方入口站点，提供知识图谱的查询入口、数据下载、文档与本体 Schema。站点介绍中明确建议用户从 AI-KG 迁移到覆盖范围更大的 CS-KG。

## 典型使用场景

- 用 SPARQL 做概念、方法、任务、指标等学术实体与关系的检索与统计分析。
- 下载 TTL 或 CSV 数据后，在本地做离线分析、可视化、图算法或数据集构建。
- 使用官方基准测试集进行信息抽取、知识图谱构建或补全相关研究的对比评测。

## 核心功能

- 在线查询：提供 SPARQL 端点用于交互式查询与结果导出。
- 数据分发：提供 CS-KG 的 TTL dump、CSV dump 与 benchmark 下载，同时保留 AI-KG 下载与本体。
- 文档与本体：提供 CS-KG 的文档页面与本体 Schema，便于理解图谱结构与字段含义。

## 特色与差异点

- 规模与覆盖：站点公布的 CS-KG 规模为 6700 万条陈述、1450 万篇文章、2400 万实体、219 种语义关系。
- 自动化管线：实体与关系抽取使用 DyGIE++、Stanford CoreNLP、CSO Classifier 与 PoS Tagger，并在后处理阶段结合深度学习与语义技术做整合与过滤。
- 标准化取向：站点声明 CS-KG 与 Knowledge Graph Construction W3C Community Group 的倡议对齐，用于支持基准、资源与工具建设。

## 使用方式（概览）

1. 直接访问 SPARQL 端点，编写查询语句检索所需实体、关系与统计结果。
2. 根据用途选择下载 TTL 或 CSV 数据，在本地加载到三元组存储、图数据库或分析管线中。
3. 如需评测或复现研究，对照 benchmark 与相关论文说明进行实验设置。

## 限制与注意事项

- 协议：数据按 CC BY 4.0 提供，使用与再分发需要遵守署名要求。
- 演进：站点明确 CS-KG 正在替代 AI-KG；如依赖旧数据结构，需要同时参考 AI-KG 本体与旧版本数据。
- 数据体量：CS-KG dump 体积较大，离线使用需要预留存储空间与计算资源。

## 链接

- 官网：https://scholkg.kmi.open.ac.uk/
- 永久链接：http://w3id.org/cskg
- SPARQL 端点：https://scholkg.kmi.open.ac.uk/sparql/
- CS-KG 文档：https://scholkg.kmi.open.ac.uk/cskg/documentation.php
- CS-KG 本体 Schema：https://scholkg.kmi.open.ac.uk/cskg/ontology
- AI-KG 本体 Schema：https://scholkg.kmi.open.ac.uk/aikg/ontology
- CS-KG TTL dump：https://scholkg.kmi.open.ac.uk/downloads/cskg_rdf_release.zip
- CS-KG CSV dump：https://scholkg.kmi.open.ac.uk/downloads/csv-1-cs-kg_2024-03-20.zip
- CS-KG benchmark：https://scholkg.kmi.open.ac.uk/downloads/benchmark.zip
- AI-KG TTL dump：https://scholkg.kmi.open.ac.uk/downloads/aikg.zip
- 许可协议 CC BY 4.0：http://creativecommons.org/licenses/by/4.0/
- 隐私政策：https://scholkg.kmi.open.ac.uk/privacypolicy.php
- 无障碍声明：https://scholkg.kmi.open.ac.uk/accessibilitystatement.php
- 相关出版物：
  - SCICERO（2022）：https://oro.open.ac.uk/85472/
  - Completing Scientific Facts（2022）：https://oro.open.ac.uk/85976/
  - CS-KG（ISWC 2022）：https://oro.open.ac.uk/85306/
  - Generating Knowledge Graphs（FGCS 2021 PDF）：http://oro.open.ac.uk/73305/1/FGCS_Generating_Knowledge_Graphs.pdf
  - AI-KG（ISWC 2020 PDF）：http://oro.open.ac.uk/71736/1/_ISWC_2020___resources__AI_Knowledge_Graph%20%281%29.pdf

## 关联主题

- [[00-元语/learning-resource]]
- [[00-元语/AI]]
- [[00-元语/knowledge-graph]]
- [[00-元语/benchmark]]
- [[00-元语/data-pipeline]]
- [[00-元语/paper]]
