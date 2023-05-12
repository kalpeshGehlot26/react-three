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
import "./assets/style.css";

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
    <audio loop id="music" preload="auto" style={{ display: "none" }}>
      <source src="sound/waves.mp3" type="audio/mp3" />
    </audio>

    <App />
  </KeyboardControls>
);

reportWebVitals();
