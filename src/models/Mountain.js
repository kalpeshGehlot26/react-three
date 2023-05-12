import { useFrame, useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Mountain = () => {
  const model = useLoader(GLTFLoader, "models/obj_nat_rock_01 (1).glb");
  const boat = useLoader(GLTFLoader, "models/boat.glb");
  const boatRef = useRef();
  console.log(boatRef);
  // const model = useLoader(GLTFLoader, "models/obj_nat_rock_01 (1).glb");

  useFrame(({ clock }) => {
    if (!boatRef.current) return;

    const offset = 1 - window.scroll.offset;
    //const scrollDelta = scroll.delta;
    const scrollDelta = THREE.MathUtils.clamp(window.scroll.delta, 0, 0.0025);
    const a = clock.getElapsedTime();

    //console.log(scrollDelta)

    // Subtle boat movement
    // boatRef.current.rotation.x =
    //   Math.sin(clock.getElapsedTime()) * 0.15 * (scrollDelta * 1000);
    // boatRef.current.rotation.z = Math.cos(clock.getElapsedTime()) * 0.15;
    // boatRef.current.position.x = Math.sin(clock.getElapsedTime()) * 0.15;
    // boatRef.current.position.x =
    //   Math.sin(clock.getElapsedTime()) * 0.15 * (scrollDelta * 10);
    // boatRef.current.position.z = Math.cos(clock.getElapsedTime()) * 0.15;
    // boatRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5 + 1.5;

    // Scene Movement
    // sceneRef.current.position.z = offset * 100;
  });


  return (
    <group>
      <RigidBody
        // ref={boatRef}
        position={[30, -2, 40]}
        // rotation={[0.1, Math.PI/2, 0]}
        mass={10}
        colliders="trimesh"
      >
      {/* <mesh ref={boatRef} position={[200, 0, 200]}> */}
        <primitive object={boat.scene} scale={0.2} />
      {/* </mesh> */}
      </RigidBody>

      <RigidBody
        // ref={boatRef}
        position={[-95, -1, 110]}
        // rotation={[0.1, Math.PI/2, 0]}
        mass={10}
        colliders="trimesh"
      >
      {/* <mesh ref={boatRef} position={[200, 0, 200]}> */}
        <primitive object={boat.scene.clone()} scale={0.2} />
      {/* </mesh> */}
      </RigidBody>
     
      <RigidBody type="fixed" colliders="trimesh" position={[-70, -75, 0]}>
        <primitive object={model.scene} scale={2} />
      </RigidBody>

      <RigidBody
        type="fixed"
        colliders="trimesh"
        position={[100, -105, -280]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <primitive object={model.scene.clone()} scale={3} />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh" position={[-170, -75, 0]}>
        <primitive object={model.scene.clone()} scale={2} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        position={[-170, -75, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <primitive object={model.scene.clone()} scale={2} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        position={[-150, -80, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <primitive object={model.scene.clone()} scale={2} />
      </RigidBody>
    </group>
  );
};

export default Mountain;
