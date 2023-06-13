import { PerspectiveCamera, PositionalAudio } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { useLoader as useAudioLoader } from "react-three-fiber";

import * as THREE from "three";
import { AppContext } from "../../App";
import { TrainCoach } from "./coach";
import { TrainEngine } from "./engine";

const Train = (props) => {
  const { controls } = useContext(AppContext);
  const { camera } = useThree();

  const trainRef = useRef();
  const cameraRef = useRef();
  const audioRef = useRef();

  const [stopCamera, setStopCamera] = useState(false);

  useFrame(({ clock }) => {
    if (!stopCamera) {
      trainRef.current.position.x -= clock.elapsedTime * 0.01;
    }
    if (trainRef.current.position.x < -1500) {
      trainRef.current.position.x = 700;
    }
  });

  useEffect(() => {
    if (controls.camera === "insideTrain") {
      cameraRef.current.position.set(105.5, 19.6, -297);
    }
  }, [controls.camera, audioRef]);

  return (
    <>
      {/* {!controls.moveWithTrain && (
        <PerspectiveCamera
          ref={cameraRef}
          rotation={[0, 3.9, 0]}
          makeDefault
          position={[-20, 19.6, -350]}
        />
      )} */}
      <group ref={trainRef} {...props}>
        {/* {controls.moveWithTrain && (
          <PerspectiveCamera
            ref={cameraRef}
            rotation={[0, 180, 0]}
            makeDefault
            position={[-20, 19.6, -350]}
          />
        )} */}

        <mesh
          position={[27, 7.2, -314.8]}
          scale={3.1}
          rotation={[0, Math.PI / 2, 0]}
        >
          <PositionalAudio
            ref={audioRef}
            url="/sound/train-sound3.mp3"
            autoplay={true}
            volume={1}
            playbackRate={0.5}
          />

          <TrainEngine position={[0, 0, 0]} />
        </mesh>
        <mesh
          position={[100, 16.6, -294]}
          scale={2}
          rotation={[0, Math.PI / 2, 0]}
        >
          <PositionalAudio
            volume={1}
            url="/sound/train-sound2.mp3"
            autoplay={true}
            playbackRate={0.2}
          />
          <TrainCoach position={[0, 0, 0]} />
        </mesh>
        <mesh
          position={[160.5, 16.6, -294]}
          scale={2}
          rotation={[0, Math.PI / 2, 0]}
        >
          <PositionalAudio
            volume={1}
            url="/sound/train-sound.mp3"
            autoplay={true}
            playbackRate={0.9}
          />

          <TrainCoach position={[0, 0, 0]} />
        </mesh>
        <mesh
          position={[221, 16.6, -294]}
          scale={2}
          rotation={[0, Math.PI / 2, 0]}
        >
          <PositionalAudio
            volume={1}
            url="/sound/train-sound.mp3"
            autoplay={true}
            playbackRate={1}
          />

          <TrainCoach position={[0, 0, 0]} />
        </mesh>

        <mesh
          position={[281.5, 16.6, -294]}
          scale={2}
          rotation={[0, Math.PI / 2, 0]}
        >
          <PositionalAudio
            volume={1}
            url="/sound/train-sound.mp3"
            autoplay={true}
          />

          <TrainCoach position={[0, 0, 0]} />
        </mesh>
        <mesh
          position={[342, 16.6, -294]}
          scale={2}
          rotation={[0, Math.PI / 2, 0]}
        >
          <PositionalAudio
            volume={1}
            url="/sound/train-sound.mp3"
            autoplay={true}
            playbackRate={1}
          />

          <TrainCoach position={[0, 0, 0]} />
        </mesh>
        <mesh
          position={[402.5, 16.6, -294]}
          scale={2}
          rotation={[0, Math.PI / 2, 0]}
        >
          <PositionalAudio
            volume={1}
            url="/sound/train-sound.mp3"
            autoplay={true}
          />

          <TrainCoach position={[0, 0, 0]} />
        </mesh>
      </group>
    </>
  );
};

export default Train;
