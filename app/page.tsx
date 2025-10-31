import { ThemeToggle } from "@/components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <ThemeToggle />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl">
            Optimus IdP Starter
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-700 dark:text-zinc-300">
            Open‑source Next.js identity provider starter for multi‑server
            setups.
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Use this as the base for your central auth service across apps.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/signin"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 transition-colors"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              Sign Up
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1 text-zinc-700 dark:text-zinc-300">
              Open‑source starter
            </span>
            <span className="rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1 text-zinc-700 dark:text-zinc-300">
              Multi‑server ready
            </span>
            <span className="rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1 text-zinc-700 dark:text-zinc-300">
              5‑minute setup
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100">
                  <svg
                    className="h-6 w-6 text-white dark:text-zinc-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                Centralized auth service
              </dt>
              <dd className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Single endpoint for sign‑in, tokens, and logout for all apps.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100">
                  <svg
                    className="h-6 w-6 text-white dark:text-zinc-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                Multi‑server ready
              </dt>
              <dd className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Works across nodes and regions. Sessions stay valid, keys rotate
                on schedule.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100">
                  <svg
                    className="h-6 w-6 text-white dark:text-zinc-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                Lean and secure
              </dt>
              <dd className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Lean, modern stack. OIDC/OAuth2 and hardened defaults so you can
                move quickly.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-zinc-200 dark:ring-zinc-800 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              What’s in the starter
            </h3>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              A clean Next.js base for a central IdP: App Router, UI primitives,
              and room to add OAuth2/OIDC flows, short‑lived tokens, and
              providers.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                What you get
              </h4>
              <div className="h-px flex-auto bg-zinc-300 dark:bg-zinc-700"></div>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:grid-cols-2 sm:gap-6">
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                RBAC‑friendly structure
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                MFA‑ready (TOTP, WebAuthn)
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Durable sessions with refresh tokens
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Audit hooks for IP and device
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                API tokens with scopes and expiry
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Cross‑domain cookies and CORS friendly
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl lg:mt-28">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-center">
            How this starter fits in
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/50 dark:bg-zinc-900/40">
              <div className="flex size-10 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                1
              </div>
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">
                Sign in
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Users authenticate with email, SSO, or passkey.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/50 dark:bg-zinc-900/40">
              <div className="flex size-10 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                2
              </div>
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">
                Issue token
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Optimus issues short‑lived tokens and a refresh.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/50 dark:bg-zinc-900/40">
              <div className="flex size-10 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                3
              </div>
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">
                Verify
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Apps verify on each request. No custom glue code.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-6xl lg:mt-24">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-center">
            Security, by default
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:grid-cols-2 lg:grid-cols-3">
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Short‑lived access tokens
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Refresh rotation and revocation
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Key rotation via JWKS
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              WebAuthn and TOTP MFA
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Device and IP audit trail
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-zinc-900 dark:text-zinc-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              CSRF and session hardening
            </li>
          </ul>
        </div>

        <div className="mx-auto mt-20 max-w-6xl lg:mt-24">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-center">
            Integrations you can add
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/40">
              Google
            </span>
            <span className="rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/40">
              GitHub
            </span>
            <span className="rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/40">
              Microsoft Entra ID
            </span>
            <span className="rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/40">
              Okta
            </span>
            <span className="rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/40">
              SAML 2.0
            </span>
            <span className="rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/40">
              Custom OIDC
            </span>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-6xl lg:mt-24">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-center">
            Use cases
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/50 dark:bg-zinc-900/40">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                Internal tools
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                One login for admin panels, dashboards, and dev portals.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/50 dark:bg-zinc-900/40">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                Self‑hosted services
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Unify access across containers, nodes, and regions.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/50 dark:bg-zinc-900/40">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                Partner portals
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Invite external users with scoped, expiring access.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl lg:mt-24">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-center">
            FAQ
          </h2>
          <Accordion
            type="single"
            collapsible
            className="mt-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-4">
                What does this include?
              </AccordionTrigger>
              <AccordionContent className="px-4">
                A Next.js IdP starter: App Router, UI components, and space to
                wire OAuth2/OIDC flows, sessions, and providers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4">
                Does it work across subdomains or separate domains?
              </AccordionTrigger>
              <AccordionContent className="px-4">
                Yes. Use a central issuer, set cookie scope where possible, and
                verify tokens in each app.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-4">
                Can I add MFA?
              </AccordionTrigger>
              <AccordionContent className="px-4">
                Yes. Add TOTP or passkeys (WebAuthn) using your preferred
                provider libraries; the UI is ready.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-4">
                Where do I host it?
              </AccordionTrigger>
              <AccordionContent className="px-4">
                Anywhere Node runs: a VM, Docker, or Kubernetes. Keep keys safe
                and back up storage.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
