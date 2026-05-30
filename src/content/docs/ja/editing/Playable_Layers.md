---
title: デフォルトのレイヤーとメニューの追加
---

:::caution[免責事項]
 本ドキュメントは gemini-3.5-flash によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
 :::

> 改変を始める前の必須準備だよ！

SDK3のモデルなら、すでにパラメータやメニューが設定されているかもしれないけど、もし設定されていなければ以下の手順を参考にしてみてね。

## アニメーションレイヤー

モデルに `Base`、`Action`、そして `FX` のデフォルトコントローラーを追加するよ。

「SDK2からSDK3への変換モデル」や「MMDモデル」の場合は、「VRC Avatar Descriptor」の「Playable Layers」にある「Customize」をクリックして、対応するレイヤーの横にある「Default [レイヤー名]」をクリックしよう。

SDK3モデルなら、すでに設定されているかもしれないから、足りないレイヤーがあれば追加してね。

デフォルトのコントローラーはすべて「Assets\VRCSDK\Examples3\Animation\Controllers」の中に用意されているよ。

- Base: vrc_AvatarV3LocomotionLayer.controller
- Action: vrc_AvatarV3ActionLayer.controller
- FX: vrc_AvatarV3HandsLayer.controller

見つけたら、クリックして「CTRL+D」を押せばファイルを複製（クローン）できるよ。「F2」キーで名前を変更できるから、わかりやすい名前に変えたら、モデルがあるフォルダに新しいフォルダを作ってそこにドラッグ＆ドロップで移動させよう。

あとは、そのファイルを「VRC Avatar Descriptor」の「Playable Layers」の対応する場所にドラッグ＆ドロップすればOK！

## パラメータとメニュー

### 1）パラメータとメニューの作成

パラメータとメニューを保存するために、モデルのフォルダの中に新しくフォルダを作っておくと便利だよ。

「Assets」内で右クリックして、「Create」→「VRChat」→「Avatars」→「Expression Parameters」の順に選択して、名前を「Parameters」に変更しよう。

もう一度右クリックして、「Create」→「VRChat」→「Avatars」→「Expression Menu」を選択し、名前を「MainMenu」に変更するよ。

### 2）モデルにパラメータとメニューを設定する

「SDK2からSDK3への変換モデル」や「MMDモデル」の場合は、「VRC Avatar Descriptor」の「Expressions」にある「Customize」をクリックして、さっき作った「MainMenu」を「Menu」に、「Parameters」を「Parameters」のところにそれぞれドラッグ＆ドロップしよう。