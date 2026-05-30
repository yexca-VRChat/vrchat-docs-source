---
title: Sequential Music Playback
---

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> An example of using the Avatar Parameter Driver script. I thought it would be simple, but it turned out to be a bit complex.

## 1. Prepare Files

You should have your animation files for toggling audio ready. Refer to: [Self-dancing MMD](/script/self_mmd/#%E4%BA%8C%E5%88%B6%E4%BD%9C%E9%9F%B3%E4%B9%90%E5%BC%80%E5%85%B3)

## 2. Parameters

| Parameter | Animator (FX Layer) | Value (VRC Expressions) | Description |
| ---------------------------- | ------------- | -------------------------------------- | ---------------- |
| Toggle (Bool) e.g., "Music_Start" | Add | Add | Controls the playback toggle |
| Select Song (Int) e.g., "Music" | Add | Optional (Add to show current song in-game) | Controls the song selection |
| Next (Bool) e.g., "Next" | Optional | Optional (Add to control skipping) | Controls playing the next song |

## 3. Layers

After adding the parameters, create a new layer, rename it, and set the weight to 1, as shown below:

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/06-顺序播放音乐/顺序播放音乐.6da5laejoag0.webp)

## 4. Menu

Create the menu after adding the parameters to the VRC Expressions list.

### 1) If you just want a simple toggle

Just add a "Toggle" with the parameter "Music_Start".

### 2) Displaying the current song in-game

I recommend using a sub-menu.

First, add a playback toggle (a "Toggle" with the "Music_Start" parameter).

Then add several "Toggles" (one for each song) using the "Music" parameter, with values corresponding to the conditions in your layer.

### 3) Adding a "Next" button

Add a "Button" with the parameter "Next".