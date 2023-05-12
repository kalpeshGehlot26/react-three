import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Text, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { TrainBoggie } from "./boggie";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const TrainCoach = (props) => {
  const { nodes, materials } = useGLTF("models/indian_train.glb");

  const texture = useLoader(
    TextureLoader,
    "textures/railway-train-name-plate-sign-board-500x500.png"
  );

  useEffect(() => {
    // nodes.Object_30.material.color = { isColor: true, r: 0, g: 0, b: 10 };
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.allblinn3SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.allblinn3SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.allblinn3SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          // material={materials.allinitialShadingGroup}
        >
          <meshStandardMaterial color={"#c9c9c9"} side={0} />
          {/* <meshStandardMaterial color="pink" /> */}
        </mesh>
        <group>
          <mesh position={[62, -650, 245]}>
            <boxBufferGeometry args={[2, 2180, 118]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[62, -650, 70]}>
            <boxBufferGeometry args={[2, 2180, 90]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[62, 685, 70]}>
            <boxBufferGeometry args={[2, 268, 90]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[62, 685, 245]}>
            <boxBufferGeometry args={[2, 268, 118]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[62, 496, 275]}>
            <boxBufferGeometry args={[2, 115, 58]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[62, -1984, 70]}>
            <boxBufferGeometry args={[2, 260, 90]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[62, -1984, 245]}>
            <boxBufferGeometry args={[2, 260, 118]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[62, -1796, 275]}>
            <boxBufferGeometry args={[2, 115, 58]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[60, -650, 105]}>
            <boxBufferGeometry args={[2, 2180, 20]} />
            <meshStandardMaterial color={"#b5b5b5"} />
          </mesh>
          <mesh position={[60, -650, 196]}>
            <boxBufferGeometry args={[2, 2180, 20]} />
            <meshStandardMaterial color={"#b5b5b5"} />
          </mesh>
          {Array.apply(null, Array(17)).map((current, index) => {
            return (
              <mesh position={[62, -1713 + 133 * index, 150]}>
                <boxBufferGeometry args={[5, 50, 72]} />
                <meshStandardMaterial color={"#b5b5b5"} />
              </mesh>
            );
          })}

          <mesh position={[522, -650, 245]}>
            <boxBufferGeometry args={[2, 2180, 118]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[522, -650, 70]}>
            <boxBufferGeometry args={[2, 2180, 90]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[522, 685, 70]}>
            <boxBufferGeometry args={[2, 268, 90]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[522, 685, 245]}>
            <boxBufferGeometry args={[2, 268, 118]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[522, 496, 275]}>
            <boxBufferGeometry args={[2, 115, 58]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[522, -1984, 70]}>
            <boxBufferGeometry args={[2, 260, 90]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[522, -1984, 245]}>
            <boxBufferGeometry args={[2, 260, 118]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[522, -1796, 275]}>
            <boxBufferGeometry args={[2, 115, 58]} />
            <meshStandardMaterial color={"#de4843"} />
          </mesh>
          <mesh position={[523, -650, 105]}>
            <boxBufferGeometry args={[2, 2180, 20]} />
            <meshStandardMaterial color={"#b5b5b5"} />
          </mesh>
          <mesh position={[523, -650, 196]}>
            <boxBufferGeometry args={[2, 2180, 20]} />
            <meshStandardMaterial color={"#b5b5b5"} />
          </mesh>
          {Array.apply(null, Array(17)).map((current, index) => {
            return (
              <mesh position={[522, -1713 + 133 * index, 150]}>
                <boxBufferGeometry args={[5, 50, 72]} />
                <meshStandardMaterial color={"#b5b5b5"} />
              </mesh>
            );
          })}
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.allinitialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials.alllambert4SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.alllambert4SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.alllambert3SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.alllambert3SG}
        />
        <mesh position={[285, -650, -10]}>
          <boxBufferGeometry args={[210, 2700, 30]} />
          <meshStandardMaterial color={"lightgray"} />
        </mesh>

        <mesh position={[290, -650, 10]}>
          <boxBufferGeometry args={[455, 2570, 20]} />
          <meshStandardMaterial color={"#de4843"} />
        </mesh>

        <group>
          <mesh position={[290, 750, -15]}>
            <boxBufferGeometry args={[290, 130, 80]} />
            <meshStandardMaterial color={"lightgray"} />
          </mesh>

          <mesh position={[154, 725, 35]}>
            <cylinderBufferGeometry
              args={[90, 90, 180, 10, 1100, false, 3.1, 1.6]}
            />
            <meshStandardMaterial color={"lightgray"} side={2} />
          </mesh>
          <mesh position={[426, 725, 35]}>
            <cylinderBufferGeometry
              args={[90, 90, 180, 10, 1100, false, 1.6, 1.6]}
            />
            <meshStandardMaterial color={"lightgray"} side={2} />
          </mesh>
        </group>

        <group position={[0, -2687, 0]}>
          <mesh position={[290, 640, -15]}>
            <boxBufferGeometry args={[290, 130, 80]} />
            <meshStandardMaterial color={"lightgray"} />
          </mesh>

          <mesh position={[154, 665, 35]}>
            <cylinderBufferGeometry
              args={[90, 90, 180, 10, 1100, false, 3.1, 1.6]}
            />
            <meshStandardMaterial color={"lightgray"} side={2} />
          </mesh>
          <mesh position={[426, 665, 35]}>
            <cylinderBufferGeometry
              args={[90, 90, 180, 10, 1100, false, 1.6, 1.6]}
            />
            <meshStandardMaterial color={"lightgray"} side={2} />
          </mesh>
        </group>
        <group position={[120, -2120, -10]}>
          <mesh>
            <cylinderBufferGeometry args={[15, 15, 80]} />
            <meshStandardMaterial color={"gray"} />
          </mesh>
          <mesh position={[340, 0, 0]}>
            <cylinderBufferGeometry args={[15, 15, 80]} />
            <meshStandardMaterial color={"gray"} />
          </mesh>
          <mesh position={[340, -40, 0]}>
            <cylinderBufferGeometry args={[30, 30, 5]} />
            <meshStandardMaterial color={"gray"} />
          </mesh>
          <mesh position={[0, -40, 0]}>
            <cylinderBufferGeometry args={[30, 30, 5]} />
            <meshStandardMaterial color={"gray"} />
          </mesh>
        </group>
        <group position={[120, 820, -10]}>
          <mesh>
            <cylinderBufferGeometry args={[15, 15, 80]} />
            <meshStandardMaterial color={"gray"} />
          </mesh>
          <mesh position={[340, 0, 0]}>
            <cylinderBufferGeometry args={[15, 15, 80]} />
            <meshStandardMaterial color={"gray"} />
          </mesh>
          <mesh position={[340, 40, 0]}>
            <cylinderBufferGeometry args={[30, 30, 5]} />
            <meshStandardMaterial color={"gray"} />
          </mesh>
          <mesh position={[0, 40, 0]}>
            <cylinderBufferGeometry args={[30, 30, 5]} />
            <meshStandardMaterial color={"gray"} />
          </mesh>
        </group>
      </group>
      <group>
        <mesh position={[5.25, 2.7, 7]}>
          <boxBufferGeometry args={[0.1, 0.23, 1.7]} />
          <meshStandardMaterial color={"yellow"} map={texture} />
        </mesh>
        <mesh position={[0.6, 2.7, 7]}>
          <boxBufferGeometry args={[0.1, 0.23, 1.7]} />
          <meshStandardMaterial color={"yellow"} map={texture} />
        </mesh>
      </group>
      <group rotation={[0, -Math.PI / 2, 0]} position={[0.55 , 1.3, 7]}>
        <mesh position={[0.18, 1, 0]} rotation={[0, -Math.PI / 2.8, 0]}>
          <boxBufferGeometry args={[0.01, 0.2, 0.2]} />
          <meshStandardMaterial color={"yellow"} />
          <mesh rotation={[0, Math.PI / 2, 0]} position={[0.01, -0.01, 0]}>
            <Text
              scale={[0.17, 0.17, 0.17]}
              color="black" // default
              font="NotoSansDevanagari_Condensed-Black.ttf"
            >
              S1
            </Text>
          </mesh>
        </mesh>
        <mesh position={[0, 1, 0]} rotation={[0, Math.PI / 2.8, 0]}>
          <boxBufferGeometry args={[0.01, 0.2, 0.2]} />
          <meshStandardMaterial color={"yellow"} />
          <mesh rotation={[0, -Math.PI / 2, 0]} position={[-0.01, -0.01, 0]}>
            <Text
              scale={[0.17, 0.17, 0.17]}
              color="black" // default
              font="NotoSansDevanagari_Condensed-Black.ttf"
            >
              S1
            </Text>
          </mesh>
        </mesh>
      </group>

      <group rotation={[0, Math.PI / 2, 0]} position={[5.27 , 1.3, 7]}>
        <mesh position={[0.18, 1, 0]} rotation={[0, -Math.PI / 2.8, 0]}>
          <boxBufferGeometry args={[0.01, 0.2, 0.2]} />
          <meshStandardMaterial color={"yellow"} />
          <mesh rotation={[0, Math.PI / 2, 0]} position={[0.01, -0.01, 0]}>
            <Text
              scale={[0.17, 0.17, 0.17]}
              color="black" // default
              font="NotoSansDevanagari_Condensed-Black.ttf"
            >
              S1
            </Text>
          </mesh>
        </mesh>
        <mesh position={[0, 1, 0]} rotation={[0, Math.PI / 2.8, 0]}>
          <boxBufferGeometry args={[0.01, 0.2, 0.2]} />
          <meshStandardMaterial color={"yellow"} />
          <mesh rotation={[0, -Math.PI / 2, 0]} position={[-0.01, -0.01, 0]}>
            <Text
              scale={[0.17, 0.17, 0.17]}
              color="black" // default
              font="NotoSansDevanagari_Condensed-Black.ttf"
            >
              S1
            </Text>
          </mesh>
        </mesh>
      </group>

      <mesh position={[0.606, 2.7, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <Text
          scale={[0.3, 0.3, 0.3]}
          color="#7d7b02" // default
          font="NotoSansDevanagari_Condensed-Black.ttf"
        >
          शयनयान
        </Text>
      </mesh>
      <mesh position={[5.25, 2.7, 0]} rotation={[0, Math.PI / 2, 0]}>
        <Text
          scale={[0.3, 0.3, 0.3]}
          color="#7d7b02" // default
          font="NotoSansDevanagari_Condensed-Black.ttf"
        >
          शयनयान
        </Text>
      </mesh>
      <mesh position={[5.25, 2.5, 20]} rotation={[0, Math.PI / 2, 0]}>
        <Text
          scale={[0.5, 0.5, 0.5]}
          color="#7d7b02" // default
          font="NotoSansDevanagari_Condensed-Black.ttf"
        >
          प रे
        </Text>
      </mesh>
      <mesh position={[0.606, 2.7, 20]} rotation={[0, -Math.PI / 2, 0]}>
        <Text
          scale={[0.5, 0.5, 0.5]}
          color="#7d7b02" // default
          font="NotoSansDevanagari_Condensed-Black.ttf"
        >
          प रे
        </Text>
      </mesh>
      <TrainBoggie position={[2.9, -1.4, -4]} scale={1.6} />
      <TrainBoggie position={[2.9, -1.4, 17]} scale={1.6} />
    </group>
  );
};

useGLTF.preload("models/indian_train.glb");
