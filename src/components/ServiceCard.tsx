import { useState } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { IconArrow } from "./Icons";

type ServiceCardProps = {
  title: string;
  description: string;
  details: readonly string[];
};

export function ServiceCard({ title, description, details }: ServiceCardProps) {
  const [flipped, setFlipped] = useState(false);
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <article className="flip-static">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="card-link" to="/contact">
          View full details <IconArrow />
        </Link>
      </article>
    );
  }

  const toggleFlip = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setFlipped((value) => !value);
  };

  return (
    <article className={`flip-scene${flipped ? " is-flipped" : ""}`} onClick={toggleFlip}>
      <div className="flip-card">
        <div className="flip-face flip-front">
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="flip-hint">
            View full details <IconArrow />
          </span>
        </div>
        <div className="flip-face flip-back">
          <h3>{title}</h3>
          <ul>
            {details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="btn btn-primary" to="/contact" onClick={(event) => event.stopPropagation()}>
            Let's Talk
          </Link>
        </div>
      </div>
    </article>
  );
}
