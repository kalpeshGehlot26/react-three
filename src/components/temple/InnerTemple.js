import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const InnerTemple = (props) => {
  const { nodes, materials } = useGLTF("models/hindu_temple.glb");

  const texture = useLoader(TextureLoader, "textures/texture.png");
  useEffect(() => {
    delete materials.big_tomb.map;
    delete materials.bigtomb.map;
    delete materials.temple_top_design.map;
    delete materials.temple_outter.map;
    // delete materials.temple_ground.map;
    delete materials.Stairs.map;
    delete materials.mid_fllor.map;
    delete materials.pillar.map;
    delete materials.temple_ground.map;
    delete materials.floor.map;
    delete materials["small_tomb.001"].map;
    // delete nodes.Plane_16

    // delete materials.temple_outter.map;
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={10.22}>
            <group position={[0, 0.19, 0]} scale={0.34}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_27.geometry}
                material={materials.floor}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_28.geometry}
                material={materials.top_floor}
              />
            </group>
            <group position={[-0.03, 0.36, 0.01]} scale={0.15}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_15.geometry}
                // material={materials.temple_ground}
              >
              <meshStandardMaterial map={texture} color="orange"/>
              </mesh>
            </group>
            <group position={[0, 0.14, 0]}>
              <group position={[0, 0.5, 0.6]} scale={[1, 0.5, 0.7]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  // material={materials.mid_fllor}
                >
                  <meshStandardMaterial
                    color={"orange"}
                    map={texture}
                    side={0}
                  />
                </mesh>
              </group>
              <group position={[0, 0.5, 0.6]} scale={[0.8, 0.5, 1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  // material={materials.mid_fllor}
                >
                  <meshStandardMaterial
                    color={"orange"}
                    map={texture}
                    side={0}
                  />
                </mesh>
              </group>
              <group position={[0, 0.5, 0.5]} scale={[0.4, 0.5, 1.3]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  // material={materials.mid_fllor}
                >
                  <meshStandardMaterial
                    color={"orange"}
                    map={texture}
                    side={0}
                  />
                </mesh>
              </group>

              <group position={[0, 0.5, 0.6]} scale={[1, 0.5, 0.7]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  // material={materials.mid_fllor}
                >
                  <meshStandardMaterial
                    color={"orange"}
                    map={texture}
                    side={0}
                  />
                </mesh>
              </group>

              <group
                position={[0, 0.76, 0.1]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.04, 0.07, 0.04]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.bigtomb}
                >
                  <meshStandardMaterial
                    color={"orange"}
                    map={texture}
                    side={0}
                  />
                </mesh>
              </group>
              <group position={[0, 0.22, -0.02]} scale={0.02}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.linga}
                />
              </group>
              <group
                position={[0, 0.76, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.05, 0.1, 0.05]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.bigtomb}
                >
                  <meshStandardMaterial
                    color={"orange"}
                    map={texture}
                    side={0}
                  />
                </mesh>
              </group>

              {/* --------------- */}
              <group>
                <group position={[0.2, 0, 0.1]}>
                  <group
                    position={[0, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                  <group
                    position={[0.12, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                </group>
                <group position={[-0.31, 0, 0.1]}>
                  <group
                    position={[0, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                  <group
                    position={[0.12, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                </group>
              </group>

              <group scale={1.2} position={[0, -0.1, -0.38]}>
                <group position={[0.2, 0, 0.1]}>
                  <group
                    position={[0, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                  <group
                    position={[0.12, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                </group>
                <group position={[-0.31, 0, 0.1]}>
                  <group
                    position={[0, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                  <group
                    position={[0.12, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                </group>
              </group>

              <group scale={1.4} position={[0, -0.2, -0.78]}>
                <group position={[0.2, 0, 0.1]}>
                  <group
                    position={[0, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                  <group
                    position={[0.12, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                </group>
                <group position={[-0.31, 0, 0.1]}>
                  <group
                    position={[0, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                  <group
                    position={[0.12, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                </group>
              </group>

              <group scale={1.6} position={[0, -0.3, -1.2]}>
                <group position={[0.2, 0, 0.1]}>
                  <group
                    position={[0, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                  <group
                    position={[0.12, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                </group>
                <group position={[-0.31, 0, 0.1]}>
                  <group
                    position={[0, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                  <group
                    position={[0.12, 0.6, 1.3]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.01, 0.03, 0.01]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                    >
                      <meshStandardMaterial
                        color={"orange"}
                        map={texture}
                        side={0}
                      />
                    </mesh>
                  </group>
                </group>
              </group>

              {/* ---------------- */}

              <group position={[0, 1.6, 0]} scale={[0.35, 0.5, 0.35]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.linga}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                >
                  <meshStandardMaterial
                    color={"orange"}
                    map={texture}
                    side={0}
                  />
                </mesh>
              </group>

              <group position={[0, 1.1, 0.7]} scale={[0.3, 0.3, 0.3]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.linga}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                >
                  <meshStandardMaterial
                    color={"orange"}
                    map={texture}
                    side={0}
                  />
                </mesh>
              </group>

              <group position={[0.5, 0.9, 0.7]} scale={[0.2, 0.15, 0.2]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.linga}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                >
                  <meshStandardMaterial
                    color={"orange"}
                    map={texture}
                    side={0}
                  />
                </mesh>
              </group>
              <group position={[-0.5, 0.9, 0.7]} scale={[0.2, 0.15, 0.2]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.linga}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                >
                  <meshStandardMaterial
                    color={"orange"}
                    map={texture}
                    side={0}
                  />
                </mesh>
              </group>

              <group position={[0, 0.9, 0]} scale={[0.1, 0.25, 0.1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.temple_top_design}
                />
              </group>

              <group
                position={[0, 0.9, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.1, 0.25, 0.1]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.temple_top_design}
                />
              </group>
              <group
                position={[0, 0.54, 0]}
                rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
                scale={0.01}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials.statue}
                />
              </group>
              <group
                position={[0, 0.54, 0]}
                rotation={[0, -0.73, 0]}
                scale={0.01}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.statue}
                />
              </group>
              {/* <group position={[0, 0.09, 0]} scale={[0.07, 0, 0.07]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.Stairs}
                />
              </group> */}
            </group>

            {/* <group position={[0, 0.5, 0.6]} scale={[0.8, 0.5, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_30.geometry}
                // material={materials.mid_fllor}
              >
                <meshStandardMaterial color={"orange"} map={texture} side={0} />
              </mesh>
            </group>
            <group position={[0, 0.15, 0.5]} scale={[1.5, 0.3, 1.8]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_30.geometry}
                // material={materials.mid_fllor}
              >
                <meshStandardMaterial color={"orange"} map={texture} side={0} />
              </mesh>
            </group>

            <group position={[0, 0.5, 0.5]} scale={[0.4, 0.5, 1.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_30.geometry}
                // material={materials.mid_fllor}
              >
                <meshStandardMaterial color={"orange"} map={texture} side={0} />
              </mesh>
            </group> */}

            <group position={[0, 0.5, 0.6]} scale={[1, 0.5, 0.7]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_30.geometry}
                // material={materials.mid_fllor}
              >
                <meshStandardMaterial color={"orange"} map={texture} side={0} />
              </mesh>
            </group>
            <group position={[0, 0.29, 0]} scale={0.027}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_32.geometry}
              >
                <meshStandardMaterial color={"orange"} map={texture} side={0} />
              </mesh>
            </group>

            <group position={[0.5, 0.29, 0]} scale={0.027}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_32.geometry}
              >
                <meshStandardMaterial color={"orange"} map={texture} side={0} />
              </mesh>
            </group>

            <group position={[-0.5, 0.29, 0]} scale={0.027}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_32.geometry}
              >
                <meshStandardMaterial color={"orange"} map={texture}  />
              </mesh>
            </group>

            <group position={[0.5, 0.29, 0.75]} scale={0.027}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_32.geometry}
              >
                <meshStandardMaterial color={"orange"} map={texture}  />
              </mesh>
            </group>

            <group position={[-0.5, 0.29, 0.75]} scale={0.027}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_32.geometry}
              >
                <meshStandardMaterial color={"orange"} map={texture}  />
              </mesh>
            </group>

            

            <group
              position={[0.12, 0.79, 1.76]}
              rotation={[0, -Math.PI / 6, 0]}
              scale={0.003}
            >
              {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_34.geometry}
                material={materials["small_tomb.001"]}
              >
                <meshStandardMaterial color={"orange"} map={texture} side={0} />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_35.geometry}
                material={materials["small_tomb.001"]}
              >
                <meshStandardMaterial color={"orange"} map={texture} side={0} />
              </mesh> */}
            </group>
            <group position={[0, 0.59, 0]} scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_37.geometry}
                material={materials.statue}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.material_0}
            />
          </group>

          <group position={[0.22, 2.21, 9.28]} scale={[0.4, 2.17, 0.4]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_39.geometry}
              material={materials.pillar_bell}
            />
          </group>
          <group position={[0.22, 2.82, 9.28]} scale={[0.4, 2.17, 0.4]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_41.geometry}
              material={materials.BASE_PILLAR}
            />
          </group>
          <group position={[0.22, 2.82, 9.28]} scale={[0.4, 2.17, 0.4]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_43.geometry}
              material={materials.base_illar2}
            />
          </group>
          <group position={[0.22, 8.04, 9.28]} scale={[1.42, 1, 0.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials.big_tomb}
            />
          </group>
          <group position={[-1.72, 7.49, 9.28]} scale={0.45}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_47.geometry}
              material={materials.small_tomb}
            >
              <meshStandardMaterial color={"orange"} map={texture} side={0} />
            </mesh>
          </group>
          {/* <group position={[0.22, 2.21, 9.28]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={materials.bell}
            />
          </group> */}
          {/* <group
            position={[0.22, 5.89, 9.28]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_51.geometry}
              material={materials.metal_chain}
            />
          </group> */}
          {/* <group
            position={[0.22, 4.29, 9.28]}
            rotation={[Math.PI / 2, 0, 2.42]}
            scale={0.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_53.geometry}
              material={materials.metal_chain}
            />
          </group> */}
          {/* <group position={[0.22, 2.39, 9.28]} scale={0.16}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.ball}
            />
          </group> */}
          {/* <group
            position={[0.22, 2.2, 9.28]}
            rotation={[Math.PI / 2, 0, -2.22]}
            scale={0.08}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_57.geometry}
              material={materials.metal_chain}
            />
          </group>
          <group
            position={[0.22, 2.61, 9.28]}
            rotation={[Math.PI / 2, 0, 3.01]}
            scale={0.08}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={materials.metal_chain}
            />
          </group> */}
          {/* <group position={[-12.77, 0, 9.28]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_61.geometry}
              material={materials.metal_chain}
            />
          </group>
          <group
            position={[0.22, 3.36, 9.28]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.01, 0.71, 0.01]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={materials.rope}
            />
          </group> */}
          {/* <group
            position={[0.22, 2.04, 9.28]}
            rotation={[0, -0.96, -Math.PI]}
            scale={[0.01, 0.71, 0.01]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_65.geometry}
              material={materials.rope}
            />
          </group> */}
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("models/hindu_temple.glb");
export default InnerTemple;
