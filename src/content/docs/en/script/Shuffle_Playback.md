---
title: Shuffle Music Playback
---

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> An idea inspired by the Avatar Parameter Driver script. Every guy wants to build their own custom player.

## 1. Prepare Files

I've already recorded the animation files for the music toggle. You can refer to: [Self MMD Dance](/script/self_mmd/#%E4%BA%8C%E5%88%B6%E4%BD%9C%E9%9F%B3%E4%B9%90%E5%BC%80%E5%85%B3)

## 2. Parameters

| Parameter | Animator (FX Layer) | Value | Description |
| :--- | :--- | :--- | :--- |
| Toggle (Bool) e.g., "Music_Start" | Add | Add | Controls the shuffle toggle |
| Select Song (Int) e.g., "Music" | Add | Optional (if added, can display the current song and switch to the next in-game) | Controls the selected song |

## 3. Layers

After adding the parameters, create a new layer, rename it, and set the weight to 1, as shown below:

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-随机音乐/image.70l2gvlag0s0.webp)

## 4. Menu

After adding the parameters to the VRC Expressions, create the menu.

### 1) If just making a simple toggle

Just add a "Toggle" with the parameter "Music_Start".

### 2) Displaying the current song in-game

I recommend using a sub-menu.

First, add a "Toggle" for "Music_Start".

Then, add several "Toggles" (one for each song) with the parameter "Music" and values corresponding to the conditions in your layer.

### 3) Adding "Next Song"

Since the "display current song" setup already allows you to switch by clicking any song in-game, you can simply add a "Toggle" with the parameter "Music" set to "0" or any other value to trigger a change.

## 5. Other Notes

Using this script, you can also implement sequential playback, reverse playback, etc.

It can also be used to create random voice lines for a specific move (animation).