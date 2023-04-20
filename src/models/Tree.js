import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const TreePoly = () => {
  const model = useLoader(GLTFLoader, "models/tree.glb");

  const treeArr = Array.apply(null, Array(15));

  return (
    <>
      <mesh position={[0, 0, 170]}>
        {Array.apply(null, Array(15)).map((tree, index) => {
          return (
            <RigidBody
              type="fixed"
              colliders="trimesh"
              position={[-49, 0, -7 * index]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <primitive object={model.scene.clone()} scale={30} />
            </RigidBody>
          );
        })}
      </mesh>
      <mesh position={[4, 0, 175]}>
        {Array.apply(null, Array(33)).map((tree, index) => {
          return (
            <RigidBody
              type="fixed"
              colliders="trimesh"
              position={[-45, 0, -7 * index]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <primitive object={model.scene.clone()} scale={30} />
            </RigidBody>
          );
        })}
      </mesh>
    </>
  );
};

export default TreePoly;
