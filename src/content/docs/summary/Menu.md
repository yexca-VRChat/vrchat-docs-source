---
title: VRChat Menu
---

> VRChat 的菜单有什么呢？

| 类型                       | 介绍                                                |
| :------------------------- | :-------------------------------------------------- |
| Button(按钮)               | 值只改变一次，通常大约一秒钟                        |
| Toggle(切换)               | 点击会变为设定值，直至关闭                          |
| Sub Menu(子菜单)           | 下一级菜单，设置参数类似”Toggle”                    |
| Two Axis Puppet(双轴控制)  | 两个参数(float)控制垂直与水平(-1.0~1.0)             |
| Four Axis Puppet(四轴控制) | 四个参数(float)控制上下左右(0~1.0) 可用来制作摇尾巴 |
| Radial Puppet(百分比转盘)  | 一个参数控制，通常用来改变颜色或换衣服              |

以上为个人理解，以下为官方原文

- **Button** – Sets a parameter when clicked, then resets after the sync/reset has been sent– usually after about a second. Cannot be held down.

- **Toggle** – Sets a parameter when the toggle is on, resets when the toggle is turned off

- Sub-Menu

  – Opens another Expression Menu. Additionally it may also set a parameter when entered, if so that parameter is reset to zero when you exit that menu.

  - **Important note:** You can put sub-menus into sub-menus!

- **Two Axis Puppet** – Opens an axis puppet menu that controls two parameters depending on the joystick position. The parameters are mapped to vertical and horizontal. The float values range from -1.0 to 1.0.

- **Four Axis Puppet** – Opens an axis puppet menu that controls four parameters depending on the joystick position. The parameters are mapped in order, up, right, down, left. The float values are 0.0 to 1.0.

- **Radial Puppet** – Open a radial puppet menu that controls a single parameter, kind of like a progress bar that you can fill!
