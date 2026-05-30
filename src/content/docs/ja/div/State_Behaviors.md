---
title: ステートビヘイビア
---

:::caution[免責事項]
本ドキュメントは gemini-3.5-flash によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
:::

> Unityのステートビヘイビア（State Behavior）スクリプト

## 追加方法

「Animator（アニメーター） - Layers（レイヤー）」で特定のステートをクリックして、「Inspector（インスペクター）」で「Add Behavior（動作を追加）」をクリックすると、VRCのスクリプトが表示されるよ。

## Animator Layer Controller

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.6dk3lrhp6lc0.webp)

特定のレイヤーのウェイト（重み）を変更できるよ（ウェイトが1のときに通常再生される）。

レイヤーのウェイトは、他のステートが再びこのステートビヘイビアを実行してリセットするまで、そのまま維持されるんだ。

| 名前 | 目的（Purpose） |
| ---------------- | ------------------------------------------------------------------------------------- |
| Playable（プレイアブル） | 変更したいアニメーションレイヤーを選択する |
| Layer（レイヤー） | 影響を与えるレイヤーを選択する（0から開始）。レイヤー0（つまり最初のレイヤー）は変更できず、常に1のままだよ |
| Goal Weight | 変更後の目標ウェイト |
| Blend Duration | ブレンドにかける時間（秒単位）を設定する。0は即時反映を意味するよ |
| Debug String | デバッグ用の文字列。このスクリプトが実行されたときに、この文字列がログに出力されるよ |

## Animator Locomotion Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.7db4fkj18d80.webp)

アニメーション再生中に移動（ロコモーション）を無効化して、位置をロックするよ。

PC環境では視点の上下移動のみ可能で、VR環境では自由に動き回れるけれど、アバター（3Dモデル）自体は動かないんだ。

この状態は、他のステートが再びこのステートビヘイビアを実行して変更するまで維持されるよ。

| 名前 | 目的（Purpose） |
| ------------------ | ---------------------------------------------- |
| Locomotion Control | 「Disable」を選択すると、移動が無効化されるよ |
| Debug String | デバッグ用の文字列。このスクリプトが実行されたときに、この文字列がログに出力されるよ |

## Animator Temporary Pose Space

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.6ju2p7xy6nc0.webp)

ビューポイント（視点球）を調整して、アニメーション実行後の額（おでこ）の位置に移動させるよ。

調整されたビューポイントは、他のステートが再びこのステートビヘイビアを実行して変更するまで、そのまま維持されるんだ。

| 名前 | 目的（Purpose） |
| ------------ | ---------------------------------------------- |
| Pose Space | 「Enter」で変更が適用され、「Exit」で終了してデフォルトにリセットされるよ |
| Fixed Delay | 「Delay Time（遅延時間）」を固定時間（秒）にするか、アニメーションのパーセンテージにするかを設定するよ |
| Delay Time | ビューポイントは、ここで設定した時間が経過した後に調整されるよ |
| Debug String | デバッグ用の文字列。このスクリプトが実行されたときに、この文字列がログに出力されるよ |

## Animator Tracking Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.79846t7qt1c0.webp)

以下は、Google翻訳をベースに自分で手直しした内容だよ。

トラッキングの設定は、他のステートが再びこのステートビヘイビアを実行してリセットするまでそのまま維持されるよ。

Animator Tracking Controlを使うと、アバターの各部位のIKやシミュレーションによる動きの有効・無効を切り替えることができるんだ。「No Change」に設定するとその部位の現在の状態を維持し、「Tracking」にするとIKやシミュレーションの動きに追従するようになるよ。そして「Animation」にすると、その部位の動きを強制的にアニメーションに従わせることができるんだ。

もしすべてのIKトラッキングポイントを「Animation」に設定すると、アニメーションはネットワークIKを介して同期されるのではなく、純粋なアニメーションとしてリモートプレイヤーにも再生されるようになるよ。トラッキングタイプごとの「IKトラッキングポイント」は以下の通り：

- PC：頭、左手、右手
- 3点トラッキング：頭部、左手、右手
- 6点 / FBT（フルボディトラッキング）：頭部、左手、右手、腰（ヒップ）、左足、右足

シミュレーションされる「Eyes & Eyelid（目とまぶた）」を除いて、すべての部位はIKで制御されているよ。口と顎（Mouth and Jaw）はViseme（リップシンク）で制御されているんだ。

例えば、「Left Hand（左手）」と「Right Hand（右手）」を「Animation」に設定すると、IKで定義された手（と腕）の位置は無視されて、現在アクティブなアニメーションによる動きが手と腕の位置に適用されるよ。これらを再び「Tracking」に戻すと、代わりにIKが使用されるようになるんだ。

「Eyes & Eyelid」を「Animation」に設定すると、眼球の動きや瞬きが機能しなくなるよ。これを「Tracking」に設定すると、シミュレーションによる眼球の動きと自動の瞬きが再び有効になるんだ。

「Mouth and Jaw」を「Animation」に設定すると、リップシンク（Viseme）による口の動きが無効になるけれど、リップシンクのパラメーター自体は送信され続けるよ。「Tracking」に設定すると、リップシンクが再び有効になるよ。

## Avatar Parameter Driver

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.7e68k4hlb6g0.webp)

指定したパラメーターの値を変更するよ。

| 名前 | 目的（Purpose） |
| -------------------- | -------------------- |
| Add Parameter（ボタン） | 変更したいパラメーターを追加する |
| Name | 変更するパラメーターを選択する |
| Change Type | どのように変更するか（設定方法） |
| Value | 変更する値 |

## Playable Layer Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.62mmysx318o0.webp)

Animator Layer Controllerと似ているけれど、こちらはプレイアブルレイヤー（Playable Layer）全体のウェイトを変更するものだよ。