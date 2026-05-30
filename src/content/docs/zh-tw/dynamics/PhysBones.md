---
title: PhysBones
---

:::caution[免責聲明]
 本文件由 gemini-3.5-flash 翻譯，可能存在文法錯誤或不準確之處。如需準確資訊，請參考簡體中文版本。
 :::

> VRChat 動態骨骼系統  
> 另官方消息：_原動骨套件最終將被全部移除，將全部自動轉為新動骨_

## 關於自動轉換

將有動骨的模型拖入場景，選取模型後點擊上方「VRChat SDK-Utilities-Convert DynamicBones to PhysBones」

注意：畢竟只是自動轉換，**Dynamic Bones** 和 **PhysBones** 並不相同，肯定會有不完美的地方 ~~(指很多 bug)~~

## 新增 PhysBones

在想要「動」的骨骼（例如頭髮、裙子等）上新增元件「VRC Phys Bone」即可

新增元件後可以看到模型上有白線，就是「靜止位置」

以下所述內容建議親自嘗試，畢竟文字表述沒有自己動手實驗所帶來的視覺回饋強

## 一、Transforms

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5l87k4hxtbk0.webp)

### Root Transform

動骨的根位置，若不新增則為元件所在位置

### Ignore Transforms

如果動骨所在位置下方有子骨骼，但部分子骨骼不想讓它跟著此動骨晃動，可將其拖曳到此處

例如：尾巴在裙子骨骼下，不想讓尾巴「動」的效果和裙子一樣的話，可拖入此處

### Endpoint Position

動骨結束位置，一般不需要設定。（在骨骼末端建立額外的骨骼）

需要設定的情況：例如裙子很長但只有一個骨骼，可修改此項使動骨達到裙子末端，一般只需要動「Y 軸」，而且是個正值，具體如下：

| 一般裙子骨骼如下（不需要設定） | 只有一個骨骼（可能需要設定） |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 父級「Hips」下子集「Skirt_A1_L」還有子集 | 父級「Hips」下子集「Skirt1」無子集 |
| ![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5gd52p9c23g0.webp) | ![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.9orxdswcog4.webp) |

### Multi Child Type

當前骨骼有多個子骨骼的情況下，父級骨骼的位置，一般「忽略」即可

- **忽略**：不新增骨骼

- **First**：子骨骼中第一個骨骼作為父骨骼的終點

- **Average**：所有子骨骼起點的平均位置作為父骨骼的終點

## 二、Forces

### Integration Type

選擇簡單模式或進階模式，此部分數值可以在`播放`模式調整測試效果

關於後面的`C`：數值將根據設定的曲線改變

<table>
<thead>
<tr>
    <th>簡單 (Simplified)</th><th>進階 (Advanced)</th>
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
        <td>較穩定，容易配置，對外部衝擊和力量反應較小</td>
        <td>不穩定，但允許更複雜的配置，對外部衝擊和力量反應敏感</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Pull (拉力)</strong></td>
    </tr>
    <tr>
        <td colspan="2">將動骨拉回「靜止位置」的力量，數值越大，力量越大（裙子越不容易動）</td>
    </tr>
    <tr>
        <td><strong>Spring (彈性)</strong></td>
        <td><strong>Momentum</strong></td>
    </tr>
    <tr>
        <td>動骨回到「靜止位置」的搖晃程度</td>
        <td>同<code>Spring</code>，具體效果請自行嘗試</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td><strong>硬度 (Stiffness)</strong></td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>使動骨保持在「靜止位置」的強度，值越大越強</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Immobile</strong></td>
    </tr>
    <tr>
        <td colspan="2">動骨對骨骼的影響程度。值為 1 時不影響骨骼，即骨骼一直在「靜止位置」，只有碰撞和抓取時才生效</td>
    </tr>
    <tr>
        <td colspan="2"><strong>重力 (Gravity)</strong></td>
    </tr>
    <tr>
        <td colspan="2">重力對骨骼的影響，小於 0 則反重力（裙子上飄）</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Gravity Falloff (重力衰減)</strong></td>
    </tr>
    <tr>
        <td colspan="2">只有在上一項「重力」不為 0 時可用，控制重力對動骨「靜止位置」的影響，值為 1 時不影響</td>
    </tr>
</tbody>
</table>

### 參考參數

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.2z0m8306s3c0.webp)

來源：<https://youtu.be/PTTnWUkswkU>

## 三、Limits (限制)

此部分為動骨移動範圍的限制，可以用於防止穿模，比碰撞更有效率

當新增限制時，在場景裡會有一個視覺化圖形用於輔助，此部分數值調整可在`場景`看到效果

