---
title: Spawn Animations
---

> Want to stand out a bit when you spawn in?

## VFX

You can find some ready-made VFX to use.

### Handling VFX

Note: VFX cannot contain script components. If they exist, delete them.

If the effect breaks after deleting the scripts, you'll just have to find a different one.

VRChat doesn't allow uploading script files.

### Implementation

Disable "Looping" on the VFX, place it on the avatar, and upload.

## Objects

Maybe some spinning objects for your intro? This method works for VFX too.

### Animation

Hide the object, then record an animation of it appearing/enabling.

### FX Layer

Create a new layer and set the Weight to 1.

Drag in the animation as the default state.

Create an empty state and a transition. Set "Has Exit Time" and adjust the duration as needed. (Time units: based on the previous animation's length; for simple object toggles or empty animations, treat it as seconds).

## Animation Timing

You can determine the timing by checking the frame count. Unity defaults to 60 frames per second.

For example, if an animation has 240 frames, it's 4 seconds long.

## Actions

Since the tracker resets when switching to a model, you technically can't do a standard spawn emote animation directly. However, there's a workaround. _Note: This is just my personal understanding._

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

### Animation

Prepare your action animation. Then, record a "hide" animation where the avatar's meshes (materials/renderers) are all disabled.

### Action Layer

#### Parameters

Create a Bool parameter, for example: `Start`.

#### Transitions

From `WaitForActionOrAFK` to `Prepare Standing`: Condition is `Start` is `true`, uncheck `Has Exit Time`.

#### Action Animation

Drag in the action animation. Create transitions: `Prepare Standing` -> `Action Animation` -> `BlendOut Stand`.

#### Transition Conditions

`Prepare Standing` -> `Action Animation`: `Start` is `true`, no Exit Time.

`Action Animation` -> `BlendOut Stand`: Has Exit Time (set to 1), no conditions.

#### Scripts (State Behaviors)

Add a `VRC Avatar Parameter Driver` to the `BlendOut Stand` state and set `Start` to `false`.

### FX Layer

#### Parameters

Create a Bool parameter with the exact same name as the one in the Action layer, e.g., `Start`.

#### Layers

Create a new layer and set the Weight to 1.

The animations for the `Default` and `Hide` states should be the "hide mesh" animation you recorded. `Start` is an empty state.

Layer structure: `Entry` -> `Default` -> `Hide` -> `Start`

#### Transitions

`Default` -> `Hide`: No conditions, Has Exit Time (0.1).

`Hide` -> `Start`: No conditions, Has Exit Time (0.2).

#### Scripts (State Behaviors)

Add a `VRC Avatar Parameter Driver` to the `Hide` state and set `Start` to `true`.

#### Explanation

The transition time from `Default` to `Hide` allows the tracker reset to finish.

The transition time from `Hide` to `Start` covers the blend time from standing to the start of the action animation. Adjust this as needed.