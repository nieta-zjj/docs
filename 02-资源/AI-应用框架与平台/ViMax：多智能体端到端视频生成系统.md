---
title: "ViMax：多智能体端到端视频生成系统"

发布日期: "2026-02-22"
对象: "GitHub 项目 `HKUDS/ViMax`"
项目主页: "https://github.com/HKUDS/ViMax"
开源协议: "MIT"
主要语言: "Python"
统计快照: "Stars 2307，Forks 429，Watchers 29（抓取时间：2026-02-22）"
版本快照: "无正式 release（抓取结果 0）"
---

## 摘要

**一句话总结**
ViMax 是一个基于 Python 和 MIT 协议开源的多智能体视频生成系统，集成了编剧、导演、制片人和生成器功能，实现从文本创意到视频的端到端自动化创作。

**核心要点**
- 开源与技术栈：项目采用 MIT 协议开源，主要使用 Python 开发，聚焦 agentic-aigc 与 video-generation 领域。
- 系统定位：作为“导演、编剧、制片人和视频生成器”四合一的综合平台，通过多智能体协作架构模拟影视制作分工。
- 四大核心场景：支持创意到视频（Idea2Video）、小说到视频（Novel2Video）、剧本到视频（Script2Video）以及基于人物照片的角色出镜视频生成（AutoCameo）。
- 全链路一体化：区别于单一的视频生成模型，该系统将前期的内容规划（编剧/导演）与后期的视频生成整合在同一个智能体框架内。
- 模块化架构：系统内部清晰划分为智能体（agents）、流水线（pipelines）、工具（tools）、接口（interfaces）和配置（configs）等模块。
- 现代化工程管理：采用 `pyproject.toml` 和 `uv.lock` 进行项目依赖管理，并原生提供中英双语文档。
- 脚本化运行入口：各项核心功能通过根目录下的独立 Python 脚本触发（如 `main_idea2video.py`、`main_script2video.py`）。

**风险与不足**
- 截至当前记录，该项目尚未发布任何正式的 Release 版本（Release 数量为 0），用户必须直接克隆默认分支（main）的代码进行使用。

## 功能与定位

ViMax 是一个基于智能体（Agentic）的视频生成开源项目。该系统定位为“导演、编剧、制片人和视频生成器”四合一的综合平台，旨在通过多智能体视频生成流水线与系统架构，实现高度自动化的视频创作流程。

## 典型使用场景

- 创意到视频（Idea2Video）：将初步的灵感或创意直接转化为视频。
- 小说到视频（Novel2Video）：将小说文本内容视觉化为视频。
- 剧本到视频（Script2Video）：根据结构化的剧本生成对应的视频画面。
- 角色出镜（AutoCameo）：基于人物照片，生成特定角色出镜的视频。

## 核心功能

- 多模态生成流水线：支持从多种文本形态（创意、小说、剧本）到视频的端到端生成。
- 多智能体协作架构：系统内部划分了 `agents`、`pipelines`、`tools` 等模块，通过模拟不同影视制作角色的分工来完成视频生成。
- 定制化角色视频生成：通过 AutoCameo 功能，支持基于静态照片生成动态角色视频。

## 特色与差异点

- 全链路一体化：不仅覆盖视频生成，还强调前置叙事规划与镜头设计的智能体协作。
- 工程结构清晰：按接口、配置、工具与流水线拆分模块，便于扩展与维护。
- 双语文档支持：同时提供中文与英文 README，降低使用门槛。

## 使用方式概览

1. 按 README 的 Quick Start 准备 Python 3.12 与依赖环境。
2. 根据任务场景配置 `configs` 下相关配置文件与模型接口参数。
3. 从创意生成视频时使用 `main_idea2video.py` 入口。
4. 从剧本生成视频时使用 `main_script2video.py` 入口。

## 限制与注意事项

- 当前无正式 release，版本演进以主分支提交为准。
- 多智能体视频生成链路较长，落地前应先在小规模样例上验证配置与成本。
- 涉及外部模型与服务接口时，需要自行确认可用性、额度与合规边界。

## 链接

- 仓库：https://github.com/HKUDS/ViMax
- 中文 README：https://raw.githubusercontent.com/HKUDS/ViMax/main/README_ZH.md
- 英文 README：https://raw.githubusercontent.com/HKUDS/ViMax/main/readme.md
- 开源协议：https://raw.githubusercontent.com/HKUDS/ViMax/main/LICENSE

## 关联主题

- [[00-元语/Agent]]
- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/video]]
- [[00-元语/multimodal]]
- [[00-元语/workflow]]
