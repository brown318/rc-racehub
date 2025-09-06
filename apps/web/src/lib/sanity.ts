import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Client for public read access (works on both server and client)
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  // No token needed for public datasets
})

// Server-only client with write access (for API routes)
export const serverClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const TENANT_QUERY = `*[_type == "tenant" && subdomain == $subdomain][0]{
  _id,
  name,
  slug,
  subdomain,
  status,
  logo,
  theme,
  contact,
  settings
}`

export const POSTS_QUERY = `*[_type == "post" && tenant._ref == $tenantId] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  publishedAt,
  featured,
  excerpt,
  mainImage,
  tags
}`

export const POST_QUERY = `*[_type == "post" && slug.current == $slug && tenant._ref == $tenantId][0]{
  _id,
  title,
  slug,
  author,
  publishedAt,
  excerpt,
  mainImage,
  body,
  tags,
  tenant->{name, slug}
}`

export const EVENTS_QUERY = `*[_type == "event" && tenant._ref == $tenantId] | order(eventDate desc) {
  _id,
  title,
  slug,
  eventDate,
  registrationDeadline,
  status,
  location,
  classes
}`

export const EVENT_QUERY = `*[_type == "event" && slug.current == $slug && tenant._ref == $tenantId][0]{
  _id,
  title,
  slug,
  eventDate,
  registrationDeadline,
  description,
  classes,
  location,
  status,
  results,
  tenant->{name, slug}
}`

export const PROMOS_QUERY = `*[_type == "promo" && tenant._ref == $tenantId && active == true && dateTime(validFrom) <= dateTime(now()) && dateTime(validTo) >= dateTime(now())] | order(validTo asc) {
  _id,
  title,
  slug,
  description,
  promoImage,
  ctaText,
  ctaUrl,
  targetProducts,
  discountCode
}`

export const SPONSOR_BLOCKS_QUERY = `*[_type == "sponsorBlock" && tenant._ref == $tenantId && active == true && dateTime(displayFrom) <= dateTime(now()) && dateTime(displayTo) >= dateTime(now())] | order(sponsorshipLevel desc) {
  _id,
  title,
  logo,
  sponsorUrl,
  sponsorshipLevel,
  placement
}`
