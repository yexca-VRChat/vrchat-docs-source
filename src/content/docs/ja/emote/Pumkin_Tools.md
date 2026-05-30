---
title: ワンクリックコピー
---

:::caution[免責事項]
 本ドキュメントは gemini-3.5-flash によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
 :::

> 表情を作った後にDynamic Boneを設定し直すの、めちゃくちゃ面倒くさいよね。ワンクリックで復元してみよう！

## Blenderからのエクスポート

マテリアルは変更しちゃダメ。元のモデルと同じにする必要があるよ（たぶんボーンも変更不可）。

## Pumkin's Avatar Tools

GitHub：<https://github.com/rurre/PumkinsAvatarTools>

ダイレクトダウンロード：GitHub V1.1.1：[PumkinsAvatarTools_v1.1.1.unitypackage](https://github.com/rurre/PumkinsAvatarTools/releases/download/1.1.1/PumkinsAvatarTools_v1.1.1.unitypackage)

## モデルのセットアップ

ツールとモデルをUnityにインポートする。

それから、モデルのリグ（Animation Type）を`Humanoid`に変更して、マテリアル設定を`Use External Materials`（外部マテリアルを使用）にする。そのあと、必要に応じてマテリアルのところでテクスチャを選択し直すか、元のモデルのマテリアルをそのまま使ってね。

モデルをシーン（Scene）にドラッグ＆ドロップして、メニューから`Pumkin-Tools-Avatar Tools`を開くよ。

`Avatar`の項目に今回のモデルを選択して、`Copy Components`の`Copy From`にコピー元のプレハブ（Prefab）を指定する。

あとは`Copy Selected`をクリックするだけでOK！