---
title: Trail Renderer
weight: 8
slug: /div/Trail_Renderer
---

{{% hint info %}}
**Trail Renderer**  
轨迹渲染器
{{% /hint %}}

轨迹渲染器 (Trail Renderer) 组件在移动的游戏对象后面渲染一条多边形轨迹。此组件可用于强调移动对象的运动感，或突出移动对象的路径或位置。飞弹背后的轨迹为飞弹的飞行轨道增添了视觉清晰度；来自飞机机翼尖端的凝结尾迹是现实生活中出现的轨迹效果的一个例子

## 创建

在`层级`中右击`Effects(效果)-Trail(拖尾)`

## 轨迹设置

| 属性                                 | 功能                                                               |
| ---------------------------------- | ---------------------------------------------------------------- |
| **Width(宽度)**                      | 定义宽度值和曲线值以控制轨迹沿其长度的宽度。双击可创建新的顶点                                  |
| **Time(时间)**                       | 定义轨迹中某个点的生命周期（以秒为单位）                                             |
| **Min Vertex Distance(最小顶点距离)**    | 轨迹中两点之间的最小距离（采用世界单位）                                             |
| **AutoDestruct(自动销毁)**             | 启用此属性可在附加到`Trail Renderer`组件的游戏对象静止`Time`秒之后销毁该游戏对象              |
| **Emitting(正在发射)**                 | 启用此属性后，Unity 会在轨迹中添加新点。禁用此属性后，Unity 不会向轨迹中添加新点。使用此属性可暂停和恢复轨迹生成功能 |
| **Color(颜色)**                      | 定义一个渐变来控制轨迹沿其长度的颜色                                               |
| **Corner Vertices(角顶点)**           | 此属性指示在绘制轨迹中的角时使用多少个额外顶点。增加此值可使轨迹的角显得更圆                           |
| **End Cap Vertices(末端顶点)**         | 此属性指示使用多少个额外顶点在轨迹上创建端盖。增加此值可使轨迹的端盖显得更圆                           |
| **Alignment(对齐)**                  | 设置轨迹面向的方向                                                        |
| *View(视图)*                         | 轨迹面向摄像机                                                          |
| *TransformZ(变换Z)*                  | 轨迹朝向其变换组件的 Z 轴                                                   |
| **Texture Mode(纹理模式)**             | 控制如何将纹理应用于轨迹                                                     |
| *Stretch(伸展)*                      | 沿轨迹的整个长度映射纹理一次                                                   |
| *Tile(平铺)*                         | 基于轨迹长度（采用世界单位）沿轨迹重复纹理。要设置平铺率，请使用 `Material.SetTextureScale()`    |
| *DistributePerSegment(按段分配)*       | 沿轨迹的整个长度映射纹理一次（假设所有顶点均匀分布）                                       |
| *RepeatPerSegment(每段重复)*           | 沿轨迹重复纹理（每个轨迹段重复一次）。要调整平铺率，请使用 `Material.SetTextureScale()`       |
| **Generate Lighting Data(生成照明数据)** | 如果启用此属性，Unity 在构建轨迹几何体时包含法线和切线。这样，轨迹几何体就可以使用采用了场景光照的材质           |
| **Shadow Bias(阴影偏离)**              | 设置沿着光照方向的阴影移动量以消除阴影瑕疵                                            |

## Materials(材质)

`Trail Renderer Inspector`中的`Materials`部分列出了`Trail Renderer`当前使用的材质。如果将多个材质应用于轨迹渲染器，则会为每个材质渲染一次

| 属性              | 功能                                                                       |
|:--------------- |:------------------------------------------------------------------------ |
| **Size(大小)**    | 指定`Trail Renderer`中的`Materials`材质数量。如果减小`Materials`列表大小，Unity 会删除列表末尾的元素 |
| **Element(元素)** | `Trail Renderer`中的`Materials`列表（以数字顺序排列）                                 |

## Lighting(照明)

`Lighting`部分包含的属性用于指定此轨迹渲染器 (Trail Renderer) 如何在 Unity 中与光照相互影响

