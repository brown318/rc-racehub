# docs/PROJECT_OVERVIEW.md

# RC RaceHub — Project Overview

## Vision
A multi-tenant RC racing platform that unifies club/track pages, race results, on-site & online commerce, and brand sponsorships. Each tenant (track/club) gets a branded microsite, easy content management, and revenue share from sales they drive.

## Core Objectives (Year 1)
- Launch 3–5 tenant microsites with live events and results
- Enable online + on-site (POS) sales with automatic rev-share payouts
- Ship a simple sponsor/ads system and close 3 pilot sponsors
- Integrate at least one timing system import (CSV/API)

## Target Users
- **Tracks/Clubs:** host events, publish posts, promo products, earn rev share
- **Racers:** profiles, event links, results history, recommended parts
- **Brands/Suppliers:** advertise to classes/regions; drop-ship fulfillment
- **Fans:** follow results, media, events

## Product Pillars
1) **Content & Community**  
   - Tenant pages (hero, posts, galleries, events) via Sanity (headless CMS)
   - Sponsor/ads blocks managed in CMS
2) **Racing Data**  
   - Timing import: CSV/API mapping → normalized results in Supabase
   - Driver profiles & leaderboards
3) **Commerce (Headless)**  
   - Catalog, prices, inventory in Supabase
   - Stripe Elements for web, Stripe Terminal for on-site POS
   - Stripe Connect payouts for rev-share
4) **Multi-Tenant Architecture**  
   - Subdomain routing (`{tenant}.rcracehub.com`)
   - RLS isolation in Supabase, per-tenant theming
5) **Growth Engine**  
   - CMS-driven promos → shop deep links (UTM/metadata attribution)
   - Basic sponsor placements → performance reporting

## Tech Stack
- **Frontend:** Next.js (App Router), Tailwind CSS, shadcn/ui, TanStack Table
- **Data/Auth:** Supabase (Postgres, RLS, Auth, Storage)
- **CMS:** Sanity (tenant-scoped content models)
- **Payments:** Stripe (Elements, Terminal, Connect, Stripe Tax)
- **Infra:** Vercel (web), server routes for webhooks; optional queue later

## Key Integrations
- Timing systems: iLaps/MyLaps/Trackmate (CSV import first)
- Supplier drop-ship (phase 2): REST/EDI connector

## High-Level Data Model (abridged)
- tenants, locations, users
- products, product_variants, prices, collections
- inventory_levels, stock_movements
- carts, cart_items, orders, order_items
- payout_ledger (rev-share accruals)
- content in Sanity: tenant, post, event, promo, mediaAsset, sponsorBlock

## Success Metrics (first 90–120 days)
- 3+ tenants live, 20+ published events, 200+ racers registered
- GMV ≥ $10k, sponsor revenue ≥ $1.5k
- Import ≥ 10 event result files; Time-to-publish < 10 minutes per event
