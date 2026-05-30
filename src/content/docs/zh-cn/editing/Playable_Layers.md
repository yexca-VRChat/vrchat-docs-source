---
title: 添加默认图层与菜单
---

> 改模前的必备条件啦

如果是 SDK3 模型，可能已经有了数值和菜单，如没有参考以下操作

## 动画层

为模型添加`Base`，`Action`和`FX`默认控制器

如果是“SDK2 转 SDK3”或“MMD 模型”，在“VRC Avatar Descriptor”的“Playable Layers”里点击“Customize”，然后在对应层后面点“Default 图层名”

如果是 SDK3 模型，可能已经有了对应层，可以将没有的加入

然后在“Assets\VRCSDK\Examples3\Animation\Controllers”可找到所有的默认控制器

- Base vrc_AvatarV3LocomotionLayer.controller
- Action vrc_AvatarV3ActionLayer.controller
- FX vrc_AvatarV3HandsLayer.controller

找到后点击并按“CTRL+D”即可克隆相同文件，可按“F2”重命名，然后可将这些文件拖入模型所在文件夹并新建一个文件夹存放。

再将文件拖入“VRC Avatar Descriptor”的“Playable Layers”对应位置即可。

## 数值与菜单

### 1）创建数值与菜单

可以在模型文件下新建一个文件夹用来存放数值与菜单

在“Assets”里右击，依次选择“创建-VRChat-Avatars-Expression Parameters” ，并重命名为“数值”

右击，依次选择“创建-VRChat-Avatars-Expression Menu” ，并重命名为“主菜单”

### 2）为模型添加数值与菜单

如果是“SDK2 转 SDK3”或“MMD 模型”，在“VRC Avatar Descriptor”的“Expression”里点击“Customize”，然后将刚创建的“菜单”拖入“Menu”，“数值”拖入“Parameters”
