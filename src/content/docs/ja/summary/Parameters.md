---
title: パラメーター
---

:::caution[免責事項]
 本ドキュメントは gemini-3-flash-preview によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
 :::

> 改変するときに、どんなパラメーターが使えるかな？

遷移（トランジション）の条件には公式の数値が使えるよ。「Animator - Parameters」に、公式と同じ名前と型のパラメーターを追加するだけでOKだ。

## 一、数値の型

Animatorにパラメーターを追加するとき、4つの型があるよ。

- Float：浮動小数点数。小数だと思えばいいよ。

- Int：整数型。整数のことだね。

- Bool：ブール型。「True」か「False」の2つの値しかないよ。

- Trigger：トリガー。ブール型に似てるけど、trueに設定されたあと、遷移で使われると自動的にfalseに戻るんだ（VRCではあまり使わないかも？）。

下の表はVRChatの数値型（1つのアバターの「数値」上限は「256 bits」だよ）。

| 数値型 | 範囲 | ストレージ容量 | 備考 |
| :------- | :---------------- | :------- | :---------------------------------------------------------------- |
| int      | `0` ~ `255`       | 8 bits   | 符号なし 8-bit int。 |
| float    | `-1.0` ~ `1.0`    | 8 bits   | 符号あり 8-bit [minifloat](https://en.wikipedia.org/wiki/Minifloat) |
| bool     | `True` or `False` | 1 bit    | |

> スイッチ（ON/OFF）を作りたいなら、Animatorのパラメーター名と型を、VRCのExpression Parametersの設定と全く同じにする必要があるよ。

## 二、公式パラメーター一覧

（下の表の日本語説明は僕の翻訳だから、間違いがあるかもしれない。役に立ちそうなものや、僕が使ったことがあるパラメーターだけ翻訳したよ。）

| Name(名前) | Description(説明) | Type(型) | Sync(同期) |
| :------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- | :------------- |
| IsLocal | アバターがローカル（自分）で使われているならTrue、そうでなければFalse | Bool | None |
| [Viseme](https://docs.vrchat.com/docs/animator-parameters#viseme-values)(口型) | [Oculus viseme index](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference) (`0-14`)。Jawbone/Jawflapを使用している場合、範囲は音量を示す`0-100`になるよ | Int | Speech |
| Voice | マイクの音量 (`0.0-1.0`) | Float | Speech |
| [GestureLeft](https://docs.vrchat.com/docs/animator-parameters#gestureleft-and-gestureright-values)(左手ジェスチャー) | 左手コントローラーのジェスチャー (0-7) | Int | IK |
| [GestureRight](https://docs.vrchat.com/docs/animator-parameters#gestureleft-and-gestureright-values)(右手ジェスチャー) | 右手コントローラーのジェスチャー (0-7) | Int | IK |
| GestureLeftWeight | 左トリガーのアナログ値 (0.0-1.0)† | Float | IK |
| GestureRightWeight | 右トリガーのアナログ値 (0.0-1.0)† | Float | IK |
| AngularY | Y軸方向の角速度 | Float | IK |
| VelocityX(X方向の速度) | 左右の移動速度 (m/s) | Float | IK |
| VelocityY(Y方向の速度) | 上下の移動速度 (m/s) | Float | IK |
| VelocityZ(Z方向の速度) | 前後の移動速度 (m/s) | Float | IK |
| Upright(直立度) | どれくらい「直立」しているか。0は伏せ状態、1は直立状態だよ | Float | IK |
| Grounded(接地) | 接地していればTrue（ジャンプ中はFalseになるよ） | Bool | IK |
| Seated | ステーション（椅子など）に座っていればTrue | Bool | IK |
| AFK | 離席状態かどうか (HMDの近接センサー / Endキー) | Bool | IK |
| Expression1 – Expression16 | ユーザー定義パラメーター、Int (`0`–`255`) か Float (`-1.0`–`1.0`) | Int / Float | IK or Playable |
| [TrackingType](https://docs.vrchat.com/docs/animator-parameters#trackingtype-parameter) | 下記の説明を参照 | Int | Playable |
| VRMode | VRモードなら`1`、デスクトップモードなら`0`を返すよ | Int | IK |
| MuteSelf | ミュート状態なら`true`、そうでなければ`false`を返すよ | Bool | Playable |
| InStation | ステーション内にいれば`true`、そうでなければ`false`を返すよ | Bool | IK |

## 三、ジェスチャー対応表

ジェスチャーでアニメーションをトリガーする時に使うよ。

| Index (数値) | Gesture (ジェスチャー) | PCショートカット |
| :----------- | :----------------- | -------- |
| 0            | Neutral (自然)     | Shift+F1 |
| 1            | Fist (握拳)        | Shift+F2 |
| 2            | HandOpen (パー)  | Shift+F3 |
| 3            | fingerpoint (指差し)   | Shift+F4 |
| 4            | Victory (ピース)   | Shift+F5 |
| 5            | RockNRoll (アイラブユー) | Shift+F6 |
| 6            | HandGun (手甲)     | Shift+F7 |
| 7            | ThumbsUp (グッド)    | Shift+F8 |

> 注：PCでの操作：左Shiftが左手、右Shiftが右手だよ。

## 四、リップシンク（ビゼム）対応表

リップシンクの参考資料：[Viseme Reference: Unity | Oculus Developers](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference)

喋っている時にアニメーションを動かしたい場合に使えるよ。

| Viseme Parameter | Viseme |
| :--------------- | :----- |
| 0                | `sil`  |
| 1                | `PP`   |
| 2                | `FF`   |
| 3                | `TH`   |
| 4                | `DD`   |
| 5                | `kk`   |
| 6                | `CH`   |
| 7                | `SS`   |
| 8                | `nn`   |
| 9                | `RR`   |
| 10               | `aa`   |
| 11               | `E`    |
| 12               | `ih`   |
| 13               | `oh`   |
| 14               | `ou`   |