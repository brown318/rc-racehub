import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Globe, 
  Palette, 
  ShoppingCart, 
  Calendar, 
  Trophy, 
  Users, 
  BarChart3, 
  Smartphone,
  Shield,
  Zap,
  Settings,
  CreditCard
} from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to Run Your RC Racing Track
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From multi-tenant websites to POS systems, timing integration to e-commerce - 
            RC RaceHub provides all the tools to manage and grow your racing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for RC racing tracks with everything you need in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Multi-Tenant Websites */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Multi-Tenant Websites</h3>
                <p className="text-gray-600 mb-4">
                  Each track gets their own branded website with custom subdomain, 
                  logo, and theme colors. Fully responsive and SEO optimized.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Custom subdomains (yourtrack.racehub.com)</li>
                  <li>• Branded themes and logos</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </CardContent>
            </Card>

            {/* Content Management */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Content Management</h3>
                <p className="text-gray-600 mb-4">
                  Powerful CMS with Sanity Studio for managing events, posts, 
                  promos, and media assets. Easy to use, no technical skills required.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Visual content editor</li>
                  <li>• Event and news management</li>
                  <li>• Media library with CDN</li>
                </ul>
              </CardContent>
            </Card>

            {/* E-Commerce */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">E-Commerce Integration</h3>
                <p className="text-gray-600 mb-4">
                  Sell parts, merchandise, and race entries online. Integrated 
                  inventory management with automatic stock tracking.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Online store with cart</li>
                  <li>• Inventory management</li>
                  <li>• Race entry payments</li>
                </ul>
              </CardContent>
            </Card>

            {/* Event Management */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Event Management</h3>
                <p className="text-gray-600 mb-4">
                  Create and manage racing events with registration, class management, 
                  and automated scheduling. Perfect for series and championships.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Event creation and scheduling</li>
                  <li>• Online registration</li>
                  <li>• Class and heat management</li>
                </ul>
              </CardContent>
            </Card>

            {/* Timing Integration */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Timing & Results</h3>
                <p className="text-gray-600 mb-4">
                  Import timing data from popular systems and display results 
                  with sorting, filtering, and championship standings.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• CSV timing import</li>
                  <li>• Live results display</li>
                  <li>• Championship tracking</li>
                </ul>
              </CardContent>
            </Card>

            {/* Community Features */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Building</h3>
                <p className="text-gray-600 mb-4">
                  Build your racing community with news posts, photo galleries, 
                  and member profiles. Keep racers engaged between events.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• News and announcements</li>
                  <li>• Photo galleries</li>
                  <li>• Member directories</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Business Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional features to help you run your track like a business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">POS System</h3>
                <p className="text-sm text-gray-600">
                  Stripe Terminal integration for in-person sales and race entries
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-gray-600">
                  Track sales, attendance, and engagement with detailed reporting
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Revenue Sharing</h3>
                <p className="text-sm text-gray-600">
                  Automated payout tracking and revenue sharing calculations
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-sm text-gray-600">
                  Enterprise-grade security with PCI compliance and data protection
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Track?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the growing community of RC tracks using RaceHub to streamline 
            operations and grow their racing communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
