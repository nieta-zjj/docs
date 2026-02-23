---
title: "如何用代码从 ChatGPT 网页中获取原始 Markdown 格式？"

来源: "https://baoyu.io/blog/fontend/how-to-get-markdown-from-chatgpt-webpage"
发布日期: "2023-10-29"
作者: "宝玉"
---

## 摘要

**一句话总结**
本文介绍了通过代码从 ChatGPT 网页端获取原始 Markdown 内容的两种方法：使用 HTML 转换库（如 Turndown）或借助 React Dev Tool 全局 Hook 提取组件内部状态。

**关键要点**
* ChatGPT 网页端默认将 Markdown 解析为 HTML，无法直接通过代码模拟点击复制按钮来获取原始 Markdown。
* 方法一：使用 Turndown 等第三方库将网页 HTML 转换回 Markdown 格式。
* 方法一衍生版：通过提示词要求 ChatGPT 将所有输出内容包裹在代码块（```）中，使其不被解析为 HTML。
* 方法二：利用 React 暴露的全局变量 `__REACT_DEVTOOLS_GLOBAL_HOOK__` 获取数据。
* ChatGPT 前端基于 Next.js 和 React 开发，默认支持 React Dev Tools。
* 通过遍历 React 组件树（Fiber 树），可以找到并提取包含原始 Markdown 消息的组件内部状态（如 `fiberNode.memoizedProps?.parts`）。
* 文章提供了一段 JavaScript 参考代码，演示了如何在控制台中遍历该 Hook 并提取消息数组。

**风险与不足**
* 使用 Turndown 转换 HTML 时，结果可能与原始 Markdown 有出入，且该库默认不支持表格转换。
* 要求 ChatGPT 输出代码块的方法，在输出内容本身包含“```”时会导致格式错乱，最终仍需解析完整的 HTML。
* 使用 React Hook 方法时，若 ChatGPT 前端更改了属性名称或 state 名称，会导致获取失败。
* React Hook 方法默认仅支持在控制台或页面直接执行；若在浏览器插件中使用，无法直接拿到该全局变量，必须通过 `RegisteredContentScript` 执行脚本并进行内部通信才能间接获取。

## 正文

ChatGPT 在输出消息时，会将 Markdown 格式解析成 HTML，虽然可以点击复制按钮去复制原始的 Markdown，但是用代码操作时，却无法通过模拟点击去复制 Markdown。

![Image 1](https://baoyu.io/images/frontend/how-to-get-markdown-from-chatgpt-webpage/copy-markdown.png)

那么有没有办法通过代码获取到消息的原始 Markdown 呢？

两种方法，使用场景各有不同：

1.   借助 [Turndown](https://github.com/mixmark-io/turndown) 这样的库将 HTML 转成 Markdown，缺点就是转换后可能和原始 Markdown 有出入，尤其是 Turndown 默认不支持表格的转换

方法 1 还有一个衍生版本，就是要求 ChatGPT 在输出内容时，将要输出的所有内容都放在 ``` 对中，这样它就不会解析里面的 Markdown，当成代码块来输出原始格式。这种方法大部分场景是适用的，就是有一个小问题，如果要输出的内容中正好有 ``` ，就会有多个代码块，格式会乱掉，一部分在代码块，一部分在外面，结果还是要解析 完整的 HTML。

1.   借助 React Dev Tool 的 Hook

这种方法可能绝大多数人都没听说过。React 为了支持 React Dev Tool，暴露了一个 Hook，是个全局变量，名称是“`__REACT_DEVTOOLS_GLOBAL_HOOK__`”，通过它可以注入到 React 组件内部，拿到组件内部的状态。这就是为什么通过 React Dev Tool 能看到每一个组件的属性和状态。

![Image 2](https://baoyu.io/images/frontend/how-to-get-markdown-from-chatgpt-webpage/react-dev-tool.png)

ChatGPT 的网页是 Nextjs 和 React 开发的，默认是支持 React Dev Tools 的，所以只要写代码去遍历“`__REACT_DEVTOOLS_GLOBAL_HOOK__`”，那么就能拿到所有组件的内部状态，然后找到有消息原始 Markdown 内容的组件，就可以得到原始的 Markdown 信息。

![Image 3](https://baoyu.io/images/frontend/how-to-get-markdown-from-chatgpt-webpage/react-dev-tool-hook.png)

但这种方法有两个缺点，一个就是 ChatGPT 的前端换属性名称或者 state 名称了，可能就拿不到了；另外就是这种方法默认只支持 console，或者直接页面执行，在外部浏览器插件的话，拿不到 `__REACT_DEVTOOLS_GLOBAL_HOOK__` 变量，必须通过 RegisteredContentScript 的方法去执行一段脚本，再去做一些内部通信，才能间接获取到，当然理论上还是可以拿到的。

参考代码如下：

(function () {

const getMessagesWithReactDevTools = () => {

const messages = [];

function traverseComponentTree(fiberNode) {

let parts = fiberNode.memoizedProps?.parts;

if (Array.isArray(parts)) {

// console.log(fiberNode, parts);

if (typeof parts[0] === "string") {

messages.push(parts.join(""));

}

}

let child = fiberNode.child;

while (child) {

traverseComponentTree(child);

child = child.sibling;

}

}

const devtools = window. __REACT_DEVTOOLS_GLOBAL_HOOK__ ;

const rootFiber = devtools?.getFiberRoots(1)?.values()?.next()

?.value?.current;

if (rootFiber) {

traverseComponentTree(rootFiber);

} else {

console.error("No root fiber found");

}

return messages;

};

const messages = getMessagesWithReactDevTools();

console.log(messages);

})();

## 关联主题

- [[00-元语/ChatGPT]]
- [[00-元语/react]]
- [[00-元语/markdown]]
- [[00-元语/browser-automation]]
- [[00-元语/web-crawling]]
- [[00-元语/prompt]]
