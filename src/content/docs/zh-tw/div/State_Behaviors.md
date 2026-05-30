---
title: 狀態行為 (State Behaviors)
---

:::caution[免責聲明]
本文件由 gemini-3.5-flash 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
:::

> Unity 狀態行為腳本

## 新增

在「動畫器 - 圖層 (Animator - Layer)」點擊一個狀態，在「屬性檢視器 (Inspector)」中點擊「新增行為 (Add Behaviour)」即可看到 VRC 的腳本

## Animator Layer Controller

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.6dk3lrhp6lc0.webp)

可以改變某一圖層的權重（權重為 1 時正常播放）

圖層權重將保持不變，直到某個其他狀態再次執行此狀態行為並將其重設

| 名稱             | Purpose (目的)                                                                        |
| ---------------- | ------------------------------------------------------------------------------------- |
| 可播放 (Playable) | 選擇要改變的動畫圖層                                                                  |
| 圖層 (Layer)      | 選擇影響第幾個圖層（從 0 開始），第 0 層（即第一個）無法被改變（始終為 1）            |
| Goal Weight      | 想要改變的權重                                                                        |
| Blend Duration   | Define the time period (in seconds) that you want the blend to take. 0 means instant. |
| Debug String     | 偵錯字串，當此腳本執行時將此字串輸出至記錄                                            |

## Animator Locomotion Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.7db4fkj18d80.webp)

在播放動畫時停用動作，位置被鎖定

PC 模式下只能上下移動視角，VR 可自由移動，但模型不會動

此狀態將一直保持，直到某個其他狀態再次執行此狀態行為並將其改變

| 名稱               | Purpose (目的)                                 |
| ------------------ | ---------------------------------------------- |
| Locomotion Control | 如果選擇「Disable」，移動將被停用                |
| Debug String       | 偵錯字串，當此腳本執行時將此字串輸出至記錄     |

## Animator Temporary Pose Space

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.6ju2p7xy6nc0.webp)

調整視角球，移動至執行動畫後額頭位置

視角球調整後將一直保持，直到某個其他狀態再次執行此狀態行為並將其改變

| 名稱         | Purpose (目的)                                 |
| ------------ | ---------------------------------------------- |
| Pose Space   | 「Enter」將變更，「Exit」將結束並重設為預設值  |
| Fixed Delay  | 調整「Delay Time（延遲時間）」為時間段或百分比 |
| Delay Time   | 視角球將在設定值後調整                         |
| Debug String | 偵錯字串，當此腳本執行時將此字串輸出至記錄     |

## Animator Tracking Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.79846t7qt1c0.webp)

以下內容為 Google 翻譯 + 自己修改

追蹤設定將一直保留，直到某個其他狀態再次執行此狀態行為並將其重設。

Animator Tracking Control 允許您啟用或停用 IK 或模擬化身（Avatar）身體各個不同部位的移動。將選項設定為「No Change」不會變更身體部位的目前值。「Tracking」會將其設定為跟隨 IK 或模擬移動。「Animation」將強制身體部位遵從動畫。

如果將所有 IK 追蹤點設定為 Animation，您的動畫將作為動畫遠端播放，而不是透過網路 IK 進行轉換。對於各種新型的追蹤，這些「IK 追蹤點」是：

- PC：頭部、左手、右手
- 3pt 追蹤：頭部、左手、右手
- 6pt / FBT 追蹤：頭部、左手、右手、臀部、左腳、右腳

除了模擬的 Eyes and Eyelid 外，所有部分都是由 IK 驅動的。嘴巴和下巴則由 visemes（對嘴口型）驅動。

例如，將 Left Hand 和 Right Hand 設定為 Animation 將忽略 IK 定義的手部（和手臂）的位置，而是使用任何目前作用中狀態的動作來定義手部和手臂的位置。將它們設定回 Tracking 則會改為使用 IK。

將 Eyes & Eyelid 設定為 Animation 將停用眼球移動和閉眼動作。將 Eyes & Eyelid 設定為 Tracking 將重新啟用模擬的眼球移動和眨眼。

將 Mouth and Jaw 設定為 Animation 將停用發音嘴型 (visemes)，但仍會傳送發音嘴型參數 (visemes)。設定 Mouth and Jaw 將重新啟用發音嘴型 (visemes)。

## Avatar Parameter Driver

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.7e68k4hlb6g0.webp)

改變給定參數的值

| 名字                 | Purpose (目的)       |
| -------------------- | -------------------- |
| Add Parameter (按鈕) | 新增一個要改變的參數 |
| Name                 | 選擇要改變的參數     |
| Change Type          | 如何改變？           |
| Value                | 要改變的值           |

## Playable Layer Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.62mmysx318o0.webp)

與 Animator Layer Controller 類似，不過是改變一個動畫圖層的權重