import { useFrame, useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Mountain = () => {
  const model = useLoader(GLTFLoader, "models/obj_nat_rock_01 (1).glb");

  return (
    <group>
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
