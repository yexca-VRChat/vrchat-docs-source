---
title: PhysBones
---

> VRChat 动态骨骼系统  
> 另官方消息: _原动骨插件最终将被全部移除，将全部自动转为新动骨_

## 关于自动转换

将带动骨的模型拖入场景，选择模型后点击上方“VRChat SDK-Utilities-Convert DynamicBones to PhysBones”

注意：毕竟只是自动转换，**Dynamic Bones**和**PhysBones**并不相同，肯定会有不完美的地方 ~~(指很多 bug)~~

## 添加 PhysBones

在想要“动”的骨骼(例如头发，裙子等)上添加组件“VRC Phys Bone”即可

添加组件后可以看到模型上有白线，就是“静止位置”

以下所述内容建议亲自尝试，毕竟文字表述没有自己上手实验所带来的视觉反馈强

## 一、Transforms

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5l87k4hxtbk0.webp)

### Root Transform

动骨的根位置，若不添加则为组件所在位置

### Ignore Transforms

如果动骨所在位置下方有子骨骼，但部分子骨骼不想让它跟着此动骨动，可将其拖到此处

例如：尾巴在裙子骨骼下，不想尾巴”动”的效果和裙子一样可拖入此处

### Endpoint Position

动骨结束位置，一般不需要设置。(在骨骼末端创建额外的骨骼)

需要设置的情况：例如裙子很长但只有一个骨骼，可修改此项使动骨达到裙子末端一般只需要动“Y 轴”，而且是个正值，具体如下：

| 一般裙子骨骼如下(不需要设置)                                                                                     | 只有一个骨骼(可能需要设置)                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 父级“Hips”下子集“Skirt_A1_L”还有子集                                                                             | 父级“Hips”下子集“Skirt1”无子集                                                                                  |
| ![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5gd52p9c23g0.webp) | ![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.9orxdswcog4.webp) |

### Multi Child Type

当前骨骼多子骨骼情况下，父级骨骼位置，一般“忽略”即可

- **忽略**：不添加骨骼

- **First**：子骨骼中第一个骨骼作为父骨骼的终点

- **Average**：所有子骨骼的起点的平均位置作为父骨骼的重点

## 二、Forces

### Integration Type

选择简单模式或高级模式，此部分数值可以在`播放`模式调整测试效果

关于后面的`C`：数值将根据设定的曲线改变

<table>
<thead>
<tr>
    <th>简单(Simplified)</th><th>高级(Advanced)</th>
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
        <td>较稳定，容易配置，对外部冲击和力量反应较小</td>
        <td>不稳定，但允许更复杂的配置，对外部冲击和力量反应敏感</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Pull(拉力)</strong></td>
    </tr>
    <tr>
        <td colspan="2">将动骨拉回“静止位置”的力量，数值越大，力量越大(裙子越不容易动)</td>
    </tr>
    <tr>
        <td><strong>Spring(弹性)</strong></td>
        <td><strong>Momentum</strong></td>
    </tr>
    <tr>
        <td>动骨回到“静止位置”的摇晃程度</td>
        <td>同<code>Spring</code>，具体效果请自行尝试</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td><strong>硬度(Stiffness)</strong></td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>使动骨保持在“静止位置”的强度，值越大越强</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Immobile</strong></td>
    </tr>
    <tr>
        <td colspan="2">动骨对骨骼的影响程度。值为1时不影响骨骼，即骨骼一直在“静止位置”，只有碰撞和抓取时才生效</td>
    </tr>
    <tr>
        <td colspan="2"><strong>重力(Gravity)</strong></td>
    </tr>
    <tr>
        <td colspan="2">重力对骨骼影响，小于0则反重力(裙子上飘)</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Gravity Falloff(重力衰减)</strong></td>
    </tr>
    <tr>
        <td colspan="2">只有在上一项“重力”不为0时可用，控制重力对动骨“静止位置”的影响，值为1时不影响</td>
    </tr>
</tbody>
</table>

### 参考参数

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.2z0m8306s3c0.webp)

来源：<https://youtu.be/PTTnWUkswkU>

## 三、Limits(限制)

此部分为动骨移动范围的限制，可以用于防穿模，比碰撞更高效

当添加限制时，在场景里有一个可视化图形用于辅助，此部分数值调整可在`场景`看到效果

若为`无(None)`则没有限制

### 1）角度(Angle)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5fg5lki8p100.webp)

