import { useLoader } from "@react-three/fiber";
import React from "react";
import { Texture, TextureLoader } from "three";
import { OverBridge } from "./OverBridge";

const Track = (props) => {
  const noOfSections = Array.apply(null, Array(33));

  return (
    <group {...props}>
      {noOfSections.map((section, index) => {
        return (
          <group position={[0, 0, -200]}>
            <mesh position={[-470 + 30 * index, 10.9, 2.2]}>
              <boxBufferGeometry args={[30, 0.3, 0.3]} />
              <meshStandardMaterial color={"gray"} />
            </mesh>
            <mesh position={[-470 + 30 * index, 10.9, -1.8]}>
              <boxBufferGeometry args={[30, 0.3, 0.3]} />
              <meshStandardMaterial color={"gray"} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const Shed = (props) => {
  return (
    <group {...props}>
      <group>
        <mesh position={[30, 13.5, -110.5]}>
          <boxBufferGeometry args={[4, 1, 4]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[70, 13.5, -110.5]}>
          <boxBufferGeometry args={[4, 1, 4]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[-20, 13.5, -110.5]}>
          <boxBufferGeometry args={[4, 1, 4]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[-70, 13.5, -110.5]}>
          <boxBufferGeometry args={[4, 1, 4]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[30, 14, -110.5]}>
          <cylinderBufferGeometry args={[1, 1, 15]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[70, 14, -110.5]}>
          <cylinderBufferGeometry args={[1, 1, 15]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[-20, 14, -110.5]}>
          <cylinderBufferGeometry args={[1, 1, 15]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[-70, 14, -110.5]}>
          <cylinderBufferGeometry args={[1, 1, 15]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
      </group>
      <group position={[0, -2, 0]}>
        <mesh position={[0, 25, -101]} rotation={[-Math.PI / 20, 0, 0]}>
          <boxBufferGeometry args={[150, 1, 20]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[0, 24.6, -91.3]} rotation={[-Math.PI / 1.8, 0, 0]}>
          <boxBufferGeometry args={[150, 1, 3]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[0, 25, -120]} rotation={[Math.PI / 20, 0, 0]}>
          <boxBufferGeometry args={[150, 1, 20]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[0, 24.6, -129.7]} rotation={[Math.PI / 1.8, 0, 0]}>
          <boxBufferGeometry args={[150, 1, 3]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[74.5, 24.5, -120]} rotation={[Math.PI / 1.81, 0, 0]}>
          <boxBufferGeometry args={[1, 20, 2]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[74.5, 24.5, -101]} rotation={[-Math.PI / 1.81, 0, 0]}>
          <boxBufferGeometry args={[1, 20, 2]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[-74.5, 24.5, -120]} rotation={[Math.PI / 1.81, 0, 0]}>
          <boxBufferGeometry args={[1, 20, 2]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
        <mesh position={[-74.5, 24.5, -101]} rotation={[-Math.PI / 1.81, 0, 0]}>
          <boxBufferGeometry args={[1, 20, 2]} />
          <meshStandardMaterial color={"lightgray"} map={props.texture} />
        </mesh>
      </group>
    </group>
  );
};

const Station = (props) => {
  const texture = useLoader(
    TextureLoader,
    "textures/temple_ground_texture.png"
  );

  return (
    <group {...props}>
      {/* <mesh position={[10, 0, -100]}>
        <boxBufferGeometry args={[1000, 21, 1000]} />
        <meshStandardMaterial color={"gray"} side={2} />
      </mesh> */}
      <mesh position={[0, 5, -111]}>
        <boxBufferGeometry args={[650, 16.5, 150]} />
        <meshStandardMaterial map={texture} color="#f7d2d0" side={2} />
      </mesh>
      <mesh position={[0, 5, -279]}>
        <boxBufferGeometry args={[650, 16.5, 150]} />
        <meshStandardMaterial map={texture} color="#f7d2d0" side={2} />
      </mesh>

      <Shed position={[-190, 0, -55]} texture={texture}/>
      <Shed position={[0, 0, -55]} texture={texture} />
      <Shed position={[190, 0, -55]} texture={texture} />

      <Track position={[0, 0, 0]} />
      <Track position={[0, 0, 10]} />
      <OverBridge
        scale={2}
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 11, -200]}
      />
    </group>
  );
};

export default Station;
