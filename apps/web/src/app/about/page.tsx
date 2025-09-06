import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { 
  Heart, 
  Users, 
  Trophy, 
  Zap, 
  Target, 
  Globe,
  Code,
  Rocket,
  Shield,
  Clock
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            🏁 About RC RaceHub
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Built by Racers,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              {" "}for Racers
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're passionate RC racers who understand the challenges of running a track. 
            That's why we built the complete platform to help tracks thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              To empower RC racing tracks with the technology they need to build thriving communities, 
              streamline operations, and grow their business. We believe every track deserves professional 
              tools without the complexity or cost of enterprise solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Community First</h3>
                  <p className="text-gray-600">
                    Every feature we build is designed to strengthen the RC racing community 
                    and bring racers together.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Simple & Powerful</h3>
                  <p className="text-gray-600">
                    Professional-grade tools that are easy to use, so you can focus on 
                    what matters most - racing.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Track Success</h3>
                  <p className="text-gray-600">
                    We measure our success by the growth and prosperity of the tracks 
                    we serve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                From weekend warriors to platform builders
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
                  <p className="text-gray-600 leading-relaxed">
                    As RC racers ourselves, we experienced firsthand the challenges tracks face: 
                    outdated websites, manual registration processes, disconnected systems for 
                    timing and sales, and limited ways to engage the community between race days.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Common Track Challenges:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Outdated or no website presence</li>
                      <li>• Manual race registration processes</li>
                      <li>• Disconnected timing and sales systems</li>
                      <li>• Limited community engagement tools</li>
                      <li>• Complex inventory management</li>
                      <li>• Lack of data insights</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Code className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We decided to build the platform we wished existed - one that would handle 
                    everything from beautiful websites to POS systems, timing integration to 
                    community building, all designed specifically for RC racing tracks.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Our Approach:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• All-in-one integrated platform</li>
                      <li>• Built specifically for RC racing</li>
                      <li>• Easy to use, powerful features</li>
                      <li>• Affordable for tracks of all sizes</li>
                      <li>• Continuous improvement based on feedback</li>
                      <li>• Community-driven development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-gray-600">
                  We're part of the RC racing family and always will be
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">
                  Constantly pushing boundaries to serve tracks better
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Reliability</h3>
                <p className="text-sm text-gray-600">
                  Your track depends on us, and we take that seriously
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm text-gray-600">
                  Real people, real help, when you need it most
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Growing Together
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              The numbers that show our impact on the RC racing community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Tracks Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Racers Connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">Race Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to take your track to the next level and strengthen 
            the RC racing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
