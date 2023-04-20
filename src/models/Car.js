import React, { useRef } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export const Car = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models/bronco_car_animation_red.glb"
  );
  const { actions } = useAnimations(animations, group);

  const [subscribeKeys, getKeys] = useKeyboardControls();

  const wheel1 = useRef();
  const wheel2 = useRef();

  const ref = useRef();

  useFrame((state, delta) => {
    const { forward, backward, rightward, leftward } = getKeys();

    const impulse = { x: 0, z: 0, y: 0 };
    const torque = { x: 0, z: 0, y: 0 };

    const impulseStrength = 1 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }

    if (rightward) {
      // impulse.x += impulseStrength;
      // torque.z -= torqueStrength;
      // wheel1.current.rotation.set(0, -Math.PI / 4, 0);
      // wheel2.current.rotation.set(0, -Math.PI / 4, 0);
      const rotation = [0, -Math.PI / 4, 0];

      ref.current.setRotation({
        x: rotation[0],
        y: rotation[1],
        z: rotation[2],
      });
    }

    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }

    // if (leftward) {
    //   impulse.x -= impulseStrength;
    //   torque.z += torqueStrength;
    // }

    console.log("first", wheel1);
    if (ref.current.quaternion !== undefined) {
      ref.current.quaternion.set(1, 1, 1, 1);
    }

    ref.current.applyImpulse(impulse);
    // ref.current.applyTorqueImpulse(torque);

    const bodyPosition = ref.current.translation();

    // let cameraPositionOffset = calculateOffset(bodyPosition, qurVec3, 0, 2, -6);
    // let cameraFocusOffset = calculateOffset(bodyPosition, qurVec3, 0, 1, 2);

    // const t = 1.0 - Math.pow(0.05, delta);
    // currentPosition.lerp(cameraPositionOffset, t);
    // currentLookAt.copy(cameraFocusOffset, t);

    // state.camera.position.copy(currentPosition);
    // state.camera.lookAt(currentLookAt);
    // state.camera.updateProjectionMatrix();
  });

  return (
    <group ref={group} {...props} dispose={null} scale={15}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="b137c15a2b4a4f4d896a47b3d5ff6b47fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <RigidBody
                  ref={ref}
                  type="Dynamic"
                  colliders="hull"
                  //   restitution={0.2}
                  friction={1}
                  linearDamping={0.5}
                  angularDamping={0.5}
                  //   rotation={[Math.PI / 4, 0, 0]}
                >
                  <group>
                    <group name="polySurface2" position={[1.92, 1.71, 6.08]}>
                      <mesh
                        name="polySurface2_tyres1_0"
                        castShadow
                        ref={wheel1}
                        receiveShadow
                        geometry={nodes.polySurface2_tyres1_0.geometry}
                        material={materials.tyres1}
                      />
                    </group>
                  </group>
                </RigidBody>
                <group name="polySurface3" position={[-4.65, 1.71, 6.08]}>
                  <mesh
                    name="polySurface3_tyres1_0"
                    castShadow
                    ref={wheel2}
                    receiveShadow
                    geometry={nodes.polySurface3_tyres1_0.geometry}
                    material={materials.tyres1}
                  />
                </group>

                <group name="group" position={[-1.4, 0.02, 0.06]} scale={0.02}>
                  <group name="tyres">
                    <group name="polySurface1">
                      <mesh
                        name="polySurface1_tyres1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface1_tyres1_0.geometry}
                        material={materials.tyres1}
                      />
                    </group>
                    <group name="polySurface2_1">
                      <group name="transform3" />
                    </group>
                    <group name="polySurface3_1">
                      <group name="transform5" />
                    </group>
                    <group name="polySurface4_1">
                      <group name="transform7" />
                    </group>
                    <group name="polySurface5_1">
                      <group name="transform9" />
                    </group>
                    <group name="polySurface6">
                      <group name="transform8" />
                    </group>
                    <group name="polySurface7">
                      <group name="transform2" />
                    </group>
                    <group name="polySurface8">
                      <group name="transform4" />
                    </group>
                    <group name="polySurface9">
                      <group name="transform6" />
                    </group>
                    <group name="polySurface10">
                      <mesh
                        name="polySurface10_tyres1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface10_tyres1_0.geometry}
                        material={materials.tyres1}
                      />
                    </group>
                    <group name="transform1" />
                  </group>
                  <group name="main_color1">
                    <mesh
                      name="main_color1_main_color_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.main_color1_main_color_0.geometry}
                      material={materials.main_color}
                    />
                  </group>
                  <group name="seate">
                    <mesh
                      name="seate_seate_color_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.seate_seate_color_0.geometry}
                      material={materials.seate_color}
                    />
                  </group>
                  <group name="interior1">
                    <mesh
                      name="interior1_interior_color_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.interior1_interior_color_0.geometry}
                      material={materials.interior_color}
                    />
                  </group>
                  <group name="fremes">
                    <mesh
                      name="fremes_outer_glass_frem_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.fremes_outer_glass_frem_0.geometry}
                      material={materials.outer_glass_frem}
                    />
                  </group>
                  <group name="lover">
                    <mesh
                      name="lover_lover_color_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.lover_lover_color_0.geometry}
                      material={materials.lover_color}
                    />
                  </group>
                  <group name="miters">
                    <mesh
                      name="miters_digital_meter_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.miters_digital_meter_0.geometry}
                      material={materials.digital_meter}
                    />
                  </group>
                  <group name="mashine">
                    <mesh
                      name="mashine_mashine1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.mashine_mashine1_0.geometry}
                      material={materials.mashine1}
                    />
                  </group>
                  <group name="add_ons">
                    <mesh
                      name="add_ons_add_ons1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.add_ons_add_ons1_0.geometry}
                      material={materials.add_ons1}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("models/bronco_car_animation_red.glb");
