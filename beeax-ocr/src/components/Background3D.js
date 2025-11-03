import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating hexagon component
function FloatingHexagon({ position, scale, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <cylinderGeometry args={[1, 1, 0.2, 6]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.1}
          speed={2}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Honey particle system
function HoneyParticles() {
  const particlesRef = useRef();
  const particleCount = 50;
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        scale: Math.random() * 0.5 + 0.1,
        color: new THREE.Color(`hsl(${45 + Math.random() * 20}, 100%, ${70 + Math.random() * 20}%)`)
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <FloatingHexagon
          key={index}
          position={particle.position}
          scale={particle.scale}
          color={particle.color}
        />
      ))}
    </group>
  );
}

// Main background scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} color="#FFD572" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#FFC947" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#F6E1B8" />
      
      {/* Particle system */}
      <HoneyParticles />
      
      {/* Ground plane for reflections */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshDistortMaterial
          color="#F6E1B8"
          distort={0.05}
          speed={1}
          roughness={0.8}
          metalness={0.1}
          opacity={0.3}
          transparent
        />
      </mesh>
      
      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

const Background3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #F6E1B8 0%, #F0D5A8 100%)' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Background3D;