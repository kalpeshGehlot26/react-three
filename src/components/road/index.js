import { RigidBody } from "@react-three/rapier";
import React from "react";

const RoadMiddleStrips = ({ position, rotation, strips = 10 }) => {
  const [x, y, z] = position;

  const stripArr = Array.apply(null, Array(strips));

  return (
    <group rotation={rotation}>
      {stripArr.map((strip, index) => {
        return (
          <mesh
            key={index}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[x - 2 * index, y, z]}
          >
            <planeBufferGeometry args={[1, 0.1]} />
            <meshBasicMaterial color={"white"} />
          </mesh>
        );
      })}
    </group>
  );
};

const Road = () => {
  return (
    <>
      <RoadMiddleStrips
        position={[58, 0.06, 0]}
        rotation={[0, Math.PI / 2, 0]}
        strips={100}
      />
      <RigidBody type="fixed">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 90]}>
          <boxBufferGeometry args={[3, 300, 0.1]} />
          <meshStandardMaterial color="#585858" />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-45.3, 0, 0]}>
          <boxBufferGeometry args={[5.5, 500, 0.1]} />
          <meshStandardMaterial color="#585858" />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -60]}>
          <boxBufferGeometry args={[500, 3, 0.1]} />
          <meshStandardMaterial color="#585858" />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Road;
