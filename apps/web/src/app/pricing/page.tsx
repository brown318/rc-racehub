import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  CreditCard,
  BarChart3,
  Headphones
} from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            💰 Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include our core features 
            with no hidden fees or setup costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Starter Plan */}
            <Card className="relative border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  Free
                </div>
                <p className="text-gray-600">Perfect for getting started</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>1 Track Website</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic Content Management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Event Listings</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Results Display</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Community Support</span>
                  </li>
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-500">E-commerce</span>
                  </li>
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-500">POS Integration</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/signup?plan=starter">Get Started Free</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="relative border-2 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Professional</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $49
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Everything you need to grow</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Everything in Starter</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Full E-commerce Store</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Inventory Management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Online Race Registration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom Branding</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Email Support</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                  <Link href="/signup?plan=professional">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $149
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">For large tracks and chains</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Multiple Locations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>POS Terminal Integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced Reporting</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>API Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom Integrations</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?plan=enterprise">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 border-b">
                <div className="font-semibold">Features</div>
                <div className="text-center font-semibold">Starter</div>
                <div className="text-center font-semibold">Professional</div>
                <div className="text-center font-semibold">Enterprise</div>
              </div>
              
              {[
                { feature: "Track Websites", starter: "1", pro: "1", enterprise: "Unlimited" },
                { feature: "Content Management", starter: true, pro: true, enterprise: true },
                { feature: "Event Listings", starter: true, pro: true, enterprise: true },
                { feature: "Results Display", starter: true, pro: true, enterprise: true },
                { feature: "E-commerce Store", starter: false, pro: true, enterprise: true },
                { feature: "Inventory Management", starter: false, pro: true, enterprise: true },
                { feature: "POS Integration", starter: false, pro: false, enterprise: true },
                { feature: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Enterprise" },
                { feature: "Support", starter: "Community", pro: "Email", enterprise: "Priority" },
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-6 border-b border-gray-100">
                  <div className="font-medium">{row.feature}</div>
                  <div className="text-center">
                    {typeof row.starter === 'boolean' ? (
                      row.starter ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-400 mx-auto" />
                    ) : (
                      <span className="text-sm">{row.starter}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {typeof row.pro === 'boolean' ? (
                      row.pro ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-400 mx-auto" />
                    ) : (
                      <span className="text-sm">{row.pro}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {typeof row.enterprise === 'boolean' ? (
                      row.enterprise ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-400 mx-auto" />
                    ) : (
                      <span className="text-sm">{row.enterprise}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">How does the free trial work?</h3>
                <p className="text-gray-600">
                  Start with a 14-day free trial of our Professional plan. No credit card required.
                  You can cancel anytime or downgrade to our free Starter plan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.
                  Enterprise customers can also pay by invoice with NET 30 terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-600">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately,
                  and we'll prorate any billing adjustments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Are there any setup fees?</h3>
                <p className="text-gray-600">
                  No setup fees, ever. We believe in transparent pricing with no hidden costs.
                  What you see is what you pay.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">What about transaction fees?</h3>
                <p className="text-gray-600">
                  We don't charge any additional transaction fees. You only pay standard Stripe processing fees
                  (2.9% + 30¢ for online payments) which go directly to the payment processor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Do you offer discounts for multiple tracks?</h3>
                <p className="text-gray-600">
                  Yes! Contact our sales team for volume discounts if you're managing multiple tracks
                  or considering our Enterprise plan.
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of RC tracks already using RaceHub to grow their communities
            and streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
              <Link href="/demo">View Demo</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Questions? <Link href="/contact" className="underline hover:no-underline">Contact our sales team</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
