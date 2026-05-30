---
title: 新增一支可以寫字的筆
---

:::caution[免責聲明]
 本文件由 gemini-3-flash-preview 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> VRLabs 的東西真的很不錯，可以看看其他的

## 工具

這裡使用 VRLabs 的免費商品：[VRLabs Marker | マーカー – VRLabs – BOOTH](https://booth.pm/zh-cn/items/2911163)

## 前提

模型的參數（Parameters）可用位元（bits）至少 13

模型的第一層選單至少有一個可用欄位

## 一、匯入

下載解壓縮後直接拖入即可，然後在專案「Assets-VRLabs-Marker」找到「Marker.cs」將其拖到「階層（Hierarchy）」中模型的名字上，接著點擊模型名稱即可在「檢視器（Inspector）」看到腳本。

## 二、簡介

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-VRLabsMarker/image.227jhy6gwfpc.webp)

**Avatar：** 顯示要加入的模型名稱，可替換。

**Left-handed：** 裝在左手上。

**Write Defaults：** 動畫層的設定，意指進入下一個狀態時是否重設上一個狀態所做的變更。

**Gesture to draw：** 選擇一個手勢來寫字，預設為 point。

手勢可參考：[數值](/summary/parameters/#%E4%B8%89%E6%89%8B%E5%8A%BF%E5%AF%B9%E5%BA%94%E6%95%B0%E5%80%BC)

**Adjustable brush size：** 可調節畫筆的大小。

**Adjustable eraser size：** 可調節橡皮擦的大小。

**Use index finger to draw：** 使用食指書寫，啟用則移除畫筆模型。

**Enable local space：** 允許將畫出來的東西固定在身體某個部位。

**Half-Body：** 上一項啟用時，允許放在半身，即頭、手和胸。

**Full-Body：** 在 Half-Body 的基礎上加上腳部。

**Parameter memory bits needed：** 需要的參數位元大小，調整上方選項可能會隨之改變。

**Generate Marker：** 開始產生。

**Remove Marker：** 移除。

## 三、建立

選擇好後點擊「Generate Marker」，稍等一會。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-VRLabsMarker/image.38b74nyenpy0.webp)

進入「播放（Play）」模式，在「Assets-VRLabs-Marker-Resources」找到控制器「M_Gesture」拖到模型的控制器欄位，然後點擊腳本的第一個按鈕「Adjust MarkerTarget transform」開始調整畫筆的位置。

調整完成後，**記錄畫筆的位置資訊**，然後退出播放模式並填入。

調整完成點擊「Finish Setup」即可。

## 移除

再次將腳本拖到模型上並點擊「Remove Marker」即可。