---
title: 新增預設圖層與選單
---

:::caution[免責聲明]
 本文件由 gemini-3.5-flash 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> 改模前的必備條件啦

如果是 SDK3 模型，可能已經有了數值與選單，若沒有請參考以下操作

## 動畫層

為模型新增 `Base`、`Action` 與 `FX` 預設控制器

如果是「SDK2 轉 SDK3」或「MMD 模型」，在「VRC Avatar Descriptor」的「Playable Layers」裡點擊「Customize」，然後在對應圖層後面點擊「Default 圖層名」

如果是 SDK3 模型，可能已經有了對應圖層，可以將沒有的加入

然後在「Assets\VRCSDK\Examples3\Animation\Controllers」可找到所有的預設控制器

- Base vrc_AvatarV3LocomotionLayer.controller
- Action vrc_AvatarV3ActionLayer.controller
- FX vrc_AvatarV3HandsLayer.controller

找到後點擊並按「Ctrl + D」即可複製相同檔案，可按「F2」重新命名，然後可將這些檔案拖入模型所在資料夾，並新建一個資料夾存放。

再將檔案拖入「VRC Avatar Descriptor」的「Playable Layers」對應位置即可。

## 數值與選單

### 1）建立數值與選單

可以在模型資料夾下新建一個資料夾用來存放數值與選單

在「Assets」裡點選右鍵，依序選擇「Create - VRChat - Avatars - Expression Parameters」，並重新命名為「數值」

點選右鍵，依序選擇「Create - VRChat - Avatars - Expression Menu」，並重新命名為「主選單」

### 2）為模型新增數值與選單

如果是「SDK2 轉 SDK3」或「MMD 模型」，在「VRC Avatar Descriptor」的「Expression」裡點擊「Customize」，然後將剛建立的「選單」拖入「Menu」，「數值」拖入「Parameters」