---
title: State Behaviors
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Unity State Behavior scripts

## Adding

Click on a state in the "Animator - Layers" tab, then click "Add Behavior" in the "Inspector" to see the VRChat scripts.

## Animator Layer Controller

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.6dk3lrhp6lc0.webp)

Modifies the weight of a specific animator layer (weight of 1 plays normally).

The layer weight remains active until another state triggers this behavior again to reset it.

| Name | Purpose |
| ---------------- | ------------------------------------------------------------------------------------- |
| Playable | Select the playable layer to modify. |
| Layer | Select the layer index (0-based) to affect. Layer 0 (the first one) cannot be changed (always remains 1). |
| Goal Weight | The target weight to set. |
| Blend Duration | Define the time period (in seconds) that you want the blend to take. 0 means instant. |
| Debug String | Debug string printed to the log when this script runs. |

## Animator Locomotion Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.7db4fkj18d80.webp)

Disables locomotion during animation playback, locking player movement in place.

On PC, you can only look up and down. In VR, you can look around freely, but the avatar model won't move.

This state persists until another state triggers this behavior again to change it.

| Name | Purpose |
| ------------------ | ---------------------------------------------- |
| Locomotion Control | If set to "Disable", locomotion is disabled. |
| Debug String | Debug string printed to the log when this script runs. |

## Animator Temporary Pose Space

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.6ju2p7xy6nc0.webp)

Adjusts the viewpoint (view ball) to match the forehead position after the animation plays.

The adjusted viewpoint persists until another state triggers this behavior again to change it.

| Name | Purpose |
| ------------ | ---------------------------------------------- |
| Pose Space | "Enter" applies the change, "Exit" reverts to default. |
| Fixed Delay | Toggle whether "Delay Time" is in seconds or percentage. |
| Delay Time | Delay before the viewpoint adjusts. |
| Debug String | Debug string printed to the log when this script runs. |

## Animator Tracking Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.79846t7qt1c0.webp)

*(Adapted from documentation)*

Tracking settings persist until another state triggers this behavior to reset them.

Animator Tracking Control lets you enable or disable IK or simulated tracking on different body parts. Setting an option to "No Change" leaves its current state untouched. "Tracking" forces the part to follow IK or tracked input. "Animation" forces the part to follow the animation instead.

If you set all IK tracking points to "Animation", your animations will play raw on remote clients without being processed by network IK. Depending on the tracking type, these "IK tracking points" are:

- PC: Head, Left Hand, Right Hand
- 3-point Tracking: Head, Left Hand, Right Hand
- 6-point / FBT (Full Body Tracking): Head, Left Hand, Right Hand, Hip, Left Foot, Right Foot

All parts are IK-driven except for simulated Eyes and Eyelids, and the mouth/jaw which are driven by visemes.

For example, setting Left Hand and Right Hand to "Animation" ignores the player's actual hand/arm IK positions, using the active animation state instead. Switching them back to "Tracking" restores IK control.

Setting "Eyes & Eyelid" to "Animation" disables procedural eye movement and blinking. Setting it to "Tracking" re-enables simulated eye look-at and blinking.

Setting "Mouth and Jaw" to "Animation" disables viseme-driven mouth movement (though the parameters are still sent over the network). Setting Mouth and Jaw to "Tracking" re-enables viseme-based driving.

## Avatar Parameter Driver

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.7e68k4hlb6g0.webp)

Changes the value of a specific parameter.

| Name | Purpose |
| -------------------- | -------------------- |
| Add Parameter (Button) | Adds a new parameter to modify. |
| Name | Select the parameter to change. |
| Change Type | How to modify the value (Set, Add, Random, etc.). |
| Value | The target value. |

## Playable Layer Control

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-StateBehaviors/image.62mmysx318o0.webp)

Similar to Animator Layer Controller, but modifies the overall weight of a Playable Layer instead.