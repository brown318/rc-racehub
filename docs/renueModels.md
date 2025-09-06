# docs/REVENUE_MODELS.md

# Revenue Models

## 1) E-commerce (Drop-Ship + In-Store)
- **Online:** Stripe Elements; attribution via `tenant_id` + `promo` metadata
- **On-site POS:** Stripe Terminal; inventory decrements per `location_id`
- **Margins:** 15–30% typical; adjust by category/brand
- **Rev-Share:** 5–10% of net revenue back to tenant for attributed orders
- **Pickup/Ship-From-Store (optional):** If a track shop holds stock

## 2) Sponsorships & Ads
- **Event Sponsorship:** Bronze/Silver/Gold tiers (see Marketing)
- **Always-On Ads:** Rotating banner/sponsor blocks on high-traffic pages
- **Targeting:** By class (e.g., 13.5T), event type (oval/off-road), region
- **Pricing:** CPM/CPE hybrid or flat per event/season

## 3) Premium Tenant Plans (Phase 2)
- **Free:** Core pages + rev-share
- **Pro ($29–49/mo):** Custom domain/theme, advanced analytics, livestream embed, sponsor tools
- **Elite ($99+/mo):** Priority support, white-label features, multi-location pro shop

## 4) Premium Racer (Phase 2)
- **$5–10/mo:** Ad-free, advanced stats, video storage for highlights

## Financial Flow (Stripe Connect)
- Platform = merchant of record (MVP)
- Monthly payouts: sum `payout_ledger` by tenant → `transfer` to connected account (or direct bank payout)

## Example Year-1 Model (Conservative)
- 5 tenants, 500 monthly MAUs total
- 50 buyers/month × $80 AOV × 20% margin = **$800/mo**
- Rev-share 8% → **$64/mo** out; platform retains **$736/mo**
- Sponsors: 3 events/mo × $500 = **$1,500/mo**
- **Total ≈ $2,236/mo** (pre infra/ops) with small footprint; scales linearly with tenants, events, and conversion

## Acceptance Criteria (Finance Ops)
- Accurate order attribution (tenant/promo) ≥ 99.5%
- Payout ledger matches Stripe transfers ($ variance < $1)
- Refunds create negative adjustments in ledger and inventory
