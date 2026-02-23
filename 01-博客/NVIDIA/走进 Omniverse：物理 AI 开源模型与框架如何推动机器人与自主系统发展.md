---
title: "走进 Omniverse：物理 AI 开源模型与框架如何推动机器人与自主系统发展"
---

## 摘要

**1) 一句话总结**
NVIDIA 推出了一套涵盖高保真仿真、合成数据生成与边缘部署的开源物理 AI 模型与框架，结合 OpenUSD 和 Omniverse，全面加速各行业机器人与自主系统的开发及“仿真到现实”的落地。

**2) 关键要点**
*   **核心技术栈发布**：NVIDIA 在 CES 2026 上展示了全新的物理 AI 技术栈，包含 Cosmos 世界模型、Isaac 框架（含全新 Isaac Lab-Arena）、面向自动驾驶的 Alpamayo 组合，以及 OSMO 编排框架。
*   **底层基础设施**：OpenUSD 标准化了 3D 数据的共享方式以构建精确的数字孪生，NVIDIA Omniverse 库则为整个技术栈提供真实的基准仿真支持。
*   **重型设备应用**：Caterpillar（卡特彼勒）利用 Nemotron 开源模型和 Jetson Thor 模块开发了重型车辆语音 AI 助手，并使用 Omniverse 构建工厂和工地的数字孪生以优化安全与效率。
*   **医疗手术机器人**：LEM Surgical 已获 FDA 批准的 Dynamis 脊柱手术机器人采用 Jetson AGX Thor 和 Holoscan 进行实时处理，并利用 Cosmos Transfer 生成合成数据进行数字孪生仿真训练。
*   **人形与服务机器人**：NEURA Robotics 和 AgiBot（智元机器人）结合 Isaac Sim、Isaac Lab 以及 Cosmos 模型（如 Predict 2），在数字孪生中训练其人形机器人（如 4NE1、Genie2），以实现更可靠的策略迁移。
*   **社交机器人推理**：Intbot 采用 Cosmos Reason 2 开源模型，使社交机器人能够识别社交线索和安全上下文，超越了传统的脚本任务限制。
*   **全新 Agile 引擎**：NVIDIA 推出基于 Isaac Lab 的 Agile 移动操作引擎，封装了完整的“仿真到现实”工作流，支持在 Unitree G1 和 LimX Dynamics TRON 等平台上训练强化学习策略。
*   **开源生态整合**：Hugging Face 将 Isaac GR00T N 模型和 Isaac Lab-Arena 集成至 LeRobot 生态系统；ROBOTIS 利用 Isaac 技术构建了开源的“仿真到现实”管道，加速视觉语言动作（VLA）模型向硬件的直接部署。

## 正文

*编者按：本文是“走进 Omniverse”系列文章之一，该系列致力于探讨开发者、3D 从业者和企业如何利用 OpenUSD 和 NVIDIA Omniverse 的最新进展来转变其工作流程。*

开源已成为推动机器人技术和自主系统创新的关键力量。通过提供从仿真框架到 AI 模型的关键基础设施访问权限，NVIDIA 正在赋能协同开发，从而加速打造更安全、更强大的自主系统。

在早些时候的 CES 展会上，NVIDIA 推出了一套全新的开源物理 AI 模型和框架，旨在加速人形机器人、自动驾驶汽车及其他物理 AI 具身实体的开发。这些工具涵盖了机器人开发的整个生命周期——从高保真世界仿真、合成数据生成，到云原生编排和边缘部署——为开发者提供了一个模块化的工具包，帮助他们构建能够在现实世界中推理、学习和行动的自主系统。

OpenUSD 提供了一个通用框架，标准化了 3D 数据在这些物理 AI 工具中的共享方式，使开发者能够构建精确的数字孪生，并在从仿真到部署的过程中无缝复用它们。基于 OpenUSD 构建的 NVIDIA Omniverse 库，则作为提供真实基准仿真的源头，为整个技术栈提供支持。

### 从实验室走向展会现场：CES 上的创新应用

在 CES 2026 上，开发者们将 NVIDIA 物理 AI 技术栈从实验室带到了展会现场，展示了从重型设备、工厂助手到社交和服务机器人的各类机器设备。

该技术栈整合了多项核心技术：NVIDIA Cosmos 世界模型；包括用于策略评估的全新 Isaac Lab-Arena 开源框架在内的 NVIDIA Isaac 技术；面向自动驾驶汽车的 NVIDIA Alpamayo（包含 AI 模型、仿真框架和物理 AI 数据集的开源组合）；以及用于在不同计算环境中编排训练的 NVIDIA OSMO 框架。

以下是各行业领先企业的实际应用案例：

