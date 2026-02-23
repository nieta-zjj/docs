---
title: "用Rust写游戏？这引擎太硬核了！"

站点: "微信公众平台"
原文链接: "https://mp.weixin.qq.com/s/Vt_Us5TCrGOIbOP-YNhgjg"
发布日期: "2025-10-01"
作者: "编程悟道"
---

## 摘要

### 1) 一句话总结
`macroquad` 是一款轻量级、零外部依赖的 Rust 2D 游戏引擎，通过极简 API 和原生的 `async/await` 机制，实现了同一套代码高效编译并跨平台部署至 PC、移动端及 Web 端。

### 2) 关键要点
*   **全平台覆盖**：支持 Windows、Linux、macOS、Android、iOS 和 Web (WASM)，开发者无需为不同平台编写条件编译代码。
*   **极简与轻量**：零外部依赖，编译速度极快（旧笔记本环境仅需 16 秒），API 设计灵感源自 `raylib`。
*   **异步主循环机制**：利用 Rust 原生的 `async/await`（如 `next_frame().await`）替代传统死循环，完美解决 Web 和 Android 平台阻塞线程的问题，且纯靠编译器生成状态机，无额外运行时开销。
*   **内置核心功能**：开箱即用，自带即时模式 UI (Immediate Mode UI)、粒子系统、物理示例模板以及 Tiled 瓦片地图支持。
*   **性能与体积指标**：支持自动几何批处理（可轻松渲染上万 2D 图元）；Release 模式下编译的 WASM 包体积可压缩至 1MB 以下。
*   **开发环境优化**：官方建议在 `Cargo.toml` 中为依赖项配置 `opt-level = 3`，可在保持快速编译的同时大幅提升开发模式下的图片加载速度。
*   **社区生态**：GitHub 拥有 4000+ Stars，提供专属的 Awesome Quads 资源列表，且拥有活跃的 Discord 开发者社区。

### 3) 风险与不足
*   **iOS 真机调试成本**：虽然 iOS 模拟器部署便捷，但真机运行仍需手动处理苹果的签名和 Provisioning Profile 配置。
*   **项目规模局限性**：引擎定位为“小而美”的极简工具链，适合独立开发者、原型验证或小型 2D 游戏，明确不适合开发大型（如《赛博朋克 2077》级别）的重度游戏。

## 正文

兄弟们，你们有没有过这种经历——辛辛苦苦写了个小游戏，结果发现只能在电脑上跑？想发给朋友玩，人家一句“我安卓能装吗？”直接把你问住。更别提什么 iOS、网页版了，打包过程简直比写代码还痛苦。

今天我要给大家安利一个能把 Rust 游戏一键部署到 PC、手机、浏览器的神器——**Macroquad**。它的名字听起来像某种量子物理实验，实际上却是一个让你笑着把游戏上线的跨平台快乐机器。

### 什么是 Macroquad？

简单来说，这是一个用 Rust 写的轻量级游戏引擎，主打一个 **“写一次，到处跑”**。它的口号是：“让每个 Rust 新手都能在 5 分钟内画出第一个红方块。”

*   **全平台支持**：Windows / Linux / macOS / Android / iOS / 网页（WASM）
*   **极速编译**：零外部依赖，老旧笔记本 16 秒即可搞定编译。
*   **极简 API**：灵感来自大名鼎鼎的 raylib。
*   **功能丰富**：自带即时模式 UI、粒子系统、瓦片地图支持。
*   **一键部署**：部署过程极其简单，告别繁琐配置。

### 三步起飞：从零到“IT WORKS!”只要 30 秒

**第一步：创建项目**
```bash
cargo init --bin my_game
```

**第二步：添加依赖（Cargo.toml）**
```toml
[dependencies]
macroquad = "0.4"
```

**第三步：扔进这段魔法代码**
```rust
use macroquad::prelude::*;

#[macroquad::main("BasicShapes")]
async fn main() {
    loop {
        clear_background(RED);
        draw_line(40.0, 40.0, 100.0, 200.0, 15.0, BLUE);
        draw_rectangle(screen_width() / 2.0 - 60.0, 100.0, 120.0, 60.0, GREEN);
        draw_circle(screen_width() - 30.0, screen_height() - 30.0, 15.0, YELLOW);
        draw_text("IT WORKS!", 20.0, 20.0, 30.0, DARKGRAY);
        next_frame().await
    }
}
```

运行 `cargo run`，噔噔噔噔！你的窗口里就会蹦出一行字：“IT WORKS!” 外加一堆彩色图形。

