import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      autoRaf: true,
    });
    const onScroll = () => ScrollTrigger.update();
    const unsub = lenis.on("scroll", onScroll);

    return () => {
      unsub();
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return children;
}
