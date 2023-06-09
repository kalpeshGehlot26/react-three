import React, { forwardRef, useRef, useEffect } from "react";
import { GradientTexture, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

export const CarBody = forwardRef(
  ({ args = [1.7, 1, 4], mass = 2500, camera, ...props }, ref) => {
    const cameraRef = useRef();
    const { nodes, materials } = useGLTF("/models/carOneBody.glb");

    console.log(materials);

    const [, api] = useBox(
      () => ({
        mass,
        args,
        allowSleep: false,
        onCollide: (e) => console.log("bonk", e.body.userData),
        ...props,
      }),
      ref
    );

    let posVec3 = new THREE.Vector3();
    let qurVec3 = new THREE.Quaternion();

    let currentPosition = new THREE.Vector3();
    let currentLookAt = new THREE.Vector3();

    const texture = useLoader(TextureLoader, "textures/car-texture.jpg");

    const calculateOffset = (position, rotation, x, y, z) => {
      const offSet = new THREE.Vector3(x, y, z);
      offSet.applyQuaternion(rotation);
      offSet.add(position);
      return offSet;
    };

    useEffect(() => {
      // api.position.subscribe((v) => posVec3.set(v[0], v[1], v[2])),
      api.quaternion.subscribe((v) => {
        console.log(v)
      })
      materials.Paint.color = { r: 255, g: 0, b: 0 };
    }, []);

    useFrame((state, delta) => {

      let cameraPositionOffset = calculateOffset(posVec3, qurVec3, 0, 2, -6);
      let cameraFocusOffset = calculateOffset(posVec3, qurVec3, 0, 1, 2);

      const t = 1.0 - Math.pow(0.05, delta);
      currentPosition.lerp(cameraPositionOffset, t);
      currentLookAt.copy(cameraFocusOffset, t);

      state.camera.position.copy(currentPosition);
      state.camera.lookAt(currentLookAt);
      state.camera.updateProjectionMatrix();
    });
    return (
      <>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 50, -50]}
        />
        <mesh ref={ref} api={api}>
          <group {...props} dispose={null}>
            <mesh
              geometry={nodes.Cube_1.geometry}
              // material={materials.Paint}
              // material-color="#262626"
            >
              <meshStandardMaterial
                map={texture}
                displacementMap={texture}
                normalMap={texture}
                roughnessMap={texture}
                attach="material"
              />
            </mesh>
            <mesh
              geometry={nodes.Cube_2.geometry}
              material={nodes.Cube_2.material}
              material-color="brown"
            />
            <mesh geometry={nodes.Cube_3.geometry} material={materials.Tyre} />
            <mesh
              geometry={nodes.Cube_4.geometry}
              // material={materials.Window}
              material-color="gray"
            />
            <mesh
              geometry={nodes.Cube_5.geometry}
              material={materials.Chrome}
            />
            <group
              position={[1.18, 0.03, 2.37]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.28, 0.23, 0.28]}
            >
              <mesh
                geometry={nodes.Cylinder002.geometry}
                // material={materials.Paint}
                material-color="brown"
              />
              <mesh
                geometry={nodes.Cylinder002_1.geometry}
                // material={materials.Window}
                material-color="gray"
              />
              <mesh
                geometry={nodes.Cylinder002_2.geometry}
                material={materials.Breaklight}
              />
            </group>
            <group position={[1.71, 0.55, 0.77]} rotation={[0, 0.2, 0]}>
              <mesh
                geometry={nodes.Cube003_1.geometry}
                // material={materials.Paint}
                material-color="brown"
              />
              <mesh
                geometry={nodes.Cube003_2.geometry}
                material={materials.Window}
              />
            </group>
            <mesh
              geometry={nodes.Cube002.geometry}
              material={materials.Chrome}
              position={[0, 0.02, -2.33]}
            />
            <mesh
              geometry={nodes.Cube003.geometry}
              material={materials.Chrome}
              position={[0.96, 0.61, -2.34]}
              scale={[0.07, 0.19, 0.13]}
            />
            <mesh
              geometry={nodes.Cube004.geometry}
              // material={materials.Paint}
              material-color="brown"
              position={[-0.7, 0.82, -2.54]}
              scale={[0.71, 0.05, 0.18]}
            />
            <mesh
              geometry={nodes.Cylinder001.geometry}
              material={materials.Chrome}
              position={[-1.16, -0.59, -2.34]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.12, 0.22, 0.12]}
              material-color="brown"
            />
            <mesh
              geometry={nodes.Cube005.geometry}
              material={materials.Chrome}
              position={[0.6, -0.45, -2.43]}
              scale={[0.05, 0.13, 0.13]}
            />
          </group>
        </mesh>
      </>
    );
  }
);
useGLTF.preload("/models/carOneBody.glb");
