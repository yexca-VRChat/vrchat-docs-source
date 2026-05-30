---
title: 文字が書けるペンを追加する
---

:::caution[免責事項]
 本ドキュメントは gemini-3-flash-preview によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
 :::

> VRLabsのツールは本当にクオリティが高いから、他のもチェックしてみるといいよ。

## ツール

ここでは VRLabs の無料アイテムを使うよ：[VRLabs Marker | マーカー – VRLabs – BOOTH](https://booth.pm/zh-cn/items/2911163)

## 前提

アバターのパラメーター（Expression Parameters）の空き容量が少なくとも 13 必要。

アバターのメニューの第1階層に、少なくとも1つの空きスロットが必要。

## 1. インポート

ダウンロードして解凍したら、プロジェクトにドラッグ＆ドロップしてね。次に「Assets-VRLabs-Marker」フォルダ内にある「Marker.cs」を見つけて、それを「ヒエラルキー」にいるアバターの名前にドラッグ＆ドロップする。アバターの名前をクリックすると、「インスペクター」でスクリプトが確認できるよ。

## 2. 概要

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-VRLabsMarker/image.227jhy6gwfpc.webp)

**Avatar：** ペンを追加するアバターが表示される。入れ替えも可能。

**Left-handed：** 左手に装着する。

**Write Defaults：** アニメーションレイヤーの設定。次の状態に遷移する際、前の状態で行った変更をリセットするかどうか。

**Gesture to draw：** 書くときに使うジェスチャーを選択する。デフォルトは point。

ジェスチャーについてはこちらを参考にしてね：[数値](/summary/parameters/#%E4%B8%89%E6%89%8B%E5%8A%BF%E5%AF%B9%E5%BA%94%E6%95%B0%E5%80%BC)

**Adjustable brush size：** ブラシのサイズを調整できるようにする。

**Adjustable eraser size：** 消しゴムのサイズを調整できるようにする。

**Use index finger to draw：** 人差し指で書くようにする。有効にするとペンのモデルは表示されなくなるよ。

**Enable local space：** 書いたものを体の一部に追従（固定）できるようにする。

**Half-Body：** 上の項目を有効にした場合、上半身（頭、手、胸）に固定できるようになる。

**Full-Body：** Half-Body に加えて、足にも固定できるようになる。

**Parameter memory bits needed：** 必要なパラメーターの容量。上のオプションを変更すると数値が変わることがあるよ。

**Generate Marker：** 生成を開始する。

**Remove Marker：** 削除する。

## 3. 作成

設定が終わったら「Generate Marker」をクリックして、少し待とう。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-VRLabsMarker/image.38b74nyenpy0.webp)

Unity の「再生（Play）」モードに入って、「Assets-VRLabs-Marker-Resources」にあるコントローラー「M_Gesture」をアバターの Animator コントローラーにドラッグ＆ドロップする。その後、スクリプトの一番上のボタン「Adjust MarkerTarget transform」をクリックして、ペンの位置調整を始めるよ。

調整が終わったら、**ペンの位置情報をメモして**、再生モードを解除してからその数値を入力してね。

調整が終わったら「Finish Setup」をクリックすれば完了！

## 削除

もう一度スクリプトをアバターにドラッグ＆ドロップして、「Remove Marker」をクリックすれば削除できるよ。