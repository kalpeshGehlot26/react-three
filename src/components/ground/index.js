import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { TextureLoader } from "three";

const Ground = () => {
  const groundTextureMap = useLoader(TextureLoader, "textures/ground.png");

  return (
    <>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.06, 0]}>
          <boxBufferGeometry args={[400, 400, 0.2]} />
          <meshStandardMaterial map={groundTextureMap}/>
        </mesh>
      </RigidBody>
    </>
  );
};

export default Ground;
