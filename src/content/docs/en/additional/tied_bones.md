---
title: Binding Objects to Bones
---

:::caution[Disclaimer]
This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Make objects follow bone movement

## Overview

Bone binding allows items to move with bones—like binding glasses to the head bone, or a sword to the hand bone.

## 1. Place Under the Target Bone

Find the corresponding bone in the hierarchy on the left, drag the item under it, and adjust its position.

For example, drag the sword under the hand bone, then position it so the hilt sits in the hand.

**Note**: If the item itself has bones, you need to place the item's root bone under the target model bone (e.g., placing the sword's bone under the hand bone), and put the rest under the model's hierarchy. Otherwise, the model's rig might break.

## 2. Use Constraints

Select the object you want to bind, click "Add Component" in the Inspector, search for "Parent Constraint", and add it.

You can position the object first (e.g., move the sword hilt to the hand).

Under "Sources" in the component, click the "+" icon, then drag the target bone (e.g., the hand bone) into the slot.

Finally, click "Activate" (or "Zero") in the Inspector to lock it in.