---
title: 自身跳 MMD 舞蹈
---

> 使用 Animator Locomotion Control 脚本的一个例子，变可爱后怎么会忍住不跳舞呢

## 一、文件准备

- 舞蹈动画文件
- 音乐

关于 MMD 舞蹈转换，请参考：[固定世界 MMD](/additional/set_mmd)

不过这里要调整动画方向，点击动画文件，在右方”跟变换旋转-依据“选择”原始“

## 二、制作音乐开关

### 1）压缩音频

点击音频文件，在右方选择压缩格式(一般默认的 `Vorbis` 即可)，选择质量(越低压缩率越高)，然后点击应用即可

### 2）加入音频

在模型上创建一个空物体，然后添加组件”音频源“(英文: Audio Source)

在”AudioClip“后方拖入音乐，”空间混合“调为”1“，”多普勒级别“调为”0“，”音量衰减“选”线性衰减“，”最大距离“可自由调节(例如 20)

### 3）音频邦骨(可选)

我制作一般会将音频邦骨在嘴部，邦骨参考：[物体绑骨](/additional/tied_bones)

### 4）制作音频开关

录制开关参考：[FX 层-物品开关](/editing/switch)

## 三、动画器添加动画

### Action 层

进入 Action 层，跟随 `Entry-WaitForActionOrAFK-Prepare Standing`，`Prepare Standing` 后连接八个过渡，任选一个过渡后的状态，将 `Motion` 替换为舞蹈动画

然后添加组件 `Animator Locomotion Control`，将 `Locomotion Control` 设置为 `Disable`，如果不设置游戏中转动或移动时模型也会动

检查前后过渡是否正确，是否有相应条件 (如前面为`VRCEmote` 等于 `1`，后面为 `VRCEmote` 不等于 `1`) 并且是否将退出时间关闭

在下一个状态(“BlendOut Stand”)添加组件“Animator Locomotion Control”，将“Locomotion Control”设置为“Enable”，如果不设置游戏里再也无法移动或转动视角

### FX 层

进入 FX 层，在参数添加“Int”型参数，命名为“VRCEmote”

创建一个层，音乐打开的条件为刚刚 Action 层进入舞蹈的条件(例如“VRCEmote”等于“1”)，关闭的条件为刚刚 Action 层退出舞蹈的条件(例如“VRCEmote”不等于“1”)，将退出时间关闭

## 四、设置数值与菜单

### 数值

默认的数值第一个就是“VRCEmote”，如果没有请添加，类型为“Int”

### 菜单

菜单添加一项，“类型”为“Toggle”，“Parameter”为“VRCEmote”，数值为在 Action 层条件(例如“1”)
