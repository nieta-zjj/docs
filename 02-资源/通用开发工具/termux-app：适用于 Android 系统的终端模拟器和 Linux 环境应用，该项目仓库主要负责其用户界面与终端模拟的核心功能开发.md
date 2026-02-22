# termux-app：适用于 Android 系统的终端模拟器和 Linux 环境应用，该项目仓库主要负责其用户界面与终端模拟的核心功能开发

## 文档信息
- 发布日期：2026-02-22
- 对象：GitHub 项目 `termux/termux-app`
- 项目主页：https://github.com/termux/termux-app
- 官方网站：https://f-droid.org/en/packages/com.termux
- 开源协议：Other
- 主要语言：Java
- 统计快照：Stars 50950，Forks 6066，Watchers 1418（抓取时间：2026-02-22）
- 版本快照：最新发布 v0.119.0-beta.3（发布时间：2025-05-22T22:48:54Z）

## 摘要
### 1) 一句话总结
Termux 是一款适用于 Android 系统的终端模拟器和 Linux 环境应用，该项目仓库主要负责其用户界面与终端模拟的核心功能开发。

### 2) 关键要点
*   **项目定位**：该仓库仅包含应用本身（UI 和终端模拟），应用内可安装的软件包由独立的 `termux-packages` 仓库管理。
*   **系统支持**：主要支持 Android 7 及以上版本；对 Android 5 和 6 仅提供不包含软件包更新的有限支持。
*   **生态插件**：核心应用支持多种可选插件扩展功能，包括 API、Boot、Float、Styling、Tasker 和 Widget。
*   **安装规则（核心限制）**：核心应用与所有插件使用相同的 `sharedUserId` (`com.termux`)，必须使用相同的签名密钥。用户必须从同一渠道（如全用 F-Droid 或全用 GitHub）安装所有组件，严禁混合安装，切换渠道前必须卸载所有现有组件。
*   **F-Droid 渠道**：提供约 180MB 的通用架构 APK，由 F-Droid 官方检测到 GitHub 更新后自行构建和发布，更新通常有数天延迟。
*   **GitHub 渠道**：提供 Release 和 Action 实时构建版本（包含通用和特定架构），APK 处于可调试状态。
*   **Google Play 渠道（实验性）**：针对 Android 11+ 设备的独立分支，为符合 Play 商店政策进行了大量调整，目前存在功能缺失和 Bug。
*   **调试功能**：v0.118.0 及以上版本支持在设置中调整日志级别（Log Level），官方建议调试完成后恢复为 `Normal` 以避免隐私数据泄露和性能损耗。

### 3) 风险与不足
*   **Android 12+ 兼容性风险**：在 Android 12 及以上版本中可能不稳定，系统会强制终止超过 32 个的幽灵进程或 CPU 占用过高的进程，导致终端出现 `[Process completed (signal 9)]` 错误。
*   **严重安全漏洞**：旧版本存在严重的全局可读漏洞（world-readable vulnerability），官方强烈建议尽快更新至 v0.118.0 或更高版本。
*   **GitHub 版本签名风险**：GitHub 上的 APK 使用已向社区公开的测试密钥签名，任何人均可使用该密钥伪造恶意更新。官方警告绝对不要从非官方渠道（如 Telegram 或社交媒体）下载 GitHub 构建版。
*   **应用商店更新冲突**：Google Play 版本移除了 `sharedUserId`，可能会尝试自动覆盖 F-Droid 版本的安装并导致失败，建议用户在 Play 商店中关闭该应用的自动更新。
*   **维护人力短缺**：官方在文档中明确标明正在寻找 Termux Android 应用的维护人员。

## 功能与定位
Termux - a terminal emulator application for Android OS extendible by variety of packages.

## 典型使用场景
- 作为通用开发工具用于工程协作与效率提升。
- 适用于个人与团队的日常研发流程。

## 核心功能
- 提供稳定的通用工程能力。
- 支持跨平台或多环境使用。
- 依赖开源社区持续迭代。

## 特色与差异点
- 仓库长期活跃，最近更新时间为 2026-02-22T12:50:36Z。
- 项目创建于 2015-10-23T09:42:46Z，具备持续迭代与社区沉淀。
- 以 `Java` 为主语言，聚焦该技术栈的工程实践。

## 使用方式概览
1. 阅读仓库 README 与官方文档，确认适配场景与依赖条件。
2. 按项目推荐方式完成安装与初始化，再从示例或最小流程开始验证。
3. 在生产使用前补齐权限控制、日志监控和版本固定策略。

## 限制与注意事项
- 使用前应先核对许可证、项目维护状态与安全边界。

## 链接
- 仓库：https://github.com/termux/termux-app
- 官网：https://f-droid.org/en/packages/com.termux
- README：https://raw.githubusercontent.com/termux/termux-app/master/README.md
- Releases：https://github.com/termux/termux-app/releases

## 关联主题
- [[00-元语/terminal]]
- [[00-元语/cli]]
- [[00-元语/security]]
- [[00-元语/risk]]
- [[00-元语/github]]
