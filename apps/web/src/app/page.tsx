import { headers } from "next/headers";
import { getTenantFromHost } from "@/lib/utils";
import { client, TENANT_QUERY } from "@/lib/sanity";
import { MainSiteHome } from '@/components/main-site-home'
import { TenantSiteHome } from '@/components/tenant-site-home'

// Fetch upcoming events for a tenant
async function getTenantUpcomingEvents(tenantId: string) {
  try {
    const events = await client.fetch(`
      *[_type == "event" && tenant._ref == $tenantId && (status == "published" || status == "upcoming" || status == "registration_open") && eventDate >= now()] | order(eventDate asc)[0...3] {
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
        registrationOpen,
        status
      }
    `, { tenantId });

    return events || [];
  } catch (error) {
    console.error('Error fetching tenant events:', error);
    return [];
  }
}

export default async function Home() {
  // Get tenant from subdomain (for root-level routing)
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const subdomain = getTenantFromHost(host);
  const isMainSite = !subdomain;

  if (isMainSite) {
    return <MainSiteHome />;
  }

  // Fetch tenant data for subdomain routing
  let tenant = null;
  let upcomingEvents = [];

  try {
    tenant = await client.fetch(TENANT_QUERY, { subdomain });
    if (tenant) {
      upcomingEvents = await getTenantUpcomingEvents(tenant._id);
    }
  } catch (error) {
    console.error('Error fetching tenant:', error);
  }

  // If we have a subdomain but no tenant, show not found
  if (!tenant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Site Not Found</h1>
          <p className="text-gray-600 mb-8">The requested site could not be found.</p>
          <a
            href="http://localhost:3000"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            Visit RC RaceHub
          </a>
        </div>
      </div>
    )
  }

  return <TenantSiteHome upcomingEvents={upcomingEvents} />
}
