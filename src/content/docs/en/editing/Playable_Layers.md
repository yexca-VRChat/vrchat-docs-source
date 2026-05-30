---
title: Adding Default Layers and Menus
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Essential prerequisites before editing your avatar.

If it's already an SDK3 avatar, it might already have parameters and menus. If not, follow the steps below:

## Animation Layers

Add the default `Base`, `Action`, and `FX` controllers to your avatar.

If you are converting from SDK2 to SDK3, or using an MMD avatar, click **Customize** under **Playable Layers** in the **VRC Avatar Descriptor**, then click the default layer button next to the corresponding layer.

If it is already an SDK3 avatar, these layers might already be there. Just add any that are missing.

You can find all the default controllers in `Assets\VRCSDK\Examples3\Animation\Controllers`:

- Base: `vrc_AvatarV3LocomotionLayer.controller`
- Action: `vrc_AvatarV3ActionLayer.controller`
- FX: `vrc_AvatarV3HandsLayer.controller`

Once located, select the file and press `Ctrl + D` to duplicate it. Press `F2` to rename it. You can then drag these files into your avatar's folder (it's best to create a new subfolder to keep things organized).

Finally, drag and drop these files into their corresponding slots under **Playable Layers** in the **VRC Avatar Descriptor**.

## Parameters and Menus

### 1) Create Parameters and Menus

Create a new folder under your avatar's directory to store your parameters and menus.

Right-click in the **Assets** window, select `Create -> VRChat -> Avatars -> Expression Parameters`, and rename it to "Parameters".

Right-click again, select `Create -> VRChat -> Avatars -> Expression Menu`, and rename it to "MainMenu".

### 2) Apply Parameters and Menus to the Avatar

If you are converting from SDK2 to SDK3 or using an MMD avatar, click **Customize** under **Expressions** in the **VRC Avatar Descriptor**. Then drag your newly created "MainMenu" into the **Menu** slot, and "Parameters" into the **Parameters** slot.