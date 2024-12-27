import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
const Loader = () => {
  return (
    <Html center>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          color: 'white',
        }}
      >
        <Canvas style={{ width: 50, height: 50 }}>
          <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
        </Canvas>
        <p style={{ marginTop: 10 }}>Loading...</p>
      </div>
    </Html>
  );
};

export default Loader;
