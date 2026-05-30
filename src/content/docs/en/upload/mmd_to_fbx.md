---
title: Converting MMD Models to FBX
description: Convert MMD models to FBX format
---

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> So many cool MMD models, how do I use them as my avatar?

## Introduction

Unity doesn't recognize MMD models natively. There are two main ways to convert them. This guide uses Blender; for direct plugin conversion in Unity, check [Importing MMD models to Unity – yexca'Blog](https://blog.yexca.net/archives/28/)

## 1. Download and Install Blender and Plugins

### 1) Download Blender 2.93

Official download link: [Index of /release/ (blender.org)](https://download.blender.org/release/)

Please look for version 2.93 to download.

### 2) Download the Plugin

GitHub link: [Releases · absolute-quantum/cats-blender-plugin (github.com)](https://github.com/absolute-quantum/cats-blender-plugin/releases)

Direct download link:

GitHub: [cats-blender-plugin-0-19-0.zip](https://github.com/absolute-quantum/cats-blender-plugin/releases/download/0.19.0/cats-blender-plugin-0-19-0.zip)

### 3) Install the Plugin

Open Blender, select `General`. Go to `Edit` -> `Preferences` -> `Add-ons` -> `Install`. Locate the downloaded zip file and click `Install Add-on`, then check the checkbox to enable it.

## 2. Import and Basic Processing

### 1) Clear Scene

Select all items in the top-right Outliner and press `Delete` or `X` to delete them.

### 2) Import Model

Go to `File` -> `Import` -> `MikuMikuDance Model` in the top left, then find your model and double-click to import.

### 3) Fix Model

Press `<` on the right to expand the sidebar menu, click `CATS`, and select `Fix Model`. Wait a bit for the process to finish.

Now you can export (click `File` -> `Export` -> `FBX`).

## 3. Further Processing

While the previous step works, the character's mouth won't move when speaking in-game.

### 1) Eye Tracking

Configure as shown:

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-MMD2FBX/%E7%9C%BC%E9%83%A8%E8%BF%BD%E8%B8%AA.6a4bwsz8fyg0.webp)

Click "Create Eye Tracking". If it's not found, select "Basis".

### 2) Visemes (Lip Sync)

As shown below:

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-MMD2FBX/%E5%98%B4%E9%83%A8%E5%8F%A3%E5%9E%8B.288ghboc1vvo.webp)

Click "Create Visemes".

### 3) Export

You're ready to export. Go to `File` -> `Export` -> `FBX`.

## 4. Advanced Processing

The following steps are for separating meshes by material, which allows for things like clothing toggles. Note that if you do this, you will need to redo Step 3.

### 1) Separate by Material

In "Model Options", click on materials to separate the mesh. This may take a moment.

### 2) Identify the Body

In the top-right Outliner, toggle the eye icon to hide/show objects to find the main body. Rename it to "Body".

### 3) Join Meshes

In the Outliner, hold `CTRL` to select the parts you want to merge, then click "Join Meshes-Selected" under "Model Options".

The "Body" can also be merged, but it must be named "Body", and "facial expressions" must be included in the "Body" mesh.

### 4) Redo Step 3

Since you've refined the model this much, you'll need to re-apply the Eye Tracking and Visemes from Step 3.