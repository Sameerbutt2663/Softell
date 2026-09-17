type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="icon-wrap">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M16 10v6l4 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
