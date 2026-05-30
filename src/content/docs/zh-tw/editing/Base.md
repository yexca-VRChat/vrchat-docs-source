---
title: Base 層-蹲姿、趴姿
---

:::caution[免責聲明]
 本文件由 gemini-3.5-flash 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> 對 Base 層修改的範例，修改模型的蹲姿、趴姿

## 一、Unity 新增「動畫器」視窗

在左上方「Window -> Animation -> Animator」即可開啟動畫器視窗，可拖曳放至任意位置（如「Game」視窗右邊）

## 二、開啟 Locomotion 層控制器

找到控制器所在位置點擊即可在「動畫器」視窗顯示（可在左方點擊模型名稱後，再在右方「VRC Avatar Descriptor」找到 Base 層點擊定位）

## 三、修改站姿

在「Locomotion」層中找到「Standing」，點擊後在右方「檢視器」點擊「Motion」後的「vrc_StandingLocomotion」即可定位，然後點擊檔案，替換掉「檢視器」中「Motion」的**第三個**動畫「proxy_stand_still」即可

## 三、修改蹲姿

在「Locomotion」層中找到「Crouching」，點擊後在右方「檢視器」點擊「Motion」後的「vrc_CrouchingLocomotion」即可定位，然後點擊檔案，替換掉「檢視器」中「Motion」的**第一個**動畫「proxy_crouch_still」即可

## 四、修改趴姿

在「Locomotion」層中找到「Prone」，點擊後在右方「檢視器」點擊「Motion」後的「vrc_ProneLocomotion」即可定位，然後點擊檔案，替換掉「檢視器」中「Motion」的**第一個**動畫「proxy_low_crawl_still」即可

## 五、其他

其他姿勢如跳躍姿勢和下落姿勢請自行研究