---
title: MMD Model Upload
description: Uploading MMD models to VRChat
---

> Finally, access to a massive library of MMD models ~~(even if it's a bit of a pain)~~

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

## I. Importing MMD Models to Unity

The [previous article](/upload/mmd_to_fbx) covered converting MMD models to FBX. Now, import all the MMD model files into Unity.

## II. MMD Model Adaptation

### 1) Materials

Click the FBX file. In the Inspector, go to **Materials -> Location -> Use External Materials**, then click Apply and wait a bit.

### 2) Rig

Go to **Rig -> Animation Type -> Humanoid**, click Apply, and wait a bit.

Then click **Configure...** to check the bones.

First, ensure it's in a T-pose. If not, scroll to the bottom of the right panel, click **Pose -> Enforce T-Pose**. Then check for bone errors (errors usually occur in the "Head" section).

Once checked, click **Done**.

## III. Adding the SDK Descriptor

### 1) Adjusting the View Ball

In the "VRC Avatar Descriptor" component, the first section is **View**. This is the view ball we need to adjust. Click **Edit** to move it in the Unity scene. Place it roughly in front of the forehead, then go back to the script and click **Return**.

### 2) Adding Visemes

If you didn't set these up in Blender (i.e., you skipped [Step 3 of the MMD to FBX guide](/upload/mmd_to_fbx/#%E4%B8%89%E8%BF%9B%E4%B8%80%E6%AD%A5%E5%A4%84%E7%90%86)), skip this and proceed to [Step 4](/upload/upload/#%E5%9B%9B%E4%B8%8A%E4%BC%A0%E6%A8%A1%E5%9E%8B) or upload directly.

The second section in "VRC Avatar Descriptor" is **LipSync**. Set **Mode** to **Viseme Blend Shape**. Drag the **Body** mesh into the **Face Mesh** slot; it should auto-recognize the shapes.

### 3) Adding Eye Look

The third section is **Eye Look**. Click **Enable** and drag the left and right eye bones into their respective slots.

Under **Eyelids**, set **Eyelid Type** to **Blendshapes**, then drag the **Body** mesh in for auto-recognition.

## IV. Adding Dynamic Bones and Colliders

{{% hint warning %}}
**Note**  
VRChat official states that Dynamic Bones will eventually be phased out. Please consider learning or adding the new **PhysBones**.
{{% /hint %}}

Adding Dynamic Bones and Colliders requires trial and error and can be tedious. Without them, the model's clothes and hair won't move when you move in-game.

### 1) Dynamic Bones

Add Dynamic Bones to parts you want to "move," such as skirts or hair. Let's use a skirt as an example.

Find the bone for the skirt, click it, and in the Inspector, click **Add Component**, search for **Dynamic Bone**, and add it.

Drag the bone into the **Root** slot of the Dynamic Bone component. Adjust these four parameters:

*   **Damping**: Resistance
*   **Elasticity**: Bounciness
*   **Stiffness**: Rigidity (usually smaller than the value below)
*   **Inert**: Inertia

The following parameters are for reference; experiment for the best results:

Example: Skirt: 0.6, 0.06, 0.2, 0.4
Chest: 0.08, 0.06
Hair: 0.7, 0.06, 0.6, 0.85

Reference parameters (via [VRchat model Unity - Xingkong Yueling - Blog Park](https://www.cnblogs.com/raitorei/p/12008887.html)):

    @Sasha Clothes: 0.9, 0.03, 0.1, 0
    @JIUJIU Soft but no clipping: 0.7, 0.06, 0.9, 0.9
    @Ryuu-San Ears and Tail: 0.7, 0.07, 0.666, 0.52

Reference parameters (via [VRChat Model Upload FAQ - Ryuu-San's Blog - CSDN](https://blog.csdn.net/TopOnelong/article/details/79002465)):

### 2) Colliders

After adding Dynamic Bones, you'll see the effect in Play Mode when moving the model (but you'll likely see clipping). Solve this by adding Colliders, such as leg colliders.

Create a new Empty Object under the bone where you want the collider (Right-click bone -> **Create Empty**).

Select the Empty Object and add the **Dynamic Bone Collider** component. Adjust the Radius and Height.

### 3) Linking Colliders to Dynamic Bones

Select the bone with the Dynamic Bone component (e.g., the skirt). Drag the Empty Object created in the previous step into the **Colliders** list of the Dynamic Bone component. This allows the leg colliders to interact with the skirt's dynamic bones, preventing the skirt from clipping through the legs.

Enter **Play Mode** to verify the effect.

## V. Uploading

Refer to [Step 4 of the Finished Model Upload guide](/upload/upload/#%E5%9B%9B%E4%B8%8A%E4%BC%A0%E6%A8%A1%E5%9E%8B) for uploading.

Other parts of the "VRC Avatar Descriptor" will be covered in future articles.