---
title: Dancing MMD Yourself
---

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> An example of using the Animator Locomotion Control script—because how can you resist dancing once you've become this cute?

## 1. File Preparation

- Dance animation files
- Music

For MMD dance conversion, refer to: [Fixed World MMD](/additional/set_mmd)

However, you need to adjust the animation orientation here: click the animation file, and in the right panel under **Root Transform Rotation - Based Upon**, select **Original**.

## 2. Creating the Music Toggle

### 1) Compress Audio

Click the audio file, select the compression format in the right panel (usually the default `Vorbis` is fine), choose the quality (lower means higher compression), and click Apply.

### 2) Add Audio

Create an empty object on the model and add the **Audio Source** component.

Drag the music into the **AudioClip** slot. Set **Spatial Blend** to `1`, **Doppler Level** to `0`, and **Volume Rolloff** to `Linear Rolloff`. You can adjust the **Max Distance** as needed (e.g., 20).

### 3) Bone Parenting (Optional)

I usually parent the audio to the mouth. For parenting info, refer to: [Object Bone Parenting](/additional/tied_bones)

### 4) Create the Toggle

For recording toggles, refer to: [FX Layer - Item Toggle](/editing/switch)

## 3. Adding Animations to the Animator

### Action Layer

Go to the Action layer. Following `Entry -> WaitForActionOrAFK -> Prepare Standing`, there are eight transitions coming out of `Prepare Standing`. Pick one of the subsequent states and replace the **Motion** with your dance animation.

Add the **Animator Locomotion Control** component and set **Locomotion Control** to **Disable**. If you don't set this, the model will still move its legs when you rotate or move in-game.

Check if the transitions before and after are correct and have the appropriate conditions (e.g., the entry condition is `VRCEmote` equals `1`, and the exit condition is `VRCEmote` does not equal `1`). Ensure **Has Exit Time** is disabled.

In the next state (`BlendOut Stand`), add the **Animator Locomotion Control** component and set **Locomotion Control** to **Enable**. If you forget this, you won't be able to move or turn your view in-game after the dance ends.

### FX Layer

Go to the FX layer, add an **Int** type parameter, and name it `VRCEmote`.

Create a new layer. The condition to turn the music on should match the condition to start the dance in the Action layer (e.g., `VRCEmote` equals `1`). The condition to turn it off should match the exit condition (e.g., `VRCEmote` does not equal `1`). Disable **Has Exit Time**.

## 4. Setting Values and Menu

### Parameters

By default, the first parameter is usually `VRCEmote`. If it's missing, add it as an **Int**.

### Menu

Add an item to the menu. Set **Type** to **Toggle**, **Parameter** to `VRCEmote`, and the **Value** to the one used in your Action layer condition (e.g., `1`).