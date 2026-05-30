---
title: Parameters
---

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> What parameters are available for modding?

Transition conditions can use official values. You just need to add parameters in "Animator - Parameters" with the same type and name as the official ones.

## 1. Data Types

There are four types of parameters you can add in the "Animator":

- **Float**: Floating-point numbers, basically decimals.

- **Int**: Integer types, whole numbers.

- **Bool**: Boolean, can only be "True" or "False".

- **Trigger**: Similar to a Bool, but it only triggers a "True" state. Once consumed by a transition, it automatically resets to "False" (though it seems less useful in VRC).

The table below shows VRChat data types (an avatar's parameter limit is 256 bits):

| Data Type | Range             | Storage | Notes                                                             |
| :-------- | :---------------- | :------ | :---------------------------------------------------------------- |
| int       | `0` ~ `255`       | 8 bits  | Unsigned 8-bit int.                                               |
| float     | `-1.0` ~ `1.0`    | 8 bits  | Signed 8-bit [minifloat](https://en.wikipedia.org/wiki/Minifloat) |
| bool      | `True` or `False` | 1 bit   |                                                                   |

> If you're making a toggle, the parameter name and type in "Animator - Parameters" must match the VRC parameters exactly.

## 2. Official Parameters Overview

(The following table describes parameters that are commonly useful or ones I've personally used.)

| Name                                                                                                           | Description                                                                                                                                                                        | Type        | Sync           |
| :------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- | :------------- |
| IsLocal                                                                                                        | True if the avatar is being worn locally, false otherwise                                                                                                                          | Bool        | None           |
| [Viseme](https://docs.vrchat.com/docs/animator-parameters#viseme-values)                                       | [Oculus viseme index](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference) (`0-14`). When using Jawbone/Jawflap, range is `0-100` indicating volume | Int         | Speech         |
| Voice                                                                                                          | Microphone volume (`0.0-1.0`)                                                                                                                                                      | Float       | Speech         |
| [GestureLeft](https://docs.vrchat.com/docs/animator-parameters#gestureleft-and-gestureright-values)            | Gesture from L hand control (0-7)                                                                                                                                                  | Int         | IK             |
| [GestureRight](https://docs.vrchat.com/docs/animator-parameters#gestureleft-and-gestureright-values)           | Gesture from R hand control (0-7)                                                                                                                                                  | Int         | IK             |
| GestureLeftWeight                                                                                              | Analog trigger L (0.0-1.0)†                                                                                                                                                        | Float       | IK             |
| GestureRightWeight                                                                                             | Analog trigger R (0.0-1.0)†                                                                                                                                                        | Float       | IK             |
| AngularY                                                                                                       | Angular velocity on the Y axis                                                                                                                                                     | Float       | IK             |
| VelocityX                                                                                                      | Lateral move speed in m/s                                                                                                                                                          | Float       | IK             |
| VelocityY                                                                                                      | Vertical move speed in m/s                                                                                                                                                         | Float       | IK             |
| VelocityZ                                                                                                      | Forward move speed in m/s                                                                                                                                                          | Float       | IK             |
| Upright                                                                                                        | How “upright” you are. 0 is prone, 1 is standing straight up                                                                                                                       | Float       | IK             |
| Grounded                                                                                                       | True if player touching ground (false if jumping)                                                                                                                                  | Bool        | IK             |
| Seated                                                                                                         | True if player in station                                                                                                                                                          | Bool        | IK             |
| AFK                                                                                                            | Is player unavailable (HMD proximity sensor / End key)                                                                                                                             | Bool        | IK             |
| Expression1 – Expression16                                                                                     | User defined param, Int (`0`–`255`) or Float (`-1.0`–`1.0`)                                                                                                                        | Int / Float | IK or Playable |
| [TrackingType](https://docs.vrchat.com/docs/animator-parameters#trackingtype-parameter)                        | See official docs                                                                                                                                                                  | Int         | Playable       |
| VRMode                                                                                                         | Returns `1` if the user is in VR, `0` if they are not                                                                                                                              | Int         | IK             |
| MuteSelf                                                                                                       | Returns `true` if the user has muted themselves, `false` if unmuted                                                                                                                | Bool        | Playable       |
| InStation                                                                                                      | Returns `true` if the user is in a station, `false` if not                                                                                                                         | Bool        | IK             |

## 3. Gesture Values

Used for creating gesture-triggered animations.

| Index | Gesture    | PC Keybind |
| :---- | :--------- | ---------- |
| 0     | Neutral    | Shift+F1   |
| 1     | Fist       | Shift+F2   |
| 2     | HandOpen   | Shift+F3   |
| 3     | fingerpoint| Shift+F4   |
| 4     | Victory    | Shift+F5   |
| 5     | RockNRoll  | Shift+F6   |
| 6     | HandGun    | Shift+F7   |
| 7     | ThumbsUp   | Shift+F8   |

> Note: For PC keybinds: Left Shift controls the left hand, Right Shift controls the right hand.

## 4. Viseme Values

Viseme reference: [Viseme Reference: Unity | Oculus Developers](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference)

Can be used to trigger animations based on speech.

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