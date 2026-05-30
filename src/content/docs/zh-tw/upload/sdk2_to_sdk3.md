---
title: SDK2 轉換為 SDK3
description: 將 VRChat SDK2 模型轉換為 SDK3 模型的方法
---

:::caution[免責聲明]
 本文件由 gemini-3-flash-preview 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> 新版本不支援 SDK2 了，不得不修改啦 ~~(其實舊版本 Unity 還能用)~~

## 一、匯入相關

不用匯入 SDK2，匯入上傳 SDK3 模型需要的內容即可

## 二、移除 SDK2 描述組件

將模型放入場景後 (拖入 prefab 檔案或連按兩下場景檔案)，點擊模型

在右側將其餘組件刪除（一般是最後兩個），僅保留「Transform」和「Animator」兩個組件即可

## 三、新增 SDK3 描述檔案

### 1）調整視角球

「VRC Avatar Descriptor」第一個為「View」，即我們要調整的視角球，點擊「Edit」即可在 Unity 調整，大概放在額頭前，然後回到腳本點擊「Return」即可

### 2）新增「Viseme」

「VRC Avatar Descriptor」第二個為「LipSync」，點擊「Auto Detect」即可自動辨識

如未能自動辨識，一般將「Body」拖入相應位置即可
有些模型有「Body」和「Face」，請將「Mode」換成「Viseme Blend Shape」，然後將「Face」拖入「Face Mesh」即可（注意檢查是否有錯誤）

## 四、上傳

上傳參考[成品模型上傳第四步](/upload/upload/#%E5%9B%9B%E4%B8%8A%E4%BC%A0%E6%A8%A1%E5%9E%8B)

關於「VRC Avatar Descriptor」其他部分將在後續文章描述