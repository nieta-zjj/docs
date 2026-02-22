# yt-dlp：跨站点音视频下载工具

## 文档信息
- 对象：Git 项目
- 发布日期：2026-02-22
- 来源：
  - https://github.com/yt-dlp/yt-dlp
  - https://raw.githubusercontent.com/yt-dlp/yt-dlp/master/README.md
  - https://raw.githubusercontent.com/yt-dlp/yt-dlp/master/LICENSE
  - https://github.com/yt-dlp/yt-dlp/wiki
- 开源协议：Unlicense
- 许可补充：README 说明部分发布文件会因打包或第三方组件引入 GPLv3+、MIT、ISC 等其他许可证约束。
- 输入备注：用户附带数字 `34440`；当前 `https://github.com/yt-dlp/yt-dlp/issues/34440` 返回 404，无法确认为公开可访问 issue。

## 摘要
**1) 一句话总结**
yt-dlp 是一个由 `youtube-dl` 演进而来的跨平台命令行音视频下载器，提供强大的多站点下载控制、后期处理功能，并支持作为 Python 模块嵌入使用。

**2) 核心要点**
- 项目背景：作为 `youtube-dl` 的分支（基于已停更的 `youtube-dlc`），定位于提供更强的下载能力和更广的站点支持。
- 运行环境：依赖 Python 运行，支持 Python 3.10+ (CPython) 与 3.11+ (PyPy)。
- 外部依赖：在完整音视频处理场景下，`ffmpeg` 和 `ffprobe` 属于关键依赖。
- 使用形态：提供 Windows、Linux/BSD 和 macOS 的多种分发形态，同时支持命令行使用与 Python 嵌入调用。
- 核心能力：覆盖多站点下载、格式与字幕选择、输出模板、认证、后处理、元数据处理等能力。
- 扩展能力：支持 SponsorBlock、extractor 参数与插件扩展。
- 版本通道：提供 `stable`、`nightly`、`master` 三个通道，面向不同稳定性需求。

**3) 风险与缺漏**
- 合规与版权风险：该类工具可能被用于处理受版权或平台条款限制的内容，需严格遵守当地法律与平台规则。
- 许可证复杂性：仓库核心为 Unlicense，但部分发布文件可能受其他许可证约束。
- 文档缺漏：编号 `34440` 的 issue 在 2026-02-22 返回 HTTP 404，当前无法访问。

## 功能与定位
yt-dlp 是一个面向命令行和自动化场景的音视频下载工具项目，强调在多站点环境中的获取能力、格式控制与后处理能力。项目同时提供脚本化调用入口，适合开发者在工具链或服务流程中进行程序集成。

## 典型使用场景
- 在个人或团队工作流中统一处理公开可访问媒体资源的下载与整理。
- 在内容处理流程中结合格式筛选、元数据写入与后处理能力完成资产归档。
- 在 Python 项目中将其作为模块调用，构建自动化媒体处理环节。

## 核心功能
- 多站点支持：通过提取器体系维护站点兼容能力。
- 下载控制：提供格式、清晰度、字幕、输出模板等维度的细粒度控制。
- 后处理链路：支持下载后进行音视频合并、转换与元数据处理。
- 扩展机制：支持插件、extractor 参数与相关扩展能力。
- 工程集成：既可独立运行，也可嵌入 Python 程序。

## 特色与差异点
- 继承 `youtube-dl` 生态并持续演进，文档体系完整。
- 版本发布分通道管理，便于在稳定性和新特性之间做取舍。
- 兼顾终端用户与开发者两类角色，覆盖 CLI 与嵌入式调用场景。

## 使用方式概览
1. 从仓库 README 与 Wiki 了解安装方式、依赖要求与参数体系。
2. 根据业务需求选择稳定性通道和运行形态。
3. 在符合授权和合规前提下，将项目接入本地或服务端媒体处理流程。
4. 若需二次分发或商业集成，先核对发布形态对应的许可证边界。

## 限制与注意事项
- 使用边界：需遵守版权法、服务条款及所在地区法律法规。
- 许可边界：发布文件的许可可能与仓库核心许可不同，分发前应逐项核对。
- 可用性边界：站点规则与接口变化会影响工具行为，需持续关注项目更新。
- 仓库边界：本仓库仅记录项目定位与风险提示，不复述可操作细节、命令、配置或规避限制内容。

## 链接
- 仓库：https://github.com/yt-dlp/yt-dlp
- README：https://raw.githubusercontent.com/yt-dlp/yt-dlp/master/README.md
- LICENSE：https://raw.githubusercontent.com/yt-dlp/yt-dlp/master/LICENSE
- Wiki：https://github.com/yt-dlp/yt-dlp/wiki
- 支持站点列表：https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md
- 编号核验：https://github.com/yt-dlp/yt-dlp/issues/34440

## 相关文档

- [[02-资源/通用开发工具/Seal：基于 yt-dlp 的开源 Android 音视频下载工具，采用纯 Kotlin 编写|Seal：基于 yt-dlp 的开源 Android 音视频下载工具，采用纯 Kotlin 编写]]；关联理由：上下游；说明：Seal 以 yt-dlp 为下载核心，属于上游能力被下游应用封装的直接关系。

## 关联主题

- [[00-元语/cli]]
- [[00-元语/audio]]
- [[00-元语/video]]
- [[00-元语/github]]
- [[00-元语/compliance]]
- [[00-元语/workflow]]
