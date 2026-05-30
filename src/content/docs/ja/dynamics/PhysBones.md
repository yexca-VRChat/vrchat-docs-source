---
title: PhysBones
---

:::caution[免責事項]
本ドキュメントは gemini-3.5-flash によって翻訳されており、文法上の誤りや不正確な表現が含まれている可能性があります。正確な情報については、簡体字中国語版をご参照ください。
:::

> VRChatのダイナミックボーンシステム  
> ちなみに公式情報：_従来のダイナミックボーン（Dynamic Bones）プラグインは最終的にすべて削除され、自動的に新しいPhysBonesに変換される予定だよ_

## 自動変換について

ダイナミックボーンが設定されているアバターをシーンにドラッグして、アバターを選択した状態で上部のメニューから「VRChat SDK -> Utilities -> Convert DynamicBones to PhysBones」をクリックしよう。

注意：あくまで自動変換だから、**Dynamic Bones**と**PhysBones**は完全に同じってわけじゃないんだ。どうしても不完全な部分が出てきちゃうよ ~~(つまりバグがいっぱいってこと)~~

## PhysBonesの追加

揺らしたい骨格（例えば髪の毛やスカートなど）に「VRC Phys Bone」コンポーネントを追加するだけでOK！

コンポーネントを追加すると、アバター上に白い線が表示されるんだけど、これが「静止位置」だよ。

以下で説明する内容は、実際に自分でいじってみるのがおすすめ。文字で読むより、自分で動かして目で確認した方がずっとわかりやすいからね。

## 1. Transforms

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5l87k4hxtbk0.webp)

### Root Transform

PhysBonesのルート（根本）の位置。指定しない場合は、コンポーネントがアタッチされているオブジェクトの位置になるよ。

### Ignore Transforms

ルート骨格の下に子骨格があるけど、一部の子骨格は一緒に揺らしたくない、って時にここにドラッグ＆ドロップしてね。

例えば、しっぽの骨格がスカートの骨格の下にあるけど、しっぽをスカートと同じように揺らしたくない場合は、ここに設定すればいいよ。

### Endpoint Position

PhysBonesの終点位置。基本的には設定しなくて大丈夫だよ（骨格の末端にダミーの骨格を作成する機能）。

設定が必要なケース：例えば、スカートはすごく長いのにボーンが1つしかない場合、ここを調整してPhysBonesをスカートの端まで届かせることができるんだ。大抵は「Y軸」の数値をプラス（正の数）に変更するだけで大丈夫。詳細は以下の通りだよ。

| 通常のスカートのボーンはこんな感じ（設定不要） | ボーンが1つだけの場合（設定が必要かも） |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 親ボーン「Hips」の下にある子ボーン「Skirt_A1_L」に、さらに子ボーンがある | 親ボーン「Hips」の下にある子ボーン「Skirt1」に子ボーンがない |
| ![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5gd52p9c23g0.webp) | ![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.9orxdswcog4.webp) |

### Multi Child Type

対象のボーンに複数の子ボーンがある場合の、親ボーンの位置設定。基本的には「Ignore（無視）」でいいよ。

- **Ignore（無視）**：骨格を追加しない

- **First**：子ボーンの中の最初のボーンを、親ボーンの終点にする

- **Average**：すべての非アクティブな子ボーンの開始位置の平均を、親ボーンの終点にする

## 2. Forces

### Integration Type

「Simplified（簡易）」か「Advanced（高度）」を選択するよ。この部分の数値は、Unityの「Play（再生）」モード中に調整して効果をテストできるんだ。

右側にある「C」について：設定したカーブ（Curve）に沿って数値が変化するよ。

<table>
<thead>
<tr>
    <th>Simplified（簡易）</th><th>Advanced（高度）</th>
