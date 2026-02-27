---
title: mind-map：SimpleMindMap（思绪思维导图）：一个强大的Web 开发工具
对象: GitHub 仓库
项目主页: https://github.com/wanglin2/mind-map
开发文档: https://wanglin2.github.io/mind-map-docs/
在线示例: https://wanglin2.github.io/mind-map/
许可证: MIT
---

## 摘要

思绪思维导图（wanglin2/mind-map）是一个包含纯 JavaScript 底层库与完整 Web 客户端的开源思维导图工具，支持丰富的图表结构、插件化扩展及协同编辑功能。

- 产品形态：提供不依赖前端框架的底层库 `simple-mind-map`，并提供基于 Vue 2.x 与 ElementUI 的完整 Web 应用。
- 数据流转：支持导入 JSON、XMind、Markdown，支持导出 JSON、PNG、SVG、PDF、Markdown、XMind、TXT。
- 架构特点：扩展能力按插件按需引入，适合在集成场景中控制体积与能力边界。

## 功能与定位

SimpleMindMap 同时面向两类需求：

- 作为 JavaScript 思维导图库：用于在现有 Web 产品中快速集成思维导图能力。
- 作为现成 Web 应用：可直接在线使用，也可用于自部署与二次开发。

项目定位是“可开发、可扩展、可落地”的 Web 思维导图基础设施，而不是仅提供单一在线编辑器。

## 典型使用场景

- 在业务系统中嵌入思维导图编辑与展示模块。
- 作为团队在线制图工具，结合协同编辑进行脑图共创。
- 作为私有化部署底座，按组织需求做二次功能扩展。

## 特色与差异点

- 插件化架构：富文本、多选、拖拽、导出、小地图、水印、协同、演示等能力可按需启用。
- 结构覆盖广：支持逻辑结构图、思维导图、组织结构图、目录组织图、横纵时间轴、鱼骨图。
- 节点表达丰富：支持文本、图片、图标、超链接、备注、标签、概要、数学公式等内容类型。
- 提供官方在线示例与独立文档，便于从试用快速过渡到集成开发。

## 使用方式概览

- 库集成：在前端项目安装 `simple-mind-map`，按文档配置容器与数据结构后初始化实例，并按需引入插件。
- 应用使用：直接使用官方在线示例，或基于仓库源码进行自部署。
- 生态扩展：仓库 README 提供桌面客户端、Obsidian 插件与 uTools 插件的入口信息，便于跨场景使用。

## 限制与注意事项

- 项目明确不实现“自由节点（多个根节点）”。
- 项目明确不实现“在概要节点后继续添加子节点”。
- 开源协议为 MIT；README 对商用场景额外提示需保留版权声明与来源信息。

## 链接

1. https://github.com/wanglin2/mind-map
2. https://github.com/wanglin2/mind-map/blob/main/README.md
3. https://wanglin2.github.io/mind-map-docs/
4. https://wanglin2.github.io/mind-map/
5. https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/package.json
6. https://github.com/wanglin2/mind-map/blob/main/web/package.json
7. https://github.com/wanglin2/mind-map/blob/main/LICENSE
8. https://github.com/wanglin2/mind-map/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/self-hosting]]
- [[00-元语/productivity]]
