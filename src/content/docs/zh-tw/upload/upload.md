---
title: 成品模型上傳
description: VRChat 成品模型的上傳
lastmod: 2024-12-31
---

:::caution[免責聲明]
 本文件由 gemini-3-flash-preview 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> 終於成為 TA ///

成品模型是指別人幾乎什麼都做好了的模型，自己只需要上傳就行。
通常可在 [Booth](https://booth.pm/zh-cn) 上購買。

## 一、Unity 中文化準備

### 1）從 Unity Hub 安裝簡體中文元件

打開 Unity Hub 並登入，點擊左方 `安裝`，找到 `2019.4.31f1c1` (c1 指中國版)，點擊右方齒輪，選擇 `新增模組`，找到 `簡體中文` 後選擇並安裝。

### 2）沒有「新增模組」或未從 Unity Hub 安裝

註：此方法我未試過，不保證可以使用。

#### <1>下載 zh-cn.po 檔案

下載連結：[zh-cn.po](https://raw.githubusercontent.com/yexca-VRChat/vrchat-docs-source/main/file/zh-cn.zip)

#### <2>把檔案放在 Unity 安裝目錄下

```markdown
C:\Program Files\Unity\2019.4.31f1c1\Editor\Data\Localization
```

如果沒有這個目錄請自行建立。

## 二、建立 Unity 專案並中文化

### 1）新增個人授權

點擊左上角頭像處「管理授權」，選擇「新增 - 取得免費的個人版授權 - 同意並取得個人版授權」即可。

### 2）建立新的 Unity 專案

點擊「新專案」，選擇「3D」，命名專案，選擇位置後點擊「建立」，等待一會兒即可。

### 3）中文化

如果想深入學習 Unity 建議使用英文原版。

在「Editor-Preferences-Languages」下選擇「簡體中文」。

## 三、匯入檔案 (unitypackage)

匯入檔案可以連點兩下或者直接拖入。

### 需要匯入的檔案

1）動骨插件 (Dynamic Bone 1.2.0.unitypackage)

2）著色器插件 (UTS2.unitypackage)

3）VRCSDK (VRCSDK3-AVATAR-2022.02.16.19.13_Public.unitypackage (新 SDK 更新了，不是這個名字))

4）模型檔案

## 四、上傳模型

### 1）拖入模型

在下方的 `Assets` 裡找到 prefab 檔案或場景檔案。

#### <1>prefab 檔案

拖入左方場景即可。

#### <2>場景檔案

連點兩下打開即可。

### 2）打開 VRC 控制面板

點擊上方 `VRChat SDK - Show Control Panel` ，登入 VRChat 帳號後點擊 `Builder`。

#### <1>如果下方「Build & Publish for Windows」可以點擊

直接點擊然後等待一會兒即可。

#### <2>如果不能點擊

上方應該有六角形紅色驚嘆號，每個後方應該都有 `Auto Fix`，把每個都點擊然後點 `Build & Publish for Windows` 即可。  
如果點完還不能上傳，我還沒遇過這種情況。

#### <3>如果沒有模型資訊，顯示 "A VRCAvatarDescriptor is required to build an Avatar"

這種情況說明您上傳的模型是 SDK2 的模型，請建立新專案匯入 SDK2 上傳或升級為 SDK3 模型 (後面的文章會有，推薦升級，說不定哪天 SDK2 模型就不被支援了)。

### 3）填寫模型資訊

等待建立成功後可以將 `VRChat 上傳面板` 關閉。

Avatar Name 即為模型的名字。

Description 為模型的描述。

下一個警告不用管。

Sharing 為上傳模型是否公開，`Private` 為私密，`Publish` 為公開（即是否允許他人複製，一般選 Private）。

把最下方的核取方塊勾選即可上傳 (點擊 `Upload`)。

### 4）建立模型封面

上一步填完即可上傳，但是右方圖片可能我們並不滿意。

#### <1>建立物件

回到場景，在左方 `VRCCam` 上右鍵點擊選擇 `3D 物件 - 四邊形 (Quad)`。

右方的 `Transform` 中，`位置`的 z 軸填入 `2.6`，`縮放`的 x 軸和 y 軸分別填入 `4` 和 `3`。

#### <2>新增圖片

找到一張想要上傳的圖片拖入 Unity，然後建立一個材質 (下方 `Assets` 右鍵點擊 `建立` - `材質`)，點擊`材質`，右方 `Shader` 選擇一個，例如 `VRChat-Mobile-Toon Lit`，然後將圖片拖入右方材質裡，最後將材質拖入 `場景` 裡剛建立的四邊形上即可。

#### <3>上傳模型

這樣操作後模型會擋到圖片，可以在左方點擊模型，右邊模型名字旁 (左邊) 有一個核取方塊，取消掉即可隱藏模型。

然後回到`遊戲 (Game)` 介面，就可以在右方看到剛剛做的圖片。

此時再次點擊 `Upload` 即可。

## 五、遇到錯誤，上傳失敗

> 重新啟動解決 90% 的問題，重新安裝解決 99% 的問題，重新買一台解決 100% 的問題。

重新上傳，重新打開 Unity，建立新專案上傳，重新啟動電腦，網路問題。

如果是藍圖問題 (錯誤訊息有 `BluePrint`)，可在左方點擊角色，然後右方滑到最底下點擊 `Detach` 後重新上傳即可。