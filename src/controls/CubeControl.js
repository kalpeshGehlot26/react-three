import { useFrame } from "@react-three/fiber";
import { RigidBody, usePrismaticJoint } from "@react-three/rapier";
import { useRef } from "react";

const Vehicle = () => {
  // const controls = useRigidBodyControls();
  const vehicleRef = useRef();
  const wheel1 = useRef();

  const wheelOffset = [1, 0, 1]; // [x, y, z]
  const frontWheelDistance = 2;
  const rearWheelDistance = 2;

  const frontLeftWheelJoint = usePrismaticJoint(
    wheel1,
    vehicleRef,
    [
      wheelOffset,

      [0, 0, -frontWheelDistance],
      [0, 1, 0], // axis of movement (y-axis)
      [0, 0, 1],
    ] // axis of rotation (z-axis)
  );

  // const frontRightWheelJoint = usePrismaticJoint(
  //   frontRightWheelRef,
  //   chassisRef,
  //   wheelOffset,
  //   [0, 0, -frontWheelDistance],
  //   [0, 1, 0],
  //   [0, 0, 1]
  // );

  // const rearLeftWheelJoint = usePrismaticJoint(
  //   rearLeftWheelRef,
  //   chassisRef,
  //   wheelOffset,
  //   [0, 0, rearWheelDistance],
  //   [0, 1, 0],
  //   [0, 0, 1]
  // );

  // const rearRightWheelJoint = usePrismaticJoint(
  //   rearRightWheelRef,
  //   chassisRef,
  //   wheelOffset,
  //   [0, 0, rearWheelDistance],
  //   [0, 1, 0],
  //   [0, 0, 1]
  // );

  return (
    <>
      <RigidBody
        ref={vehicleRef}
        type="Dynamic"
        position={[0, 2, 0]}
        // shape={{ type: "Box", halfExtents: [1, 0.25, 2] }}
        mass={100}
        collisionGroup={1}
        collisionMask={2}
      >
        <mesh>
          <boxGeometry args={[1, 0.25, 2]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </RigidBody>
      <RigidBody
        ref={wheel1}
        type="Dynamic"
        position={[-1, 1, 1]}
        mass={20}
        collisionGroup={1}
        collisionMask={2}
      >
        <mesh>
          <sphereGeometry args={[0.5]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </RigidBody>
      <RigidBody
        type="Dynamic"
        position={[1, 1, 1]}
        shape={{ type: "Sphere", radius: 0.5 }}
        mass={20}
        collisionGroup={1}
        collisionMask={2}
      >
        <mesh>
          <sphereGeometry args={[0.5]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </RigidBody>
      <RigidBody
        type="Dynamic"
        position={[-1, 1, -1]}
        mass={20}
        collisionGroup={1}
        collisionMask={2}
      >
        <mesh>
          <sphereGeometry args={[0.5]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </RigidBody>
      <RigidBody
        type="Dynamic"
        position={[1, 1, -1]}
        mass={20}
        collisionGroup={1}
        collisionMask={2}
      >
        <mesh>
          <sphereGeometry args={[0.5]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Vehicle;
