---
title: Contacts
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> VRChat Contact System

## Intro

The Contact System allows avatars to detect signals from themselves or others, which can then generate parameters to trigger animations.

**Note: The Contact System is different from Dynamic Bones** (I got them mixed up when I first started).

The Contact System is split into Senders (VRCContactSender) and Receivers (VRCContactReceiver). Senders exist to be detected, meaning they are constantly broadcasting their Collision Tags. Receivers look for Senders, and if their Collision Tags match, they update their parameters.

## Adding Contact Components

To add a component to an object or bone, search for "vrc" in the Add Component menu and select the corresponding component.

## VRC Contact Sender

Defines the volume and Collision Tags for sending signals.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-Contacts/image.ebh40gdczco.webp)

### Root Transform

The location of this component. If left empty, it defaults to the GameObject the component is attached to.

### Shape

**Shape Type**: The shape, either "Sphere" or "Capsule".

**Radius, Position, Height** ("Capsule"): Self-explanatory.

**Rotation**: Rotation of the shape.

### Filtering

Adjusts and defines how the sender interacts with receivers.

**Collision Tags**: A list of strings specifying what this sender can affect/be affected by. For a successful collision (detection by a receiver), both the sender and receiver must share at least one matching string.

You can choose from default tags or define custom ones. **Note: These are case-sensitive.**

### Note

Under "VRC Avatar Descriptor" -> "Collidees", default colliders are set up for the head, body, hands, and feet. These automatically act as senders with names like "Head", "Hand", etc. So, you don't need to manually add senders to these parts.

## VRC Contact Receiver

Defines the volume and Collision Tags for receiving signals, and then outputs the corresponding parameters.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-Contacts/image.4zfxznntlkg0.webp)

### Root Transform

The location of this component. If left empty, it defaults to the GameObject the component is attached to.

### Shape

**Shape Type**: The shape, either "Sphere" or "Capsule".

**Radius, Position, Height** ("Capsule"): Self-explanatory.

**Rotation**: Rotation of the shape.

### Filtering

Defines how it interacts with senders.

**Allow Self**: Allows self-triggering. Check this to interact with yourself.

**Allow Others**: Allows others to trigger it. Check this to let other players interact with you.

**Local Only**: Runs only on the local client.

**Collision Tags**: A list of strings/parameters that can trigger this contact. For a successful collision (detecting a sender), both sender and receiver must share at least one matching string.

### Receiver

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-Contacts/image.66905l2pgso0.webp)

Defines the parameters that change when a signal is received. Enter the parameter name in the field.

| Receiver Type | Description | Value |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------- |
| Constant      | Parameter changes on contact                                      | Recommended: Bool (True when triggered). Otherwise, Float = 1.0, Int = 1 |
| OnEnter             | Triggers when the entry velocity is greater than Min Velocity                      | Recommended: Bool (True when triggered). Otherwise, Float = 1.0, Int = 1 |
| Proximity           | Proximity of the sender to the receiver's center. If there are multiple senders, it uses the closest one | Float, 0.0 to 1.0                                       |

For high precision with "Proximity", you'll want to make the sender's radius very small.