type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  website: string;
};

function siteHref(website: string) {
  return website.startsWith("http") ? website : `https://${website}`;
}

function siteLabel(website: string) {
  return website.replace(/^https?:\/\//i, "").replace(/\/$/, "");
}

export function TestimonialCard({ quote, name, role, website }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
  const href = siteHref(website);
  const label = siteLabel(website);

  return (
    <figure className="testimonial-card">
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <figcaption>
        <span className="testimonial-avatar" aria-hidden="true">
          {initials}
        </span>
        <span>
          <strong>{name}</strong>
          <em>{role}</em>
          <a
            className="testimonial-site"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
