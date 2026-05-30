---
title: Base Layer - Crouching and Prone Poses
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> An example of modifying the Base layer, specifically changing the model's crouching and prone poses.

## 1. Add the "Animator" Window in Unity

Go to the top left and select "Window -> Animation -> Animator" to open the Animator window. You can drag and dock it anywhere (e.g., next to the "Game" window).

## 2. Open the Locomotion Layer Controller

Locate your animator controller and click it to display it in the "Animator" window. (You can click your avatar's name on the left, find the Base layer in the "VRC Avatar Descriptor" on the right, and click it to highlight the file).

## 3. Modify the Standing Pose

In the "Locomotion" layer, find "Standing". Click it, then in the "Inspector" on the right, click "vrc_StandingLocomotion" next to "Motion" to locate the file. Click the file, and replace the **third** animation "proxy_stand_still" in the "Motion" list of the Inspector.

## 4. Modify the Crouching Pose

In the "Locomotion" layer, find "Crouching". Click it, then in the "Inspector" on the right, click "vrc_CrouchingLocomotion" next to "Motion" to locate the file. Click the file, and replace the **first** animation "proxy_crouch_still" in the "Motion" list of the Inspector.

## 5. Modify the Prone Pose

In the "Locomotion" layer, find "Prone". Click it, then in the "Inspector" on the right, click "vrc_ProneLocomotion" next to "Motion" to locate the file. Click the file, and replace the **first** animation "proxy_low_crawl_still" in the "Motion" list of the Inspector.

## 6. Others

Feel free to experiment with other poses like jumping and falling on your own.