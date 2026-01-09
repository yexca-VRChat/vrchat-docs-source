---
title: 成品模型上传
description: VRChat 成品模型的上传
lastmod: 2024-12-31
---

> 终于成为 TA ///

成品模型指别人几乎什么都做好了的模型，自己只需要上传就行。
通常可在 [Booth](https://booth.pm/zh-cn) 上购买

## 一、Unity 汉化准备

### 1）从 Unity Hub 安装简体中文组件

打开 Unity Hub 并登录，点击左方 `安装`，找到 `2019.4.31f1c1` (c1 指中国版)，点击右方齿轮，选择 `添加模块`，找到 `简体中文` 后选择并安装

### 2）没有“添加模块”或未从 Unity Hub 安装

注：此方法我未试过，不保证可以使用

#### <1>下载 zh-cn.po 文件

下载链接：[zh-cn.po](https://raw.githubusercontent.com/yexca-VRChat/vrchat-docs-source/main/file/zh-cn.zip)

#### <2>把文件放在 Unity 安装目录下

```markdown
C:\Program Files\Unity\2019.4.31f1c1\Editor\Data\Localization
```

如果没有这个目录请自己创建

## 二、新建 Unity 工程并汉化

### 1）添加个人许可证

点击左上角头像处“管理许可证”，选择“添加-获取免费的个人版许可证-同意并获取个人版许可证”即可

### 2）新建 Unity 工程

点击“新项目”，选择“3D”，命名工程，选择位置后点击“创建”，等待亿会即可

### 3）汉化

如果想深入学习 Unity 建议使用英文原版

在“Editor-Preferences-Languages”下选择“简体中文”

## 三、导入文件 (unitypackage)

导入文件可以双击或者直接拖入

### 需要导入的文件

1）动骨插件 (Dynamic Bone 1.2.0.unitypackage)

2）着色器插件 (UTS2.unitypackage)

3）VRCSDK (VRCSDK3-AVATAR-2022.02.16.19.13_Public.unitypackage (新 SDK 更新啦，不是这个名字))

4）模型文件

## 四、上传模型

### 1）拖入模型

在下方 `Assets` 里找到 prefab 文件或场景文件

#### <1>prefab 文件

拖入左方场景即可

#### <2>场景文件

双击打开即可

### 2）打开 VRC 控制面板

点击上方 `VRChat SDK-Show Control Panel` ，登录 VRChat 账号后点击 `Builder`

#### <1>如果下方 “Build & Publish for Windows” 可以点击

直接点击然后等待亿会即可

#### <2>如果不能点击

上方应该有六边形红色感叹号，每个后方应该都有 `Auto Fix` 把每个都点击然后点 `Build & Publish for Windows` 即可  
如果点完还不能上传，我还没遇到过

#### <3>如果没有模型信息，显示 "A VRCAvatarDescriptor is required to build an Avatar"

这种情况说明您上传的模型是 SDK2 的模型，请新建工程导入 SDK2 上传或升级为 SDK3 模型 (后面文章会有，推荐升级，说不定哪天 SDK2 模型就不被支持了)

### 3）填写模型信息

等待创建成功后可以将 `VRChat上传面板` 关闭

Avatar Name 即为模型的名字

Description 为模型的描述

下一个警告不用管

Sharing 为上传模型是否公开，`Private` 为私密，`Publish` 为公开（即是否允许他人复制，一般选 Private）

把最下方的复选框点上即可上传(点击 `Upload`)

### 4）创建模型封面

上一步填完即可上传，但是右方图片可能我们并不满意

#### <1>创建物体

回到场景，在左方 `VRCCam` 上右击选择 `3D 对象-四边形`

右方的 `Transform` 中，`位置`的 z 轴填入 `2.6`，`缩放`的 x 轴和 y 轴分别填入 `4` 和 `3`

#### <2>添加图片

找到一张想要上传的图片拖入 Unity，然后创建一个材质 (下方 `Assets` 右击 `创建`-`材质`)，点击`材质`，右方 `Shader` 选择一个，例 `VRChat-Mobile-Toon Lit`，然后将图片拖入右方材质里，然后将材质拖入 `场景` 里刚创建的四边形上即可

#### <3>上传模型

这样操作后模型会挡到图片，可以在左方点击模型，右边模型名字旁(左边)有一个复选框，取消掉即可隐藏模型

然后回到`游戏`界面，就可以在右方看到刚刚做的图片

此时再次点击 `Upload` 即可

## 五、遇到错误，上传失败

> 重启解决 90%的问题，重装解决 99%的问题，重买解决 100%的问题

重新上传，重新打开 Unity，新建工程上传，重启电脑，网络问题

如果是蓝图问题 (错误信息有 `BluePrint`) ，可在左方点击角色，然后右方划到最底下点击 `Detach` 后重新上传即可
