export const heroContent = {
  title: "Optimus IdP Starter",
  subtitle: "Open‑source Next.js identity provider starter for multi‑server setups.",
  description: "Use this as the base for your central auth service across apps.",
  badges: ["Open‑source starter", "Multi‑server ready", "5‑minute setup"],
};

export const features = [
  {
    icon: "shield",
    title: "Centralized auth service",
    description: "Single endpoint for sign‑in, tokens, and logout for all apps.",
  },
  {
    icon: "server",
    title: "Multi‑server ready",
    description: "Works across nodes and regions. Sessions stay valid, keys rotate on schedule.",
  },
  {
    icon: "bolt",
    title: "Lean and secure",
    description: "Lean, modern stack. OIDC/OAuth2 and hardened defaults so you can move quickly.",
  },
];

export const whatsIncludedContent = {
  title: "What's in the starter",
  description: "A clean Next.js base for a central IdP: App Router, UI primitives, and room to add OAuth2/OIDC flows, short‑lived tokens, and providers.",
  sectionLabel: "What you get",
  items: [
    "RBAC‑friendly structure",
    "MFA‑ready (TOTP, WebAuthn)",
    "Durable sessions with refresh tokens",
    "Audit hooks for IP and device",
    "API tokens with scopes and expiry",
    "Cross‑domain cookies and CORS friendly",
  ],
};

export const steps = [
  {
    step: 1,
    title: "Sign in",
    description: "Users authenticate with email, SSO, or passkey.",
  },
  {
    step: 2,
    title: "Issue token",
    description: "Optimus issues short‑lived tokens and a refresh.",
  },
  {
    step: 3,
    title: "Verify",
    description: "Apps verify on each request. No custom glue code.",
  },
];

export const securityFeatures = [
  "Short‑lived access tokens",
  "Refresh rotation and revocation",
  "Key rotation via JWKS",
  "WebAuthn and TOTP MFA",
  "Device and IP audit trail",
  "CSRF and session hardening",
];

export const integrations = [
  "Google",
  "GitHub",
  "Microsoft Entra ID",
  "Okta",
  "SAML 2.0",
  "Custom OIDC",
];

export const useCases = [
  {
    title: "Internal tools",
    description: "One login for admin panels, dashboards, and dev portals.",
  },
  {
    title: "Self‑hosted services",
    description: "Unify access across containers, nodes, and regions.",
  },
  {
    title: "Partner portals",
    description: "Invite external users with scoped, expiring access.",
  },
];

export const faqItems = [
  {
    question: "What does this include?",
    answer: "A Next.js IdP starter: App Router, UI components, and space to wire OAuth2/OIDC flows, sessions, and providers.",
  },
  {
    question: "Does it work across subdomains or separate domains?",
    answer: "Yes. Use a central issuer, set cookie scope where possible, and verify tokens in each app.",
  },
  {
    question: "Can I add MFA?",
    answer: "Yes. Add TOTP or passkeys (WebAuthn) using your preferred provider libraries; the UI is ready.",
  },
  {
    question: "Where do I host it?",
    answer: "Anywhere Node runs: a VM, Docker, or Kubernetes. Keep keys safe and back up storage.",
  },
];
