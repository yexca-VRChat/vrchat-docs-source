---
title: 固定世界 MMD
---

:::caution[免責聲明]
本文件由 gemini-3.5-flash 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
:::

> 讓一個模型在同一個地方跳舞

## 一、將 MMD 舞蹈轉換為動畫檔案

### 1）下載 VRC 工具箱

下載地址：[VRChatAvatarToolkit 發行版 – Gitee.com](https://gitee.com/cmoyuer/vrchat-avatar-toolkit/releases)

檔案直連 (Gitee)：[VRC 工具箱 v1.2.5_by 如夢.unitypackage](https://gitee.com/cmoyuer/vrchat-avatar-toolkit/attach_files/937625/download/VRC工具箱v1.2.5_by如夢.unitypackage)

作者 B 站：[如夢 Nya 的個人空間\_嗶哩嗶哩\_bilibili](https://space.bilibili.com/2562878)

### 2）匯入檔案

- VRC 工具箱
- MMD 動作檔案 (vmd 檔案)
- (選填) MMD 的模型 (pmx 檔案)

註：匯入 MMD 的模型可防止一些動作變得奇怪

### 3）轉換

在頂部選擇「VRC 工具箱-MMD 動作轉換」

將 MMD 動作檔案和 MMD 模型 (模型可不拖入) 拖入對應位置

然後點擊「生成設定檔」後稍等片刻即可

### 4）檢查動畫是否正常

儘管是匯入 MMD 來生成動畫檔案，但有些舞蹈動作轉換後還是很奇怪

先在左側「階層」(Hierarchy) 中「CTRL+D」複製模型，隱藏原模型，將動畫拖到新模型上 (複製是為了防止發生錯誤)

點擊「播放」，角色就會開始跳舞

### 5）調整動畫方向

點擊動畫檔案，在右側「根變換旋轉-依據」(Root Transform Rotation - Based Upon) 選擇「原始」(Original)

當然，對於固定於世界的模型是**選填的**，後續自己要跳 MMD 時更改也方便觀看

## 二、匯入並壓縮音訊檔案

選擇資料夾後直接拖入即可，壓縮檔案是由於 VRChat 限制模型載入「200MB」

點擊音訊檔案，在右側選擇壓縮格式 (一般預設的「Vorbis」即可)，選擇品質 (越低壓縮率越高)，然後點擊套用 (Apply) 即可

## 三、加入模型及音訊舞蹈

### 1）加入模型和舞蹈

參考上篇文章，將模型放入對應「物品」的位置，文章：[固定世界物件](/additional/set_object)

直接將動畫拖入想跳舞的模型名稱上即可

### 2）加入音訊

在跳舞模型上建立一個空物件，然後新增元件「音訊來源」(英文: Audio Source)

在「AudioClip」後方拖入音樂，「空間混合」(Spatial Blend) 調為「1」，「都卜勒等級」(Doppler Level) 調為「0」，「音量衰減」(Volume Rolloff) 選擇「線性衰減」(Linear Rolloff)，「最大距離」(Max Distance) 可自由調節 (例如 20)

### 3）音訊綁骨

我製作時一般會將音訊綁骨在嘴部，綁骨參考：[物件綁骨](/additional/tied_bones)

### 4）調整位置

移動模型到想要的位置，例如前方 1 公尺，旋轉 180 度

## 四、錄製動畫

動畫參考 [固定世界物件](/additional/set_object) 的動畫

## 五、其他

如果是多人舞蹈可以新增多個模型，每個拖入不同動作，不過要注意位置，比如誰在左誰在右之類的