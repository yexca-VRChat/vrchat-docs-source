---
title: Animator Layers
---

> How does Unity's layer mechanism actually modify a model?

Different layers can run simultaneously, but only one state can be active per layer at a time.

:::caution[Disclaimer]
 This document was translated by gemini-3-flash-preview and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

## Layers

Click `+` to add a layer. Click the gear icon next to the layer to open a window for its parameters.

| Property     | Description                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Weight       | The weight of this layer. 0 means the layer has no effect; 1 means animations in this layer play at full influence.                                   |
| Mask         | Used to restrict which body parts the animation affects (e.g., upper body only). An `M` icon appears on the layer when set.                            |
| Blending     | How this layer blends with previous layers.                                                                                                            |
| _Override_   | Replaces the animation on parts defined by the Mask in previous layers.                                                                                |
| _Additive_   | Adds the animation on top of previous layers.                                                                                                          |
| Sync         | Reuses the state machine structure from another layer.                                                                                                 |
| IK Pass      | Inverse Kinematics pass.                                                                                                                               |

## States

States are the "boxes" in the layer—the items created when you drag in an animation.

New layers show three default states:

| State Name | Brief Description                                                  |
| :--------- | :----------------------------------------------------------------- |
| Entry      | The entry point; enters the default state via a transition.        |
| Any State  | A wildcard state; can jump to a target state whenever conditions are met. |
| Exit       | Exits the state machine, returning to "Entry".                     |

### Adding States

Right-click empty space to add an `Empty` state, or drag animation files directly into the `Animator` window.

If an animation file is selected in the `Project` window, you can right-click and choose `From Selected Clip`, but dragging is usually faster.

_The first state created is orange, representing the Default State. The Animator plays this immediately on start._

### Colors

Orange: Default state; the animation that executes upon entry.

Gray: Regular states reached via transitions.

### State Settings

Each state contains an animation. When active, the object with the `Animator` component plays that animation.

| Name         | Description                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| Motion       | The Animation clip bound to this state.                                                                   |
| Speed        | Playback speed.                                                                                           |
| Multiplier   | Multiplies Speed by a specified float parameter at runtime.                                               |
| Motion Time  | Normalized time (0–1). Uses a float parameter to drive playback position (useful for radial menus).       |
| Mirror       | Mirrors the animation. Can be toggled with a bool parameter.                                              |
| Cycle Offset | Loop offset (0–1). Used to sync animations; can be controlled by a parameter.                             |
| Foot IK      | For humanoid animations only; determines if the character's feet use IK.                                  |
| Write Default| Resets changes made by this state when transitioning to another (initializes unused parameters to defaults). |

### Transition (in Inspector)

Shows transitions for the current state.

| Name | Description                                                  |
| ---- | ------------------------------------------------------------ |
| Solo | Only the current transition will play; others are disabled.  |
| Mute | Disables the current transition.                             |

_If both `Solo` and `Mute` are checked, `Mute` takes priority._

## Transitions

These define the conditions for switching between states.

Right-click a state and select `Make Transition`, then click another state. You can then add conditions to the transition.

| Name | Description                                                  |
| ---- | ------------------------------------------------------------ |
| Solo | Only the current transition will play; others are disabled.  |
| Mute | Disables the current transition.                             |

_If both `Solo` and `Mute` are checked, `Mute` takes priority._

If there are multiple transitions, you can reorder them to set priority (top is highest).

| Name          | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| Name Field    | Name the transition; useful for distinguishing multiple paths between states. |
| Has Exit Time | Uses time as a condition for the transition.                             |

Exit Time is a special condition that doesn't rely on parameters. It triggers based on a specific point in the animation.

### Settings

| Name                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exit Time           | If `Has Exit Time` is checked, this sets the normalized time for the exit. <br />If < 1 (e.g., 0.75), it triggers at 75% through the animation. If the state loops, it triggers at 75% every loop. <br />If > 1 (e.g., 3.5), it triggers after 3 full loops and 50% of the 4th loop.                                                                                                                                                                                                            |
| Fixed Duration      | Checked: `Transition Duration` is in seconds. <br />Unchecked: `Transition Duration` is a percentage (0–1) of the current state's length.                                                                                                                                                                                                                                                                                                                                                      |
| Transition Duration | The blend time between two states. Prevents instant snapping.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Transition Offset   | Where the next state starts playing, expressed as a percentage (0–1) of the next state's length.                                                                                                                                                                                                                                                                                                                                                                                               |

#### Transition Graph

You can visually preview and edit these parameters in the graph.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/07-Layers/image.d1zgl4fkjnc.webp)

#### Interruption Source

Allows a transition to be interrupted. This is complex and should be used sparingly.

Example setup:

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/07-Layers/image.3j6e8ox86fg0.webp)

##### Current State

Normally, once A -> C starts, it can't be stopped. If `Interruption Source` is `Current State`, other transitions starting from A can interrupt the A -> C transition.

Transitions on State A:

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/07-Layers/image.3te260424lu0.webp)

- If `Ordered Interruption` is checked: Only higher priority transitions (above A -> C) can interrupt.
- If unchecked: Any transition from State A (like A -> B or A -> D) can interrupt.

##### Next State

If A -> C is set to `Next State`, transitions starting from State C can interrupt the transition into C.

##### Current State Then Next State

Considers transitions from State A first, then State C.

##### Next State Then Current State

Considers transitions from State C first, then State A.

##### Summary

| Name                          | Description                                                                 |
| ----------------------------- | --------------------------------------------------------------------------- |
| Ordered Interruption          | Only transitions with higher priority can interrupt.                        |
| None                          | Cannot be interrupted.                                                      |
| Current State                 | Transitions starting from the current state can interrupt.                  |
| Next State                    | Transitions starting from the next state can interrupt.                     |
| Current State Then Next State | Checks current state transitions first, then next state.                    |
| Next State Then Current State | Checks next state transitions first, then current state.                    |

### Condition

A transition can have one, multiple, or no conditions.

- No conditions + `Has Exit Time`: Transitions automatically at the `Exit Time`.
- Multiple conditions: All must be true (AND logic) to transition.

| Parameter Type | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| Int            | Greater (>), Less (<), Equals (==), NotEqual (!=).               |
| Float          | Greater (>), Less (<).                                           |
| Bool           | True or False.                                                   |
| Trigger        | Becomes true when activated, then immediately resets.            |

If `Has Exit Time` is checked alongside conditions, the transition only happens when the exit time is reached AND all conditions are true.

> A transition must have at least one condition (or Exit Time), otherwise it will never execute.

Note: _Triggers do not seem to function within VRChat's implementation._