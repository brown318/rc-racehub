import { client, TENANT_QUERY } from "@/lib/sanity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { headers } from "next/headers";
import { getTenantFromHost } from "@/lib/utils";
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Medal,
  Clock,
  ArrowRight,
  Download,
  Filter,
  Search
} from "lucide-react";

// Fetch race results for a specific tenant
async function getTenantResults(tenantId: string) {
  try {
    // For now, we'll return mock data since results schema isn't implemented yet
    // In the future, this would query actual race results from Sanity
    const mockResults = [
      {
        _id: '1',
        eventTitle: 'Spring Championship Race',
        eventDate: '2024-03-15',
        location: 'Main Track',
        categories: ['1/10 Touring', '1/8 Buggy', 'Short Course'],
        totalParticipants: 45,
        status: 'completed',
        featured: true
      },
      {
        _id: '2', 
        eventTitle: 'Weekly Club Race #8',
        eventDate: '2024-03-08',
        location: 'Practice Track',
        categories: ['1/10 Touring', 'Novice'],
        totalParticipants: 28,
        status: 'completed',
        featured: false
      },
      {
        _id: '3',
        eventTitle: 'Winter Series Final',
        eventDate: '2024-02-28',
        location: 'Main Track',
        categories: ['1/10 Touring', '1/8 Buggy', 'Short Course', 'Drift'],
        totalParticipants: 62,
        status: 'completed',
        featured: true
      }
    ];
    
    return mockResults;
  } catch (error) {
    console.error('Error fetching tenant results:', error);
    return [];
  }
}

export default async function ResultsPage() {
  // Get tenant from subdomain
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const subdomain = getTenantFromHost(host);
  
  if (!subdomain) {
    // If no subdomain, redirect to main site
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Results</h1>
          <p className="text-gray-600 mb-8">Please access results through a specific track subdomain.</p>
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

  const results = await getTenantResults(tenant._id);
  const featuredResults = results.filter(result => result.featured);
  const recentResults = results.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Race Results
            </h1>
            <p className="text-xl text-gray-600">
              View race results and standings from {tenant.name}
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
        
        {/* Results Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{results.length}</div>
                  <div className="text-sm text-gray-600">Total Events</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {results.reduce((sum, result) => sum + result.totalParticipants, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Racers</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Medal className="w-8 h-8 text-orange-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{featuredResults.length}</div>
                  <div className="text-sm text-gray-600">Championships</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {results.length > 0 ? new Date(results[0].eventDate).toLocaleDateString('en-US', { month: 'short' }) : 'N/A'}
                  </div>
                  <div className="text-sm text-gray-600">Latest Race</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Featured Results */}
      {featuredResults.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Championship Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredResults.map((result) => (
              <Card key={result._id} className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{result.eventTitle}</CardTitle>
                    <Badge className="bg-yellow-100 text-yellow-700">
                      <Trophy className="w-3 h-3 mr-1" />
                      Championship
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(result.eventDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {result.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {result.totalParticipants} participants
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Categories:</div>
                    <div className="flex flex-wrap gap-2">
                      {result.categories.map((category, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link href={`/results/${result._id}`}>
                        View Results
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Recent Results */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentResults.map((result) => (
            <Card key={result._id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg">{result.eventTitle}</CardTitle>
                  {result.featured && (
                    <Badge className="bg-yellow-100 text-yellow-700">
                      <Trophy className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(result.eventDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {result.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {result.totalParticipants} participants
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Categories:</div>
                  <div className="flex flex-wrap gap-1">
                    {result.categories.slice(0, 2).map((category, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                    {result.categories.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{result.categories.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1" variant="outline" asChild>
                    <Link href={`/results/${result._id}`}>
                      View Results
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* No Results State */}
      {results.length === 0 && (
        <div className="text-center py-16">
          <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            No Results Available
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            There are currently no race results available. Results will appear here after events are completed.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/events">View Upcoming Events</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Want to Race with Us?</h3>
        <p className="text-lg mb-6 opacity-90">
          Join our racing community and compete in exciting RC events!
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="secondary">
            <Link href="/events">View Upcoming Events</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
