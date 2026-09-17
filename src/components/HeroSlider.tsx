import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroSlides } from "../data/siteData";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const slide = heroSlides[index];

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <section className="hero" aria-roledescription="carousel">
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.title}
          className="hero-slide"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img className="hero-bg-image" src={slide.image} alt="" />
          <div className="hero-overlay" />
          <div className="container-wide hero-slider">
            <div className="hero-copy">
              <h1 className="display">
                {slide.title}{" "}
                <span className="accent">{slide.accent}</span>
              </h1>
              <p className="lead">{slide.text}</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" to="/contact">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
