---
title: "Google API 密钥本非秘密，但 Gemini 改变了规则"
作者: "Simon Willison"
来源: "simonwillison.net"
原文链接: "https://simonwillison.net/2026/Feb/26/google-api-keys/"
发布日期: "2026-02-26"
译注: "本文基于原文翻译整理，保留关键术语英文。"
---

## 摘要

**一句话总结**
谷歌Gemini与Google Maps共享API密钥的机制，导致原本安全公开的地图密钥在启用Gemini后意外转变为敏感凭证，引发了权限提升问题。

**关键点**
* Google Maps API密钥在设计上是公开的（直接嵌入网页），而Gemini API密钥必须严格保密。
* Gemini和Google Maps（及其他谷歌服务）共享相同的API密钥。
* 当开发者在已有公开Maps密钥的项目中启用Gemini API时，该公开密钥会自动获得访问敏感Gemini端点的权限。
* 开发者在密钥权限发生底层变化（从公开标识符变为秘密凭证）时，不会收到任何系统警告。
* Truffle Security在2025年11月的Common Crawl数据中发现了2,863个可访问Gemini的API密钥，并通过请求`/models`端点进行了验证。
* 泄露的密钥中包含几个谷歌自身的密钥，其中一个自2023年2月（早于Gemini发布）就已部署。
* 谷歌目前正在努力撤销受影响的密钥，并建议用户自行检查其密钥状态。

**风险/漏洞**
* **权限提升漏洞**：原本无害的公开密钥在无警告的情况下转变为高权限的秘密凭证。
* **数据隐私风险**：暴露的Gemini API密钥可被用于访问私人文件。
* **财务计费风险**：暴露的密钥可被用于发出产生计费的API请求，导致用户意外承担费用。

## 正文

2026年2月26日 - 链接博客

Google API 密钥原本不是秘密。但后来 Gemini 改变了规则。天呐！事实证明，Gemini 和 Google Maps（以及其他服务）共享相同的 API 密钥……但 Google Maps API 密钥被设计为公开的，因为它们直接嵌入在网页中。Gemini API 密钥可用于访问私人文件并发出计费的 API 请求，因此绝对不应该被共享。

如果你不了解这一点，很容易意外地为某个已经存在于公开环境中的、原本公开的 API 密钥启用 Gemini 计费。

导致这成为权限提升（privilege escalation）而非配置错误（misconfiguration）的原因在于事件发生的顺序。

- 开发者创建了一个 API 密钥，并将其嵌入到网站中用于 Maps（地图服务）。（在那个时候，该密钥是无害的。）

- 在同一个项目中启用了 Gemini API。（现在，同一个密钥可以访问敏感的 Gemini 端点。）

- 开发者从未收到关于密钥权限在底层发生变化的警告。（该密钥从公开标识符变成了秘密凭证）。

Truffle Security 在 2025 年 11 月的 Common Crawl 数据中发现了 2,863 个可以访问 Gemini 的 API 密钥，并通过请求 `/models` 列表端点进行了验证。其中包括几个属于 Google 自己的密钥，其中一个自 2023 年 2 月起就已部署（根据 Internet Archive 的数据），因此早于它现在能够访问的 Gemini API。

Google 正在努力撤销受影响的密钥，但检查一下你自己的密钥是否受到此问题的影响仍然是个好主意。

## 关联主题

- [[00-元语/gemini]]
- [[00-元语/security]]
- [[00-元语/risk]]
- [[00-元语/AI]]
