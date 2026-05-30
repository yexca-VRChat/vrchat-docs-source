---
title: Uploading Premade Models
description: Uploading premade models to VRChat
lastmod: 2024-12-31
---

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Finally becoming *them* ///

Premade models refer to avatars that are almost entirely set up by someone else; you just need to handle the upload. 
These are usually purchased on [Booth](https://booth.pm/zh-cn).

## 1. Unity Localization Preparation (Optional)

### 1) Install the Simplified Chinese component from Unity Hub

Open Unity Hub and log in. Click **Installs** on the left, find `2019.4.31f1c1` (c1 refers to the China version), click the gear icon on the right, select **Add modules**, find **Simplified Chinese**, then select and install it.

### 2) If "Add modules" is missing or Unity wasn't installed via Hub

Note: I haven't tried this method personally, so no guarantees.

#### <1> Download the zh-cn.po file

Download link: [zh-cn.po](https://raw.githubusercontent.com/yexca-VRChat/vrchat-docs-source/main/file/zh-cn.zip)

#### <2> Place the file in the Unity installation directory

```markdown
C:\Program Files\Unity\2019.4.31f1c1\Editor\Data\Localization
```

If this directory doesn't exist, create it yourself.

## 2. Create a New Unity Project and Localize

### 1) Add a Personal License

Click the profile icon in the top left, go to **Manage Licenses**, select **Add > Get a free personal license > Agree and get personal license**.

### 2) Create a New Unity Project

Click **New project**, select **3D**, name your project, choose a location, and click **Create**. Wait a bit for it to load.

### 3) Localization

If you plan to learn Unity in depth, I recommend sticking with the original English version.

Under **Editor > Preferences > Languages**, select **Simplified Chinese**.

## 3. Import Files (unitypackage)

You can import files by double-clicking them or dragging them directly into Unity.

### Files to Import

1) Dynamic Bone Plugin (Dynamic Bone 1.2.0.unitypackage)

2) Shader Plugin (UTS2.unitypackage)

3) VRCSDK (VRCSDK3-AVATAR-2022.02.16.19.13_Public.unitypackage — newer SDKs will have different names)

4) Model Files

## 4. Uploading the Model

### 1) Drag in the Model

In the `Assets` panel at the bottom, find the prefab file or scene file.

#### <1> Prefab File

Drag it into the scene on the left.

#### <2> Scene File

Double-click it to open.

### 2) Open the VRC Control Panel

Click **VRChat SDK > Show Control Panel** at the top. Log in to your VRChat account and click **Builder**.

#### <1> If "Build & Publish for Windows" is clickable

Just click it and wait for the process to finish.

#### <2> If it's not clickable

You should see some red hexagonal exclamation marks above. Most will have an **Auto Fix** button next to them. Click all of them, then click **Build & Publish for Windows**.
If it still won't upload after that, I haven't encountered that issue yet.

#### <3> If there's no model info and it says "A VRCAvatarDescriptor is required to build an Avatar"

This means you are trying to upload an SDK2 model. You'll need to create a new project with SDK2 or upgrade the model to SDK3 (I'll cover this in a later article; upgrading is recommended as SDK2 might lose support eventually).

### 3) Fill in Model Info

Once the build is successful, you can close the `VRChat Upload Panel`.

**Avatar Name**: The name of your model.

**Description**: A description for the model.

Ignore the next warning.

**Sharing**: Whether the uploaded model is public. `Private` is for personal use, `Publish` is public (allowing others to clone it). Usually, you should pick **Private**.

Check the checkbox at the bottom and click **Upload**.

### 4) Creating a Model Thumbnail

You can upload right after the previous step, but you might not like the default thumbnail.

#### <1> Create an Object

Go back to the scene, right-click `VRCCam` on the left, and select **3D Object > Quad**.

In the `Transform` settings on the right, set the `Position` Z-axis to `2.6`, and set the `Scale` X and Y axes to `4` and `3` respectively.

#### <2> Add an Image

Drag an image you want to use into Unity. Create a Material (Right-click `Assets` > **Create > Material**). Click the material, select a **Shader** on the right (e.g., `VRChat-Mobile-Toon Lit`), drag your image into the material's texture slot, then drag the material onto the Quad you just created in the scene.

#### <3> Upload the Model

The model will likely block the image now. Click the model on the left, and uncheck the checkbox next to the model's name in the Inspector to hide it.

Switch back to the **Game** view; you should see the image you just set up.

Now, click **Upload** again.

## 5. Errors and Upload Failures

> Rebooting solves 90% of problems, reinstalling solves 99%, and buying a new one solves 100%.

Try re-uploading, restarting Unity, creating a fresh project to upload from, restarting your computer, or checking for network issues.

If it's a blueprint issue (error message contains `BluePrint`), click the character on the left, scroll to the bottom of the Inspector on the right, click **Detach**, and try uploading again.