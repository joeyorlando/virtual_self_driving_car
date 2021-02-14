import React from 'react';
import { Canvas } from 'react-three-fiber';
import Car from '../Car';

const App: React.FunctionComponent = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas className="bg-black">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Car position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default App;
