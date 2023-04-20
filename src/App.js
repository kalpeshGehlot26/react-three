import React, { useEffect, useRef, useState } from "react";
import { Cloud, PerspectiveCamera, Sky, Stars } from "@react-three/drei";
import { Debug, RigidBody } from "@react-three/rapier";
import Mountain from "./models/Mountain";
import Temple from "./components/temple";
import Water from "./components/water";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Lights = () => {
  const lightRef = useRef(null);
  return (
    <>
      <ambientLight intensity={0.2} />
      {/* <directionalLight
        ref={lightRef}
        position={[0, 10, 10]}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      /> */}
      <hemisphereLight args={["lightorange", "#000", 0.2]} />
    </>
  );
};

const App = () => {
  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(100, 100, 100)
  );
  const [smoothedCameraRotation] = useState(
    () => new THREE.Vector3(100, 100, 100)
  );
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  const { camera } = useThree();

  useEffect(() => {
    // const cameraPosition = new THREE.Vector3();
    // const cameraRotation = new THREE.Quaternion();
    // cameraPosition.z = 2.25;
    // cameraPosition.y = 0.65;
    // cameraRotation.y = -Math.PI / 2;

    // const cameraTarget = new THREE.Vector3();
    // cameraTarget.y += 0.25;

    // smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    // smoothedCameraTarget.lerp(cameraTarget, 5 * delta);
    // smoothedCameraRotation.lerp(cameraRotation);

    // camera.position.copy(smoothedCameraPosition);
    // camera.rotation.copy(smoothedCameraRotation);
    camera.position.x = 100;
    camera.position.y = 5;
    camera.position.z = -100;
    camera.rotation.z = -100;
  }, []);

  return (
    <>
      {/* <Debug /> */}
      {/* <CameraControls /> */}

      {/* <Vehicle /> */}
{/*  */}
      {/* <PerspectiveCamera ref={cameraRef} position={[0, 100, 100]} /> */}
      <Mountain />

      <Sky
        sunPosition={[0, 0, 1]}
        inclination={0}
        azimuth={0}
        distance={2000}
        saturation={0}
        // material={{
        //   sunColor: "#FF5733"
        // }}
      />
      {/* <Cloud width={2000} segments={10000} depth={50} position={[0, 100, 0]} /> */}
      {/* <fog attach="fog" args={["#ffffffa1", 1, 900]} /> */}
      <Stars
        radius={300}
        depth={50}
        count={7000}
        factor={9}
        saturation={1}
        fade
      />
      {/* <Car/> */}
      <Lights />
      {/* <Mountain />
      <CityModel />
      <FarmIsland /> */}
      {/* <Road /> */}
      {/* <Water/> */}

      <Water position={[0, 0, 0]} dimensions={[2000, 2000]} />

      {/* <TreePoly /> */}
      {/* <ElectricPole /> */}

      <Temple />
      {/* <Ground /> */}
    </>
  );
};

export default App;
