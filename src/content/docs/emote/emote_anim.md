---
title: 添加手势表情
---

> 手势是一个数值，检测数值变化改变形态键，从而实现对应手势呈现对应表情

## 前言

本质是用模型的“Body”或“Face”的“BlendShapes”制作，如果没有，可能需要去一些建模软件进行添加

## 一、要修改的动画

找到模型“FX 层”，在图层“Left Hand”或“Right Hand”找到要修改的动画（可 CTRL+D 一个避免破坏原文件）

以右手的“Point”为例

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-EmoteAnim/image.4tnhuoe1z3s0.webp)

## 二、修改动画

在“层级”中将模型“CTRL+D”，然后将原模型隐藏，把要修改的动画文件拖入复制的模型上，在“动画”窗口点击录制，然后找到模型的“Body”或“Face”的“BlendShapes”并展开修改相应数值完成表情制作

**注意：**务必使用复制出的模型制作，不然可能会变得很奇怪

在制作多个表情时，请将所有表情涉及到的 BlendShaper 的值设为 0(除当前表情使用的)，防止表情冲突
图方便可以将所有 BlendShaper 设为 0

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-EmoteAnim/image.14s44hc2egg0.webp)

## 三、后续

关闭“录制”和“预览”，将制作好的动画替换原动画，复制的模型删除
