---
title: MMD 模型轉換為 FBX
description: 將 MMD 的模型轉換為 FBX 格式
---

:::caution[免責聲明]
 本文件由 gemini-3-flash-preview 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> 這麼多好看的 MMD 模型，我該如何成為 TA 呢？

## 引言

MMD 模型不能被 Unity 辨識，可以透過兩種方法進行轉換，本文藉由 Blender 轉換，藉由外掛轉換請參考 [將 MMD 模型匯入 Unity – yexca'Blog](https://blog.yexca.net/archives/28/)

## 一、下載並安裝 Blender 和外掛

### 1）下載 Blender 2.93

官方下載連結：[Index of /release/ (blender.org)](https://download.blender.org/release/)

請尋找 2.93 版本進行下載

### 2）下載外掛

GitHub 連結：[Releases · absolute-quantum/cats-blender-plugin (github.com)](https://github.com/absolute-quantum/cats-blender-plugin/releases)

檔案直連

GitHub：[cats-blender-plugin-0-19-0.zip](https://github.com/absolute-quantum/cats-blender-plugin/releases/download/0.19.0/cats-blender-plugin-0-19-0.zip)

### 3）安裝外掛

打開 Blender，選擇 `一般`，點擊左上方 `編輯` - `偏好設定` - `外掛` - `安裝`，找到外掛下載目錄後點擊 `安裝外掛`，然後勾選核取方塊啟用即可

## 二、匯入模型並初步處理

### 1）清除物件

在右上角全選物件後按 `delete` 鍵或 `x` 鍵刪除

### 2）匯入模型

點擊左上角 `檔案` - `匯入` - `MikuMikuDance Model`，然後找到模型雙擊匯入即可

### 3）Fix 模型

右上角有個 `<` 點擊展開選單，點擊 `CATS`，選擇 `Fix Model`，等待好一陣子即可

然後就可以匯出啦 (點擊左上 `檔案` - `匯出` - `FBX` 即可)

## 三、進一步處理

上一步處理後雖然能用，但在遊戲裡說話不會開口。

### 1）眼部處理

如圖設定

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-MMD2FBX/%E7%9C%BC%E9%83%A8%E8%BF%BD%E8%B8%AA.6a4bwsz8fyg0.webp)

點擊「Create Eye Tracking」即可，如果未找到，請選擇「基型」

### 2）嘴部處理

如圖所示

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-MMD2FBX/%E5%98%B4%E9%83%A8%E5%8F%A3%E5%9E%8B.288ghboc1vvo.webp)

點擊「Create Visemes」即可

### 3）匯出

至此即可匯出，點擊左上「檔案 - 匯出 - FBX」即可

## 四、再進一步處理

下面的處理為分離材質，可以實現脫衣服之類的，如想實現此效果請注意第三步需要重做

### 1）分離材質

在「Model Options」裡點擊材質，等待好一陣子即可分離材質

### 2）確定 Body

右上角可以透過點擊眼睛圖示來開關物件，確定身體所在的位置，重新命名為「Body」

### 3）合併材質

在右上方可以按「CTRL」選擇想合併的部位，然後點擊「Model Options」裡的「Join Meshes - Selected」即可

當然，Body 也可以合併，但必須叫作「Body」，「表情」必須放進「Body」

### 4）重做第三步

既然都做得那麼精細了，不加點第三步的東西可不行啊