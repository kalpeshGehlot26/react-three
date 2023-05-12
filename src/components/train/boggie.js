import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const TrainBoggie = (props) => {
  const { nodes, materials } = useGLTF("models/y25.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box031__0.geometry}
              material={materials["Scene_-_Root"]}
            >
              <meshStandardMaterial color={"gray"} />
            </mesh>
          </group>
          <group
            position={[0, 0.46, 0.9]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder016__0.geometry}
              //   material={materials["Scene_-_Root"]}
            >
              <meshStandardMaterial color={"gray"} />
            </mesh>
          </group>
          <group
            position={[0, 0.46, -0.9]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder017__0.geometry}
              material={materials["Scene_-_Root"]}
            >
              <meshStandardMaterial color={"gray"} />
            </mesh>
          </group>
          <group
            position={[0, 0.47, -1.51]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005__0.geometry}
              material={materials["Scene_-_Root"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("models/y25.glb");
