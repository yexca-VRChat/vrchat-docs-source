---
title: World Lock Objects
---

:::caution[Disclaimer]
This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Place an object in the world space

## 1. Using a Prefab

### 1) Download and Import into Unity

Click to download: [Stable Rigid Body](https://raw.githubusercontent.com/yexca-VRChat/vrchat-docs-source/main/file/稳定刚体.zip)

Unzip the downloaded file and drag the entire folder into Unity.

### 2) Set Up

Find the prefab file, drag it under your avatar model's hierarchy (as a child), then right-click and select "Unpack Prefab".

Drag the "Anchor" inside it up one level (making it a direct child of the model). You can rename it (e.g., "Benares").

Next, expand "worldSpace-Container-Cube", remove the "Mesh Renderer" component from "Cube", and then move your object/model under "Cube".

The "worldSpace" object can also be renamed (e.g., "Benares_Model").

### 3) Record Animations

Record an animation that toggles "worldSpace" on (in this case, enabling "Benares_Model").

## 2. Without Using a Prefab

### 1) Create Empty GameObjects

First, reset your model's position to 0, 0, 0. Then create an empty GameObject under the model (Right-click -> "Create Empty").

Under this empty GameObject, create five child empty GameObjects (you can create one and press "Ctrl+D" to duplicate).

Name these five empty objects: "World Source", "Update Source", "World Position", "Update Position", and "Item". Then, drag "Update Position" to make it a child of "World Position".

Then, put your model under "Item". You can move the model itself, but do NOT move "Item" (its position must remain at 0, 0, 0).

### 2) Add Constraints

#### <1> World Position Constraints

Select "World Position". In the Inspector on the right, add "Position Constraint" and "Rotation Constraint" components. Set their Sources to "World Source".

Set the "Position Constraint" Weight to "0.5", then set the Source Weights for both constraint components to "-1".

Finally, activate (check "Is Active") both of them.

#### <2> Update Position Constraints

Select "Update Position", add a "Parent Constraint" component, set the Source to "Update Source", and click Activate.

#### <3> Item Constraints

Select "Item", add a "Parent Constraint" component, set the Source to "Update Position", and click Activate.

### 3) Create Animations

*   **OFF Animation**: Toggle "Item" OFF, toggle "Update Position" ON.
*   **ON Animation**: Toggle "Item" ON, toggle "Update Position" OFF.

### 4) Animator Setup

Create a new Animator Layer and set its weight to "1". Create a new parameter of type "Bool".

In the new layer, drag in the "OFF" animation as the default state, then drag in the "ON" animation. Create transitions between them using the newly created Bool parameter.