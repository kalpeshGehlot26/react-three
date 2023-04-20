import { useFrame, useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { useEffect, useRef } from "react";
import {
  MeshBasicMaterial,
  RepeatWrapping,
  TextureLoader,
  Vector2,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Mountain from "../../models/Mountain";
import Water from "../water";

const Stairs = ({ texture, count, position, color, rotation }) => {
  const stepWidth = 30;
  const stepHeight = 0.5;

  const stairs = Array.apply(null, Array(count));

  return (
    <group>
      <mesh position={position} rotation={rotation}>
        {stairs.map((i, index) => (
          <mesh
            key={index}
            position={[(index / 2) * stepHeight, index * stepHeight, 0]}
          >
            <boxBufferGeometry
              args={[stepHeight * index, stepHeight, stepWidth]}
            />
            <meshStandardMaterial map={texture} color={color} />
          </mesh>
        ))}
      </mesh>
    </group>
  );
};

const Pillar = ({ position }) => {
  const pillar = useLoader(GLTFLoader, "models/pillar__style1.glb");
  return (
    <mesh position={position}>
      <RigidBody type="fixed" colliders="trimesh">
        <primitive object={pillar.scene.clone()} scale={0.3} color="pink" />
      </RigidBody>
    </mesh>
  );
};

const InnerTemple = (props) => {
  const templeModel = useLoader(GLTFLoader, "models/hindu_temple.glb");

  return (
    <RigidBody type="fixed" {...props} colliders="trimesh">
      <primitive object={templeModel.scene} scale={2.7} />
    </RigidBody>
  );
};

const OuterPiller = (props) => {
  const model = useLoader(
    GLTFLoader,
    "models/templepalace_pillar_white_marble.glb"
  );

  return (
    <RigidBody type="fixed" {...props}>
      <primitive object={model.scene.clone()} scale={0.009} />
    </RigidBody>
  );
};

const TempleBoundry = () => {
  const textureGround = useLoader(
    TextureLoader,
    "textures/temple-wall-texture.jpg"
  );

  return (
    <group>
      <RigidBody type="fixed">
        <mesh position={[-100, 1.5, 70]}>
          <boxBufferGeometry args={[100, 3, 1]} />
          <meshStandardMaterial map={textureGround} color="pink" />
        </mesh>
        <mesh position={[-100, 1.5, -55]}>
          <boxBufferGeometry args={[100, 3, 1]} />
          <meshStandardMaterial map={textureGround} color="pink" />
        </mesh>
        <mesh position={[-150, 1.5, 7.5]}>
          <boxBufferGeometry args={[1, 3, 126]} />
          <meshStandardMaterial map={textureGround} color="pink" />
        </mesh>
        <mesh position={[-50, 1.5, 7.5]}>
          <boxBufferGeometry args={[1, 3, 50]} />
          <meshStandardMaterial map={textureGround} color="pink" />
        </mesh>
        <mesh position={[-50, 1.5, 60]}>
          <boxBufferGeometry args={[1, 3, 20]} />
          <meshStandardMaterial map={textureGround} color="pink" />
        </mesh>
        <mesh position={[-50, 1.5, -45]}>
          <boxBufferGeometry args={[1, 3, 20]} />
          <meshStandardMaterial map={textureGround} color="pink" />
        </mesh>
      </RigidBody>
    </group>
  );
};

const Temple = () => {
  const texture = useLoader(TextureLoader, "textures/temple-wall-texture.jpg");

  const textureGround = useLoader(TextureLoader, "textures/circle-base.png");

  return (
    <group scale={1.3} position={[20, 6, 0]}>
      <group scale={1.2} position={[10, 0, -5]}>
        <RigidBody type="fixed">
          <group>
            <mesh position={[-99, 1.5, 10]}>
              <boxBufferGeometry args={[50, 3, 50]} />
              <meshStandardMaterial map={texture} />
            </mesh>

            <mesh position={[-105, 11.9, -3]}>
              <boxBufferGeometry args={[40, 0.6, 13.5]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[-105, 11.9, 23]}>
              <boxBufferGeometry args={[40, 0.6, 14.5]} />
              <meshStandardMaterial map={texture} />
            </mesh>

            <mesh position={[-104, 12.5, 9.5]}>
              <boxBufferGeometry args={[18, 0.6, 13]} />
              <meshStandardMaterial map={texture} />
            </mesh>

            <mesh position={[-105, 3, 10]}>
              <boxBufferGeometry args={[40, 5, 40]} />
              <meshBasicMaterial
                attachArray="material"
                color={"pink"}
                map={texture}
              />
            </mesh>

            <Stairs
              texture={texture}
              count={10}
              position={[-80.3, 1.1, 10]}
              color="pink"
              rotation={[0, 0, Math.PI / 2]}
            />
            <Stairs
              texture={texture}
              count={7}
              position={[-71, -0.1, 10]}
              color="white"
              rotation={[0, 0, Math.PI / 2]}
            />
            <Stairs
              texture={texture}
              count={7}
              position={[-100, -0.1, -18.2]}
              color="white"
              rotation={[0, Math.PI / 2, Math.PI / 2]}
            />
            <Stairs
              texture={texture}
              count={7}
              position={[-100, 2.4, -13.3]}
              color="pink"
              rotation={[0, Math.PI / 2, Math.PI / 2]}
            />
            <Stairs
              texture={texture}
              count={7}
              position={[-100, -0.1, 38.3]}
              color="white"
              rotation={[0, -Math.PI / 2, Math.PI / 2]}
            />
            <Stairs
              texture={texture}
              count={7}
              position={[-100, 2.4, 33.3]}
              color="pink"
              rotation={[0, -Math.PI / 2, Math.PI / 2]}
            />
          </group>
        </RigidBody>

        <InnerTemple
          position={[-120, -0.1, 10]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Pillar position={[-87, 5.5, -8]} />
        <Pillar position={[-87, 5.5, 28.5]} />
        <Pillar position={[-99, 5.5, 28.5]} />
        <Pillar position={[-111, 5.5, 28.5]} />

        <Pillar position={[-87, 5.5, 0]} />
        <Pillar position={[-99, 5.5, 0]} />
        <Pillar position={[-99, 5.5, -8]} />
        <Pillar position={[-111, 5.5, -8]} />
        <Pillar position={[-87, 5.5, 20]} />
        <Pillar position={[-87, 5.5, 20]} />

        <Pillar position={[-99, 5.5, 20]} />
        <Pillar position={[-123, 5.5, -8]} />
        <Pillar position={[-123, 5.5, 0]} />
        <Pillar position={[-123, 5.5, 28]} />
        <Pillar position={[-123, 5.5, 20]} />


        {Array.apply(null, Array(9)).map((i, index) => {
          return <OuterPiller position={[-80.5 + index * 1.2, 3.2, -14.7]} />;
        })}

        {Array.apply(null, Array(9)).map((i, index) => {
          return <OuterPiller position={[-69.5, 3.2, -14.7 + index * 1.2]} />;
        })}

        {Array.apply(null, Array(9)).map((i, index) => {
          return <OuterPiller position={[-69.5, 3.2, 25 + index * 1.2]} />;
        })}

        {Array.apply(null, Array(9)).map((i, index) => {
          return <OuterPiller position={[-80.4 + index * 1.2, 3.2, 34.7]} />;
        })}

        {Array.apply(null, Array(8)).map((i, index) => {
          return <OuterPiller position={[-118.5 + index * 1.2, 3.2, 34.7]} />;
        })}

        {Array.apply(null, Array(4)).map((i, index) => {
          return <OuterPiller position={[-118.5, 3.2, 34.7 - index * 1.2]} />;
        })}

        {Array.apply(null, Array(4)).map((i, index) => {
          return <OuterPiller position={[-118.5, 3.2, -11 - index * 1.2]} />;
        })}

        {Array.apply(null, Array(8)).map((i, index) => {
          return <OuterPiller position={[-118.5 + index * 1.2, 3.2, -14.7]} />;
        })}
      </group>

      {Array.apply(null, Array(40)).map((i, index) => {
        return <OuterPiller position={[-138 + index * 2.2, 1.3, 56]} />;
      })}

      {Array.apply(null, Array(40)).map((i, index) => {
        return <OuterPiller position={[-138 + index * 2.2, 1.3, -41.5]} />;
      })}

      {Array.apply(null, Array(43)).map((i, index) => {
        return <OuterPiller position={[-138, 1.3, 54 - index * 2.2]} />;
      })}

      {/* <TempleBoundry /> */}

      {/* <mesh ref={waterSurface} >
        <planeBufferGeometry args={[100, 125]} />
        <shaderMaterial attach="material" args={[waterShader]} />
      </mesh> */}

      <mesh position={[-98, -1, 7]}>
        <boxBufferGeometry args={[100, 4, 100]} />
        <meshStandardMaterial map={textureGround} color="darkgray" />
      </mesh>
    </group>
  );
};

export default Temple;
