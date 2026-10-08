import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* Real 3D point cloud replacing the previous 2D canvas particle sim.
   Copper/sand palette; wireframe core suggests reconstructed geometry. */
const Cloud = ({ count = 1200, reduced }) => {
  const ref = useRef();
  const core = useRef();

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const copper = new THREE.Color('#E8853B');
    const sand = new THREE.Color('#B3A188');
    const deep = new THREE.Color('#B45A1E');
    for (let i = 0; i < count; i++) {
      const r = 1.9 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) * 0.72;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      const roll = Math.random();
      const c = roll < 0.55 ? copper : roll < 0.8 ? sand : deep;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      if (!reduced) ref.current.rotation.y += delta * 0.06;
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        state.pointer.y * 0.12,
        0.03
      );
    }
    if (core.current && !reduced) {
      core.current.rotation.y -= delta * 0.04;
      core.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          vertexColors
          sizeAttenuation
          transparent
          opacity={0.92}
        />
      </points>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial wireframe color="#6E5F53" transparent opacity={0.35} />
      </mesh>
    </>
  );
};

const PointCloud3D = () => {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <div className="pointcloud3d" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 5.4], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <Cloud reduced={reduced} />
      </Canvas>
    </div>
  );
};

export default PointCloud3D;
