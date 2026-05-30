---
title: Contacts
---

:::caution[免責聲明]
 本文件由 gemini-3.5-flash 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> VRChat 互動系統

## 前言

互動系統 (Contacts) 允許角色偵測自己或他人的訊號，接著可以使用這些訊號產生的參數來觸發動畫。

**注意：互動系統和動態骨骼系統是不同的**（我剛開始看的時候搞混了）。

互動系統分為傳送端 (VRCContactSender) 和接收端 (VRCContactReceiver)。傳送端是為了被偵測而存在，也就是一直在廣播自己的參數 (Collision Tags)；接收端則負責偵測傳送端，如果與傳送端的參數 (Collision Tags) 相同，則更新參數。

## 新增互動系統的元件

在物件或骨骼上新增元件，搜尋「vrc」，找到相應的元件點擊即可。

## VRC Contact Sender (傳送端)

定義傳送訊號的範圍與參數 (Collision Tags)。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-Contacts/image.ebh40gdczco.webp)

### Root Transform

此元件所在位置，若為空則為元件所在的物件。

### Shape (形狀)

**Shape Type**：形狀類型，可選「球體」和「膠囊」。

**半徑、位置、高度**（「膠囊」）：字面意思。

**Rotation**：旋轉。

### Filtering (過濾)

調整和定義傳送端如何與接收端互動。

**Collision Tags**：指定該傳送端可以影響／受其影響的字串列表。為了成功實現碰撞（被接收端成功偵測），傳送端和接收端都需要至少一對匹配的字串。

此處可選擇預設的一些參數或者自訂參數，**注意：英文字母區分大小寫**。

### 注意

在「VRC Avatar Descriptor」裡有「Collidees」會設定頭部、身體、手部和腳部的一些碰撞，這些設定預設是會有傳送端的，傳送參數為名稱，例如「頭部」為「Head」，因此無需在這些部位另外設定傳送端。

## VRC Contact Receiver (接收端)

定義接收訊號的範圍與參數 (Collision Tags)，然後輸出相應的參數。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-Contacts/image.4zfxznntlkg0.webp)

### Root Transform

此元件所在位置，若為空則為元件所在的物件。

### Shape (形狀)

**Shape Type**：形狀類型，可選「球體」和「膠囊」。

**半徑、位置、高度**（「膠囊」）：字面意思。

**Rotation**：旋轉。

### Filtering (過濾)

定義如何與傳送端互動。

**Allow Self**：允許自己觸發，勾選即可自己與自己互動。

**Allow Others**：允許他人觸發，勾選即可他人與自己互動。

**Local Only**：僅在本地端上執行。

**Collision Tags**：指定可以接受的字串列表／觸發此互動的參數列表。為了成功實現碰撞（成功偵測到傳送端），傳送端 and 接收端都需要至少一對匹配的字串。

### Receiver

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-Contacts/image.66905l2pgso0.webp)

定義接收到訊號後所改變的參數，參數欄位填入名稱即為要改變的參數。

| Receiver Type (類型) | 描述                                                    | 數值                                                 |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------- |
| 常數 (Constant)      | 發生互動則改變參數                                      | 建議 Bool，觸發時為 True，其他 Float 為 1.0，Int 為 1 |
| OnEnter             | 當進入速度大於 Min Velocity 時觸發                      | 建議 Bool，觸發時為 True，其他 Float 為 1.0，Int 為 1 |
| Proximity           | 傳送端到接收端中心的接近程度。如果有多個傳送端，值為最近的 | Float，0.0~1.0                                       |

第三種「Proximity」如果需要極高的精準度，需要將傳送端半徑調到非常小。