import React, { useRef, useState } from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
import WebsocketClient from '../../lib/websocketClient';

const Car: React.FunctionComponent<MeshProps> = (props) => {
  const mesh = useRef<THREE.Mesh>();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  console.log(WebsocketClient);

  useFrame(() => {
    const m = mesh as any; // TODO: what's the proper type here?
    m.current.rotation.x = m.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(_event): void => setActive(!active)}
      onPointerOver={(_event): void => setHover(true)}
      onPointerOut={(_event): void => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Car;
