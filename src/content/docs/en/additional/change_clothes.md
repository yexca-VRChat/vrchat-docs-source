---
title: Changing Outfits
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> **Changing Outfits for Your Model**  
> You can now wear both tailored outfits made by the author and clothes from other characters.

## 1. Compatible Clothes

### 1) Already Fitted

Some models come with a pre-dressed file once imported. In this case, you just need to record an animation to toggle off the original clothes, toggle on the new ones, and then add it to the FX layer and expression menu.

### 2) Manual Fitting

First, drag both the model and the clothes into the scene. If they aren't aligned, reset both of their Positions to 0, 0, 0.

Right-click the clothes in the Hierarchy, select "Unpack Prefab", and drag the clothes' mesh files (everything except the bones/armature) directly onto your model.

Drag the bones of the clothes into the corresponding bone hierarchy under the model's armature.

Then, record an animation to toggle off the original clothes and toggle on the new ones.

Finally, add this animation to your FX layer and Expression Menu.

## 2. Incompatible Clothes

### 1) Duplicate the Model (Ctrl+D)

For incompatible clothes, getting a perfect fit in Unity can be tricky because of the high bone count. It is highly recommended to duplicate your model in the Hierarchy (Ctrl+D) first and work on the clone. If you are happy with the results, delete the original; if not, just delete the clone.

### 2) Unity Tool Shortcuts

Here are the essential shortcuts you will need:

- Move Tool: W
- Rotate Tool: E
- Scale Tool: R

### 3) Getting Started

First, hide the original model. Then, set the Position of both the duplicated model (referred to as "the model" from here on) and the new clothes to 0, 0, 0.

Right-click the clothes in the Hierarchy and select "Unpack Prefab". To make things easier, hide the model's original clothes.

Adjust the scale and position of the clothes so they roughly line up with the model.

### 4) Adjustments

Move the clothes' mesh (the actual mesh files, excluding the bones) under the model's hierarchy.

#### <1> External Alignment

First, you need to align the bones. In the Scene view, the elbow joints of the model (Lower Arm L and Lower Arm R) should roughly line up with the corresponding joints of the clothes. You can achieve this by scaling the parent bones of the clothes (Upper Arm L and Upper Arm R) using the Scale tool (you can also move them, but scaling usually looks cleaner).

Once the model's joints (elbows, hands, knees, etc.) are aligned with the corresponding clothes' bones, drag those clothes' bones into the matching positions under the model's armature.

#### <2> Internal Adjustments

At this point, try rotating some joints to see if the mesh deforms and binds correctly. If not, use your tools to tweak the position/rotation.

If you still cannot get it right, drag the clothes' bones back out of the model's armature, adjust them, and try again.

### 5) Wrapping Up

Once you are happy with the adjustments, delete the original model and keep the duplicate. Finally, record an animation to toggle off the old clothes and toggle on the new ones, then map it to your FX layer and expression menu.