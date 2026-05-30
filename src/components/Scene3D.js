import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useScrollProgress } from "../context/ScrollContext";

function AnimatedShape({ position, color, speed, distort, scrollOffset }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * speed * 0.3 + scrollOffset * Math.PI;
    meshRef.current.rotation.y = t * speed * 0.5 + scrollOffset * Math.PI * 0.5;
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.15 - scrollOffset * 1.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

function Scene({ progress }) {
  useFrame(({ camera }) => {
    camera.position.z = 5 - progress * 2;
    camera.position.y = progress * 1.5;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -3, 2]} intensity={0.8} color="#c8ff00" />
      <AnimatedShape
        position={[-2.5, 0.5, 0]}
        color="#c8ff00"
        speed={0.4}
        distort={0.35}
        scrollOffset={progress}
      />
      <AnimatedShape
        position={[2.8, -0.8, -1]}
        color="#8888ff"
        speed={0.25}
        distort={0.25}
        scrollOffset={progress * 1.2}
      />
      <AnimatedShape
        position={[0.5, 1.2, -2]}
        color="#ffffff"
        speed={0.15}
        distort={0.2}
        scrollOffset={progress * 0.8}
      />
    </>
  );
}

function SceneCanvas() {
  const progress = useScrollProgress();

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Scene progress={progress} />
      </Suspense>
    </Canvas>
  );
}

export default function Scene3D() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    return <div className="canvas-fallback" aria-hidden="true" />;
  }

  return (
    <div className="canvas-layer" aria-hidden="true">
      <SceneCanvas />
    </div>
  );
}
