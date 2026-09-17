type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  focus: string;
};

export function TestimonialCard({ quote, name, role, focus }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

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
          <span className="testimonial-focus">{focus}</span>
        </span>
      </figcaption>
    </figure>
  );
}
