---
title: Parameters
---

> 修改的时候可以用到哪些参数呢？

过渡的条件可使用官方数值，只需要在”动画器-参数”添加类型和名字与官方数值相同的参数即可

## 一、数值类型

在”动画器“中添加参数有四种类型

- Float ：浮点数，可以理解为小数

- Int ：整数型，可以理解为整数

- Bool ：布尔型，只有”True“和”False“两种取值

- Trigger ：触发器，和布尔型很像，但只能被设为 true，一旦被过渡使用就会自动被设为 false(好像在 VRC 中没用？)

下表为 VRChat 数值类型(一个模型的“数值”上限为“256 bits”)

| 数值类型 | 取值范围          | 存储占用 | 备注                                                              |
| :------- | :---------------- | :------- | :---------------------------------------------------------------- |
| int      | `0` ~ `255`       | 8 bits   | Unsigned 8-bit int.                                               |
| float    | `-1.0` ~ `1.0`    | 8 bits   | Signed 8-bit [minifloat](https://en.wikipedia.org/wiki/Minifloat) |
| bool     | `True` or `False` | 1 bit    |                                                                   |

> 如果要做开关，动画器-参数中参数名字与类型要与 VRC 数值中一模一样

## 二、官方数值总览

(以下表格中文为我自己翻译，可能会有错误，仅翻译可能有用或我用过的参数)

| Name(名字)                                                                                                     | Description(描述)                                                                                                                                                                  | Type(类型)  | Sync(同步)     |
| :------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- | :------------- |
| IsLocal                                                                                                        | True if the avatar is being worn locally, false otherwise                                                                                                                          | Bool        | None           |
| [Viseme](https://docs.vrchat.com/docs/animator-parameters#viseme-values)(口型)                                 | [Oculus viseme index](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference) (`0-14`). When using Jawbone/Jawflap, range is `0-100` indicating volume | Int         | Speech         |
| Voice                                                                                                          | Microphone volume (`0.0-1.0`)                                                                                                                                                      | Float       | Speech         |
| [GestureLeft](https://docs.vrchat.com/docs/animator-parameters#gestureleft-and-gestureright-values)(左手手势)  | Gesture from L hand control (0-7)                                                                                                                                                  | Int         | IK             |
| [GestureRight](https://docs.vrchat.com/docs/animator-parameters#gestureleft-and-gestureright-values)(右手手势) | Gesture from R hand control (0-7)                                                                                                                                                  | Int         | IK             |
| GestureLeftWeight                                                                                              | Analog trigger L (0.0-1.0)†                                                                                                                                                        | Float       | IK             |
| GestureRightWeight                                                                                             | Analog trigger R (0.0-1.0)†                                                                                                                                                        | Float       | IK             |
| AngularY                                                                                                       | Angular velocity on the Y axis                                                                                                                                                     | Float       | IK             |
| VelocityX(X 方向速度)                                                                                          | Lateral move speed in m/s                                                                                                                                                          | Float       | IK             |
| VelocityY(Y 方向速度)                                                                                          | Vertical move speed in m/s                                                                                                                                                         | Float       | IK             |
| VelocityZ(Z 方向速度)                                                                                          | Forward move speed in m/s                                                                                                                                                          | Float       | IK             |
| Upright(高度)                                                                                                  | How “upright” you are. 0 is prone, 1 is standing straight up                                                                                                                       | Float       | IK             |
| Grounded(地面)                                                                                                 | True if player touching ground(如果跳跃则为 false)                                                                                                                                 | Bool        | IK             |
| Seated                                                                                                         | True if player in station                                                                                                                                                          | Bool        | IK             |
| AFK                                                                                                            | Is player unavailable (HMD proximity sensor / End key)                                                                                                                             | Bool        | IK             |
| Expression1 – Expression16                                                                                     | User defined param, Int (`0`–`255`) or Float (`-1.0`–`1.0`)                                                                                                                        | Int / Float | IK or Playable |
| [TrackingType](https://docs.vrchat.com/docs/animator-parameters#trackingtype-parameter)                        | See description below                                                                                                                                                              | Int         | Playable       |
| VRMode                                                                                                         | Returns `1` if the user is in VR, `0` if they are not                                                                                                                              | Int         | IK             |
| MuteSelf                                                                                                       | Returns `true` if the user has muted themselves, `false` if unmuted                                                                                                                | Bool        | Playable       |
| InStation                                                                                                      | Returns `true` if the user is in a station, `false` if not                                                                                                                         | Bool        | IK             |

## 三、手势对应数值

用于制作手势触发动画

| Index (数值) | Gesture (手势)     | PC 按键  |
| :----------- | :----------------- | -------- |
| 0            | Neutral (自然)     | Shift+F1 |
| 1            | Fist (握拳)        | Shift+F2 |
| 2            | HandOpen (张开手)  | Shift+F3 |
| 3            | fingerpoint (指)   | Shift+F4 |
| 4            | Victory (剪刀手)   | Shift+F5 |
| 5            | RockNRoll (我爱你) | Shift+F6 |
| 6            | HandGun (手枪)     | Shift+F7 |
| 7            | ThumbsUp (点赞)    | Shift+F8 |

> 注：PC 按键：左 Shift 为左手，右 Shift 为 右手

## 四、口型对应值

口型参考：[Viseme Reference: Unity | Oculus Developers](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference)

可用于制作说话触发动画

| Viseme Parameter | Viseme |
| :--------------- | :----- |
| 0                | `sil`  |
| 1                | `PP`   |
| 2                | `FF`   |
| 3                | `TH`   |
| 4                | `DD`   |
| 5                | `kk`   |
| 6                | `CH`   |
| 7                | `SS`   |
| 8                | `nn`   |
| 9                | `RR`   |
| 10               | `aa`   |
| 11               | `E`    |
| 12               | `ih`   |
| 13               | `oh`   |
| 14               | `ou`   |
