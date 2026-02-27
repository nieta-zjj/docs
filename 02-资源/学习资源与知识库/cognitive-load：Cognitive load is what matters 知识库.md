---
title: cognitive-load：Cognitive load is what matters 知识库
对象: GitHub 仓库
类别: 学习资源与知识库
项目主页: https://github.com/zakirullin/cognitive-load
来源: README.md、README.zh-cn.md、README.prompt.md、LICENSE
开源协议: CC BY 4.0
---

## 摘要

该项目是一个立足于人类工作记忆限制的开源指南与 AI 提示词库，核心目标是帮助开发者识别并降低代码与架构中的外在认知负荷，从而提升可读性与协作效率。

- 以工作记忆容量有限为基础，区分内在负荷与外在负荷，重点削减后者。
- 给出可执行的编码与重构建议，如复杂条件具名化、提前返回、组合优于深层继承。
- 在模块设计上强调“深模块”，反对需要频繁上下文切换的“浅模块”。
- 对过度 DRY、过细粒度微服务和过度抽象提出风险提醒，主张务实取舍。
- 提供 `README.prompt.md` 作为 AI 编程约束模板，要求输出更符合人类阅读习惯的代码。

## 功能与定位

该仓库是一份持续更新的工程实践知识库，主题是“认知负荷才是关键”。它不是框架或库，而是用于指导代码编写、重构与架构决策的方法集合，帮助团队把“可读、可维护、低心智负担”作为核心质量标准。

## 典型使用场景

- 在代码评审中作为统一标尺，识别高认知负荷写法并提出可落地改进。
- 在重构遗留系统时，优先处理会放大理解成本的结构性问题。
- 在架构讨论中评估抽象层级、服务拆分与依赖引入对团队心智成本的影响。
- 在 AI 辅助开发中复用仓库提供的提示词，约束生成代码的可读性与复杂度。

## 核心功能

- 认知负荷模型：给出开发者视角下的认知负荷定义与负荷类型划分。
- 代码层实践：围绕条件表达式、嵌套分支、命名和注释策略给出具体优化方向。
- 设计层实践：比较深模块与浅模块，强调接口简洁与复杂性封装。
- 架构层实践：讨论微服务、抽象层与依赖管理在真实团队中的维护成本。
- AI 提示词：提供可直接复用的提示词模板，约束模型生成更低认知负荷的实现。

## 特色与差异点

- 以人类认知约束为出发点，而非依赖流行术语或风格偏好。
- 强调“减少上下文切换”的线性理解体验，关注真实维护成本。
- 同时覆盖代码细节、模块设计与架构决策，形成统一判断框架。
- 提供多语言 README，降低跨语言团队采用门槛。

## 使用方式概览

- 先阅读 README，建立统一术语与判断标准。
- 将仓库中的原则纳入团队代码评审清单与重构优先级。
- 将 `README.prompt.md` 作为 AI 编程系统提示词或评审约束，减少难读实现。
- 在引入新抽象、新依赖或新架构前，先评估其是否增加外在认知负荷。

## 限制与注意事项

- 项目内容属于方法论与经验提炼，不直接提供可运行的软件功能。
- 部分观点带有明确立场，落地时需要结合团队规模与业务约束做取舍。
- 使用与二次改编时需遵循 CC BY 4.0 的署名要求。

## 链接

- https://github.com/zakirullin/cognitive-load
- https://github.com/zakirullin/cognitive-load/blob/main/README.md
- https://github.com/zakirullin/cognitive-load/blob/main/README.zh-cn.md
- https://github.com/zakirullin/cognitive-load/blob/main/README.prompt.md
- https://github.com/zakirullin/cognitive-load/blob/main/LICENSE
- https://minds.md/zakirullin/cognitive

## 关联主题

- [[00-元语/软件工程]]
- [[00-元语/code-review]]
- [[00-元语/prompt]]
- [[00-元语/知识工作]]
- [[00-元语/learning-resource]]
