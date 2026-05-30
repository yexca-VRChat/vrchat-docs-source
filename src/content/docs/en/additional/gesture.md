---
title: Gesture Switch
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> **Gesture Switch**  
> Trigger an effect with a hand gesture. For example, making an object appear—you can use this to spawn all kinds of fun things.

**Goal:** When the toggle switch is on, making a fist with your right hand triggers the animation.

According to the [lookup table](/summary/parameters/#%E4%B8%89%E6%89%8B%E5%8A%BF%E5%AF%B9%E5%BA%94%E6%95%B0%E5%80%BC), the right-hand gesture parameter is `GestureRight` (type: `Int`). When making a fist, the value of `GestureRight` is `1`.

## Animation

First, record an animation, such as an object opening/appearing.

## Controller

1. In the **Animator -> Parameters** tab, add an `Int` parameter and name it `GestureRight`.
2. Create a `Bool` parameter to act as the main switch, e.g., `AnimToggle`.
3. Create a new Animator Layer and set its weight to `1`.
4. Create a new empty state and name it `Default`.
5. Create another state (e.g., `AnimOn`) and assign your recorded animation to it.

Set up the transitions:
* Create a transition from `Default` -> `AnimOn`. Condition: `AnimToggle` is `true`.
* Create a transition from `AnimOn` -> `Animation`. Condition: `GestureRight` equals `1`.
* Create a transition from `AnimOn` -> `Default`. Condition: `AnimToggle` is `false`.
* Create a transition from `Animation` -> `AnimOn`. Condition: `GestureRight` is not equal to `1`.

## Menu & Parameters

1. In your **Expression Parameters** asset, add a `Bool` parameter named `AnimToggle`.
2. In your **Expressions Menu** asset, click **Add Control**, rename it, set the **Type** to `Toggle`, and select `AnimToggle` as the **Parameter**.