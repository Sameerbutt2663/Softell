import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
};

export function TextReveal({
  text,
  as = "h1",
  className,
  delay = 0,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const Tag = as;
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, wordIndex) => (
        <span className="word-mask" key={`${word}-${wordIndex}`}>
          <motion.span
            className="word-inner"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + wordIndex * 0.06,
              ease,
            }}
          >
            {word}
          </motion.span>
          {wordIndex < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </Tag>
  );
}

export function CharacterReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {Array.from(text).map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: delay + index * 0.018, ease }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
