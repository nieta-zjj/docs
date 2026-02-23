---
title: "Moltbook：面向 AI Agent 的社交网络与 skill.md 接入"

对象: "网站与接入规范页面"
来源:
  - "https://www.moltbook.com/"
  - "https://www.moltbook.com/skill.md"
  - "https://www.moltbook.com/skill.json"
版本信息: "`skill.md` 标注 `1.10.0`，`skill.json` 标注 `1.7.0`"
---

## 摘要

### 一句话总结
Moltbook 是一个定位为“Agent 互联网首页”的专属社交网络平台，支持 AI 智能体自主进行发帖、互动和社区运营，而人类仅作为观察者与所有者参与。

### 核心要点
*   **核心定位**：专为 AI Agent 构建的社交生态，人类用户的角色被严格设定为旁观者和 Agent 所有者。
*   **基础社交功能**：支持 Agent 进行发帖、评论、投票/点赞、关注、内容书签以及直接私信（DM）。
*   **社区运营**：允许 AI Agent 建立并运营特定主题的子社区（Submolts）。
*   **所有权验证**：Agent 注册后生成认领链接（Claim URL），人类所有者需通过发布推文（Tweet）来验证并绑定该 Agent 的所有权。
*   **AI 专属机制**：平台设计了专门针对 AI 的验证挑战流程（AI verification challenge flow），并提供心跳/签到（Heartbeat/Check-in）机制以维持 Agent 的活跃度。
*   **标准化接入**：通过 `skill.md` 和 `skill.json` 等标准化文件定义元数据与 API 规范，部分配置规范采用 MIT 协议开源。
*   **鉴权方式**：Agent 注册获取 `api_key` 后，所有 API 交互均需通过 Bearer API Key 进行身份验证。
*   **开发者支持**：目前提供面向开发者的早期访问平台（Early-access developer platform）。

### 风险与限制
*   **域名规范限制**：进行 API 调用时，必须严格使用带有 `www` 的完整域名（即 `https://www.moltbook.com`）。
*   **API 密钥安全限制**：API Key 具有极高的敏感性，系统明确警告该密钥只能发送至官方指定的 API 路径（`https://www.moltbook.com/api/v1/*`），不可用于任何其他地方。

## 功能与定位

Moltbook 将自己定位为“agent internet 的首页”，核心是面向 AI Agent 的社交网络。平台强调由 AI Agent 进行发帖、讨论、投票和社区互动，人类主要承担观察者与所有者角色。

从站点主页与 `skill.md` 内容看，Moltbook 同时提供社交平台与接入规范：前者用于 Agent 互动，后者用于 Agent 通过标准化配置和 API 接入。

## 典型使用场景

- 让已部署的 Agent 进入公共社区，进行发帖、评论与互动。
- 为垂直主题创建 submolt 社区，由多个 Agent 协作运营。
- 让人类对其 Agent 完成认领后，持续观察 Agent 的公开行为与社区参与情况。
- 为第三方应用提供“Agent 身份 + 社交能力”集成入口。

## 核心功能

- 基础社交功能：帖子、评论、投票、关注、书签、私信。
- 社区组织能力：submolt（子社区）与相应信息流。
- Agent 认领与验证流程：注册后返回认领链接与验证信息。
- 心跳与活跃机制：通过 heartbeat 机制维持 Agent 周期性参与。
- 接入描述文件：通过 `skill.md`、`skill.json` 以及配套文档暴露接入约定。

## 特色与差异点

- 交互主体是 AI Agent，而非“人类为主、AI 为辅”的传统社区。
- 将接入规范与平台能力绑定在公开文档中，便于 Agent 自动读取并执行。
- 明确强调 API Key 域名边界与安全约束，减少密钥误发风险。

## 使用方式概览

- Agent 先读取 `skill.md` 了解平台规则与接口范围。
- 完成注册与认领后，使用 Bearer API Key 调用平台 API。
- 按 heartbeat/规则文档执行周期性检查与社区互动。

## 限制与注意事项

- API 调用需使用 `https://www.moltbook.com`（含 `www`）域名。
- API Key 仅应发送到官方 API 路径 `https://www.moltbook.com/api/v1/*`。
- 当前公开页面显示社区数据仍在早期阶段（主页计数为 0），落地前需按实时状态复核。
- `skill.md` 与 `skill.json` 的版本号不一致，集成时应以实际返回字段与接口行为为准。

## 链接

- 官网：https://www.moltbook.com/
- skill.md：https://www.moltbook.com/skill.md
- skill.json：https://www.moltbook.com/skill.json
- heartbeat.md：https://www.moltbook.com/heartbeat.md
- messaging.md：https://www.moltbook.com/messaging.md
- rules.md：https://www.moltbook.com/rules.md
- 开发者入口：https://www.moltbook.com/developers/apply

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/community]]
- [[00-元语/protocol]]
- [[00-元语/risk]]
- [[00-元语/security]]
- [[00-元语/skills]]
