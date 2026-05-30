---
title: VRC Avatar Descriptor
---

:::caution[免責事項]
 本ドキュメントは gemini-3.5-flash によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
 :::

> VRChatのアバター設定ファイル

## ディスクリプターの追加

「Hierarchy（ヒエラルキー）」でモデル名を選択すれば、右側のコンポーネント検索から「VRC Avatar Descriptor」を追加できるよ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.48d8ypvvpq00.webp)

1つ目がVRCのディスクリプター（記述設定）で、2つ目がBlueprint（ブループリント）だよ。

## 1. View

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.3i0xx2om69e0.webp)

視点（ビューポイント）の球体を調整するためのもので、ゲーム内での視線の位置になるよ。だいたい両目の間に置くのが一般的かな。

「Edit」をクリックすると「Scene（シーン）」上で位置を調整できるよ。調整が終わったら「Return」をクリックしてね。

## 2. LipSync

これを設定すると、マイクで話したときにアバターが口を動かす（リップシンクする）ようになるよ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.40e4lutgnbi0.webp)

普通は「Auto Detect!」をクリックすれば自動で設定されるけど、うまく認識されない場合は手動で追加してね。

だいたい「Mode」は4番目の「Viseme Blend Shape」を選んで、モデルの「Body」や「Face」を「Face Mesh」にドラッグ＆ドロップすればOK。通常はこんな感じになるよ（自動で認識されない場合は手動で選んでね）。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.5mxy376p4sk0.webp)

もしこういったブレンドシェイプがなければ無効にしてね。「Mode」をデフォルト（Disabled）にするか、自分でボーンを使った実装方法を調べてみよう。

## 3. Eye Look

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.12j6dlfdgibk.webp)

目に関する設定だよ。「Enable」をクリックして設定を始めよう。

### General

目の動きの全体的な設定だよ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.2nr8oejxht60.webp)

「Calm-Excited」はまばたきの頻度に影響するよ。

「Shy-Confident」は、自分のアバターが他のプレイヤーのアバターを見る頻度や、目線が合う時間に影響するよ。

### Eyes

#### Transforms

目のボーン（眼骨）の位置を設定するよ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.3fvueycbkhw0.webp)

対応するボーンを探してドラッグ＆ドロップすればOK。なければスキップしてね。

#### Rotation States

目のボーンの回転範囲を設定するよ。これはさっきの「Transforms」に目のボーンを登録している場合だけ使える機能なんだ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.5lbk2uslvks0.webp)

前、上、下、左、右を見たときの目の動きを定義するよ。

「Preview」をクリックすると編集できて、シーン上で回転させることができるよ。「X」軸の左側にある鎖マークをクリックすると、左右の目を別々に設定できるようになるんだ。調整が終わったら「Return」をクリックして保存してね。

### Eyelids

まぶたの動き（目を閉じる、上を見る、下を見る）を設定するよ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.2ljvn9o52940.webp)

普通は「Eyelid Type」で「Blendshapes」を選択して、それから「Body」か「Face」を「Eyelids Mesh」にドラッグ＆ドロップするよ。

「Blendshapes」の項目で、目を閉じたとき、上を見たとき、下を見たときのブレンドシェイプを指定できるんだ。

**注意：**ここでの「上を見る」「下を見る」は、さっきの「Eyes-Rotation」での動きと同じだから、上で設定してあるならここは「-none-」を選んでも大丈夫だよ。

ゲーム内で目の動きがおかしくなったら、このモジュールで調整してみてね。面倒なら「disable（無効）」にしちゃっても大丈夫。

## Playable Layers

SDK3のAvatar Descriptorには、全部で5つのレイヤーがあるよ。それぞれこんな感じ：

- **Base**（またはLocomotionレイヤー）：アバターのしゃがみや伏せなどの動きを制御するよ。
- **Additive**：Baseレイヤーへの追加設定。例えば呼吸のアニメーションなんかを作るのに使うよ。
- **Gesture**（手勢レイヤー）：ハンドサイン（ジェスチャー）の作成や、尻尾を振る、羽を動かす、耳を動かすといった「待機モーション（アイドルアニメーション）」に使うよ。
- **Action**（アクションレイヤー）：例えばMMDダンスとかのモーションは、このレイヤーに入れるよ。
- **FX**：表情の切り替えや小物の出し入れ（ON/OFF）を制御するよ。ハンドサインによる表情変化もこのレイヤーで行うんだ。

他にも、追加で3つのレイヤーがあるよ（詳しく知りたいときは「[公式ドキュメント](https://docs.vrchat.com/docs/playable-layers#additional-poses)」を見てね）。

- T-Pose
- IK Pose
- Sitting Pose

## Lower Body

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.1mkbsgxttbuo.webp)

1つ目：頭が少し動いたときに、小刻みに足が動く（足踏みするような）効果。

2つ目：フルトラッキング（FBT）のときに、Locomotion（移動アニメーション）を有効にするかどうか。

## Expressions

[パラメーター](/summary/parameters)

[メニュー](/summary/menu)

## Colliders

新しくなったSDK3の特有機能で、頭、体、手足のコライダー（当たり判定）を設定できるよ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.775z0ziwkxc0.webp)

「Edit」をクリックすると、位置とサイズを設定できて、シーン上で編集できるようになるよ。

左側の鎖マークをクリックすると、左右別々に位置を設定できるんだ。

ここで設定するのはただのコライダーサイズだけじゃなくて、インタラクション（Contacts）システムの送信側（Sender）の大きさでもあるよ。

具体的な使い方はこちらを参考にしてね：[Contacts（インタラクション）について](/dynamics/contacts)