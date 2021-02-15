import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { MeshProps, useLoader, useFrame } from 'react-three-fiber';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import WebsocketClient from '../../lib/websocketClient';

const Car: React.FunctionComponent<MeshProps> = (props) => {
  const mixer = useRef<THREE.AnimationMixer>();
  const gltf = useLoader(GLTFLoader, '/car.gltf');

  useEffect(() => {
    if (gltf) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);
      //      const action = mixer.current.clipAction(gltf.animations[0])
      console.log(gltf.animations);
      //    action.play()
    }
  }, [gltf]);

  useFrame(({ clock }) => mixer.current && mixer.current.update(clock.getDelta()));
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;

  // const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);

  // console.log(WebsocketClient);

  // useFrame(() => {
  //   const m = mesh as any; // TODO: what's the proper type here?
  //   m.current.rotation.x = m.current.rotation.y += 0.01;
  // });

  // return (
  // <mesh
  //   {...props}
  //   ref={mesh}
  //   scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
  //   onClick={(_event): void => setActive(!active)}
  //   onPointerOver={(_event): void => setHover(true)}
  //   onPointerOut={(_event): void => setHover(false)}
  // >
  //   <boxBufferGeometry args={[1, 1, 1]} />
  //   <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  // </mesh>
  // );
};

export default Car;
