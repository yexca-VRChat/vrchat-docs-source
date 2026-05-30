---
title: 新增手勢表情
---

:::caution[免責聲明]
本文件由 gemini-3.5-flash 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
:::

> 手勢是一個數值，偵測數值變化以改變形態鍵（BlendShapes），從而實現對應手勢呈現對應表情

## 前言

本質上是用模型的「Body」或「Face」的「BlendShapes」製作，如果沒有，可能需要去一些建模軟體進行新增

## 一、要修改的動畫

找到模型「FX 圖層」，在圖層「Left Hand」或「Right Hand」找到要修改的動畫（可按 CTRL+D 複製一個以避免破壞原始檔案）

以右手的「Point」為例

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-EmoteAnim/image.4tnhuoe1z3s0.webp)

## 二、修改動畫

在「階層（Hierarchy）」中將模型「CTRL+D」複製，然後將原始模型隱藏，把要修改的動畫檔案拖入複製的模型上，在「動畫（Animation）」視窗點擊錄製，然後找到模型的「Body」或「Face」的「BlendShapes」並展開，修改相應數值以完成表情製作

**注意：**務必使用複製出來的模型製作，否則可能會變得很奇怪

在製作多個表情時，請將所有表情涉及到的 BlendShape 的值設為 0（除了目前表情使用的），以防止表情衝突
圖方便的話可以將所有 BlendShape 設為 0

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-EmoteAnim/image.14s44hc2egg0.webp)

## 三、後續

關閉「錄製」和「預覽」，將製作好的動畫替換原始動畫，並刪除複製的模型