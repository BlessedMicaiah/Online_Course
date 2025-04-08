import React from 'react';
import { Canvas } from '@react-three/fiber';

interface ThreeCanvasProps {
  className?: string;
}

// Simple error boundary component
export class ErrorBoundary extends React.Component<{children: React.ReactNode, fallback: React.ReactNode}> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: any, info: any) {
    console.error("Three.js error caught:", error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function ThreeCanvas({ className }: ThreeCanvasProps) {
  return (
    <div className={`${className || ''} w-full h-full`}>
      <ErrorBoundary fallback={<div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          
          {/* Simple cube */}
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#6366f1" metalness={0.5} roughness={0.2} />
          </mesh>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

export default ThreeCanvas;
