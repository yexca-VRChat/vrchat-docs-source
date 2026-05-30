---
title: 自分で MMD ダンスを踊る
---

:::caution[免責事項]
 本ドキュメントは gemini-3-flash-preview によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
 :::

> Animator Locomotion Control スクリプトを使った一例だよ。可愛くなったら、やっぱり踊りたくなっちゃうよね。

## 1. 準備するもの

- ダンスのアニメーションファイル
- 音楽

MMD ダンスの変換については、[固定世界 MMD](/additional/set_mmd) を参考にしてね。

ただし、ここではアニメーションの向きを調整する必要があるんだ。アニメーションファイルをクリックして、右側の「Root Transform Rotation (根の変換回転) - Based Upon (基づく先)」で「Original (元)」を選択してね。

## 2. 音楽スイッチの作成

### 1) オーディオの圧縮

オーディオファイルをクリックして、右側で圧縮形式（だいたいデフォルトの `Vorbis` で OK）を選んで、クオリティ（低いほど圧縮率が高くなるよ）を選択。最後に Apply（適用）をクリックすれば完了。

### 2) オーディオの追加

アバターに空のオブジェクトを作って、「Audio Source（オーディオソース）」コンポーネントを追加してね。

「AudioClip」に音楽をドラッグ＆ドロップ。「Spatial Blend（空間ブレンド）」を `1` に、「Doppler Level（ドップラーレベル）」を `0` に、「Volume Rolloff（音量減衰）」を「Linear Rolloff（線形減衰）」にする。あと、「Max Distance（最大距離）」は自由に調整していいよ（例えば 20 とか）。

### 3) オーディオのボーン追従（任意）

僕はいつも口のところに追従させてるかな。やり方は [オブジェクトのボーン追従](/additional/tied_bones) を見てみて。

### 4) オーディオスイッチの作成

スイッチの録画については [FX レイヤー - アイテムスイッチ](/editing/switch) を参考にしてね。

## 3. アニメーターへのアニメーション追加

### Action レイヤー

Action レイヤーを開いて、`Entry -> WaitForActionOrAFK -> Prepare Standing` の順にたどる。`Prepare Standing` から伸びてる 8 つのトランジション（遷移）のうちどれか一つを選んで、その先の状態（State）の `Motion` をダンスのアニメーションに置き換えよう。

それから `Animator Locomotion Control` コンポーネントを追加して、`Locomotion Control` を `Disable`（無効）に設定する。これを忘れると、ゲーム内で回転したり移動したりしたときにモデルも動いちゃうから注意。

前後のトランジションが正しいか、ちゃんと条件が設定されているか（例えば、前が `VRCEmote` が `1` に等しい、後ろが `VRCEmote` が `1` じゃない、とか）を確認してね。あと、`Has Exit Time`（終了時間あり）はオフにしておくこと。

次の状態（`BlendOut Stand`）に `Animator Locomotion Control` コンポーネントを追加して、`Locomotion Control` を `Enable`（有効）にする。これを設定しないと、ゲーム内で二度と移動や視点回転ができなくなっちゃうよ。

### FX レイヤー

FX レイヤーを開いて、Parameters に `Int` 型のパラメータを追加して、名前を `VRCEmote` にする。

新しいレイヤーを作って、音楽がオンになる条件をさっき Action レイヤーでダンスに入る時の条件（例えば `VRCEmote` が `1`）と同じにする。オフになる条件もダンスを抜ける時の条件（例えば `VRCEmote` が `1` じゃない）と同じにして、`Has Exit Time` をオフにしよう。

## 4. パラメータとメニューの設定

### パラメータ (Parameters)

デフォルトのパラメータだと一番上が `VRCEmote` になってるはず。もしなかったら追加してね。タイプは `Int` だよ。

### メニュー (Menu)

メニューに項目を追加して、「Type」を `Toggle`、「Parameter」を `VRCEmote` に設定。値は Action レイヤーで決めた数値（例えば `1`）にしてね。