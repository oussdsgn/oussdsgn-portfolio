export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 793.68 824.05" aria-hidden="true">
      <path
        fill="currentColor"
        d="M381.91,0H0v337.23h306.92l73.07-197.48,73.54,198.74,198.74,73.54-198.74,73.54-73.54,198.73-73.07-197.48H0v337.23h381.91c227.41,0,411.77-184.36,411.77-411.77v-.51C793.68,184.36,609.32,0,381.91,0Z"
      />
    </svg>
  );
}

/** The four-point star from the logo, used as a separator. */
export function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path fill="currentColor" d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 26 14" aria-hidden="true">
      <path d="M0 7h24M18 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