</tr>
</thead>
<tbody>
    <tr>
        <td>
            <img src="https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.22irlehtq1fk.webp" referrerpolicy="no-referrer" alt="img">
        </td>
        <td>
            <img src="https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.4hygp330s4c0.webp" referrerpolicy="no-referrer" alt="img">
        </td>
    </tr>
    <tr>
        <td>比較的安定していて設定しやすく、外部の衝撃や力に対する反応は控えめ。</td>
        <td>少し不安定だけど、より複雑な設定ができる。外部の衝撃や力に敏感に反応するよ。</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Pull（引っ張る力）</strong></td>
    </tr>
    <tr>
        <td colspan="2">PhysBonesを「静止位置」に戻そうとする力。数値が大きいほど戻る力が強くなるよ（スカートなら動きにくくなる）。</td>
    </tr>
    <tr>
        <td><strong>Spring（バネ感）</strong></td>
        <td><strong>Momentum（慣性）</strong></td>
    </tr>
    <tr>
        <td>PhysBonesが「静止位置」に戻る時の揺れの大きさ（プルプル感）。</td>
        <td>Springと似たような感じだけど、具体的な効果は自分で動かして試してみてね。</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td><strong>Stiffness（硬さ）</strong></td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>PhysBonesを元の「静止位置」にとどまらせようとする強度。数値が大きいほど硬くなるよ。</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Immobile（動かない度合い）</strong></td>
    </tr>
    <tr>
        <td colspan="2">アバターの移動がPhysBonesに与える影響の度合い。値を「1」にすると移動の影響を全く受けなくなり、常に「静止位置」に留まるようになるよ。この場合、衝突（コライダー）や掴む（グラブ）アクションの時だけ動くようになるんだ。</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Gravity（重力）</strong></td>
    </tr>
    <tr>
        <td colspan="2">重力がボーンに与える影響。0より小さい（マイナス）にすると反重力になって、スカートがふわっと浮き上がるよ。</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Gravity Falloff（重力減衰）</strong></td>
    </tr>
    <tr>
        <td colspan="2">上の「重力」が0以外の時だけ有効だよ。重力がPhysBonesの「静止位置」に与える影響をコントロールして、値が「1」の時は影響を受けなくなるんだ。</td>
    </tr>
</tbody>
</table>

### 参考パラメータ

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.2z0m8306s3c0.webp)

ソース：<https://youtu.be/PTTnWUkswkU>

## 3. Limits（制限）

この項目は、PhysBonesが動く範囲を制限するものだよ。服の貫通防止（突き抜け防止）に使えて、コライダーを設定するよりも動作が軽くて効率的なんだ。

制限を追加すると、Sceneビュー上に視覚的なギミックが表示されるから調整しやすいよ。この設定の変更は「Scene」画面で直接確認できるんだ。

「None（なし）」にすると制限はかからないよ。

### 1）Angle（角度）

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5fg5lki8p100.webp)

ボーンが動く範囲を円錐形に制限するよ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.3q5ks1qzflw0.webp)

- **Max Angle**：最大角度

- **Rotation**：制限をかける範囲の向きを調整する。実際に触ってみるのが一番手っ取り早いよ。

- **Pitch**：Y-Z軸平面での傾き調整

- **Roll**：X-Z軸平面での回転調整

- **Yaw**：X-Y軸平面での向き調整

### 2）Hinge（ヒンジ/蝶番）

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.6udcwfr44rk0.webp)

ボーンが動く範囲を特定の1つの平面に制限するよ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.26ix1hne1zc0.webp)

- **Max Angle**：最大角度

- **Rotation**：[Angle（角度）](/dynamics/physbones/#1%E8%A7%92%E5%BA%A6angle)の解説を参考にしてね。

### 3）Polar（極座標）

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5hnwt54xm600.webp)

さっきの「Hinge（ヒンジ）」に、もう1本動かせる軸を追加したようなイメージ。ただ、このタイプは負荷がすごく大きいから、公式はできるだけ使用を避けるよう推奨しているよ。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5gk8akp19280.webp)

- **Max Pitch**：動かせる角度。「Hinge」の「Max Angle」みたいなものだよ。

- **Max Yaw**：新しく追加された軸の可動範囲

- **Rotation**：[Angle（角度）](/dynamics/physbones/#1%E8%A7%92%E5%BA%A6angle)の解説を参考にしてね。

## 4. Collision（衝突/コライダー）

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.k66s0ps9stc.webp)

- **Radius（半径）**：衝突判定用の球体の半径だよ。

- **Allow Collision**：チェックを入れると、他のプレイヤーがこのボーンに触れる（コライダーが干渉する）ようになるよ。

- **Colliders**：他のボーンのコライダーと干渉させたい場合、ここにコライダーを設定するよ（例えば、太もものコライダーをスカートのPhysBonesにドラッグする）。「Size」はコライダーの登録数だよ。

