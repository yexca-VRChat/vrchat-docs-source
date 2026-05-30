---
title: Adding Gesture Expressions
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Gestures use numeric values. We detect value changes to modify blendshapes, mapping gestures to facial expressions.

## Intro

Essentially, this is done using the "BlendShapes" on the model's "Body" or "Face". If your model doesn't have them, you might need to add them using some 3D modeling software first.

## 1. Locate the Animation

Go to your model's "FX Layer". Under the "Left Hand" or "Right Hand" layer, find the animation you want to modify (you can press CTRL+D to duplicate and backup the original file first).

Let's use the right hand's "Point" gesture as an example.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-EmoteAnim/image.4tnhuoe1z3s0.webp)

## 2. Modify the Animation

Duplicate the model in the Hierarchy (CTRL+D), then hide the original model. Drag the animation file you want to edit onto the duplicated model. Click "Record" in the Animation window, locate the "BlendShapes" under the model's "Body" or "Face", expand them, and adjust the values to create your facial expression.

**Note:** Always use the duplicated model for this, otherwise things can get weird.

When making multiple expressions, set all other BlendShape values involved to 0 (except the ones used by the current expression) to prevent conflicts.
To make things easier, you can just set all BlendShapes to 0.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-EmoteAnim/image.14s44hc2egg0.webp)

## 3. Wrap Up

Stop "Record" and "Preview" modes. Replace the original animation with your newly created one, and delete the duplicated model.