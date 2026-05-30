---
title: PhysBones
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> VRChat Dynamic Bone System  
> Official update: _The original Dynamic Bones plugin will eventually be completely removed and automatically converted to the new PhysBones._

## About Automatic Conversion

Drag the avatar with Dynamic Bones into the scene, select the avatar, and click **"VRChat SDK -> Utilities -> Convert DynamicBones to PhysBones"** at the top.

Note: Since it's just an automatic conversion, **Dynamic Bones** and **PhysBones** are not identical. There will definitely be some imperfections ~~(meaning lots of bugs)~~.

## Adding PhysBones

Just add the **"VRC Phys Bone"** component to any bone you want to animate (e.g., hair, skirts, etc.).

Once added, you will see white lines on the model in the Scene view—this represents the **"rest position"**.

I highly recommend trying these settings out yourself; text descriptions can't beat the visual feedback you get from hands-on experimentation.

## I. Transforms

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5l87k4hxtbk0.webp)

### Root Transform

The root position of the PhysBone. If left blank, it defaults to the component's GameObject location.

### Ignore Transforms

If there are child bones under the root that you don't want affected by this PhysBone, drag them here.

Example: If a tail is nested under the skirt bones, but you don't want the tail's movement to match the skirt's, drag the tail bone here.

### Endpoint Position

The end position of the PhysBone. Usually, you don't need to set this (it creates an extra bone at the end of the chain).

When you might need it: If a skirt is very long but only has a single bone, you can adjust this to extend the PhysBone to the end of the skirt. Usually, you only need to adjust the **"Y-axis"** with a positive value, as shown below:

| Typical skirt bones (no setup needed)                                                                             | Single bone (setup may be needed)                                                                              |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Parent "Hips" -> Child "Skirt_A1_L" has its own children                                                                             | Parent "Hips" -> Child "Skirt1" has no children                                                                                  |
| ![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5gd52p9c23g0.webp) | ![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.9orxdswcog4.webp) |

### Multi Child Type

Defines how the parent bone behaves when there are multiple child bones. Setting it to "Ignore" is usually fine.

- **Ignore**: Do not add extra bones.

- **First**: The first child bone is used as the endpoint for the parent.

- **Average**: The average position of all child bones' start points is used as the parent's endpoint.

## II. Forces

### Integration Type

Choose between **Simplified** or **Advanced** mode. You can adjust and test these values in `Play` mode.

Note on the **`C`** icon: The value will scale according to your custom curve.

<table>
<thead>
<tr>
    <th>Simplified</th><th>Advanced</th>
</tr>
</thead>
<tbody>
    <tr>
        <td>
            <img src="https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.22irlehtq1fk.webp" referrerpolicy="no-referrer" alt="img">
        </td>
        <td>
            <img src="https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.4hygp330s4c0.webp" referrerpolicy="no-referrer" alt="img">
        </td>
    </tr>
    <tr>
        <td>More stable, easier to configure, less responsive to external forces and impacts.</td>
        <td>Less stable, but allows for more complex configurations; highly sensitive to external forces and impacts.</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Pull</strong></td>
    </tr>
    <tr>
        <td colspan="2">The force pulling the bone back to its "rest position". Larger values mean more pull (making skirts harder to move).</td>
    </tr>
    <tr>
        <td><strong>Spring</strong></td>
        <td><strong>Momentum</strong></td>
    </tr>
    <tr>
        <td>How much the bone wiggles when returning to its "rest position".</td>
        <td>Similar to <code>Spring</code>. Try experimenting with it to see the exact effect.</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td><strong>Stiffness</strong></td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>The strength holding the bone at its "rest position". Higher values make it stiffer.</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Immobile</strong></td>
    </tr>
    <tr>
        <td colspan="2">How much the bone movement is dampened/ignored. At a value of 1, the bone strictly stays at its "rest position", moving only during grabs or collisions.</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Gravity</strong></td>
    </tr>
    <tr>
        <td colspan="2">The effect of gravity on the bone. Values below 0 create anti-gravity (e.g., skirts floating upwards).</td>
    </tr>
    <tr>
        <td colspan="2"><strong>Gravity Falloff</strong></td>
    </tr>
    <tr>
        <td colspan="2">Only active when "Gravity" is non-zero. Controls how much gravity distorts the "rest position". A value of 1 prevents gravity from affecting it.</td>
    </tr>
</tbody>
</table>

### Reference Parameters

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.2z0m8306s3c0.webp)

Source: <https://youtu.be/PTTnWUkswkU>

## III. Limits

This section limits the movement range of PhysBones. It is highly efficient for preventing clipping—much faster than colliders.

