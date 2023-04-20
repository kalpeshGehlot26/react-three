import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Ocean } from "react-three-ocean";
import { FrontSide, Vector3 } from "three";

const Water = (props) => {
  const { dimensions } = props;
  return (
    <mesh {...props}>
      <Ocean
        dimensions={dimensions}
        normals="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
        distortionScale={20}
        size={10}
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
    </mesh>
  );
};

export default Water;
