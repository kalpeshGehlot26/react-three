import React, { useContext } from "react";
import { AppContext } from "../../App";

const Controls = () => {
  const { dispatchControlEvents } = useContext(AppContext);

  const handleCameraChange = (e) => {
    dispatchControlEvents("CHANGE_CAMERA", { camera: e.target.value });
  };

  const handleSceneChange = (e) => {
    dispatchControlEvents("CHANGE_SCENE", { scene: e.target.value });
  };

  const handleMoveWithTrain = (e) => {
    dispatchControlEvents("CHANGE_CAMERA", {
      camera: e.target.value,
      moveWithTrain: e.target.checked,
    });
  };

  return (
    <div className="controls">
      Change Camera
      <select onChange={handleCameraChange}>
        <option value={"top"}>Top</option>
        <option value={"insideTrain"}>Inside Train</option>
        <option value={"orthographic"}>Orthographic</option>
      </select>
      Change Scene
      <select onChange={handleSceneChange}>
        <option value={"temple"}>Temple</option>
        <option value={"railwayStation"}>Railway Station</option>
      </select>
      Move With Train
      <input type="checkbox" onChange={handleMoveWithTrain} />
    </div>
  );
};

export default Controls;
