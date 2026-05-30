---
title: VRChat Menu
---

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> What's in the VRChat Menu?

| Type | Description |
| :------------------------- | :-------------------------------------------------- |
| Button | Changes value once, usually for about a second. |
| Toggle | Switches to a set value until toggled off. |
| Sub Menu | A nested menu; setting parameters works similarly to a Toggle. |
| Two Axis Puppet | Two float parameters controlling vertical and horizontal axes (-1.0 to 1.0). |
| Four Axis Puppet | Four float parameters controlling Up, Down, Left, and Right (0 to 1.0). Great for tail wagging. |
| Radial Puppet | A single parameter control, typically used for color shifts or clothing swaps. |

Above is my personal summary; below is the official documentation.

- **Button** – Sets a parameter when clicked, then resets after the sync/reset has been sent—usually after about a second. Cannot be held down.

- **Toggle** – Sets a parameter when the toggle is on, resets when the toggle is turned off.

- **Sub-Menu** – Opens another Expression Menu. Additionally, it may also set a parameter when entered; if so, that parameter is reset to zero when you exit that menu.
  - **Important note:** You can put sub-menus into sub-menus!

- **Two Axis Puppet** – Opens an axis puppet menu that controls two parameters depending on the joystick position. The parameters are mapped to vertical and horizontal. The float values range from -1.0 to 1.0.

- **Four Axis Puppet** – Opens an axis puppet menu that controls four parameters depending on the joystick position. The parameters are mapped in order: up, right, down, left. The float values are 0.0 to 1.0.

- **Radial Puppet** – Opens a radial puppet menu that controls a single parameter, kind of like a progress bar that you can fill!