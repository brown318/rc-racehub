'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, ShoppingCart } from 'lucide-react'
import { useTenant } from '@/lib/tenant-context'
import { urlFor } from '@/lib/sanity'

export function TenantSiteHome() {
  const { tenant } = useTenant()

  if (!tenant) return null

  // Extract theme colors with fallbacks
  const primaryColor = tenant.theme?.primaryColor || '#f97316' // orange-500
  const secondaryColor = tenant.theme?.secondaryColor || '#1f2937' // gray-800
  const accentColor = tenant.theme?.accentColor || '#059669' // emerald-600

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}08, ${secondaryColor}08)`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Logo */}
            {tenant.logo ? (
              <div className="mb-8 flex justify-center">
                <div className="relative w-full max-w-xs h-32 sm:h-40 md:h-48">
                  <Image
                    src={urlFor(tenant.logo).width(400).height(300).fit('max').url()}
                    alt={`${tenant.name} logo`}
                    fill
                    className="object-contain rounded-lg shadow-lg"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 384px"
                  />
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <div
                  className="mx-auto w-48 h-48 rounded-lg shadow-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}30)`
                  }}
                >
                  <div className="text-center">
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color: primaryColor }}
                    >
                      {tenant.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </div>
                    <div
                      className="text-xs font-medium"
                      style={{ color: `${primaryColor}CC` }}
                    >
                      {tenant.name}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to {tenant.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your premier destination for RC racing excitement, competition, and community.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              asChild
              style={{
                backgroundColor: primaryColor,
                borderColor: primaryColor,
                color: 'white'
              }}
              className="hover:opacity-90"
            >
              <Link href="/events">View Events</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              style={{
                borderColor: secondaryColor,
                color: secondaryColor
              }}
              className="hover:bg-gray-50"
            >
              <Link href="/results">Race Results</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              style={{
                borderColor: accentColor,
                color: accentColor
              }}
              className="hover:bg-gray-50"
            >
              <Link href="/shop">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shop Parts
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <Button
              variant="outline"
              asChild
              style={{
                borderColor: primaryColor,
                color: primaryColor
              }}
              className="hover:bg-gray-50"
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-medium px-2.5 py-0.5 rounded"
                    style={{
                      backgroundColor: `${accentColor}20`,
                      color: accentColor
                    }}
                  >
                    Registration Open
                  </span>
                  <Calendar className="w-5 h-5" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Winter Championship Series - Round 1</h3>
                <p className="text-sm text-gray-600 mb-4">December 14, 2024 at 9:00 AM</p>
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Stock 13.5T</span>
                    <span className="text-gray-600">$25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Modified 2WD</span>
                    <span className="text-gray-600">$30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Modified 4WD</span>
                    <span className="text-gray-600">$30</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-full"
                  style={{
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    color: 'white'
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-medium px-2.5 py-0.5 rounded"
                    style={{
                      backgroundColor: `${secondaryColor}20`,
                      color: secondaryColor
                    }}
                  >
                    Upcoming
                  </span>
                  <Calendar className="w-5 h-5" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">New Year Bash Race</h3>
                <p className="text-sm text-gray-600 mb-4">January 4, 2025 at 10:00 AM</p>
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Novice Stock</span>
                    <span className="text-gray-600">$20</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Expert Stock</span>
                    <span className="text-gray-600">$25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Open Modified</span>
                    <span className="text-gray-600">$35</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-full"
                  style={{
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    color: 'white'
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-medium px-2.5 py-0.5 rounded"
                    style={{
                      backgroundColor: `${secondaryColor}20`,
                      color: secondaryColor
                    }}
                  >
                    Upcoming
                  </span>
                  <Calendar className="w-5 h-5" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Spring Kickoff Classic</h3>
                <p className="text-sm text-gray-600 mb-4">March 15, 2025 at 9:00 AM</p>
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Stock Touring</span>
                    <span className="text-gray-600">$25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Modified Touring</span>
                    <span className="text-gray-600">$30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Formula 1</span>
                    <span className="text-gray-600">$35</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-full"
                  style={{
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    color: 'white'
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Button
              variant="outline"
              asChild
              style={{
                borderColor: primaryColor,
                color: primaryColor
              }}
              className="hover:bg-gray-50"
            >
              <Link href="/news">View All Posts</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="w-4 h-4 mr-1" style={{ color: accentColor }} />
                  November 15, 2024
                </div>
                <h3 className="text-lg font-semibold mb-3">Welcome to the 2024-2025 Racing Season!</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We're excited to kick off another amazing season of RC racing with new track improvements,
                  updated timing systems, and expanded concessions.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  style={{
                    borderColor: accentColor,
                    color: accentColor
                  }}
                  className="hover:bg-gray-50"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="w-4 h-4 mr-1" style={{ color: accentColor }} />
                  November 20, 2024
                </div>
                <h3 className="text-lg font-semibold mb-3">Track Safety Reminder: New Pit Rules</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Please review our updated pit area rules and safety protocols to ensure a safe
                  racing environment for everyone.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  style={{
                    borderColor: accentColor,
                    color: accentColor
                  }}
                  className="hover:bg-gray-50"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="w-4 h-4 mr-1" style={{ color: accentColor }} />
                  November 25, 2024
                </div>
                <h3 className="text-lg font-semibold mb-3">Spotlight: Local Racer John Martinez Wins Regional Championship</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Congratulations to John Martinez for his outstanding performance at the regional
                  championship. Read about his racing journey and future plans.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  style={{
                    borderColor: accentColor,
                    color: accentColor
                  }}
                  className="hover:bg-gray-50"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
