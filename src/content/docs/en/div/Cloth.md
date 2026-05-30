---
title: Cloth
---

:::caution[Disclaimer]
This document was translated by gemini-3.5-flash and may contain grammatical errors or inaccuracies. For accurate information, please refer to the Simplified Chinese version.
:::

> Unity Cloth System

The `Cloth` component works with the `Skinned Mesh Renderer` to provide a physics-based solution for simulating fabrics. This component is designed specifically for character clothing and only works on skinned meshes. If you add a `Cloth` component to a non-skinned mesh, Unity will remove the non-skinned mesh and add a skinned mesh instead.

## Mesh and Bone Weight Prep

Since the cloth and dynamic bone systems are different, you need to set things up properly for them to coexist.

Here are the general requirements:

- **Single-layer mesh**

  Make sure the clothing is a single layer.

- **Seamless mesh**

  Make sure the clothing mesh is fully merged/intact.

- **Separate interferences**

  Small accessories on clothing might interfere with the cloth simulation.

- **Quad meshes**

  If the clothing is a triangle mesh, the simulation might not look great.

### How to sew meshes?

In Blender, remove and merge overlapping vertices. Go to the top menu: `Mesh` -> `Clean Up` -> `Merge by Distance`. In the bottom left, adjust the `Merge Distance` value to merge nearby vertices. Shortcut: `M`.

## Adding Cloth

In the `Inspector` window, click the `Add Component` button, then select `Physics` -> `Cloth`.

## Editing Cloth Constraints

You can apply constraints to specific vertices of the cloth to increase or decrease their movement freedom.

### Cloth Constraints

| Property | Option | Function |
| :--- | :--- | --- |
| **Visualization** | | Select the constraint type and particles to display. |
| | _Max Distance_ | Only displays the Max Distance values of the cloth particles. |
| | _Surface Penetration_ | Only displays the Surface Penetration values of the cloth particles. |
| | _Manipulate Backfaces_ | Enable this option to visualize and manipulate particles that might be hidden behind the current facing part of the cloth. |
| [ Color Spectrum ] | | Shows the mapping between particle colors and constraint values based on the min and max values currently applied to the cloth. Black always means the particle is unconstrained. |
| **Constraint Size** | | The display size of the spheres representing cloth particles. Adjust this to make editing easier. It has no effect on the constraints themselves. |

### Constraint Types and Colors

| Constraint Type | Description |
| --- | --- |
| Max Distance | The maximum distance a cloth particle can move from its original vertex position. |
| Surface Penetration | How deep the cloth particles can penetrate the mesh. |

Depending on the selected `Visualization` type, the color of a particle represents its relative constraint value within the cloth.

### Constraint Editing Modes

There are three modes you can use to edit cloth constraint values:

#### 1) Select

> Applies a fixed constraint value to the selected group of particles.

Drag-select particles with the mouse, enable the constraint type you want to apply, and set a value.

#### 2) Paint

> Applies a fixed constraint value by painting over cloth particles with a brush.

Adjust the `Brush Radius` as needed, enable the constraint type, set a value, and paint over the particles.

#### 3) Gradient

> Applies a linear gradient of constraint values from left to right across a pre-selected group of particles.

**Make sure you enable 2D view in the Scene tab first.**

Drag-select the particles, set the range, and select the constraint type to apply.

## Editing Cloth Self-Collision and Inter-Collision

- Self-collision: Prevents the cloth from penetrating itself.
- Inter-collision: Allows cloth particles from different cloth objects to collide with each other.

### Cloth Self-Collision and Inter-Collision

| Property | Option | Function |
| :--- | :--- | :--- |
| **Visualization** | | Select the constraint type and particles to display. |
| | _Self-Collision_ | Self-collision |
| | _Inter-Collision_ | Inter-collision |
| **Manipulate Backfaces** | | Enable this option to visualize and manipulate particles that might be hidden behind the current facing part of the cloth. |

### Colors

| Color | Description |
| ---- | -------------- |
| Black | Unused particles |
| Blue | Currently selected particles |
| Green | Particles with collision applied |

### How to Apply

Choose `Select`, drag-select the particles, and check `Self-Collision and Inter-Collision`.

#### Self-Collision

> This option appears in the Inspector once you apply self/inter-collision.

Particles in the Scene view might disappear at this point. Increase the `Self-Collision Distance` in the Inspector to make them visible again.

| Property | Function |
| :--- | :--- |
| **Distance** | The diameter of the bounding sphere for each particle. Unity ensures these spheres don't overlap during simulation. The **Distance** value should be smaller than the actual distance between two particles in the mesh. If the distance is too large, self-collision might conflict with other distance constraints and cause jittering. |
| **Stiffness** | The strength of the separation force between particles. Calculated by the cloth solver, this should be high enough to keep particles apart. |

### Paint and Erase

Adjust the `Brush Radius` and drag in the Scene view to add or remove collision particles.