### 为什么游戏主循环要用 async/await？

很多新人看到代码里的 `async fn main()` 和 `next_frame().await` 都会瞳孔地震：“我只想画个圆，为什么要学 futures？难道是为了炫技？”

其实这背后是个跨平台的大智慧。在 PC 上，你可以写一个死循环来驱动游戏主逻辑，但在 **网页（WASM）和 Android** 上，这种“无限循环”是被禁止的——会直接卡死线程！

传统 C++ 的解法是用 Asyncify 黑科技来回挂起执行栈。而 Rust 原生就有 `async/await`，天然支持“暂停函数执行”，完美解决这个问题。

重点来了：Macroquad 的 async 实现没有引入任何运行时或 executor，纯靠编译器生成状态机，所以你写的每一帧都像打了鸡血一样高效。总结一句话：**`async/await` 不是负担，而是为了让“一行代码跑六端”成为可能的技术巧思。**

### 跨平台部署：两行命令搞定手机与网页

最爽的是，你不需要为不同平台写条件编译代码！同一套逻辑，原封不动跑在所有设备上。

**想发网页或安卓？**
```bash
rustup target add wasm32-unknown-unknown
cargo build --target wasm32-unknown-unknown --release
```
配合一个简单的 HTML 文件，丢到服务器就能在线玩！

**想上 iOS？**
```bash
cargo build --target x86_64-apple-ios --release
xcrun simctl install booted MyGame.app
xcrun simctl launch booted com.mygame
```
虽然真机签名还得折腾一下 Provisioning Profile，但模拟器体验已经丝滑得不像话。

### 性能与特性：小而美的“瑞士军刀”

来看看 Macroquad 的几个硬核数据：

*   **编译时间（clean build）**：老古董 X230 笔记本仅需 16 秒。
*   **依赖数量**：几乎为零，不拖家带口。
*   **渲染性能**：自动几何批处理，2D 场景轻松上万图元。
*   **包大小**：Release 模式下 WASM 可压缩至 <1MB。

**💡 隐藏技巧**：在 `Cargo.toml` 加上这一段配置，可以让开发模式下的图片加载速度提升数倍，同时保持快速编译，鱼和熊掌兼得：
```toml
[profile.dev.package.'*']
opt-level = 3
```

别看 Macroquad 名字低调，功能可一点不含糊：
*   ✅ 内置 Immediate Mode UI（做工具、编辑器很方便）
*   ✅ 物理示例模板（physics-platformer 示例开箱即用）
*   ✅ 粒子系统（particles 目录直接抄作业）
*   ✅ Tiled 地图支持（2D 游戏开发者狂喜）
*   ✅ Profiler 工具帮你找性能瓶颈

目前社区生态也在快速增长，GitHub 上已经有 4000+ Stars，还有专门的 Awesome Quads 资源列表。Discord 群里开发者也很活跃，提问基本秒回，氛围堪比大学自习室里的学霸互助小组。

### 结语：属于独立开发者的“小而美”时代回来了

在这个 Unity 动不动就收费、Unreal 学习成本爆炸的时代，Macroquad 给我们提供了一种新的可能性：**用最少的配置，最快的反馈，最干净的代码，做出能跑遍全平台的小游戏。**

它不适合做《赛博朋克 2077》，但它绝对适合你周末写着玩、发朋友圈炫耀、甚至上线 itch.io 换点咖啡钱的那些小游戏。

如果你是一个想入门游戏开发的 Rust 爱好者、喜欢极简主义工具链的工程师，或者只是想做个像素风小游戏哄对象开心的人，那 Macroquad 就是你此刻最该尝试的那把“瑞士军刀”。赶紧去试试吧，说不定下一个爆款微信小游戏，就是你用 Rust 写出来的！

### 彩蛋：快速预览 & 部署指南

**本地启动 WASM 服务（3行命令把游戏发到网页）：**
```bash
cargo install basic-http-server
basic-http-server .
```
访问 `http://localhost:4000` 即可分享给朋友玩！

**参考资料与学习链接：**
*   **官网文档**：https://macroquad.rs
*   **GitHub 地址**：https://github.com/not-fl3/macroquad
*   **官方示例**：https://github.com/not-fl3/macroquad/tree/master/examples
*   **Awesome Quads**：https://github.com/ozkriff/awesome-quads
*   **raylib**：https://www.raylib.com/
*   **Asyncify**：https://kripken.github.io/blog/wasm/2019/07/16/asyncify.html

## 关联主题

- [[00-元语/game]]
- [[00-元语/wasm]]
- [[00-元语/软件工程]]
