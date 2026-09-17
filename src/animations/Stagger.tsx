import type { ReactNode } from "react";
import { Children } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  interval?: number;
};

export function Stagger({
  children,
  className,
  delay = 0,
  interval = 0.08,
}: StaggerProps) {
  const reduce = useReducedMotion();
  const items = Children.toArray(children);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      {items.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, delay: delay + index * interval, ease }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
