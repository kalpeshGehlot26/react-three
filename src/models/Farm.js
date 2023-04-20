import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const FarmIsland = () => {
  const model = useLoader(GLTFLoader, "models/low_poly_island.glb");

  return (
    <RigidBody
      type="fixed"
      colliders="trimesh"
      position={[-10, 0, -90]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <primitive object={model.scene} scale={60} />
    </RigidBody>
  );
};

export default FarmIsland;
