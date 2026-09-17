import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: "clip" | "mask";
};

export function Reveal({
  children,
  className,
  delay = 0,
  type = "clip",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const hidden =
    type === "mask"
      ? { opacity: 0, clipPath: "inset(0 100% 0 0)" }
      : { opacity: 1, clipPath: "inset(0 0 100% 0)", y: 24 };

  const visible =
    type === "mask"
      ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
      : { opacity: 1, clipPath: "inset(0 0 0% 0)", y: 0 };

  return (
    <div className={`reveal-clip ${className ?? ""}`.trim()}>
      <motion.div
        initial={hidden}
        whileInView={visible}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ClipReveal(props: Omit<RevealProps, "type">) {
  return <Reveal type="clip" {...props} />;
}

export function MaskReveal(props: Omit<RevealProps, "type">) {
  return <Reveal type="mask" {...props} />;
}
