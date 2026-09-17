import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  type Group,
  type Mesh,
} from "three";

const teal = new Color("#007979");
const bright = new Color("#24B1B1");
const peach = new Color("#FFE0C5");
const cream = new Color("#FFF0E4");
const camera = { position: [0, 0, 6.2] as [number, number, number], fov: 42 };
const glConfig = { antialias: true, alpha: true, powerPreference: "high-performance" as const };
const dpr: [number, number] = [1, 1.5];

function handleCreated({ gl }: { gl: { setClearColor: (color: number, alpha: number) => void } }) {
  gl.setClearColor(0x000000, 0);
}

function Network() {
  const group = useRef<Group>(null);
  const nodes = useMemo(() => {
    return Array.from({ length: 26 }, (_, i) => ({
      x: Math.sin(i * 1.7) * 2.6 + (i % 3) * 0.18,
      y: Math.cos(i * 1.1) * 1.7,
      z: Math.sin(i * 0.8) * 1.4,
      r: 0.06 + (i % 5) * 0.016,
      color: [teal, bright, peach, cream][i % 4],
    }));
  }, []);

  const lineGeom = useMemo(() => {
    const positions: number[] = [];
    nodes.forEach((node, index) => {
      const next = nodes[(index + 4) % nodes.length];
      positions.push(node.x, node.y, node.z, next.x, next.y, next.z);
    });
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geometry;
  }, [nodes]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.08;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.12;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeom}>
        <lineBasicMaterial color={bright} transparent opacity={0.38} />
      </lineSegments>
      {nodes.map((node, index) => (
        <mesh key={index} position={[node.x, node.y, node.z]}>
          <sphereGeometry args={[node.r, 16, 16]} />
          <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.32} roughness={0.35} />
        </mesh>
      ))}
    </group>
  );
}

function PulseCore() {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.06;
    mesh.current.scale.setScalar(s);
  });
  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.42, 32, 32]} />
      <meshStandardMaterial color={teal} emissive={bright} emissiveIntensity={0.55} roughness={0.22} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={camera} dpr={dpr} gl={glConfig} onCreated={handleCreated}>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 2, 4]} intensity={16} color="#24B1B1" />
      <pointLight position={[-3, -2, 2]} intensity={9} color="#FFE0C5" />
      <PulseCore />
      <Network />
    </Canvas>
  );
}
