import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { CanvasTexture, Group, SRGBColorSpace, MathUtils } from 'three';
import { useReducedMotion } from 'framer-motion';

type Palette = { primary: string; ink: string; paper: string; accent: string; secondary: string };

function Token({ palette, reduced, ready }: { palette: Palette; reduced: boolean; ready: () => void }) {
  const group = useRef<Group>(null);
  const clock = useRef(0);
  const signaled = useRef(false);
  const [texture, setTexture] = useState<CanvasTexture>();
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = palette.ink;
    ctx.fillRect(0, 0, 1024, 1024);
    ctx.strokeStyle = palette.paper;
    ctx.globalAlpha = 0.08;
    for (let i = 0; i < 1024; i += 32) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 1024); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(1024, i); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    ctx.fillStyle = palette.paper;
    ctx.textAlign = 'center';
    ctx.font = 'bold 310px monospace';
    ctx.fillText('</>', 512, 570);
    ctx.font = '28px monospace';
    ctx.fillText('TECHPRINTO · STUDIO', 512, 715);
    ctx.fillStyle = palette.accent;
    ctx.fillRect(445, 790, 134, 8);
    const map = new CanvasTexture(canvas);
    map.colorSpace = SRGBColorSpace;
    setTexture(map);
    return () => map.dispose();
  }, [palette]);
  useFrame((state, delta) => {
    if (!group.current || !texture) return;
    const dt = Math.min(delta, 0.05);
    clock.current += dt;
    const blend = 1 - Math.exp(-5 * dt);
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, reduced ? 0.08 : -state.pointer.y * 0.28 + 0.08, blend);
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, reduced ? -0.24 : state.pointer.x * 0.45 - 0.24, blend);
    group.current.rotation.z = reduced ? -0.12 : Math.sin(clock.current * 0.35) * 0.05 - 0.12;
    group.current.position.y = reduced ? 0 : Math.sin(clock.current * 0.8) * 0.12;
    if (!signaled.current) { signaled.current = true; ready(); }
  });
  return <group ref={group}>
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[1.62, 1.62, 0.26, 96]} />
      <meshStandardMaterial color={palette.primary} metalness={0.8} roughness={0.24} />
    </mesh>
    <mesh position={[0, 0, 0.2]}>
      <circleGeometry args={[1.48, 96]} />
      <meshBasicMaterial color={palette.ink} />
    </mesh>
    {[-1, 1].map(side => <group key={side} position={[side * 0.66, 0, 0.32]}>
      {[-1, 1].map(slope => <mesh key={slope} position={[0, slope * 0.17, 0]} rotation={[0, 0, side * slope * -0.7]}>
        <boxGeometry args={[0.48, 0.085, 0.045]} />
        <meshStandardMaterial color={palette.paper} roughness={0.35} />
      </mesh>)}
    </group>)}
    <mesh position={[0, 0, 0.32]} rotation={[0, 0, -0.28]}>
      <boxGeometry args={[0.085, 0.8, 0.045]} />
      <meshStandardMaterial color={palette.primary} roughness={0.3} />
    </mesh>
    <mesh position={[0, -0.85, 0.32]}><boxGeometry args={[0.28, 0.025, 0.02]} /><meshBasicMaterial color={palette.accent} /></mesh>
    <mesh position={[0, 0, 0.14]}>
      <torusGeometry args={[1.55, 0.075, 16, 96]} />
      <meshStandardMaterial color={palette.primary} metalness={0.95} roughness={0.16} />
    </mesh>
    <mesh rotation={[0.3, -0.6, 0.3]}>
      <torusGeometry args={[2.05, 0.018, 8, 96]} />
      <meshStandardMaterial color={palette.secondary} metalness={0.75} roughness={0.3} />
    </mesh>
    <mesh position={[1.7, 1.5, 0.45]} rotation={[0.3, 0.5, 0.6]}>
      <octahedronGeometry args={[0.24]} />
      <meshStandardMaterial color={palette.accent} metalness={0.55} roughness={0.22} />
    </mesh>
    <mesh position={[-1.8, -1.1, 0.4]}>
      <sphereGeometry args={[0.13, 20, 20]} />
      <meshStandardMaterial color={palette.secondary} metalness={0.7} roughness={0.25} />
    </mesh>
  </group>;
}

export default function StudioToken() {
  const [palette, setPalette] = useState<Palette>();
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const css = getComputedStyle(document.documentElement);
    // Canvas converts CSS tokens to sRGB for Three's material colors.
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const color = (name: string) => {
      if (!ctx) return '';
      ctx.fillStyle = css.getPropertyValue(name).trim(); ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      return `rgb(${r},${g},${b})`;
    };
    setPalette({ primary: color('--primary'), ink: color('--ink'), paper: color('--background'), accent: color('--accent'), secondary: color('--secondary') });
  }, []);
  return <div className="studio-canvas" data-scene-ready={ready ? 'true' : undefined} aria-label="Interactive three-dimensional Techprinto studio token">
    {palette && <Canvas camera={{ position: [0, 0, 7], fov: 38 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 4, 5]} intensity={3} />
      <Environment resolution={64}>
        <Lightformer intensity={3} position={[0, 4, 3]} scale={[5, 5, 1]} />
        <Lightformer intensity={2} color={palette.primary} position={[-4, 0, 2]} scale={[2, 5, 1]} />
      </Environment>
      <Token palette={palette} reduced={Boolean(reduced)} ready={() => setReady(true)} />
    </Canvas>}
  </div>;
}