若為`無 (None)`則沒有限制

### 1）角度 (Angle)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5fg5lki8p100.webp)

骨骼移動範圍為圓錐型

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.3q5ks1qzflw0.webp)

- **Max Angle**：最大角度

- **Rotation**：調節限制的範圍，具體自己調節即可知曉

- **Pitch** (俯仰)：Y-Z 軸平面調整

- **Roll** (旋轉)：X-Z 軸平面調整

- **Yaw** (偏航)：X-Y 軸平面調整

### 2）Hinge (鉸鏈)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.6udcwfr44rk0.webp)

骨骼移動範圍為一個平面

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.26ix1hne1zc0.webp)

- **Max Angle**：最大角度

- **Rotation**：參考[角度 (Angle)](/dynamics/physbones/#1%E8%A7%92%E5%BA%A6angle)的介紹

### 3）Polar

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5hnwt54xm600.webp)

在上一個類型「Hinge (鉸鏈)」的基礎上多一個軸可移動，不過此類型消耗效能過大，官方建議儘量避免使用

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5gk8akp19280.webp)

- **Max Pitch**：可移動角度，類似「Hinge (鉸鏈)」的「Max Angle」

- **Max Yaw**：新軸的範圍

- **Rotation**：參考[角度 (Angle)](/dynamics/physbones/#1%E8%A7%92%E5%BA%A6angle)的介紹

## 四、Collision (碰撞)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.k66s0ps9stc.webp)

- 半徑 (Radius)：碰撞球的半徑

- Allow Collision：勾選則允許其他玩家碰撞（觸碰）此骨骼

- 碰撞器 (Colliders)：如新增其他骨骼碰撞，則會顯示於此，例如將腿部碰撞拖入裙子動骨此處。大小為數量

### 新增碰撞

新增碰撞要在相應骨骼下建立空物件後新增元件「VRC Phys Bone Collider」（例如在腿部骨骼下新增空物件「腿部碰撞」）

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.inu3nz30ic0.webp)

- **Root Transform**：碰撞所在位置，不新增則為元件所在位置

- **Shape Type**：類型，可以選「球體」、「膠囊」或「平面」

- **Insider Bounds**：勾選則相應動骨只能在此範圍內運動

推薦使用 **Insider Bounds (內碰撞)** 新增，能更好地控制動骨移動範圍，防止穿模
個人見解：小範圍移動用外碰撞，大範圍移動用內碰撞

### 將碰撞新增至動骨

直接將此空物件拖入動骨的碰撞器即可（例如將腿部碰撞拖入裙子動骨）

### 作用

防穿模，播放模式下可看到效果（例如裙子被腿部碰撞撐起來）

## 五、Grab & Pose (抓取與擺姿勢)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.3vj5o12e9l80.webp)

- **Allow Grabbing**：允許其他玩家抓取此骨骼

- **Allow Posing**：允許其他玩家抓取後將其擺姿勢

- **Grab Movement**：控制抓取的骨骼如何移動。數值為 "0" 將透過「Forces」設定參數移動，數值為 "1" 則立即移動

- **Max Stretch**：骨骼被抓取時可以被拉伸的最大長度

## 六、Options

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.6d07koeo6ec0.webp)

### 參數 (Parameter)

此處設定一個字串可建立一些參數（將填入數值替換下方 {parameter}）用於實現一些效果

- **{parameter}\_IsGrabbed**：Bool 類型，骨骼是否被抓住

- **{parameter}\_Angle**：Float 類型，取值 0.0~1.0，骨骼被扭轉的角度，如果被扭轉 180 度即和原骨骼方向相反則為 1.0

- **{parameter}\_Stretch**：Float 類型，取值 0.0~1.0，骨骼被拉伸的長度與最大長度的百分比，如最大長度為 10，當被拉到 5 時，此參數為 0.5

例如在「參數 (Parameter)」後填入「Hello」，想要使用這些參數則使用「Hello_IsGrabbed」、「Hello_Angle」和「Hello\_\_Stretch」

### Is Animated

允許骨骼變換被動畫控制，骨骼的「靜止位置」將允許被動畫改變

## 七、Gizmos

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.7ed1567tjro0.webp)

- **Show Gizmos**：顯示動骨和限制

- **Bone Opacity**：骨骼不透明度，值為 0 透明（看不見），值為 1 不透明（最清晰）

- **Limit Opacity**：限制不透明度，同上

## 八、注意事項

一個動骨套件最大可實現 256 個變化，如果骨骼過多，請分開加上動骨元件，不要直接在根骨骼新增元件 ~~(不會真有人這麼加吧，不會吧)~~