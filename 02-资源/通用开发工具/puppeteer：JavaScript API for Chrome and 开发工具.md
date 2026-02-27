---
title: puppeteer：JavaScript API for Chrome and 开发工具
对象: GitHub 仓库
定位: 浏览器自动化与测试工具
项目主页: https://github.com/puppeteer/puppeteer
官方文档: https://pptr.dev/docs
API 文档: https://pptr.dev/api
许可证: Apache-2.0
---

## 摘要

Puppeteer 是由 Chrome Browser Automation 团队维护的 Node.js 库，提供基于 CDP 与 WebDriver BiDi 的高级 API，用于自动化控制 Chrome 和 Firefox。它适合端到端测试、浏览器流程自动化与调试集成，并通过版本与浏览器的配套发布来降低兼容性风险。

## 功能与定位

Puppeteer 提供面向 JavaScript 的浏览器自动化能力，默认以无头模式运行，也可按需连接现有浏览器实例。项目目标是为 CDP 和 WebDriver BiDi 提供参考实现，并在易用性、稳定性和安全性之间保持平衡。

## 典型使用场景

- 跨浏览器自动化测试（Chrome 与 Firefox）。
- 单页应用的自动化验证与交互回归。
- 页面导航、表单操作、元素定位、结果提取等浏览器流程自动化。
- 作为浏览器自动化底座，集成到调试或 AI 工具链（如 MCP 相关工具）。

## 特色与差异点

- 同时覆盖 CDP 与 WebDriver BiDi，两条协议路径可用于不同浏览器和场景。
- 提供 `puppeteer` 与 `puppeteer-core` 两种安装形态，便于快速上手或按需集成。
- 输入事件模拟强调接近真实用户行为，适合交互细节敏感的自动化任务。
- 相比 Selenium，Puppeteer 更聚焦 JavaScript/Node.js 生态与核心自动化能力，不以内建大规模编排为目标。

## 使用方式概览

- 通过库接口完成启动浏览器、创建页面、导航、交互、提取结果与关闭会话。
- 可根据项目需要选择自动下载配套浏览器，或仅使用核心库连接现有浏览器。
- 文档与 API 参考按版本维护，适合与具体发布版本配套查阅。

## 限制与注意事项

- 版本与浏览器配套较紧密，升级时应同步核对支持矩阵与文档版本。
- 运行环境对 Node.js 版本和系统依赖有要求，跨平台部署前需先做兼容性验证。
- 在企业策略或受限系统环境下，浏览器启动与权限配置可能带来额外适配成本。
- 本条目仅记录项目定位、能力边界和使用注意事项，不提供可执行攻击、绕过限制或规避授权的操作细节。

## 链接

1. https://github.com/puppeteer/puppeteer
2. https://pptr.dev/docs
3. https://pptr.dev/api
4. https://github.com/puppeteer/puppeteer/releases
5. https://pptr.dev/faq
6. https://pptr.dev/troubleshooting

## 关联主题

- [[00-元语/browser-automation]]
- [[00-元语/tool]]
- [[00-元语/github]]
