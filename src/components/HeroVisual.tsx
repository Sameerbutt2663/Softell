import { lazy, Suspense, useEffect, useState } from "react";
import { FadeIn } from "../animations/FadeIn";

const Scene = lazy(() => import("../three/HeroScene"));

function canUseScene() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (window.innerWidth < 900) return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const [use3d, setUse3d] = useState(false);

  useEffect(() => {
    setUse3d(canUseScene());
  }, []);

  return (
    <div className="hero-visual">
      <div className="hero-glow" />
      <div className="hero-peach" />
      {use3d ? (
        <Suspense fallback={<NodeFallback />}>
          <div className="hero-canvas">
            <Scene />
          </div>
        </Suspense>
      ) : (
        <NodeFallback />
      )}
      <FadeIn delay={0.9} className="float-card card-a">
        <span>Workflow</span>
        <strong>Input → Route</strong>
      </FadeIn>
      <FadeIn delay={1.02} className="float-card card-b">
        <span>Assistant</span>
        <strong>Context ready</strong>
      </FadeIn>
      <FadeIn delay={1.12} className="float-card card-c">
        <span>Data</span>
        <strong>Clean · Transform</strong>
      </FadeIn>
    </div>
  );
}

function NodeFallback() {
  return (
    <svg className="node-fallback" viewBox="0 0 520 480" fill="none" aria-hidden="true">
      <path d="M90 240C140 140 220 120 260 180C300 240 250 300 330 330C410 360 430 250 460 210" stroke="#007979" strokeWidth="2" opacity="0.45" />
      <path d="M70 300C150 280 180 360 250 350C320 340 340 250 410 270" stroke="#24B1B1" strokeWidth="2" opacity="0.7" />
      <circle cx="90" cy="240" r="10" fill="#007979" />
      <circle cx="260" cy="180" r="16" fill="#24B1B1" />
      <circle cx="330" cy="330" r="12" fill="#FFE0C5" />
      <circle cx="460" cy="210" r="8" fill="#007979" />
      <circle cx="70" cy="300" r="7" fill="#FFE0C5" />
      <circle cx="250" cy="350" r="11" fill="#007979" />
      <circle cx="410" cy="270" r="14" fill="#24B1B1" />
      <circle cx="200" cy="250" r="46" fill="#007979" opacity="0.12" />
      <circle cx="200" cy="250" r="18" fill="#007979" />
    </svg>
  );
}
