---
title: Moving Hands on PC
---

:::caution[Disclaimer]
This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Simple hand movement is possible even without VR!

Two Axis Puppet

## Animations

Download link: [PC_Arm_Moving.unitypackage](https://raw.githubusercontent.com/yexca-VRChat/vrchat-docs-source/main/file/PC_Arm_Moving.zip)

{{% hint info %}}
I can't find the original package anymore, and I've already uninstalled Unity. This was retrieved from my backed-up project files, so I'm not sure if it still works.
{{% /hint %}}

## Arm_Right

> Note: This demo does not reset upon exiting.

- Parameters

Bool: Arm_Right_Toggle, Reset_Right

Float: Arm_1, Arm_2

- Layers

Add Avatar Mask

`Default` - `Arm_Right_Toggle=True` - `BlendTree` - `Reset_Right=True` - `Reset` - `Reset_Right=False` - `Default`

- BlendTree

Arm_1, Arm_2

2D Freeform Directional

6 Add Motion Fields

| Motion         | Pos X | Pos Y |
| -------------- | ----- | ----- |
| ArmDefault     | 0     | 0     |
| ArmLeft        | -1    | 0     |
| ArmRight       | 1     | 0     |
| ArmUp          | 0     | 1     |
| ArmDown        | 0     | -1    |
| ArmRightUpLeft | -0.75 | 0.75  |

- Menu

1.

Type: Two Axis Puppet

Parameter: Arm_Right_Toggle

Parameter Horizontal: Arm_1

Parameter Vertical: Arm_2

2.

Type: Button

Parameter: Reset_Right

## Arm_Both

> Note: This demo resets upon exiting.

- Parameters

Bool: Arm_Both_Toggle

Float: Arm_1, Arm_2

- Layers

Add Avatar Mask

`Default` - `Arm_Both_Toggle=True` - `BlendTree`

`BlendTree` - `Arm_Both_Toggle=False` - `Default`

- BlendTree

Arm_1, Arm_2

2D Freeform Directional

7 Add Motion Fields

| Motion          | Pos X | Pos Y |
| --------------- | ----- | ----- |
| ArmBothDefault  | 0     | 0     |
| ArmBothLeft     | -1    | 0     |
| ArmBothRight    | 1     | 0     |
| ArmBothUp       | 0     | 1     |
| ArmBothDown     | 0     | -1    |
| ArmBothUpLeft   | -0.5  | 0.5   |
| ArmBothLeftDown | -0.5  | -0.5  |

- Menu

Type: Two Axis Puppet

Parameter: Arm_Both_Toggle

Parameter Horizontal: Arm_1

Parameter Vertical: Arm_2