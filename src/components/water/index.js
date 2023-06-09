import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";
import { Ocean } from "react-three-ocean";
import { FrontSide, Vector3 } from "three";

const Water = (props) => {
  const { dimensions } = props;
  return (
    <mesh {...props}>
      <RigidBody colliders="trimesh" type="fixed">
        <Ocean
          dimensions={dimensions}
          normals="textures/water 0340normal.jpg"
          distortionScale={2}
          size={50}
          options={{
            // defaults
            clipBias: 0,
            alpha: 1,
            waterNormals: null, // automatically set to provided texture from "normals" prop
            sunDirection: new Vector3(0.70707, 0.70707, 0),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            eye: new Vector3(0, 10, 0),
            distortionScale: 1, // automatically set from "distortionScale" prop
            side: FrontSide,
            fog: true,
          }}
        >
          {(water) => {
            // console.log(water); // children function is passed `Water` instance for manual manipulation (e.g. sunDirection, animated waterColor, etc.)
            return null;
          }}
        </Ocean>
      </RigidBody>
    </mesh>
  );
};

export default Water;
