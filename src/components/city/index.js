import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { TextureLoader } from "three";

const CityModel = () => {
  const buildingTexture = useLoader(
    TextureLoader,
    "textures/building-brick-texture.jpg"
  );
  const buildingTexture2 = useLoader(
    TextureLoader,
    "textures/building-texture.jpg"
  );
  return (
    <>
      <RigidBody type="fixed">
        <mesh position={[5, 2.5, 1]}>
          <boxBufferGeometry attach="geometry" args={[5, 5, 10]} />
          <meshBasicMaterial attach="material-0" map={buildingTexture} />
          <meshBasicMaterial attach="material-1" map={buildingTexture} />
          <meshBasicMaterial attach="material-2" />
          <meshBasicMaterial attach="material-3" map={buildingTexture} />
          <meshBasicMaterial attach="material-4" map={buildingTexture} />
          <meshBasicMaterial attach="material-5" map={buildingTexture} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed">
        <mesh position={[5, 5, -20]}>
          <boxBufferGeometry attach="geometry" args={[5, 10, 5]} />
          <meshBasicMaterial attach="material-0" map={buildingTexture2} />
          <meshBasicMaterial attach="material-1" map={buildingTexture2} />
          <meshBasicMaterial attach="material-2" />
          <meshBasicMaterial attach="material-3" map={buildingTexture2} />
          <meshBasicMaterial attach="material-4" map={buildingTexture2} />
          <meshBasicMaterial attach="material-5" map={buildingTexture2} />
        </mesh>
      </RigidBody>
    </>
  );
};

export default CityModel;
