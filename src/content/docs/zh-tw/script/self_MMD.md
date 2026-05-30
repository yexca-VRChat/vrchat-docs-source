---
title: 自身跳 MMD 舞蹈
---

:::caution[免責聲明]
 本文件由 gemini-3-flash-preview 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> 使用 Animator Locomotion Control 腳本的一個例子，變可愛後怎麼忍得住不跳舞呢

## 一、檔案準備

- 舞蹈動畫檔案
- 音樂

關於 MMD 舞蹈轉換，請參考：[固定世界 MMD](/additional/set_mmd)

不過這裡要調整動畫方向，點擊動畫檔案，在右方「Root Transform Rotation - Based Upon」選擇「Original」

## 二、製作音樂開關

### 1）壓縮音訊

點擊音訊檔案，在右方選擇壓縮格式（一般預設的 `Vorbis` 即可），選擇品質（越低壓縮率越高），然後點擊套用（Apply）即可

### 2）加入音訊

在模型上建立一個空物件，然後新增元件「音訊來源」（英文: Audio Source）

在「AudioClip」後方拖入音樂，「Spatial Blend」調為「1」，「Doppler Level」調為「0」，「Volume Rolloff」選「Linear Rolloff」，「Max Distance」可自由調節（例如 20）

### 3）音訊綁骨（選配）

我製作時通常會將音訊綁骨在嘴部，綁骨參考：[物件綁骨](/additional/tied_bones)

### 4）製作音訊開關

錄製開關參考：[FX 層 - 物品開關](/editing/switch)

## 三、動畫控制器新增動畫

### Action 層

進入 Action 層，跟隨 `Entry-WaitForActionOrAFK-Prepare Standing`，`Prepare Standing` 後連接八個轉換（Transition），任選一個轉換後的狀態（State），將 `Motion` 替換為舞蹈動畫

然後新增元件 `Animator Locomotion Control`，將 `Locomotion Control` 設定為 `Disable`，如果不設定的話，在遊戲中轉動或移動時模型也會跟著動

檢查前後轉換是否正確，是否有對應條件（如前面為 `VRCEmote` 等於 `1`，後面為 `VRCEmote` 不等於 `1`）並且是否已將結束時間（Exit Time）關閉

在下一個狀態（「BlendOut Stand」）新增元件「Animator Locomotion Control」，將「Locomotion Control」設定為「Enable」，如果不設定的話，在遊戲裡將無法移動或轉動視角

### FX 層

進入 FX 層，在參數（Parameters）新增「Int」型參數，命名為「VRCEmote」

建立一個圖層，音樂開啟的條件為剛剛 Action 層進入舞蹈的條件（例如「VRCEmote」等於「1」），關閉的條件為剛剛 Action 層退出舞蹈的條件（例如「VRCEmote」不等於「1」），並將結束時間關閉

## 四、設定數值與選單

### 數值 (Parameters)

預設的數值第一個就是「VRCEmote」，如果沒有請新增，類型為「Int」

### 選單 (Menu)

選單新增一項，「Type」為「Toggle」，「Parameter」為「VRCEmote」，數值為在 Action 層設定的條件（例如「1」）