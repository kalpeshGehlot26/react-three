import { useGLTF } from "@react-three/drei";

export const OverBridge = (props) => {
  const { nodes, materials } = useGLTF("models/railway_station__low-poly_model.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.25}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-41.59, 4.9, -170.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_custom17(Clone)_0"].geometry}
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_custom25(Clone)_0"].geometry}
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-48.84, 4.9, -170.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_1"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_1"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_1"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-45.2, 13.5, -179.65]} scale={[-1.47, 0.14, 0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[-35.22, 14.5, -178.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-49.72, 14.5, -178.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_1"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_1"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-48.84, 14.9, -187.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_2"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_2"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_2"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-35.22, 25, -195.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_2"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_2"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-49.72, 25, -195.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_3"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_3"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-45.2, 23.5, -196.65]} scale={[-1.47, 0.14, 0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_1"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group position={[-48.84, 24.9, -204.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_3"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_3"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_3"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-41.59, 24.9, -204.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_4"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_4"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_4"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          
          <group position={[-135.32, 0, -180]} scale={[-0.59, 1.4, 0.24]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_4"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group
            position={[-138.41, 4.9, -269.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_5"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_5"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_5"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-131.16, 4.9, -269.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_6"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_6"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_6"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-134.8, 13.5, -260.35]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.47, 0.14, 0.85]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_2"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[-144.78, 14.5, -261.2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_4"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_4"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-130.28, 14.5, -261.2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_5"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_5"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-138.41, 14.9, -252.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_7"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_7"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_7"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-131.16, 14.9, -252.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_8"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_8"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_8"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-144.78, 25, -244.2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_6"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_6"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-130.28, 25, -244.2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_7"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_7"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-134.8, 23.5, -243.35]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.47, 0.14, 0.85]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_3"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[-131.16, 24.9, -235.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_9"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_9"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_9"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-138.41, 24.9, -235.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_10"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_10"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_10"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-134.68, 0, -244]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.59, 2.38, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_5"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group
            position={[-134.68, 0, -260]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.59, 1.4, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_6"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group
            position={[-134.8, 33.5, -219.98]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.47, 0.14, 2.13]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_4"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[15.92, 0, -226]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.59, 3.36, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_7"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group
            position={[15.92, 0, -244]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.59, 2.38, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_8"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group
            position={[15.92, 0, -260]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.59, 1.4, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_9"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group
            position={[12.19, 4.9, -269.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_11"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_11"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_11"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[19.44, 4.9, -269.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_12"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_12"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_12"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[15.8, 13.5, -260.35]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.47, 0.14, 0.85]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_5"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[20.32, 14.5, -261.2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_8"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_8"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[5.82, 14.5, -261.2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_9"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_9"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[5.82, 25, -244.2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_10"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_10"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[19.44, 14.9, -252.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_13"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_13"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_13"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[15.8, 23.5, -243.35]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.47, 0.14, 0.85]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_6"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[19.44, 24.9, -235.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_14"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_14"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_14"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[12.19, 24.9, -235.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_15"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_15"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_15"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[15.9, 33.5, -224.23]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.47, 0.14, 1.27]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_7"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[20.32, 25, -244.2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_11"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_11"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[20.32, 34.8, -227.2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_12"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_12"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[20.32, 34.8, -220]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_13"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_13"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[20.32, 34.8, -212.8]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_14"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_14"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-124.92, 25, -195.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_15"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_15"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-131.29, 24.9, -204.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_16"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_16"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_16"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-139.42, 25, -195.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_16"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_16"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-134.9, 23.5, -196.65]} scale={[-1.47, 0.14, 0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_8"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group position={[-138.54, 14.9, -187.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_17"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_17"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_17"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-131.29, 14.9, -187.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_18"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_18"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_18"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-134.9, 13.5, -179.65]} scale={[-1.47, 0.14, 0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_9"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group position={[-131.29, 4.9, -170.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_19"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_19"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_19"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-124.92, 14.5, -178.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_17"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_17"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-139.42, 14.5, -178.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_18"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_18"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-58.98, 33.5, -219.85]}
            scale={[-13.74, 0.14, 2.09]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_10"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[-139.32, 34.8, -227.2]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_19"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_19"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-139.32, 34.8, -220]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_20"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_20"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-139.32, 34.8, -212.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_21"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_21"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-38.3, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_22"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_22"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-45.5, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_23"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_23"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-52.7, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_24"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_24"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-60, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_25"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_25"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-67.2, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_26"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_26"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-74.4, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_27"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_27"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-81.6, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_28"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_28"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-88.8, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_29"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_29"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-96, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_30"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_30"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-103.2, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_31"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_31"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-110.4, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_32"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_32"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-124.38, 34.8, -227.32]} scale={[-0.68, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_33"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_33"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-117.6, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_34"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_34"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-117, 34.8, -212.48]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_35"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_35"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-124.2, 34.8, -212.48]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_36"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_36"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[5, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_37"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_37"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-2.2, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_38"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_38"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-9.4, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_39"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_39"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-16.7, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_40"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_40"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-23.9, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_41"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_41"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-31.1, 34.8, -227.32]} scale={[-0.76, 0.7, 0.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_42"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_42"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-34.19, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_43"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_43"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-26.42, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_44"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_44"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-18.64, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_45"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_45"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-10.76, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_46"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_46"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-2.98, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_47"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_47"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[4.8, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_48"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_48"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-95.19, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_49"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_49"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-71.76, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_50"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_50"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-63.98, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_51"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_51"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-56.2, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_52"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_52"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-132.5, 0, -165.3]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1, 0.98, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_half_custom17(Clone)_0"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group position={[-142.5, 0, -165.3]} scale={[1, 0.98, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_half_corner_custom17(Clone)_0"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[-132.4, 0, -274.7]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1, 0.98, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_half_custom17(Clone)_0_1"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[-142.4, 0, -274.7]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1, 0.98, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_half_corner_custom17(Clone)_0_1"].geometry
              }
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[13.5, 0, -274.7]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1, 0.98, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_half_custom17(Clone)_0_2"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[23.5, 0, -274.7]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[1, 0.98, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_half_corner_custom17(Clone)_0_2"].geometry
              }
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[-87.42, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_53"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_53"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-48.71, 5.1, 164.12]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_54"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-41.48, 5.1, 164.12]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_55"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-138.54, 24.9, -204.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_20"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_20"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_20"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-138.54, 4.9, -170.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_21"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_21"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_21"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-134.68, 0, -226]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.59, 3.36, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_10"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group position={[-45.32, 0, -214]} scale={[-0.59, 3.36, 0.24]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_11"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group position={[-41.59, 14.9, -187.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_22"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_22"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_22"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
 
          <group
            position={[-108.71, 14.67, 0.04]}
            rotation={[-Math.PI, Math.PI / 2, 0]}
            scale={[7, 0.43, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["halfPipe_half_custom19(Clone)_0"].geometry}
              material={materials.custom19Clone}
            />
          </group>
         
          <group position={[-106.2, 33.5, -213.65]} scale={[-1.47, 0.14, 0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_13"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group position={[-106.2, 23.5, -196.65]} scale={[-1.47, 0.14, 0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_14"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group
            position={[-108.71, 14.67, -119.96]}
            rotation={[-Math.PI, Math.PI / 2, 0]}
            scale={[7, 0.43, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["halfPipe_half_custom19(Clone)_0_1"].geometry}
              material={materials.custom19Clone}
            />
          </group>
          <group position={[-109.84, 24.9, -204.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_23"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_23"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_23"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-102.59, 14.9, -187.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_24"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_24"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_24"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
     

         
     
         
         
          
          <group position={[-109.84, 14.9, -187.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_25"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_25"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_25"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
         
          <group
            position={[-108.72, 5, -160.42]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_56"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-108.72, 5, -79.79]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_57"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-108.72, 5, -69.87]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_58"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-108.72, 5, -59.96]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_59"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-108.72, 5, -50.04]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_60"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-108.72, 5, -40.12]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_61"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
      
          <group
            position={[-108.72, 5, 50.13]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_62"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-108.72, 5, 40.21]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_63"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-108.72, 5, 60.04]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_64"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-108.72, 5, 69.96]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_65"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-108.72, 5, 79.88]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_66"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[-108.72, 5, 160.94]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.19, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_67"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-102.42, 5, 171.4]} scale={[-0.72, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_68"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          
         
          <group position={[-102.59, 4.9, -170.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_26"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_26"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_26"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-109.84, 4.9, -170.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_27"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_27"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_27"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[-106.2, 13.5, -179.65]} scale={[-1.47, 0.14, 0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_15"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group position={[-102.59, 24.9, -204.4]} scale={[-1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_28"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_28"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_28"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>


          <group
            position={[-110.72, 14.5, -178.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_69"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_54"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-110.72, 25, -195.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_70"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_55"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-96.22, 25, -195.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_71"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_56"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[-96.22, 14.5, -178.8]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_72"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_57"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[-106.32, 0, -214]} scale={[-0.59, 3.36, 0.24]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_14"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group
            position={[-79.64, 34.8, -212.38]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.82, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_73"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_58"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[12.19, 14.9, -252.6]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.25, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_29"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_29"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_29"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[16, 3.64, 0]} scale={[1.5, 0.16, 33.4]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_16"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group position={[12.27, 24.9, -204.4]} scale={[1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_30"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_30"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_30"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[18.4, 5, 69.96]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_74"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[20.4, 25, -195.8]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_75"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_59"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group position={[19.52, 14.9, -187.4]} scale={[1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_31"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_31"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_31"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[15.87, 33.5, -213.65]} scale={[1.47, 0.14, 0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_17"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group position={[15.87, 23.5, -196.65]} scale={[1.47, 0.14, 0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_18"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group position={[16, 0, -214]} scale={[0.59, 3.36, 0.24]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_15"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group position={[16, 0, -196]} scale={[0.59, 2.38, 0.24]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_16"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          <group position={[16, 0, -180]} scale={[0.59, 1.4, 0.24]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block__defaultMat(Clone)_0_17"].geometry}
              material={materials.defaultMatClone}
            />
          </group>
          
          <group
            position={[18.4, 5, -160.42]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-1.1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_76"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[18.4, 5, -79.79]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_77"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[18.4, 5, -69.87]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_78"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[18.4, 5, -59.96]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_79"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[18.4, 5, -50.04]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_80"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[18.4, 5, -40.12]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_81"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
      
         
          <group
            position={[18.4, 5, 50.13]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_82"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[18.4, 5, 40.21]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_83"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[18.4, 5, 60.04]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_84"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[18.4, 5, 79.88]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.04, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_85"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group
            position={[18.4, 5, 160.94]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.19, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_86"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
   
          
          <group position={[12.27, 4.9, -170.4]} scale={[1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_32"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_32"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_32"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[19.52, 4.9, -170.4]} scale={[1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_33"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_33"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_33"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[15.87, 13.5, -179.65]} scale={[1.47, 0.14, 0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["block_custom17(Clone)_0_19"].geometry}
              material={materials.custom17Clone}
            />
          </group>
          <group position={[12.27, 14.9, -187.4]} scale={[1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_34"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_34"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_34"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
          <group position={[19.52, 24.9, -204.4]} scale={[1.25, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom17(Clone)_0_35"].geometry
              }
              material={materials.custom17Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["stairs_stoneRailing_wood(Clone)_0_35"].geometry}
              material={materials.woodClone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["stairs_stoneRailing_custom25(Clone)_0_35"].geometry
              }
              material={materials.custom25Clone}
            />
          </group>
        
          
          
          <group
            position={[20.4, 14.5, -178.8]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.76, 0.7, 0.57]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_87"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_60"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[5.9, 25, -195.8]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_88"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_61"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[5.9, 14.5, -178.8]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.76, 0.7, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_custom25(Clone)_0_89"].geometry
              }
              material={materials.custom25Clone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["fence_eastAsianBasicHigh_wood(Clone)_0_62"].geometry
              }
              material={materials.woodClone}
            />
          </group>
          <group
            position={[21.83, 5.2, -119.96]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[6.99, 0.59, 0.31]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["halfPipe_half_custom19(Clone)_0_6"].geometry}
              material={materials.custom19Clone}
            />
          </group>
         
       
          
        
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("models/railway_station__low-poly_model.glb");
