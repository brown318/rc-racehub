import { client } from "@/lib/sanity";
import { TenantSiteHome } from "./tenant-site-home";

interface Event {
  _id: string
  title: string
  slug: { current: string }
  eventDate: string
  eventTime?: string
  location?: string
  description?: string
  entryFee?: number
  maxParticipants?: number
  currentParticipants?: number
  categories?: string[]
  featured?: boolean
  registrationOpen?: boolean
}

interface TenantSiteHomeServerProps {
  tenantId: string
}

// Fetch upcoming events for a tenant
async function getTenantUpcomingEvents(tenantId: string): Promise<Event[]> {
  try {
    const events = await client.fetch(`
      *[_type == "event" && tenant._ref == $tenantId && status == "published" && eventDate >= now()] | order(eventDate asc)[0...3] {
        _id,
        title,
        slug,
        eventDate,
        eventTime,
        location,
        description,
        entryFee,
        maxParticipants,
        currentParticipants,
        categories,
        featured,
        registrationOpen
      }
    `, { tenantId });
    
    return events || [];
  } catch (error) {
    console.error('Error fetching tenant events:', error);
    return [];
  }
}

export async function TenantSiteHomeServer({ tenantId }: TenantSiteHomeServerProps) {
  const upcomingEvents = await getTenantUpcomingEvents(tenantId);
  
  return <TenantSiteHome upcomingEvents={upcomingEvents} />;
}
