---
title: World-Locked MMD
---

:::caution[Disclaimer]
This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Make a model dance in one place.

## 1. Convert MMD Dance to Animation File

### 1) Download VRC Toolbox

Download Link: [VRChatAvatarToolkit Releases – Gitee.com](https://gitee.com/cmoyuer/vrchat-avatar-toolkit/releases)

Direct Download Link (Gitee): [VRC Toolbox v1.2.5_by RuMeng.unitypackage](https://gitee.com/cmoyuer/vrchat-avatar-toolkit/attach_files/937625/download/VRC%E5%B7%A5%E5%85%B7%E7%AE%B1v1.2.5_by%E5%A6%82%E6%A2%A6.unitypackage)

Author's Bilibili: [RuMeng Nya's Space - Bilibili](https://space.bilibili.com/2562878)

### 2) Import Files

- VRC Toolbox
- MMD motion file (.vmd file)
- (Optional) MMD model (.pmx file)

*Note: Importing the MMD model helps prevent some animations from breaking or looking weird.*

### 3) Convert

In the top menu, select **VRC Toolbox -> MMD Motion Converter**.

Drag the MMD motion file and the MMD model (model is optional) into their respective slots.

Click **Generate Config File** and wait a moment.

### 4) Check if the Animation is Normal

Even though we are importing MMD to generate animations, some dance moves might still look weird after conversion.

First, select your model in the left **Hierarchy** panel, press **Ctrl + D** to duplicate it, hide the original model, and drag the animation onto the new model (duplicating prevents breaking the original).

Click **Play** and the character should start dancing.

### 5) Adjust Animation Orientation

Click the animation file, and in the right Inspector panel, set **Root Transform Rotation -> Based Upon** to **Original**.

This is **optional** for world-locked models, but makes it easier to preview if you want to dance MMD yourself later.

## 2. Import and Compress Audio Files

Just drag and drop the audio into your folder. We compress files because VRChat limits avatar size to 200MB.

Click the audio file, select the compression format in the right panel (usually the default **Vorbis** is fine), set the quality (lower means higher compression), and click **Apply**.

## 3. Add Model and Audio Dance

### 1) Add Model and Dance

Refer to the previous article to place the model in the corresponding "Object" position. Article: [World-Locked Objects](/additional/set_object)

Simply drag and drop the animation directly onto the model name that you want to dance.

### 2) Add Audio

Create an empty GameObject on the dancing model, then add the **Audio Source** component.

Drag the music file into **AudioClip**. Set **Spatial Blend** to `1`, **Doppler Level** to `0`, **Volume Rolloff** to **Linear Rolloff**, and adjust the **Max Distance** as you like (e.g., 20).

### 3) Audio Bone Binding

I usually parent the audio source to the head/mouth bone. Bone binding guide: [Object Bone Binding](/additional/tied_bones)

### 4) Adjust Position

Move the model to your desired position, e.g., 1 meter forward, rotated 180 degrees.

## 4. Record Animation

For animation recording, refer to [World-Locked Objects](/additional/set_object).

## 5. Others

If it's a multiplayer/group dance, you can add multiple models and drag different motion files onto each. Just pay attention to their positions (e.g., who is on the left, who is on the right).