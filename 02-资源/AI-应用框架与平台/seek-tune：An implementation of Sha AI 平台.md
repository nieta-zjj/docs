---
title: seek-tune：An implementation of Sha AI 平台
对象: GitHub 仓库
项目主页: https://github.com/cgzirim/seek-tune
开源协议: MIT
来源: https://github.com/cgzirim/seek-tune
---

## 摘要

SeekTune 是一个基于 Shazam 思路实现的开源音乐识别项目，使用音频指纹完成歌曲匹配，并结合 Spotify 与 YouTube 相关接口能力构建“检索、入库、匹配、获取音频”的一体化流程。项目以后端 Golang、前端 Node.js（含 Wasm 组件）为主，支持 Docker 部署，默认使用 SQLite，也可切换到 MongoDB。

## 功能与定位

SeekTune 的核心定位是“可自托管的音乐识别与指纹检索实现”，主要面向需要验证或学习音频指纹识别流程的开发者。根据仓库 README，可实现歌曲识别、指纹入库和结果匹配，并提供与外部音乐平台相关的集成能力。

## 典型使用场景

- 对本地音频样本进行歌曲识别与相似匹配。
- 维护自己的音频指纹数据库，用于持续检索。
- 作为教学或实验项目，理解 Shazam 类算法在工程中的落地方式。

## 核心功能

- 音频指纹提取与匹配，返回候选结果与匹配得分。
- 本地音频文件批量入库，支持后续检索。
- 可在默认 SQLite 与 MongoDB 之间切换存储后端。
- 提供前后端分离实现与容器化部署配置。

## 特色与差异点

- 项目目标明确，聚焦“音乐识别 + 数据入库 + 检索匹配”闭环。
- 同时提供本地部署与容器化运行路径，便于快速验证。
- 仓库包含 `server/`、`client/`、`wasm/` 目录，体现后端、前端与 WebAssembly 的组合实现。

## 使用方式概览

- 依赖项以 README 为准，重点包括 Golang、Node.js、FFmpeg 与 YT-DLP。
- 需要配置 Spotify 开发者凭据后，才能启用对应的集成能力。
- 可选择容器化方式或本地方式运行前后端服务。

## 限制与注意事项

- 仓库 `releases` 页面当前无正式发布版本，使用时应以源码与 README 为主要依据。
- 项目能力依赖外部平台与第三方工具的可用性，稳定性受外部服务状态影响。
- 涉及音乐下载与内容处理时，应自行确认版权、平台条款与适用法律边界。
- 本仓库仅做项目定位与能力归档，不复述高风险或可能被滥用的可操作细节。

## 链接

- GitHub 仓库：https://github.com/cgzirim/seek-tune
- README：https://github.com/cgzirim/seek-tune/blob/main/README.md
- Releases：https://github.com/cgzirim/seek-tune/releases
- License：https://github.com/cgzirim/seek-tune/blob/main/LICENSE

## 关联主题

- [[00-元语/audio]]
- [[00-元语/wasm]]
- [[00-元语/self-hosting]]
- [[00-元语/github]]