### Inter-Collision

Specifying particles is the same as self-collision. However, you also need to enable `Cloth Inter-Collision` in `Edit` -> `Project Settings` -> `Physics`, and then set `Distance` and `Stiffness` (which work the same way as in self-collision).

### Note

Self-collision and inter-collision can take a lot of CPU time. Consider reducing the collision distance and using self-collision indices to limit the number of particles colliding with each other.

Self-collision uses vertices, not triangles. Don't expect perfect collisions if your mesh triangles are much larger than the cloth's thickness.

## Inspector Properties

| Property | Function |
| :--- | :--- |
| **Stretching Stiffness** | Stretching stiffness of the cloth. |
| **Bending Stiffness** | Bending stiffness of the cloth. |
| **Use Tethers** | Applies constraints to keep moving cloth particles from stretching too far from fixed ones. Helps reduce over-stretching. |
| **Use Gravity** | Controls whether gravity affects the cloth simulation. |
| **Damping** | Motion damping of the cloth. |
| **External Acceleration** | Constant external acceleration applied to the cloth. Mainly used to simulate wind; can be set in XYZ directions. |
| **Random Acceleration** | Random external acceleration applied to the cloth. Creates irregular fluttering/swaying. |
| **World Velocity Scale** | How much the character's movement in world space affects the cloth vertices. |
| **World Acceleration Scale**| How much the character's acceleration in world space affects the cloth vertices. |
| **Friction** | Friction when the cloth collides with the character. Sets the friction coefficient. |
| **Collision Mass Scale** | Amount of mass scale added to colliding particles. |
| **Use Continuous Collision**| Enable continuous collision to improve collision stability. |
| **Use Virtual Particles** | Adds one virtual particle per triangle to improve collision stability. |
| **Solver Frequency** | Solver iterations per second. |
| **Sleep Threshold** | Sleep threshold for the cloth. |
| **Capsule Colliders** | Array of Capsule Colliders that should collide with this cloth instance. |
| **Sphere Colliders** | Array of Sphere Colliders that should collide with this cloth instance. |
| **Virtual Particle Weights**| Virtual particle weights. |

> Reference Values

Stretching Stiffness: 0.8

Bending Stiffness: 0.2

Damping: 0.2

World Velocity Scale: 0 (Set to 0.2 if you want sway when moving)

World Acceleration Scale: 0 (Set to 0.2 if you want sway when moving)

Friction: 0

Collision Mass Scale: 0

Source: <https://www.bilibili.com/video/BV1ob411e7Q8>

## Collision

Cloth can only interact with Capsule Colliders or Sphere Colliders. You can also link two Sphere Colliders together to form a conical collider.

Make sure to check `Is Trigger` on the colliders. Otherwise, when you move or jump in-game, you'll feel like you're stepping on your own feet and might start spinning around.

### Capsule Colliders

A Capsule Collider is composed of two hemispheres connected by a cylinder.

#### How to Add

Create an empty object under the target bone, click `Add Component` in the Inspector, and select `Physics` -> `Capsule Collider`.

#### Properties

| Property | Function |
| :--- | :--- |
| **Edit Collider** | Click to visually edit the collider size directly in the Scene view. |
| **Is Trigger** | If enabled, this collider is used for triggering events and is ignored by the physics engine. |
| **Material** | Reference to a Physics Material that determines how this collider interacts with others. |
| **Center** | Position of the collider in the object's local space. |
| **Radius** | Radius of the collider's local width. |
| **Height** | Total height of the collider. |
| **Direction** | The axis of the capsule's height in the object's local space. |

#### Structure

![img](https://github.com/yexca/picx-images-hosting/raw/master/2022-VRChat/08-Cloth/CapsuleColliderDiagram.3al0s4nf8mc0.webp)

#### Adding to the Cloth Component

Simply drag the GameObject with the collider into the `Capsule Colliders` array on the `Cloth` component.

### Sphere Colliders and Conical Colliders

A Sphere Collider is a basic sphere-shaped primitive collider.

#### How to Add

Create an empty object under the target bone, click `Add Component` in the Inspector, and select `Physics` -> `Sphere Collider`.

#### Properties

| Property | Function |
| :--- | :--- |
| **Edit Collider** | Click to visually edit the collider size directly in the Scene view. |
| **Is Trigger** | If enabled, this collider is used for triggering events and is ignored by the physics engine. |
| **Material** | Reference to a Physics Material that determines how this collider interacts with others. |
| **Center** | Position of the collider in the object's local space. |
| **Radius** | Size of the collider's radius. |

#### Adding to the Cloth Component

Under `Sphere Colliders` on the `Cloth` component, increase the `Size` to a non-zero value. Each element slot can hold up to two sphere colliders.

If you only put in one, it acts as a regular sphere collision.

If you put in two, they will automatically connect to form a conical capsule collider.