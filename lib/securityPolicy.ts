/**
 * Keep the static-friendly policy as the default. A nonce-based script policy
 * needs request-specific server rendering: MOORISH_STRICT_CSP=1 at BUILD and RUN.
 * Do not use nonce CSP against pre-rendered HTML: it blocks Next.js hydration.
 */
export const strictCspEnabled = process.env.MOORISH_STRICT_CSP === "1";
export const enforceTrustedTypes = process.env.MOORISH_ENFORCE_TRUSTED_TYPES === "1";

export function securityPolicy(nonce?: string, development = false): string {
  const scripts = nonce
    ? `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://challenges.cloudflare.com${development ? " 'unsafe-eval'" : ""}`
    : `script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com${development ? " 'unsafe-eval'" : ""}`;
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    scripts,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    // External widgets and enquiry services may use HTTPS; tighten after
    // collecting real traffic and checking Network/CSP console errors.
    "connect-src 'self' https: wss:",
    "frame-src 'self' https://challenges.cloudflare.com https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
    "media-src 'self' data: blob: https:",
    "worker-src 'self' blob:",
    ...(enforceTrustedTypes ? ["require-trusted-types-for 'script'"] : []),
    "upgrade-insecure-requests",
  ].join('; ');
}

/** Monitor Trusted Types issues before deciding whether to enforce. */
export const trustedTypesReportOnly = "require-trusted-types-for 'script'";
