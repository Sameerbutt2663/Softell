type LogoProps = {
  variant?: "nav" | "footer";
};

const sources = {
  nav: "/images/Logo%20(2).png",
  footer: "/images/Footer%20logo.png",
} as const;

export function Logo({ variant = "nav" }: LogoProps) {
  return (
    <span className={`brand-logo brand-logo-${variant}`}>
      <img src={sources[variant]} alt="SoftTell" />
    </span>
  );
}
