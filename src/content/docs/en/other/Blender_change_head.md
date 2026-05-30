---
title: Blender Head Swapping
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Who doesn't want to freely swap heads? (doge)

## Model Files

Put both model files in the same folder. If there are duplicate file names, rename them and refer to [Troubleshooting](/other/blender_change_head/#%E9%97%AE%E9%A2%98%E5%AF%BC%E5%85%A5%E5%90%8E%E6%9D%90%E8%B4%A8%E8%B4%B4%E5%9B%BE%E4%B8%8D%E6%98%BE%E7%A4%BA) to re-select the textures in the software.

## Blender Basic Controls

Middle Mouse Button (MMB): Hold to rotate

Scroll Wheel: Zoom in/out

Shift + MMB: Hold to pan

Ctrl + MMB: Hold and move up/down to zoom

## 1. Import the First Model (Head)

If it's an MMD model, click `Fix Model` after importing. If not, go to the next step (fixing might fail occasionally).

You can select the armature and press `H` to hide it for better visibility.

Then click `CATS` -> `Model Option` -> `Separate by` -> `Material` to separate the materials.

### 1) Materials

#### Head and Body are already separated

Just delete the body part directly.

#### Head and Body are joined

Select the clothes/body, press `Tab` to enter `Edit Mode`.

Use `LMB` (Left Mouse Button) to click-select or drag-select. Press `Shift + LMB` to add to selection, and `Ctrl + LMB` to deselect.

After selecting the rough area, press `Ctrl + L` to select linked faces.

Then press `X` -> `Vertices` to delete them. Press `Tab` to exit `Edit Mode` and return to `Object Mode`.

Repeat until everything is deleted.

### 2) Armature / Bones

Press `Alt + H` to unhide all hidden objects.

Select the armature, press `Tab` to enter `Edit Mode`.

- Select a parent bone, then press `Shift + G` -> `Children` to select all of its child bones.

- Select the end of a bone chain, hold `Ctrl`, and select another bone to select the path between them.

Then press `X` -> `Bones` to delete them. Repeat until done, then press `Tab` to exit `Edit Mode` and return to `Object Mode`.

Press `A` in the `Scene Collection` (top right) to select everything, then press `H` to hide them.

Keep bones up to the `Neck` bone.

## 2. Import the Second Model (Body)

Similar to the previous step, but this time delete the head instead.

## Troubleshooting: Textures/Materials Not Displaying After Import

Select the model, go to `Material Properties` in the bottom right, and select the missing/broken texture.

Scroll down to the bottom to `MMD Texture`, click `Add` under `Texture`, and select the correct texture file.

## 3. Joining the Head and Body

### 1) Rough Positioning

In `Object Mode`, hold `Shift` to select multiple meshes, then press `Ctrl + J` to join them.

Then move the head to its rough position (you can do this by moving the bones).

Select the bones, press `G`, then press `X/Y/Z` to move along that specific axis. Left-click to confirm.

### 2) Merging

Go to `CATS` -> `Custom Model Creation`.

If you followed the order of this guide (body first, then head), simply click `Merge Armatures`.

If not, set `Base` to the Head and `To Merge` to the Body.

### 3) Separating the Neck

First separate the materials: click `CATS` -> `Model Option` -> `Separate by` -> `Material`.

The head needs to have a section of the neck separated to prevent breaking shape keys.

Select the head, press `Tab` to enter `Edit Mode`, and select a loop of vertices around the neck.

You can press `C` for circle select, drag with `LMB` to select, drag with `MMB` to deselect, and `RMB` to exit selection mode.

Once selected, press `P` -> `Selection` to separate the neck.

#### Removing Shape Keys

Press `Tab` to exit `Edit Mode` and enter `Object Mode`.

Select the separated neck, go to `Object Data Properties` in the bottom right, and click the `-` button under `Shape Keys` to delete them all.

## 4. Merging Vertices (Bridging)

Hide everything else and only show the neck and body for a clearer view.

You can delete some vertices on both parts first to get a rough match.

In `Object Mode`, hold `Shift` to select both, press `Ctrl + J` to join them, and then press `Tab` to enter `Edit Mode`.

Select two vertices, then press `M` -> `At Center`. If the vertex counts on the top and bottom loops don't match, you can merge three vertices together.

### 1) Adjusting Thickness

Select two or more vertex loops, `RMB` -> `Smooth Vertices`. Click it a few times until it looks right.

### 2) Color Correction

If the head and body colors are way off, you can fix it in Photoshop ~~(I don't know how, so I won't write about it)~~.

Or go into `Texture Paint` mode and mess around, like using the `Smear` tool.

## 5. Testing

Select the armature, switch to `Pose Mode` in the top left, and rotate the bones to see if they move correctly.

Select a bone, press `R`, then `X/Y/Z` to rotate on that axis. Left-click to confirm, then `Ctrl + Z` to undo.

Note: Usually the weights are fine. Sometimes weights that look wrong in Blender end up looking correct in Unity.

## 6. Weight Painting

### 1) Separating Materials

To make weight painting easier, you can separate the relevant materials first.

First, use `CATS` -> `Model Option` -> `Separate by` -> `Material` to separate them.

If the area you need to paint is separated, you can go straight to weight painting. If you need to separate it further:

Select the mesh, press `Tab` to enter `Edit Mode`, select the parts you want to separate, and press `P` -> `Selection`.

### 2) Weight Painting

In `Object Mode`, select the armature, then hold `Shift` and select the mesh you want to paint. Then switch to `Weight Paint` mode in the top-left corner.

Hold `Ctrl` and `LMB` click a bone to paint weights for that specific bone.