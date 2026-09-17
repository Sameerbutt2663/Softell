import { Link } from "react-router-dom";
import { IconArrow } from "./Icons";

type PricingCardProps = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: readonly string[];
  cta: string;
  featured?: boolean;
};

export function PricingCard({
  name,
  price,
  cadence,
  description,
  features,
  cta,
  featured = false,
}: PricingCardProps) {
  return (
    <article className={`pricing-card is-wide${featured ? " is-featured" : ""}`}>
      <header>
        <h3>{name}</h3>
        <p className="pricing-cadence">{cadence}</p>
        <p className="pricing-amount">{price}</p>
        <p>{description}</p>
      </header>
      <ul>
        {features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link className={`btn ${featured ? "btn-primary" : "btn-ghost"}`} to="/contact">
        {cta} <IconArrow />
      </Link>
    </article>
  );
}
