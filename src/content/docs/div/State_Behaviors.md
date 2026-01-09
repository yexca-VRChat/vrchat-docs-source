---
title: State Behaviors
---

> Unity 状态行为脚本

## 添加

在“动画器-图层”点击一个状态，在“检查器”中点击“添加行为”即可看到 VRC 的脚本

## Animator Layer Controller

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.6dk3lrhp6lc0.webp)

可以改变某一图层的权重(权重为 1 时正常播放)

层权重将保持不变，直到某个其他状态再次运行此状态行为并将其重置

| 名称             | Purpose(目的)                                                                         |
| ---------------- | ------------------------------------------------------------------------------------- |
| 可播放(Playable) | 选择要改变的动画层                                                                    |
| 图层(Layer)      | 选择影响第几个图层(从 0 开始) ，第 0 层(即第一个)无法被改变(始终为 1)                 |
| Goal Weight      | 想要改变的权重                                                                        |
| Blend Duration   | Define the time period (in seconds) that you want the blend to take. 0 means instant. |
| Debug String     | 调试字符串，当此脚本运行时将此字符串输出至日志                                        |

## Animator Locomotion Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.7db4fkj18d80.webp)

在播放动画时禁用动作，位置被锁定

PC 下只可上下移动视角，VR 可自由移动，但模型不会动

此状态将一直保持，直到某个其他状态再次运行此状态行为并将其改变

| 名称               | Purpose(目的)                                  |
| ------------------ | ---------------------------------------------- |
| Locomotion Control | 如果选择“Disable”，运动将被禁用                |
| Debug String       | 调试字符串，当此脚本运行时将此字符串输出至日志 |

## Animator Temporary Pose Space

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.6ju2p7xy6nc0.webp)

调整视角球，移动至执行动画后额头位置

视角球调整后将一直保持，直到某个其他状态再次运行此状态行为并将其改变

| 名称         | Purpose(目的)                                  |
| ------------ | ---------------------------------------------- |
| Pose Space   | “Enter”将更改，“Exit”将退出并重置为默认        |
| Fixed Delay  | 调整“Delay Time(延迟时间)”为时间段或百分比     |
| Delay Time   | 视角球将在设定值后调整                         |
| Debug String | 调试字符串，当此脚本运行时将此字符串输出至日志 |

## Animator Tracking Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.79846t7qt1c0.webp)

以下内容为 Google 翻译+自己修改

跟踪设置将一直保留，直到某个其他状态再次运行此状态行为并将其重置。

Animator Tracking Control 允许您启用或禁用 IK 或模拟化身身体各个不同部位的运动。将选项设置为“No Change”不会更改身体部位的当前值。“Tracking”会将其设置为跟随 IK 或模拟运动。“Animation”将强制身体部位遵从动画

如果将所有 IK 跟踪点设置为 Animation，您的动画将作为动画远程播放，而不是通过网络 IK 进行转换。对于各种类型的跟踪，这些“IK 跟踪点”是：

- PC：头、左手、右手
- 3pt 追踪：头部、左手、右手
- 6pt / FBT 追踪：头部、左手、右手、臀部、左脚、右脚

除了模拟的 Eyes and Eyelid 外，所有部分都是 IK 驱动的。嘴和下巴由 visemes 驱动。

例如，将 Left Hand 和 Right Hand 设置为 Animation 将忽略 IK 定义的手（和手臂）的位置，而是使用任何当前活动状态的运动来定义手和手臂的位置。将它们设置回 Tracking 将改为使用 IK。

将 Eyes & Eyelid 设置为 Animation 将禁用眼球运动和闭眼动作。将 Eyes & Eyelid 设置为 Tracking 将重新启用模拟的眼球运动和眨眼。

将 Mouth and Jaw 设置为 Animation 将禁用发音嘴型(visemes)，但仍会发送发音嘴型参数(visemes)。设置 Mouth and Jaw 将重新启用发音嘴型(visemes)。

## Avatar Parameter Driver

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.7e68k4hlb6g0.webp)

改变给定参数的值

| 名字                 | Purpose(目的)        |
| -------------------- | -------------------- |
| Add Parameter (按钮) | 添加一个要改变的参数 |
| Name                 | 选择要改变的参数     |
| Change Type          | 如何改变？           |
| Value                | 要改变的值           |

## Playable Layer Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.62mmysx318o0.webp)

与 Animator Layer Controller 类似，不过是改变一个动画层的权重