骨骼移动范围为圆锥型

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.3q5ks1qzflw0.webp)

- **Max Angle**：最大角度

- **Rotation**：调节限制的范围，具体自己调节即可知晓

- **Pitch**(俯仰)：Y-Z 轴平面调整

- **Roll**(旋转)：X-Z 轴平面调整

- **Yaw**(偏移)：X-Y 轴平面调整

### 2）Hinge(合页)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.6udcwfr44rk0.webp)

骨骼移动范围为一个平面

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.26ix1hne1zc0.webp)

- **Max Angle**：最大角度

- **Rotation**：参考[角度 (Angle)](/dynamics/physbones/#1%E8%A7%92%E5%BA%A6angle)的介绍

### 3）Polar

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5hnwt54xm600.webp)

在上一个类型“Hinge(合页)”的基础上多一个轴可移动，不过此类型占用性能过大，官方建议尽量避免使用

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5gk8akp19280.webp)

- **Max Pitch**：可移动角度，类似“Hinge(合页)”的“Max Angle”

- **Max Yaw**：新轴的范围

- **Rotation**：参考[角度 (Angle)](/dynamics/physbones/#1%E8%A7%92%E5%BA%A6angle)的介绍

## 四、Collision(碰撞)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.k66s0ps9stc.webp)

- 半径(Radius)：碰撞球的半径

- Allow Collision：勾选则允许其他玩家碰撞(触碰)此骨骼

- 碰撞器(Colliders)：如添加其他骨骼碰撞，则会显示于此，如将腿部碰撞拖入裙子动骨此处。大小为数量

### 添加碰撞

添加碰撞在相应骨骼下创建空物体后添加组件“VRC Phys Bone Collider” (例如腿部骨骼添加空物体“腿部碰撞”)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.inu3nz30ic0.webp)

- **Root Transform**：碰撞所在位置，不添加则为组件所在位置

- **Shape Type**：类型，可以选“球体”、“胶囊”或“平面”

- **Insider Bounds**：勾选则相应动骨只能在此范围内运动

推荐使用**Insider Bounds(内碰撞)**添加，更好的控制动骨移动范围，防止穿模
个人见解：小范围移动用外碰撞，大范围移动用内碰撞

### 碰撞添加至动骨

直接将此空物体拖入动骨的碰撞器即可(例如腿部碰撞拖入裙子动骨)

### 作用

防穿模，播放模式下可看到效果(例如裙子被腿部碰撞撑起来)

## 五、Grab & Pose(抓取和定位)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.3vj5o12e9l80.webp)

- **Allow Grabbing**：允许其他玩家抓取此骨骼

- **Allow Posing**：允许其他玩家抓取后将其定位

- **Grab Movement**：控制抓取的骨骼如何移动。数值为”0″将通过“Forces”设置参数移动，数值为“1”则立即移动

- **Max Stretch**：骨骼被抓取时可以被拉伸的最大长度

## 六、Options

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.6d07koeo6ec0.webp)

### 参数(Parameter)

此处设置一个字符串可创建一些参数(将填入数值替换下方{parameter})用于实现一些效果

- **{parameter}\_IsGrabbed**：Bool 类型，骨骼是否被抓住

- **{parameter}\_Angle**：Float 类型，取值 0.0~1.0，骨骼被扭转的角度，如果被扭转 180 度即和原骨骼方向相反则为 1.0

- **{parameter}\_Stretch**：Float 类型，取值 0.0~1.0，骨骼被拉伸的长度与最大长度的百分比，如最大长度为 10，当被拉到 5 时，此参数为 0.5

例如在“参数(Parameter)”后填入“Hello”，想要使用这些参数则使用“Hello_IsGrabbed”、“Hello_Angle”和“Hello\_\_Stretch”

### Is Animated

允许骨骼变换被动画控制，骨骼的“静止位置”将允许被动画改变

## 七、Gizmos

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.7ed1567tjro0.webp)

- **Show Gizmos**：显示动骨和限制

- **Bone Opacity**：骨骼不透明度，值为 0 透明(看不见)，值为 1 不透明(最清晰)

- **Limit Opacity**：限制不透明度，同上

## 八、注意事项

一个动骨插件最大可实现 256 个变化，如果骨骼过多，请分开加动骨组件，不要直接在根骨骼添加组件 ~~(不会真有人这么加吧，不会吧)~~
