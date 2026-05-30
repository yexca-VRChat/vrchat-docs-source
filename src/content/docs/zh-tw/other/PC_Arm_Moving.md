---
title: PC 下下手部移動
---

:::caution[免責聲明]
 本文件由 gemini-3.5-flash 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> 沒有 VR 也可以有簡單的移動啦！

Two Axis Puppet

## 動畫

下載地址：[PC_Arm_Moving.unitypackage](https://raw.githubusercontent.com/yexca-VRChat/vrchat-docs-source/main/file/PC_Arm_Moving.zip)

{{% hint info %}}
原包我已經找不到了，而且我已經解除安裝 Unity，這是從我保留下來的專案檔案找的，不知道是否可用
{{% /hint %}}

## Arm_Rigth

> 註：此演示退出不重設

- 數值

Bool：Arm_Right_Toggle，Reset_Right

Float：Arm_1，Arm_2

- 圖層

新增 Avatar 遮罩

`Default` - `Arm_Right_Toggle=True` - `BlendTree` - `Reset_Right=True` - `Resrt` - `Reset_Right=False` - `Default`

- BlendTree

Arm_1，Arm_2

2D Freeform Directional (二維自由方向)

6 個 Add Motion Field

| Motion         | Pos X | Pos Y |
| -------------- | ----- | ----- |
| ArmDefault     | 0     | 0     |
| ArmLeft        | -1    | 0     |
| ArmRight       | 1     | 0     |
| ArmUp          | 0     | 1     |
| ArmDown        | 0     | -1    |
| ArmRightUpLeft | -0.75 | 0.75  |

- 選單

一、

Type：Two Axis Puppet

Parameter：Arm_Right_Toggle

Parameter Horizontal：Arm_1

Parameter Vertical：Arm_2

二、

Type：Button

Parameter：Reset_Right

## Arm_Both

> 註：此演示退出即重設

- 數值

Bool：Arm_Both_Toggle

Float：Arm_1，Arm_2

- 圖層

新增 Avatar 遮罩

`Default` - `Arm_Both_Toggle=True` - `BlendTree`

`BlendTree` - `Arm_Both_Toggle=False` - `Default`

- BlendTree

Arm_1，Arm_2

2D Freeform Directional (二維自由方向)

7 個 Add Motion Field

| Motion          | Pos X | Pos Y |
| --------------- | ----- | ----- |
| ArmBothDefault  | 0     | 0     |
| ArmBothLeft     | -1    | 0     |
| ArmBothRight    | 1     | 0     |
| ArmBothUp       | 0     | 1     |
| ArmBothDown     | 0     | -1    |
| ArmBothUpLeft   | -0.5  | 0.5   |
| ArmBothLeftDown | -0.5  | -0.5  |

- 選單

Type：Two Axis Puppet

Parameter：Arm_Both_Toggle

Parameter Horizontal：Arm_1

Parameter Vertical：Arm_2