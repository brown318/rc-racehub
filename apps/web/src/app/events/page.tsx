import { client, TENANT_QUERY } from "@/lib/sanity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { headers } from "next/headers";
import { getTenantFromHost } from "@/lib/utils";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  DollarSign,
  Trophy,
  ArrowRight,
  Filter,
  Search
} from "lucide-react";

// Fetch events for a specific tenant
async function getTenantEvents(tenantId: string) {
  try {
    const events = await client.fetch(`
      *[_type == "event" && tenant._ref == $tenantId && (status == "published" || status == "upcoming" || status == "registration_open")] | order(eventDate asc) {
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
        status,
        featured,
        image {
          asset-> {
            url,
            altText
          }
        }
      }
    `, { tenantId });
    
    return events || [];
  } catch (error) {
    console.error('Error fetching tenant events:', error);
    return [];
  }
}

// Get event status based on date
function getEventStatus(eventDate: string) {
  const today = new Date();
  const event = new Date(eventDate);

  if (event < today) {
    return { status: 'past', label: 'Past Event', color: 'bg-gray-100 text-gray-600' };
  } else if (event.toDateString() === today.toDateString()) {
    return { status: 'today', label: 'Today', color: 'bg-green-100 text-green-700' };
  } else {
    return { status: 'upcoming', label: 'Upcoming', color: 'bg-blue-100 text-blue-700' };
  }
}

// Extract text from Portable Text blocks
function extractTextFromPortableText(blocks: any): string {
  if (!blocks || !Array.isArray(blocks)) return '';

  return blocks
    .map((block: any) => {
      if (block._type === 'block' && block.children) {
        return block.children
          .map((child: any) => child.text || '')
          .join('');
      }
      return '';
    })
    .join(' ')
    .trim();
}

export default async function EventsPage() {
  // Get tenant from subdomain
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const subdomain = getTenantFromHost(host);
  
  if (!subdomain) {
    // If no subdomain, redirect to main site
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Events</h1>
          <p className="text-gray-600 mb-8">Please access events through a specific track subdomain.</p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Fetch tenant data
  let tenant = null;
  try {
    tenant = await client.fetch(TENANT_QUERY, { subdomain });
  } catch (error) {
    console.error('Error fetching tenant:', error);
  }

  if (!tenant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tenant Not Found</h1>
          <p className="text-gray-600 mb-8">The tenant "{subdomain}" could not be found.</p>
        </div>
      </div>
    );
  }

  const events = await getTenantEvents(tenant._id);
  const upcomingEvents = events.filter(event => getEventStatus(event.eventDate).status === 'upcoming');
  const pastEvents = events.filter(event => getEventStatus(event.eventDate).status === 'past');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Racing Events
            </h1>
            <p className="text-xl text-gray-600">
              Join us for exciting RC racing events at {tenant.name}
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
        
        {/* Event Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{upcomingEvents.length}</div>
                  <div className="text-sm text-gray-600">Upcoming Events</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Trophy className="w-8 h-8 text-orange-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{pastEvents.length}</div>
                  <div className="text-sm text-gray-600">Past Events</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{events.length}</div>
                  <div className="text-sm text-gray-600">Total Events</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => {
              const eventStatus = getEventStatus(event.eventDate);
              return (
                <Card key={event._id} className="hover:shadow-lg transition-shadow">
                  {event.image && (
                    <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                      <img
                        src={event.image.asset.url}
                        alt={event.image.asset.altText || event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <Badge className={eventStatus.color}>
                        {eventStatus.label}
                      </Badge>
                    </div>
                    {event.featured && (
                      <Badge className="bg-orange-100 text-orange-700 w-fit">
                        Featured
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.eventDate).toLocaleDateString()}
                      </div>
                      {event.eventTime && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.eventTime}
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {typeof event.location === 'string' ? event.location : event.location.name || event.location.address}
                        </div>
                      )}
                      {event.entryFee && (
                        <div className="flex items-center text-sm text-gray-600">
                          <DollarSign className="w-4 h-4 mr-2" />
                          ${event.entryFee}
                        </div>
                      )}
                      {event.maxParticipants && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {event.currentParticipants || 0}/{event.maxParticipants} registered
                        </div>
                      )}
                    </div>
                    
                    {event.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {extractTextFromPortableText(event.description)}
                      </p>
                    )}
                    
                    <Button className="w-full" asChild>
                      <Link href={`/events/${event.slug.current}`}>
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.slice(0, 6).map((event) => {
              const eventStatus = getEventStatus(event.eventDate);
              return (
                <Card key={event._id} className="opacity-75 hover:opacity-100 transition-opacity">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <Badge className={eventStatus.color}>
                        {eventStatus.label}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.eventDate).toLocaleDateString()}
                      </div>
                      {event.location && (
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {typeof event.location === 'string' ? event.location : event.location.name || event.location.address}
                        </div>
                      )}
                    </div>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/results/${event.slug.current}`}>
                        View Results
                        <Trophy className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {pastEvents.length > 6 && (
            <div className="text-center mt-8">
              <Button variant="outline">
                View All Past Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      )}

      {/* No Events State */}
      {events.length === 0 && (
        <div className="text-center py-16">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            No Events Scheduled
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            There are currently no racing events scheduled. Check back soon for upcoming races and competitions!
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
