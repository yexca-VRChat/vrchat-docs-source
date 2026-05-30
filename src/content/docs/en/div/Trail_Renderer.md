---
title: Trail Renderer
---

:::caution[Disclaimer]
 This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Unity Trail Renderer

The Trail Renderer component renders a polygonal trail behind a moving GameObject. You can use it to emphasize the motion of a moving object, or to highlight its path or position. For example, a trail behind a projectile adds visual clarity to its trajectory, and contrails from airplane wingtips are a great real-world example of trail effects.

## Creation

In the **Hierarchy**, right-click and select **Effects > Trail**.

## Trail Settings

| Property | Description |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Width**                          | Defines the width and curve to control the trail's width along its length. Double-click to add new vertices.                                                       |
| **Time**                           | Defines the lifetime of a point in the trail (in seconds).                                                                             |
| **Min Vertex Distance**    | The minimum distance (in world units) between two points in the trail.                                                                             |
| **AutoDestruct**               | When enabled, Unity automatically destroys the GameObject after it remains stationary for **Time** seconds.                                     |
| **Emitting**                   | When enabled, Unity adds new points to the trail. When disabled, no new points are added. Use this to pause and resume trail generation. |
| **Color**                          | Defines a gradient to control the trail's color along its length.                                                                                 |
| **Corner Vertices**              | Determines how many extra vertices to use when drawing corners in the trail. Increase this value for rounder corners.                                         |
| **End Cap Vertices**           | Determines how many extra vertices to use for the end caps of the trail. Increase this value for rounder end caps.                                         |
| **Alignment**                      | Sets the direction the trail faces.                                                                                                   |
| _View_                             | The trail faces the camera.                                                                                                       |
| _TransformZ_                     | The trail faces the Z-axis of its Transform component.                                                                                            |
| **Texture Mode**               | Controls how the texture is applied to the trail.                                                                                             |
| _Stretch_                          | Maps the texture once along the entire length of the trail.                                                                                         |
| _Tile_                             | Repeats the texture along the trail based on world units. Use `Material.SetTextureScale()` to adjust tiling.                        |
| _DistributePerSegment_         | Maps the texture once along the entire length of the trail, assuming all vertices are evenly distributed.                                                                 |
| _RepeatPerSegment_             | Repeats the texture once per segment. Use `Material.SetTextureScale()` to adjust tiling.                              |
| **Generate Lighting Data** | When enabled, Unity includes normals and tangents when building the trail geometry, allowing it to use materials that respond to scene lighting.               |
| **Shadow Bias**                | Sets the shadow offset along the light direction to prevent shadow acne/artifacts.                                                                           |

## Materials

The **Materials** section in the Trail Renderer Inspector lists the materials currently used by the component. If you apply multiple materials, Unity renders the trail once for each material.

| Property | Description |
| :---------------- | :--------------------------------------------------------------------------------------------------- |
| **Size**    | Specifies the number of materials in the Trail Renderer. Reducing this size removes elements from the end of the list. |
| **Element** | The list of materials, ordered by index.                                                |

## Lighting

The **Lighting** section contains properties that define how the Trail Renderer interacts with light in Unity.

| Property | Description |
| :---------------------------- | :-------------------------------------------------------------------------------------------- |
| **Cast Shadows**    | Determines if and how the trail casts shadows when illuminated by a shadow-casting light.                                    |
| _Off_                   | The trail does not cast shadows.                                                                            |
| _On_                    | The trail casts shadows when a shadow-casting light shines on it.                                                  |
| _Two Sided_             | The trail casts double-sided shadows. Note: Enlighten and the Progressive Lightmapper do not support this. |
| _Shadows Only_        | The trail's shadow is visible, but the trail itself is hidden.                                                              |
| **Receive Shadows** | Enable this to let the trail receive shadows. Only supported when using the Progressive Lightmapper.          |

## Probes

The **Probes** section contains properties related to [Light Probes](https://docs.unity3d.com/cn/2019.4/Manual/LightProbes.html) and [Reflection Probes](https://docs.unity3d.com/cn/2019.4/Manual/class-ReflectionProbe.html).

| Property | Description |
| :-------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **Light Probes**      | How this renderer receives light from the Light Probe system.                                                                                                       |
| _Off_                       | The renderer doesn't use interpolated Light Probes.                                                                                                                   |
| _Blend Probes_        | The renderer uses one interpolated Light Probe.                                                                                                                     |
| _Use Proxy Volume_    | The renderer uses a 3D grid of interpolated Light Probes.                                                                                                               |
| _Custom Provided_     | The renderer extracts Light Probe shader uniforms from a [MaterialPropertyBlock](https://docs.unity3d.com/cn/2019.4/ScriptReference/MaterialPropertyBlock.html). |
| Proxy Volume Override | Reference to another GameObject with a Light Probe Proxy Volume component. Only visible when **Light Probes** is set to **Use Proxy Volume**.                     |
| **Reflection Probes** | How the renderer receives reflections from the Reflection Probe system.                                                                                                         |
| _Off_                             | Disables reflection probes. Unity uses the skybox for reflections.                                                                                                           |
| _Blend Probes_                    | Enables reflection probes. Blending only happens between reflection probes. Useful for indoor environments where characters transition between different lighting setups.                             |
| _Blend Probes and Skybox_         | Enables reflection probes. Blends between reflection probes or with the default reflection (skybox). Useful for outdoor environments.                                                             |
| _Simple_                          | Enables reflection probes, but no blending occurs when two probe volumes overlap.                                                                             |
| **Anchor Override**     | Sets the Transform used by Unity to determine the interpolation position when using Light Probes or Reflection Probes. Defaults to the center of the renderer's bounding box.                      |

## Additional Settings

| Property | Description |
| :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Motion Vectors**       | Determines whether to use motion vectors to track per-pixel screen-space motion from one frame to the next. Useful for post-processing effects like motion blur. (Note: not supported on all platforms).                                                                                                               |
| _Camera Motion Only_ | Tracks motion using camera movement only.                                                                                                                                                                                                                                                                          |
| _Per Object Motion_    | Tracks motion using a specific pass for this renderer's movement.                                                                                                                                                                                                                                                                    |
| _Force No Motion_      | Disables motion tracking.                                                                                                                                                                                                                                                                                          |
| **Dynamic Occlusion**    | When enabled, Unity culls this renderer when it's blocked by a Static Occluder.<br />When disabled, the renderer is not culled even if blocked. Disabling this is useful for effects like rendering character outlines behind walls. |
| **Sorting Layer**        | The name of this renderer's Sorting Layer.                                                                                                                                                                                                                                                           |
| **Order in Layer**       | The order of this renderer within its Sorting Layer.                                                                                                                                                                                                                                                         |