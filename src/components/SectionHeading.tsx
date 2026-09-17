import type { ReactNode } from "react";
import { FadeIn } from "../animations/FadeIn";

type SectionHeadingProps = {
  title: string;
  text?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  title,
  text,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <div className={`heading-block ${align}`}>
      <FadeIn delay={0.08} direction="up">
        <h2 className="section-title">{title}</h2>
      </FadeIn>
      {text ? (
        <FadeIn delay={0.16} direction="up">
          <p className="lead">{text}</p>
        </FadeIn>
      ) : null}
      {children}
    </div>
  );
}
