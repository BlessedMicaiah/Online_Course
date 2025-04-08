import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

// Import the ErrorBoundary component
import { ErrorBoundary } from './ThreeCanvas';

interface ThreeModelProps {
  className?: string;
}

export function ThreeModel({ className }: ThreeModelProps) {
  return (
    <div className={`${className || ''} w-full h-full`}>
      <ErrorBoundary fallback={<div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          {/* Simple sphere */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="#6366f1" metalness={0.5} roughness={0.2} />
          </mesh>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

export default ThreeModel;
