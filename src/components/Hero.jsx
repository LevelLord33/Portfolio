import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as random from 'maath/random/dist/maath-random.esm';
import './Hero.css';

// 3D Particles that float in the background
function StarField(props) {
  const ref = useRef();
  // Generate random points in a sphere
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f2fe"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

// 3D Central Geometric Object reacting to mouse movement
function InteractiveMesh() {
  const meshRef = useRef();
  
  // Track mouse coordinates directly from state
  useFrame((state) => {
    const { x, y } = state.pointer;
    
    // Smooth interpolation (lerp) for rotation/tilt based on mouse pointer
    meshRef.current.rotation.y = (x * Math.PI) / 6;
    meshRef.current.rotation.x = (-y * Math.PI) / 6;
    
    // Auto-spin logic combined with mouse movement
    meshRef.current.rotation.z += 0.005;
  });

  return (
    <group ref={meshRef}>
      {/* Outer wireframe octahedron */}
      <mesh>
        <octahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial color="#bd00ff" wireframe transparent opacity={0.3} />
      </mesh>
      
      {/* Inner glowing torus knot */}
      <mesh>
        <torusKnotGeometry args={[0.5, 0.15, 120, 16, 2, 3]} />
        <meshStandardMaterial 
          color="#00f2fe" 
          wireframe
          emissive="#00f2fe"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Floating orbital ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.02, 8, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* ThreeJS interactive background */}
      <div className="hero-canvas-container">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <directionalLight position={[-5, 5, 5]} intensity={1} color="#bd00ff" />
          <StarField />
          <InteractiveMesh />
        </Canvas>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <div className="hero-welcome">WELCOME TO MY PORTFOLIO</div>
          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">Hariharasudhan M</span>
          </h1>
          <h2 className="hero-title">Aspiring Software Developer</h2>
          <p className="hero-tagline">
            Third-year Computer Science & Engineering student at National Engineering College. Passionate about AI, 
            computational intelligence, and leveraging modern technology to solve real-world problems.
          </p>

          <div className="hero-ctas">
            <button onClick={() => handleScrollTo('projects')} className="glow-btn">
              View My Work
            </button>
            <button onClick={() => handleScrollTo('contact')} className="glow-btn-secondary">
              Let's Connect
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator" onClick={() => handleScrollTo('about')}>
        <span className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
}
