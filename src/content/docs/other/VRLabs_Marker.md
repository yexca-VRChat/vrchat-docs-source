---
title: 添加一个可以写字的笔
---

> VRLabs 的东西真的很不错，可以看看其他的

## 工具

这里使用 VRLabs 的免费商品：[VRLabs Marker | マーカー – VRLabs – BOOTH](https://booth.pm/zh-cn/items/2911163)

## 前提

模型的数值可用位至少 13

模型的一级菜单至少一个可用位

## 一、导入

下载解压后拖入即可，然后在项目 “Assets-VRLabs-Marker” 找到 “Marker.cs” 将其拖到 “层级” 中模型的名字上，然后点击模型名字即可在 “检查器” 看到脚本

## 二、简介

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-VRLabsMarker/image.227jhy6gwfpc.webp)

**Avatar：** 显示要加入的模型名字，可替换

**Left-handed：** 装在左手上

**Write Defaults：** 动画层的东西，意为进入下一个状态时是否重置上一个状态所做的更改

**Gesture to draw：** 选择一个手势去写字，默认为 point

手势可参考：[数值](/summary/parameters/#%E4%B8%89%E6%89%8B%E5%8A%BF%E5%AF%B9%E5%BA%94%E6%95%B0%E5%80%BC)

**Adjustable brush size：** 可调节画笔的大小

**Adjustable eraser size：** 可调节橡皮擦的大小

**Use index finger to draw：** 使用食指书写，启用则去掉笔

**Enable local space：** 允许将画出来的东西放在身体某部位

**Half-Body：** 上一项启用，允许放在半身，即头，手和胸

**Full-Body：** 在 Half-Body 的基础上加上脚部

**Parameter memory bits needed：** 需要数值大小，调整上方选项可能会改变

**Generate Marker：** 开始

**Remove Marker：** 移除

## 三、创建

选择好后点击 “Generate Marker” ，等待一会

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-VRLabsMarker/image.38b74nyenpy0.webp)

进入 “播放” 模式，在 “Assets-VRLabs-Marker-Resources” 找到控制器 “M_Gesture” 拖到模型控制器，然后点击脚本的第一个按钮 “Adjust MarkerTarget transform” 开始调整画笔的位置

调整完成后，**记录画笔的位置信息**，然后退出播放模式填入

调整完成点击 “Finish Setup” 即可

## 移除

再次将脚本拖到模型上点击 “Remove Marker” 即可
