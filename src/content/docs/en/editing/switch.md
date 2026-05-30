---
title: FX Layer - Item Toggle
---

:::caution[Disclaimer]
This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> An example of modifying the Base layer. Creating an item toggle to show/hide an object is arguably the most flexible modification you can make.

## 1. Add the "Animation" Window in Unity

Go to **Window -> Animation -> Animation** in the top-left menu to open the Animation window. You can drag and dock it anywhere (for example, to the right of the **Console** window at the bottom).

## 2. Add the Item to the Avatar

If it's an imported item, just like importing an avatar, find the prefab or FBX file in the **Assets** folder and drag it into the scene.

If it's a built-in Unity object (like a light source), right-click in the **Hierarchy** panel on the left and select it (e.g., **Light -> Point Light**).
Alternatively, right-click directly on the avatar's name to create it, so you only need to adjust its position.

After dragging it into the scene, adjust it to the desired position first.

Then, drag the item in the **Hierarchy** panel into the avatar's hierarchy (i.e., drag and drop it onto the avatar's name; it will automatically become a child object).

Now, when you move the avatar, the item will move with it.

## 3. Record the Item Toggle Animation

First, create a folder named "Animations" inside your avatar's folder for clean organization. The folder you are currently viewing in **Assets** will be the default save location for the animation in the next step, so navigate to this folder beforehand.

Select the avatar in the **Hierarchy** panel on the left, click **Create** in the **Animation** window, choose a location, name the animation, and click **Save**.

First, disable/hide the item you want to toggle on (e.g., turn off the light source you just created in the Inspector).

In the **Animation** window, click the solid red circle button next to **Preview** on the left to start recording.

Now, enable/show the item you want to toggle (e.g., turn the light source back on).

Click the red circle again to stop recording, then turn off Preview. In the **Inspector** panel on the right, remove the temporarily generated **Animator** component on the avatar (select it and press `Delete`). Go back to **Assets** and delete the automatically generated Animator Controller file as well.

## 4. Add the Animation to the FX Layer

### 1) Open the Avatar's FX Controller

Find your FX controller and double-click it to open it in the **Animator** window. (You can select the avatar in the hierarchy, then find the FX layer slot under **VRC Avatar Descriptor** in the Inspector on the right, and click it to locate the file).

### 2) Create Parameters and Layers

In the **Animator** window, click the **Parameters** tab, click the **+** icon on the right, select **Bool**, and rename it (e.g., "Light").

Then click the **Layers** tab, click the **+** icon, rename the layer (e.g., "Light"), click the gear icon next to the layer name, and change its **Weight** to `1`.

### 3) Set Up the Layer States

Select the layer you just created. Right-click in the empty space on the right and select **Create State -> Empty**. Then, drag and drop the recorded animation (e.g., "Light") into the Animator grid.

Right-click the empty state you just created, select **Make Transition**, and click on your recorded animation state.

Click the transition arrow. In the **Inspector** panel on the right, uncheck **Has Exit Time**. Under **Conditions**, click the **+** icon in the bottom right, select the parameter you just created (e.g., "Light"), and set the condition to **true**.

Create another transition from the animation state back to the empty state. Uncheck **Has Exit Time**, and under **Conditions**, add the parameter (e.g., "Light") set to **false**.

## 5. Add the Toggle to the Menu

### 1) Add Parameter to the Expression Parameters

Find your Expression Parameters file and click it to display it in the Inspector. (You can locate it by selecting the avatar in the hierarchy, scrolling down to the **VRC Avatar Descriptor**, and clicking on the **Parameters** field).

Click **Add**, and enter the parameter name and type in the new row (e.g., Name: "Light", Type: "Bool"). The checkbox next to it is the default value, and **Saved** determines whether the state persists (e.g., if checked, if you turn on the light in-game, switch to another avatar, and switch back, the light stays on. If unchecked, it resets to default upon switching avatars).

**Note: The parameter name and type here must match exactly with the parameter you created in the FX controller.**

### 2) Add Control to the Expression Menu

Find your Expressions Menu file and click it to open it in the Inspector. (You can locate it by selecting the avatar in the hierarchy, scrolling to **VRC Avatar Descriptor**, and clicking on the **Menu** field).

Click **Add Control**, enter a display name, set Type to **Toggle**, and set Parameter to the one you just created (e.g., "Light").

## 6. Quick Summary - Flight Setup

First, download this prefab: [Flight.prefab](https://raw.githubusercontent.com/yexca-VRChat/vrchat-docs-source/main/file/飞行.zip)

1) Place the item inside the avatar's hierarchy.

2) Record the item toggle-on animation.

3) Add the animation to the FX layer.

4) Add the control to the VRChat Menu and Parameters.