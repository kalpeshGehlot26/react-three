import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import {
  KeyboardControls,
  OrbitControls,
  PointerLockControls,
} from "@react-three/drei";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <KeyboardControls
    map={[
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "backward", keys: ["ArrowDown", "KeyS"] },
      { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
      { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      { name: "jump", keys: ["Space"] },
    ]}
  >
    <Canvas shadows>
      <OrbitControls
        minPolarAngle={Math.PI / 2.3}
        maxPolarAngle={Math.PI / 2.05}
        enableDamping={true}
        maxDistance={500}
      />
      <Physics>
        <App />
      </Physics>
      {/* <PointerLockControls/> */}
    </Canvas>
  </KeyboardControls>
);

reportWebVitals();
