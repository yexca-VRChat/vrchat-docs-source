---
title: Adding Shape Keys in Blender
---

:::caution[Disclaimer]
This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Expressions are essentially shape keys. Before customizing expressions, you need to know which ones exist or create them yourself.

## Import the Model

Import the model you want to add expressions to, then hide it.

## Import the Expression Model

Separate materials and delete unwanted parts.

**Note**: If the original model already has shape keys, you need to rename or delete duplicate names.

## Vertex Groups (Optional)

Purpose here: Makes selection easier.

In Edit Mode, select some vertices, create and name a new group in `Vertex Groups`, then click `Assign`.

Delete: You can choose `Delete All Groups`.

## Merge

Move the expression to the model (Right-click -> Set Origin -> `Origin to Geometry`), then join it with the model's mesh using `Ctrl + J`. Delete everything else.

If things don't align properly, you can manually reposition the expression mesh relative to the model.

## Edit Shape Keys

Go to the Shape Keys panel.

Select the shape key you want to edit, set the `Value` to 1, and edit it directly in the viewport.

### Eyes Closed, Mouth Open

Modify vertex positions directly on the model.

### Shrinking Pupils

You can separate the eye mesh/material first before modifying it.

## Weight Painting

Enter Pose Mode to test if the weights are correct.

### Painting Weights

In `Object Mode`, select the armature, hold `Shift` and select the part you want to paint, then switch to `Weight Paint` mode from the top-left menu.

Hold `Ctrl` + `Left-Click` a bone to select it and paint its weights.

- For eyes that move with the bones, paint their eye bone weight to 1, and the parent bone (Head) weight to 0.

- For parts that shouldn't move with the eyes, set the eye bone weight to 0, and the parent bone (Head) weight to 1.

### Auto Painting?

**Note**: It's automatic, so expect some errors.

Top-left menu: `Weights` -> `Assign Automatic From Bones`.