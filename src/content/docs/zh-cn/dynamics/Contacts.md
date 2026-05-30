---
title: Contacts
---

> VRChat 交互系统

## 前言

交互系统(Contacts)允许角色检测与自己或其他人的信号，然后可以使用这些信号产生的参数来触发动画

**注意：交互系统和动骨系统是不同的**(我刚开始看搞混了)

交互系统分为发送端(VRCContactSender)和接收端(VRCContactReceiver)。发送端是为了被检测而存在，即一直在广播自己的参数(Collision Tags)，接收端检测发送端，如果和发送端参数(Collision Tags)相同，则更新参数

## 添加交互系统的组件

在物体或骨骼上添加组件搜索“vrc”，找到相应组件点击即可

## VRC Contact Sender(发送端)

定义发送信号的体积和参数(Collision Tags)

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-Contacts/image.ebh40gdczco.webp)

### Root Transform

此组件所在位置，若为空则为组件所在物品

### Shape(形状)

**Shape Type**：形状类型，可选“球体”和“胶囊”

**半径、位置、高度**(“胶囊”)：字面意思

**Rotation**：旋转

### Filtering(过滤)

调整和定义发送端如何与接收端交互

**Collision Tags**：指定该发送端可以影响/受其影响的字符串列表，为了成功实现碰撞(被接收端成功检测)，发送端和接收端都需要至少一对匹配的字符串

此处可选择默认的一些参数或者自定义参数，**注意：字母区分大小写**

### 注意

在“VRC Avatar Descriptor”里有“Collidees”会设置头部、身体、手部和脚部的一些碰撞，这些设置默认是会有发送端的，发送参数为名字，例如“头部”为“Head”，因此无需将这些部位设置上发送端

## VRC Contact Receiver(接收端)

定义接受信号的体积与参数(Collision Tags)，然后输出相应参数

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-Contacts/image.4zfxznntlkg0.webp)

### Root Transform

此组件所在位置，若为空则为组件所在物品

### Shape(形状)

**Shape Type**：形状类型，可选“球体”和“胶囊”

**半径、位置、高度**(“胶囊”)：字面意思

**Rotation**：旋转

### Filtering(过滤)

定义如何与发送端交互

**Allow Self**：允许自己触发，勾选即可以自己与自己交互

**Allow Others**：允许他人触发，勾选即他人可以与自己交互

**Local Only**：仅在本地客户端上运行

**Collision Tags**：指定可以接受的字符串列表/触发此交互的参数列表，为了成功实现碰撞(成功检测到发送端)，发送端和接收端都需要至少一对匹配的字符串

### Receiver

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-Contacts/image.66905l2pgso0.webp)

定义接受到信号后所改变的参数，参数后填入名字即为要改变的参数

| Receiver Type(类型) | 描述                                                    | 数值                                                 |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------- |
| 常量(Constant)      | 发生交互则改变参数                                      | 建议 Bool，触发时为 True 其他 Float 为 1.0，Int 为 1 |
| OnEnter             | 当进入速度大于 Min Velocity 时触发                      | 建议 Bool，触发时为 True 其他 Float 为 1.0，Int 为 1 |
| Proximity           | 发送端到接收端中心的接近程度 如果多个发送端，值为最近的 | Float，0.0~1.0                                       |

第三种“Proximity”如需要很高精准度，需要将发送端半径调到非常小
