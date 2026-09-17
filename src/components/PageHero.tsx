import type { ReactNode } from "react";
import { FadeIn } from "../animations/FadeIn";
import { TextReveal } from "../animations/TextReveal";

type PageHeroProps = {
  title: string;
  text: string;
  image?: string;
  tone?: "cream" | "dark" | "teal";
  visual?: ReactNode;
};

export function PageHero({
  title,
  text,
  image,
  tone = "cream",
  visual,
}: PageHeroProps) {
  const band =
    tone === "dark" ? "band-dark" : tone === "teal" ? "band-teal" : "band-cream";

  if (image) {
    return (
      <section className="page-hero page-hero-banner">
        <img className="page-hero-bg" src={image} alt="" />
        <div className="page-hero-overlay" />
        <div className="container page-hero-copy">
          <TextReveal className="display" text={title} delay={0.12} />
          <FadeIn delay={0.38} direction="up" immediate>
            <p className="lead page-hero-lead">{text}</p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className={`page-hero ${band}`}>
      <div className={`container page-hero-grid${visual ? "" : " is-simple"}`}>
        <div>
          <TextReveal className="display" text={title} delay={0.12} />
          <FadeIn delay={0.38} direction="up" immediate>
            <p className="lead page-hero-lead">{text}</p>
          </FadeIn>
        </div>
        {visual ? (
          <FadeIn delay={0.55} direction="left" className="page-hero-visual" immediate>
            {visual}
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
