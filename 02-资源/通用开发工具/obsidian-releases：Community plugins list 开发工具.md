---
title: obsidian-releases：Community plugins list 开发工具
对象: GitHub 仓库
项目主页: https://github.com/obsidianmd/obsidian-releases
来源:
  - https://github.com/obsidianmd/obsidian-releases/blob/master/README.md
  - https://github.com/obsidianmd/obsidian-releases/blob/master/community-plugins.json
  - https://github.com/obsidianmd/obsidian-releases/blob/master/community-css-themes.json
  - https://github.com/obsidianmd/obsidian-releases/blob/master/desktop-releases.json
---

## 摘要

Obsidian Releases 是 Obsidian 官方用于托管桌面版发布信息、维护社区插件与主题目录的基础设施仓库（不包含核心源代码）。

- 仓库定位是官方发布与目录分发基础设施，不是 Obsidian 核心源码仓库。
- 通过 `community-plugins.json` 和 `community-css-themes.json` 维护插件与主题目录元数据。
- 通过 `desktop-releases.json` 提供桌面正式版与 Beta 版的版本号、下载链接、校验信息。
- 客户端基于目录字段做搜索与发现，但插件详情与安装文件从开发者各自仓库拉取。
- 支持版本兼容判断：当最新版插件不兼容时，可根据 `versions.json` 查找兼容历史版本。
- 面向开发者的提交入口是 Pull Request，要求按 JSON 规范提交插件或主题条目。
- 仓库不接受 Issues：插件问题应提交到对应插件仓库，核心产品问题转官方社区。

## 功能与定位

`obsidian-releases` 是 Obsidian 官方维护的发布与目录仓库，核心作用是承载桌面端版本发布元数据，并维护社区插件和主题的官方目录。它不是 Obsidian 应用本体的源码仓库，而是连接客户端、插件开发者与分发流程的公共基础设施。

## 典型使用场景

- Obsidian 客户端读取目录与发布元数据，用于插件搜索、版本匹配与安装拉取。
- 插件或主题开发者通过 Pull Request 将作品纳入官方社区目录。
- 在插件版本与客户端版本不匹配时，依赖兼容性信息进行可用版本回退。

## 核心功能

- 目录管理：在 `community-plugins.json` 中维护插件 ID、名称、作者、描述、仓库地址等字段。
- 主题管理：在 `community-css-themes.json` 中维护主题名称、作者、仓库、截图与模式信息。
- 发布信息管理：在 `desktop-releases.json` 中维护正式版和 Beta 版的版本、最低支持版本、下载地址、哈希与签名。
- 分发流程支撑：客户端从目录发现插件，再从插件作者仓库读取 `manifest.json`、`README.md` 与发布文件完成安装。

## 特色与差异点

- 采用“官方目录 + 开发者仓库分发”的组合模式，目录统一收录，产物仍由插件作者维护。
- 目录字段直接服务于客户端搜索与安装逻辑，不只是静态展示列表。
- 同时覆盖稳定版与 Beta 发布信息，并提供校验字段用于发布完整性验证。

## 使用方式概览

- 开发者按仓库约定的 JSON 字段格式追加条目并提交 Pull Request。
- 插件被收录后，用户可在 Obsidian 社区插件入口检索并安装。
- 若提交审核规范需要进一步参考，文档指向 Obsidian Developer Docs 的插件发布与评审指南页面。

## 限制与注意事项

- 仓库明确不接受 Issue；问题反馈按对象分流到插件仓库或官方社区。
- 仓库不包含 Obsidian 核心源代码，无法用于核心应用代码级修改。
- 本条目仅整理公开可验证信息，不复述超出来源材料的实现细节。

## 链接

- 仓库主页: https://github.com/obsidianmd/obsidian-releases
- README: https://github.com/obsidianmd/obsidian-releases/blob/master/README.md
- 插件目录数据: https://github.com/obsidianmd/obsidian-releases/blob/master/community-plugins.json
- 主题目录数据: https://github.com/obsidianmd/obsidian-releases/blob/master/community-css-themes.json
- 桌面版发布数据: https://github.com/obsidianmd/obsidian-releases/blob/master/desktop-releases.json
- Obsidian Developer Docs: https://docs.obsidian.md

## 关联主题

- [[00-元语/github]]
- [[00-元语/community]]
- [[00-元语/desktop-client]]
