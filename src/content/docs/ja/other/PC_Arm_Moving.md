---
title: PCで手を動かす
---

:::caution[免責事項]
本ドキュメントは gemini-3.5-flash によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
:::

> VRがなくても、簡単な手の動きができるよ！

Two Axis Puppet

## アニメーション

ダウンロードリンク：[PC_Arm_Moving.unitypackage](https://raw.githubusercontent.com/yexca-VRChat/vrchat-docs-source/main/file/PC_Arm_Moving.zip)

{{% hint info %}}
元のパッケージはもう見つからなくて、しかもUnityもアンインストールしちゃったから、これは残ってたプロジェクトファイルから探してきたものなんだ。使えるかどうかはわからないけど、参考にしてね。
{{% /hint %}}

## Arm_Rigth

> 注：このデモは、メニューを閉じてもリセットされないよ

- パラメータ

Bool：Arm_Right_Toggle、Reset_Right

Float：Arm_1、Arm_2

- レイヤー

Avatarマスクを追加

`Default` - `Arm_Right_Toggle=True` - `BlendTree` - `Reset_Right=True` - `Resrt` - `Reset_Right=False` - `Default`

- BlendTree

Arm_1、Arm_2

2D Freeform Directional（2次元自由方向）

6つの Add Motion Field

| Motion         | Pos X | Pos Y |
| -------------- | ----- | ----- |
| ArmDefault     | 0     | 0     |
| ArmLeft        | -1    | 0     |
| ArmRight       | 1     | 0     |
| ArmUp          | 0     | 1     |
| ArmDown        | 0     | -1    |
| ArmRightUpLeft | -0.75 | 0.75  |

- メニュー

1.

Type：Two Axis Puppet

Parameter：Arm_Right_Toggle

Parameter Horizontal：Arm_1

Parameter Vertical：Arm_2

2.

Type：Button

Parameter：Reset_Right

## Arm_Both

> 注：このデモは、メニューを閉じるとリセットされるよ

- パラメータ

Bool：Arm_Both_Toggle

Float：Arm_1、Arm_2

- レイヤー

Avatarマスクを追加

`Default` - `Arm_Both_Toggle=True` - `BlendTree`

`BlendTree` - `Arm_Both_Toggle=False` - `Default`

- BlendTree

Arm_1、Arm_2

2D Freeform Directional（2次元自由方向）

7つの Add Motion Field

| Motion          | Pos X | Pos Y |
| --------------- | ----- | ----- |
| ArmBothDefault  | 0     | 0     |
| ArmBothLeft     | -1    | 0     |
| ArmBothRight    | 1     | 0     |
| ArmBothUp       | 0     | 1     |
| ArmBothDown     | 0     | -1    |
| ArmBothUpLeft   | -0.5  | 0.5   |
| ArmBothLeftDown | -0.5  | -0.5  |

- メニュー

Type：Two Axis Puppet

Parameter：Arm_Both_Toggle

Parameter Horizontal：Arm_1

Parameter Vertical：Arm_2