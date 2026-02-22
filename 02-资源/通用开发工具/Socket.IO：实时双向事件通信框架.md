# Socket.IO：实时双向事件通信框架

## 文档信息

- 来源：
  - https://socket.io/
  - https://socket.io/docs/v4/
  - https://github.com/socketio/socket.io
- 开源协议：MIT

## 摘要

### 一句话总结
Socket.IO 是一个基于 MIT 协议开源的低延迟、双向事件通信库，提供自动降级、重连、广播和多路复用等开箱即用的功能，但并非纯 WebSocket 实现。

### 关键点
* **开源协议与轻量化**：采用 MIT 协议，协议开销极小，浏览器端打包体积仅为 10.4 kB（经 minified 和 gzip 压缩）。
* **智能传输选择**：自动在 HTTP long-polling、WebSocket 和 WebTransport 中选择最佳方案；优先尝试 WebSocket，受限时自动降级为 HTTP long-polling。
* **非纯 WebSocket 实现**：会在数据包中添加额外元数据，因此与纯 WebSocket 客户端和服务端互不兼容。
* **连接与状态管理**：内置心跳机制定期检查状态，断线时采用指数退避（exponential back-off）策略自动重连，避免服务端过载。
* **数据可靠性**：支持断线期间的数据包缓冲（重连后发送），以及带超时设置的消息确认（Acknowledgements）机制。
* **广播与多路复用**：支持向全体或特定客户端子集广播（兼容多节点扩展），并通过命名空间（Namespaces）在单一共享连接上拆分应用逻辑。
* **典型场景**：适用于聊天平台等需要实时双向通信的 Web 应用，以及需要划分不同逻辑频道的复杂应用。

### 风险与不足
* **协议不兼容限制**：无法直接与纯 WebSocket 服务端或客户端通信（若需纯 WebSocket，官方建议改用 `ws`、`µWebSockets.js` 或 `robust-websocket` 等库）。
* **移动端耗电问题**：由于需与服务端保持开放的 TCP 连接，会导致较高的电池消耗，明确不建议将其用于移动应用程序的后台服务（建议改用 FCM 等专用消息平台）。

## 功能与定位

Socket.IO 是一个支持在客户端与服务端之间进行低延迟、双向且基于事件通信的库。它能够根据浏览器能力和网络状况，自动在 HTTP long-polling、WebSocket 和 WebTransport 等底层传输方式中选择最佳方案。

需要注意的是，**Socket.IO 不是一个纯粹的 WebSocket 实现**。虽然它在可能的情况下会使用 WebSocket 进行传输，但它会在每个数据包中添加额外的元数据。因此，纯 WebSocket 客户端无法连接到 Socket.IO 服务端，Socket.IO 客户端也无法连接到纯 WebSocket 服务端。

## 典型使用场景

- 需要服务端与客户端实时、双向通信的 Web 应用（如聊天平台）。
- 需要在单一连接上划分不同逻辑频道（如区分普通用户与管理员频道）的复杂应用。

## 核心功能

- **自动降级与传输选择**：优先尝试建立低开销的 WebSocket 连接；若网络或代理限制导致 WebSocket 无法连接，会自动降级为 HTTP long-polling。
- **自动重连与心跳机制**：内置心跳机制定期检查连接状态。当客户端断开连接时，会使用指数退避（exponential back-off）延迟自动尝试重连，以避免对服务端造成过大压力。
- **数据包缓冲（Packet buffering）**：在客户端断开连接期间，数据包会被自动缓冲，并在重新连接成功后发送。
- **消息确认（Acknowledgements）**：提供发送事件并接收响应的便捷机制，同时支持设置超时时间。
- **广播机制（Broadcasting）**：服务端可以轻松地将事件发送给所有已连接的客户端，或仅发送给特定的客户端子集。该功能同样适用于多节点扩展场景。
- **多路复用（Multiplexing）**：通过命名空间（Namespaces）功能，允许在单一的共享连接上拆分应用程序逻辑（例如创建一个仅限授权用户加入的频道）。

## 特色与差异点

- **功能完备**：相比于使用纯 WebSocket 需要开发者自行实现重连、广播、消息确认等功能，Socket.IO 提供了经过实战检验的开箱即用方案。
- **低开销与轻量化**：协议开销极小（每条消息仅增加几个字节的元数据），且支持使用自定义解析器进一步减小体积。浏览器端打包体积仅为 10.4 kB（经 minified 和 gzip 压缩）。
- **高可扩展性**：能够轻松扩展至多个服务器节点运行。

## 使用方式概览

- 分为服务端实现与客户端实现两部分。
- 官方提供了基础示例，可直接在 Replit、StackBlitz 或 CodeSandbox 等在线平台上运行体验。
- 遇到问题可通过官方的 Troubleshooting guide（故障排除指南）、Stack Overflow 或 GitHub Discussions 寻求帮助。

## 限制与注意事项

- **协议不兼容**：如果需要纯 WebSocket 服务端，需改用 `ws` 或 `µWebSockets.js` 等库；如果需要纯 WebSocket 客户端，需考虑 `robust-websocket` 等包。
- **移动端耗电限制**：Socket.IO 会与服务端保持一个开放的 TCP 连接，这可能会导致较高的电池消耗。因此，**不建议**将其用于移动应用程序的后台服务（此类场景建议使用 FCM 等专用消息平台）。

## 链接

- https://socket.io/
- https://socket.io/docs/v4/
- https://github.com/socketio/socket.io

## 关联主题

- [[00-元语/protocol]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
