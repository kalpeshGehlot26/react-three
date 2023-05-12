import React, { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Debug, Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";

import { createContext } from "react";
import Scene from "./scene";
import Controls from "./components/controls";
export const AppContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [controls, setControls] = useState({
    camera: "",
    scene: "temple",
    moveWithTrain: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const dispatchControlEvents = (actionType, payload) => {
    switch (actionType) {
      case "CHANGE_CAMERA":
        setControls((prevState) => ({
          ...prevState,
          ...payload,
          camera: payload.camera,
        }));
        return;
      case "CHANGE_SCENE":
        setControls((prevState) => ({
          ...prevState,
          ...payload,
          scene: payload.scene,
        }));
        return;
      default:
        return;
    }
  };

  return (
    <Suspense>
      <AppContext.Provider value={{ controls, dispatchControlEvents }}>
        {/* <Controls /> */}

        {loading ? (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>Loading....</div>
          </div>
        ) : (
          <Canvas shadows>
            <OrbitControls
              minPolarAngle={Math.PI / 2.3}
              maxPolarAngle={Math.PI / 2.05}
              enableDamping={true}
              maxDistance={100}
            />
            <Physics>
              <Scene />
            </Physics>
          </Canvas>
        )}
      </AppContext.Provider>
    </Suspense>
  );
};

export default App;
