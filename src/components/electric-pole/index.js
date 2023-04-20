import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const Poles = ({ position, rotation, pole = 10, texture }) => {
  const [x, y, z] = position;

  const stripArr = Array.apply(null, Array(pole));

  const wireLeft = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, -0.2, 2),
    new THREE.Vector3(0, -0.3, 4),
    new THREE.Vector3(0, -0.2, 6),
    new THREE.Vector3(0, 0, 8),
  ]);

  const wireRight = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, -0.2, 2),
    new THREE.Vector3(0, -0.3, 4),
    new THREE.Vector3(0, -0.2, 6),
    new THREE.Vector3(0, 0, 8),
  ]);

  return (
    <group rotation={rotation}>
      {stripArr.map((strip, index) => {
        return (
          <group key={index}>
            <RigidBody type="fixed" colliders="trimesh">
              <mesh position={[x - 8 * index, 1.5, z]}>
                <cylinderBufferGeometry args={[0.05, 0.05, 3]} />
                <meshStandardMaterial map={texture} />
              </mesh>
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[x - 8 * index, y + 2.3, z]}
              >
                <cylinderBufferGeometry args={[0.05, 0.05, 1]} />
                <meshStandardMaterial map={texture} />
              </mesh>
              <mesh
                position={[x - 8 * index, y + 2.3, z + 0.2]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <tubeBufferGeometry args={[wireLeft, 50, 0.01, 100]} />
                <meshStandardMaterial color={"gray"} side={THREE.DoubleSide} />
              </mesh>
              <mesh
                position={[x - 8 * index, y + 2.3, z - 0.2]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <tubeBufferGeometry args={[wireRight, 50, 0.01, 100]} />
                <meshStandardMaterial color={"gray"} side={THREE.DoubleSide} />
              </mesh>
            </RigidBody>
          </group>
        );
      })}
    </group>
  );
};

const ElectricPole = () => {
  const texture = useLoader(TextureLoader, "textures/circle-cone.png");

  // const curve = new THREE.CatmullRomCurve3([
  //   new THREE.Vector3(0, 0, 0),
  //   new THREE.Vector3(0, -0.2, 2),
  //   new THREE.Vector3(0, -0.3, 4),
  //   new THREE.Vector3(0, -0.2, 6),
  //   new THREE.Vector3(0, 0, 8)
  // ]);

  return (
    <>
      <Poles
        position={[58, 0.2, -2]}
        rotation={[0, Math.PI / 2, 0]}
        pole={30}
        texture={texture}
      />
    </>
  );
};

export default ElectricPole;
