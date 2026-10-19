import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';
import * as THREE from 'three';

/* Trending 3D: isometric wireframe massing model — the "building being
   designed". Slow rotation + Motion scroll parallax (no raw listeners),
   lazy-loaded, zero drei dependency (drei v10 Line breaks on three latest),
   static SVG fallback under reduced motion. */

function Column({ position, color }: { position: [number, number, number]; color: string }) {
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -2.2, 0),
      new THREE.Vector3(0, 1.4, 0),
    ]);
    return g;
  }, []);
  return (
    <lineSegments position={position}>
      <primitive object={geo} attach="geometry" />
      <lineBasicMaterial color={color} transparent opacity={0.4} />
    </lineSegments>
  );
}

function Massing({ tilt }: { tilt: MotionValue<number> }) {
  const group = useRef<THREE.Group>(null!);
  const frameGeo = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(2.2, 2.6, 1.6)), []);
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, 0.35 + tilt.get() * 0.5, 0.05);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
  });
  const copper = '#a35e28';
  const line = '#d9cfbb';
  const cols: Array<[number, number, number]> = [];
  for (const x of [-0.9, -0.3, 0.3, 0.9]) for (const z of [-0.6, 0.6]) cols.push([x, 0, z]);
  return (
    <group ref={group} scale={1.1}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, i * 0.62 - 0.9, 0]}>
          <boxGeometry args={[2.2 - i * 0.18, 0.5, 1.6 - i * 0.12]} />
          <meshStandardMaterial color={copper} transparent opacity={0.16} roughness={0.4} />
        </mesh>
      ))}
      <lineSegments geometry={frameGeo}>
        <lineBasicMaterial color={line} transparent opacity={0.85} />
      </lineSegments>
      <mesh position={[1.7, -1.1, 0.3]}>
        <boxGeometry args={[1.1, 0.7, 1.1]} />
        <meshStandardMaterial color={copper} transparent opacity={0.22} roughness={0.4} />
      </mesh>
      {cols.map(([x, y, z]) => (
        <Column key={`${x}${z}`} position={[x, y, z]} color={line} />
      ))}
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
      <div className="grid h-64 place-items-center lg:h-72" aria-label="Building massing diagram (static)">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" stroke="currentColor" aria-hidden>
          <rect x="60" y="90" width="80" height="60" />
          <rect x="70" y="60" width="60" height="30" />
          <rect x="80" y="35" width="40" height="25" />
          <line x1="20" y1="150" x2="180" y2="150" />
        </svg>
      </div>
    );
  }
  return (
    <motion.div style={{ y: parallax }} className="h-64 overflow-hidden lg:h-72" aria-hidden>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [4.2, 2.4, 5.2], fov: 42 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 8, 4]} intensity={1.4} />
          <Massing tilt={tilt} />
        </Canvas>
      </Suspense>
    </motion.div>
  );
}

