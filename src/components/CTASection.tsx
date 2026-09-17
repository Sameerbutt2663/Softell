import { Link } from "react-router-dom";
import { IconArrow } from "./Icons";
import { FadeIn } from "../animations/FadeIn";

type CTASectionProps = {
  heading: string;
  text?: string;
  button: string;
  to?: string;
  tone?: "cream" | "white";
};

export function CTASection({
  heading,
  text,
  button,
  to = "/contact",
  tone = "cream",
}: CTASectionProps) {
  return (
    <section className={`section ${tone === "white" ? "band-white" : "band-cream"}`}>
      <div className="container">
        <FadeIn>
          <div className="cta-panel">
            <div>
              <h2 className="section-title">{heading}</h2>
              {text ? <p>{text}</p> : null}
            </div>
            <Link className="btn btn-light" to={to}>
              {button} <IconArrow />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
