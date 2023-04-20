import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Cloud, PerspectiveCamera, Sky, Stars } from "@react-three/drei";
import { Debug, RigidBody } from "@react-three/rapier";
import Mountain from "./models/Mountain";
import Temple from "./components/temple";
import Water from "./components/water";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import { useLoader } from "@react-three/fiber";
import { AudioListener, AudioLoader, PositionalAudio } from "three";

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

const url = "sound/waves.mp3";
const App = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.x = 100;
    camera.position.y = 5;
    camera.position.z = -100;
    camera.rotation.z = -100;
  }, []);

  const listener = new THREE.AudioListener();
  camera.add(listener);

  const positionalAudio = new THREE.PositionalAudio(listener);
  const audioElement = document.getElementById("music");

  document.body.addEventListener("mousemove", function () {
    // audio.play()
    audioElement.play();
  });

  useEffect(() => {
    if (!audioElement) {
      positionalAudio.setMediaElementSource(audioElement);
      positionalAudio.setRefDistance(1);
      positionalAudio.setDirectionalCone(180, 230, 0.1);
    }
  }, [audioElement, positionalAudio]);

  return (
    <>
      <Mountain />
      {/* <BackgroundSound /> */}

      <Sky
        sunPosition={[0, 0.05, 1]}
        inclination={0}
        azimuth={0}
        distance={2000}
        saturation={0}
        // material={{
        //   sunColor: "#FF5733"
        // }}
      />
      <Stars
        radius={300}
        depth={50}
        count={7000}
        factor={9}
        saturation={1}
        fade
      />
      <Lights />

      <Water position={[0, 0, 0]} dimensions={[2000, 2000]} />

      <Temple />
    </>
  );
};

export default App;
