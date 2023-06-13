import { useFrame, useLoader } from "@react-three/fiber";
import React, { useContext, useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TrainCoach } from "../train/coach";
import { TrainEngine } from "../train/engine";
import { Html, PerspectiveCamera } from "@react-three/drei";
import { AppContext } from "../../App";



const Pillers = (props) => {
  const noOfPillers = Array.apply(null, Array(props.noOfPillers));

  return (
    <group position={props.position}>
      {noOfPillers.map((piller, index) => {
        return (
          <mesh {...props} position={[-1000 + index * 30, 0, 0]}>
            <boxBufferGeometry args={[5, 10, 14]} />
            <meshStandardMaterial color={"white"} map={props.texture} />
          </mesh>
        );
      })}
    </group>
  );
};

const BridgeSection = (props) => {
  const noOfSections = Array.apply(null, Array(props.noOfSections));

  return (
    <group position={props.position}>
      {noOfSections.map((section, index) => {
        return (
          <group>
            <mesh position={[-900 + 30 * index, 2, 4]}>
              <cylinderBufferGeometry args={[0.3, 1, 4]} />
              <meshStandardMaterial map={props.texture} />
            </mesh>
            <mesh position={[-900 + 30 * index, 2, -4]}>
              <cylinderBufferGeometry args={[0.3, 1, 4]} />
              <meshStandardMaterial map={props.texture} />
            </mesh>
            <mesh position={[-975 + 30 * index, 0, 0]}>
              <boxBufferGeometry args={[30, 1, 10]} />
              <meshStandardMaterial color={"gray"} />
            </mesh>
            <mesh position={[-975 + 30 * index, 2, 0]}>
              <boxBufferGeometry args={[30, 3, 8]} />
              <meshBasicMaterial
                attach="material-0"
                color={"white"}
                map={props.texture}
              />
              <meshBasicMaterial
                attach="material-1"
                color={"white"}
                map={props.texture}
              />
              <meshBasicMaterial attach="material-2" color="#757474" />
              <meshBasicMaterial attach="material-3" color="pink" />
              <meshBasicMaterial
                attach="material-4"
                map={props.texture}
                color={"lightgray"}
              />
              <meshBasicMaterial
                attach="material-5"
                map={props.texture}
                color={"lightgray"}
              />
            </mesh>

            <mesh position={[-975 + 30 * index, 3.7, 2.7]}>
              <boxBufferGeometry args={[30, 0.3, 0.3]} />
              <meshStandardMaterial color={"gray"} />
            </mesh>
            <mesh position={[-975 + 30 * index, 3.7, -2.3]}>
              <boxBufferGeometry args={[30, 0.3, 0.3]} />
              <meshStandardMaterial color={"gray"} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const Bridge = (props) => {
  const pillerTexture = useLoader(TextureLoader, "textures/bridge-texture.jpg");
  const sectionTexture = useLoader(
    TextureLoader,
    "textures/section-texture.jpg"
  );

  return (
    <group {...props}>
      <BridgeSection
        position={[200, 10, -300]}
        noOfSections={70}
        texture={sectionTexture}
      />
      <Pillers
        position={[200, 4.5, -300]}
        noOfPillers={70}
        texture={pillerTexture}
      />
    </group>
  );
};

export default Bridge;
