import React, { useContext, useEffect, useState } from "react";
import { Environment, Html, Sky, Stars } from "@react-three/drei";
import { Debug, RigidBody } from "@react-three/rapier";

import Mountain from "../models/Mountain";
import Temple from "../components/temple";
import Water from "../components/water";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Bridge from "../components/bridge";
import Train from "../components/train";
import { AppContext } from "../App";
import Station from "../components/station";

const Lights = ({ intensity }) => {
  return (
    <>
      <ambientLight intensity={intensity === 0 ? 0 : intensity} />
      <directionalLight
        position={[0, 1, 10]}
        castShadow
        intensity={intensity + 0.2}
        // shadow-mapSize-height={512}
        // shadow-mapSize-width={512}
        // shadow-camera-left={-20}
        // shadow-camera-right={20}
        // shadow-camera-top={20}
        // shadow-camera-bottom={-20}
      />
      <hemisphereLight
        args={["lightgray", "#000", intensity === 0.1 ? 0 : 0.2]}
      />
    </>
  );
};

const Scene = () => {
  const { controls } = useContext(AppContext);

  const { camera } = useThree();
  const [enviroment, setEnviroment] = useState({
    type: "day",
    inclination: 0.6,
  });

  useEffect(() => {
    camera.position.x = 50
    camera.position.y = 5
    camera.position.z = 0
  }, []);

  const listener = new THREE.AudioListener();
  camera.add(listener);

  const positionalAudio = new THREE.PositionalAudio(listener);
  const audioElement = document.getElementById("music");

  // document.body.addEventListener("mousemove", function () {
  //   // audio.play()
  //   audioElement.play();
  // });

  // useEffect(() => {
  //   if (!audioElement) {
  //     positionalAudio.setMediaElementSource(audioElement);
  //     positionalAudio.setRefDistance(1);
  //     positionalAudio.setDirectionalCone(180, 230, 0.1);
  //   }
  // }, [audioElement, positionalAudio]);

  const handleEnviroment = () => {
    let initial = enviroment.inclination;
    let type = enviroment.type;
    const countdown = setInterval(() => {
      if (type === "day") initial = initial - 0.01;
      else initial = initial + 0.01;
      setEnviroment({ type, inclination: initial });
      if (initial < 0.4) {
        setEnviroment({ type: "night", inclination: 0.4 });
        clearInterval(countdown);
      } else if (initial > 0.6) {
        setEnviroment({ type: "day", inclination: 0.6 });
        clearInterval(countdown);
      }
    }, 100);
  };

  return (
    <>
      {/* <Sky
          sunPosition={[0, 0.1, 1]}
          inclination={0}
          azimuth={0}
          distance={2000}
          saturation={0}
          // material={{
          //   sunColor: "#FF5733"
          // }}
      /> */}

      <Sky
        azimuth={0}
        distance={3000}
        saturation={1}
        turbidity={9}
        // inclination={0}
        inclination={enviroment.inclination}
      />
      <Stars
        radius={500}
        depth={-100}
        count={5000}
        factor={10}
        saturation={1}
        fade
      />
      {/* <Environment preset="night"/> */}
      <Lights intensity={enviroment.inclination / 5} />
      {/* <Html fullscreen={true}>
        <div>
      <button onClick={handleEnviroment}>Dark</button>
        </div>
      </Html> */}

      {/* {controls.scene === "temple" ? ( */}

      <group scale={0.2}>
        <group position={[0, 0, 0]} scale={1.3}>
          <Mountain />
          <Temple position={[20, 6, 0]} />
        </group>
        <Water position={[0, 0, 0]} dimensions={[5000, 5000]} />
        {/* <Station/> */}

         {/* <Bridge position={[0, -3, 600]} /> */}
       {/* <Station position={[0, -9, -80]} />  */}

        {/* <Train scale={0.8} position={[-300, -3, 600]} /> */}
      </group>

      <Html fullscreen={true}>
        <div className="section-1">
          <button className="day-night" onClick={handleEnviroment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              // version="1.1"
              viewBox="0 0 100 100"
            >
              <g transform="translate(-467.143 -662.362)">
                <g
                  // fillOpacity="1"
                  // display="inline"
                  transform="translate(2832.986 467.443)"
                >
                  <path
                    fill="#142b54"
                    d="M-2286.454 285.37a50 50 0 01-69.84-11.061l80.902-58.779a50 50 0 01-11.062 69.84z"
                    display="inline"
                  ></path>
                  <path
                    fill="#b5d3ff"
                    d="M-2345.232 204.469a50 50 0 00-11.062 69.84l80.902-58.779a50 50 0 00-69.84-11.061z"
                    display="inline"
                  ></path>
                  <path
                    fill="#fff"
                    d="M-2328.219 202.826a5.123 3.894 8.175 00-4.172 1.71 5.374 4.135 8.58 00-2.697-1.1 5.374 4.135 8.58 00-6.043 3.168 5.374 4.135 8.58 00.217 1.876 5.42 3.262 0 00-2 2.53 5.42 3.262 0 005.42 3.261 5.42 3.262 0 003.795-.937 5.123 3.894 8.175 002.008.687 5.123 3.894 8.175 004.359-.886 4.221 3.511 12.49 002.67 1.453 4.221 3.511 12.49 00.836.082 4.221 3.511 12.49 003.894-2.781 4.221 3.511 12.49 00-3.033-4.096 5.123 3.894 8.175 00.047-.197 5.123 3.894 8.175 00-4.342-4.678 5.123 3.894 8.175 00-.959-.092zm30.46 4.848a4.013 2.703 0 00-3.944 2.207 3.473 2.703 0 00-1.824-.406 3.473 2.703 0 00-3.473 2.703 3.473 2.703 0 00.041.402 3.383 2.703 0 00-.574-.04 3.383 2.703 0 00-3.383 2.702 3.383 2.703 0 002.115 2.504 3.293 2.703 0 000 .02 3.293 2.703 0 003.293 2.703 3.293 2.703 0 002.41-.867 3.293 2.703 0 002.996 1.587 3.293 2.703 0 002.887-1.402 4.432 4.776 0 002.758 1.041 4.432 4.776 0 004.432-4.775 4.432 4.776 0 00-3.971-4.748 4.013 2.703 0 00.25-.928 4.013 2.703 0 00-4.012-2.703zm-47.052 24.172a7.511 3.454 0 00-7.445 3.023 6.15 3.268 0 00-3.172-.473 6.15 3.268 0 00-6.15 3.268 6.15 3.268 0 002.863 2.76 6.63 3.268 0 00-.629 1.38 6.63 3.268 0 004.315 3.06 5.831 3.268 0 00-.485 1.3 5.831 3.268 0 005.832 3.268 5.831 3.268 0 005.639-2.453 7.848 5.774 0 004.676 1.144 7.848 5.774 0 007.848-5.773 7.848 5.774 0 00-6.407-5.672 7.511 3.454 0 00.627-1.377 7.511 3.454 0 00-7.512-3.455z"
                    display="inline"
                  ></path>
                  <path
                    fill="#ff8516"
                    d="M-2332.188 205.874a.788.788 0 00-.648.319l-2.559 3.447a16.288 16.288 0 016.057-1.176 16.288 16.288 0 011.111.057l-3.52-2.5a.788.788 0 00-.44-.147zm9.368.992a.788.788 0 00-.268.065l-3.963 1.715a16.288 16.288 0 016.78 2.582l-1.786-3.903a.788.788 0 00-.683-.459.788.788 0 00-.08 0zm-18.047 2.866a.788.788 0 00-.78.697l-.494 4.285a16.288 16.288 0 015.631-4.574l-4.28-.406a.788.788 0 00-.077-.002zm11.53.449a14.572 14.572 0 00-14.571 14.57 14.572 14.572 0 0014.57 14.572 14.572 14.572 0 0014.572-14.572 14.572 14.572 0 00-14.572-14.57zm10.038 1.767a16.288 16.288 0 014.574 5.633l.407-4.281a.788.788 0 00-.696-.857l-4.285-.495zm-23.562 3.739l-3.903 1.785a.788.788 0 00-.394 1.03l1.715 3.96a16.288 16.288 0 012.582-6.775zm28.636 3.008a16.288 16.288 0 011.176 6.058 16.288 16.288 0 01-.055 1.108l2.498-3.518a.788.788 0 00-.172-1.09l-3.447-2.558zm-31.345 4.95a16.288 16.288 0 000 .005v-.004zm0 .005l-2.498 3.511a.788.788 0 00.172 1.09l3.447 2.559a16.288 16.288 0 01-1.176-6.057 16.288 16.288 0 01.055-1.103zm32.34 3.39a16.288 16.288 0 01-2.582 6.778l3.902-1.785a.788.788 0 00.394-1.03l-1.714-3.963zm-30.72 4.885l-.405 4.28a.788.788 0 00.695.857l4.285.494a16.288 16.288 0 01-4.574-5.63zm27.417 2.865a16.288 16.288 0 01-5.631 4.575l4.28.406a.788.788 0 00.857-.696l.494-4.285zm-21.87 3.487l1.786 3.902a.788.788 0 001.03.395l3.962-1.715a16.288 16.288 0 01-6.777-2.582zm15.122 1.588a16.288 16.288 0 01-6.057 1.175 16.288 16.288 0 01-1.103-.056l3.513 2.5a.788.788 0 001.09-.172l2.557-3.447z"
                    display="inline"
                  ></path>
                  <path
                    fill="#efed81"
                    stroke="none"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="4"
                    strokeOpacity="1"
                    strokeWidth="2"
                    d="M-2281.467 227.066l-.32 1.934-1.934.318 1.934.32.32 1.934.319-1.933 1.933-.32-1.933-.319-.319-1.934zm9.5 9.5l-.566 3.438-3.438.564 3.438.567.566 3.437.565-3.437 3.437-.567-3.437-.564-.565-3.438zm-22.79 6.413a.5.5 0 00-.474.693 18.438 18.438 0 011.143 10.299c-1.768 10.03-11.314 16.717-21.338 14.95a18.403 18.403 0 01-4.418-1.394.5.5 0 00-.652.688 18.826 18.826 0 0013.346 9.703c10.234 1.805 20.008-5.043 21.814-15.283a18.841 18.841 0 00-9.182-19.59.5.5 0 00-.238-.066zm-14.7 3.105l-.338 2.049-2.047.336 2.047.338.338 2.047.338-2.047 2.047-.338-2.047-.336-.338-2.049zm33.24 7.027l-.312 1.897-1.897.31 1.897.313.312 1.896.31-1.896 1.897-.313-1.896-.31-.31-1.897zm-64.806 18.743l-.424 2.578-2.578.425 2.578.424.424 2.578.425-2.578 2.578-.424-2.578-.425-.425-2.578zm15.742 6.373l-.778 4.724-4.724.78 4.724.777.778 4.724.779-4.724 4.725-.778-4.725-.779-.78-4.724zm28.553 3.744l-.313 1.894-1.896.313 1.896.312.313 1.897.31-1.897 1.897-.312-1.897-.313-.31-1.894z"
                    display="inline"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </Html>
    </>
  );
};

export default Scene;
