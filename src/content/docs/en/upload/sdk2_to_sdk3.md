---
title: Converting SDK2 to SDK3
description: How to convert VRChat SDK2 avatars to SDK3 models
---

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> The new version no longer supports SDK2, so it's time for an update ~~(actually, older Unity versions still work)~~.

## 1. Importing

Don't import SDK2. Just import whatever you need for uploading SDK3 avatars.

## 2. Removing SDK2 Components

Once the avatar is in the scene (by dragging in the prefab or double-clicking the scene file), click on the avatar.

Remove the extra components on the right (usually the last two). Keep only the "Transform" and "Animator" components.

## 3. Adding the SDK3 Descriptor

### 1) Adjusting the View Ball

The first section in "VRC Avatar Descriptor" is "View," which is the view ball we need to adjust. Click "Edit" to move it in Unity—usually right in front of the forehead—then click "Return" on the script.

### 2) Adding "Viseme"

The second section is "LipSync." Click "Auto Detect" for automatic recognition.

If it fails to auto-detect, dragging "Body" into the corresponding slot usually works.
Some models have separate "Body" and "Face" meshes. In that case, change "Mode" to "Viseme Blend Shape" and drag "Face" into "Face Mesh" (be sure to check for any errors).

## 4. Uploading

For uploading, refer to [Step 4 of Uploading a Finished Model](/upload/upload/#%E5%9B%9B%E4%B8%8A%E4%BC%A0%E6%A8%A1%E5%9E%8B).

Other parts of the "VRC Avatar Descriptor" will be covered in future posts.