| 属性                        | 功能                                                                 |
|:------------------------- |:------------------------------------------------------------------ |
| **Cast Shadows(投射阴影)**    | 指定在合适的`光源`照射在轨迹上时该轨迹是否以及如何投射阴影                                     |
| *Off(关闭)*                 | 轨迹不会投射阴影。                                                          |
| *On(开启)*                  | 投射阴影的光源照在轨迹上时，该轨迹将投射阴影                                             |
| *Two Sided(双面)*           | 轨迹从任一侧投射双面阴影。`Enlighten`和`渐进光照贴图 (Progressive Lightmapper)`不支持双面阴影 |
| *Shadows Only(仅阴影)*       | 轨迹的阴影可见，但轨迹本身不可见                                                   |
| **Receive Shadows(接受阴影)** | 启用此选项可使轨迹显示任何投射在轨迹上的阴影。仅当使用`渐进光照贴图`时才支持这个选项                        |

## Probes(探测器)

`Probes`部分包含与[光照探针 (Light Probes)](https://docs.unity3d.com/cn/2019.4/Manual/LightProbes.html)和[反射探针 (Reflection Probes)](https://docs.unity3d.com/cn/2019.4/Manual/class-ReflectionProbe.html)有关的属性

| 属性                           | 功能                                                                                                                              |
|:---------------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| **Light Probes(光照探测器)**      | 设置此渲染器如何从`光照探针`系统接收光照                                                                                                           |
| *Off(关闭)*                    | 渲染器不使用任何插值光照探针                                                                                                                  |
| *Blend Probes(混合探测器)*        | 渲染器使用一个插值光照探针                                                                                                                   |
| *Use Proxy Volume(使用代理体)*    | 渲染器使用插值光照探针的 3D 网格                                                                                                              |
| *Custom Provided(自定义提供)*     | 渲染器从 [MaterialPropertyBlock](https://docs.unity3d.com/cn/2019.4/ScriptReference/MaterialPropertyBlock.html) 提取光照探针着色器 uniform 值 |
| Proxy Volume Override(代理卷覆盖) | 设置对另一个具有`Light Probe Proxy Volume`组件的游戏对象的引用。仅当`Light Probes`设置为`Use Proxy Volume`时，此属性才可见                                      |
| **Reflection Probes(反射探测器)** | 设置渲染器如何从`反射探针`系统接收反射                                                                                                            |
| *Off*                        | 禁用反射探针。Unity 将天空盒用于反射                                                                                                           |
| *Blend Probes*               | 启用反射探针。混合仅在反射探针之间发生。在室内环境中，如果角色可能在具有不同光照设置的区域之间过渡，此设置会很有用                                                                       |
| *Blend Probes and Skybox*    | 启用反射探针。混合发生在反射探针之间或反射探针与默认反射之间。这对于室外环境很有用                                                                                       |
| *Simple*                     | 启用反射探针，但存在两个重叠的探针体积时，反射探针之间不会发生混合                                                                                               |
| **Anchor Override(锚点覆盖)**    | 设置变换组件，在使用`光照探针`或`反射探针`系统时由 Unity 用来确定插值位置。默认情况下，这个位置是渲染器几何体的包围盒中心                                                              |

## Additional Settings(其他设置)

| 属性                           | 功能                                                                                                                                                                                                         |
|:---------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Motion Vectors(运动矢量)**     | 设置是否使用运动矢量来跟踪此渲染器从一帧到下一帧的每像素屏幕空间运动。使用此信息可以应用后期处理效果，例如运动模糊。请注意，并非所有平台都支持运动矢量                                                                                                                                |
| *Camera Motion Only(仅摄像机运动)* | 仅使用摄像机移动来跟踪运动                                                                                                                                                                                              |
| *Per Object Motion(每对象运动)*   | 使用特定通道来跟踪此渲染器的运动                                                                                                                                                                                           |
| *Force No Motion(强制无动作)*     | 不跟踪运动                                                                                                                                                                                                      |
| **Dynamic Occlusion(动态遮挡)**  | 启用`Dynamic Occlusion`后，此渲染器在摄像机的视图中被静态遮挡物 (Static Occluder) 阻挡时，Unity 会剔除此渲染器<br />禁用`Dynamic Occlusion`后，此渲染器在摄像机的视图中被静态遮挡物 (Static Occluder) 阻挡时，Unity 不剔除此渲染器。禁用`Dynamic Occlusion`可以实现诸如在墙后绘制角色轮廓之类的效果 |
| **Sorting Layer(排序图层)**      | 此渲染器的排序图层(Tags and Layers)的名称                                                                                                                                                                              |
| **Order in Layer(图层顺序)**     | 此渲染器在排序图层(Tags and Layers)中的顺序                                                                                                                                                                             |
