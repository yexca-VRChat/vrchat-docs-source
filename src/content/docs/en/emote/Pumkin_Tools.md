---
title: One-Click Copy
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Remaking Dynamic Bones after creating expressions is a giant pain. Let's try one-click restoration instead.

## Blender Export

Materials cannot be modified; they must match the original model (bones probably shouldn't be modified either).

## Pumkin's Avatar Tools

GitHub: <https://github.com/rurre/PumkinsAvatarTools>

Direct download: GitHub v1.1.1: [PumkinsAvatarTools_v1.1.1.unitypackage](https://github.com/rurre/PumkinsAvatarTools/releases/download/1.1.1/PumkinsAvatarTools_v1.1.1.unitypackage)

## Model Setup

Import both the tool and your model into Unity.

Next, set the model's Rig Animation Type to `Humanoid` and Materials to `Use External Materials`. You might need to manually assign textures to the materials, or just reuse the materials from the original model.

Drag the model into the scene, then open `Pumkin -> Tools -> Avatar Tools`.

In the tool window, select your new model in the `Avatar` field, and select your original prefab in `Copy Components -> Copy From`.

Finally, click `Copy Selected` and you're good to go.