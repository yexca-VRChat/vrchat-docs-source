---
title: MMD 模型转为 FBX
weight: 3
slug: /Upload/mmd_to_fbx
---

{{% hint info %}}
**MMD 模型转为 FBX**  
好多好看的 MMD 模型，我该如何成为 TA 呢？
{{% /hint %}}

## 引言

MMD 模型不能被 Unity 识别，可以通过两种方法进行转换，本文借助 Blender 转换，借助插件转换请参考[将 MMD 模型导入 unity – yexca'Blog](https://blog.yexca.net/archives/28/)

## 一、下载并安装Blender和插件

### 1）下载Blender2.93

官方下载链接：[Index of /release/ (blender.org)](https://download.blender.org/release/)

请寻找2.93版本进行下载

### 2）下载插件

Github链接：[Releases · absolute-quantum/cats-blender-plugin (github.com)](https://github.com/absolute-quantum/cats-blender-plugin/releases)

文件直链  

Github：[cats-blender-plugin-0-19-0.zip](https://github.com/absolute-quantum/cats-blender-plugin/releases/download/0.19.0/cats-blender-plugin-0-19-0.zip)  

### 3）安装插件

打开 Blender，选择`常规`，点击左上方`编辑`-`偏好设置`-`插件`-`安装`，找到插件下载目录后点击`安装插件`，然后在勾选上复选框启用即可

## 二、导入模型并粗处理

### 1）清除物品

在右上角全选物品后按 `delete` 键或 x` 键删除

### 2）导入模型

点击左上角`文件`-`导入`-`MikuMikuDance Model`，然后找到模型双击导入即可

### 3）Fix 模型

右上角有个 `<` 点击展开菜单，点击 `CATS`，选择 `Fix Model`，等待亿会即可

然后就可以导出啦(点击左上`文件`-`导出`-`FBX` 即可)

## 三、进一步处理

上一步处理后虽然能用，但是在游戏里说话不会开口。

### 1）眼部处理

如图设置

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-MMD2FBX/%E7%9C%BC%E9%83%A8%E8%BF%BD%E8%B8%AA.6a4bwsz8fyg0.webp)

点击”Create Eye Tracking“即可，如果未找到，请选择”基型“

### 2）嘴部处理

如图所示

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-MMD2FBX/%E5%98%B4%E9%83%A8%E5%8F%A3%E5%9E%8B.288ghboc1vvo.webp)

点击”Create Visemes“即可

### 3）导出

至此即可导出，点击左上”文件-导出-FBX“即可

## 四、再进一步处理

下面的处理为分离材质，可以实现脱衣服之类的，如想实现此效果请注意第三步需要重做

### 1）分离材质

在”Model Options“里点击材质，等待亿会即可分离材质

### 2）确定Body

右上角里可以通过点击眼睛来开关物品，确定身体所在的位置，重命名为”Body“

### 3）合并材质

在右上方可以按”CTRL“选择想合并的部位，然后点击”Model Options“里”Join Meshes-Selected“即可

当然，Body也可以合并，但必须叫”Body“，”表情“必须放进”Body“

### 4）重做第三步

既然都做那么精细了，不加点第三步东西可不行啊
