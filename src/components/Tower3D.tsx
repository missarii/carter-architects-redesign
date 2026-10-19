import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line } from '@react-three/drei';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';
import * as THREE from 'three';

/* Trending 3D: isometric wireframe massing model — the "building being
   designed". Slow rotation + Motion scroll parallax (no raw listeners),
   lazy-loaded, static SVG fallback under reduced motion. */

function Massing({ tilt }: { tilt: MotionValue<number> }) {
  const group = useRef<THREE.Group>(null!);
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, 0.35 + tilt.get() * 0.5, 0.05);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
  });
  const copper = '#a35e28';
  const line = '#d9cfbb';
  return (
    <group ref={group} scale={1.1}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, i * 0.62 - 0.9, 0]}>
          <boxGeometry args={[2.2 - i * 0.18, 0.5, 1.6 - i * 0.12]} />
          <meshStandardMaterial color={copper} transparent opacity={0.16} roughness={0.4} />
        </mesh>
      ))}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2.2, 2.6, 1.6)]} />
        <lineBasicMaterial color={line} transparent opacity={0.85} />
      </lineSegments>
      <mesh position={[1.7, -1.1, 0.3]}>
        <boxGeometry args={[1.1, 0.7, 1.1]} />
        <meshStandardMaterial color={copper} transparent opacity={0.22} roughness={0.4} />
      </mesh>
      {[-0.9, -0.3, 0.3, 0.9].map((x) =>
        [-0.6, 0.6].map((z) => (
          <Line key={`${x}${z}`} points={[[x, -2.2, z], [x, 1.4, z]]} color={line} transparent opacity={0.4} lineWidth={1} />
        )),
      )}
      <gridHelper args={[8, 16, line, line]} position={[0, -2.25, 0]} />
    </group>
  );
}

export default function Tower3D() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const tilt = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const parallax = useTransform(scrollYProgress, [0, 0.4], [0, 60]);
  if (reduce) {
    return (
      <div className="grid h-full min-h-[320px] place-items-center border border-current/15" aria-label="Building massing diagram (static)">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" aria-hidden>
          <rect x="60" y="90" width="80" height="60" />
          <rect x="70" y="60" width="60" height="30" />
          <rect x="80" y="35" width="40" height="25" />
          <line x1="20" y1="150" x2="180" y2="150" />
        </svg>
      </div>
    );
  }
  return (
    <motion.div style={{ y: parallax }} className="h-full min-h-[320px] lg:min-h-[420px]" aria-hidden>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [4.2, 2.4, 5.2], fov: 42 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 8, 4]} intensity={1.4} />
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
            <Massing tilt={tilt} />
          </Float>
        </Canvas>
      </Suspense>
    </motion.div>
  );
}