*   **Caterpillar（卡特彼勒）：** 其 Cat AI 助手由用于智能体 AI 的 NVIDIA Nemotron 开源模型驱动，并在 NVIDIA Jetson Thor 边缘 AI 模块上运行，将自然语言交互直接引入重型车辆的驾驶室。操作员可以提出类似“Hey Cat”的问题并获得分步指导，还能通过语音调整安全参数。在幕后，Caterpillar 利用 Omniverse 库构建工厂和工地的数字孪生，以模拟布局、交通模式和多机器工作流。这些洞察在变更部署到实际工地前会反馈给设备和车队，从而使 AI 辅助操作更加安全高效。
*   **LEM Surgical：** 展示了其 Dynamis 机器人手术系统，该系统已获得 FDA 批准并常规应用于脊柱手术临床。下一代系统采用 NVIDIA Jetson AGX Thor 进行计算，使用 NVIDIA Holoscan 进行实时传感器处理，并利用 NVIDIA Isaac for Healthcare 训练其自主机械臂。此外，LEM Surgical 还使用 NVIDIA Cosmos Transfer（一个支持基于物理的合成数据生成的完全可定制开源世界模型）来生成合成训练数据，并使用 NVIDIA Isaac Sim 框架进行数字孪生仿真。作为一款专为硬组织手术设计的双臂人形手术机器人，Dynamis 系统能够模仿人类外科医生的灵活性，以更高的精度完成复杂的脊柱手术，从而减轻医生和助手的体力消耗。
*   **NEURA Robotics：** 正在基于完整的 NVIDIA 技术栈构建认知机器人。在将其 4NE1 人形机器人和 MiPA 服务机器人部署到家庭和工作场所之前，该公司使用 Isaac Sim 和 Isaac Lab 在基于 OpenUSD 的数字孪生中对它们进行训练。该公司还使用 NVIDIA Isaac GR00T-Mimic 为其平台对 Isaac GR00T 基础模型进行后训练。此外，NEURA 正在与 SAP 和 NVIDIA 合作，利用 Mega NVIDIA Omniverse Blueprint，在将 SAP 的 Joule 智能体及相关行为部署到现实车队之前，先在复杂逼真的操作场景中模拟和优化机器人行为。
*   **AgiBot（智元机器人）：** 使用 NVIDIA Cosmos Predict 2 作为其 Genie Envisioner (GE-Sim) 平台的世界建模主干，使该平台能够生成基于强大视觉和物理先验的动作条件视频。将这些数据与 Isaac Sim、Isaac Lab 结合，并在 AgiBot 自有数据上进行后训练，使得在 Genie Envisioner 中开发的策略能够更可靠地迁移到 Genie2 人形机器人和搭载 Jetson Thor 的紧凑型桌面机器人上。
*   **Intbot：** 正在使用 NVIDIA Cosmos Reason 2 开源模型为其社交机器人赋予对现实世界的“第六感”——利用该模型的推理能力来识别简单的社交线索和安全上下文，这超越了简单的脚本任务。在其 Cosmos Cookbook 方案中，Intbot 展示了推理视觉语言模型如何帮助机器人决定何时说话以及如何更自然地与人类互动。

### 机器人开发者如何利用全新工具包与框架

NVIDIA 最近推出了 Agile，这是一个基于 Isaac Lab 的人形机器人移动操作（loco-manipulation）引擎。它封装了一个经过“仿真到现实（sim-to-real）”验证的完整工作流，用于在 Unitree G1 和 LimX Dynamics TRON 等平台上训练稳健的强化学习策略。

机器人开发者可以使用 Agile 内置的任务配置、用于决策的马尔可夫决策过程（MDP）数学模型、训练实用程序和确定性评估工具来调整策略。随后，开发者可以在 Isaac Lab 中对这些策略进行压力测试，并更可靠、更高效地将运动和全身行为迁移到现实世界的机器人上。

**Hugging Face** 与 NVIDIA 正在通过将 NVIDIA Isaac GR00T N 模型和仿真框架集成到 LeRobot 生态系统中，将双方的机器人社区结合起来。开发者现在可以直接在 LeRobot 中访问 Isaac GR00T N1.6 模型和 Isaac Lab-Arena，从而简化策略的训练和评估。此外，Hugging Face 的开源 Reachy 2 人形机器人现在与 NVIDIA Jetson Thor 完全互操作，支持直接部署高级视觉语言动作（VLA）模型，以实现稳健的现实世界性能。

**ROBOTIS** 是一家领先的智能伺服系统、工业执行器、机械臂、开源人形平台和教育机器人套件开发者。该公司使用 NVIDIA Isaac 技术构建了一个开源的“仿真到现实”管道。该工作流从 Isaac Sim 中的高保真数据生成开始，使用 GR00T-Mimic 扩充训练集，然后微调基于 VLA 的 Isaac GR00T N 模型并直接部署到硬件上——这大大加速了从仿真向稳健的现实世界任务过渡的过程。

### 探索更多资源与学习路径

想要深入了解 OpenUSD 和机器人开发，可以探索以下资源：

*   阅读技术博客，了解如何使用 NVIDIA Isaac 和 GR00T N1.6 开发通用人形机器人功能。
*   阅读技术博客，了解如何使用 NVIDIA Isaac Lab – Arena 在仿真中评估通用机器人策略。
*   通过分为两部分的视频教程，学习如何对 Isaac GR00T 进行后训练。
*   观看 NVIDIA 创始人兼首席执行官黄仁勋的 CES 特别演讲。
*   通过自定进度的机器人学习路径，提升机器人开发技能。
*   参与 Cosmos Cookoff，这是一项动手实践的物理 AI 挑战赛，开发者将使用 Cosmos Reason 来驱动机器人、自主系统和视觉 AI 工作流。

## 相关文档

- [[01-博客/NVIDIA/英伟达CEO黄仁勋：万物皆将以虚拟孪生形式呈现|英伟达CEO黄仁勋：万物皆将以虚拟孪生形式呈现]]；关联理由：延伸思考；说明：该文从工业虚拟孪生与世界模型角度补充了本文关于 OpenUSD 与 Omniverse 的产业落地背景。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/hardware-control]]
- [[00-元语/workflow]]
- [[00-元语/multimodal]]