When you add a limit, a helper gizmo is displayed in the Scene view so you can visualize adjustments in real-time.

Setting it to **None** disables limits.

### 1) Angle

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5fg5lki8p100.webp)

Restricts bone movement to a cone shape.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.3q5ks1qzflw0.webp)

- **Max Angle**: The maximum angle of the cone.

- **Rotation**: Rotates the limit zone. Adjust it to see how it shifts.

- **Pitch**: Adjusts along the Y-Z plane.

- **Roll**: Adjusts along the X-Z plane.

- **Yaw**: Adjusts along the X-Y plane.

### 2) Hinge

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.6udcwfr44rk0.webp)

Restricts bone movement to a single flat plane.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.26ix1hne1zc0.webp)

- **Max Angle**: The maximum angle.

- **Rotation**: Refer to the [Angle](/dynamics/physbones/#1-angle) section.

### 3) Polar

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5hnwt54xm600.webp)

Adds a second axis of movement on top of the "Hinge" type. However, this is quite performance-heavy, and VRChat recommends avoiding it where possible.

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.5gk8akp19280.webp)

- **Max Pitch**: The movement angle, similar to "Max Angle" in Hinge.

- **Max Yaw**: The range for the secondary axis.

- **Rotation**: Refer to the [Angle](/dynamics/physbones/#1-angle) section.

## IV. Collision

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.k66s0ps9stc.webp)

- **Radius**: The radius of the collision sphere.

- **Allow Collision**: Check this to let other players collide with (touch) this bone.

- **Colliders**: Any colliders affecting this bone will be listed here (for example, dragging a leg collider into a skirt's PhysBone). "Size" is the number of colliders.

### Adding Colliders

To add a collider, create an empty GameObject under the target bone and add the **"VRC Phys Bone Collider"** component (e.g., adding an empty object named "Leg Collider" under the leg bone).

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.inu3nz30ic0.webp)

- **Root Transform**: The position of the collider. If left blank, it defaults to the component's GameObject location.

- **Shape Type**: Choose between **Sphere**, **Capsule**, or **Plane**.

- **Inside Bounds**: If checked, the PhysBone is restricted to moving *only* inside this boundary.

I highly recommend using **Inside Bounds** to better control the movement range and prevent clipping.  
*Pro-tip: Use regular (outside) colliders for small-range movements, and Inside Bounds for large-range movements.*

### Adding Colliders to PhysBones

Simply drag the empty GameObject into the PhysBone's **Colliders** list (e.g., drag the leg collider to the skirt's PhysBone).

### Usage

Prevents clipping. You can see it in action during Play mode (e.g., the skirt being pushed out by the leg colliders).

## V. Grab & Pose

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.3vj5o12e9l80.webp)

- **Allow Grabbing**: Allows other players to grab this bone.

- **Allow Posing**: Allows other players to freeze the bone in place (pose it) after grabbing.

- **Grab Movement**: Controls how the grabbed bone moves. A value of "0" moves it using the configured "Forces" parameters, while "1" moves it instantly.

- **Max Stretch**: The maximum length the bone can stretch when grabbed.

## VI. Options

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.6d07koeo6ec0.webp)

### Parameter

Enter a string here to generate custom parameters (replacing `{parameter}` below with your string) for various animator effects:

- **{parameter}\_IsGrabbed**: Bool type. Returns true if the bone is currently grabbed.

- **{parameter}\_Angle**: Float type (0.0 to 1.0). The rotation angle of the bone. If rotated 180 degrees (opposite to the original direction), it returns 1.0.

- **{parameter}\_Stretch**: Float type (0.0 to 1.0). The current stretch length as a percentage of `Max Stretch`. For example, if `Max Stretch` is 10 and it's stretched to 5, this parameter will be 0.5.

Example: If you enter "Hello" in the Parameter field, you can use `Hello_IsGrabbed`, `Hello_Angle`, and `Hello_Stretch` in your animator.

### Is Animated

Allows bone transforms to be animated. This lets animations drive the bone's "rest position".

## VII. Gizmos

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/04-PhysBones/image.7ed1567tjro0.webp)

- **Show Gizmos**: Visualizes the PhysBones and limits.

- **Bone Opacity**: Controls the bone visualization opacity. 0 is fully transparent (invisible), 1 is fully opaque (highly visible).

- **Limit Opacity**: Controls limit visualization opacity (same as above).

## VIII. Important Notes

A single PhysBone component can affect up to 256 transforms. If you have too many bones, split them up across multiple PhysBone components. Do not just throw a single component onto the root bone of your avatar ~~(surely nobody actually does that... right?)~~.