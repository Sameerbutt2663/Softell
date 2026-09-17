export function IconSpark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M16 4.5v4.2M16 23.3v4.2M6.2 16H10.4M21.6 16h4.2M8.5 8.5l3 3M20.5 20.5l3 3M23.5 8.5l-3 3M11.5 20.5l-3 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="4.4" fill="currentColor" opacity="0.18" />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function IconFlow() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M6 10h8.5a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4H26M6 22h6.5a4 4 0 0 0 4-4v0a4 4 0 0 1 4-4H26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconChat() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M8 9.5h16a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 24 22.5h-6.2L12 26v-3.5H8A2.5 2.5 0 0 1 5.5 20v-8A2.5 2.5 0 0 1 8 9.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="16" r="1.2" fill="currentColor" />
      <circle cx="16" cy="16" r="1.2" fill="currentColor" />
      <circle cx="20" cy="16" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IconData() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <ellipse cx="16" cy="8.5" rx="8" ry="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8.5v15c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-15" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 16c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconCode() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M12 10 6.5 16 12 22M20 10l5.5 6L20 22M18 8l-4 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconWindow() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="5.5" y="7.5" width="21" height="17" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 12.5h21" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="9.2" cy="10" r="0.9" fill="currentColor" />
      <circle cx="12.2" cy="10" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function IconArrow() {
  return (
    <svg className="icon-arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 12h12M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons = {
  spark: IconSpark,
  flow: IconFlow,
  chat: IconChat,
  data: IconData,
  code: IconCode,
  window: IconWindow,
} as const;

export type IconName = keyof typeof icons;

export function BrandIcon({ name }: { name: IconName }) {
  const Cmp = icons[name];
  return <Cmp />;
}
