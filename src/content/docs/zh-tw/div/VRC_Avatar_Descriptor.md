---
title: VRC Avatar Descriptor
---

:::caution[免責聲明]
 本文件由 gemini-3.5-flash 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::
> VRChat 的模型描述檔

## 新增描述檔

在「階層 (Hierarchy)」中選取模型名稱，即可在右側元件 (Component) 搜尋並新增「VRC Avatar Descriptor」

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.48d8ypvvpq00.webp)

第一個為 VRC 的描述，第二個為藍圖

## 一、View

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.3i0xx2om69e0.webp)

用於調整視角球，即在遊戲中看到的視角位置，通常放在兩眼中間

點擊「Edit」即可在「場景 (Scene)」中調整位置，調整完成後點擊「Return」

## 二、LipSync

設定後模型即可在開啟麥克風說話時開口

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.40e4lutgnbi0.webp)

通常點擊「Auto Detect!」即可自動新增，若無法正常辨識請手動新增

通常「Mode」為第四個「Viseme Blend Shape」，接著將模型的「Body」或「Face」拖入「Face Mesh」，一般情況如下 (若辨識不出請手動選擇)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.5mxy376p4sk0.webp)

若沒有上述物件請停用，即「Mode」選擇「預設 (Default)」，或自行研究骨骼實作

## 三、Eye Look

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.12j6dlfdgibk.webp)

眼部相關設定，點擊「Enable」開始修改

### General

全域設定眼部移動

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.2nr8oejxht60.webp)

「Calm-Excited」影響眨眼的頻率

「Shy-Confident」影響自己的模型看向其他玩家模型的頻率，以及看向其他玩家時視線停留的時間

### Eyes

#### Transforms

定義眼骨的位置

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.3fvueycbkhw0.webp)

找到對應的骨骼拖入即可，若沒有請跳過

#### Rotation States

定義眼部骨骼旋轉的範圍，只有在上一項填入眼骨時才可用

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.5lbk2uslvks0.webp)

定義向前、上、下、左、右看時眼睛的移動

點擊「Preview」即可進行編輯，可在場景中進行旋轉，點擊「X」軸左側的鏈結圖示可分別定義左右眼，調整完成後點擊「Return」儲存

### Eyelids

定義閉眼、向上看與向下看

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.2ljvn9o52940.webp)

通常「Eyelid Type」選擇「Blendshapes」，接著將「Body」或「Face」拖入「Eyelids Mesh」

在「Blendshapes」中可定義閉眼、向上看與向下看

**注意：**此處的向上看與向下看與前一項「Eyes-Rotation」中的向上看與向下看是相同的，若已使用上方定義，此處可選擇「-none-」

遊戲中眼部若出現異常可在這個模組調整，若想省事可以直接「disable」

## Playable Layers

在 SDK3 的 Avatar Descriptor 中共有五個圖層，分別為

- Base 或稱 Locomotion 層，控制模型的蹲姿、趴姿等
- Additive Base 層的附加，例如製作呼吸動畫
- Gesture 手勢層，用於手勢動作製作，或用於「閒置動畫 (Idle Animation)」，例如搖擺尾巴、拍打翅膀或擺動耳朵
- Action 動作層，例如 MMD 舞蹈放在此層
- FX 控制物品的開關，手勢表情也在此層

此外，還有附加的三個圖層，分別為（此部分如需了解請參閱「[官方文件](https://docs.vrchat.com/docs/playable-layers#additional-poses)」）：

- T-Pose
- IK Pose
- Sitting Pose

## Lower Body

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.1mkbsgxttbuo.webp)

第一個：頭部有輕微移動時會有碎步的效果

第二個：全身追蹤 (FBT) 時是否啟用 Locomotion

## Expressions

[數值](/summary/parameters)

[選單](/summary/menu)

## Colliders

新版 SDK3 特有功能，用於定義頭部、身體、手腳的碰撞器 (Colliders)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.775z0ziwkxc0.webp)

點擊「Edit」即可定義位置與大小，可在場景中進行編輯

點擊左側的鏈結圖示即可分別設定左右位置

此處設定的不僅是碰撞體積，也是互動系統 (Contacts) 傳送端的大小

具體請參考：[互動 (Contacts) 簡介](/dynamics/contacts)