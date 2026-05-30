---
title: Baseレイヤー - しゃがみ、伏せポーズ
---

:::caution[免責事項]
本ドキュメントは gemini-3.5-flash によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
:::

> Baseレイヤーを変更する例として、モデルのしゃがみポーズと伏せポーズを変更する方法を紹介するよ。

## 1. Unityに「Animator（アニメーター）」ウィンドウを追加する

左上の「Window -> Animation -> Animator」からアニメーターウィンドウを開くことができるよ。好きな場所にドラッグして配置してね（「Game」ウィンドウの右側とかがおすすめ）。

## 2. Locomotionレイヤーのコントローラーを開く

コントローラーがある場所を見つけてクリックすると、「Animator」ウィンドウに表示されるよ（左側でモデルの名前をクリックした後、右側の「VRC Avatar Descriptor」でBaseレイヤーを見つけてクリックすると、場所を特定できるよ）。

## 3. 立ちポーズを変更する

「Locomotion」レイヤーの中で「Standing」を見つけてクリックする。右側の「Inspector（インスペクター）」で「Motion」の先にある「vrc_StandingLocomotion」をクリックすると場所を特定できるから、そのファイルをクリックして、「Inspector」の「Motion」の**3番目**のアニメーション「proxy_stand_still」を置き換えるだけでOK。

## 4. しゃがみポーズを変更する

「Locomotion」レイヤーの中で「Crouching」を見つけてクリックする。右側の「Inspector」で「Motion」の先にある「vrc_CrouchingLocomotion」をクリックして場所を特定したら、ファイルをクリックして、「Inspector」の「Motion」の**1番目**のアニメーション「proxy_crouch_still」を置き換えれば完了だよ。

## 5. 伏せポーズを変更する

「Locomotion」レイヤーの中で「Prone」を見つけてクリックする。右側の「Inspector」で「Motion」の先にある「vrc_ProneLocomotion」をクリックして場所を特定したら、ファイルをクリックして、「Inspector」の「Motion」の**1番目**のアニメーション「proxy_low_crawl_still」を置き換えてね。

## 6. その他

ジャンプや落下ポーズなど、他のポーズについては自分でいろいろ試してみてね！