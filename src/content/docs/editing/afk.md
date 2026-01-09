---
title: Action 层 - AFK
---

> 对 Action 层修改的例子，修改模型的 AFK 动画

## 一、什么是 AFK

AFK 为使用 VR 游玩 VRChat 时摘下头显模型会做出的动作，默认为打坐

PC 游玩可通过按”End“键进入 AFK 状态

## 二、打开 Action 层控制器

找到控制器所在位置点击即可在“动画器”窗口显示（可在左方点击模型名字后再在右方“VRC Avatar Descripor”找到 Action 层点击定位）

## 三、替换动画

将左下角的“Afk Init”, “AFK”和“BlendOut”替换为想要的动画

### 一、想替换的动画文件只有一个

将这个动画放到“Afk Init”, “AFK”和“BlendOut”的”Motion“里

### 二、待替换的文件有三个

请确定进入动画，退出动画

进入动画放“Afk Init”的”Motion“

退出动画放“BlendOut”的”Motion“

第三个放“AFK”的”Motion“
