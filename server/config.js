// Front-end origins allowed to call the API. Override in production via the
// ALLOWED_ORIGINS env var (comma-separated). Dev + GitHub Pages by default.
export const allowedOrigins = (
  process.env.ALLOWED_ORIGINS ||
  'http://localhost:5173,https://adrienrochestudio.github.io'
)
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

// Returns the request's Origin only if it is allow-listed, otherwise falls back
// to the first allowed origin. This prevents reflecting an attacker-controlled
// Origin header into Stripe redirect URLs (open-redirect protection).
export function safeOrigin(req) {
  const origin = req.headers.origin;
  return allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
}
