---
title: "OCRmyPDF：PDF OCR 与可检索化工具"

发布日期: "2026-02-22"
对象: "GitHub 项目 `ocrmypdf/OCRmyPDF`"
项目主页: "https://github.com/ocrmypdf/OCRmyPDF"
官方网站: "http://ocrmypdf.readthedocs.io/"
开源协议: "Mozilla Public License 2.0"
主要语言: "Python"
统计快照: "Stars 32679，Forks 2275，Watchers 189（抓取时间：2026-02-22）"
版本快照: "最新发布 v17.3.0（发布时间：2026-02-21T09:30:21Z）"
---

## 摘要

**1) 一句话总结**
OCRmyPDF 是一个基于 Python 的开源命令行工具，它利用 Tesseract 引擎为扫描版 PDF 文件添加准确的 OCR 文本层，使其支持搜索和复制，并默认生成适合长期归档的 PDF/A 格式文件。

**2) 关键要点**
*   **核心功能**：为扫描版 PDF（或图像）添加隐藏的 OCR 文本层，文本精准对齐图像以便于复制粘贴，同时尽可能进行无损操作。
*   **底层引擎**：依赖 Tesseract OCR 引擎（支持 v4.1.1 及以上版本），通过安装相应的语言包可支持超过 100 种语言。
*   **图像与排版优化**：保持原始嵌入图像的精确分辨率，支持自动纠偏（deskew）、修正页面旋转，并能优化图像以减小最终文件体积。
*   **输出标准**：默认生成标准化的 PDF/A 格式文件，并在处理前后对输入和输出文件进行有效性验证。
*   **性能与扩展**：默认利用所有可用的 CPU 核心进行并行处理，能够稳定扩展并处理包含数千页的大型 PDF 文件。
*   **跨平台与安装**：支持 Linux、Windows、macOS 和 FreeBSD，提供 x64 和 ARM 架构的 Docker 镜像，可通过 apt、brew、dnf 等主流包管理器快速安装。
*   **项目热度**：采用 Mozilla Public License 2.0 开源协议，社区高度活跃（超 3.2 万 Stars），最新版本为 v17.3.0。

## 功能与定位

OCRmyPDF adds an OCR text layer to scanned PDF files, allowing them to be searched

## 典型使用场景

- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能

- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点

- 仓库长期活跃，最近更新时间为 2026-02-22T12:21:25Z。
- 项目创建于 2013-12-20T08:26:28Z，具备持续迭代与社区沉淀。
- 以 `Python` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览

1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项

- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接

- 仓库：https://github.com/ocrmypdf/OCRmyPDF
- 官网：http://ocrmypdf.readthedocs.io/
- README：https://raw.githubusercontent.com/ocrmypdf/OCRmyPDF/main/README.md
- Releases：https://github.com/ocrmypdf/OCRmyPDF/releases

## 关联主题

- [[00-元语/ocr]]
- [[00-元语/cli]]
- [[00-元语/workflow]]
- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/productivity]]
