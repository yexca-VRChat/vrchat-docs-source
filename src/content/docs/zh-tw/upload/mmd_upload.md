---
title: MMD 模型上傳
description: MMD 模型上傳到 VRChat
---

:::caution[免責聲明]
 本文件由 gemini-3-flash-preview 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> 這下可以用海量的 MMD 模型啦 ~~(雖然很麻煩就是了)~~

## 一、MMD 模型匯入 Unity

[上一篇文章](/upload/mmd_to_fbx)講述了 MMD 模型轉換為 FBX，現在將 MMD 模型所有的檔案都匯入 Unity

## 二、MMD 模型適配

### 1）材質

點擊 FBX 檔案，右方點擊「Materials - Location - Use External Materials (Legacy)」，然後點擊 Apply（套用），等待一會兒

### 2）骨骼

依序點擊「Rig - Animation Type - Humanoid」，點擊 Apply，等待一會兒

然後點擊「Configure...」進入查看骨骼

首先確定是不是 T-pose，如果不是，右邊滑到最下方，點擊「Pose - Enforce T-Pose」，然後檢查骨骼是否錯誤（一般有錯誤在「Head」）

檢查完畢後點擊「Done」

## 三、新增 SDK 描述檔案

### 1）調整視角球

「VRC Avatar Descriptor」第一個為「View」，即我們要調整的視角球，點擊「Edit」即可在 Unity 調整，大概放在額頭前，然後回到腳本點擊「Return」即可

### 2）新增「Viseme」

如果未在 Blender 設定請忽視 (即 [MMD 模型轉換為 FBX 第三步](/upload/mmd_to_fbx/#%E4%B8%89%E8%BF%9B%E4%B8%80%E6%AD%A5%E5%A4%84%E7%90%86) 未做)，請看 [第四步](/upload/mmd_upload/#%E5%9B%9B%E6%B7%BB%E5%8A%A0%E5%8A%A8%E9%AA%A8%E5%92%8C%E7%A2%B0%E6%92%9E) 或直接上傳

「VRC Avatar Descriptor」第二個為「LipSync」，「Mode」選擇「Viseme Blend Shape」，左方將「Body」拖入「Face Mesh」會自動辨識

### 3）新增「Eye Look」

「VRC Avatar Descriptor」第三個為「Eye Look」，點擊「Enable」，將左右眼睛骨骼拖入對應位置

下方「Eyelids」的「Eyelid Type」選擇「Blendshapes」，然後將「Body」拖入，即可自動辨識

## 四、新增動骨和碰撞

{{% hint warning %}}
**注意**  
VRChat 官方指出 Dynamic bone 過段時間將會被完全移除，請學習或新增新動骨 PhysBones
{{% /hint %}}

新增動骨和碰撞是需要反覆嘗試的，而且比較麻煩，如果不加的話在遊戲裡移動模型的衣服頭髮不會動

### 1）動骨

在想要「動」的地方新增動骨，例如裙子、頭髮等，這裡以裙子為例

找到裙子所在的骨骼，點擊後在右方點擊「Add Component (新增元件)」，搜尋「Dynamic bone」，新增

然後將骨骼放入「Dynamic bone」的「Root」，調整四個參數

Damping 阻力
Elasticity 彈性

下面兩個限制範圍
Stiffness 剛性 (比下面的小)
Inert 惰性

以下參數僅供參考，具體請自行嘗試最佳參數

例：裙子參數 0.6、0.06、0.2、0.4

胸部參數 0.08、0.06

頭髮參數 0.7、0.06、0.6、0.85

此處參數參考：[VRchat 模型之 unity – 星空月零 – 博客園](https://www.cnblogs.com/raitorei/p/12008887.html)

    @莎莎 衣服 0.9  0.03  0.1  0

    @JIUJIU 特柔還不會穿模 0.7  0.06  0.9  0.9

    @Ryuu-San 耳朵和尾巴 0.7  0.07  0.666  0.52

此處參數參考：[VRCHAT 模型上傳常見問題匯總\_Ryuu-San 的博客-CSDN 博客](https://blog.csdn.net/TopOnelong/article/details/79002465)

### 2）碰撞

動骨做完後在「遊戲模式」下移動模型可以看到效果（穿模），這時可透過新增碰撞解決，例如腿部碰撞

在想要新增碰撞的骨骼下方新建一個空物件（右擊骨骼，點擊「Create Empty」）

點擊這個空物件，在右方新增元件「Dynamic bone Collider」，調整大小和高度

### 3）碰撞加入動骨

點擊想放入碰撞並有動骨的骨骼 (例如裙子)，將上一步建立的物件拖入右方動骨元件的 Colliders (例如腿部碰撞) 即可（這樣腿部的碰撞就可以和裙子動骨碰撞，從而使裙子撐起來）

此時打開「播放模式」即可看到效果

## 五、上傳

上傳參考 [成品模型上傳第四步](/upload/upload/#%E5%9B%9B%E4%B8%8A%E4%BC%A0%E6%A8%A1%E5%9E%8B)

關於「VRC Avatar Descriptor」其他部分將在後續文章描述