### コライダーを追加する

コライダーを追加するには、対象のボーンの下に空のゲームオブジェクト（GameObject）を作って、「VRC Phys Bone Collider」コンポーネントを追加してね（例えば、足のボーンの下に「足のコライダー」という空オブジェクトを作る）。

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.inu3nz30ic0.webp)

- **Root Transform**：コライダーを配置する位置。指定しない場合は、コンポーネントがアタッチされているオブジェクトの位置になるよ。

- **Shape Type**：コライダーの形状。「Sphere（球体）」、「Capsule（カプセル）」、または「Plane（平面）」から選べるよ。

- **Inside Bounds**：チェックを入れると、対応するPhysBonesがそのコライダーの「内側」だけでしか動かなくなるよ。

貫通を防ぎつつPhysBonesの動く範囲をきれいに制御したいときは、この**Inside Bounds（内側コライダー）**を使うのがおすすめ。
個人的な見解：狭い範囲の動きなら外側コライダー（通常の衝突）、広い範囲を制限するなら内側コライダー（Inside Bounds）がいい感じ。

### PhysBonesにコライダーを登録する

さっき作ったコライダー用の空オブジェクトを、PhysBonesの「Colliders」リストに直接ドラッグ＆ドロップすればOKだよ（例：足のコライダーをスカートのPhysBonesに登録する）。

### 効果

服の貫通を防止できるよ。Play（再生）モードにすると、足のコライダーでスカートがちゃんと押し広げられるのが確認できるはず！

## 5. Grab & Pose（掴みとポーズ固定）

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.3vj5o12e9l80.webp)

- **Allow Grabbing**：他のプレイヤーがこのボーンを掴める（グラブできる）ようにするかどうか。

- **Allow Posing**：他のプレイヤーがボーンを掴んだ後、その形のまま静止（ポーズ固定）できるようにするかどうか。

- **Grab Movement**：掴んだボーンがどう動くかを調整するよ。値が「0」の時は「Forces」で設定したパラメータに従ってふわっと動き、値が「1」の時は手の動きに完全に追従して即座に動くよ。

- **Max Stretch**：ボーンを掴んだ時に、元の長さからどれだけ引き伸ばせるか（最大伸縮率）の設定だよ。

## 6. Options

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.6d07koeo6ec0.webp)

### Parameter（パラメータ）

ここに任意の文字列（名前）を入力すると、以下の `{parameter}` の部分がその文字列に置き換わったパラメータが自動生成されて、いろんなギミック（アニメーションなど）に使えるようになるよ。

- **{parameter}\_IsGrabbed**：Bool型。ボーンが今掴まれているかどうか。

- **{parameter}\_Angle**：Float型（0.0〜1.0）。ボーンが元の向きからどれだけ曲がっているかの割合。180度（真反対）曲がった時に「1.0」になるよ。

- **{parameter}\_Stretch**：Float型（0.0〜1.0）。ボーンが引き伸ばされた長さの割合（最大伸縮の何％まで伸びたか）。例えば最大伸縮が10で、5まで伸びていたら「0.5」になるよ。

例えば、パラメータ名に「Hello」と入力した場合、アニメーターで使用できるパラメータは「Hello_IsGrabbed」、「Hello_Angle」、「Hello\_\_Stretch」になるよ。

### Is Animated

アニメーション（Animation）によるボーンの操作を許可する設定。これにチェックを入れると、ボーンの「静止位置」をアニメーションで動的に変更できるようになるよ。

## 7. Gizmos

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.7ed1567tjro0.webp)

- **Show Gizmos**：PhysBonesや可動制限のギズモを表示する。

- **Bone Opacity**：ボーン表示の不透明度。0だと透明（非表示）、1だと完全に不透明（はっきり見える）になるよ。

- **Limit Opacity**：可動制限表示の不透明度。設定は上と同じだよ。

## 8. 注意事項

1つのPhysBonesコンポーネントが制御できるボーン（トランスフォーム）の上限は最大256個までだよ。もし揺らしたいボーンが大量にある場合は、1つのコンポーネントに全部まとめようとせず、複数のコンポーネントに分けて設定しよう。ルートボーン（Hipsなど）に直接PhysBonesを放り込むのはやめようね ~~(まさか、そんなことする人なんていないよね……？)~~