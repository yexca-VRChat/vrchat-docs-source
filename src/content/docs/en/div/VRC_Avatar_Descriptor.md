---
title: VRC Avatar Descriptor
---

:::caution[Disclaimer]
This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> VRChat's avatar descriptor file

## Adding the Descriptor

Select your avatar in the Hierarchy, then search for and add "VRC Avatar Descriptor" in the Inspector on the right.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.48d8ypvvpq00.webp)

The first component is the VRC Avatar Descriptor, and the second is the Pipeline Manager (Blueprint).

## 1. View

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.3i0xx2om69e0.webp)

Used to adjust the viewpoint (view ball), which defines where you see from in-game. It is usually placed directly between the eyes.

Click "Edit" to adjust its position in the Scene view, and click "Return" when finished.

## 2. LipSync

Configures the avatar's mouth movements when speaking with an active mic.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.40e4lutgnbi0.webp)

You can usually click "Auto Detect!" to configure this automatically. If it fails to recognize your mesh, add it manually.

Typically, set "Mode" to the fourth option, "Viseme Blend Shape", then drag the avatar's "Body" or "Face" mesh into "Face Mesh". It usually looks like this (manually select the blendshapes if they are not auto-detected):

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.5mxy376p4sk0.webp)

If your model doesn't have these blendshapes, disable this feature (set "Mode" to "Default") or look into using bones for jaw movement.

## 3. Eye Look

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.12j6dlfdgibk.webp)

Eye-related settings. Click "Enable" to start configuring.

### General

Global settings for eye movement.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.2nr8oejxht60.webp)

"Calm-Excited" affects blink frequency.

"Shy-Confident" affects how often your avatar looks at other players, and how long the gaze lingers.

### Eyes

#### Transforms

Defines the eye bones.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.3fvueycbkhw0.webp)

Find the corresponding eye bones in your hierarchy and drag them in. Skip this if your model doesn't have eye bones.

#### Rotation States

Defines the range of rotation for the eye bones. Only active if eye bones are assigned above.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.5lbk2uslvks0.webp)

Defines eye movement when looking straight, up, down, left, and right.

Click "Preview" to edit and rotate them in the Scene view. Click the chain icon to the left of the "X" axis to adjust the left and right eyes separately. Click "Return" to save when done.

### Eyelids

Defines eyelid states for blinking, looking up, and looking down.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.2ljvn9o52940.webp)

Usually, set "Eyelid Type" to "Blendshapes", then drag your "Body" or "Face" mesh into "Eyelids Mesh".

Under "Blendshapes", you can then select the blendshapes for blinking, looking up, and looking down.

**Note:** The look up/down blendshapes here overlap with the bone rotation defined in "Eyes-Rotation" above. If you already set it up there, you can choose "-none-" here to prevent double-movement.

If your eyes glitch in-game, you can troubleshoot in this module, or just "Disable" it to save trouble.

## Playable Layers

The SDK3 Avatar Descriptor has five main playable layers:

- **Base** (or Locomotion): Controls locomotion states like crouching, prone, walking, etc.
- **Additive**: Additive layer on top of Base, e.g., for idle breathing animations.
- **Gesture**: For hand gestures, or "idle animations" like wagging tails, flapping wings, or moving ears.
- **Action**: For overriding actions, like playing MMD dances or emotes.
- **FX**: Controls toggleable props and facial expressions.

There are also three additional pose layers (check the [official docs](https://docs.vrchat.com/docs/playable-layers#additional-poses) for details):

- T-Pose
- IK Pose
- Sitting Pose

## Lower Body

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.1mkbsgxttbuo.webp)

First option (Auto Footstep): Generates small footstep adjustments when the head moves slightly.

Second option: Toggles Locomotion animations when in Full Body Tracking (FBT).

## Expressions

[Parameters](/summary/parameters)

[Menu](/summary/menu)

## Colliders

A feature of SDK3 used to define collision shapes for the head, torso, hands, and feet.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/03-AvatarDescriptor/image.775z0ziwkxc0.webp)

Click "Edit" to define the position and size. You can edit them directly in the Scene view.

Click the chain icon on the left to configure the left and right sides separately.

These settings define not only the physical collision volume but also the sender size for the Contact system.

For details, see: [Introduction to Contacts](/dynamics/contacts)