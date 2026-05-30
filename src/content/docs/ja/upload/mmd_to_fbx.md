---
title: MMDモデルをFBXに変換する方法
description: MMDのモデルをFBX形式に変換する方法
---

:::caution[免責事項]
 本ドキュメントは gemini-3-flash-preview によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
 :::

> 素敵なMMDモデルがたくさんあるけど、どうやってそのキャラ（アバター）になればいいんだろう？

## はじめに

MMDモデルはそのままではUnityで認識できないんだ。変換する方法は2つあるけど、この記事ではBlenderを使った変換方法を解説するよ。プラグインを使った変換については[将 MMD 模型导入 unity – yexca'Blog](https://blog.yexca.net/archives/28/)を参考にしてね。

## 一、Blenderとプラグインをダウンロードしてインストールする

### 1）Blender 2.93をダウンロード

公式ダウンロードリンク：[Index of /release/ (blender.org)](https://download.blender.org/release/)

2.93バージョンを探してダウンロードしてね。

### 2）プラグインをダウンロード

Githubリンク：[Releases · absolute-quantum/cats-blender-plugin (github.com)](https://github.com/absolute-quantum/cats-blender-plugin/releases)

ファイル直リンク

Github：[cats-blender-plugin-0-19-0.zip](https://github.com/absolute-quantum/cats-blender-plugin/releases/download/0.19.0/cats-blender-plugin-0-19-0.zip)

### 3）プラグインをインストール

Blenderを開いて「全般」を選択。左上の「編集」-「プリファレンス」-「アドオン」-「インストール」をクリック。プラグインをダウンロードしたディレクトリを探して「アドオンをインストール」をクリック。最後にチェックボックスにチェックを入れて有効化すればOK。

## 二、モデルのインポートと簡易処理

### 1）オブジェクトを削除

右上でオブジェクトを全選択してから、`delete` キーか `x` キーを押して削除しよう。

### 2）モデルをインポート

左上の「ファイル」-「インポート」-「MikuMikuDance Model」をクリックして、モデルを選んでダブルクリックでインポートしてね。

### 3）モデルをFix（修正）

右上に `<` マークがあるから、それをクリックしてメニューを展開。「CATS」タブを選択して、「Fix Model」をクリック。ちょっと時間がかかるから、のんびり待ってね。

これでエクスポートできる状態になったよ（左上の「ファイル」-「エクスポート」-「FBX」でOK）。

## 三、さらに細かい処理

前のステップだけでも使えるけど、そのままだとゲーム内で喋っても口が動かないんだ。

### 1）目の処理

画像のように設定してね。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-MMD2FBX/%E7%9C%BC%E9%83%A8%E8%BF%BD%E8%B8%AA.6a4bwsz8fyg0.webp)

「Create Eye Tracking」をクリックすれば完了。もし見つからない場合は「Basis（基本形）」を選んでみて。

### 2）口の処理

画像のとおりだよ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-MMD2FBX/%E5%98%B4%E9%83%A8%E5%8F%A3%E5%9E%8B.288ghboc1vvo.webp)

「Create Visemes」をクリックすればOK。

### 3）エクスポート

これで準備完了！左上の「ファイル」-「エクスポート」-「FBX」で書き出そう。

## 四、もっとこだわりたい人向け

ここからの処理はマテリアルを分離して、服を脱がせたりするギミックを作りたい人向けだよ。この効果を実現したい場合は、ステップ三をやり直す必要があるから注意してね。

### 1）マテリアルを分離

「Model Options」の中でマテリアルをクリックして、少し待つとマテリアルが分離されるよ。

### 2）Bodyを特定する

右上のリストで目のアイコンをクリックして表示・非表示を切り替えて、体（ボディ）がどこにあるか確認しよう。見つけたら名前を「Body」に変更してね。

### 3）マテリアルを結合

右上で `CTRL` を押しながら結合したい部位を選んで、「Model Options」の「Join Meshes - Selected」をクリックすればOK。

もちろんBodyも結合できるけど、名前は必ず「Body」にすること。あと「表情」のマテリアルは必ず「Body」の中に含めるようにしてね。

### 4）ステップ三をやり直す

せっかくここまで細かく作ったんだから、ステップ三の内容も忘れずに追加しておこう。