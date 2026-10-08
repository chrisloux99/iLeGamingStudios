import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, Float } from '@react-three/drei';
import * as THREE from 'three';

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
};

/* The signature element: a slow-turning metallic copper torus-knot —
   the Copperbelt rendered as sculpture. Warm Lightformers only (offline-safe). */
const CopperSculpture = ({ reduced }) => {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduced) {
      group.current.rotation.y += delta * 0.16;
    }
    // gentle mouse parallax on tilt
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.22,
      0.04
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      state.pointer.x * 0.1,
      0.04
    );
  });

  return (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[1.18, 0.4, 260, 40]} />
        <meshStandardMaterial
          color="#B45A1E"
          metalness={1}
          roughness={0.22}
          envMapIntensity={1.5}
        />
      </mesh>
    </group>
  );
};

/* Small floating copper shards orbiting the sculpture. */
const Shards = ({ reduced }) => {
  const shards = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => {
        const angle = (i / 9) * Math.PI * 2;
        const radius = 2.5 + (i % 3) * 0.45;
        return {
          key: i,
          position: [
            Math.cos(angle) * radius,
            ((i * 37) % 100) / 100 * 2.6 - 1.3,
            Math.sin(angle) * radius,
          ],
          scale: 0.07 + ((i * 53) % 100) / 100 * 0.15,
          speed: 0.6 + ((i * 29) % 100) / 100,
        };
      }),
    []
  );

  return (
    <>
      {shards.map((s) => (
        <Float
          key={s.key}
          speed={reduced ? 0 : s.speed}
          rotationIntensity={1.4}
          floatIntensity={1.6}
        >
          <mesh position={s.position} scale={s.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#E8853B"
              metalness={1}
              roughness={0.3}
              envMapIntensity={1.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const Hero3D = () => {
  const reduced = useReducedMotion();

  return (
    <div className="hero3d" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.15, 6.4], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.35} />
        <CopperSculpture reduced={reduced} />
        <Shards reduced={reduced} />
        <Environment resolution={256}>
          <Lightformer intensity={2.4} position={[0, 3.5, 4]} scale={[7, 3, 1]} color="#FFE8D0" />
          <Lightformer intensity={1.6} position={[-4.5, 0, 2]} rotation-y={Math.PI / 2} scale={[5, 2.5, 1]} color="#E8853B" />
          <Lightformer intensity={1.1} position={[4.5, -0.5, 2]} rotation-y={-Math.PI / 2} scale={[5, 2.5, 1]} color="#F2A65A" />
          <Lightformer intensity={0.5} position={[0, -3, 1]} scale={[6, 2, 1]} color="#3A2415" />
        </Environment>
      </Canvas>
    </div>
  );
};

export default Hero3D;
