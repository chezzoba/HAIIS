export default function Logo({ size = 32 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} aria-label="HAILS logo">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="none" stroke="currentColor" strokeWidth="3"/>
      <rect x="14" y="29" width="36" height="6" rx="3" fill="currentColor"/>
      <rect x="29" y="14" width="6" height="36" rx="3" fill="currentColor"/>
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.35"/>
      <circle cx="48" cy="16" r="3" fill="currentColor" opacity="0.35"/>
      <circle cx="16" cy="48" r="3" fill="currentColor" opacity="0.35"/>
      <circle cx="48" cy="48" r="3" fill="currentColor" opacity="0.35"/>
    </svg>
  );
}
