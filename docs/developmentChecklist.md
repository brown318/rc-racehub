# docs/DEVELOPMENT_CHECKLIST.md

# Development Checklist — MVP to First Tenants

> Stack: Next.js (App Router) + Tailwind + shadcn/ui + TanStack Table + Supabase + Sanity + Stripe (Elements/Terminal/Connect/Tax)

## 🎯 Current Status (2025-09-06 14:28)
**Multi-tenant subdomain routing and theming system fully operational!**

✅ **Completed**: Subdomain routing, tenant context, logo system, theme colors
🚧 **In Progress**: Content management, UI components
⏳ **Next**: E-commerce integration, POS system, timing imports

## 0) Repo & Workspace
- [x] Create mono-repo or single app repo (`/apps/web`)
- [x] Install Tailwind, shadcn/ui, TanStack Table
- [x] Env wiring: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE`, `STRIPE_SECRET_KEY`, `SANITY_*`
- [x] Add `/tests` folder for Playwright/Integration scripts
- [x] Local hosts file setup for subdomain development (`127.0.0.1 ntar.localhost`)

## 1) Supabase (Schema & RLS)
- [x] Create tables: tenants, locations, users ↔ tenants
- [x] Commerce: products, product_variants, prices, collections
- [x] Inventory: inventory_levels, stock_movements
- [x] Orders: carts, cart_items, orders, order_items, payout_ledger
- [x] Policies: row-level security by `tenant_id`
- [x] Seed script: demo tenant, sample catalog (NTAR with 5 products)

## 2) Sanity (Content Models)
- [x] Schemas: tenant, post, event, promo, mediaAsset, sponsorBlock
- [x] Studio route `/admin` (protected), tenant-scoped permissions
- [x] Sample content: NTAR tenant with 3 events, 3 posts, 2 promos, 2 sponsors
- [x] Logo upload and display functionality with fallback system
- [x] Theme colors (Primary, Secondary, Accent) integration
- [ ] Webhooks: on publish/update → Next.js revalidate

## 3) Multi-Tenant Routing
- [x] Next.js middleware resolves `{tenant}` by host → inject in `headers`/context
- [x] Subdomain routing fully functional (`ntar.localhost:3001`)
- [x] Tenant context provider with server-side data injection
- [x] Theming per tenant (logo, colors) from Sanity with dynamic styling
- [x] Logo display with aspect ratio preservation and responsive sizing
- [x] Theme colors applied throughout UI (buttons, badges, icons, gradients)
- [x] Public pages ISR/SSG; private dashboards SSR

## 4) UI Components (shadcn + Tailwind)
- [x] Header/Footer, TenantSwitcher (admin only)
- [x] PromoCard, EventCard, PostCard, GalleryGrid
- [x] TenantSiteHome with dynamic theming and logo display
- [x] Responsive logo component with fallback initials design
- [x] Theme-aware buttons, badges, and interactive elements
- [x] Next.js Image optimization configured for Sanity CDN
- [ ] ProductList (TanStack Table for admin catalog), PDP, Cart
- [ ] ResultsTable (TanStack Table with sorting/pagination)

## 5) Checkout (Stripe Elements)
- [ ] API route to create Payment Intent with metadata: `tenant_id`, `location_id`, `channel`, `promo`
- [ ] Client Elements with saved billing/shipping (optional)
- [ ] Webhooks: `payment_intent.succeeded` → create order, decrement inventory, write `payout_ledger`

## 6) POS (Stripe Terminal)
- [ ] Device registration per `location_id`
- [ ] POS page: scan barcode → cart → Terminal payment
- [ ] Offline fallback: QR to Checkout session
- [ ] Webhooks unify with online flow

## 7) Timing Import
- [ ] CSV mapping UI: map columns → driver, class, laps, time
- [ ] Normalize & store results for Events
- [ ] Display results with filters (class/date/driver)

## 8) Sponsorship/Ads
- [ ] CMS sponsor blocks (placements + schedule)
- [ ] Track impressions/clicks (PostHog or custom)
- [ ] Simple reporting per tenant/sponsor

## 9) Analytics & Logs
- [ ] PostHog (tenant dimension), funnels for promo→checkout
- [ ] Stripe logs monitoring (Axiom/Logflare/Vercel)

## 10) Security & Compliance
- [ ] Supabase RLS tests in `/tests` to prevent cross-tenant access
- [ ] Stripe PCI handled via Elements/Terminal (no raw PAN)
- [ ] Privacy policy, terms, cookie banner

## 11) Launch Runbook
- [ ] Create tenant (DB + CMS seed + subdomain DNS)
- [ ] Invite tenant admins; Studio walkthrough
- [ ] First event published + first promo live
- [ ] Test orders (online + POS) → verify payout ledger

## Acceptance Criteria (MVP)
- Tenant site live end-to-end in < 1 hour from “Create Tenant”
- Successful online order creates correct stock & ledger entries
- POS sale decrements correct `location_id` inventory
- Event import → results visible in < 10 minutes
- Revalidation from Sanity within 60 seconds
