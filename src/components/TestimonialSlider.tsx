import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { testimonials } from "../data/siteData";
import { TestimonialCard } from "./TestimonialCard";

function perViewFor(width: number) {
  if (width < 720) return 1;
  if (width < 1024) return 2;
  return 3;
}

export function TestimonialSlider() {
  const reduce = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const [perView, setPerView] = useState(() =>
    typeof window === "undefined" ? 3 : perViewFor(window.innerWidth),
  );
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = testimonials.length;
  const pages = Math.max(1, Math.ceil(count / perView));

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const tablet = window.matchMedia("(min-width: 720px)");
    const update = () => {
      setPerView(desktop.matches ? 3 : tablet.matches ? 2 : 1);
    };
    update();
    desktop.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    setPage((current) => Math.min(current, pages - 1));
  }, [pages]);

  useEffect(() => {
    if (reduce || paused || pages < 2) return;
    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % pages);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [pages, paused, reduce]);

  function go(next: number) {
    setPage((next + pages) % pages);
  }

  const start = page * perView;
  const end = Math.min(start + perView, count);

  return (
    <div
      className="testimonial-slider"
      style={{ "--per-view": String(perView) } as CSSProperties}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={viewportRef}
        className="testimonial-viewport"
        onPointerDown={(event) => {
          startX.current = event.clientX;
          startY.current = event.clientY;
        }}
        onPointerUp={(event) => {
          const dx = event.clientX - startX.current;
          const dy = event.clientY - startY.current;
          if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
          go(page + (dx < 0 ? 1 : -1));
        }}
      >
        <div
          className="testimonial-track"
          style={{
            transform: `translate3d(calc(${-page * 100}% - ${page} * var(--slide-gap)), 0, 0)`,
            transition: reduce ? "none" : "transform 0.7s var(--ease)",
          }}
        >
          {testimonials.map((item, slideIndex) => {
            const hidden = slideIndex < start || slideIndex >= end;
            return (
              <div
                className="testimonial-slide"
                key={item.name}
                aria-hidden={hidden}
                inert={hidden}
              >
                <TestimonialCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
