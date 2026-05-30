---
title: Action Layer - AFK
---

:::caution[Disclaimer]
This document was translated by GPT-5.5 and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> An example edit for the Action layer: changing the avatar's AFK animation.

## 1. What Is AFK?

AFK is the pose your avatar uses when you take off your headset while playing VRChat in VR. The default pose is sitting cross-legged.

When playing on PC, you can press the “End” key to enter the AFK state.

## 2. Open the Action Layer Controller

Find the controller location and click it to show it in the Animator window. You can also select the avatar name on the left, then find the Action layer in the “VRC Avatar Descriptor” on the right and click it to locate the controller.

## 3. Replace the Animation

Replace the “Motion” fields of “Afk Init”, “AFK”, and “BlendOut” in the lower-left area with the animation you want.

### 1. You Only Have One Animation File

Put that animation into the “Motion” field of “Afk Init”, “AFK”, and “BlendOut”.

### 2. You Have Three Replacement Files

Make sure you know which file is the enter animation and which file is the exit animation.

Put the enter animation into the “Motion” field of “Afk Init”.

Put the exit animation into the “Motion” field of “BlendOut”.

Put the third animation into the “Motion” field of “AFK”.
