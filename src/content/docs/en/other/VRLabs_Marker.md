---
title: Adding a Marker for Writing
---

:::caution[Disclaimer]
This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> VRLabs makes really good stuff, check out their other assets.

## Tools

We'll be using this free asset from VRLabs: [VRLabs Marker | マーカー – VRLabs – BOOTH](https://booth.pm/zh-cn/items/2911163)

## Prerequisites

- At least 13 available bits in the avatar's parameters.
- At least one empty slot in the avatar's top-level menu.

## 1. Import

Download, extract, and drag the files into Unity. Navigate to `Assets-VRLabs-Marker` in your project folder, find `Marker.cs`, and drag it onto your avatar's name in the **Hierarchy**. Click on your avatar, and you should see the script in the **Inspector**.

## 2. Overview

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-VRLabsMarker/image.227jhy6gwfpc.webp)

**Avatar:** Displays the avatar's name to apply the marker to. Replaceable.

**Left-handed:** Equip on the left hand.

**Write Defaults:** An animator layer setting. Determines whether to reset changes from the previous state when entering the next one.

**Gesture to draw:** Choose a gesture to trigger drawing. Defaults to "point".

For gesture values, refer to: [Parameters](/summary/parameters/#%E4%B8%89%E6%89%8B%E5%8A%BF%E5%AF%B9%E5%BA%94%E6%95%B0%E5%80%BC)

**Adjustable brush size:** Allows adjusting the brush size.

**Adjustable eraser size:** Allows adjusting the eraser size.

**Use index finger to draw:** Write with your index finger. Enabling this removes the physical pen model.

**Enable local space:** Allows anchoring drawn elements to a specific body part.

**Half-Body:** Available if the above option is enabled. Allows anchoring to the upper body (head, hands, and chest).

**Full-Body:** Adds feet tracking support on top of "Half-Body".

**Parameter memory bits needed:** Number of parameter bits required. Adjusting the settings above may change this value.

**Generate Marker:** Start generation.

**Remove Marker:** Remove the marker setup.

## 3. Setup

Configure your settings and click **Generate Marker**, then wait a moment.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-VRLabsMarker/image.38b74nyenpy0.webp)

Enter **Play** mode. Find the controller named `M_Gesture` in `Assets-VRLabs-Marker-Resources`, drag it into your avatar's Animator Controller slot, and then click the first button on the script, **Adjust MarkerTarget transform**, to start positioning the marker.

Once positioned, **note down the transform values of the marker**, exit Play mode, and input those values.

After adjusting, just click **Finish Setup** to finish.

## Removal

Simply drag the script onto the avatar again and click **Remove Marker**.