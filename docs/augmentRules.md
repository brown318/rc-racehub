# docs/AI_AGENT_RULES_MCP.md

# AI Agent Rules — MCP + Tools Orchestration

> Objective: Ensure Augment AI / VS Code agents use MCP servers consistently for GitHub, Supabase, Sanity, and Stripe; generate safe, idempotent ops; and store all test scripts under `/tests`.

## High-Level Principles
1. **Idempotency & Reproducibility:** Every write has a dry-run/plan step and a rollback path.
2. **Least Privilege:** Use tenant-scoped creds and RLS; never request service role keys in prompts.
3. **Deterministic Outputs:** Prefer schema-driven generation (SQL, Sanity schemas, Stripe config) with explicit versioning in Git.

## Allowed MCP Servers & Tools
- **GitHub MCP:**  
  - Allowed: create PRs/branches, open issues, request reviews, commit schema/migration files, CI config, test scripts in `/tests`.
  - Disallowed: direct push to `main` without PR; force-push.
- **Supabase MCP:**  
  - Allowed: generate SQL migrations for tables, indexes, policies; run **dry-run** first; apply via migration with semantic name; seed limited demo data.  
  - Disallowed: dropping prod tables; altering RLS to `USING true` in prod.
- **Sanity MCP:**  
  - Allowed: create/update schemas (tenant, post, event, promo, mediaAsset, sponsorBlock); configure webhooks; export/import dataset (dev only).  
  - Disallowed: deleting datasets without backup; changing dataset for production without approval.
- **Stripe MCP:**  
  - Allowed: create test products/prices (test mode), create webhooks (test), configure Terminal locations (test), create Connect test accounts, create test payouts.  
  - Disallowed: live-mode changes without `LIVE_CHANGE_APPROVED` label on PR.

## Required Conventions
- **Repo layout**
  - `/apps/web` Next.js app
  - `/packages/ui` shared UI (shadcn/ui wrappers)
  - `/packages/db` SQL migrations, types
  - `/packages/cms` Sanity schemas
  - `/tests` all test scripts (Playwright, Vitest, Postman collections)
- **Branching:** `feat/*`, `fix/*`, `chore/*`. One topic per PR.
- **Secrets:** Use `.env.local` templates; never commit real keys. Agents reference VS Code secret store or MCP secret manager.

## Guardrails & Checks
- **Pre-merge checks** (required before agent marks task complete):
  - Lint/build pass
  - SQL migration dry-run diff recorded in PR
  - RLS tests pass (no cross-tenant reads)
  - Webhook signature verification tests pass
  - `/tests` updated with new/changed flows
- **Post-deploy smoke tests** (agent may run in staging):
  - Create tenant → publish event in Sanity → ISR revalidate
  - Checkout (Elements) test → order/stock/ledger reconcile
  - POS (Terminal) test payment in test mode
  - Connect test payout generated from ledger

## Prompts (Templates)

### Create a Tenant (end-to-end)
- **Goal:** Add DB row, seed CMS docs, DNS config, theme defaults
- **MCP Plan:**
  1. Supabase (dry-run + apply) → insert `tenants`, `locations`, theme seed
  2. Sanity → create `tenant`, seed `promo`, `event`, `post`
  3. GitHub → commit seed scripts + add `/tests/tenant.spec.ts`
  4. Stripe → (optional) create Connect test account for tenant
- **Acceptance:** Visiting `{subdomain}.rcracehub.local` shows seeded hero, upcoming event, promo

### Add Product + Promo
- Supabase: create product/variant/price with channel `online`
- Sanity: create `promo` that links `targetRef` to product
- GitHub: PR with migration + seed + test
- Stripe: ensure tax code mapped; add Product/Price in test mode if needed

### Enable POS for Location
- Stripe: create test Terminal location & reader
- Supabase: ensure `location_id` exists, inventory seeded
- Tests: `/tests/pos.terminal.spec.ts` scans barcode → collects card → reconciles stock & ledger

## Testing Policy
- Place all test assets in `/tests`
- Include:
  - `rls.spec.sql` (row-level security)
  - `webhooks.spec.ts` (Stripe signature, order creation, ledger)
  - `timing-import.spec.ts` (CSV mapping)
  - `tenant-onboarding.spec.ts` (end-to-end)
  - `pos.terminal.spec.ts` (if device emulation available)
- CI must run tests on PR and block merge on failure

## Rollback & Recovery
- SQL migrations: require `down` scripts
- Sanity: export dataset snapshot before destructive changes
- Stripe: test mode resets; live mode requires manual confirmation & runbook

## Live Mode Escalation
- Any live change must:  
  - be tied to a PR labeled `LIVE_CHANGE_APPROVED`  
  - pass all checks & receive human approval  
  - include a rollback plan in PR description
