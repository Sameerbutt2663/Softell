import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type BaseProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
};

type FadeInProps = BaseProps & {
  direction?: "none" | "up" | "down" | "left" | "right";
  distance?: number;
  blur?: boolean;
  scale?: boolean;
  immediate?: boolean;
};

const offset = (direction: FadeInProps["direction"], distance: number) => {
  if (direction === "up") return { x: 0, y: distance };
  if (direction === "down") return { x: 0, y: -distance };
  if (direction === "left") return { x: distance, y: 0 };
  if (direction === "right") return { x: -distance, y: 0 };
  return { x: 0, y: 0 };
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "none",
  distance = 28,
  blur = false,
  scale = false,
  once = true,
  immediate = false,
}: FadeInProps) {
  const reduce = useReducedMotion();
  const from = offset(direction, distance);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const shown = {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: from.x,
        y: from.y,
        filter: blur ? "blur(12px)" : "blur(0px)",
        scale: scale ? 0.94 : 1,
      }}
      animate={immediate ? shown : undefined}
      whileInView={immediate ? undefined : shown}
      viewport={immediate ? undefined : { once, margin: "-80px" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp(props: BaseProps) {
  return <FadeIn direction="up" {...props} />;
}

export function FadeDown(props: BaseProps) {
  return <FadeIn direction="down" {...props} />;
}

export function FadeLeft(props: BaseProps) {
  return <FadeIn direction="left" {...props} />;
}

export function FadeRight(props: BaseProps) {
  return <FadeIn direction="right" {...props} />;
}

export function ScaleIn(props: BaseProps) {
  return <FadeIn scale direction="none" {...props} />;
}

export function BlurIn(props: BaseProps) {
  return <FadeIn blur direction="up" distance={16} {...props} />;
}

export function SlideIn({
  children,
  className,
  delay = 0,
  from = "left",
}: BaseProps & { from?: "left" | "right" }) {
  return (
    <FadeIn className={className} delay={delay} direction={from} distance={48}>
      {children}
    </FadeIn>
  );
}
