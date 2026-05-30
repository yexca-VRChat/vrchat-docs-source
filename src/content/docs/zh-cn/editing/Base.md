---
title: Base 层-蹲姿，趴姿
---

> 对 Base 层修改的例子，修改模型的蹲姿，趴姿

## 一、Unity 添加“动画器”窗口

在左上方“Window-动画-动画器”即可打开动画器窗口，可拖动放至任意位置(如“游戏”窗口右边)

## 二、打开 Locomotion 层控制器

找到控制器所在位置点击即可在“动画器”窗口显示（可在左方点击模型名字后再在右方“VRC Avatar Descripor”找到 Base 层点击定位）

## 三、修改站姿

在“Locomotion”层中找到“Standing”，点击后在右方“检查器”点击“Motion”后的“vrc_StandingLocomotion”即可定位，然后点击文件，替换掉“检查器”中“Motion”的**第三个**动画“proxy_stand_still”即可

## 三、修改蹲姿

在“Locomotion”层中找到“Crouching”，点击后在右方“检查器”点击“Motion”后的“vrc_CrouchingLocomotion”即可定位，然后点击文件，替换掉“检查器”中“Motion”的**第一个**动画“proxy_crouch_still”即可

## 四、修改趴姿

在“Locomotion”层中找到“Prone”，点击后在右方“检查器”点击“Motion”后的“vrc_ProneLocomotion”即可定位，然后点击文件，替换掉“检查器”中“Motion”的**第一个**动画“proxy_low_crawl_still”即可

## 五、其他

其他姿势如跳跃姿势和下落姿势请自行研究
