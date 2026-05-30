---
title: Parameters
---

:::caution[免責聲明]
 本文件由 gemini-3-flash-preview 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> 修改的時候可以使用哪些參數呢？

過渡條件可以使用官方數值，只需要在「動畫器-參數」（Animator-Parameters）添加與官方數值相同類型和名稱的參數即可。

## 一、 數值類型

在「動畫器」中添加參數有四種類型：

- Float：浮點數，可以理解為小數。

- Int：整數型，可以理解為整數。

- Bool：布林值，只有「True」和「False」兩種取值。

- Trigger：觸發器，和布林值很像，但只能被設為 true，一旦被過渡使用就會自動被設為 false（好像在 VRC 中沒用？）。

下表為 VRChat 數值類型（一個模型的「數值」上限為「256 bits」）：

| 數值類型 | 取值範圍          | 儲存佔用 | 備註                                                              |
| :------- | :---------------- | :------- | :---------------------------------------------------------------- |
| int      | `0` ~ `255`       | 8 bits   | Unsigned 8-bit int.                                               |
| float    | `-1.0` ~ `1.0`    | 8 bits   | Signed 8-bit [minifloat](https://en.wikipedia.org/wiki/Minifloat) |
| bool     | `True` or `False` | 1 bit    |                                                                   |

> 如果要做開關，動畫器-參數中的參數名稱與類型必須與 VRC 數值中一模一樣。

## 二、 官方數值總覽

（以下表格中文為我自行翻譯，可能存在錯誤，僅翻譯可能有用或我曾使用過的參數）

| Name (名稱)                                                                                                    | Description (描述)                                                                                                                                                                 | Type (類型) | Sync (同步)    |
| :------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- | :------------- |
| IsLocal                                                                                                        | True if the avatar is being worn locally, false otherwise                                                                                                                          | Bool        | None           |
| [Viseme](https://docs.vrchat.com/docs/animator-parameters#viseme-values) (嘴型)                                | [Oculus viseme index](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference) (`0-14`). When using Jawbone/Jawflap, range is `0-100` indicating volume | Int         | Speech         |
| Voice                                                                                                          | Microphone volume (`0.0-1.0`)                                                                                                                                                      | Float       | Speech         |
| [GestureLeft](https://docs.vrchat.com/docs/animator-parameters#gestureleft-and-gestureright-values) (左手手勢) | Gesture from L hand control (0-7)                                                                                                                                                  | Int         | IK             |
| [GestureRight](https://docs.vrchat.com/docs/animator-parameters#gestureleft-and-gestureright-values) (右手手勢)| Gesture from R hand control (0-7)                                                                                                                                                  | Int         | IK             |
| GestureLeftWeight                                                                                              | Analog trigger L (0.0-1.0)†                                                                                                                                                        | Float       | IK             |
| GestureRightWeight                                                                                             | Analog trigger R (0.0-1.0)†                                                                                                                                                        | Float       | IK             |
| AngularY                                                                                                       | Angular velocity on the Y axis                                                                                                                                                     | Float       | IK             |
| VelocityX (X 軸方向速度)                                                                                       | Lateral move speed in m/s                                                                                                                                                          | Float       | IK             |
| VelocityY (Y 軸方向速度)                                                                                       | Vertical move speed in m/s                                                                                                                                                         | Float       | IK             |
| VelocityZ (Z 軸方向速度)                                                                                       | Forward move speed in m/s                                                                                                                                                          | Float       | IK             |
| Upright (站立程度)                                                                                             | How “upright” you are. 0 is prone, 1 is standing straight up                                                                                                                       | Float       | IK             |
| Grounded (地面)                                                                                                | True if player touching ground (若跳躍則為 false)                                                                                                                                  | Bool        | IK             |
| Seated                                                                                                         | True if player in station                                                                                                                                                          | Bool        | IK             |
| AFK                                                                                                            | Is player unavailable (HMD proximity sensor / End key)                                                                                                                             | Bool        | IK             |
| Expression1 – Expression16                                                                                     | User defined param, Int (`0`–`255`) or Float (`-1.0`–`1.0`)                                                                                                                        | Int / Float | IK or Playable |
| [TrackingType](https://docs.vrchat.com/docs/animator-parameters#trackingtype-parameter)                        | See description below                                                                                                                                                              | Int         | Playable       |
| VRMode                                                                                                         | Returns `1` if the user is in VR, `0` if they are not                                                                                                                              | Int         | IK             |
| MuteSelf                                                                                                       | Returns `true` if the user has muted themselves, `false` if unmuted                                                                                                                | Bool        | Playable       |
| InStation                                                                                                      | Returns `true` if the user is in a station, `false` if not                                                                                                                         | Bool        | IK             |

## 三、 手勢對應數值

用於製作手勢觸發動畫。

| Index (數值) | Gesture (手勢)     | PC 按鍵  |
| :----------- | :----------------- | -------- |
| 0            | Neutral (自然)     | Shift+F1 |
| 1            | Fist (握拳)        | Shift+F2 |
| 2            | HandOpen (張開手)  | Shift+F3 |
| 3            | fingerpoint (指)   | Shift+F4 |
| 4            | Victory (勝利)     | Shift+F5 |
| 5            | RockNRoll (搖滾)   | Shift+F6 |
| 6            | HandGun (手槍)     | Shift+F7 |
| 7            | ThumbsUp (點讚)    | Shift+F8 |

> 註：PC 按鍵：左 Shift 為左手，右 Shift 為右手。

## 四、 嘴型對應值

嘴型參考：[Viseme Reference: Unity | Oculus Developers](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference)

可用於製作說話觸發動畫。

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