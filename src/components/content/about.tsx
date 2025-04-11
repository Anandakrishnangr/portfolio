'use client';
import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import BackImage from './card back black.png'
import FrontImage from './j.png'

const SDCard = () => {
  const frontTexture = useLoader(THREE.TextureLoader, FrontImage.src);
  const backTexture = useLoader(THREE.TextureLoader, BackImage.src);
  const materials = [
    new THREE.MeshStandardMaterial({ color: '#33311' }), // right
    new THREE.MeshStandardMaterial({ color: '#33334' }), // left
    new THREE.MeshStandardMaterial({ color: '#AAAAAA' }), // top
    new THREE.MeshStandardMaterial({ color: '#33aa3' }), // bottom
    new THREE.MeshStandardMaterial({ map: frontTexture }), // front (blue)
    new THREE.MeshStandardMaterial({ map: backTexture }), // back (red)
  ];
  return (
    <Canvas camera={{ position: [1, 10, 15] }} className='bg-background-light dark:bg-background-dark' >
      <ambientLight intensity={1} />
      <pointLight position={[1, 1, 1]} castShadow={true} />
      <OrbitControls />
      <group>
        <mesh material={materials}>
          <boxGeometry args={[2.5, 3.5, 0.001]} />
        </mesh>
      </group>
    </Canvas>
  );
};

const Frame = () => {
  return <SDCard />;
}

export default Frame;
